import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { useIsAdmin } from '@/hooks';
import { AuthRoute } from '../AuthRoute';

export const AdminRoute: React.FC<React.PropsWithChildren> = (props) => {
	const { children } = props;
	const isAdmin = useIsAdmin();

	if (!isAdmin) {
		return <Navigate to='/' replace />;
	}

	return <AuthRoute>{children}</AuthRoute>;
};
