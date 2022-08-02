module.exports = {
  presets: [
    [
      '@babel/present-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/present-typescript'
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@config': './src/config',
          '@models': './src/models',
          '@controllers': './src/controllers',
          '@views': '.;src/views'
        }
      }
    ]
  ],
  ignore: ['**/*.spec.ts']
}
