const path = require('path')

// entry -> output

// type this cmd into terminal: node webpack.config.js
// it will console.log the directory path
// console.log(__dirname)

// make sure dependencies are updated
// yarn add @babel/core babel-loader @babel/preset-env @babel/preset-react

module.exports = {
    entry: './src/app.js',
    output: {
        // joins the directory path with public folder at the end
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,  // test that files end in .js; \ escape the .
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true // keep using index.html for client side rendering
    }
}
