import {
	FETCH_POPULAR_LIST_START,
	FETCH_POPULAR_LIST_ERROR,
	FETCH_POPULAR_LIST_SUCCESS,
} from '@features/Landing/redux/actions/landing.action';
export interface PopularMovie {
	popularity: number;
	voteCount: number;
	video: boolean;
	posterPath: string;
	id: number;
	adult: boolean;
	backdropPath: string;
	originalLanguage: string;
	originalTitle: string;
	title: string;
	voteAverage: number;
	overview: string;
	releaseDate: string;
}

export interface PopularPeople {
	popularity: number;
	name: string;
	id: number;
	profilePath: string;
	gender: number;
}

export interface LandingState {
	isLoading: boolean;
	isError: boolean;
	errorReason?: string;
	lastRefresh: number;
	popularMovies: PopularMovie[];
	popularPeople: PopularPeople[];
}

const initState: LandingState = {
	isLoading: false,
	isError: false,
	lastRefresh: 0,
	popularMovies: [],
	popularPeople: [],
};

export default (state: LandingState = initState, action: any) => {
	switch (action.type) {
		case FETCH_POPULAR_LIST_START: {
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		}
		case FETCH_POPULAR_LIST_ERROR: {
			return {
				...state,
				isLoading: false,
				isError: true,
				errorReason: action.error,
			};
		}
		case FETCH_POPULAR_LIST_SUCCESS: {
			return {
				...state,
				isLoading: false,
				isError: false,
				errorReason: null,
				lastRefresh: Date.now(),
				popularMovies: action.popularMovies,
				popularPeople: action.popularPeople,
			};
		}
		default:
			return state;
	}
};
