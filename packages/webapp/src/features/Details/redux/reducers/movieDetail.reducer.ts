import {
	MovieDetail,
	MOVIE_DETAIL_START,
	MOVIE_DETAIL_SUCCESS,
	MOVIE_DETAIL_NOT_FOUND,
	MOVIE_DETAIL_ERROR,
} from '@features/Details/redux/actions/movie.detail.action';

export interface MovieRecord {
	isLoading: boolean;
	isError: boolean;
	notFound: boolean;
	lastUpdated: number;
	error?: string;
	detail?: MovieDetail;
}

export interface MovieDetailState {
	[key: number]: MovieRecord;
}

const initState: MovieDetailState = {};

export default (
	state: MovieDetailState = initState,
	action: {
		type: string;
		movieId: number;
		notFound?: boolean;
		error?: string;
		detail?: MovieDetail;
	}
) => {
	switch (action.type) {
		case MOVIE_DETAIL_START: {
			const movie = state[action.movieId];
			let newMovie = {};

			if (movie) {
				newMovie = {
					...movie,
					isLoading: true,
					isError: false,
					error: null,
					notFound: false,
				};
			} else {
				newMovie = {
					isLoading: true,
					isError: false,
					error: null,
					notFound: false,
					lastUpdated: 0,
				};
			}

			return {
				...state,
				[action.movieId]: newMovie,
			};
		}
		case MOVIE_DETAIL_SUCCESS: {
			const newMovie = {
				isLoading: false,
				isError: false,
				notFound: false,
				error: null,
				detail: action.detail,
				lastUpdated: Date.now(),
			};

			return {
				...state,
				[action.movieId]: newMovie,
			};
		}
		case MOVIE_DETAIL_NOT_FOUND: {
			const movie = state[action.movieId];
			let newMovie = {};

			if (movie) {
				newMovie = {
					...movie,
					isLoading: false,
					isError: false,
					error: null,
					notFound: true,
					lastUpdated: Date.now(),
				};
			} else {
				newMovie = {
					isLoading: false,
					isError: false,
					error: null,
					notFound: true,
					lastUpdated: Date.now(),
				};
			}

			return {
				...state,
				[action.movieId]: newMovie,
			};
		}
		case MOVIE_DETAIL_ERROR: {
			const movie = state[action.movieId];
			let newMovie = {};

			if (movie) {
				newMovie = {
					...movie,
					isLoading: false,
					isError: true,
					error: action.error,
					notFound: false,
					lastUpdated: Date.now(),
				};
			} else {
				newMovie = {
					isLoading: false,
					isError: true,
					error: action.error,
					notFound: false,
					lastUpdated: Date.now(),
				};
			}

			return {
				...state,
				[action.movieId]: newMovie,
			};
		}
		default:
			return state;
	}
};
