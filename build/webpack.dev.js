const webpackBaseConfig = require('./webpack.base');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = merge(webpackBaseConfig, {
	devtool: '#inline-source-map',
	mode: 'development',
	output: {
		filename: '[name].js'
	},
	devServer: {
		port: '3000',
		host: '0.0.0.0',
		proxy: {
			'/api': 11,
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.join(__dirname, './index.html')
		})
	]
});