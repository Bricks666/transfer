import { useUnit } from 'effector-react';
import * as React from 'react';
import { RequestItemWithInformation } from '@/widgets/requests';
import { requestsModel } from '@/entities/requests';
import { BorderedList } from '@/shared/ui';

export const RequestList: React.FC = () => {
	const requests = useUnit(requestsModel.query);

	return (
		<BorderedList>
			{requests.data.map((request) => (
				<RequestItemWithInformation {...request} divider key={request.id} />
			))}
		</BorderedList>
	);
};
