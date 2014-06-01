Via Environment Node.js module
===================

>provides the getEnvironment() function to detect what environment a Node.js program is running in ('dev', 'stage', 'prod').  This module is a dependency for our custom GruntJS modules.

### Installation

In your `package.json` file, add this module as a dependency.

```javascript

"dependencies": {
    "via-environment": "git+ssh://git@github.com:viastudio/npm-via-environment.git"
}

```

###  Usage

```javascript

var viaenv = require('via-environment');
viaenv.getEnvironment(); //returns 'dev', 'stage', 'prod' or false

```

