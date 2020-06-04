import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import { Theme } from '../../theme/theme';

export const StyledNav = styled(Navbar)`
	font-family: ${(props: { theme: Theme }) => props.theme.font.family};
	font-weight: ${(props: { theme: Theme }) => props.theme.font.weight.semiBold};
`;
