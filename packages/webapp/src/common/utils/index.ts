export const getMovieYear = (releaseDate: string) => {
	const date = new Date(releaseDate);
	return date.getFullYear();
};

export const getMovieSlug = (movieId: string, movieTitle: string) => {
	return `/movie/${movieId}/${slugify(movieTitle)}`;
};

export const getPersonSlug = (personId: string, personName: string) => {
	return `/person/${personId}/${slugify(personName)}`;
};

export const slugify = (text: string) => {
	// https://gist.github.com/mathewbyrne/1280286
	return text
		.toString()
		.toLowerCase()
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/[^\w\-]+/g, '') // Remove all non-word chars
		.replace(/\-\-+/g, '-') // Replace multiple - with single -
		.replace(/^-+/, '') // Trim - from start of text
		.replace(/-+$/, ''); // Trim - from end of text
};

export const convertNumberToCsv = (value: number) => {
	if (value && value.toLocaleString) {
		return value.toLocaleString();
	}

	return `${value}`;
};

export const convertMinutesToHourString = (minutes: number) => {
	if (minutes && !isNaN(minutes) && minutes > 0) {
		const min = minutes % 60;
		const hours = (minutes - min) / 60;

		return `${hours}hr ${min}mins`;
	}

	return '0hr';
};
