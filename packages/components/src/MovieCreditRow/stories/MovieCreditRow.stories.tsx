import React from 'react';
import styled from 'styled-components';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Container from 'react-bootstrap/Container';
import MovieCreditRow from '../MovieCreditRow';
import { Theme } from '../../../theme/theme';

const Background = styled(Container)`
	padding: 2rem;
	margin: 1rem;
	background-color: ${(props: { theme: Theme }) =>
		props.theme.color.backgroundColor};
`;

export default {
	title: '2 - Components / MovieCreditRow',
	component: MovieCreditRow,
};

export const movieCreditRow = () => (
	<Background>
		<MovieCreditRow
			imageUrl={text(
				'imageUrl1',
				'https://image.tmdb.org/t/p/w92/sY2mwpafcwqyYS1sOySu1MENDse.jpg'
			)}
			imageAlt={text('imageAlt1', 'Matthew McConaughey Profile Image')}
			creditLink={text('creditLink1', 'Matthew McConaughey')}
			creditText={text('creditText1', 'Joseph Cooper')}
			creditLinkAction={action('go_to_actor_profile_1')}
		/>
		<MovieCreditRow
			imageUrl={text(
				'imageUrl2',
				'https://image.tmdb.org/t/p/w92/lodMzLKSdrPcBry6TdoDsMN3Vge.jpg'
			)}
			imageAlt={text('imageAlt2', 'Jessica Chastain Profile Image')}
			creditLink={text('creditLink2', 'Jessica Chastain')}
			creditText={text('creditText2', 'Murphy Cooper')}
			creditLinkAction={action('go_to_actor_profile_2')}
		/>
		<MovieCreditRow
			imageUrl={text(
				'imageUrl3',
				'https://image.tmdb.org/t/p/w92/tLelKoPNiyJCSEtQTz1FGv4TLGc.jpg'
			)}
			imageAlt={text('imageAlt3', 'Anne Hathaway Profile Image')}
			creditLink={text('creditLink3', 'Anne Hathaway')}
			creditText={text('creditText3', 'Dr. Amelia Brand')}
			creditLinkAction={action('go_to_actor_profile_3')}
		/>
	</Background>
);

export const actorMoviesRow = () => (
	<Background>
		<MovieCreditRow
			imageUrl={text(
				'imageUrl1',
				'https://image.tmdb.org/t/p/w92/apUSR9WE7lMATBGYhzZ8RnPDYsK.jpg'
			)}
			imageAlt={text('imageAlt1', 'A Time to Kill Poster Image')}
			creditLink={text('creditLink1', 'A Time to Kill')}
			creditText={text('creditText1', 'Jake Brigance')}
			creditLinkAction={action('go_to_movie_1')}
		/>
		<MovieCreditRow
			imageUrl={text(
				'imageUrl2',
				'https://image.tmdb.org/t/p/w92/yLgJ4u1dRw4a7LPbUc2z1YhvVRY.jpg'
			)}
			imageAlt={text('imageAlt2', 'U-571 Poster Image')}
			creditLink={text('creditLink2', 'U-571')}
			creditText={text('creditText2', 'Lt. Andrew Tyler')}
			creditLinkAction={action('go_to_movie_2')}
		/>
		<MovieCreditRow
			imageUrl={text(
				'imageUrl3',
				'https://image.tmdb.org/t/p/w92/onSwn06Dtz4ez9iFEAWTEiNZKOF.jpg'
			)}
			imageAlt={text('imageAlt3', 'We Are Marshall Poster Image')}
			creditLink={text('creditLink3', 'We Are Marshall')}
			creditText={text('creditText3', 'Jack Lengyel')}
			creditLinkAction={action('go_to_movie_3')}
		/>
	</Background>
);
