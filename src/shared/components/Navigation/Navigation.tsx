import * as React from 'react';
import { useUnit } from 'effector-react';
import { Link, LinkProps } from 'atomic-router-react';
import { authModel } from '@/shared/models';
import { List } from '../List';
import { OnlyAdmin } from '../OnlyAdmin';
import { routes } from '@/shared/configs';

export const Navigation: React.FC = () => {
	const address = useUnit(authModel.$address);
	const navigation: LinkProps<any>[] = React.useMemo(
		() => [
			{
				to: routes.transfers,
				children: 'Transfers',
			},
			{
				to: routes.profile,
				params: { address, },
				children: 'Profile',
			}
		],
		[address]
	);
	return (
		<nav>
			<List items={navigation} Component={Link} indexedBy='children' />
			<OnlyAdmin>
				<li>
					<Link to={routes.categories}>Categories</Link>
				</li>
			</OnlyAdmin>
			<OnlyAdmin>
				<li>
					<Link to={routes.samples}>Samples</Link>
				</li>
			</OnlyAdmin>
			<OnlyAdmin>
				<li>
					<Link to={routes.requests}>Requests</Link>
				</li>
			</OnlyAdmin>
			<OnlyAdmin>
				<li>
					<Link to={routes.users}>Users</Link>
				</li>
			</OnlyAdmin>
		</nav>
	);
};
