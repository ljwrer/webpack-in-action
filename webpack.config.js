/**
 * Created by Ray on 2016/8/20.
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(process.env.NODE_ENV);
module.exports={
    devtool:'eval-source-map',
    entry:__dirname+'/app/main.js',
    output:{
        // path:__dirname+'/public',
        path:__dirname+'/build',
        filename:'bundle.js'
    },
    devServer:{
        // contentBase:'./public',
        colors:true,
        historyApiFallback:true,
        inline:true,
        hot:true
    },
    module:{
        loaders:[
            {
                test:/\.json$/,
                loader:'json'
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader:'babel'
            },
            {
                test:/\.css$/,
                loader:'style!css?modules!postcss'
            }
        ]
    },
    postcss: [
        require('autoprefixer')//调用autoprefixer插件
    ],
    plugins:[
        new HtmlWebpackPlugin({
            template:__dirname+'/app/index.tmpl.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
