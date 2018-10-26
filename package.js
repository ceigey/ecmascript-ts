Package.describe({
  name: 'ceigey:ecmascript-ts',
  version: '1.0.1',
  summary: 'Compiler plugin that supports ES2015+ in all .ts and .tsx files',
  documentation: 'README.md',
  git: 'https://github.com/ceigey/ecmascript-ts',
});

Package.registerBuildPlugin({
  name: 'compile-ecmascript-ts',
  use: ['babel-compiler'],
  sources: ['plugin.js']
});

Package.onUse(function (api) {
  api.use('isobuild:compiler-plugin@1.0.0');
  api.use('babel-compiler');

  // `ecmascript-ts` must provide the same runtime environment
  // that the 'ecmascript' package provides.
  api.imply('modules');
  api.imply('ecmascript-runtime');
  api.imply('babel-runtime');
  api.imply('promise');
  api.imply('dynamic-import');
});
