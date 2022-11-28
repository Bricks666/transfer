import * as React from 'react';
import { MainLayout } from '@/layouts';
import { CommonProps } from '@/types';
import { CreateCategoryForm } from '@/components/CreateCategoryForm';
import { CategoryList } from '@/components/CategoryList';

export interface CategoriesPageProps extends CommonProps {}

const CategoriesPage: React.FC<CategoriesPageProps> = React.memo(
	function CategoriesPage() {
		return (
			<MainLayout>
				<h2>Categories Page</h2>
				<CreateCategoryForm />
				<CategoryList />
			</MainLayout>
		);
	}
);

export default CategoriesPage;
