import React, { useEffect } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Hero from '@awesome-movie-app/components/lib/Hero/Hero';
import MovieCard from '@awesome-movie-app/components/lib/MovieCard/MovieCard';
import {
	PopularMovie,
	PopularPeople,
} from '@features/Landing/redux/reducers/index';
import { getImageUrl, ImageType } from '@utils/image';
import { LandingContainer, LoadingText, DisplayContainer } from './styled';

export interface LandingProps {
	isLoading: boolean;
	isError: boolean;
	lastRefresh: number;
	popularMovies: PopularMovie[];
	popularPeople: PopularPeople[];
	fetchPopularList: () => void;
	onMovieClick: (movieId: number, movieName: string) => void;
	onPersonClick: (personId: number, personName: string) => void;
}

const maxStaleMillis = 15 * 60 * 1000;

const Landing: React.FC<LandingProps> = ({
	isLoading,
	isError,
	lastRefresh,
	popularMovies,
	popularPeople,
	fetchPopularList,
	onMovieClick,
	onPersonClick,
}) => {
	useEffect(() => {
		const milliSinceRefresh = Date.now() - lastRefresh;

		if (milliSinceRefresh > maxStaleMillis) {
			console.log(
				`Last refresh is older than max stale of 15 mins, forcing refresh...`
			);
			fetchPopularList && fetchPopularList();
		} else {
			console.log(`Skipping refresh`);
		}
	}, [lastRefresh, fetchPopularList]);

	return (
		<>
			<LandingContainer>
				{isLoading && <LoadingText>Please Wait ...</LoadingText>}
				{!isLoading && isError && (
					<LoadingText>Sorry Failed to get popular list ...</LoadingText>
				)}
				{!isLoading && !isError && popularMovies && popularMovies.length > 0 && (
					<DisplayContainer>
						<Hero
							idSelector="hero-component"
							backgroundImage={getImageUrl(
								ImageType.W780,
								popularMovies[0].backdropPath
							)}
							movieName={popularMovies[0].title}
							movieRating={`${popularMovies[0].voteAverage} / 10`}
							mobieDescription={popularMovies[0].overview}
							onTitleClick={() =>
								onMovieClick(popularMovies[0].id, popularMovies[0].title)
							}
						/>
					</DisplayContainer>
				)}
				{!isLoading && !isError && popularMovies && popularMovies.length > 0 && (
					<DisplayContainer>
						<h2>Popular Movies</h2>
						<CardDeck>
							{popularMovies.map((movie) => (
								<MovieCard
									key={movie.id}
									imageUrl={getImageUrl(ImageType.W300, movie.posterPath)}
									imageAlt={`${movie.title} Poster`}
									cardTitle={movie.title}
									cardText={`${movie.voteAverage} / 10`}
									cardAction={() => onMovieClick(movie.id, movie.title)}
								/>
							))}
						</CardDeck>
					</DisplayContainer>
				)}
				{!isLoading && !isError && popularPeople && popularPeople.length > 0 && (
					<DisplayContainer>
						<h2>Popular People</h2>
						<CardDeck>
							{popularPeople.map((people) => (
								<MovieCard
									key={people.id}
									imageUrl={getImageUrl(ImageType.W300, people.profilePath)}
									imageAlt={`${people.name} Poster`}
									cardTitle={people.name}
									cardText={''}
									cardAction={() => onPersonClick(people.id, people.name)}
								/>
							))}
						</CardDeck>
					</DisplayContainer>
				)}
			</LandingContainer>
		</>
	);
};

export default Landing;
