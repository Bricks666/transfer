import compose from 'compose-function';
import { withRouter } from './withRouter';
import { withStyles } from './withStyles';

export const withProviders = compose(withRouter, withStyles);
