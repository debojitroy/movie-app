import { connect } from 'react-redux';
import { MovieAppReduxState } from '@reducers/index';
import { goToPersonDetail, goToMovieDetail } from '@actions/navigate.action';
import { getMovieDetail } from '@features/Details/redux/actions/movie.detail.action';
import MovieDetails from '@features/Details/components/Movie';

const mapStateToProps = (state: MovieAppReduxState) => {
	const { movies } = state;
	return {
		movieState: movies,
	};
};

const mapDispatchToProps = (dispatch: (action: any) => void, ownProps: any) => {
	return {
		getMovieDetails: (movieId: number) => dispatch(getMovieDetail(movieId)),
		onMovieClick: (movieId: number, movieName: string) =>
			goToMovieDetail(movieId, movieName, ownProps.history),
		onPersonClick: (personId: number, personName: string) =>
			goToPersonDetail(personId, personName, ownProps.history),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
