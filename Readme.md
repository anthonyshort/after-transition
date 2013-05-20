
# after-transition

  Fire a callback after a transition or immediately if the browser does not support transitions

## Installation

    $ component install anthonyshort/after-transition

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
