import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTransactionThunk } from "../models/transactions";
import { useCategoriesMap } from ".";
import { mapTransactions } from "../utils";

export const useReceivedTransactions = () => {
	const transactions = useSelector((state) => state.transactions.received);
	const categoriesMap = useCategoriesMap();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!transactions.length) {
			dispatch(loadTransactionThunk());
		}
	}, [transactions.length, dispatch]);

	return mapTransactions(transactions, categoriesMap);
};
