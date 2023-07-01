import compose from 'compose-function';
import { withNotifications } from './with-notifications';
import { withRouter } from './with-router';
import { withStrictMode } from './with-strict-mode';
import { withStyles } from './with-styles';

export const withProviders = compose(
	withNotifications,
	withRouter,
	withStyles,
	withStrictMode
);
