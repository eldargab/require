
require.register('foo/index.js', function(module, exports, require){
  module.exports = require('bar');
});

require.register('foo/deps/bar/index.js', function(module, exports, require){
  module.exports = {
    doesntExist: require.exists('doesnt-exist'),
    baz: require.exists('baz')
  };
});

require.register('foo/deps/bar/deps/baz', function(module, exports, require){
  module.exports = 'baz';
});
