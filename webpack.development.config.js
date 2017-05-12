var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: "inline-sourcemap",
  devServer: { 
    inline: true,
    publicPath: "/",
    contentBase: "./www",
    hot: true
   },
  entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        "./src/index.tsx",
    ],
  output: {
    path: __dirname + "/www",
    filename: "app.js"
  },
   resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

     module: {
        rules: [{
            test: /\.s?css$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader", // translates CSS into CommonJS
                options: {
                    url: false
                } 
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        },
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
  plugins: [],
};