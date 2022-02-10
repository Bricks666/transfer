/*
route {
  Component: ComponentType;
  path: string;
  isAuthRoute?: boolean
}
*/

import { LoginPage, RegistrationPage, TransactionsPage } from "../pages";

export const routes = [
	{
		Component: LoginPage,
		path: "/login",
	},
	{
		Component: RegistrationPage,
		path: "/registration",
	},
	{
		Component: TransactionsPage,
		path: "/",
		isAuthRoute: true,
	},
];
