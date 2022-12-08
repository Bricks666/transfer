import { TextField, TextFieldProps } from '@mui/material';
import * as React from 'react';
import { CommonProps } from '@/shared/types';

export type FieldProps = CommonProps & TextFieldProps;

export const Field: React.FC<FieldProps> = (props) => {
	return <TextField {...props} />;
};
