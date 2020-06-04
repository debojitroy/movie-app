import React from 'react';
import { text } from '@storybook/addon-knobs';
import logoImageFile from '../../images/Logo.png';
import Logo from '../Logo';

const logoImage = {
	src: logoImageFile,
	alt: 'Awesome Movie App Logo',
};

export default {
	title: '2 - Components / Logo',
	component: Logo,
};

export const logo = () => (
	<Logo
		imageSrc={logoImage.src}
		imageAlt={logoImage.alt}
		linkAddress={text('linkAddress', '#')}
		brandName={text('brandName', 'Awesome Movie App')}
	/>
);

logo.story = {
	parameters: {
		jest: ['Logo.test.tsx'],
	},
};
