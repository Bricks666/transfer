import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import * as React from 'react';
import { Header } from '@/widgets/page';
import { CreateSampleForm } from '@/features/samples';
import { SITE_NAME } from '@/shared/configs';
import { useTitle } from '@/shared/lib';
import { CommonProps } from '@/shared/types';
import { CollapsedForm, MainLayout, PageTitle } from '@/shared/ui';
import styles from './page.module.css';
import { SampleList } from './ui';


export interface SamplesPageProps extends CommonProps {}

const SamplesPage: React.FC<SamplesPageProps> = () => {
	useTitle(`${SITE_NAME} - Шаблоны`);

	return (
		<MainLayout header={<Header />}>
			<PageTitle
				title='Шаблоны'
				extra={
					<CollapsedForm
						title='Добавить шаблон'
						openedTitle='Закрыть форму'
						collapseClassName={styles.collapse}
						form={<CreateSampleForm />}
						closedIcon={<AddIcon />}
						openedIcon={<CloseIcon />}
					/>
				}
			/>
			<SampleList />
		</MainLayout>
	);
};

export default SamplesPage;
