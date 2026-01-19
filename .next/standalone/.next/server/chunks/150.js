exports.id = 150;
exports.ids = [150];
exports.modules = {

/***/ 35270:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 54452));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 92481, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 42126));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 69843));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 47710));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 33958));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 54298));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 62202));


/***/ }),

/***/ 48918:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 12994, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 96114, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9727, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 79671, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 41868, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 84759, 23));


/***/ }),

/***/ 74142:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 79404, 23));


/***/ }),

/***/ 42126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Providers: () => (/* binding */ Providers)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10326);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3574);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77109);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ Providers auto */ 


function Providers({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_themes__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {
            attribute: "class",
            defaultTheme: "system",
            enableSystem: true,
            disableTransitionOnChange: true,
            children: children
        })
    });
}


/***/ }),

/***/ 69843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CopyButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10326);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17577);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/**
 * 复制按钮组件
 */ function CopyButton({ text, className = "" }) {
    const [copied, setCopied] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleCopy = async ()=>{
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000);
        } catch (err) {
            console.error("复制失败:", err);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        onClick: handleCopy,
        className: `flex items-center gap-1 rounded-lg bg-transparent px-2 py-1 text-xs text-gray-500 transition-all duration-300 hover:bg-gray-100 hover:text-gray-700 ${className}`,
        title: "复制文案",
        children: copied ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "fa fa-check text-green-600"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text-xs",
                    children: "已复制"
                })
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "fa fa-copy text-xs"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text-xs",
                    children: "复制"
                })
            ]
        })
    });
}


/***/ }),

/***/ 47710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10326);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17577);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46226);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90434);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35047);
/* harmony import */ var _components_shared_LoginButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33958);
/* __next_internal_client_entry_do_not_use__ default auto */ 





function Header({ contributorsCount }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();
    const toggleMobileMenu = ()=>{
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const closeMobileMenu = ()=>{
        setIsMobileMenuOpen(false);
    };
    const navLinks = [
        {
            label: "文案仓库",
            href: "/jokes"
        },
        {
            label: "系统状态",
            href: "/status"
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: "sticky top-0 z-50 border-b-4 border-black bg-kfc-red text-white shadow-neo-sm",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center justify-between py-2 md:py-3",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    type: "button",
                                    className: "flex h-10 w-10 flex-col items-center justify-center gap-1 border-2 border-black bg-white shadow-neo-sm transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none lg:hidden",
                                    onClick: toggleMobileMenu,
                                    "aria-label": "切换菜单",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: `h-1 w-6 bg-black transition-all ${isMobileMenuOpen ? "translate-y-2 rotate-45" : ""}`
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: `h-1 w-6 bg-black transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: `h-1 w-6 bg-black transition-all ${isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                    href: "/",
                                    className: "group flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "border-2 border-black bg-white p-0.5 shadow-neo-sm transition-transform group-hover:-rotate-3",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                src: "/images/logo.jpg",
                                                alt: "KFC",
                                                width: 44,
                                                height: 44,
                                                className: "h-9 w-9 object-cover lg:h-11 lg:w-11"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "hidden flex-col leading-none sm:flex",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                    className: "text-xl font-black italic tracking-tighter text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] lg:text-2xl",
                                                    children: [
                                                        "疯狂星期四",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-kfc-yellow",
                                                            children: "VME50"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-[10px] font-bold uppercase tracking-widest text-white/90",
                                                    children: "Crazy Thursday News Portal"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                            className: "hidden items-center gap-3 lg:flex",
                            children: navLinks.map((link)=>{
                                const isActive = pathname === link.href || link.href !== "/" && pathname?.startsWith(link.href);
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                    href: link.href,
                                    className: `border-2 border-black px-4 py-1.5 text-sm font-black transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none ${isActive ? "bg-kfc-yellow text-black shadow-neo-sm" : "bg-white text-black shadow-neo-sm hover:bg-gray-50"}`,
                                    children: link.label
                                }, link.href);
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex items-center gap-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shared_LoginButton__WEBPACK_IMPORTED_MODULE_5__["default"], {})
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `border-t-4 border-black bg-kfc-cream lg:hidden ${isMobileMenuOpen ? "block" : "hidden"}`,
                    style: {
                        animation: isMobileMenuOpen ? "slideDown 0.3s ease-out" : "none"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                        className: "flex flex-col gap-2 p-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                href: "/",
                                onClick: closeMobileMenu,
                                className: `block border-2 border-black px-4 py-3 text-sm font-black text-black shadow-neo-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${pathname === "/" ? "bg-kfc-yellow" : "bg-white"}`,
                                children: "首页"
                            }),
                            navLinks.map((link)=>{
                                const isActive = pathname === link.href || link.href !== "/" && pathname?.startsWith(link.href);
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                    href: link.href,
                                    onClick: closeMobileMenu,
                                    className: `block border-2 border-black px-4 py-3 text-sm font-black text-black shadow-neo-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${isActive ? "bg-kfc-yellow" : "bg-white"}`,
                                    children: link.label
                                }, link.href);
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mt-2 border-2 border-black bg-kfc-red px-4 py-2 text-xs font-bold text-white shadow-neo-sm",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-kfc-yellow",
                                        children: contributorsCount
                                    }),
                                    " ",
                                    "位 \uD83C\uDF57 信徒在线"
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 33958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10326);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77109);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46226);
/* __next_internal_client_entry_do_not_use__ default auto */ 


/**
 * 登录/登出按钮组件
 */ function LoginButton() {
    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();
    if (status === "loading") {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex items-center gap-2 rounded-full bg-white/10 px-3 py-2",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "h-4 w-4 animate-spin rounded-full border-2 border-kfc-yellow border-t-transparent"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text-sm text-white",
                    children: "加载中..."
                })
            ]
        });
    }
    if (session) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex items-center gap-2 sm:gap-3",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center gap-2 rounded-full bg-white/10 px-3 py-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            src: session.user?.image || "/default-avatar.png",
                            alt: "用户头像",
                            width: 24,
                            height: 24,
                            className: "h-6 w-6 rounded-full border border-kfc-yellow"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "max-w-[80px] truncate text-sm font-medium text-white sm:max-w-[120px]",
                            children: session.user?.username
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)(),
                    className: "min-h-[36px] rounded-full bg-white/10 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20",
                    children: "退出登录"
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)("github"),
        className: "flex items-center gap-2 rounded-full bg-kfc-yellow px-4 py-2 text-sm font-bold text-kfc-red transition-all duration-300 hover:bg-kfc-lightYellow hover:shadow-md shadow-sm",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                className: "h-5 w-5",
                fill: "currentColor",
                viewBox: "0 0 24 24",
                "aria-hidden": "true",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fillRule: "evenodd",
                    d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                    clipRule: "evenodd"
                })
            }),
            "登录"
        ]
    });
}


/***/ }),

/***/ 54298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  showLoginDialog: () => (/* binding */ showLoginDialog)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(10326);
// EXTERNAL MODULE: ./node_modules/next-auth/react/index.js
var react = __webpack_require__(77109);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js
var ssr_react = __webpack_require__(17577);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react-dom/client.js
var client = __webpack_require__(11411);
;// CONCATENATED MODULE: ./src/lib/modalManager.tsx
/* __next_internal_client_entry_do_not_use__ modal auto */ 


class ModalManager {
    ensureContainer() {
        if (!this.container) {
            this.container = document.createElement("div");
            this.container.id = "modal-container";
            document.body.appendChild(this.container);
        }
        return this.container;
    }
    render() {
        const container = this.ensureContainer();
        if (!this.root) {
            this.root = (0,client.createRoot)(container);
        }
        const modalArray = Array.from(this.modals.entries());
        // 更新 body 滚动状态
        if (modalArray.length > 0) {
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = "0px" // 防止滚动条消失导致的跳动
            ;
        } else {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        }
        this.root.render(/*#__PURE__*/ react_jsx_runtime.jsx(react_jsx_runtime.Fragment, {
            children: modalArray.map(([id, config], index)=>/*#__PURE__*/ react_jsx_runtime.jsx(ModalPortal, {
                    id: id,
                    config: config,
                    zIndex: config.zIndex || this.baseZIndex + index * 10,
                    onClose: ()=>this.close(id)
                }, id))
        }));
    }
    open(config) {
        const id = `modal-${Date.now()}-${Math.random()}`;
        this.modals.set(id, config);
        this.render();
        return {
            close: ()=>this.close(id),
            update: (content)=>this.update(id, content)
        };
    }
    close(id) {
        const config = this.modals.get(id);
        if (config?.onClose) {
            config.onClose();
        }
        this.modals.delete(id);
        this.render();
    }
    update(id, content) {
        const config = this.modals.get(id);
        if (config) {
            this.modals.set(id, {
                ...config,
                content
            });
            this.render();
        }
    }
    closeAll() {
        this.modals.clear();
        this.render();
    }
    constructor(){
        this.container = null;
        this.root = null;
        this.modals = new Map();
        this.baseZIndex = 9999;
    }
}
// 单例模式
const modal = new ModalManager();
// Portal 组件
function ModalPortal({ id, config, zIndex, onClose }) {
    const { content, closeOnBackdrop = true, closeOnEsc = true } = config;
    // ESC 键关闭
    null;
    const handleBackdropClick = (e)=>{
        if (closeOnBackdrop && e.target === e.currentTarget) {
            onClose();
        }
    };
    return /*#__PURE__*/ react_jsx_runtime.jsx("div", {
        "data-modal": "true",
        "data-modal-id": id,
        className: "fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 animate-in fade-in duration-200",
        style: {
            zIndex
        },
        onClick: handleBackdropClick,
        children: content
    });
}

;// CONCATENATED MODULE: ./src/components/shared/LoginDialog.tsx
/* __next_internal_client_entry_do_not_use__ showLoginDialog auto */ 



/**
 * 登录确认对话框内容
 */ function LoginConfirmDialogContent({ onClose, title = "需要登录", message = "此操作需要登录 GitHub 账号，是否现在登录？" }) {
    const [isLoading, setIsLoading] = (0,ssr_react.useState)(false);
    const handleConfirm = async ()=>{
        setIsLoading(true);
        try {
            await (0,react.signIn)("github", {
                callbackUrl: window.location.href
            });
        } catch (error) {
            console.error("登录失败:", error);
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl animate-in zoom-in duration-200",
        onClick: (e)=>e.stopPropagation(),
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx("button", {
                onClick: onClose,
                className: "absolute right-4 top-4 text-gray-400 transition-colors hover:text-gray-600",
                disabled: isLoading,
                children: /*#__PURE__*/ react_jsx_runtime.jsx("svg", {
                    className: "h-6 w-6",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /*#__PURE__*/ react_jsx_runtime.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M6 18L18 6M6 6l12 12"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                className: "mb-4 flex justify-center",
                children: /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                    className: "flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-kfc-red to-orange-500",
                    children: /*#__PURE__*/ react_jsx_runtime.jsx("svg", {
                        className: "h-8 w-8 text-white",
                        fill: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ react_jsx_runtime.jsx("path", {
                            fillRule: "evenodd",
                            d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                            clipRule: "evenodd"
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx("h3", {
                className: "mb-3 text-center text-2xl font-bold text-gray-900",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                className: "mb-6 text-center text-gray-600",
                children: message
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                className: "mb-6 rounded-lg bg-blue-50 p-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                    className: "flex items-start gap-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime.jsx("svg", {
                            className: "mt-0.5 h-5 w-5 flex-shrink-0 text-blue-500",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            children: /*#__PURE__*/ react_jsx_runtime.jsx("path", {
                                fillRule: "evenodd",
                                d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
                                clipRule: "evenodd"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "text-sm text-blue-800",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                    className: "mb-1 font-medium",
                                    children: "登录后您可以："
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("ul", {
                                    className: "space-y-1 text-blue-700",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime.jsx("li", {
                                            children: "• 给喜欢的文案点赞"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime.jsx("li", {
                                            children: "• 提交自己的创意文案"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime.jsx("li", {
                                            children: "• 参与社区互动"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "flex gap-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx("button", {
                        onClick: onClose,
                        disabled: isLoading,
                        className: "flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50",
                        children: "取消"
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx("button", {
                        onClick: handleConfirm,
                        disabled: isLoading,
                        className: "flex-1 rounded-lg bg-gradient-to-r from-kfc-red to-orange-500 px-4 py-3 font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl disabled:scale-100 disabled:cursor-not-allowed disabled:opacity-50",
                        children: isLoading ? /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("span", {
                            className: "flex items-center justify-center gap-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                    className: "h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"
                                }),
                                "登录中..."
                            ]
                        }) : "使用 GitHub 登录"
                    })
                ]
            })
        ]
    });
}
function showLoginDialog(options = {}) {
    const instance = modal.open({
        content: /*#__PURE__*/ react_jsx_runtime.jsx(LoginConfirmDialogContent, {
            onClose: ()=>{
                instance.close();
                options.onClose?.();
            },
            title: options.title,
            message: options.message
        }),
        closeOnBackdrop: true,
        closeOnEsc: true
    });
    return instance;
}


/***/ }),

/***/ 62202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10326);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90434);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35047);
/* __next_internal_client_entry_do_not_use__ default auto */ 


/**
 * 分页组件
 */ function Pagination({ currentPage, totalPages, totalItems, pageSize }) {
    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();
    if (totalPages <= 1) return null;
    const generatePageNumbers = ()=>{
        const pages = [];
        // 使用较小的页码数量，适配移动端
        const maxVisible = 3;
        if (totalPages <= maxVisible) {
            for(let i = 1; i <= totalPages; i++){
                pages.push(i);
            }
        } else {
            const halfVisible = Math.floor(maxVisible / 2);
            if (currentPage <= halfVisible + 1) {
                for(let i = 1; i <= maxVisible; i++){
                    pages.push(i);
                }
            } else if (currentPage >= totalPages - halfVisible) {
                for(let i = totalPages - maxVisible + 1; i <= totalPages; i++){
                    pages.push(i);
                }
            } else {
                for(let i = currentPage - halfVisible; i <= currentPage + halfVisible; i++){
                    pages.push(i);
                }
            }
        }
        return pages;
    };
    const pageNumbers = generatePageNumbers();
    const buildUrl = (page)=>{
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", page.toString());
        return `?${params.toString()}`;
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mt-12 border-t-2 border-black pt-8",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mb-6 flex flex-col items-center justify-between gap-4 sm:flex-row",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-sm font-bold uppercase text-black",
                        children: [
                            "Showing",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "bg-kfc-yellow px-1",
                                children: (currentPage - 1) * pageSize + 1
                            }),
                            " ",
                            "-",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "bg-kfc-yellow px-1",
                                children: Math.min(currentPage * pageSize, totalItems)
                            }),
                            " ",
                            "of",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "font-black text-kfc-red",
                                children: totalItems
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-sm font-bold uppercase text-black",
                        children: [
                            "Page ",
                            currentPage,
                            " / ",
                            totalPages
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                className: "flex justify-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                        currentPage > 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            scroll: false,
                            href: buildUrl(currentPage - 1),
                            className: "flex min-h-[44px] min-w-[44px] items-center justify-center border-2 border-black bg-white text-black shadow-neo-sm transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white hover:shadow-none",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fa fa-chevron-left text-sm"
                            })
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex min-h-[44px] min-w-[44px] cursor-not-allowed items-center justify-center border-2 border-black bg-gray-100 text-gray-400 opacity-50 shadow-neo-sm",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fa fa-chevron-left text-sm"
                            })
                        }),
                        pageNumbers[0] > 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                    scroll: false,
                                    href: buildUrl(1),
                                    className: "flex min-h-[44px] min-w-[44px] items-center justify-center border-2 border-black bg-white font-black text-black shadow-neo-sm transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white hover:shadow-none",
                                    children: "1"
                                }),
                                pageNumbers[0] > 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "flex min-h-[44px] min-w-[44px] items-center justify-center font-black text-black",
                                    children: "..."
                                })
                            ]
                        }),
                        pageNumbers.map((page)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                scroll: false,
                                href: buildUrl(page),
                                className: `flex min-h-[44px] min-w-[44px] items-center justify-center border-2 border-black font-black shadow-neo-sm transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none ${currentPage === page ? "bg-kfc-red text-white" : "bg-white text-black hover:bg-black hover:text-white"}`,
                                children: page
                            }, page)),
                        pageNumbers[pageNumbers.length - 1] < totalPages && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                pageNumbers[pageNumbers.length - 1] < totalPages - 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "flex min-h-[44px] min-w-[44px] items-center justify-center font-black text-black",
                                    children: "..."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                    scroll: false,
                                    href: buildUrl(totalPages),
                                    className: "flex min-h-[44px] min-w-[44px] items-center justify-center border-2 border-black bg-white font-black text-black shadow-neo-sm transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white hover:shadow-none",
                                    children: totalPages
                                })
                            ]
                        }),
                        currentPage < totalPages ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            scroll: false,
                            href: buildUrl(currentPage + 1),
                            className: "flex min-h-[44px] min-w-[44px] items-center justify-center border-2 border-black bg-white text-black shadow-neo-sm transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white hover:shadow-none",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fa fa-chevron-right text-sm"
                            })
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex min-h-[44px] min-w-[44px] cursor-not-allowed items-center justify-center border-2 border-black bg-gray-100 text-gray-400 opacity-50 shadow-neo-sm",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fa fa-chevron-right text-sm"
                            })
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 8485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(19510);
// EXTERNAL MODULE: ./node_modules/next/font/local/target.css?{"path":"src\\app\\layout.tsx","import":"","arguments":[{"src":"../fonts/Mona-Sans.var.woff2","display":"swap","variable":"--font-mona-sans","weight":"200 900"}],"variableName":"monaSans"}
var Mona_Sans_var_woff2_display_swap_variable_font_mona_sans_weight_200_900_variableName_monaSans_ = __webpack_require__(16809);
var Mona_Sans_var_woff2_display_swap_variable_font_mona_sans_weight_200_900_variableName_monaSans_default = /*#__PURE__*/__webpack_require__.n(Mona_Sans_var_woff2_display_swap_variable_font_mona_sans_weight_200_900_variableName_monaSans_);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(55761);
// EXTERNAL MODULE: ./node_modules/@vercel/analytics/dist/next/index.mjs
var next = __webpack_require__(441);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(68570);
;// CONCATENATED MODULE: ./src/app/providers.tsx


const e0 = (0,module_proxy.createProxy)(String.raw`C:\Users\94362\Downloads\vme\src\app\providers.tsx#Providers`);

// EXTERNAL MODULE: ./src/components/shared/CopyButton.tsx
var CopyButton = __webpack_require__(88137);
// EXTERNAL MODULE: ./node_modules/next/dist/api/image.js
var api_image = __webpack_require__(17710);
;// CONCATENATED MODULE: ./src/components/shared/Footer.tsx


function Footer() {
    const currentYear = new Date().getFullYear();
    return /*#__PURE__*/ react_jsx_runtime.jsx("footer", {
        className: "border-t-4 border-black bg-black text-white",
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
            className: "container mx-auto px-4 py-8 md:py-12",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                    className: "flex flex-col items-center justify-between gap-6 md:flex-row md:gap-8",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                    className: "border-2 border-white bg-black p-1",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(api_image["default"], {
                                        src: "/images/logo.jpg",
                                        alt: "KFC",
                                        width: 50,
                                        height: 50,
                                        className: "h-10 w-10 object-cover md:h-12 md:w-12"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime.jsx("h3", {
                                            className: "text-xl font-black italic tracking-tighter text-white md:text-2xl",
                                            children: "CRAZY THURSDAY"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                            className: "text-xs font-bold uppercase tracking-widest text-white/70",
                                            children: "Official Meme Headquarters"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime.jsx("nav", {
                            className: "flex flex-wrap items-center justify-center gap-4 text-xs font-bold uppercase tracking-wider md:gap-8 md:text-sm",
                            children: [
                                "首页",
                                "文案库",
                                "状态"
                            ].map((item, index)=>{
                                const hrefs = [
                                    "/",
                                    "/jokes",
                                    "/status"
                                ];
                                return /*#__PURE__*/ react_jsx_runtime.jsx("a", {
                                    href: hrefs[index],
                                    className: "border-b-2 border-transparent hover:border-kfc-yellow hover:text-kfc-yellow transition-all",
                                    children: item
                                }, item);
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                    className: "my-6 h-0.5 bg-white/20 md:my-8"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                    className: "flex flex-col items-center justify-between gap-4 text-center text-xs md:flex-row md:text-left md:text-sm",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "font-bold text-white/60",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                    children: [
                                        "\xa9 ",
                                        currentYear,
                                        " 疯狂星期四文案大赏. All Rights Reserved."
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                    className: "mt-1 text-[10px] uppercase",
                                    children: "Not affiliated with KFC Corporation. Just for fun & memes."
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                            className: "text-center md:text-right",
                            children: /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                className: "text-base font-black italic text-kfc-yellow md:text-lg",
                                children: '"V ME 50 IS A LIFESTYLE"'
                            })
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/components/shared/FormattedDate.tsx
var FormattedDate = __webpack_require__(54174);
;// CONCATENATED MODULE: ./src/components/shared/Header.tsx

/* harmony default export */ const Header = ((0,module_proxy.createProxy)(String.raw`C:\Users\94362\Downloads\vme\src\components\shared\Header.tsx#default`));

;// CONCATENATED MODULE: ./src/components/shared/LoginButton.tsx

/* harmony default export */ const LoginButton = ((0,module_proxy.createProxy)(String.raw`C:\Users\94362\Downloads\vme\src\components\shared\LoginButton.tsx#default`));

;// CONCATENATED MODULE: ./src/components/shared/LoginDialog.tsx


const LoginDialog_e0 = (0,module_proxy.createProxy)(String.raw`C:\Users\94362\Downloads\vme\src\components\shared\LoginDialog.tsx#showLoginDialog`);

// EXTERNAL MODULE: ./src/components/shared/Pagination.tsx
var Pagination = __webpack_require__(80440);
;// CONCATENATED MODULE: ./src/components/shared/index.ts
/**
 * Shared 模块 - 共享组件
 */ 







// EXTERNAL MODULE: ./src/lib/server-utils.ts
var server_utils = __webpack_require__(34843);
// EXTERNAL MODULE: ./src/styles/tailwind.css
var tailwind = __webpack_require__(66092);
;// CONCATENATED MODULE: ./src/app/layout.tsx








const metadata = {
    title: "肯德基疯狂星期四段子收集站 | 今天你v50了吗？",
    description: "肯德基疯狂星期四的精髓，不止于炸鸡，更在于每一个让你笑出腹肌的段子。收录最搞笑的疯狂星期四段子。",
    keywords: "肯德基,疯狂星期四,段子,v50,KFC,搞笑,文案",
    alternates: {
        types: {
            "application/rss+xml": `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`
        }
    }
};
async function RootLayout({ children }) {
    const contributorsCount = await (0,server_utils.getUniqueContributorsCount)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("html", {
        lang: "zh-CN",
        className: (0,clsx["default"])("h-full antialiased", (Mona_Sans_var_woff2_display_swap_variable_font_mona_sans_weight_200_900_variableName_monaSans_default()).variable),
        suppressHydrationWarning: true,
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx("head", {
                children: /*#__PURE__*/ react_jsx_runtime.jsx("link", {
                    href: "https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css",
                    rel: "stylesheet"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("body", {
                className: "flex min-h-screen flex-col bg-kfc-cream text-gray-900",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(e0, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                className: "bg-kfc-newsprint",
                                "aria-hidden": "true"
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx(Header, {
                                contributorsCount: contributorsCount
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx("main", {
                                className: "flex flex-1 flex-col",
                                children: children
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx(Footer, {})
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(next.Analytics, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 94348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ NotFound)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(19510);
// EXTERNAL MODULE: ./node_modules/next/dist/api/link.js
var api_link = __webpack_require__(57371);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(55761);
;// CONCATENATED MODULE: ./src/components/IconLink.tsx



function IconLink({ children, className, compact = false, icon: Icon, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(api_link["default"], {
        ...props,
        className: (0,clsx["default"])(className, "group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-sky-300", compact ? "gap-x-2" : "gap-x-3"),
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                className: "absolute inset-0 -z-10 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"
            }),
            Icon && /*#__PURE__*/ react_jsx_runtime.jsx(Icon, {
                className: "h-4 w-4 flex-none"
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                className: "self-baseline text-white",
                children: children
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/app/not-found.tsx


function NotFound() {
    return /*#__PURE__*/ react_jsx_runtime.jsx("div", {
        className: "relative isolate flex flex-1 flex-col items-center justify-center overflow-hidden bg-gray-900 text-center",
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
            className: "relative z-10 max-w-2xl px-6",
            children: [
                /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                    className: "font-display text-6xl/tight font-light text-white md:text-8xl",
                    children: "404"
                }),
                /*#__PURE__*/ react_jsx_runtime.jsx("h1", {
                    className: "mt-4 font-display text-2xl/8 font-semibold text-white md:text-3xl",
                    children: "哎呀，迷路了？"
                }),
                /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                    className: "mt-4 text-lg/6 text-gray-300",
                    children: "没有这个页面，要不下星期四再来看看？"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                    className: "mt-6 rounded-2xl bg-white/5 p-6",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-center gap-3 mb-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                    className: "text-2xl",
                                    children: "\uD83C\uDF57"
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                    className: "text-kfc-yellow font-semibold",
                                    children: "今日份幽默"
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                    className: "text-2xl",
                                    children: "\uD83C\uDF57"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                            className: "text-sm text-gray-300 italic",
                            children: "“404错误就像疯狂星期四的优惠券，有时候就是找不到，但别担心，还有更多段子等着你！”"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                    className: "mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(IconLink, {
                            href: "/",
                            className: "flex items-center gap-2 rounded-xl bg-kfc-red px-6 py-3 font-bold text-white shadow-sm transition-all hover:bg-red-700 hover:shadow-md",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                    children: "\uD83C\uDFE0"
                                }),
                                "回到段子首页"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("a", {
                            href: "https://github.com/zkl2333/vme/issues/new?assignees=&labels=%E6%96%87%E6%A1%88&projects=&template=data_provided.md&title=",
                            target: "_blank",
                            className: "flex items-center gap-2 rounded-xl bg-kfc-yellow px-6 py-3 font-bold text-gray-900 shadow-sm transition-all hover:bg-yellow-500 hover:shadow-md",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                    children: "✍️"
                                }),
                                "写个新段子"
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                    className: "mt-8 text-xs text-gray-400",
                    children: /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                        children: "\uD83D\uDCA1 找不到想要的段子？不如自己写一个"
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 88137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68570);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\94362\Downloads\vme\src\components\shared\CopyButton.tsx#default`));


/***/ }),

/***/ 54174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormattedDate: () => (/* binding */ FormattedDate)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19510);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

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
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
            ...props,
            children: "-"
        });
    }
    const dateObj = typeof date === "string" ? new Date(date) : date;
    if (isNaN(dateObj.getTime())) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
            ...props,
            children: "Invalid Date"
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
        dateTime: dateObj.toISOString(),
        ...props,
        children: dateFormatter.format(dateObj)
    });
}


/***/ }),

/***/ 80440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68570);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\94362\Downloads\vme\src\components\shared\Pagination.tsx#default`));


/***/ }),

/***/ 34843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllContributors: () => (/* binding */ getAllContributors),
/* harmony export */   getAllKfcItems: () => (/* binding */ getAllKfcItems),
/* harmony export */   getAvailableMonths: () => (/* binding */ getAvailableMonths),
/* harmony export */   getKfcItemsByMonth: () => (/* binding */ getKfcItemsByMonth),
/* harmony export */   getKfcItemsWithPagination: () => (/* binding */ getKfcItemsWithPagination),
/* harmony export */   getRandomKfcItem: () => (/* binding */ getRandomKfcItem),
/* harmony export */   getSummary: () => (/* binding */ getSummary),
/* harmony export */   getTopContributors: () => (/* binding */ getTopContributors),
/* harmony export */   getUniqueContributorsCount: () => (/* binding */ getUniqueContributorsCount)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
// 服务端专用工具函数 - 包含 Node.js 模块，仅在服务端使用


const cache = {
    kfcItems: {},
    allMonths: [],
    summary: null
};
// 获取所有可用的月份文件
async function getAvailableMonths() {
    if (cache.allMonths.length) {
        return cache.allMonths;
    }
    // 从summary信息获取月份列表
    const summary = await getSummary();
    if (!summary || !summary.months || summary.months.length === 0) {
        throw new Error("无法获取月份信息：summary数据不可用");
    }
    const months = summary.months.map((item)=>item.month);
    cache.allMonths = months;
    return months;
}
// 按月获取数据
async function getKfcItemsByMonth(month) {
    // 如果已缓存，则直接返回
    if (cache.kfcItems[month]) {
        return cache.kfcItems[month];
    }
    try {
        const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().resolve(process.cwd(), "data", `${month}.json`);
        if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(filePath)) {
            return [];
        }
        const data = await fs__WEBPACK_IMPORTED_MODULE_0___default().promises.readFile(filePath, "utf-8");
        const items = JSON.parse(data);
        // 按创建时间排序
        const sortedItems = items.sort((a, b)=>{
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
        cache.kfcItems[month] = sortedItems;
        return sortedItems;
    } catch (error) {
        console.error(`Error reading data file for ${month}:`, error);
        return [];
    }
}
// 获取汇总信息
async function getSummary() {
    if (cache.summary) {
        return cache.summary;
    }
    try {
        const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().resolve(process.cwd(), "data", "summary.json");
        if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(filePath)) {
            throw new Error("汇总数据文件不存在");
        }
        const data = await fs__WEBPACK_IMPORTED_MODULE_0___default().promises.readFile(filePath, "utf-8");
        const summary = JSON.parse(data);
        if (!summary.totalItems || !Array.isArray(summary.months)) {
            throw new Error("汇总数据格式不正确");
        }
        cache.summary = summary;
        return summary;
    } catch (error) {
        console.error("读取汇总数据失败:", error);
        throw new Error(`无法获取汇总信息: ${error instanceof Error ? error.message : "未知错误"}`);
    }
}
// 获取所有KFC项目（不分页）- 服务端专用
async function getAllKfcItems() {
    const months = await getAvailableMonths();
    let allItems = [];
    // 加载所有月份的数据
    for (const month of months){
        try {
            const items = await getKfcItemsByMonth(month);
            allItems = [
                ...allItems,
                ...items
            ];
        } catch (error) {
            console.warn(`警告：无法加载${month}月的数据:`, error);
            continue; // 跳过无法加载的月份
        }
    }
    return allItems;
}
// 获取所有唯一贡献者数量
async function getUniqueContributorsCount() {
    const summary = await getSummary();
    return summary.totalContributors;
}
// 获取所有贡献者信息（不包含点赞等交互数据）
async function getAllContributors() {
    const summary = await getSummary();
    return summary.contributors;
}
// 获取排行榜贡献者（Top 10，不包含点赞等交互数据）
async function getTopContributors() {
    const summary = await getSummary();
    return summary.topContributors;
}
// 获取分页数据（使用汇总信息优化totalPages计算）
async function getKfcItemsWithPagination(page = 1, pageSize = 20) {
    const months = await getAvailableMonths();
    let allItems = [];
    // 获取汇总信息来确定正确的total和totalPages
    const summary = await getSummary();
    if (!summary) {
        throw new Error("无法获取分页信息：summary数据不可用");
    }
    const totalItems = summary.totalItems;
    // 只加载必要的月份数据，直到满足分页需求
    let itemsNeeded = page * pageSize;
    let loadedItems = 0;
    for (const month of months){
        if (loadedItems >= itemsNeeded) break;
        const items = await getKfcItemsByMonth(month);
        allItems = [
            ...allItems,
            ...items
        ];
        loadedItems += items.length;
    }
    // 计算分页结果
    const total = totalItems;
    const totalPages = Math.ceil(total / pageSize);
    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, allItems.length);
    const paginatedItems = allItems.slice(startIndex, endIndex);
    return {
        items: paginatedItems,
        total,
        page,
        pageSize,
        totalPages
    };
}
// 获取随机项目
async function getRandomKfcItem() {
    // 从summary中获取数据分布信息
    const summary = await getSummary();
    if (!summary || !summary.months || !summary.months.length) {
        throw new Error("无法获取随机项目：summary数据不可用");
    }
    // 获取所有可用的月份
    const availableMonths = summary.months;
    // 随机选择一个有数据的月份
    let selectedMonth = null;
    let items = [];
    // 随机选择一个有数据的月份，最多尝试10次
    for(let i = 0; i < 10; i++){
        const randomMonthIndex = Math.floor(Math.random() * availableMonths.length);
        const candidateMonth = availableMonths[randomMonthIndex].month;
        const monthItems = await getKfcItemsByMonth(candidateMonth);
        if (monthItems.length > 0) {
            selectedMonth = candidateMonth;
            items = monthItems;
            break;
        }
    }
    // 如果仍然没有找到有数据的月份，就从第一个有数据的月份获取
    if (!selectedMonth || items.length === 0) {
        for (const monthInfo of availableMonths){
            const monthItems = await getKfcItemsByMonth(monthInfo.month);
            if (monthItems.length > 0) {
                selectedMonth = monthInfo.month;
                items = monthItems;
                break;
            }
        }
    }
    if (!selectedMonth || items.length === 0) {
        throw new Error("无法获取随机项目：没有找到任何有效的数据");
    }
    // 随机选择一个项目
    const randomItemIndex = Math.floor(Math.random() * items.length);
    return items[randomItemIndex];
}


/***/ }),

/***/ 19459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66621);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"32x32"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 66092:
/***/ (() => {



/***/ })

};
;