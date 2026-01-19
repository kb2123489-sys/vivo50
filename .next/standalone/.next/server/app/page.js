(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 72934:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ 54580:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ 45869:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ 20399:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");

/***/ }),

/***/ 57147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 71017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 57310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 44618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_5___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var C_Users_94362_Downloads_vme_src_app_page_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6032);
/* harmony import */ var C_Users_94362_Downloads_vme_src_app_layout_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8485);
/* harmony import */ var C_Users_94362_Downloads_vme_src_app_not_found_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94348);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23191);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88716);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37922);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95231);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_6__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


"TURBOPACK { transition: next-ssr }";


// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6032)), "C:\\Users\\94362\\Downloads\\vme\\src\\app\\page.tsx"],
          metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 19459))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
        }]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8485)), "C:\\Users\\94362\\Downloads\\vme\\src\\app\\layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 94348)), "C:\\Users\\94362\\Downloads\\vme\\src\\app\\not-found.tsx"],
        metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 19459))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
      }
      ]
      }.children;
const pages = ["C:\\Users\\94362\\Downloads\\vme\\src\\app\\page.tsx"];


const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_3__.AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_4__.RouteKind.APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 4349:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 92481, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 99347));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 69843));


/***/ }),

/***/ 99347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RefreshJokeButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10326);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17577);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35047);
/* __next_internal_client_entry_do_not_use__ default auto */ 


/**
 * 刷新段子按钮组件
 * 职责：提供"换个段子"按钮功能，随机切换到新段子
 */ function RefreshJokeButton({ currentJokeId }) {
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleRefresh = async ()=>{
        setIsLoading(true);
        try {
            // 获取随机段子 ID
            const res = await fetch("/api/random/id", {
                cache: "no-store"
            });
            if (!res.ok) {
                throw new Error("获取随机段子失败");
            }
            const { id } = await res.json();
            // 如果获取到的是相同的段子，再试一次
            if (id === currentJokeId) {
                const retryRes = await fetch("/api/random/id", {
                    cache: "no-store"
                });
                if (retryRes.ok) {
                    const retryData = await retryRes.json();
                    router.push(`/?joke=${retryData.id}`);
                } else {
                    router.push(`/?joke=${id}`);
                }
            } else {
                router.push(`/?joke=${id}`);
            }
        } catch (error) {
            console.error("获取随机段子失败:", error);
            // 降级方案：直接刷新页面
            router.push("/");
            router.refresh();
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex items-center justify-center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
            onClick: handleRefresh,
            disabled: isLoading,
            className: "group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-kfc-yellow to-yellow-400 px-8 py-3 font-bold text-kfc-red shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: `fa fa-refresh text-lg transition-transform duration-300 ${isLoading ? "animate-spin" : "group-hover:rotate-180"}`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: isLoading ? "正在获取..." : "再来一条"
                }),
                !isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text-sm opacity-75",
                    children: "(≧∇≦)"
                })
            ]
        })
    });
}


/***/ }),

/***/ 58585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _client_components_navigation_react_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61085);
/* harmony import */ var _client_components_navigation_react_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_client_components_navigation_react_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _client_components_navigation_react_server__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _client_components_navigation_react_server__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


//# sourceMappingURL=navigation.react-server.js.map

/***/ }),

/***/ 61085:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/** @internal */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return _redirect.RedirectType;
    },
    notFound: function() {
        return _notfound.notFound;
    },
    permanentRedirect: function() {
        return _redirect.permanentRedirect;
    },
    redirect: function() {
        return _redirect.redirect;
    }
});
const _redirect = __webpack_require__(83953);
const _notfound = __webpack_require__(16399);
class ReadonlyURLSearchParamsError extends Error {
    constructor(){
        super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams");
    }
}
class ReadonlyURLSearchParams extends URLSearchParams {
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ append() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ delete() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ set() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ sort() {
        throw new ReadonlyURLSearchParamsError();
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.react-server.js.map


/***/ }),

/***/ 16399:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isNotFoundError: function() {
        return isNotFoundError;
    },
    notFound: function() {
        return notFound;
    }
});
const NOT_FOUND_ERROR_CODE = "NEXT_NOT_FOUND";
function notFound() {
    // eslint-disable-next-line no-throw-literal
    const error = new Error(NOT_FOUND_ERROR_CODE);
    error.digest = NOT_FOUND_ERROR_CODE;
    throw error;
}
function isNotFoundError(error) {
    if (typeof error !== "object" || error === null || !("digest" in error)) {
        return false;
    }
    return error.digest === NOT_FOUND_ERROR_CODE;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found.js.map


/***/ }),

/***/ 8586:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "RedirectStatusCode", ({
    enumerable: true,
    get: function() {
        return RedirectStatusCode;
    }
}));
var RedirectStatusCode;
(function(RedirectStatusCode) {
    RedirectStatusCode[RedirectStatusCode["SeeOther"] = 303] = "SeeOther";
    RedirectStatusCode[RedirectStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    RedirectStatusCode[RedirectStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
})(RedirectStatusCode || (RedirectStatusCode = {}));
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-status-code.js.map


/***/ }),

/***/ 83953:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RedirectType: function() {
        return RedirectType;
    },
    getRedirectError: function() {
        return getRedirectError;
    },
    getRedirectStatusCodeFromError: function() {
        return getRedirectStatusCodeFromError;
    },
    getRedirectTypeFromError: function() {
        return getRedirectTypeFromError;
    },
    getURLFromRedirectError: function() {
        return getURLFromRedirectError;
    },
    isRedirectError: function() {
        return isRedirectError;
    },
    permanentRedirect: function() {
        return permanentRedirect;
    },
    redirect: function() {
        return redirect;
    }
});
const _requestasyncstorageexternal = __webpack_require__(54580);
const _actionasyncstorageexternal = __webpack_require__(72934);
const _redirectstatuscode = __webpack_require__(8586);
const REDIRECT_ERROR_CODE = "NEXT_REDIRECT";
var RedirectType;
(function(RedirectType) {
    RedirectType["push"] = "push";
    RedirectType["replace"] = "replace";
})(RedirectType || (RedirectType = {}));
function getRedirectError(url, type, statusCode) {
    if (statusCode === void 0) statusCode = _redirectstatuscode.RedirectStatusCode.TemporaryRedirect;
    const error = new Error(REDIRECT_ERROR_CODE);
    error.digest = REDIRECT_ERROR_CODE + ";" + type + ";" + url + ";" + statusCode + ";";
    const requestStore = _requestasyncstorageexternal.requestAsyncStorage.getStore();
    if (requestStore) {
        error.mutableCookies = requestStore.mutableCookies;
    }
    return error;
}
function redirect(/** The URL to redirect to */ url, type) {
    if (type === void 0) type = "replace";
    const actionStore = _actionasyncstorageexternal.actionAsyncStorage.getStore();
    throw getRedirectError(url, type, // as we don't want the POST request to follow the redirect,
    // as it could result in erroneous re-submissions.
    (actionStore == null ? void 0 : actionStore.isAction) ? _redirectstatuscode.RedirectStatusCode.SeeOther : _redirectstatuscode.RedirectStatusCode.TemporaryRedirect);
}
function permanentRedirect(/** The URL to redirect to */ url, type) {
    if (type === void 0) type = "replace";
    const actionStore = _actionasyncstorageexternal.actionAsyncStorage.getStore();
    throw getRedirectError(url, type, // as we don't want the POST request to follow the redirect,
    // as it could result in erroneous re-submissions.
    (actionStore == null ? void 0 : actionStore.isAction) ? _redirectstatuscode.RedirectStatusCode.SeeOther : _redirectstatuscode.RedirectStatusCode.PermanentRedirect);
}
function isRedirectError(error) {
    if (typeof error !== "object" || error === null || !("digest" in error) || typeof error.digest !== "string") {
        return false;
    }
    const [errorCode, type, destination, status] = error.digest.split(";", 4);
    const statusCode = Number(status);
    return errorCode === REDIRECT_ERROR_CODE && (type === "replace" || type === "push") && typeof destination === "string" && !isNaN(statusCode) && statusCode in _redirectstatuscode.RedirectStatusCode;
}
function getURLFromRedirectError(error) {
    if (!isRedirectError(error)) return null;
    // Slices off the beginning of the digest that contains the code and the
    // separating ';'.
    return error.digest.split(";", 3)[2];
}
function getRedirectTypeFromError(error) {
    if (!isRedirectError(error)) {
        throw new Error("Not a redirect error");
    }
    return error.digest.split(";", 2)[1];
}
function getRedirectStatusCodeFromError(error) {
    if (!isRedirectError(error)) {
        throw new Error("Not a redirect error");
    }
    return Number(error.digest.split(";", 4)[3]);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect.js.map


/***/ }),

/***/ 6032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Page)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(19510);
// EXTERNAL MODULE: ./src/components/shared/FormattedDate.tsx
var FormattedDate = __webpack_require__(54174);
// EXTERNAL MODULE: ./node_modules/next/dist/api/image.js
var api_image = __webpack_require__(17710);
// EXTERNAL MODULE: ./src/components/shared/CopyButton.tsx
var CopyButton = __webpack_require__(88137);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(68570);
;// CONCATENATED MODULE: ./src/components/jokes/RefreshJokeButton.tsx

/* harmony default export */ const RefreshJokeButton = ((0,module_proxy.createProxy)(String.raw`C:\Users\94362\Downloads\vme\src\components\jokes\RefreshJokeButton.tsx#default`));

// EXTERNAL MODULE: ./src/lib/server-utils.ts
var server_utils = __webpack_require__(34843);
;// CONCATENATED MODULE: ./src/components/jokes/Detail.tsx






/**
 * 段子详情组件（服务端）
 * 职责：展示单个段子的完整信息
 */ async function JokeDetail({ jokeId }) {
    // 从所有段子中查找指定 ID 的段子
    const allJokes = await (0,server_utils.getAllKfcItems)();
    const joke = allJokes.find((item)=>item.id === jokeId);
    if (!joke) {
        return /*#__PURE__*/ react_jsx_runtime.jsx("section", {
            className: "mb-12",
            children: /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                className: "relative overflow-hidden rounded-2xl bg-white p-6 shadow-kfc md:p-8",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                    className: "text-center text-gray-500 py-8",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                            className: "mb-4 text-4xl",
                            children: "\uD83D\uDE35"
                        }),
                        /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                            className: "text-lg",
                            children: "找不到这个段子"
                        })
                    ]
                })
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime.jsx("section", {
        className: "mb-12",
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
            className: "relative border-4 border-black bg-white p-6 shadow-neo-xl md:p-10 lg:p-12",
            children: [
                /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                    className: "absolute inset-0 z-0 opacity-5 bg-halftone pointer-events-none"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                    className: "relative z-10",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "mb-8 flex flex-wrap items-center justify-between gap-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                    className: "inline-block -rotate-2 border-2 border-black bg-kfc-red px-4 py-1 text-sm font-black uppercase italic text-white shadow-neo-sm",
                                    children: "Today's Special / 今日主打"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("h2", {
                                    className: "text-2xl font-black italic tracking-tighter text-black md:text-3xl",
                                    children: [
                                        "周四限定 ",
                                        /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                            className: "text-kfc-red underline",
                                            children: "文案鬼才"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "mb-10",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                    className: "border-3 border-black bg-kfc-cream p-6 shadow-neo md:p-8",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                        className: "text-2xl font-black italic leading-tight text-black md:text-4xl lg:text-5xl",
                                        children: [
                                            "“",
                                            joke.body,
                                            "”"
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                    className: "mt-4 flex justify-end",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(CopyButton["default"], {
                                        text: joke.body
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "mb-8 flex flex-wrap items-center justify-between gap-6 border-t-4 border-black pt-8",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                            className: "border-3 border-black bg-white p-1 shadow-neo-sm",
                                            children: /*#__PURE__*/ react_jsx_runtime.jsx(api_image["default"], {
                                                src: joke.author.avatarUrl,
                                                alt: "用户头像",
                                                width: 64,
                                                height: 64,
                                                className: "h-14 w-14 object-cover md:h-20 md:w-20"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                            className: "flex flex-col leading-none",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                    className: "text-xl font-black uppercase italic text-black md:text-2xl",
                                                    children: [
                                                        "Creator: ",
                                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("span", {
                                                            className: "text-kfc-red",
                                                            children: [
                                                                "@",
                                                                joke.author.username
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                    className: "mt-2 flex items-center gap-2 text-xs font-bold uppercase text-gray-500 md:text-sm",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime.jsx("i", {
                                                            className: "fa fa-calendar text-black"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime.jsx(FormattedDate.FormattedDate, {
                                                            date: joke.createdAt
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                    className: "flex items-center gap-4",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "flex items-center gap-2 text-sm text-gray-600",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime.jsx("i", {
                                                className: "fa fa-heart"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("span", {
                                                children: [
                                                    joke.reactions?.totalCount || 0,
                                                    " reactions"
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                            className: "flex justify-center",
                            children: /*#__PURE__*/ react_jsx_runtime.jsx(RefreshJokeButton, {
                                currentJokeId: joke.id
                            })
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/next/dist/api/navigation.react-server.js
var navigation_react_server = __webpack_require__(58585);
;// CONCATENATED MODULE: ./src/app/page.tsx




async function Page({ searchParams }) {
    // 如果没有提供 joke 参数，获取随机段子并重定向
    if (!searchParams.joke) {
        const randomJoke = await (0,server_utils.getRandomKfcItem)();
        (0,navigation_react_server.redirect)(`/?joke=${randomJoke.id}`);
    }
    // 验证 jokeId 是否存在
    const allJokes = await (0,server_utils.getAllKfcItems)();
    const jokeExists = allJokes.some((item)=>item.id === searchParams.joke);
    // 如果 joke ID 不存在，获取随机段子并重定向
    if (!jokeExists) {
        const randomJoke = await (0,server_utils.getRandomKfcItem)();
        (0,navigation_react_server.redirect)(`/?joke=${randomJoke.id}`);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "container mx-auto px-4 py-8 md:py-16",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "relative mb-16 text-center md:mb-24",
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                        className: "absolute -top-10 left-0 -rotate-12 border-2 border-black bg-white px-4 py-1 text-sm font-black uppercase shadow-neo-sm md:text-base",
                        children: "Every Thursday"
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                        className: "absolute -right-5 top-0 rotate-12 border-2 border-black bg-kfc-yellow px-4 py-1 text-sm font-black uppercase shadow-neo-sm md:text-base",
                        children: "V Me 50"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("h1", {
                        className: "mb-6 text-6xl font-black italic tracking-tighter text-black md:text-8xl lg:text-9xl",
                        children: [
                            "疯狂",
                            /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                className: "text-kfc-red underline decoration-black decoration-8 underline-offset-8",
                                children: "星期四"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                        className: "mx-auto max-w-3xl border-4 border-black bg-white p-4 shadow-neo",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                            className: "text-lg font-black uppercase leading-tight md:text-2xl",
                            children: [
                                "Copy. Paste. Get v50. ",
                                /*#__PURE__*/ react_jsx_runtime.jsx("br", {}),
                                "在这里，炸鸡是配角，段子才是灵魂。"
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "mb-20",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "mb-6 flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                className: "bg-black px-4 py-1 text-lg font-black uppercase italic text-white shadow-neo-sm",
                                children: "Top Headline / 头条"
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                className: "h-1 flex-1 bg-black"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(JokeDetail, {
                        jokeId: searchParams.joke
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "grid gap-6 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "group border-3 border-black bg-white p-6 shadow-neo transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo-xl",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                className: "mb-4 flex h-12 w-12 items-center justify-center border-2 border-black bg-kfc-red text-white shadow-neo-sm",
                                children: /*#__PURE__*/ react_jsx_runtime.jsx("i", {
                                    className: "fa fa-list text-2xl"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx("h3", {
                                className: "mb-2 text-2xl font-black uppercase italic",
                                children: "文案仓库"
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                className: "mb-6 font-bold text-gray-600",
                                children: "历年疯四文案大赏，总有一条能骗到v50"
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx("a", {
                                href: "/jokes",
                                className: "inline-block border-2 border-black bg-black px-6 py-2 text-lg font-black uppercase italic text-white shadow-neo-sm transition-all hover:bg-kfc-red",
                                children: "Enter Gallery"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "group border-3 border-black bg-white p-6 shadow-neo transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo-xl",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                className: "mb-4 flex h-12 w-12 items-center justify-center border-2 border-black bg-kfc-yellow text-black shadow-neo-sm",
                                children: /*#__PURE__*/ react_jsx_runtime.jsx("i", {
                                    className: "fa fa-history text-2xl"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx("h3", {
                                className: "mb-2 text-2xl font-black uppercase italic",
                                children: "历史记录"
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                className: "mb-6 font-bold text-gray-600",
                                children: "查看往期精彩段子"
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx("a", {
                                href: "/jokes",
                                className: "inline-block border-2 border-black bg-black px-6 py-2 text-lg font-black uppercase italic text-white shadow-neo-sm transition-all hover:bg-kfc-yellow hover:text-black",
                                children: "View History"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [948,857,150], () => (__webpack_exec__(44618)));
module.exports = __webpack_exports__;

})();