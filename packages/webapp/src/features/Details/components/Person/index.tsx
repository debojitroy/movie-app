/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import isNil from 'lodash/isNil';
import MovieCarousel from '@awesome-movie-app/components/lib/MovieCarousel/MovieCarousel';
import MovieCreditRow from '@awesome-movie-app/components/lib/MovieCreditRow/MovieCreditRow';
import { PersonDetailState } from '@features/Details/redux/reducers/personDetail.reducer';
import { getImageUrl, ImageType } from '@utils/image';
import { getMovieYear } from '@utils/index';
import {
	LoadingText,
	PersonDetailContainer,
	PersonName,
	PersonMediaContainer,
	PersonPosterContainer,
	PersonBioContainer,
	PersonMeta,
	PersonImagesContainer,
	PersonImages,
	PersonCastContainer,
} from './styled';

export interface PersonDetailProps {
	personId: number;
	personName?: string;
	personState: PersonDetailState;
	getPersonDetails?: (personId: number) => void;
	onMovieClick: (movieId: number, movieName: string) => void;
}

const maxStaleMillis = 15 * 60 * 1000;

const PersonDetails: React.FC<PersonDetailProps> = ({
	personId,
	personState,
	getPersonDetails,
	onMovieClick,
}) => {
	const [internalPersonId, setInternalPersonId] = useState(-1);

	useEffect(() => {
		if (personId === internalPersonId) return;

		setInternalPersonId(personId);

		const person = personState[personId];

		const isNewPerson = isNil(person);

		const isFetchInProgress = !isNil(person) && person.isLoading;
		const isNotFound = !isNil(person) && person.notFound;
		const isStale =
			!isNil(person) && !isNil(person.lastUpdated) && !isNaN(person.lastUpdated)
				? Date.now() - person.lastUpdated > maxStaleMillis
				: false;

		const shouldFetch = isNewPerson && !isFetchInProgress;

		if (shouldFetch) {
			console.log(`New Person: Fetching Person Details for ${personId}`);
			getPersonDetails && getPersonDetails(personId);
		} else if (!isFetchInProgress && !isNotFound && isStale) {
			console.log(`Stale: Fetching Person Details for ${personId}`);
			getPersonDetails && getPersonDetails(personId);
		} else {
			console.log(`Skipping: Person Details for ${personId}`);
		}
	}, [personId]);

	const person = personState[personId];

	const isNewPerson = isNil(person);

	if (isNewPerson) {
		return (
			<PersonDetailContainer>
				<LoadingText>Please Wait...</LoadingText>
			</PersonDetailContainer>
		);
	}

	if (person.notFound) {
		return (
			<PersonDetailContainer>
				<LoadingText>
					{"Sorry we couldn't find the requested person"}
				</LoadingText>
			</PersonDetailContainer>
		);
	}

	if (person.isError) {
		return (
			<PersonDetailContainer>
				<LoadingText>
					{'Sorry something went wrong. Try refreshing the page'}
				</LoadingText>
			</PersonDetailContainer>
		);
	}

	if (person.isLoading || !person.detail) {
		return (
			<PersonDetailContainer>
				<LoadingText>Please Wait...</LoadingText>
			</PersonDetailContainer>
		);
	}
	return (
		<PersonDetailContainer>
			<PersonName>{person.detail.name}</PersonName>
			<PersonMediaContainer>
				<PersonPosterContainer>
					<img
						src={getImageUrl(ImageType.W300, person.detail.profile_path)}
						alt={`${person.detail.name} Profile Path`}
					/>
				</PersonPosterContainer>
				<PersonBioContainer>
					<h3>Bio</h3>
					<p>{person.detail.biography}</p>
				</PersonBioContainer>
			</PersonMediaContainer>
			<PersonMeta>
				{`${person.detail.birthday} | ${person.detail.known_for_department} | ${person.detail.place_of_birth}`}
			</PersonMeta>
			<PersonImagesContainer>
				<h3>Images</h3>
				<PersonImages>
					<MovieCarousel
						isVideo={false}
						urls={
							person.detail.images &&
							person.detail.images.profiles &&
							person.detail.images.profiles.length > 0
								? person.detail.images.profiles.map((poster) =>
										getImageUrl(ImageType.W300, poster.file_path)
								  )
								: []
						}
					/>
				</PersonImages>
			</PersonImagesContainer>
			<PersonCastContainer>
				<h3>Movie Credits</h3>
				{person.detail.movie_credits &&
					person.detail.movie_credits.cast &&
					person.detail.movie_credits.cast.length > 0 &&
					person.detail.movie_credits.cast.map((movie) => (
						<MovieCreditRow
							key={movie.id}
							imageUrl={getImageUrl(ImageType.W92, movie.poster_path)}
							imageAlt={`${movie.title} Profile Photo`}
							creditLink={`${movie.title} (${getMovieYear(
								movie.release_date
							)})`}
							creditText={movie.character}
							creditLinkAction={() => onMovieClick(movie.id, movie.title)}
						/>
					))}
			</PersonCastContainer>
		</PersonDetailContainer>
	);
};

export default PersonDetails;
