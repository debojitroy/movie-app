import React from 'react';
import styled from 'styled-components';
import { text } from '@storybook/addon-knobs';
import SearchResultRow from '../SearchResultRow';
import { Theme } from '../../../theme/theme';

const Background = styled.div`
	padding: 2rem;
	margin: 1rem;
	background-color: ${(props: { theme: Theme }) =>
		props.theme.color.backgroundColor};
`;

export default {
	title: '2 - Components / SearchResultRow',
	component: SearchResultRow,
};

export const withImage = () => (
	<Background>
		<SearchResultRow
			idSelector={text('idSelector', 'search-row-0')}
			imageUrl={text(
				'imageUrl',
				'https://image.tmdb.org/t/p/w92/zlyhKMi2aLk25nOHnNm43MpZMtQ.jpg'
			)}
			imageAlt={text('imageAlt', 'Jack Reacher Movie Poster')}
			resultTitle={text('resultTitle', 'Jack Reacher')}
			resultSubtitle={text('resultSubtitle', '2012')}
			resultBody={text('resultBody', '6.5 / 10')}
		/>
	</Background>
);

withImage.story = {
	parameters: {
		jest: ['SearchResultRow.test.tsx'],
	},
};
