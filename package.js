Package.describe({
  name: '3stack:js-ext-platform',
  version: '0.0.1',
  summary: 'Javascript platform extensions. Implies a few helper libraries.',
  git: 'https://github.com/3stack-software/meteor-js-ext-platform',
  documentation: null
});

Package.onUse(function(api){
  /**
   * This package represents our "javascript extension platform"..
   *
   * All the libraries that make things how they should be
   */
  api.versionsFrom('METEOR@0.9.2');
  api.imply([
    'jquery',
    'underscore',
    '3stack:underscore-addons@0.0.1',
    '3stack:prototype-number@0.0.1',
    '3stack:prototype-string@0.0.1',
    '3stack:prototype-regexp@0.0.1'
  ]);
});
