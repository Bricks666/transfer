/*
state: {
  isLoading: boolean;
  received: Transaction[]
  sended: Transaction[]
}

Transaction {
  id: number;
  sender: string;
  receiver: string;
  count: number;
  status: boolean
  description: string;
  categoryId: string;
}
*/

import {
	acceptTransactionApi,
	cancelTransactionApi,
	getTransactionsApi,
	sendTransactionApi,
} from "../api";
import {
	getReceivedTransactions,
	getSendedTransactions,
	toValidTransaction,
} from "../utils";

export const SET_TRANSACTIONS = "transfer/transactions/SET_TRANSACTIONS";
export const TOGGLE_LOADING = "transfer/transactions/TOGGLE_LOADING";
export const ADD_SEND_TRANSACTION =
	"transfer/transactions/ADD_SEND_TRANSACTION";
export const CHANGE_STATUS = "transfer/transactions/CHANGE_STATUS";

const initialState = {
	isLoading: false,
	received: [],
	sended: [],
};

const haveTransaction = (transactions, id) =>
	!!transactions.find((transaction) => transaction.id === id);
const finishTransaction = (transactions, id) => {
	return transactions.map((transaction) =>
		transaction.id === id ? { ...transaction, status: true } : transaction
	);
};

export const transactionsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_TRANSACTIONS: {
			return {
				...state,
				received: action.payload.received,
				sended: action.payload.sended,
			};
		}
		case TOGGLE_LOADING: {
			return {
				...state,
				isLoading: action.payload.isLoading,
			};
		}
		case ADD_SEND_TRANSACTION: {
			return {
				...state,
				sended: [...state.sended, action.payload.send],
			};
		}
		case CHANGE_STATUS: {
			const id = action.payload.id;
			const sended = haveTransaction(state.sended, id)
				? finishTransaction(state.sended, id)
				: state.sended;

			const received = haveTransaction(state.received, id)
				? finishTransaction(state.received, id)
				: state.received;
			return {
				...state,
				sended,
				received,
			};
		}
		default: {
			return state;
		}
	}
};

export const setTransactionsAC = (sended, received) => {
	return {
		type: SET_TRANSACTIONS,
		payload: {
			sended,
			received,
		},
	};
};

export const toggleLoadingAC = (isLoading) => {
	return {
		type: TOGGLE_LOADING,
		payload: {
			isLoading,
		},
	};
};

export const addSendTransactionAC = (send) => {
	return {
		type: ADD_SEND_TRANSACTION,
		payload: {
			send,
		},
	};
};

export const changeStatus = (id) => {
	return {
		type: CHANGE_STATUS,
		payload: {
			id,
		},
	};
};

export const loadTransactionThunk = () => {
	return async (dispatch, getState) => {
		try {
			const { address } = getState().auth;

			dispatch(toggleLoadingAC(true));
			const invalidTransactions = await getTransactionsApi();
			const transactions = invalidTransactions.map(toValidTransaction);
			const sended = getSendedTransactions(address, transactions);
			const received = getReceivedTransactions(address, transactions);

			dispatch(setTransactionsAC(sended, received));
		} catch (e) {
			console.log(e);
		} finally {
			dispatch(toggleLoadingAC(false));
		}
	};
};

export const sendTransactionThunk = (
	receiver,
	value,
	keyword,
	description,
	category
) => {
	return async (dispatch, getState) => {
		try {
			const { address } = getState().auth;

			await sendTransactionApi(
				address,
				receiver,
				value,
				keyword,
				description,
				category
			);
		} catch (e) {
			console.log(e);
		}
	};
};

export const acceptTransactionThunk = (id, keyword) => {
	return async (dispatch, getState) => {
		try {
			const { address } = getState().auth;
			await acceptTransactionApi(address, id, keyword);
		} catch (e) {
			console.log(e);
		} finally {
			dispatch(changeStatus(id));
		}
	};
};

export const cancelTransactionThunk = (id) => {
	return async (dispatch, getState) => {
		try {
			const { address } = getState().auth;
			await cancelTransactionApi(address, id);
			dispatch(changeStatus(id));
		} catch (e) {
			console.log(e);
		}
	};
};
