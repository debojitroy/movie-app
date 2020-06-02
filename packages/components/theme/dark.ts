import merge from 'lodash/merge';
import cloneDeep from 'lodash/cloneDeep';
import { Theme, defaultTheme } from './theme';

const darkTheme: Theme = merge(cloneDeep(defaultTheme), {
	name: 'DARK',
	isDark: true,
	color: {
		backgroundColor: '#000',
		backgroundWithOpacityHigh: 'rgba(0,0,0, 0.8)',
		backgroundWithOpacityMedium: 'rgba(0,0,0, 0.5)',
		backgroundWithOpacityLow: 'rgba(0,0,0, 0.3)',
		textColor: '#fff',
		primaryColor: '#534bae',
		primaryTextColor: '#fff',
		inputBorder: '1px solid #aeb0b5',
		inputBorderFocus: '1px solid #f5f8fa',
		inputBorderShadowFocus: '0 0 0 1px #f5f8fa',
	},
});

export default darkTheme;
