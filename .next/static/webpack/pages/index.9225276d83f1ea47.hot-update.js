"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Modal.jsx":
/*!******************************!*\
  !*** ./components/Modal.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Modal\": function() { return /* binding */ Modal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mdb-react-ui-kit */ \"./node_modules/mdb-react-ui-kit/dist/mdb-react-ui-kit.esm.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Modal = function(props) {\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), modalEnabled = ref[0], setModalEnabled = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setModalEnabled(true);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: props.modal && modalEnabled === true && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBModal, {\n            show: true,\n            setShow: function() {\n                return props.setModal(function(old) {\n                    return !old;\n                });\n            },\n            tabIndex: \"-1\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBModalDialog, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBModalContent, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBModalBody, {\n                            children: \"Modal body text goes here.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Aziz\\\\Desktop\\\\remote-ide\\\\client\\\\components\\\\Modal.jsx\",\n                            lineNumber: 28,\n                            columnNumber: 15\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBModalFooter, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-light\",\n                                onClick: function() {\n                                    return props.setModal(false);\n                                },\n                                children: \"close\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Aziz\\\\Desktop\\\\remote-ide\\\\client\\\\components\\\\Modal.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Aziz\\\\Desktop\\\\remote-ide\\\\client\\\\components\\\\Modal.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Aziz\\\\Desktop\\\\remote-ide\\\\client\\\\components\\\\Modal.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Aziz\\\\Desktop\\\\remote-ide\\\\client\\\\components\\\\Modal.jsx\",\n                lineNumber: 26,\n                columnNumber: 11\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Aziz\\\\Desktop\\\\remote-ide\\\\client\\\\components\\\\Modal.jsx\",\n            lineNumber: 21,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false);\n};\n_s(Modal, \"W2C5Usopwl/vb37hj2Aw9/PIgLI=\");\n_c = Modal;\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01vZGFsLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBVWY7O0FBRW5CLElBQU1VLEtBQUssR0FBRyxTQUFDQyxLQUFLLEVBQUs7O0lBQzlCLElBQXdDWCxHQUFxQixrQkFBckJBLHFEQUFjLENBQUMsS0FBSyxDQUFDLE1BQXREYSxZQUFZLEdBQXFCYixHQUFxQixHQUExQyxFQUFFYyxlQUFlLEdBQUlkLEdBQXFCLEdBQXpCO0lBQ3BDQyxnREFBUyxDQUFDLFdBQU07UUFDZGEsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3ZCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDUCxxQkFDRTtrQkFDR0gsS0FBSyxDQUFDSSxLQUFLLElBQUlGLFlBQVksS0FBSyxJQUFJLGtCQUNuQyw4REFBQ1Ysc0RBQVE7WUFDUGEsSUFBSSxFQUFFLElBQUk7WUFDVkMsT0FBTyxFQUFFO3VCQUFNTixLQUFLLENBQUNPLFFBQVEsQ0FBQyxTQUFDQyxHQUFHOzJCQUFLLENBQUNBLEdBQUc7aUJBQUEsQ0FBQzthQUFBO1lBQzVDQyxRQUFRLEVBQUMsSUFBSTtzQkFFYiw0RUFBQ2hCLDREQUFjOzBCQUNiLDRFQUFDQyw2REFBZTs7c0NBQ2QsOERBQUNHLDBEQUFZO3NDQUFDLDRCQUEwQjs7Ozs7aUNBQWU7c0NBQ3ZELDhEQUFDQyw0REFBYztzQ0FDYiw0RUFBQ1ksUUFBTTtnQ0FDTEMsU0FBUyxFQUFDLGVBQWU7Z0NBQ3pCQyxPQUFPLEVBQUU7MkNBQU1aLEtBQUssQ0FBQ08sUUFBUSxDQUFDLEtBQUssQ0FBQztpQ0FBQTswQ0FDckMsT0FFRDs7Ozs7cUNBQVM7Ozs7O2lDQUNNOzs7Ozs7eUJBQ0Q7Ozs7O3FCQUNIOzs7OztpQkFDUjtxQkFFWixDQUNIO0NBQ0gsQ0FBQztHQTlCV1IsS0FBSztBQUFMQSxLQUFBQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTW9kYWwuanN4P2U1ZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIE1EQkJ0bixcclxuICBNREJNb2RhbCxcclxuICBNREJNb2RhbERpYWxvZyxcclxuICBNREJNb2RhbENvbnRlbnQsXHJcbiAgTURCTW9kYWxIZWFkZXIsXHJcbiAgTURCTW9kYWxUaXRsZSxcclxuICBNREJNb2RhbEJvZHksXHJcbiAgTURCTW9kYWxGb290ZXIsXHJcbn0gZnJvbSBcIm1kYi1yZWFjdC11aS1raXRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNb2RhbCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFttb2RhbEVuYWJsZWQsIHNldE1vZGFsRW5hYmxlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldE1vZGFsRW5hYmxlZCh0cnVlKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtwcm9wcy5tb2RhbCAmJiBtb2RhbEVuYWJsZWQgPT09IHRydWUgJiYgKFxyXG4gICAgICAgIDxNREJNb2RhbFxyXG4gICAgICAgICAgc2hvdz17dHJ1ZX1cclxuICAgICAgICAgIHNldFNob3c9eygpID0+IHByb3BzLnNldE1vZGFsKChvbGQpID0+ICFvbGQpfVxyXG4gICAgICAgICAgdGFiSW5kZXg9XCItMVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPE1EQk1vZGFsRGlhbG9nPlxyXG4gICAgICAgICAgICA8TURCTW9kYWxDb250ZW50PlxyXG4gICAgICAgICAgICAgIDxNREJNb2RhbEJvZHk+TW9kYWwgYm9keSB0ZXh0IGdvZXMgaGVyZS48L01EQk1vZGFsQm9keT5cclxuICAgICAgICAgICAgICA8TURCTW9kYWxGb290ZXI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbGlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zZXRNb2RhbChmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIGNsb3NlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L01EQk1vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgICA8L01EQk1vZGFsQ29udGVudD5cclxuICAgICAgICAgIDwvTURCTW9kYWxEaWFsb2c+XHJcbiAgICAgICAgPC9NREJNb2RhbD5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIk1EQkJ0biIsIk1EQk1vZGFsIiwiTURCTW9kYWxEaWFsb2ciLCJNREJNb2RhbENvbnRlbnQiLCJNREJNb2RhbEhlYWRlciIsIk1EQk1vZGFsVGl0bGUiLCJNREJNb2RhbEJvZHkiLCJNREJNb2RhbEZvb3RlciIsIk1vZGFsIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIm1vZGFsRW5hYmxlZCIsInNldE1vZGFsRW5hYmxlZCIsIm1vZGFsIiwic2hvdyIsInNldFNob3ciLCJzZXRNb2RhbCIsIm9sZCIsInRhYkluZGV4IiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Modal.jsx\n");

/***/ })

});