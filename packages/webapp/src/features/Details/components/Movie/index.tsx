/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import isNil from 'lodash/isNil';
import ReactPlayer from 'react-player';
import CardDeck from 'react-bootstrap/CardDeck';
import MovieCarousel from '@awesome-movie-app/components/lib/MovieCarousel/MovieCarousel';
import MovieCreditRow from '@awesome-movie-app/components/lib/MovieCreditRow/MovieCreditRow';
import MovieCard from '@awesome-movie-app/components/lib/MovieCard/MovieCard';
import { MovieDetailState } from '@features/Details/redux/reducers/movieDetail.reducer';
import {
	getMovieYear,
	convertNumberToCsv,
	convertMinutesToHourString,
} from '@utils/index';
import { getImageUrl, ImageType } from '@utils/image';
import {
	LoadingText,
	MovieDetailContainer,
	MovieDetailHeader,
	MovieHeaderNameContainer,
	MovieHeaderRatingContainer,
	MovieHeading,
	MovieRating,
	MovieMeta,
	MediaContainer,
	MoviePosterContainer,
	MovieVideoContainer,
	MovieDescriptionContainer,
	MovieSectionHeading,
	MovieDescription,
	MovieImagesContainer,
	MovieVideosContainer,
	MovieImageAndVideoContainer,
	MovieVideoSection,
	MovieCrewContainer,
	SimilarMoviesContainer,
} from './styled';

const pageFocusElement = 'movie-page-focus';

export interface MovieDetailProps {
	movieId: number;
	movieName?: string;
	movieState: MovieDetailState;
	getMovieDetails?: (movieId: number) => void;
	onMovieClick: (movieId: number, movieName: string) => void;
	onPersonClick: (personId: number, personName: string) => void;
}

const maxStaleMillis = 15 * 60 * 1000;

const MovieDetails: React.FC<MovieDetailProps> = ({
	movieId,
	movieState,
	getMovieDetails,
	onMovieClick,
	onPersonClick,
}) => {
	const [internalMovieId, setInternalMovieId] = useState(0);

	useEffect(() => {
		if (movieId === internalMovieId) return;

		setInternalMovieId(movieId);

		const movie = movieState[movieId];

		const isNewMovie = isNil(movie);

		const isFetchInProgress = !isNil(movie) && movie.isLoading;
		const isNotFound = !isNil(movie) && movie.notFound;
		const isStale =
			!isNil(movie) && !isNil(movie.lastUpdated) && !isNaN(movie.lastUpdated)
				? Date.now() - movie.lastUpdated > maxStaleMillis
				: false;

		const shouldFetch = isNewMovie && !isFetchInProgress;

		if (shouldFetch) {
			console.log(`New Movie: Fetching Movie Details for ${movieId}`);
			getMovieDetails && getMovieDetails(movieId);
		} else if (!isFetchInProgress && !isNotFound && isStale) {
			console.log(`Stale: Fetching Movie Details for ${movieId}`);
			getMovieDetails && getMovieDetails(movieId);
		} else {
			console.log(`Skipping: Movie Details for ${movieId}`);
		}

		const focusElement = document.querySelector(`#${pageFocusElement}`);

		if (focusElement) {
			focusElement.scrollIntoView();
		}
	}, [movieId]);

	const movie = movieState[movieId];

	const isNewMovie = isNil(movie);

	if (isNewMovie) {
		return (
			<MovieDetailContainer>
				<LoadingText id={pageFocusElement}>Please Wait...</LoadingText>
			</MovieDetailContainer>
		);
	}

	if (movie.notFound) {
		return (
			<MovieDetailContainer>
				<LoadingText id={pageFocusElement}>
					{"Sorry we couldn't find the requested movie"}
				</LoadingText>
			</MovieDetailContainer>
		);
	}

	if (movie.isError) {
		return (
			<MovieDetailContainer>
				<LoadingText id={pageFocusElement}>
					{'Sorry something went wrong. Try refreshing the page'}
				</LoadingText>
			</MovieDetailContainer>
		);
	}

	if (movie.isLoading || !movie.detail) {
		return (
			<MovieDetailContainer id={pageFocusElement}>
				<LoadingText>Please Wait...</LoadingText>
			</MovieDetailContainer>
		);
	}

	const heroVideoId =
		movie.detail.videos &&
		movie.detail.videos.results &&
		movie.detail.videos.results.filter((vid) => vid.site === 'YouTube').length >
			0
			? movie.detail.videos.results.filter((vid) => vid.site === 'YouTube')[0]
					.key
			: null;

	return (
		<MovieDetailContainer>
			<MovieDetailHeader>
				<MovieHeaderNameContainer>
					<MovieHeading id={pageFocusElement}>
						{movie.detail.title}
					</MovieHeading>
					<p>
						<MovieMeta>
							{getMovieYear(movie.detail.release_date)} |{' '}
							{convertMinutesToHourString(movie.detail.runtime)} |{' '}
							{movie.detail.genres.reduce(
								(acc, curr) =>
									acc !== '' ? `${acc}, ${curr.name}` : `${curr.name}`,
								''
							)}
						</MovieMeta>
					</p>
				</MovieHeaderNameContainer>
				<MovieHeaderRatingContainer>
					<MovieRating>
						{movie.detail.vote_average} <MovieMeta>/ 10</MovieMeta>
					</MovieRating>
					<p>
						<MovieMeta>
							({convertNumberToCsv(movie.detail.vote_count)})
						</MovieMeta>
					</p>
				</MovieHeaderRatingContainer>
			</MovieDetailHeader>
			<MediaContainer>
				<MoviePosterContainer>
					<img
						src={getImageUrl(ImageType.W300, movie.detail.poster_path)}
						alt={`${movie.detail.title} Poster Path`}
						loading="lazy"
					/>
				</MoviePosterContainer>
				{heroVideoId && (
					<MovieVideoContainer>
						<ReactPlayer url={`https://www.youtube.com/embed/${heroVideoId}`} />
					</MovieVideoContainer>
				)}
			</MediaContainer>
			<MovieDescriptionContainer>
				<MovieSectionHeading>Storyline</MovieSectionHeading>
				<MovieDescription>{movie.detail.overview}</MovieDescription>
			</MovieDescriptionContainer>
			<MovieImageAndVideoContainer>
				<MovieVideoSection>
					<MovieSectionHeading>Images</MovieSectionHeading>
					<MovieImagesContainer>
						<MovieCarousel
							isVideo={false}
							urls={
								movie.detail.images &&
								movie.detail.images.posters &&
								movie.detail.images.posters.length > 0
									? movie.detail.images.posters
											.slice(0, 10)
											.map((poster) =>
												getImageUrl(ImageType.W300, poster.file_path)
											)
									: []
							}
						/>
					</MovieImagesContainer>
				</MovieVideoSection>
				<MovieVideoSection>
					<MovieSectionHeading>Videos</MovieSectionHeading>
					<MovieVideosContainer>
						<MovieCarousel
							isVideo={true}
							urls={
								movie.detail.videos &&
								movie.detail.videos.results &&
								movie.detail.videos.results.filter(
									(vid) => vid.site === 'YouTube'
								).length > 0
									? movie.detail.videos.results
											.filter((vid) => vid.site === 'YouTube')
											.slice(0, 10)
											.map(
												(video) => `https://www.youtube.com/embed/${video.key}`
											)
									: []
							}
						/>
					</MovieVideosContainer>
				</MovieVideoSection>
			</MovieImageAndVideoContainer>
			<MovieCrewContainer>
				<MovieSectionHeading>Top Billed Cast</MovieSectionHeading>
				{movie.detail.credits &&
					movie.detail.credits.cast &&
					movie.detail.credits.cast.filter((x) => x.profile_path).length > 0 &&
					movie.detail.credits.cast
						.filter((x) => x.profile_path)
						.slice(0, 10)
						.map((cast) => (
							<MovieCreditRow
								key={cast.cast_id}
								imageUrl={getImageUrl(ImageType.W92, cast.profile_path)}
								imageAlt={`${cast.name} Profile Photo`}
								creditLink={cast.name}
								creditText={cast.character}
								creditLinkAction={() => onPersonClick(cast.id, cast.name)}
							/>
						))}
			</MovieCrewContainer>
			<SimilarMoviesContainer>
				<MovieSectionHeading>Similar Movies</MovieSectionHeading>
				<CardDeck>
					{movie.detail.similar &&
						movie.detail.similar.results &&
						movie.detail.similar.results.length > 0 &&
						movie.detail.similar.results
							.slice(0, 10)
							.map((similarMovie) => (
								<MovieCard
									key={similarMovie.id}
									imageUrl={getImageUrl(
										ImageType.W300,
										similarMovie.poster_path
									)}
									imageAlt={`${similarMovie.title} Poster`}
									cardTitle={similarMovie.title}
									cardText={`${similarMovie.vote_average} / 10`}
									cardAction={() =>
										onMovieClick(similarMovie.id, similarMovie.title)
									}
								/>
							))}
				</CardDeck>
			</SimilarMoviesContainer>
		</MovieDetailContainer>
	);
};

export default MovieDetails;
