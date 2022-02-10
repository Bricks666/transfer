export const List = ({ Card, items, indexedBy, children }) => {
	console.log(children);
	return (
		<ul>
			{items.map((item) => (
				<li key={item[indexedBy]}>
					<Card {...item} />
				</li>
			))}
			{children?.map((child, i) => (
				<li key={i}>{child}</li>
			))}
		</ul>
	);
};
