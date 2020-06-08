import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoadingScreen from '@components/Loader';
import ErrorPage from '@components/ErrorPage';

const Home = lazy(() =>
	import('@features/Landing/redux/containers/LandingContainer')
);

export const BaseRoutes = () => (
	<Suspense fallback={<LoadingScreen loaderDescription="Please wait..." />}>
		<Switch>
			<Route exact path={'/'} component={Home} />
			<Route component={ErrorPage} />
		</Switch>
	</Suspense>
);
