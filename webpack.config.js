// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';


// const stylesHandler = 'style-loader';

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

// const ZipPlugin = require('zip-webpack-plugin');
const RenameWebpackPlugin = require('rename-webpack-plugin');

const fs = require('fs');
const archiver = require('archiver');


async function checkAndCreateDirectory(directoryPath) {
  try {
    // 尝试访问文件夹以检查它是否存在
    await fs.promises.access(directoryPath);
  } catch (error) {
    // 错误意味着文件夹可能不存在
    if (error.code === 'ENOENT') {
      await fs.promises.mkdir(directoryPath, {recursive: true});
    } else {
      // 其他错误
      throw error;
    }
  }
}

// code come from GPT-4
class RenameAndZipPlugin {

  outputZipName = 'enchanted_restraints.zip';
  outputZipPath = 'zip';

  apply(compiler) {
    compiler.hooks.emit.tapAsync('RenameAndZipPlugin', (compilation, callback) => {
      // 遍历所有即将输出的资源
      for (const filename in compilation.assets) {
        if (filename.endsWith('.js')) {
          // 重命名逻辑
          const newFilename = filename.replace('.js', '.ks');
          compilation.assets[newFilename] = compilation.assets[filename];
          delete compilation.assets[filename];
        }
      }
      callback();
    });

    compiler.hooks.afterEmit.tapAsync('ZipAfterEmitPlugin', async (compilation, callback) => {
      // 设置输出文件的路径和名称

      const outputZipDir = path.join(
        compiler.options.output.path,
        this.outputZipPath,
      );
      await checkAndCreateDirectory(outputZipDir);
      const outputZipPath = path.join(
        outputZipDir,
        this.outputZipName,
      );

      // 创建一个文件以写入压缩内容
      const output = fs.createWriteStream(outputZipPath);
      const archive = archiver('zip', {
        zlib: {level: 9} // 设置压缩级别
      });

      // 监听压缩完成事件
      output.on('close', function () {
        console.log(archive.pointer() + ' total bytes');
        console.log('Archiver has been finalized and the output file descriptor has closed.');
        callback();
      });

      // 监听错误事件
      archive.on('error', function (err) {
        throw err;
      });

      // 将输出流绑定到压缩器
      archive.pipe(output);

      // 遍历所有编译生成的文件，并添加到压缩包
      for (const filename in compilation.assets) {
        // if (filename.endsWith('.ks')) {
        const asset = compilation.assets[filename];
        const assetPath = path.join(compiler.options.output.path, filename);
        archive.append(fs.createReadStream(assetPath), {name: filename});
        // }
      }

      // 完成文件的追加
      return archive.finalize();
    });

  }
}


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


    // new RenameWebpackPlugin({
    //   originNameReg: /enchanted_restraints\.js/,
    //   targetName: 'enchanted_restraints.ks'
    // }),

    // new CopyPlugin({
    //   patterns: [
    //     { from: "enchanted_restraints.js", to: "[name].ks", context: "dist" },
    //   ],
    // }),

    new RenameAndZipPlugin(),

    // https://www.npmjs.com/package/zip-webpack-plugin
    // new ZipPlugin({
    //   // OPTIONAL: defaults to the Webpack output path (above)
    //   // can be relative (to Webpack output path) or absolute
    //   path: 'zip',
    //
    //   // OPTIONAL: defaults to the Webpack output filename (above) or,
    //   // if not present, the basename of the path
    //   filename: 'enchanted_restraints.zip',
    //
    //   // OPTIONAL: defaults to including everything
    //   // can be a string, a RegExp, or an array of strings and RegExps
    //   include: [/\.ks$/],
    //
    //   // OPTIONAL: defaults to excluding nothing
    //   // can be a string, a RegExp, or an array of strings and RegExps
    //   // if a file matches both include and exclude, exclude takes precedence
    //   exclude: [/\.png$/, /\.html$/, /\.js$/],
    // }),

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
