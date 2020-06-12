import { connect } from 'react-redux';
import { MovieAppReduxState } from '@reducers/index';
import { goToMovieDetail } from '@actions/navigate.action';
import { getPersonDetail } from '@features/Details/redux/actions/person.detail.action';
import PersonDetails from '@features/Details/components/Person';

const mapStateToProps = (state: MovieAppReduxState) => {
	const { persons } = state;
	return {
		personState: persons,
	};
};

const mapDispatchToProps = (dispatch: (action: any) => void, ownProps: any) => {
	return {
		getPersonDetails: (personId: number) => dispatch(getPersonDetail(personId)),
		onMovieClick: (movieId: number, movieName: string) =>
			goToMovieDetail(movieId, movieName, ownProps.history),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonDetails);
