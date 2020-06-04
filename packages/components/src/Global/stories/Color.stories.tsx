import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../theme/theme';

export default {
	title: '1 - Design / Color',
};

const Background = styled.div`
	width: 200px;
	height: 50px;
	padding: 1rem;
	margin: 1rem;
	background-color: ${(props: { theme: Theme }) =>
		props.theme.color.backgroundColor};
	border-radius: 5px;
	border: 2px solid black;
`;

const Primary = styled.div`
	width: 200px;
	height: 50px;
	padding: 1rem;
	margin: 1rem;
	background-color: ${(props: { theme: Theme }) =>
		props.theme.color.primaryColor};
	border-radius: 5px;
`;

const Success = styled.div`
	width: 200px;
	height: 50px;
	padding: 1rem;
	margin: 1rem;
	background-color: ${(props: { theme: Theme }) => props.theme.color.success};
	border-radius: 5px;
`;

const Warning = styled.div`
	width: 200px;
	height: 50px;
	padding: 1rem;
	margin: 1rem;
	background-color: ${(props: { theme: Theme }) => props.theme.color.warning};
	border-radius: 5px;
`;

const Danger = styled.div`
	width: 200px;
	height: 50px;
	padding: 1rem;
	margin: 1rem;
	background-color: ${(props: { theme: Theme }) => props.theme.color.danger};
	border-radius: 5px;
`;

const GrayDark = styled.div`
	width: 200px;
	height: 50px;
	padding: 1rem;
	margin: 1rem;
	background-color: ${(props: { theme: Theme }) => props.theme.color.grayDark};
	border-radius: 5px;
`;

const GrayLight = styled.div`
	width: 200px;
	height: 50px;
	padding: 1rem;
	margin: 1rem;
	background-color: ${(props: { theme: Theme }) => props.theme.color.grayLight};
	border-radius: 5px;
`;

const GrayLighter = styled.div`
	width: 200px;
	height: 50px;
	padding: 1rem;
	margin: 1rem;
	background-color: ${(props: { theme: Theme }) =>
		props.theme.color.grayLighter};
	border-radius: 5px;
`;

const TextColor = styled.div`
	width: 200px;
	height: 50px;
	padding: 0.5rem;
	margin: 1rem;
	text-align: center;
	font-family: ${(props: { theme: Theme }) => props.theme.font.family};
	color: ${(props: { theme: Theme }) => props.theme.color.textColor};
	background-color: ${(props: { theme: Theme }) =>
		props.theme.color.backgroundColor};
	border-radius: 5px;
	border: 2px solid black;
`;

const PrimaryTextColor = styled.div`
	width: 200px;
	height: 50px;
	padding: 0.5rem;
	margin: 1rem;
	text-align: center;
	font-family: ${(props: { theme: Theme }) => props.theme.font.family};
	color: ${(props: { theme: Theme }) => props.theme.color.primaryTextColor};
	background-color: ${(props: { theme: Theme }) =>
		props.theme.color.primaryColor};
	border-radius: 5px;
	border: 2px solid black;
`;

export const background = () => <Background />;

export const primary = () => <Primary />;

export const success = () => <Success />;

export const warning = () => <Warning />;

export const danger = () => <Danger />;

export const grayDark = () => <GrayDark />;

export const grayLight = () => <GrayLight />;

export const grayLighter = () => <GrayLighter />;
export const text = () => <TextColor>This is text</TextColor>;

export const primaryText = () => (
	<PrimaryTextColor>This is Primary Text</PrimaryTextColor>
);
