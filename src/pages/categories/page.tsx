import * as React from 'react';
import { CategoryList } from '@/widgets/categories';
import { Header } from '@/widgets/header';
import { CreateCategoryForm } from '@/features/categories';
import { CommonProps } from '@/shared/types';
import { MainLayoutTemplate } from '@/shared/ui';

export interface CategoriesPageProps extends CommonProps {}

const CategoriesPage: React.FC<CategoriesPageProps> = () => {
	return (
		<MainLayoutTemplate header={<Header />}>
			<h2>Categories Page</h2>
			<CreateCategoryForm />
			<CategoryList />
		</MainLayoutTemplate>
	);
};

export default CategoriesPage;
