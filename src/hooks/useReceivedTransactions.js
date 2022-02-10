import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTransactionThunk } from "../models/transactions";

export const useReceivedTransactions = () => {
	const transactions = useSelector((state) => state.transactions.received);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!transactions.length) {
			dispatch(loadTransactionThunk());
		}
	}, [transactions.length, dispatch]);

	return transactions;
};
