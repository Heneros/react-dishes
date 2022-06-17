const withImages = require('next-images');
const webpack = require("webpack");

const nextConfig = {
    reactStrictMode: true,
    webpack: (config, { buildId, dev, isSever, defaultLoaders, webpack }) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery",
            })
        );
        return config;
    }
}

module.exports = {
    ...withImages(),
    future: {
        webpack5: true,
    },
    nextConfig
}
