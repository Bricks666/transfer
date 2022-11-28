import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/types';

import styles from './AuthLayout.module.css';

export interface AuthLayoutProps extends CommonProps {}

export const AuthLayout: React.FC<React.PropsWithChildren<AuthLayoutProps>> = (
	props
) => {
	const { className, children } = props;
	return <main className={cn(className)}>{children}</main>;
};
