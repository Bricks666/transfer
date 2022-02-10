import { List } from "../List";
import { NavigationItem } from "../NavigationItem";
import { OnlyAdmin } from "../OnlyAdmin";

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
			<List items={navigation} Card={NavigationItem} indexedBy="to">
				<OnlyAdmin>
					<NavigationItem to="/categories" label="Categories" />
				</OnlyAdmin>
				<OnlyAdmin>
					<NavigationItem to="/samples" label="Samples" />
				</OnlyAdmin>
			</List>
		</nav>
	);
};
