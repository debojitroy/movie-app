export enum ImageType {
	W92,
}

export const getImageUrl = (imgType: ImageType, imagePath: string) => {
	switch (imgType) {
		case ImageType.W92:
			return `https://image.tmdb.org/t/p/w92${imagePath}`;
		default:
			return `https://image.tmdb.org/t/p/original${imagePath}`;
	}
};
