import isNil from 'lodash/isNil';
import { getHistory } from '@routes/history';
import { getMovieSlug, getPersonSlug } from '@utils/index';

const getApplicationHistory = (defaultHistory: any = null) => {
	if (window) {
		window.scrollTo(0, 0);
	}

	const history =
		!isNil(defaultHistory) && !isNil(defaultHistory.push)
			? defaultHistory
			: getHistory();

	return history;
};

export const goToMovieDetail = (
	movieId: number,
	movieName: string,
	defaultHistory: any = null
) => {
	try {
		const movieSlug = getMovieSlug(movieId.toString(), movieName);

		const history = getApplicationHistory(defaultHistory);

		history.push(movieSlug + history.location.search);
	} catch (error) {
		console.error('Failed to change movie route...', error);
	}
};

export const goToPersonDetail = (
	personId: number,
	personName: string,
	defaultHistory: any = null
) => {
	try {
		const personSlug = getPersonSlug(personId.toString(), personName);

		const history = getApplicationHistory(defaultHistory);

		history.push(personSlug + history.location.search);
	} catch (error) {
		console.error('Failed to change person route...', error);
	}
};
