var fse = require('fs-extra');
var stealTools = require('steal-tools');

var promise = stealTools.build({
  main: 'app',
  config: __dirname + '/package.json!npm',
  bundlesPath: 'dist'
},{
  minify: false,
  bundleSteal: true
});

promise.then(function (resp) {
    // copy node_modules/steal/ext/dev.js
    fse.copySync('./node_modules/steal/ext/dev.js', './dist/ext/dev.js');
    return resp;
});
