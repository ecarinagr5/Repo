var path = require("path"); /*local sin info */
/*var path = require("path/peugeot/208")*/

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/app/index.js",

    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            },
            {
                test:/\.scss$/, 
                include: SRC_DIR,
                loader:'style!css!sass',
                exclude: /node_modules/
            },
            { test: /\.(jpe?g|png|gif|svg)$/i, 
            loader: "url-loader?name=app/images/[name].[ext]"},
        ]
    },
    devServer: {
        historyApiFallback: true,
      }
};

module.exports = config;