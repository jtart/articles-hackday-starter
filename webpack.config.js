const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "js/index.bundle.js"
    },
    module: {
        rules: [
            { 
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
	                use: [
	                	'css-loader',
	                	'sass-loader'
	                ]
            	})
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html",
        }),
        new ExtractTextPlugin({
            filename: 'styles/styles.bundle.css',
            disable: false,
            allChunks: true
        })
    ],
    devServer: {
        publicPath: '/',
        contentBase: path.join(__dirname, 'dist'),
        open: true
    }
};