const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Allow Metro to resolve assets from src/assets in addition to the project root
config.watchFolders = [
  ...(config.watchFolders || []),
  path.resolve(__dirname, 'src'),
];

// Add webp to supported asset extensions
if (!config.resolver.assetExts.includes('webp')) {
  config.resolver.assetExts.push('webp');
}

module.exports = config;
