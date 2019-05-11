module.exports = {
    entry: __dirname + '/src/index.jsx',
    module: {
        rules: [
            {
                test: [/\.jsx$/],
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-react', '@babel/preset-env']
                  }
                }
            },
            {
              test: /\.css$/,
              loader: 'style-loader',
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
                options: {
                  modules: true,
                  localIdentName: '[name]__[local]___[hash:base64:5]',
                }
            },
            {
              test: /\.(png|jpg|gif)$/i,
              use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: 8192
                  }
                }
             ]
          },    
        ]

     },
     output: {
      filename: 'bundle.js',
      path: __dirname + '/public'
  },
};     