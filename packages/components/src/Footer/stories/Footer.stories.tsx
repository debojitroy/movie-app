import React from 'react';
import styled from 'styled-components';
import Footer from '../Footer';
import { Theme } from '../../../theme/theme';

const Background = styled.div`
	padding: 2rem;
	margin: 1rem;
	background-color: ${(props: { theme: Theme }) =>
		props.theme.color.backgroundColor};
`;

export default {
	title: '2 - Components / Footer',
	component: Footer,
};

export const footer = () => (
	<Background>
		<Footer>
			<p>
				Powered by{' '}
				<a
					href="https://www.themoviedb.org/?language=en-US"
					target="_blank"
					rel="noreferrer"
				>
					The Movie DB (TMDB)
				</a>
			</p>
			<p>
				Built by{' '}
				<a href="https://debojitroy.com/" target="_blank" rel="noreferrer">
					Debojit Roy
				</a>
			</p>
			<p>
				&nbsp;&nbsp;
				<a
					href="https://github.com/debojitroy/movie-app/"
					target="_blank"
					rel="noreferrer"
				>
					Source
				</a>
			</p>
		</Footer>
	</Background>
);
