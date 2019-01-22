module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Swiper = __webpack_require__(1);

var _Swiper2 = _interopRequireDefault(_Swiper);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _antd = __webpack_require__(4);

var _index = __webpack_require__(5);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by zeyuan on 2018/12/22
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var ImgSlide = function (_React$Component) {
    _inherits(ImgSlide, _React$Component);

    function ImgSlide(props) {
        _classCallCheck(this, ImgSlide);

        console.log(props);

        var _this = _possibleConstructorReturn(this, (ImgSlide.__proto__ || Object.getPrototypeOf(ImgSlide)).call(this, props));

        _this.hideModal = function () {
            _this.props.onHide();
        };

        _this.swiperZoomIn = function () {
            var degs = _this.state.degs;
            if (degs[_this.swiper.activeIndex].scale === 3) {
                return;
            }
            _this.swiper.zoom.in();
            degs[_this.swiper.activeIndex].scale = 3;
            _this.setState({
                degs: degs
            });
        };

        _this.swiperZoomOut = function () {
            var degs = _this.state.degs;
            if (degs[_this.swiper.activeIndex].scale === 1) {
                return;
            }
            _this.swiper.zoom.out();
            degs[_this.swiper.activeIndex].scale = 1;
            _this.setState({
                degs: degs
            });
        };

        _this.swiperRotate = function () {
            var degs = _this.state.degs;
            var deg = degs[_this.swiper.activeIndex].deg;
            degs[_this.swiper.activeIndex].deg = deg - 90;
            _this.setState({
                degs: degs
            });
            _this.swiper.update(true);
        };

        _this.state = {
            visible: false,
            degs: {}
        };
        _this.swiper = null;
        return _this;
    }

    _createClass(ImgSlide, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            setTimeout(function () {
                _this2.swiperInit();
            }, 200);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.swiper.destroy(true, true);
            this.swiperSmall.destroy(true, true);
        }
    }, {
        key: 'swiperInit',
        value: function swiperInit() {
            if (this.swiper) {
                return;
            }
            var degs = {};
            this.props.imgList.forEach(function (item, index) {
                degs[index] = {};
                degs[index].deg = 0;
                degs[index].scale = 1;
            });
            this.setState({
                visible: true,
                degs: degs
            });
            var showIndex = this.props.showIndex;

            this.swiper = new _Swiper2.default('.swiper-container', {
                observer: true,
                touchRatio: 0,
                initialSlide: showIndex,
                zoom: {
                    toggle: false
                },
                spaceBetween: 10
            });

            this.swiperSmall = new _Swiper2.default('.swiper-container-small', {
                initialSlide: showIndex,
                spaceBetween: 12,
                centeredSlides: true,
                slidesPerView: 'auto',
                loopedSlides: this.props.imgList.length,
                touchRatio: 0,
                slideToClickedSlide: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            });

            this.swiper.controller.control = this.swiperSmall;
            this.swiperSmall.controller.control = this.swiper;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var imgList = this.props.imgList;


            return _react2.default.createElement(
                _antd.Modal,
                {
                    style: { 'top': '50px' },
                    visible: this.props.visible,
                    footer: null,
                    onOk: this.hideModal,
                    onCancel: this.hideModal,
                    width: 820,
                    className: 'swiper_modal',
                    destroyOnClose: true
                },
                _react2.default.createElement(
                    'div',
                    { className: 'swiper_modal_body' },
                    _react2.default.createElement(
                        'div',
                        { className: 'swiper-container', style: { 'opacity': this.state.visible ? 1 : 0 } },
                        _react2.default.createElement(
                            'div',
                            { className: 'swiper-wrapper' },
                            imgList ? imgList.map(function (item, index) {
                                var pic = _this3.state.degs[index] || {};
                                return _react2.default.createElement(
                                    'div',
                                    { className: 'swiper-slide', key: item },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'swiper-zoom-container' },
                                        _react2.default.createElement('img', { alt: '', src: item, rotate: pic.deg || 0, style: { 'transform': 'rotate(' + (pic.deg || 0) + 'deg) scale(' + (pic.scale || 1) + ')' } })
                                    )
                                );
                            }) : null
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'swiper-container-small-container' },
                        _react2.default.createElement(
                            'div',
                            { className: 'swiper-container-small' },
                            _react2.default.createElement(
                                'div',
                                { className: 'swiper-wrapper' },
                                imgList ? imgList.map(function (item, index) {
                                    var pic = _this3.state.degs[index] || {};
                                    return _react2.default.createElement(
                                        'div',
                                        { className: 'swiper-slide', key: item + '_small' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'swiper-zoom-container' },
                                            _react2.default.createElement('img', { alt: '', src: item, style: { 'transform': 'rotate(' + (pic.deg || 0) + 'deg)' } })
                                        )
                                    );
                                }) : null
                            )
                        ),
                        _react2.default.createElement('a', { className: 'swiper-button-prev' }),
                        _react2.default.createElement('a', { className: 'swiper-button-next' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'control' },
                        _react2.default.createElement(
                            'span',
                            { className: 'a', onClick: this.swiperZoomIn },
                            _react2.default.createElement(_antd.Icon, { type: 'zoom-in' })
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'a', onClick: this.swiperZoomOut },
                            _react2.default.createElement(_antd.Icon, { type: 'zoom-out' })
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'a', onClick: this.swiperRotate },
                            _react2.default.createElement(_antd.Icon, { type: 'undo' })
                        )
                    )
                )
            );
        }
    }]);

    return ImgSlide;
}(_react2.default.Component);

ImgSlide.defaultProps = {
    visible: false,
    showIndex: 0,
    imgList: [],
    onHide: function onHide() {}
};
exports.default = ImgSlide;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("Swiper");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(8)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--1-1!../node_modules/postcss-loader/src/index.js??postcss!../node_modules/less-loader/dist/cjs.js??ref--1-3!./index.less", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--1-1!../node_modules/postcss-loader/src/index.js??postcss!../node_modules/less-loader/dist/cjs.js??ref--1-3!./index.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".swiper_modal .ant-modal-body {\n  padding: 0;\n}\n.swiper_modal .ant-modal-close {\n  color: #ffffff !important;\n}\n.swiper_modal .ant-modal-close:hover {\n  color: #BBBBBB !important;\n}\n.swiper_modal .ant-modal-close-x {\n  font-size: 22px;\n}\n.swiper_modal .anticon-close:before,\n.swiper_modal .ant-modal-close-x:before {\n  content: '' !important;\n}\n.swiper_modal_body {\n  background: #000000;\n  width: 820px;\n  height: 758px;\n  position: relative;\n}\n.swiper_modal_body .swiper-container {\n  height: 660px;\n  -webkit-transition: opacity 0.2s;\n  -o-transition: opacity 0.2s;\n  transition: opacity 0.2s;\n}\n.swiper_modal_body .swiper-container .swiper-slide {\n  background: #000000;\n  overflow: hidden;\n}\n.swiper_modal_body .swiper-container .swiper-zoom-container img {\n  -webkit-transition-duration: 300ms;\n       -o-transition-duration: 300ms;\n          transition-duration: 300ms;\n}\n.swiper_modal_body .swiper-container-small-container {\n  margin-top: 10px;\n  position: relative;\n}\n.swiper_modal_body .swiper-container-small-container .swiper-button-next {\n  right: 20px;\n}\n.swiper_modal_body .swiper-container-small-container .swiper-button-prev {\n  left: 20px;\n}\n.swiper_modal_body .swiper-container-small-container .swiper-button-next,\n.swiper_modal_body .swiper-container-small-container .swiper-button-prev {\n  width: 26px;\n  height: 40px;\n  background-size: 23px 23px;\n  border-radius: 3px;\n  -webkit-transition: opacity 0.3s;\n  -o-transition: opacity 0.3s;\n  transition: opacity 0.3s;\n  background-color: rgba(255, 255, 255, 0);\n}\n.swiper_modal_body .swiper-container-small-container .swiper-button-next:hover,\n.swiper_modal_body .swiper-container-small-container .swiper-button-prev:hover {\n  opacity: 0.6;\n}\n.swiper_modal_body .swiper-container-small {\n  margin-left: 60px;\n  width: 700px;\n  overflow: hidden;\n  height: 70px;\n  position: relative;\n}\n.swiper_modal_body .swiper-container-small .swiper-slide {\n  width: 90px;\n  height: 68px;\n  border-radius: 2px;\n  margin-right: 12px;\n  background: #2f2f2f;\n}\n.swiper_modal_body .swiper-container-small .swiper-slide.swiper-slide-active {\n  border: 3px solid #ffffff;\n}\n.swiper_modal_body .swiper-container-small .swiper-slide img {\n  max-width: 84px;\n}\n.swiper_modal_body .control {\n  width: 820px;\n  height: 48px;\n  background: rgba(0, 0, 0, 0.75);\n  position: absolute;\n  top: 613px;\n  left: 0;\n  z-index: 100;\n  text-align: center;\n  font-size: 24px;\n  line-height: 48px;\n  color: #5a5a5a;\n}\n.swiper_modal_body .control .a {\n  margin: 0 18px;\n  cursor: pointer;\n  -webkit-transition: color 0.3s;\n  -o-transition: color 0.3s;\n  transition: color 0.3s;\n}\n.swiper_modal_body .control .a:hover {\n  color: #949494;\n}\n", ""]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(9);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);