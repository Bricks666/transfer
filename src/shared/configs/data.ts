export const address = '0x42e70d862523f8044eeC199700d4579C25Aeb3d2';
export const abi = [
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'uint256', name: 'id', type: 'uint256', },
			{
				indexed: false,
				internalType: 'enum Shared.Status',
				name: 'status',
				type: 'uint8',
			}
		],
		name: 'ChangeRequestStatus',
		type: 'event',
		signature:
			'0x6a151900d11c7edbc6c35b2eb7e4c5427fa2a408c6edeb0266849bd55558023d',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'login',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'enum Users.Roles',
				name: 'role',
				type: 'uint8',
			}
		],
		name: 'ChangeRole',
		type: 'event',
		signature:
			'0x6b4fd2ad24748431faf8cb62f7c7b2c32f03130144bcdc66c5898a9fd63a6d10',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'sender',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'receiver',
				type: 'address',
			},
			{ indexed: false, internalType: 'uint256', name: 'id', type: 'uint256', }
		],
		name: 'ChangeTransferStatus',
		type: 'event',
		signature:
			'0x347d8064eb72efd3b960be2a8e03c63bf51f97842345b88de713961d7144961b',
	},
	{
		anonymous: false,
		inputs: [
			{
				components: [
					{ internalType: 'uint256', name: 'id', type: 'uint256', },
					{ internalType: 'string', name: 'name', type: 'string', }
				],
				indexed: false,
				internalType: 'struct Categories.Category',
				name: 'category',
				type: 'tuple',
			}
		],
		name: 'NewCategory',
		type: 'event',
		signature:
			'0xa07bfee489b9c60f62fdd9d2f429b7ffe7a524d2c5d1f87e7195682435432526',
	},
	{
		anonymous: false,
		inputs: [
			{
				components: [
					{ internalType: 'uint256', name: 'id', type: 'uint256', },
					{ internalType: 'address', name: 'candidate', type: 'address', },
					{
						internalType: 'address[]',
						name: 'accept_voter',
						type: 'address[]',
					},
					{ internalType: 'address', name: 'cancel_voter', type: 'address', },
					{ internalType: 'enum Shared.Status', name: 'status', type: 'uint8', }
				],
				indexed: false,
				internalType: 'struct Requests.Request',
				name: 'request',
				type: 'tuple',
			}
		],
		name: 'NewRequest',
		type: 'event',
		signature:
			'0x9c40b10f435115128a15d6d6cc8bc5674cfe3eb6e24aacea943ba7cb7f36cdc1',
	},
	{
		anonymous: false,
		inputs: [
			{
				components: [
					{ internalType: 'uint256', name: 'id', type: 'uint256', },
					{ internalType: 'string', name: 'name', type: 'string', },
					{ internalType: 'uint256', name: 'category_id', type: 'uint256', },
					{ internalType: 'uint256', name: 'money', type: 'uint256', }
				],
				indexed: false,
				internalType: 'struct Samples.Sample',
				name: 'sample',
				type: 'tuple',
			}
		],
		name: 'NewSample',
		type: 'event',
		signature:
			'0xec4d7271b344b70b9019eb34dcac4b14c811e829eca28c9d1e1c96f83b4f4797',
	},
	{
		anonymous: false,
		inputs: [
			{
				components: [
					{ internalType: 'uint256', name: 'id', type: 'uint256', },
					{ internalType: 'address payable', name: 'sender', type: 'address', },
					{
						internalType: 'address payable',
						name: 'receiver',
						type: 'address',
					},
					{ internalType: 'uint256', name: 'category_id', type: 'uint256', },
					{ internalType: 'uint256', name: 'money', type: 'uint256', },
					{ internalType: 'string', name: 'description', type: 'string', },
					{ internalType: 'bytes32', name: 'keyword', type: 'bytes32', },
					{ internalType: 'enum Shared.Status', name: 'status', type: 'uint8', },
					{ internalType: 'uint256', name: 'sended_at', type: 'uint256', },
					{ internalType: 'uint256', name: 'finished_at', type: 'uint256', }
				],
				indexed: false,
				internalType: 'struct Transfers.Transfer',
				name: 'transfer',
				type: 'tuple',
			}
		],
		name: 'NewTransfer',
		type: 'event',
		signature:
			'0x3b9ed3de56ff3d9333a3a32ddb324369ec986a85529e65318af1af1ecc581dd6',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'login',
				type: 'address',
			}
		],
		name: 'NewUser',
		type: 'event',
		signature:
			'0x7ee9b70bf129b91a237044ce07c93c79f5562b96b53c04f7edaf7c9d6711f3d8',
	},
	{
		inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256', }],
		name: 'accept_request',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0x9c315b23',
	},
	{
		inputs: [
			{ internalType: 'uint256', name: 'id', type: 'uint256', },
			{ internalType: 'bytes32', name: 'keyword', type: 'bytes32', }
		],
		name: 'accept_transfer',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0xdb845bce',
	},
	{
		inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256', }],
		name: 'cancel_request',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0x72583e49',
	},
	{
		inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256', }],
		name: 'cancel_transfer',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0xdbf9c80a',
	},
	{
		inputs: [{ internalType: 'string', name: 'name', type: 'string', }],
		name: 'create_category',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0x3effbb6a',
	},
	{
		inputs: [{ internalType: 'address', name: 'candidate', type: 'address', }],
		name: 'create_request',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0x496f169e',
	},
	{
		inputs: [
			{ internalType: 'string', name: 'name', type: 'string', },
			{ internalType: 'uint256', name: 'category_id', type: 'uint256', },
			{ internalType: 'uint256', name: 'money', type: 'uint256', }
		],
		name: 'create_sample',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0xd3fce6c1',
	},
	{
		inputs: [
			{ internalType: 'address payable', name: 'receiver', type: 'address', },
			{ internalType: 'uint256', name: 'category_id', type: 'uint256', },
			{ internalType: 'bytes32', name: 'keyword', type: 'bytes32', },
			{ internalType: 'string', name: 'description', type: 'string', }
		],
		name: 'create_transfer',
		outputs: [
			{
				components: [
					{ internalType: 'uint256', name: 'id', type: 'uint256', },
					{ internalType: 'address payable', name: 'sender', type: 'address', },
					{
						internalType: 'address payable',
						name: 'receiver',
						type: 'address',
					},
					{ internalType: 'uint256', name: 'category_id', type: 'uint256', },
					{ internalType: 'uint256', name: 'money', type: 'uint256', },
					{ internalType: 'string', name: 'description', type: 'string', },
					{ internalType: 'bytes32', name: 'keyword', type: 'bytes32', },
					{ internalType: 'enum Shared.Status', name: 'status', type: 'uint8', },
					{ internalType: 'uint256', name: 'sended_at', type: 'uint256', },
					{ internalType: 'uint256', name: 'finished_at', type: 'uint256', }
				],
				internalType: 'struct Transfers.Transfer',
				name: '',
				type: 'tuple',
			}
		],
		stateMutability: 'payable',
		type: 'function',
		payable: true,
		signature: '0x0e0ee410',
	},
	{
		inputs: [],
		name: 'get_categories',
		outputs: [
			{
				components: [
					{ internalType: 'uint256', name: 'id', type: 'uint256', },
					{ internalType: 'string', name: 'name', type: 'string', }
				],
				internalType: 'struct Categories.Category[]',
				name: '',
				type: 'tuple[]',
			}
		],
		stateMutability: 'view',
		type: 'function',
		constant: true,
		signature: '0xfd4ec427',
	},
	{
		inputs: [],
		name: 'get_requests',
		outputs: [
			{
				components: [
					{ internalType: 'uint256', name: 'id', type: 'uint256', },
					{ internalType: 'address', name: 'candidate', type: 'address', },
					{
						internalType: 'address[]',
						name: 'accept_voter',
						type: 'address[]',
					},
					{ internalType: 'address', name: 'cancel_voter', type: 'address', },
					{ internalType: 'enum Shared.Status', name: 'status', type: 'uint8', }
				],
				internalType: 'struct Requests.Request[]',
				name: '',
				type: 'tuple[]',
			}
		],
		stateMutability: 'view',
		type: 'function',
		constant: true,
		signature: '0x455bfbf2',
	},
	{
		inputs: [],
		name: 'get_samples',
		outputs: [
			{
				components: [
					{ internalType: 'uint256', name: 'id', type: 'uint256', },
					{ internalType: 'string', name: 'name', type: 'string', },
					{ internalType: 'uint256', name: 'category_id', type: 'uint256', },
					{ internalType: 'uint256', name: 'money', type: 'uint256', }
				],
				internalType: 'struct Samples.Sample[]',
				name: '',
				type: 'tuple[]',
			}
		],
		stateMutability: 'view',
		type: 'function',
		constant: true,
		signature: '0x9fa8bf96',
	},
	{
		inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256', }],
		name: 'get_transfer',
		outputs: [
			{
				components: [
					{ internalType: 'uint256', name: 'id', type: 'uint256', },
					{ internalType: 'address payable', name: 'sender', type: 'address', },
					{
						internalType: 'address payable',
						name: 'receiver',
						type: 'address',
					},
					{ internalType: 'uint256', name: 'category_id', type: 'uint256', },
					{ internalType: 'uint256', name: 'money', type: 'uint256', },
					{ internalType: 'string', name: 'description', type: 'string', },
					{ internalType: 'bytes32', name: 'keyword', type: 'bytes32', },
					{ internalType: 'enum Shared.Status', name: 'status', type: 'uint8', },
					{ internalType: 'uint256', name: 'sended_at', type: 'uint256', },
					{ internalType: 'uint256', name: 'finished_at', type: 'uint256', }
				],
				internalType: 'struct Transfers.Transfer',
				name: '',
				type: 'tuple',
			}
		],
		stateMutability: 'view',
		type: 'function',
		constant: true,
		signature: '0xb4422571',
	},
	{
		inputs: [],
		name: 'get_transfers',
		outputs: [
			{
				components: [
					{ internalType: 'uint256', name: 'id', type: 'uint256', },
					{ internalType: 'address payable', name: 'sender', type: 'address', },
					{
						internalType: 'address payable',
						name: 'receiver',
						type: 'address',
					},
					{ internalType: 'uint256', name: 'category_id', type: 'uint256', },
					{ internalType: 'uint256', name: 'money', type: 'uint256', },
					{ internalType: 'string', name: 'description', type: 'string', },
					{ internalType: 'bytes32', name: 'keyword', type: 'bytes32', },
					{ internalType: 'enum Shared.Status', name: 'status', type: 'uint8', },
					{ internalType: 'uint256', name: 'sended_at', type: 'uint256', },
					{ internalType: 'uint256', name: 'finished_at', type: 'uint256', }
				],
				internalType: 'struct Transfers.Transfer[]',
				name: '',
				type: 'tuple[]',
			}
		],
		stateMutability: 'view',
		type: 'function',
		constant: true,
		signature: '0x8607d56d',
	},
	{
		inputs: [{ internalType: 'address', name: 'login', type: 'address', }],
		name: 'get_user',
		outputs: [
			{
				components: [
					{ internalType: 'address', name: 'login', type: 'address', },
					{ internalType: 'bytes32', name: 'password', type: 'bytes32', },
					{ internalType: 'enum Users.Roles', name: 'role', type: 'uint8', }
				],
				internalType: 'struct Users.User',
				name: '',
				type: 'tuple',
			}
		],
		stateMutability: 'view',
		type: 'function',
		constant: true,
		signature: '0x71ad7221',
	},
	{
		inputs: [],
		name: 'get_users',
		outputs: [
			{
				components: [
					{ internalType: 'address', name: 'login', type: 'address', },
					{ internalType: 'bytes32', name: 'password', type: 'bytes32', },
					{ internalType: 'enum Users.Roles', name: 'role', type: 'uint8', }
				],
				internalType: 'struct Users.User[]',
				name: '',
				type: 'tuple[]',
			}
		],
		stateMutability: 'view',
		type: 'function',
		constant: true,
		signature: '0xed66aa1b',
	},
	{
		inputs: [{ internalType: 'string', name: 'str', type: 'string', }],
		name: 'hash',
		outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32', }],
		stateMutability: 'pure',
		type: 'function',
		constant: true,
		signature: '0xb411ee94',
	},
	{
		inputs: [{ internalType: 'bytes32', name: 'password', type: 'bytes32', }],
		name: 'login',
		outputs: [
			{
				components: [
					{ internalType: 'address', name: 'login', type: 'address', },
					{ internalType: 'bytes32', name: 'password', type: 'bytes32', },
					{ internalType: 'enum Users.Roles', name: 'role', type: 'uint8', }
				],
				internalType: 'struct Users.User',
				name: '',
				type: 'tuple',
			}
		],
		stateMutability: 'view',
		type: 'function',
		constant: true,
		signature: '0x879281c4',
	},
	{
		inputs: [{ internalType: 'bytes32', name: 'password', type: 'bytes32', }],
		name: 'registration',
		outputs: [
			{
				components: [
					{ internalType: 'address', name: 'login', type: 'address', },
					{ internalType: 'bytes32', name: 'password', type: 'bytes32', },
					{ internalType: 'enum Users.Roles', name: 'role', type: 'uint8', }
				],
				internalType: 'struct Users.User',
				name: '',
				type: 'tuple',
			}
		],
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0x8a2be940',
	},
	{
		inputs: [{ internalType: 'address', name: '', type: 'address', }],
		name: 'user_ids',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256', }],
		stateMutability: 'view',
		type: 'function',
		constant: true,
		signature: '0xcdcb030f',
	}
];
