import { List, Paper, PaperProps } from '@mui/material';
import * as React from 'react';

export const BorderedList: React.FC<PaperProps<typeof List>> = (props) => {
	const { children, ...rest } = props;

	return (
		<Paper
			variant='outlined'
			elevation={0}
			disablePadding
			{...rest}
			component={List}>
			{children}
		</Paper>
	);
};
