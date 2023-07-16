import {
	Experimental_CssVarsProvider as CssVarsProvider,
	StyledEngineProvider
} from '@mui/material';
import * as React from 'react';
import 'effector-mui-snacks/dist/style.css';

export const withStyles =
	(Component: React.ComponentType): React.ComponentType =>
		(props) => {
			return (
				<StyledEngineProvider injectFirst>
					<CssVarsProvider>
						<Component {...props} />
					</CssVarsProvider>
				</StyledEngineProvider>
			);
		};
