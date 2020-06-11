import React, { useState } from 'react';
import isNil from 'lodash/isNil';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '@awesome-movie-app/components/lib/Logo/Logo';
import Toggle from '@awesome-movie-app/components/lib/Toggle/Toggle';
import Search from '@awesome-movie-app/components/lib/Search/Search';
import { searchMovie } from '@awesome-movie-app/core/lib/services/searchMovie';
import { THEME_DARK, THEME_LIGHT } from '@common/config/constants';
import { getMovieYear, getMovieSlug } from '@utils/index';
import { ImageType, getImageUrl } from '@utils/image';
import logoImageFile from '../images/Logo.png';
import { SearchContainer } from './styled';

export interface SiteHeaderProps {
	isLightTheme: boolean;
	changeTheme: (theme: string) => void;
	onMovieClick: (movieId: number, movieName: string) => void;
}

export interface MovieSuggestion {
	moviePosterUrl: string;
	movieId: string;
	movieName: string;
	movieYear: string;
	movieRating: string;
	movieSlug: string;
}

const SiteHeader: React.FC<SiteHeaderProps> = ({
	isLightTheme,
	changeTheme,
	onMovieClick,
}) => {
	const [isLight, setLight] = useState(isLightTheme);

	const toggleButton = (checked: boolean) => {
		setLight(checked);
		if (checked) {
			changeTheme(THEME_LIGHT);
		} else {
			changeTheme(THEME_DARK);
		}
	};

	const searchFunction = async (value: string): Promise<MovieSuggestion[]> => {
		const inputValue = value.trim().toLowerCase();
		const inputLength = inputValue.length;

		if (inputLength < 4) {
			return [];
		} else {
			try {
				const results = await searchMovie(inputValue);

				if (
					!results ||
					!results.results ||
					!Array.isArray(results.results) ||
					results.results.length === 0
				) {
					return [
						{
							moviePosterUrl: '',
							movieId: '',
							movieName: '',
							movieYear: '',
							movieRating: '',
							movieSlug: '',
						},
					];
				}

				return results.results
					.filter((r: any) => !isNil(r.poster_path) && r.vote_average > 0)
					.slice(0, 10)
					.map((result: any) => {
						return {
							moviePosterUrl: `${getImageUrl(
								ImageType.W92,
								result.poster_path
							)}`,
							movieId: `${result.id}`,
							movieName: `${result.title}`,
							movieYear: `${getMovieYear(result.release_date)}`,
							movieRating: `${result.vote_average}`,
							movieSlug: `${getMovieSlug(result.id, result.title)}`,
						};
					});
			} catch (error) {
				console.error('Failed to search...', error);
				return [];
			}
		}
	};

	return (
		<>
			<Row>
				<Col sm={8}>
					<Logo
						imageSrc={logoImageFile}
						imageAlt="Awesome Movie App Logo"
						linkAddress="/"
						brandName="Awesome Movie App"
					/>
				</Col>
				<Col sm={4}>
					<div style={{ paddingLeft: `1rem` }}>
						<Toggle
							idSelector="toggle-theme"
							leftText="Dark"
							rightText="Light"
							isChecked={isLight}
							offColor="#fff"
							onColor="#000"
							offHandleColor="#8cade4"
							onHandleColor="#2693e6"
							onChange={toggleButton}
						/>
					</div>
				</Col>
			</Row>
			<SearchContainer>
				<Search
					idSelector="movie-autocomplete"
					placeholder="Start typing a movie name to search"
					movieSuggestions={[]}
					search={searchFunction}
					onMovieClick={(suggestion: MovieSuggestion) =>
						onMovieClick(
							suggestion.movieId !== '' ? parseInt(suggestion.movieId) : 0,
							suggestion.movieName
						)
					}
				/>
			</SearchContainer>
		</>
	);
};

export default SiteHeader;
