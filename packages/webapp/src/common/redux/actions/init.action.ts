export const CHANGE_THEME = '@INIT/CHANGE_THEME';

export const changeTheme = (theme: string) => ({
	type: CHANGE_THEME,
	payload: {
		theme,
	},
});
