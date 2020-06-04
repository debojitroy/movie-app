import { createGlobalStyle } from 'styled-components';
import { Theme } from '../../theme/theme';

const Global = createGlobalStyle`
	body {
		background-color: ${(props: { theme: Theme }) =>
			props.theme && props.theme.color && props.theme.color.backgroundColor
				? props.theme.color.backgroundColor
				: '#fff'};
		color: ${(props: { theme: Theme }) =>
			props.theme && props.theme.color && props.theme.color.textColor
				? props.theme.color.textColor
				: '#444A47'};
		font-family: ${(props: { theme: Theme }) =>
			props.theme && props.theme.font && props.theme.font.family
				? props.theme.font.family
				: "'Nunito Sans', sans-serif"};
	}
`;

export default Global;
