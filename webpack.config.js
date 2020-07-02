const path = require('path')
// yarn add mini-css-extract-plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// yarn add extract-text-webpack-plugin
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

// entry -> output

// type this cmd into terminal: node webpack.config.js
// it will console.log the directory path
// console.log(__dirname)

// make sure dependencies are updated
// yarn add @babel/core babel-loader @babel/preset-env @babel/preset-react

module.exports = (env) => {
  const isProduction = env === 'production'
  const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' })
  // const CSSExtract = new ExtractTextPlugin('styles.css')

  return {
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
    					{
    						loader: MiniCssExtractPlugin.loader
    					},
    					{
    						loader: 'css-loader',
    						options: {
    							sourceMap: true
    						}
    					},
    					{
    						loader: 'sass-loader',
    						options: {
    							sourceMap: true
    						}
    					}
    				]
            // use: CSSExtract.extract({
            //   use: [
            //     'css-loader',
            //     'sass-loader'
            //   ]
            // })
        }]
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true // keep using index.html for client side rendering
    }
  }
}
