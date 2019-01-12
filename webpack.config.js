const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: './src/js/app.js',
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js'
    },
    devServer:{
        contentBase: `./dist`
    },
    module: {
        rules: [
          // cssを読み込むローダー
            {
              test: /\.scss$/,
              use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      publicPath: `${__dirname}/dist`
                  }
                },
                'css-loader',
                'sass-loader'
              ]
            },
            // ファイルを読み込むローダー
            {
              test: /\.(jpg|png|gif|svg)$/,
              use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                  name: './img/[name].[ext]'
                }
              }
            ]
          },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "bundled_style.css"
        })
    ],
};
