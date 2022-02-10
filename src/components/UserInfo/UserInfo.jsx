import { Loading } from "../Loading";

import { useUserInfo, useUserLoading } from "../../hooks";
import { getUserRole } from "../../utils";
import { Balance } from "../Balance";

export const UserInfo = () => {
	const { login, user, admin, onOffer } = useUserInfo();
	const isLoading = useUserLoading();

	return (
		<section>
			<h3>Info</h3>
			<Loading isLoading={isLoading}>
				<p>{`Login: ${login}`}</p>
				<p>{`Your role: ${getUserRole(user, admin, onOffer)}`}</p>
				<Balance />
			</Loading>
		</section>
	);
};
