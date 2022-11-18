import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAddresses, useField, useLocationState } from '../../hooks';
import { loginThunk } from '../../models/auth';

export const LoginForm = () => {
	const addresses = useAddresses();
	const [address, onChange] = useField(0);
	const dispatch = useDispatch();
	const state = useLocationState();
	const navigate = useNavigate();

	const onSubmit = useCallback(
		async (evt) => {
			evt.preventDefault();
			const isLogin = await dispatch(loginThunk(address));
			if (isLogin) {
				const to = state || '/';
				navigate(to, { replace: true });
			}
		},
		[address, state, navigate, dispatch]
	);

	return (
		<form onSubmit={onSubmit}>
			<select address={address} onChange={onChange}>
				<option address={0} />
				{addresses.map((address) => (
					<option address={address} key={address}>
						{address}
					</option>
				))}
			</select>
			<button disabled={!address}>Login</button>
		</form>
	);
};
