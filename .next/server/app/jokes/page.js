(() => {
var exports = {};
exports.id = 107;
exports.ids = [107];
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

/***/ 35440:
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
/* harmony import */ var C_Users_94362_Downloads_vme_src_app_jokes_page_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71122);
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
        children: [
        'jokes',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 71122)), "C:\\Users\\94362\\Downloads\\vme\\src\\app\\jokes\\page.tsx"],
          
        }]
      },
        {
        
        metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 19459))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
      }
      ]
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
const pages = ["C:\\Users\\94362\\Downloads\\vme\\src\\app\\jokes\\page.tsx"];


const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/jokes/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_3__.AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_4__.RouteKind.APP_PAGE,
        page: "/jokes/page",
        pathname: "/jokes",
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

/***/ 73168:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 72298));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 62202));


/***/ }),

/***/ 72298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ListWithReactions)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(10326);
;// CONCATENATED MODULE: ./src/components/shared/FormattedDate.tsx

const dateFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC"
});
/**
 * 格式化日期组件
 */ function FormattedDate({ date, ...props }) {
    if (!date) {
        return /*#__PURE__*/ react_jsx_runtime.jsx("time", {
            ...props,
            children: "-"
        });
    }
    const dateObj = typeof date === "string" ? new Date(date) : date;
    if (isNaN(dateObj.getTime())) {
        return /*#__PURE__*/ react_jsx_runtime.jsx("time", {
            ...props,
            children: "Invalid Date"
        });
    }
    return /*#__PURE__*/ react_jsx_runtime.jsx("time", {
        dateTime: dateObj.toISOString(),
        ...props,
        children: dateFormatter.format(dateObj)
    });
}

// EXTERNAL MODULE: ./node_modules/next/dist/api/image.js
var api_image = __webpack_require__(46226);
// EXTERNAL MODULE: ./node_modules/next/dist/api/link.js
var api_link = __webpack_require__(90434);
// EXTERNAL MODULE: ./src/components/shared/CopyButton.tsx
var CopyButton = __webpack_require__(69843);
;// CONCATENATED MODULE: ./src/components/jokes/Card.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




/**
 * 段子卡片组件
 * 职责：展示单个段子的内容、作者信息和互动数据
 */ function JokeCard({ item, initialReactionDetails = [], initialReactionNodes = [], waitForBatchData = false }) {
    // 计算热门状态
    const totalReactions = item.reactions?.totalCount || 0;
    const isHot = totalReactions >= 10;
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "group relative border-3 border-black bg-white p-4 transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo-xl shadow-neo md:p-6",
        children: [
            isHot && /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                className: "absolute -right-2 -top-2 z-10 -rotate-3 border-2 border-black bg-kfc-yellow px-3 py-1 text-xs font-black uppercase italic text-black shadow-neo-sm",
                children: "HOT! 爆款"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                        className: "text-justify-cn text-base font-bold leading-snug text-black whitespace-pre-wrap line-clamp-6 md:text-lg",
                        children: item.body
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "mt-4 flex items-center justify-between gap-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime.jsx(api_link["default"], {
                                href: `/jokes/${item.id}`,
                                className: "border-2 border-black bg-white px-3 py-1 text-xs font-black uppercase tracking-tighter transition-all hover:bg-black hover:text-white",
                                children: "Read More / 详情"
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx(CopyButton["default"], {
                                text: item.body
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "flex flex-col gap-3 border-t-2 border-black pt-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                        className: "flex items-center justify-between",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                    className: "border-2 border-black shadow-neo-sm",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(api_image["default"], {
                                        src: item.author.avatarUrl,
                                        alt: `${item.author.username}的头像`,
                                        width: 40,
                                        height: 40,
                                        className: "h-8 w-8 object-cover md:h-10 md:w-10"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col leading-none",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("span", {
                                            className: "text-sm font-black text-black",
                                            children: [
                                                "@",
                                                item.author.username
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                            className: "mt-1 text-[10px] font-bold uppercase text-gray-500",
                                            children: /*#__PURE__*/ react_jsx_runtime.jsx(FormattedDate, {
                                                date: item.createdAt
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                        className: "min-w-0 overflow-hidden pt-1",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "flex items-center gap-2 text-sm text-gray-600",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime.jsx("i", {
                                    className: "fa fa-heart"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("span", {
                                    children: [
                                        totalReactions,
                                        " reactions"
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/jokes/ListWithReactions.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

/**
 * 段子列表（带批量反应数据注入）
 * 职责：批量获取所有段子的互动数据，并注入到各个卡片
 */ function ListWithReactions({ items }) {
    return /*#__PURE__*/ react_jsx_runtime.jsx("div", {
        className: "space-y-6",
        children: items.map((item)=>{
            return /*#__PURE__*/ react_jsx_runtime.jsx(JokeCard, {
                item: item
            }, item.id);
        })
    });
}


/***/ }),

/***/ 71122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ JokesPage)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(19510);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react.js
var react = __webpack_require__(71159);
// EXTERNAL MODULE: ./src/components/shared/Pagination.tsx
var Pagination = __webpack_require__(80440);
// EXTERNAL MODULE: ./src/lib/server-utils.ts
var server_utils = __webpack_require__(34843);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(68570);
;// CONCATENATED MODULE: ./src/components/jokes/ListWithReactions.tsx

/* harmony default export */ const ListWithReactions = ((0,module_proxy.createProxy)(String.raw`C:\Users\94362\Downloads\vme\src\components\jokes\ListWithReactions.tsx#default`));

;// CONCATENATED MODULE: ./src/components/jokes/List.tsx




/**
 * 段子列表容器（服务端组件）
 * 职责：获取分页数据，渲染列表结构
 */ async function JokesList({ currentPage }) {
    const { items, totalPages, total } = await (0,server_utils.getKfcItemsWithPagination)(currentPage, 10);
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("section", {
        id: "jokes-list",
        className: "mb-12",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "mb-8 flex items-center justify-between border-b-4 border-black pb-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("h2", {
                        className: "flex items-center gap-2 text-2xl font-black uppercase italic text-black md:text-3xl",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime.jsx("i", {
                                className: "fa fa-folder-open text-kfc-red"
                            }),
                            " All Entries"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                        className: "flex items-center gap-2 border-2 border-black bg-kfc-yellow px-4 py-1 shadow-neo-sm",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("span", {
                            className: "text-sm font-bold uppercase text-black",
                            children: [
                                "Total: ",
                                /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                    className: "font-black",
                                    children: total
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx(ListWithReactions, {
                items: items
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx(Pagination["default"], {
                currentPage: currentPage,
                totalPages: totalPages,
                totalItems: total,
                pageSize: 10
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/app/jokes/page.tsx



async function JokesPage({ searchParams }) {
    // 从URL参数获取页码
    const page = parseInt(searchParams.page || "1");
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "container mx-auto px-4 py-8",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "mb-12 text-center md:mb-16",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("h1", {
                        className: "mb-6 text-5xl font-black italic tracking-tighter text-black md:text-7xl",
                        children: [
                            "文案",
                            /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                className: "text-kfc-red underline decoration-4 underline-offset-4",
                                children: "总仓库"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                        className: "inline-block rotate-1 border-2 border-black bg-black px-6 py-2 shadow-neo-sm",
                        children: /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                            className: "font-bold uppercase text-white md:text-lg",
                            children: "ARCHIVE: 历年疯四文案大赏"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx(react.Suspense, {
                fallback: /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                    className: "flex h-64 items-center justify-center border-4 border-black bg-white p-8 shadow-neo",
                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "flex flex-col items-center gap-4 text-black",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime.jsx("i", {
                                className: "fa fa-spinner fa-spin text-4xl"
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                className: "text-xl font-black uppercase",
                                children: "Loading Archives..."
                            })
                        ]
                    })
                }),
                children: /*#__PURE__*/ react_jsx_runtime.jsx(JokesList, {
                    currentPage: page
                })
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                className: "mt-16 text-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("a", {
                    href: "/",
                    className: "inline-flex items-center gap-2 border-2 border-black bg-white px-8 py-3 font-black uppercase text-black shadow-neo transition-all hover:bg-black hover:text-white hover:shadow-none",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime.jsx("i", {
                            className: "fa fa-home"
                        }),
                        "Back to Home"
                    ]
                })
            })
        ]
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [948,857,150], () => (__webpack_exec__(35440)));
module.exports = __webpack_exports__;

})();