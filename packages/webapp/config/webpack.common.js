/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const isEnvDevelopment = process.env.NODE_ENV === 'development';
const isEnvProduction = process.env.NODE_ENV === 'production';

module.exports = {
	entry: { main: './src/entry/index.tsx' },
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
		alias: {
			'@common': path.resolve(__dirname, 'src/common'),
			'@components': path.resolve(__dirname, 'src/common/components'),
			'@entry': path.resolve(__dirname, 'src/entry'),
			'@redux': path.resolve(__dirname, 'src/common/redux'),
			'@actions': path.resolve(__dirname, 'src/common/redux/actions'),
			'@reducers': path.resolve(__dirname, 'src/common/redux/reducers'),
			'@store': path.resolve(__dirname, 'src/common/redux/store'),
			'@config': path.resolve(__dirname, 'src/common/config'),
			'@utils': path.resolve(__dirname, 'src/common/utils'),
			'@routes': path.resolve(__dirname, 'src/common/routes'),
			'@features': path.resolve(__dirname, 'src/features'),
		},
	},
	node: {
		fs: 'empty',
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
