import styled from 'styled-components';
import { Theme } from '../../theme/theme';

export const FooterContainer = styled.div`
	display: flex;
	justify-content: center;
	column-gap: 1rem;
	padding: 2rem;
	font-family: ${(props: { theme: Theme }) => props.theme.font.family};
	color: ${(props: { theme: Theme }) => props.theme.color.textColor};

	a {
		color: ${(props: { theme: Theme }) => props.theme.color.textColor};
		font-weight: ${(props: { theme: Theme }) =>
			props.theme.font.weight.semiBold};
		text-decoration: underline;
		cursor: pointer;
	}
`;
