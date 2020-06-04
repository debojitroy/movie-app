/* eslint-disable @typescript-eslint/no-var-requires */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const isEnvDevelopment = process.env.NODE_ENV === 'development';
const isEnvProduction = process.env.NODE_ENV === 'production';

module.exports = {
	entry: { main: './src/entry/index.tsx' },
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|mjs|ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: isEnvDevelopment,
						},
					},
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: () => [
								require('postcss-flexbugs-fixes'),
								require('postcss-preset-env')({
									autoprefixer: {
										flexbox: 'no-2009',
									},
									stage: 3,
								}),
								require('postcss-normalize'),
							],
							sourceMap: isEnvProduction,
						},
					},
				],
				// Don't consider CSS imports dead code even if the
				// containing package claims to have no side effects.
				// Remove this when webpack adds a warning or an error for this.
				// See https://github.com/webpack/webpack/issues/6571
				sideEffects: true,
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader'],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: ['file-loader'],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebPackPlugin({
			title: 'Awesome Movie App',
			template: './public/index.html',
			filename: './index.html',
			favicon: './public/favicon.ico',
		}),
	],
};
