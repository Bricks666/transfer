import { Container } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import { CommonProps } from '@/shared/types';

export interface MainLayoutTemplateProps extends CommonProps {
	readonly header: React.ReactElement;
}

export const MainLayoutTemplate: React.FC<
	React.PropsWithChildren<MainLayoutTemplateProps>
> = (props) => {
	const { className, children, header, } = props;
	return (
		<Container>
			{header}
			<main className={cn(className)}>{children}</main>
		</Container>
	);
};
