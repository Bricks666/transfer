import { Navigate } from 'react-router-dom';
import { useIsAdmin } from '../../hooks';
import { AuthRoute } from '../AuthRoute';

export const AdminRoute = ({ children }) => {
	const isAdmin = useIsAdmin();

	if (!isAdmin) {
		return <Navigate to='/' replace={true} />;
	}

	return <AuthRoute>{children}</AuthRoute>;
};
