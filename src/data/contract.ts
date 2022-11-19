/* eslint-disable sonarjs/no-duplicate-string */
import { AbiItem } from 'web3-utils';

export const abi: AbiItem[] = [
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' },
			{
				indexed: false,
				internalType: 'enum Shared.Status',
				name: 'status',
				type: 'uint8',
			},
		],
		name: 'ChangeRequestStatus',
		type: 'event',
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
			},
		],
		name: 'ChangeRole',
		type: 'event',
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
			{ indexed: false, internalType: 'uint256', name: 'id', type: 'uint256' },
		],
		name: 'ChangeTransferStatus',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: false, internalType: 'string', name: 'name', type: 'string' },
		],
		name: 'NewCategory',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				components: [
					{ internalType: 'uint256', name: 'id', type: 'uint256' },
					{ internalType: 'address', name: 'candidate', type: 'address' },
					{
						internalType: 'address[]',
						name: 'accept_voter',
						type: 'address[]',
					},
					{ internalType: 'address', name: 'cancel_voter', type: 'address' },
					{ internalType: 'enum Shared.Status', name: 'status', type: 'uint8' },
				],
				indexed: false,
				internalType: 'struct Requests.Request',
				name: 'request',
				type: 'tuple',
			},
		],
		name: 'NewRequest',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				components: [
					{ internalType: 'uint256', name: 'id', type: 'uint256' },
					{ internalType: 'string', name: 'name', type: 'string' },
					{ internalType: 'uint256', name: 'category_id', type: 'uint256' },
					{ internalType: 'uint256', name: 'money', type: 'uint256' },
				],
				indexed: false,
				internalType: 'struct Samples.Sample',
				name: 'sample',
				type: 'tuple',
			},
		],
		name: 'NewSample',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				components: [
					{ internalType: 'uint256', name: 'id', type: 'uint256' },
					{ internalType: 'address payable', name: 'sender', type: 'address' },
					{
						internalType: 'address payable',
						name: 'receiver',
						type: 'address',
					},
					{ internalType: 'uint256', name: 'category_id', type: 'uint256' },
					{ internalType: 'uint256', name: 'money', type: 'uint256' },
					{ internalType: 'string', name: 'description', type: 'string' },
					{ internalType: 'bytes32', name: 'keyword', type: 'bytes32' },
					{ internalType: 'enum Shared.Status', name: 'status', type: 'uint8' },
					{ internalType: 'uint256', name: 'sended_at', type: 'uint256' },
					{ internalType: 'uint256', name: 'finished_at', type: 'uint256' },
				],
				indexed: false,
				internalType: 'struct Transfers.Transfer',
				name: 'transfer',
				type: 'tuple',
			},
		],
		name: 'NewTransfer',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'login',
				type: 'address',
			},
		],
		name: 'NewUser',
		type: 'event',
	},
	{
		inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
		name: 'accept_request',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint256', name: 'id', type: 'uint256' },
			{ internalType: 'bytes32', name: 'keyword', type: 'bytes32' },
		],
		name: 'accept_transfer',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
		name: 'cancel_transfer',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
		name: 'cancel_vote',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'string', name: 'name', type: 'string' }],
		name: 'create_category',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'address', name: 'candidate', type: 'address' }],
		name: 'create_requests',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'string', name: 'name', type: 'string' },
			{ internalType: 'uint256', name: 'category_id', type: 'uint256' },
			{ internalType: 'uint256', name: 'money', type: 'uint256' },
		],
		name: 'create_sample',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'address payable', name: 'receiver', type: 'address' },
			{ internalType: 'uint256', name: 'category_id', type: 'uint256' },
			{ internalType: 'bytes32', name: 'keyword', type: 'bytes32' },
			{ internalType: 'string', name: 'description', type: 'string' },
		],
		name: 'create_transfer',
		outputs: [
			{
				components: [
					{ internalType: 'uint256', name: 'id', type: 'uint256' },
					{ internalType: 'address payable', name: 'sender', type: 'address' },
					{
						internalType: 'address payable',
						name: 'receiver',
						type: 'address',
					},
					{ internalType: 'uint256', name: 'category_id', type: 'uint256' },
					{ internalType: 'uint256', name: 'money', type: 'uint256' },
					{ internalType: 'string', name: 'description', type: 'string' },
					{ internalType: 'bytes32', name: 'keyword', type: 'bytes32' },
					{ internalType: 'enum Shared.Status', name: 'status', type: 'uint8' },
					{ internalType: 'uint256', name: 'sended_at', type: 'uint256' },
					{ internalType: 'uint256', name: 'finished_at', type: 'uint256' },
				],
				internalType: 'struct Transfers.Transfer',
				name: '',
				type: 'tuple',
			},
		],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'get_categories',
		outputs: [{ internalType: 'string[]', name: '', type: 'string[]' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'get_requests',
		outputs: [
			{
				components: [
					{ internalType: 'uint256', name: 'id', type: 'uint256' },
					{ internalType: 'address', name: 'candidate', type: 'address' },
					{
						internalType: 'address[]',
						name: 'accept_voter',
						type: 'address[]',
					},
					{ internalType: 'address', name: 'cancel_voter', type: 'address' },
					{ internalType: 'enum Shared.Status', name: 'status', type: 'uint8' },
				],
				internalType: 'struct Requests.Request[]',
				name: '',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'get_samples',
		outputs: [
			{
				components: [
					{ internalType: 'uint256', name: 'id', type: 'uint256' },
					{ internalType: 'string', name: 'name', type: 'string' },
					{ internalType: 'uint256', name: 'category_id', type: 'uint256' },
					{ internalType: 'uint256', name: 'money', type: 'uint256' },
				],
				internalType: 'struct Samples.Sample[]',
				name: '',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'get_transfers',
		outputs: [
			{
				components: [
					{ internalType: 'uint256', name: 'id', type: 'uint256' },
					{ internalType: 'address payable', name: 'sender', type: 'address' },
					{
						internalType: 'address payable',
						name: 'receiver',
						type: 'address',
					},
					{ internalType: 'uint256', name: 'category_id', type: 'uint256' },
					{ internalType: 'uint256', name: 'money', type: 'uint256' },
					{ internalType: 'string', name: 'description', type: 'string' },
					{ internalType: 'bytes32', name: 'keyword', type: 'bytes32' },
					{ internalType: 'enum Shared.Status', name: 'status', type: 'uint8' },
					{ internalType: 'uint256', name: 'sended_at', type: 'uint256' },
					{ internalType: 'uint256', name: 'finished_at', type: 'uint256' },
				],
				internalType: 'struct Transfers.Transfer[]',
				name: '',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'address', name: 'login', type: 'address' }],
		name: 'get_user',
		outputs: [
			{
				components: [
					{ internalType: 'address', name: 'login', type: 'address' },
					{ internalType: 'bytes32', name: 'password', type: 'bytes32' },
					{ internalType: 'enum Users.Roles', name: 'role', type: 'uint8' },
				],
				internalType: 'struct Users.User',
				name: '',
				type: 'tuple',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'get_user_addresses',
		outputs: [{ internalType: 'address[]', name: '', type: 'address[]' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'bytes32', name: 'password', type: 'bytes32' }],
		name: 'login_user',
		outputs: [
			{
				components: [
					{ internalType: 'address', name: 'login', type: 'address' },
					{ internalType: 'bytes32', name: 'password', type: 'bytes32' },
					{ internalType: 'enum Users.Roles', name: 'role', type: 'uint8' },
				],
				internalType: 'struct Users.User',
				name: '',
				type: 'tuple',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'bytes32', name: 'password', type: 'bytes32' }],
		name: 'reg_user',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
];
