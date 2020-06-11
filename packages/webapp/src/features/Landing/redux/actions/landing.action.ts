import { getPopularMovies } from '@awesome-movie-app/core/lib/services/getPopularMovies';
import { getPopularPeople } from '@awesome-movie-app/core/lib/services/getPopularPeople';
export const FETCH_POPULAR_LIST_START = '@LANDING/FETCH_POPULAR_LIST_START';
export const FETCH_POPULAR_LIST_SUCCESS = '@LANDING/FETCH_POPULAR_LIST_SUCCESS';
export const FETCH_POPULAR_LIST_ERROR = '@LANDING/FETCH_POPULAR_LIST_ERROR';

export const fetchPopularList = () => async (dispatch: any) => {
	dispatch({ type: FETCH_POPULAR_LIST_START });

	try {
		const popularMoviesResult = await getPopularMovies();
		const popularPeopleResult = await getPopularPeople();

		const popularMovies = popularMoviesResult.results
			? popularMoviesResult.results.slice(0, 12).map((movie: any) => ({
					popularity: movie.popularity,
					voteCount: movie.vote_count,
					video: movie.video,
					posterPath: movie.poster_path,
					id: movie.id,
					adult: movie.adult,
					backdropPath: movie.backdrop_path,
					originalLanguage: movie.original_language,
					originalTitle: movie.original_title,
					title: movie.title,
					voteAverage: movie.vote_average,
					overview: movie.overview,
					releaseDate: movie.release_date,
			  }))
			: [];

		const popularPeople = popularPeopleResult.results
			? popularPeopleResult.results.slice(0, 12).map((people: any) => ({
					popularity: people.popularity,
					name: people.name,
					id: people.id,
					profilePath: people.profile_path,
					gender: people.gender,
			  }))
			: [];

		dispatch({
			type: FETCH_POPULAR_LIST_SUCCESS,
			popularMovies,
			popularPeople,
		});
	} catch (error) {
		dispatch({ type: FETCH_POPULAR_LIST_ERROR, error });
		console.error('Failed to load popular list', error);
	}
};
