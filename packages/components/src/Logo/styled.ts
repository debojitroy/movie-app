import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import { Theme } from '../../theme/theme';

export const StyledNav = styled(Navbar)`
	font-family: ${(props: { theme: Theme }) => props.theme.font.family};
	font-weight: ${(props: { theme: Theme }) => props.theme.font.weight.semiBold};
	background-color: ${(props: { theme: Theme }) =>
		props.theme.color.backgroundColor};
	color: ${(props: { theme: Theme }) => props.theme.color.textColor};
`;

export const StyledBrand = styled(Navbar.Brand)`
	font-family: ${(props: { theme: Theme }) => props.theme.font.family};
	font-weight: ${(props: { theme: Theme }) => props.theme.font.weight.semiBold};
	color: ${(props: { theme: Theme }) => props.theme.color.textColor} !important;
`;
