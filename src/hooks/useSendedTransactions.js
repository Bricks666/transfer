import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTransactionThunk } from "../models/transactions";

export const useSendedTransactions = () => {
	const transactions = useSelector((state) => state.transactions.sended);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!transactions.length) {
			dispatch(loadTransactionThunk());
		}
	}, [transactions.length, dispatch]);

	return transactions;
};
