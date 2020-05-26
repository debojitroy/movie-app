module.exports = {
	stories: ['../src/**/*.stories.[tj]sx'],
	webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\.(ts|tsx)$/,
			use: [
				{
					loader: require.resolve('ts-loader'),
				},
			],
		});
		config.resolve.extensions.push('.ts', '.tsx');
		return config;
	},
	addons: [
		'@storybook/addon-docs',
		'@storybook/addon-actions/register',
		'@storybook/addon-viewport/register',
		'@storybook/addon-a11y/register',
		'@storybook/addon-knobs/register',
		'storybook-addon-styled-component-theme/dist/register',
		'@storybook/addon-jest/register',
	],
};
