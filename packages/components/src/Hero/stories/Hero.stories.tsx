import React from 'react';
import styled from 'styled-components';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Hero from '../Hero';
import { Theme } from '../../../theme/theme';

const Background = styled.div`
	padding: 2rem;
	margin: 1rem;
	background-color: ${(props: { theme: Theme }) =>
		props.theme.color.backgroundColor};
`;

export default {
	title: '2 - Components / Hero',
	component: Hero,
};

export const hero = () => (
	<Background>
		<Hero
			idSelector={text('idSelector', 'hero-component')}
			backgroundImage={text(
				'backgroundImage',
				'https://image.tmdb.org/t/p/w780/cfT29Im5VDvjE0RpyKOSdCKZal7.jpg'
			)}
			movieName={text('movieName', 'The Dark Knight')}
			movieRating={text('movieRating', '8.4 / 10')}
			mobieDescription={text(
				'mobieDescription',
				'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.'
			)}
			onTitleClick={action('onTitleClick')}
		/>
	</Background>
);
