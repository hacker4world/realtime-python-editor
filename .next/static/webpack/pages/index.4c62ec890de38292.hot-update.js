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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _monaco_editor_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @monaco-editor/react */ \"./node_modules/@monaco-editor/react/lib/es/index.js\");\n/* harmony import */ var mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mdb-react-ui-kit */ \"./node_modules/mdb-react-ui-kit/dist/mdb-react-ui-kit.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_4__.io)(\"http://localhost:4000\");\nfunction Home() {\n    var onCodeChange = function onCodeChange(value) {\n        setCode(value);\n        socket.emit(\"code\", value);\n    };\n    var runCode = function runCode() {\n        if (code === \"\") return;\n        axios__WEBPACK_IMPORTED_MODULE_5___default().post(\"http://localhost:4000/run\", {\n            code: code\n        }).then(function(res) {\n            console.log(res.data);\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), code = ref[0], setCode = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), modal = ref1[0], setModal = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        socket.on(\"code\", function(data) {\n            if (data === code) return;\n            setCode(data);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbar, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBBtn, {\n                    style: {\n                        marginLeft: 10\n                    },\n                    color: \"success\",\n                    onClick: runCode,\n                    children: \"Run\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Aziz\\\\Desktop\\\\remote-ide\\\\client\\\\pages\\\\index.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Aziz\\\\Desktop\\\\remote-ide\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Aziz\\\\Desktop\\\\remote-ide\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                height: \"90vh\",\n                defaultLanguage: \"python\",\n                theme: \"vs-dark\",\n                onChange: onCodeChange,\n                value: code\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Aziz\\\\Desktop\\\\remote-ide\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                className: \"btn btn-primary\",\n                \"data-toggle\": \"modal\",\n                \"data-target\": \"#exampleModal\",\n                children: \"Launch demo modal\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Aziz\\\\Desktop\\\\remote-ide\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"hM5kSpP3esBNgrQqscvzLNNNt6w=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEM7QUFDVztBQUNwQjtBQUNDO0FBQ0k7QUFDWjtBQVNBOztBQUUxQixJQUFNYyxNQUFNLEdBQUdULG9EQUFFLENBQUMsdUJBQXVCLENBQUM7QUFFM0IsU0FBU1UsSUFBSSxHQUFHO1FBWXBCQyxZQUFZLEdBQXJCLFNBQVNBLFlBQVksQ0FBQ0MsS0FBSyxFQUFFO1FBQzNCQyxPQUFPLENBQUNELEtBQUssQ0FBQyxDQUFDO1FBQ2ZILE1BQU0sQ0FBQ0ssSUFBSSxDQUFDLE1BQU0sRUFBRUYsS0FBSyxDQUFDLENBQUM7S0FDNUI7UUFFUUcsT0FBTyxHQUFoQixTQUFTQSxPQUFPLEdBQUc7UUFDakIsSUFBSUMsSUFBSSxLQUFLLEVBQUUsRUFBRSxPQUFPO1FBQ3hCZixpREFBVSxDQUFDLDJCQUEyQixFQUFFO1lBQUVlLElBQUksRUFBSkEsSUFBSTtTQUFFLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLFNBQUNDLEdBQUcsRUFBSztZQUM5REMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQ0csSUFBSSxDQUFDLENBQUM7U0FDdkIsQ0FBQyxDQUFDO0tBQ0o7O0lBckJELElBQXdCeEIsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQW5CdEMsSUFtQmEsR0FBYUEsR0FBWSxHQUF6QixFQW5CYixPQW1Cc0IsR0FBSUEsR0FBWSxHQUFoQjtJQUVwQixJQUEwQkEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQXJCM0MsS0FxQmMsR0FBY0EsSUFBZSxHQUE3QixFQXJCZCxRQXFCd0IsR0FBSUEsSUFBZSxHQUFuQjtJQUV0QkMsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RVLE1BQU0sQ0FBQ2dCLEVBQUUsQ0FBQyxNQUFNLEVBQUUsU0FBQ0gsSUFBSSxFQUFLO1lBQzFCLElBQUlBLElBQUksS0FBS04sSUFBSSxFQUFFLE9BQU87WUFDMUJILE9BQU8sQ0FBQ1MsSUFBSSxDQUFDLENBQUM7U0FDZixDQUFDLENBQUM7S0FDSixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBY1AscUJBQ0U7OzBCQUNFLDhEQUFDekIsdURBQVM7MEJBQ1IsNEVBQUNELG9EQUFNO29CQUFDOEIsS0FBSyxFQUFFO3dCQUFFQyxVQUFVLEVBQUUsRUFBRTtxQkFBRTtvQkFBRUMsS0FBSyxFQUFDLFNBQVM7b0JBQUNDLE9BQU8sRUFBRWQsT0FBTzs4QkFBRSxLQUVyRTs7Ozs7d0JBQVM7Ozs7O29CQUNDOzBCQUNaLDhEQUFDZSxLQUFHOzs7O29CQUFPOzBCQUNYLDhEQUFDbkMsNERBQU07Z0JBQ0xvQyxNQUFNLEVBQUMsTUFBTTtnQkFDYkMsZUFBZSxFQUFDLFFBQVE7Z0JBQ3hCQyxLQUFLLEVBQUMsU0FBUztnQkFDZkMsUUFBUSxFQUFFdkIsWUFBWTtnQkFDdEJDLEtBQUssRUFBRUksSUFBSTs7Ozs7b0JBQ1g7MEJBQ0YsOERBQUNtQixRQUFNO2dCQUNMQyxJQUFJLEVBQUMsUUFBUTtnQkFDYkMsU0FBUyxFQUFDLGlCQUFpQjtnQkFDM0JDLGFBQVcsRUFBQyxPQUFPO2dCQUNuQkMsYUFBVyxFQUFDLGVBQWU7MEJBQzVCLG1CQUVEOzs7OztvQkFBUzs7b0JBQ1IsQ0FDSDtDQUNIO0dBakR1QjdCLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFZGl0b3IgZnJvbSBcIkBtb25hY28tZWRpdG9yL3JlYWN0XCI7XG5pbXBvcnQgeyBNREJCdG4sIE1EQk5hdmJhciB9IGZyb20gXCJtZGItcmVhY3QtdWkta2l0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpbyB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQge1xuICBNREJNb2RhbCxcbiAgTURCTW9kYWxEaWFsb2csXG4gIE1EQk1vZGFsQ29udGVudCxcbiAgTURCTW9kYWxIZWFkZXIsXG4gIE1EQk1vZGFsVGl0bGUsXG4gIE1EQk1vZGFsQm9keSxcbiAgTURCTW9kYWxGb290ZXIsXG59IGZyb20gXCJtZGItcmVhY3QtdWkta2l0XCI7XG5cbmNvbnN0IHNvY2tldCA9IGlvKFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbY29kZSwgc2V0Q29kZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNvY2tldC5vbihcImNvZGVcIiwgKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhID09PSBjb2RlKSByZXR1cm47XG4gICAgICBzZXRDb2RlKGRhdGEpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gb25Db2RlQ2hhbmdlKHZhbHVlKSB7XG4gICAgc2V0Q29kZSh2YWx1ZSk7XG4gICAgc29ja2V0LmVtaXQoXCJjb2RlXCIsIHZhbHVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJ1bkNvZGUoKSB7XG4gICAgaWYgKGNvZGUgPT09IFwiXCIpIHJldHVybjtcbiAgICBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL3J1blwiLCB7IGNvZGUgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TURCTmF2YmFyPlxuICAgICAgICA8TURCQnRuIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDEwIH19IGNvbG9yPVwic3VjY2Vzc1wiIG9uQ2xpY2s9e3J1bkNvZGV9PlxuICAgICAgICAgIFJ1blxuICAgICAgICA8L01EQkJ0bj5cbiAgICAgIDwvTURCTmF2YmFyPlxuICAgICAgPGRpdj48L2Rpdj5cbiAgICAgIDxFZGl0b3JcbiAgICAgICAgaGVpZ2h0PVwiOTB2aFwiXG4gICAgICAgIGRlZmF1bHRMYW5ndWFnZT1cInB5dGhvblwiXG4gICAgICAgIHRoZW1lPVwidnMtZGFya1wiXG4gICAgICAgIG9uQ2hhbmdlPXtvbkNvZGVDaGFuZ2V9XG4gICAgICAgIHZhbHVlPXtjb2RlfVxuICAgICAgLz5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxuICAgICAgICBkYXRhLXRhcmdldD1cIiNleGFtcGxlTW9kYWxcIlxuICAgICAgPlxuICAgICAgICBMYXVuY2ggZGVtbyBtb2RhbFxuICAgICAgPC9idXR0b24+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiRWRpdG9yIiwiTURCQnRuIiwiTURCTmF2YmFyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJpbyIsImF4aW9zIiwiTURCTW9kYWwiLCJNREJNb2RhbERpYWxvZyIsIk1EQk1vZGFsQ29udGVudCIsIk1EQk1vZGFsSGVhZGVyIiwiTURCTW9kYWxUaXRsZSIsIk1EQk1vZGFsQm9keSIsIk1EQk1vZGFsRm9vdGVyIiwic29ja2V0IiwiSG9tZSIsIm9uQ29kZUNoYW5nZSIsInZhbHVlIiwic2V0Q29kZSIsImVtaXQiLCJydW5Db2RlIiwiY29kZSIsInBvc3QiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJtb2RhbCIsInNldE1vZGFsIiwib24iLCJzdHlsZSIsIm1hcmdpbkxlZnQiLCJjb2xvciIsIm9uQ2xpY2siLCJkaXYiLCJoZWlnaHQiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJ0aGVtZSIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwidHlwZSIsImNsYXNzTmFtZSIsImRhdGEtdG9nZ2xlIiwiZGF0YS10YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});