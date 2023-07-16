import { SnackbarList } from 'effector-mui-snacks';
import * as React from 'react';
import { notificationsModel } from '@/shared/models';

export const withNotifications = (
	Component: React.ComponentType<any>
): React.ComponentType<any> => {
	return (props) => {
		return (
			<>
				<Component {...props} />
				<SnackbarList
					domRootSelector='#root'
					model={notificationsModel.snacks}
				/>
			</>
		);
	};
};
