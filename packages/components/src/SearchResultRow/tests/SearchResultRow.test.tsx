import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import lightTheme from '../../../theme/light';
import SearchResultRow from '../SearchResultRow';

describe('SearchResultRow', () => {
	it('should mount and display result row', () => {
		mount(
			<ThemeProvider theme={lightTheme}>
				<SearchResultRow
					idSelector="search-row-0"
					imageUrl="/image.jpg"
					imageAlt="Movie Alt Image"
					resultTitle="Movie Title"
					resultSubtitle="2020"
					resultBody="6.8 / 10"
				/>
			</ThemeProvider>
		);
	});
});
