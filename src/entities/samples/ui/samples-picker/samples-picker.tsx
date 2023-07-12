import { Autocomplete } from '@mui/material';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { Sample } from '@/shared/api';
import { usePreparePicker } from '@/shared/lib';
import type { CommonProps, PickerProps } from '@/shared/types';
import { Field } from '@/shared/ui';
import { samplesModel } from '../../model';
import { TemplateSampleItem } from '../template-sample-item';

export type SamplesPickerProps = CommonProps &
	PickerProps<number> & {
		readonly Category: React.ComponentType<{ id: number }>;
	};

export const SamplesPicker: React.FC<SamplesPickerProps> = (props) => {
	const { value, onChange, multiple, limitTags, className, Category, ...rest } =
		props;

	const samples = useUnit(samplesModel.query);

	const options = usePreparePicker({
		options: samples.data,
		onChange,
		value,
		multiple,
		isSelected,
		mapBeforeChange,
	});

	return (
		<Autocomplete
			className={className}
			options={samples.data}
			loading={samples.pending}
			getOptionLabel={getOptionLabel}
			renderInput={(params) => {
				return (
					<Field
						{...rest}
						{...params}
						InputProps={{ ...rest.InputProps, ...params.InputProps, }}
					/>
				);
			}}
			renderOption={(props, option) => {
				return (
					<TemplateSampleItem
						{...props}
						{...option}
						category={<Category id={option.category_id} />}
					/>
				);
			}}
			{...options}
			limitTags={limitTags}
		/>
	);
};

const getOptionLabel = (sample: Sample) => {
	return sample.name;
};

const isSelected = (
	sample: Sample,
	selected: number | number[] | null
): boolean => {
	if (Array.isArray(selected)) {
		return selected.includes(sample.id);
	}

	return selected === sample.id;
};

const mapBeforeChange = (value: Sample): number => {
	return value.id;
};
