(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["input-plate-number"] = factory();
	else
		root["input-plate-number"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "ad77");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0257":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es-x/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__("073b");
var fails = __webpack_require__("dd5c");

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "03d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("7c0d");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "04bf":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__("eba7");

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "073b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("0b32");
var userAgent = __webpack_require__("dd63");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "0850":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("962a");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "08e3":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("dd5c");
var global = __webpack_require__("0b32");

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = global.RegExp;

var UNSUPPORTED_Y = fails(function () {
  var re = $RegExp('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y || fails(function () {
  return !$RegExp('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y || fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

module.exports = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y
};


/***/ }),

/***/ "09bd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("0b32");
var uncurryThis = __webpack_require__("962a");
var fails = __webpack_require__("dd5c");
var classof = __webpack_require__("c5df");

var Object = global.Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "0b32":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es-x/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("d8fc")))

/***/ }),

/***/ "0db4":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("0b32");
var requireObjectCoercible = __webpack_require__("2ce2");

var Object = global.Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "109b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8c0f");
var $map = __webpack_require__("d45f").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("ede0");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "1413":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "16e4":
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__("2116");
var ownKeys = __webpack_require__("c355");
var getOwnPropertyDescriptorModule = __webpack_require__("f75f");
var definePropertyModule = __webpack_require__("bc44");

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ "17bb":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("dd5c");
var global = __webpack_require__("0b32");

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});


/***/ }),

/***/ "186d":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("3770");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "1955":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("0b32");
var isCallable = __webpack_require__("f156");
var tryToString = __webpack_require__("3c3b");

var TypeError = global.TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "2116":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("962a");
var toObject = __webpack_require__("0db4");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es-x/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "2232":
/***/ (function(module, exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__("7c0d");
var definePropertiesModule = __webpack_require__("b914");
var enumBugKeys = __webpack_require__("d260");
var hiddenKeys = __webpack_require__("1413");
var html = __webpack_require__("a57d");
var documentCreateElement = __webpack_require__("528b");
var sharedKey = __webpack_require__("9637");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es-x/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ "22ca":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("b32c");
var fails = __webpack_require__("dd5c");
var createElement = __webpack_require__("528b");

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "27e4":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("0b32");
var isCallable = __webpack_require__("f156");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "287c":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("a527");
var errorToString = __webpack_require__("cee1");

var ErrorPrototype = Error.prototype;

// `Error.prototype.toString` method fix
// https://tc39.es/ecma262/#sec-error.prototype.tostring
if (ErrorPrototype.toString !== errorToString) {
  redefine(ErrorPrototype, 'toString', errorToString);
}


/***/ }),

/***/ "2b14":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("0b32");
var call = __webpack_require__("04bf");
var isObject = __webpack_require__("d526");
var isSymbol = __webpack_require__("5747");
var getMethod = __webpack_require__("fe18");
var ordinaryToPrimitive = __webpack_require__("8d33");
var wellKnownSymbol = __webpack_require__("4896");

var TypeError = global.TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "2c25":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2ce2":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("0b32");

var TypeError = global.TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "3357":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("830c");
var toAbsoluteIndex = __webpack_require__("186d");
var lengthOfArrayLike = __webpack_require__("db97");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "33c7":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("b32c");
var hasOwn = __webpack_require__("2116");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "34c3":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("4896");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "3770":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- safe
  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};


/***/ }),

/***/ "3c3b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("0b32");

var String = global.String;

module.exports = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "40fe":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("4dab");
var enumBugKeys = __webpack_require__("d260");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "4896":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("0b32");
var shared = __webpack_require__("49f5");
var hasOwn = __webpack_require__("2116");
var uid = __webpack_require__("0850");
var NATIVE_SYMBOL = __webpack_require__("0257");
var USE_SYMBOL_AS_UID = __webpack_require__("5786");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "49f5":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("2c25");
var store = __webpack_require__("55ec");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.22.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.22.3/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ "4dab":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("962a");
var hasOwn = __webpack_require__("2116");
var toIndexedObject = __webpack_require__("830c");
var indexOf = __webpack_require__("3357").indexOf;
var hiddenKeys = __webpack_require__("1413");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "51a7":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("dd5c");
var isCallable = __webpack_require__("f156");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "528b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("0b32");
var isObject = __webpack_require__("d526");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "52f7":
/***/ (function(module, exports) {

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "55ec":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("0b32");
var setGlobal = __webpack_require__("ce6a");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "563d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("6bf0");
var $ = __webpack_require__("8c0f");
var global = __webpack_require__("0b32");
var call = __webpack_require__("04bf");
var uncurryThis = __webpack_require__("962a");
var isCallable = __webpack_require__("f156");
var isObject = __webpack_require__("d526");

var DELEGATES_TO_EXEC = function () {
  var execCalled = false;
  var re = /[ac]/;
  re.exec = function () {
    execCalled = true;
    return /./.exec.apply(this, arguments);
  };
  return re.test('abc') === true && execCalled;
}();

var Error = global.Error;
var un$Test = uncurryThis(/./.test);

// `RegExp.prototype.test` method
// https://tc39.es/ecma262/#sec-regexp.prototype.test
$({ target: 'RegExp', proto: true, forced: !DELEGATES_TO_EXEC }, {
  test: function (str) {
    var exec = this.exec;
    if (!isCallable(exec)) return un$Test(this, str);
    var result = call(exec, this, str);
    if (result !== null && !isObject(result)) {
      throw new Error('RegExp exec method returned something other than an Object or null');
    }
    return !!result;
  }
});


/***/ }),

/***/ "5672":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "5747":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("0b32");
var getBuiltIn = __webpack_require__("27e4");
var isCallable = __webpack_require__("f156");
var isPrototypeOf = __webpack_require__("a027");
var USE_SYMBOL_AS_UID = __webpack_require__("5786");

var Object = global.Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object(it));
};


/***/ }),

/***/ "5786":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es-x/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__("0257");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "5ecd":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("b32c");
var fails = __webpack_require__("dd5c");

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ "60a7":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("962a");
var isCallable = __webpack_require__("f156");
var store = __webpack_require__("55ec");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "6365":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("0b32");
var isArray = __webpack_require__("df0c");
var isConstructor = __webpack_require__("e0bf");
var isObject = __webpack_require__("d526");
var wellKnownSymbol = __webpack_require__("4896");

var SPECIES = wellKnownSymbol('species');
var Array = global.Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "6407":
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__("9edf");

module.exports = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
};


/***/ }),

/***/ "65db":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("34c3");
var classof = __webpack_require__("c614");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "6951":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable es-x/no-array-prototype-indexof -- required for testing */
var $ = __webpack_require__("8c0f");
var uncurryThis = __webpack_require__("962a");
var $IndexOf = __webpack_require__("3357").indexOf;
var arrayMethodIsStrict = __webpack_require__("698d");

var un$IndexOf = uncurryThis([].indexOf);

var NEGATIVE_ZERO = !!un$IndexOf && 1 / un$IndexOf([1], 1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? un$IndexOf(this, searchElement, fromIndex) || 0
      : $IndexOf(this, searchElement, fromIndex);
  }
});


/***/ }),

/***/ "698d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("dd5c");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "6bf0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8c0f");
var exec = __webpack_require__("e784");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "6d14":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("962a");
var aCallable = __webpack_require__("1955");
var NATIVE_BIND = __webpack_require__("eba7");

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "71ff":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8c0f");
var $filter = __webpack_require__("d45f").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("ede0");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "79a8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_pnpm_mini_css_extract_plugin_0_9_0_webpack_4_46_0_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_pnpm_css_loader_3_6_0_webpack_4_46_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_pnpm_vue_loader_15_9_8_679359cdb69c218f2f8f476b2ba08796_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_pnpm_sass_loader_8_0_2_sass_1_51_0_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_pnpm_cache_loader_4_1_0_webpack_4_46_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_pnpm_vue_loader_15_9_8_679359cdb69c218f2f8f476b2ba08796_node_modules_vue_loader_lib_index_js_vue_loader_options_input_plate_number_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8bf2");
/* harmony import */ var _node_modules_pnpm_mini_css_extract_plugin_0_9_0_webpack_4_46_0_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_pnpm_css_loader_3_6_0_webpack_4_46_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_pnpm_vue_loader_15_9_8_679359cdb69c218f2f8f476b2ba08796_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_pnpm_sass_loader_8_0_2_sass_1_51_0_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_pnpm_cache_loader_4_1_0_webpack_4_46_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_pnpm_vue_loader_15_9_8_679359cdb69c218f2f8f476b2ba08796_node_modules_vue_loader_lib_index_js_vue_loader_options_input_plate_number_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_mini_css_extract_plugin_0_9_0_webpack_4_46_0_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_pnpm_css_loader_3_6_0_webpack_4_46_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_pnpm_vue_loader_15_9_8_679359cdb69c218f2f8f476b2ba08796_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_pnpm_sass_loader_8_0_2_sass_1_51_0_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_pnpm_cache_loader_4_1_0_webpack_4_46_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_pnpm_vue_loader_15_9_8_679359cdb69c218f2f8f476b2ba08796_node_modules_vue_loader_lib_index_js_vue_loader_options_input_plate_number_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "79d9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "7b72":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__("0db4");
var toAbsoluteIndex = __webpack_require__("186d");
var lengthOfArrayLike = __webpack_require__("db97");

// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = lengthOfArrayLike(O);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "7c0d":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("0b32");
var isObject = __webpack_require__("d526");

var String = global.String;
var TypeError = global.TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};


/***/ }),

/***/ "7da5":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "830c":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("09bd");
var requireObjectCoercible = __webpack_require__("2ce2");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "8764":
/***/ (function(module, exports, __webpack_require__) {

var arraySpeciesConstructor = __webpack_require__("6365");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "8bf2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8c0f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("0b32");
var getOwnPropertyDescriptor = __webpack_require__("f75f").f;
var createNonEnumerableProperty = __webpack_require__("e545");
var redefine = __webpack_require__("a527");
var setGlobal = __webpack_require__("ce6a");
var copyConstructorProperties = __webpack_require__("16e4");
var isForced = __webpack_require__("51a7");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "8d33":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("0b32");
var call = __webpack_require__("04bf");
var isCallable = __webpack_require__("f156");
var isObject = __webpack_require__("d526");

var TypeError = global.TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "908c":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("b32c");
var FUNCTION_NAME_EXISTS = __webpack_require__("33c7").EXISTS;
var uncurryThis = __webpack_require__("962a");
var defineProperty = __webpack_require__("bc44").f;

var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis(nameRE.exec);
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "925e":
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__("04bf");
var hasOwn = __webpack_require__("2116");
var isPrototypeOf = __webpack_require__("a027");
var regExpFlags = __webpack_require__("03d5");

var RegExpPrototype = RegExp.prototype;

module.exports = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype) && !hasOwn(R, 'flags') && isPrototypeOf(RegExpPrototype, R)
    ? call(regExpFlags, R) : flags;
};


/***/ }),

/***/ "962a":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__("eba7");

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var uncurryThis = NATIVE_BIND && bind.bind(call, call);

module.exports = NATIVE_BIND ? function (fn) {
  return fn && uncurryThis(fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "9637":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("49f5");
var uid = __webpack_require__("0850");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "963e":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("4896");
var create = __webpack_require__("2232");
var definePropertyModule = __webpack_require__("bc44");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9edf":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("0b32");
var classof = __webpack_require__("c614");

var String = global.String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};


/***/ }),

/***/ "a027":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("962a");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "a527":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("0b32");
var isCallable = __webpack_require__("f156");
var hasOwn = __webpack_require__("2116");
var createNonEnumerableProperty = __webpack_require__("e545");
var setGlobal = __webpack_require__("ce6a");
var inspectSource = __webpack_require__("60a7");
var InternalStateModule = __webpack_require__("d8a0");
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__("33c7").CONFIGURABLE;

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;
  if (isCallable(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      createNonEnumerableProperty(value, 'name', name);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "a57d":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("27e4");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "a712":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PROPER_FUNCTION_NAME = __webpack_require__("33c7").PROPER;
var redefine = __webpack_require__("a527");
var anObject = __webpack_require__("7c0d");
var $toString = __webpack_require__("9edf");
var fails = __webpack_require__("dd5c");
var getRegExpFlags = __webpack_require__("925e");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var n$ToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return n$ToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && n$ToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
    return '/' + pattern + '/' + flags;
  }, { unsafe: true });
}


/***/ }),

/***/ "ad77":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/@vue+cli-service@4.4.6_0f25d1aa8415e98c3e62a4178f3c555d/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("7da5")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.22.3/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("109b");

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.22.3/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("908c");

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1ad1681e-vue-loader-template"}!./node_modules/.pnpm/vue-loader@15.9.8_679359cdb69c218f2f8f476b2ba08796/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/.pnpm/vue-loader@15.9.8_679359cdb69c218f2f8f476b2ba08796/node_modules/vue-loader/lib??vue-loader-options!./packages/input-plate-number/src/input-plate-number.vue?vue&type=template&id=4a936490&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"keyboard",class:_vm.wrapClass},[_vm._t("header"),_c('div',{staticClass:"keyboard-input"},[(_vm.isMobile)?_vm._l((_vm.inputs),function(item,idx){return _c('div',{key:idx,staticClass:"keyboard-input__item",class:[
          _vm.curKeyIdx === idx + 1 && 'keyboard-input__active ignore-height',
          idx === 7 && 'keyboard-input__energy'
        ],on:{"touchstart":function($event){return _vm.handleInpTouch(idx)}}},[_vm._v(" "+_vm._s(item)+" "),_c('i',{directives:[{name:"show",rawName:"v-show",value:(idx === 7),expression:"idx === 7"}],staticClass:"keyboard-input__energy--icon"})])}):[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.pcCarNumber),expression:"pcCarNumber"}],staticClass:"keyboard-input__content",attrs:{"type":"text","placeholder":"请输入车牌"},domProps:{"value":(_vm.pcCarNumber)},on:{"keyup":_vm.handleKeyUp,"input":[function($event){if($event.target.composing){ return; }_vm.pcCarNumber=$event.target.value},_vm.handleInput]}})]],2),_vm._t("default"),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.innerKeyboardVisible),expression:"innerKeyboardVisible"}],staticClass:"keyboard-content"},[_c('div',{staticClass:"keyboard-bar"},[_c('div',{staticClass:"keyboard-bar__close",on:{"touchstart":_vm.handleCloseKeyboard}},[_c('i',{staticClass:"keyboard-bar__close--icon"}),_c('span',{staticClass:"keyboard-bar__close--label"},[_vm._v("关闭")])]),_c('label',{staticClass:"keyboard-bar__switch"},[_c('span',{staticClass:"keyboard-bar__switch--label"},[_vm._v("新能源")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.isEnergy),expression:"isEnergy"}],staticClass:"keyboard-switch keyboard-switch--animation",attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.isEnergy)?_vm._i(_vm.isEnergy,null)>-1:(_vm.isEnergy)},on:{"change":[function($event){var $$a=_vm.isEnergy,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.isEnergy=$$a.concat([$$v]))}else{$$i>-1&&(_vm.isEnergy=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.isEnergy=$$c}},_vm.handleEnergyChange]}})])]),(_vm.curKeyIdx === 1)?_c('div',{staticClass:"keyboard-prefix"},[_c('div',{staticClass:"keyboard-row"},_vm._l((_vm.provinceData1),function(key){return _c('div',{key:key,staticClass:"keyboard-key",on:{"touchstart":function($event){return _vm.handleKeyTouchStart(key, $event)},"touchend":_vm.handleKeyTouchEnd}},[_c('span',{staticClass:"keyboard-key__txt"},[_vm._v(_vm._s(key))])])}),0),_c('div',{staticClass:"keyboard-row"},_vm._l((_vm.provinceData2),function(key){return _c('div',{key:key,staticClass:"keyboard-key",on:{"touchstart":function($event){return _vm.handleKeyTouchStart(key, $event)},"touchend":_vm.handleKeyTouchEnd}},[_c('span',{staticClass:"keyboard-key__txt"},[_vm._v(_vm._s(key))])])}),0),_c('div',{staticClass:"keyboard-row"},[_vm._m(0),_vm._l((_vm.provinceData3),function(key){return _c('div',{key:key,staticClass:"keyboard-key",on:{"touchstart":function($event){return _vm.handleKeyTouchStart(key, $event)},"touchend":_vm.handleKeyTouchEnd}},[_c('span',{staticClass:"keyboard-key__txt"},[_vm._v(_vm._s(key))])])}),_vm._m(1)],2),_c('div',{staticClass:"keyboard-row"},[_vm._m(2),_vm._l((_vm.provinceData4),function(key){return _c('div',{key:key,staticClass:"keyboard-key",on:{"touchstart":function($event){return _vm.handleKeyTouchStart(key, $event)},"touchend":_vm.handleKeyTouchEnd}},[_c('span',{staticClass:"keyboard-key__txt"},[_vm._v(_vm._s(key))])])}),_c('div',{staticClass:"keyboard-key keyboard-key__del",on:{"touchstart":_vm.handleDelTouch}},[_c('span',{staticClass:"keyboard-key__txt"})]),_vm._m(3)],2)]):_c('div',{staticClass:"keyboard-suffix"},[_c('div',{staticClass:"keyboard-row"},_vm._l((_vm.keyboardData1),function(key){return _c('div',{key:key,staticClass:"keyboard-key",class:[_vm.curKeyIdx === 2 && !_vm.isNoCar && 'keyboard-key__disabled'],on:{"touchstart":function($event){return _vm.handleKeyTouchStart(key, $event)},"touchend":_vm.handleKeyTouchEnd}},[_c('span',{staticClass:"keyboard-key__txt"},[_vm._v(_vm._s(key))])])}),0),_c('div',{staticClass:"keyboard-row"},_vm._l((_vm.keyboardData2),function(key){return _c('div',{key:key,staticClass:"keyboard-key",class:[
            _vm.isLiterCom(key) && 'keyboard-key__disabled',
            _vm.isToO(key) && 'keyboard-key__disabled'
          ],on:{"touchstart":function($event){return _vm.handleKeyTouchStart(key, $event)},"touchend":_vm.handleKeyTouchEnd}},[_c('span',{staticClass:"keyboard-key__txt"},[_vm._v(_vm._s(key))])])}),0),_c('div',{staticClass:"keyboard-row"},_vm._l((_vm.keyboardData3),function(key){return _c('div',{key:key,staticClass:"keyboard-key",class:[_vm.isLiterCom(key) && 'keyboard-key__disabled'],on:{"touchstart":function($event){return _vm.handleKeyTouchStart(key, $event)},"touchend":_vm.handleKeyTouchEnd}},[_c('span',{staticClass:"keyboard-key__txt"},[_vm._v(_vm._s(key))])])}),0),_c('div',{staticClass:"keyboard-row"},[_vm._l((_vm.keyboardData4),function(key){return _c('div',{key:key,staticClass:"keyboard-key",class:[_vm.isLiterCom(key) && 'keyboard-key__disabled'],on:{"touchstart":function($event){return _vm.handleKeyTouchStart(key, $event)},"touchend":_vm.handleKeyTouchEnd}},[_c('span',{staticClass:"keyboard-key__txt"},[_vm._v(_vm._s(key))])])}),_c('div',{staticClass:"keyboard-key keyboard-key__del",on:{"click":_vm.handleDelTouch}},[_c('span',{staticClass:"keyboard-key__txt"})])],2)]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.keyHover),expression:"keyHover"}],staticClass:"keyboard-key__hover",style:({ top: _vm.keyHoverY + 'px', left: _vm.keyHoverX + 'px' })},[_vm._v(" "+_vm._s(_vm.keyVal)+" ")])])],2)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"keyboard-key keyboard-key__empty-small"},[_c('span',{staticClass:"keyboard-key__txt"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"keyboard-key keyboard-key__empty-small"},[_c('span',{staticClass:"keyboard-key__txt"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"keyboard-key keyboard-key__empty"},[_c('span',{staticClass:"keyboard-key__txt"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"keyboard-key keyboard-key__empty"},[_c('span',{staticClass:"keyboard-key__txt"})])}]


// CONCATENATED MODULE: ./packages/input-plate-number/src/input-plate-number.vue?vue&type=template&id=4a936490&

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.22.3/node_modules/core-js/modules/es.array.fill.js
var es_array_fill = __webpack_require__("f761");

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.22.3/node_modules/core-js/modules/es.error.to-string.js
var es_error_to_string = __webpack_require__("287c");

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.22.3/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("e2fc");

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.22.3/node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("a712");

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.22.3/node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__("c6e7");

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.22.3/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("71ff");

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.22.3/node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("6bf0");

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.22.3/node_modules/core-js/modules/es.regexp.test.js
var es_regexp_test = __webpack_require__("563d");

// CONCATENATED MODULE: ./packages/utils/reg.js




/**
 * Created by fzq on 2020/7/22.
 */

/**
 * 数字正则
 * @param value 要验证的字符
 * @returns {boolean}
 */

var isNumber = function isNumber(value) {
  return /(0|^[1-9]\d*$)/.test(value);
};
/**
 * 验证车牌正则(包括新能源汽车)
 * @param plateNum 车牌
 * @returns {boolean}
 */

var isPlateNum = function isPlateNum(plateNum) {
  return /^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领无][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领无][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/.test(plateNum);
};
/**
 * 中文正则(是否包含中文)
 * @param liter 中文
 * @returns {boolean}
 */

var isLiter = function isLiter(liter) {
  return /[\u4e00-\u9fa5]/.test(liter);
};
/**
 * 判断是否是移动端
 * @return {boolean}
 */

var isMobile = function isMobile() {
  return /Android|webOS|iPhone|iPod|BlackBerry|RIM|Windows Phone|Nexus|Nokia|iPad/i.test(navigator.userAgent);
};
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.22.3/node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("6951");

// CONCATENATED MODULE: ./packages/utils/is-mobile.js






/**
 * currentFile link https://github.com/juliangruber/is-mobile/blob/master/index.js
 * @type {RegExp}
 * @return Boolean
 */

var mobileRE = /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;
var tabletRE = /android|ipad|playbook|silk/i;
function is_mobile_isMobile(opts) {
  if (!opts) opts = {};
  var ua = opts.ua;
  if (!ua && typeof navigator !== "undefined") ua = navigator.userAgent;

  if (ua && ua.headers && typeof ua.headers["user-agent"] === "string") {
    ua = ua.headers["user-agent"];
  }

  if (typeof ua !== "string") return false;
  var result = mobileRE.test(ua) || !!opts.tablet && tabletRE.test(ua);

  if (!result && opts.tablet && opts.featureDetect && navigator && navigator.maxTouchPoints > 1 && ua.indexOf("Macintosh") !== -1 && ua.indexOf("Safari") !== -1) {
    result = true;
  }

  return result;
}
// CONCATENATED MODULE: ./packages/utils/index.js
/**
 * Created by fzq on 2020/7/22.
 */

/**
 * 获取元素距离页面顶部以及右边的距离
 * @param el
 * @returns {{top: number, left: number}}
 */
var getVertexPosition = function getVertexPosition(el) {
  var currentTarget = el;
  var top = 0;
  var left = 0;

  while (currentTarget !== null) {
    top += currentTarget.offsetTop;
    left += currentTarget.offsetLeft;
    currentTarget = currentTarget.offsetParent;
  }

  return {
    top: top,
    left: left
  };
};
// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/.pnpm/thread-loader@2.1.3_webpack@4.46.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.2.5_598a497cebab8e15ee8f9e5632178e63/node_modules/babel-loader/lib!./node_modules/.pnpm/babel-loader@8.2.5/node_modules/babel-loader/lib!./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/.pnpm/vue-loader@15.9.8_679359cdb69c218f2f8f476b2ba08796/node_modules/vue-loader/lib??vue-loader-options!./packages/input-plate-number/src/input-plate-number.vue?vue&type=script&lang=js&













 //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var input_plate_numbervue_type_script_lang_js_ = ({
  name: "inputPlateNumber",
  props: {
    wrapClass: String,
    defaultPlateNumber: {
      type: String,
      default: "浙B"
    },
    keyboardVisible: {
      type: Boolean,
      default: true
    },
    energy: {
      type: Boolean,
      default: false
    },
    isNoCar: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      curKeyIdx: 1,
      // 默认初始下标1
      provinceData1: ["京", "津", "晋", "冀", "蒙", "辽", "吉", "黑", "沪"],
      provinceData2: ["苏", "浙", "皖", "闽", "赣", "鲁", "豫", "鄂", "湘"],
      provinceData3: ["粤", "桂", "琼", "渝", "川", "贵", "云", "藏"],
      provinceData4: ["陕", "甘", "青", "宁", "新", "使", "无"],
      keyboardData1: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
      keyboardData2: ["Q", "W", "E", "R", "T", "Y", "U", "O", "P", "港"],
      keyboardData3: ["A", "S", "D", "F", "G", "H", "J", "K", "L", "澳"],
      keyboardData4: ["Z", "X", "C", "V", "B", "N", "M", "学", "领"],
      keyHoverX: 0,
      keyHoverY: 0,
      keyHover: false,
      canKeyClick: true,
      // 只能点击一次
      keyVal: "",
      isEnergy: false,
      // 是否新能源
      inputs: Array(7).fill(""),
      innerKeyboardVisible: true,
      isMobile: true,
      // 移动端
      pcCarNumber: ""
    };
  },
  computed: {
    isLiterCom: function isLiterCom() {
      return function (liter) {
        if (this.curKeyIdx === 7) {
          return isLiter(liter) && this.isEnergy;
        } else {
          return isLiter(liter);
        }
      };
    },
    isToO: function isToO() {
      return function (liter) {
        return this.curKeyIdx !== 2 && liter.toString().toLocaleLowerCase() === "o"; // 字母o
      };
    }
  },
  watch: {
    isEnergy: function isEnergy(val) {
      if (val) {
        if (this.inputs[this.curKeyIdx - 1]) {
          this.curKeyIdx++;
        }

        this.inputs.length === 7 && this.inputs.push("");
      } else {
        var defaultPlateNumber = "浙B";
        this.inputs = this.inputs.map(function (item, idx) {
          item = defaultPlateNumber[idx];
          return item;
        });
        this.curKeyIdx = defaultPlateNumber.length + 1;
        this.inputs.pop();
      }
    },
    keyboardVisible: function keyboardVisible(val) {
      this.$emit("update:keyboardVisible", val);
      this.innerKeyboardVisible = val;
    },
    defaultPlateNumber: function defaultPlateNumber(val) {
      if (val) {
        if (!this.isMobile) {
          this.pcCarNumber = val;
          return;
        }

        if (val.length === 8) {
          this.isEnergy = true;
        }

        this.fillInputVal();
        this.$forceUpdate();
      }
    }
  },
  methods: {
    handleInpTouch: function handleInpTouch(idx) {
      this.curKeyIdx = idx + 1;
      this.innerKeyboardVisible = true;
      var plateNum = this.inputs.join("");
      this.$emit("update:keyboardVisible", true);
      this.$emit("inp-click", {
        plateNum: plateNum,
        curIdx: this.curKeyIdx
      });
    },
    handleEnergyChange: function handleEnergyChange() {
      this.$emit("update:energy", this.isEnergy);
      this.$emit("change-energy", this.isEnergy);
    },
    handleKeyTouchStart: function handleKeyTouchStart(key, e) {
      var _this = this;

      if (this.curKeyIdx > 8) return;

      if (!this.canKeyClick) {
        return;
      }

      this.canKeyClick = false;

      try {
        var currentParentClassList = e.target.parentElement.classList;
        if (currentParentClassList.contains("keyboard-key__disabled")) return;
      } catch (e) {
        console.error(e);
      }

      this.keyHover = true;

      var _getVertexPosition = getVertexPosition(e.target),
          top = _getVertexPosition.top,
          left = _getVertexPosition.left;

      var offsetX = e.touches[0].pageX - left;
      var midWidth = e.target.scrollWidth / 2;
      this.keyHoverY = top;

      if (offsetX > midWidth) {
        this.keyHoverX = e.touches[0].pageX - (offsetX - midWidth);
      } else {
        this.keyHoverX = e.touches[0].pageX + midWidth - offsetX;
      }

      this.keyVal = key;
      this.$set(this.inputs, this.curKeyIdx - 1, key);
      var plateNum = this.inputs.join("");
      this.$emit("key-click", {
        curKey: key,
        plateNum: plateNum
      });

      if (!this.isEnergy && this.curKeyIdx === 7 || this.isEnergy && this.curKeyIdx === 8) {
        this.$emit("done", {
          isPlateNum: isPlateNum(plateNum),
          plateNum: plateNum
        }, function () {
          _this.handleClose();
        });
        return;
      }

      this.curKeyIdx++;
    },
    handleKeyTouchEnd: function handleKeyTouchEnd() {
      this.canKeyClick = true;
      this.keyHover = false;
    },
    handleDelTouch: function handleDelTouch() {
      var idx = this.isEnergy ? 7 : 6;

      if (this.inputs[idx]) {
        this.$set(this.inputs, idx, "");
      } else {
        this.curKeyIdx--;
        this.$set(this.inputs, this.curKeyIdx - 1, "");
      }

      this.curKeyIdx <= 1 && (this.curKeyIdx = 1);
      this.$emit("del-click", {
        plateNum: this.inputs.filter(function (e) {
          return e;
        }).join("")
      });
    },
    handleCloseKeyboard: function handleCloseKeyboard() {
      this.handleClose();
      this.$emit("close", this.innerKeyboardVisible);
    },
    handleClose: function handleClose() {
      this.innerKeyboardVisible = false;
      this.$emit("update:keyboardVisible", false);
    },
    handleInput: function handleInput(e) {
      this.$emit("key-click", {
        key: e.data,
        plateNum: this.pcCarNumber
      });
    },
    handleKeyUp: function handleKeyUp(e) {
      if (e.key.toLowerCase() === "enter") {
        this.$emit("done", {
          isPlateNum: isPlateNum(this.pcCarNumber),
          plateNum: this.pcCarNumber
        });
      } else if (e.key.toLowerCase() === "backspace") {
        this.$emit("del-click", {
          plateNum: this.pcCarNumber
        });
      }
    },
    fillInputVal: function fillInputVal() {
      var _this2 = this;

      this.curKeyIdx = this.defaultPlateNumber.length + 1;

      if (this.isEnergy && this.inputs.length === 7) {
        this.inputs.push("");
      }

      this.inputs = this.inputs.map(function (item, idx) {
        item = _this2.defaultPlateNumber[idx];
        return item;
      });
    }
  },
  created: function created() {
    // 是否处于移动端
    this.isMobile = is_mobile_isMobile();

    if (!this.isMobile) {
      this.innerKeyboardVisible = false;
      this.pcCarNumber = this.defaultPlateNumber;
      return;
    }

    this.isEnergy = this.energy;
    this.innerKeyboardVisible = this.keyboardVisible;
    this.fillInputVal();
  }
});
// CONCATENATED MODULE: ./packages/input-plate-number/src/input-plate-number.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_input_plate_numbervue_type_script_lang_js_ = (input_plate_numbervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/input-plate-number/src/input-plate-number.vue?vue&type=style&index=0&lang=scss&
var input_plate_numbervue_type_style_index_0_lang_scss_ = __webpack_require__("79a8");

// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_679359cdb69c218f2f8f476b2ba08796/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/input-plate-number/src/input-plate-number.vue






/* normalize component */

var component = normalizeComponent(
  src_input_plate_numbervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var input_plate_number = (component.exports);
// CONCATENATED MODULE: ./packages/input-plate-number/index.js


/**
 * Created by fzq on 2020/7/23.
 */
// 导入组件，组件必须声明 name


/* istanbul ignore next */
// 为组件提供 install 安装方法，供按需引入

input_plate_number.install = function (Vue) {
  return Vue.component(input_plate_number.name, input_plate_number);
}; // 默认导出组件


/* harmony default export */ var packages_input_plate_number = (input_plate_number);
// CONCATENATED MODULE: ./packages/index.js




/**
 * Created by fzq on 2020/7/23.
 */


var components = [packages_input_plate_number]; // 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册

var install = function install(Vue) {
  // 判断是否安装
  if (install.installed) return; // 遍历注册全局组件

  components.map(function (component) {
    return Vue.component(component.name, component);
  });
}; // 判断是否是直接引入文件


if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var packages_0 = ({
  version: "0.0.1",
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install: install,
  // 以下是具体的组件列表
  InputPlateNumber: packages_input_plate_number
});
// CONCATENATED MODULE: ./node_modules/.pnpm/@vue+cli-service@4.4.6_0f25d1aa8415e98c3e62a4178f3c555d/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ }),

/***/ "b32c":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("dd5c");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "b76a":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("dd5c");
var global = __webpack_require__("0b32");

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});


/***/ }),

/***/ "b914":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("b32c");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__("5ecd");
var definePropertyModule = __webpack_require__("bc44");
var anObject = __webpack_require__("7c0d");
var toIndexedObject = __webpack_require__("830c");
var objectKeys = __webpack_require__("fd8b");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es-x/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ "bc44":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("0b32");
var DESCRIPTORS = __webpack_require__("b32c");
var IE8_DOM_DEFINE = __webpack_require__("22ca");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__("5ecd");
var anObject = __webpack_require__("7c0d");
var toPropertyKey = __webpack_require__("cca5");

var TypeError = global.TypeError;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "bdbf":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("0b32");
var isCallable = __webpack_require__("f156");
var inspectSource = __webpack_require__("60a7");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "c355":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("27e4");
var uncurryThis = __webpack_require__("962a");
var getOwnPropertyNamesModule = __webpack_require__("40fe");
var getOwnPropertySymbolsModule = __webpack_require__("52f7");
var anObject = __webpack_require__("7c0d");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "c5df":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("962a");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "c614":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("0b32");
var TO_STRING_TAG_SUPPORT = __webpack_require__("34c3");
var isCallable = __webpack_require__("f156");
var classofRaw = __webpack_require__("c5df");
var wellKnownSymbol = __webpack_require__("4896");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var Object = global.Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "c6e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8c0f");
var uncurryThis = __webpack_require__("962a");
var IndexedObject = __webpack_require__("09bd");
var toIndexedObject = __webpack_require__("830c");
var arrayMethodIsStrict = __webpack_require__("698d");

var un$Join = uncurryThis([].join);

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return un$Join(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "cca5":
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__("2b14");
var isSymbol = __webpack_require__("5747");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "ce6a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("0b32");

// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "cee1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("b32c");
var fails = __webpack_require__("dd5c");
var anObject = __webpack_require__("7c0d");
var create = __webpack_require__("2232");
var normalizeStringArgument = __webpack_require__("6407");

var nativeErrorToString = Error.prototype.toString;

var INCORRECT_TO_STRING = fails(function () {
  if (DESCRIPTORS) {
    // Chrome 32- incorrectly call accessor
    // eslint-disable-next-line es-x/no-object-defineproperty -- safe
    var object = create(Object.defineProperty({}, 'name', { get: function () {
      return this === object;
    } }));
    if (nativeErrorToString.call(object) !== 'true') return true;
  }
  // FF10- does not properly handle non-strings
  return nativeErrorToString.call({ message: 1, name: 2 }) !== '2: 1'
    // IE8 does not properly handle defaults
    || nativeErrorToString.call({}) !== 'Error';
});

module.exports = INCORRECT_TO_STRING ? function toString() {
  var O = anObject(this);
  var name = normalizeStringArgument(O.name, 'Error');
  var message = normalizeStringArgument(O.message);
  return !name ? message : !message ? name : name + ': ' + message;
} : nativeErrorToString;


/***/ }),

/***/ "d260":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "d45f":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("6d14");
var uncurryThis = __webpack_require__("962a");
var IndexedObject = __webpack_require__("09bd");
var toObject = __webpack_require__("0db4");
var lengthOfArrayLike = __webpack_require__("db97");
var arraySpeciesCreate = __webpack_require__("8764");

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "d526":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("f156");

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "d8a0":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("bdbf");
var global = __webpack_require__("0b32");
var uncurryThis = __webpack_require__("962a");
var isObject = __webpack_require__("d526");
var createNonEnumerableProperty = __webpack_require__("e545");
var hasOwn = __webpack_require__("2116");
var shared = __webpack_require__("55ec");
var sharedKey = __webpack_require__("9637");
var hiddenKeys = __webpack_require__("1413");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "d8fc":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "db97":
/***/ (function(module, exports, __webpack_require__) {

var toLength = __webpack_require__("fc88");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "dd5c":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "dd63":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("27e4");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "df0c":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c5df");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es-x/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ "e0bf":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("962a");
var fails = __webpack_require__("dd5c");
var isCallable = __webpack_require__("f156");
var classof = __webpack_require__("c614");
var getBuiltIn = __webpack_require__("27e4");
var inspectSource = __webpack_require__("60a7");

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ "e2fc":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("34c3");
var redefine = __webpack_require__("a527");
var toString = __webpack_require__("65db");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "e545":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("b32c");
var definePropertyModule = __webpack_require__("bc44");
var createPropertyDescriptor = __webpack_require__("5672");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "e784":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call = __webpack_require__("04bf");
var uncurryThis = __webpack_require__("962a");
var toString = __webpack_require__("9edf");
var regexpFlags = __webpack_require__("03d5");
var stickyHelpers = __webpack_require__("08e3");
var shared = __webpack_require__("49f5");
var create = __webpack_require__("2232");
var getInternalState = __webpack_require__("d8a0").get;
var UNSUPPORTED_DOT_ALL = __webpack_require__("b76a");
var UNSUPPORTED_NCG = __webpack_require__("17bb");

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt = uncurryThis(''.charAt);
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call(nativeExec, re1, 'a');
  call(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice(match.input, charsAdded);
        match[0] = stringSlice(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      call(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "eba7":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("dd5c");

module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ "ede0":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("dd5c");
var wellKnownSymbol = __webpack_require__("4896");
var V8_VERSION = __webpack_require__("073b");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "f156":
/***/ (function(module, exports) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "f75f":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("b32c");
var call = __webpack_require__("04bf");
var propertyIsEnumerableModule = __webpack_require__("79d9");
var createPropertyDescriptor = __webpack_require__("5672");
var toIndexedObject = __webpack_require__("830c");
var toPropertyKey = __webpack_require__("cca5");
var hasOwn = __webpack_require__("2116");
var IE8_DOM_DEFINE = __webpack_require__("22ca");

// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "f761":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("8c0f");
var fill = __webpack_require__("7b72");
var addToUnscopables = __webpack_require__("963e");

// `Array.prototype.fill` method
// https://tc39.es/ecma262/#sec-array.prototype.fill
$({ target: 'Array', proto: true }, {
  fill: fill
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');


/***/ }),

/***/ "fc88":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("3770");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "fd8b":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("4dab");
var enumBugKeys = __webpack_require__("d260");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es-x/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "fe18":
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__("1955");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ })

/******/ });
});
//# sourceMappingURL=input-plate-number.umd.js.map