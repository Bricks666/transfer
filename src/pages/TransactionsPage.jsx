import { Route, Routes } from "react-router-dom";
import { TransactionNavigation } from "../components/TransactionNavigation";
import { SendedTransactions } from "../components/SendedTransactions";
import { CreateTransactionForm } from "../components/CreateTransactionForm";
import { ReceivedTransactions } from "../components/ReceivedTransactions";

export const TransactionsPage = () => {
	return (
		<main>
			<h2>Transactions</h2>
			<TransactionNavigation />
			<Routes>
				<Route
					path="sended"
					element={
						<>
							<CreateTransactionForm />
							<SendedTransactions />
						</>
					}
				/>
				<Route path="received" element={<ReceivedTransactions />} />
			</Routes>
		</main>
	);
};
