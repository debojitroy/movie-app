import axios from 'axios';
import { getConfig } from './bootstrap';

export interface PopularMovieResult {
	popularity: number;
	vote_count: number;
	video: boolean;
	poster_path: string;
	id: number;
	adult: boolean;
	backdrop_path: string;
	original_language: string;
	original_title: string;
	genre_ids: number[];
	title: string;
	vote_average: number;
	overview: string;
	release_date: string;
}

export interface PopularMovieResponse {
	page: number;
	total_results: number;
	total_pages: number;
	results: PopularMovieResult[];
}

export const getPopularMovies = async (): Promise<PopularMovieResponse> => {
	const config = getConfig();

	const result = await axios.get(
		`${config.url}/3/movie/popular?api_key=${config.apiKey}&language=en-US&page=1`
	);

	return result.data;
};
