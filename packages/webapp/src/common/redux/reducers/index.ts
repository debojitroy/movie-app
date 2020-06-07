import { combineReducers } from 'redux';
import init, { InitState } from './init.reducer';

export interface MovieAppReduxState {
	init: Readonly<InitState>;
}

export default combineReducers({
	init,
});
