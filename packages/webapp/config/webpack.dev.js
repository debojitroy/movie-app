/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	output: {
		path: path.join(__dirname, '../../dist/dist-dev'),
		filename: '[name].[contenthash].js',
		publicPath: '/',
	},
	devServer: {
		contentBase: './dist-dev',
		historyApiFallback: true,
		allowedHosts: ['.debojitroy.com'],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
	],
});
