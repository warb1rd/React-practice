	const path = require("path");

	module.exports = {
		context: __dirname,                  		//Running webpack frmo anywhere in the project  and it will run from the root directory from
		entry: "./js/ClientApp.jsx",
		devtool: "cheap-eval-source-map",    		//sources the errors to the pretranspiled code
		output: {
			path: path.join(__dirname, "public"),
			filename: "bundle.js"
		},
		resolve: {
			extensions: [".js", ".jsx", ".json"]
		},
		stats: {
			colors: true,
			reasons: true,
			chunks: true
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,									//Extension for the file must be js and x maybe there and $ = end of the filename
					loader: "babel-loader"
				}
			]
		}
	}