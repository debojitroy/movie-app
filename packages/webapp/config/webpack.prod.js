/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'production',
	output: {
		path: path.join(__dirname, '../dist'),
		filename: '[name].[contenthash].js',
		publicPath: '/',
	},
	plugins: [
		new ForkTsCheckerWebpackPlugin(),
		new webpack.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// all options are optional
			filename: '[name].[contenthash].css',
			chunkFilename: '[id].[contenthash].css',
			ignoreOrder: false, // Enable to remove warnings about conflicting order
		}),
	],
	optimization: {
		minimize: true,
		minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
		runtimeChunk: 'single',
		splitChunks: {
			chunks: 'all',
			maxInitialRequests: Infinity,
			minSize: 0,
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name(module) {
						// get the name. E.g. node_modules/packageName/not/this/part.js
						// or node_modules/packageName
						const packageName = module.context.match(
							/[\\/]node_modules[\\/](.*?)([\\/]|$)/
						)[1];

						// npm package names are URL-safe, but some servers don't like @ symbols
						return `npm.${packageName.replace('@', '')}`;
					},
				},
			},
		},
	},
});
