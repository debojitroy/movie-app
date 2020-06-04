import React from 'react';
import styled from 'styled-components';
import { text } from '@storybook/addon-knobs';
import { Theme } from '../../../theme/theme';

export default {
	title: '1 - Design / Font',
};

const FontFamily = styled.p`
	margin: 2rem;
	font-size: 2rem;
	font-family: ${(props: { theme: Theme }) => props.theme.font.family};
	font-weight: ${(props: { theme: Theme }) => props.theme.font.weight.normal};
`;

const FontLight = styled.p`
	margin: 2rem;
	font-size: 2rem;
	font-family: ${(props: { theme: Theme }) => props.theme.font.family};
	font-weight: ${(props: { theme: Theme }) => props.theme.font.weight.light};
`;

const FontNormal = styled.p`
	margin: 2rem;
	font-size: 2rem;
	font-family: ${(props: { theme: Theme }) => props.theme.font.family};
	font-weight: ${(props: { theme: Theme }) => props.theme.font.weight.normal};
`;

const FontSemiBold = styled.p`
	margin: 2rem;
	font-size: 2rem;
	font-family: ${(props: { theme: Theme }) => props.theme.font.family};
	font-weight: ${(props: { theme: Theme }) => props.theme.font.weight.semiBold};
`;

const FontExtraBold = styled.p`
	margin: 2rem;
	font-size: 2rem;
	font-family: ${(props: { theme: Theme }) => props.theme.font.family};
	font-weight: ${(props: { theme: Theme }) =>
		props.theme.font.weight.extraBold};
`;
export const fontFamily = () => (
	<FontFamily>{"'Nunito Sans', sans-serif"}</FontFamily>
);

export const fontLight = () => (
	<FontLight>{text('text', 'The quick fox jumps over the lazy dog')}</FontLight>
);

export const fontNormal = () => (
	<FontNormal>
		{text('text', 'The quick fox jumps over the lazy dog')}
	</FontNormal>
);

export const fontSemiBold = () => (
	<FontSemiBold>
		{text('text', 'The quick fox jumps over the lazy dog')}
	</FontSemiBold>
);

export const fontExtraBold = () => (
	<FontExtraBold>
		{text('text', 'The quick fox jumps over the lazy dog')}
	</FontExtraBold>
);
