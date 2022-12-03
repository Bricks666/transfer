import * as React from 'react';
import { useUnit } from 'effector-react';
import { Link, LinkProps } from 'atomic-router-react';
import { authModel, routingModel } from '@/models';
import { List } from '../List';
import { OnlyAdmin } from '../OnlyAdmin';

export const Navigation: React.FC = () => {
	const address = useUnit(authModel.$address);
	const navigation: LinkProps<any>[] = React.useMemo(
		() => [
			{
				to: routingModel.transfersRoute,
				children: 'Transfers',
			},
			{
				to: routingModel.profileRoute,
				params: { address },
				children: 'Profile',
			},
		],
		[address]
	);
	return (
		<nav>
			<List items={navigation} Component={Link} indexedBy='children' />
			<OnlyAdmin>
				<li>
					<Link to={routingModel.categoriesRoute}>Categories</Link>
				</li>
			</OnlyAdmin>
			<OnlyAdmin>
				<li>
					<Link to={routingModel.samplesRoute}>Samples</Link>
				</li>
			</OnlyAdmin>
			<OnlyAdmin>
				<li>
					<Link to={routingModel.requestsRoute}>Requests</Link>
				</li>
			</OnlyAdmin>
			<OnlyAdmin>
				<li>
					<Link to={routingModel.usersRoute}>Users</Link>
				</li>
			</OnlyAdmin>
		</nav>
	);
};
