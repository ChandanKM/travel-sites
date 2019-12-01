/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _Person = __webpack_require__(1);

	var _Person2 = _interopRequireDefault(_Person);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var chandan = new _Person2.default("Chandan", "Blue"); //This will get all the person object contents sent the Exports class.

	//var Person = require("./modules/Person"); //this is the lod sytle of exporting the javaScript FileList.
	//Creating the object of the class and calling the great method.

	var omi = new _Person2.default("Omi", "Green");
	chandan.great();
	omi.great();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	//This keyword is refer to use the current object created.
	//This is the blue print of the object similar to class.
	// function Person(fullName,favColor){
	//     this.name=fullName;
	//     this.color=favColor;
	//     this.great= function(){
	//         console.log("Hello myname is "+this.name+" favorite color is"+this.color+".");
	//     }
	// }

	//this is ES6 syntex but the babel is conver it to ES5 and run it.
	var Person = function () {
	    function Person(fullName, favColor) {
	        _classCallCheck(this, Person);

	        this.name = fullName;
	        this.color = favColor;
	    }

	    _createClass(Person, [{
	        key: "great",
	        value: function great() {
	            console.log("Hello my name is " + this.name + " favorite color is " + this.color + ".");
	        }
	    }]);

	    return Person;
	}();

	//in the export object we can pass the any object into the export
	//example: exports.name ="Super";
	// we can recive that in the require file.
	//Export the required things to get in the another file.

	exports.default = Person;

/***/ })
/******/ ]);