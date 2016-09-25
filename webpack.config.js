module.exports = {
    entry: "./src/js/main.js",
    output: {
        path: "./dist/js/",
        filename: "bundle.js"
    }//,
    // resolve: {
    //     // Add `.ts` and `.tsx` as a resolvable extension.
    //     extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    // },
    // module: {
    //     loaders: [
    //     { test: /\.ts$/, loader: "ts-loader" }
    //     ]
    // }
};
