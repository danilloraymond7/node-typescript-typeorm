module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@database': './src/database'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
