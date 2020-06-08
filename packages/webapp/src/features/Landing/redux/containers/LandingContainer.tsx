import { connect } from 'react-redux';
import { MovieAppReduxState } from '@reducers/index';
import { fetchPopularList } from '@features/Landing/redux/actions/landing.action';
import Landing from '@features/Landing/components';

const mapStateToProps = (state: MovieAppReduxState) => {
	const { landing } = state;
	return {
		isLoading: landing.isLoading,
		isError: landing.isError,
		lastRefresh: landing.lastRefresh,
		popularMovies: landing.popularMovies,
		popularPeople: landing.popularPeople,
	};
};

const mapDispatchToProps = (dispatch: (action: any) => void) => {
	return {
		fetchPopularList: () => dispatch(fetchPopularList()),
		onMovieClick: (movieId: number, movieName: string) => {
			console.log(`Movie Clicked ${movieId} ${movieName}`);
		},
		onPersonClick: (personId: number, personName: string) => {
			console.log(`Person Clicked ${personId} ${personName}`);
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
