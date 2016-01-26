# console-styles

Simple object structs for terminal color codes as strings.

```javascript
var consoleStylesFactory = require('console-styles');

var consoleStyles = consoleStylesFactory.standard;

if ( system.args[2] === '--no-colors' ) { // or preferably a cli library
    consoleStyles = consoleStylesFactory.empty;
}

console.log('Howdy ' + consoleStyles.green + 'partner' + consoleStyles.reset + '!');
```