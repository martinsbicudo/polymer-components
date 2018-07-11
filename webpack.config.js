const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  resolve: {
    extensions: ['.js', '.lit']
  },
	module: {
    rules: [
      {
        test: /\.lit$/,
				use: [
          'babel-loader',
					'lit-loader'
				]
			}
		]
	},
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
