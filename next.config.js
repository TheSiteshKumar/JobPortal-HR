/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config, { isServer }) => {
    // Add esbuild loader for handling private class fields
    config.module.rules.push({
      test: /\.js$/,
      include: /node_modules\/undici/,
      use: {
        loader: 'esbuild-loader',
        options: {
          target: 'es2015'
        }
      }
    });

    return config;
  }
};

module.exports = nextConfig;