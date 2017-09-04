const path = require('path');
var createLodashAliases = require('lodash-loader').createLodashAliases;

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                loader: 'ts-loader!lodash-loader',
                test: /\.tsx?$/
            }
        ]
    },
    resolve: {
        alias: createLodashAliases(),
        extensions: [ ".tsx", ".ts", ".js" ]
    },
    output: {
        filename: 'angular-rx-shopping-cart.js',
        path: path.resolve(__dirname, 'dist')
    }
};
