export enum ImageType {
	W92,
	W300,
	W780,
}

export const getImageUrl = (imgType: ImageType, imagePath: string) => {
	switch (imgType) {
		case ImageType.W92:
			return `https://image.tmdb.org/t/p/w92${imagePath}`;
		case ImageType.W300:
			return `https://image.tmdb.org/t/p/w300${imagePath}`;
		case ImageType.W780:
			return `https://image.tmdb.org/t/p/w780${imagePath}`;
		default:
			return `https://image.tmdb.org/t/p/original${imagePath}`;
	}
};
