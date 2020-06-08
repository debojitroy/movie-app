import { THEME_DARK } from '@config/constants';
import { CHANGE_THEME } from '@actions/init.action';

export interface InitState {
	appName: string;
	currentTheme: string;
}

const initState: InitState = {
	appName: 'Awesome Movie App',
	currentTheme: THEME_DARK,
};

export default (state = initState, action: any) => {
	switch (action.type) {
		case CHANGE_THEME:
			return {
				...state,
				currentTheme: action.payload.theme,
			};
		default:
			return state;
	}
};
