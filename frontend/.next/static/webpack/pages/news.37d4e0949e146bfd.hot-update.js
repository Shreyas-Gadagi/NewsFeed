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

/***/ "./src/components/FeaturedNews.tsx":
/*!*****************************************!*\
  !*** ./src/components/FeaturedNews.tsx ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction FeaturedNewsCard(param) {\n    let { article } = param;\n    // PART 1: Display a Featured News article\n    // Using the info about the article passed in as a prop, show:\n    // 1. The featured article's title\n    // 2. The featured article's image\n    // 3. A portion of the selected article's body, truncated so that it fits nicely in the section\n    // Once completing this part, you should be able to see the Featured News Article at the top of the page.\n    // Hint: Some classes included in `globals.css` may help with styling.\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"featured-news-card\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: article.title\n            }, void 0, false, {\n                fileName: \"/Users/siddharthsrinivasan/dev/bloomberg-techlab/bbit-learning-labs/Tech-Lab-On-Campus/NewsFeed/frontend/src/components/FeaturedNews.tsx\",\n                lineNumber: 26,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/siddharthsrinivasan/dev/bloomberg-techlab/bbit-learning-labs/Tech-Lab-On-Campus/NewsFeed/frontend/src/components/FeaturedNews.tsx\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_c = FeaturedNewsCard;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeaturedNewsCard);\nvar _c;\n$RefreshReg$(_c, \"FeaturedNewsCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GZWF0dXJlZE5ld3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFRQSxTQUFTQSxpQkFBaUIsS0FBMEI7UUFBMUIsRUFBRUMsT0FBTyxFQUFpQixHQUExQjtJQUN0QiwwQ0FBMEM7SUFFMUMsOERBQThEO0lBQzlELGtDQUFrQztJQUNsQyxrQ0FBa0M7SUFDbEMsK0ZBQStGO0lBRS9GLHlHQUF5RztJQUV6RyxzRUFBc0U7SUFFdEUscUJBQ0k7a0JBRUksNEVBQUNDO1lBQUlDLFdBQVU7c0JBRVgsNEVBQUNDOzBCQUFJSCxRQUFRSSxLQUFLOzs7Ozs7Ozs7Ozs7QUFJbEM7S0FyQlNMO0FBdUJULGlFQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWRkaGFydGhzcmluaXZhc2FuL2Rldi9ibG9vbWJlcmctdGVjaGxhYi9iYml0LWxlYXJuaW5nLWxhYnMvVGVjaC1MYWItT24tQ2FtcHVzL05ld3NGZWVkL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL0ZlYXR1cmVkTmV3cy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgQXJ0aWNsZSB9IGZyb20gXCJAL3V0aWxzL3R5cGVzXCI7XG5cbmludGVyZmFjZSBOZXdzQ2FyZFByb3BzIHtcbiAgICBhcnRpY2xlOiBBcnRpY2xlO1xufVxuXG5cbmZ1bmN0aW9uIEZlYXR1cmVkTmV3c0NhcmQoeyBhcnRpY2xlIH06IE5ld3NDYXJkUHJvcHMpIHtcbiAgICAvLyBQQVJUIDE6IERpc3BsYXkgYSBGZWF0dXJlZCBOZXdzIGFydGljbGVcblxuICAgIC8vIFVzaW5nIHRoZSBpbmZvIGFib3V0IHRoZSBhcnRpY2xlIHBhc3NlZCBpbiBhcyBhIHByb3AsIHNob3c6XG4gICAgLy8gMS4gVGhlIGZlYXR1cmVkIGFydGljbGUncyB0aXRsZVxuICAgIC8vIDIuIFRoZSBmZWF0dXJlZCBhcnRpY2xlJ3MgaW1hZ2VcbiAgICAvLyAzLiBBIHBvcnRpb24gb2YgdGhlIHNlbGVjdGVkIGFydGljbGUncyBib2R5LCB0cnVuY2F0ZWQgc28gdGhhdCBpdCBmaXRzIG5pY2VseSBpbiB0aGUgc2VjdGlvblxuXG4gICAgLy8gT25jZSBjb21wbGV0aW5nIHRoaXMgcGFydCwgeW91IHNob3VsZCBiZSBhYmxlIHRvIHNlZSB0aGUgRmVhdHVyZWQgTmV3cyBBcnRpY2xlIGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2UuXG5cbiAgICAvLyBIaW50OiBTb21lIGNsYXNzZXMgaW5jbHVkZWQgaW4gYGdsb2JhbHMuY3NzYCBtYXkgaGVscCB3aXRoIHN0eWxpbmcuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVkLW5ld3MtY2FyZFwiPlxuICAgICAgICAgICAgICAgIHsvKiBUT0RPOiBSZW1vdmUgdGhlIHNwYW4gYWJvdmUgYW5kIGltcGxlbWVudCBcIkZlYXR1cmVkTmV3c0NhcmRcIiAqL1xuICAgICAgICAgICAgICAgIDxoMT57YXJ0aWNsZS50aXRsZX08L2gxPn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlZE5ld3NDYXJkO1xuIl0sIm5hbWVzIjpbIkZlYXR1cmVkTmV3c0NhcmQiLCJhcnRpY2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJ0aXRsZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/FeaturedNews.tsx\n"));

/***/ })

});