var webpack = require("webpack");

module.exports = {
    entry: "./src/js/main.ts",
    output: {
        path: "./public/js/",
        filename: "bundle.js"
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.tsx?$/,
            loader: "ts-loader"
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: false
        })
    ]
};
