import { TextField, TextFieldProps } from '@mui/material';
import { Controller, ControllerInjectedResult } from 'effector-react-form';
import * as React from 'react';
import { CommonProps } from '@/shared/types';

export type FieldProps = CommonProps &
	Omit<
		TextFieldProps,
		keyof ControllerInjectedResult | keyof ControllerInjectedResult['input']
	> & {
		readonly controller: Controller;
	};

export const Field: React.FC<FieldProps> = (props) => {
	const { controller, } = props;
	const { error, input, isShowError, } = controller();
	return (
		<TextField {...props} {...input} error={isShowError} helperText={error} />
	);
};
