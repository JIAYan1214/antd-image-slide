const path = require('path');
const nodeExternals = require('webpack-node-externals');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        exclude : '/node_modules/',
        use: [
          {
              loader: 'style-loader'
          },
          {
              loader: 'css-loader',   
              options: {
                  importLoaders: 1
              }
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
                ident: 'postcss',
                plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                        browsers: [
                            '>1%',
                            'last 4 versions',
                            'Firefox ESR',
                            'not ie < 9', // React doesn't support IE8 anyway
                        ],
                        flexbox: 'no-2009',
                    }),
                ],
            },
          },
          {
              loader: 'less-loader',  // 
              options: {
                  importLoaders: 1
              }
          }
        ]
      }
    ]
  },
  externals: [
    {
        'Swiper':'Swiper',
        'react':'react',
        'react-dom':'react-dom',
        'antd':'antd'
    },
    nodeExternals()
  ]
};
