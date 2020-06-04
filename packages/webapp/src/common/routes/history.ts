import isNil from 'lodash/isNil';
import { createBrowserHistory, History } from 'history';

let localHistory: History;

const initHistory = () => {
	localHistory = createBrowserHistory();
	return localHistory;
};

export const getHistory = () => {
	if (isNil(localHistory)) return initHistory();

	return localHistory;
};
