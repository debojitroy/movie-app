import styled from 'styled-components';
import { Theme } from '@awesome-movie-app/components/lib/theme/theme';

export const LandingContainer = styled.section`
	margin: 1rem;
	padding: 1rem;
`;

export const LoadingText = styled.p`
	margin-top: 5rem;
	text-align: center;
	font-size: ${(props: { theme: Theme }) => props.theme.font.size.xxLarge};
`;

export const DisplayContainer = styled.section`
	margin: 2rem 0;
`;
