const optimizedImages = require('next-optimized-images');
const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');
const webpack = require('webpack');

const sassConfig = {
  cssLoaderOptions: {
    sassLoaderOptions: {
      includePaths: ['styles/']
    }
  }
};

const optimizedImagesConfig = {
  inlineImageLimit: 8192,
  imagesFolder: 'images',
  imagesName: '[name]-[hash].[ext]',
  optimizeImagesInDev: false,
  mozjpeg: {
    quality: 80
  },
  optipng: {
    optimizationLevel: 3
  },
  pngquant: false,
  gifsicle: {
    interlaced: true,
    optimizationLevel: 3
  },
  svgo: {
    // enable/disable svgo plugins here
  },
  webp: {
    preset: 'default',
    quality: 75
  }
};

const nextConfiguration = {
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        PC: JSON.stringify('pc'),
      })
    );

    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            fallback: 'file-loader',
            publicPath: '/_next/static/fonts/',
            outputPath: 'static/fonts/',
            name: '[name].[ext]'
          }
        }
      ]
    });


    return config;
  },
};

module.exports = withPlugins([
  [withSass, sassConfig],
  [optimizedImages, optimizedImagesConfig],
], nextConfiguration);
