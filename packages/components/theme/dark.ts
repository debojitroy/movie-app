import merge from 'lodash/merge';
import cloneDeep from 'lodash/cloneDeep';
import { Theme, defaultTheme } from './theme';

const darkTheme: Theme = merge(cloneDeep(defaultTheme), {
	name: 'DARK',
	color: {
		backgroundColor: '#000',
		textColor: '#fff',
		primaryColor: '#534bae',
		primaryTextColor: '#fff',
	},
});

export default darkTheme;
