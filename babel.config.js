module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.tsx',
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.jsx',
          '.js',
          '.json',
          '.png',
        ],
        alias: {
          '@assets': './assets',
          '@hooks': './src/hooks',
          '@store': './src/store',
          '@utils': './src/utils',
          '@views': './src/views',
          '@transports': './src/transports',
          '@navigators': './src/navigators',
          '@configuration': './configuration.ts',
        },
      },
    ],
  ],
};
