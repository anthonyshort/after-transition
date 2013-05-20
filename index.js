var hasTransitions = require('has-transitions');
var emitter = require('css-emitter');

function afterTransition(el, callback) {
  if(!hasTransitions) {
    return callback.apply(el);
  }
  emitter(el).bind(callback);
};

afterTransition.once = function(el, callback) {
  afterTransition(el, function fn(){
    callback.apply(el);
    emitter(el).unbind(fn);
  });
};

module.exports = afterTransition;