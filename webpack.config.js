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
            test: /^(src\/js\/)(.+)(\.tsx?$)/,
            loader: "ts-loader"
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            mangle: false
        })
    ]
};
