import axios from 'axios';
import { getConfig } from './bootstrap';

export interface Cast {
	release_date: string;
	adult: boolean;
	vote_average: number;
	vote_count: number;
	video: boolean;
	title: string;
	popularity: number;
	genre_ids: number[];
	original_language: string;
	character: string;
	original_title: string;
	poster_path: string;
	id: number;
	backdrop_path: string;
	overview: string;
	credit_id: string;
}

export interface Crew {
	id: number;
	department: string;
	original_language: string;
	original_title: string;
	job: string;
	overview: string;
	genre_ids: number[];
	video: boolean;
	credit_id: string;
	poster_path: string;
	popularity: number;
	backdrop_path: string;
	vote_count: number;
	title: string;
	adult: boolean;
	vote_average: number;
	release_date: string;
}

export interface MovieCredits {
	cast: Cast[];
	crew: Crew[];
}

export interface Profile {
	iso_639_1?: any;
	aspect_ratio: number;
	vote_count: number;
	height: number;
	vote_average: number;
	file_path: string;
	width: number;
}

export interface Images {
	profiles: Profile[];
}

export interface PersonResponse {
	birthday: string;
	known_for_department: string;
	deathday?: any;
	id: number;
	movie_credits: MovieCredits;
	name: string;
	images: Images;
	also_known_as: string[];
	gender: number;
	biography: string;
	popularity: number;
	place_of_birth: string;
	profile_path: string;
	adult: boolean;
	imdb_id: string;
	homepage: string;
}

export const getPerson = async (personId: number): Promise<PersonResponse> => {
	const config = getConfig();

	const result = await axios.get(
		`${config.url}/3/person/${personId}?api_key=${config.apiKey}&append_to_response=movie_credits,images`
	);

	return result.data;
};
