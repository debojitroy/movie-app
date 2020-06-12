import styled from 'styled-components';
import { Theme } from '../../theme/theme';

export const ResultRow = styled.div`
	padding-top: 1rem;
	padding-left: 1rem;
	border-bottom: 1px solid
		${(props: { theme: Theme }) => props.theme.color.grayDark};
	width: 100%;
	max-width: 600px;

	&:hover {
		background: ${(props: { theme: Theme }) =>
			props.theme.isDark
				? props.theme.color.grayDarker
				: props.theme.color.grayLight};
		cursor: pointer;
	}
`;
