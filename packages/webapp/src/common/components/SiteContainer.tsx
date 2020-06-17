import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Container from 'react-bootstrap/Container';
import Global from '@awesome-movie-app/components/lib/Global';
import DarkTheme from '@awesome-movie-app/components/lib/theme/dark';
import LightTheme from '@awesome-movie-app/components/lib/theme/light';
import Footer from '@awesome-movie-app/components/lib/Footer/Footer';
import SiteHeaderContainer from '@features/SiteHeader/redux/container/SiteHeaderContainer';
import { MovieAppReduxState } from '@reducers/index';
import { THEME_LIGHT } from '@common/config/constants';

const mapStateToProps = (state: MovieAppReduxState) => {
	return {
		theme: state.init.currentTheme,
	};
};

const mapDispatchToProps = () => {
	return {};
};

const SiteContainer: React.FC<{ theme: string; children: React.ReactNode }> = ({
	theme,
	children,
}) => {
	const siteTheme = theme === THEME_LIGHT ? LightTheme : DarkTheme;

	return (
		<ThemeProvider theme={siteTheme}>
			<Global />
			<Container style={{ padding: '2rem 0' }}>
				<SiteHeaderContainer />
				{children}
				<Footer>
					<p>
						Powered by{' '}
						<a
							href="https://www.themoviedb.org/?language=en-US"
							target="_blank"
							rel="noreferrer"
						>
							The Movie DB (TMDB)
						</a>
					</p>
					<p>
						Built by{' '}
						<a href="https://debojitroy.com/" target="_blank" rel="noreferrer">
							Debojit Roy
						</a>
					</p>
					<p>
						&nbsp;&nbsp;
						<a
							href="https://github.com/debojitroy/movie-app"
							target="_blank"
							rel="noreferrer"
						>
							Source
						</a>
					</p>
				</Footer>
			</Container>
		</ThemeProvider>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(SiteContainer);
