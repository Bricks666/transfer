import cn from 'classnames';
import * as React from 'react';
import { toWei, fromWei } from 'web3-utils';
import type { UsingEtherUnits } from '@/shared/lib';
import { Field, type FieldProps } from '@/shared/ui';
import { CurrencyPicker } from '../currency-picker';

import styles from './money-field.module.css';

export interface MoneyFieldProps
	extends Omit<FieldProps, 'value' | 'onChange' | 'type'> {
	/**
	 * @type {number}
	 * value in wei what's shown in selected currency
	 */
	readonly value?: number;
	/**
	 *
	 * @param {number} value - value converted from selected currency to wei
	 * @returns
	 */
	readonly onChange?: (value: number) => void;

	/**
	 * @type {UsingEtherUnits}
	 * @default 'ether'
	 */
	readonly selectedCurrency?: UsingEtherUnits;

	/**
	 *
	 * @param {UsingEtherUnits} value - selected unit
	 * @returns
	 */
	readonly onCurrencyChange?: (unit: UsingEtherUnits) => void;
}

export const MoneyField: React.FC<MoneyFieldProps> = (props) => {
	const { className, onCurrencyChange, selectedCurrency, value, onChange, } =
		props;
	const [selected, setSelected] = React.useState(selectedCurrency ?? 'ether');
	const [money, setMoney] = React.useState(value ?? null);

	const handlerCurrencyChange = (currency: UsingEtherUnits) => {
		if (onCurrencyChange) {
			return onCurrencyChange(currency);
		}

		setSelected(currency);
	};

	const handleChange = (value: number) => {
		if (onChange) {
			return onChange(+toWei(value, selected));
		}

		setMoney(+toWei(value, selected));
	};

	const preparedCurrency = selectedCurrency ?? selected;
	const validateValue = value ?? money;
	const preparedValue =
		validateValue !== null ? +fromWei(validateValue, preparedCurrency) : null;

	return (
		<fieldset className={cn(styles.wrapper, className)}>
			<Field
				{...props}
				onChange={handleChange}
				value={preparedValue}
				type='number'
			/>
			<CurrencyPicker
				value={preparedCurrency}
				onChange={handlerCurrencyChange as any}
				disableClearable
				isValid
			/>
		</fieldset>
	);
};
