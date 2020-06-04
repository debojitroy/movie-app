import React from 'react';
import styled from 'styled-components';
import MovieCarousel from '../MovieCarousel';
import { Theme } from '../../../theme/theme';

const BackgroundImage = styled.div`
	padding: 2rem;
	margin: 1rem auto;
	width: 400px;
	height: 400px;
	background-color: ${(props: { theme: Theme }) =>
		props.theme.color.backgroundColor};
`;

const BackgroundVideo = styled.div`
	padding: 2rem;
	margin: 1rem auto;
	max-width: 600px;
	background-color: ${(props: { theme: Theme }) =>
		props.theme.color.backgroundColor};
`;

export default {
	title: '2 - Components / MovieCarousel',
	component: MovieCarousel,
};

export const imageCarousel = () => (
	<BackgroundImage>
		<MovieCarousel
			isVideo={false}
			urls={[
				'https://image.tmdb.org/t/p/w300/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
				'https://image.tmdb.org/t/p/w300/wqBlk1ejN71gzKvlbXYrC1FfdsY.jpg',
				'https://image.tmdb.org/t/p/w300/vXMNOMkRhqrtsSZY6nCGCMkRslM.jpg',
			]}
		/>
	</BackgroundImage>
);

export const videoCarousel = () => (
	<BackgroundVideo>
		<MovieCarousel
			isVideo={true}
			urls={[
				'https://www.youtube.com/embed/nyc6RJEEe0U',
				'https://www.youtube.com/embed/LY19rHKAaAg',
				'https://www.youtube.com/embed/MfGfZwQ_qaY',
			]}
		/>
	</BackgroundVideo>
);
