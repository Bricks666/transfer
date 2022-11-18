export const toValidSample = (sample) => {
	return {
		categoryId: sample.id_category,
		name: sample.name_sample,
		moneyCount: sample.count,
	};
};
