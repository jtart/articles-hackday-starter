const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: "js/index.bundle.js"
	},
	module: {
		rules: [{
			test: /\.js$/,
			use: [{
				loader: "babel-loader",
				options: {
					presets: ['env']
				}
			}]
		},
		{
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: [{
					loader: 'css-loader'
				}, {
					loader: 'sass-loader',
					options: {
						includePaths: [
					        path.resolve(__dirname, 'node_modules/bootstrap/scss/'),
					    ]
					}
				}]
			})
		}]
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: "./src/index.html",
		}),
		new ExtractTextPlugin({
			filename: 'styles/styles.bundle.css',
			disable: false,
			allChunks: true
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			Popper: ['popper.js', 'default']
		})
	],
	devServer: {
		publicPath: '/',
		contentBase: path.join(__dirname, 'dist'),
		open: true
	}
};