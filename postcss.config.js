module.exports = {
	plugins: [
    require('postcss-easy-import')({
			extensions: ['.pcss', '.css', '.postcss', '.sss']
    }),
    require('precss')(),
    require('postcss-preset-env')(),
    require('cssnano')()
	]
};
