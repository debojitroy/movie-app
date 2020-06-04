import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import { Theme } from '../../theme/theme';

export const StyledCard = styled(Card)`
	max-width: 11rem;
`;

export const StyledCardImage = styled(Card.Img)`
	cursor: pointer;
`;

export const StyledCardBody = styled(Card.Body)`
	font-family: ${(props: { theme: Theme }) => props.theme.font.family};
	color: ${(props: { theme: Theme }) => props.theme.color.textColor};
	background: ${(props: { theme: Theme }) =>
		props.theme.color.backgroundWithOpacityHigh};
`;

export const StyledCardTitle = styled(Card.Title)`
	font-family: ${(props: { theme: Theme }) => props.theme.font.family};
	font-size: ${(props: { theme: Theme }) => props.theme.font.size.large};
	font-weight: ${(props: { theme: Theme }) => props.theme.font.weight.semiBold};
	color: ${(props: { theme: Theme }) => props.theme.color.textColor};
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
`;

export const StyledCardText = styled(Card.Text)`
	font-family: ${(props: { theme: Theme }) => props.theme.font.family};
	font-size: ${(props: { theme: Theme }) => props.theme.font.size.medium};
	color: ${(props: { theme: Theme }) => props.theme.color.textColor};
`;
