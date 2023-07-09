interface Idable {
	readonly id: number;
}

export const ascending = <T extends Idable>(item1: T, item2: T): number => {
	return item1.id - item2.id;
};

export const descending = <T extends Idable>(item1: T, item2: T): number => {
	return item2.id - item1.id;
};
