export const Transaction = ({
	id,
	sender,
	receiver,
	count,
	status,
	description,
	category,
	children,
}) => {
	return (
		<article>
			<dl>
				<dt>Number:</dt>
				<dd>{id}</dd>
				<dt>Sender:</dt>
				<dd>{sender}</dd>
				<dt>Receiver</dt>
				<dd>{receiver}</dd>
				<dt>Category</dt>
				<dd>{category}</dd>
				<dt>Count</dt>
				<dd>{count}</dd>
				<dt>Description</dt>
				<dd>{description}</dd>
				<dt>Status</dt>
				<dd>{status ? "Finish" : "Pending"}</dd>
			</dl>
			{children}
		</article>
	);
};
