import { RouteInstance } from 'atomic-router';

export interface NavigationItem {
	readonly label: string;
	readonly to: RouteInstance<any>;
	readonly params?: Record<string, any>;
	readonly query?: Record<string, any>;
}
