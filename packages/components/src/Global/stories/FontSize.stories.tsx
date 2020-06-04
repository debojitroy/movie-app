import React from 'react';
import styled from 'styled-components';
import { text } from '@storybook/addon-knobs';
import { Theme } from '../../../theme/theme';

export default {
	title: '1 - Design / Font Size',
};

const FontSizeXSmall = styled.p`
	margin: 2rem;
	font-size: ${(props: { theme: Theme }) => props.theme.font.size.xSmall};
	font-family: ${(props: { theme: Theme }) => props.theme.font.family};
	font-weight: ${(props: { theme: Theme }) => props.theme.font.weight.normal};
`;

const FontSizeSmall = styled.p`
	margin: 2rem;
	font-size: ${(props: { theme: Theme }) => props.theme.font.size.small};
	font-family: ${(props: { theme: Theme }) => props.theme.font.family};
	font-weight: ${(props: { theme: Theme }) => props.theme.font.weight.normal};
`;

const FontSizeMedium = styled.p`
	margin: 2rem;
	font-size: ${(props: { theme: Theme }) => props.theme.font.size.medium};
	font-family: ${(props: { theme: Theme }) => props.theme.font.family};
	font-weight: ${(props: { theme: Theme }) => props.theme.font.weight.normal};
`;

const FontSizeLarge = styled.p`
	margin: 2rem;
	font-size: ${(props: { theme: Theme }) => props.theme.font.size.large};
	font-family: ${(props: { theme: Theme }) => props.theme.font.family};
	font-weight: ${(props: { theme: Theme }) => props.theme.font.weight.normal};
`;

const FontSizeXLarge = styled.p`
	margin: 2rem;
	font-size: ${(props: { theme: Theme }) => props.theme.font.size.xLarge};
	font-family: ${(props: { theme: Theme }) => props.theme.font.family};
	font-weight: ${(props: { theme: Theme }) => props.theme.font.weight.normal};
`;

const FontSizeXXLarge = styled.p`
	margin: 2rem;
	font-size: ${(props: { theme: Theme }) => props.theme.font.size.xxLarge};
	font-family: ${(props: { theme: Theme }) => props.theme.font.family};
	font-weight: ${(props: { theme: Theme }) => props.theme.font.weight.normal};
`;

const FontSizeXXXLarge = styled.p`
	margin: 2rem;
	font-size: ${(props: { theme: Theme }) => props.theme.font.size.xxxLarge};
	font-family: ${(props: { theme: Theme }) => props.theme.font.family};
	font-weight: ${(props: { theme: Theme }) => props.theme.font.weight.normal};
`;

const FontSizeXXXXLarge = styled.p`
	margin: 2rem;
	font-size: ${(props: { theme: Theme }) => props.theme.font.size.xxxxLarge};
	font-family: ${(props: { theme: Theme }) => props.theme.font.family};
	font-weight: ${(props: { theme: Theme }) => props.theme.font.weight.normal};
`;

export const X_Small = () => (
	<FontSizeXSmall>
		{text('text', 'The quick fox jumps over the lazy dog')}
	</FontSizeXSmall>
);

export const Small = () => (
	<FontSizeSmall>
		{text('text', 'The quick fox jumps over the lazy dog')}
	</FontSizeSmall>
);

export const Medium = () => (
	<FontSizeMedium>
		{text('text', 'The quick fox jumps over the lazy dog')}
	</FontSizeMedium>
);

export const Large = () => (
	<FontSizeLarge>
		{text('text', 'The quick fox jumps over the lazy dog')}
	</FontSizeLarge>
);

export const X_Large = () => (
	<FontSizeXLarge>
		{text('text', 'The quick fox jumps over the lazy dog')}
	</FontSizeXLarge>
);

export const XX_Large = () => (
	<FontSizeXXLarge>
		{text('text', 'The quick fox jumps over the lazy dog')}
	</FontSizeXXLarge>
);

export const XXX_Large = () => (
	<FontSizeXXXLarge>
		{text('text', 'The quick fox jumps over the lazy dog')}
	</FontSizeXXXLarge>
);

export const XXXX_Large = () => (
	<FontSizeXXXXLarge>
		{text('text', 'The quick fox jumps over the lazy dog')}
	</FontSizeXXXXLarge>
);
