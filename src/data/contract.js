export const address = "0x7C9e3Ce6f4d7e03EBEf1Ee412BB90486DA467Ac6";
export const abi = [
	{
		inputs: [],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "transfer_num",
				type: "uint256",
			},
			{
				internalType: "string",
				name: "keyword",
				type: "string",
			},
		],
		name: "acc_transfer",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "name_category",
				type: "string",
			},
		],
		name: "add_category",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "address_user",
				type: "address",
			},
		],
		name: "add_offer_admin",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "name_sample",
				type: "string",
			},
			{
				internalType: "uint256",
				name: "id_category",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "count",
				type: "uint256",
			},
		],
		name: "add_sample",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "admin_count",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "transfer_num",
				type: "uint256",
			},
		],
		name: "cancel_transfer",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "category",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "id_offer",
				type: "uint256",
			},
		],
		name: "check_offer",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "get_categories",
		outputs: [
			{
				internalType: "string[]",
				name: "",
				type: "string[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "get_transfers",
		outputs: [
			{
				components: [
					{
						internalType: "uint256",
						name: "transfer_num",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "time_transaction",
						type: "uint256",
					},
					{
						internalType: "address payable",
						name: "owner_address",
						type: "address",
					},
					{
						internalType: "uint256",
						name: "id_category",
						type: "uint256",
					},
					{
						internalType: "bytes32",
						name: "keyword",
						type: "bytes32",
					},
					{
						internalType: "address payable",
						name: "recipient_address",
						type: "address",
					},
					{
						internalType: "uint256",
						name: "count",
						type: "uint256",
					},
					{
						internalType: "bool",
						name: "status",
						type: "bool",
					},
					{
						internalType: "string",
						name: "description",
						type: "string",
					},
				],
				internalType: "struct Transfer.Money_transfer[]",
				name: "",
				type: "tuple[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "login_user",
		outputs: [],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "money_transfer",
		outputs: [
			{
				internalType: "uint256",
				name: "transfer_num",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "time_transaction",
				type: "uint256",
			},
			{
				internalType: "address payable",
				name: "owner_address",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "id_category",
				type: "uint256",
			},
			{
				internalType: "bytes32",
				name: "keyword",
				type: "bytes32",
			},
			{
				internalType: "address payable",
				name: "recipient_address",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "count",
				type: "uint256",
			},
			{
				internalType: "bool",
				name: "status",
				type: "bool",
			},
			{
				internalType: "string",
				name: "description",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "offer_admin",
		outputs: [
			{
				internalType: "address",
				name: "admin_request",
				type: "address",
			},
			{
				internalType: "address",
				name: "admin_against",
				type: "address",
			},
			{
				internalType: "bool",
				name: "finished",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "offer_count",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "reg_user",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		name: "sample",
		outputs: [
			{
				internalType: "string",
				name: "name_sample",
				type: "string",
			},
			{
				internalType: "uint256",
				name: "id_category",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "count",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address payable",
				name: "recipient_address",
				type: "address",
			},
			{
				internalType: "string",
				name: "keyword",
				type: "string",
			},
			{
				internalType: "string",
				name: "description",
				type: "string",
			},
		],
		name: "transferTo",
		outputs: [
			{
				components: [
					{
						internalType: "uint256",
						name: "transfer_num",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "time_transaction",
						type: "uint256",
					},
					{
						internalType: "address payable",
						name: "owner_address",
						type: "address",
					},
					{
						internalType: "uint256",
						name: "id_category",
						type: "uint256",
					},
					{
						internalType: "bytes32",
						name: "keyword",
						type: "bytes32",
					},
					{
						internalType: "address payable",
						name: "recipient_address",
						type: "address",
					},
					{
						internalType: "uint256",
						name: "count",
						type: "uint256",
					},
					{
						internalType: "bool",
						name: "status",
						type: "bool",
					},
					{
						internalType: "string",
						name: "description",
						type: "string",
					},
				],
				internalType: "struct Transfer.Money_transfer",
				name: "",
				type: "tuple",
			},
		],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "name_sample",
				type: "string",
			},
			{
				internalType: "address payable",
				name: "recipient_address",
				type: "address",
			},
			{
				internalType: "string",
				name: "keyword",
				type: "string",
			},
			{
				internalType: "string",
				name: "description",
				type: "string",
			},
			{
				internalType: "uint256",
				name: "payment_comission",
				type: "uint256",
			},
		],
		name: "use_sample",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		name: "user",
		outputs: [
			{
				internalType: "address",
				name: "login",
				type: "address",
			},
			{
				internalType: "bool",
				name: "user",
				type: "bool",
			},
			{
				internalType: "bool",
				name: "admin",
				type: "bool",
			},
			{
				internalType: "bool",
				name: "on_offer",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "id_offer",
				type: "uint256",
			},
		],
		name: "vote_against",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "id_offer",
				type: "uint256",
			},
		],
		name: "vote_for",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
];
