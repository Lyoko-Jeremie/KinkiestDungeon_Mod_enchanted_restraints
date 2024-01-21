// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';


// const stylesHandler = 'style-loader';

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const ZipPlugin = require('zip-webpack-plugin');

const config = {
  entry: './src/init.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'enchanted_restraints.js',
  },
  devtool: 'source-map',
  target: 'web',
  // devServer: {
  //   open: true,
  //   host: '0.0.0.0',
  //   port: 3000,
  // },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: 'src/web/1.html',
    // }),
    new ForkTsCheckerWebpackPlugin({
      // typescript: {
      //   configFile: 'src/web/tsconfig.json',
      // }
    }),

    // https://www.npmjs.com/package/zip-webpack-plugin
    new ZipPlugin({
      // OPTIONAL: defaults to the Webpack output path (above)
      // can be relative (to Webpack output path) or absolute
      path: 'zip',

      // OPTIONAL: defaults to the Webpack output filename (above) or,
      // if not present, the basename of the path
      filename: 'enchanted_restraints.zip',

      // OPTIONAL: defaults to including everything
      // can be a string, a RegExp, or an array of strings and RegExps
      include: [/\.js$/],

      // OPTIONAL: defaults to excluding nothing
      // can be a string, a RegExp, or an array of strings and RegExps
      // if a file matches both include and exclude, exclude takes precedence
      exclude: [/\.png$/, /\.html$/],
    }),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
      },
      // {
      //   test: /\.css$/i,
      //   use: [stylesHandler, 'css-loader'],
      // },
      // {
      //   test: /\.s[ac]ss$/i,
      //   use: [stylesHandler, 'css-loader', 'sass-loader'],
      // },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
      // https://stackoverflow.com/questions/42631645/webpack-import-typescript-module-both-normally-and-as-raw-string
      {
        // test: /.*\/inlineText\/.*/,
        resourceQuery: /inlineText/,
        type: 'asset/source',
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
    plugins: [new TsconfigPathsPlugin({
      // configFile: 'src/web/tsconfig.json'
    })],
    // alias: {
    //   vue: 'vue/dist/vue.js'
    // },
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';


  } else {
    config.mode = 'development';
  }
  return config;
};
