
require.register('foo/index.js', function(module, exports, require){
  module.exports = require('bar');
});

require.register('foo/deps/bar', function(module, exports, require){
  module.exports = require('doesnt-exist');
});
