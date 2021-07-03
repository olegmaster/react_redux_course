const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {presets: ["@babel/env"]}
            }

        ]
    }
};

// 7