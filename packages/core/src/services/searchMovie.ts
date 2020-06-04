import axios from 'axios';
import isNil from 'lodash/isNil';
import { getConfig } from './bootstrap';

export interface SearchResult {
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

export interface SearchResponse {
	page: number;
	total_results: number;
	total_pages: number;
	results: SearchResult[];
}

export const searchMovie = async (
	queryString?: string
): Promise<SearchResponse> => {
	const config = getConfig();

	if (isNil(queryString) || queryString.trim() === '') {
		return new Promise((resolve) => {
			resolve({
				page: 1,
				total_pages: 1,
				total_results: 0,
				results: [],
			});
		});
	}

	const encodedQuery = encodeURI(queryString);

	const result = await axios.get(
		`${config.url}/3/search/movie?api_key=${config.apiKey}&query=${encodedQuery}`
	);

	return result.data;
};
