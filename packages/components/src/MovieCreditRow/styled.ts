import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Theme } from '../../theme/theme';

export const CreditRow = styled(Row)`
	padding: 1rem;
	margin: 1rem;
`;
export const CreditLink = styled(Button)`
	font-family: ${(props: { theme: Theme }) => props.theme.font.family};
	color: ${(props: { theme: Theme }) => props.theme.color.textColor};
	text-decoration: underline;
`;

export const CreditImage = styled(Image)`
	box-sizing: border-box;
	cursor: pointer;
	&:hover {
		border: 2px solid
			${(props: { theme: Theme }) => props.theme.color.textColor};
	}
`;

export const CreditText = styled.p`
	font-family: ${(props: { theme: Theme }) => props.theme.font.family};
	color: ${(props: { theme: Theme }) => props.theme.color.textColor};
	padding: 0.375rem 0.75rem;
`;
