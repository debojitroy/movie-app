import { connect } from 'react-redux';
import { MovieAppReduxState } from '@reducers/index';
import { changeTheme } from '@actions/init.action';
import { THEME_LIGHT } from '@common/config/constants';
import SiteHeader from '@features/SiteHeader/components/index';

const mapStateToProps = (state: MovieAppReduxState) => {
	return {
		isLightTheme: state.init.currentTheme === THEME_LIGHT,
	};
};

const mapDispatchToProps = (dispatch: (action: any) => void) => {
	return {
		changeTheme: (theme: string) => dispatch(changeTheme(theme)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SiteHeader);
