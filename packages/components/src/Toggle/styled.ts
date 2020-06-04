import styled from 'styled-components';
import { Theme } from '../../theme/theme';

export const ToggleLeftText = styled.span`
	font-family: ${(props: { theme: Theme }) => props.theme.font.family};
	color: ${(props: { theme: Theme }) => props.theme.color.textColor};
	font-weight: ${(props: { theme: Theme }) => props.theme.font.weight.semiBold};
	margin-right: 1rem;
`;

export const ToggleRightText = styled.span`
	font-family: ${(props: { theme: Theme }) => props.theme.font.family};
	color: ${(props: { theme: Theme }) => props.theme.color.textColor};
	font-weight: ${(props: { theme: Theme }) => props.theme.font.weight.semiBold};
	margin-left: 1rem;
`;
