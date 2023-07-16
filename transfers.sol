pragma solidity >=0.8.0 <0.8.20;
pragma abicoder v2;

contract Shared {
	enum Status {
		pending,
		accept,
		cancel
	}

	function hash(string memory str) public pure returns (bytes32) {
		return keccak256(abi.encodePacked(str));
	}
}

contract Users is Shared {
	enum Roles {
		user,
		admin
	}

	struct User {
		address login;
		bytes32 password;
		Roles role;
	}

	uint256 admin_count;
	User[] users;
	mapping(address => uint256) public user_ids;

	event NewUser(address login);
	event ChangeRole(address indexed login, Roles role);

	modifier is_reg(address login) {
		uint256 id = user_ids[login];
		require(users[id].login == login, 'You have not registered yet');
		_;
	}

	modifier is_not_reg(address login) {
		uint256 id = user_ids[login];
		require(users[id].login != login, 'You have already registered');
		_;
	}

	modifier role_guard(address login, Roles role) {
		require(users[user_ids[login]].role == role, 'Your role is not allowed');
		_;
	}

	constructor() {
		_create_user(msg.sender, hash('password'), Roles.admin);
	}

	function get_users() external view returns (User[] memory) {
		return users;
	}

	function get_user(
		address login
	) external view is_reg(login) returns (User memory) {
		return users[user_ids[login]];
	}

	function registration(
		bytes32 password
	) external is_not_reg(msg.sender) returns (User memory) {
		return _create_user(msg.sender, password, Roles.user);
	}

	function login(
		bytes32 password
	) external view is_reg(msg.sender) returns (User memory) {
		require(
			users[user_ids[msg.sender]].password == password,
			'Password is incorrect'
		);
		return users[user_ids[msg.sender]];
	}

	function _create_user(
		address login,
		bytes32 password,
		Roles role
	) private returns (User memory) {
		users.push(User({ login: login, password: password, role: role }));
		user_ids[login] = users.length - 1;
		if (role == Roles.admin) {
			admin_count += 1;
		}
		emit NewUser(login);
	}

	function _change_role(address login, Roles role) internal {
		users[user_ids[login]].role = role;
		if (role == Roles.admin) {
			admin_count += 1;
		}
		emit ChangeRole(login, role);
	}
}

contract Categories is Users {
	struct Category {
		uint256 id;
		string name;
	}

	Category[] categories;

	event NewCategory(Category category);

	constructor() {
		_create_category('Personal transfer');
		_create_category('Rent pay');
		_create_category('Personal repayment');
	}

	function get_categories() external view returns (Category[] memory) {
		return categories;
	}

	function create_category(
		string memory name
	) external role_guard(msg.sender, Roles.admin) {
		_create_category(name);
	}

	function _create_category(
		string memory name
	) private returns (string memory) {
		uint256 id = categories.length;
		Category memory category = Category({ id: id, name: name });
		categories.push(category);
		emit NewCategory(category);
	}
}

contract Samples is Users {
	struct Sample {
		uint256 id;
		string name;
		uint256 category_id;
		uint256 money; //In wei
	}

	Sample[] samples;

	event NewSample(Sample sample);

	constructor() {
		_create_sample('present10', 0, 10 ether);
		_create_sample('present30', 0, 30 ether);
		_create_sample('present50', 0, 50 ether);
		_create_sample('rent70', 1, 70 ether);
		_create_sample('rent90', 1, 90 ether);
		_create_sample('debtrepayment', 2, 100 ether);
	}

	function get_samples() external view returns (Sample[] memory) {
		return samples;
	}

	function create_sample(
		string memory name,
		uint256 category_id,
		uint256 money
	) external role_guard(msg.sender, Roles.admin) {
		_create_sample(name, category_id, money);
	}

	function _create_sample(
		string memory name,
		uint256 category_id,
		uint256 money
	) private {
		uint256 id = samples.length;
		Sample memory sample = Sample({
			id: id,
			name: name,
			category_id: category_id,
			money: money
		});
		samples.push(sample);
		emit NewSample(sample);
	}
}

contract Transfers is Users {
	struct Transfer {
		uint256 id;
		address payable sender;
		address payable receiver;
		uint256 category_id;
		uint256 money;
		string description;
		bytes32 keyword;
		Status status;
		uint256 sended_at;
		uint256 finished_at;
	}

	Transfer[] transfers;

	event NewTransfer(Transfer transfer);
	event ChangeTransferStatus(
		address indexed sender,
		address indexed receiver,
		uint256 id
	);

	modifier is_sender_or_receiver(uint256 id, address caller) {
		require(
			transfers[id].sender == caller || transfers[id].receiver == caller,
			'You are not a sender'
		);
		_;
	}

	modifier is_receiver(uint256 id, address caller) {
		require(transfers[id].receiver == caller, 'You are not a receiver');
		_;
	}

	modifier is_not_finished_transfer(uint256 id) {
		require(
			transfers[id].status == Status.pending,
			'Transfer has already been finished'
		);
		_;
	}

	function get_transfers() external view returns (Transfer[] memory) {
		return transfers;
	}

	function get_transfer(uint256 id) external view returns (Transfer memory) {
		return transfers[id];
	}

	function create_transfer(
		address payable receiver,
		uint256 category_id,
		bytes32 keyword,
		string memory description
	) external payable is_reg(receiver) returns (Transfer memory) {
		require(receiver != msg.sender, 'Use different address');
		require(msg.value > 0, 'You have not a money');
		return
			_create_transfer(
				payable(msg.sender),
				receiver,
				category_id,
				msg.value,
				description,
				keyword
			);
	}

	function accept_transfer(
		uint256 id,
		bytes32 keyword
	)
		external
		is_reg(msg.sender)
		is_receiver(id, msg.sender)
		is_not_finished_transfer(id)
	{
		require(keyword == transfers[id].keyword, 'Incorrect keyword');
		transfers[id].receiver.transfer(transfers[id].money);
		_finish_transfer(id, Status.accept);
	}

	function cancel_transfer(
		uint256 id
	)
		external
		is_reg(msg.sender)
		is_sender_or_receiver(id, msg.sender)
		is_not_finished_transfer(id)
	{
		transfers[id].sender.transfer(transfers[id].money);
		_finish_transfer(id, Status.cancel);
	}

	function _create_transfer(
		address payable sender,
		address payable receiver,
		uint256 category_id,
		uint256 money,
		string memory description,
		bytes32 keyword
	) private returns (Transfer memory) {
		uint256 id = transfers.length;
		Transfer memory transfer = Transfer({
			id: id,
			sender: sender,
			receiver: receiver,
			category_id: category_id,
			money: money,
			description: description,
			keyword: keyword,
			status: Status.pending,
			sended_at: block.timestamp,
			finished_at: 0
		});
		transfers.push(transfer);
		emit NewTransfer(transfer);
		return transfer;
	}

	function _finish_transfer(uint256 id, Status status) private {
		Transfer memory transfer = transfers[id];
		transfers[id].status = status;
		transfers[id].finished_at = block.timestamp;
		emit ChangeTransferStatus(transfer.sender, transfer.receiver, id);
	}
}

contract Requests is Users {
	struct Request {
		uint256 id;
		address candidate;
		address[] accept_voter;
		address cancel_voter;
		Status status;
	}

	Request[] requests;
	mapping(address => bool) users_on_request;

	event NewRequest(Request request);
	event ChangeRequestStatus(uint256 indexed id, Status status);

	modifier is_not_on_request(address login) {
		require(!users_on_request[login], 'User is already on request');
		_;
	}

	modifier is_not_finished_request(uint256 id) {
		require(
			requests[id].status == Status.pending,
			'This requests has already been finished'
		);
		_;
	}

	modifier is_not_vote(uint256 id) {
		bool flag = true;
		address[] memory accept_voter = requests[id].accept_voter;
		for (uint256 i = 0; i < accept_voter.length; i++) {
			if (accept_voter[i] == msg.sender) {
				flag = false;
				break;
			}
		}
		require(flag, 'You have already vote');
		_;
	}

	function get_requests() external view returns (Request[] memory) {
		return requests;
	}

	function create_request(
		address candidate
	)
		external
		role_guard(msg.sender, Roles.admin)
		is_reg(candidate)
		role_guard(candidate, Roles.user)
		is_not_on_request(candidate)
	{
		Request memory request = _create_request(candidate);
		_check_request(request.id);
	}

	function accept_request(
		uint256 id
	)
		external
		role_guard(msg.sender, Roles.admin)
		is_not_finished_request(id)
		is_not_vote(id)
	{
		requests[id].accept_voter.push(msg.sender);
		_check_request(id);
	}

	function cancel_request(
		uint256 id
	)
		external
		role_guard(msg.sender, Roles.admin)
		is_not_finished_request(id)
		is_not_vote(id)
	{
		requests[id].cancel_voter = msg.sender;
		_check_request(id);
	}

	function _create_request(address candidate) private returns (Request memory) {
		uint256 id = requests.length;
		address[] memory addressArray;
		Request memory request = Request({
			id: id,
			candidate: candidate,
			accept_voter: addressArray,
			cancel_voter: address(0),
			status: Status.pending
		});
		requests.push(request);
		users_on_request[candidate] = true;
		emit NewRequest(request);
	}

	function _check_request(uint256 id) private {
		if (requests[id].cancel_voter != address(0)) {
			return _finish_request(id, Status.cancel);
		}
		if (requests[id].accept_voter.length == admin_count) {
			_change_role(requests[id].candidate, Roles.admin);
			return _finish_request(id, Status.accept);
		}
	}

	function _finish_request(uint256 id, Status status) private {
		requests[id].status = status;
		users_on_request[requests[id].candidate] = false;
		emit ChangeRequestStatus(id, status);
	}
}

contract Total is Shared, Users, Categories, Samples, Transfers, Requests {}
