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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction NewsCard(param) {\n    let { article } = param;\n    // PART 2: Create a reusable news card to use with general stories\n    // Similar to Part 1, create a component that displays:\n    // 1. The article's image\n    // 2. The article's title,\n    // 3. A truncated version of the article's body\n    // This component should be reusable to populate all stories on the news page.\n    // Once completing this part, you should be able to see a few test articles on\n    // the right side of the screen.\n    // Hint: Some classes in `globals.css` could help with styling\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"news-card\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"news-info\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: article.image_url,\n                    className: \"featured-news-img\"\n                }, void 0, false, {\n                    fileName: \"/Users/siddharthsrinivasan/dev/bloomberg-techlab/bbit-learning-labs/Tech-Lab-On-Campus/NewsFeed/frontend/src/components/NewsCard.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"featured-story-title\",\n                    children: article.title\n                }, void 0, false, {\n                    fileName: \"/Users/siddharthsrinivasan/dev/bloomberg-techlab/bbit-learning-labs/Tech-Lab-On-Campus/NewsFeed/frontend/src/components/NewsCard.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: article.body\n                }, void 0, false, {\n                    fileName: \"/Users/siddharthsrinivasan/dev/bloomberg-techlab/bbit-learning-labs/Tech-Lab-On-Campus/NewsFeed/frontend/src/components/NewsCard.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/siddharthsrinivasan/dev/bloomberg-techlab/bbit-learning-labs/Tech-Lab-On-Campus/NewsFeed/frontend/src/components/NewsCard.tsx\",\n            lineNumber: 26,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/siddharthsrinivasan/dev/bloomberg-techlab/bbit-learning-labs/Tech-Lab-On-Campus/NewsFeed/frontend/src/components/NewsCard.tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, this);\n}\n_c = NewsCard;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsCard);\nvar _c;\n$RefreshReg$(_c, \"NewsCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OZXdzQ2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVFBLFNBQVNBLFNBQVMsS0FBMEI7UUFBMUIsRUFBRUMsT0FBTyxFQUFpQixHQUExQjtJQUNkLGtFQUFrRTtJQUVsRSx1REFBdUQ7SUFDdkQseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQiwrQ0FBK0M7SUFFL0MsOEVBQThFO0lBRTlFLDhFQUE4RTtJQUM5RSxnQ0FBZ0M7SUFFaEMsOERBQThEO0lBRTlELHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFFWCw4REFBQ0M7b0JBQUlDLEtBQUtKLFFBQVFLLFNBQVM7b0JBQUVILFdBQVU7Ozs7Ozs4QkFDdkMsOERBQUNJO29CQUFHSixXQUFVOzhCQUF5QkYsUUFBUU8sS0FBSzs7Ozs7OzhCQUNwRCw4REFBQ0M7OEJBQUdSLFFBQVFTLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhDO0tBekJTVjtBQTJCVCxpRUFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL3NpZGRoYXJ0aHNyaW5pdmFzYW4vZGV2L2Jsb29tYmVyZy10ZWNobGFiL2JiaXQtbGVhcm5pbmctbGFicy9UZWNoLUxhYi1Pbi1DYW1wdXMvTmV3c0ZlZWQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvTmV3c0NhcmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IEFydGljbGUgfSBmcm9tIFwiQC91dGlscy90eXBlc1wiO1xuXG5pbnRlcmZhY2UgTmV3c0NhcmRQcm9wcyB7XG4gICAgYXJ0aWNsZTogQXJ0aWNsZTtcbn1cblxuXG5mdW5jdGlvbiBOZXdzQ2FyZCh7IGFydGljbGUgfTogTmV3c0NhcmRQcm9wcykge1xuICAgIC8vIFBBUlQgMjogQ3JlYXRlIGEgcmV1c2FibGUgbmV3cyBjYXJkIHRvIHVzZSB3aXRoIGdlbmVyYWwgc3Rvcmllc1xuXG4gICAgLy8gU2ltaWxhciB0byBQYXJ0IDEsIGNyZWF0ZSBhIGNvbXBvbmVudCB0aGF0IGRpc3BsYXlzOlxuICAgIC8vIDEuIFRoZSBhcnRpY2xlJ3MgaW1hZ2VcbiAgICAvLyAyLiBUaGUgYXJ0aWNsZSdzIHRpdGxlLFxuICAgIC8vIDMuIEEgdHJ1bmNhdGVkIHZlcnNpb24gb2YgdGhlIGFydGljbGUncyBib2R5XG5cbiAgICAvLyBUaGlzIGNvbXBvbmVudCBzaG91bGQgYmUgcmV1c2FibGUgdG8gcG9wdWxhdGUgYWxsIHN0b3JpZXMgb24gdGhlIG5ld3MgcGFnZS5cblxuICAgIC8vIE9uY2UgY29tcGxldGluZyB0aGlzIHBhcnQsIHlvdSBzaG91bGQgYmUgYWJsZSB0byBzZWUgYSBmZXcgdGVzdCBhcnRpY2xlcyBvblxuICAgIC8vIHRoZSByaWdodCBzaWRlIG9mIHRoZSBzY3JlZW4uXG5cbiAgICAvLyBIaW50OiBTb21lIGNsYXNzZXMgaW4gYGdsb2JhbHMuY3NzYCBjb3VsZCBoZWxwIHdpdGggc3R5bGluZ1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzLWNhcmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3cy1pbmZvXCI+XG4gICAgICAgICAgICAgICAgey8qIFRPRE86IFJlbW92ZSB0aGUgc3BhbiBiZWxvdyBhbmQgaW1wbGVtZW50IGEgcmV1c2FibGUgTmV3c0NhcmQgKi99XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2FydGljbGUuaW1hZ2VfdXJsfSBjbGFzc05hbWU9XCJmZWF0dXJlZC1uZXdzLWltZ1wiPjwvaW1nPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmZWF0dXJlZC1zdG9yeS10aXRsZVwiID57YXJ0aWNsZS50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgIDxwPnthcnRpY2xlLmJvZHl9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld3NDYXJkO1xuIl0sIm5hbWVzIjpbIk5ld3NDYXJkIiwiYXJ0aWNsZSIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImltYWdlX3VybCIsImgxIiwidGl0bGUiLCJwIiwiYm9keSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/NewsCard.tsx\n"));

/***/ })

});