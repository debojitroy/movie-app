import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoadingScreen from '@components/Loader';
import ErrorPage from '@components/ErrorPage';

const Home = lazy(() =>
	import('@features/Landing/redux/containers/LandingContainer')
);

const MovieDetail = lazy(() =>
	import('@features/Details/redux/containers/Movie/index')
);

const PersonDetail = lazy(() =>
	import('@features/Details/redux/containers/Person/index')
);

export const BaseRoutes = () => (
	<Suspense fallback={<LoadingScreen loaderDescription="Please wait..." />}>
		<Switch>
			<Route exact path={'/'} component={Home} />
			<Route
				path={'/movie/:movieId/:movieName'}
				render={(props: any) => {
					let movieId = parseInt(props.match.params.movieId);

					if (isNaN(movieId) || movieId <= 0) {
						movieId = 0;
					}

					return (
						<MovieDetail
							{...props}
							movieId={movieId}
							movieName={props.match.params.movieName}
						/>
					);
				}}
			/>
			<Route
				path={'/person/:personId/:personName'}
				render={(props: any) => {
					let personId = parseInt(props.match.params.personId);

					if (isNaN(personId) || personId <= 0) {
						personId = 0;
					}

					return (
						<PersonDetail
							{...props}
							personId={personId}
							personName={props.match.params.personName}
						/>
					);
				}}
			/>
			<Route component={ErrorPage} />
		</Switch>
	</Suspense>
);
