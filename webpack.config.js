const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports ={
	entry:'./src/index.js',
	output:{
		path: path.join(__dirname, '/build'),
		filename: 'bundle.js',
	},
	devServer:{
		port: 1985,
	},

	plugins:[
		new HTMLWebpackPlugin({ template: './src/index.html'})
	],
	module: {
		rules: [
			{ 
			test: /\.(js|jsx)$/, //manage .js and .jsx
			exclude: /node_modules/,
			use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env', '@babel/preset-react'] }}
			},
			{
			test:/\.(scss|css)$/, // manage .css and .scss
			use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
			test:/\.svg$/, //manage .svg file
			use:[{loader:'svg-url-loader', options:{limiit:10000,}}]
			},
		]
	}
}