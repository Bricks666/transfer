import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCategoriesMap } from '.';
import { loadTransactionThunk } from '../models/transactions';
import { mapTransactions } from '../utils';

export const useSendedTransactions = () => {
	const transactions = useSelector((state) => state.transactions.sended);
	const categoriesMap = useCategoriesMap();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!transactions.length) {
			dispatch(loadTransactionThunk());
		}
	}, [transactions.length, dispatch]);

	return useMemo(
		() => mapTransactions(transactions, categoriesMap),
		[transactions, categoriesMap]
	);
};
