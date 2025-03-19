/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,

    experimental: {
        appDir: true,
    },

    webpack(config) {
        // SVG Loader Configuration
        const fileLoaderRule = config.module.rules.find(
            (rule) => rule.test && rule.test instanceof RegExp && rule.test.test(".svg")
        );

        if (fileLoaderRule) {
            fileLoaderRule.exclude = /\.svg$/i;
        }

        config.module.rules.push(
            {
                test: /\.svg$/i,
                resourceQuery: /url/,
                type: "asset/resource", // Updated for improved compatibility
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                resourceQuery: { not: [/url/] },
                use: ["@svgr/webpack"],
            }
        );

        return config;
    },

    images: {
        domains: ["images.pexels.com"],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.easyfrontend.com', // Added domain for external images
            },
        ],
    },

    env: {
        MONGO_URI: "mongodb://localhost:27017",
    },
};

export default nextConfig;
