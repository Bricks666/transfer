import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import * as React from 'react';
import { Header } from '@/widgets/page';
import { CreateCategoryForm } from '@/features/categories';
import { SITE_NAME } from '@/shared/configs';
import { useTitle } from '@/shared/lib';
import { CommonProps } from '@/shared/types';
import { CollapsedForm, MainLayout, PageTitle } from '@/shared/ui';
import styles from './page.module.css';
import { CategoryList } from './ui';


export interface CategoriesPageProps extends CommonProps {}

const CategoriesPage: React.FC<CategoriesPageProps> = () => {
	useTitle(`${SITE_NAME} - Категории`);

	return (
		<MainLayout header={<Header />}>
			<PageTitle title='Категории' extra={<Form />} />
			<CategoryList />
		</MainLayout>
	);
};

const Form: React.FC = React.memo(() => {
	return (
		<CollapsedForm
			title='Создать категорию'
			openedTitle='Закрыть форму'
			collapseClassName={styles.form}
			form={<CreateCategoryForm />}
			closedIcon={<AddIcon />}
			openedIcon={<CloseIcon />}
		/>
	);
});

export default CategoriesPage;
