export const getMovieYear = (releaseDate: string) => {
	const date = new Date(releaseDate);
	return date.getFullYear();
};

export const getMovieSlug = (movieId: string, movieTitle: string) => {
	return `/${movieId}/${slugify(movieTitle)}`;
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
