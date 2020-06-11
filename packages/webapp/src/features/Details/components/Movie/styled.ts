import styled from 'styled-components';
import { Theme } from '@awesome-movie-app/components/lib/theme/theme';

export const LoadingText = styled.p`
	margin-top: 5rem;
	text-align: center;
	font-size: ${(props: { theme: Theme }) => props.theme.font.size.xxLarge};
`;
export const MovieDetailContainer = styled.article`
	margin: 2rem 1rem;
`;

export const MovieDetailHeader = styled.section`
	display: flex;
	@media (max-width: 576px) {
		flex-direction: column;
	}
`;

export const MovieHeaderNameContainer = styled.div`
	flex: 1 1 70%;
	padding: 1rem;
`;

export const MovieHeaderRatingContainer = styled.div`
	flex: 1 1 30%;
	padding: 1rem;
`;

export const MovieHeading = styled.h2`
	font-size: ${(props: { theme: Theme }) => props.theme.font.size.xxLarge};
	font-weight: ${(props: { theme: Theme }) => props.theme.font.weight.semiBold};
`;

export const MovieRating = styled.p`
	font-size: ${(props: { theme: Theme }) => props.theme.font.size.xxLarge};
	font-weight: ${(props: { theme: Theme }) => props.theme.font.weight.semiBold};
	margin-bottom: 0;
`;

export const MovieMeta = styled.span`
	font-size: ${(props: { theme: Theme }) => props.theme.font.size.medium};
	font-weight: ${(props: { theme: Theme }) => props.theme.font.weight.light};
	color: ${(props: { theme: Theme }) => props.theme.color.grayDark};
`;

export const MediaContainer = styled.section`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;

	@media (max-width: 576px) {
		flex-direction: column;
	}
`;

export const MoviePosterContainer = styled.div`
	flex: 1 1 30%;

	img {
		max-height: 500px;
	}
`;

export const MovieVideoContainer = styled.div`
	flex: 1 1 65%;
`;

export const MovieDescriptionContainer = styled.section`
	margin: 1rem 0;
`;

export const MovieSectionHeading = styled.h3`
	font-size: ${(props: { theme: Theme }) => props.theme.font.size.xLarge};
	font-weight: ${(props: { theme: Theme }) => props.theme.font.weight.semiBold};
	margin: 1rem 0;
`;

export const MovieDescription = styled.p`
	font-size: ${(props: { theme: Theme }) => props.theme.font.size.medium};
`;

export const MovieImageAndVideoContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const MovieVideoSection = styled.section`
	flex: 1;
`;
export const MovieImagesContainer = styled.div`
	padding: 2rem;
	margin: 1rem auto;
	width: 400px;
	height: 600px;

	img {
		max-height: 600px;
	}
`;
export const MovieVideosContainer = styled.div`
	padding: 2rem;
	margin: 1rem auto;
	max-width: 600px;
`;

export const MovieCrewContainer = styled.section``;

export const SimilarMoviesContainer = styled.section``;
