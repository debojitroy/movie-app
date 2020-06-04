import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import Button from '../Button';

export default {
	title: '999 - Sample / Button',
	component: Button,
};

export const withText = () => (
	<Button
		value={text('value', 'Click Me')}
		onClickHandler={action('button-click')}
	/>
);

withText.story = {
	parameters: {
		jest: ['Button.test.tsx'],
	},
};
