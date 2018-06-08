const path = require("path");
const webpack = require("webpack");

module.exports = {
	context: __dirname,                  							//Running webpack frmo anywhere in the project  and it will run from the root directory from
	entry: [
		"react-hot-loader/patch",
		"webpack-dev-server/client?http://localhost:8082",
		"webpack/hot/only-dev-server",
		"./js/ClientApp.jsx"
	],
	devtool: "cheap-eval-source-map",    							//sources the errors to the pretranspiled code
	output: {
		path: path.join(__dirname, "public"),
		filename: "bundle.js",
		publicPath: "/public/"
	},
	devServer: {
		hot: true,
		publicPath: "/public/",
		historyApiFallback: true
	},
	resolve: {
		extensions: [".js", ".jsx", ".json"]
	},
	stats: {
		colors: true,
		reasons: true,
		chunks: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	],
	module: {
		rules: [
			{
				enforce: "pre",										//Runs before babel runs
				test: /\.jsx?$/,
				loader: "eslint-loader",
				exclude: /node_modules/
			},
			{
				test: /\.jsx?$/,									//Extension for the file must be js and x maybe there and $ = end of the filename
				loader: "babel-loader"
			}
		]
	}
}