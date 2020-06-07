import React from 'react';
import styled from 'styled-components';
import { Theme } from '@awesome-movie-app/components/lib/theme/theme';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

const StyledJumbotron = styled(Jumbotron)`
	background-color: ${(props: { theme: Theme }) =>
		props.theme.color.backgroundWithOpacityLow};
`;

const ErrorPage: React.FC = () => {
	return (
		<StyledJumbotron>
			<h1 id="error-heading">Sorry, the requested page doesnt exist</h1>
			<Button
				id="error-action"
				variant="outline-danger"
				onClick={() => {
					window.location.href = '/';
				}}
			>
				Go back Home
			</Button>
		</StyledJumbotron>
	);
};

export default ErrorPage;
