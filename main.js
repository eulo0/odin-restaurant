/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: 0;\n    padding: 0;\n}\n\n#header {\n    display: flex;\n    flex-wrap: wrap;\n    background: black;\n    align-items: center;\n    justify-content: space-between;\n    position: sticky;\n    top: 0;\n    z-index: 100;\n}\n\n#nav-btn-container{\n    display: flex;\n    align-self: stretch;\n}\n\n.nav-btn{\n    background: black;\n    font-size: 2.2rem;\n    border: none;\n    color: white;\n    font-family: inherit;\n    padding: 0 2rem;\n}\n\n.nav-btn:hover{\n    background: rgb(62, 61, 61); \n    font-size: 2.4rem;\n    box-shadow: inset 0 -3px  0 red;\n}\n\n#icon{\n    height: 6rem;\n    width: 7rem;\n}\n\n#res-name{\n    color: white;\n    font-size: 3rem;\n    background: black;\n}\n\n#left{\n    display: flex;\n    align-items: center;\n}\n\n#hero{\n    position: absolute; \n    object-fit: cover; \n    z-index: 0;\n    filter: brightness(60%);\n    width: 100%;\n    height: 100%;\n}\n\n#hero-section{\n    height: 90vh;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    flex-direction: column;\n}\n\n.slogan{\n    color: white;\n    text-align: center;\n    font-size: 5.2rem;\n    z-index: 1;\n}\n\n.cta-btns{\n    display: flex;\n    justify-content: space-evenly;\n    z-index: 1;\n    width: 60%;\n    margin-top: 1rem;\n}\n\n.cta-btn{\n    height: 4rem;\n    width: 18rem;\n    color: white; \n    background: red;\n    font-size: 2.5rem;\n    border-radius: 1rem;\n    border: none;\n}\n\n.cta-btn:hover{\n    background: rgb(137, 0, 0);\n}\n\n.header2{\n    font-size: 3rem;\n    font-weight: bold;\n    text-align: center;\n    margin: 1rem auto 0;\n    box-shadow: inset 0 -3px 0 red;\n    width: fit-content;\n}\n\n#footer {\n    background: black;\n    align-items: center;\n    justify-content: space-between;\n    height: 22vh;\n    width: 100%;\n    margin-top: 2rem;\n}\n\n#references {\n    display: flex;\n    justify-content: space-around;\n    margin: 1rem auto;\n}\n\n#ref-label {\n    color: white;\n    text-align: center; \n    font-size: 3rem;\n    font-weight: bold;\n    padding: 1rem 0;\n}\n\na {\n    color: white;\n    font-size: 1.2rem;\n}\n\n.thumbnail,\n.founder-thumbnail {\n    height: 20rem;\n    width: 20rem;\n    object-fit: cover; \n}\n\n.entry {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.center{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 4rem;\n    margin-top: 2rem;\n}\n\n.founder-center{\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    margin-top: 2rem;\n}\n\n.caption{\n    font-size: 1.2rem;\n    margin-top: 1rem;\n}\n\n.menu-grid{\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    justify-content: center;\n    gap: 3rem;\n    margin: 3rem\n}\n\n.about-grid{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    justify-content: center;\n    padding: 2rem;\n    gap: 0.8rem;\n}\n\n.founder-thumbnail{\n    border-radius: 50%;\n}\n\n.left{\n    grid-column: 1;\n}\n\n.right{\n    grid-column: 2;\n}\n\n.about-title{\n    font-size: 3rem;\n    font-weight: bold;\n}\n\n.about-text{\n    margin-top: 0.8rem;\n    font-size: 1.2rem;\n}\n\n\n.about-img{\n    grid-row: 1/2;\n    grid-column: 2;\n    object-fit: cover;\n    height: 100%;\n    width: 100%;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-practice/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-practice/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-practice/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-practice/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-practice/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-practice/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-practice/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-practice/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-practice/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-practice/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./assets/Pasta Sauce Day GIF.gif"
/*!****************************************!*\
  !*** ./assets/Pasta Sauce Day GIF.gif ***!
  \****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"907899c4c4dbf184adb9.gif\";\n\n//# sourceURL=webpack://webpack-practice/./assets/Pasta_Sauce_Day_GIF.gif?\n}");

/***/ },

/***/ "./assets/andy-sartori-Hz_SNGGPnxI-unsplash.jpg"
/*!******************************************************!*\
  !*** ./assets/andy-sartori-Hz_SNGGPnxI-unsplash.jpg ***!
  \******************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"f109ba0f2fb9945f70f1.jpg\";\n\n//# sourceURL=webpack://webpack-practice/./assets/andy-sartori-Hz_SNGGPnxI-unsplash.jpg?\n}");

/***/ },

/***/ "./assets/aurora-song-uFHgoz2lnZQ-unsplash.jpg"
/*!*****************************************************!*\
  !*** ./assets/aurora-song-uFHgoz2lnZQ-unsplash.jpg ***!
  \*****************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"67e42d1f74cbb703d680.jpg\";\n\n//# sourceURL=webpack://webpack-practice/./assets/aurora-song-uFHgoz2lnZQ-unsplash.jpg?\n}");

/***/ },

/***/ "./assets/brelyn-bashrum-0CHWRa_ZqJ4-unsplash.jpg"
/*!********************************************************!*\
  !*** ./assets/brelyn-bashrum-0CHWRa_ZqJ4-unsplash.jpg ***!
  \********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"babcd49d6ff53b829dce.jpg\";\n\n//# sourceURL=webpack://webpack-practice/./assets/brelyn-bashrum-0CHWRa_ZqJ4-unsplash.jpg?\n}");

/***/ },

/***/ "./assets/haberdoedas-Jk9P3FPskFY-unsplash.jpg"
/*!*****************************************************!*\
  !*** ./assets/haberdoedas-Jk9P3FPskFY-unsplash.jpg ***!
  \*****************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"f16bbe719899366fb475.jpg\";\n\n//# sourceURL=webpack://webpack-practice/./assets/haberdoedas-Jk9P3FPskFY-unsplash.jpg?\n}");

/***/ },

/***/ "./assets/helen-van-2TMqlO-zqNY-unsplash.jpg"
/*!***************************************************!*\
  !*** ./assets/helen-van-2TMqlO-zqNY-unsplash.jpg ***!
  \***************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"1cb0a238db0d2f66b398.jpg\";\n\n//# sourceURL=webpack://webpack-practice/./assets/helen-van-2TMqlO-zqNY-unsplash.jpg?\n}");

/***/ },

/***/ "./assets/kelsey-chance-tAH2cA_BL5g-unsplash.jpg"
/*!*******************************************************!*\
  !*** ./assets/kelsey-chance-tAH2cA_BL5g-unsplash.jpg ***!
  \*******************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"298057581605bcf7f9b4.jpg\";\n\n//# sourceURL=webpack://webpack-practice/./assets/kelsey-chance-tAH2cA_BL5g-unsplash.jpg?\n}");

/***/ },

/***/ "./assets/lens-fables-5Xnv2np708c-unsplash.jpg"
/*!*****************************************************!*\
  !*** ./assets/lens-fables-5Xnv2np708c-unsplash.jpg ***!
  \*****************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"729cc3166184f763cd77.jpg\";\n\n//# sourceURL=webpack://webpack-practice/./assets/lens-fables-5Xnv2np708c-unsplash.jpg?\n}");

/***/ },

/***/ "./assets/tania-melnyczuk-xeTv9N2FjXA-unsplash.jpg"
/*!*********************************************************!*\
  !*** ./assets/tania-melnyczuk-xeTv9N2FjXA-unsplash.jpg ***!
  \*********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"198d5776e9ac0ae57cd5.jpg\";\n\n//# sourceURL=webpack://webpack-practice/./assets/tania-melnyczuk-xeTv9N2FjXA-unsplash.jpg?\n}");

/***/ },

/***/ "./assets/victoria-kubiaki-4zubM5mJIwI-unsplash.jpg"
/*!**********************************************************!*\
  !*** ./assets/victoria-kubiaki-4zubM5mJIwI-unsplash.jpg ***!
  \**********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"21047a5d51c84de51fff.jpg\";\n\n//# sourceURL=webpack://webpack-practice/./assets/victoria-kubiaki-4zubM5mJIwI-unsplash.jpg?\n}");

/***/ },

/***/ "./assets/zoran-borojevic--5FECW242og-unsplash.jpg"
/*!*********************************************************!*\
  !*** ./assets/zoran-borojevic--5FECW242og-unsplash.jpg ***!
  \*********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"abb360280e2ca2003e07.jpg\";\n\n//# sourceURL=webpack://webpack-practice/./assets/zoran-borojevic--5FECW242og-unsplash.jpg?\n}");

/***/ },

/***/ "./src/about.js"
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   about: () => (/* binding */ about),\n/* harmony export */   aboutRef: () => (/* binding */ aboutRef)\n/* harmony export */ });\n/* harmony import */ var _assets_lens_fables_5Xnv2np708c_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/lens-fables-5Xnv2np708c-unsplash.jpg */ \"./assets/lens-fables-5Xnv2np708c-unsplash.jpg\");\n/* harmony import */ var _assets_victoria_kubiaki_4zubM5mJIwI_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/victoria-kubiaki-4zubM5mJIwI-unsplash.jpg */ \"./assets/victoria-kubiaki-4zubM5mJIwI-unsplash.jpg\");\n/* harmony import */ var _assets_andy_sartori_Hz_SNGGPnxI_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/andy-sartori-Hz_SNGGPnxI-unsplash.jpg */ \"./assets/andy-sartori-Hz_SNGGPnxI-unsplash.jpg\");\n\n\n\n\nconst about = () => {\n    const returnDiv = document.createElement(\"div\");\n    const aboutGrid = document.createElement(\"div\");\n    const left = document.createElement(\"div\");\n    const right = document.createElement(\"div\");\n    const header = document.createElement(\"p\");\n    const title = document.createElement(\"p\");\n    const rightImg = document.createElement(\"img\");\n    const center = document.createElement(\"div\");\n\n    aboutGrid.classList.add(\"about-grid\");\n    left.classList.add(\"left\");\n    right.classList.add(\"right\");\n    title.classList.add(\"about-title\");\n    rightImg.classList.add(\"about-img\");\n    header.classList.add(\"header2\");\n    center.classList.add(\"founder-center\");\n\n    title.textContent = \"About Us\";\n    rightImg.src = _assets_lens_fables_5Xnv2np708c_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    header.textContent = \"Meet The Founders\"\n    const paragraph1 = addText(\"Bilancia's started off in the 1880s as a small family restaurant opened by Italian immigrants in search of a better life. In those early days, it was a gathering place for fellow Italian newcomers—a slice of home where familiar aromas, old-world recipes, and shared stories brought comfort in a brand-new country.\");\n    const paragraph2 = addText(\"Word of the cooking didn't stay in one circle for long. Soon, neighbors from all walks of life began pulling up a chair, drawn in by the slow-simmered sauces, hand-crafted pastas, and unmistakable warmth of an Italian family table.\");\n    const paragraph3 = addText(\"More than a century later, Bilancia's remains a place where everyone is welcome. Whether it is your first visit or a lifelong tradition, we are proud to share the recipes and hospitality that started it all.\")\n\n    left.append(title, paragraph1, paragraph2, paragraph3);\n    right.append(rightImg);\n    aboutGrid.append(left, right);\n    \n    const ceo = addFounder(_assets_victoria_kubiaki_4zubM5mJIwI_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__, \"Chris Mitchell (CEO)\");\n    const headChef = addFounder(_assets_andy_sartori_Hz_SNGGPnxI_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__, \"Martha Miller (Head Chef)\");\n    center.append(ceo, headChef);\n\n    returnDiv.append(aboutGrid, header, center);\n    return returnDiv;\n\n    function addText(paragraphText){\n        const text = document.createElement(\"p\");\n        text.classList.add(\"about-text\");\n        text.textContent = paragraphText;\n        return text;\n    }\n\n    function addFounder(image, text){\n        const entry = document.createElement(\"div\");\n        const picture = document.createElement(\"img\");\n        const caption = document.createElement(\"p\");\n\n        entry.classList.add(\"entry\");\n        picture.classList.add(\"founder-thumbnail\");\n        caption.classList.add(\"caption\");\n\n        picture.src = image;\n        caption.textContent = text;\n\n        entry.append(picture, caption);\n        return entry;\n    }\n};\n\nconst aboutRef = () => {\n    const refContainer = document.createElement(\"div\");\n    refContainer.id = \"references\";\n    const logoRef = createReference(\"Restaurant Logo\", \"https://www.vecteezy.com/vector-art/35556556-restaurant-logo-with-spoon-and-fork-icon-modern-concept\");\n    const teamRef = createReference(\"Team\", \"https://unsplash.com/photos/three-smiling-restaurant-staff-members-stand-behind-a-counter-5Xnv2np708c\");\n    const ceoRef = createReference(\"CEO\", \"https://unsplash.com/photos/man-making-dough-while-smiling-4zubM5mJIwI\");\n    const headchefRef = createReference(\"Head Chef\", \"https://unsplash.com/photos/a-woman-in-a-chefs-outfit-holding-a-frying-pan-Hz_SNGGPnxI\");\n    refContainer.append(logoRef, teamRef, ceoRef, headchefRef);\n    return refContainer; \n\n    function createReference(label, link){\n        const reference = document.createElement(\"a\");\n        reference.href = link;\n        reference.textContent = label;\n        return reference;\n    }\n}\n\n//# sourceURL=webpack://webpack-practice/./src/about.js?\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   home: () => (/* binding */ home),\n/* harmony export */   homeRef: () => (/* binding */ homeRef)\n/* harmony export */ });\n/* harmony import */ var _assets_Pasta_Sauce_Day_GIF_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/Pasta Sauce Day GIF.gif */ \"./assets/Pasta Sauce Day GIF.gif\");\n/* harmony import */ var _assets_kelsey_chance_tAH2cA_BL5g_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/kelsey-chance-tAH2cA_BL5g-unsplash.jpg */ \"./assets/kelsey-chance-tAH2cA_BL5g-unsplash.jpg\");\n/* harmony import */ var _assets_brelyn_bashrum_0CHWRa_ZqJ4_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/brelyn-bashrum-0CHWRa_ZqJ4-unsplash.jpg */ \"./assets/brelyn-bashrum-0CHWRa_ZqJ4-unsplash.jpg\");\n/* harmony import */ var _assets_haberdoedas_Jk9P3FPskFY_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/haberdoedas-Jk9P3FPskFY-unsplash.jpg */ \"./assets/haberdoedas-Jk9P3FPskFY-unsplash.jpg\");\n\n\n\n\n\n\nconst home = () => {\n    const returnDiv = document.createElement(\"div\")\n    const heroSection = document.createElement(\"div\");\n    const heroGif = document.createElement(\"img\");\n    const slogan = document.createElement(\"p\");\n    const ctaContainer = document.createElement(\"div\");\n    const takeoutBtn = document.createElement(\"button\");\n    const deliveryBtn = document.createElement(\"button\");\n    const infoHeader = document.createElement(\"p\");\n    const center = document.createElement(\"div\");\n\n    heroSection.id = \"hero-section\";\n    heroGif.id = \"hero\";\n    slogan.classList.add(\"slogan\");\n    ctaContainer.classList.add(\"cta-btns\");\n    takeoutBtn.classList.add(\"cta-btn\");\n    deliveryBtn.classList.add(\"cta-btn\");\n    infoHeader.classList.add(\"header2\");\n    center.classList.add(\"center\");\n\n    heroGif.src = _assets_Pasta_Sauce_Day_GIF_gif__WEBPACK_IMPORTED_MODULE_0__;\n    slogan.textContent = \"A little taste of Italy in every bite\";\n    takeoutBtn.textContent = \"Order Takeout\";\n    deliveryBtn.textContent = \"Order Delivery\";\n    infoHeader.textContent = \"Checkout our Specials!\"\n\n    const happyHour = createInfoItem(_assets_kelsey_chance_tAH2cA_BL5g_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__,\"Monday: Happy Hour\");\n    const pastaSpecial = createInfoItem(_assets_brelyn_bashrum_0CHWRa_ZqJ4_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__, \"Wednesday: All You Can Eat Pastas\");\n    const dessertSpecial = createInfoItem(_assets_haberdoedas_Jk9P3FPskFY_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__, \"Friday: Buy 1 Get 1 Free Desserts\");\n\n    center.append(happyHour, pastaSpecial, dessertSpecial);\n    ctaContainer.append(takeoutBtn, deliveryBtn);\n    heroSection.append(heroGif, slogan, ctaContainer);\n\n    returnDiv.append(heroSection, infoHeader, center);\n\n    return returnDiv\n\n\n    function createInfoItem(image, caption){\n        const infoContainer = document.createElement(\"div\");\n        const infoImage = document.createElement(\"img\");\n        const infoCaption = document.createElement(\"p\");\n\n        infoContainer.classList.add(\"entry\");\n        infoImage.classList.add(\"thumbnail\");\n        infoCaption.classList.add(\"caption\");\n\n        infoImage.src = image;\n        infoCaption.textContent = caption;\n\n        infoContainer.append(infoImage);\n        infoContainer.append(infoCaption);\n    \n        return infoContainer;\n    }\n};\n\nconst homeRef = () => {\n    const refContainer = document.createElement(\"div\");\n    refContainer.id = \"references\";\n    const logoRef = createReference(\"Restaurant Logo\", \"https://www.vecteezy.com/vector-art/35556556-restaurant-logo-with-spoon-and-fork-icon-modern-concept\");\n    const pastaGifRef = createReference(\"Pasta Gif\", \"https://giphy.com/gifs/day-pasta-hump-5J3l6o7fNj7LG\");\n    const happyHourRef = createReference(\"Happy Hour\", \"https://unsplash.com/photos/group-of-people-tossing-wine-glass-tAH2cA_BL5g\");\n    const pastaSpecialRef = createReference(\"Penne Pasta\", \"https://unsplash.com/photos/a-fork-lifts-penne-pasta-coated-in-red-sauce-0CHWRa_ZqJ4\");\n    const dessertSpecialRef = createReference(\"Chocolate Cake\", \"https://unsplash.com/photos/carrot-cake-slice-on-teal-plate-u5_cfnwi2CY\")\n\n    refContainer.append(logoRef, pastaGifRef, happyHourRef, pastaSpecialRef, dessertSpecialRef);\n    return refContainer; \n\n    function createReference(label, link){\n        const reference = document.createElement(\"a\");\n        reference.href = link;\n        reference.textContent = label;\n        return reference;\n    }\n}\n\n//# sourceURL=webpack://webpack-practice/./src/home.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n \n\n\n\n(() => {\n    const navBtns = document.querySelectorAll(\".nav-btn\");\n    const content = document.getElementById(\"content\");\n    const content2 = document.getElementById(\"content2\");\n    const homeBtn = document.getElementById(\"Home\");\n    const menuBtn = document.getElementById(\"Menu\");\n    const aboutBtn = document.getElementById(\"About\");\n\n    for (const btn of navBtns){\n        btn.addEventListener(\"click\", () => {\n            content.textContent = \"\";\n            content2.textContent = \"\";\n        }); \n    }\n\n    homeBtn.addEventListener(\"click\", () => {\n        content.append((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.home)());\n        content2.append((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.homeRef)());\n    });\n\n    menuBtn.addEventListener(\"click\", () => {\n        content.append((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menu)());\n        content2.append((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menuRef)());\n    });\n\n    aboutBtn.addEventListener(\"click\", () => {\n        content.append((0,_about_js__WEBPACK_IMPORTED_MODULE_2__.about)());\n        content2.append((0,_about_js__WEBPACK_IMPORTED_MODULE_2__.aboutRef)());\n    })\n\n    content.append((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.home)());\n    content2.append((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.homeRef)());\n})(); \n\n//# sourceURL=webpack://webpack-practice/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu),\n/* harmony export */   menuRef: () => (/* binding */ menuRef)\n/* harmony export */ });\n/* harmony import */ var _assets_aurora_song_uFHgoz2lnZQ_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/aurora-song-uFHgoz2lnZQ-unsplash.jpg */ \"./assets/aurora-song-uFHgoz2lnZQ-unsplash.jpg\");\n/* harmony import */ var _assets_zoran_borojevic_5FECW242og_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/zoran-borojevic--5FECW242og-unsplash.jpg */ \"./assets/zoran-borojevic--5FECW242og-unsplash.jpg\");\n/* harmony import */ var _assets_helen_van_2TMqlO_zqNY_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/helen-van-2TMqlO-zqNY-unsplash.jpg */ \"./assets/helen-van-2TMqlO-zqNY-unsplash.jpg\");\n/* harmony import */ var _assets_brelyn_bashrum_0CHWRa_ZqJ4_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/brelyn-bashrum-0CHWRa_ZqJ4-unsplash.jpg */ \"./assets/brelyn-bashrum-0CHWRa_ZqJ4-unsplash.jpg\");\n/* harmony import */ var _assets_tania_melnyczuk_xeTv9N2FjXA_unsplash_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/tania-melnyczuk-xeTv9N2FjXA-unsplash.jpg */ \"./assets/tania-melnyczuk-xeTv9N2FjXA-unsplash.jpg\");\n/* harmony import */ var _assets_haberdoedas_Jk9P3FPskFY_unsplash_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/haberdoedas-Jk9P3FPskFY-unsplash.jpg */ \"./assets/haberdoedas-Jk9P3FPskFY-unsplash.jpg\");\n\n\n\n\n\n\n\nconst menu = () => {\n    const grid = document.createElement(\"div\");\n    const spaghetti = createInfoItem(_assets_aurora_song_uFHgoz2lnZQ_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__, \"Spaghetti $10\");\n    const carbonara = createInfoItem(_assets_zoran_borojevic_5FECW242og_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__, \"Carbonara $12\");\n    const pesto = createInfoItem(_assets_helen_van_2TMqlO_zqNY_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__, \"Pesto Pasta $10\");\n    const penne = createInfoItem(_assets_brelyn_bashrum_0CHWRa_ZqJ4_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__, \"Penne Pasta $11\");\n    const salad = createInfoItem(_assets_tania_melnyczuk_xeTv9N2FjXA_unsplash_jpg__WEBPACK_IMPORTED_MODULE_4__, \"Salad $5\");\n    const cake = createInfoItem(_assets_haberdoedas_Jk9P3FPskFY_unsplash_jpg__WEBPACK_IMPORTED_MODULE_5__, \"Chocolate Cake $3\");\n\n    grid.append(spaghetti, carbonara, pesto, penne, salad,cake);\n    grid.classList.add(\"menu-grid\");\n\n    return grid\n\n    function createInfoItem(image, caption){\n        const infoContainer = document.createElement(\"div\");\n        const infoImage = document.createElement(\"img\");\n        const infoCaption = document.createElement(\"p\");\n\n        infoContainer.classList.add(\"entry\");\n        infoImage.classList.add(\"thumbnail\");\n        infoCaption.classList.add(\"caption\");\n\n        infoImage.src = image;\n        infoCaption.textContent = caption;\n\n        infoContainer.append(infoImage);\n        infoContainer.append(infoCaption);\n    \n        return infoContainer;\n    }\n};\n\nconst menuRef = () => {\n    const refContainer = document.createElement(\"div\");\n    refContainer.id = \"references\";\n    const logoRef = createReference(\"Restaurant Logo\", \"https://www.vecteezy.com/vector-art/35556556-restaurant-logo-with-spoon-and-fork-icon-modern-concept\");\n    const spaghettiRef = createReference(\"Spaghetti\", \"https://unsplash.com/photos/a-plate-of-spaghetti-with-tomato-sauce-and-grated-cheese-uFHgoz2lnZQ\");\n    const carbonaraRef = createReference(\"Carbonara\", \"https://unsplash.com/photos/pasta-dish-on-white-ceramic-plate--5FECW242og\");\n    const pestoRef = createReference(\"Pesto\", \"https://unsplash.com/photos/delicious-pesto-pasta-with-fresh-basil-2TMqlO-zqNY\");\n    const penneRef = createReference(\"Penne\", \"https://unsplash.com/photos/a-fork-lifts-penne-pasta-coated-in-red-sauce-0CHWRa_ZqJ4\")\n    const saladRef = createReference(\"Salad\", \"https://unsplash.com/photos/vegetable-salad-on-white-ceramic-plate-xeTv9N2FjXA\");\n    const cakeRef = createReference(\"Chocolate Cake\", \"https://unsplash.com/photos/carrot-cake-slice-on-teal-plate-u5_cfnwi2CY\")\n    refContainer.append(logoRef, spaghettiRef, carbonaraRef, pestoRef, penneRef, saladRef, cakeRef);\n    return refContainer; \n\n    function createReference(label, link){\n        const reference = document.createElement(\"a\");\n        reference.href = link;\n        reference.textContent = label;\n        return reference;\n    }\n}\n\n\n\n//# sourceURL=webpack://webpack-practice/./src/menu.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^https?:/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:|[?#].*$/g, "").replace(/\/[^/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;