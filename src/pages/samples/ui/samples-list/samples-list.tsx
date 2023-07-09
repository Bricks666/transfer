import { useUnit } from 'effector-react';
import * as React from 'react';
import { SampleItem } from '@/widgets/samples';
import { samplesModel } from '@/entities/samples';
import type { CommonProps } from '@/shared/types';
import { BorderedList } from '@/shared/ui';

export const SampleList: React.FC<CommonProps> = (props) => {
	const { className, } = props;

	const samples = useUnit(samplesModel.query);

	return (
		<BorderedList className={className} variant='outlined' elevation={0}>
			{samples.data.map((sample) => (
				<SampleItem {...sample} key={sample.id} />
			))}
		</BorderedList>
	);
};
