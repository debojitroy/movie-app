import React from 'react';
import styled from 'styled-components';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import CardDeck from 'react-bootstrap/CardDeck';
import MovieCard from '../MovieCard';
import { Theme } from '../../../theme/theme';

const Background = styled.div`
	padding: 2rem;
	margin: 1rem;
	background-color: ${(props: { theme: Theme }) =>
		props.theme.color.backgroundColor};
`;

export default {
	title: '2 - Components / MovieCard',
	component: MovieCard,
};

export const movieCard = () => (
	<Background>
		<CardDeck>
			<MovieCard
				imageUrl={text(
					'imageUrl',
					'https://image.tmdb.org/t/p/w300/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg'
				)}
				imageAlt={text('imageAlt', 'Interstellar Poster')}
				cardTitle={text('cardTitle', 'Interstellar')}
				cardText={text('cardText', '8.5 / 10')}
				cardAction={action('cardAction')}
			/>
			<MovieCard
				imageUrl={text(
					'imageUrl2',
					'https://image.tmdb.org/t/p/w300/85cWkCVftiVs0BVey6pxX8uNmLt.jpg'
				)}
				imageAlt={text('imageAlt2', 'The Dark Knight Poster')}
				cardTitle={text('cardTitle2', 'The Dark Knight')}
				cardText={text('cardText2', '8.4 / 10')}
				cardAction={action('cardAction2')}
			/>
			<MovieCard
				imageUrl={text(
					'imageUrl2',
					'https://image.tmdb.org/t/p/w300/85cWkCVftiVs0BVey6pxX8uNmLt.jpg'
				)}
				imageAlt={text('imageAlt2', 'The Dark Knight Poster')}
				cardTitle={text('cardTitle2', 'The Dark Knight')}
				cardText={text('cardText2', '8.4 / 10')}
				cardAction={action('cardAction2')}
			/>
			<MovieCard
				imageUrl={text(
					'imageUrl2',
					'https://image.tmdb.org/t/p/w300/85cWkCVftiVs0BVey6pxX8uNmLt.jpg'
				)}
				imageAlt={text('imageAlt2', 'The Dark Knight Poster')}
				cardTitle={text('cardTitle2', 'The Dark Knight')}
				cardText={text('cardText2', '8.4 / 10')}
				cardAction={action('cardAction2')}
			/>
			<MovieCard
				imageUrl={text(
					'imageUrl2',
					'https://image.tmdb.org/t/p/w300/85cWkCVftiVs0BVey6pxX8uNmLt.jpg'
				)}
				imageAlt={text('imageAlt2', 'The Dark Knight Poster')}
				cardTitle={text('cardTitle2', 'The Dark Knight')}
				cardText={text('cardText2', '8.4 / 10')}
				cardAction={action('cardAction2')}
			/>
			<MovieCard
				imageUrl={text(
					'imageUrl2',
					'https://image.tmdb.org/t/p/w300/85cWkCVftiVs0BVey6pxX8uNmLt.jpg'
				)}
				imageAlt={text('imageAlt2', 'The Dark Knight Poster')}
				cardTitle={text('cardTitle2', 'The Dark Knight')}
				cardText={text('cardText2', '8.4 / 10')}
				cardAction={action('cardAction2')}
			/>
			<MovieCard
				imageUrl={text(
					'imageUrl2',
					'https://image.tmdb.org/t/p/w300/85cWkCVftiVs0BVey6pxX8uNmLt.jpg'
				)}
				imageAlt={text('imageAlt2', 'The Dark Knight Poster')}
				cardTitle={text('cardTitle2', 'The Dark Knight')}
				cardText={text('cardText2', '8.4 / 10')}
				cardAction={action('cardAction2')}
			/>
			<MovieCard
				imageUrl={text(
					'imageUrl2',
					'https://image.tmdb.org/t/p/w300/85cWkCVftiVs0BVey6pxX8uNmLt.jpg'
				)}
				imageAlt={text('imageAlt2', 'The Dark Knight Poster')}
				cardTitle={text('cardTitle2', 'The Dark Knight')}
				cardText={text('cardText2', '8.4 / 10')}
				cardAction={action('cardAction2')}
			/>
			<MovieCard
				imageUrl={text(
					'imageUrl2',
					'https://image.tmdb.org/t/p/w300/85cWkCVftiVs0BVey6pxX8uNmLt.jpg'
				)}
				imageAlt={text('imageAlt2', 'The Dark Knight Poster')}
				cardTitle={text('cardTitle2', 'The Dark Knight')}
				cardText={text('cardText2', '8.4 / 10')}
				cardAction={action('cardAction2')}
			/>
			<MovieCard
				imageUrl={text(
					'imageUrl2',
					'https://image.tmdb.org/t/p/w300/85cWkCVftiVs0BVey6pxX8uNmLt.jpg'
				)}
				imageAlt={text('imageAlt2', 'The Dark Knight Poster')}
				cardTitle={text('cardTitle2', 'The Dark Knight')}
				cardText={text('cardText2', '8.4 / 10')}
				cardAction={action('cardAction2')}
			/>
		</CardDeck>
	</Background>
);
