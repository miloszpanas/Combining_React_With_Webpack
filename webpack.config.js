const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizePlugin = require('optimize-js-plugin');

const plugins = [
    new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'index.html',
        inject: 'body'
    }),
];

module.exports = (env) => {
    if (env === 'production') {
        plugins.push(
            new OptimizePlugin({
                sourceMap: false
            })
        )
    }
    return {
        mode: env || 'production',
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'app' + env + 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: "babel-loader",
                    options: {
                        plugins: env !== 'production' ? ["react-hot-loader/babel"] : []
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        { loader: 'style-loader'},
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true
                            }
                        }
                    ]
                }
            ]
        },
        plugins // czyli plugins: plugins
    }
};