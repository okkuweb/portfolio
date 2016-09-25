var webpack = require("webpack");

module.exports = {
    entry: "./src/js/main.ts",
    output: {
        path: "./dist/js/",
        filename: "bundle.js"
    },
    devtool: 'eval-source-map',
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
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