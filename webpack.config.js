const path = require('path');

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.tsx?$/,
                use: [
                    { loader: 'ts-loader' },
                    { loader: 'lodash-ts-imports-loader' }
                ]
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: 'angular-rx-shopping-cart.js',
        path: path.resolve(__dirname, 'dist')
    }
};
