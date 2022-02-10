export const List = ({ Card, items, indexedBy }) => {
	return (
		<ul>
			{items.map((item) => (
				<li key={item[indexedBy]}>
					<Card {...item} />;
				</li>
			))}
		</ul>
	);
};
