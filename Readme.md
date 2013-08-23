
# after-transition

  Fire a callback after a transition or immediately if the browser does not support transitions.
  If the element does not have a transition property it will also fire immediately.

## Installation

    $ component install anthonyshort/after-transition

or via npm for use with Browserify

    $ npm install after-transition

## API

    var afterTransition = require('after-transition');

    afterTransition(el, function(){
      // Do things when the transition has finished
      // This will fire immediately for IE
    });

    afterTransition.once(el, function(){
      // Same as above but will only fire once
    });

## License

  MIT
