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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction FeaturedNewsCard(param) {\n    let { article } = param;\n    // PART 1: Display a Featured News article\n    // Using the info about the article passed in as a prop, show:\n    // 1. The featured article's title\n    // 2. The featured article's image\n    // 3. A portion of the selected article's body, truncated so that it fits nicely in the section\n    // Once completing this part, you should be able to see the Featured News Article at the top of the page.\n    // Hint: Some classes included in `globals.css` may help with styling.\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"featured-news-card\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"featured-story-title\",\n                    children: article.title\n                }, void 0, false, {\n                    fileName: \"/Users/siddharthsrinivasan/dev/bloomberg-techlab/bbit-learning-labs/Tech-Lab-On-Campus/NewsFeed/frontend/src/components/FeaturedNews.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: article.image_url,\n                    className: \"featured-news-img\"\n                }, void 0, false, {\n                    fileName: \"/Users/siddharthsrinivasan/dev/bloomberg-techlab/bbit-learning-labs/Tech-Lab-On-Campus/NewsFeed/frontend/src/components/FeaturedNews.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: article.body\n                }, void 0, false, {\n                    fileName: \"/Users/siddharthsrinivasan/dev/bloomberg-techlab/bbit-learning-labs/Tech-Lab-On-Campus/NewsFeed/frontend/src/components/FeaturedNews.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/siddharthsrinivasan/dev/bloomberg-techlab/bbit-learning-labs/Tech-Lab-On-Campus/NewsFeed/frontend/src/components/FeaturedNews.tsx\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_c = FeaturedNewsCard;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeaturedNewsCard);\nvar _c;\n$RefreshReg$(_c, \"FeaturedNewsCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GZWF0dXJlZE5ld3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFRQSxTQUFTQSxpQkFBaUIsS0FBMEI7UUFBMUIsRUFBRUMsT0FBTyxFQUFpQixHQUExQjtJQUN0QiwwQ0FBMEM7SUFFMUMsOERBQThEO0lBQzlELGtDQUFrQztJQUNsQyxrQ0FBa0M7SUFDbEMsK0ZBQStGO0lBRS9GLHlHQUF5RztJQUV6RyxzRUFBc0U7SUFFdEUscUJBQ0k7a0JBRUksNEVBQUNDO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBeUJGLFFBQVFJLEtBQUs7Ozs7Ozs4QkFDcEQsOERBQUNDO29CQUFJQyxLQUFLTixRQUFRTyxTQUFTO29CQUFFTCxXQUFVOzs7Ozs7OEJBQ3ZDLDhEQUFDTTs4QkFBR1IsUUFBUVMsSUFBSTs7Ozs7Ozs7Ozs7OztBQUloQztLQXRCU1Y7QUF3QlQsaUVBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL3NpZGRoYXJ0aHNyaW5pdmFzYW4vZGV2L2Jsb29tYmVyZy10ZWNobGFiL2JiaXQtbGVhcm5pbmctbGFicy9UZWNoLUxhYi1Pbi1DYW1wdXMvTmV3c0ZlZWQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvRmVhdHVyZWROZXdzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBBcnRpY2xlIH0gZnJvbSBcIkAvdXRpbHMvdHlwZXNcIjtcblxuaW50ZXJmYWNlIE5ld3NDYXJkUHJvcHMge1xuICAgIGFydGljbGU6IEFydGljbGU7XG59XG5cblxuZnVuY3Rpb24gRmVhdHVyZWROZXdzQ2FyZCh7IGFydGljbGUgfTogTmV3c0NhcmRQcm9wcykge1xuICAgIC8vIFBBUlQgMTogRGlzcGxheSBhIEZlYXR1cmVkIE5ld3MgYXJ0aWNsZVxuXG4gICAgLy8gVXNpbmcgdGhlIGluZm8gYWJvdXQgdGhlIGFydGljbGUgcGFzc2VkIGluIGFzIGEgcHJvcCwgc2hvdzpcbiAgICAvLyAxLiBUaGUgZmVhdHVyZWQgYXJ0aWNsZSdzIHRpdGxlXG4gICAgLy8gMi4gVGhlIGZlYXR1cmVkIGFydGljbGUncyBpbWFnZVxuICAgIC8vIDMuIEEgcG9ydGlvbiBvZiB0aGUgc2VsZWN0ZWQgYXJ0aWNsZSdzIGJvZHksIHRydW5jYXRlZCBzbyB0aGF0IGl0IGZpdHMgbmljZWx5IGluIHRoZSBzZWN0aW9uXG5cbiAgICAvLyBPbmNlIGNvbXBsZXRpbmcgdGhpcyBwYXJ0LCB5b3Ugc2hvdWxkIGJlIGFibGUgdG8gc2VlIHRoZSBGZWF0dXJlZCBOZXdzIEFydGljbGUgYXQgdGhlIHRvcCBvZiB0aGUgcGFnZS5cblxuICAgIC8vIEhpbnQ6IFNvbWUgY2xhc3NlcyBpbmNsdWRlZCBpbiBgZ2xvYmFscy5jc3NgIG1heSBoZWxwIHdpdGggc3R5bGluZy5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZWQtbmV3cy1jYXJkXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZlYXR1cmVkLXN0b3J5LXRpdGxlXCIgPnthcnRpY2xlLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2FydGljbGUuaW1hZ2VfdXJsfSBjbGFzc05hbWU9XCJmZWF0dXJlZC1uZXdzLWltZ1wiPjwvaW1nPlxuICAgICAgICAgICAgICAgIDxwPnthcnRpY2xlLmJvZHl9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVkTmV3c0NhcmQ7XG4iXSwibmFtZXMiOlsiRmVhdHVyZWROZXdzQ2FyZCIsImFydGljbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInRpdGxlIiwiaW1nIiwic3JjIiwiaW1hZ2VfdXJsIiwicCIsImJvZHkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/FeaturedNews.tsx\n"));

/***/ })

});