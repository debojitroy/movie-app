import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { setConfig } from '@awesome-movie-app/core/lib/services/bootstrap';
import createStore, { getStore, getPersistor } from '@store/index';
import { getHistory } from '@routes/history';
import { BaseRoutes } from '@routes/index';
import ErrorBoundary from '@components/ErrorBoundary';
import SiteContainer from '@components/SiteContainer';

dotenv.config();

createStore();

setConfig({
	url: process.env.API_URL ? process.env.API_URL : '',
	apiKey: process.env.API_KEY ? process.env.API_KEY : '',
});

ReactDOM.render(
	<Router history={getHistory()}>
		<Provider store={getStore()}>
			<PersistGate loading={null} persistor={getPersistor()}>
				<ErrorBoundary
					text="Sorry, something went wrong"
					homeAction={() => {
						window.location.href = '/';
					}}
				>
					<SiteContainer>
						<BaseRoutes />
					</SiteContainer>
				</ErrorBoundary>
			</PersistGate>
		</Provider>
	</Router>,
	document.getElementById('awesome-movie-app')
);
