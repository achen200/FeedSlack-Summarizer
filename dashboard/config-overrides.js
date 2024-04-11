const webpack = require('webpack');

module.exports = function override(config) {
    const fallback = config.resolve.fallback || {};
    Object.assign(fallback, {
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "assert": require.resolve("assert"),
        "os": require.resolve("os-browserify"),
        "url": require.resolve("url"),
		"path": require.resolve("path-browserify"),
		"vm":false
    })
    config.resolve.fallback = fallback;
    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer']
        })
    ])
	config.module.rules.unshift({
		test: /\.m?js$/,
		resolve: {
		  fullySpecified: false, // disable the behavior
		},
	});
    return config;
}