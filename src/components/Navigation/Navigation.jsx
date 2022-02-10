import { List } from "../List";
import { NavigationItem } from "../NavigationItem";

const navigation = [
	{
		to: "/",
		label: "Transactions",
	},
	{
		to: "/profile",
		label: "Profile",
	},
];

export const Navigation = () => {
	return (
		<nav>
			<List items={navigation} Card={NavigationItem} indexedBy="to" />
		</nav>
	);
};
