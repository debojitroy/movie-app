import styled from 'styled-components';
import { Theme } from '../../theme/theme';

export const ResultHeading = styled.h5`
	font-family: ${(props: { theme: Theme }) => props.theme.font.family};
	font-weight: ${(props: { theme: Theme }) =>
		props.theme.font.weight.extraBold};
	font-size: ${(props: { theme: Theme }) => props.theme.font.size.medium};
	color: ${(props: { theme: Theme }) => props.theme.color.textColor};
`;

export const ResultText = styled.p`
	font-family: ${(props: { theme: Theme }) => props.theme.font.family};
	font-weight: ${(props: { theme: Theme }) => props.theme.font.weight.semiBold};
	font-size: ${(props: { theme: Theme }) => props.theme.font.size.xSmall};
	color: ${(props: { theme: Theme }) => props.theme.color.textColor};
`;
export const NoResultsRow = styled.p`
	padding: 1rem;
	text-align: center;
	font-family: ${(props: { theme: Theme }) => props.theme.font.family};
	font-weight: ${(props: { theme: Theme }) => props.theme.font.weight.semiBold};
	font-size: ${(props: { theme: Theme }) => props.theme.font.size.small};
	color: ${(props: { theme: Theme }) => props.theme.color.textColor};
`;
