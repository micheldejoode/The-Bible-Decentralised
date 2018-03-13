 /* eslint-disable */ 
 /* eslint-disable */ 
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("IPFS", [], factory);
	else if(typeof exports === 'object')
		exports["IPFS"] = factory();
	else
		root["IPFS"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

"use strict";
"use strict";

var XMLHttpRequest = window.XMLHttpRequest; // eslint-disable-line

module.exports = XMLHttpRequest;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var XMLHttpRequest = __webpack_require__(0);

module.exports = IPFS;

/**
 * The constructor object
 * @param {Object} `provider` the provider object
 * @return {Object} `ipfs` returns an IPFS instance
 * @throws if the `new` flag is not used
 */
function IPFS(provider) {
  if (!(this instanceof IPFS)) {
    throw new Error('[ipfs-mini] IPFS instance must be instantiated with "new" flag (e.g. var ipfs = new IPFS("http://localhost:8545");).');
  }

  var self = this;
  self.setProvider(provider || {});
}

/**
 * Sets the provider of the IPFS instance
 * @param {Object} `provider` the provider object
 * @throws if the provider object is not an object
 */
IPFS.prototype.setProvider = function setProvider(provider) {
  if (typeof provider !== 'object') {
    throw new Error('[ifpsjs] provider must be type Object, got \'' + typeof provider + '\'.');
  }
  var self = this;
  var data = self.provider = Object.assign({
    host: '127.0.0.1',
    pinning: true,
    port: '5001',
    protocol: 'http',
    base: '/api/v0' }, provider || {});
  self.requestBase = String(data.protocol + '://' + data.host + ':' + data.port + data.base);
  
};

/**
 * Sends an async data packet to an IPFS node
 * @param {Object} `opts` the options object
 * @param {Function} `cb` the provider callback
 * @callback returns an error if any, or the data from IPFS
 */
 
  var aap = 0; 
 
IPFS.prototype.sendAsync = function sendAsync(opts, cb) {
  var self = this;
  var request = new XMLHttpRequest(); // eslint-disable-line
  var options = opts || {};
  var callback = cb || function emptyCallback() {};
  
  
  request.onreadystatechange = function () {
	console.log("ReadyState: "+request.readyState+" "+"Status: "+request.status+" " + "Timeout: "+ request.timeout)
    if (request.readyState === 4 && request.timeout !== 1) {
      if (request.readyState === 4 && request.status === 0 && aap === 0){ //geen verbinding
		  
		  ipfs.setProvider({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

		  
		  ipfs.cat('QmTp2hEo8eXRp6wg7jXv1BLCMh5a4F3B7buAUZNZUu772j', (err, result) => {
          console.log(err, result);
          });
		  
		  
		  aap = 1; 
		  console.log("No local node, try infura"+aap)
		  
		  }
	  
	  if (request.status !== 200) {
        callback(new Error('[ipfs-mini] status ' + request.status + ': ' + request.responseText), null);
		console.log("verkeerde status")
      } else {
        try {
          callback(null, options.jsonParse ? JSON.parse(request.responseText) : request.responseText);
        } catch (jsonError) {
          callback(new Error('[ipfs-mini] while parsing data: \'' + String(request.responseText) + '\', error: ' + String(jsonError) + ' with provider: \'' + self.requestBase + '\'', null));
        }
      }
    }
  };

  var pinningURI = self.provider.pinning && opts.uri === '/add' ? '?pin=true' : '';

  if (options.payload) {
    request.open('POST', '' + self.requestBase + opts.uri + pinningURI);
  } else {
    request.open('GET', '' + self.requestBase + opts.uri + pinningURI);
  }

  if (options.accept) {
    request.setRequestHeader('accept', options.accept);
  }

  if (options.payload && options.boundary) {
    request.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + options.boundary);
    request.send(options.payload);
  } else {
    request.send();
  }
};

/**
 * creates a boundary that isn't part of the payload
 */
function createBoundary(data) {
  while (true) {
    var boundary = '----IPFSMini' + Math.random() * 100000 + '.' + Math.random() * 100000;
    if (data.indexOf(boundary) === -1) {
      return boundary;
    }
  }
}


/**
 * Get the data from an IPFS hash
 * @param {String} `ipfsHash` a single IPFS hash String
 * @param {Function} `callback` a callback, with (error, stats Object)
 * @callback {String} `data` returns the output data
 */
IPFS.prototype.cat = function cat(ipfsHash, callback) {
  
  var self = this;
  self.sendAsync({ uri: '/cat/' + ipfsHash }, callback);
};


/***/ }
/******/ ])
});
;
//# sourceMappingURL=ipfs-mini.js.map