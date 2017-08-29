@mitchallen/react-card-grey
==
CardGrey React component
--

<p align="left">
  <a href="https://circleci.com/gh/mitchallen/react-card-grey">
    <img src="https://img.shields.io/circleci/project/github/mitchallen/react-card-grey.svg" alt="Continuous Integration">
  </a>
  <a href="https://codecov.io/gh/mitchallen/react-card-grey">
    <img src="https://codecov.io/gh/mitchallen/react-card-grey/branch/master/graph/badge.svg" alt="Coverage Status">
  </a>
  <a href="https://npmjs.org/package/@mitchallen/react-card-grey">
    <img src="http://img.shields.io/npm/dt/@mitchallen/react-card-grey.svg?style=flat-square" alt="Downloads">
  </a>
  <a href="https://npmjs.org/package/@mitchallen/react-card-grey">
    <img src="http://img.shields.io/npm/v/@mitchallen/react-card-grey.svg?style=flat-square" alt="Version">
  </a>
  <a href="https://npmjs.com/package/@mitchallen/react-card-grey">
    <img src="https://img.shields.io/github/license/mitchallen/react-card-grey.svg" alt="License"></a>
  </a>
</p>

## Installation

    $ npm init
    $ npm install @mitchallen/react-card-grey --save
  
* * *

## Usage

1: Add this line near the top of your file (like ```src/App.js```):

```
import CardGrey from '@mitchallen/react-card-grey';
```

__NOTE:__ CardGrey must be Capitalized or component won't render.

2: Somewhere in the middle of the __render__ method add this line:

```
<CardGrey />
```


* * *

## Testing

### Run the Tests

To test, go to the root folder and type (sans __$__):

    $ npm test
    
## Component Testing

### Prerequisite

If you've never installed __create-react-app__ (you may need to use ```sudo```):

```
$ npm install -g create-react-app
```

### Create a local npm link

In the original component folder (you may need to use ```sudo```):

```
$ npm link
```

### Create a test package

Create a root test folder and then do the following:

```
$ create-react-app react-card-grey-test
$ cd react-card-grey-test
$ npm link @mitchallen/react-card-grey
```

### Modify src/App.js

1: Add this line near the top:

```
import CardGrey from '@mitchallen/react-card-grey';
```

__NOTE:__ CardGrey must be Capitalized or component won't render.

2: Somewhere in the middle of the __render__ method add this code:

```
<CardGrey>
    <p style={{ color: '#FFFFFF'}}>Hello World!</p>
</CardGrey>
<CardGrey />
```

### Run The Test App

```
$ npm start
```

### Cleanup

Remember to unlink when done.
   
* * *
 
## Repo(s)

* [bitbucket.org/mitchallen/react-card-grey.git](https://bitbucket.org/mitchallen/react-card-grey.git)
* [github.com/mitchallen/react-card-grey.git](https://github.com/mitchallen/react-card-grey.git)

* * *

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

* * *

## Version History

#### Version 0.1.6

* Fixed command in ```.circleci/config.yml```

#### Version 0.1.5

* Added ```run: yarn add react``` to ```.circleci/config.yml```

#### Version 0.1.4

* Removed duplicate react dependency, now only exists in peerDependencies
* Replace reference to React.PropType with ref to prop-types
* Cleaned up test case

#### Version 0.1.3

* Added examples folder with example

#### Version 0.1.2 

* Fixed index reference in package.json

#### Version 0.1.1 

* Switched badge to CircleCI

#### Version 0.1.0 

* initial release

* * *