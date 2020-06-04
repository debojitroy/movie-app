import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Toggle from '../Toggle';
import { Theme } from '../../../theme/theme';
import LightTheme from '../../../theme/light';
import DarkTheme from '../../../theme/dark';

const Background = styled.div`
	padding: 2rem;
	margin: 1rem;
	background-color: ${(props: { theme: Theme }) =>
		props.theme.color.backgroundColor};
	color: ${(props: { theme: Theme }) => props.theme.color.textColor};
	* {
		color: ${(props: { theme: Theme }) => props.theme.color.textColor};
	}
`;

const WrapperContainer: React.FC<{
	idSelector: string;
	leftText: string;
	rightText: string;
	offColor: string;
	onColor: string;
	offHandleColor: string;
	onHandleColor: string;
	onToggle: (isDark: boolean) => void;
}> = ({
	idSelector,
	leftText,
	rightText,
	offColor,
	onColor,
	offHandleColor,
	onHandleColor,
	onToggle,
}) => {
	const [isLight, setLight] = useState(false);

	const toggleButton = (checked: boolean) => {
		setLight(checked);
		onToggle(checked);
	};

	return (
		<ThemeProvider theme={isLight ? LightTheme : DarkTheme}>
			<Background>
				<Toggle
					idSelector={idSelector}
					leftText={leftText}
					rightText={rightText}
					isChecked={isLight}
					offColor={offColor}
					onColor={onColor}
					offHandleColor={offHandleColor}
					onHandleColor={onHandleColor}
					onChange={toggleButton}
				/>
			</Background>
		</ThemeProvider>
	);
};

export default {
	title: '2 - Components / Toggle',
	component: Toggle,
};

export const toggleTheme = () => (
	<WrapperContainer
		idSelector={text('idSelector', 'theme-toggle')}
		leftText={text('leftText', 'Dark')}
		rightText={text('rightText', 'Light')}
		offColor={text('offColor', '#fff')}
		onColor={text('onColor', '#000')}
		offHandleColor={text('offHandleColor', '#8cade4')}
		onHandleColor={text('onHandleColor', '#2693e6')}
		onToggle={action('onToggle')}
	/>
);
