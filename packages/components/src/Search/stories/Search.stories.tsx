import React from 'react';
import styled from 'styled-components';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Search, { MovieSuggestion } from '../Search';
import { Theme } from '../../../theme/theme';

const Background = styled.div`
	padding: 2rem;
	margin: 1rem;
	background-color: ${(props: { theme: Theme }) =>
		props.theme.color.backgroundColor};
`;

const movies: MovieSuggestion[] = [
	{
		moviePosterUrl:
			'https://image.tmdb.org/t/p/w92/zlyhKMi2aLk25nOHnNm43MpZMtQ.jpg',
		movieId: '32028',
		movieName: 'Jack Reacher',
		movieYear: '2012',
		movieRating: '6.5',
		movieSlug: '/32028/jack-reacher/',
	},
	{
		moviePosterUrl:
			'https://image.tmdb.org/t/p/w92/cCTJPelKGLhALq3r51A9uMonxKj.jpg',
		movieId: '320288',
		movieName: 'Dark Phoenix',
		movieYear: '2019',
		movieRating: '6',
		movieSlug: '/32028/dark-phoenix/',
	},
	{
		moviePosterUrl:
			'https://image.tmdb.org/t/p/w92/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
		movieId: '155',
		movieName: 'The Dark Knight',
		movieYear: '2008',
		movieRating: '8.4',
		movieSlug: '/155/the-dark-knight/',
	},
	{
		moviePosterUrl:
			'https://image.tmdb.org/t/p/w92/i8QWXu6dGuTKKerJtnd0A4lUpbv.jpg',
		movieId: '290859',
		movieName: 'Terminator: Dark Fate',
		movieYear: '2019',
		movieRating: '6.5',
		movieSlug: '/290859/terminator-dark-fate/',
	},
	{
		moviePosterUrl:
			'https://image.tmdb.org/t/p/w92/hJ6YEbrjFvToa5c7IiUqILoB6Je.jpg',
		movieId: '552178',
		movieName: 'Dark Waters',
		movieYear: '2019',
		movieRating: '7.4',
		movieSlug: '/552178/dark-waters/',
	},
];

const searchFunction = async (value: string): Promise<MovieSuggestion[]> => {
	return new Promise((resolve) => {
		const inputValue = value.trim().toLowerCase();
		const inputLength = inputValue.length;

		if (inputLength === 0) {
			resolve([]);
		} else {
			const results = movies.filter((movie) =>
				movie.movieName.toLowerCase().startsWith(value.toLowerCase())
			);

			if (results.length > 0) {
				resolve(results);
			} else
				resolve([
					{
						moviePosterUrl: '',
						movieId: '',
						movieName: '',
						movieYear: '',
						movieRating: '',
						movieSlug: '',
					},
				]);
		}
	});
};

export default {
	title: '2 - Components / Search',
	component: Search,
};

export const search = () => (
	<Background>
		<Search
			idSelector={text('idSelector', 'movie-autocomplete')}
			placeholder={text('placeholder', 'Type d to see results')}
			movieSuggestions={movies}
			search={searchFunction}
			onMovieClick={action('onMovieClick')}
		/>
	</Background>
);
