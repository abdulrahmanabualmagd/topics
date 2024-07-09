// Imports
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Module Exports
/*
    This sets up the export of the webpack configuration object. 
    Any thing assigned to module.exports will be avaiable to other files when they 
    imoprt or require this configuration
*/
module.exports = {
  // Entry
  /*
        Specifies the entry point of the application.
        Webpack start building its dependency graph from this file.
  */
  entry: "./client/index.ts",

  mode: "development",


  // Output
  /*
    path => specifies the directory where webpack should output the bundled files
    filename => defines the name of the output files
    publicPath => specifies the publid url address of the output directory
  */
  output: {
    path: path.resolve(__dirname, "wwwroot"),
    filename: "[name].js",
    publicPath: "/",
  },

  // Resolve
  /*
    Defines which file extensions webpack should resolve
    In this case it's resolving both .js and .ts files
  */
  resolve: {
    extensions: [".js", ".ts"]
  },

  // Module
  /*
    This section allows configuring how webpack treats different types of modules
    Module rules like loaders can be defined here for processing various file types
  */
  module: {
    rules:[
        {
            test: /\.ts$/,
            use: "ts-loader",
            exclude: "/node_modules/"
        },
        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
            exclude: "/node_modules/"
        }
    ]
  },

  // Plugins
  /*
    This section is for adding webpack plugins, plugins can perform a wide 
    range of tasks like bundle optimization asset, managment and injection 
    of environment variables
  */
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
          template: "./client/index.html"
      }),
      new MiniCssExtractPlugin({
          filename: "css/[name].[chunkhash].css"
      })
  ]
};
