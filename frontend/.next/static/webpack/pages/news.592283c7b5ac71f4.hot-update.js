"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/news",{

/***/ "./src/components/NewsFeed.tsx":
/*!*************************************!*\
  !*** ./src/components/NewsFeed.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NewsCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewsCard */ \"./src/components/NewsCard.tsx\");\n\n\n\n// The NewsFeed component receives an array of Article objects and renders them in a grid.\nfunction NewsFeed(param) {\n    let { articles } = param;\n    // PART 3: Populate a news feed with the given `articles`\n    // Now that you've implemented a reusable NewsCard in Part 2, you can use that to build out\n    // the news feed underneath the FeaturedNews section.\n    // Hint: Array.map() may be useful here: https://www.geeksforgeeks.org/typescript-array-map-method/\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"stories-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"stories-grid\",\n            children: articles.map((article, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NewsCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    article: article\n                }, index, false, {\n                    fileName: \"/Users/siddharthsrinivasan/dev/bloomberg-techlab/bbit-learning-labs/Tech-Lab-On-Campus/NewsFeed/frontend/src/components/NewsFeed.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 21\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/siddharthsrinivasan/dev/bloomberg-techlab/bbit-learning-labs/Tech-Lab-On-Campus/NewsFeed/frontend/src/components/NewsFeed.tsx\",\n            lineNumber: 20,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/siddharthsrinivasan/dev/bloomberg-techlab/bbit-learning-labs/Tech-Lab-On-Campus/NewsFeed/frontend/src/components/NewsFeed.tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this);\n}\n_c = NewsFeed;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsFeed);\nvar _c;\n$RefreshReg$(_c, \"NewsFeed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OZXdzRmVlZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQjtBQUVRO0FBTWxDLDBGQUEwRjtBQUMxRixTQUFTRSxTQUFTLEtBQTJCO1FBQTNCLEVBQUVDLFFBQVEsRUFBaUIsR0FBM0I7SUFDZCx5REFBeUQ7SUFFekQsMkZBQTJGO0lBQzNGLHFEQUFxRDtJQUVyRCxtR0FBbUc7SUFFbkcscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ2RGLFNBQVNHLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDaEIsOERBQUNQLGlEQUFRQTtvQkFBYU0sU0FBU0E7bUJBQWhCQzs7Ozs7Ozs7Ozs7Ozs7O0FBS25DO0tBakJTTjtBQW1CVCxpRUFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL3NpZGRoYXJ0aHNyaW5pdmFzYW4vZGV2L2Jsb29tYmVyZy10ZWNobGFiL2JiaXQtbGVhcm5pbmctbGFicy9UZWNoLUxhYi1Pbi1DYW1wdXMvTmV3c0ZlZWQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvTmV3c0ZlZWQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcnRpY2xlIH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xuaW1wb3J0IE5ld3NDYXJkIGZyb20gJy4vTmV3c0NhcmQnO1xuXG5pbnRlcmZhY2UgTmV3c0ZlZWRQcm9wcyB7XG4gICAgYXJ0aWNsZXM6IEFydGljbGVbXTtcbn1cblxuLy8gVGhlIE5ld3NGZWVkIGNvbXBvbmVudCByZWNlaXZlcyBhbiBhcnJheSBvZiBBcnRpY2xlIG9iamVjdHMgYW5kIHJlbmRlcnMgdGhlbSBpbiBhIGdyaWQuXG5mdW5jdGlvbiBOZXdzRmVlZCh7IGFydGljbGVzIH06IE5ld3NGZWVkUHJvcHMgKSB7XG4gICAgLy8gUEFSVCAzOiBQb3B1bGF0ZSBhIG5ld3MgZmVlZCB3aXRoIHRoZSBnaXZlbiBgYXJ0aWNsZXNgXG5cbiAgICAvLyBOb3cgdGhhdCB5b3UndmUgaW1wbGVtZW50ZWQgYSByZXVzYWJsZSBOZXdzQ2FyZCBpbiBQYXJ0IDIsIHlvdSBjYW4gdXNlIHRoYXQgdG8gYnVpbGQgb3V0XG4gICAgLy8gdGhlIG5ld3MgZmVlZCB1bmRlcm5lYXRoIHRoZSBGZWF0dXJlZE5ld3Mgc2VjdGlvbi5cblxuICAgIC8vIEhpbnQ6IEFycmF5Lm1hcCgpIG1heSBiZSB1c2VmdWwgaGVyZTogaHR0cHM6Ly93d3cuZ2Vla3Nmb3JnZWVrcy5vcmcvdHlwZXNjcmlwdC1hcnJheS1tYXAtbWV0aG9kL1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yaWVzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yaWVzLWdyaWRcIj5cbiAgICAgICAgICAgIHthcnRpY2xlcy5tYXAoKGFydGljbGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxOZXdzQ2FyZCBrZXk9e2luZGV4fSBhcnRpY2xlPXthcnRpY2xlfSAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXdzRmVlZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk5ld3NDYXJkIiwiTmV3c0ZlZWQiLCJhcnRpY2xlcyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImFydGljbGUiLCJpbmRleCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/NewsFeed.tsx\n"));

/***/ })

});