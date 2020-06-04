import axios from 'axios';
import { getConfig } from './bootstrap';

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

export interface SimilarMovies {
	id: number;
	video: boolean;
	vote_count: number;
	vote_average: number;
	title: string;
	release_date: string;
	original_language: string;
	original_title: string;
	genre_ids: number[];
	backdrop_path: string;
	adult: boolean;
	overview: string;
	poster_path: string;
	popularity: number;
}

export interface Similar {
	page: number;
	results: SimilarMovies[];
	total_pages: number;
	total_results: number;
}

export interface MovieResponse {
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

export const getMovie = async (movieId: number): Promise<MovieResponse> => {
	const config = getConfig();

	const result = await axios.get(
		`${config.url}/3/movie/${movieId}?api_key=${config.apiKey}&append_to_response=videos,images,credits,similar&include_image_language=en,null`
	);

	return result.data;
};
