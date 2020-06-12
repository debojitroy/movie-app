import { getMovie } from '@awesome-movie-app/core/lib/services/getMovieDetails';

export interface Genre {
	id: number;
	name: string;
}

export interface ProductionCompany {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
}

export interface ProductionCountry {
	iso_3166_1: string;
	name: string;
}

export interface SpokenLanguage {
	iso_639_1: string;
	name: string;
}

export interface VideoResult {
	id: string;
	iso_639_1: string;
	iso_3166_1: string;
	key: string;
	name: string;
	site: string;
	size: number;
	type: string;
}

export interface Videos {
	results: VideoResult[];
}

export interface Backdrop {
	aspect_ratio: number;
	file_path: string;
	height: number;
	iso_639_1: string;
	vote_average: number;
	vote_count: number;
	width: number;
}

export interface Poster {
	aspect_ratio: number;
	file_path: string;
	height: number;
	iso_639_1: string;
	vote_average: number;
	vote_count: number;
	width: number;
}

export interface Images {
	backdrops: Backdrop[];
	posters: Poster[];
}

export interface Cast {
	cast_id: number;
	character: string;
	credit_id: string;
	gender: number;
	id: number;
	name: string;
	order: number;
	profile_path: string;
}

export interface Crew {
	credit_id: string;
	department: string;
	gender: number;
	id: number;
	job: string;
	name: string;
	profile_path: string;
}

export interface Credits {
	cast: Cast[];
	crew: Crew[];
}

export interface SimilarMovieResult {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
	popularity: number;
}

export interface Similar {
	page: number;
	results: SimilarMovieResult[];
	total_pages: number;
	total_results: number;
}

export interface MovieDetail {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection?: any;
	budget: number;
	genres: Genre[];
	homepage: string;
	id: number;
	imdb_id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: ProductionCompany[];
	production_countries: ProductionCountry[];
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: SpokenLanguage[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
	videos: Videos;
	images: Images;
	credits: Credits;
	similar: Similar;
}

export const MOVIE_DETAIL_START = '@MOVIE/MOVIE_DETAIL_START';
export const MOVIE_DETAIL_SUCCESS = '@MOVIE/MOVIE_DETAIL_SUCCESS';
export const MOVIE_DETAIL_NOT_FOUND = '@MOVIE/MOVIE_DETAIL_NOT_FOUND';
export const MOVIE_DETAIL_ERROR = '@MOVIE/MOVIE_DETAIL_ERROR';

export const getMovieDetail = (movieId: number) => async (dispatch: any) => {
	dispatch({ type: MOVIE_DETAIL_START, movieId });

	try {
		const movie = await getMovie(movieId);

		dispatch({
			type: MOVIE_DETAIL_SUCCESS,
			movieId,
			detail: movie,
		});
	} catch (error) {
		if (
			error.response &&
			error.response.status >= 404 &&
			error.response.status < 500
		) {
			dispatch({
				type: MOVIE_DETAIL_NOT_FOUND,
				movieId,
				error,
				notFound: true,
			});
			console.error('Movie not found : ' + movieId, error);
		} else {
			dispatch({
				type: MOVIE_DETAIL_ERROR,
				movieId,
				error,
				notFound: false,
			});
			console.error('Failed to get movie details : ' + movieId, error);
		}
	}
};
