import axios from 'axios';
import { getConfig } from './bootstrap';

export interface KnownFor {
	original_name: string;
	genre_ids: number[];
	media_type: string;
	name: string;
	origin_country: string[];
	vote_count: number;
	first_air_date: string;
	backdrop_path: string;
	original_language: string;
	id: number;
	vote_average: number;
	overview: string;
	poster_path: string;
	release_date: string;
	video?: boolean;
	title: string;
	original_title: string;
	adult?: boolean;
}

export interface PopularPeopleResult {
	popularity: number;
	known_for_department: string;
	name: string;
	id: number;
	profile_path: string;
	adult: boolean;
	known_for: KnownFor[];
	gender: number;
}

export interface PopularPeopleResponse {
	page: number;
	total_results: number;
	total_pages: number;
	results: PopularPeopleResult[];
}

export const getPopularPeople = async (): Promise<PopularPeopleResponse> => {
	const config = getConfig();

	const result = await axios.get(
		`${config.url}/3/person/popular?api_key=${config.apiKey}&language=en-US&page=1`
	);

	return result.data;
};
