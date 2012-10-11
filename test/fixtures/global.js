
require.register('baz', function(module, exports, require){
  module.exports = require('bar');
});

require.register('bar', function(module, exports, require){
  module.exports = 'bar';
});
