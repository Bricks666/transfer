import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useField, useOthersAddresses } from "../../hooks";
import { sendTransactionThunk } from "../../models/transactions";

export const CreateTransactionForm = () => {
	const users = useOthersAddresses();
	const [receiver, setReceiver] = useField(0);
	const [value, setValue] = useField(0);
	const [keyword, setKeyword] = useField("");
	const [description, setDescription] = useField("");
	const dispatch = useDispatch();

	const disabled = !receiver && !value && !keyword && !description;

	const reset = useCallback(() => {
		setReceiver({ target: { value: 0 } });
		setDescription({ target: { value: "" } });
		setKeyword({ target: { value: "" } });
		setValue({ target: { value: 0 } });
	}, [setDescription, setKeyword, setReceiver, setValue]);

	const onSubmit = useCallback(
		async (evt) => {
			evt.preventDefault();
			await dispatch(
				sendTransactionThunk(receiver, value, keyword, description)
			);
			reset();
		},
		[reset, dispatch, receiver, value, keyword, description]
	);

	return (
		<form onSubmit={onSubmit}>
			<select placeholder="receiver" value={receiver} onChange={setReceiver}>
				<option />
				{users.map((user) => (
					<option value={user} key={user}>
						{user}
					</option>
				))}
			</select>
			<input type="number" min={0} value={value} onChange={setValue} />
			<input placeholder="keyword" value={keyword} onChange={setKeyword} />
			<textarea
				placeholder="description"
				value={description}
				onChange={setDescription}
			/>
			<button disabled={disabled}>Send</button>
		</form>
	);
};
