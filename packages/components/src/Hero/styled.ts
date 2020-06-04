import styled from 'styled-components';
import { Theme } from '../../theme/theme';

export const HeroTextContainer = styled.div`
	margin: 0 1rem;
	padding: 1rem;
	display: inline-block;
	font-family: ${(props: { theme: Theme }) => props.theme.font.family};
	color: ${(props: { theme: Theme }) => props.theme.color.textColor};
	background: ${(props: { theme: Theme }) =>
		props.theme.color.backgroundWithOpacityHigh};
`;

export const HeroTitle = styled.h3`
	font-family: ${(props: { theme: Theme }) => props.theme.font.family};
	color: ${(props: { theme: Theme }) => props.theme.color.textColor};
	font-size: ${(props: { theme: Theme }) => props.theme.font.size.large};
	font-weight: ${(props: { theme: Theme }) => props.theme.font.weight.semiBold};

	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}
`;

export const HeroSubText = styled.p`
	font-family: ${(props: { theme: Theme }) => props.theme.font.family};
	color: ${(props: { theme: Theme }) => props.theme.color.textColor};
	font-size: ${(props: { theme: Theme }) => props.theme.font.size.xSmall};
`;
export const HeroDescription = styled.p`
	font-family: ${(props: { theme: Theme }) => props.theme.font.family};
	color: ${(props: { theme: Theme }) => props.theme.color.textColor};
	font-size: ${(props: { theme: Theme }) => props.theme.font.size.small};
`;
