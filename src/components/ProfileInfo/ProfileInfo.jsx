import { useUserInfo, useUserLoading } from "../../hooks";
import { Loading } from "../Loading";
import { UserInfo } from "../UserInfo";
import { Balance } from "../Balance";

export const ProfileInfo = () => {
	const info = useUserInfo();
	const isLoading = useUserLoading();

	return (
		<div>
			<Loading isLoading={isLoading}>
				<UserInfo {...info} />
				<Balance />
			</Loading>
		</div>
	);
};
