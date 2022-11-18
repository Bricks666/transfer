import { getUserRole } from '../../utils';

export const UserInfo = ({ login, user, admin, onOffer, children }) => {
	return (
		<section>
			<h3>Info</h3>
			<p>{`Login: ${login}`}</p>
			<p>{`Your role: ${getUserRole(user, admin, onOffer)}`}</p>
			{children}
		</section>
	);
};
