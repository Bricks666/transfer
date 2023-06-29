import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Collapse, IconButton, Tooltip } from '@mui/material';
import cn from 'classnames';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { acceptTransferModel, CancelTransfer } from '@/features/transfers';
import { useCategory, CategoryLabel } from '@/entities/categories';
import {
	IdentifiedTransfer,
	TemplateDetailedTransferInformation,
	TemplateTransferItem
} from '@/entities/transfers';
import { useToggle } from '@/shared/lib';
import { authModel } from '@/shared/models';
import { CommonProps, Status } from '@/shared/types';

import styles from './transfer-item-with-information.module.css';

export interface TransferItemWithInformationProps
	extends IdentifiedTransfer,
		CommonProps {}

export const TransferItemWithInformation: React.FC<
	TransferItemWithInformationProps
> = (props) => {
	const {
		category_id: categoryId,
		sender,
		status,
		id,
		className,
		...rest
	} = props;
	const [opened, handlers] = useToggle(false);
	const user = useUnit(authModel.$user);
	const openPopup = useUnit(acceptTransferModel.popup.open);
	const isSender = user?.address === sender;
	const isPending = status === Status.pending;

	let actions: React.ReactElement | null = null;
	if (isPending) {
		if (isSender) {
			actions = <CancelTransfer id={id} />;
		} else {
			const onClick = () => {
				openPopup(id.toString());
			};
			actions = (
				<Button
					onClick={onClick}
					variant='contained'
					color='success'
					disableElevation>
					Принять
				</Button>
			);
		}
	}

	const category = useCategory(categoryId);
	const categoryLabel = category ? <CategoryLabel {...category} /> : null;

	const expandClasses = cn(styles.expand, { [styles.expand__opened]: opened, });
	const openInfoTitle = opened
		? 'Свернуть дополнительную информацию'
		: 'Открыть дополнительную информацию о переводу';
	const openDetailedInfo = (
		<Tooltip title={openInfoTitle}>
			<IconButton onClick={handlers.toggle}>
				<ExpandMoreIcon className={expandClasses} />
			</IconButton>
		</Tooltip>
	);

	return (
		<TemplateTransferItem
			className={cn(styles.item, className)}
			{...rest}
			sender={sender}
			status={status}
			actions={openDetailedInfo}
			category={categoryLabel}
			extra={
				<Collapse
					className={styles.info}
					in={opened}
					mountOnEnter
					unmountOnExit>
					<TemplateDetailedTransferInformation
						{...rest}
						sender={sender}
						status={status}
						category={categoryLabel}
						actions={actions}
					/>
				</Collapse>
			}
		/>
	);
};
