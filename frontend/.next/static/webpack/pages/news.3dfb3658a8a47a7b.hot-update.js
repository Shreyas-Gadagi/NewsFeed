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

/***/ "./src/pages/news.tsx":
/*!****************************!*\
  !*** ./src/pages/news.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ News)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NewsCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/NewsCard */ \"./src/components/NewsCard.tsx\");\n/* harmony import */ var _components_NewsFeed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/NewsFeed */ \"./src/components/NewsFeed.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_test_data_test_feature_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/test-data/test_feature.json */ \"./public/test-data/test_feature.json\");\n/* harmony import */ var _components_FeaturedNews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/FeaturedNews */ \"./src/components/FeaturedNews.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n// DUMMY DATA\n\n\nlet mainStory = {\n    title: _public_test_data_test_feature_json__WEBPACK_IMPORTED_MODULE_4__.thread.title,\n    image_url: _public_test_data_test_feature_json__WEBPACK_IMPORTED_MODULE_4__.thread.main_image,\n    body: _public_test_data_test_feature_json__WEBPACK_IMPORTED_MODULE_4__.text.slice(0, 500) + \"...\",\n    author: _public_test_data_test_feature_json__WEBPACK_IMPORTED_MODULE_4__.author,\n    url: _public_test_data_test_feature_json__WEBPACK_IMPORTED_MODULE_4__.url,\n    publish_date: new Date(_public_test_data_test_feature_json__WEBPACK_IMPORTED_MODULE_4__.published) // story publish date\n};\n// fake dummy data\nlet moreNews = [\n    {\n        title: \"Dummy Story 1\",\n        image_url: \"/globe.svg\",\n        body: \"This is a story.\",\n        url: \"bloomberg.com\",\n        author: \"John Doe\",\n        publish_date: new Date()\n    },\n    {\n        title: \"Dummy Story 2\",\n        image_url: \"/globe.svg\",\n        body: \"This is a story.\",\n        url: \"bloomberg.com\",\n        author: \"John Doe\",\n        publish_date: new Date()\n    },\n    {\n        title: \"Dummy Story 3\",\n        image_url: \"/globe.svg\",\n        body: \"This is a story.\",\n        url: \"bloomberg.com\",\n        author: \"John Doe\",\n        publish_date: new Date()\n    }\n];\nfunction News() {\n    _s();\n    // Some helpful info on React states: https://react.dev/reference/react/useState\n    const [articles, setArticles] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(moreNews);\n    const [featuredArticle, setFeaturedArticle] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(mainStory);\n    // PART 4: Fetch the data from the API that the backend partner builds to\n    //         populate real data to the page.\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)({\n        \"News.useEffect\": ()=>{\n            const fetchData = {\n                \"News.useEffect.fetchData\": async ()=>{\n                    // 1. Fetch the featured article from '/api/news/get-featured-article'\n                    // 2. Fetch the news feed data from '/api/news/get-newsfeed'\n                    // 3. Use the `set` functions defined above to update the `articles` and `featuredArticle` variables\n                    // Once completing you should be able to see news articles different from the dummy data originally provided.\n                    // Hint: this may be useful to figure how to fetch data: https://medium.com/@bhanu.mt.1501/api-calls-in-react-js-342a09d5315f\n                    const featuredArticle = await fetch('/api/news/get-featured-article');\n                    const articles = await fetch('/api/news/get-newsfeed');\n                    setFeaturedArticle(featuredArticle.json());\n                    setArticles(articles.json());\n                }\n            }[\"News.useEffect.fetchData\"];\n            fetchData();\n        }\n    }[\"News.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-4 space-x-2 space-y-2 pt-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-span-4 lg:col-span-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FeaturedNews__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            article: featuredArticle\n                        }, void 0, false, {\n                            fileName: \"/Users/siddharthsrinivasan/dev/bloomberg-techlab/bbit-learning-labs/Tech-Lab-On-Campus/NewsFeed/frontend/src/pages/news.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NewsFeed__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            articles: articles\n                        }, void 0, false, {\n                            fileName: \"/Users/siddharthsrinivasan/dev/bloomberg-techlab/bbit-learning-labs/Tech-Lab-On-Campus/NewsFeed/frontend/src/pages/news.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"instruction\",\n                            children: \"Part 4: Connect the backend and fetch real data\"\n                        }, void 0, false, {\n                            fileName: \"/Users/siddharthsrinivasan/dev/bloomberg-techlab/bbit-learning-labs/Tech-Lab-On-Campus/NewsFeed/frontend/src/pages/news.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/siddharthsrinivasan/dev/bloomberg-techlab/bbit-learning-labs/Tech-Lab-On-Campus/NewsFeed/frontend/src/pages/news.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"hidden lg:block col-span-1 overflow-hidden border-l border-slate-300\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-4 divide-y divide-slate-300 space-x-2\",\n                        children: articles.slice(-6).map((article, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NewsCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                article: article\n                            }, \"\".concat(article, \"_\").concat(i), false, {\n                                fileName: \"/Users/siddharthsrinivasan/dev/bloomberg-techlab/bbit-learning-labs/Tech-Lab-On-Campus/NewsFeed/frontend/src/pages/news.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 29\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/siddharthsrinivasan/dev/bloomberg-techlab/bbit-learning-labs/Tech-Lab-On-Campus/NewsFeed/frontend/src/pages/news.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/siddharthsrinivasan/dev/bloomberg-techlab/bbit-learning-labs/Tech-Lab-On-Campus/NewsFeed/frontend/src/pages/news.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/siddharthsrinivasan/dev/bloomberg-techlab/bbit-learning-labs/Tech-Lab-On-Campus/NewsFeed/frontend/src/pages/news.tsx\",\n            lineNumber: 76,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/siddharthsrinivasan/dev/bloomberg-techlab/bbit-learning-labs/Tech-Lab-On-Campus/NewsFeed/frontend/src/pages/news.tsx\",\n        lineNumber: 75,\n        columnNumber: 9\n    }, this);\n}\n_s(News, \"lXUoEto1C4SoLGntnCSNd9272v8=\");\n_c = News;\nvar _c;\n$RefreshReg$(_c, \"News\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbmV3cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDQTtBQUNGO0FBSTNDLGFBQWE7QUFDZ0U7QUFDcEI7QUFFekQsSUFBSU0sWUFBcUI7SUFDckJDLE9BQU9ILHVFQUF1QixDQUFDRyxLQUFLO0lBQ3BDRSxXQUFXTCx1RUFBdUIsQ0FBQ00sVUFBVTtJQUM3Q0MsTUFBTVAscUVBQXFCLENBQUNTLEtBQUssQ0FBQyxHQUFHLE9BQU87SUFDNUNDLFFBQVFWLHVFQUF1QjtJQUMvQlcsS0FBS1gsb0VBQW9CO0lBQ3pCWSxjQUFjLElBQUlDLEtBQUtiLDBFQUEwQixFQUFLLHFCQUFxQjtBQUMvRTtBQUdBLGtCQUFrQjtBQUNsQixJQUFJZSxXQUFzQjtJQUN0QjtRQUNJWixPQUFPO1FBQ1BFLFdBQVc7UUFDWEUsTUFBTTtRQUNOSSxLQUFLO1FBQ0xELFFBQVE7UUFDUkUsY0FBYyxJQUFJQztJQUN0QjtJQUNBO1FBQ0lWLE9BQU87UUFDUEUsV0FBVztRQUNYRSxNQUFNO1FBQ05JLEtBQUs7UUFDTEQsUUFBUTtRQUNSRSxjQUFjLElBQUlDO0lBRXRCO0lBQ0E7UUFDSVYsT0FBTztRQUNQRSxXQUFXO1FBQ1hFLE1BQU07UUFDTkksS0FBSztRQUNMRCxRQUFRO1FBQ1JFLGNBQWMsSUFBSUM7SUFDdEI7Q0FDSDtBQUVjLFNBQVNHOztJQUNwQixnRkFBZ0Y7SUFDaEYsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdwQiwrQ0FBUUEsQ0FBWWlCO0lBQ3BELE1BQU0sQ0FBQ0ksaUJBQWlCQyxtQkFBbUIsR0FBR3RCLCtDQUFRQSxDQUFVSTtJQUVoRSx5RUFBeUU7SUFDekUsMENBQTBDO0lBQzFDSCxnREFBU0E7MEJBQUM7WUFDTixNQUFNc0I7NENBQVk7b0JBQ2Qsc0VBQXNFO29CQUN0RSw0REFBNEQ7b0JBQzVELG9HQUFvRztvQkFFcEcsNkdBQTZHO29CQUU3Ryw2SEFBNkg7b0JBQzdILE1BQU1GLGtCQUFrQixNQUFNRyxNQUFNO29CQUNwQyxNQUFNTCxXQUFXLE1BQU1LLE1BQU07b0JBQzdCRixtQkFBbUJELGdCQUFnQkksSUFBSTtvQkFDdkNMLFlBQVlELFNBQVNNLElBQUk7Z0JBQzdCOztZQUNBRjtRQUNKO3lCQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ0c7a0JBQ0csNEVBQUNBO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUN4QixnRUFBZ0JBOzRCQUFDeUIsU0FBU1A7Ozs7OztzQ0FDM0IsOERBQUN0Qiw0REFBUUE7NEJBQUNvQixVQUFVQTs7Ozs7O3NDQUdwQiw4REFBQ1U7NEJBQUtGLFdBQVU7c0NBQWM7Ozs7Ozs7Ozs7Ozs4QkFHbEMsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDRDt3QkFBSUMsV0FBVTtrQ0FFWFIsU0FBU1IsS0FBSyxDQUFDLENBQUMsR0FBR21CLEdBQUcsQ0FBQyxDQUFDRixTQUFTRyxrQkFDN0IsOERBQUNqQyw0REFBUUE7Z0NBRUw4QixTQUFTQTsrQkFESixHQUFjRyxPQUFYSCxTQUFRLEtBQUssT0FBRkc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVW5EO0dBbER3QmI7S0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWRkaGFydGhzcmluaXZhc2FuL2Rldi9ibG9vbWJlcmctdGVjaGxhYi9iYml0LWxlYXJuaW5nLWxhYnMvVGVjaC1MYWItT24tQ2FtcHVzL05ld3NGZWVkL2Zyb250ZW5kL3NyYy9wYWdlcy9uZXdzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV3c0NhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9OZXdzQ2FyZFwiO1xuaW1wb3J0IE5ld3NGZWVkIGZyb20gXCJAL2NvbXBvbmVudHMvTmV3c0ZlZWRcIjtcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBBcnRpY2xlIH0gZnJvbSBcIkAvdXRpbHMvdHlwZXNcIjtcblxuLy8gRFVNTVkgREFUQVxuaW1wb3J0ICogYXMgZmVhdHVyZVN0b3J5SnNvbiBmcm9tIFwiLi4vLi4vcHVibGljL3Rlc3QtZGF0YS90ZXN0X2ZlYXR1cmUuanNvblwiO1xuaW1wb3J0IEZlYXR1cmVkTmV3c0NhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9GZWF0dXJlZE5ld3NcIjtcblxubGV0IG1haW5TdG9yeTogQXJ0aWNsZSA9IHtcbiAgICB0aXRsZTogZmVhdHVyZVN0b3J5SnNvbi50aHJlYWQudGl0bGUsXG4gICAgaW1hZ2VfdXJsOiBmZWF0dXJlU3RvcnlKc29uLnRocmVhZC5tYWluX2ltYWdlLFxuICAgIGJvZHk6IGZlYXR1cmVTdG9yeUpzb24udGV4dC5zbGljZSgwLCA1MDApICsgXCIuLi5cIixcbiAgICBhdXRob3I6IGZlYXR1cmVTdG9yeUpzb24uYXV0aG9yLCAgICAgICAgICAgICAgICAgLy8gc3RvcnkgYXV0aG9yXG4gICAgdXJsOiBmZWF0dXJlU3RvcnlKc29uLnVybCwgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0b3J5IHVybFxuICAgIHB1Ymxpc2hfZGF0ZTogbmV3IERhdGUoZmVhdHVyZVN0b3J5SnNvbi5wdWJsaXNoZWQpICAgIC8vIHN0b3J5IHB1Ymxpc2ggZGF0ZVxufVxuXG5cbi8vIGZha2UgZHVtbXkgZGF0YVxubGV0IG1vcmVOZXdzOiBBcnRpY2xlW10gPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogXCJEdW1teSBTdG9yeSAxXCIsXG4gICAgICAgIGltYWdlX3VybDogXCIvZ2xvYmUuc3ZnXCIsXG4gICAgICAgIGJvZHk6IFwiVGhpcyBpcyBhIHN0b3J5LlwiLFxuICAgICAgICB1cmw6IFwiYmxvb21iZXJnLmNvbVwiLFxuICAgICAgICBhdXRob3I6IFwiSm9obiBEb2VcIixcbiAgICAgICAgcHVibGlzaF9kYXRlOiBuZXcgRGF0ZSgpXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIkR1bW15IFN0b3J5IDJcIixcbiAgICAgICAgaW1hZ2VfdXJsOiBcIi9nbG9iZS5zdmdcIixcbiAgICAgICAgYm9keTogXCJUaGlzIGlzIGEgc3RvcnkuXCIsXG4gICAgICAgIHVybDogXCJibG9vbWJlcmcuY29tXCIsXG4gICAgICAgIGF1dGhvcjogXCJKb2huIERvZVwiLFxuICAgICAgICBwdWJsaXNoX2RhdGU6IG5ldyBEYXRlKClcblxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJEdW1teSBTdG9yeSAzXCIsXG4gICAgICAgIGltYWdlX3VybDogXCIvZ2xvYmUuc3ZnXCIsXG4gICAgICAgIGJvZHk6IFwiVGhpcyBpcyBhIHN0b3J5LlwiLFxuICAgICAgICB1cmw6IFwiYmxvb21iZXJnLmNvbVwiLFxuICAgICAgICBhdXRob3I6IFwiSm9obiBEb2VcIixcbiAgICAgICAgcHVibGlzaF9kYXRlOiBuZXcgRGF0ZSgpXG4gICAgfSxcbl1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3cygpIHtcbiAgICAvLyBTb21lIGhlbHBmdWwgaW5mbyBvbiBSZWFjdCBzdGF0ZXM6IGh0dHBzOi8vcmVhY3QuZGV2L3JlZmVyZW5jZS9yZWFjdC91c2VTdGF0ZVxuICAgIGNvbnN0IFthcnRpY2xlcywgc2V0QXJ0aWNsZXNdID0gdXNlU3RhdGU8QXJ0aWNsZVtdPihtb3JlTmV3cyk7XG4gICAgY29uc3QgW2ZlYXR1cmVkQXJ0aWNsZSwgc2V0RmVhdHVyZWRBcnRpY2xlXSA9IHVzZVN0YXRlPEFydGljbGU+KG1haW5TdG9yeSk7XG5cbiAgICAvLyBQQVJUIDQ6IEZldGNoIHRoZSBkYXRhIGZyb20gdGhlIEFQSSB0aGF0IHRoZSBiYWNrZW5kIHBhcnRuZXIgYnVpbGRzIHRvXG4gICAgLy8gICAgICAgICBwb3B1bGF0ZSByZWFsIGRhdGEgdG8gdGhlIHBhZ2UuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgLy8gMS4gRmV0Y2ggdGhlIGZlYXR1cmVkIGFydGljbGUgZnJvbSAnL2FwaS9uZXdzL2dldC1mZWF0dXJlZC1hcnRpY2xlJ1xuICAgICAgICAgICAgLy8gMi4gRmV0Y2ggdGhlIG5ld3MgZmVlZCBkYXRhIGZyb20gJy9hcGkvbmV3cy9nZXQtbmV3c2ZlZWQnXG4gICAgICAgICAgICAvLyAzLiBVc2UgdGhlIGBzZXRgIGZ1bmN0aW9ucyBkZWZpbmVkIGFib3ZlIHRvIHVwZGF0ZSB0aGUgYGFydGljbGVzYCBhbmQgYGZlYXR1cmVkQXJ0aWNsZWAgdmFyaWFibGVzXG5cbiAgICAgICAgICAgIC8vIE9uY2UgY29tcGxldGluZyB5b3Ugc2hvdWxkIGJlIGFibGUgdG8gc2VlIG5ld3MgYXJ0aWNsZXMgZGlmZmVyZW50IGZyb20gdGhlIGR1bW15IGRhdGEgb3JpZ2luYWxseSBwcm92aWRlZC5cblxuICAgICAgICAgICAgLy8gSGludDogdGhpcyBtYXkgYmUgdXNlZnVsIHRvIGZpZ3VyZSBob3cgdG8gZmV0Y2ggZGF0YTogaHR0cHM6Ly9tZWRpdW0uY29tL0BiaGFudS5tdC4xNTAxL2FwaS1jYWxscy1pbi1yZWFjdC1qcy0zNDJhMDlkNTMxNWZcbiAgICAgICAgICAgIGNvbnN0IGZlYXR1cmVkQXJ0aWNsZSA9IGF3YWl0IGZldGNoKCcvYXBpL25ld3MvZ2V0LWZlYXR1cmVkLWFydGljbGUnKVxuICAgICAgICAgICAgY29uc3QgYXJ0aWNsZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS9uZXdzL2dldC1uZXdzZmVlZCcpXG4gICAgICAgICAgICBzZXRGZWF0dXJlZEFydGljbGUoZmVhdHVyZWRBcnRpY2xlLmpzb24oKSApXG4gICAgICAgICAgICBzZXRBcnRpY2xlcyhhcnRpY2xlcy5qc29uKCkgKVxuICAgICAgICB9XG4gICAgICAgIGZldGNoRGF0YSgpO1xuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBzcGFjZS14LTIgc3BhY2UteS0yIHB0LTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTQgbGc6Y29sLXNwYW4tM1wiPlxuICAgICAgICAgICAgICAgICAgICA8RmVhdHVyZWROZXdzQ2FyZCBhcnRpY2xlPXtmZWF0dXJlZEFydGljbGV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxOZXdzRmVlZCBhcnRpY2xlcz17YXJ0aWNsZXN9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIE9uY2UgeW91J3JlIGRvbmUgd2l0aCBQYXJ0IDQsIGZlZWwgZnJlZSB0byByZW1vdmUgdGhlIHNwYW4gYmVsb3chICovfVxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnN0cnVjdGlvblwiPlBhcnQgNDogQ29ubmVjdCB0aGUgYmFja2VuZCBhbmQgZmV0Y2ggcmVhbCBkYXRhPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2sgY29sLXNwYW4tMSBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyLWwgYm9yZGVyLXNsYXRlLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTQgZGl2aWRlLXkgZGl2aWRlLXNsYXRlLTMwMCBzcGFjZS14LTJcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZXMuc2xpY2UoLTYpLm1hcCgoYXJ0aWNsZSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXdzQ2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake2FydGljbGV9XyR7aX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlPXthcnRpY2xlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiTmV3c0NhcmQiLCJOZXdzRmVlZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZmVhdHVyZVN0b3J5SnNvbiIsIkZlYXR1cmVkTmV3c0NhcmQiLCJtYWluU3RvcnkiLCJ0aXRsZSIsInRocmVhZCIsImltYWdlX3VybCIsIm1haW5faW1hZ2UiLCJib2R5IiwidGV4dCIsInNsaWNlIiwiYXV0aG9yIiwidXJsIiwicHVibGlzaF9kYXRlIiwiRGF0ZSIsInB1Ymxpc2hlZCIsIm1vcmVOZXdzIiwiTmV3cyIsImFydGljbGVzIiwic2V0QXJ0aWNsZXMiLCJmZWF0dXJlZEFydGljbGUiLCJzZXRGZWF0dXJlZEFydGljbGUiLCJmZXRjaERhdGEiLCJmZXRjaCIsImpzb24iLCJkaXYiLCJjbGFzc05hbWUiLCJhcnRpY2xlIiwic3BhbiIsIm1hcCIsImkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/news.tsx\n"));

/***/ })

});