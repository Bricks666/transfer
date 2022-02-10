import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAddresses, useField } from "../../hooks";
import { registrationThunk } from "../../models/auth";

export const RegistrationForm = () => {
	const addresses = useAddresses();
	const [address, onChange] = useField(0);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSubmit = useCallback(
		async (evt) => {
			evt.preventDefault();
			const isSuccess = await dispatch(registrationThunk(address));

			if (isSuccess) {
				navigate("/login", { replace: true });
				return;
			} else {
				onChange({ target: { value: 0 } });
			}
		},
		[dispatch, onChange, navigate, address]
	);

	return (
		<form onSubmit={onSubmit}>
			<select value={address} onChange={onChange}>
				<option value={0} />
				{addresses.map((address) => (
					<option value={address} key={address}>
						{address}
					</option>
				))}
			</select>
			<button>Registration</button>
		</form>
	);
};
