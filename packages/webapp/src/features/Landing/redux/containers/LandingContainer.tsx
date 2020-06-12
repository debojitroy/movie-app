import { connect } from 'react-redux';
import { MovieAppReduxState } from '@reducers/index';
import { goToPersonDetail, goToMovieDetail } from '@actions/navigate.action';
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

const mapDispatchToProps = (dispatch: (action: any) => void, ownProps: any) => {
	return {
		fetchPopularList: () => dispatch(fetchPopularList()),
		onMovieClick: (movieId: number, movieName: string) =>
			goToMovieDetail(movieId, movieName, ownProps.history),
		onPersonClick: (personId: number, personName: string) =>
			goToPersonDetail(personId, personName, ownProps.history),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
