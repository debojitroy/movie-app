import { combineReducers } from 'redux';
import init, { InitState } from './init.reducer';
import landing, { LandingState } from '@features/Landing/redux/reducers/index';

export interface MovieAppReduxState {
	init: Readonly<InitState>;
	landing: Readonly<LandingState>;
}

export default combineReducers({
	init,
	landing,
});
