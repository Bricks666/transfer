export const List = ({ Card, items, indexedBy, children = null }) => {
	return (
		<ul>
			{items.map((item) => (
				<li key={item[indexedBy]}>
					<Card {...item} />
				</li>
			))}
			{children}
		</ul>
	);
};
