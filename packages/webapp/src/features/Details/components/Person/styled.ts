import styled from 'styled-components';
import { Theme } from '@awesome-movie-app/components/lib/theme/theme';

export const LoadingText = styled.p`
	margin-top: 5rem;
	text-align: center;
	font-size: ${(props: { theme: Theme }) => props.theme.font.size.xxLarge};
`;
export const PersonDetailContainer = styled.article`
	margin: 2rem 1rem;
`;

export const PersonName = styled.h2`
	font-size: ${(props: { theme: Theme }) => props.theme.font.size.xxLarge};
	font-weight: ${(props: { theme: Theme }) => props.theme.font.weight.semiBold};
	margin-bottom: 1rem;
`;

export const PersonMediaContainer = styled.section`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;

	@media (max-width: 576px) {
		flex-direction: column;
	}
`;

export const PersonPosterContainer = styled.div`
	flex: 1 1 30%;

	img {
		max-height: 500px;
		margin-bottom: 1rem;
	}
`;
export const PersonBioContainer = styled.div`
	flex: 1 1 65%;
	padding: 1rem;

	h3 {
		font-size: ${(props: { theme: Theme }) => props.theme.font.size.xLarge};
		font-weight: ${(props: { theme: Theme }) =>
			props.theme.font.weight.semiBold};
	}

	p {
		font-size: ${(props: { theme: Theme }) => props.theme.font.size.medium};
	}
`;

export const PersonMeta = styled.p`
	font-size: ${(props: { theme: Theme }) => props.theme.font.size.medium};
	font-weight: ${(props: { theme: Theme }) => props.theme.font.weight.light};
	color: ${(props: { theme: Theme }) => props.theme.color.grayDark};
	margin-bottom: 1rem;
`;

export const PersonImagesContainer = styled.div`
	h3 {
		font-size: ${(props: { theme: Theme }) => props.theme.font.size.xLarge};
		font-weight: ${(props: { theme: Theme }) =>
			props.theme.font.weight.semiBold};
		margin-bottom: 1rem;
	}
`;

export const PersonImages = styled.div`
	padding: 2rem;
	margin: 1rem auto;
	width: 400px;
	height: 600px;

	img {
		max-height: 600px;
	}
`;

export const PersonCastContainer = styled.section`
	h3 {
		font-size: ${(props: { theme: Theme }) => props.theme.font.size.xLarge};
		font-weight: ${(props: { theme: Theme }) =>
			props.theme.font.weight.semiBold};
		margin-bottom: 1rem;
	}
`;
