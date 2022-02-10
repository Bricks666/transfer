import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useCategories, useField, useOthersAddresses } from "../../hooks";
import { sendTransactionThunk } from "../../models/transactions";

export const CreateTransactionForm = () => {
	const users = useOthersAddresses();
	const categories = useCategories();
	const [receiver, setReceiver] = useField(0);
	const [value, setValue] = useField(0);
	const [keyword, setKeyword] = useField("");
	const [description, setDescription] = useField("");
	const [category, setCategory] = useField(-1);
	const dispatch = useDispatch();

	const disabled =
		!receiver || !value || !keyword || !description || category === -1;

	const reset = useCallback(() => {
		setReceiver({ target: { value: 0 } });
		setDescription({ target: { value: "" } });
		setKeyword({ target: { value: "" } });
		setValue({ target: { value: 0 } });
		setCategory({ target: { value: -1 } });
	}, [setDescription, setKeyword, setReceiver, setValue, setCategory]);

	const onSubmit = useCallback(
		async (evt) => {
			evt.preventDefault();
			await dispatch(
				sendTransactionThunk(receiver, value, keyword, description, category)
			);
			reset();
		},
		[reset, dispatch, receiver, value, keyword, description, category]
	);

	return (
		<form onSubmit={onSubmit}>
			<select placeholder="receiver" value={receiver} onChange={setReceiver}>
				<option value={0} />
				{users.map((user) => (
					<option value={user} key={user}>
						{user}
					</option>
				))}
			</select>
			<input type="number" min={0} value={value} onChange={setValue} />
			<input placeholder="keyword" value={keyword} onChange={setKeyword} />
			<select placeholder="category" value={category} onChange={setCategory}>
				<option />
				{categories.map((category, index) => (
					<option value={index} key={index}>
						{category}
					</option>
				))}
			</select>
			<textarea
				placeholder="description"
				value={description}
				onChange={setDescription}
			/>
			<button disabled={disabled}>Send</button>
		</form>
	);
};
