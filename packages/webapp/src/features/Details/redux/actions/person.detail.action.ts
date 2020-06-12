import { getPerson } from '@awesome-movie-app/core/lib/services/getPersonDetails';
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

export interface PersonDetail {
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

export const PERSON_DETAIL_START = '@PERSON/PERSON_DETAIL_START';
export const PERSON_DETAIL_SUCCESS = '@PERSON/PERSON_DETAIL_SUCCESS';
export const PERSON_DETAIL_NOT_FOUND = '@PERSON/PERSON_DETAIL_NOT_FOUND';
export const PERSON_DETAIL_ERROR = '@PERSON/PERSON_DETAIL_ERROR';

export const getPersonDetail = (personId: number) => async (dispatch: any) => {
	dispatch({ type: PERSON_DETAIL_START, personId });

	try {
		const person = await getPerson(personId);

		dispatch({
			type: PERSON_DETAIL_SUCCESS,
			personId,
			detail: person,
		});
	} catch (error) {
		if (
			error.response &&
			error.response.status >= 404 &&
			error.response.status < 500
		) {
			dispatch({
				type: PERSON_DETAIL_NOT_FOUND,
				personId,
				error,
				notFound: true,
			});
			console.error('Person not found : ' + personId, error);
		} else {
			dispatch({
				type: PERSON_DETAIL_ERROR,
				personId,
				error,
				notFound: false,
			});
			console.error('Failed to get person details : ' + personId, error);
		}
	}
};
