import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import cn from 'classnames';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { RequestVoting } from '@/features/requests';
import {
	TemplateDetailedRequestInformation,
	TemplateRequestItem,
	type TemplateRequestItemProps
} from '@/entities/requests';
import type { Request } from '@/shared/api';
import { authModel } from '@/shared/models';
import type { CommonProps } from '@/shared/types';

import { CollapsedForm } from '@/shared/ui';
import styles from './request-item-with-information.module.css';

export interface RequestItemWithInformationProps
	extends CommonProps,
		Omit<TemplateRequestItemProps, 'actions'>,
		Pick<Request, 'id' | 'accept_voter' | 'cancel_voter'> {}

export const RequestItemWithInformation: React.FC<
	RequestItemWithInformationProps
> = (props) => {
	const {
		accept_voter: acceptVoter,
		cancel_voter: cancelVoter,
		candidate,
		id,
		status,
		className,
	} = props;
	const authUser = useUnit(authModel.$user);
	const isVote =
		authUser?.address === cancelVoter ||
		acceptVoter.includes(authUser?.address as string);

	const detailedActions = !isVote ? <RequestVoting id={id} /> : null;

	const extra = (
		<CollapsedForm
			title='Открыть дополнительную информацию'
			openedTitle='Свернуть дополнительную информацию'
			openedIcon={<ExpandLessIcon />}
			closedIcon={<ExpandMoreIcon />}
			collapseClassName={styles.info}
			form={
				<TemplateDetailedRequestInformation
					accept_voter={acceptVoter}
					cancel_voter={cancelVoter}
					candidate={candidate}
					status={status}
					slots={{ actions: detailedActions, }}
				/>
			}
		/>
	);

	return (
		<TemplateRequestItem
			{...props}
			className={cn(styles.item, className)}
			slots={{
				extra,
			}}
		/>
	);
};
