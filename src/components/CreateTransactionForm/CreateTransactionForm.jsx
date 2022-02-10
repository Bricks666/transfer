import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
	useCategories,
	useField,
	useOthersAddresses,
	useSamples,
} from "../../hooks";
import { sendTransactionThunk } from "../../models/transactions";

export const CreateTransactionForm = () => {
	const users = useOthersAddresses();
	const categories = useCategories();
	const samples = useSamples();
	const [receiver, setReceiver] = useField(0);
	const [value, setValue] = useField(0);
	const [keyword, setKeyword] = useField("");
	const [description, setDescription] = useField("");
	const [category, setCategory] = useField(-1);
	const [sample, setSample] = useField();
	const dispatch = useDispatch();

	const disabled =
		!receiver || !value || !keyword || !description || category === -1;

	const reset = useCallback(() => {
		setReceiver({ target: { value: 0 } });
		setDescription({ target: { value: "" } });
		setKeyword({ target: { value: "" } });
		setValue({ target: { value: 0 } });
		setCategory({ target: { value: -1 } });
		setSample({ target: { value: 0 } });
	}, [
		setDescription,
		setKeyword,
		setReceiver,
		setValue,
		setCategory,
		setSample,
	]);

	const onSampleSelect = useCallback(
		(evt) => {

			const value = JSON.parse(evt.target.value);
			if (!value) {
				reset();
				return;
			}
			const { categoryId, moneyCount } = samples[value];
			setCategory({ target: { value: categoryId } });
			setValue({ target: { value: moneyCount } });
			setSample(evt);
		},
		[reset, setSample, setValue, setCategory, samples]
	);

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
			<input
				type="number"
				min={0}
				value={value}
				onChange={setValue}
				disabled={!!sample}
			/>
			<input placeholder="keyword" value={keyword} onChange={setKeyword} />
			<select
				placeholder="category"
				value={category}
				onChange={setCategory}
				disabled={!!sample}
			>
				<option />
				{categories.map((category, index) => (
					<option value={index} key={index}>
						{category}
					</option>
				))}
			</select>
			<select placeholder="samples" value={sample} onChange={onSampleSelect}>
				<option value={0} />
				{samples.map(({ name }, i) => {
					return (
						<option value={i} key={i}>
							{name}
						</option>
					);
				})}
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
