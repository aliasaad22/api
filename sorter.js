export class SeasonSorter {
	static sort(seasons, method) {
		switch (method) {
			case "newest":
				return [...seasons].sort((a, b) =>
					b.startDate.localeCompare(a.startDate)
				);
			case "oldest":
				return [...seasons].sort((a, b) =>
					a.startDate.localeCompare(b.startDate)
				);
			case "winner":
				return [...seasons].sort((a, b) => {
					const aName = a.winner?.name || "";
					const bName = b.winner?.name || "";
					return aName.localeCompare(bName);
				});
			default:
				return seasons;
		}
	}
}
