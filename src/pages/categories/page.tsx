import * as React from 'react';
import { MainLayout } from '@/shared/layouts';
import { CommonProps } from '@/shared/types';
import { CreateCategoryForm } from '@/shared/components/CreateCategoryForm';
import { CategoryList } from '@/shared/components/CategoryList';

export interface CategoriesPageProps extends CommonProps {}

const CategoriesPage: React.FC<CategoriesPageProps> = () => {
	return (
		<MainLayout>
			<h2>Categories Page</h2>
			<CreateCategoryForm />
			<CategoryList />
		</MainLayout>
	);
};

export default CategoriesPage;
