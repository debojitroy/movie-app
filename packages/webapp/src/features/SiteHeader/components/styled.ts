import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import { Theme } from '@awesome-movie-app/components/lib/theme/theme';

export const SearchContainer = styled(Row)`
	padding: 2rem;
	margin: 1rem;
	background-color: ${(props: { theme: Theme }) =>
		props.theme.color.backgroundColor};
`;
