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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ News)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NewsCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/NewsCard */ \"./src/components/NewsCard.tsx\");\n/* harmony import */ var _components_NewsFeed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/NewsFeed */ \"./src/components/NewsFeed.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_test_data_test_feature_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/test-data/test_feature.json */ \"./public/test-data/test_feature.json\");\n/* harmony import */ var _components_FeaturedNews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/FeaturedNews */ \"./src/components/FeaturedNews.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n// DUMMY DATA\n\n\nlet mainStory = {\n    title: _public_test_data_test_feature_json__WEBPACK_IMPORTED_MODULE_4__.thread.title,\n    image_url: _public_test_data_test_feature_json__WEBPACK_IMPORTED_MODULE_4__.thread.main_image,\n    body: _public_test_data_test_feature_json__WEBPACK_IMPORTED_MODULE_4__.text.slice(0, 500) + \"...\",\n    author: _public_test_data_test_feature_json__WEBPACK_IMPORTED_MODULE_4__.author,\n    url: _public_test_data_test_feature_json__WEBPACK_IMPORTED_MODULE_4__.url,\n    publish_date: new Date(_public_test_data_test_feature_json__WEBPACK_IMPORTED_MODULE_4__.published) // story publish date\n};\n// fake dummy data\nlet moreNews = [\n    {\n        title: \"Dummy Story 1\",\n        image_url: \"/globe.svg\",\n        body: \"This is a story.\",\n        url: \"bloomberg.com\",\n        author: \"John Doe\",\n        publish_date: new Date()\n    },\n    {\n        title: \"Dummy Story 2\",\n        image_url: \"/globe.svg\",\n        body: \"This is a story.\",\n        url: \"bloomberg.com\",\n        author: \"John Doe\",\n        publish_date: new Date()\n    },\n    {\n        title: \"Dummy Story 3\",\n        image_url: \"/globe.svg\",\n        body: \"This is a story.\",\n        url: \"bloomberg.com\",\n        author: \"John Doe\",\n        publish_date: new Date()\n    }\n];\nfunction News() {\n    _s();\n    // Some helpful info on React states: https://react.dev/reference/react/useState\n    const [articles, setArticles] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(moreNews);\n    const [featuredArticle, setFeaturedArticle] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(mainStory);\n    // PART 4: Fetch the data from the API that the backend partner builds to\n    //         populate real data to the page.\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)({\n        \"News.useEffect\": ()=>{\n            const fetchData = {\n                \"News.useEffect.fetchData\": async ()=>{\n                // 1. Fetch the featured article from '/api/news/get-featured-article'\n                // 2. Fetch the news feed data from '/api/news/get-newsfeed'\n                // 3. Use the `set` functions defined above to update the `articles` and `featuredArticle` variables\n                // Once completing you should be able to see news articles different from the dummy data originally provided.\n                // Hint: this may be useful to figure how to fetch data: https://medium.com/@bhanu.mt.1501/api-calls-in-react-js-342a09d5315f\n                }\n            }[\"News.useEffect.fetchData\"];\n            fetchData();\n        }\n    }[\"News.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-4 space-x-2 space-y-2 pt-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-span-4 lg:col-span-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FeaturedNews__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            article: featuredArticle\n                        }, void 0, false, {\n                            fileName: \"/Users/siddharthsrinivasan/dev/bloomberg-techlab/bbit-learning-labs/Tech-Lab-On-Campus/NewsFeed/frontend/src/pages/news.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NewsFeed__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            articles: articles\n                        }, void 0, false, {\n                            fileName: \"/Users/siddharthsrinivasan/dev/bloomberg-techlab/bbit-learning-labs/Tech-Lab-On-Campus/NewsFeed/frontend/src/pages/news.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"instruction\",\n                            children: \"Part 4: Connect the backend and fetch real data\"\n                        }, void 0, false, {\n                            fileName: \"/Users/siddharthsrinivasan/dev/bloomberg-techlab/bbit-learning-labs/Tech-Lab-On-Campus/NewsFeed/frontend/src/pages/news.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/siddharthsrinivasan/dev/bloomberg-techlab/bbit-learning-labs/Tech-Lab-On-Campus/NewsFeed/frontend/src/pages/news.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"hidden lg:block col-span-1 overflow-hidden border-l border-slate-300\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-4 divide-y divide-slate-300 space-x-2\",\n                        children: articles.slice(-6).map((article, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NewsCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                article: article\n                            }, \"\".concat(article, \"_\").concat(i), false, {\n                                fileName: \"/Users/siddharthsrinivasan/dev/bloomberg-techlab/bbit-learning-labs/Tech-Lab-On-Campus/NewsFeed/frontend/src/pages/news.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 29\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/siddharthsrinivasan/dev/bloomberg-techlab/bbit-learning-labs/Tech-Lab-On-Campus/NewsFeed/frontend/src/pages/news.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/siddharthsrinivasan/dev/bloomberg-techlab/bbit-learning-labs/Tech-Lab-On-Campus/NewsFeed/frontend/src/pages/news.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/siddharthsrinivasan/dev/bloomberg-techlab/bbit-learning-labs/Tech-Lab-On-Campus/NewsFeed/frontend/src/pages/news.tsx\",\n            lineNumber: 73,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/siddharthsrinivasan/dev/bloomberg-techlab/bbit-learning-labs/Tech-Lab-On-Campus/NewsFeed/frontend/src/pages/news.tsx\",\n        lineNumber: 72,\n        columnNumber: 9\n    }, this);\n}\n_s(News, \"lXUoEto1C4SoLGntnCSNd9272v8=\");\n_c = News;\nvar _c;\n$RefreshReg$(_c, \"News\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbmV3cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDQTtBQUNGO0FBSzNDLGFBQWE7QUFDZ0U7QUFDcEI7QUFFekQsSUFBSU0sWUFBcUI7SUFDckJDLE9BQU9ILHVFQUF1QixDQUFDRyxLQUFLO0lBQ3BDRSxXQUFXTCx1RUFBdUIsQ0FBQ00sVUFBVTtJQUM3Q0MsTUFBTVAscUVBQXFCLENBQUNTLEtBQUssQ0FBQyxHQUFHLE9BQU87SUFDNUNDLFFBQVFWLHVFQUF1QjtJQUMvQlcsS0FBS1gsb0VBQW9CO0lBQ3pCWSxjQUFjLElBQUlDLEtBQUtiLDBFQUEwQixFQUFLLHFCQUFxQjtBQUMvRTtBQUdBLGtCQUFrQjtBQUNsQixJQUFJZSxXQUFzQjtJQUN0QjtRQUNJWixPQUFPO1FBQ1BFLFdBQVc7UUFDWEUsTUFBTTtRQUNOSSxLQUFLO1FBQ0xELFFBQVE7UUFDUkUsY0FBYyxJQUFJQztJQUN0QjtJQUNBO1FBQ0lWLE9BQU87UUFDUEUsV0FBVztRQUNYRSxNQUFNO1FBQ05JLEtBQUs7UUFDTEQsUUFBUTtRQUNSRSxjQUFjLElBQUlDO0lBRXRCO0lBQ0E7UUFDSVYsT0FBTztRQUNQRSxXQUFXO1FBQ1hFLE1BQU07UUFDTkksS0FBSztRQUNMRCxRQUFRO1FBQ1JFLGNBQWMsSUFBSUM7SUFDdEI7Q0FDSDtBQUVjLFNBQVNHOztJQUNwQixnRkFBZ0Y7SUFDaEYsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdwQiwrQ0FBUUEsQ0FBWWlCO0lBQ3BELE1BQU0sQ0FBQ0ksaUJBQWlCQyxtQkFBbUIsR0FBR3RCLCtDQUFRQSxDQUFVSTtJQUVoRSx5RUFBeUU7SUFDekUsMENBQTBDO0lBQzFDSCxnREFBU0E7MEJBQUM7WUFDTixNQUFNc0I7NENBQVk7Z0JBQ2Qsc0VBQXNFO2dCQUN0RSw0REFBNEQ7Z0JBQzVELG9HQUFvRztnQkFFcEcsNkdBQTZHO2dCQUU3Ryw2SEFBNkg7Z0JBQ2pJOztZQUNBQTtRQUNKO3lCQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ0M7a0JBQ0csNEVBQUNBO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUN0QixnRUFBZ0JBOzRCQUFDdUIsU0FBU0w7Ozs7OztzQ0FDM0IsOERBQUN0Qiw0REFBUUE7NEJBQUNvQixVQUFVQTs7Ozs7O3NDQUdwQiw4REFBQ1E7NEJBQUtGLFdBQVU7c0NBQWM7Ozs7Ozs7Ozs7Ozs4QkFHbEMsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDRDt3QkFBSUMsV0FBVTtrQ0FFWE4sU0FBU1IsS0FBSyxDQUFDLENBQUMsR0FBR2lCLEdBQUcsQ0FBQyxDQUFDRixTQUFTRyxrQkFDN0IsOERBQUMvQiw0REFBUUE7Z0NBRUw0QixTQUFTQTsrQkFESixHQUFjRyxPQUFYSCxTQUFRLEtBQUssT0FBRkc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVW5EO0dBOUN3Qlg7S0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWRkaGFydGhzcmluaXZhc2FuL2Rldi9ibG9vbWJlcmctdGVjaGxhYi9iYml0LWxlYXJuaW5nLWxhYnMvVGVjaC1MYWItT24tQ2FtcHVzL05ld3NGZWVkL2Zyb250ZW5kL3NyYy9wYWdlcy9uZXdzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV3c0NhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9OZXdzQ2FyZFwiO1xuaW1wb3J0IE5ld3NGZWVkIGZyb20gXCJAL2NvbXBvbmVudHMvTmV3c0ZlZWRcIjtcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBBcnRpY2xlIH0gZnJvbSBcIkAvdXRpbHMvdHlwZXNcIjtcblxuXG4vLyBEVU1NWSBEQVRBXG5pbXBvcnQgKiBhcyBmZWF0dXJlU3RvcnlKc29uIGZyb20gXCIuLi8uLi9wdWJsaWMvdGVzdC1kYXRhL3Rlc3RfZmVhdHVyZS5qc29uXCI7XG5pbXBvcnQgRmVhdHVyZWROZXdzQ2FyZCBmcm9tIFwiQC9jb21wb25lbnRzL0ZlYXR1cmVkTmV3c1wiO1xuXG5sZXQgbWFpblN0b3J5OiBBcnRpY2xlID0ge1xuICAgIHRpdGxlOiBmZWF0dXJlU3RvcnlKc29uLnRocmVhZC50aXRsZSxcbiAgICBpbWFnZV91cmw6IGZlYXR1cmVTdG9yeUpzb24udGhyZWFkLm1haW5faW1hZ2UsXG4gICAgYm9keTogZmVhdHVyZVN0b3J5SnNvbi50ZXh0LnNsaWNlKDAsIDUwMCkgKyBcIi4uLlwiLFxuICAgIGF1dGhvcjogZmVhdHVyZVN0b3J5SnNvbi5hdXRob3IsICAgICAgICAgICAgICAgICAvLyBzdG9yeSBhdXRob3JcbiAgICB1cmw6IGZlYXR1cmVTdG9yeUpzb24udXJsLCAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RvcnkgdXJsXG4gICAgcHVibGlzaF9kYXRlOiBuZXcgRGF0ZShmZWF0dXJlU3RvcnlKc29uLnB1Ymxpc2hlZCkgICAgLy8gc3RvcnkgcHVibGlzaCBkYXRlXG59XG5cblxuLy8gZmFrZSBkdW1teSBkYXRhXG5sZXQgbW9yZU5ld3M6IEFydGljbGVbXSA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIkR1bW15IFN0b3J5IDFcIixcbiAgICAgICAgaW1hZ2VfdXJsOiBcIi9nbG9iZS5zdmdcIixcbiAgICAgICAgYm9keTogXCJUaGlzIGlzIGEgc3RvcnkuXCIsXG4gICAgICAgIHVybDogXCJibG9vbWJlcmcuY29tXCIsXG4gICAgICAgIGF1dGhvcjogXCJKb2huIERvZVwiLFxuICAgICAgICBwdWJsaXNoX2RhdGU6IG5ldyBEYXRlKClcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiRHVtbXkgU3RvcnkgMlwiLFxuICAgICAgICBpbWFnZV91cmw6IFwiL2dsb2JlLnN2Z1wiLFxuICAgICAgICBib2R5OiBcIlRoaXMgaXMgYSBzdG9yeS5cIixcbiAgICAgICAgdXJsOiBcImJsb29tYmVyZy5jb21cIixcbiAgICAgICAgYXV0aG9yOiBcIkpvaG4gRG9lXCIsXG4gICAgICAgIHB1Ymxpc2hfZGF0ZTogbmV3IERhdGUoKVxuXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIkR1bW15IFN0b3J5IDNcIixcbiAgICAgICAgaW1hZ2VfdXJsOiBcIi9nbG9iZS5zdmdcIixcbiAgICAgICAgYm9keTogXCJUaGlzIGlzIGEgc3RvcnkuXCIsXG4gICAgICAgIHVybDogXCJibG9vbWJlcmcuY29tXCIsXG4gICAgICAgIGF1dGhvcjogXCJKb2huIERvZVwiLFxuICAgICAgICBwdWJsaXNoX2RhdGU6IG5ldyBEYXRlKClcbiAgICB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdzKCkge1xuICAgIC8vIFNvbWUgaGVscGZ1bCBpbmZvIG9uIFJlYWN0IHN0YXRlczogaHR0cHM6Ly9yZWFjdC5kZXYvcmVmZXJlbmNlL3JlYWN0L3VzZVN0YXRlXG4gICAgY29uc3QgW2FydGljbGVzLCBzZXRBcnRpY2xlc10gPSB1c2VTdGF0ZTxBcnRpY2xlW10+KG1vcmVOZXdzKTtcbiAgICBjb25zdCBbZmVhdHVyZWRBcnRpY2xlLCBzZXRGZWF0dXJlZEFydGljbGVdID0gdXNlU3RhdGU8QXJ0aWNsZT4obWFpblN0b3J5KTtcblxuICAgIC8vIFBBUlQgNDogRmV0Y2ggdGhlIGRhdGEgZnJvbSB0aGUgQVBJIHRoYXQgdGhlIGJhY2tlbmQgcGFydG5lciBidWlsZHMgdG9cbiAgICAvLyAgICAgICAgIHBvcHVsYXRlIHJlYWwgZGF0YSB0byB0aGUgcGFnZS5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAvLyAxLiBGZXRjaCB0aGUgZmVhdHVyZWQgYXJ0aWNsZSBmcm9tICcvYXBpL25ld3MvZ2V0LWZlYXR1cmVkLWFydGljbGUnXG4gICAgICAgICAgICAvLyAyLiBGZXRjaCB0aGUgbmV3cyBmZWVkIGRhdGEgZnJvbSAnL2FwaS9uZXdzL2dldC1uZXdzZmVlZCdcbiAgICAgICAgICAgIC8vIDMuIFVzZSB0aGUgYHNldGAgZnVuY3Rpb25zIGRlZmluZWQgYWJvdmUgdG8gdXBkYXRlIHRoZSBgYXJ0aWNsZXNgIGFuZCBgZmVhdHVyZWRBcnRpY2xlYCB2YXJpYWJsZXNcblxuICAgICAgICAgICAgLy8gT25jZSBjb21wbGV0aW5nIHlvdSBzaG91bGQgYmUgYWJsZSB0byBzZWUgbmV3cyBhcnRpY2xlcyBkaWZmZXJlbnQgZnJvbSB0aGUgZHVtbXkgZGF0YSBvcmlnaW5hbGx5IHByb3ZpZGVkLlxuXG4gICAgICAgICAgICAvLyBIaW50OiB0aGlzIG1heSBiZSB1c2VmdWwgdG8gZmlndXJlIGhvdyB0byBmZXRjaCBkYXRhOiBodHRwczovL21lZGl1bS5jb20vQGJoYW51Lm10LjE1MDEvYXBpLWNhbGxzLWluLXJlYWN0LWpzLTM0MmEwOWQ1MzE1ZlxuICAgICAgICB9XG4gICAgICAgIGZldGNoRGF0YSgpO1xuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBzcGFjZS14LTIgc3BhY2UteS0yIHB0LTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTQgbGc6Y29sLXNwYW4tM1wiPlxuICAgICAgICAgICAgICAgICAgICA8RmVhdHVyZWROZXdzQ2FyZCBhcnRpY2xlPXtmZWF0dXJlZEFydGljbGV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxOZXdzRmVlZCBhcnRpY2xlcz17YXJ0aWNsZXN9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIE9uY2UgeW91J3JlIGRvbmUgd2l0aCBQYXJ0IDQsIGZlZWwgZnJlZSB0byByZW1vdmUgdGhlIHNwYW4gYmVsb3chICovfVxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnN0cnVjdGlvblwiPlBhcnQgNDogQ29ubmVjdCB0aGUgYmFja2VuZCBhbmQgZmV0Y2ggcmVhbCBkYXRhPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2sgY29sLXNwYW4tMSBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyLWwgYm9yZGVyLXNsYXRlLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTQgZGl2aWRlLXkgZGl2aWRlLXNsYXRlLTMwMCBzcGFjZS14LTJcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZXMuc2xpY2UoLTYpLm1hcCgoYXJ0aWNsZSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXdzQ2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake2FydGljbGV9XyR7aX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlPXthcnRpY2xlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il0sIm5hbWVzIjpbIk5ld3NDYXJkIiwiTmV3c0ZlZWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZlYXR1cmVTdG9yeUpzb24iLCJGZWF0dXJlZE5ld3NDYXJkIiwibWFpblN0b3J5IiwidGl0bGUiLCJ0aHJlYWQiLCJpbWFnZV91cmwiLCJtYWluX2ltYWdlIiwiYm9keSIsInRleHQiLCJzbGljZSIsImF1dGhvciIsInVybCIsInB1Ymxpc2hfZGF0ZSIsIkRhdGUiLCJwdWJsaXNoZWQiLCJtb3JlTmV3cyIsIk5ld3MiLCJhcnRpY2xlcyIsInNldEFydGljbGVzIiwiZmVhdHVyZWRBcnRpY2xlIiwic2V0RmVhdHVyZWRBcnRpY2xlIiwiZmV0Y2hEYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwiYXJ0aWNsZSIsInNwYW4iLCJtYXAiLCJpIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/news.tsx\n"));

/***/ })

});