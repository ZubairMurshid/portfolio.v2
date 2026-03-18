"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/roadmap/route";
exports.ids = ["app/api/roadmap/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Froadmap%2Froute&page=%2Fapi%2Froadmap%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froadmap%2Froute.ts&appDir=D%3A%5Cportfolio.v2%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cportfolio.v2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Froadmap%2Froute&page=%2Fapi%2Froadmap%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froadmap%2Froute.ts&appDir=D%3A%5Cportfolio.v2%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cportfolio.v2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_portfolio_v2_app_api_roadmap_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/roadmap/route.ts */ \"(rsc)/./app/api/roadmap/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/roadmap/route\",\n        pathname: \"/api/roadmap\",\n        filename: \"route\",\n        bundlePath: \"app/api/roadmap/route\"\n    },\n    resolvedPagePath: \"D:\\\\portfolio.v2\\\\app\\\\api\\\\roadmap\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_portfolio_v2_app_api_roadmap_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/roadmap/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZyb2FkbWFwJTJGcm91dGUmcGFnZT0lMkZhcGklMkZyb2FkbWFwJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcm9hZG1hcCUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDcG9ydGZvbGlvLnYyJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1EJTNBJTVDcG9ydGZvbGlvLnYyJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNIO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8venViYWlyLXBvcnRmb2xpby8/OGM5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJEOlxcXFxwb3J0Zm9saW8udjJcXFxcYXBwXFxcXGFwaVxcXFxyb2FkbWFwXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9yb2FkbWFwL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcm9hZG1hcFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcm9hZG1hcC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkQ6XFxcXHBvcnRmb2xpby52MlxcXFxhcHBcXFxcYXBpXFxcXHJvYWRtYXBcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3JvYWRtYXAvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Froadmap%2Froute&page=%2Fapi%2Froadmap%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froadmap%2Froute.ts&appDir=D%3A%5Cportfolio.v2%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cportfolio.v2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/roadmap/route.ts":
/*!**********************************!*\
  !*** ./app/api/roadmap/route.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redis */ \"(rsc)/./node_modules/redis/dist/index.js\");\n/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redis__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function getRedisClient() {\n    const client = (0,redis__WEBPACK_IMPORTED_MODULE_1__.createClient)({\n        url: process.env.REDIS_URL || process.env.KV_REST_API_URL || \"\"\n    });\n    client.on(\"error\", (err)=>console.error(\"Redis Client Error\", err));\n    await client.connect();\n    return client;\n}\nasync function GET() {\n    let client;\n    try {\n        if (!process.env.REDIS_URL && !process.env.KV_REST_API_URL) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                completed: [],\n                ongoing: []\n            });\n        }\n        client = await getRedisClient();\n        const state = await client.get(\"roadmap_state\");\n        if (!state) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                completed: [],\n                ongoing: []\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(JSON.parse(state));\n    } catch (error) {\n        console.error(\"Roadmap GET Error:\", error.message);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            completed: [],\n            ongoing: []\n        });\n    } finally{\n        if (client) {\n            try {\n                await client.disconnect();\n            } catch (e) {\n            // Ignore disconnect errors\n            }\n        }\n    }\n}\nasync function POST(request) {\n    let client;\n    try {\n        const body = await request.json();\n        const { completed, ongoing } = body;\n        if (!Array.isArray(completed) || !Array.isArray(ongoing)) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Invalid data format\"\n            }, {\n                status: 400\n            });\n        }\n        if (!process.env.REDIS_URL && !process.env.KV_REST_API_URL) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Redis configuration missing\"\n            }, {\n                status: 500\n            });\n        }\n        client = await getRedisClient();\n        await client.set(\"roadmap_state\", JSON.stringify({\n            completed,\n            ongoing\n        }));\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true\n        });\n    } catch (error) {\n        console.error(\"Roadmap POST Error:\", error.message);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to sync with Redis.\",\n            details: error.message\n        }, {\n            status: 500\n        });\n    } finally{\n        if (client) {\n            try {\n                await client.disconnect();\n            } catch (e) {\n            // Ignore disconnect errors\n            }\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNGO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3p1YmFpci1wb3J0Zm9saW8vLi9hcHAvYXBpL3JvYWRtYXAvcm91dGUudHM/NWY3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdyZWRpcyc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRSZWRpc0NsaWVudCgpIHtcclxuICBjb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xyXG4gICAgdXJsOiBwcm9jZXNzLmVudi5SRURJU19VUkwgfHwgcHJvY2Vzcy5lbnYuS1ZfUkVTVF9BUElfVVJMIHx8ICcnXHJcbiAgfSk7XHJcbiAgY2xpZW50Lm9uKCdlcnJvcicsIChlcnIpID0+IGNvbnNvbGUuZXJyb3IoJ1JlZGlzIENsaWVudCBFcnJvcicsIGVycikpO1xyXG4gIGF3YWl0IGNsaWVudC5jb25uZWN0KCk7XHJcbiAgcmV0dXJuIGNsaWVudDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcclxuICBsZXQgY2xpZW50O1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoIXByb2Nlc3MuZW52LlJFRElTX1VSTCAmJiAhcHJvY2Vzcy5lbnYuS1ZfUkVTVF9BUElfVVJMKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGNvbXBsZXRlZDogW10sIG9uZ29pbmc6IFtdIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjbGllbnQgPSBhd2FpdCBnZXRSZWRpc0NsaWVudCgpO1xyXG4gICAgY29uc3Qgc3RhdGUgPSBhd2FpdCBjbGllbnQuZ2V0KCdyb2FkbWFwX3N0YXRlJyk7XHJcbiAgICBcclxuICAgIGlmICghc3RhdGUpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgY29tcGxldGVkOiBbXSwgb25nb2luZzogW10gfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihKU09OLnBhcnNlKHN0YXRlKSk7XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignUm9hZG1hcCBHRVQgRXJyb3I6JywgZXJyb3IubWVzc2FnZSk7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBjb21wbGV0ZWQ6IFtdLCBvbmdvaW5nOiBbXSB9KTtcclxuICB9IGZpbmFsbHkge1xyXG4gICAgaWYgKGNsaWVudCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGNsaWVudC5kaXNjb25uZWN0KCk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyBJZ25vcmUgZGlzY29ubmVjdCBlcnJvcnNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogUmVxdWVzdCkge1xyXG4gIGxldCBjbGllbnQ7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuICAgIGNvbnN0IHsgY29tcGxldGVkLCBvbmdvaW5nIH0gPSBib2R5O1xyXG5cclxuICAgIGlmICghQXJyYXkuaXNBcnJheShjb21wbGV0ZWQpIHx8ICFBcnJheS5pc0FycmF5KG9uZ29pbmcpKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnSW52YWxpZCBkYXRhIGZvcm1hdCcgfSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXByb2Nlc3MuZW52LlJFRElTX1VSTCAmJiAhcHJvY2Vzcy5lbnYuS1ZfUkVTVF9BUElfVVJMKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnUmVkaXMgY29uZmlndXJhdGlvbiBtaXNzaW5nJyB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsaWVudCA9IGF3YWl0IGdldFJlZGlzQ2xpZW50KCk7XHJcbiAgICBhd2FpdCBjbGllbnQuc2V0KCdyb2FkbWFwX3N0YXRlJywgSlNPTi5zdHJpbmdpZnkoeyBjb21wbGV0ZWQsIG9uZ29pbmcgfSkpO1xyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IHRydWUgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignUm9hZG1hcCBQT1NUIEVycm9yOicsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgXHJcbiAgICAgIGVycm9yOiAnRmFpbGVkIHRvIHN5bmMgd2l0aCBSZWRpcy4nLFxyXG4gICAgICBkZXRhaWxzOiBlcnJvci5tZXNzYWdlIFxyXG4gICAgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9IGZpbmFsbHkge1xyXG4gICAgaWYgKGNsaWVudCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGNsaWVudC5kaXNjb25uZWN0KCk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyBJZ25vcmUgZGlzY29ubmVjdCBlcnJvcnNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiY3JlYXRlQ2xpZW50IiwiZ2V0UmVkaXNDbGllbnQiLCJjbGllbnQiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiUkVESVNfVVJMIiwiS1ZfUkVTVF9BUElfVVJMIiwib24iLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJjb25uZWN0IiwiR0VUIiwianNvbiIsImNvbXBsZXRlZCIsIm9uZ29pbmciLCJzdGF0ZSIsImdldCIsIkpTT04iLCJwYXJzZSIsIm1lc3NhZ2UiLCJkaXNjb25uZWN0IiwiZSIsIlBPU1QiLCJyZXF1ZXN0IiwiYm9keSIsIkFycmF5IiwiaXNBcnJheSIsInN0YXR1cyIsInNldCIsInN0cmluZ2lmeSIsInN1Y2Nlc3MiLCJkZXRhaWxzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/roadmap/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@redis","vendor-chunks/generic-pool","vendor-chunks/yallist","vendor-chunks/redis","vendor-chunks/cluster-key-slot"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Froadmap%2Froute&page=%2Fapi%2Froadmap%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froadmap%2Froute.ts&appDir=D%3A%5Cportfolio.v2%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cportfolio.v2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();