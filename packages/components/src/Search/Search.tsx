import React, { useState } from 'react';
import isNil from 'lodash/isNil';
import Autosuggest from 'react-autosuggest';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Theme } from '../../theme/theme';
import SearchResultRow from '../SearchResultRow/SearchResultRow';
import NoResultsFoundRow from '../SearchResultRow/NoResultsFoundRow';
import { ResultRow } from './styled';

export interface MovieSuggestion {
	moviePosterUrl: string;
	movieId: string;
	movieName: string;
	movieYear: string;
	movieRating: string;
	movieSlug: string;
}

export interface SearchProps {
	idSelector: string;
	placeholder: string;
	movieSuggestions: MovieSuggestion[];
	search: (searchPhrase: string) => Promise<MovieSuggestion[]>;
	onMovieClick: (movieSuggestion: MovieSuggestion) => void;
}

const Search: React.FC<SearchProps> = ({
	idSelector,
	placeholder,
	movieSuggestions,
	search,
	onMovieClick,
}) => {
	const [value, setValue] = useState('');
	const [suggestions, setSuggestions] = useState<MovieSuggestion[]>(
		movieSuggestions
	);

	const themeContext: Theme = useContext(ThemeContext);

	const suggestionContainer: React.CSSProperties = {
		zIndex: 200,
		position: 'absolute',
		backgroundColor: themeContext.color.backgroundColor,
		width: '90%',
	};

	const theme = {
		container: {
			fontFamily: themeContext.font.family,
			color: themeContext.color.textColor,
			caretColor: themeContext.color.textColor,
			width: `80%`,
			maxWidth: `600px`,
		},
		input: {
			color: themeContext.color.textColor,
			border: themeContext.color.inputBorder,
			borderRadius: `5px`,
			height: themeContext.font.size.xxLarge,
			backgroundColor: themeContext.color.backgroundColor,
			width: `100%`,
			paddingLeft: themeContext.font.size.medium,
		},
		inputFocused: {
			color: themeContext.color.textColor,
			border: themeContext.color.inputBorderFocus,
			boxShadow: themeContext.color.inputBorderShadowFocus,
			backgroundColor: themeContext.color.backgroundColor,
		},
		suggestionsContainer: suggestionContainer,
		suggestionsList: {
			margin: 0,
			padding: 0,
			listStyleType: 'none',
		},
	};

	const getSuggestions = async (value: string) => {
		const inputValue = value.trim().toLowerCase();
		const inputLength = inputValue.length;

		return inputLength === 0 ? [] : await search(value);
	};

	const getSuggestionValue = (suggestion: MovieSuggestion) =>
		suggestion.movieName;

	const renderSuggestion = (suggestion: MovieSuggestion) =>
		isNil(suggestion) || suggestion.movieId === '' ? (
			<NoResultsFoundRow text="No records found" />
		) : (
			<ResultRow
				onClick={() => {
					onMovieClick && onMovieClick(suggestion);
				}}
			>
				<SearchResultRow
					idSelector={suggestion.movieId}
					imageUrl={suggestion.moviePosterUrl}
					imageAlt={`${suggestion.movieName} Poster Image`}
					resultTitle={suggestion.movieName}
					resultSubtitle={suggestion.movieYear}
					resultBody={`${suggestion.movieRating} / 10`}
				/>
			</ResultRow>
		);

	const onChange = (_event: any, { newValue }: { newValue: string }) => {
		setValue(newValue);
	};

	const onSuggestionsFetchRequested = async ({ value }: { value: string }) => {
		const movieSuggestions = await getSuggestions(value);
		setSuggestions(movieSuggestions);
	};

	const onSuggestionsClearRequested = () => {
		setSuggestions([]);
	};

	const inputProps = {
		placeholder,
		value,
		onChange,
	};

	return (
		<Autosuggest
			id={idSelector}
			theme={theme}
			suggestions={suggestions}
			onSuggestionsFetchRequested={onSuggestionsFetchRequested}
			onSuggestionsClearRequested={onSuggestionsClearRequested}
			getSuggestionValue={getSuggestionValue}
			renderSuggestion={renderSuggestion}
			inputProps={inputProps}
		/>
	);
};

export default Search;
