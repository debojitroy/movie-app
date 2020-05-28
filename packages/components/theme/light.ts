import merge from 'lodash/merge';
import cloneDeep from 'lodash/cloneDeep';
import { Theme, defaultTheme } from './theme';

const lightTheme: Theme = merge(cloneDeep(defaultTheme), { name: 'LIGHT' });

export default lightTheme;
