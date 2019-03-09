const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry:['@babel/polyfill','./src/js/index.js'],
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'js/bundle.js'
    },

    module:{
        rules:[{
            test:/\.js$/,
            exclude:/node_modules/,
            use:['babel-loader']
        },
        {
            test:/\.scss$/,
            use:['style-loader','css-loader','sass-loader']
        }
        ]
    },
    
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./src/index.html'
        })
    ]

}