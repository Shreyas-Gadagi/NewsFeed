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

/***/ "./src/components/NewsCard.tsx":
/*!*************************************!*\
  !*** ./src/components/NewsCard.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction NewsCard(param) {\n    let { article } = param;\n    // PART 2: Create a reusable news card to use with general stories\n    // Similar to Part 1, create a component that displays:\n    // 1. The article's image\n    // 2. The article's title,\n    // 3. A truncated version of the article's body\n    // This component should be reusable to populate all stories on the news page.\n    // Once completing this part, you should be able to see a few test articles on\n    // the right side of the screen.\n    // Hint: Some classes in `globals.css` could help with styling\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"news-card\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"news-info\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: article.image_url,\n                    className: \"news-img\"\n                }, void 0, false, {\n                    fileName: \"/Users/siddharthsrinivasan/dev/bloomberg-techlab/bbit-learning-labs/Tech-Lab-On-Campus/NewsFeed/frontend/src/components/NewsCard.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: article.title\n                }, void 0, false, {\n                    fileName: \"/Users/siddharthsrinivasan/dev/bloomberg-techlab/bbit-learning-labs/Tech-Lab-On-Campus/NewsFeed/frontend/src/components/NewsCard.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: article.body\n                }, void 0, false, {\n                    fileName: \"/Users/siddharthsrinivasan/dev/bloomberg-techlab/bbit-learning-labs/Tech-Lab-On-Campus/NewsFeed/frontend/src/components/NewsCard.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/siddharthsrinivasan/dev/bloomberg-techlab/bbit-learning-labs/Tech-Lab-On-Campus/NewsFeed/frontend/src/components/NewsCard.tsx\",\n            lineNumber: 26,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/siddharthsrinivasan/dev/bloomberg-techlab/bbit-learning-labs/Tech-Lab-On-Campus/NewsFeed/frontend/src/components/NewsCard.tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, this);\n}\n_c = NewsCard;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsCard);\nvar _c;\n$RefreshReg$(_c, \"NewsCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OZXdzQ2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVFBLFNBQVNBLFNBQVMsS0FBMEI7UUFBMUIsRUFBRUMsT0FBTyxFQUFpQixHQUExQjtJQUNkLGtFQUFrRTtJQUVsRSx1REFBdUQ7SUFDdkQseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQiwrQ0FBK0M7SUFFL0MsOEVBQThFO0lBRTlFLDhFQUE4RTtJQUM5RSxnQ0FBZ0M7SUFFaEMsOERBQThEO0lBRTlELHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFFWCw4REFBQ0M7b0JBQUlDLEtBQUtKLFFBQVFLLFNBQVM7b0JBQUVILFdBQVU7Ozs7Ozs4QkFDdkMsOERBQUNJOzhCQUFJTixRQUFRTyxLQUFLOzs7Ozs7OEJBQ2xCLDhEQUFDQzs4QkFBR1IsUUFBUVMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEM7S0F6QlNWO0FBMkJULGlFQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvc2lkZGhhcnRoc3Jpbml2YXNhbi9kZXYvYmxvb21iZXJnLXRlY2hsYWIvYmJpdC1sZWFybmluZy1sYWJzL1RlY2gtTGFiLU9uLUNhbXB1cy9OZXdzRmVlZC9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9OZXdzQ2FyZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgQXJ0aWNsZSB9IGZyb20gXCJAL3V0aWxzL3R5cGVzXCI7XG5cbmludGVyZmFjZSBOZXdzQ2FyZFByb3BzIHtcbiAgICBhcnRpY2xlOiBBcnRpY2xlO1xufVxuXG5cbmZ1bmN0aW9uIE5ld3NDYXJkKHsgYXJ0aWNsZSB9OiBOZXdzQ2FyZFByb3BzKSB7XG4gICAgLy8gUEFSVCAyOiBDcmVhdGUgYSByZXVzYWJsZSBuZXdzIGNhcmQgdG8gdXNlIHdpdGggZ2VuZXJhbCBzdG9yaWVzXG5cbiAgICAvLyBTaW1pbGFyIHRvIFBhcnQgMSwgY3JlYXRlIGEgY29tcG9uZW50IHRoYXQgZGlzcGxheXM6XG4gICAgLy8gMS4gVGhlIGFydGljbGUncyBpbWFnZVxuICAgIC8vIDIuIFRoZSBhcnRpY2xlJ3MgdGl0bGUsXG4gICAgLy8gMy4gQSB0cnVuY2F0ZWQgdmVyc2lvbiBvZiB0aGUgYXJ0aWNsZSdzIGJvZHlcblxuICAgIC8vIFRoaXMgY29tcG9uZW50IHNob3VsZCBiZSByZXVzYWJsZSB0byBwb3B1bGF0ZSBhbGwgc3RvcmllcyBvbiB0aGUgbmV3cyBwYWdlLlxuXG4gICAgLy8gT25jZSBjb21wbGV0aW5nIHRoaXMgcGFydCwgeW91IHNob3VsZCBiZSBhYmxlIHRvIHNlZSBhIGZldyB0ZXN0IGFydGljbGVzIG9uXG4gICAgLy8gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIHNjcmVlbi5cblxuICAgIC8vIEhpbnQ6IFNvbWUgY2xhc3NlcyBpbiBgZ2xvYmFscy5jc3NgIGNvdWxkIGhlbHAgd2l0aCBzdHlsaW5nXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3MtY2FyZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzLWluZm9cIj5cbiAgICAgICAgICAgICAgICB7LyogVE9ETzogUmVtb3ZlIHRoZSBzcGFuIGJlbG93IGFuZCBpbXBsZW1lbnQgYSByZXVzYWJsZSBOZXdzQ2FyZCAqL31cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YXJ0aWNsZS5pbWFnZV91cmx9IGNsYXNzTmFtZT1cIm5ld3MtaW1nXCI+PC9pbWc+XG4gICAgICAgICAgICAgICAgPGgxPnthcnRpY2xlLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgPHA+e2FydGljbGUuYm9keX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV3c0NhcmQ7XG4iXSwibmFtZXMiOlsiTmV3c0NhcmQiLCJhcnRpY2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaW1hZ2VfdXJsIiwiaDEiLCJ0aXRsZSIsInAiLCJib2R5Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/NewsCard.tsx\n"));

/***/ })

});