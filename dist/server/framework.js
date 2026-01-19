exports.id = 774;
exports.ids = [774];
exports.modules = {

/***/ 1323:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;
/**
 * Hoists a name from a module or promised module.
 *
 * @param module the module to hoist the name from
 * @param name the name to hoist
 * @returns the value on the module (or promised module)
 */ 
__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "l", ({
    enumerable: true,
    get: function() {
        return hoist;
    }
}));
function hoist(module, name) {
    // If the name is available in the module, return it.
    if (name in module) {
        return module[name];
    }
    // If a property called `then` exists, assume it's a promise and
    // return a promise that resolves to the name.
    if ("then" in module && typeof module.then === "function") {
        return module.then((mod)=>hoist(mod, name));
    }
    // If we're trying to hoise the default export, and the module is a function,
    // return the module itself.
    if (typeof module === "function" && name === "default") {
        return module;
    }
    // Otherwise, return undefined.
    return undefined;
}

//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ 48141:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return App;
    }
}));
const _interop_require_default = __webpack_require__(50167);
const _jsxruntime = __webpack_require__(20997);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(16689));
const _utils = __webpack_require__(45782);
/**
 * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
 * This allows for keeping state between navigation, custom error handling, injecting additional data.
 */ async function appGetInitialProps(param) {
    let { Component, ctx } = param;
    const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
        pageProps
    };
}
class App extends _react.default.Component {
    render() {
        const { Component, pageProps } = this.props;
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
            ...pageProps
        });
    }
}
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=_app.js.map


/***/ }),

/***/ 61682:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
    Head: function() {
        return Head;
    },
    Html: function() {
        return Html;
    },
    Main: function() {
        return Main;
    },
    NextScript: function() {
        return NextScript;
    },
    /**
 * `Document` component handles the initial `document` markup and renders only on the server side.
 * Commonly used for implementing server side rendering for `css-in-js` libraries.
 */ default: function() {
        return Document;
    }
});
const _jsxruntime = __webpack_require__(20997);
const _react = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(16689));
const _constants = __webpack_require__(45104);
const _getpagefiles = __webpack_require__(75778);
const _htmlescape = __webpack_require__(79630);
const _iserror = /*#__PURE__*/ _interop_require_default(__webpack_require__(80676));
const _htmlcontextsharedruntime = __webpack_require__(3112);
const _encodeuripath = __webpack_require__(8584);
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
/** Set of pages that have triggered a large data warning on production mode. */ const largePageDataWarnings = new Set();
function getDocumentFiles(buildManifest, pathname, inAmpMode) {
    const sharedFiles = (0, _getpagefiles.getPageFiles)(buildManifest, "/_app");
    const pageFiles =  true && inAmpMode ? [] : (0, _getpagefiles.getPageFiles)(buildManifest, pathname);
    return {
        sharedFiles,
        pageFiles,
        allFiles: [
            ...new Set([
                ...sharedFiles,
                ...pageFiles
            ])
        ]
    };
}
function getPolyfillScripts(context, props) {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const { assetPrefix, buildManifest, assetQueryString, disableOptimizedLoading, crossOrigin } = context;
    return buildManifest.polyfillFiles.filter((polyfill)=>polyfill.endsWith(".js") && !polyfill.endsWith(".module.js")).map((polyfill)=>/*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
            defer: !disableOptimizedLoading,
            nonce: props.nonce,
            crossOrigin: props.crossOrigin || crossOrigin,
            noModule: true,
            src: `${assetPrefix}/_next/${(0, _encodeuripath.encodeURIPath)(polyfill)}${assetQueryString}`
        }, polyfill));
}
function hasComponentProps(child) {
    return !!child && !!child.props;
}
function AmpStyles({ styles }) {
    if (!styles) return null;
    // try to parse styles from fragment for backwards compat
    const curStyles = Array.isArray(styles) ? styles : [];
    if (styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
        const hasStyles = (el)=>{
            var _el_props_dangerouslySetInnerHTML, _el_props;
            return el == null ? void 0 : (_el_props = el.props) == null ? void 0 : (_el_props_dangerouslySetInnerHTML = _el_props.dangerouslySetInnerHTML) == null ? void 0 : _el_props_dangerouslySetInnerHTML.__html;
        };
        // @ts-ignore Property 'props' does not exist on type ReactElement
        styles.props.children.forEach((child)=>{
            if (Array.isArray(child)) {
                child.forEach((el)=>hasStyles(el) && curStyles.push(el));
            } else if (hasStyles(child)) {
                curStyles.push(child);
            }
        });
    }
    /* Add custom styles before AMP styles to prevent accidental overrides */ return /*#__PURE__*/ (0, _jsxruntime.jsx)("style", {
        "amp-custom": "",
        dangerouslySetInnerHTML: {
            __html: curStyles.map((style)=>style.props.dangerouslySetInnerHTML.__html).join("").replace(/\/\*# sourceMappingURL=.*\*\//g, "").replace(/\/\*@ sourceURL=.*?\*\//g, "")
        }
    });
}
function getDynamicChunks(context, props, files) {
    const { dynamicImports, assetPrefix, isDevelopment, assetQueryString, disableOptimizedLoading, crossOrigin } = context;
    return dynamicImports.map((file)=>{
        if (!file.endsWith(".js") || files.allFiles.includes(file)) return null;
        return /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
            async: !isDevelopment && disableOptimizedLoading,
            defer: !disableOptimizedLoading,
            src: `${assetPrefix}/_next/${(0, _encodeuripath.encodeURIPath)(file)}${assetQueryString}`,
            nonce: props.nonce,
            crossOrigin: props.crossOrigin || crossOrigin
        }, file);
    });
}
function getScripts(context, props, files) {
    var _buildManifest_lowPriorityFiles;
    const { assetPrefix, buildManifest, isDevelopment, assetQueryString, disableOptimizedLoading, crossOrigin } = context;
    const normalScripts = files.allFiles.filter((file)=>file.endsWith(".js"));
    const lowPriorityScripts = (_buildManifest_lowPriorityFiles = buildManifest.lowPriorityFiles) == null ? void 0 : _buildManifest_lowPriorityFiles.filter((file)=>file.endsWith(".js"));
    return [
        ...normalScripts,
        ...lowPriorityScripts
    ].map((file)=>{
        return /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
            src: `${assetPrefix}/_next/${(0, _encodeuripath.encodeURIPath)(file)}${assetQueryString}`,
            nonce: props.nonce,
            async: !isDevelopment && disableOptimizedLoading,
            defer: !disableOptimizedLoading,
            crossOrigin: props.crossOrigin || crossOrigin
        }, file);
    });
}
function getPreNextWorkerScripts(context, props) {
    const { assetPrefix, scriptLoader, crossOrigin, nextScriptWorkers } = context;
    // disable `nextScriptWorkers` in edge runtime
    if (!nextScriptWorkers || "nodejs" === "edge") return null;
    try {
        let { partytownSnippet } = require("@builder.io/partytown/integration");
        const children = Array.isArray(props.children) ? props.children : [
            props.children
        ];
        // Check to see if the user has defined their own Partytown configuration
        const userDefinedConfig = children.find((child)=>{
            var _child_props_dangerouslySetInnerHTML, _child_props;
            return hasComponentProps(child) && (child == null ? void 0 : (_child_props = child.props) == null ? void 0 : (_child_props_dangerouslySetInnerHTML = _child_props.dangerouslySetInnerHTML) == null ? void 0 : _child_props_dangerouslySetInnerHTML.__html.length) && "data-partytown-config" in child.props;
        });
        return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                !userDefinedConfig && /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
                    "data-partytown-config": "",
                    dangerouslySetInnerHTML: {
                        __html: `
            partytown = {
              lib: "${assetPrefix}/_next/static/~partytown/"
            };
          `
                    }
                }),
                /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
                    "data-partytown": "",
                    dangerouslySetInnerHTML: {
                        __html: partytownSnippet()
                    }
                }),
                (scriptLoader.worker || []).map((file, index)=>{
                    const { strategy, src, children: scriptChildren, dangerouslySetInnerHTML, ...scriptProps } = file;
                    let srcProps = {};
                    if (src) {
                        // Use external src if provided
                        srcProps.src = src;
                    } else if (dangerouslySetInnerHTML && dangerouslySetInnerHTML.__html) {
                        // Embed inline script if provided with dangerouslySetInnerHTML
                        srcProps.dangerouslySetInnerHTML = {
                            __html: dangerouslySetInnerHTML.__html
                        };
                    } else if (scriptChildren) {
                        // Embed inline script if provided with children
                        srcProps.dangerouslySetInnerHTML = {
                            __html: typeof scriptChildren === "string" ? scriptChildren : Array.isArray(scriptChildren) ? scriptChildren.join("") : ""
                        };
                    } else {
                        throw new Error("Invalid usage of next/script. Did you forget to include a src attribute or an inline script? https://nextjs.org/docs/messages/invalid-script");
                    }
                    return /*#__PURE__*/ (0, _react.createElement)("script", {
                        ...srcProps,
                        ...scriptProps,
                        type: "text/partytown",
                        key: src || index,
                        nonce: props.nonce,
                        "data-nscript": "worker",
                        crossOrigin: props.crossOrigin || crossOrigin
                    });
                })
            ]
        });
    } catch (err) {
        if ((0, _iserror.default)(err) && err.code !== "MODULE_NOT_FOUND") {
            console.warn(`Warning: ${err.message}`);
        }
        return null;
    }
}
function getPreNextScripts(context, props) {
    const { scriptLoader, disableOptimizedLoading, crossOrigin } = context;
    const webWorkerScripts = getPreNextWorkerScripts(context, props);
    const beforeInteractiveScripts = (scriptLoader.beforeInteractive || []).filter((script)=>script.src).map((file, index)=>{
        const { strategy, ...scriptProps } = file;
        return /*#__PURE__*/ (0, _react.createElement)("script", {
            ...scriptProps,
            key: scriptProps.src || index,
            defer: scriptProps.defer ?? !disableOptimizedLoading,
            nonce: props.nonce,
            "data-nscript": "beforeInteractive",
            crossOrigin: props.crossOrigin || crossOrigin
        });
    });
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            webWorkerScripts,
            beforeInteractiveScripts
        ]
    });
}
function getHeadHTMLProps(props) {
    const { crossOrigin, nonce, ...restProps } = props;
    // This assignment is necessary for additional type checking to avoid unsupported attributes in <head>
    const headProps = restProps;
    return headProps;
}
function getAmpPath(ampPath, asPath) {
    return ampPath || `${asPath}${asPath.includes("?") ? "&" : "?"}amp=1`;
}
function getNextFontLinkTags(nextFontManifest, dangerousAsPath, assetPrefix = "") {
    if (!nextFontManifest) {
        return {
            preconnect: null,
            preload: null
        };
    }
    const appFontsEntry = nextFontManifest.pages["/_app"];
    const pageFontsEntry = nextFontManifest.pages[dangerousAsPath];
    const preloadedFontFiles = Array.from(new Set([
        ...appFontsEntry ?? [],
        ...pageFontsEntry ?? []
    ]));
    // If no font files should preload but there's an entry for the path, add a preconnect tag.
    const preconnectToSelf = !!(preloadedFontFiles.length === 0 && (appFontsEntry || pageFontsEntry));
    return {
        preconnect: preconnectToSelf ? /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
            "data-next-font": nextFontManifest.pagesUsingSizeAdjust ? "size-adjust" : "",
            rel: "preconnect",
            href: "/",
            crossOrigin: "anonymous"
        }) : null,
        preload: preloadedFontFiles ? preloadedFontFiles.map((fontFile)=>{
            const ext = /\.(woff|woff2|eot|ttf|otf)$/.exec(fontFile)[1];
            return /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                rel: "preload",
                href: `${assetPrefix}/_next/${(0, _encodeuripath.encodeURIPath)(fontFile)}`,
                as: "font",
                type: `font/${ext}`,
                crossOrigin: "anonymous",
                "data-next-font": fontFile.includes("-s") ? "size-adjust" : ""
            }, fontFile);
        }) : null
    };
}
class Head extends _react.default.Component {
    static #_ = this.contextType = _htmlcontextsharedruntime.HtmlContext;
    getCssLinks(files) {
        const { assetPrefix, assetQueryString, dynamicImports, crossOrigin, optimizeCss, optimizeFonts } = this.context;
        const cssFiles = files.allFiles.filter((f)=>f.endsWith(".css"));
        const sharedFiles = new Set(files.sharedFiles);
        // Unmanaged files are CSS files that will be handled directly by the
        // webpack runtime (`mini-css-extract-plugin`).
        let unmangedFiles = new Set([]);
        let dynamicCssFiles = Array.from(new Set(dynamicImports.filter((file)=>file.endsWith(".css"))));
        if (dynamicCssFiles.length) {
            const existing = new Set(cssFiles);
            dynamicCssFiles = dynamicCssFiles.filter((f)=>!(existing.has(f) || sharedFiles.has(f)));
            unmangedFiles = new Set(dynamicCssFiles);
            cssFiles.push(...dynamicCssFiles);
        }
        let cssLinkElements = [];
        cssFiles.forEach((file)=>{
            const isSharedFile = sharedFiles.has(file);
            if (!optimizeCss) {
                cssLinkElements.push(/*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                    nonce: this.props.nonce,
                    rel: "preload",
                    href: `${assetPrefix}/_next/${(0, _encodeuripath.encodeURIPath)(file)}${assetQueryString}`,
                    as: "style",
                    crossOrigin: this.props.crossOrigin || crossOrigin
                }, `${file}-preload`));
            }
            const isUnmanagedFile = unmangedFiles.has(file);
            cssLinkElements.push(/*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                nonce: this.props.nonce,
                rel: "stylesheet",
                href: `${assetPrefix}/_next/${(0, _encodeuripath.encodeURIPath)(file)}${assetQueryString}`,
                crossOrigin: this.props.crossOrigin || crossOrigin,
                "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? "" : undefined,
                "data-n-p": isUnmanagedFile ? undefined : isSharedFile ? undefined : ""
            }, file));
        });
        if ( true && optimizeFonts) {
            cssLinkElements = this.makeStylesheetInert(cssLinkElements);
        }
        return cssLinkElements.length === 0 ? null : cssLinkElements;
    }
    getPreloadDynamicChunks() {
        const { dynamicImports, assetPrefix, assetQueryString, crossOrigin } = this.context;
        return dynamicImports.map((file)=>{
            if (!file.endsWith(".js")) {
                return null;
            }
            return /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                rel: "preload",
                href: `${assetPrefix}/_next/${(0, _encodeuripath.encodeURIPath)(file)}${assetQueryString}`,
                as: "script",
                nonce: this.props.nonce,
                crossOrigin: this.props.crossOrigin || crossOrigin
            }, file);
        }) // Filter out nulled scripts
        .filter(Boolean);
    }
    getPreloadMainLinks(files) {
        const { assetPrefix, assetQueryString, scriptLoader, crossOrigin } = this.context;
        const preloadFiles = files.allFiles.filter((file)=>{
            return file.endsWith(".js");
        });
        return [
            ...(scriptLoader.beforeInteractive || []).map((file)=>/*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                    nonce: this.props.nonce,
                    rel: "preload",
                    href: file.src,
                    as: "script",
                    crossOrigin: this.props.crossOrigin || crossOrigin
                }, file.src)),
            ...preloadFiles.map((file)=>/*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                    nonce: this.props.nonce,
                    rel: "preload",
                    href: `${assetPrefix}/_next/${(0, _encodeuripath.encodeURIPath)(file)}${assetQueryString}`,
                    as: "script",
                    crossOrigin: this.props.crossOrigin || crossOrigin
                }, file))
        ];
    }
    getBeforeInteractiveInlineScripts() {
        const { scriptLoader } = this.context;
        const { nonce, crossOrigin } = this.props;
        return (scriptLoader.beforeInteractive || []).filter((script)=>!script.src && (script.dangerouslySetInnerHTML || script.children)).map((file, index)=>{
            const { strategy, children, dangerouslySetInnerHTML, src, ...scriptProps } = file;
            let html = "";
            if (dangerouslySetInnerHTML && dangerouslySetInnerHTML.__html) {
                html = dangerouslySetInnerHTML.__html;
            } else if (children) {
                html = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
            }
            return /*#__PURE__*/ (0, _react.createElement)("script", {
                ...scriptProps,
                dangerouslySetInnerHTML: {
                    __html: html
                },
                key: scriptProps.id || index,
                nonce: nonce,
                "data-nscript": "beforeInteractive",
                crossOrigin: crossOrigin || undefined
            });
        });
    }
    getDynamicChunks(files) {
        return getDynamicChunks(this.context, this.props, files);
    }
    getPreNextScripts() {
        return getPreNextScripts(this.context, this.props);
    }
    getScripts(files) {
        return getScripts(this.context, this.props, files);
    }
    getPolyfillScripts() {
        return getPolyfillScripts(this.context, this.props);
    }
    makeStylesheetInert(node) {
        return _react.default.Children.map(node, (c)=>{
            var _c_props, _c_props1;
            if ((c == null ? void 0 : c.type) === "link" && (c == null ? void 0 : (_c_props = c.props) == null ? void 0 : _c_props.href) && _constants.OPTIMIZED_FONT_PROVIDERS.some(({ url })=>{
                var _c_props_href, _c_props;
                return c == null ? void 0 : (_c_props = c.props) == null ? void 0 : (_c_props_href = _c_props.href) == null ? void 0 : _c_props_href.startsWith(url);
            })) {
                const newProps = {
                    ...c.props || {},
                    "data-href": c.props.href,
                    href: undefined
                };
                return /*#__PURE__*/ _react.default.cloneElement(c, newProps);
            } else if (c == null ? void 0 : (_c_props1 = c.props) == null ? void 0 : _c_props1.children) {
                const newProps = {
                    ...c.props || {},
                    children: this.makeStylesheetInert(c.props.children)
                };
                return /*#__PURE__*/ _react.default.cloneElement(c, newProps);
            }
            return c;
        // @types/react bug. Returned value from .map will not be `null` if you pass in `[null]`
        }).filter(Boolean);
    }
    render() {
        const { styles, ampPath, inAmpMode, hybridAmp, canonicalBase, __NEXT_DATA__, dangerousAsPath, headTags, unstable_runtimeJS, unstable_JsPreload, disableOptimizedLoading, optimizeCss, optimizeFonts, assetPrefix, nextFontManifest } = this.context;
        const disableRuntimeJS = unstable_runtimeJS === false;
        const disableJsPreload = unstable_JsPreload === false || !disableOptimizedLoading;
        this.context.docComponentsRendered.Head = true;
        let { head } = this.context;
        let cssPreloads = [];
        let otherHeadElements = [];
        if (head) {
            head.forEach((c)=>{
                let metaTag;
                if (this.context.strictNextHead) {
                    metaTag = /*#__PURE__*/ _react.default.createElement("meta", {
                        name: "next-head",
                        content: "1"
                    });
                }
                if (c && c.type === "link" && c.props["rel"] === "preload" && c.props["as"] === "style") {
                    metaTag && cssPreloads.push(metaTag);
                    cssPreloads.push(c);
                } else {
                    if (c) {
                        if (metaTag && (c.type !== "meta" || !c.props["charSet"])) {
                            otherHeadElements.push(metaTag);
                        }
                        otherHeadElements.push(c);
                    }
                }
            });
            head = cssPreloads.concat(otherHeadElements);
        }
        let children = _react.default.Children.toArray(this.props.children).filter(Boolean);
        // show a warning if Head contains <title> (only in development)
        if (false) {}
        if ( true && optimizeFonts && !( true && inAmpMode)) {
            children = this.makeStylesheetInert(children);
        }
        let hasAmphtmlRel = false;
        let hasCanonicalRel = false;
        // show warning and remove conflicting amp head tags
        head = _react.default.Children.map(head || [], (child)=>{
            if (!child) return child;
            const { type, props } = child;
            if ( true && inAmpMode) {
                let badProp = "";
                if (type === "meta" && props.name === "viewport") {
                    badProp = 'name="viewport"';
                } else if (type === "link" && props.rel === "canonical") {
                    hasCanonicalRel = true;
                } else if (type === "script") {
                    // only block if
                    // 1. it has a src and isn't pointing to ampproject's CDN
                    // 2. it is using dangerouslySetInnerHTML without a type or
                    // a type of text/javascript
                    if (props.src && props.src.indexOf("ampproject") < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === "text/javascript")) {
                        badProp = "<script";
                        Object.keys(props).forEach((prop)=>{
                            badProp += ` ${prop}="${props[prop]}"`;
                        });
                        badProp += "/>";
                    }
                }
                if (badProp) {
                    console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://nextjs.org/docs/messages/conflicting-amp-tag`);
                    return null;
                }
            } else {
                // non-amp mode
                if (type === "link" && props.rel === "amphtml") {
                    hasAmphtmlRel = true;
                }
            }
            return child;
        // @types/react bug. Returned value from .map will not be `null` if you pass in `[null]`
        });
        const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page,  true && inAmpMode);
        const nextFontLinkTags = getNextFontLinkTags(nextFontManifest, dangerousAsPath, assetPrefix);
        return /*#__PURE__*/ (0, _jsxruntime.jsxs)("head", {
            ...getHeadHTMLProps(this.props),
            children: [
                this.context.isDevelopment && /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("style", {
                            "data-next-hide-fouc": true,
                            "data-ampdevmode":  true && inAmpMode ? "true" : undefined,
                            dangerouslySetInnerHTML: {
                                __html: `body{display:none}`
                            }
                        }),
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("noscript", {
                            "data-next-hide-fouc": true,
                            "data-ampdevmode":  true && inAmpMode ? "true" : undefined,
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)("style", {
                                dangerouslySetInnerHTML: {
                                    __html: `body{display:block}`
                                }
                            })
                        })
                    ]
                }),
                head,
                this.context.strictNextHead ? null : /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
                    name: "next-head-count",
                    content: _react.default.Children.count(head || []).toString()
                }),
                children,
                optimizeFonts && /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
                    name: "next-font-preconnect"
                }),
                nextFontLinkTags.preconnect,
                nextFontLinkTags.preload,
                 true && inAmpMode && /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width,minimum-scale=1,initial-scale=1"
                        }),
                        !hasCanonicalRel && /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                            rel: "canonical",
                            href: canonicalBase + (__webpack_require__(50733).cleanAmpPath)(dangerousAsPath)
                        }),
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                            rel: "preload",
                            as: "script",
                            href: "https://cdn.ampproject.org/v0.js"
                        }),
                        /*#__PURE__*/ (0, _jsxruntime.jsx)(AmpStyles, {
                            styles: styles
                        }),
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("style", {
                            "amp-boilerplate": "",
                            dangerouslySetInnerHTML: {
                                __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
                            }
                        }),
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("noscript", {
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)("style", {
                                "amp-boilerplate": "",
                                dangerouslySetInnerHTML: {
                                    __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
                                }
                            })
                        }),
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
                            async: true,
                            src: "https://cdn.ampproject.org/v0.js"
                        })
                    ]
                }),
                !( true && inAmpMode) && /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                    children: [
                        !hasAmphtmlRel && hybridAmp && /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                            rel: "amphtml",
                            href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
                        }),
                        this.getBeforeInteractiveInlineScripts(),
                        !optimizeCss && this.getCssLinks(files),
                        !optimizeCss && /*#__PURE__*/ (0, _jsxruntime.jsx)("noscript", {
                            "data-n-css": this.props.nonce ?? ""
                        }),
                        !disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(),
                        !disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files),
                        !disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(),
                        !disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(),
                        !disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files),
                        !disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files),
                        optimizeCss && this.getCssLinks(files),
                        optimizeCss && /*#__PURE__*/ (0, _jsxruntime.jsx)("noscript", {
                            "data-n-css": this.props.nonce ?? ""
                        }),
                        this.context.isDevelopment && // this element is used to mount development styles so the
                        // ordering matches production
                        // (by default, style-loader injects at the bottom of <head />)
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("noscript", {
                            id: "__next_css__DO_NOT_USE__"
                        }),
                        styles || null
                    ]
                }),
                /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, {}, ...headTags || [])
            ]
        });
    }
}
function handleDocumentScriptLoaderItems(scriptLoader, __NEXT_DATA__, props) {
    var _children_find_props, _children_find, _children_find_props1, _children_find1;
    if (!props.children) return;
    const scriptLoaderItems = [];
    const children = Array.isArray(props.children) ? props.children : [
        props.children
    ];
    const headChildren = (_children_find = children.find((child)=>child.type === Head)) == null ? void 0 : (_children_find_props = _children_find.props) == null ? void 0 : _children_find_props.children;
    const bodyChildren = (_children_find1 = children.find((child)=>child.type === "body")) == null ? void 0 : (_children_find_props1 = _children_find1.props) == null ? void 0 : _children_find_props1.children;
    // Scripts with beforeInteractive can be placed inside Head or <body> so children of both needs to be traversed
    const combinedChildren = [
        ...Array.isArray(headChildren) ? headChildren : [
            headChildren
        ],
        ...Array.isArray(bodyChildren) ? bodyChildren : [
            bodyChildren
        ]
    ];
    _react.default.Children.forEach(combinedChildren, (child)=>{
        var _child_type;
        if (!child) return;
        // When using the `next/script` component, register it in script loader.
        if ((_child_type = child.type) == null ? void 0 : _child_type.__nextScript) {
            if (child.props.strategy === "beforeInteractive") {
                scriptLoader.beforeInteractive = (scriptLoader.beforeInteractive || []).concat([
                    {
                        ...child.props
                    }
                ]);
                return;
            } else if ([
                "lazyOnload",
                "afterInteractive",
                "worker"
            ].includes(child.props.strategy)) {
                scriptLoaderItems.push(child.props);
                return;
            }
        }
    });
    __NEXT_DATA__.scriptLoader = scriptLoaderItems;
}
class NextScript extends _react.default.Component {
    static #_ = this.contextType = _htmlcontextsharedruntime.HtmlContext;
    getDynamicChunks(files) {
        return getDynamicChunks(this.context, this.props, files);
    }
    getPreNextScripts() {
        return getPreNextScripts(this.context, this.props);
    }
    getScripts(files) {
        return getScripts(this.context, this.props, files);
    }
    getPolyfillScripts() {
        return getPolyfillScripts(this.context, this.props);
    }
    static getInlineScriptSource(context) {
        const { __NEXT_DATA__, largePageDataBytes } = context;
        try {
            const data = JSON.stringify(__NEXT_DATA__);
            if (largePageDataWarnings.has(__NEXT_DATA__.page)) {
                return (0, _htmlescape.htmlEscapeJsonString)(data);
            }
            const bytes =  false ? 0 : Buffer.from(data).byteLength;
            const prettyBytes = (__webpack_require__(95955)/* ["default"] */ .Z);
            if (largePageDataBytes && bytes > largePageDataBytes) {
                if (true) {
                    largePageDataWarnings.add(__NEXT_DATA__.page);
                }
                console.warn(`Warning: data for page "${__NEXT_DATA__.page}"${__NEXT_DATA__.page === context.dangerousAsPath ? "" : ` (path "${context.dangerousAsPath}")`} is ${prettyBytes(bytes)} which exceeds the threshold of ${prettyBytes(largePageDataBytes)}, this amount of data can reduce performance.\nSee more info here: https://nextjs.org/docs/messages/large-page-data`);
            }
            return (0, _htmlescape.htmlEscapeJsonString)(data);
        } catch (err) {
            if ((0, _iserror.default)(err) && err.message.indexOf("circular structure") !== -1) {
                throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://nextjs.org/docs/messages/circular-structure`);
            }
            throw err;
        }
    }
    render() {
        const { assetPrefix, inAmpMode, buildManifest, unstable_runtimeJS, docComponentsRendered, assetQueryString, disableOptimizedLoading, crossOrigin } = this.context;
        const disableRuntimeJS = unstable_runtimeJS === false;
        docComponentsRendered.NextScript = true;
        if ( true && inAmpMode) {
            if (true) {
                return null;
            }
            const ampDevFiles = [
                ...buildManifest.devFiles,
                ...buildManifest.polyfillFiles,
                ...buildManifest.ampDevFiles
            ];
            return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    disableRuntimeJS ? null : /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
                        id: "__NEXT_DATA__",
                        type: "application/json",
                        nonce: this.props.nonce,
                        crossOrigin: this.props.crossOrigin || crossOrigin,
                        dangerouslySetInnerHTML: {
                            __html: NextScript.getInlineScriptSource(this.context)
                        },
                        "data-ampdevmode": true
                    }),
                    ampDevFiles.map((file)=>/*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
                            src: `${assetPrefix}/_next/${(0, _encodeuripath.encodeURIPath)(file)}${assetQueryString}`,
                            nonce: this.props.nonce,
                            crossOrigin: this.props.crossOrigin || crossOrigin,
                            "data-ampdevmode": true
                        }, file))
                ]
            });
        }
        if (false) {}
        const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page,  true && inAmpMode);
        return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map((file)=>/*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
                        src: `${assetPrefix}/_next/${(0, _encodeuripath.encodeURIPath)(file)}${assetQueryString}`,
                        nonce: this.props.nonce,
                        crossOrigin: this.props.crossOrigin || crossOrigin
                    }, file)) : null,
                disableRuntimeJS ? null : /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
                    id: "__NEXT_DATA__",
                    type: "application/json",
                    nonce: this.props.nonce,
                    crossOrigin: this.props.crossOrigin || crossOrigin,
                    dangerouslySetInnerHTML: {
                        __html: NextScript.getInlineScriptSource(this.context)
                    }
                }),
                disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(),
                disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(),
                disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files),
                disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files)
            ]
        });
    }
}
function Html(props) {
    const { inAmpMode, docComponentsRendered, locale, scriptLoader, __NEXT_DATA__ } = (0, _htmlcontextsharedruntime.useHtmlContext)();
    docComponentsRendered.Html = true;
    handleDocumentScriptLoaderItems(scriptLoader, __NEXT_DATA__, props);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("html", {
        ...props,
        lang: props.lang || locale || undefined,
        amp:  true && inAmpMode ? "" : undefined,
        "data-ampdevmode":  true && inAmpMode && "production" !== "production" ? 0 : undefined
    });
}
function Main() {
    const { docComponentsRendered } = (0, _htmlcontextsharedruntime.useHtmlContext)();
    docComponentsRendered.Main = true;
    // @ts-ignore
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("next-js-internal-body-render-target", {});
}
class Document extends _react.default.Component {
    /**
   * `getInitialProps` hook returns the context object with the addition of `renderPage`.
   * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
   */ static getInitialProps(ctx) {
        return ctx.defaultGetInitialProps(ctx);
    }
    render() {
        return /*#__PURE__*/ (0, _jsxruntime.jsxs)(Html, {
            children: [
                /*#__PURE__*/ (0, _jsxruntime.jsx)(Head, {}),
                /*#__PURE__*/ (0, _jsxruntime.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ (0, _jsxruntime.jsx)(Main, {}),
                        /*#__PURE__*/ (0, _jsxruntime.jsx)(NextScript, {})
                    ]
                })
            ]
        });
    }
}
// Add a special property to the built-in `Document` component so later we can
// identify if a user customized `Document` is used or not.
const InternalFunctionDocument = function InternalFunctionDocument() {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(Html, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(Head, {}),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("body", {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(Main, {}),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(NextScript, {})
                ]
            })
        ]
    });
};
Document[_constants.NEXT_BUILTIN_DOCUMENT] = InternalFunctionDocument; //# sourceMappingURL=_document.js.map


/***/ }),

/***/ 18529:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return Error;
    }
}));
const _interop_require_default = __webpack_require__(50167);
const _jsxruntime = __webpack_require__(20997);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(16689));
const _head = /*#__PURE__*/ _interop_require_default._(__webpack_require__(50494));
const statusCodes = {
    400: "Bad Request",
    404: "This page could not be found",
    405: "Method Not Allowed",
    500: "Internal Server Error"
};
function _getInitialProps(param) {
    let { res, err } = param;
    const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
    return {
        statusCode
    };
}
const styles = {
    error: {
        // https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css#L38-L52
        fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        height: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    desc: {
        lineHeight: "48px"
    },
    h1: {
        display: "inline-block",
        margin: "0 20px 0 0",
        paddingRight: 23,
        fontSize: 24,
        fontWeight: 500,
        verticalAlign: "top"
    },
    h2: {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: "28px"
    },
    wrap: {
        display: "inline-block"
    }
};
class Error extends _react.default.Component {
    render() {
        const { statusCode, withDarkMode = true } = this.props;
        const title = this.props.title || statusCodes[statusCode] || "An unexpected error has occurred";
        return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
            style: styles.error,
            children: [
                /*#__PURE__*/ (0, _jsxruntime.jsx)(_head.default, {
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)("title", {
                        children: statusCode ? statusCode + ": " + title : "Application error: a client-side exception has occurred"
                    })
                }),
                /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                    style: styles.desc,
                    children: [
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("style", {
                            dangerouslySetInnerHTML: {
                                /* CSS minified from
                body { margin: 0; color: #000; background: #fff; }
                .next-error-h1 {
                  border-right: 1px solid rgba(0, 0, 0, .3);
                }

                ${
                  withDarkMode
                    ? `@media (prefers-color-scheme: dark) {
                  body { color: #fff; background: #000; }
                  .next-error-h1 {
                    border-right: 1px solid rgba(255, 255, 255, .3);
                  }
                }`
                    : ''
                }
               */ __html: "body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}" + (withDarkMode ? "@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}" : "")
                            }
                        }),
                        statusCode ? /*#__PURE__*/ (0, _jsxruntime.jsx)("h1", {
                            className: "next-error-h1",
                            style: styles.h1,
                            children: statusCode
                        }) : null,
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                            style: styles.wrap,
                            children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("h2", {
                                style: styles.h2,
                                children: [
                                    this.props.title || statusCode ? title : /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
                                        children: "Application error: a client-side exception has occurred (see the browser console for more information)"
                                    }),
                                    "."
                                ]
                            })
                        })
                    ]
                })
            ]
        });
    }
}
Error.displayName = "ErrorPage";
Error.getInitialProps = _getInitialProps;
Error.origGetInitialProps = _getInitialProps;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=_error.js.map


/***/ }),

/***/ 98579:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isInAmpMode", ({
    enumerable: true,
    get: function() {
        return isInAmpMode;
    }
}));
function isInAmpMode(param) {
    let { ampFirst = false, hybrid = false, hasQuery = false } = param === void 0 ? {} : param;
    return ampFirst || hybrid && hasQuery;
} //# sourceMappingURL=amp-mode.js.map


/***/ }),

/***/ 45104:
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
    APP_BUILD_MANIFEST: function() {
        return APP_BUILD_MANIFEST;
    },
    APP_CLIENT_INTERNALS: function() {
        return APP_CLIENT_INTERNALS;
    },
    APP_PATHS_MANIFEST: function() {
        return APP_PATHS_MANIFEST;
    },
    APP_PATH_ROUTES_MANIFEST: function() {
        return APP_PATH_ROUTES_MANIFEST;
    },
    AUTOMATIC_FONT_OPTIMIZATION_MANIFEST: function() {
        return AUTOMATIC_FONT_OPTIMIZATION_MANIFEST;
    },
    BARREL_OPTIMIZATION_PREFIX: function() {
        return BARREL_OPTIMIZATION_PREFIX;
    },
    BLOCKED_PAGES: function() {
        return BLOCKED_PAGES;
    },
    BUILD_ID_FILE: function() {
        return BUILD_ID_FILE;
    },
    BUILD_MANIFEST: function() {
        return BUILD_MANIFEST;
    },
    CLIENT_PUBLIC_FILES_PATH: function() {
        return CLIENT_PUBLIC_FILES_PATH;
    },
    CLIENT_REFERENCE_MANIFEST: function() {
        return CLIENT_REFERENCE_MANIFEST;
    },
    CLIENT_STATIC_FILES_PATH: function() {
        return CLIENT_STATIC_FILES_PATH;
    },
    CLIENT_STATIC_FILES_RUNTIME_AMP: function() {
        return CLIENT_STATIC_FILES_RUNTIME_AMP;
    },
    CLIENT_STATIC_FILES_RUNTIME_MAIN: function() {
        return CLIENT_STATIC_FILES_RUNTIME_MAIN;
    },
    CLIENT_STATIC_FILES_RUNTIME_MAIN_APP: function() {
        return CLIENT_STATIC_FILES_RUNTIME_MAIN_APP;
    },
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS: function() {
        return CLIENT_STATIC_FILES_RUNTIME_POLYFILLS;
    },
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL: function() {
        return CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL;
    },
    CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH: function() {
        return CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH;
    },
    CLIENT_STATIC_FILES_RUNTIME_WEBPACK: function() {
        return CLIENT_STATIC_FILES_RUNTIME_WEBPACK;
    },
    COMPILER_INDEXES: function() {
        return COMPILER_INDEXES;
    },
    COMPILER_NAMES: function() {
        return COMPILER_NAMES;
    },
    CONFIG_FILES: function() {
        return CONFIG_FILES;
    },
    DEFAULT_RUNTIME_WEBPACK: function() {
        return DEFAULT_RUNTIME_WEBPACK;
    },
    DEFAULT_SANS_SERIF_FONT: function() {
        return DEFAULT_SANS_SERIF_FONT;
    },
    DEFAULT_SERIF_FONT: function() {
        return DEFAULT_SERIF_FONT;
    },
    DEV_CLIENT_PAGES_MANIFEST: function() {
        return DEV_CLIENT_PAGES_MANIFEST;
    },
    DEV_MIDDLEWARE_MANIFEST: function() {
        return DEV_MIDDLEWARE_MANIFEST;
    },
    EDGE_RUNTIME_WEBPACK: function() {
        return EDGE_RUNTIME_WEBPACK;
    },
    EDGE_UNSUPPORTED_NODE_APIS: function() {
        return EDGE_UNSUPPORTED_NODE_APIS;
    },
    EXPORT_DETAIL: function() {
        return EXPORT_DETAIL;
    },
    EXPORT_MARKER: function() {
        return EXPORT_MARKER;
    },
    FUNCTIONS_CONFIG_MANIFEST: function() {
        return FUNCTIONS_CONFIG_MANIFEST;
    },
    GOOGLE_FONT_PROVIDER: function() {
        return GOOGLE_FONT_PROVIDER;
    },
    IMAGES_MANIFEST: function() {
        return IMAGES_MANIFEST;
    },
    INTERCEPTION_ROUTE_REWRITE_MANIFEST: function() {
        return INTERCEPTION_ROUTE_REWRITE_MANIFEST;
    },
    MIDDLEWARE_BUILD_MANIFEST: function() {
        return MIDDLEWARE_BUILD_MANIFEST;
    },
    MIDDLEWARE_MANIFEST: function() {
        return MIDDLEWARE_MANIFEST;
    },
    MIDDLEWARE_REACT_LOADABLE_MANIFEST: function() {
        return MIDDLEWARE_REACT_LOADABLE_MANIFEST;
    },
    MODERN_BROWSERSLIST_TARGET: function() {
        return _modernbrowserslisttarget.default;
    },
    NEXT_BUILTIN_DOCUMENT: function() {
        return NEXT_BUILTIN_DOCUMENT;
    },
    NEXT_FONT_MANIFEST: function() {
        return NEXT_FONT_MANIFEST;
    },
    OPTIMIZED_FONT_PROVIDERS: function() {
        return OPTIMIZED_FONT_PROVIDERS;
    },
    PAGES_MANIFEST: function() {
        return PAGES_MANIFEST;
    },
    PHASE_DEVELOPMENT_SERVER: function() {
        return PHASE_DEVELOPMENT_SERVER;
    },
    PHASE_EXPORT: function() {
        return PHASE_EXPORT;
    },
    PHASE_INFO: function() {
        return PHASE_INFO;
    },
    PHASE_PRODUCTION_BUILD: function() {
        return PHASE_PRODUCTION_BUILD;
    },
    PHASE_PRODUCTION_SERVER: function() {
        return PHASE_PRODUCTION_SERVER;
    },
    PHASE_TEST: function() {
        return PHASE_TEST;
    },
    PRERENDER_MANIFEST: function() {
        return PRERENDER_MANIFEST;
    },
    REACT_LOADABLE_MANIFEST: function() {
        return REACT_LOADABLE_MANIFEST;
    },
    ROUTES_MANIFEST: function() {
        return ROUTES_MANIFEST;
    },
    RSC_MODULE_TYPES: function() {
        return RSC_MODULE_TYPES;
    },
    SERVER_DIRECTORY: function() {
        return SERVER_DIRECTORY;
    },
    SERVER_FILES_MANIFEST: function() {
        return SERVER_FILES_MANIFEST;
    },
    SERVER_PROPS_ID: function() {
        return SERVER_PROPS_ID;
    },
    SERVER_REFERENCE_MANIFEST: function() {
        return SERVER_REFERENCE_MANIFEST;
    },
    STATIC_PROPS_ID: function() {
        return STATIC_PROPS_ID;
    },
    STATIC_STATUS_PAGES: function() {
        return STATIC_STATUS_PAGES;
    },
    STRING_LITERAL_DROP_BUNDLE: function() {
        return STRING_LITERAL_DROP_BUNDLE;
    },
    SUBRESOURCE_INTEGRITY_MANIFEST: function() {
        return SUBRESOURCE_INTEGRITY_MANIFEST;
    },
    SYSTEM_ENTRYPOINTS: function() {
        return SYSTEM_ENTRYPOINTS;
    },
    TRACE_OUTPUT_VERSION: function() {
        return TRACE_OUTPUT_VERSION;
    },
    TURBO_TRACE_DEFAULT_MEMORY_LIMIT: function() {
        return TURBO_TRACE_DEFAULT_MEMORY_LIMIT;
    },
    UNDERSCORE_NOT_FOUND_ROUTE: function() {
        return UNDERSCORE_NOT_FOUND_ROUTE;
    },
    UNDERSCORE_NOT_FOUND_ROUTE_ENTRY: function() {
        return UNDERSCORE_NOT_FOUND_ROUTE_ENTRY;
    }
});
const _interop_require_default = __webpack_require__(50167);
const _modernbrowserslisttarget = /*#__PURE__*/ _interop_require_default._(__webpack_require__(60979));
const COMPILER_NAMES = {
    client: "client",
    server: "server",
    edgeServer: "edge-server"
};
const COMPILER_INDEXES = {
    [COMPILER_NAMES.client]: 0,
    [COMPILER_NAMES.server]: 1,
    [COMPILER_NAMES.edgeServer]: 2
};
const UNDERSCORE_NOT_FOUND_ROUTE = "/_not-found";
const UNDERSCORE_NOT_FOUND_ROUTE_ENTRY = "" + UNDERSCORE_NOT_FOUND_ROUTE + "/page";
const PHASE_EXPORT = "phase-export";
const PHASE_PRODUCTION_BUILD = "phase-production-build";
const PHASE_PRODUCTION_SERVER = "phase-production-server";
const PHASE_DEVELOPMENT_SERVER = "phase-development-server";
const PHASE_TEST = "phase-test";
const PHASE_INFO = "phase-info";
const PAGES_MANIFEST = "pages-manifest.json";
const APP_PATHS_MANIFEST = "app-paths-manifest.json";
const APP_PATH_ROUTES_MANIFEST = "app-path-routes-manifest.json";
const BUILD_MANIFEST = "build-manifest.json";
const APP_BUILD_MANIFEST = "app-build-manifest.json";
const FUNCTIONS_CONFIG_MANIFEST = "functions-config-manifest.json";
const SUBRESOURCE_INTEGRITY_MANIFEST = "subresource-integrity-manifest";
const NEXT_FONT_MANIFEST = "next-font-manifest";
const EXPORT_MARKER = "export-marker.json";
const EXPORT_DETAIL = "export-detail.json";
const PRERENDER_MANIFEST = "prerender-manifest.json";
const ROUTES_MANIFEST = "routes-manifest.json";
const IMAGES_MANIFEST = "images-manifest.json";
const SERVER_FILES_MANIFEST = "required-server-files.json";
const DEV_CLIENT_PAGES_MANIFEST = "_devPagesManifest.json";
const MIDDLEWARE_MANIFEST = "middleware-manifest.json";
const DEV_MIDDLEWARE_MANIFEST = "_devMiddlewareManifest.json";
const REACT_LOADABLE_MANIFEST = "react-loadable-manifest.json";
const AUTOMATIC_FONT_OPTIMIZATION_MANIFEST = "font-manifest.json";
const SERVER_DIRECTORY = "server";
const CONFIG_FILES = [
    "next.config.js",
    "next.config.mjs"
];
const BUILD_ID_FILE = "BUILD_ID";
const BLOCKED_PAGES = [
    "/_document",
    "/_app",
    "/_error"
];
const CLIENT_PUBLIC_FILES_PATH = "public";
const CLIENT_STATIC_FILES_PATH = "static";
const STRING_LITERAL_DROP_BUNDLE = "__NEXT_DROP_CLIENT_FILE__";
const NEXT_BUILTIN_DOCUMENT = "__NEXT_BUILTIN_DOCUMENT__";
const BARREL_OPTIMIZATION_PREFIX = "__barrel_optimize__";
const CLIENT_REFERENCE_MANIFEST = "client-reference-manifest";
const SERVER_REFERENCE_MANIFEST = "server-reference-manifest";
const MIDDLEWARE_BUILD_MANIFEST = "middleware-build-manifest";
const MIDDLEWARE_REACT_LOADABLE_MANIFEST = "middleware-react-loadable-manifest";
const INTERCEPTION_ROUTE_REWRITE_MANIFEST = "interception-route-rewrite-manifest";
const CLIENT_STATIC_FILES_RUNTIME_MAIN = "main";
const CLIENT_STATIC_FILES_RUNTIME_MAIN_APP = "" + CLIENT_STATIC_FILES_RUNTIME_MAIN + "-app";
const APP_CLIENT_INTERNALS = "app-pages-internals";
const CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH = "react-refresh";
const CLIENT_STATIC_FILES_RUNTIME_AMP = "amp";
const CLIENT_STATIC_FILES_RUNTIME_WEBPACK = "webpack";
const CLIENT_STATIC_FILES_RUNTIME_POLYFILLS = "polyfills";
const CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL = Symbol(CLIENT_STATIC_FILES_RUNTIME_POLYFILLS);
const DEFAULT_RUNTIME_WEBPACK = "webpack-runtime";
const EDGE_RUNTIME_WEBPACK = "edge-runtime-webpack";
const STATIC_PROPS_ID = "__N_SSG";
const SERVER_PROPS_ID = "__N_SSP";
const GOOGLE_FONT_PROVIDER = "https://fonts.googleapis.com/";
const OPTIMIZED_FONT_PROVIDERS = [
    {
        url: GOOGLE_FONT_PROVIDER,
        preconnect: "https://fonts.gstatic.com"
    },
    {
        url: "https://use.typekit.net",
        preconnect: "https://use.typekit.net"
    }
];
const DEFAULT_SERIF_FONT = {
    name: "Times New Roman",
    xAvgCharWidth: 821,
    azAvgWidth: 854.3953488372093,
    unitsPerEm: 2048
};
const DEFAULT_SANS_SERIF_FONT = {
    name: "Arial",
    xAvgCharWidth: 904,
    azAvgWidth: 934.5116279069767,
    unitsPerEm: 2048
};
const STATIC_STATUS_PAGES = [
    "/500"
];
const TRACE_OUTPUT_VERSION = 1;
const TURBO_TRACE_DEFAULT_MEMORY_LIMIT = 6000;
const RSC_MODULE_TYPES = {
    client: "client",
    server: "server"
};
const EDGE_UNSUPPORTED_NODE_APIS = [
    "clearImmediate",
    "setImmediate",
    "BroadcastChannel",
    "ByteLengthQueuingStrategy",
    "CompressionStream",
    "CountQueuingStrategy",
    "DecompressionStream",
    "DomException",
    "MessageChannel",
    "MessageEvent",
    "MessagePort",
    "ReadableByteStreamController",
    "ReadableStreamBYOBRequest",
    "ReadableStreamDefaultController",
    "TransformStreamDefaultController",
    "WritableStreamDefaultController"
];
const SYSTEM_ENTRYPOINTS = new Set([
    CLIENT_STATIC_FILES_RUNTIME_MAIN,
    CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH,
    CLIENT_STATIC_FILES_RUNTIME_AMP,
    CLIENT_STATIC_FILES_RUNTIME_MAIN_APP
]);
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=constants.js.map


/***/ }),

/***/ 8584:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "encodeURIPath", ({
    enumerable: true,
    get: function() {
        return encodeURIPath;
    }
}));
function encodeURIPath(file) {
    return file.split("/").map((p)=>encodeURIComponent(p)).join("/");
} //# sourceMappingURL=encode-uri-path.js.map


/***/ }),

/***/ 50494:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
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
    default: function() {
        return _default;
    },
    defaultHead: function() {
        return defaultHead;
    }
});
const _interop_require_default = __webpack_require__(50167);
const _interop_require_wildcard = __webpack_require__(28760);
const _jsxruntime = __webpack_require__(20997);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(16689));
const _sideeffect = /*#__PURE__*/ _interop_require_default._(__webpack_require__(3657));
const _ampcontextsharedruntime = __webpack_require__(98039);
const _headmanagercontextsharedruntime = __webpack_require__(41988);
const _ampmode = __webpack_require__(98579);
const _warnonce = __webpack_require__(79784);
function defaultHead(inAmpMode) {
    if (inAmpMode === void 0) inAmpMode = false;
    const head = [
        /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
            charSet: "utf-8"
        })
    ];
    if (!inAmpMode) {
        head.push(/*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }));
    }
    return head;
}
function onlyReactElement(list, child) {
    // React children can be "string" or "number" in this case we ignore them for backwards compat
    if (typeof child === "string" || typeof child === "number") {
        return list;
    }
    // Adds support for React.Fragment
    if (child.type === _react.default.Fragment) {
        return list.concat(_react.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild)=>{
            if (typeof fragmentChild === "string" || typeof fragmentChild === "number") {
                return fragmentList;
            }
            return fragmentList.concat(fragmentChild);
        }, []));
    }
    return list.concat(child);
}
const METATYPES = [
    "name",
    "httpEquiv",
    "charSet",
    "itemProp"
];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/ function unique() {
    const keys = new Set();
    const tags = new Set();
    const metaTypes = new Set();
    const metaCategories = {};
    return (h)=>{
        let isUnique = true;
        let hasKey = false;
        if (h.key && typeof h.key !== "number" && h.key.indexOf("$") > 0) {
            hasKey = true;
            const key = h.key.slice(h.key.indexOf("$") + 1);
            if (keys.has(key)) {
                isUnique = false;
            } else {
                keys.add(key);
            }
        }
        // eslint-disable-next-line default-case
        switch(h.type){
            case "title":
            case "base":
                if (tags.has(h.type)) {
                    isUnique = false;
                } else {
                    tags.add(h.type);
                }
                break;
            case "meta":
                for(let i = 0, len = METATYPES.length; i < len; i++){
                    const metatype = METATYPES[i];
                    if (!h.props.hasOwnProperty(metatype)) continue;
                    if (metatype === "charSet") {
                        if (metaTypes.has(metatype)) {
                            isUnique = false;
                        } else {
                            metaTypes.add(metatype);
                        }
                    } else {
                        const category = h.props[metatype];
                        const categories = metaCategories[metatype] || new Set();
                        if ((metatype !== "name" || !hasKey) && categories.has(category)) {
                            isUnique = false;
                        } else {
                            categories.add(category);
                            metaCategories[metatype] = categories;
                        }
                    }
                }
                break;
        }
        return isUnique;
    };
}
/**
 *
 * @param headChildrenElements List of children of <Head>
 */ function reduceComponents(headChildrenElements, props) {
    const { inAmpMode } = props;
    return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(defaultHead(inAmpMode).reverse()).filter(unique()).reverse().map((c, i)=>{
        const key = c.key || i;
        if ( true && !inAmpMode) {
            if (c.type === "link" && c.props["href"] && // TODO(prateekbh@): Replace this with const from `constants` when the tree shaking works.
            [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/"
            ].some((url)=>c.props["href"].startsWith(url))) {
                const newProps = {
                    ...c.props || {}
                };
                newProps["data-href"] = newProps["href"];
                newProps["href"] = undefined;
                // Add this attribute to make it easy to identify optimized tags
                newProps["data-optimized-fonts"] = true;
                return /*#__PURE__*/ _react.default.cloneElement(c, newProps);
            }
        }
        if (false) {}
        return /*#__PURE__*/ _react.default.cloneElement(c, {
            key
        });
    });
}
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */ function Head(param) {
    let { children } = param;
    const ampState = (0, _react.useContext)(_ampcontextsharedruntime.AmpStateContext);
    const headManager = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_sideeffect.default, {
        reduceComponentsToState: reduceComponents,
        headManager: headManager,
        inAmpMode: (0, _ampmode.isInAmpMode)(ampState),
        children: children
    });
}
const _default = Head;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=head.js.map


/***/ }),

/***/ 58299:
/***/ ((__unused_webpack_module, exports) => {

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
    getObjectClassLabel: function() {
        return getObjectClassLabel;
    },
    isPlainObject: function() {
        return isPlainObject;
    }
});
function getObjectClassLabel(value) {
    return Object.prototype.toString.call(value);
}
function isPlainObject(value) {
    if (getObjectClassLabel(value) !== "[object Object]") {
        return false;
    }
    const prototype = Object.getPrototypeOf(value);
    /**
   * this used to be previously:
   *
   * `return prototype === null || prototype === Object.prototype`
   *
   * but Edge Runtime expose Object from vm, being that kind of type-checking wrongly fail.
   *
   * It was changed to the current implementation since it's resilient to serialization.
   */ return prototype === null || prototype.hasOwnProperty("isPrototypeOf");
} //# sourceMappingURL=is-plain-object.js.map


/***/ }),

/***/ 60979:
/***/ ((module) => {

"use strict";
// Note: This file is JS because it's used by the taskfile-swc.js file, which is JS.
// Keep file changes in sync with the corresponding `.d.ts` files.
/**
 * These are the browser versions that support all of the following:
 * static import: https://caniuse.com/es6-module
 * dynamic import: https://caniuse.com/es6-module-dynamic-import
 * import.meta: https://caniuse.com/mdn-javascript_operators_import_meta
 */ 
const MODERN_BROWSERSLIST_TARGET = [
    "chrome 64",
    "edge 79",
    "firefox 67",
    "opera 51",
    "safari 12"
];
module.exports = MODERN_BROWSERSLIST_TARGET; //# sourceMappingURL=modern-browserslist-target.js.map


/***/ }),

/***/ 75876:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "denormalizePagePath", ({
    enumerable: true,
    get: function() {
        return denormalizePagePath;
    }
}));
const _utils = __webpack_require__(72189);
const _normalizepathsep = __webpack_require__(24212);
function denormalizePagePath(page) {
    let _page = (0, _normalizepathsep.normalizePathSep)(page);
    return _page.startsWith("/index/") && !(0, _utils.isDynamicRoute)(_page) ? _page.slice(6) : _page !== "/index" ? _page : "/";
} //# sourceMappingURL=denormalize-page-path.js.map


/***/ }),

/***/ 75078:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * For a given page path, this function ensures that there is a leading slash.
 * If there is not a leading slash, one is added, otherwise it is noop.
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ensureLeadingSlash", ({
    enumerable: true,
    get: function() {
        return ensureLeadingSlash;
    }
}));
function ensureLeadingSlash(path) {
    return path.startsWith("/") ? path : "/" + path;
} //# sourceMappingURL=ensure-leading-slash.js.map


/***/ }),

/***/ 49431:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "normalizePagePath", ({
    enumerable: true,
    get: function() {
        return normalizePagePath;
    }
}));
const _ensureleadingslash = __webpack_require__(75078);
const _utils = __webpack_require__(72189);
const _utils1 = __webpack_require__(45782);
function normalizePagePath(page) {
    const normalized = /^\/index(\/|$)/.test(page) && !(0, _utils.isDynamicRoute)(page) ? "/index" + page : page === "/" ? "/index" : (0, _ensureleadingslash.ensureLeadingSlash)(page);
    if (true) {
        const { posix } = __webpack_require__(71017);
        const resolvedPage = posix.normalize(normalized);
        if (resolvedPage !== normalized) {
            throw new _utils1.NormalizeError("Requested and resolved page mismatch: " + normalized + " " + resolvedPage);
        }
    }
    return normalized;
} //# sourceMappingURL=normalize-page-path.js.map


/***/ }),

/***/ 24212:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * For a given page path, this function ensures that there is no backslash
 * escaping slashes in the path. Example:
 *  - `foo\/bar\/baz` -> `foo/bar/baz`
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "normalizePathSep", ({
    enumerable: true,
    get: function() {
        return normalizePathSep;
    }
}));
function normalizePathSep(path) {
    return path.replace(/\\/g, "/");
} //# sourceMappingURL=normalize-path-sep.js.map


/***/ }),

/***/ 42340:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
    normalizeAppPath: function() {
        return normalizeAppPath;
    },
    normalizeRscURL: function() {
        return normalizeRscURL;
    }
});
const _ensureleadingslash = __webpack_require__(75078);
const _segment = __webpack_require__(73737);
function normalizeAppPath(route) {
    return (0, _ensureleadingslash.ensureLeadingSlash)(route.split("/").reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if ((0, _segment.isGroupSegment)(segment)) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment[0] === "@") {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === "page" || segment === "route") && index === segments.length - 1) {
            return pathname;
        }
        return pathname + "/" + segment;
    }, ""));
}
function normalizeRscURL(url) {
    return url.replace(/\.rsc($|\?)/, "$1");
} //# sourceMappingURL=app-paths.js.map


/***/ }),

/***/ 72189:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
    getSortedRoutes: function() {
        return _sortedroutes.getSortedRoutes;
    },
    isDynamicRoute: function() {
        return _isdynamic.isDynamicRoute;
    }
});
const _sortedroutes = __webpack_require__(317);
const _isdynamic = __webpack_require__(31735); //# sourceMappingURL=index.js.map


/***/ }),

/***/ 31735:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isDynamicRoute", ({
    enumerable: true,
    get: function() {
        return isDynamicRoute;
    }
}));
const _interceptionroutes = __webpack_require__(92407);
// Identify /[param]/ in route string
const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
function isDynamicRoute(route) {
    if ((0, _interceptionroutes.isInterceptionRouteAppPath)(route)) {
        route = (0, _interceptionroutes.extractInterceptionRouteInformation)(route).interceptedRoute;
    }
    return TEST_ROUTE.test(route);
} //# sourceMappingURL=is-dynamic.js.map


/***/ }),

/***/ 317:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getSortedRoutes", ({
    enumerable: true,
    get: function() {
        return getSortedRoutes;
    }
}));
class UrlNode {
    insert(urlPath) {
        this._insert(urlPath.split("/").filter(Boolean), [], false);
    }
    smoosh() {
        return this._smoosh();
    }
    _smoosh(prefix) {
        if (prefix === void 0) prefix = "/";
        const childrenPaths = [
            ...this.children.keys()
        ].sort();
        if (this.slugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf("[]"), 1);
        }
        if (this.restSlugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf("[...]"), 1);
        }
        if (this.optionalRestSlugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf("[[...]]"), 1);
        }
        const routes = childrenPaths.map((c)=>this.children.get(c)._smoosh("" + prefix + c + "/")).reduce((prev, curr)=>[
                ...prev,
                ...curr
            ], []);
        if (this.slugName !== null) {
            routes.push(...this.children.get("[]")._smoosh(prefix + "[" + this.slugName + "]/"));
        }
        if (!this.placeholder) {
            const r = prefix === "/" ? "/" : prefix.slice(0, -1);
            if (this.optionalRestSlugName != null) {
                throw new Error('You cannot define a route with the same specificity as a optional catch-all route ("' + r + '" and "' + r + "[[..." + this.optionalRestSlugName + ']]").');
            }
            routes.unshift(r);
        }
        if (this.restSlugName !== null) {
            routes.push(...this.children.get("[...]")._smoosh(prefix + "[..." + this.restSlugName + "]/"));
        }
        if (this.optionalRestSlugName !== null) {
            routes.push(...this.children.get("[[...]]")._smoosh(prefix + "[[..." + this.optionalRestSlugName + "]]/"));
        }
        return routes;
    }
    _insert(urlPaths, slugNames, isCatchAll) {
        if (urlPaths.length === 0) {
            this.placeholder = false;
            return;
        }
        if (isCatchAll) {
            throw new Error("Catch-all must be the last part of the URL.");
        }
        // The next segment in the urlPaths list
        let nextSegment = urlPaths[0];
        // Check if the segment matches `[something]`
        if (nextSegment.startsWith("[") && nextSegment.endsWith("]")) {
            // Strip `[` and `]`, leaving only `something`
            let segmentName = nextSegment.slice(1, -1);
            let isOptional = false;
            if (segmentName.startsWith("[") && segmentName.endsWith("]")) {
                // Strip optional `[` and `]`, leaving only `something`
                segmentName = segmentName.slice(1, -1);
                isOptional = true;
            }
            if (segmentName.startsWith("...")) {
                // Strip `...`, leaving only `something`
                segmentName = segmentName.substring(3);
                isCatchAll = true;
            }
            if (segmentName.startsWith("[") || segmentName.endsWith("]")) {
                throw new Error("Segment names may not start or end with extra brackets ('" + segmentName + "').");
            }
            if (segmentName.startsWith(".")) {
                throw new Error("Segment names may not start with erroneous periods ('" + segmentName + "').");
            }
            function handleSlug(previousSlug, nextSlug) {
                if (previousSlug !== null) {
                    // If the specific segment already has a slug but the slug is not `something`
                    // This prevents collisions like:
                    // pages/[post]/index.js
                    // pages/[id]/index.js
                    // Because currently multiple dynamic params on the same segment level are not supported
                    if (previousSlug !== nextSlug) {
                        // TODO: This error seems to be confusing for users, needs an error link, the description can be based on above comment.
                        throw new Error("You cannot use different slug names for the same dynamic path ('" + previousSlug + "' !== '" + nextSlug + "').");
                    }
                }
                slugNames.forEach((slug)=>{
                    if (slug === nextSlug) {
                        throw new Error('You cannot have the same slug name "' + nextSlug + '" repeat within a single dynamic path');
                    }
                    if (slug.replace(/\W/g, "") === nextSegment.replace(/\W/g, "")) {
                        throw new Error('You cannot have the slug names "' + slug + '" and "' + nextSlug + '" differ only by non-word symbols within a single dynamic path');
                    }
                });
                slugNames.push(nextSlug);
            }
            if (isCatchAll) {
                if (isOptional) {
                    if (this.restSlugName != null) {
                        throw new Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + urlPaths[0] + '" ).');
                    }
                    handleSlug(this.optionalRestSlugName, segmentName);
                    // slugName is kept as it can only be one particular slugName
                    this.optionalRestSlugName = segmentName;
                    // nextSegment is overwritten to [[...]] so that it can later be sorted specifically
                    nextSegment = "[[...]]";
                } else {
                    if (this.optionalRestSlugName != null) {
                        throw new Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + urlPaths[0] + '").');
                    }
                    handleSlug(this.restSlugName, segmentName);
                    // slugName is kept as it can only be one particular slugName
                    this.restSlugName = segmentName;
                    // nextSegment is overwritten to [...] so that it can later be sorted specifically
                    nextSegment = "[...]";
                }
            } else {
                if (isOptional) {
                    throw new Error('Optional route parameters are not yet supported ("' + urlPaths[0] + '").');
                }
                handleSlug(this.slugName, segmentName);
                // slugName is kept as it can only be one particular slugName
                this.slugName = segmentName;
                // nextSegment is overwritten to [] so that it can later be sorted specifically
                nextSegment = "[]";
            }
        }
        // If this UrlNode doesn't have the nextSegment yet we create a new child UrlNode
        if (!this.children.has(nextSegment)) {
            this.children.set(nextSegment, new UrlNode());
        }
        this.children.get(nextSegment)._insert(urlPaths.slice(1), slugNames, isCatchAll);
    }
    constructor(){
        this.placeholder = true;
        this.children = new Map();
        this.slugName = null;
        this.restSlugName = null;
        this.optionalRestSlugName = null;
    }
}
function getSortedRoutes(normalizedPages) {
    // First the UrlNode is created, and every UrlNode can have only 1 dynamic segment
    // Eg you can't have pages/[post]/abc.js and pages/[hello]/something-else.js
    // Only 1 dynamic segment per nesting level
    // So in the case that is test/integration/dynamic-routing it'll be this:
    // pages/[post]/comments.js
    // pages/blog/[post]/comment/[id].js
    // Both are fine because `pages/[post]` and `pages/blog` are on the same level
    // So in this case `UrlNode` created here has `this.slugName === 'post'`
    // And since your PR passed through `slugName` as an array basically it'd including it in too many possibilities
    // Instead what has to be passed through is the upwards path's dynamic names
    const root = new UrlNode();
    // Here the `root` gets injected multiple paths, and insert will break them up into sublevels
    normalizedPages.forEach((pagePath)=>root.insert(pagePath));
    // Smoosh will then sort those sublevels up to the point where you get the correct route definition priority
    return root.smoosh();
} //# sourceMappingURL=sorted-routes.js.map


/***/ }),

/***/ 73737:
/***/ ((__unused_webpack_module, exports) => {

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
    DEFAULT_SEGMENT_KEY: function() {
        return DEFAULT_SEGMENT_KEY;
    },
    PAGE_SEGMENT_KEY: function() {
        return PAGE_SEGMENT_KEY;
    },
    isGroupSegment: function() {
        return isGroupSegment;
    }
});
function isGroupSegment(segment) {
    // Use array[0] for performant purpose
    return segment[0] === "(" && segment.endsWith(")");
}
const PAGE_SEGMENT_KEY = "__PAGE__";
const DEFAULT_SEGMENT_KEY = "__DEFAULT__"; //# sourceMappingURL=segment.js.map


/***/ }),

/***/ 3657:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return SideEffect;
    }
}));
const _react = __webpack_require__(16689);
const isServer = "undefined" === "undefined";
const useClientOnlyLayoutEffect = isServer ? ()=>{} : _react.useLayoutEffect;
const useClientOnlyEffect = isServer ? ()=>{} : _react.useEffect;
function SideEffect(props) {
    const { headManager, reduceComponentsToState } = props;
    function emitChange() {
        if (headManager && headManager.mountedInstances) {
            const headElements = _react.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));
            headManager.updateHead(reduceComponentsToState(headElements, props));
        }
    }
    if (isServer) {
        var _headManager_mountedInstances;
        headManager == null ? void 0 : (_headManager_mountedInstances = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances.add(props.children);
        emitChange();
    }
    useClientOnlyLayoutEffect(()=>{
        var _headManager_mountedInstances;
        headManager == null ? void 0 : (_headManager_mountedInstances = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances.add(props.children);
        return ()=>{
            var _headManager_mountedInstances;
            headManager == null ? void 0 : (_headManager_mountedInstances = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances.delete(props.children);
        };
    });
    // We need to call `updateHead` method whenever the `SideEffect` is trigger in all
    // life-cycles: mount, update, unmount. However, if there are multiple `SideEffect`s
    // being rendered, we only trigger the method from the last one.
    // This is ensured by keeping the last unflushed `updateHead` in the `_pendingUpdate`
    // singleton in the layout effect pass, and actually trigger it in the effect pass.
    useClientOnlyLayoutEffect(()=>{
        if (headManager) {
            headManager._pendingUpdate = emitChange;
        }
        return ()=>{
            if (headManager) {
                headManager._pendingUpdate = emitChange;
            }
        };
    });
    useClientOnlyEffect(()=>{
        if (headManager && headManager._pendingUpdate) {
            headManager._pendingUpdate();
            headManager._pendingUpdate = null;
        }
        return ()=>{
            if (headManager && headManager._pendingUpdate) {
                headManager._pendingUpdate();
                headManager._pendingUpdate = null;
            }
        };
    });
    return null;
} //# sourceMappingURL=side-effect.js.map


/***/ }),

/***/ 45782:
/***/ ((__unused_webpack_module, exports) => {

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
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    "CLS",
    "FCP",
    "FID",
    "INP",
    "LCP",
    "TTFB"
];
function execOnce(fn) {
    let used = false;
    let result;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return protocol + "//" + hostname + (port ? ":" + port : "");
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === "string" ? Component : Component.displayName || Component.name || "Unknown";
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split("?");
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, "/").replace(/\/\/+/g, "/") + (urlParts[1] ? "?" + urlParts.slice(1).join("?") : "");
}
async function loadGetInitialProps(App, ctx) {
    if (false) { var _App_prototype; }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
        throw new Error(message);
    }
    if (false) {}
    return props;
}
const SP = typeof performance !== "undefined";
const ST = SP && [
    "mark",
    "measure",
    "getEntriesByName"
].every((method)=>typeof performance[method] === "function");
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = "ENOENT";
        this.name = "PageNotFoundError";
        this.message = "Cannot find module for page: " + page;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = "Failed to load static file for page: " + page + " " + message;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = "ENOENT";
        this.message = "Cannot find the middleware module";
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map


/***/ }),

/***/ 79784:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "warnOnce", ({
    enumerable: true,
    get: function() {
        return warnOnce;
    }
}));
let warnOnce = (_)=>{};
if (false) {} //# sourceMappingURL=warn-once.js.map


/***/ }),

/***/ 80676:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
    default: function() {
        return isError;
    },
    getProperError: function() {
        return getProperError;
    }
});
const _isplainobject = __webpack_require__(58299);
function isError(err) {
    return typeof err === "object" && err !== null && "name" in err && "message" in err;
}
function getProperError(err) {
    if (isError(err)) {
        return err;
    }
    if (false) {}
    return new Error((0, _isplainobject.isPlainObject)(err) ? JSON.stringify(err) : err + "");
}

//# sourceMappingURL=is-error.js.map

/***/ }),

/***/ 95955:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;
/*
MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/ 
__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return prettyBytes;
    }
}));
const UNITS = [
    "B",
    "kB",
    "MB",
    "GB",
    "TB",
    "PB",
    "EB",
    "ZB",
    "YB"
];
/*
Formats the given number using `Number#toLocaleString`.
- If locale is a string, the value is expected to be a locale-key (for example: `de`).
- If locale is true, the system default locale is used for translation.
- If no value for locale is specified, the number is returned unmodified.
*/ const toLocaleString = (number, locale)=>{
    let result = number;
    if (typeof locale === "string") {
        result = number.toLocaleString(locale);
    } else if (locale === true) {
        result = number.toLocaleString();
    }
    return result;
};
function prettyBytes(number, options) {
    if (!Number.isFinite(number)) {
        throw new TypeError(`Expected a finite number, got ${typeof number}: ${number}`);
    }
    options = Object.assign({}, options);
    if (options.signed && number === 0) {
        return " 0 B";
    }
    const isNegative = number < 0;
    const prefix = isNegative ? "-" : options.signed ? "+" : "";
    if (isNegative) {
        number = -number;
    }
    if (number < 1) {
        const numberString = toLocaleString(number, options.locale);
        return prefix + numberString + " B";
    }
    const exponent = Math.min(Math.floor(Math.log10(number) / 3), UNITS.length - 1);
    number = Number((number / Math.pow(1000, exponent)).toPrecision(3));
    const numberString = toLocaleString(number, options.locale);
    const unit = UNITS[exponent];
    return prefix + numberString + " " + unit;
}

//# sourceMappingURL=pretty-bytes.js.map

/***/ }),

/***/ 92407:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
    INTERCEPTION_ROUTE_MARKERS: function() {
        return INTERCEPTION_ROUTE_MARKERS;
    },
    extractInterceptionRouteInformation: function() {
        return extractInterceptionRouteInformation;
    },
    isInterceptionRouteAppPath: function() {
        return isInterceptionRouteAppPath;
    }
});
const _apppaths = __webpack_require__(42340);
const INTERCEPTION_ROUTE_MARKERS = [
    "(..)(..)",
    "(.)",
    "(..)",
    "(...)"
];
function isInterceptionRouteAppPath(path) {
    // TODO-APP: add more serious validation
    return path.split("/").find((segment)=>INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m))) !== undefined;
}
function extractInterceptionRouteInformation(path) {
    let interceptingRoute, marker, interceptedRoute;
    for (const segment of path.split("/")){
        marker = INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
        if (marker) {
            [interceptingRoute, interceptedRoute] = path.split(marker, 2);
            break;
        }
    }
    if (!interceptingRoute || !marker || !interceptedRoute) {
        throw new Error(`Invalid interception route: ${path}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);
    }
    interceptingRoute = (0, _apppaths.normalizeAppPath)(interceptingRoute) // normalize the path, e.g. /(blog)/feed -> /feed
    ;
    switch(marker){
        case "(.)":
            // (.) indicates that we should match with sibling routes, so we just need to append the intercepted route to the intercepting route
            if (interceptingRoute === "/") {
                interceptedRoute = `/${interceptedRoute}`;
            } else {
                interceptedRoute = interceptingRoute + "/" + interceptedRoute;
            }
            break;
        case "(..)":
            // (..) indicates that we should match at one level up, so we need to remove the last segment of the intercepting route
            if (interceptingRoute === "/") {
                throw new Error(`Invalid interception route: ${path}. Cannot use (..) marker at the root level, use (.) instead.`);
            }
            interceptedRoute = interceptingRoute.split("/").slice(0, -1).concat(interceptedRoute).join("/");
            break;
        case "(...)":
            // (...) will match the route segment in the root directory, so we need to use the root directory to prepend the intercepted route
            interceptedRoute = "/" + interceptedRoute;
            break;
        case "(..)(..)":
            // (..)(..) indicates that we should match at two levels up, so we need to remove the last two segments of the intercepting route
            const splitInterceptingRoute = interceptingRoute.split("/");
            if (splitInterceptingRoute.length <= 2) {
                throw new Error(`Invalid interception route: ${path}. Cannot use (..)(..) marker at the root level or one level up.`);
            }
            interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join("/");
            break;
        default:
            throw new Error("Invariant: unexpected marker");
    }
    return {
        interceptingRoute,
        interceptedRoute
    };
}

//# sourceMappingURL=interception-routes.js.map

/***/ }),

/***/ 35244:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "x", ({
    enumerable: true,
    get: function() {
        return RouteKind;
    }
}));
var RouteKind;
(function(RouteKind) {
    /**
   * `PAGES` represents all the React pages that are under `pages/`.
   */ RouteKind["PAGES"] = "PAGES";
    /**
   * `PAGES_API` represents all the API routes under `pages/api/`.
   */ RouteKind["PAGES_API"] = "PAGES_API";
    /**
   * `APP_PAGE` represents all the React pages that are under `app/` with the
   * filename of `page.{j,t}s{,x}`.
   */ RouteKind["APP_PAGE"] = "APP_PAGE";
    /**
   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the
   * filename of `route.{j,t}s{,x}`.
   */ RouteKind["APP_ROUTE"] = "APP_ROUTE";
})(RouteKind || (RouteKind = {}));

//# sourceMappingURL=route-kind.js.map

/***/ }),

/***/ 87093:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (false) {} else {
    if (false) {} else if (false) {} else {
        module.exports = __webpack_require__(62785);
    }
}

//# sourceMappingURL=module.compiled.js.map

/***/ }),

/***/ 98039:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(87093).vendored.contexts.AmpContext;

//# sourceMappingURL=amp-context.js.map

/***/ }),

/***/ 41988:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(87093).vendored.contexts.HeadManagerContext;

//# sourceMappingURL=head-manager-context.js.map

/***/ }),

/***/ 3112:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(87093).vendored.contexts.HtmlContext;

//# sourceMappingURL=html-context.js.map

/***/ }),

/***/ 75778:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getPageFiles", ({
    enumerable: true,
    get: function() {
        return getPageFiles;
    }
}));
const _denormalizepagepath = __webpack_require__(75876);
const _normalizepagepath = __webpack_require__(49431);
function getPageFiles(buildManifest, page) {
    const normalizedPage = (0, _denormalizepagepath.denormalizePagePath)((0, _normalizepagepath.normalizePagePath)(page));
    let files = buildManifest.pages[normalizedPage];
    if (!files) {
        console.warn(`Could not find files for ${normalizedPage} in .next/build-manifest.json`);
        return [];
    }
    return files;
}

//# sourceMappingURL=get-page-files.js.map

/***/ }),

/***/ 79630:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE

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
    ESCAPE_REGEX: function() {
        return ESCAPE_REGEX;
    },
    htmlEscapeJsonString: function() {
        return htmlEscapeJsonString;
    }
});
const ESCAPE_LOOKUP = {
    "&": "\\u0026",
    ">": "\\u003e",
    "<": "\\u003c",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
};
const ESCAPE_REGEX = /[&><\u2028\u2029]/g;
function htmlEscapeJsonString(str) {
    return str.replace(ESCAPE_REGEX, (match)=>ESCAPE_LOOKUP[match]);
}

//# sourceMappingURL=htmlescape.js.map

/***/ }),

/***/ 50733:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
    cleanAmpPath: function() {
        return cleanAmpPath;
    },
    debounce: function() {
        return debounce;
    },
    isBlockedPage: function() {
        return isBlockedPage;
    }
});
const _constants = __webpack_require__(45104);
function isBlockedPage(page) {
    return _constants.BLOCKED_PAGES.includes(page);
}
function cleanAmpPath(pathname) {
    if (pathname.match(/\?amp=(y|yes|true|1)/)) {
        pathname = pathname.replace(/\?amp=(y|yes|true|1)&?/, "?");
    }
    if (pathname.match(/&amp=(y|yes|true|1)/)) {
        pathname = pathname.replace(/&amp=(y|yes|true|1)/, "");
    }
    pathname = pathname.replace(/\?$/, "");
    return pathname;
}
function debounce(fn, ms, maxWait = Infinity) {
    let timeoutId;
    // The time the debouncing function was first called during this debounce queue.
    let startTime = 0;
    // The time the debouncing function was last called.
    let lastCall = 0;
    // The arguments and this context of the last call to the debouncing function.
    let args, context;
    // A helper used to that either invokes the debounced function, or
    // reschedules the timer if a more recent call was made.
    function run() {
        const now = Date.now();
        const diff = lastCall + ms - now;
        // If the diff is non-positive, then we've waited at least `ms`
        // milliseconds since the last call. Or if we've waited for longer than the
        // max wait time, we must call the debounced function.
        if (diff <= 0 || startTime + maxWait >= now) {
            // It's important to clear the timeout id before invoking the debounced
            // function, in case the function calls the debouncing function again.
            timeoutId = undefined;
            fn.apply(context, args);
        } else {
            // Else, a new call was made after the original timer was scheduled. We
            // didn't clear the timeout (doing so is very slow), so now we need to
            // reschedule the timer for the time difference.
            timeoutId = setTimeout(run, diff);
        }
    }
    return function(...passedArgs) {
        // The arguments and this context of the most recent call are saved so the
        // debounced function can be invoked with them later.
        args = passedArgs;
        context = this;
        // Instead of constantly clearing and scheduling a timer, we record the
        // time of the last call. If a second call comes in before the timer fires,
        // then we'll reschedule in the run function. Doing this is considerably
        // faster.
        lastCall = Date.now();
        // Only schedule a new timer if we're not currently waiting.
        if (timeoutId === undefined) {
            startTime = lastCall;
            timeoutId = setTimeout(run, ms);
        }
    };
}

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 16809:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__monaSans_557683', '__monaSans_Fallback_557683'"},
	"className": "__className_557683",
	"variable": "__variable_557683"
};


/***/ }),

/***/ 46226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport default from dynamic */ _shared_lib_image_external__WEBPACK_IMPORTED_MODULE_0___default.a)
/* harmony export */ });
/* harmony import */ var _shared_lib_image_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69029);
/* harmony import */ var _shared_lib_image_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_shared_lib_image_external__WEBPACK_IMPORTED_MODULE_0__);



//# sourceMappingURL=image.js.map

/***/ }),

/***/ 90434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport default from dynamic */ _client_link__WEBPACK_IMPORTED_MODULE_0___default.a)
/* harmony export */ });
/* harmony import */ var _client_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79404);
/* harmony import */ var _client_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_client_link__WEBPACK_IMPORTED_MODULE_0__);



//# sourceMappingURL=link.js.map

/***/ }),

/***/ 35047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77389);
/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__, "useParams")) __webpack_require__.d(__webpack_exports__, { useParams: function() { return _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__.useParams; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__, "usePathname")) __webpack_require__.d(__webpack_exports__, { usePathname: function() { return _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__.usePathname; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__, "useRouter")) __webpack_require__.d(__webpack_exports__, { useRouter: function() { return _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__.useRouter; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__, "useSearchParams")) __webpack_require__.d(__webpack_exports__, { useSearchParams: function() { return _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__.useSearchParams; } });


//# sourceMappingURL=navigation.js.map

/***/ }),

/***/ 3486:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addBasePath", ({
    enumerable: true,
    get: function() {
        return addBasePath;
    }
}));
const _addpathprefix = __webpack_require__(8974);
const _normalizetrailingslash = __webpack_require__(23658);
const basePath =  false || "";
function addBasePath(path, required) {
    return (0, _normalizetrailingslash.normalizePathTrailingSlash)( false ? 0 : (0, _addpathprefix.addPathPrefix)(path, basePath));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-base-path.js.map


/***/ }),

/***/ 53416:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addLocale", ({
    enumerable: true,
    get: function() {
        return addLocale;
    }
}));
const _normalizetrailingslash = __webpack_require__(23658);
const addLocale = function(path) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    if (false) {}
    return path;
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-locale.js.map


/***/ }),

/***/ 15424:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "callServer", ({
    enumerable: true,
    get: function() {
        return callServer;
    }
}));
const _approuter = __webpack_require__(12994);
async function callServer(actionId, actionArgs) {
    const actionDispatcher = (0, _approuter.getServerActionDispatcher)();
    if (!actionDispatcher) {
        throw new Error("Invariant: missing action dispatcher.");
    }
    return new Promise((resolve, reject)=>{
        actionDispatcher({
            actionId,
            actionArgs,
            resolve,
            reject
        });
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-call-server.js.map


/***/ }),

/***/ 68038:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "AppRouterAnnouncer", ({
    enumerable: true,
    get: function() {
        return AppRouterAnnouncer;
    }
}));
const _react = __webpack_require__(17577);
const _reactdom = __webpack_require__(60962);
const ANNOUNCER_TYPE = "next-route-announcer";
const ANNOUNCER_ID = "__next-route-announcer__";
function getAnnouncerNode() {
    var _existingAnnouncer_shadowRoot;
    const existingAnnouncer = document.getElementsByName(ANNOUNCER_TYPE)[0];
    if (existingAnnouncer == null ? void 0 : (_existingAnnouncer_shadowRoot = existingAnnouncer.shadowRoot) == null ? void 0 : _existingAnnouncer_shadowRoot.childNodes[0]) {
        return existingAnnouncer.shadowRoot.childNodes[0];
    } else {
        const container = document.createElement(ANNOUNCER_TYPE);
        container.style.cssText = "position:absolute";
        const announcer = document.createElement("div");
        announcer.ariaLive = "assertive";
        announcer.id = ANNOUNCER_ID;
        announcer.role = "alert";
        announcer.style.cssText = "position:absolute;border:0;height:1px;margin:-1px;padding:0;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap;word-wrap:normal";
        // Use shadow DOM here to avoid any potential CSS bleed
        const shadow = container.attachShadow({
            mode: "open"
        });
        shadow.appendChild(announcer);
        document.body.appendChild(container);
        return announcer;
    }
}
function AppRouterAnnouncer(param) {
    let { tree } = param;
    const [portalNode, setPortalNode] = (0, _react.useState)(null);
    (0, _react.useEffect)(()=>{
        const announcer = getAnnouncerNode();
        setPortalNode(announcer);
        return ()=>{
            const container = document.getElementsByTagName(ANNOUNCER_TYPE)[0];
            if (container == null ? void 0 : container.isConnected) {
                document.body.removeChild(container);
            }
        };
    }, []);
    const [routeAnnouncement, setRouteAnnouncement] = (0, _react.useState)("");
    const previousTitle = (0, _react.useRef)();
    (0, _react.useEffect)(()=>{
        let currentTitle = "";
        if (document.title) {
            currentTitle = document.title;
        } else {
            const pageHeader = document.querySelector("h1");
            if (pageHeader) {
                currentTitle = pageHeader.innerText || pageHeader.textContent || "";
            }
        }
        // Only announce the title change, but not for the first load because screen
        // readers do that automatically.
        if (previousTitle.current !== undefined && previousTitle.current !== currentTitle) {
            setRouteAnnouncement(currentTitle);
        }
        previousTitle.current = currentTitle;
    }, [
        tree
    ]);
    return portalNode ? /*#__PURE__*/ (0, _reactdom.createPortal)(routeAnnouncement, portalNode) : null;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-announcer.js.map


/***/ }),

/***/ 5138:
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
    ACTION: function() {
        return ACTION;
    },
    FLIGHT_PARAMETERS: function() {
        return FLIGHT_PARAMETERS;
    },
    NEXT_DID_POSTPONE_HEADER: function() {
        return NEXT_DID_POSTPONE_HEADER;
    },
    NEXT_ROUTER_PREFETCH_HEADER: function() {
        return NEXT_ROUTER_PREFETCH_HEADER;
    },
    NEXT_ROUTER_STATE_TREE: function() {
        return NEXT_ROUTER_STATE_TREE;
    },
    NEXT_RSC_UNION_QUERY: function() {
        return NEXT_RSC_UNION_QUERY;
    },
    NEXT_URL: function() {
        return NEXT_URL;
    },
    RSC_CONTENT_TYPE_HEADER: function() {
        return RSC_CONTENT_TYPE_HEADER;
    },
    RSC_HEADER: function() {
        return RSC_HEADER;
    }
});
const RSC_HEADER = "RSC";
const ACTION = "Next-Action";
const NEXT_ROUTER_STATE_TREE = "Next-Router-State-Tree";
const NEXT_ROUTER_PREFETCH_HEADER = "Next-Router-Prefetch";
const NEXT_URL = "Next-Url";
const RSC_CONTENT_TYPE_HEADER = "text/x-component";
const FLIGHT_PARAMETERS = [
    [
        RSC_HEADER
    ],
    [
        NEXT_ROUTER_STATE_TREE
    ],
    [
        NEXT_ROUTER_PREFETCH_HEADER
    ]
];
const NEXT_RSC_UNION_QUERY = "_rsc";
const NEXT_DID_POSTPONE_HEADER = "x-nextjs-postponed";
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-headers.js.map


/***/ }),

/***/ 12994:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
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
    createEmptyCacheNode: function() {
        return createEmptyCacheNode;
    },
    default: function() {
        return AppRouter;
    },
    getServerActionDispatcher: function() {
        return getServerActionDispatcher;
    },
    urlToUrlWithoutFlightMarker: function() {
        return urlToUrlWithoutFlightMarker;
    }
});
const _interop_require_wildcard = __webpack_require__(58374);
const _jsxruntime = __webpack_require__(10326);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(17577));
const _approutercontextsharedruntime = __webpack_require__(52413);
const _routerreducertypes = __webpack_require__(57767);
const _createhreffromurl = __webpack_require__(17584);
const _hooksclientcontextsharedruntime = __webpack_require__(97008);
const _usereducerwithdevtools = __webpack_require__(77326);
const _errorboundary = __webpack_require__(9727);
const _createinitialrouterstate = __webpack_require__(6199);
const _isbot = __webpack_require__(32148);
const _addbasepath = __webpack_require__(3486);
const _approuterannouncer = __webpack_require__(68038);
const _redirectboundary = __webpack_require__(46265);
const _findheadincache = __webpack_require__(22492);
const _unresolvedthenable = __webpack_require__(39519);
const _approuterheaders = __webpack_require__(5138);
const _removebasepath = __webpack_require__(74237);
const _hasbasepath = __webpack_require__(37929);
const _segment = __webpack_require__(68071);
const isServer = "undefined" === "undefined";
// Ensure the initialParallelRoutes are not combined because of double-rendering in the browser with Strict Mode.
let initialParallelRoutes = isServer ? null : new Map();
let globalServerActionDispatcher = null;
function getServerActionDispatcher() {
    return globalServerActionDispatcher;
}
const globalMutable = {};
function urlToUrlWithoutFlightMarker(url) {
    const urlWithoutFlightParameters = new URL(url, location.origin);
    urlWithoutFlightParameters.searchParams.delete(_approuterheaders.NEXT_RSC_UNION_QUERY);
    if (true) {
        if (false) {}
    }
    return urlWithoutFlightParameters;
}
// this function performs a depth-first search of the tree to find the selected
// params
function getSelectedParams(currentTree, params) {
    if (params === void 0) params = {};
    const parallelRoutes = currentTree[1];
    for (const parallelRoute of Object.values(parallelRoutes)){
        const segment = parallelRoute[0];
        const isDynamicParameter = Array.isArray(segment);
        const segmentValue = isDynamicParameter ? segment[1] : segment;
        if (!segmentValue || segmentValue.startsWith(_segment.PAGE_SEGMENT_KEY)) continue;
        // Ensure catchAll and optional catchall are turned into an array
        const isCatchAll = isDynamicParameter && (segment[2] === "c" || segment[2] === "oc");
        if (isCatchAll) {
            params[segment[0]] = segment[1].split("/");
        } else if (isDynamicParameter) {
            params[segment[0]] = segment[1];
        }
        params = getSelectedParams(parallelRoute, params);
    }
    return params;
}
function isExternalURL(url) {
    return url.origin !== window.location.origin;
}
function HistoryUpdater(param) {
    let { appRouterState, sync } = param;
    (0, _react.useInsertionEffect)(()=>{
        const { tree, pushRef, canonicalUrl } = appRouterState;
        const historyState = {
            ...pushRef.preserveCustomHistoryState ? window.history.state : {},
            // Identifier is shortened intentionally.
            // __NA is used to identify if the history entry can be handled by the app-router.
            // __N is used to identify if the history entry can be handled by the old router.
            __NA: true,
            __PRIVATE_NEXTJS_INTERNALS_TREE: tree
        };
        if (pushRef.pendingPush && // Skip pushing an additional history entry if the canonicalUrl is the same as the current url.
        // This mirrors the browser behavior for normal navigation.
        (0, _createhreffromurl.createHrefFromUrl)(new URL(window.location.href)) !== canonicalUrl) {
            // This intentionally mutates React state, pushRef is overwritten to ensure additional push/replace calls do not trigger an additional history entry.
            pushRef.pendingPush = false;
            window.history.pushState(historyState, "", canonicalUrl);
        } else {
            window.history.replaceState(historyState, "", canonicalUrl);
        }
        sync(appRouterState);
    }, [
        appRouterState,
        sync
    ]);
    return null;
}
function createEmptyCacheNode() {
    return {
        lazyData: null,
        rsc: null,
        prefetchRsc: null,
        head: null,
        prefetchHead: null,
        parallelRoutes: new Map(),
        lazyDataResolved: false,
        loading: null
    };
}
function useServerActionDispatcher(dispatch) {
    const serverActionDispatcher = (0, _react.useCallback)((actionPayload)=>{
        (0, _react.startTransition)(()=>{
            dispatch({
                ...actionPayload,
                type: _routerreducertypes.ACTION_SERVER_ACTION
            });
        });
    }, [
        dispatch
    ]);
    globalServerActionDispatcher = serverActionDispatcher;
}
/**
 * Server response that only patches the cache and tree.
 */ function useChangeByServerResponse(dispatch) {
    return (0, _react.useCallback)((param)=>{
        let { previousTree, serverResponse } = param;
        (0, _react.startTransition)(()=>{
            dispatch({
                type: _routerreducertypes.ACTION_SERVER_PATCH,
                previousTree,
                serverResponse
            });
        });
    }, [
        dispatch
    ]);
}
function useNavigate(dispatch) {
    return (0, _react.useCallback)((href, navigateType, shouldScroll)=>{
        const url = new URL((0, _addbasepath.addBasePath)(href), location.href);
        return dispatch({
            type: _routerreducertypes.ACTION_NAVIGATE,
            url,
            isExternalUrl: isExternalURL(url),
            locationSearch: location.search,
            shouldScroll: shouldScroll != null ? shouldScroll : true,
            navigateType
        });
    }, [
        dispatch
    ]);
}
function copyNextJsInternalHistoryState(data) {
    if (data == null) data = {};
    const currentState = window.history.state;
    const __NA = currentState == null ? void 0 : currentState.__NA;
    if (__NA) {
        data.__NA = __NA;
    }
    const __PRIVATE_NEXTJS_INTERNALS_TREE = currentState == null ? void 0 : currentState.__PRIVATE_NEXTJS_INTERNALS_TREE;
    if (__PRIVATE_NEXTJS_INTERNALS_TREE) {
        data.__PRIVATE_NEXTJS_INTERNALS_TREE = __PRIVATE_NEXTJS_INTERNALS_TREE;
    }
    return data;
}
function Head(param) {
    let { headCacheNode } = param;
    // If this segment has a `prefetchHead`, it's the statically prefetched data.
    // We should use that on initial render instead of `head`. Then we'll switch
    // to `head` when the dynamic response streams in.
    const head = headCacheNode !== null ? headCacheNode.head : null;
    const prefetchHead = headCacheNode !== null ? headCacheNode.prefetchHead : null;
    // If no prefetch data is available, then we go straight to rendering `head`.
    const resolvedPrefetchRsc = prefetchHead !== null ? prefetchHead : head;
    // We use `useDeferredValue` to handle switching between the prefetched and
    // final values. The second argument is returned on initial render, then it
    // re-renders with the first argument.
    //
    // @ts-expect-error The second argument to `useDeferredValue` is only
    // available in the experimental builds. When its disabled, it will always
    // return `head`.
    return (0, _react.useDeferredValue)(head, resolvedPrefetchRsc);
}
/**
 * The global router that wraps the application components.
 */ function Router(param) {
    let { buildId, initialHead, initialTree, urlParts, initialSeedData, couldBeIntercepted, assetPrefix, missingSlots } = param;
    const initialState = (0, _react.useMemo)(()=>(0, _createinitialrouterstate.createInitialRouterState)({
            buildId,
            initialSeedData,
            urlParts,
            initialTree,
            initialParallelRoutes,
            location: !isServer ? window.location : null,
            initialHead,
            couldBeIntercepted
        }), [
        buildId,
        initialSeedData,
        urlParts,
        initialTree,
        initialHead,
        couldBeIntercepted
    ]);
    const [reducerState, dispatch, sync] = (0, _usereducerwithdevtools.useReducerWithReduxDevtools)(initialState);
    (0, _react.useEffect)(()=>{
        // Ensure initialParallelRoutes is cleaned up from memory once it's used.
        initialParallelRoutes = null;
    }, []);
    const { canonicalUrl } = (0, _usereducerwithdevtools.useUnwrapState)(reducerState);
    // Add memoized pathname/query for useSearchParams and usePathname.
    const { searchParams, pathname } = (0, _react.useMemo)(()=>{
        const url = new URL(canonicalUrl,  true ? "http://n" : 0);
        return {
            // This is turned into a readonly class in `useSearchParams`
            searchParams: url.searchParams,
            pathname: (0, _hasbasepath.hasBasePath)(url.pathname) ? (0, _removebasepath.removeBasePath)(url.pathname) : url.pathname
        };
    }, [
        canonicalUrl
    ]);
    const changeByServerResponse = useChangeByServerResponse(dispatch);
    const navigate = useNavigate(dispatch);
    useServerActionDispatcher(dispatch);
    /**
   * The app router that is exposed through `useRouter`. It's only concerned with dispatching actions to the reducer, does not hold state.
   */ const appRouter = (0, _react.useMemo)(()=>{
        const routerInstance = {
            back: ()=>window.history.back(),
            forward: ()=>window.history.forward(),
            prefetch: (href, options)=>{
                // Don't prefetch for bots as they don't navigate.
                if ((0, _isbot.isBot)(window.navigator.userAgent)) {
                    return;
                }
                let url;
                try {
                    url = new URL((0, _addbasepath.addBasePath)(href), window.location.href);
                } catch (_) {
                    throw new Error("Cannot prefetch '" + href + "' because it cannot be converted to a URL.");
                }
                // Don't prefetch during development (improves compilation performance)
                if (false) {}
                // External urls can't be prefetched in the same way.
                if (isExternalURL(url)) {
                    return;
                }
                (0, _react.startTransition)(()=>{
                    var _options_kind;
                    dispatch({
                        type: _routerreducertypes.ACTION_PREFETCH,
                        url,
                        kind: (_options_kind = options == null ? void 0 : options.kind) != null ? _options_kind : _routerreducertypes.PrefetchKind.FULL
                    });
                });
            },
            replace: (href, options)=>{
                if (options === void 0) options = {};
                (0, _react.startTransition)(()=>{
                    var _options_scroll;
                    navigate(href, "replace", (_options_scroll = options.scroll) != null ? _options_scroll : true);
                });
            },
            push: (href, options)=>{
                if (options === void 0) options = {};
                (0, _react.startTransition)(()=>{
                    var _options_scroll;
                    navigate(href, "push", (_options_scroll = options.scroll) != null ? _options_scroll : true);
                });
            },
            refresh: ()=>{
                (0, _react.startTransition)(()=>{
                    dispatch({
                        type: _routerreducertypes.ACTION_REFRESH,
                        origin: window.location.origin
                    });
                });
            },
            fastRefresh: ()=>{
                if (true) {
                    throw new Error("fastRefresh can only be used in development mode. Please use refresh instead.");
                } else {}
            }
        };
        return routerInstance;
    }, [
        dispatch,
        navigate
    ]);
    (0, _react.useEffect)(()=>{
        // Exists for debugging purposes. Don't use in application code.
        if (window.next) {
            window.next.router = appRouter;
        }
    }, [
        appRouter
    ]);
    if (false) {}
    (0, _react.useEffect)(()=>{
        // If the app is restored from bfcache, it's possible that
        // pushRef.mpaNavigation is true, which would mean that any re-render of this component
        // would trigger the mpa navigation logic again from the lines below.
        // This will restore the router to the initial state in the event that the app is restored from bfcache.
        function handlePageShow(event) {
            var _window_history_state;
            if (!event.persisted || !((_window_history_state = window.history.state) == null ? void 0 : _window_history_state.__PRIVATE_NEXTJS_INTERNALS_TREE)) {
                return;
            }
            // Clear the pendingMpaPath value so that a subsequent MPA navigation to the same URL can be triggered.
            // This is necessary because if the browser restored from bfcache, the pendingMpaPath would still be set to the value
            // of the last MPA navigation.
            globalMutable.pendingMpaPath = undefined;
            dispatch({
                type: _routerreducertypes.ACTION_RESTORE,
                url: new URL(window.location.href),
                tree: window.history.state.__PRIVATE_NEXTJS_INTERNALS_TREE
            });
        }
        window.addEventListener("pageshow", handlePageShow);
        return ()=>{
            window.removeEventListener("pageshow", handlePageShow);
        };
    }, [
        dispatch
    ]);
    // When mpaNavigation flag is set do a hard navigation to the new url.
    // Infinitely suspend because we don't actually want to rerender any child
    // components with the new URL and any entangled state updates shouldn't
    // commit either (eg: useTransition isPending should stay true until the page
    // unloads).
    //
    // This is a side effect in render. Don't try this at home, kids. It's
    // probably safe because we know this is a singleton component and it's never
    // in <Offscreen>. At least I hope so. (It will run twice in dev strict mode,
    // but that's... fine?)
    const { pushRef } = (0, _usereducerwithdevtools.useUnwrapState)(reducerState);
    if (pushRef.mpaNavigation) {
        // if there's a re-render, we don't want to trigger another redirect if one is already in flight to the same URL
        if (globalMutable.pendingMpaPath !== canonicalUrl) {
            const location1 = window.location;
            if (pushRef.pendingPush) {
                location1.assign(canonicalUrl);
            } else {
                location1.replace(canonicalUrl);
            }
            globalMutable.pendingMpaPath = canonicalUrl;
        }
        // TODO-APP: Should we listen to navigateerror here to catch failed
        // navigations somehow? And should we call window.stop() if a SPA navigation
        // should interrupt an MPA one?
        (0, _react.use)(_unresolvedthenable.unresolvedThenable);
    }
    (0, _react.useEffect)(()=>{
        const originalPushState = window.history.pushState.bind(window.history);
        const originalReplaceState = window.history.replaceState.bind(window.history);
        // Ensure the canonical URL in the Next.js Router is updated when the URL is changed so that `usePathname` and `useSearchParams` hold the pushed values.
        const applyUrlFromHistoryPushReplace = (url)=>{
            var _window_history_state;
            const href = window.location.href;
            const tree = (_window_history_state = window.history.state) == null ? void 0 : _window_history_state.__PRIVATE_NEXTJS_INTERNALS_TREE;
            (0, _react.startTransition)(()=>{
                dispatch({
                    type: _routerreducertypes.ACTION_RESTORE,
                    url: new URL(url != null ? url : href, href),
                    tree
                });
            });
        };
        /**
     * Patch pushState to ensure external changes to the history are reflected in the Next.js Router.
     * Ensures Next.js internal history state is copied to the new history entry.
     * Ensures usePathname and useSearchParams hold the newly provided url.
     */ window.history.pushState = function pushState(data, _unused, url) {
            // Avoid a loop when Next.js internals trigger pushState/replaceState
            if ((data == null ? void 0 : data.__NA) || (data == null ? void 0 : data._N)) {
                return originalPushState(data, _unused, url);
            }
            data = copyNextJsInternalHistoryState(data);
            if (url) {
                applyUrlFromHistoryPushReplace(url);
            }
            return originalPushState(data, _unused, url);
        };
        /**
     * Patch replaceState to ensure external changes to the history are reflected in the Next.js Router.
     * Ensures Next.js internal history state is copied to the new history entry.
     * Ensures usePathname and useSearchParams hold the newly provided url.
     */ window.history.replaceState = function replaceState(data, _unused, url) {
            // Avoid a loop when Next.js internals trigger pushState/replaceState
            if ((data == null ? void 0 : data.__NA) || (data == null ? void 0 : data._N)) {
                return originalReplaceState(data, _unused, url);
            }
            data = copyNextJsInternalHistoryState(data);
            if (url) {
                applyUrlFromHistoryPushReplace(url);
            }
            return originalReplaceState(data, _unused, url);
        };
        /**
     * Handle popstate event, this is used to handle back/forward in the browser.
     * By default dispatches ACTION_RESTORE, however if the history entry was not pushed/replaced by app-router it will reload the page.
     * That case can happen when the old router injected the history entry.
     */ const onPopState = (param)=>{
            let { state } = param;
            if (!state) {
                // TODO-APP: this case only happens when pushState/replaceState was called outside of Next.js. It should probably reload the page in this case.
                return;
            }
            // This case happens when the history entry was pushed by the `pages` router.
            if (!state.__NA) {
                window.location.reload();
                return;
            }
            // TODO-APP: Ideally the back button should not use startTransition as it should apply the updates synchronously
            // Without startTransition works if the cache is there for this path
            (0, _react.startTransition)(()=>{
                dispatch({
                    type: _routerreducertypes.ACTION_RESTORE,
                    url: new URL(window.location.href),
                    tree: state.__PRIVATE_NEXTJS_INTERNALS_TREE
                });
            });
        };
        // Register popstate event to call onPopstate.
        window.addEventListener("popstate", onPopState);
        return ()=>{
            window.history.pushState = originalPushState;
            window.history.replaceState = originalReplaceState;
            window.removeEventListener("popstate", onPopState);
        };
    }, [
        dispatch
    ]);
    const { cache, tree, nextUrl, focusAndScrollRef } = (0, _usereducerwithdevtools.useUnwrapState)(reducerState);
    const matchingHead = (0, _react.useMemo)(()=>{
        return (0, _findheadincache.findHeadInCache)(cache, tree[1]);
    }, [
        cache,
        tree
    ]);
    // Add memoized pathParams for useParams.
    const pathParams = (0, _react.useMemo)(()=>{
        return getSelectedParams(tree);
    }, [
        tree
    ]);
    let head;
    if (matchingHead !== null) {
        // The head is wrapped in an extra component so we can use
        // `useDeferredValue` to swap between the prefetched and final versions of
        // the head. (This is what LayoutRouter does for segment data, too.)
        //
        // The `key` is used to remount the component whenever the head moves to
        // a different segment.
        const [headCacheNode, headKey] = matchingHead;
        head = /*#__PURE__*/ (0, _jsxruntime.jsx)(Head, {
            headCacheNode: headCacheNode
        }, headKey);
    } else {
        head = null;
    }
    let content = /*#__PURE__*/ (0, _jsxruntime.jsxs)(_redirectboundary.RedirectBoundary, {
        children: [
            head,
            cache.rsc,
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_approuterannouncer.AppRouterAnnouncer, {
                tree: tree
            })
        ]
    });
    if (false) {}
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(HistoryUpdater, {
                appRouterState: (0, _usereducerwithdevtools.useUnwrapState)(reducerState),
                sync: sync
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.PathParamsContext.Provider, {
                value: pathParams,
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.PathnameContext.Provider, {
                    value: pathname,
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.SearchParamsContext.Provider, {
                        value: searchParams,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.GlobalLayoutRouterContext.Provider, {
                            value: {
                                buildId,
                                changeByServerResponse,
                                tree,
                                focusAndScrollRef,
                                nextUrl
                            },
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.AppRouterContext.Provider, {
                                value: appRouter,
                                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.LayoutRouterContext.Provider, {
                                    value: {
                                        childNodes: cache.parallelRoutes,
                                        tree,
                                        // Root node always has `url`
                                        // Provided in AppTreeContext to ensure it can be overwritten in layout-router
                                        url: canonicalUrl,
                                        loading: cache.loading
                                    },
                                    children: content
                                })
                            })
                        })
                    })
                })
            })
        ]
    });
}
function AppRouter(props) {
    const { globalErrorComponent, ...rest } = props;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary.ErrorBoundary, {
        errorComponent: globalErrorComponent,
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Router, {
            ...rest
        })
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router.js.map


/***/ }),

/***/ 16136:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "bailoutToClientRendering", ({
    enumerable: true,
    get: function() {
        return bailoutToClientRendering;
    }
}));
const _bailouttocsr = __webpack_require__(94129);
const _staticgenerationasyncstorageexternal = __webpack_require__(45869);
function bailoutToClientRendering(reason) {
    const staticGenerationStore = _staticgenerationasyncstorageexternal.staticGenerationAsyncStorage.getStore();
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.forceStatic) return;
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.isStaticGeneration) throw new _bailouttocsr.BailoutToCSRError(reason);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=bailout-to-client-rendering.js.map


/***/ }),

/***/ 96114:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ClientPageRoot", ({
    enumerable: true,
    get: function() {
        return ClientPageRoot;
    }
}));
const _jsxruntime = __webpack_require__(10326);
const _searchparams = __webpack_require__(23325);
function ClientPageRoot(param) {
    let { Component, props } = param;
    // We expect to be passed searchParams but even if we aren't we can construct one from
    // an empty object. We only do this if we are in a static generation as a performance
    // optimization. Ideally we'd unconditionally construct the tracked params but since
    // this creates a proxy which is slow and this would happen even for client navigations
    // that are done entirely dynamically and we know there the dynamic tracking is a noop
    // in this dynamic case we can safely elide it.
    props.searchParams = (0, _searchparams.createDynamicallyTrackedSearchParams)(props.searchParams || {});
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
        ...props
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=client-page.js.map


/***/ }),

/***/ 9727:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
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
    ErrorBoundary: function() {
        return ErrorBoundary;
    },
    ErrorBoundaryHandler: function() {
        return ErrorBoundaryHandler;
    },
    GlobalError: function() {
        return GlobalError;
    },
    // Exported so that the import signature in the loaders can be identical to user
    // supplied custom global error signatures.
    default: function() {
        return _default;
    }
});
const _interop_require_default = __webpack_require__(91174);
const _jsxruntime = __webpack_require__(10326);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(17577));
const _navigation = __webpack_require__(77389);
const _isnextroutererror = __webpack_require__(37313);
const _staticgenerationasyncstorageexternal = __webpack_require__(45869);
const styles = {
    error: {
        // https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css#L38-L52
        fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        height: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "28px",
        margin: "0 8px"
    }
};
// if we are revalidating we want to re-throw the error so the
// function crashes so we can maintain our previous cache
// instead of caching the error page
function HandleISRError(param) {
    let { error } = param;
    const store = _staticgenerationasyncstorageexternal.staticGenerationAsyncStorage.getStore();
    if ((store == null ? void 0 : store.isRevalidate) || (store == null ? void 0 : store.isStaticGeneration)) {
        console.error(error);
        throw error;
    }
    return null;
}
class ErrorBoundaryHandler extends _react.default.Component {
    static getDerivedStateFromError(error) {
        if ((0, _isnextroutererror.isNextRouterError)(error)) {
            // Re-throw if an expected internal Next.js router error occurs
            // this means it should be handled by a different boundary (such as a NotFound boundary in a parent segment)
            throw error;
        }
        return {
            error
        };
    }
    static getDerivedStateFromProps(props, state) {
        /**
     * Handles reset of the error boundary when a navigation happens.
     * Ensures the error boundary does not stay enabled when navigating to a new page.
     * Approach of setState in render is safe as it checks the previous pathname and then overrides
     * it as outlined in https://react.dev/reference/react/useState#storing-information-from-previous-renders
     */ if (props.pathname !== state.previousPathname && state.error) {
            return {
                error: null,
                previousPathname: props.pathname
            };
        }
        return {
            error: state.error,
            previousPathname: props.pathname
        };
    }
    // Explicit type is needed to avoid the generated `.d.ts` having a wide return type that could be specific the the `@types/react` version.
    render() {
        if (this.state.error) {
            return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(HandleISRError, {
                        error: this.state.error
                    }),
                    this.props.errorStyles,
                    this.props.errorScripts,
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(this.props.errorComponent, {
                        error: this.state.error,
                        reset: this.reset
                    })
                ]
            });
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.reset = ()=>{
            this.setState({
                error: null
            });
        };
        this.state = {
            error: null,
            previousPathname: this.props.pathname
        };
    }
}
function GlobalError(param) {
    let { error } = param;
    const digest = error == null ? void 0 : error.digest;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("html", {
        id: "__next_error__",
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("head", {}),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("body", {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(HandleISRError, {
                        error: error
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                        style: styles.error,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0, _jsxruntime.jsx)("h2", {
                                    style: styles.text,
                                    children: "Application error: a " + (digest ? "server" : "client") + "-side exception has occurred (see the " + (digest ? "server logs" : "browser console") + " for more information)."
                                }),
                                digest ? /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
                                    style: styles.text,
                                    children: "Digest: " + digest
                                }) : null
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
const _default = GlobalError;
function ErrorBoundary(param) {
    let { errorComponent, errorStyles, errorScripts, children } = param;
    const pathname = (0, _navigation.usePathname)();
    if (errorComponent) {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(ErrorBoundaryHandler, {
            pathname: pathname,
            errorComponent: errorComponent,
            errorStyles: errorStyles,
            errorScripts: errorScripts,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=error-boundary.js.map


/***/ }),

/***/ 70442:
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
    DynamicServerError: function() {
        return DynamicServerError;
    },
    isDynamicServerError: function() {
        return isDynamicServerError;
    }
});
const DYNAMIC_ERROR_CODE = "DYNAMIC_SERVER_USAGE";
class DynamicServerError extends Error {
    constructor(description){
        super("Dynamic server usage: " + description);
        this.description = description;
        this.digest = DYNAMIC_ERROR_CODE;
    }
}
function isDynamicServerError(err) {
    if (typeof err !== "object" || err === null || !("digest" in err) || typeof err.digest !== "string") {
        return false;
    }
    return err.digest === DYNAMIC_ERROR_CODE;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hooks-server-context.js.map


/***/ }),

/***/ 37313:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isNextRouterError", ({
    enumerable: true,
    get: function() {
        return isNextRouterError;
    }
}));
const _notfound = __webpack_require__(50706);
const _redirect = __webpack_require__(62747);
function isNextRouterError(error) {
    return error && error.digest && ((0, _redirect.isRedirectError)(error) || (0, _notfound.isNotFoundError)(error));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-next-router-error.js.map


/***/ }),

/***/ 79671:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return OuterLayoutRouter;
    }
}));
const _interop_require_default = __webpack_require__(91174);
const _interop_require_wildcard = __webpack_require__(58374);
const _jsxruntime = __webpack_require__(10326);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(17577));
const _reactdom = /*#__PURE__*/ _interop_require_default._(__webpack_require__(60962));
const _approutercontextsharedruntime = __webpack_require__(52413);
const _fetchserverresponse = __webpack_require__(9009);
const _unresolvedthenable = __webpack_require__(39519);
const _errorboundary = __webpack_require__(9727);
const _matchsegments = __webpack_require__(70455);
const _handlesmoothscroll = __webpack_require__(79976);
const _redirectboundary = __webpack_require__(46265);
const _notfoundboundary = __webpack_require__(41868);
const _getsegmentvalue = __webpack_require__(62162);
const _createroutercachekey = __webpack_require__(39886);
const _hasinterceptionrouteincurrenttree = __webpack_require__(45262);
/**
 * Add refetch marker to router state at the point of the current layout segment.
 * This ensures the response returned is not further down than the current layout segment.
 */ function walkAddRefetch(segmentPathToWalk, treeToRecreate) {
    if (segmentPathToWalk) {
        const [segment, parallelRouteKey] = segmentPathToWalk;
        const isLast = segmentPathToWalk.length === 2;
        if ((0, _matchsegments.matchSegment)(treeToRecreate[0], segment)) {
            if (treeToRecreate[1].hasOwnProperty(parallelRouteKey)) {
                if (isLast) {
                    const subTree = walkAddRefetch(undefined, treeToRecreate[1][parallelRouteKey]);
                    return [
                        treeToRecreate[0],
                        {
                            ...treeToRecreate[1],
                            [parallelRouteKey]: [
                                subTree[0],
                                subTree[1],
                                subTree[2],
                                "refetch"
                            ]
                        }
                    ];
                }
                return [
                    treeToRecreate[0],
                    {
                        ...treeToRecreate[1],
                        [parallelRouteKey]: walkAddRefetch(segmentPathToWalk.slice(2), treeToRecreate[1][parallelRouteKey])
                    }
                ];
            }
        }
    }
    return treeToRecreate;
}
// TODO-APP: Replace with new React API for finding dom nodes without a `ref` when available
/**
 * Wraps ReactDOM.findDOMNode with additional logic to hide React Strict Mode warning
 */ function findDOMNode(instance) {
    // Tree-shake for server bundle
    if (true) return null;
    // Only apply strict mode warning when not in production
    if (false) {}
    return _reactdom.default.findDOMNode(instance);
}
const rectProperties = [
    "bottom",
    "height",
    "left",
    "right",
    "top",
    "width",
    "x",
    "y"
];
/**
 * Check if a HTMLElement is hidden or fixed/sticky position
 */ function shouldSkipElement(element) {
    // we ignore fixed or sticky positioned elements since they'll likely pass the "in-viewport" check
    // and will result in a situation we bail on scroll because of something like a fixed nav,
    // even though the actual page content is offscreen
    if ([
        "sticky",
        "fixed"
    ].includes(getComputedStyle(element).position)) {
        if (false) {}
        return true;
    }
    // Uses `getBoundingClientRect` to check if the element is hidden instead of `offsetParent`
    // because `offsetParent` doesn't consider document/body
    const rect = element.getBoundingClientRect();
    return rectProperties.every((item)=>rect[item] === 0);
}
/**
 * Check if the top corner of the HTMLElement is in the viewport.
 */ function topOfElementInViewport(element, viewportHeight) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= viewportHeight;
}
/**
 * Find the DOM node for a hash fragment.
 * If `top` the page has to scroll to the top of the page. This mirrors the browser's behavior.
 * If the hash fragment is an id, the page has to scroll to the element with that id.
 * If the hash fragment is a name, the page has to scroll to the first element with that name.
 */ function getHashFragmentDomNode(hashFragment) {
    // If the hash fragment is `top` the page has to scroll to the top of the page.
    if (hashFragment === "top") {
        return document.body;
    }
    var _document_getElementById;
    // If the hash fragment is an id, the page has to scroll to the element with that id.
    return (_document_getElementById = document.getElementById(hashFragment)) != null ? _document_getElementById : document.getElementsByName(hashFragment)[0];
}
class InnerScrollAndFocusHandler extends _react.default.Component {
    componentDidMount() {
        this.handlePotentialScroll();
    }
    componentDidUpdate() {
        // Because this property is overwritten in handlePotentialScroll it's fine to always run it when true as it'll be set to false for subsequent renders.
        if (this.props.focusAndScrollRef.apply) {
            this.handlePotentialScroll();
        }
    }
    render() {
        return this.props.children;
    }
    constructor(...args){
        super(...args);
        this.handlePotentialScroll = ()=>{
            // Handle scroll and focus, it's only applied once in the first useEffect that triggers that changed.
            const { focusAndScrollRef, segmentPath } = this.props;
            if (focusAndScrollRef.apply) {
                // segmentPaths is an array of segment paths that should be scrolled to
                // if the current segment path is not in the array, the scroll is not applied
                // unless the array is empty, in which case the scroll is always applied
                if (focusAndScrollRef.segmentPaths.length !== 0 && !focusAndScrollRef.segmentPaths.some((scrollRefSegmentPath)=>segmentPath.every((segment, index)=>(0, _matchsegments.matchSegment)(segment, scrollRefSegmentPath[index])))) {
                    return;
                }
                let domNode = null;
                const hashFragment = focusAndScrollRef.hashFragment;
                if (hashFragment) {
                    domNode = getHashFragmentDomNode(hashFragment);
                }
                // `findDOMNode` is tricky because it returns just the first child if the component is a fragment.
                // This already caused a bug where the first child was a <link/> in head.
                if (!domNode) {
                    domNode = findDOMNode(this);
                }
                // If there is no DOM node this layout-router level is skipped. It'll be handled higher-up in the tree.
                if (!(domNode instanceof Element)) {
                    return;
                }
                // Verify if the element is a HTMLElement and if we want to consider it for scroll behavior.
                // If the element is skipped, try to select the next sibling and try again.
                while(!(domNode instanceof HTMLElement) || shouldSkipElement(domNode)){
                    // No siblings found that match the criteria are found, so handle scroll higher up in the tree instead.
                    if (domNode.nextElementSibling === null) {
                        return;
                    }
                    domNode = domNode.nextElementSibling;
                }
                // State is mutated to ensure that the focus and scroll is applied only once.
                focusAndScrollRef.apply = false;
                focusAndScrollRef.hashFragment = null;
                focusAndScrollRef.segmentPaths = [];
                (0, _handlesmoothscroll.handleSmoothScroll)(()=>{
                    // In case of hash scroll, we only need to scroll the element into view
                    if (hashFragment) {
                        domNode.scrollIntoView();
                        return;
                    }
                    // Store the current viewport height because reading `clientHeight` causes a reflow,
                    // and it won't change during this function.
                    const htmlElement = document.documentElement;
                    const viewportHeight = htmlElement.clientHeight;
                    // If the element's top edge is already in the viewport, exit early.
                    if (topOfElementInViewport(domNode, viewportHeight)) {
                        return;
                    }
                    // Otherwise, try scrolling go the top of the document to be backward compatible with pages
                    // scrollIntoView() called on `<html/>` element scrolls horizontally on chrome and firefox (that shouldn't happen)
                    // We could use it to scroll horizontally following RTL but that also seems to be broken - it will always scroll left
                    // scrollLeft = 0 also seems to ignore RTL and manually checking for RTL is too much hassle so we will scroll just vertically
                    htmlElement.scrollTop = 0;
                    // Scroll to domNode if domNode is not in viewport when scrolled to top of document
                    if (!topOfElementInViewport(domNode, viewportHeight)) {
                        domNode.scrollIntoView();
                    }
                }, {
                    // We will force layout by querying domNode position
                    dontForceLayout: true,
                    onlyHashChange: focusAndScrollRef.onlyHashChange
                });
                // Mutate after scrolling so that it can be read by `handleSmoothScroll`
                focusAndScrollRef.onlyHashChange = false;
                // Set focus on the element
                domNode.focus();
            }
        };
    }
}
function ScrollAndFocusHandler(param) {
    let { segmentPath, children } = param;
    const context = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    if (!context) {
        throw new Error("invariant global layout router not mounted");
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(InnerScrollAndFocusHandler, {
        segmentPath: segmentPath,
        focusAndScrollRef: context.focusAndScrollRef,
        children: children
    });
}
/**
 * InnerLayoutRouter handles rendering the provided segment based on the cache.
 */ function InnerLayoutRouter(param) {
    let { parallelRouterKey, url, childNodes, segmentPath, tree, // isActive,
    cacheKey } = param;
    const context = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    if (!context) {
        throw new Error("invariant global layout router not mounted");
    }
    const { buildId, changeByServerResponse, tree: fullTree } = context;
    // Read segment path from the parallel router cache node.
    let childNode = childNodes.get(cacheKey);
    // When data is not available during rendering client-side we need to fetch
    // it from the server.
    if (childNode === undefined) {
        const newLazyCacheNode = {
            lazyData: null,
            rsc: null,
            prefetchRsc: null,
            head: null,
            prefetchHead: null,
            parallelRoutes: new Map(),
            lazyDataResolved: false,
            loading: null
        };
        /**
     * Flight data fetch kicked off during render and put into the cache.
     */ childNode = newLazyCacheNode;
        childNodes.set(cacheKey, newLazyCacheNode);
    }
    // `rsc` represents the renderable node for this segment.
    // If this segment has a `prefetchRsc`, it's the statically prefetched data.
    // We should use that on initial render instead of `rsc`. Then we'll switch
    // to `rsc` when the dynamic response streams in.
    //
    // If no prefetch data is available, then we go straight to rendering `rsc`.
    const resolvedPrefetchRsc = childNode.prefetchRsc !== null ? childNode.prefetchRsc : childNode.rsc;
    // We use `useDeferredValue` to handle switching between the prefetched and
    // final values. The second argument is returned on initial render, then it
    // re-renders with the first argument.
    //
    // @ts-expect-error The second argument to `useDeferredValue` is only
    // available in the experimental builds. When its disabled, it will always
    // return `rsc`.
    const rsc = (0, _react.useDeferredValue)(childNode.rsc, resolvedPrefetchRsc);
    // `rsc` is either a React node or a promise for a React node, except we
    // special case `null` to represent that this segment's data is missing. If
    // it's a promise, we need to unwrap it so we can determine whether or not the
    // data is missing.
    const resolvedRsc = typeof rsc === "object" && rsc !== null && typeof rsc.then === "function" ? (0, _react.use)(rsc) : rsc;
    if (!resolvedRsc) {
        // The data for this segment is not available, and there's no pending
        // navigation that will be able to fulfill it. We need to fetch more from
        // the server and patch the cache.
        // Check if there's already a pending request.
        let lazyData = childNode.lazyData;
        if (lazyData === null) {
            /**
       * Router state with refetch marker added
       */ // TODO-APP: remove ''
            const refetchTree = walkAddRefetch([
                "",
                ...segmentPath
            ], fullTree);
            const includeNextUrl = (0, _hasinterceptionrouteincurrenttree.hasInterceptionRouteInCurrentTree)(fullTree);
            childNode.lazyData = lazyData = (0, _fetchserverresponse.fetchServerResponse)(new URL(url, location.origin), refetchTree, includeNextUrl ? context.nextUrl : null, buildId);
            childNode.lazyDataResolved = false;
        }
        /**
     * Flight response data
     */ // When the data has not resolved yet `use` will suspend here.
        const serverResponse = (0, _react.use)(lazyData);
        if (!childNode.lazyDataResolved) {
            // setTimeout is used to start a new transition during render, this is an intentional hack around React.
            setTimeout(()=>{
                (0, _react.startTransition)(()=>{
                    changeByServerResponse({
                        previousTree: fullTree,
                        serverResponse
                    });
                });
            });
            // It's important that we mark this as resolved, in case this branch is replayed, we don't want to continously re-apply
            // the patch to the tree.
            childNode.lazyDataResolved = true;
        }
        // Suspend infinitely as `changeByServerResponse` will cause a different part of the tree to be rendered.
        // A falsey `resolvedRsc` indicates missing data -- we should not commit that branch, and we need to wait for the data to arrive.
        (0, _react.use)(_unresolvedthenable.unresolvedThenable);
    }
    // If we get to this point, then we know we have something we can render.
    const subtree = /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.LayoutRouterContext.Provider, {
        value: {
            tree: tree[1][parallelRouterKey],
            childNodes: childNode.parallelRoutes,
            // TODO-APP: overriding of url for parallel routes
            url: url,
            loading: childNode.loading
        },
        children: resolvedRsc
    });
    // Ensure root layout is not wrapped in a div as the root layout renders `<html>`
    return subtree;
}
/**
 * Renders suspense boundary with the provided "loading" property as the fallback.
 * If no loading property is provided it renders the children without a suspense boundary.
 */ function LoadingBoundary(param) {
    let { children, hasLoading, loading, loadingStyles, loadingScripts } = param;
    // We have an explicit prop for checking if `loading` is provided, to disambiguate between a loading
    // component that returns `null` / `undefined`, vs not having a loading component at all.
    if (hasLoading) {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Suspense, {
            fallback: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    loadingStyles,
                    loadingScripts,
                    loading
                ]
            }),
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
function OuterLayoutRouter(param) {
    let { parallelRouterKey, segmentPath, error, errorStyles, errorScripts, templateStyles, templateScripts, template, notFound, notFoundStyles } = param;
    const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
    if (!context) {
        throw new Error("invariant expected layout router to be mounted");
    }
    const { childNodes, tree, url, loading } = context;
    // Get the current parallelRouter cache node
    let childNodesForParallelRouter = childNodes.get(parallelRouterKey);
    // If the parallel router cache node does not exist yet, create it.
    // This writes to the cache when there is no item in the cache yet. It never *overwrites* existing cache items which is why it's safe in concurrent mode.
    if (!childNodesForParallelRouter) {
        childNodesForParallelRouter = new Map();
        childNodes.set(parallelRouterKey, childNodesForParallelRouter);
    }
    // Get the active segment in the tree
    // The reason arrays are used in the data format is that these are transferred from the server to the browser so it's optimized to save bytes.
    const treeSegment = tree[1][parallelRouterKey][0];
    // If segment is an array it's a dynamic route and we want to read the dynamic route value as the segment to get from the cache.
    const currentChildSegmentValue = (0, _getsegmentvalue.getSegmentValue)(treeSegment);
    /**
   * Decides which segments to keep rendering, all segments that are not active will be wrapped in `<Offscreen>`.
   */ // TODO-APP: Add handling of `<Offscreen>` when it's available.
    const preservedSegments = [
        treeSegment
    ];
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: preservedSegments.map((preservedSegment)=>{
            const preservedSegmentValue = (0, _getsegmentvalue.getSegmentValue)(preservedSegment);
            const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(preservedSegment);
            return(/*
            - Error boundary
              - Only renders error boundary if error component is provided.
              - Rendered for each segment to ensure they have their own error state.
            - Loading boundary
              - Only renders suspense boundary if loading components is provided.
              - Rendered for each segment to ensure they have their own loading state.
              - Passed to the router during rendering to ensure it can be immediately rendered when suspending on a Flight fetch.
          */ /*#__PURE__*/ (0, _jsxruntime.jsxs)(_approutercontextsharedruntime.TemplateContext.Provider, {
                value: /*#__PURE__*/ (0, _jsxruntime.jsx)(ScrollAndFocusHandler, {
                    segmentPath: segmentPath,
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary.ErrorBoundary, {
                        errorComponent: error,
                        errorStyles: errorStyles,
                        errorScripts: errorScripts,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(LoadingBoundary, {
                            hasLoading: Boolean(loading),
                            loading: loading == null ? void 0 : loading[0],
                            loadingStyles: loading == null ? void 0 : loading[1],
                            loadingScripts: loading == null ? void 0 : loading[2],
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_notfoundboundary.NotFoundBoundary, {
                                notFound: notFound,
                                notFoundStyles: notFoundStyles,
                                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_redirectboundary.RedirectBoundary, {
                                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(InnerLayoutRouter, {
                                        parallelRouterKey: parallelRouterKey,
                                        url: url,
                                        tree: tree,
                                        childNodes: childNodesForParallelRouter,
                                        segmentPath: segmentPath,
                                        cacheKey: cacheKey,
                                        isActive: currentChildSegmentValue === preservedSegmentValue
                                    })
                                })
                            })
                        })
                    })
                }),
                children: [
                    templateStyles,
                    templateScripts,
                    template
                ]
            }, (0, _createroutercachekey.createRouterCacheKey)(preservedSegment, true)));
        })
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=layout-router.js.map


/***/ }),

/***/ 70455:
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
    canSegmentBeOverridden: function() {
        return canSegmentBeOverridden;
    },
    matchSegment: function() {
        return matchSegment;
    }
});
const _getsegmentparam = __webpack_require__(92357);
const matchSegment = (existingSegment, segment)=>{
    // segment is either Array or string
    if (typeof existingSegment === "string") {
        if (typeof segment === "string") {
            // Common case: segment is just a string
            return existingSegment === segment;
        }
        return false;
    }
    if (typeof segment === "string") {
        return false;
    }
    return existingSegment[0] === segment[0] && existingSegment[1] === segment[1];
};
const canSegmentBeOverridden = (existingSegment, segment)=>{
    var _getSegmentParam;
    if (Array.isArray(existingSegment) || !Array.isArray(segment)) {
        return false;
    }
    return ((_getSegmentParam = (0, _getsegmentparam.getSegmentParam)(existingSegment)) == null ? void 0 : _getSegmentParam.param) === segment[0];
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=match-segments.js.map


/***/ }),

/***/ 77389:
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
    ReadonlyURLSearchParams: function() {
        return _navigationreactserver.ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return _navigationreactserver.RedirectType;
    },
    ServerInsertedHTMLContext: function() {
        return _serverinsertedhtmlsharedruntime.ServerInsertedHTMLContext;
    },
    notFound: function() {
        return _navigationreactserver.notFound;
    },
    permanentRedirect: function() {
        return _navigationreactserver.permanentRedirect;
    },
    redirect: function() {
        return _navigationreactserver.redirect;
    },
    useParams: function() {
        return useParams;
    },
    usePathname: function() {
        return usePathname;
    },
    useRouter: function() {
        return useRouter;
    },
    useSearchParams: function() {
        return useSearchParams;
    },
    useSelectedLayoutSegment: function() {
        return useSelectedLayoutSegment;
    },
    useSelectedLayoutSegments: function() {
        return useSelectedLayoutSegments;
    },
    useServerInsertedHTML: function() {
        return _serverinsertedhtmlsharedruntime.useServerInsertedHTML;
    }
});
const _react = __webpack_require__(17577);
const _approutercontextsharedruntime = __webpack_require__(52413);
const _hooksclientcontextsharedruntime = __webpack_require__(97008);
const _getsegmentvalue = __webpack_require__(62162);
const _segment = __webpack_require__(68071);
const _navigationreactserver = __webpack_require__(97375);
const _serverinsertedhtmlsharedruntime = __webpack_require__(93347);
/**
 * A [Client Component](https://nextjs.org/docs/app/building-your-application/rendering/client-components) hook
 * that lets you *read* the current URL's search parameters.
 *
 * Learn more about [`URLSearchParams` on MDN](https://developer.mozilla.org/docs/Web/API/URLSearchParams)
 *
 * @example
 * ```ts
 * "use client"
 * import { useSearchParams } from 'next/navigation'
 *
 * export default function Page() {
 *   const searchParams = useSearchParams()
 *   searchParams.get('foo') // returns 'bar' when ?foo=bar
 *   // ...
 * }
 * ```
 *
 * Read more: [Next.js Docs: `useSearchParams`](https://nextjs.org/docs/app/api-reference/functions/use-search-params)
 */ function useSearchParams() {
    const searchParams = (0, _react.useContext)(_hooksclientcontextsharedruntime.SearchParamsContext);
    // In the case where this is `null`, the compat types added in
    // `next-env.d.ts` will add a new overload that changes the return type to
    // include `null`.
    const readonlySearchParams = (0, _react.useMemo)(()=>{
        if (!searchParams) {
            // When the router is not ready in pages, we won't have the search params
            // available.
            return null;
        }
        return new _navigationreactserver.ReadonlyURLSearchParams(searchParams);
    }, [
        searchParams
    ]);
    if (true) {
        // AsyncLocalStorage should not be included in the client bundle.
        const { bailoutToClientRendering } = __webpack_require__(16136);
        // TODO-APP: handle dynamic = 'force-static' here and on the client
        bailoutToClientRendering("useSearchParams()");
    }
    return readonlySearchParams;
}
/**
 * A [Client Component](https://nextjs.org/docs/app/building-your-application/rendering/client-components) hook
 * that lets you read the current URL's pathname.
 *
 * @example
 * ```ts
 * "use client"
 * import { usePathname } from 'next/navigation'
 *
 * export default function Page() {
 *  const pathname = usePathname() // returns "/dashboard" on /dashboard?foo=bar
 *  // ...
 * }
 * ```
 *
 * Read more: [Next.js Docs: `usePathname`](https://nextjs.org/docs/app/api-reference/functions/use-pathname)
 */ function usePathname() {
    // In the case where this is `null`, the compat types added in `next-env.d.ts`
    // will add a new overload that changes the return type to include `null`.
    return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathnameContext);
}
/**
 *
 * This hook allows you to programmatically change routes inside [Client Component](https://nextjs.org/docs/app/building-your-application/rendering/client-components).
 *
 * @example
 * ```ts
 * "use client"
 * import { useRouter } from 'next/navigation'
 *
 * export default function Page() {
 *  const router = useRouter()
 *  // ...
 *  router.push('/dashboard') // Navigate to /dashboard
 * }
 * ```
 *
 * Read more: [Next.js Docs: `useRouter`](https://nextjs.org/docs/app/api-reference/functions/use-router)
 */ function useRouter() {
    const router = (0, _react.useContext)(_approutercontextsharedruntime.AppRouterContext);
    if (router === null) {
        throw new Error("invariant expected app router to be mounted");
    }
    return router;
}
/**
 * A [Client Component](https://nextjs.org/docs/app/building-your-application/rendering/client-components) hook
 * that lets you read a route's dynamic params filled in by the current URL.
 *
 * @example
 * ```ts
 * "use client"
 * import { useParams } from 'next/navigation'
 *
 * export default function Page() {
 *   // on /dashboard/[team] where pathname is /dashboard/nextjs
 *   const { team } = useParams() // team === "nextjs"
 * }
 * ```
 *
 * Read more: [Next.js Docs: `useParams`](https://nextjs.org/docs/app/api-reference/functions/use-params)
 */ function useParams() {
    return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathParamsContext);
}
/** Get the canonical parameters from the current level to the leaf node. */ function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first, segmentPath) {
    if (first === void 0) first = true;
    if (segmentPath === void 0) segmentPath = [];
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        var _parallelRoutes_children;
        node = (_parallelRoutes_children = parallelRoutes.children) != null ? _parallelRoutes_children : Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    const segmentValue = (0, _getsegmentvalue.getSegmentValue)(segment);
    if (!segmentValue || segmentValue.startsWith(_segment.PAGE_SEGMENT_KEY)) {
        return segmentPath;
    }
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
/**
 * A [Client Component](https://nextjs.org/docs/app/building-your-application/rendering/client-components) hook
 * that lets you read the active route segments **below** the Layout it is called from.
 *
 * @example
 * ```ts
 * 'use client'
 *
 * import { useSelectedLayoutSegments } from 'next/navigation'
 *
 * export default function ExampleClientComponent() {
 *   const segments = useSelectedLayoutSegments()
 *
 *   return (
 *     <ul>
 *       {segments.map((segment, index) => (
 *         <li key={index}>{segment}</li>
 *       ))}
 *     </ul>
 *   )
 * }
 * ```
 *
 * Read more: [Next.js Docs: `useSelectedLayoutSegments`](https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segments)
 */ function useSelectedLayoutSegments(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = "children";
    const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
    // @ts-expect-error This only happens in `pages`. Type is overwritten in navigation.d.ts
    if (!context) return null;
    return getSelectedLayoutSegmentPath(context.tree, parallelRouteKey);
}
/**
 * A [Client Component](https://nextjs.org/docs/app/building-your-application/rendering/client-components) hook
 * that lets you read the active route segment **one level below** the Layout it is called from.
 *
 * @example
 * ```ts
 * 'use client'
 * import { useSelectedLayoutSegment } from 'next/navigation'
 *
 * export default function ExampleClientComponent() {
 *   const segment = useSelectedLayoutSegment()
 *
 *   return <p>Active segment: {segment}</p>
 * }
 * ```
 *
 * Read more: [Next.js Docs: `useSelectedLayoutSegment`](https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segment)
 */ function useSelectedLayoutSegment(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = "children";
    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    if (!selectedLayoutSegments || selectedLayoutSegments.length === 0) {
        return null;
    }
    const selectedLayoutSegment = parallelRouteKey === "children" ? selectedLayoutSegments[0] : selectedLayoutSegments[selectedLayoutSegments.length - 1];
    // if the default slot is showing, we return null since it's not technically "selected" (it's a fallback)
    // and returning an internal value like `__DEFAULT__` would be confusing.
    return selectedLayoutSegment === _segment.DEFAULT_SEGMENT_KEY ? null : selectedLayoutSegment;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.js.map


/***/ }),

/***/ 97375:
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
const _redirect = __webpack_require__(62747);
const _notfound = __webpack_require__(50706);
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

/***/ 41868:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "NotFoundBoundary", ({
    enumerable: true,
    get: function() {
        return NotFoundBoundary;
    }
}));
const _interop_require_wildcard = __webpack_require__(58374);
const _jsxruntime = __webpack_require__(10326);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(17577));
const _navigation = __webpack_require__(77389);
const _notfound = __webpack_require__(50706);
const _warnonce = __webpack_require__(576);
const _approutercontextsharedruntime = __webpack_require__(52413);
class NotFoundErrorBoundary extends _react.default.Component {
    componentDidCatch() {
        if (false) {}
    }
    static getDerivedStateFromError(error) {
        if ((0, _notfound.isNotFoundError)(error)) {
            return {
                notFoundTriggered: true
            };
        }
        // Re-throw if error is not for 404
        throw error;
    }
    static getDerivedStateFromProps(props, state) {
        /**
     * Handles reset of the error boundary when a navigation happens.
     * Ensures the error boundary does not stay enabled when navigating to a new page.
     * Approach of setState in render is safe as it checks the previous pathname and then overrides
     * it as outlined in https://react.dev/reference/react/useState#storing-information-from-previous-renders
     */ if (props.pathname !== state.previousPathname && state.notFoundTriggered) {
            return {
                notFoundTriggered: false,
                previousPathname: props.pathname
            };
        }
        return {
            notFoundTriggered: state.notFoundTriggered,
            previousPathname: props.pathname
        };
    }
    render() {
        if (this.state.notFoundTriggered) {
            return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
                        name: "robots",
                        content: "noindex"
                    }),
                     false && /*#__PURE__*/ 0,
                    this.props.notFoundStyles,
                    this.props.notFound
                ]
            });
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            notFoundTriggered: !!props.asNotFound,
            previousPathname: props.pathname
        };
    }
}
function NotFoundBoundary(param) {
    let { notFound, notFoundStyles, asNotFound, children } = param;
    const pathname = (0, _navigation.usePathname)();
    const missingSlots = (0, _react.useContext)(_approutercontextsharedruntime.MissingSlotContext);
    return notFound ? /*#__PURE__*/ (0, _jsxruntime.jsx)(NotFoundErrorBoundary, {
        pathname: pathname,
        notFound: notFound,
        notFoundStyles: notFoundStyles,
        asNotFound: asNotFound,
        missingSlots: missingSlots,
        children: children
    }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found-boundary.js.map


/***/ }),

/***/ 50706:
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

/***/ 77815:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/*
    This is a simple promise queue that allows you to limit the number of concurrent promises
    that are running at any given time. It's used to limit the number of concurrent
    prefetch requests that are being made to the server but could be used for other
    things as well.
*/ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "PromiseQueue", ({
    enumerable: true,
    get: function() {
        return PromiseQueue;
    }
}));
const _class_private_field_loose_base = __webpack_require__(98285);
const _class_private_field_loose_key = __webpack_require__(78817);
var _maxConcurrency = /*#__PURE__*/ _class_private_field_loose_key._("_maxConcurrency"), _runningCount = /*#__PURE__*/ _class_private_field_loose_key._("_runningCount"), _queue = /*#__PURE__*/ _class_private_field_loose_key._("_queue"), _processNext = /*#__PURE__*/ _class_private_field_loose_key._("_processNext");
class PromiseQueue {
    enqueue(promiseFn) {
        let taskResolve;
        let taskReject;
        const taskPromise = new Promise((resolve, reject)=>{
            taskResolve = resolve;
            taskReject = reject;
        });
        const task = async ()=>{
            try {
                _class_private_field_loose_base._(this, _runningCount)[_runningCount]++;
                const result = await promiseFn();
                taskResolve(result);
            } catch (error) {
                taskReject(error);
            } finally{
                _class_private_field_loose_base._(this, _runningCount)[_runningCount]--;
                _class_private_field_loose_base._(this, _processNext)[_processNext]();
            }
        };
        const enqueueResult = {
            promiseFn: taskPromise,
            task
        };
        // wonder if we should take a LIFO approach here
        _class_private_field_loose_base._(this, _queue)[_queue].push(enqueueResult);
        _class_private_field_loose_base._(this, _processNext)[_processNext]();
        return taskPromise;
    }
    bump(promiseFn) {
        const index = _class_private_field_loose_base._(this, _queue)[_queue].findIndex((item)=>item.promiseFn === promiseFn);
        if (index > -1) {
            const bumpedItem = _class_private_field_loose_base._(this, _queue)[_queue].splice(index, 1)[0];
            _class_private_field_loose_base._(this, _queue)[_queue].unshift(bumpedItem);
            _class_private_field_loose_base._(this, _processNext)[_processNext](true);
        }
    }
    constructor(maxConcurrency = 5){
        Object.defineProperty(this, _processNext, {
            value: processNext
        });
        Object.defineProperty(this, _maxConcurrency, {
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _runningCount, {
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _queue, {
            writable: true,
            value: void 0
        });
        _class_private_field_loose_base._(this, _maxConcurrency)[_maxConcurrency] = maxConcurrency;
        _class_private_field_loose_base._(this, _runningCount)[_runningCount] = 0;
        _class_private_field_loose_base._(this, _queue)[_queue] = [];
    }
}
function processNext(forced) {
    if (forced === void 0) forced = false;
    if ((_class_private_field_loose_base._(this, _runningCount)[_runningCount] < _class_private_field_loose_base._(this, _maxConcurrency)[_maxConcurrency] || forced) && _class_private_field_loose_base._(this, _queue)[_queue].length > 0) {
        var _class_private_field_loose_base__queue_shift;
        (_class_private_field_loose_base__queue_shift = _class_private_field_loose_base._(this, _queue)[_queue].shift()) == null ? void 0 : _class_private_field_loose_base__queue_shift.task();
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=promise-queue.js.map


/***/ }),

/***/ 46265:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
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
    RedirectBoundary: function() {
        return RedirectBoundary;
    },
    RedirectErrorBoundary: function() {
        return RedirectErrorBoundary;
    }
});
const _interop_require_wildcard = __webpack_require__(58374);
const _jsxruntime = __webpack_require__(10326);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(17577));
const _navigation = __webpack_require__(77389);
const _redirect = __webpack_require__(62747);
function HandleRedirect(param) {
    let { redirect, reset, redirectType } = param;
    const router = (0, _navigation.useRouter)();
    (0, _react.useEffect)(()=>{
        _react.default.startTransition(()=>{
            if (redirectType === _redirect.RedirectType.push) {
                router.push(redirect, {});
            } else {
                router.replace(redirect, {});
            }
            reset();
        });
    }, [
        redirect,
        redirectType,
        reset,
        router
    ]);
    return null;
}
class RedirectErrorBoundary extends _react.default.Component {
    static getDerivedStateFromError(error) {
        if ((0, _redirect.isRedirectError)(error)) {
            const url = (0, _redirect.getURLFromRedirectError)(error);
            const redirectType = (0, _redirect.getRedirectTypeFromError)(error);
            return {
                redirect: url,
                redirectType
            };
        }
        // Re-throw if error is not for redirect
        throw error;
    }
    // Explicit type is needed to avoid the generated `.d.ts` having a wide return type that could be specific the the `@types/react` version.
    render() {
        const { redirect, redirectType } = this.state;
        if (redirect !== null && redirectType !== null) {
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(HandleRedirect, {
                redirect: redirect,
                redirectType: redirectType,
                reset: ()=>this.setState({
                        redirect: null
                    })
            });
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            redirect: null,
            redirectType: null
        };
    }
}
function RedirectBoundary(param) {
    let { children } = param;
    const router = (0, _navigation.useRouter)();
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(RedirectErrorBoundary, {
        router: router,
        children: children
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-boundary.js.map


/***/ }),

/***/ 28778:
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

/***/ 62747:
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
const _redirectstatuscode = __webpack_require__(28778);
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

/***/ 84759:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return RenderFromTemplateContext;
    }
}));
const _interop_require_wildcard = __webpack_require__(58374);
const _jsxruntime = __webpack_require__(10326);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(17577));
const _approutercontextsharedruntime = __webpack_require__(52413);
function RenderFromTemplateContext() {
    const children = (0, _react.useContext)(_approutercontextsharedruntime.TemplateContext);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=render-from-template-context.js.map


/***/ }),

/***/ 9894:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "applyFlightData", ({
    enumerable: true,
    get: function() {
        return applyFlightData;
    }
}));
const _filllazyitemstillleafwithhead = __webpack_require__(114);
const _fillcachewithnewsubtreedata = __webpack_require__(19056);
function applyFlightData(existingCache, cache, flightDataPath, prefetchEntry) {
    // The one before last item is the router state tree patch
    const [treePatch, cacheNodeSeedData, head] = flightDataPath.slice(-3);
    // Handles case where prefetch only returns the router tree patch without rendered components.
    if (cacheNodeSeedData === null) {
        return false;
    }
    if (flightDataPath.length === 3) {
        const rsc = cacheNodeSeedData[2];
        const loading = cacheNodeSeedData[3];
        cache.loading = loading;
        cache.rsc = rsc;
        // This is a PPR-only field. When PPR is enabled, we shouldn't hit
        // this path during a navigation, but until PPR is fully implemented
        // yet it's possible the existing node does have a non-null
        // `prefetchRsc`. As an incremental step, we'll just de-opt to the
        // old behavior — no PPR value.
        cache.prefetchRsc = null;
        (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(cache, existingCache, treePatch, cacheNodeSeedData, head, prefetchEntry);
    } else {
        // Copy rsc for the root node of the cache.
        cache.rsc = existingCache.rsc;
        // This is a PPR-only field. Unlike the previous branch, since we're
        // just cloning the existing cache node, we might as well keep the
        // PPR value, if it exists.
        cache.prefetchRsc = existingCache.prefetchRsc;
        cache.parallelRoutes = new Map(existingCache.parallelRoutes);
        cache.loading = existingCache.loading;
        // Create a copy of the existing cache with the rsc applied.
        (0, _fillcachewithnewsubtreedata.fillCacheWithNewSubTreeData)(cache, existingCache, flightDataPath, prefetchEntry);
    }
    return true;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=apply-flight-data.js.map


/***/ }),

/***/ 95166:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "applyRouterStatePatchToTree", ({
    enumerable: true,
    get: function() {
        return applyRouterStatePatchToTree;
    }
}));
const _segment = __webpack_require__(68071);
const _matchsegments = __webpack_require__(70455);
const _refetchinactiveparallelsegments = __webpack_require__(84158);
/**
 * Deep merge of the two router states. Parallel route keys are preserved if the patch doesn't have them.
 */ function applyPatch(initialTree, patchTree, flightSegmentPath) {
    const [initialSegment, initialParallelRoutes] = initialTree;
    const [patchSegment, patchParallelRoutes] = patchTree;
    // if the applied patch segment is __DEFAULT__ then it can be ignored in favor of the initial tree
    // this is because the __DEFAULT__ segment is used as a placeholder on navigation
    if (patchSegment === _segment.DEFAULT_SEGMENT_KEY && initialSegment !== _segment.DEFAULT_SEGMENT_KEY) {
        return initialTree;
    }
    if ((0, _matchsegments.matchSegment)(initialSegment, patchSegment)) {
        const newParallelRoutes = {};
        for(const key in initialParallelRoutes){
            const isInPatchTreeParallelRoutes = typeof patchParallelRoutes[key] !== "undefined";
            if (isInPatchTreeParallelRoutes) {
                newParallelRoutes[key] = applyPatch(initialParallelRoutes[key], patchParallelRoutes[key], flightSegmentPath);
            } else {
                newParallelRoutes[key] = initialParallelRoutes[key];
            }
        }
        for(const key in patchParallelRoutes){
            if (newParallelRoutes[key]) {
                continue;
            }
            newParallelRoutes[key] = patchParallelRoutes[key];
        }
        const tree = [
            initialSegment,
            newParallelRoutes
        ];
        // Copy over the existing tree
        if (initialTree[2]) {
            tree[2] = initialTree[2];
        }
        if (initialTree[3]) {
            tree[3] = initialTree[3];
        }
        if (initialTree[4]) {
            tree[4] = initialTree[4];
        }
        return tree;
    }
    return patchTree;
}
function applyRouterStatePatchToTree(flightSegmentPath, flightRouterState, treePatch, path) {
    const [segment, parallelRoutes, url, refetch, isRootLayout] = flightRouterState;
    // Root refresh
    if (flightSegmentPath.length === 1) {
        const tree = applyPatch(flightRouterState, treePatch, flightSegmentPath);
        (0, _refetchinactiveparallelsegments.addRefreshMarkerToActiveParallelSegments)(tree, path);
        return tree;
    }
    const [currentSegment, parallelRouteKey] = flightSegmentPath;
    // Tree path returned from the server should always match up with the current tree in the browser
    if (!(0, _matchsegments.matchSegment)(currentSegment, segment)) {
        return null;
    }
    const lastSegment = flightSegmentPath.length === 2;
    let parallelRoutePatch;
    if (lastSegment) {
        parallelRoutePatch = applyPatch(parallelRoutes[parallelRouteKey], treePatch, flightSegmentPath);
    } else {
        parallelRoutePatch = applyRouterStatePatchToTree(flightSegmentPath.slice(2), parallelRoutes[parallelRouteKey], treePatch, path);
        if (parallelRoutePatch === null) {
            return null;
        }
    }
    const tree = [
        flightSegmentPath[0],
        {
            ...parallelRoutes,
            [parallelRouteKey]: parallelRoutePatch
        },
        url,
        refetch
    ];
    // Current segment is the root layout
    if (isRootLayout) {
        tree[4] = true;
    }
    (0, _refetchinactiveparallelsegments.addRefreshMarkerToActiveParallelSegments)(tree, path);
    return tree;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=apply-router-state-patch-to-tree.js.map


/***/ }),

/***/ 12895:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "clearCacheNodeDataForSegmentPath", ({
    enumerable: true,
    get: function() {
        return clearCacheNodeDataForSegmentPath;
    }
}));
const _createroutercachekey = __webpack_require__(39886);
function clearCacheNodeDataForSegmentPath(newCache, existingCache, flightSegmentPath) {
    const isLastEntry = flightSegmentPath.length <= 2;
    const [parallelRouteKey, segment] = flightSegmentPath;
    const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    const existingChildCacheNode = existingChildSegmentMap == null ? void 0 : existingChildSegmentMap.get(cacheKey);
    let childCacheNode = childSegmentMap.get(cacheKey);
    // In case of last segment start off the fetch at this level and don't copy further down.
    if (isLastEntry) {
        if (!childCacheNode || !childCacheNode.lazyData || childCacheNode === existingChildCacheNode) {
            childSegmentMap.set(cacheKey, {
                lazyData: null,
                rsc: null,
                prefetchRsc: null,
                head: null,
                prefetchHead: null,
                parallelRoutes: new Map(),
                lazyDataResolved: false,
                loading: null
            });
        }
        return;
    }
    if (!childCacheNode || !existingChildCacheNode) {
        // Start fetch in the place where the existing cache doesn't have the data yet.
        if (!childCacheNode) {
            childSegmentMap.set(cacheKey, {
                lazyData: null,
                rsc: null,
                prefetchRsc: null,
                head: null,
                prefetchHead: null,
                parallelRoutes: new Map(),
                lazyDataResolved: false,
                loading: null
            });
        }
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            lazyData: childCacheNode.lazyData,
            rsc: childCacheNode.rsc,
            prefetchRsc: childCacheNode.prefetchRsc,
            head: childCacheNode.head,
            prefetchHead: childCacheNode.prefetchHead,
            parallelRoutes: new Map(childCacheNode.parallelRoutes),
            lazyDataResolved: childCacheNode.lazyDataResolved,
            loading: childCacheNode.loading
        };
        childSegmentMap.set(cacheKey, childCacheNode);
    }
    return clearCacheNodeDataForSegmentPath(childCacheNode, existingChildCacheNode, flightSegmentPath.slice(2));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=clear-cache-node-data-for-segment-path.js.map


/***/ }),

/***/ 47326:
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
    computeChangedPath: function() {
        return computeChangedPath;
    },
    extractPathFromFlightRouterState: function() {
        return extractPathFromFlightRouterState;
    }
});
const _interceptionroutes = __webpack_require__(87356);
const _segment = __webpack_require__(68071);
const _matchsegments = __webpack_require__(70455);
const removeLeadingSlash = (segment)=>{
    return segment[0] === "/" ? segment.slice(1) : segment;
};
const segmentToPathname = (segment)=>{
    if (typeof segment === "string") {
        // 'children' is not a valid path -- it's technically a parallel route that corresponds with the current segment's page
        // if we don't skip it, then the computed pathname might be something like `/children` which doesn't make sense.
        if (segment === "children") return "";
        return segment;
    }
    return segment[1];
};
function normalizeSegments(segments) {
    return segments.reduce((acc, segment)=>{
        segment = removeLeadingSlash(segment);
        if (segment === "" || (0, _segment.isGroupSegment)(segment)) {
            return acc;
        }
        return acc + "/" + segment;
    }, "") || "/";
}
function extractPathFromFlightRouterState(flightRouterState) {
    const segment = Array.isArray(flightRouterState[0]) ? flightRouterState[0][1] : flightRouterState[0];
    if (segment === _segment.DEFAULT_SEGMENT_KEY || _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>segment.startsWith(m))) return undefined;
    if (segment.startsWith(_segment.PAGE_SEGMENT_KEY)) return "";
    const segments = [
        segmentToPathname(segment)
    ];
    var _flightRouterState_;
    const parallelRoutes = (_flightRouterState_ = flightRouterState[1]) != null ? _flightRouterState_ : {};
    const childrenPath = parallelRoutes.children ? extractPathFromFlightRouterState(parallelRoutes.children) : undefined;
    if (childrenPath !== undefined) {
        segments.push(childrenPath);
    } else {
        for (const [key, value] of Object.entries(parallelRoutes)){
            if (key === "children") continue;
            const childPath = extractPathFromFlightRouterState(value);
            if (childPath !== undefined) {
                segments.push(childPath);
            }
        }
    }
    return normalizeSegments(segments);
}
function computeChangedPathImpl(treeA, treeB) {
    const [segmentA, parallelRoutesA] = treeA;
    const [segmentB, parallelRoutesB] = treeB;
    const normalizedSegmentA = segmentToPathname(segmentA);
    const normalizedSegmentB = segmentToPathname(segmentB);
    if (_interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>normalizedSegmentA.startsWith(m) || normalizedSegmentB.startsWith(m))) {
        return "";
    }
    if (!(0, _matchsegments.matchSegment)(segmentA, segmentB)) {
        var _extractPathFromFlightRouterState;
        // once we find where the tree changed, we compute the rest of the path by traversing the tree
        return (_extractPathFromFlightRouterState = extractPathFromFlightRouterState(treeB)) != null ? _extractPathFromFlightRouterState : "";
    }
    for(const parallelRouterKey in parallelRoutesA){
        if (parallelRoutesB[parallelRouterKey]) {
            const changedPath = computeChangedPathImpl(parallelRoutesA[parallelRouterKey], parallelRoutesB[parallelRouterKey]);
            if (changedPath !== null) {
                return segmentToPathname(segmentB) + "/" + changedPath;
            }
        }
    }
    return null;
}
function computeChangedPath(treeA, treeB) {
    const changedPath = computeChangedPathImpl(treeA, treeB);
    if (changedPath == null || changedPath === "/") {
        return changedPath;
    }
    // lightweight normalization to remove route groups
    return normalizeSegments(changedPath.split("/"));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=compute-changed-path.js.map


/***/ }),

/***/ 17584:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createHrefFromUrl", ({
    enumerable: true,
    get: function() {
        return createHrefFromUrl;
    }
}));
function createHrefFromUrl(url, includeHash) {
    if (includeHash === void 0) includeHash = true;
    return url.pathname + url.search + (includeHash ? url.hash : "");
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-href-from-url.js.map


/***/ }),

/***/ 6199:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createInitialRouterState", ({
    enumerable: true,
    get: function() {
        return createInitialRouterState;
    }
}));
const _createhreffromurl = __webpack_require__(17584);
const _filllazyitemstillleafwithhead = __webpack_require__(114);
const _computechangedpath = __webpack_require__(47326);
const _prefetchcacheutils = __webpack_require__(79373);
const _routerreducertypes = __webpack_require__(57767);
const _refetchinactiveparallelsegments = __webpack_require__(84158);
function createInitialRouterState(param) {
    let { buildId, initialTree, initialSeedData, urlParts, initialParallelRoutes, location, initialHead, couldBeIntercepted } = param;
    // When initialized on the server, the canonical URL is provided as an array of parts.
    // This is to ensure that when the RSC payload streamed to the client, crawlers don't interpret it
    // as a URL that should be crawled.
    const initialCanonicalUrl = urlParts.join("/");
    const isServer = !location;
    const rsc = initialSeedData[2];
    const cache = {
        lazyData: null,
        rsc: rsc,
        prefetchRsc: null,
        head: null,
        prefetchHead: null,
        // The cache gets seeded during the first render. `initialParallelRoutes` ensures the cache from the first render is there during the second render.
        parallelRoutes: isServer ? new Map() : initialParallelRoutes,
        lazyDataResolved: false,
        loading: initialSeedData[3]
    };
    const canonicalUrl = // This is safe to do as canonicalUrl can't be rendered, it's only used to control the history updates in the useEffect further down in this file.
    location ? (0, _createhreffromurl.createHrefFromUrl)(location) : initialCanonicalUrl;
    (0, _refetchinactiveparallelsegments.addRefreshMarkerToActiveParallelSegments)(initialTree, canonicalUrl);
    const prefetchCache = new Map();
    // When the cache hasn't been seeded yet we fill the cache with the head.
    if (initialParallelRoutes === null || initialParallelRoutes.size === 0) {
        (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(cache, undefined, initialTree, initialSeedData, initialHead);
    }
    var _ref;
    const initialState = {
        buildId,
        tree: initialTree,
        cache,
        prefetchCache,
        pushRef: {
            pendingPush: false,
            mpaNavigation: false,
            // First render needs to preserve the previous window.history.state
            // to avoid it being overwritten on navigation back/forward with MPA Navigation.
            preserveCustomHistoryState: true
        },
        focusAndScrollRef: {
            apply: false,
            onlyHashChange: false,
            hashFragment: null,
            segmentPaths: []
        },
        canonicalUrl,
        nextUrl: (_ref = (0, _computechangedpath.extractPathFromFlightRouterState)(initialTree) || (location == null ? void 0 : location.pathname)) != null ? _ref : null
    };
    if (location) {
        // Seed the prefetch cache with this page's data.
        // This is to prevent needlessly re-prefetching a page that is already reusable,
        // and will avoid triggering a loading state/data fetch stall when navigating back to the page.
        const url = new URL("" + location.pathname + location.search, location.origin);
        const initialFlightData = [
            [
                "",
                initialTree,
                null,
                null
            ]
        ];
        (0, _prefetchcacheutils.createPrefetchCacheEntryForInitialLoad)({
            url,
            kind: _routerreducertypes.PrefetchKind.AUTO,
            data: [
                initialFlightData,
                undefined,
                false,
                couldBeIntercepted
            ],
            tree: initialState.tree,
            prefetchCache: initialState.prefetchCache,
            nextUrl: initialState.nextUrl
        });
    }
    return initialState;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-initial-router-state.js.map


/***/ }),

/***/ 39886:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createRouterCacheKey", ({
    enumerable: true,
    get: function() {
        return createRouterCacheKey;
    }
}));
const _segment = __webpack_require__(68071);
function createRouterCacheKey(segment, withoutSearchParameters) {
    if (withoutSearchParameters === void 0) withoutSearchParameters = false;
    // if the segment is an array, it means it's a dynamic segment
    // for example, ['lang', 'en', 'd']. We need to convert it to a string to store it as a cache node key.
    if (Array.isArray(segment)) {
        return segment[0] + "|" + segment[1] + "|" + segment[2];
    }
    // Page segments might have search parameters, ie __PAGE__?foo=bar
    // When `withoutSearchParameters` is true, we only want to return the page segment
    if (withoutSearchParameters && segment.startsWith(_segment.PAGE_SEGMENT_KEY)) {
        return _segment.PAGE_SEGMENT_KEY;
    }
    return segment;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-router-cache-key.js.map


/***/ }),

/***/ 9009:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "fetchServerResponse", ({
    enumerable: true,
    get: function() {
        return fetchServerResponse;
    }
}));
const _approuterheaders = __webpack_require__(5138);
const _approuter = __webpack_require__(12994);
const _appcallserver = __webpack_require__(15424);
const _routerreducertypes = __webpack_require__(57767);
const _hash = __webpack_require__(92165);
// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
// import { createFromFetch } from 'react-server-dom-webpack/client'
const { createFromFetch } =  true ? __webpack_require__(56493) : 0;
function doMpaNavigation(url) {
    return [
        (0, _approuter.urlToUrlWithoutFlightMarker)(url).toString(),
        undefined,
        false,
        false
    ];
}
async function fetchServerResponse(url, flightRouterState, nextUrl, currentBuildId, prefetchKind) {
    const headers = {
        // Enable flight response
        [_approuterheaders.RSC_HEADER]: "1",
        // Provide the current router state
        [_approuterheaders.NEXT_ROUTER_STATE_TREE]: encodeURIComponent(JSON.stringify(flightRouterState))
    };
    /**
   * Three cases:
   * - `prefetchKind` is `undefined`, it means it's a normal navigation, so we want to prefetch the page data fully
   * - `prefetchKind` is `full` - we want to prefetch the whole page so same as above
   * - `prefetchKind` is `auto` - if the page is dynamic, prefetch the page data partially, if static prefetch the page data fully
   */ if (prefetchKind === _routerreducertypes.PrefetchKind.AUTO) {
        headers[_approuterheaders.NEXT_ROUTER_PREFETCH_HEADER] = "1";
    }
    if (nextUrl) {
        headers[_approuterheaders.NEXT_URL] = nextUrl;
    }
    if (false) {}
    const uniqueCacheQuery = (0, _hash.hexHash)([
        headers[_approuterheaders.NEXT_ROUTER_PREFETCH_HEADER] || "0",
        headers[_approuterheaders.NEXT_ROUTER_STATE_TREE],
        headers[_approuterheaders.NEXT_URL]
    ].join(","));
    try {
        var _res_headers_get;
        let fetchUrl = new URL(url);
        if (true) {
            if (false) {}
        }
        // Add unique cache query to avoid caching conflicts on CDN which don't respect to Vary header
        fetchUrl.searchParams.set(_approuterheaders.NEXT_RSC_UNION_QUERY, uniqueCacheQuery);
        const res = await fetch(fetchUrl, {
            // Backwards compat for older browsers. `same-origin` is the default in modern browsers.
            credentials: "same-origin",
            headers
        });
        const responseUrl = (0, _approuter.urlToUrlWithoutFlightMarker)(res.url);
        const canonicalUrl = res.redirected ? responseUrl : undefined;
        const contentType = res.headers.get("content-type") || "";
        const postponed = !!res.headers.get(_approuterheaders.NEXT_DID_POSTPONE_HEADER);
        const interception = !!((_res_headers_get = res.headers.get("vary")) == null ? void 0 : _res_headers_get.includes(_approuterheaders.NEXT_URL));
        let isFlightResponse = contentType === _approuterheaders.RSC_CONTENT_TYPE_HEADER;
        if (true) {
            if (false) {}
        }
        // If fetch returns something different than flight response handle it like a mpa navigation
        // If the fetch was not 200, we also handle it like a mpa navigation
        if (!isFlightResponse || !res.ok) {
            // in case the original URL came with a hash, preserve it before redirecting to the new URL
            if (url.hash) {
                responseUrl.hash = url.hash;
            }
            return doMpaNavigation(responseUrl.toString());
        }
        // Handle the `fetch` readable stream that can be unwrapped by `React.use`.
        const [buildId, flightData] = await createFromFetch(Promise.resolve(res), {
            callServer: _appcallserver.callServer
        });
        if (currentBuildId !== buildId) {
            return doMpaNavigation(res.url);
        }
        return [
            flightData,
            canonicalUrl,
            postponed,
            interception
        ];
    } catch (err) {
        console.error("Failed to fetch RSC payload for " + url + ". Falling back to browser navigation.", err);
        // If fetch fails handle it like a mpa navigation
        // TODO-APP: Add a test for the case where a CORS request fails, e.g. external url redirect coming from the response.
        // See https://github.com/vercel/next.js/issues/43605#issuecomment-1451617521 for a reproduction.
        return [
            url.toString(),
            undefined,
            false,
            false
        ];
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fetch-server-response.js.map


/***/ }),

/***/ 19056:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "fillCacheWithNewSubTreeData", ({
    enumerable: true,
    get: function() {
        return fillCacheWithNewSubTreeData;
    }
}));
const _invalidatecachebyrouterstate = __webpack_require__(2498);
const _filllazyitemstillleafwithhead = __webpack_require__(114);
const _createroutercachekey = __webpack_require__(39886);
function fillCacheWithNewSubTreeData(newCache, existingCache, flightDataPath, prefetchEntry) {
    const isLastEntry = flightDataPath.length <= 5;
    const [parallelRouteKey, segment] = flightDataPath;
    const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    const existingChildCacheNode = existingChildSegmentMap.get(cacheKey);
    let childCacheNode = childSegmentMap.get(cacheKey);
    if (isLastEntry) {
        if (!childCacheNode || !childCacheNode.lazyData || childCacheNode === existingChildCacheNode) {
            const seedData = flightDataPath[3];
            const rsc = seedData[2];
            const loading = seedData[3];
            childCacheNode = {
                lazyData: null,
                rsc,
                prefetchRsc: null,
                head: null,
                prefetchHead: null,
                loading,
                // Ensure segments other than the one we got data for are preserved.
                parallelRoutes: existingChildCacheNode ? new Map(existingChildCacheNode.parallelRoutes) : new Map(),
                lazyDataResolved: false
            };
            if (existingChildCacheNode) {
                (0, _invalidatecachebyrouterstate.invalidateCacheByRouterState)(childCacheNode, existingChildCacheNode, flightDataPath[2]);
            }
            (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(childCacheNode, existingChildCacheNode, flightDataPath[2], seedData, flightDataPath[4], prefetchEntry);
            childSegmentMap.set(cacheKey, childCacheNode);
        }
        return;
    }
    if (!childCacheNode || !existingChildCacheNode) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            lazyData: childCacheNode.lazyData,
            rsc: childCacheNode.rsc,
            prefetchRsc: childCacheNode.prefetchRsc,
            head: childCacheNode.head,
            prefetchHead: childCacheNode.prefetchHead,
            parallelRoutes: new Map(childCacheNode.parallelRoutes),
            lazyDataResolved: false,
            loading: childCacheNode.loading
        };
        childSegmentMap.set(cacheKey, childCacheNode);
    }
    fillCacheWithNewSubTreeData(childCacheNode, existingChildCacheNode, flightDataPath.slice(2), prefetchEntry);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fill-cache-with-new-subtree-data.js.map


/***/ }),

/***/ 114:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "fillLazyItemsTillLeafWithHead", ({
    enumerable: true,
    get: function() {
        return fillLazyItemsTillLeafWithHead;
    }
}));
const _createroutercachekey = __webpack_require__(39886);
const _routerreducertypes = __webpack_require__(57767);
function fillLazyItemsTillLeafWithHead(newCache, existingCache, routerState, cacheNodeSeedData, head, prefetchEntry) {
    const isLastSegment = Object.keys(routerState[1]).length === 0;
    if (isLastSegment) {
        newCache.head = head;
        return;
    }
    // Remove segment that we got data for so that it is filled in during rendering of rsc.
    for(const key in routerState[1]){
        const parallelRouteState = routerState[1][key];
        const segmentForParallelRoute = parallelRouteState[0];
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segmentForParallelRoute);
        // TODO: We should traverse the cacheNodeSeedData tree instead of the router
        // state tree. Ideally, they would always be the same shape, but because of
        // the loading.js pattern, cacheNodeSeedData sometimes only represents a
        // partial tree. That's why this node is sometimes null. Once PPR lands,
        // loading.js will no longer have special behavior and we can traverse the
        // data tree instead.
        //
        // We should also consider merging the router state tree and the data tree
        // in the response format, so that we don't have to send the keys twice.
        // Then the client can convert them into separate representations.
        const parallelSeedData = cacheNodeSeedData !== null && cacheNodeSeedData[1][key] !== undefined ? cacheNodeSeedData[1][key] : null;
        if (existingCache) {
            const existingParallelRoutesCacheNode = existingCache.parallelRoutes.get(key);
            if (existingParallelRoutesCacheNode) {
                const hasReusablePrefetch = (prefetchEntry == null ? void 0 : prefetchEntry.kind) === "auto" && prefetchEntry.status === _routerreducertypes.PrefetchCacheEntryStatus.reusable;
                let parallelRouteCacheNode = new Map(existingParallelRoutesCacheNode);
                const existingCacheNode = parallelRouteCacheNode.get(cacheKey);
                let newCacheNode;
                if (parallelSeedData !== null) {
                    // New data was sent from the server.
                    const seedNode = parallelSeedData[2];
                    const loading = parallelSeedData[3];
                    newCacheNode = {
                        lazyData: null,
                        rsc: seedNode,
                        // This is a PPR-only field. When PPR is enabled, we shouldn't hit
                        // this path during a navigation, but until PPR is fully implemented
                        // yet it's possible the existing node does have a non-null
                        // `prefetchRsc`. As an incremental step, we'll just de-opt to the
                        // old behavior — no PPR value.
                        prefetchRsc: null,
                        head: null,
                        prefetchHead: null,
                        loading,
                        parallelRoutes: new Map(existingCacheNode == null ? void 0 : existingCacheNode.parallelRoutes),
                        lazyDataResolved: false
                    };
                } else if (hasReusablePrefetch && existingCacheNode) {
                    // No new data was sent from the server, but the existing cache node
                    // was prefetched, so we should reuse that.
                    newCacheNode = {
                        lazyData: existingCacheNode.lazyData,
                        rsc: existingCacheNode.rsc,
                        // This is a PPR-only field. Unlike the previous branch, since we're
                        // just cloning the existing cache node, we might as well keep the
                        // PPR value, if it exists.
                        prefetchRsc: existingCacheNode.prefetchRsc,
                        head: existingCacheNode.head,
                        prefetchHead: existingCacheNode.prefetchHead,
                        parallelRoutes: new Map(existingCacheNode.parallelRoutes),
                        lazyDataResolved: existingCacheNode.lazyDataResolved,
                        loading: existingCacheNode.loading
                    };
                } else {
                    // No data available for this node. This will trigger a lazy fetch
                    // during render.
                    newCacheNode = {
                        lazyData: null,
                        rsc: null,
                        prefetchRsc: null,
                        head: null,
                        prefetchHead: null,
                        parallelRoutes: new Map(existingCacheNode == null ? void 0 : existingCacheNode.parallelRoutes),
                        lazyDataResolved: false,
                        loading: null
                    };
                }
                // Overrides the cache key with the new cache node.
                parallelRouteCacheNode.set(cacheKey, newCacheNode);
                // Traverse deeper to apply the head / fill lazy items till the head.
                fillLazyItemsTillLeafWithHead(newCacheNode, existingCacheNode, parallelRouteState, parallelSeedData ? parallelSeedData : null, head, prefetchEntry);
                newCache.parallelRoutes.set(key, parallelRouteCacheNode);
                continue;
            }
        }
        let newCacheNode;
        if (parallelSeedData !== null) {
            // New data was sent from the server.
            const seedNode = parallelSeedData[2];
            const loading = parallelSeedData[3];
            newCacheNode = {
                lazyData: null,
                rsc: seedNode,
                prefetchRsc: null,
                head: null,
                prefetchHead: null,
                parallelRoutes: new Map(),
                lazyDataResolved: false,
                loading
            };
        } else {
            // No data available for this node. This will trigger a lazy fetch
            // during render.
            newCacheNode = {
                lazyData: null,
                rsc: null,
                prefetchRsc: null,
                head: null,
                prefetchHead: null,
                parallelRoutes: new Map(),
                lazyDataResolved: false,
                loading: null
            };
        }
        const existingParallelRoutes = newCache.parallelRoutes.get(key);
        if (existingParallelRoutes) {
            existingParallelRoutes.set(cacheKey, newCacheNode);
        } else {
            newCache.parallelRoutes.set(key, new Map([
                [
                    cacheKey,
                    newCacheNode
                ]
            ]));
        }
        fillLazyItemsTillLeafWithHead(newCacheNode, undefined, parallelRouteState, parallelSeedData, head, prefetchEntry);
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fill-lazy-items-till-leaf-with-head.js.map


/***/ }),

/***/ 17252:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "handleMutable", ({
    enumerable: true,
    get: function() {
        return handleMutable;
    }
}));
const _computechangedpath = __webpack_require__(47326);
function isNotUndefined(value) {
    return typeof value !== "undefined";
}
function handleMutable(state, mutable) {
    var _mutable_canonicalUrl;
    var _mutable_shouldScroll;
    // shouldScroll is true by default, can override to false.
    const shouldScroll = (_mutable_shouldScroll = mutable.shouldScroll) != null ? _mutable_shouldScroll : true;
    let nextUrl = state.nextUrl;
    if (isNotUndefined(mutable.patchedTree)) {
        // If we received a patched tree, we need to compute the changed path.
        const changedPath = (0, _computechangedpath.computeChangedPath)(state.tree, mutable.patchedTree);
        if (changedPath) {
            // If the tree changed, we need to update the nextUrl
            nextUrl = changedPath;
        } else if (!nextUrl) {
            // if the tree ends up being the same (ie, no changed path), and we don't have a nextUrl, then we should use the canonicalUrl
            nextUrl = state.canonicalUrl;
        }
    // otherwise this will be a no-op and continue to use the existing nextUrl
    }
    var _mutable_scrollableSegments;
    return {
        buildId: state.buildId,
        // Set href.
        canonicalUrl: isNotUndefined(mutable.canonicalUrl) ? mutable.canonicalUrl === state.canonicalUrl ? state.canonicalUrl : mutable.canonicalUrl : state.canonicalUrl,
        pushRef: {
            pendingPush: isNotUndefined(mutable.pendingPush) ? mutable.pendingPush : state.pushRef.pendingPush,
            mpaNavigation: isNotUndefined(mutable.mpaNavigation) ? mutable.mpaNavigation : state.pushRef.mpaNavigation,
            preserveCustomHistoryState: isNotUndefined(mutable.preserveCustomHistoryState) ? mutable.preserveCustomHistoryState : state.pushRef.preserveCustomHistoryState
        },
        // All navigation requires scroll and focus management to trigger.
        focusAndScrollRef: {
            apply: shouldScroll ? isNotUndefined(mutable == null ? void 0 : mutable.scrollableSegments) ? true : state.focusAndScrollRef.apply : false,
            onlyHashChange: !!mutable.hashFragment && state.canonicalUrl.split("#", 1)[0] === ((_mutable_canonicalUrl = mutable.canonicalUrl) == null ? void 0 : _mutable_canonicalUrl.split("#", 1)[0]),
            hashFragment: shouldScroll ? mutable.hashFragment && mutable.hashFragment !== "" ? decodeURIComponent(mutable.hashFragment.slice(1)) : state.focusAndScrollRef.hashFragment : null,
            segmentPaths: shouldScroll ? (_mutable_scrollableSegments = mutable == null ? void 0 : mutable.scrollableSegments) != null ? _mutable_scrollableSegments : state.focusAndScrollRef.segmentPaths : []
        },
        // Apply cache.
        cache: mutable.cache ? mutable.cache : state.cache,
        prefetchCache: mutable.prefetchCache ? mutable.prefetchCache : state.prefetchCache,
        // Apply patched router state.
        tree: isNotUndefined(mutable.patchedTree) ? mutable.patchedTree : state.tree,
        nextUrl
    };
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=handle-mutable.js.map


/***/ }),

/***/ 65652:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "handleSegmentMismatch", ({
    enumerable: true,
    get: function() {
        return handleSegmentMismatch;
    }
}));
const _navigatereducer = __webpack_require__(20941);
function handleSegmentMismatch(state, action, treePatch) {
    if (false) {}
    return (0, _navigatereducer.handleExternalUrl)(state, {}, state.canonicalUrl, true);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=handle-segment-mismatch.js.map


/***/ }),

/***/ 43193:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "invalidateCacheBelowFlightSegmentPath", ({
    enumerable: true,
    get: function() {
        return invalidateCacheBelowFlightSegmentPath;
    }
}));
const _createroutercachekey = __webpack_require__(39886);
function invalidateCacheBelowFlightSegmentPath(newCache, existingCache, flightSegmentPath) {
    const isLastEntry = flightSegmentPath.length <= 2;
    const [parallelRouteKey, segment] = flightSegmentPath;
    const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    // In case of last entry don't copy further down.
    if (isLastEntry) {
        childSegmentMap.delete(cacheKey);
        return;
    }
    const existingChildCacheNode = existingChildSegmentMap.get(cacheKey);
    let childCacheNode = childSegmentMap.get(cacheKey);
    if (!childCacheNode || !existingChildCacheNode) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            lazyData: childCacheNode.lazyData,
            rsc: childCacheNode.rsc,
            prefetchRsc: childCacheNode.prefetchRsc,
            head: childCacheNode.head,
            prefetchHead: childCacheNode.prefetchHead,
            parallelRoutes: new Map(childCacheNode.parallelRoutes),
            lazyDataResolved: childCacheNode.lazyDataResolved
        };
        childSegmentMap.set(cacheKey, childCacheNode);
    }
    invalidateCacheBelowFlightSegmentPath(childCacheNode, existingChildCacheNode, flightSegmentPath.slice(2));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=invalidate-cache-below-flight-segmentpath.js.map


/***/ }),

/***/ 2498:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "invalidateCacheByRouterState", ({
    enumerable: true,
    get: function() {
        return invalidateCacheByRouterState;
    }
}));
const _createroutercachekey = __webpack_require__(39886);
function invalidateCacheByRouterState(newCache, existingCache, routerState) {
    // Remove segment that we got data for so that it is filled in during rendering of rsc.
    for(const key in routerState[1]){
        const segmentForParallelRoute = routerState[1][key][0];
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segmentForParallelRoute);
        const existingParallelRoutesCacheNode = existingCache.parallelRoutes.get(key);
        if (existingParallelRoutesCacheNode) {
            let parallelRouteCacheNode = new Map(existingParallelRoutesCacheNode);
            parallelRouteCacheNode.delete(cacheKey);
            newCache.parallelRoutes.set(key, parallelRouteCacheNode);
        }
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=invalidate-cache-by-router-state.js.map


/***/ }),

/***/ 23772:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isNavigatingToNewRootLayout", ({
    enumerable: true,
    get: function() {
        return isNavigatingToNewRootLayout;
    }
}));
function isNavigatingToNewRootLayout(currentTree, nextTree) {
    // Compare segments
    const currentTreeSegment = currentTree[0];
    const nextTreeSegment = nextTree[0];
    // If any segment is different before we find the root layout, the root layout has changed.
    // E.g. /same/(group1)/layout.js -> /same/(group2)/layout.js
    // First segment is 'same' for both, keep looking. (group1) changed to (group2) before the root layout was found, it must have changed.
    if (Array.isArray(currentTreeSegment) && Array.isArray(nextTreeSegment)) {
        // Compare dynamic param name and type but ignore the value, different values would not affect the current root layout
        // /[name] - /slug1 and /slug2, both values (slug1 & slug2) still has the same layout /[name]/layout.js
        if (currentTreeSegment[0] !== nextTreeSegment[0] || currentTreeSegment[2] !== nextTreeSegment[2]) {
            return true;
        }
    } else if (currentTreeSegment !== nextTreeSegment) {
        return true;
    }
    // Current tree root layout found
    if (currentTree[4]) {
        // If the next tree doesn't have the root layout flag, it must have changed.
        return !nextTree[4];
    }
    // Current tree  didn't have its root layout here, must have changed.
    if (nextTree[4]) {
        return true;
    }
    // We can't assume it's `parallelRoutes.children` here in case the root layout is `app/@something/layout.js`
    // But it's not possible to be more than one parallelRoutes before the root layout is found
    // TODO-APP: change to traverse all parallel routes
    const currentTreeChild = Object.values(currentTree[1])[0];
    const nextTreeChild = Object.values(nextTree[1])[0];
    if (!currentTreeChild || !nextTreeChild) return true;
    return isNavigatingToNewRootLayout(currentTreeChild, nextTreeChild);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-navigating-to-new-root-layout.js.map


/***/ }),

/***/ 68831:
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
    abortTask: function() {
        return abortTask;
    },
    listenForDynamicRequest: function() {
        return listenForDynamicRequest;
    },
    updateCacheNodeOnNavigation: function() {
        return updateCacheNodeOnNavigation;
    },
    updateCacheNodeOnPopstateRestoration: function() {
        return updateCacheNodeOnPopstateRestoration;
    }
});
const _segment = __webpack_require__(68071);
const _matchsegments = __webpack_require__(70455);
const _createroutercachekey = __webpack_require__(39886);
function updateCacheNodeOnNavigation(oldCacheNode, oldRouterState, newRouterState, prefetchData, prefetchHead) {
    // Diff the old and new trees to reuse the shared layouts.
    const oldRouterStateChildren = oldRouterState[1];
    const newRouterStateChildren = newRouterState[1];
    const prefetchDataChildren = prefetchData[1];
    const oldParallelRoutes = oldCacheNode.parallelRoutes;
    // Clone the current set of segment children, even if they aren't active in
    // the new tree.
    // TODO: We currently retain all the inactive segments indefinitely, until
    // there's an explicit refresh, or a parent layout is lazily refreshed. We
    // rely on this for popstate navigations, which update the Router State Tree
    // but do not eagerly perform a data fetch, because they expect the segment
    // data to already be in the Cache Node tree. For highly static sites that
    // are mostly read-only, this may happen only rarely, causing memory to
    // leak. We should figure out a better model for the lifetime of inactive
    // segments, so we can maintain instant back/forward navigations without
    // leaking memory indefinitely.
    const prefetchParallelRoutes = new Map(oldParallelRoutes);
    // As we diff the trees, we may sometimes modify (copy-on-write, not mutate)
    // the Route Tree that was returned by the server — for example, in the case
    // of default parallel routes, we preserve the currently active segment. To
    // avoid mutating the original tree, we clone the router state children along
    // the return path.
    let patchedRouterStateChildren = {};
    let taskChildren = null;
    for(let parallelRouteKey in newRouterStateChildren){
        const newRouterStateChild = newRouterStateChildren[parallelRouteKey];
        const oldRouterStateChild = oldRouterStateChildren[parallelRouteKey];
        const oldSegmentMapChild = oldParallelRoutes.get(parallelRouteKey);
        const prefetchDataChild = prefetchDataChildren[parallelRouteKey];
        const newSegmentChild = newRouterStateChild[0];
        const newSegmentKeyChild = (0, _createroutercachekey.createRouterCacheKey)(newSegmentChild);
        const oldSegmentChild = oldRouterStateChild !== undefined ? oldRouterStateChild[0] : undefined;
        const oldCacheNodeChild = oldSegmentMapChild !== undefined ? oldSegmentMapChild.get(newSegmentKeyChild) : undefined;
        let taskChild;
        if (newSegmentChild === _segment.PAGE_SEGMENT_KEY) {
            // This is a leaf segment — a page, not a shared layout. We always apply
            // its data.
            taskChild = spawnPendingTask(newRouterStateChild, prefetchDataChild !== undefined ? prefetchDataChild : null, prefetchHead);
        } else if (newSegmentChild === _segment.DEFAULT_SEGMENT_KEY) {
            // This is another kind of leaf segment — a default route.
            //
            // Default routes have special behavior. When there's no matching segment
            // for a parallel route, Next.js preserves the currently active segment
            // during a client navigation — but not for initial render. The server
            // leaves it to the client to account for this. So we need to handle
            // it here.
            if (oldRouterStateChild !== undefined) {
                // Reuse the existing Router State for this segment. We spawn a "task"
                // just to keep track of the updated router state; unlike most, it's
                // already fulfilled and won't be affected by the dynamic response.
                taskChild = spawnReusedTask(oldRouterStateChild);
            } else {
                // There's no currently active segment. Switch to the "create" path.
                taskChild = spawnPendingTask(newRouterStateChild, prefetchDataChild !== undefined ? prefetchDataChild : null, prefetchHead);
            }
        } else if (oldSegmentChild !== undefined && (0, _matchsegments.matchSegment)(newSegmentChild, oldSegmentChild)) {
            if (oldCacheNodeChild !== undefined && oldRouterStateChild !== undefined) {
                // This segment exists in both the old and new trees.
                if (prefetchDataChild !== undefined && prefetchDataChild !== null) {
                    // Recursively update the children.
                    taskChild = updateCacheNodeOnNavigation(oldCacheNodeChild, oldRouterStateChild, newRouterStateChild, prefetchDataChild, prefetchHead);
                } else {
                    // The server didn't send any prefetch data for this segment. This
                    // shouldn't happen because the Route Tree and the Seed Data tree
                    // should always be the same shape, but until we unify those types
                    // it's still possible. For now we're going to deopt and trigger a
                    // lazy fetch during render.
                    taskChild = spawnTaskForMissingData(newRouterStateChild);
                }
            } else {
                // Either there's no existing Cache Node for this segment, or this
                // segment doesn't exist in the old Router State tree. Switch to the
                // "create" path.
                taskChild = spawnPendingTask(newRouterStateChild, prefetchDataChild !== undefined ? prefetchDataChild : null, prefetchHead);
            }
        } else {
            // This is a new tree. Switch to the "create" path.
            taskChild = spawnPendingTask(newRouterStateChild, prefetchDataChild !== undefined ? prefetchDataChild : null, prefetchHead);
        }
        if (taskChild !== null) {
            // Something changed in the child tree. Keep track of the child task.
            if (taskChildren === null) {
                taskChildren = new Map();
            }
            taskChildren.set(parallelRouteKey, taskChild);
            const newCacheNodeChild = taskChild.node;
            if (newCacheNodeChild !== null) {
                const newSegmentMapChild = new Map(oldSegmentMapChild);
                newSegmentMapChild.set(newSegmentKeyChild, newCacheNodeChild);
                prefetchParallelRoutes.set(parallelRouteKey, newSegmentMapChild);
            }
            // The child tree's route state may be different from the prefetched
            // route sent by the server. We need to clone it as we traverse back up
            // the tree.
            patchedRouterStateChildren[parallelRouteKey] = taskChild.route;
        } else {
            // The child didn't change. We can use the prefetched router state.
            patchedRouterStateChildren[parallelRouteKey] = newRouterStateChild;
        }
    }
    if (taskChildren === null) {
        // No new tasks were spawned.
        return null;
    }
    const newCacheNode = {
        lazyData: null,
        rsc: oldCacheNode.rsc,
        // We intentionally aren't updating the prefetchRsc field, since this node
        // is already part of the current tree, because it would be weird for
        // prefetch data to be newer than the final data. It probably won't ever be
        // observable anyway, but it could happen if the segment is unmounted then
        // mounted again, because LayoutRouter will momentarily switch to rendering
        // prefetchRsc, via useDeferredValue.
        prefetchRsc: oldCacheNode.prefetchRsc,
        head: oldCacheNode.head,
        prefetchHead: oldCacheNode.prefetchHead,
        loading: oldCacheNode.loading,
        // Everything is cloned except for the children, which we computed above.
        parallelRoutes: prefetchParallelRoutes,
        lazyDataResolved: false
    };
    return {
        // Return a cloned copy of the router state with updated children.
        route: patchRouterStateWithNewChildren(newRouterState, patchedRouterStateChildren),
        node: newCacheNode,
        children: taskChildren
    };
}
function patchRouterStateWithNewChildren(baseRouterState, newChildren) {
    const clone = [
        baseRouterState[0],
        newChildren
    ];
    // Based on equivalent logic in apply-router-state-patch-to-tree, but should
    // confirm whether we need to copy all of these fields. Not sure the server
    // ever sends, e.g. the refetch marker.
    if (2 in baseRouterState) {
        clone[2] = baseRouterState[2];
    }
    if (3 in baseRouterState) {
        clone[3] = baseRouterState[3];
    }
    if (4 in baseRouterState) {
        clone[4] = baseRouterState[4];
    }
    return clone;
}
function spawnPendingTask(routerState, prefetchData, prefetchHead) {
    // Create a task that will later be fulfilled by data from the server.
    const pendingCacheNode = createPendingCacheNode(routerState, prefetchData, prefetchHead);
    return {
        route: routerState,
        node: pendingCacheNode,
        children: null
    };
}
function spawnReusedTask(reusedRouterState) {
    // Create a task that reuses an existing segment, e.g. when reusing
    // the current active segment in place of a default route.
    return {
        route: reusedRouterState,
        node: null,
        children: null
    };
}
function spawnTaskForMissingData(routerState) {
    // Create a task for a new subtree that wasn't prefetched by the server.
    // This shouldn't really ever happen but it's here just in case the Seed Data
    // Tree and the Router State Tree disagree unexpectedly.
    const pendingCacheNode = createPendingCacheNode(routerState, null, null);
    return {
        route: routerState,
        node: pendingCacheNode,
        children: null
    };
}
function listenForDynamicRequest(task, responsePromise) {
    responsePromise.then((response)=>{
        const flightData = response[0];
        for (const flightDataPath of flightData){
            const segmentPath = flightDataPath.slice(0, -3);
            const serverRouterState = flightDataPath[flightDataPath.length - 3];
            const dynamicData = flightDataPath[flightDataPath.length - 2];
            const dynamicHead = flightDataPath[flightDataPath.length - 1];
            if (typeof segmentPath === "string") {
                continue;
            }
            writeDynamicDataIntoPendingTask(task, segmentPath, serverRouterState, dynamicData, dynamicHead);
        }
        // Now that we've exhausted all the data we received from the server, if
        // there are any remaining pending tasks in the tree, abort them now.
        // If there's any missing data, it will trigger a lazy fetch.
        abortTask(task, null);
    }, (error)=>{
        // This will trigger an error during render
        abortTask(task, error);
    });
}
function writeDynamicDataIntoPendingTask(rootTask, segmentPath, serverRouterState, dynamicData, dynamicHead) {
    // The data sent by the server represents only a subtree of the app. We need
    // to find the part of the task tree that matches the server response, and
    // fulfill it using the dynamic data.
    //
    // segmentPath represents the parent path of subtree. It's a repeating pattern
    // of parallel route key and segment:
    //
    //   [string, Segment, string, Segment, string, Segment, ...]
    //
    // Iterate through the path and finish any tasks that match this payload.
    let task = rootTask;
    for(let i = 0; i < segmentPath.length; i += 2){
        const parallelRouteKey = segmentPath[i];
        const segment = segmentPath[i + 1];
        const taskChildren = task.children;
        if (taskChildren !== null) {
            const taskChild = taskChildren.get(parallelRouteKey);
            if (taskChild !== undefined) {
                const taskSegment = taskChild.route[0];
                if ((0, _matchsegments.matchSegment)(segment, taskSegment)) {
                    // Found a match for this task. Keep traversing down the task tree.
                    task = taskChild;
                    continue;
                }
            }
        }
        // We didn't find a child task that matches the server data. Exit. We won't
        // abort the task, though, because a different FlightDataPath may be able to
        // fulfill it (see loop in listenForDynamicRequest). We only abort tasks
        // once we've run out of data.
        return;
    }
    finishTaskUsingDynamicDataPayload(task, serverRouterState, dynamicData, dynamicHead);
}
function finishTaskUsingDynamicDataPayload(task, serverRouterState, dynamicData, dynamicHead) {
    // dynamicData may represent a larger subtree than the task. Before we can
    // finish the task, we need to line them up.
    const taskChildren = task.children;
    const taskNode = task.node;
    if (taskChildren === null) {
        // We've reached the leaf node of the pending task. The server data tree
        // lines up the pending Cache Node tree. We can now switch to the
        // normal algorithm.
        if (taskNode !== null) {
            finishPendingCacheNode(taskNode, task.route, serverRouterState, dynamicData, dynamicHead);
            // Null this out to indicate that the task is complete.
            task.node = null;
        }
        return;
    }
    // The server returned more data than we need to finish the task. Skip over
    // the extra segments until we reach the leaf task node.
    const serverChildren = serverRouterState[1];
    const dynamicDataChildren = dynamicData[1];
    for(const parallelRouteKey in serverRouterState){
        const serverRouterStateChild = serverChildren[parallelRouteKey];
        const dynamicDataChild = dynamicDataChildren[parallelRouteKey];
        const taskChild = taskChildren.get(parallelRouteKey);
        if (taskChild !== undefined) {
            const taskSegment = taskChild.route[0];
            if ((0, _matchsegments.matchSegment)(serverRouterStateChild[0], taskSegment) && dynamicDataChild !== null && dynamicDataChild !== undefined) {
                // Found a match for this task. Keep traversing down the task tree.
                return finishTaskUsingDynamicDataPayload(taskChild, serverRouterStateChild, dynamicDataChild, dynamicHead);
            }
        }
    // We didn't find a child task that matches the server data. We won't abort
    // the task, though, because a different FlightDataPath may be able to
    // fulfill it (see loop in listenForDynamicRequest). We only abort tasks
    // once we've run out of data.
    }
}
function createPendingCacheNode(routerState, prefetchData, prefetchHead) {
    const routerStateChildren = routerState[1];
    const prefetchDataChildren = prefetchData !== null ? prefetchData[1] : null;
    const parallelRoutes = new Map();
    for(let parallelRouteKey in routerStateChildren){
        const routerStateChild = routerStateChildren[parallelRouteKey];
        const prefetchDataChild = prefetchDataChildren !== null ? prefetchDataChildren[parallelRouteKey] : null;
        const segmentChild = routerStateChild[0];
        const segmentKeyChild = (0, _createroutercachekey.createRouterCacheKey)(segmentChild);
        const newCacheNodeChild = createPendingCacheNode(routerStateChild, prefetchDataChild === undefined ? null : prefetchDataChild, prefetchHead);
        const newSegmentMapChild = new Map();
        newSegmentMapChild.set(segmentKeyChild, newCacheNodeChild);
        parallelRoutes.set(parallelRouteKey, newSegmentMapChild);
    }
    // The head is assigned to every leaf segment delivered by the server. Based
    // on corresponding logic in fill-lazy-items-till-leaf-with-head.ts
    const isLeafSegment = parallelRoutes.size === 0;
    const maybePrefetchRsc = prefetchData !== null ? prefetchData[2] : null;
    const maybePrefetchLoading = prefetchData !== null ? prefetchData[3] : null;
    return {
        lazyData: null,
        parallelRoutes: parallelRoutes,
        prefetchRsc: maybePrefetchRsc !== undefined ? maybePrefetchRsc : null,
        prefetchHead: isLeafSegment ? prefetchHead : null,
        loading: maybePrefetchLoading !== undefined ? maybePrefetchLoading : null,
        // Create a deferred promise. This will be fulfilled once the dynamic
        // response is received from the server.
        rsc: createDeferredRsc(),
        head: isLeafSegment ? createDeferredRsc() : null,
        lazyDataResolved: false
    };
}
function finishPendingCacheNode(cacheNode, taskState, serverState, dynamicData, dynamicHead) {
    // Writes a dynamic response into an existing Cache Node tree. This does _not_
    // create a new tree, it updates the existing tree in-place. So it must follow
    // the Suspense rules of cache safety — it can resolve pending promises, but
    // it cannot overwrite existing data. It can add segments to the tree (because
    // a missing segment will cause the layout router to suspend).
    // but it cannot delete them.
    //
    // We must resolve every promise in the tree, or else it will suspend
    // indefinitely. If we did not receive data for a segment, we will resolve its
    // data promise to `null` to trigger a lazy fetch during render.
    const taskStateChildren = taskState[1];
    const serverStateChildren = serverState[1];
    const dataChildren = dynamicData[1];
    // The router state that we traverse the tree with (taskState) is the same one
    // that we used to construct the pending Cache Node tree. That way we're sure
    // to resolve all the pending promises.
    const parallelRoutes = cacheNode.parallelRoutes;
    for(let parallelRouteKey in taskStateChildren){
        const taskStateChild = taskStateChildren[parallelRouteKey];
        const serverStateChild = serverStateChildren[parallelRouteKey];
        const dataChild = dataChildren[parallelRouteKey];
        const segmentMapChild = parallelRoutes.get(parallelRouteKey);
        const taskSegmentChild = taskStateChild[0];
        const taskSegmentKeyChild = (0, _createroutercachekey.createRouterCacheKey)(taskSegmentChild);
        const cacheNodeChild = segmentMapChild !== undefined ? segmentMapChild.get(taskSegmentKeyChild) : undefined;
        if (cacheNodeChild !== undefined) {
            if (serverStateChild !== undefined && (0, _matchsegments.matchSegment)(taskSegmentChild, serverStateChild[0])) {
                if (dataChild !== undefined && dataChild !== null) {
                    // This is the happy path. Recursively update all the children.
                    finishPendingCacheNode(cacheNodeChild, taskStateChild, serverStateChild, dataChild, dynamicHead);
                } else {
                    // The server never returned data for this segment. Trigger a lazy
                    // fetch during render. This shouldn't happen because the Route Tree
                    // and the Seed Data tree sent by the server should always be the same
                    // shape when part of the same server response.
                    abortPendingCacheNode(taskStateChild, cacheNodeChild, null);
                }
            } else {
                // The server never returned data for this segment. Trigger a lazy
                // fetch during render.
                abortPendingCacheNode(taskStateChild, cacheNodeChild, null);
            }
        } else {
        // The server response matches what was expected to receive, but there's
        // no matching Cache Node in the task tree. This is a bug in the
        // implementation because we should have created a node for every
        // segment in the tree that's associated with this task.
        }
    }
    // Use the dynamic data from the server to fulfill the deferred RSC promise
    // on the Cache Node.
    const rsc = cacheNode.rsc;
    const dynamicSegmentData = dynamicData[2];
    if (rsc === null) {
        // This is a lazy cache node. We can overwrite it. This is only safe
        // because we know that the LayoutRouter suspends if `rsc` is `null`.
        cacheNode.rsc = dynamicSegmentData;
    } else if (isDeferredRsc(rsc)) {
        // This is a deferred RSC promise. We can fulfill it with the data we just
        // received from the server. If it was already resolved by a different
        // navigation, then this does nothing because we can't overwrite data.
        rsc.resolve(dynamicSegmentData);
    } else {
    // This is not a deferred RSC promise, nor is it empty, so it must have
    // been populated by a different navigation. We must not overwrite it.
    }
    // Check if this is a leaf segment. If so, it will have a `head` property with
    // a pending promise that needs to be resolved with the dynamic head from
    // the server.
    const head = cacheNode.head;
    if (isDeferredRsc(head)) {
        head.resolve(dynamicHead);
    }
}
function abortTask(task, error) {
    const cacheNode = task.node;
    if (cacheNode === null) {
        // This indicates the task is already complete.
        return;
    }
    const taskChildren = task.children;
    if (taskChildren === null) {
        // Reached the leaf task node. This is the root of a pending cache
        // node tree.
        abortPendingCacheNode(task.route, cacheNode, error);
    } else {
        // This is an intermediate task node. Keep traversing until we reach a
        // task node with no children. That will be the root of the cache node tree
        // that needs to be resolved.
        for (const taskChild of taskChildren.values()){
            abortTask(taskChild, error);
        }
    }
    // Null this out to indicate that the task is complete.
    task.node = null;
}
function abortPendingCacheNode(routerState, cacheNode, error) {
    // For every pending segment in the tree, resolve its `rsc` promise to `null`
    // to trigger a lazy fetch during render.
    //
    // Or, if an error object is provided, it will error instead.
    const routerStateChildren = routerState[1];
    const parallelRoutes = cacheNode.parallelRoutes;
    for(let parallelRouteKey in routerStateChildren){
        const routerStateChild = routerStateChildren[parallelRouteKey];
        const segmentMapChild = parallelRoutes.get(parallelRouteKey);
        if (segmentMapChild === undefined) {
            continue;
        }
        const segmentChild = routerStateChild[0];
        const segmentKeyChild = (0, _createroutercachekey.createRouterCacheKey)(segmentChild);
        const cacheNodeChild = segmentMapChild.get(segmentKeyChild);
        if (cacheNodeChild !== undefined) {
            abortPendingCacheNode(routerStateChild, cacheNodeChild, error);
        } else {
        // This shouldn't happen because we're traversing the same tree that was
        // used to construct the cache nodes in the first place.
        }
    }
    const rsc = cacheNode.rsc;
    if (isDeferredRsc(rsc)) {
        if (error === null) {
            // This will trigger a lazy fetch during render.
            rsc.resolve(null);
        } else {
            // This will trigger an error during rendering.
            rsc.reject(error);
        }
    }
    // Check if this is a leaf segment. If so, it will have a `head` property with
    // a pending promise that needs to be resolved. If an error was provided, we
    // will not resolve it with an error, since this is rendered at the root of
    // the app. We want the segment to error, not the entire app.
    const head = cacheNode.head;
    if (isDeferredRsc(head)) {
        head.resolve(null);
    }
}
function updateCacheNodeOnPopstateRestoration(oldCacheNode, routerState) {
    // A popstate navigation reads data from the local cache. It does not issue
    // new network requests (unless the cache entries have been evicted). So, we
    // update the cache to drop the prefetch  data for any segment whose dynamic
    // data was already received. This prevents an unnecessary flash back to PPR
    // state during a back/forward navigation.
    //
    // This function clones the entire cache node tree and sets the `prefetchRsc`
    // field to `null` to prevent it from being rendered. We can't mutate the node
    // in place because this is a concurrent data structure.
    const routerStateChildren = routerState[1];
    const oldParallelRoutes = oldCacheNode.parallelRoutes;
    const newParallelRoutes = new Map(oldParallelRoutes);
    for(let parallelRouteKey in routerStateChildren){
        const routerStateChild = routerStateChildren[parallelRouteKey];
        const segmentChild = routerStateChild[0];
        const segmentKeyChild = (0, _createroutercachekey.createRouterCacheKey)(segmentChild);
        const oldSegmentMapChild = oldParallelRoutes.get(parallelRouteKey);
        if (oldSegmentMapChild !== undefined) {
            const oldCacheNodeChild = oldSegmentMapChild.get(segmentKeyChild);
            if (oldCacheNodeChild !== undefined) {
                const newCacheNodeChild = updateCacheNodeOnPopstateRestoration(oldCacheNodeChild, routerStateChild);
                const newSegmentMapChild = new Map(oldSegmentMapChild);
                newSegmentMapChild.set(segmentKeyChild, newCacheNodeChild);
                newParallelRoutes.set(parallelRouteKey, newSegmentMapChild);
            }
        }
    }
    // Only show prefetched data if the dynamic data is still pending.
    //
    // Tehnically, what we're actually checking is whether the dynamic network
    // response was received. But since it's a streaming response, this does not
    // mean that all the dynamic data has fully streamed in. It just means that
    // _some_ of the dynamic data was received. But as a heuristic, we assume that
    // the rest dynamic data will stream in quickly, so it's still better to skip
    // the prefetch state.
    const rsc = oldCacheNode.rsc;
    const shouldUsePrefetch = isDeferredRsc(rsc) && rsc.status === "pending";
    return {
        lazyData: null,
        rsc,
        head: oldCacheNode.head,
        prefetchHead: shouldUsePrefetch ? oldCacheNode.prefetchHead : null,
        prefetchRsc: shouldUsePrefetch ? oldCacheNode.prefetchRsc : null,
        loading: shouldUsePrefetch ? oldCacheNode.loading : null,
        // These are the cloned children we computed above
        parallelRoutes: newParallelRoutes,
        lazyDataResolved: false
    };
}
const DEFERRED = Symbol();
// This type exists to distinguish a DeferredRsc from a Flight promise. It's a
// compromise to avoid adding an extra field on every Cache Node, which would be
// awkward because the pre-PPR parts of codebase would need to account for it,
// too. We can remove it once type Cache Node type is more settled.
function isDeferredRsc(value) {
    return value && value.tag === DEFERRED;
}
function createDeferredRsc() {
    let resolve;
    let reject;
    const pendingRsc = new Promise((res, rej)=>{
        resolve = res;
        reject = rej;
    });
    pendingRsc.status = "pending";
    pendingRsc.resolve = (value)=>{
        if (pendingRsc.status === "pending") {
            const fulfilledRsc = pendingRsc;
            fulfilledRsc.status = "fulfilled";
            fulfilledRsc.value = value;
            resolve(value);
        }
    };
    pendingRsc.reject = (error)=>{
        if (pendingRsc.status === "pending") {
            const rejectedRsc = pendingRsc;
            rejectedRsc.status = "rejected";
            rejectedRsc.reason = error;
            reject(error);
        }
    };
    pendingRsc.tag = DEFERRED;
    return pendingRsc;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=ppr-navigations.js.map


/***/ }),

/***/ 79373:
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
    createPrefetchCacheEntryForInitialLoad: function() {
        return createPrefetchCacheEntryForInitialLoad;
    },
    getOrCreatePrefetchCacheEntry: function() {
        return getOrCreatePrefetchCacheEntry;
    },
    prunePrefetchCache: function() {
        return prunePrefetchCache;
    }
});
const _createhreffromurl = __webpack_require__(17584);
const _fetchserverresponse = __webpack_require__(9009);
const _routerreducertypes = __webpack_require__(57767);
const _prefetchreducer = __webpack_require__(61156);
/**
 * Creates a cache key for the router prefetch cache
 *
 * @param url - The URL being navigated to
 * @param nextUrl - an internal URL, primarily used for handling rewrites. Defaults to '/'.
 * @return The generated prefetch cache key.
 */ function createPrefetchCacheKey(url, nextUrl) {
    const pathnameFromUrl = (0, _createhreffromurl.createHrefFromUrl)(url, false);
    // nextUrl is used as a cache key delimiter since entries can vary based on the Next-URL header
    if (nextUrl) {
        return nextUrl + "%" + pathnameFromUrl;
    }
    return pathnameFromUrl;
}
function getOrCreatePrefetchCacheEntry(param) {
    let { url, nextUrl, tree, buildId, prefetchCache, kind } = param;
    let existingCacheEntry = undefined;
    // We first check if there's a more specific interception route prefetch entry
    // This is because when we detect a prefetch that corresponds with an interception route, we prefix it with nextUrl (see `createPrefetchCacheKey`)
    // to avoid conflicts with other pages that may have the same URL but render different things depending on the `Next-URL` header.
    const interceptionCacheKey = createPrefetchCacheKey(url, nextUrl);
    const interceptionData = prefetchCache.get(interceptionCacheKey);
    if (interceptionData) {
        existingCacheEntry = interceptionData;
    } else {
        // If we dont find a more specific interception route prefetch entry, we check for a regular prefetch entry
        const prefetchCacheKey = createPrefetchCacheKey(url);
        const prefetchData = prefetchCache.get(prefetchCacheKey);
        if (prefetchData) {
            existingCacheEntry = prefetchData;
        }
    }
    if (existingCacheEntry) {
        // Grab the latest status of the cache entry and update it
        existingCacheEntry.status = getPrefetchEntryCacheStatus(existingCacheEntry);
        // when `kind` is provided, an explicit prefetch was requested.
        // if the requested prefetch is "full" and the current cache entry wasn't, we want to re-prefetch with the new intent
        const switchedToFullPrefetch = existingCacheEntry.kind !== _routerreducertypes.PrefetchKind.FULL && kind === _routerreducertypes.PrefetchKind.FULL;
        if (switchedToFullPrefetch) {
            return createLazyPrefetchEntry({
                tree,
                url,
                buildId,
                nextUrl,
                prefetchCache,
                // If we didn't get an explicit prefetch kind, we want to set a temporary kind
                // rather than assuming the same intent as the previous entry, to be consistent with how we
                // lazily create prefetch entries when intent is left unspecified.
                kind: kind != null ? kind : _routerreducertypes.PrefetchKind.TEMPORARY
            });
        }
        // If the existing cache entry was marked as temporary, it means it was lazily created when attempting to get an entry,
        // where we didn't have the prefetch intent. Now that we have the intent (in `kind`), we want to update the entry to the more accurate kind.
        if (kind && existingCacheEntry.kind === _routerreducertypes.PrefetchKind.TEMPORARY) {
            existingCacheEntry.kind = kind;
        }
        // We've determined that the existing entry we found is still valid, so we return it.
        return existingCacheEntry;
    }
    // If we didn't return an entry, create a new one.
    return createLazyPrefetchEntry({
        tree,
        url,
        buildId,
        nextUrl,
        prefetchCache,
        kind: kind || // in dev, there's never gonna be a prefetch entry so we want to prefetch here
        ( false ? 0 : _routerreducertypes.PrefetchKind.TEMPORARY)
    });
}
/*
 * Used to take an existing cache entry and prefix it with the nextUrl, if it exists.
 * This ensures that we don't have conflicting cache entries for the same URL (as is the case with route interception).
 */ function prefixExistingPrefetchCacheEntry(param) {
    let { url, nextUrl, prefetchCache } = param;
    const existingCacheKey = createPrefetchCacheKey(url);
    const existingCacheEntry = prefetchCache.get(existingCacheKey);
    if (!existingCacheEntry) {
        // no-op -- there wasn't an entry to move
        return;
    }
    const newCacheKey = createPrefetchCacheKey(url, nextUrl);
    prefetchCache.set(newCacheKey, existingCacheEntry);
    prefetchCache.delete(existingCacheKey);
}
function createPrefetchCacheEntryForInitialLoad(param) {
    let { nextUrl, tree, prefetchCache, url, kind, data } = param;
    const [, , , intercept] = data;
    // if the prefetch corresponds with an interception route, we use the nextUrl to prefix the cache key
    const prefetchCacheKey = intercept ? createPrefetchCacheKey(url, nextUrl) : createPrefetchCacheKey(url);
    const prefetchEntry = {
        treeAtTimeOfPrefetch: tree,
        data: Promise.resolve(data),
        kind,
        prefetchTime: Date.now(),
        lastUsedTime: Date.now(),
        key: prefetchCacheKey,
        status: _routerreducertypes.PrefetchCacheEntryStatus.fresh
    };
    prefetchCache.set(prefetchCacheKey, prefetchEntry);
    return prefetchEntry;
}
/**
 * Creates a prefetch entry entry and enqueues a fetch request to retrieve the data.
 */ function createLazyPrefetchEntry(param) {
    let { url, kind, tree, nextUrl, buildId, prefetchCache } = param;
    const prefetchCacheKey = createPrefetchCacheKey(url);
    // initiates the fetch request for the prefetch and attaches a listener
    // to the promise to update the prefetch cache entry when the promise resolves (if necessary)
    const data = _prefetchreducer.prefetchQueue.enqueue(()=>(0, _fetchserverresponse.fetchServerResponse)(url, tree, nextUrl, buildId, kind).then((prefetchResponse)=>{
            // TODO: `fetchServerResponse` should be more tighly coupled to these prefetch cache operations
            // to avoid drift between this cache key prefixing logic
            // (which is currently directly influenced by the server response)
            const [, , , intercepted] = prefetchResponse;
            if (intercepted) {
                prefixExistingPrefetchCacheEntry({
                    url,
                    nextUrl,
                    prefetchCache
                });
            }
            return prefetchResponse;
        }));
    const prefetchEntry = {
        treeAtTimeOfPrefetch: tree,
        data,
        kind,
        prefetchTime: Date.now(),
        lastUsedTime: null,
        key: prefetchCacheKey,
        status: _routerreducertypes.PrefetchCacheEntryStatus.fresh
    };
    prefetchCache.set(prefetchCacheKey, prefetchEntry);
    return prefetchEntry;
}
function prunePrefetchCache(prefetchCache) {
    for (const [href, prefetchCacheEntry] of prefetchCache){
        if (getPrefetchEntryCacheStatus(prefetchCacheEntry) === _routerreducertypes.PrefetchCacheEntryStatus.expired) {
            prefetchCache.delete(href);
        }
    }
}
// These values are set by `define-env-plugin` (based on `nextConfig.experimental.staleTimes`)
// and default to 5 minutes (static) / 30 seconds (dynamic)
const DYNAMIC_STALETIME_MS = Number("30") * 1000;
const STATIC_STALETIME_MS = Number("300") * 1000;
function getPrefetchEntryCacheStatus(param) {
    let { kind, prefetchTime, lastUsedTime } = param;
    // We will re-use the cache entry data for up to the `dynamic` staletime window.
    if (Date.now() < (lastUsedTime != null ? lastUsedTime : prefetchTime) + DYNAMIC_STALETIME_MS) {
        return lastUsedTime ? _routerreducertypes.PrefetchCacheEntryStatus.reusable : _routerreducertypes.PrefetchCacheEntryStatus.fresh;
    }
    // For "auto" prefetching, we'll re-use only the loading boundary for up to `static` staletime window.
    // A stale entry will only re-use the `loading` boundary, not the full data.
    // This will trigger a "lazy fetch" for the full data.
    if (kind === "auto") {
        if (Date.now() < prefetchTime + STATIC_STALETIME_MS) {
            return _routerreducertypes.PrefetchCacheEntryStatus.stale;
        }
    }
    // for "full" prefetching, we'll re-use the cache entry data for up to `static` staletime window.
    if (kind === "full") {
        if (Date.now() < prefetchTime + STATIC_STALETIME_MS) {
            return _routerreducertypes.PrefetchCacheEntryStatus.reusable;
        }
    }
    return _routerreducertypes.PrefetchCacheEntryStatus.expired;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=prefetch-cache-utils.js.map


/***/ }),

/***/ 95703:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "fastRefreshReducer", ({
    enumerable: true,
    get: function() {
        return fastRefreshReducer;
    }
}));
const _fetchserverresponse = __webpack_require__(9009);
const _createhreffromurl = __webpack_require__(17584);
const _applyrouterstatepatchtotree = __webpack_require__(95166);
const _isnavigatingtonewrootlayout = __webpack_require__(23772);
const _navigatereducer = __webpack_require__(20941);
const _handlemutable = __webpack_require__(17252);
const _applyflightdata = __webpack_require__(9894);
const _approuter = __webpack_require__(12994);
const _handlesegmentmismatch = __webpack_require__(65652);
const _hasinterceptionrouteincurrenttree = __webpack_require__(45262);
// A version of refresh reducer that keeps the cache around instead of wiping all of it.
function fastRefreshReducerImpl(state, action) {
    const { origin } = action;
    const mutable = {};
    const href = state.canonicalUrl;
    mutable.preserveCustomHistoryState = false;
    const cache = (0, _approuter.createEmptyCacheNode)();
    // If the current tree was intercepted, the nextUrl should be included in the request.
    // This is to ensure that the refresh request doesn't get intercepted, accidentally triggering the interception route.
    const includeNextUrl = (0, _hasinterceptionrouteincurrenttree.hasInterceptionRouteInCurrentTree)(state.tree);
    // TODO-APP: verify that `href` is not an external url.
    // Fetch data from the root of the tree.
    cache.lazyData = (0, _fetchserverresponse.fetchServerResponse)(new URL(href, origin), [
        state.tree[0],
        state.tree[1],
        state.tree[2],
        "refetch"
    ], includeNextUrl ? state.nextUrl : null, state.buildId);
    return cache.lazyData.then((param)=>{
        let [flightData, canonicalUrlOverride] = param;
        // Handle case when navigating to page in `pages` from `app`
        if (typeof flightData === "string") {
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, state.pushRef.pendingPush);
        }
        // Remove cache.lazyData as it has been resolved at this point.
        cache.lazyData = null;
        let currentTree = state.tree;
        let currentCache = state.cache;
        for (const flightDataPath of flightData){
            // FlightDataPath with more than two items means unexpected Flight data was returned
            if (flightDataPath.length !== 3) {
                // TODO-APP: handle this case better
                console.log("REFRESH FAILED");
                return state;
            }
            // Given the path can only have two items the items are only the router state and rsc for the root.
            const [treePatch] = flightDataPath;
            const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
                ""
            ], currentTree, treePatch, state.canonicalUrl);
            if (newTree === null) {
                return (0, _handlesegmentmismatch.handleSegmentMismatch)(state, action, treePatch);
            }
            if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
                return (0, _navigatereducer.handleExternalUrl)(state, mutable, href, state.pushRef.pendingPush);
            }
            const canonicalUrlOverrideHref = canonicalUrlOverride ? (0, _createhreffromurl.createHrefFromUrl)(canonicalUrlOverride) : undefined;
            if (canonicalUrlOverride) {
                mutable.canonicalUrl = canonicalUrlOverrideHref;
            }
            const applied = (0, _applyflightdata.applyFlightData)(currentCache, cache, flightDataPath);
            if (applied) {
                mutable.cache = cache;
                currentCache = cache;
            }
            mutable.patchedTree = newTree;
            mutable.canonicalUrl = href;
            currentTree = newTree;
        }
        return (0, _handlemutable.handleMutable)(state, mutable);
    }, ()=>state);
}
function fastRefreshReducerNoop(state, _action) {
    return state;
}
const fastRefreshReducer =  true ? fastRefreshReducerNoop : 0;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fast-refresh-reducer.js.map


/***/ }),

/***/ 22492:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "findHeadInCache", ({
    enumerable: true,
    get: function() {
        return findHeadInCache;
    }
}));
const _createroutercachekey = __webpack_require__(39886);
function findHeadInCache(cache, parallelRoutes) {
    return findHeadInCacheImpl(cache, parallelRoutes, "");
}
function findHeadInCacheImpl(cache, parallelRoutes, keyPrefix) {
    const isLastItem = Object.keys(parallelRoutes).length === 0;
    if (isLastItem) {
        // Returns the entire Cache Node of the segment whose head we will render.
        return [
            cache,
            keyPrefix
        ];
    }
    for(const key in parallelRoutes){
        const [segment, childParallelRoutes] = parallelRoutes[key];
        const childSegmentMap = cache.parallelRoutes.get(key);
        if (!childSegmentMap) {
            continue;
        }
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
        const cacheNode = childSegmentMap.get(cacheKey);
        if (!cacheNode) {
            continue;
        }
        const item = findHeadInCacheImpl(cacheNode, childParallelRoutes, keyPrefix + "/" + cacheKey);
        if (item) {
            return item;
        }
    }
    return null;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=find-head-in-cache.js.map


/***/ }),

/***/ 62162:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getSegmentValue", ({
    enumerable: true,
    get: function() {
        return getSegmentValue;
    }
}));
function getSegmentValue(segment) {
    return Array.isArray(segment) ? segment[1] : segment;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-segment-value.js.map


/***/ }),

/***/ 45262:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "hasInterceptionRouteInCurrentTree", ({
    enumerable: true,
    get: function() {
        return hasInterceptionRouteInCurrentTree;
    }
}));
const _interceptionroutes = __webpack_require__(87356);
function hasInterceptionRouteInCurrentTree(param) {
    let [segment, parallelRoutes] = param;
    // If we have a dynamic segment, it's marked as an interception route by the presence of the `i` suffix.
    if (Array.isArray(segment) && (segment[2] === "di" || segment[2] === "ci")) {
        return true;
    }
    // If segment is not an array, apply the existing string-based check
    if (typeof segment === "string" && (0, _interceptionroutes.isInterceptionRouteAppPath)(segment)) {
        return true;
    }
    // Iterate through parallelRoutes if they exist
    if (parallelRoutes) {
        for(const key in parallelRoutes){
            if (hasInterceptionRouteInCurrentTree(parallelRoutes[key])) {
                return true;
            }
        }
    }
    return false;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=has-interception-route-in-current-tree.js.map


/***/ }),

/***/ 20941:
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
    handleExternalUrl: function() {
        return handleExternalUrl;
    },
    navigateReducer: function() {
        return navigateReducer;
    }
});
const _fetchserverresponse = __webpack_require__(9009);
const _createhreffromurl = __webpack_require__(17584);
const _invalidatecachebelowflightsegmentpath = __webpack_require__(43193);
const _applyrouterstatepatchtotree = __webpack_require__(95166);
const _shouldhardnavigate = __webpack_require__(54614);
const _isnavigatingtonewrootlayout = __webpack_require__(23772);
const _routerreducertypes = __webpack_require__(57767);
const _handlemutable = __webpack_require__(17252);
const _applyflightdata = __webpack_require__(9894);
const _prefetchreducer = __webpack_require__(61156);
const _approuter = __webpack_require__(12994);
const _segment = __webpack_require__(68071);
const _pprnavigations = __webpack_require__(68831);
const _prefetchcacheutils = __webpack_require__(79373);
const _clearcachenodedataforsegmentpath = __webpack_require__(12895);
function handleExternalUrl(state, mutable, url, pendingPush) {
    mutable.mpaNavigation = true;
    mutable.canonicalUrl = url;
    mutable.pendingPush = pendingPush;
    mutable.scrollableSegments = undefined;
    return (0, _handlemutable.handleMutable)(state, mutable);
}
function generateSegmentsFromPatch(flightRouterPatch) {
    const segments = [];
    const [segment, parallelRoutes] = flightRouterPatch;
    if (Object.keys(parallelRoutes).length === 0) {
        return [
            [
                segment
            ]
        ];
    }
    for (const [parallelRouteKey, parallelRoute] of Object.entries(parallelRoutes)){
        for (const childSegment of generateSegmentsFromPatch(parallelRoute)){
            // If the segment is empty, it means we are at the root of the tree
            if (segment === "") {
                segments.push([
                    parallelRouteKey,
                    ...childSegment
                ]);
            } else {
                segments.push([
                    segment,
                    parallelRouteKey,
                    ...childSegment
                ]);
            }
        }
    }
    return segments;
}
function triggerLazyFetchForLeafSegments(newCache, currentCache, flightSegmentPath, treePatch) {
    let appliedPatch = false;
    newCache.rsc = currentCache.rsc;
    newCache.prefetchRsc = currentCache.prefetchRsc;
    newCache.loading = currentCache.loading;
    newCache.parallelRoutes = new Map(currentCache.parallelRoutes);
    const segmentPathsToFill = generateSegmentsFromPatch(treePatch).map((segment)=>[
            ...flightSegmentPath,
            ...segment
        ]);
    for (const segmentPaths of segmentPathsToFill){
        (0, _clearcachenodedataforsegmentpath.clearCacheNodeDataForSegmentPath)(newCache, currentCache, segmentPaths);
        appliedPatch = true;
    }
    return appliedPatch;
}
const navigateReducer =  false ? 0 : navigateReducer_noPPR;
// This is the implementation when PPR is disabled. We can assume its behavior
// is relatively stable because it's been running in production for a while.
function navigateReducer_noPPR(state, action) {
    const { url, isExternalUrl, navigateType, shouldScroll } = action;
    const mutable = {};
    const { hash } = url;
    const href = (0, _createhreffromurl.createHrefFromUrl)(url);
    const pendingPush = navigateType === "push";
    // we want to prune the prefetch cache on every navigation to avoid it growing too large
    (0, _prefetchcacheutils.prunePrefetchCache)(state.prefetchCache);
    mutable.preserveCustomHistoryState = false;
    if (isExternalUrl) {
        return handleExternalUrl(state, mutable, url.toString(), pendingPush);
    }
    const prefetchValues = (0, _prefetchcacheutils.getOrCreatePrefetchCacheEntry)({
        url,
        nextUrl: state.nextUrl,
        tree: state.tree,
        buildId: state.buildId,
        prefetchCache: state.prefetchCache
    });
    const { treeAtTimeOfPrefetch, data } = prefetchValues;
    _prefetchreducer.prefetchQueue.bump(data);
    return data.then((param)=>{
        let [flightData, canonicalUrlOverride] = param;
        let isFirstRead = false;
        // we only want to mark this once
        if (!prefetchValues.lastUsedTime) {
            // important: we should only mark the cache node as dirty after we unsuspend from the call above
            prefetchValues.lastUsedTime = Date.now();
            isFirstRead = true;
        }
        // Handle case when navigating to page in `pages` from `app`
        if (typeof flightData === "string") {
            return handleExternalUrl(state, mutable, flightData, pendingPush);
        }
        // Handles case where `<meta http-equiv="refresh">` tag is present,
        // which will trigger an MPA navigation.
        if (document.getElementById("__next-page-redirect")) {
            return handleExternalUrl(state, mutable, href, pendingPush);
        }
        let currentTree = state.tree;
        let currentCache = state.cache;
        let scrollableSegments = [];
        for (const flightDataPath of flightData){
            const flightSegmentPath = flightDataPath.slice(0, -4);
            // The one before last item is the router state tree patch
            const treePatch = flightDataPath.slice(-3)[0];
            // TODO-APP: remove ''
            const flightSegmentPathWithLeadingEmpty = [
                "",
                ...flightSegmentPath
            ];
            // Create new tree based on the flightSegmentPath and router state patch
            let newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)(flightSegmentPathWithLeadingEmpty, currentTree, treePatch, href);
            // If the tree patch can't be applied to the current tree then we use the tree at time of prefetch
            // TODO-APP: This should instead fill in the missing pieces in `currentTree` with the data from `treeAtTimeOfPrefetch`, then apply the patch.
            if (newTree === null) {
                newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)(flightSegmentPathWithLeadingEmpty, treeAtTimeOfPrefetch, treePatch, href);
            }
            if (newTree !== null) {
                if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
                    return handleExternalUrl(state, mutable, href, pendingPush);
                }
                const cache = (0, _approuter.createEmptyCacheNode)();
                let applied = false;
                if (prefetchValues.status === _routerreducertypes.PrefetchCacheEntryStatus.stale && !isFirstRead) {
                    // When we have a stale prefetch entry, we only want to re-use the loading state of the route we're navigating to, to support instant loading navigations
                    // this will trigger a lazy fetch for the actual page data by nulling the `rsc` and `prefetchRsc` values for page data,
                    // while copying over the `loading` for the segment that contains the page data.
                    // We only do this on subsequent reads, as otherwise there'd be no loading data to re-use.
                    applied = triggerLazyFetchForLeafSegments(cache, currentCache, flightSegmentPath, treePatch);
                    // since we re-used the stale cache's loading state & refreshed the data,
                    // update the `lastUsedTime` so that it can continue to be re-used for the next 30s
                    prefetchValues.lastUsedTime = Date.now();
                } else {
                    applied = (0, _applyflightdata.applyFlightData)(currentCache, cache, flightDataPath, prefetchValues);
                }
                const hardNavigate = (0, _shouldhardnavigate.shouldHardNavigate)(flightSegmentPathWithLeadingEmpty, currentTree);
                if (hardNavigate) {
                    // Copy rsc for the root node of the cache.
                    cache.rsc = currentCache.rsc;
                    cache.prefetchRsc = currentCache.prefetchRsc;
                    (0, _invalidatecachebelowflightsegmentpath.invalidateCacheBelowFlightSegmentPath)(cache, currentCache, flightSegmentPath);
                    // Ensure the existing cache value is used when the cache was not invalidated.
                    mutable.cache = cache;
                } else if (applied) {
                    mutable.cache = cache;
                    // If we applied the cache, we update the "current cache" value so any other
                    // segments in the FlightDataPath will be able to reference the updated cache.
                    currentCache = cache;
                }
                currentTree = newTree;
                for (const subSegment of generateSegmentsFromPatch(treePatch)){
                    const scrollableSegmentPath = [
                        ...flightSegmentPath,
                        ...subSegment
                    ];
                    // Filter out the __DEFAULT__ paths as they shouldn't be scrolled to in this case.
                    if (scrollableSegmentPath[scrollableSegmentPath.length - 1] !== _segment.DEFAULT_SEGMENT_KEY) {
                        scrollableSegments.push(scrollableSegmentPath);
                    }
                }
            }
        }
        mutable.patchedTree = currentTree;
        mutable.canonicalUrl = canonicalUrlOverride ? (0, _createhreffromurl.createHrefFromUrl)(canonicalUrlOverride) : href;
        mutable.pendingPush = pendingPush;
        mutable.scrollableSegments = scrollableSegments;
        mutable.hashFragment = hash;
        mutable.shouldScroll = shouldScroll;
        return (0, _handlemutable.handleMutable)(state, mutable);
    }, ()=>state);
}
// This is the experimental PPR implementation. It's closer to the behavior we
// want, but is likelier to include accidental regressions because it rewrites
// existing functionality.
function navigateReducer_PPR(state, action) {
    const { url, isExternalUrl, navigateType, shouldScroll } = action;
    const mutable = {};
    const { hash } = url;
    const href = (0, _createhreffromurl.createHrefFromUrl)(url);
    const pendingPush = navigateType === "push";
    // we want to prune the prefetch cache on every navigation to avoid it growing too large
    (0, _prefetchcacheutils.prunePrefetchCache)(state.prefetchCache);
    mutable.preserveCustomHistoryState = false;
    if (isExternalUrl) {
        return handleExternalUrl(state, mutable, url.toString(), pendingPush);
    }
    const prefetchValues = (0, _prefetchcacheutils.getOrCreatePrefetchCacheEntry)({
        url,
        nextUrl: state.nextUrl,
        tree: state.tree,
        buildId: state.buildId,
        prefetchCache: state.prefetchCache
    });
    const { treeAtTimeOfPrefetch, data } = prefetchValues;
    _prefetchreducer.prefetchQueue.bump(data);
    return data.then((param)=>{
        let [flightData, canonicalUrlOverride, _postponed] = param;
        let isFirstRead = false;
        // we only want to mark this once
        if (!prefetchValues.lastUsedTime) {
            // important: we should only mark the cache node as dirty after we unsuspend from the call above
            prefetchValues.lastUsedTime = Date.now();
            isFirstRead = true;
        }
        // Handle case when navigating to page in `pages` from `app`
        if (typeof flightData === "string") {
            return handleExternalUrl(state, mutable, flightData, pendingPush);
        }
        // Handles case where `<meta http-equiv="refresh">` tag is present,
        // which will trigger an MPA navigation.
        if (document.getElementById("__next-page-redirect")) {
            return handleExternalUrl(state, mutable, href, pendingPush);
        }
        let currentTree = state.tree;
        let currentCache = state.cache;
        let scrollableSegments = [];
        // TODO: In practice, this is always a single item array. We probably
        // aren't going to every send multiple segments, at least not in this
        // format. So we could remove the extra wrapper for now until
        // that settles.
        for (const flightDataPath of flightData){
            const flightSegmentPath = flightDataPath.slice(0, -4);
            // The one before last item is the router state tree patch
            const treePatch = flightDataPath.slice(-3)[0];
            // TODO-APP: remove ''
            const flightSegmentPathWithLeadingEmpty = [
                "",
                ...flightSegmentPath
            ];
            // Create new tree based on the flightSegmentPath and router state patch
            let newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)(flightSegmentPathWithLeadingEmpty, currentTree, treePatch, href);
            // If the tree patch can't be applied to the current tree then we use the tree at time of prefetch
            // TODO-APP: This should instead fill in the missing pieces in `currentTree` with the data from `treeAtTimeOfPrefetch`, then apply the patch.
            if (newTree === null) {
                newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)(flightSegmentPathWithLeadingEmpty, treeAtTimeOfPrefetch, treePatch, href);
            }
            if (newTree !== null) {
                if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
                    return handleExternalUrl(state, mutable, href, pendingPush);
                }
                if (// will always send back a static response that's rendered from
                // the root. If for some reason it doesn't, we fall back to the
                // non-PPR implementation.
                // TODO: We should get rid of the else branch and do all navigations
                // via updateCacheNodeOnNavigation. The current structure is just
                // an incremental step.
                flightDataPath.length === 3) {
                    const prefetchedTree = flightDataPath[0];
                    const seedData = flightDataPath[1];
                    const head = flightDataPath[2];
                    const task = (0, _pprnavigations.updateCacheNodeOnNavigation)(currentCache, currentTree, prefetchedTree, seedData, head);
                    if (task !== null && task.node !== null) {
                        // We've created a new Cache Node tree that contains a prefetched
                        // version of the next page. This can be rendered instantly.
                        // Use the tree computed by updateCacheNodeOnNavigation instead
                        // of the one computed by applyRouterStatePatchToTree.
                        // TODO: We should remove applyRouterStatePatchToTree
                        // from the PPR path entirely.
                        const patchedRouterState = task.route;
                        newTree = patchedRouterState;
                        const newCache = task.node;
                        // The prefetched tree has dynamic holes in it. We initiate a
                        // dynamic request to fill them in.
                        //
                        // Do not block on the result. We'll immediately render the Cache
                        // Node tree and suspend on the dynamic parts. When the request
                        // comes in, we'll fill in missing data and ping React to
                        // re-render. Unlike the lazy fetching model in the non-PPR
                        // implementation, this is modeled as a single React update +
                        // streaming, rather than multiple top-level updates. (However,
                        // even in the new model, we'll still need to sometimes update the
                        // root multiple times per navigation, like if the server sends us
                        // a different response than we expected. For now, we revert back
                        // to the lazy fetching mechanism in that case.)
                        (0, _pprnavigations.listenForDynamicRequest)(task, (0, _fetchserverresponse.fetchServerResponse)(url, currentTree, state.nextUrl, state.buildId));
                        mutable.cache = newCache;
                    } else {
                        // Nothing changed, so reuse the old cache.
                        // TODO: What if the head changed but not any of the segment data?
                        // Is that possible? If so, we should clone the whole tree and
                        // update the head.
                        newTree = prefetchedTree;
                    }
                } else {
                    // The static response does not include any dynamic holes, so
                    // there's no need to do a second request.
                    // TODO: As an incremental step this just reverts back to the
                    // non-PPR implementation. We can simplify this branch further,
                    // given that PPR prefetches are always static and return the whole
                    // tree. Or in the meantime we could factor it out into a
                    // separate function.
                    const cache = (0, _approuter.createEmptyCacheNode)();
                    let applied = false;
                    if (prefetchValues.status === _routerreducertypes.PrefetchCacheEntryStatus.stale && !isFirstRead) {
                        // When we have a stale prefetch entry, we only want to re-use the loading state of the route we're navigating to, to support instant loading navigations
                        // this will trigger a lazy fetch for the actual page data by nulling the `rsc` and `prefetchRsc` values for page data,
                        // while copying over the `loading` for the segment that contains the page data.
                        // We only do this on subsequent reads, as otherwise there'd be no loading data to re-use.
                        applied = triggerLazyFetchForLeafSegments(cache, currentCache, flightSegmentPath, treePatch);
                        // since we re-used the stale cache's loading state & refreshed the data,
                        // update the `lastUsedTime` so that it can continue to be re-used for the next 30s
                        prefetchValues.lastUsedTime = Date.now();
                    } else {
                        applied = (0, _applyflightdata.applyFlightData)(currentCache, cache, flightDataPath, prefetchValues);
                    }
                    const hardNavigate = (0, _shouldhardnavigate.shouldHardNavigate)(flightSegmentPathWithLeadingEmpty, currentTree);
                    if (hardNavigate) {
                        // Copy rsc for the root node of the cache.
                        cache.rsc = currentCache.rsc;
                        cache.prefetchRsc = currentCache.prefetchRsc;
                        (0, _invalidatecachebelowflightsegmentpath.invalidateCacheBelowFlightSegmentPath)(cache, currentCache, flightSegmentPath);
                        // Ensure the existing cache value is used when the cache was not invalidated.
                        mutable.cache = cache;
                    } else if (applied) {
                        mutable.cache = cache;
                        // If we applied the cache, we update the "current cache" value so any other
                        // segments in the FlightDataPath will be able to reference the updated cache.
                        currentCache = cache;
                    }
                }
                currentTree = newTree;
                for (const subSegment of generateSegmentsFromPatch(treePatch)){
                    const scrollableSegmentPath = [
                        ...flightSegmentPath,
                        ...subSegment
                    ];
                    // Filter out the __DEFAULT__ paths as they shouldn't be scrolled to in this case.
                    if (scrollableSegmentPath[scrollableSegmentPath.length - 1] !== _segment.DEFAULT_SEGMENT_KEY) {
                        scrollableSegments.push(scrollableSegmentPath);
                    }
                }
            }
        }
        mutable.patchedTree = currentTree;
        mutable.canonicalUrl = canonicalUrlOverride ? (0, _createhreffromurl.createHrefFromUrl)(canonicalUrlOverride) : href;
        mutable.pendingPush = pendingPush;
        mutable.scrollableSegments = scrollableSegments;
        mutable.hashFragment = hash;
        mutable.shouldScroll = shouldScroll;
        return (0, _handlemutable.handleMutable)(state, mutable);
    }, ()=>state);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigate-reducer.js.map


/***/ }),

/***/ 61156:
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
    prefetchQueue: function() {
        return prefetchQueue;
    },
    prefetchReducer: function() {
        return prefetchReducer;
    }
});
const _approuterheaders = __webpack_require__(5138);
const _promisequeue = __webpack_require__(77815);
const _prefetchcacheutils = __webpack_require__(79373);
const prefetchQueue = new _promisequeue.PromiseQueue(5);
function prefetchReducer(state, action) {
    // let's prune the prefetch cache before we do anything else
    (0, _prefetchcacheutils.prunePrefetchCache)(state.prefetchCache);
    const { url } = action;
    url.searchParams.delete(_approuterheaders.NEXT_RSC_UNION_QUERY);
    (0, _prefetchcacheutils.getOrCreatePrefetchCacheEntry)({
        url,
        nextUrl: state.nextUrl,
        prefetchCache: state.prefetchCache,
        kind: action.kind,
        tree: state.tree,
        buildId: state.buildId
    });
    return state;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=prefetch-reducer.js.map


/***/ }),

/***/ 69809:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "refreshReducer", ({
    enumerable: true,
    get: function() {
        return refreshReducer;
    }
}));
const _fetchserverresponse = __webpack_require__(9009);
const _createhreffromurl = __webpack_require__(17584);
const _applyrouterstatepatchtotree = __webpack_require__(95166);
const _isnavigatingtonewrootlayout = __webpack_require__(23772);
const _navigatereducer = __webpack_require__(20941);
const _handlemutable = __webpack_require__(17252);
const _filllazyitemstillleafwithhead = __webpack_require__(114);
const _approuter = __webpack_require__(12994);
const _handlesegmentmismatch = __webpack_require__(65652);
const _hasinterceptionrouteincurrenttree = __webpack_require__(45262);
const _refetchinactiveparallelsegments = __webpack_require__(84158);
function refreshReducer(state, action) {
    const { origin } = action;
    const mutable = {};
    const href = state.canonicalUrl;
    let currentTree = state.tree;
    mutable.preserveCustomHistoryState = false;
    const cache = (0, _approuter.createEmptyCacheNode)();
    // If the current tree was intercepted, the nextUrl should be included in the request.
    // This is to ensure that the refresh request doesn't get intercepted, accidentally triggering the interception route.
    const includeNextUrl = (0, _hasinterceptionrouteincurrenttree.hasInterceptionRouteInCurrentTree)(state.tree);
    // TODO-APP: verify that `href` is not an external url.
    // Fetch data from the root of the tree.
    cache.lazyData = (0, _fetchserverresponse.fetchServerResponse)(new URL(href, origin), [
        currentTree[0],
        currentTree[1],
        currentTree[2],
        "refetch"
    ], includeNextUrl ? state.nextUrl : null, state.buildId);
    return cache.lazyData.then(async (param)=>{
        let [flightData, canonicalUrlOverride] = param;
        // Handle case when navigating to page in `pages` from `app`
        if (typeof flightData === "string") {
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, state.pushRef.pendingPush);
        }
        // Remove cache.lazyData as it has been resolved at this point.
        cache.lazyData = null;
        for (const flightDataPath of flightData){
            // FlightDataPath with more than two items means unexpected Flight data was returned
            if (flightDataPath.length !== 3) {
                // TODO-APP: handle this case better
                console.log("REFRESH FAILED");
                return state;
            }
            // Given the path can only have two items the items are only the router state and rsc for the root.
            const [treePatch] = flightDataPath;
            const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
                ""
            ], currentTree, treePatch, state.canonicalUrl);
            if (newTree === null) {
                return (0, _handlesegmentmismatch.handleSegmentMismatch)(state, action, treePatch);
            }
            if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
                return (0, _navigatereducer.handleExternalUrl)(state, mutable, href, state.pushRef.pendingPush);
            }
            const canonicalUrlOverrideHref = canonicalUrlOverride ? (0, _createhreffromurl.createHrefFromUrl)(canonicalUrlOverride) : undefined;
            if (canonicalUrlOverride) {
                mutable.canonicalUrl = canonicalUrlOverrideHref;
            }
            // The one before last item is the router state tree patch
            const [cacheNodeSeedData, head] = flightDataPath.slice(-2);
            // Handles case where prefetch only returns the router tree patch without rendered components.
            if (cacheNodeSeedData !== null) {
                const rsc = cacheNodeSeedData[2];
                cache.rsc = rsc;
                cache.prefetchRsc = null;
                (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(cache, undefined, treePatch, cacheNodeSeedData, head);
                mutable.prefetchCache = new Map();
            }
            await (0, _refetchinactiveparallelsegments.refreshInactiveParallelSegments)({
                state,
                updatedTree: newTree,
                updatedCache: cache,
                includeNextUrl,
                canonicalUrl: mutable.canonicalUrl || state.canonicalUrl
            });
            mutable.cache = cache;
            mutable.patchedTree = newTree;
            mutable.canonicalUrl = href;
            currentTree = newTree;
        }
        return (0, _handlemutable.handleMutable)(state, mutable);
    }, ()=>state);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=refresh-reducer.js.map


/***/ }),

/***/ 85608:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "restoreReducer", ({
    enumerable: true,
    get: function() {
        return restoreReducer;
    }
}));
const _createhreffromurl = __webpack_require__(17584);
const _computechangedpath = __webpack_require__(47326);
const _pprnavigations = __webpack_require__(68831);
function restoreReducer(state, action) {
    const { url, tree } = action;
    const href = (0, _createhreffromurl.createHrefFromUrl)(url);
    // This action is used to restore the router state from the history state.
    // However, it's possible that the history state no longer contains the `FlightRouterState`.
    // We will copy over the internal state on pushState/replaceState events, but if a history entry
    // occurred before hydration, or if the user navigated to a hash using a regular anchor link,
    // the history state will not contain the `FlightRouterState`.
    // In this case, we'll continue to use the existing tree so the router doesn't get into an invalid state.
    const treeToRestore = tree || state.tree;
    const oldCache = state.cache;
    const newCache =  false ? // prevents an unnecessary flash back to PPR state during a
    // back/forward navigation.
    0 : oldCache;
    var _extractPathFromFlightRouterState;
    return {
        buildId: state.buildId,
        // Set canonical url
        canonicalUrl: href,
        pushRef: {
            pendingPush: false,
            mpaNavigation: false,
            // Ensures that the custom history state that was set is preserved when applying this update.
            preserveCustomHistoryState: true
        },
        focusAndScrollRef: state.focusAndScrollRef,
        cache: newCache,
        prefetchCache: state.prefetchCache,
        // Restore provided tree
        tree: treeToRestore,
        nextUrl: (_extractPathFromFlightRouterState = (0, _computechangedpath.extractPathFromFlightRouterState)(treeToRestore)) != null ? _extractPathFromFlightRouterState : url.pathname
    };
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=restore-reducer.js.map


/***/ }),

/***/ 25240:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "serverActionReducer", ({
    enumerable: true,
    get: function() {
        return serverActionReducer;
    }
}));
const _appcallserver = __webpack_require__(15424);
const _approuterheaders = __webpack_require__(5138);
const _addbasepath = __webpack_require__(3486);
const _createhreffromurl = __webpack_require__(17584);
const _navigatereducer = __webpack_require__(20941);
const _applyrouterstatepatchtotree = __webpack_require__(95166);
const _isnavigatingtonewrootlayout = __webpack_require__(23772);
const _handlemutable = __webpack_require__(17252);
const _filllazyitemstillleafwithhead = __webpack_require__(114);
const _approuter = __webpack_require__(12994);
const _hasinterceptionrouteincurrenttree = __webpack_require__(45262);
const _handlesegmentmismatch = __webpack_require__(65652);
const _refetchinactiveparallelsegments = __webpack_require__(84158);
// // eslint-disable-next-line import/no-extraneous-dependencies
// import { createFromFetch } from 'react-server-dom-webpack/client'
// // eslint-disable-next-line import/no-extraneous-dependencies
// import { encodeReply } from 'react-server-dom-webpack/client'
const { createFromFetch, encodeReply } =  true ? __webpack_require__(56493) : 0;
async function fetchServerAction(state, nextUrl, param) {
    let { actionId, actionArgs } = param;
    const body = await encodeReply(actionArgs);
    const res = await fetch("", {
        method: "POST",
        headers: {
            Accept: _approuterheaders.RSC_CONTENT_TYPE_HEADER,
            [_approuterheaders.ACTION]: actionId,
            [_approuterheaders.NEXT_ROUTER_STATE_TREE]: encodeURIComponent(JSON.stringify(state.tree)),
            ... false ? 0 : {},
            ...nextUrl ? {
                [_approuterheaders.NEXT_URL]: nextUrl
            } : {}
        },
        body
    });
    const location = res.headers.get("x-action-redirect");
    let revalidatedParts;
    try {
        const revalidatedHeader = JSON.parse(res.headers.get("x-action-revalidated") || "[[],0,0]");
        revalidatedParts = {
            paths: revalidatedHeader[0] || [],
            tag: !!revalidatedHeader[1],
            cookie: revalidatedHeader[2]
        };
    } catch (e) {
        revalidatedParts = {
            paths: [],
            tag: false,
            cookie: false
        };
    }
    const redirectLocation = location ? new URL((0, _addbasepath.addBasePath)(location), new URL(state.canonicalUrl, window.location.href)) : undefined;
    let isFlightResponse = res.headers.get("content-type") === _approuterheaders.RSC_CONTENT_TYPE_HEADER;
    if (isFlightResponse) {
        const response = await createFromFetch(Promise.resolve(res), {
            callServer: _appcallserver.callServer
        });
        if (location) {
            // if it was a redirection, then result is just a regular RSC payload
            const [, actionFlightData] = response != null ? response : [];
            return {
                actionFlightData: actionFlightData,
                redirectLocation,
                revalidatedParts
            };
        }
        // otherwise it's a tuple of [actionResult, actionFlightData]
        const [actionResult, [, actionFlightData]] = response != null ? response : [];
        return {
            actionResult,
            actionFlightData,
            redirectLocation,
            revalidatedParts
        };
    }
    return {
        redirectLocation,
        revalidatedParts
    };
}
function serverActionReducer(state, action) {
    const { resolve, reject } = action;
    const mutable = {};
    const href = state.canonicalUrl;
    let currentTree = state.tree;
    mutable.preserveCustomHistoryState = false;
    // only pass along the `nextUrl` param (used for interception routes) if the current route was intercepted.
    // If the route has been intercepted, the action should be as well.
    // Otherwise the server action might be intercepted with the wrong action id
    // (ie, one that corresponds with the intercepted route)
    const nextUrl = state.nextUrl && (0, _hasinterceptionrouteincurrenttree.hasInterceptionRouteInCurrentTree)(state.tree) ? state.nextUrl : null;
    mutable.inFlightServerAction = fetchServerAction(state, nextUrl, action);
    return mutable.inFlightServerAction.then(async (param)=>{
        let { actionResult, actionFlightData: flightData, redirectLocation } = param;
        // Make sure the redirection is a push instead of a replace.
        // Issue: https://github.com/vercel/next.js/issues/53911
        if (redirectLocation) {
            state.pushRef.pendingPush = true;
            mutable.pendingPush = true;
        }
        if (!flightData) {
            resolve(actionResult);
            // If there is a redirect but no flight data we need to do a mpaNavigation.
            if (redirectLocation) {
                return (0, _navigatereducer.handleExternalUrl)(state, mutable, redirectLocation.href, state.pushRef.pendingPush);
            }
            return state;
        }
        if (typeof flightData === "string") {
            // Handle case when navigating to page in `pages` from `app`
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, state.pushRef.pendingPush);
        }
        // Remove cache.data as it has been resolved at this point.
        mutable.inFlightServerAction = null;
        if (redirectLocation) {
            const newHref = (0, _createhreffromurl.createHrefFromUrl)(redirectLocation, false);
            mutable.canonicalUrl = newHref;
        }
        for (const flightDataPath of flightData){
            // FlightDataPath with more than two items means unexpected Flight data was returned
            if (flightDataPath.length !== 3) {
                // TODO-APP: handle this case better
                console.log("SERVER ACTION APPLY FAILED");
                return state;
            }
            // Given the path can only have two items the items are only the router state and rsc for the root.
            const [treePatch] = flightDataPath;
            const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
                ""
            ], currentTree, treePatch, redirectLocation ? (0, _createhreffromurl.createHrefFromUrl)(redirectLocation) : state.canonicalUrl);
            if (newTree === null) {
                return (0, _handlesegmentmismatch.handleSegmentMismatch)(state, action, treePatch);
            }
            if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
                return (0, _navigatereducer.handleExternalUrl)(state, mutable, href, state.pushRef.pendingPush);
            }
            // The one before last item is the router state tree patch
            const [cacheNodeSeedData, head] = flightDataPath.slice(-2);
            const rsc = cacheNodeSeedData !== null ? cacheNodeSeedData[2] : null;
            // Handles case where prefetch only returns the router tree patch without rendered components.
            if (rsc !== null) {
                const cache = (0, _approuter.createEmptyCacheNode)();
                cache.rsc = rsc;
                cache.prefetchRsc = null;
                (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(cache, undefined, treePatch, cacheNodeSeedData, head);
                await (0, _refetchinactiveparallelsegments.refreshInactiveParallelSegments)({
                    state,
                    updatedTree: newTree,
                    updatedCache: cache,
                    includeNextUrl: Boolean(nextUrl),
                    canonicalUrl: mutable.canonicalUrl || state.canonicalUrl
                });
                mutable.cache = cache;
                mutable.prefetchCache = new Map();
            }
            mutable.patchedTree = newTree;
            currentTree = newTree;
        }
        resolve(actionResult);
        return (0, _handlemutable.handleMutable)(state, mutable);
    }, (e)=>{
        // When the server action is rejected we don't update the state and instead call the reject handler of the promise.
        reject(e);
        return state;
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=server-action-reducer.js.map


/***/ }),

/***/ 14025:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "serverPatchReducer", ({
    enumerable: true,
    get: function() {
        return serverPatchReducer;
    }
}));
const _createhreffromurl = __webpack_require__(17584);
const _applyrouterstatepatchtotree = __webpack_require__(95166);
const _isnavigatingtonewrootlayout = __webpack_require__(23772);
const _navigatereducer = __webpack_require__(20941);
const _applyflightdata = __webpack_require__(9894);
const _handlemutable = __webpack_require__(17252);
const _approuter = __webpack_require__(12994);
const _handlesegmentmismatch = __webpack_require__(65652);
function serverPatchReducer(state, action) {
    const { serverResponse } = action;
    const [flightData, overrideCanonicalUrl] = serverResponse;
    const mutable = {};
    mutable.preserveCustomHistoryState = false;
    // Handle case when navigating to page in `pages` from `app`
    if (typeof flightData === "string") {
        return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, state.pushRef.pendingPush);
    }
    let currentTree = state.tree;
    let currentCache = state.cache;
    for (const flightDataPath of flightData){
        // Slices off the last segment (which is at -4) as it doesn't exist in the tree yet
        const flightSegmentPath = flightDataPath.slice(0, -4);
        const [treePatch] = flightDataPath.slice(-3, -2);
        const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
            "",
            ...flightSegmentPath
        ], currentTree, treePatch, state.canonicalUrl);
        if (newTree === null) {
            return (0, _handlesegmentmismatch.handleSegmentMismatch)(state, action, treePatch);
        }
        if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, state.canonicalUrl, state.pushRef.pendingPush);
        }
        const canonicalUrlOverrideHref = overrideCanonicalUrl ? (0, _createhreffromurl.createHrefFromUrl)(overrideCanonicalUrl) : undefined;
        if (canonicalUrlOverrideHref) {
            mutable.canonicalUrl = canonicalUrlOverrideHref;
        }
        const cache = (0, _approuter.createEmptyCacheNode)();
        (0, _applyflightdata.applyFlightData)(currentCache, cache, flightDataPath);
        mutable.patchedTree = newTree;
        mutable.cache = cache;
        currentCache = cache;
        currentTree = newTree;
    }
    return (0, _handlemutable.handleMutable)(state, mutable);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=server-patch-reducer.js.map


/***/ }),

/***/ 84158:
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
    addRefreshMarkerToActiveParallelSegments: function() {
        return addRefreshMarkerToActiveParallelSegments;
    },
    refreshInactiveParallelSegments: function() {
        return refreshInactiveParallelSegments;
    }
});
const _applyflightdata = __webpack_require__(9894);
const _fetchserverresponse = __webpack_require__(9009);
const _segment = __webpack_require__(68071);
async function refreshInactiveParallelSegments(options) {
    const fetchedSegments = new Set();
    await refreshInactiveParallelSegmentsImpl({
        ...options,
        rootTree: options.updatedTree,
        fetchedSegments
    });
}
async function refreshInactiveParallelSegmentsImpl(param) {
    let { state, updatedTree, updatedCache, includeNextUrl, fetchedSegments, rootTree = updatedTree, canonicalUrl } = param;
    const [, parallelRoutes, refetchPath, refetchMarker] = updatedTree;
    const fetchPromises = [];
    if (refetchPath && refetchPath !== canonicalUrl && refetchMarker === "refresh" && // it's possible for the tree to contain multiple segments that contain data at the same URL
    // we keep track of them so we can dedupe the requests
    !fetchedSegments.has(refetchPath)) {
        fetchedSegments.add(refetchPath) // Mark this URL as fetched
        ;
        // Eagerly kick off the fetch for the refetch path & the parallel routes. This should be fine to do as they each operate
        // independently on their own cache nodes, and `applyFlightData` will copy anything it doesn't care about from the existing cache.
        const fetchPromise = (0, _fetchserverresponse.fetchServerResponse)(new URL(refetchPath, location.origin), // and might not contain the data we need to patch in interception route data (such as dynamic params from a previous segment)
        [
            rootTree[0],
            rootTree[1],
            rootTree[2],
            "refetch"
        ], includeNextUrl ? state.nextUrl : null, state.buildId).then((fetchResponse)=>{
            const flightData = fetchResponse[0];
            if (typeof flightData !== "string") {
                for (const flightDataPath of flightData){
                    // we only pass the new cache as this function is called after clearing the router cache
                    // and filling in the new page data from the server. Meaning the existing cache is actually the cache that's
                    // just been created & has been written to, but hasn't been "committed" yet.
                    (0, _applyflightdata.applyFlightData)(updatedCache, updatedCache, flightDataPath);
                }
            } else {
            // When flightData is a string, it suggests that the server response should have triggered an MPA navigation
            // I'm not 100% sure of this decision, but it seems unlikely that we'd want to introduce a redirect side effect
            // when refreshing on-screen data, so handling this has been ommitted.
            }
        });
        fetchPromises.push(fetchPromise);
    }
    for(const key in parallelRoutes){
        const parallelFetchPromise = refreshInactiveParallelSegmentsImpl({
            state,
            updatedTree: parallelRoutes[key],
            updatedCache,
            includeNextUrl,
            fetchedSegments,
            rootTree,
            canonicalUrl
        });
        fetchPromises.push(parallelFetchPromise);
    }
    await Promise.all(fetchPromises);
}
function addRefreshMarkerToActiveParallelSegments(tree, path) {
    const [segment, parallelRoutes, , refetchMarker] = tree;
    // a page segment might also contain concatenated search params, so we do a partial match on the key
    if (segment.includes(_segment.PAGE_SEGMENT_KEY) && refetchMarker !== "refresh") {
        tree[2] = path;
        tree[3] = "refresh";
    }
    for(const key in parallelRoutes){
        addRefreshMarkerToActiveParallelSegments(parallelRoutes[key], path);
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=refetch-inactive-parallel-segments.js.map


/***/ }),

/***/ 57767:
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
    ACTION_FAST_REFRESH: function() {
        return ACTION_FAST_REFRESH;
    },
    ACTION_NAVIGATE: function() {
        return ACTION_NAVIGATE;
    },
    ACTION_PREFETCH: function() {
        return ACTION_PREFETCH;
    },
    ACTION_REFRESH: function() {
        return ACTION_REFRESH;
    },
    ACTION_RESTORE: function() {
        return ACTION_RESTORE;
    },
    ACTION_SERVER_ACTION: function() {
        return ACTION_SERVER_ACTION;
    },
    ACTION_SERVER_PATCH: function() {
        return ACTION_SERVER_PATCH;
    },
    PrefetchCacheEntryStatus: function() {
        return PrefetchCacheEntryStatus;
    },
    PrefetchKind: function() {
        return PrefetchKind;
    },
    isThenable: function() {
        return isThenable;
    }
});
const ACTION_REFRESH = "refresh";
const ACTION_NAVIGATE = "navigate";
const ACTION_RESTORE = "restore";
const ACTION_SERVER_PATCH = "server-patch";
const ACTION_PREFETCH = "prefetch";
const ACTION_FAST_REFRESH = "fast-refresh";
const ACTION_SERVER_ACTION = "server-action";
var PrefetchKind;
(function(PrefetchKind) {
    PrefetchKind["AUTO"] = "auto";
    PrefetchKind["FULL"] = "full";
    PrefetchKind["TEMPORARY"] = "temporary";
})(PrefetchKind || (PrefetchKind = {}));
var PrefetchCacheEntryStatus;
(function(PrefetchCacheEntryStatus) {
    PrefetchCacheEntryStatus["fresh"] = "fresh";
    PrefetchCacheEntryStatus["reusable"] = "reusable";
    PrefetchCacheEntryStatus["expired"] = "expired";
    PrefetchCacheEntryStatus["stale"] = "stale";
})(PrefetchCacheEntryStatus || (PrefetchCacheEntryStatus = {}));
function isThenable(value) {
    // TODO: We don't gain anything from this abstraction. It's unsound, and only
    // makes sense in the specific places where we use it. So it's better to keep
    // the type coercion inline, instead of leaking this to other places in
    // the codebase.
    return value && (typeof value === "object" || typeof value === "function") && typeof value.then === "function";
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router-reducer-types.js.map


/***/ }),

/***/ 83860:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "reducer", ({
    enumerable: true,
    get: function() {
        return reducer;
    }
}));
const _routerreducertypes = __webpack_require__(57767);
const _navigatereducer = __webpack_require__(20941);
const _serverpatchreducer = __webpack_require__(14025);
const _restorereducer = __webpack_require__(85608);
const _refreshreducer = __webpack_require__(69809);
const _prefetchreducer = __webpack_require__(61156);
const _fastrefreshreducer = __webpack_require__(95703);
const _serveractionreducer = __webpack_require__(25240);
/**
 * Reducer that handles the app-router state updates.
 */ function clientReducer(state, action) {
    switch(action.type){
        case _routerreducertypes.ACTION_NAVIGATE:
            {
                return (0, _navigatereducer.navigateReducer)(state, action);
            }
        case _routerreducertypes.ACTION_SERVER_PATCH:
            {
                return (0, _serverpatchreducer.serverPatchReducer)(state, action);
            }
        case _routerreducertypes.ACTION_RESTORE:
            {
                return (0, _restorereducer.restoreReducer)(state, action);
            }
        case _routerreducertypes.ACTION_REFRESH:
            {
                return (0, _refreshreducer.refreshReducer)(state, action);
            }
        case _routerreducertypes.ACTION_FAST_REFRESH:
            {
                return (0, _fastrefreshreducer.fastRefreshReducer)(state, action);
            }
        case _routerreducertypes.ACTION_PREFETCH:
            {
                return (0, _prefetchreducer.prefetchReducer)(state, action);
            }
        case _routerreducertypes.ACTION_SERVER_ACTION:
            {
                return (0, _serveractionreducer.serverActionReducer)(state, action);
            }
        // This case should never be hit as dispatch is strongly typed.
        default:
            throw new Error("Unknown action");
    }
}
function serverReducer(state, _action) {
    return state;
}
const reducer =  true ? serverReducer : 0;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router-reducer.js.map


/***/ }),

/***/ 54614:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "shouldHardNavigate", ({
    enumerable: true,
    get: function() {
        return shouldHardNavigate;
    }
}));
const _matchsegments = __webpack_require__(70455);
function shouldHardNavigate(flightSegmentPath, flightRouterState) {
    const [segment, parallelRoutes] = flightRouterState;
    // TODO-APP: Check if `as` can be replaced.
    const [currentSegment, parallelRouteKey] = flightSegmentPath;
    // Check if current segment matches the existing segment.
    if (!(0, _matchsegments.matchSegment)(currentSegment, segment)) {
        // If dynamic parameter in tree doesn't match up with segment path a hard navigation is triggered.
        if (Array.isArray(currentSegment)) {
            return true;
        }
        // If the existing segment did not match soft navigation is triggered.
        return false;
    }
    const lastSegment = flightSegmentPath.length <= 2;
    if (lastSegment) {
        return false;
    }
    return shouldHardNavigate(flightSegmentPath.slice(2), parallelRoutes[parallelRouteKey]);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=should-hard-navigate.js.map


/***/ }),

/***/ 23325:
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
    createDynamicallyTrackedSearchParams: function() {
        return createDynamicallyTrackedSearchParams;
    },
    createUntrackedSearchParams: function() {
        return createUntrackedSearchParams;
    }
});
const _staticgenerationasyncstorageexternal = __webpack_require__(45869);
const _dynamicrendering = __webpack_require__(52846);
const _reflect = __webpack_require__(22255);
function createUntrackedSearchParams(searchParams) {
    const store = _staticgenerationasyncstorageexternal.staticGenerationAsyncStorage.getStore();
    if (store && store.forceStatic) {
        return {};
    } else {
        return searchParams;
    }
}
function createDynamicallyTrackedSearchParams(searchParams) {
    const store = _staticgenerationasyncstorageexternal.staticGenerationAsyncStorage.getStore();
    if (!store) {
        // we assume we are in a route handler or page render. just return the searchParams
        return searchParams;
    } else if (store.forceStatic) {
        // If we forced static we omit searchParams entirely. This is true both during SSR
        // and browser render because we need there to be parity between these environments
        return {};
    } else if (!store.isStaticGeneration && !store.dynamicShouldError) {
        // during dynamic renders we don't actually have to track anything so we just return
        // the searchParams directly. However if dynamic data access should error then we
        // still want to track access. This covers the case in Dev where all renders are dynamic
        // but we still want to error if you use a dynamic data source because it will fail the build
        // or revalidate if you do.
        return searchParams;
    } else {
        // We need to track dynamic access with a Proxy. We implement get, has, and ownKeys because
        // these can all be used to exfiltrate information about searchParams.
        return new Proxy({}, {
            get (target, prop, receiver) {
                if (typeof prop === "string") {
                    (0, _dynamicrendering.trackDynamicDataAccessed)(store, "searchParams." + prop);
                }
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            },
            has (target, prop) {
                if (typeof prop === "string") {
                    (0, _dynamicrendering.trackDynamicDataAccessed)(store, "searchParams." + prop);
                }
                return Reflect.has(target, prop);
            },
            ownKeys (target) {
                (0, _dynamicrendering.trackDynamicDataAccessed)(store, "searchParams");
                return Reflect.ownKeys(target);
            }
        });
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=search-params.js.map


/***/ }),

/***/ 86488:
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
    StaticGenBailoutError: function() {
        return StaticGenBailoutError;
    },
    isStaticGenBailoutError: function() {
        return isStaticGenBailoutError;
    }
});
const NEXT_STATIC_GEN_BAILOUT = "NEXT_STATIC_GEN_BAILOUT";
class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args);
        this.code = NEXT_STATIC_GEN_BAILOUT;
    }
}
function isStaticGenBailoutError(error) {
    if (typeof error !== "object" || error === null || !("code" in error)) {
        return false;
    }
    return error.code === NEXT_STATIC_GEN_BAILOUT;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-bailout.js.map


/***/ }),

/***/ 39519:
/***/ ((module, exports) => {

"use strict";
/**
 * Create a "Thenable" that does not resolve. This is used to suspend indefinitely when data is not available yet.
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "unresolvedThenable", ({
    enumerable: true,
    get: function() {
        return unresolvedThenable;
    }
}));
const unresolvedThenable = {
    then: ()=>{}
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unresolved-thenable.js.map


/***/ }),

/***/ 77326:
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
    useReducerWithReduxDevtools: function() {
        return useReducerWithReduxDevtools;
    },
    useUnwrapState: function() {
        return useUnwrapState;
    }
});
const _interop_require_wildcard = __webpack_require__(58374);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(17577));
const _routerreducertypes = __webpack_require__(57767);
const _actionqueue = __webpack_require__(33879);
function normalizeRouterState(val) {
    if (val instanceof Map) {
        const obj = {};
        for (const [key, value] of val.entries()){
            if (typeof value === "function") {
                obj[key] = "fn()";
                continue;
            }
            if (typeof value === "object" && value !== null) {
                if (value.$$typeof) {
                    obj[key] = value.$$typeof.toString();
                    continue;
                }
                if (value._bundlerConfig) {
                    obj[key] = "FlightData";
                    continue;
                }
            }
            obj[key] = normalizeRouterState(value);
        }
        return obj;
    }
    if (typeof val === "object" && val !== null) {
        const obj = {};
        for(const key in val){
            const value = val[key];
            if (typeof value === "function") {
                obj[key] = "fn()";
                continue;
            }
            if (typeof value === "object" && value !== null) {
                if (value.$$typeof) {
                    obj[key] = value.$$typeof.toString();
                    continue;
                }
                if (value.hasOwnProperty("_bundlerConfig")) {
                    obj[key] = "FlightData";
                    continue;
                }
            }
            obj[key] = normalizeRouterState(value);
        }
        return obj;
    }
    if (Array.isArray(val)) {
        return val.map(normalizeRouterState);
    }
    return val;
}
function useUnwrapState(state) {
    // reducer actions can be async, so sometimes we need to suspend until the state is resolved
    if ((0, _routerreducertypes.isThenable)(state)) {
        const result = (0, _react.use)(state);
        return result;
    }
    return state;
}
function useReducerWithReduxDevtoolsNoop(initialState) {
    return [
        initialState,
        ()=>{},
        ()=>{}
    ];
}
function useReducerWithReduxDevtoolsImpl(initialState) {
    const [state, setState] = _react.default.useState(initialState);
    const actionQueue = (0, _react.useContext)(_actionqueue.ActionQueueContext);
    if (!actionQueue) {
        throw new Error("Invariant: Missing ActionQueueContext");
    }
    const devtoolsConnectionRef = (0, _react.useRef)();
    const enabledRef = (0, _react.useRef)();
    (0, _react.useEffect)(()=>{
        if (devtoolsConnectionRef.current || enabledRef.current === false) {
            return;
        }
        if (enabledRef.current === undefined && typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined") {
            enabledRef.current = false;
            return;
        }
        devtoolsConnectionRef.current = window.__REDUX_DEVTOOLS_EXTENSION__.connect({
            instanceId: 8000,
            name: "next-router"
        });
        if (devtoolsConnectionRef.current) {
            devtoolsConnectionRef.current.init(normalizeRouterState(initialState));
            if (actionQueue) {
                actionQueue.devToolsInstance = devtoolsConnectionRef.current;
            }
        }
        return ()=>{
            devtoolsConnectionRef.current = undefined;
        };
    }, [
        initialState,
        actionQueue
    ]);
    const dispatch = (0, _react.useCallback)((action)=>{
        if (!actionQueue.state) {
            // we lazy initialize the mutable action queue state since the data needed
            // to generate the state is not available when the actionQueue context is created
            actionQueue.state = initialState;
        }
        actionQueue.dispatch(action, setState);
    }, [
        actionQueue,
        initialState
    ]);
    // Sync is called after a state update in the HistoryUpdater,
    // for debugging purposes. Since the reducer state may be a Promise,
    // we let the app router use() it and sync on the resolved value if
    // something changed.
    // Using the `state` here would be referentially unstable and cause
    // undesirable re-renders and history updates.
    const sync = (0, _react.useCallback)((resolvedState)=>{
        if (devtoolsConnectionRef.current) {
            devtoolsConnectionRef.current.send({
                type: "RENDER_SYNC"
            }, normalizeRouterState(resolvedState));
        }
    }, []);
    return [
        state,
        dispatch,
        sync
    ];
}
const useReducerWithReduxDevtools =  false ? 0 : useReducerWithReduxDevtoolsNoop;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-reducer-with-devtools.js.map


/***/ }),

/***/ 39683:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getDomainLocale", ({
    enumerable: true,
    get: function() {
        return getDomainLocale;
    }
}));
const _normalizetrailingslash = __webpack_require__(23658);
const basePath = (/* unused pure expression or super */ null && ( false || ""));
function getDomainLocale(path, locale, locales, domainLocales) {
    if (false) {} else {
        return false;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-domain-locale.js.map


/***/ }),

/***/ 37929:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "hasBasePath", ({
    enumerable: true,
    get: function() {
        return hasBasePath;
    }
}));
const _pathhasprefix = __webpack_require__(34655);
const basePath =  false || "";
function hasBasePath(path) {
    return (0, _pathhasprefix.pathHasPrefix)(path, basePath);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=has-base-path.js.map


/***/ }),

/***/ 92481:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "Image", ({
    enumerable: true,
    get: function() {
        return Image;
    }
}));
const _interop_require_default = __webpack_require__(91174);
const _interop_require_wildcard = __webpack_require__(58374);
const _jsxruntime = __webpack_require__(10326);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(17577));
const _reactdom = /*#__PURE__*/ _interop_require_default._(__webpack_require__(60962));
const _head = /*#__PURE__*/ _interop_require_default._(__webpack_require__(60815));
const _getimgprops = __webpack_require__(23078);
const _imageconfig = __webpack_require__(35248);
const _imageconfigcontextsharedruntime = __webpack_require__(31206);
const _warnonce = __webpack_require__(576);
const _routercontextsharedruntime = __webpack_require__(50131);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(86820));
// This is replaced by webpack define plugin
const configEnv = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false};
if (true) {
    globalThis.__NEXT_IMAGE_IMPORTED = true;
}
// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.
function handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput) {
    const src = img == null ? void 0 : img.src;
    if (!img || img["data-loaded-src"] === src) {
        return;
    }
    img["data-loaded-src"] = src;
    const p = "decode" in img ? img.decode() : Promise.resolve();
    p.catch(()=>{}).then(()=>{
        if (!img.parentElement || !img.isConnected) {
            // Exit early in case of race condition:
            // - onload() is called
            // - decode() is called but incomplete
            // - unmount is called
            // - decode() completes
            return;
        }
        if (placeholder !== "empty") {
            setBlurComplete(true);
        }
        if (onLoadRef == null ? void 0 : onLoadRef.current) {
            // Since we don't have the SyntheticEvent here,
            // we must create one with the same shape.
            // See https://reactjs.org/docs/events.html
            const event = new Event("load");
            Object.defineProperty(event, "target", {
                writable: false,
                value: img
            });
            let prevented = false;
            let stopped = false;
            onLoadRef.current({
                ...event,
                nativeEvent: event,
                currentTarget: img,
                target: img,
                isDefaultPrevented: ()=>prevented,
                isPropagationStopped: ()=>stopped,
                persist: ()=>{},
                preventDefault: ()=>{
                    prevented = true;
                    event.preventDefault();
                },
                stopPropagation: ()=>{
                    stopped = true;
                    event.stopPropagation();
                }
            });
        }
        if (onLoadingCompleteRef == null ? void 0 : onLoadingCompleteRef.current) {
            onLoadingCompleteRef.current(img);
        }
        if (false) {}
    });
}
function getDynamicProps(fetchPriority) {
    if (Boolean(_react.use)) {
        // In React 19.0.0 or newer, we must use camelCase
        // prop to avoid "Warning: Invalid DOM property".
        // See https://github.com/facebook/react/pull/25927
        return {
            fetchPriority
        };
    }
    // In React 18.2.0 or older, we must use lowercase prop
    // to avoid "Warning: Invalid DOM property".
    return {
        fetchpriority: fetchPriority
    };
}
const ImageElement = /*#__PURE__*/ (0, _react.forwardRef)((param, forwardedRef)=>{
    let { src, srcSet, sizes, height, width, decoding, className, style, fetchPriority, placeholder, loading, unoptimized, fill, onLoadRef, onLoadingCompleteRef, setBlurComplete, setShowAltText, sizesInput, onLoad, onError, ...rest } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("img", {
        ...rest,
        ...getDynamicProps(fetchPriority),
        // It's intended to keep `loading` before `src` because React updates
        // props in order which causes Safari/Firefox to not lazy load properly.
        // See https://github.com/facebook/react/issues/25883
        loading: loading,
        width: width,
        height: height,
        decoding: decoding,
        "data-nimg": fill ? "fill" : "1",
        className: className,
        style: style,
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        sizes: sizes,
        srcSet: srcSet,
        src: src,
        ref: (0, _react.useCallback)((img)=>{
            if (forwardedRef) {
                if (typeof forwardedRef === "function") forwardedRef(img);
                else if (typeof forwardedRef === "object") {
                    // @ts-ignore - .current is read only it's usually assigned by react internally
                    forwardedRef.current = img;
                }
            }
            if (!img) {
                return;
            }
            if (onError) {
                // If the image has an error before react hydrates, then the error is lost.
                // The workaround is to wait until the image is mounted which is after hydration,
                // then we set the src again to trigger the error handler (if there was an error).
                // eslint-disable-next-line no-self-assign
                img.src = img.src;
            }
            if (false) {}
            if (img.complete) {
                handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
            }
        }, [
            src,
            placeholder,
            onLoadRef,
            onLoadingCompleteRef,
            setBlurComplete,
            onError,
            unoptimized,
            sizesInput,
            forwardedRef
        ]),
        onLoad: (event)=>{
            const img = event.currentTarget;
            handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
        },
        onError: (event)=>{
            // if the real image fails to load, this will ensure "alt" is visible
            setShowAltText(true);
            if (placeholder !== "empty") {
                // If the real image fails to load, this will still remove the placeholder.
                setBlurComplete(true);
            }
            if (onError) {
                onError(event);
            }
        }
    });
});
function ImagePreload(param) {
    let { isAppRouter, imgAttributes } = param;
    const opts = {
        as: "image",
        imageSrcSet: imgAttributes.srcSet,
        imageSizes: imgAttributes.sizes,
        crossOrigin: imgAttributes.crossOrigin,
        referrerPolicy: imgAttributes.referrerPolicy,
        ...getDynamicProps(imgAttributes.fetchPriority)
    };
    if (isAppRouter && _reactdom.default.preload) {
        // See https://github.com/facebook/react/pull/26940
        _reactdom.default.preload(imgAttributes.src, opts);
        return null;
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_head.default, {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
            rel: "preload",
            // Note how we omit the `href` attribute, as it would only be relevant
            // for browsers that do not support `imagesrcset`, and in those cases
            // it would cause the incorrect image to be preloaded.
            //
            // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
            href: imgAttributes.srcSet ? undefined : imgAttributes.src,
            ...opts
        }, "__nimg-" + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes)
    });
}
const Image = /*#__PURE__*/ (0, _react.forwardRef)((props, forwardedRef)=>{
    const pagesRouter = (0, _react.useContext)(_routercontextsharedruntime.RouterContext);
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    const configContext = (0, _react.useContext)(_imageconfigcontextsharedruntime.ImageConfigContext);
    const config = (0, _react.useMemo)(()=>{
        const c = configEnv || configContext || _imageconfig.imageConfigDefault;
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        return {
            ...c,
            allSizes,
            deviceSizes
        };
    }, [
        configContext
    ]);
    const { onLoad, onLoadingComplete } = props;
    const onLoadRef = (0, _react.useRef)(onLoad);
    (0, _react.useEffect)(()=>{
        onLoadRef.current = onLoad;
    }, [
        onLoad
    ]);
    const onLoadingCompleteRef = (0, _react.useRef)(onLoadingComplete);
    (0, _react.useEffect)(()=>{
        onLoadingCompleteRef.current = onLoadingComplete;
    }, [
        onLoadingComplete
    ]);
    const [blurComplete, setBlurComplete] = (0, _react.useState)(false);
    const [showAltText, setShowAltText] = (0, _react.useState)(false);
    const { props: imgAttributes, meta: imgMeta } = (0, _getimgprops.getImgProps)(props, {
        defaultLoader: _imageloader.default,
        imgConf: config,
        blurComplete,
        showAltText
    });
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(ImageElement, {
                ...imgAttributes,
                unoptimized: imgMeta.unoptimized,
                placeholder: imgMeta.placeholder,
                fill: imgMeta.fill,
                onLoadRef: onLoadRef,
                onLoadingCompleteRef: onLoadingCompleteRef,
                setBlurComplete: setBlurComplete,
                setShowAltText: setShowAltText,
                sizesInput: props.sizes,
                ref: forwardedRef
            }),
            imgMeta.priority ? /*#__PURE__*/ (0, _jsxruntime.jsx)(ImagePreload, {
                isAppRouter: isAppRouter,
                imgAttributes: imgAttributes
            }) : null
        ]
    });
});
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=image-component.js.map


/***/ }),

/***/ 79404:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
const _interop_require_default = __webpack_require__(91174);
const _jsxruntime = __webpack_require__(10326);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(17577));
const _resolvehref = __webpack_require__(25619);
const _islocalurl = __webpack_require__(60944);
const _formaturl = __webpack_require__(43071);
const _utils = __webpack_require__(51348);
const _addlocale = __webpack_require__(53416);
const _routercontextsharedruntime = __webpack_require__(50131);
const _approutercontextsharedruntime = __webpack_require__(52413);
const _useintersection = __webpack_require__(49408);
const _getdomainlocale = __webpack_require__(39683);
const _addbasepath = __webpack_require__(3486);
const _routerreducertypes = __webpack_require__(57767);
const prefetched = new Set();
function prefetch(router, href, as, options, appOptions, isAppRouter) {
    if (true) {
        return;
    }
    // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    if (!isAppRouter && !(0, _islocalurl.isLocalURL)(href)) {
        return;
    }
    // We should only dedupe requests when experimental.optimisticClientCache is
    // disabled.
    if (!options.bypassPrefetchedCheck) {
        const locale = typeof options.locale !== "undefined" ? options.locale : "locale" in router ? router.locale : undefined;
        const prefetchedKey = href + "%" + as + "%" + locale;
        // If we've already fetched the key, then don't prefetch it again!
        if (prefetched.has(prefetchedKey)) {
            return;
        }
        // Mark this URL as prefetched.
        prefetched.add(prefetchedKey);
    }
    const doPrefetch = async ()=>{
        if (isAppRouter) {
            // note that `appRouter.prefetch()` is currently sync,
            // so we have to wrap this call in an async function to be able to catch() errors below.
            return router.prefetch(href, appOptions);
        } else {
            return router.prefetch(href, as, options);
        }
    };
    // Prefetch the JSON page if asked (only in the client)
    // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch
    doPrefetch().catch((err)=>{
        if (false) {}
    });
}
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute("target");
    return target && target !== "_self" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter) {
    const { nodeName } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === "A";
    if (isAnchorNodeName && (isModifiedEvent(e) || // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    !isAppRouter && !(0, _islocalurl.isLocalURL)(href))) {
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    const navigate = ()=>{
        // If the router is an NextRouter instance it will have `beforePopState`
        const routerScroll = scroll != null ? scroll : true;
        if ("beforePopState" in router) {
            router[replace ? "replace" : "push"](href, as, {
                shallow,
                locale,
                scroll: routerScroll
            });
        } else {
            router[replace ? "replace" : "push"](as || href, {
                scroll: routerScroll
            });
        }
    };
    if (isAppRouter) {
        _react.default.startTransition(navigate);
    } else {
        navigate();
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === "string") {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
/**
 * A React component that extends the HTML `<a>` element to provide [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation between routes.
 *
 * It is the primary way to navigate between routes in Next.js.
 *
 * Read more: [Next.js docs: `<Link>`](https://nextjs.org/docs/app/api-reference/components/link)
 */ const Link = /*#__PURE__*/ _react.default.forwardRef(function LinkComponent(props, forwardedRef) {
    let children;
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, locale, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === "string" || typeof children === "number")) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const pagesRouter = _react.default.useContext(_routercontextsharedruntime.RouterContext);
    const appRouter = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const router = pagesRouter != null ? pagesRouter : appRouter;
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    const prefetchEnabled = prefetchProp !== false;
    /**
     * The possible states for prefetch are:
     * - null: this is the default "auto" mode, where we will prefetch partially if the link is in the viewport
     * - true: we will prefetch if the link is visible and prefetch the full page, not just partially
     * - false: we will not prefetch if in the viewport at all
     */ const appPrefetchKind = prefetchProp === null ? _routerreducertypes.PrefetchKind.AUTO : _routerreducertypes.PrefetchKind.FULL;
    if (false) {}
    if (false) {}
    const { href, as } = _react.default.useMemo(()=>{
        if (!pagesRouter) {
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
        const [resolvedHref, resolvedAs] = (0, _resolvehref.resolveHref)(pagesRouter, hrefProp, true);
        return {
            href: resolvedHref,
            as: asProp ? (0, _resolvehref.resolveHref)(pagesRouter, asProp) : resolvedAs || resolvedHref
        };
    }, [
        pagesRouter,
        hrefProp,
        asProp
    ]);
    const previousHref = _react.default.useRef(href);
    const previousAs = _react.default.useRef(as);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (false) {} else {
            child = _react.default.Children.only(children);
        }
    } else {
        if (false) {}
    }
    const childRef = legacyBehavior ? child && typeof child === "object" && child.ref : forwardedRef;
    const [setIntersectionRef, isVisible, resetVisible] = (0, _useintersection.useIntersection)({
        rootMargin: "200px"
    });
    const setRef = _react.default.useCallback((el)=>{
        // Before the link getting observed, check if visible state need to be reset
        if (previousAs.current !== as || previousHref.current !== href) {
            resetVisible();
            previousAs.current = as;
            previousHref.current = href;
        }
        setIntersectionRef(el);
        if (childRef) {
            if (typeof childRef === "function") childRef(el);
            else if (typeof childRef === "object") {
                childRef.current = el;
            }
        }
    }, [
        as,
        childRef,
        href,
        resetVisible,
        setIntersectionRef
    ]);
    // Prefetch the URL if we haven't already and it's visible.
    _react.default.useEffect(()=>{
        // in dev, we only prefetch on hover to avoid wasting resources as the prefetch will trigger compiling the page.
        if (false) {}
        if (!router) {
            return;
        }
        // If we don't need to prefetch the URL, don't do prefetch.
        if (!isVisible || !prefetchEnabled) {
            return;
        }
        // Prefetch the URL.
        prefetch(router, href, as, {
            locale
        }, {
            kind: appPrefetchKind
        }, isAppRouter);
    }, [
        as,
        href,
        isVisible,
        locale,
        prefetchEnabled,
        pagesRouter == null ? void 0 : pagesRouter.locale,
        router,
        isAppRouter,
        appPrefetchKind
    ]);
    const childProps = {
        ref: setRef,
        onClick (e) {
            if (false) {}
            if (!legacyBehavior && typeof onClick === "function") {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === "function") {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === "function") {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === "function") {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ((!prefetchEnabled || "production" === "development") && isAppRouter) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            }, {
                kind: appPrefetchKind
            }, isAppRouter);
        },
        onTouchStart:  false ? 0 : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === "function") {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === "function") {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled && isAppRouter) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            }, {
                kind: appPrefetchKind
            }, isAppRouter);
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user.
    // If the url is absolute, we can bypass the logic to prepend the domain and locale.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === "a" && !("href" in child.props)) {
        const curLocale = typeof locale !== "undefined" ? locale : pagesRouter == null ? void 0 : pagesRouter.locale;
        // we only render domain locales if we are currently on a domain locale
        // so that locale links are still visitable in development/preview envs
        const localeDomain = (pagesRouter == null ? void 0 : pagesRouter.isLocaleDomain) && (0, _getdomainlocale.getDomainLocale)(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.locales, pagesRouter == null ? void 0 : pagesRouter.domainLocales);
        childProps.href = localeDomain || (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.defaultLocale));
    }
    return legacyBehavior ? /*#__PURE__*/ _react.default.cloneElement(child, childProps) : /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
        ...restProps,
        ...childProps,
        children: children
    });
});
const _default = Link;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map


/***/ }),

/***/ 23658:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "normalizePathTrailingSlash", ({
    enumerable: true,
    get: function() {
        return normalizePathTrailingSlash;
    }
}));
const _removetrailingslash = __webpack_require__(83236);
const _parsepath = __webpack_require__(93067);
const normalizePathTrailingSlash = (path)=>{
    if (!path.startsWith("/") || undefined) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    if (false) {}
    return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=normalize-trailing-slash.js.map


/***/ }),

/***/ 74237:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "removeBasePath", ({
    enumerable: true,
    get: function() {
        return removeBasePath;
    }
}));
const _hasbasepath = __webpack_require__(37929);
const basePath =  false || "";
function removeBasePath(path) {
    if (false) {}
    // Can't trim the basePath if it has zero length!
    if (basePath.length === 0) return path;
    path = path.slice(basePath.length);
    if (!path.startsWith("/")) path = "/" + path;
    return path;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=remove-base-path.js.map


/***/ }),

/***/ 10956:
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
    cancelIdleCallback: function() {
        return cancelIdleCallback;
    },
    requestIdleCallback: function() {
        return requestIdleCallback;
    }
});
const requestIdleCallback = typeof self !== "undefined" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
    let start = Date.now();
    return self.setTimeout(function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
const cancelIdleCallback = typeof self !== "undefined" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
    return clearTimeout(id);
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-idle-callback.js.map


/***/ }),

/***/ 25619:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "resolveHref", ({
    enumerable: true,
    get: function() {
        return resolveHref;
    }
}));
const _querystring = __webpack_require__(72149);
const _formaturl = __webpack_require__(43071);
const _omit = __webpack_require__(20757);
const _utils = __webpack_require__(51348);
const _normalizetrailingslash = __webpack_require__(23658);
const _islocalurl = __webpack_require__(60944);
const _utils1 = __webpack_require__(94903);
const _interpolateas = __webpack_require__(81394);
function resolveHref(router, href, resolveAs) {
    // we use a dummy base url for relative urls
    let base;
    let urlAsString = typeof href === "string" ? href : (0, _formaturl.formatWithValidation)(href);
    // repeated slashes and backslashes in the URL are considered
    // invalid and will never match a Next.js page/file
    const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
    const urlAsStringNoProto = urlProtoMatch ? urlAsString.slice(urlProtoMatch[0].length) : urlAsString;
    const urlParts = urlAsStringNoProto.split("?", 1);
    if ((urlParts[0] || "").match(/(\/\/|\\)/)) {
        console.error("Invalid href '" + urlAsString + "' passed to next/router in page: '" + router.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
        const normalizedUrl = (0, _utils.normalizeRepeatedSlashes)(urlAsStringNoProto);
        urlAsString = (urlProtoMatch ? urlProtoMatch[0] : "") + normalizedUrl;
    }
    // Return because it cannot be routed by the Next.js router
    if (!(0, _islocalurl.isLocalURL)(urlAsString)) {
        return resolveAs ? [
            urlAsString
        ] : urlAsString;
    }
    try {
        base = new URL(urlAsString.startsWith("#") ? router.asPath : router.pathname, "http://n");
    } catch (_) {
        // fallback to / for invalid asPath values e.g. //
        base = new URL("/", "http://n");
    }
    try {
        const finalUrl = new URL(urlAsString, base);
        finalUrl.pathname = (0, _normalizetrailingslash.normalizePathTrailingSlash)(finalUrl.pathname);
        let interpolatedAs = "";
        if ((0, _utils1.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
            const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
            const { result, params } = (0, _interpolateas.interpolateAs)(finalUrl.pathname, finalUrl.pathname, query);
            if (result) {
                interpolatedAs = (0, _formaturl.formatWithValidation)({
                    pathname: result,
                    hash: finalUrl.hash,
                    query: (0, _omit.omit)(query, params)
                });
            }
        }
        // if the origin didn't change, it means we received a relative href
        const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
        return resolveAs ? [
            resolvedHref,
            interpolatedAs || resolvedHref
        ] : resolvedHref;
    } catch (_) {
        return resolveAs ? [
            urlAsString
        ] : urlAsString;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=resolve-href.js.map


/***/ }),

/***/ 49408:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "useIntersection", ({
    enumerable: true,
    get: function() {
        return useIntersection;
    }
}));
const _react = __webpack_require__(17577);
const _requestidlecallback = __webpack_require__(10956);
const hasIntersectionObserver = typeof IntersectionObserver === "function";
const observers = new Map();
const idList = [];
function createObserver(options) {
    const id = {
        root: options.root || null,
        margin: options.rootMargin || ""
    };
    const existing = idList.find((obj)=>obj.root === id.root && obj.margin === id.margin);
    let instance;
    if (existing) {
        instance = observers.get(existing);
        if (instance) {
            return instance;
        }
    }
    const elements = new Map();
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            const callback = elements.get(entry.target);
            const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
            if (callback && isVisible) {
                callback(isVisible);
            }
        });
    }, options);
    instance = {
        id,
        observer,
        elements
    };
    idList.push(id);
    observers.set(id, instance);
    return instance;
}
function observe(element, callback, options) {
    const { id, observer, elements } = createObserver(options);
    elements.set(element, callback);
    observer.observe(element);
    return function unobserve() {
        elements.delete(element);
        observer.unobserve(element);
        // Destroy observer when there's nothing left to watch:
        if (elements.size === 0) {
            observer.disconnect();
            observers.delete(id);
            const index = idList.findIndex((obj)=>obj.root === id.root && obj.margin === id.margin);
            if (index > -1) {
                idList.splice(index, 1);
            }
        }
    };
}
function useIntersection(param) {
    let { rootRef, rootMargin, disabled } = param;
    const isDisabled = disabled || !hasIntersectionObserver;
    const [visible, setVisible] = (0, _react.useState)(false);
    const elementRef = (0, _react.useRef)(null);
    const setElement = (0, _react.useCallback)((element)=>{
        elementRef.current = element;
    }, []);
    (0, _react.useEffect)(()=>{
        if (hasIntersectionObserver) {
            if (isDisabled || visible) return;
            const element = elementRef.current;
            if (element && element.tagName) {
                const unobserve = observe(element, (isVisible)=>isVisible && setVisible(isVisible), {
                    root: rootRef == null ? void 0 : rootRef.current,
                    rootMargin
                });
                return unobserve;
            }
        } else {
            if (!visible) {
                const idleCallback = (0, _requestidlecallback.requestIdleCallback)(()=>setVisible(true));
                return ()=>(0, _requestidlecallback.cancelIdleCallback)(idleCallback);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isDisabled,
        rootMargin,
        rootRef,
        visible,
        elementRef.current
    ]);
    const resetVisible = (0, _react.useCallback)(()=>{
        setVisible(false);
    }, []);
    return [
        setElement,
        visible,
        resetVisible
    ];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-intersection.js.map


/***/ }),

/***/ 11411:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var m = __webpack_require__(60962);
if (true) {
  exports.s = m.createRoot;
  __webpack_unused_export__ = m.hydrateRoot;
} else { var i; }


/***/ }),

/***/ 56401:
/***/ ((__unused_webpack_module, exports) => {

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
    getPathname: function() {
        return getPathname;
    },
    isFullStringUrl: function() {
        return isFullStringUrl;
    },
    parseUrl: function() {
        return parseUrl;
    }
});
const DUMMY_ORIGIN = "http://n";
function getUrlWithoutHost(url) {
    return new URL(url, DUMMY_ORIGIN);
}
function getPathname(url) {
    return getUrlWithoutHost(url).pathname;
}
function isFullStringUrl(url) {
    return /https?:\/\//.test(url);
}
function parseUrl(url) {
    let parsed = undefined;
    try {
        parsed = new URL(url, DUMMY_ORIGIN);
    } catch  {}
    return parsed;
}

//# sourceMappingURL=url.js.map

/***/ }),

/***/ 52846:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * The functions provided by this module are used to communicate certain properties
 * about the currently running code so that Next.js can make decisions on how to handle
 * the current execution in different rendering modes such as pre-rendering, resuming, and SSR.
 *
 * Today Next.js treats all code as potentially static. Certain APIs may only make sense when dynamically rendering.
 * Traditionally this meant deopting the entire render to dynamic however with PPR we can now deopt parts
 * of a React tree as dynamic while still keeping other parts static. There are really two different kinds of
 * Dynamic indications.
 *
 * The first is simply an intention to be dynamic. unstable_noStore is an example of this where
 * the currently executing code simply declares that the current scope is dynamic but if you use it
 * inside unstable_cache it can still be cached. This type of indication can be removed if we ever
 * make the default dynamic to begin with because the only way you would ever be static is inside
 * a cache scope which this indication does not affect.
 *
 * The second is an indication that a dynamic data source was read. This is a stronger form of dynamic
 * because it means that it is inappropriate to cache this at all. using a dynamic data source inside
 * unstable_cache should error. If you want to use some dynamic data inside unstable_cache you should
 * read that data outside the cache and pass it in as an argument to the cached function.
 */ // Once postpone is in stable we should switch to importing the postpone export directly

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
    Postpone: function() {
        return Postpone;
    },
    createPostponedAbortSignal: function() {
        return createPostponedAbortSignal;
    },
    createPrerenderState: function() {
        return createPrerenderState;
    },
    formatDynamicAPIAccesses: function() {
        return formatDynamicAPIAccesses;
    },
    markCurrentScopeAsDynamic: function() {
        return markCurrentScopeAsDynamic;
    },
    trackDynamicDataAccessed: function() {
        return trackDynamicDataAccessed;
    },
    trackDynamicFetch: function() {
        return trackDynamicFetch;
    },
    usedDynamicAPIs: function() {
        return usedDynamicAPIs;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(__webpack_require__(17577));
const _hooksservercontext = __webpack_require__(70442);
const _staticgenerationbailout = __webpack_require__(86488);
const _url = __webpack_require__(56401);
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const hasPostpone = typeof _react.default.unstable_postpone === "function";
function createPrerenderState(isDebugSkeleton) {
    return {
        isDebugSkeleton,
        dynamicAccesses: []
    };
}
function markCurrentScopeAsDynamic(store, expression) {
    const pathname = (0, _url.getPathname)(store.urlPathname);
    if (store.isUnstableCacheCallback) {
        // inside cache scopes marking a scope as dynamic has no effect because the outer cache scope
        // creates a cache boundary. This is subtly different from reading a dynamic data source which is
        // forbidden inside a cache scope.
        return;
    } else if (store.dynamicShouldError) {
        throw new _staticgenerationbailout.StaticGenBailoutError(`Route ${pathname} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
    } else if (// We are in a prerender (PPR enabled, during build)
    store.prerenderState) {
        // We track that we had a dynamic scope that postponed.
        // This will be used by the renderer to decide whether
        // the prerender requires a resume
        postponeWithTracking(store.prerenderState, expression, pathname);
    } else {
        store.revalidate = 0;
        if (store.isStaticGeneration) {
            // We aren't prerendering but we are generating a static page. We need to bail out of static generation
            const err = new _hooksservercontext.DynamicServerError(`Route ${pathname} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
            store.dynamicUsageDescription = expression;
            store.dynamicUsageStack = err.stack;
            throw err;
        }
    }
}
function trackDynamicDataAccessed(store, expression) {
    const pathname = (0, _url.getPathname)(store.urlPathname);
    if (store.isUnstableCacheCallback) {
        throw new Error(`Route ${pathname} used "${expression}" inside a function cached with "unstable_cache(...)". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "${expression}" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`);
    } else if (store.dynamicShouldError) {
        throw new _staticgenerationbailout.StaticGenBailoutError(`Route ${pathname} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
    } else if (// We are in a prerender (PPR enabled, during build)
    store.prerenderState) {
        // We track that we had a dynamic scope that postponed.
        // This will be used by the renderer to decide whether
        // the prerender requires a resume
        postponeWithTracking(store.prerenderState, expression, pathname);
    } else {
        store.revalidate = 0;
        if (store.isStaticGeneration) {
            // We aren't prerendering but we are generating a static page. We need to bail out of static generation
            const err = new _hooksservercontext.DynamicServerError(`Route ${pathname} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
            store.dynamicUsageDescription = expression;
            store.dynamicUsageStack = err.stack;
            throw err;
        }
    }
}
function Postpone({ reason, prerenderState, pathname }) {
    postponeWithTracking(prerenderState, reason, pathname);
}
function trackDynamicFetch(store, expression) {
    if (store.prerenderState) {
        postponeWithTracking(store.prerenderState, expression, store.urlPathname);
    }
}
function postponeWithTracking(prerenderState, expression, pathname) {
    assertPostpone();
    const reason = `Route ${pathname} needs to bail out of prerendering at this point because it used ${expression}. ` + `React throws this special object to indicate where. It should not be caught by ` + `your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
    prerenderState.dynamicAccesses.push({
        // When we aren't debugging, we don't need to create another error for the
        // stack trace.
        stack: prerenderState.isDebugSkeleton ? new Error().stack : undefined,
        expression
    });
    _react.default.unstable_postpone(reason);
}
function usedDynamicAPIs(prerenderState) {
    return prerenderState.dynamicAccesses.length > 0;
}
function formatDynamicAPIAccesses(prerenderState) {
    return prerenderState.dynamicAccesses.filter((access)=>typeof access.stack === "string" && access.stack.length > 0).map(({ expression, stack })=>{
        stack = stack.split("\n")// Remove the "Error: " prefix from the first line of the stack trace as
        // well as the first 4 lines of the stack trace which is the distance
        // from the user code and the `new Error().stack` call.
        .slice(4).filter((line)=>{
            // Exclude Next.js internals from the stack trace.
            if (line.includes("node_modules/next/")) {
                return false;
            }
            // Exclude anonymous functions from the stack trace.
            if (line.includes(" (<anonymous>)")) {
                return false;
            }
            // Exclude Node.js internals from the stack trace.
            if (line.includes(" (node:")) {
                return false;
            }
            return true;
        }).join("\n");
        return `Dynamic API Usage Debug - ${expression}:\n${stack}`;
    });
}
function assertPostpone() {
    if (!hasPostpone) {
        throw new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`);
    }
}
function createPostponedAbortSignal(reason) {
    assertPostpone();
    const controller = new AbortController();
    // We get our hands on a postpone instance by calling postpone and catching the throw
    try {
        _react.default.unstable_postpone(reason);
    } catch (x) {
        controller.abort(x);
    }
    return controller.signal;
}

//# sourceMappingURL=dynamic-rendering.js.map

/***/ }),

/***/ 92357:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getSegmentParam", ({
    enumerable: true,
    get: function() {
        return getSegmentParam;
    }
}));
const _interceptionroutes = __webpack_require__(87356);
function getSegmentParam(segment) {
    const interceptionMarker = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find((marker)=>segment.startsWith(marker));
    // if an interception marker is part of the path segment, we need to jump ahead
    // to the relevant portion for param parsing
    if (interceptionMarker) {
        segment = segment.slice(interceptionMarker.length);
    }
    if (segment.startsWith("[[...") && segment.endsWith("]]")) {
        return {
            // TODO-APP: Optional catchall does not currently work with parallel routes,
            // so for now aren't handling a potential interception marker.
            type: "optional-catchall",
            param: segment.slice(5, -2)
        };
    }
    if (segment.startsWith("[...") && segment.endsWith("]")) {
        return {
            type: interceptionMarker ? "catchall-intercepted" : "catchall",
            param: segment.slice(4, -1)
        };
    }
    if (segment.startsWith("[") && segment.endsWith("]")) {
        return {
            type: interceptionMarker ? "dynamic-intercepted" : "dynamic",
            param: segment.slice(1, -1)
        };
    }
    return null;
}

//# sourceMappingURL=get-segment-param.js.map

/***/ }),

/***/ 87356:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
    INTERCEPTION_ROUTE_MARKERS: function() {
        return INTERCEPTION_ROUTE_MARKERS;
    },
    extractInterceptionRouteInformation: function() {
        return extractInterceptionRouteInformation;
    },
    isInterceptionRouteAppPath: function() {
        return isInterceptionRouteAppPath;
    }
});
const _apppaths = __webpack_require__(72862);
const INTERCEPTION_ROUTE_MARKERS = [
    "(..)(..)",
    "(.)",
    "(..)",
    "(...)"
];
function isInterceptionRouteAppPath(path) {
    // TODO-APP: add more serious validation
    return path.split("/").find((segment)=>INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m))) !== undefined;
}
function extractInterceptionRouteInformation(path) {
    let interceptingRoute, marker, interceptedRoute;
    for (const segment of path.split("/")){
        marker = INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
        if (marker) {
            [interceptingRoute, interceptedRoute] = path.split(marker, 2);
            break;
        }
    }
    if (!interceptingRoute || !marker || !interceptedRoute) {
        throw new Error(`Invalid interception route: ${path}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);
    }
    interceptingRoute = (0, _apppaths.normalizeAppPath)(interceptingRoute) // normalize the path, e.g. /(blog)/feed -> /feed
    ;
    switch(marker){
        case "(.)":
            // (.) indicates that we should match with sibling routes, so we just need to append the intercepted route to the intercepting route
            if (interceptingRoute === "/") {
                interceptedRoute = `/${interceptedRoute}`;
            } else {
                interceptedRoute = interceptingRoute + "/" + interceptedRoute;
            }
            break;
        case "(..)":
            // (..) indicates that we should match at one level up, so we need to remove the last segment of the intercepting route
            if (interceptingRoute === "/") {
                throw new Error(`Invalid interception route: ${path}. Cannot use (..) marker at the root level, use (.) instead.`);
            }
            interceptedRoute = interceptingRoute.split("/").slice(0, -1).concat(interceptedRoute).join("/");
            break;
        case "(...)":
            // (...) will match the route segment in the root directory, so we need to use the root directory to prepend the intercepted route
            interceptedRoute = "/" + interceptedRoute;
            break;
        case "(..)(..)":
            // (..)(..) indicates that we should match at two levels up, so we need to remove the last two segments of the intercepting route
            const splitInterceptingRoute = interceptingRoute.split("/");
            if (splitInterceptingRoute.length <= 2) {
                throw new Error(`Invalid interception route: ${path}. Cannot use (..)(..) marker at the root level or one level up.`);
            }
            interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join("/");
            break;
        default:
            throw new Error("Invariant: unexpected marker");
    }
    return {
        interceptingRoute,
        interceptedRoute
    };
}

//# sourceMappingURL=interception-routes.js.map

/***/ }),

/***/ 81616:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (false) {} else {
    if (false) {} else {
        if (false) {} else if (false) {} else {
            module.exports = __webpack_require__(20399);
        }
    }
}

//# sourceMappingURL=module.compiled.js.map

/***/ }),

/***/ 23484:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(81616).vendored.contexts.AmpContext;

//# sourceMappingURL=amp-context.js.map

/***/ }),

/***/ 52413:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(81616).vendored.contexts.AppRouterContext;

//# sourceMappingURL=app-router-context.js.map

/***/ }),

/***/ 81157:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(81616).vendored.contexts.HeadManagerContext;

//# sourceMappingURL=head-manager-context.js.map

/***/ }),

/***/ 97008:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(81616).vendored.contexts.HooksClientContext;

//# sourceMappingURL=hooks-client-context.js.map

/***/ }),

/***/ 31206:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(81616).vendored.contexts.ImageConfigContext;

//# sourceMappingURL=image-config-context.js.map

/***/ }),

/***/ 50131:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(81616).vendored.contexts.RouterContext;

//# sourceMappingURL=router-context.js.map

/***/ }),

/***/ 93347:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(81616).vendored.contexts.ServerInsertedHtml;

//# sourceMappingURL=server-inserted-html.js.map

/***/ }),

/***/ 60962:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(81616).vendored["react-ssr"].ReactDOM;

//# sourceMappingURL=react-dom.js.map

/***/ }),

/***/ 10326:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(81616).vendored["react-ssr"].ReactJsxRuntime;

//# sourceMappingURL=react-jsx-runtime.js.map

/***/ }),

/***/ 56493:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(81616).vendored["react-ssr"].ReactServerDOMWebpackClientEdge;

//# sourceMappingURL=react-server-dom-webpack-client-edge.js.map

/***/ }),

/***/ 17577:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(81616).vendored["react-ssr"].React;

//# sourceMappingURL=react.js.map

/***/ }),

/***/ 22255:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ReflectAdapter", ({
    enumerable: true,
    get: function() {
        return ReflectAdapter;
    }
}));
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === "function") {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
}

//# sourceMappingURL=reflect.js.map

/***/ }),

/***/ 98710:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isInAmpMode", ({
    enumerable: true,
    get: function() {
        return isInAmpMode;
    }
}));
function isInAmpMode(param) {
    let { ampFirst = false, hybrid = false, hasQuery = false } = param === void 0 ? {} : param;
    return ampFirst || hybrid && hasQuery;
} //# sourceMappingURL=amp-mode.js.map


/***/ }),

/***/ 2451:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
// regexp is based on https://github.com/sindresorhus/escape-string-regexp

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "escapeStringRegexp", ({
    enumerable: true,
    get: function() {
        return escapeStringRegexp;
    }
}));
const reHasRegExp = /[|\\{}()[\]^$+*?.-]/;
const reReplaceRegExp = /[|\\{}()[\]^$+*?.-]/g;
function escapeStringRegexp(str) {
    // see also: https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/escapeRegExp.js#L23
    if (reHasRegExp.test(str)) {
        return str.replace(reReplaceRegExp, "\\$&");
    }
    return str;
} //# sourceMappingURL=escape-regexp.js.map


/***/ }),

/***/ 23078:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getImgProps", ({
    enumerable: true,
    get: function() {
        return getImgProps;
    }
}));
const _warnonce = __webpack_require__(576);
const _imageblursvg = __webpack_require__(20380);
const _imageconfig = __webpack_require__(35248);
const VALID_LOADING_VALUES = (/* unused pure expression or super */ null && ([
    "lazy",
    "eager",
    undefined
]));
function isStaticRequire(src) {
    return src.default !== undefined;
}
function isStaticImageData(src) {
    return src.src !== undefined;
}
function isStaticImport(src) {
    return typeof src === "object" && (isStaticRequire(src) || isStaticImageData(src));
}
const allImgs = new Map();
let perfObserver;
function getInt(x) {
    if (typeof x === "undefined") {
        return x;
    }
    if (typeof x === "number") {
        return Number.isFinite(x) ? x : NaN;
    }
    if (typeof x === "string" && /^[0-9]+$/.test(x)) {
        return parseInt(x, 10);
    }
    return NaN;
}
function getWidths(param, width, sizes) {
    let { deviceSizes, allSizes } = param;
    if (sizes) {
        // Find all the "vw" percent sizes used in the sizes prop
        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
        const percentSizes = [];
        for(let match; match = viewportWidthRe.exec(sizes); match){
            percentSizes.push(parseInt(match[2]));
        }
        if (percentSizes.length) {
            const smallestRatio = Math.min(...percentSizes) * 0.01;
            return {
                widths: allSizes.filter((s)=>s >= deviceSizes[0] * smallestRatio),
                kind: "w"
            };
        }
        return {
            widths: allSizes,
            kind: "w"
        };
    }
    if (typeof width !== "number") {
        return {
            widths: deviceSizes,
            kind: "w"
        };
    }
    const widths = [
        ...new Set(// > are actually 3x in the green color, but only 1.5x in the red and
        // > blue colors. Showing a 3x resolution image in the app vs a 2x
        // > resolution image will be visually the same, though the 3x image
        // > takes significantly more data. Even true 3x resolution screens are
        // > wasteful as the human eye cannot see that level of detail without
        // > something like a magnifying glass.
        // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
        [
            width,
            width * 2 /*, width * 3*/ 
        ].map((w)=>allSizes.find((p)=>p >= w) || allSizes[allSizes.length - 1]))
    ];
    return {
        widths,
        kind: "x"
    };
}
function generateImgAttrs(param) {
    let { config, src, unoptimized, width, quality, sizes, loader } = param;
    if (unoptimized) {
        return {
            src,
            srcSet: undefined,
            sizes: undefined
        };
    }
    const { widths, kind } = getWidths(config, width, sizes);
    const last = widths.length - 1;
    return {
        sizes: !sizes && kind === "w" ? "100vw" : sizes,
        srcSet: widths.map((w, i)=>loader({
                config,
                src,
                quality,
                width: w
            }) + " " + (kind === "w" ? w : i + 1) + kind).join(", "),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: loader({
            config,
            src,
            quality,
            width: widths[last]
        })
    };
}
function getImgProps(param, _state) {
    let { src, sizes, unoptimized = false, priority = false, loading, className, quality, width, height, fill = false, style, overrideSrc, onLoad, onLoadingComplete, placeholder = "empty", blurDataURL, fetchPriority, layout, objectFit, objectPosition, lazyBoundary, lazyRoot, ...rest } = param;
    const { imgConf, showAltText, blurComplete, defaultLoader } = _state;
    let config;
    let c = imgConf || _imageconfig.imageConfigDefault;
    if ("allSizes" in c) {
        config = c;
    } else {
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        config = {
            ...c,
            allSizes,
            deviceSizes
        };
    }
    if (typeof defaultLoader === "undefined") {
        throw new Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
    }
    let loader = rest.loader || defaultLoader;
    // Remove property so it's not spread on <img> element
    delete rest.loader;
    delete rest.srcSet;
    // This special value indicates that the user
    // didn't define a "loader" prop or "loader" config.
    const isDefaultLoader = "__next_img_default" in loader;
    if (isDefaultLoader) {
        if (config.loader === "custom") {
            throw new Error('Image with src "' + src + '" is missing "loader" prop.' + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader");
        }
    } else {
        // The user defined a "loader" prop or config.
        // Since the config object is internal only, we
        // must not pass it to the user-defined "loader".
        const customImageLoader = loader;
        loader = (obj)=>{
            const { config: _, ...opts } = obj;
            return customImageLoader(opts);
        };
    }
    if (layout) {
        if (layout === "fill") {
            fill = true;
        }
        const layoutToStyle = {
            intrinsic: {
                maxWidth: "100%",
                height: "auto"
            },
            responsive: {
                width: "100%",
                height: "auto"
            }
        };
        const layoutToSizes = {
            responsive: "100vw",
            fill: "100vw"
        };
        const layoutStyle = layoutToStyle[layout];
        if (layoutStyle) {
            style = {
                ...style,
                ...layoutStyle
            };
        }
        const layoutSizes = layoutToSizes[layout];
        if (layoutSizes && !sizes) {
            sizes = layoutSizes;
        }
    }
    let staticSrc = "";
    let widthInt = getInt(width);
    let heightInt = getInt(height);
    let blurWidth;
    let blurHeight;
    if (isStaticImport(src)) {
        const staticImageData = isStaticRequire(src) ? src.default : src;
        if (!staticImageData.src) {
            throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(staticImageData));
        }
        if (!staticImageData.height || !staticImageData.width) {
            throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(staticImageData));
        }
        blurWidth = staticImageData.blurWidth;
        blurHeight = staticImageData.blurHeight;
        blurDataURL = blurDataURL || staticImageData.blurDataURL;
        staticSrc = staticImageData.src;
        if (!fill) {
            if (!widthInt && !heightInt) {
                widthInt = staticImageData.width;
                heightInt = staticImageData.height;
            } else if (widthInt && !heightInt) {
                const ratio = widthInt / staticImageData.width;
                heightInt = Math.round(staticImageData.height * ratio);
            } else if (!widthInt && heightInt) {
                const ratio = heightInt / staticImageData.height;
                widthInt = Math.round(staticImageData.width * ratio);
            }
        }
    }
    src = typeof src === "string" ? src : staticSrc;
    let isLazy = !priority && (loading === "lazy" || typeof loading === "undefined");
    if (!src || src.startsWith("data:") || src.startsWith("blob:")) {
        // https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
        unoptimized = true;
        isLazy = false;
    }
    if (config.unoptimized) {
        unoptimized = true;
    }
    if (isDefaultLoader && src.endsWith(".svg") && !config.dangerouslyAllowSVG) {
        // Special case to make svg serve as-is to avoid proxying
        // through the built-in Image Optimization API.
        unoptimized = true;
    }
    if (priority) {
        fetchPriority = "high";
    }
    const qualityInt = getInt(quality);
    if (false) {}
    const imgStyle = Object.assign(fill ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit,
        objectPosition
    } : {}, showAltText ? {} : {
        color: "transparent"
    }, style);
    const backgroundImage = !blurComplete && placeholder !== "empty" ? placeholder === "blur" ? 'url("data:image/svg+xml;charset=utf-8,' + (0, _imageblursvg.getImageBlurSvg)({
        widthInt,
        heightInt,
        blurWidth,
        blurHeight,
        blurDataURL: blurDataURL || "",
        objectFit: imgStyle.objectFit
    }) + '")' : 'url("' + placeholder + '")' // assume `data:image/`
     : null;
    let placeholderStyle = backgroundImage ? {
        backgroundSize: imgStyle.objectFit || "cover",
        backgroundPosition: imgStyle.objectPosition || "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundImage
    } : {};
    if (false) {}
    const imgAttributes = generateImgAttrs({
        config,
        src,
        unoptimized,
        width: widthInt,
        quality: qualityInt,
        sizes,
        loader
    });
    if (false) {}
    const props = {
        ...rest,
        loading: isLazy ? "lazy" : loading,
        fetchPriority,
        width: widthInt,
        height: heightInt,
        decoding: "async",
        className,
        style: {
            ...imgStyle,
            ...placeholderStyle
        },
        sizes: imgAttributes.sizes,
        srcSet: imgAttributes.srcSet,
        src: overrideSrc || imgAttributes.src
    };
    const meta = {
        unoptimized,
        priority,
        placeholder,
        fill
    };
    return {
        props,
        meta
    };
} //# sourceMappingURL=get-img-props.js.map


/***/ }),

/***/ 92165:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
// http://www.cse.yorku.ca/~oz/hash.html
// More specifically, 32-bit hash via djbxor
// (ref: https://gist.github.com/eplawless/52813b1d8ad9af510d85?permalink_comment_id=3367765#gistcomment-3367765)
// This is due to number type differences between rust for turbopack to js number types,
// where rust does not have easy way to repreesnt js's 53-bit float number type for the matching
// overflow behavior. This is more `correct` in terms of having canonical hash across different runtime / implementation
// as can gaurantee determinstic output from 32bit hash.

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
    djb2Hash: function() {
        return djb2Hash;
    },
    hexHash: function() {
        return hexHash;
    }
});
function djb2Hash(str) {
    let hash = 5381;
    for(let i = 0; i < str.length; i++){
        const char = str.charCodeAt(i);
        hash = (hash << 5) + hash + char & 0xffffffff;
    }
    return hash >>> 0;
}
function hexHash(str) {
    return djb2Hash(str).toString(36).slice(0, 5);
} //# sourceMappingURL=hash.js.map


/***/ }),

/***/ 60815:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
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
    default: function() {
        return _default;
    },
    defaultHead: function() {
        return defaultHead;
    }
});
const _interop_require_default = __webpack_require__(91174);
const _interop_require_wildcard = __webpack_require__(58374);
const _jsxruntime = __webpack_require__(10326);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(17577));
const _sideeffect = /*#__PURE__*/ _interop_require_default._(__webpack_require__(78003));
const _ampcontextsharedruntime = __webpack_require__(23484);
const _headmanagercontextsharedruntime = __webpack_require__(81157);
const _ampmode = __webpack_require__(98710);
const _warnonce = __webpack_require__(576);
function defaultHead(inAmpMode) {
    if (inAmpMode === void 0) inAmpMode = false;
    const head = [
        /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
            charSet: "utf-8"
        })
    ];
    if (!inAmpMode) {
        head.push(/*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }));
    }
    return head;
}
function onlyReactElement(list, child) {
    // React children can be "string" or "number" in this case we ignore them for backwards compat
    if (typeof child === "string" || typeof child === "number") {
        return list;
    }
    // Adds support for React.Fragment
    if (child.type === _react.default.Fragment) {
        return list.concat(_react.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild)=>{
            if (typeof fragmentChild === "string" || typeof fragmentChild === "number") {
                return fragmentList;
            }
            return fragmentList.concat(fragmentChild);
        }, []));
    }
    return list.concat(child);
}
const METATYPES = [
    "name",
    "httpEquiv",
    "charSet",
    "itemProp"
];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/ function unique() {
    const keys = new Set();
    const tags = new Set();
    const metaTypes = new Set();
    const metaCategories = {};
    return (h)=>{
        let isUnique = true;
        let hasKey = false;
        if (h.key && typeof h.key !== "number" && h.key.indexOf("$") > 0) {
            hasKey = true;
            const key = h.key.slice(h.key.indexOf("$") + 1);
            if (keys.has(key)) {
                isUnique = false;
            } else {
                keys.add(key);
            }
        }
        // eslint-disable-next-line default-case
        switch(h.type){
            case "title":
            case "base":
                if (tags.has(h.type)) {
                    isUnique = false;
                } else {
                    tags.add(h.type);
                }
                break;
            case "meta":
                for(let i = 0, len = METATYPES.length; i < len; i++){
                    const metatype = METATYPES[i];
                    if (!h.props.hasOwnProperty(metatype)) continue;
                    if (metatype === "charSet") {
                        if (metaTypes.has(metatype)) {
                            isUnique = false;
                        } else {
                            metaTypes.add(metatype);
                        }
                    } else {
                        const category = h.props[metatype];
                        const categories = metaCategories[metatype] || new Set();
                        if ((metatype !== "name" || !hasKey) && categories.has(category)) {
                            isUnique = false;
                        } else {
                            categories.add(category);
                            metaCategories[metatype] = categories;
                        }
                    }
                }
                break;
        }
        return isUnique;
    };
}
/**
 *
 * @param headChildrenElements List of children of <Head>
 */ function reduceComponents(headChildrenElements, props) {
    const { inAmpMode } = props;
    return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(defaultHead(inAmpMode).reverse()).filter(unique()).reverse().map((c, i)=>{
        const key = c.key || i;
        if ( true && !inAmpMode) {
            if (c.type === "link" && c.props["href"] && // TODO(prateekbh@): Replace this with const from `constants` when the tree shaking works.
            [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/"
            ].some((url)=>c.props["href"].startsWith(url))) {
                const newProps = {
                    ...c.props || {}
                };
                newProps["data-href"] = newProps["href"];
                newProps["href"] = undefined;
                // Add this attribute to make it easy to identify optimized tags
                newProps["data-optimized-fonts"] = true;
                return /*#__PURE__*/ _react.default.cloneElement(c, newProps);
            }
        }
        if (false) {}
        return /*#__PURE__*/ _react.default.cloneElement(c, {
            key
        });
    });
}
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */ function Head(param) {
    let { children } = param;
    const ampState = (0, _react.useContext)(_ampcontextsharedruntime.AmpStateContext);
    const headManager = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_sideeffect.default, {
        reduceComponentsToState: reduceComponents,
        headManager: headManager,
        inAmpMode: (0, _ampmode.isInAmpMode)(ampState),
        children: children
    });
}
const _default = Head;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=head.js.map


/***/ }),

/***/ 20380:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * A shared function, used on both client and server, to generate a SVG blur placeholder.
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getImageBlurSvg", ({
    enumerable: true,
    get: function() {
        return getImageBlurSvg;
    }
}));
function getImageBlurSvg(param) {
    let { widthInt, heightInt, blurWidth, blurHeight, blurDataURL, objectFit } = param;
    const std = 20;
    const svgWidth = blurWidth ? blurWidth * 40 : widthInt;
    const svgHeight = blurHeight ? blurHeight * 40 : heightInt;
    const viewBox = svgWidth && svgHeight ? "viewBox='0 0 " + svgWidth + " " + svgHeight + "'" : "";
    const preserveAspectRatio = viewBox ? "none" : objectFit === "contain" ? "xMidYMid" : objectFit === "cover" ? "xMidYMid slice" : "none";
    return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + viewBox + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='" + std + "'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='" + std + "'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + preserveAspectRatio + "' style='filter: url(%23b);' href='" + blurDataURL + "'/%3E%3C/svg%3E";
} //# sourceMappingURL=image-blur-svg.js.map


/***/ }),

/***/ 35248:
/***/ ((__unused_webpack_module, exports) => {

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
    VALID_LOADERS: function() {
        return VALID_LOADERS;
    },
    imageConfigDefault: function() {
        return imageConfigDefault;
    }
});
const VALID_LOADERS = [
    "default",
    "imgix",
    "cloudinary",
    "akamai",
    "custom"
];
const imageConfigDefault = {
    deviceSizes: [
        640,
        750,
        828,
        1080,
        1200,
        1920,
        2048,
        3840
    ],
    imageSizes: [
        16,
        32,
        48,
        64,
        96,
        128,
        256,
        384
    ],
    path: "/_next/image",
    loader: "default",
    loaderFile: "",
    domains: [],
    disableStaticImages: false,
    minimumCacheTTL: 60,
    formats: [
        "image/webp"
    ],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
    contentDispositionType: "inline",
    remotePatterns: [],
    unoptimized: false
}; //# sourceMappingURL=image-config.js.map


/***/ }),

/***/ 69029:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
    default: function() {
        return _default;
    },
    getImageProps: function() {
        return getImageProps;
    }
});
const _interop_require_default = __webpack_require__(91174);
const _getimgprops = __webpack_require__(23078);
const _imagecomponent = __webpack_require__(92481);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(86820));
function getImageProps(imgProps) {
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false}
    });
    // Normally we don't care about undefined props because we pass to JSX,
    // but this exported function could be used by the end user for anything
    // so we delete undefined props to clean it up a little.
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
}
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map


/***/ }),

/***/ 86820:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
function defaultLoader(param) {
    let { config, src, width, quality } = param;
    if (false) {}
    return config.path + "?url=" + encodeURIComponent(src) + "&w=" + width + "&q=" + (quality || 75) + ( false ? 0 : "");
}
// We use this to determine if the import is the default loader
// or a custom loader defined by the user in next.config.js
defaultLoader.__next_img_default = true;
const _default = defaultLoader; //# sourceMappingURL=image-loader.js.map


/***/ }),

/***/ 94129:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
// This has to be a shared module which is shared between client component error boundary and dynamic component

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
    BailoutToCSRError: function() {
        return BailoutToCSRError;
    },
    isBailoutToCSRError: function() {
        return isBailoutToCSRError;
    }
});
const BAILOUT_TO_CSR = "BAILOUT_TO_CLIENT_SIDE_RENDERING";
class BailoutToCSRError extends Error {
    constructor(reason){
        super("Bail out to client-side rendering: " + reason);
        this.reason = reason;
        this.digest = BAILOUT_TO_CSR;
    }
}
function isBailoutToCSRError(err) {
    if (typeof err !== "object" || err === null || !("digest" in err)) {
        return false;
    }
    return err.digest === BAILOUT_TO_CSR;
} //# sourceMappingURL=bailout-to-csr.js.map


/***/ }),

/***/ 36058:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * For a given page path, this function ensures that there is a leading slash.
 * If there is not a leading slash, one is added, otherwise it is noop.
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ensureLeadingSlash", ({
    enumerable: true,
    get: function() {
        return ensureLeadingSlash;
    }
}));
function ensureLeadingSlash(path) {
    return path.startsWith("/") ? path : "/" + path;
} //# sourceMappingURL=ensure-leading-slash.js.map


/***/ }),

/***/ 33879:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
    ActionQueueContext: function() {
        return ActionQueueContext;
    },
    createMutableActionQueue: function() {
        return createMutableActionQueue;
    }
});
const _interop_require_wildcard = __webpack_require__(58374);
const _routerreducertypes = __webpack_require__(57767);
const _routerreducer = __webpack_require__(83860);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(17577));
const ActionQueueContext = _react.default.createContext(null);
function runRemainingActions(actionQueue, setState) {
    if (actionQueue.pending !== null) {
        actionQueue.pending = actionQueue.pending.next;
        if (actionQueue.pending !== null) {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            runAction({
                actionQueue,
                action: actionQueue.pending,
                setState
            });
        } else {
            // No more actions are pending, check if a refresh is needed
            if (actionQueue.needsRefresh) {
                actionQueue.needsRefresh = false;
                actionQueue.dispatch({
                    type: _routerreducertypes.ACTION_REFRESH,
                    origin: window.location.origin
                }, setState);
            }
        }
    }
}
async function runAction(param) {
    let { actionQueue, action, setState } = param;
    const prevState = actionQueue.state;
    if (!prevState) {
        // This shouldn't happen as the state is initialized in the dispatcher if it's not set
        throw new Error("Invariant: Router state not initialized");
    }
    actionQueue.pending = action;
    const payload = action.payload;
    const actionResult = actionQueue.action(prevState, payload);
    function handleResult(nextState) {
        // if we discarded this action, the state should also be discarded
        if (action.discarded) {
            return;
        }
        actionQueue.state = nextState;
        if (actionQueue.devToolsInstance) {
            actionQueue.devToolsInstance.send(payload, nextState);
        }
        runRemainingActions(actionQueue, setState);
        action.resolve(nextState);
    }
    // if the action is a promise, set up a callback to resolve it
    if ((0, _routerreducertypes.isThenable)(actionResult)) {
        actionResult.then(handleResult, (err)=>{
            runRemainingActions(actionQueue, setState);
            action.reject(err);
        });
    } else {
        handleResult(actionResult);
    }
}
function dispatchAction(actionQueue, payload, setState) {
    let resolvers = {
        resolve: setState,
        reject: ()=>{}
    };
    // most of the action types are async with the exception of restore
    // it's important that restore is handled quickly since it's fired on the popstate event
    // and we don't want to add any delay on a back/forward nav
    // this only creates a promise for the async actions
    if (payload.type !== _routerreducertypes.ACTION_RESTORE) {
        // Create the promise and assign the resolvers to the object.
        const deferredPromise = new Promise((resolve, reject)=>{
            resolvers = {
                resolve,
                reject
            };
        });
        (0, _react.startTransition)(()=>{
            // we immediately notify React of the pending promise -- the resolver is attached to the action node
            // and will be called when the associated action promise resolves
            setState(deferredPromise);
        });
    }
    const newAction = {
        payload,
        next: null,
        resolve: resolvers.resolve,
        reject: resolvers.reject
    };
    // Check if the queue is empty
    if (actionQueue.pending === null) {
        // The queue is empty, so add the action and start it immediately
        // Mark this action as the last in the queue
        actionQueue.last = newAction;
        runAction({
            actionQueue,
            action: newAction,
            setState
        });
    } else if (payload.type === _routerreducertypes.ACTION_NAVIGATE || payload.type === _routerreducertypes.ACTION_RESTORE) {
        // Navigations (including back/forward) take priority over any pending actions.
        // Mark the pending action as discarded (so the state is never applied) and start the navigation action immediately.
        actionQueue.pending.discarded = true;
        // Mark this action as the last in the queue
        actionQueue.last = newAction;
        // if the pending action was a server action, mark the queue as needing a refresh once events are processed
        if (actionQueue.pending.payload.type === _routerreducertypes.ACTION_SERVER_ACTION) {
            actionQueue.needsRefresh = true;
        }
        runAction({
            actionQueue,
            action: newAction,
            setState
        });
    } else {
        // The queue is not empty, so add the action to the end of the queue
        // It will be started by runRemainingActions after the previous action finishes
        if (actionQueue.last !== null) {
            actionQueue.last.next = newAction;
        }
        actionQueue.last = newAction;
    }
}
function createMutableActionQueue() {
    const actionQueue = {
        state: null,
        dispatch: (payload, setState)=>dispatchAction(actionQueue, payload, setState),
        action: async (state, action)=>{
            if (state === null) {
                throw new Error("Invariant: Router state not initialized");
            }
            const result = (0, _routerreducer.reducer)(state, action);
            return result;
        },
        pending: null,
        last: null
    };
    return actionQueue;
} //# sourceMappingURL=action-queue.js.map


/***/ }),

/***/ 8974:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addPathPrefix", ({
    enumerable: true,
    get: function() {
        return addPathPrefix;
    }
}));
const _parsepath = __webpack_require__(93067);
function addPathPrefix(path, prefix) {
    if (!path.startsWith("/") || !prefix) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    return "" + prefix + pathname + query + hash;
} //# sourceMappingURL=add-path-prefix.js.map


/***/ }),

/***/ 72862:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
    normalizeAppPath: function() {
        return normalizeAppPath;
    },
    normalizeRscURL: function() {
        return normalizeRscURL;
    }
});
const _ensureleadingslash = __webpack_require__(36058);
const _segment = __webpack_require__(68071);
function normalizeAppPath(route) {
    return (0, _ensureleadingslash.ensureLeadingSlash)(route.split("/").reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if ((0, _segment.isGroupSegment)(segment)) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment[0] === "@") {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === "page" || segment === "route") && index === segments.length - 1) {
            return pathname;
        }
        return pathname + "/" + segment;
    }, ""));
}
function normalizeRscURL(url) {
    return url.replace(/\.rsc($|\?)/, "$1");
} //# sourceMappingURL=app-paths.js.map


/***/ }),

/***/ 43071:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

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
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __webpack_require__(58374);
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(72149));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || "";
    let pathname = urlObj.pathname || "";
    let hash = urlObj.hash || "";
    let query = urlObj.query || "";
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ":") + "@" : "";
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(":") ? "[" + hostname + "]" : hostname);
        if (urlObj.port) {
            host += ":" + urlObj.port;
        }
    }
    if (query && typeof query === "object") {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && "?" + query || "";
    if (protocol && !protocol.endsWith(":")) protocol += ":";
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = "//" + (host || "");
        if (pathname && pathname[0] !== "/") pathname = "/" + pathname;
    } else if (!host) {
        host = "";
    }
    if (hash && hash[0] !== "#") hash = "#" + hash;
    if (search && search[0] !== "?") search = "?" + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace("#", "%23");
    return "" + protocol + host + pathname + search + hash;
}
const urlObjectKeys = [
    "auth",
    "hash",
    "host",
    "hostname",
    "href",
    "path",
    "pathname",
    "port",
    "protocol",
    "query",
    "search",
    "slashes"
];
function formatWithValidation(url) {
    if (false) {}
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map


/***/ }),

/***/ 79976:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * Run function with `scroll-behavior: auto` applied to `<html/>`.
 * This css change will be reverted after the function finishes.
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "handleSmoothScroll", ({
    enumerable: true,
    get: function() {
        return handleSmoothScroll;
    }
}));
function handleSmoothScroll(fn, options) {
    if (options === void 0) options = {};
    // if only the hash is changed, we don't need to disable smooth scrolling
    // we only care to prevent smooth scrolling when navigating to a new page to avoid jarring UX
    if (options.onlyHashChange) {
        fn();
        return;
    }
    const htmlElement = document.documentElement;
    const existing = htmlElement.style.scrollBehavior;
    htmlElement.style.scrollBehavior = "auto";
    if (!options.dontForceLayout) {
        // In Chrome-based browsers we need to force reflow before calling `scrollTo`.
        // Otherwise it will not pickup the change in scrollBehavior
        // More info here: https://github.com/vercel/next.js/issues/40719#issuecomment-1336248042
        htmlElement.getClientRects();
    }
    fn();
    htmlElement.style.scrollBehavior = existing;
} //# sourceMappingURL=handle-smooth-scroll.js.map


/***/ }),

/***/ 94903:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
    getSortedRoutes: function() {
        return _sortedroutes.getSortedRoutes;
    },
    isDynamicRoute: function() {
        return _isdynamic.isDynamicRoute;
    }
});
const _sortedroutes = __webpack_require__(44712);
const _isdynamic = __webpack_require__(45541); //# sourceMappingURL=index.js.map


/***/ }),

/***/ 81394:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "interpolateAs", ({
    enumerable: true,
    get: function() {
        return interpolateAs;
    }
}));
const _routematcher = __webpack_require__(9966);
const _routeregex = __webpack_require__(37249);
function interpolateAs(route, asPathname, query) {
    let interpolatedRoute = "";
    const dynamicRegex = (0, _routeregex.getRouteRegex)(route);
    const dynamicGroups = dynamicRegex.groups;
    const dynamicMatches = (asPathname !== route ? (0, _routematcher.getRouteMatcher)(dynamicRegex)(asPathname) : "") || // Fall back to reading the values from the href
    // TODO: should this take priority; also need to change in the router.
    query;
    interpolatedRoute = route;
    const params = Object.keys(dynamicGroups);
    if (!params.every((param)=>{
        let value = dynamicMatches[param] || "";
        const { repeat, optional } = dynamicGroups[param];
        // support single-level catch-all
        // TODO: more robust handling for user-error (passing `/`)
        let replaced = "[" + (repeat ? "..." : "") + param + "]";
        if (optional) {
            replaced = (!value ? "/" : "") + "[" + replaced + "]";
        }
        if (repeat && !Array.isArray(value)) value = [
            value
        ];
        return (optional || param in dynamicMatches) && // Interpolate group into data URL if present
        (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(// path delimiter escaped since they are being inserted
        // into the URL and we expect URL encoded segments
        // when parsing dynamic route params
        (segment)=>encodeURIComponent(segment)).join("/") : encodeURIComponent(value)) || "/");
    })) {
        interpolatedRoute = "" // did not satisfy all requirements
        ;
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
    }
    return {
        params,
        result: interpolatedRoute
    };
} //# sourceMappingURL=interpolate-as.js.map


/***/ }),

/***/ 32148:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isBot", ({
    enumerable: true,
    get: function() {
        return isBot;
    }
}));
function isBot(userAgent) {
    return /Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(userAgent);
} //# sourceMappingURL=is-bot.js.map


/***/ }),

/***/ 45541:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isDynamicRoute", ({
    enumerable: true,
    get: function() {
        return isDynamicRoute;
    }
}));
const _interceptionroutes = __webpack_require__(87356);
// Identify /[param]/ in route string
const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
function isDynamicRoute(route) {
    if ((0, _interceptionroutes.isInterceptionRouteAppPath)(route)) {
        route = (0, _interceptionroutes.extractInterceptionRouteInformation)(route).interceptedRoute;
    }
    return TEST_ROUTE.test(route);
} //# sourceMappingURL=is-dynamic.js.map


/***/ }),

/***/ 60944:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isLocalURL", ({
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
}));
const _utils = __webpack_require__(51348);
const _hasbasepath = __webpack_require__(37929);
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map


/***/ }),

/***/ 20757:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "omit", ({
    enumerable: true,
    get: function() {
        return omit;
    }
}));
function omit(object, keys) {
    const omitted = {};
    Object.keys(object).forEach((key)=>{
        if (!keys.includes(key)) {
            omitted[key] = object[key];
        }
    });
    return omitted;
} //# sourceMappingURL=omit.js.map


/***/ }),

/***/ 93067:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "parsePath", ({
    enumerable: true,
    get: function() {
        return parsePath;
    }
}));
function parsePath(path) {
    const hashIndex = path.indexOf("#");
    const queryIndex = path.indexOf("?");
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : "",
            hash: hashIndex > -1 ? path.slice(hashIndex) : ""
        };
    }
    return {
        pathname: path,
        query: "",
        hash: ""
    };
} //# sourceMappingURL=parse-path.js.map


/***/ }),

/***/ 34655:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "pathHasPrefix", ({
    enumerable: true,
    get: function() {
        return pathHasPrefix;
    }
}));
const _parsepath = __webpack_require__(93067);
function pathHasPrefix(path, prefix) {
    if (typeof path !== "string") {
        return false;
    }
    const { pathname } = (0, _parsepath.parsePath)(path);
    return pathname === prefix || pathname.startsWith(prefix + "/");
} //# sourceMappingURL=path-has-prefix.js.map


/***/ }),

/***/ 72149:
/***/ ((__unused_webpack_module, exports) => {

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
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    searchParams.forEach((value, key)=>{
        if (typeof query[key] === "undefined") {
            query[key] = value;
        } else if (Array.isArray(query[key])) {
            query[key].push(value);
        } else {
            query[key] = [
                query[key],
                value
            ];
        }
    });
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === "string" || typeof param === "number" && !isNaN(param) || typeof param === "boolean") {
        return String(param);
    } else {
        return "";
    }
}
function urlQueryToSearchParams(urlQuery) {
    const result = new URLSearchParams();
    Object.entries(urlQuery).forEach((param)=>{
        let [key, value] = param;
        if (Array.isArray(value)) {
            value.forEach((item)=>result.append(key, stringifyUrlQueryParam(item)));
        } else {
            result.set(key, stringifyUrlQueryParam(value));
        }
    });
    return result;
}
function assign(target) {
    for(var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        searchParamsList[_key - 1] = arguments[_key];
    }
    searchParamsList.forEach((searchParams)=>{
        Array.from(searchParams.keys()).forEach((key)=>target.delete(key));
        searchParams.forEach((value, key)=>target.append(key, value));
    });
    return target;
} //# sourceMappingURL=querystring.js.map


/***/ }),

/***/ 83236:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "removeTrailingSlash", ({
    enumerable: true,
    get: function() {
        return removeTrailingSlash;
    }
}));
function removeTrailingSlash(route) {
    return route.replace(/\/$/, "") || "/";
} //# sourceMappingURL=remove-trailing-slash.js.map


/***/ }),

/***/ 9966:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getRouteMatcher", ({
    enumerable: true,
    get: function() {
        return getRouteMatcher;
    }
}));
const _utils = __webpack_require__(51348);
function getRouteMatcher(param) {
    let { re, groups } = param;
    return (pathname)=>{
        const routeMatch = re.exec(pathname);
        if (!routeMatch) {
            return false;
        }
        const decode = (param)=>{
            try {
                return decodeURIComponent(param);
            } catch (_) {
                throw new _utils.DecodeError("failed to decode param");
            }
        };
        const params = {};
        Object.keys(groups).forEach((slugName)=>{
            const g = groups[slugName];
            const m = routeMatch[g.pos];
            if (m !== undefined) {
                params[slugName] = ~m.indexOf("/") ? m.split("/").map((entry)=>decode(entry)) : g.repeat ? [
                    decode(m)
                ] : decode(m);
            }
        });
        return params;
    };
} //# sourceMappingURL=route-matcher.js.map


/***/ }),

/***/ 37249:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
    getNamedMiddlewareRegex: function() {
        return getNamedMiddlewareRegex;
    },
    getNamedRouteRegex: function() {
        return getNamedRouteRegex;
    },
    getRouteRegex: function() {
        return getRouteRegex;
    }
});
const _interceptionroutes = __webpack_require__(87356);
const _escaperegexp = __webpack_require__(2451);
const _removetrailingslash = __webpack_require__(83236);
const NEXT_QUERY_PARAM_PREFIX = "nxtP";
const NEXT_INTERCEPTION_MARKER_PREFIX = "nxtI";
/**
 * Parses a given parameter from a route to a data structure that can be used
 * to generate the parametrized route. Examples:
 *   - `[...slug]` -> `{ key: 'slug', repeat: true, optional: true }`
 *   - `...slug` -> `{ key: 'slug', repeat: true, optional: false }`
 *   - `[foo]` -> `{ key: 'foo', repeat: false, optional: true }`
 *   - `bar` -> `{ key: 'bar', repeat: false, optional: false }`
 */ function parseParameter(param) {
    const optional = param.startsWith("[") && param.endsWith("]");
    if (optional) {
        param = param.slice(1, -1);
    }
    const repeat = param.startsWith("...");
    if (repeat) {
        param = param.slice(3);
    }
    return {
        key: param,
        repeat,
        optional
    };
}
function getParametrizedRoute(route) {
    const segments = (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split("/");
    const groups = {};
    let groupIndex = 1;
    return {
        parameterizedRoute: segments.map((segment)=>{
            const markerMatch = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
            const paramMatches = segment.match(/\[((?:\[.*\])|.+)\]/) // Check for parameters
            ;
            if (markerMatch && paramMatches) {
                const { key, optional, repeat } = parseParameter(paramMatches[1]);
                groups[key] = {
                    pos: groupIndex++,
                    repeat,
                    optional
                };
                return "/" + (0, _escaperegexp.escapeStringRegexp)(markerMatch) + "([^/]+?)";
            } else if (paramMatches) {
                const { key, repeat, optional } = parseParameter(paramMatches[1]);
                groups[key] = {
                    pos: groupIndex++,
                    repeat,
                    optional
                };
                return repeat ? optional ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
            } else {
                return "/" + (0, _escaperegexp.escapeStringRegexp)(segment);
            }
        }).join(""),
        groups
    };
}
function getRouteRegex(normalizedRoute) {
    const { parameterizedRoute, groups } = getParametrizedRoute(normalizedRoute);
    return {
        re: new RegExp("^" + parameterizedRoute + "(?:/)?$"),
        groups: groups
    };
}
/**
 * Builds a function to generate a minimal routeKey using only a-z and minimal
 * number of characters.
 */ function buildGetSafeRouteKey() {
    let i = 0;
    return ()=>{
        let routeKey = "";
        let j = ++i;
        while(j > 0){
            routeKey += String.fromCharCode(97 + (j - 1) % 26);
            j = Math.floor((j - 1) / 26);
        }
        return routeKey;
    };
}
function getSafeKeyFromSegment(param) {
    let { interceptionMarker, getSafeRouteKey, segment, routeKeys, keyPrefix } = param;
    const { key, optional, repeat } = parseParameter(segment);
    // replace any non-word characters since they can break
    // the named regex
    let cleanedKey = key.replace(/\W/g, "");
    if (keyPrefix) {
        cleanedKey = "" + keyPrefix + cleanedKey;
    }
    let invalidKey = false;
    // check if the key is still invalid and fallback to using a known
    // safe key
    if (cleanedKey.length === 0 || cleanedKey.length > 30) {
        invalidKey = true;
    }
    if (!isNaN(parseInt(cleanedKey.slice(0, 1)))) {
        invalidKey = true;
    }
    if (invalidKey) {
        cleanedKey = getSafeRouteKey();
    }
    if (keyPrefix) {
        routeKeys[cleanedKey] = "" + keyPrefix + key;
    } else {
        routeKeys[cleanedKey] = key;
    }
    // if the segment has an interception marker, make sure that's part of the regex pattern
    // this is to ensure that the route with the interception marker doesn't incorrectly match
    // the non-intercepted route (ie /app/(.)[username] should not match /app/[username])
    const interceptionPrefix = interceptionMarker ? (0, _escaperegexp.escapeStringRegexp)(interceptionMarker) : "";
    return repeat ? optional ? "(?:/" + interceptionPrefix + "(?<" + cleanedKey + ">.+?))?" : "/" + interceptionPrefix + "(?<" + cleanedKey + ">.+?)" : "/" + interceptionPrefix + "(?<" + cleanedKey + ">[^/]+?)";
}
function getNamedParametrizedRoute(route, prefixRouteKeys) {
    const segments = (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split("/");
    const getSafeRouteKey = buildGetSafeRouteKey();
    const routeKeys = {};
    return {
        namedParameterizedRoute: segments.map((segment)=>{
            const hasInterceptionMarker = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>segment.startsWith(m));
            const paramMatches = segment.match(/\[((?:\[.*\])|.+)\]/) // Check for parameters
            ;
            if (hasInterceptionMarker && paramMatches) {
                const [usedMarker] = segment.split(paramMatches[0]);
                return getSafeKeyFromSegment({
                    getSafeRouteKey,
                    interceptionMarker: usedMarker,
                    segment: paramMatches[1],
                    routeKeys,
                    keyPrefix: prefixRouteKeys ? NEXT_INTERCEPTION_MARKER_PREFIX : undefined
                });
            } else if (paramMatches) {
                return getSafeKeyFromSegment({
                    getSafeRouteKey,
                    segment: paramMatches[1],
                    routeKeys,
                    keyPrefix: prefixRouteKeys ? NEXT_QUERY_PARAM_PREFIX : undefined
                });
            } else {
                return "/" + (0, _escaperegexp.escapeStringRegexp)(segment);
            }
        }).join(""),
        routeKeys
    };
}
function getNamedRouteRegex(normalizedRoute, prefixRouteKey) {
    const result = getNamedParametrizedRoute(normalizedRoute, prefixRouteKey);
    return {
        ...getRouteRegex(normalizedRoute),
        namedRegex: "^" + result.namedParameterizedRoute + "(?:/)?$",
        routeKeys: result.routeKeys
    };
}
function getNamedMiddlewareRegex(normalizedRoute, options) {
    const { parameterizedRoute } = getParametrizedRoute(normalizedRoute);
    const { catchAll = true } = options;
    if (parameterizedRoute === "/") {
        let catchAllRegex = catchAll ? ".*" : "";
        return {
            namedRegex: "^/" + catchAllRegex + "$"
        };
    }
    const { namedParameterizedRoute } = getNamedParametrizedRoute(normalizedRoute, false);
    let catchAllGroupedRegex = catchAll ? "(?:(/.*)?)" : "";
    return {
        namedRegex: "^" + namedParameterizedRoute + catchAllGroupedRegex + "$"
    };
} //# sourceMappingURL=route-regex.js.map


/***/ }),

/***/ 44712:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getSortedRoutes", ({
    enumerable: true,
    get: function() {
        return getSortedRoutes;
    }
}));
class UrlNode {
    insert(urlPath) {
        this._insert(urlPath.split("/").filter(Boolean), [], false);
    }
    smoosh() {
        return this._smoosh();
    }
    _smoosh(prefix) {
        if (prefix === void 0) prefix = "/";
        const childrenPaths = [
            ...this.children.keys()
        ].sort();
        if (this.slugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf("[]"), 1);
        }
        if (this.restSlugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf("[...]"), 1);
        }
        if (this.optionalRestSlugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf("[[...]]"), 1);
        }
        const routes = childrenPaths.map((c)=>this.children.get(c)._smoosh("" + prefix + c + "/")).reduce((prev, curr)=>[
                ...prev,
                ...curr
            ], []);
        if (this.slugName !== null) {
            routes.push(...this.children.get("[]")._smoosh(prefix + "[" + this.slugName + "]/"));
        }
        if (!this.placeholder) {
            const r = prefix === "/" ? "/" : prefix.slice(0, -1);
            if (this.optionalRestSlugName != null) {
                throw new Error('You cannot define a route with the same specificity as a optional catch-all route ("' + r + '" and "' + r + "[[..." + this.optionalRestSlugName + ']]").');
            }
            routes.unshift(r);
        }
        if (this.restSlugName !== null) {
            routes.push(...this.children.get("[...]")._smoosh(prefix + "[..." + this.restSlugName + "]/"));
        }
        if (this.optionalRestSlugName !== null) {
            routes.push(...this.children.get("[[...]]")._smoosh(prefix + "[[..." + this.optionalRestSlugName + "]]/"));
        }
        return routes;
    }
    _insert(urlPaths, slugNames, isCatchAll) {
        if (urlPaths.length === 0) {
            this.placeholder = false;
            return;
        }
        if (isCatchAll) {
            throw new Error("Catch-all must be the last part of the URL.");
        }
        // The next segment in the urlPaths list
        let nextSegment = urlPaths[0];
        // Check if the segment matches `[something]`
        if (nextSegment.startsWith("[") && nextSegment.endsWith("]")) {
            // Strip `[` and `]`, leaving only `something`
            let segmentName = nextSegment.slice(1, -1);
            let isOptional = false;
            if (segmentName.startsWith("[") && segmentName.endsWith("]")) {
                // Strip optional `[` and `]`, leaving only `something`
                segmentName = segmentName.slice(1, -1);
                isOptional = true;
            }
            if (segmentName.startsWith("...")) {
                // Strip `...`, leaving only `something`
                segmentName = segmentName.substring(3);
                isCatchAll = true;
            }
            if (segmentName.startsWith("[") || segmentName.endsWith("]")) {
                throw new Error("Segment names may not start or end with extra brackets ('" + segmentName + "').");
            }
            if (segmentName.startsWith(".")) {
                throw new Error("Segment names may not start with erroneous periods ('" + segmentName + "').");
            }
            function handleSlug(previousSlug, nextSlug) {
                if (previousSlug !== null) {
                    // If the specific segment already has a slug but the slug is not `something`
                    // This prevents collisions like:
                    // pages/[post]/index.js
                    // pages/[id]/index.js
                    // Because currently multiple dynamic params on the same segment level are not supported
                    if (previousSlug !== nextSlug) {
                        // TODO: This error seems to be confusing for users, needs an error link, the description can be based on above comment.
                        throw new Error("You cannot use different slug names for the same dynamic path ('" + previousSlug + "' !== '" + nextSlug + "').");
                    }
                }
                slugNames.forEach((slug)=>{
                    if (slug === nextSlug) {
                        throw new Error('You cannot have the same slug name "' + nextSlug + '" repeat within a single dynamic path');
                    }
                    if (slug.replace(/\W/g, "") === nextSegment.replace(/\W/g, "")) {
                        throw new Error('You cannot have the slug names "' + slug + '" and "' + nextSlug + '" differ only by non-word symbols within a single dynamic path');
                    }
                });
                slugNames.push(nextSlug);
            }
            if (isCatchAll) {
                if (isOptional) {
                    if (this.restSlugName != null) {
                        throw new Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + urlPaths[0] + '" ).');
                    }
                    handleSlug(this.optionalRestSlugName, segmentName);
                    // slugName is kept as it can only be one particular slugName
                    this.optionalRestSlugName = segmentName;
                    // nextSegment is overwritten to [[...]] so that it can later be sorted specifically
                    nextSegment = "[[...]]";
                } else {
                    if (this.optionalRestSlugName != null) {
                        throw new Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + urlPaths[0] + '").');
                    }
                    handleSlug(this.restSlugName, segmentName);
                    // slugName is kept as it can only be one particular slugName
                    this.restSlugName = segmentName;
                    // nextSegment is overwritten to [...] so that it can later be sorted specifically
                    nextSegment = "[...]";
                }
            } else {
                if (isOptional) {
                    throw new Error('Optional route parameters are not yet supported ("' + urlPaths[0] + '").');
                }
                handleSlug(this.slugName, segmentName);
                // slugName is kept as it can only be one particular slugName
                this.slugName = segmentName;
                // nextSegment is overwritten to [] so that it can later be sorted specifically
                nextSegment = "[]";
            }
        }
        // If this UrlNode doesn't have the nextSegment yet we create a new child UrlNode
        if (!this.children.has(nextSegment)) {
            this.children.set(nextSegment, new UrlNode());
        }
        this.children.get(nextSegment)._insert(urlPaths.slice(1), slugNames, isCatchAll);
    }
    constructor(){
        this.placeholder = true;
        this.children = new Map();
        this.slugName = null;
        this.restSlugName = null;
        this.optionalRestSlugName = null;
    }
}
function getSortedRoutes(normalizedPages) {
    // First the UrlNode is created, and every UrlNode can have only 1 dynamic segment
    // Eg you can't have pages/[post]/abc.js and pages/[hello]/something-else.js
    // Only 1 dynamic segment per nesting level
    // So in the case that is test/integration/dynamic-routing it'll be this:
    // pages/[post]/comments.js
    // pages/blog/[post]/comment/[id].js
    // Both are fine because `pages/[post]` and `pages/blog` are on the same level
    // So in this case `UrlNode` created here has `this.slugName === 'post'`
    // And since your PR passed through `slugName` as an array basically it'd including it in too many possibilities
    // Instead what has to be passed through is the upwards path's dynamic names
    const root = new UrlNode();
    // Here the `root` gets injected multiple paths, and insert will break them up into sublevels
    normalizedPages.forEach((pagePath)=>root.insert(pagePath));
    // Smoosh will then sort those sublevels up to the point where you get the correct route definition priority
    return root.smoosh();
} //# sourceMappingURL=sorted-routes.js.map


/***/ }),

/***/ 68071:
/***/ ((__unused_webpack_module, exports) => {

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
    DEFAULT_SEGMENT_KEY: function() {
        return DEFAULT_SEGMENT_KEY;
    },
    PAGE_SEGMENT_KEY: function() {
        return PAGE_SEGMENT_KEY;
    },
    isGroupSegment: function() {
        return isGroupSegment;
    }
});
function isGroupSegment(segment) {
    // Use array[0] for performant purpose
    return segment[0] === "(" && segment.endsWith(")");
}
const PAGE_SEGMENT_KEY = "__PAGE__";
const DEFAULT_SEGMENT_KEY = "__DEFAULT__"; //# sourceMappingURL=segment.js.map


/***/ }),

/***/ 78003:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return SideEffect;
    }
}));
const _react = __webpack_require__(17577);
const isServer = "undefined" === "undefined";
const useClientOnlyLayoutEffect = isServer ? ()=>{} : _react.useLayoutEffect;
const useClientOnlyEffect = isServer ? ()=>{} : _react.useEffect;
function SideEffect(props) {
    const { headManager, reduceComponentsToState } = props;
    function emitChange() {
        if (headManager && headManager.mountedInstances) {
            const headElements = _react.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));
            headManager.updateHead(reduceComponentsToState(headElements, props));
        }
    }
    if (isServer) {
        var _headManager_mountedInstances;
        headManager == null ? void 0 : (_headManager_mountedInstances = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances.add(props.children);
        emitChange();
    }
    useClientOnlyLayoutEffect(()=>{
        var _headManager_mountedInstances;
        headManager == null ? void 0 : (_headManager_mountedInstances = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances.add(props.children);
        return ()=>{
            var _headManager_mountedInstances;
            headManager == null ? void 0 : (_headManager_mountedInstances = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances.delete(props.children);
        };
    });
    // We need to call `updateHead` method whenever the `SideEffect` is trigger in all
    // life-cycles: mount, update, unmount. However, if there are multiple `SideEffect`s
    // being rendered, we only trigger the method from the last one.
    // This is ensured by keeping the last unflushed `updateHead` in the `_pendingUpdate`
    // singleton in the layout effect pass, and actually trigger it in the effect pass.
    useClientOnlyLayoutEffect(()=>{
        if (headManager) {
            headManager._pendingUpdate = emitChange;
        }
        return ()=>{
            if (headManager) {
                headManager._pendingUpdate = emitChange;
            }
        };
    });
    useClientOnlyEffect(()=>{
        if (headManager && headManager._pendingUpdate) {
            headManager._pendingUpdate();
            headManager._pendingUpdate = null;
        }
        return ()=>{
            if (headManager && headManager._pendingUpdate) {
                headManager._pendingUpdate();
                headManager._pendingUpdate = null;
            }
        };
    });
    return null;
} //# sourceMappingURL=side-effect.js.map


/***/ }),

/***/ 51348:
/***/ ((__unused_webpack_module, exports) => {

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
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    "CLS",
    "FCP",
    "FID",
    "INP",
    "LCP",
    "TTFB"
];
function execOnce(fn) {
    let used = false;
    let result;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return protocol + "//" + hostname + (port ? ":" + port : "");
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === "string" ? Component : Component.displayName || Component.name || "Unknown";
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split("?");
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, "/").replace(/\/\/+/g, "/") + (urlParts[1] ? "?" + urlParts.slice(1).join("?") : "");
}
async function loadGetInitialProps(App, ctx) {
    if (false) { var _App_prototype; }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
        throw new Error(message);
    }
    if (false) {}
    return props;
}
const SP = typeof performance !== "undefined";
const ST = SP && [
    "mark",
    "measure",
    "getEntriesByName"
].every((method)=>typeof performance[method] === "function");
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = "ENOENT";
        this.name = "PageNotFoundError";
        this.message = "Cannot find module for page: " + page;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = "Failed to load static file for page: " + page + " " + message;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = "ENOENT";
        this.message = "Cannot find the middleware module";
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map


/***/ }),

/***/ 576:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "warnOnce", ({
    enumerable: true,
    get: function() {
        return warnOnce;
    }
}));
let warnOnce = (_)=>{};
if (false) {} //# sourceMappingURL=warn-once.js.map


/***/ }),

/***/ 71615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _client_components_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88757);
/* harmony import */ var _client_components_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_client_components_headers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _client_components_headers__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _client_components_headers__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


//# sourceMappingURL=headers.js.map

/***/ }),

/***/ 17710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport default from dynamic */ _shared_lib_image_external__WEBPACK_IMPORTED_MODULE_0___default.a)
/* harmony export */ });
/* harmony import */ var _shared_lib_image_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66794);
/* harmony import */ var _shared_lib_image_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_shared_lib_image_external__WEBPACK_IMPORTED_MODULE_0__);



//# sourceMappingURL=image.js.map

/***/ }),

/***/ 57371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport default from dynamic */ _client_link__WEBPACK_IMPORTED_MODULE_0___default.a)
/* harmony export */ });
/* harmony import */ var _client_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(670);
/* harmony import */ var _client_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_client_link__WEBPACK_IMPORTED_MODULE_0__);



//# sourceMappingURL=link.js.map

/***/ }),

/***/ 58585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _client_components_navigation_react_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61085);
/* harmony import */ var _client_components_navigation_react_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_client_components_navigation_react_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_client_components_navigation_react_server__WEBPACK_IMPORTED_MODULE_0__, "notFound")) __webpack_require__.d(__webpack_exports__, { notFound: function() { return _client_components_navigation_react_server__WEBPACK_IMPORTED_MODULE_0__.notFound; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_client_components_navigation_react_server__WEBPACK_IMPORTED_MODULE_0__, "redirect")) __webpack_require__.d(__webpack_exports__, { redirect: function() { return _client_components_navigation_react_server__WEBPACK_IMPORTED_MODULE_0__.redirect; } });


//# sourceMappingURL=navigation.react-server.js.map

/***/ }),

/***/ 55661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _server_web_exports_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73896);
/* harmony import */ var _server_web_exports_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_server_web_exports_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_server_web_exports_index__WEBPACK_IMPORTED_MODULE_0__, "NextResponse")) __webpack_require__.d(__webpack_exports__, { NextResponse: function() { return _server_web_exports_index__WEBPACK_IMPORTED_MODULE_0__.NextResponse; } });


//# sourceMappingURL=server.js.map

/***/ }),

/***/ 87070:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _server_web_exports_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98277);
/* harmony import */ var _server_web_exports_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_server_web_exports_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_server_web_exports_index__WEBPACK_IMPORTED_MODULE_0__, "NextResponse")) __webpack_require__.d(__webpack_exports__, { NextResponse: function() { return _server_web_exports_index__WEBPACK_IMPORTED_MODULE_0__.NextResponse; } });


//# sourceMappingURL=server.js.map

/***/ }),

/***/ 48839:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
    bootstrap: function() {
        return bootstrap;
    },
    error: function() {
        return error;
    },
    event: function() {
        return event;
    },
    info: function() {
        return info;
    },
    prefixes: function() {
        return prefixes;
    },
    ready: function() {
        return ready;
    },
    trace: function() {
        return trace;
    },
    wait: function() {
        return wait;
    },
    warn: function() {
        return warn;
    },
    warnOnce: function() {
        return warnOnce;
    }
});
const _picocolors = __webpack_require__(91354);
const prefixes = {
    wait: (0, _picocolors.white)((0, _picocolors.bold)("○")),
    error: (0, _picocolors.red)((0, _picocolors.bold)("⨯")),
    warn: (0, _picocolors.yellow)((0, _picocolors.bold)("⚠")),
    ready: "▲",
    info: (0, _picocolors.white)((0, _picocolors.bold)(" ")),
    event: (0, _picocolors.green)((0, _picocolors.bold)("✓")),
    trace: (0, _picocolors.magenta)((0, _picocolors.bold)("\xbb"))
};
const LOGGING_METHOD = {
    log: "log",
    warn: "warn",
    error: "error"
};
function prefixedLog(prefixType, ...message) {
    if ((message[0] === "" || message[0] === undefined) && message.length === 1) {
        message.shift();
    }
    const consoleMethod = prefixType in LOGGING_METHOD ? LOGGING_METHOD[prefixType] : "log";
    const prefix = prefixes[prefixType];
    // If there's no message, don't print the prefix but a new line
    if (message.length === 0) {
        console[consoleMethod]("");
    } else {
        console[consoleMethod](" " + prefix, ...message);
    }
}
function bootstrap(...message) {
    console.log(" ", ...message);
}
function wait(...message) {
    prefixedLog("wait", ...message);
}
function error(...message) {
    prefixedLog("error", ...message);
}
function warn(...message) {
    prefixedLog("warn", ...message);
}
function ready(...message) {
    prefixedLog("ready", ...message);
}
function info(...message) {
    prefixedLog("info", ...message);
}
function event(...message) {
    prefixedLog("event", ...message);
}
function trace(...message) {
    prefixedLog("trace", ...message);
}
const warnOnceMessages = new Set();
function warnOnce(...message) {
    if (!warnOnceMessages.has(message[0])) {
        warnOnceMessages.add(message.join(" "));
        warn(...message);
    }
}

//# sourceMappingURL=log.js.map

/***/ }),

/***/ 68570:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* eslint-disable import/no-extraneous-dependencies */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createProxy", ({
    enumerable: true,
    get: function() {
        return createProxy;
    }
}));
const _serveredge = __webpack_require__(51749);
const createProxy = _serveredge.createClientModuleProxy;

//# sourceMappingURL=module-proxy.js.map

/***/ }),

/***/ 50338:
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
    ACTION: function() {
        return ACTION;
    },
    FLIGHT_PARAMETERS: function() {
        return FLIGHT_PARAMETERS;
    },
    NEXT_DID_POSTPONE_HEADER: function() {
        return NEXT_DID_POSTPONE_HEADER;
    },
    NEXT_ROUTER_PREFETCH_HEADER: function() {
        return NEXT_ROUTER_PREFETCH_HEADER;
    },
    NEXT_ROUTER_STATE_TREE: function() {
        return NEXT_ROUTER_STATE_TREE;
    },
    NEXT_RSC_UNION_QUERY: function() {
        return NEXT_RSC_UNION_QUERY;
    },
    NEXT_URL: function() {
        return NEXT_URL;
    },
    RSC_CONTENT_TYPE_HEADER: function() {
        return RSC_CONTENT_TYPE_HEADER;
    },
    RSC_HEADER: function() {
        return RSC_HEADER;
    }
});
const RSC_HEADER = "RSC";
const ACTION = "Next-Action";
const NEXT_ROUTER_STATE_TREE = "Next-Router-State-Tree";
const NEXT_ROUTER_PREFETCH_HEADER = "Next-Router-Prefetch";
const NEXT_URL = "Next-Url";
const RSC_CONTENT_TYPE_HEADER = "text/x-component";
const FLIGHT_PARAMETERS = [
    [
        RSC_HEADER
    ],
    [
        NEXT_ROUTER_STATE_TREE
    ],
    [
        NEXT_ROUTER_PREFETCH_HEADER
    ]
];
const NEXT_RSC_UNION_QUERY = "_rsc";
const NEXT_DID_POSTPONE_HEADER = "x-nextjs-postponed";
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-headers.js.map


/***/ }),

/***/ 59943:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(68570);
module.exports = createProxy("C:\\Users\\94362\\Downloads\\vme\\node_modules\\next\\dist\\client\\components\\app-router.js");
 //# sourceMappingURL=app-router.js.map


/***/ }),

/***/ 53144:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(68570);
module.exports = createProxy("C:\\Users\\94362\\Downloads\\vme\\node_modules\\next\\dist\\client\\components\\client-page.js");
 //# sourceMappingURL=client-page.js.map


/***/ }),

/***/ 33085:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "DraftMode", ({
    enumerable: true,
    get: function() {
        return DraftMode;
    }
}));
const _staticgenerationasyncstorageexternal = __webpack_require__(45869);
const _dynamicrendering = __webpack_require__(6278);
class DraftMode {
    get isEnabled() {
        return this._provider.isEnabled;
    }
    enable() {
        const store = _staticgenerationasyncstorageexternal.staticGenerationAsyncStorage.getStore();
        if (store) {
            // We we have a store we want to track dynamic data access to ensure we
            // don't statically generate routes that manipulate draft mode.
            (0, _dynamicrendering.trackDynamicDataAccessed)(store, "draftMode().enable()");
        }
        return this._provider.enable();
    }
    disable() {
        const store = _staticgenerationasyncstorageexternal.staticGenerationAsyncStorage.getStore();
        if (store) {
            // We we have a store we want to track dynamic data access to ensure we
            // don't statically generate routes that manipulate draft mode.
            (0, _dynamicrendering.trackDynamicDataAccessed)(store, "draftMode().disable()");
        }
        return this._provider.disable();
    }
    constructor(provider){
        this._provider = provider;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=draft-mode.js.map


/***/ }),

/***/ 37922:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(68570);
module.exports = createProxy("C:\\Users\\94362\\Downloads\\vme\\node_modules\\next\\dist\\client\\components\\error-boundary.js");
 //# sourceMappingURL=error-boundary.js.map


/***/ }),

/***/ 88757:
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
    cookies: function() {
        return cookies;
    },
    draftMode: function() {
        return draftMode;
    },
    headers: function() {
        return headers;
    }
});
const _requestcookies = __webpack_require__(68996);
const _headers = __webpack_require__(53047);
const _cookies = __webpack_require__(92044);
const _actionasyncstorageexternal = __webpack_require__(72934);
const _draftmode = __webpack_require__(33085);
const _dynamicrendering = __webpack_require__(6278);
const _staticgenerationasyncstorageexternal = __webpack_require__(45869);
const _requestasyncstorageexternal = __webpack_require__(54580);
function headers() {
    const callingExpression = "headers";
    const staticGenerationStore = _staticgenerationasyncstorageexternal.staticGenerationAsyncStorage.getStore();
    if (staticGenerationStore) {
        if (staticGenerationStore.forceStatic) {
            // When we are forcing static we don't mark this as a Dynamic read and we return an empty headers object
            return _headers.HeadersAdapter.seal(new Headers({}));
        } else {
            // We will return a real headers object below so we mark this call as reading from a dynamic data source
            (0, _dynamicrendering.trackDynamicDataAccessed)(staticGenerationStore, callingExpression);
        }
    }
    return (0, _requestasyncstorageexternal.getExpectedRequestStore)(callingExpression).headers;
}
function cookies() {
    const callingExpression = "cookies";
    const staticGenerationStore = _staticgenerationasyncstorageexternal.staticGenerationAsyncStorage.getStore();
    if (staticGenerationStore) {
        if (staticGenerationStore.forceStatic) {
            // When we are forcing static we don't mark this as a Dynamic read and we return an empty cookies object
            return _requestcookies.RequestCookiesAdapter.seal(new _cookies.RequestCookies(new Headers({})));
        } else {
            // We will return a real headers object below so we mark this call as reading from a dynamic data source
            (0, _dynamicrendering.trackDynamicDataAccessed)(staticGenerationStore, callingExpression);
        }
    }
    const requestStore = (0, _requestasyncstorageexternal.getExpectedRequestStore)(callingExpression);
    const asyncActionStore = _actionasyncstorageexternal.actionAsyncStorage.getStore();
    if ((asyncActionStore == null ? void 0 : asyncActionStore.isAction) || (asyncActionStore == null ? void 0 : asyncActionStore.isAppRoute)) {
        // We can't conditionally return different types here based on the context.
        // To avoid confusion, we always return the readonly type here.
        return requestStore.mutableCookies;
    }
    return requestStore.cookies;
}
function draftMode() {
    const callingExpression = "draftMode";
    const requestStore = (0, _requestasyncstorageexternal.getExpectedRequestStore)(callingExpression);
    return new _draftmode.DraftMode(requestStore.draftMode);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=headers.js.map


/***/ }),

/***/ 44789:
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
    DynamicServerError: function() {
        return DynamicServerError;
    },
    isDynamicServerError: function() {
        return isDynamicServerError;
    }
});
const DYNAMIC_ERROR_CODE = "DYNAMIC_SERVER_USAGE";
class DynamicServerError extends Error {
    constructor(description){
        super("Dynamic server usage: " + description);
        this.description = description;
        this.digest = DYNAMIC_ERROR_CODE;
    }
}
function isDynamicServerError(err) {
    if (typeof err !== "object" || err === null || !("digest" in err) || typeof err.digest !== "string") {
        return false;
    }
    return err.digest === DYNAMIC_ERROR_CODE;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hooks-server-context.js.map


/***/ }),

/***/ 95106:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(68570);
module.exports = createProxy("C:\\Users\\94362\\Downloads\\vme\\node_modules\\next\\dist\\client\\components\\layout-router.js");
 //# sourceMappingURL=layout-router.js.map


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

/***/ 60525:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(68570);
module.exports = createProxy("C:\\Users\\94362\\Downloads\\vme\\node_modules\\next\\dist\\client\\components\\not-found-boundary.js");
 //# sourceMappingURL=not-found-boundary.js.map


/***/ }),

/***/ 35866:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return NotFound;
    }
}));
const _interop_require_default = __webpack_require__(53370);
const _jsxruntime = __webpack_require__(19510);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(71159));
const styles = {
    error: {
        // https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css#L38-L52
        fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        height: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    desc: {
        display: "inline-block"
    },
    h1: {
        display: "inline-block",
        margin: "0 20px 0 0",
        padding: "0 23px 0 0",
        fontSize: 24,
        fontWeight: 500,
        verticalAlign: "top",
        lineHeight: "49px"
    },
    h2: {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: "49px",
        margin: 0
    }
};
function NotFound() {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("title", {
                children: "404: This page could not be found."
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                style: styles.error,
                children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("style", {
                            dangerouslySetInnerHTML: {
                                /* Minified CSS from
                body { margin: 0; color: #000; background: #fff; }
                .next-error-h1 {
                  border-right: 1px solid rgba(0, 0, 0, .3);
                }

                @media (prefers-color-scheme: dark) {
                  body { color: #fff; background: #000; }
                  .next-error-h1 {
                    border-right: 1px solid rgba(255, 255, 255, .3);
                  }
                }
              */ __html: "body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"
                            }
                        }),
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("h1", {
                            className: "next-error-h1",
                            style: styles.h1,
                            children: "404"
                        }),
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                            style: styles.desc,
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)("h2", {
                                style: styles.h2,
                                children: "This page could not be found."
                            })
                        })
                    ]
                })
            })
        ]
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found-error.js.map


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

/***/ 84892:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(68570);
module.exports = createProxy("C:\\Users\\94362\\Downloads\\vme\\node_modules\\next\\dist\\client\\components\\render-from-template-context.js");
 //# sourceMappingURL=render-from-template-context.js.map


/***/ }),

/***/ 79181:
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
    createDynamicallyTrackedSearchParams: function() {
        return createDynamicallyTrackedSearchParams;
    },
    createUntrackedSearchParams: function() {
        return createUntrackedSearchParams;
    }
});
const _staticgenerationasyncstorageexternal = __webpack_require__(45869);
const _dynamicrendering = __webpack_require__(6278);
const _reflect = __webpack_require__(38238);
function createUntrackedSearchParams(searchParams) {
    const store = _staticgenerationasyncstorageexternal.staticGenerationAsyncStorage.getStore();
    if (store && store.forceStatic) {
        return {};
    } else {
        return searchParams;
    }
}
function createDynamicallyTrackedSearchParams(searchParams) {
    const store = _staticgenerationasyncstorageexternal.staticGenerationAsyncStorage.getStore();
    if (!store) {
        // we assume we are in a route handler or page render. just return the searchParams
        return searchParams;
    } else if (store.forceStatic) {
        // If we forced static we omit searchParams entirely. This is true both during SSR
        // and browser render because we need there to be parity between these environments
        return {};
    } else if (!store.isStaticGeneration && !store.dynamicShouldError) {
        // during dynamic renders we don't actually have to track anything so we just return
        // the searchParams directly. However if dynamic data access should error then we
        // still want to track access. This covers the case in Dev where all renders are dynamic
        // but we still want to error if you use a dynamic data source because it will fail the build
        // or revalidate if you do.
        return searchParams;
    } else {
        // We need to track dynamic access with a Proxy. We implement get, has, and ownKeys because
        // these can all be used to exfiltrate information about searchParams.
        return new Proxy({}, {
            get (target, prop, receiver) {
                if (typeof prop === "string") {
                    (0, _dynamicrendering.trackDynamicDataAccessed)(store, "searchParams." + prop);
                }
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            },
            has (target, prop) {
                if (typeof prop === "string") {
                    (0, _dynamicrendering.trackDynamicDataAccessed)(store, "searchParams." + prop);
                }
                return Reflect.has(target, prop);
            },
            ownKeys (target) {
                (0, _dynamicrendering.trackDynamicDataAccessed)(store, "searchParams");
                return Reflect.ownKeys(target);
            }
        });
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=search-params.js.map


/***/ }),

/***/ 24618:
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
    StaticGenBailoutError: function() {
        return StaticGenBailoutError;
    },
    isStaticGenBailoutError: function() {
        return isStaticGenBailoutError;
    }
});
const NEXT_STATIC_GEN_BAILOUT = "NEXT_STATIC_GEN_BAILOUT";
class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args);
        this.code = NEXT_STATIC_GEN_BAILOUT;
    }
}
function isStaticGenBailoutError(error) {
    if (typeof error !== "object" || error === null || !("code" in error)) {
        return false;
    }
    return error.code === NEXT_STATIC_GEN_BAILOUT;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-bailout.js.map


/***/ }),

/***/ 10221:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(68570);
module.exports = createProxy("C:\\Users\\94362\\Downloads\\vme\\node_modules\\next\\dist\\client\\image-component.js");
 //# sourceMappingURL=image-component.js.map


/***/ }),

/***/ 670:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(68570);
module.exports = createProxy("C:\\Users\\94362\\Downloads\\vme\\node_modules\\next\\dist\\client\\link.js");
 //# sourceMappingURL=link.js.map


/***/ }),

/***/ 36637:
/***/ ((module) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  RequestCookies: () => RequestCookies,
  ResponseCookies: () => ResponseCookies,
  parseCookie: () => parseCookie,
  parseSetCookie: () => parseSetCookie,
  stringifyCookie: () => stringifyCookie
});
module.exports = __toCommonJS(src_exports);

// src/serialize.ts
function stringifyCookie(c) {
  var _a;
  const attrs = [
    "path" in c && c.path && `Path=${c.path}`,
    "expires" in c && (c.expires || c.expires === 0) && `Expires=${(typeof c.expires === "number" ? new Date(c.expires) : c.expires).toUTCString()}`,
    "maxAge" in c && typeof c.maxAge === "number" && `Max-Age=${c.maxAge}`,
    "domain" in c && c.domain && `Domain=${c.domain}`,
    "secure" in c && c.secure && "Secure",
    "httpOnly" in c && c.httpOnly && "HttpOnly",
    "sameSite" in c && c.sameSite && `SameSite=${c.sameSite}`,
    "partitioned" in c && c.partitioned && "Partitioned",
    "priority" in c && c.priority && `Priority=${c.priority}`
  ].filter(Boolean);
  const stringified = `${c.name}=${encodeURIComponent((_a = c.value) != null ? _a : "")}`;
  return attrs.length === 0 ? stringified : `${stringified}; ${attrs.join("; ")}`;
}
function parseCookie(cookie) {
  const map = /* @__PURE__ */ new Map();
  for (const pair of cookie.split(/; */)) {
    if (!pair)
      continue;
    const splitAt = pair.indexOf("=");
    if (splitAt === -1) {
      map.set(pair, "true");
      continue;
    }
    const [key, value] = [pair.slice(0, splitAt), pair.slice(splitAt + 1)];
    try {
      map.set(key, decodeURIComponent(value != null ? value : "true"));
    } catch {
    }
  }
  return map;
}
function parseSetCookie(setCookie) {
  if (!setCookie) {
    return void 0;
  }
  const [[name, value], ...attributes] = parseCookie(setCookie);
  const {
    domain,
    expires,
    httponly,
    maxage,
    path,
    samesite,
    secure,
    partitioned,
    priority
  } = Object.fromEntries(
    attributes.map(([key, value2]) => [key.toLowerCase(), value2])
  );
  const cookie = {
    name,
    value: decodeURIComponent(value),
    domain,
    ...expires && { expires: new Date(expires) },
    ...httponly && { httpOnly: true },
    ...typeof maxage === "string" && { maxAge: Number(maxage) },
    path,
    ...samesite && { sameSite: parseSameSite(samesite) },
    ...secure && { secure: true },
    ...priority && { priority: parsePriority(priority) },
    ...partitioned && { partitioned: true }
  };
  return compact(cookie);
}
function compact(t) {
  const newT = {};
  for (const key in t) {
    if (t[key]) {
      newT[key] = t[key];
    }
  }
  return newT;
}
var SAME_SITE = ["strict", "lax", "none"];
function parseSameSite(string) {
  string = string.toLowerCase();
  return SAME_SITE.includes(string) ? string : void 0;
}
var PRIORITY = ["low", "medium", "high"];
function parsePriority(string) {
  string = string.toLowerCase();
  return PRIORITY.includes(string) ? string : void 0;
}
function splitCookiesString(cookiesString) {
  if (!cookiesString)
    return [];
  var cookiesStrings = [];
  var pos = 0;
  var start;
  var ch;
  var lastComma;
  var nextStart;
  var cookiesSeparatorFound;
  function skipWhitespace() {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  }
  function notSpecialChar() {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  }
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.substring(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
    }
  }
  return cookiesStrings;
}

// src/request-cookies.ts
var RequestCookies = class {
  constructor(requestHeaders) {
    /** @internal */
    this._parsed = /* @__PURE__ */ new Map();
    this._headers = requestHeaders;
    const header = requestHeaders.get("cookie");
    if (header) {
      const parsed = parseCookie(header);
      for (const [name, value] of parsed) {
        this._parsed.set(name, { name, value });
      }
    }
  }
  [Symbol.iterator]() {
    return this._parsed[Symbol.iterator]();
  }
  /**
   * The amount of cookies received from the client
   */
  get size() {
    return this._parsed.size;
  }
  get(...args) {
    const name = typeof args[0] === "string" ? args[0] : args[0].name;
    return this._parsed.get(name);
  }
  getAll(...args) {
    var _a;
    const all = Array.from(this._parsed);
    if (!args.length) {
      return all.map(([_, value]) => value);
    }
    const name = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
    return all.filter(([n]) => n === name).map(([_, value]) => value);
  }
  has(name) {
    return this._parsed.has(name);
  }
  set(...args) {
    const [name, value] = args.length === 1 ? [args[0].name, args[0].value] : args;
    const map = this._parsed;
    map.set(name, { name, value });
    this._headers.set(
      "cookie",
      Array.from(map).map(([_, value2]) => stringifyCookie(value2)).join("; ")
    );
    return this;
  }
  /**
   * Delete the cookies matching the passed name or names in the request.
   */
  delete(names) {
    const map = this._parsed;
    const result = !Array.isArray(names) ? map.delete(names) : names.map((name) => map.delete(name));
    this._headers.set(
      "cookie",
      Array.from(map).map(([_, value]) => stringifyCookie(value)).join("; ")
    );
    return result;
  }
  /**
   * Delete all the cookies in the cookies in the request.
   */
  clear() {
    this.delete(Array.from(this._parsed.keys()));
    return this;
  }
  /**
   * Format the cookies in the request as a string for logging
   */
  [Symbol.for("edge-runtime.inspect.custom")]() {
    return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
  }
  toString() {
    return [...this._parsed.values()].map((v) => `${v.name}=${encodeURIComponent(v.value)}`).join("; ");
  }
};

// src/response-cookies.ts
var ResponseCookies = class {
  constructor(responseHeaders) {
    /** @internal */
    this._parsed = /* @__PURE__ */ new Map();
    var _a, _b, _c;
    this._headers = responseHeaders;
    const setCookie = (_c = (_b = (_a = responseHeaders.getSetCookie) == null ? void 0 : _a.call(responseHeaders)) != null ? _b : responseHeaders.get("set-cookie")) != null ? _c : [];
    const cookieStrings = Array.isArray(setCookie) ? setCookie : splitCookiesString(setCookie);
    for (const cookieString of cookieStrings) {
      const parsed = parseSetCookie(cookieString);
      if (parsed)
        this._parsed.set(parsed.name, parsed);
    }
  }
  /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-get CookieStore#get} without the Promise.
   */
  get(...args) {
    const key = typeof args[0] === "string" ? args[0] : args[0].name;
    return this._parsed.get(key);
  }
  /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-getAll CookieStore#getAll} without the Promise.
   */
  getAll(...args) {
    var _a;
    const all = Array.from(this._parsed.values());
    if (!args.length) {
      return all;
    }
    const key = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
    return all.filter((c) => c.name === key);
  }
  has(name) {
    return this._parsed.has(name);
  }
  /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-set CookieStore#set} without the Promise.
   */
  set(...args) {
    const [name, value, cookie] = args.length === 1 ? [args[0].name, args[0].value, args[0]] : args;
    const map = this._parsed;
    map.set(name, normalizeCookie({ name, value, ...cookie }));
    replace(map, this._headers);
    return this;
  }
  /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-delete CookieStore#delete} without the Promise.
   */
  delete(...args) {
    const [name, path, domain] = typeof args[0] === "string" ? [args[0]] : [args[0].name, args[0].path, args[0].domain];
    return this.set({ name, path, domain, value: "", expires: /* @__PURE__ */ new Date(0) });
  }
  [Symbol.for("edge-runtime.inspect.custom")]() {
    return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
  }
  toString() {
    return [...this._parsed.values()].map(stringifyCookie).join("; ");
  }
};
function replace(bag, headers) {
  headers.delete("set-cookie");
  for (const [, value] of bag) {
    const serialized = stringifyCookie(value);
    headers.append("set-cookie", serialized);
  }
}
function normalizeCookie(cookie = { name: "", value: "" }) {
  if (typeof cookie.expires === "number") {
    cookie.expires = new Date(cookie.expires);
  }
  if (cookie.maxAge) {
    cookie.expires = new Date(Date.now() + cookie.maxAge * 1e3);
  }
  if (cookie.path === null || cookie.path === void 0) {
    cookie.path = "/";
  }
  return cookie;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);


/***/ }),

/***/ 79925:
/***/ ((module) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  RequestCookies: () => RequestCookies,
  ResponseCookies: () => ResponseCookies,
  parseCookie: () => parseCookie,
  parseSetCookie: () => parseSetCookie,
  stringifyCookie: () => stringifyCookie
});
module.exports = __toCommonJS(src_exports);

// src/serialize.ts
function stringifyCookie(c) {
  var _a;
  const attrs = [
    "path" in c && c.path && `Path=${c.path}`,
    "expires" in c && (c.expires || c.expires === 0) && `Expires=${(typeof c.expires === "number" ? new Date(c.expires) : c.expires).toUTCString()}`,
    "maxAge" in c && typeof c.maxAge === "number" && `Max-Age=${c.maxAge}`,
    "domain" in c && c.domain && `Domain=${c.domain}`,
    "secure" in c && c.secure && "Secure",
    "httpOnly" in c && c.httpOnly && "HttpOnly",
    "sameSite" in c && c.sameSite && `SameSite=${c.sameSite}`,
    "partitioned" in c && c.partitioned && "Partitioned",
    "priority" in c && c.priority && `Priority=${c.priority}`
  ].filter(Boolean);
  const stringified = `${c.name}=${encodeURIComponent((_a = c.value) != null ? _a : "")}`;
  return attrs.length === 0 ? stringified : `${stringified}; ${attrs.join("; ")}`;
}
function parseCookie(cookie) {
  const map = /* @__PURE__ */ new Map();
  for (const pair of cookie.split(/; */)) {
    if (!pair)
      continue;
    const splitAt = pair.indexOf("=");
    if (splitAt === -1) {
      map.set(pair, "true");
      continue;
    }
    const [key, value] = [pair.slice(0, splitAt), pair.slice(splitAt + 1)];
    try {
      map.set(key, decodeURIComponent(value != null ? value : "true"));
    } catch {
    }
  }
  return map;
}
function parseSetCookie(setCookie) {
  if (!setCookie) {
    return void 0;
  }
  const [[name, value], ...attributes] = parseCookie(setCookie);
  const {
    domain,
    expires,
    httponly,
    maxage,
    path,
    samesite,
    secure,
    partitioned,
    priority
  } = Object.fromEntries(
    attributes.map(([key, value2]) => [key.toLowerCase(), value2])
  );
  const cookie = {
    name,
    value: decodeURIComponent(value),
    domain,
    ...expires && { expires: new Date(expires) },
    ...httponly && { httpOnly: true },
    ...typeof maxage === "string" && { maxAge: Number(maxage) },
    path,
    ...samesite && { sameSite: parseSameSite(samesite) },
    ...secure && { secure: true },
    ...priority && { priority: parsePriority(priority) },
    ...partitioned && { partitioned: true }
  };
  return compact(cookie);
}
function compact(t) {
  const newT = {};
  for (const key in t) {
    if (t[key]) {
      newT[key] = t[key];
    }
  }
  return newT;
}
var SAME_SITE = ["strict", "lax", "none"];
function parseSameSite(string) {
  string = string.toLowerCase();
  return SAME_SITE.includes(string) ? string : void 0;
}
var PRIORITY = ["low", "medium", "high"];
function parsePriority(string) {
  string = string.toLowerCase();
  return PRIORITY.includes(string) ? string : void 0;
}
function splitCookiesString(cookiesString) {
  if (!cookiesString)
    return [];
  var cookiesStrings = [];
  var pos = 0;
  var start;
  var ch;
  var lastComma;
  var nextStart;
  var cookiesSeparatorFound;
  function skipWhitespace() {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  }
  function notSpecialChar() {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  }
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.substring(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
    }
  }
  return cookiesStrings;
}

// src/request-cookies.ts
var RequestCookies = class {
  constructor(requestHeaders) {
    /** @internal */
    this._parsed = /* @__PURE__ */ new Map();
    this._headers = requestHeaders;
    const header = requestHeaders.get("cookie");
    if (header) {
      const parsed = parseCookie(header);
      for (const [name, value] of parsed) {
        this._parsed.set(name, { name, value });
      }
    }
  }
  [Symbol.iterator]() {
    return this._parsed[Symbol.iterator]();
  }
  /**
   * The amount of cookies received from the client
   */
  get size() {
    return this._parsed.size;
  }
  get(...args) {
    const name = typeof args[0] === "string" ? args[0] : args[0].name;
    return this._parsed.get(name);
  }
  getAll(...args) {
    var _a;
    const all = Array.from(this._parsed);
    if (!args.length) {
      return all.map(([_, value]) => value);
    }
    const name = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
    return all.filter(([n]) => n === name).map(([_, value]) => value);
  }
  has(name) {
    return this._parsed.has(name);
  }
  set(...args) {
    const [name, value] = args.length === 1 ? [args[0].name, args[0].value] : args;
    const map = this._parsed;
    map.set(name, { name, value });
    this._headers.set(
      "cookie",
      Array.from(map).map(([_, value2]) => stringifyCookie(value2)).join("; ")
    );
    return this;
  }
  /**
   * Delete the cookies matching the passed name or names in the request.
   */
  delete(names) {
    const map = this._parsed;
    const result = !Array.isArray(names) ? map.delete(names) : names.map((name) => map.delete(name));
    this._headers.set(
      "cookie",
      Array.from(map).map(([_, value]) => stringifyCookie(value)).join("; ")
    );
    return result;
  }
  /**
   * Delete all the cookies in the cookies in the request.
   */
  clear() {
    this.delete(Array.from(this._parsed.keys()));
    return this;
  }
  /**
   * Format the cookies in the request as a string for logging
   */
  [Symbol.for("edge-runtime.inspect.custom")]() {
    return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
  }
  toString() {
    return [...this._parsed.values()].map((v) => `${v.name}=${encodeURIComponent(v.value)}`).join("; ");
  }
};

// src/response-cookies.ts
var ResponseCookies = class {
  constructor(responseHeaders) {
    /** @internal */
    this._parsed = /* @__PURE__ */ new Map();
    var _a, _b, _c;
    this._headers = responseHeaders;
    const setCookie = (_c = (_b = (_a = responseHeaders.getSetCookie) == null ? void 0 : _a.call(responseHeaders)) != null ? _b : responseHeaders.get("set-cookie")) != null ? _c : [];
    const cookieStrings = Array.isArray(setCookie) ? setCookie : splitCookiesString(setCookie);
    for (const cookieString of cookieStrings) {
      const parsed = parseSetCookie(cookieString);
      if (parsed)
        this._parsed.set(parsed.name, parsed);
    }
  }
  /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-get CookieStore#get} without the Promise.
   */
  get(...args) {
    const key = typeof args[0] === "string" ? args[0] : args[0].name;
    return this._parsed.get(key);
  }
  /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-getAll CookieStore#getAll} without the Promise.
   */
  getAll(...args) {
    var _a;
    const all = Array.from(this._parsed.values());
    if (!args.length) {
      return all;
    }
    const key = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
    return all.filter((c) => c.name === key);
  }
  has(name) {
    return this._parsed.has(name);
  }
  /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-set CookieStore#set} without the Promise.
   */
  set(...args) {
    const [name, value, cookie] = args.length === 1 ? [args[0].name, args[0].value, args[0]] : args;
    const map = this._parsed;
    map.set(name, normalizeCookie({ name, value, ...cookie }));
    replace(map, this._headers);
    return this;
  }
  /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-delete CookieStore#delete} without the Promise.
   */
  delete(...args) {
    const [name, path, domain] = typeof args[0] === "string" ? [args[0]] : [args[0].name, args[0].path, args[0].domain];
    return this.set({ name, path, domain, value: "", expires: /* @__PURE__ */ new Date(0) });
  }
  [Symbol.for("edge-runtime.inspect.custom")]() {
    return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
  }
  toString() {
    return [...this._parsed.values()].map(stringifyCookie).join("; ");
  }
};
function replace(bag, headers) {
  headers.delete("set-cookie");
  for (const [, value] of bag) {
    const serialized = stringifyCookie(value);
    headers.append("set-cookie", serialized);
  }
}
function normalizeCookie(cookie = { name: "", value: "" }) {
  if (typeof cookie.expires === "number") {
    cookie.expires = new Date(cookie.expires);
  }
  if (cookie.maxAge) {
    cookie.expires = new Date(Date.now() + cookie.maxAge * 1e3);
  }
  if (cookie.path === null || cookie.path === void 0) {
    cookie.path = "/";
  }
  return cookie;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);


/***/ }),

/***/ 27482:
/***/ ((module) => {

(()=>{"use strict";var e={491:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.ContextAPI=void 0;const n=r(223);const a=r(172);const o=r(930);const i="context";const c=new n.NoopContextManager;class ContextAPI{constructor(){}static getInstance(){if(!this._instance){this._instance=new ContextAPI}return this._instance}setGlobalContextManager(e){return(0,a.registerGlobal)(i,e,o.DiagAPI.instance())}active(){return this._getContextManager().active()}with(e,t,r,...n){return this._getContextManager().with(e,t,r,...n)}bind(e,t){return this._getContextManager().bind(e,t)}_getContextManager(){return(0,a.getGlobal)(i)||c}disable(){this._getContextManager().disable();(0,a.unregisterGlobal)(i,o.DiagAPI.instance())}}t.ContextAPI=ContextAPI},930:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.DiagAPI=void 0;const n=r(56);const a=r(912);const o=r(957);const i=r(172);const c="diag";class DiagAPI{constructor(){function _logProxy(e){return function(...t){const r=(0,i.getGlobal)("diag");if(!r)return;return r[e](...t)}}const e=this;const setLogger=(t,r={logLevel:o.DiagLogLevel.INFO})=>{var n,c,s;if(t===e){const t=new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");e.error((n=t.stack)!==null&&n!==void 0?n:t.message);return false}if(typeof r==="number"){r={logLevel:r}}const u=(0,i.getGlobal)("diag");const l=(0,a.createLogLevelDiagLogger)((c=r.logLevel)!==null&&c!==void 0?c:o.DiagLogLevel.INFO,t);if(u&&!r.suppressOverrideMessage){const e=(s=(new Error).stack)!==null&&s!==void 0?s:"<failed to generate stacktrace>";u.warn(`Current logger will be overwritten from ${e}`);l.warn(`Current logger will overwrite one already registered from ${e}`)}return(0,i.registerGlobal)("diag",l,e,true)};e.setLogger=setLogger;e.disable=()=>{(0,i.unregisterGlobal)(c,e)};e.createComponentLogger=e=>new n.DiagComponentLogger(e);e.verbose=_logProxy("verbose");e.debug=_logProxy("debug");e.info=_logProxy("info");e.warn=_logProxy("warn");e.error=_logProxy("error")}static instance(){if(!this._instance){this._instance=new DiagAPI}return this._instance}}t.DiagAPI=DiagAPI},653:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.MetricsAPI=void 0;const n=r(660);const a=r(172);const o=r(930);const i="metrics";class MetricsAPI{constructor(){}static getInstance(){if(!this._instance){this._instance=new MetricsAPI}return this._instance}setGlobalMeterProvider(e){return(0,a.registerGlobal)(i,e,o.DiagAPI.instance())}getMeterProvider(){return(0,a.getGlobal)(i)||n.NOOP_METER_PROVIDER}getMeter(e,t,r){return this.getMeterProvider().getMeter(e,t,r)}disable(){(0,a.unregisterGlobal)(i,o.DiagAPI.instance())}}t.MetricsAPI=MetricsAPI},181:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.PropagationAPI=void 0;const n=r(172);const a=r(874);const o=r(194);const i=r(277);const c=r(369);const s=r(930);const u="propagation";const l=new a.NoopTextMapPropagator;class PropagationAPI{constructor(){this.createBaggage=c.createBaggage;this.getBaggage=i.getBaggage;this.getActiveBaggage=i.getActiveBaggage;this.setBaggage=i.setBaggage;this.deleteBaggage=i.deleteBaggage}static getInstance(){if(!this._instance){this._instance=new PropagationAPI}return this._instance}setGlobalPropagator(e){return(0,n.registerGlobal)(u,e,s.DiagAPI.instance())}inject(e,t,r=o.defaultTextMapSetter){return this._getGlobalPropagator().inject(e,t,r)}extract(e,t,r=o.defaultTextMapGetter){return this._getGlobalPropagator().extract(e,t,r)}fields(){return this._getGlobalPropagator().fields()}disable(){(0,n.unregisterGlobal)(u,s.DiagAPI.instance())}_getGlobalPropagator(){return(0,n.getGlobal)(u)||l}}t.PropagationAPI=PropagationAPI},997:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.TraceAPI=void 0;const n=r(172);const a=r(846);const o=r(139);const i=r(607);const c=r(930);const s="trace";class TraceAPI{constructor(){this._proxyTracerProvider=new a.ProxyTracerProvider;this.wrapSpanContext=o.wrapSpanContext;this.isSpanContextValid=o.isSpanContextValid;this.deleteSpan=i.deleteSpan;this.getSpan=i.getSpan;this.getActiveSpan=i.getActiveSpan;this.getSpanContext=i.getSpanContext;this.setSpan=i.setSpan;this.setSpanContext=i.setSpanContext}static getInstance(){if(!this._instance){this._instance=new TraceAPI}return this._instance}setGlobalTracerProvider(e){const t=(0,n.registerGlobal)(s,this._proxyTracerProvider,c.DiagAPI.instance());if(t){this._proxyTracerProvider.setDelegate(e)}return t}getTracerProvider(){return(0,n.getGlobal)(s)||this._proxyTracerProvider}getTracer(e,t){return this.getTracerProvider().getTracer(e,t)}disable(){(0,n.unregisterGlobal)(s,c.DiagAPI.instance());this._proxyTracerProvider=new a.ProxyTracerProvider}}t.TraceAPI=TraceAPI},277:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.deleteBaggage=t.setBaggage=t.getActiveBaggage=t.getBaggage=void 0;const n=r(491);const a=r(780);const o=(0,a.createContextKey)("OpenTelemetry Baggage Key");function getBaggage(e){return e.getValue(o)||undefined}t.getBaggage=getBaggage;function getActiveBaggage(){return getBaggage(n.ContextAPI.getInstance().active())}t.getActiveBaggage=getActiveBaggage;function setBaggage(e,t){return e.setValue(o,t)}t.setBaggage=setBaggage;function deleteBaggage(e){return e.deleteValue(o)}t.deleteBaggage=deleteBaggage},993:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});t.BaggageImpl=void 0;class BaggageImpl{constructor(e){this._entries=e?new Map(e):new Map}getEntry(e){const t=this._entries.get(e);if(!t){return undefined}return Object.assign({},t)}getAllEntries(){return Array.from(this._entries.entries()).map((([e,t])=>[e,t]))}setEntry(e,t){const r=new BaggageImpl(this._entries);r._entries.set(e,t);return r}removeEntry(e){const t=new BaggageImpl(this._entries);t._entries.delete(e);return t}removeEntries(...e){const t=new BaggageImpl(this._entries);for(const r of e){t._entries.delete(r)}return t}clear(){return new BaggageImpl}}t.BaggageImpl=BaggageImpl},830:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});t.baggageEntryMetadataSymbol=void 0;t.baggageEntryMetadataSymbol=Symbol("BaggageEntryMetadata")},369:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.baggageEntryMetadataFromString=t.createBaggage=void 0;const n=r(930);const a=r(993);const o=r(830);const i=n.DiagAPI.instance();function createBaggage(e={}){return new a.BaggageImpl(new Map(Object.entries(e)))}t.createBaggage=createBaggage;function baggageEntryMetadataFromString(e){if(typeof e!=="string"){i.error(`Cannot create baggage metadata from unknown type: ${typeof e}`);e=""}return{__TYPE__:o.baggageEntryMetadataSymbol,toString(){return e}}}t.baggageEntryMetadataFromString=baggageEntryMetadataFromString},67:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.context=void 0;const n=r(491);t.context=n.ContextAPI.getInstance()},223:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.NoopContextManager=void 0;const n=r(780);class NoopContextManager{active(){return n.ROOT_CONTEXT}with(e,t,r,...n){return t.call(r,...n)}bind(e,t){return t}enable(){return this}disable(){return this}}t.NoopContextManager=NoopContextManager},780:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});t.ROOT_CONTEXT=t.createContextKey=void 0;function createContextKey(e){return Symbol.for(e)}t.createContextKey=createContextKey;class BaseContext{constructor(e){const t=this;t._currentContext=e?new Map(e):new Map;t.getValue=e=>t._currentContext.get(e);t.setValue=(e,r)=>{const n=new BaseContext(t._currentContext);n._currentContext.set(e,r);return n};t.deleteValue=e=>{const r=new BaseContext(t._currentContext);r._currentContext.delete(e);return r}}}t.ROOT_CONTEXT=new BaseContext},506:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.diag=void 0;const n=r(930);t.diag=n.DiagAPI.instance()},56:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.DiagComponentLogger=void 0;const n=r(172);class DiagComponentLogger{constructor(e){this._namespace=e.namespace||"DiagComponentLogger"}debug(...e){return logProxy("debug",this._namespace,e)}error(...e){return logProxy("error",this._namespace,e)}info(...e){return logProxy("info",this._namespace,e)}warn(...e){return logProxy("warn",this._namespace,e)}verbose(...e){return logProxy("verbose",this._namespace,e)}}t.DiagComponentLogger=DiagComponentLogger;function logProxy(e,t,r){const a=(0,n.getGlobal)("diag");if(!a){return}r.unshift(t);return a[e](...r)}},972:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});t.DiagConsoleLogger=void 0;const r=[{n:"error",c:"error"},{n:"warn",c:"warn"},{n:"info",c:"info"},{n:"debug",c:"debug"},{n:"verbose",c:"trace"}];class DiagConsoleLogger{constructor(){function _consoleFunc(e){return function(...t){if(console){let r=console[e];if(typeof r!=="function"){r=console.log}if(typeof r==="function"){return r.apply(console,t)}}}}for(let e=0;e<r.length;e++){this[r[e].n]=_consoleFunc(r[e].c)}}}t.DiagConsoleLogger=DiagConsoleLogger},912:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.createLogLevelDiagLogger=void 0;const n=r(957);function createLogLevelDiagLogger(e,t){if(e<n.DiagLogLevel.NONE){e=n.DiagLogLevel.NONE}else if(e>n.DiagLogLevel.ALL){e=n.DiagLogLevel.ALL}t=t||{};function _filterFunc(r,n){const a=t[r];if(typeof a==="function"&&e>=n){return a.bind(t)}return function(){}}return{error:_filterFunc("error",n.DiagLogLevel.ERROR),warn:_filterFunc("warn",n.DiagLogLevel.WARN),info:_filterFunc("info",n.DiagLogLevel.INFO),debug:_filterFunc("debug",n.DiagLogLevel.DEBUG),verbose:_filterFunc("verbose",n.DiagLogLevel.VERBOSE)}}t.createLogLevelDiagLogger=createLogLevelDiagLogger},957:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});t.DiagLogLevel=void 0;var r;(function(e){e[e["NONE"]=0]="NONE";e[e["ERROR"]=30]="ERROR";e[e["WARN"]=50]="WARN";e[e["INFO"]=60]="INFO";e[e["DEBUG"]=70]="DEBUG";e[e["VERBOSE"]=80]="VERBOSE";e[e["ALL"]=9999]="ALL"})(r=t.DiagLogLevel||(t.DiagLogLevel={}))},172:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.unregisterGlobal=t.getGlobal=t.registerGlobal=void 0;const n=r(200);const a=r(521);const o=r(130);const i=a.VERSION.split(".")[0];const c=Symbol.for(`opentelemetry.js.api.${i}`);const s=n._globalThis;function registerGlobal(e,t,r,n=false){var o;const i=s[c]=(o=s[c])!==null&&o!==void 0?o:{version:a.VERSION};if(!n&&i[e]){const t=new Error(`@opentelemetry/api: Attempted duplicate registration of API: ${e}`);r.error(t.stack||t.message);return false}if(i.version!==a.VERSION){const t=new Error(`@opentelemetry/api: Registration of version v${i.version} for ${e} does not match previously registered API v${a.VERSION}`);r.error(t.stack||t.message);return false}i[e]=t;r.debug(`@opentelemetry/api: Registered a global for ${e} v${a.VERSION}.`);return true}t.registerGlobal=registerGlobal;function getGlobal(e){var t,r;const n=(t=s[c])===null||t===void 0?void 0:t.version;if(!n||!(0,o.isCompatible)(n)){return}return(r=s[c])===null||r===void 0?void 0:r[e]}t.getGlobal=getGlobal;function unregisterGlobal(e,t){t.debug(`@opentelemetry/api: Unregistering a global for ${e} v${a.VERSION}.`);const r=s[c];if(r){delete r[e]}}t.unregisterGlobal=unregisterGlobal},130:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.isCompatible=t._makeCompatibilityCheck=void 0;const n=r(521);const a=/^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;function _makeCompatibilityCheck(e){const t=new Set([e]);const r=new Set;const n=e.match(a);if(!n){return()=>false}const o={major:+n[1],minor:+n[2],patch:+n[3],prerelease:n[4]};if(o.prerelease!=null){return function isExactmatch(t){return t===e}}function _reject(e){r.add(e);return false}function _accept(e){t.add(e);return true}return function isCompatible(e){if(t.has(e)){return true}if(r.has(e)){return false}const n=e.match(a);if(!n){return _reject(e)}const i={major:+n[1],minor:+n[2],patch:+n[3],prerelease:n[4]};if(i.prerelease!=null){return _reject(e)}if(o.major!==i.major){return _reject(e)}if(o.major===0){if(o.minor===i.minor&&o.patch<=i.patch){return _accept(e)}return _reject(e)}if(o.minor<=i.minor){return _accept(e)}return _reject(e)}}t._makeCompatibilityCheck=_makeCompatibilityCheck;t.isCompatible=_makeCompatibilityCheck(n.VERSION)},886:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.metrics=void 0;const n=r(653);t.metrics=n.MetricsAPI.getInstance()},901:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});t.ValueType=void 0;var r;(function(e){e[e["INT"]=0]="INT";e[e["DOUBLE"]=1]="DOUBLE"})(r=t.ValueType||(t.ValueType={}))},102:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});t.createNoopMeter=t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC=t.NOOP_OBSERVABLE_GAUGE_METRIC=t.NOOP_OBSERVABLE_COUNTER_METRIC=t.NOOP_UP_DOWN_COUNTER_METRIC=t.NOOP_HISTOGRAM_METRIC=t.NOOP_COUNTER_METRIC=t.NOOP_METER=t.NoopObservableUpDownCounterMetric=t.NoopObservableGaugeMetric=t.NoopObservableCounterMetric=t.NoopObservableMetric=t.NoopHistogramMetric=t.NoopUpDownCounterMetric=t.NoopCounterMetric=t.NoopMetric=t.NoopMeter=void 0;class NoopMeter{constructor(){}createHistogram(e,r){return t.NOOP_HISTOGRAM_METRIC}createCounter(e,r){return t.NOOP_COUNTER_METRIC}createUpDownCounter(e,r){return t.NOOP_UP_DOWN_COUNTER_METRIC}createObservableGauge(e,r){return t.NOOP_OBSERVABLE_GAUGE_METRIC}createObservableCounter(e,r){return t.NOOP_OBSERVABLE_COUNTER_METRIC}createObservableUpDownCounter(e,r){return t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC}addBatchObservableCallback(e,t){}removeBatchObservableCallback(e){}}t.NoopMeter=NoopMeter;class NoopMetric{}t.NoopMetric=NoopMetric;class NoopCounterMetric extends NoopMetric{add(e,t){}}t.NoopCounterMetric=NoopCounterMetric;class NoopUpDownCounterMetric extends NoopMetric{add(e,t){}}t.NoopUpDownCounterMetric=NoopUpDownCounterMetric;class NoopHistogramMetric extends NoopMetric{record(e,t){}}t.NoopHistogramMetric=NoopHistogramMetric;class NoopObservableMetric{addCallback(e){}removeCallback(e){}}t.NoopObservableMetric=NoopObservableMetric;class NoopObservableCounterMetric extends NoopObservableMetric{}t.NoopObservableCounterMetric=NoopObservableCounterMetric;class NoopObservableGaugeMetric extends NoopObservableMetric{}t.NoopObservableGaugeMetric=NoopObservableGaugeMetric;class NoopObservableUpDownCounterMetric extends NoopObservableMetric{}t.NoopObservableUpDownCounterMetric=NoopObservableUpDownCounterMetric;t.NOOP_METER=new NoopMeter;t.NOOP_COUNTER_METRIC=new NoopCounterMetric;t.NOOP_HISTOGRAM_METRIC=new NoopHistogramMetric;t.NOOP_UP_DOWN_COUNTER_METRIC=new NoopUpDownCounterMetric;t.NOOP_OBSERVABLE_COUNTER_METRIC=new NoopObservableCounterMetric;t.NOOP_OBSERVABLE_GAUGE_METRIC=new NoopObservableGaugeMetric;t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC=new NoopObservableUpDownCounterMetric;function createNoopMeter(){return t.NOOP_METER}t.createNoopMeter=createNoopMeter},660:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.NOOP_METER_PROVIDER=t.NoopMeterProvider=void 0;const n=r(102);class NoopMeterProvider{getMeter(e,t,r){return n.NOOP_METER}}t.NoopMeterProvider=NoopMeterProvider;t.NOOP_METER_PROVIDER=new NoopMeterProvider},200:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){if(n===undefined)n=r;Object.defineProperty(e,n,{enumerable:true,get:function(){return t[r]}})}:function(e,t,r,n){if(n===undefined)n=r;e[n]=t[r]});var a=this&&this.__exportStar||function(e,t){for(var r in e)if(r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r))n(t,e,r)};Object.defineProperty(t,"__esModule",{value:true});a(r(46),t)},651:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});t._globalThis=void 0;t._globalThis=typeof globalThis==="object"?globalThis:global},46:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){if(n===undefined)n=r;Object.defineProperty(e,n,{enumerable:true,get:function(){return t[r]}})}:function(e,t,r,n){if(n===undefined)n=r;e[n]=t[r]});var a=this&&this.__exportStar||function(e,t){for(var r in e)if(r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r))n(t,e,r)};Object.defineProperty(t,"__esModule",{value:true});a(r(651),t)},939:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.propagation=void 0;const n=r(181);t.propagation=n.PropagationAPI.getInstance()},874:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});t.NoopTextMapPropagator=void 0;class NoopTextMapPropagator{inject(e,t){}extract(e,t){return e}fields(){return[]}}t.NoopTextMapPropagator=NoopTextMapPropagator},194:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});t.defaultTextMapSetter=t.defaultTextMapGetter=void 0;t.defaultTextMapGetter={get(e,t){if(e==null){return undefined}return e[t]},keys(e){if(e==null){return[]}return Object.keys(e)}};t.defaultTextMapSetter={set(e,t,r){if(e==null){return}e[t]=r}}},845:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.trace=void 0;const n=r(997);t.trace=n.TraceAPI.getInstance()},403:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.NonRecordingSpan=void 0;const n=r(476);class NonRecordingSpan{constructor(e=n.INVALID_SPAN_CONTEXT){this._spanContext=e}spanContext(){return this._spanContext}setAttribute(e,t){return this}setAttributes(e){return this}addEvent(e,t){return this}setStatus(e){return this}updateName(e){return this}end(e){}isRecording(){return false}recordException(e,t){}}t.NonRecordingSpan=NonRecordingSpan},614:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.NoopTracer=void 0;const n=r(491);const a=r(607);const o=r(403);const i=r(139);const c=n.ContextAPI.getInstance();class NoopTracer{startSpan(e,t,r=c.active()){const n=Boolean(t===null||t===void 0?void 0:t.root);if(n){return new o.NonRecordingSpan}const s=r&&(0,a.getSpanContext)(r);if(isSpanContext(s)&&(0,i.isSpanContextValid)(s)){return new o.NonRecordingSpan(s)}else{return new o.NonRecordingSpan}}startActiveSpan(e,t,r,n){let o;let i;let s;if(arguments.length<2){return}else if(arguments.length===2){s=t}else if(arguments.length===3){o=t;s=r}else{o=t;i=r;s=n}const u=i!==null&&i!==void 0?i:c.active();const l=this.startSpan(e,o,u);const g=(0,a.setSpan)(u,l);return c.with(g,s,undefined,l)}}t.NoopTracer=NoopTracer;function isSpanContext(e){return typeof e==="object"&&typeof e["spanId"]==="string"&&typeof e["traceId"]==="string"&&typeof e["traceFlags"]==="number"}},124:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.NoopTracerProvider=void 0;const n=r(614);class NoopTracerProvider{getTracer(e,t,r){return new n.NoopTracer}}t.NoopTracerProvider=NoopTracerProvider},125:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.ProxyTracer=void 0;const n=r(614);const a=new n.NoopTracer;class ProxyTracer{constructor(e,t,r,n){this._provider=e;this.name=t;this.version=r;this.options=n}startSpan(e,t,r){return this._getTracer().startSpan(e,t,r)}startActiveSpan(e,t,r,n){const a=this._getTracer();return Reflect.apply(a.startActiveSpan,a,arguments)}_getTracer(){if(this._delegate){return this._delegate}const e=this._provider.getDelegateTracer(this.name,this.version,this.options);if(!e){return a}this._delegate=e;return this._delegate}}t.ProxyTracer=ProxyTracer},846:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.ProxyTracerProvider=void 0;const n=r(125);const a=r(124);const o=new a.NoopTracerProvider;class ProxyTracerProvider{getTracer(e,t,r){var a;return(a=this.getDelegateTracer(e,t,r))!==null&&a!==void 0?a:new n.ProxyTracer(this,e,t,r)}getDelegate(){var e;return(e=this._delegate)!==null&&e!==void 0?e:o}setDelegate(e){this._delegate=e}getDelegateTracer(e,t,r){var n;return(n=this._delegate)===null||n===void 0?void 0:n.getTracer(e,t,r)}}t.ProxyTracerProvider=ProxyTracerProvider},996:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});t.SamplingDecision=void 0;var r;(function(e){e[e["NOT_RECORD"]=0]="NOT_RECORD";e[e["RECORD"]=1]="RECORD";e[e["RECORD_AND_SAMPLED"]=2]="RECORD_AND_SAMPLED"})(r=t.SamplingDecision||(t.SamplingDecision={}))},607:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.getSpanContext=t.setSpanContext=t.deleteSpan=t.setSpan=t.getActiveSpan=t.getSpan=void 0;const n=r(780);const a=r(403);const o=r(491);const i=(0,n.createContextKey)("OpenTelemetry Context Key SPAN");function getSpan(e){return e.getValue(i)||undefined}t.getSpan=getSpan;function getActiveSpan(){return getSpan(o.ContextAPI.getInstance().active())}t.getActiveSpan=getActiveSpan;function setSpan(e,t){return e.setValue(i,t)}t.setSpan=setSpan;function deleteSpan(e){return e.deleteValue(i)}t.deleteSpan=deleteSpan;function setSpanContext(e,t){return setSpan(e,new a.NonRecordingSpan(t))}t.setSpanContext=setSpanContext;function getSpanContext(e){var t;return(t=getSpan(e))===null||t===void 0?void 0:t.spanContext()}t.getSpanContext=getSpanContext},325:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.TraceStateImpl=void 0;const n=r(564);const a=32;const o=512;const i=",";const c="=";class TraceStateImpl{constructor(e){this._internalState=new Map;if(e)this._parse(e)}set(e,t){const r=this._clone();if(r._internalState.has(e)){r._internalState.delete(e)}r._internalState.set(e,t);return r}unset(e){const t=this._clone();t._internalState.delete(e);return t}get(e){return this._internalState.get(e)}serialize(){return this._keys().reduce(((e,t)=>{e.push(t+c+this.get(t));return e}),[]).join(i)}_parse(e){if(e.length>o)return;this._internalState=e.split(i).reverse().reduce(((e,t)=>{const r=t.trim();const a=r.indexOf(c);if(a!==-1){const o=r.slice(0,a);const i=r.slice(a+1,t.length);if((0,n.validateKey)(o)&&(0,n.validateValue)(i)){e.set(o,i)}else{}}return e}),new Map);if(this._internalState.size>a){this._internalState=new Map(Array.from(this._internalState.entries()).reverse().slice(0,a))}}_keys(){return Array.from(this._internalState.keys()).reverse()}_clone(){const e=new TraceStateImpl;e._internalState=new Map(this._internalState);return e}}t.TraceStateImpl=TraceStateImpl},564:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});t.validateValue=t.validateKey=void 0;const r="[_0-9a-z-*/]";const n=`[a-z]${r}{0,255}`;const a=`[a-z0-9]${r}{0,240}@[a-z]${r}{0,13}`;const o=new RegExp(`^(?:${n}|${a})$`);const i=/^[ -~]{0,255}[!-~]$/;const c=/,|=/;function validateKey(e){return o.test(e)}t.validateKey=validateKey;function validateValue(e){return i.test(e)&&!c.test(e)}t.validateValue=validateValue},98:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.createTraceState=void 0;const n=r(325);function createTraceState(e){return new n.TraceStateImpl(e)}t.createTraceState=createTraceState},476:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.INVALID_SPAN_CONTEXT=t.INVALID_TRACEID=t.INVALID_SPANID=void 0;const n=r(475);t.INVALID_SPANID="0000000000000000";t.INVALID_TRACEID="00000000000000000000000000000000";t.INVALID_SPAN_CONTEXT={traceId:t.INVALID_TRACEID,spanId:t.INVALID_SPANID,traceFlags:n.TraceFlags.NONE}},357:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});t.SpanKind=void 0;var r;(function(e){e[e["INTERNAL"]=0]="INTERNAL";e[e["SERVER"]=1]="SERVER";e[e["CLIENT"]=2]="CLIENT";e[e["PRODUCER"]=3]="PRODUCER";e[e["CONSUMER"]=4]="CONSUMER"})(r=t.SpanKind||(t.SpanKind={}))},139:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.wrapSpanContext=t.isSpanContextValid=t.isValidSpanId=t.isValidTraceId=void 0;const n=r(476);const a=r(403);const o=/^([0-9a-f]{32})$/i;const i=/^[0-9a-f]{16}$/i;function isValidTraceId(e){return o.test(e)&&e!==n.INVALID_TRACEID}t.isValidTraceId=isValidTraceId;function isValidSpanId(e){return i.test(e)&&e!==n.INVALID_SPANID}t.isValidSpanId=isValidSpanId;function isSpanContextValid(e){return isValidTraceId(e.traceId)&&isValidSpanId(e.spanId)}t.isSpanContextValid=isSpanContextValid;function wrapSpanContext(e){return new a.NonRecordingSpan(e)}t.wrapSpanContext=wrapSpanContext},847:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});t.SpanStatusCode=void 0;var r;(function(e){e[e["UNSET"]=0]="UNSET";e[e["OK"]=1]="OK";e[e["ERROR"]=2]="ERROR"})(r=t.SpanStatusCode||(t.SpanStatusCode={}))},475:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});t.TraceFlags=void 0;var r;(function(e){e[e["NONE"]=0]="NONE";e[e["SAMPLED"]=1]="SAMPLED"})(r=t.TraceFlags||(t.TraceFlags={}))},521:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});t.VERSION=void 0;t.VERSION="1.6.0"}};var t={};function __nccwpck_require__(r){var n=t[r];if(n!==undefined){return n.exports}var a=t[r]={exports:{}};var o=true;try{e[r].call(a.exports,a,a.exports,__nccwpck_require__);o=false}finally{if(o)delete t[r]}return a.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var r={};(()=>{var e=r;Object.defineProperty(e,"__esModule",{value:true});e.trace=e.propagation=e.metrics=e.diag=e.context=e.INVALID_SPAN_CONTEXT=e.INVALID_TRACEID=e.INVALID_SPANID=e.isValidSpanId=e.isValidTraceId=e.isSpanContextValid=e.createTraceState=e.TraceFlags=e.SpanStatusCode=e.SpanKind=e.SamplingDecision=e.ProxyTracerProvider=e.ProxyTracer=e.defaultTextMapSetter=e.defaultTextMapGetter=e.ValueType=e.createNoopMeter=e.DiagLogLevel=e.DiagConsoleLogger=e.ROOT_CONTEXT=e.createContextKey=e.baggageEntryMetadataFromString=void 0;var t=__nccwpck_require__(369);Object.defineProperty(e,"baggageEntryMetadataFromString",{enumerable:true,get:function(){return t.baggageEntryMetadataFromString}});var n=__nccwpck_require__(780);Object.defineProperty(e,"createContextKey",{enumerable:true,get:function(){return n.createContextKey}});Object.defineProperty(e,"ROOT_CONTEXT",{enumerable:true,get:function(){return n.ROOT_CONTEXT}});var a=__nccwpck_require__(972);Object.defineProperty(e,"DiagConsoleLogger",{enumerable:true,get:function(){return a.DiagConsoleLogger}});var o=__nccwpck_require__(957);Object.defineProperty(e,"DiagLogLevel",{enumerable:true,get:function(){return o.DiagLogLevel}});var i=__nccwpck_require__(102);Object.defineProperty(e,"createNoopMeter",{enumerable:true,get:function(){return i.createNoopMeter}});var c=__nccwpck_require__(901);Object.defineProperty(e,"ValueType",{enumerable:true,get:function(){return c.ValueType}});var s=__nccwpck_require__(194);Object.defineProperty(e,"defaultTextMapGetter",{enumerable:true,get:function(){return s.defaultTextMapGetter}});Object.defineProperty(e,"defaultTextMapSetter",{enumerable:true,get:function(){return s.defaultTextMapSetter}});var u=__nccwpck_require__(125);Object.defineProperty(e,"ProxyTracer",{enumerable:true,get:function(){return u.ProxyTracer}});var l=__nccwpck_require__(846);Object.defineProperty(e,"ProxyTracerProvider",{enumerable:true,get:function(){return l.ProxyTracerProvider}});var g=__nccwpck_require__(996);Object.defineProperty(e,"SamplingDecision",{enumerable:true,get:function(){return g.SamplingDecision}});var p=__nccwpck_require__(357);Object.defineProperty(e,"SpanKind",{enumerable:true,get:function(){return p.SpanKind}});var d=__nccwpck_require__(847);Object.defineProperty(e,"SpanStatusCode",{enumerable:true,get:function(){return d.SpanStatusCode}});var _=__nccwpck_require__(475);Object.defineProperty(e,"TraceFlags",{enumerable:true,get:function(){return _.TraceFlags}});var f=__nccwpck_require__(98);Object.defineProperty(e,"createTraceState",{enumerable:true,get:function(){return f.createTraceState}});var b=__nccwpck_require__(139);Object.defineProperty(e,"isSpanContextValid",{enumerable:true,get:function(){return b.isSpanContextValid}});Object.defineProperty(e,"isValidTraceId",{enumerable:true,get:function(){return b.isValidTraceId}});Object.defineProperty(e,"isValidSpanId",{enumerable:true,get:function(){return b.isValidSpanId}});var v=__nccwpck_require__(476);Object.defineProperty(e,"INVALID_SPANID",{enumerable:true,get:function(){return v.INVALID_SPANID}});Object.defineProperty(e,"INVALID_TRACEID",{enumerable:true,get:function(){return v.INVALID_TRACEID}});Object.defineProperty(e,"INVALID_SPAN_CONTEXT",{enumerable:true,get:function(){return v.INVALID_SPAN_CONTEXT}});const O=__nccwpck_require__(67);Object.defineProperty(e,"context",{enumerable:true,get:function(){return O.context}});const P=__nccwpck_require__(506);Object.defineProperty(e,"diag",{enumerable:true,get:function(){return P.diag}});const N=__nccwpck_require__(886);Object.defineProperty(e,"metrics",{enumerable:true,get:function(){return N.metrics}});const S=__nccwpck_require__(939);Object.defineProperty(e,"propagation",{enumerable:true,get:function(){return S.propagation}});const C=__nccwpck_require__(845);Object.defineProperty(e,"trace",{enumerable:true,get:function(){return C.trace}});e["default"]={context:O.context,diag:P.diag,metrics:N.metrics,propagation:S.propagation,trace:C.trace}})();module.exports=r})();

/***/ }),

/***/ 17255:
/***/ ((module) => {

(()=>{"use strict";if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var e={};(()=>{var r=e;
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */r.parse=parse;r.serialize=serialize;var i=decodeURIComponent;var t=encodeURIComponent;var a=/; */;var n=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function parse(e,r){if(typeof e!=="string"){throw new TypeError("argument str must be a string")}var t={};var n=r||{};var o=e.split(a);var s=n.decode||i;for(var p=0;p<o.length;p++){var f=o[p];var u=f.indexOf("=");if(u<0){continue}var v=f.substr(0,u).trim();var c=f.substr(++u,f.length).trim();if('"'==c[0]){c=c.slice(1,-1)}if(undefined==t[v]){t[v]=tryDecode(c,s)}}return t}function serialize(e,r,i){var a=i||{};var o=a.encode||t;if(typeof o!=="function"){throw new TypeError("option encode is invalid")}if(!n.test(e)){throw new TypeError("argument name is invalid")}var s=o(r);if(s&&!n.test(s)){throw new TypeError("argument val is invalid")}var p=e+"="+s;if(null!=a.maxAge){var f=a.maxAge-0;if(isNaN(f)||!isFinite(f)){throw new TypeError("option maxAge is invalid")}p+="; Max-Age="+Math.floor(f)}if(a.domain){if(!n.test(a.domain)){throw new TypeError("option domain is invalid")}p+="; Domain="+a.domain}if(a.path){if(!n.test(a.path)){throw new TypeError("option path is invalid")}p+="; Path="+a.path}if(a.expires){if(typeof a.expires.toUTCString!=="function"){throw new TypeError("option expires is invalid")}p+="; Expires="+a.expires.toUTCString()}if(a.httpOnly){p+="; HttpOnly"}if(a.secure){p+="; Secure"}if(a.sameSite){var u=typeof a.sameSite==="string"?a.sameSite.toLowerCase():a.sameSite;switch(u){case true:p+="; SameSite=Strict";break;case"lax":p+="; SameSite=Lax";break;case"strict":p+="; SameSite=Strict";break;case"none":p+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return p}function tryDecode(e,r){try{return r(e)}catch(r){return e}}})();module.exports=e})();

/***/ }),

/***/ 81792:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 42565:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;(()=>{var i={226:function(i,e){(function(o,a){"use strict";var r="1.0.35",t="",n="?",s="function",b="undefined",w="object",l="string",d="major",c="model",u="name",p="type",m="vendor",f="version",h="architecture",v="console",g="mobile",k="tablet",x="smarttv",_="wearable",y="embedded",q=350;var T="Amazon",S="Apple",z="ASUS",N="BlackBerry",A="Browser",C="Chrome",E="Edge",O="Firefox",U="Google",j="Huawei",P="LG",R="Microsoft",M="Motorola",B="Opera",V="Samsung",D="Sharp",I="Sony",W="Viera",F="Xiaomi",G="Zebra",H="Facebook",L="Chromium OS",Z="Mac OS";var extend=function(i,e){var o={};for(var a in i){if(e[a]&&e[a].length%2===0){o[a]=e[a].concat(i[a])}else{o[a]=i[a]}}return o},enumerize=function(i){var e={};for(var o=0;o<i.length;o++){e[i[o].toUpperCase()]=i[o]}return e},has=function(i,e){return typeof i===l?lowerize(e).indexOf(lowerize(i))!==-1:false},lowerize=function(i){return i.toLowerCase()},majorize=function(i){return typeof i===l?i.replace(/[^\d\.]/g,t).split(".")[0]:a},trim=function(i,e){if(typeof i===l){i=i.replace(/^\s\s*/,t);return typeof e===b?i:i.substring(0,q)}};var rgxMapper=function(i,e){var o=0,r,t,n,b,l,d;while(o<e.length&&!l){var c=e[o],u=e[o+1];r=t=0;while(r<c.length&&!l){if(!c[r]){break}l=c[r++].exec(i);if(!!l){for(n=0;n<u.length;n++){d=l[++t];b=u[n];if(typeof b===w&&b.length>0){if(b.length===2){if(typeof b[1]==s){this[b[0]]=b[1].call(this,d)}else{this[b[0]]=b[1]}}else if(b.length===3){if(typeof b[1]===s&&!(b[1].exec&&b[1].test)){this[b[0]]=d?b[1].call(this,d,b[2]):a}else{this[b[0]]=d?d.replace(b[1],b[2]):a}}else if(b.length===4){this[b[0]]=d?b[3].call(this,d.replace(b[1],b[2])):a}}else{this[b]=d?d:a}}}}o+=2}},strMapper=function(i,e){for(var o in e){if(typeof e[o]===w&&e[o].length>0){for(var r=0;r<e[o].length;r++){if(has(e[o][r],i)){return o===n?a:o}}}else if(has(e[o],i)){return o===n?a:o}}return i};var $={"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},X={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"};var K={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[f,[u,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[f,[u,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[u,f],[/opios[\/ ]+([\w\.]+)/i],[f,[u,B+" Mini"]],[/\bopr\/([\w\.]+)/i],[f,[u,B]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[u,f],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[f,[u,"UC"+A]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[f,[u,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[f,[u,"WeChat"]],[/konqueror\/([\w\.]+)/i],[f,[u,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[f,[u,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[f,[u,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[u,/(.+)/,"$1 Secure "+A],f],[/\bfocus\/([\w\.]+)/i],[f,[u,O+" Focus"]],[/\bopt\/([\w\.]+)/i],[f,[u,B+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[f,[u,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[f,[u,"Dolphin"]],[/coast\/([\w\.]+)/i],[f,[u,B+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[f,[u,"MIUI "+A]],[/fxios\/([-\w\.]+)/i],[f,[u,O]],[/\bqihu|(qi?ho?o?|360)browser/i],[[u,"360 "+A]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[u,/(.+)/,"$1 "+A],f],[/(comodo_dragon)\/([\w\.]+)/i],[[u,/_/g," "],f],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[u,f],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[u],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[u,H],f],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[u,f],[/\bgsa\/([\w\.]+) .*safari\//i],[f,[u,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[f,[u,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[f,[u,C+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[u,C+" WebView"],f],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[f,[u,"Android "+A]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[u,f],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[f,[u,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[f,u],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[u,[f,strMapper,$]],[/(webkit|khtml)\/([\w\.]+)/i],[u,f],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[u,"Netscape"],f],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[f,[u,O+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[u,f],[/(cobalt)\/([\w\.]+)/i],[u,[f,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[h,"amd64"]],[/(ia32(?=;))/i],[[h,lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[h,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[h,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[h,"armhf"]],[/windows (ce|mobile); ppc;/i],[[h,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[h,/ower/,t,lowerize]],[/(sun4\w)[;\)]/i],[[h,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[h,lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[c,[m,V],[p,k]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[c,[m,V],[p,g]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[c,[m,S],[p,g]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[c,[m,S],[p,k]],[/(macintosh);/i],[c,[m,S]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[c,[m,D],[p,g]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[c,[m,j],[p,k]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[c,[m,j],[p,g]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[c,/_/g," "],[m,F],[p,g]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[c,/_/g," "],[m,F],[p,k]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[c,[m,"OPPO"],[p,g]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[c,[m,"Vivo"],[p,g]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[c,[m,"Realme"],[p,g]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[c,[m,M],[p,g]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[c,[m,M],[p,k]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[c,[m,P],[p,k]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[c,[m,P],[p,g]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[c,[m,"Lenovo"],[p,k]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[c,/_/g," "],[m,"Nokia"],[p,g]],[/(pixel c)\b/i],[c,[m,U],[p,k]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[c,[m,U],[p,g]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[c,[m,I],[p,g]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[c,"Xperia Tablet"],[m,I],[p,k]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[c,[m,"OnePlus"],[p,g]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[c,[m,T],[p,k]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[c,/(.+)/g,"Fire Phone $1"],[m,T],[p,g]],[/(playbook);[-\w\),; ]+(rim)/i],[c,m,[p,k]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[c,[m,N],[p,g]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[c,[m,z],[p,k]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[c,[m,z],[p,g]],[/(nexus 9)/i],[c,[m,"HTC"],[p,k]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[m,[c,/_/g," "],[p,g]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[c,[m,"Acer"],[p,k]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[c,[m,"Meizu"],[p,g]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[m,c,[p,g]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[m,c,[p,k]],[/(surface duo)/i],[c,[m,R],[p,k]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[c,[m,"Fairphone"],[p,g]],[/(u304aa)/i],[c,[m,"AT&T"],[p,g]],[/\bsie-(\w*)/i],[c,[m,"Siemens"],[p,g]],[/\b(rct\w+) b/i],[c,[m,"RCA"],[p,k]],[/\b(venue[\d ]{2,7}) b/i],[c,[m,"Dell"],[p,k]],[/\b(q(?:mv|ta)\w+) b/i],[c,[m,"Verizon"],[p,k]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[c,[m,"Barnes & Noble"],[p,k]],[/\b(tm\d{3}\w+) b/i],[c,[m,"NuVision"],[p,k]],[/\b(k88) b/i],[c,[m,"ZTE"],[p,k]],[/\b(nx\d{3}j) b/i],[c,[m,"ZTE"],[p,g]],[/\b(gen\d{3}) b.+49h/i],[c,[m,"Swiss"],[p,g]],[/\b(zur\d{3}) b/i],[c,[m,"Swiss"],[p,k]],[/\b((zeki)?tb.*\b) b/i],[c,[m,"Zeki"],[p,k]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[m,"Dragon Touch"],c,[p,k]],[/\b(ns-?\w{0,9}) b/i],[c,[m,"Insignia"],[p,k]],[/\b((nxa|next)-?\w{0,9}) b/i],[c,[m,"NextBook"],[p,k]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[m,"Voice"],c,[p,g]],[/\b(lvtel\-)?(v1[12]) b/i],[[m,"LvTel"],c,[p,g]],[/\b(ph-1) /i],[c,[m,"Essential"],[p,g]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[c,[m,"Envizen"],[p,k]],[/\b(trio[-\w\. ]+) b/i],[c,[m,"MachSpeed"],[p,k]],[/\btu_(1491) b/i],[c,[m,"Rotor"],[p,k]],[/(shield[\w ]+) b/i],[c,[m,"Nvidia"],[p,k]],[/(sprint) (\w+)/i],[m,c,[p,g]],[/(kin\.[onetw]{3})/i],[[c,/\./g," "],[m,R],[p,g]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[c,[m,G],[p,k]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[c,[m,G],[p,g]],[/smart-tv.+(samsung)/i],[m,[p,x]],[/hbbtv.+maple;(\d+)/i],[[c,/^/,"SmartTV"],[m,V],[p,x]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[m,P],[p,x]],[/(apple) ?tv/i],[m,[c,S+" TV"],[p,x]],[/crkey/i],[[c,C+"cast"],[m,U],[p,x]],[/droid.+aft(\w)( bui|\))/i],[c,[m,T],[p,x]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[c,[m,D],[p,x]],[/(bravia[\w ]+)( bui|\))/i],[c,[m,I],[p,x]],[/(mitv-\w{5}) bui/i],[c,[m,F],[p,x]],[/Hbbtv.*(technisat) (.*);/i],[m,c,[p,x]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[m,trim],[c,trim],[p,x]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[p,x]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[m,c,[p,v]],[/droid.+; (shield) bui/i],[c,[m,"Nvidia"],[p,v]],[/(playstation [345portablevi]+)/i],[c,[m,I],[p,v]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[c,[m,R],[p,v]],[/((pebble))app/i],[m,c,[p,_]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[c,[m,S],[p,_]],[/droid.+; (glass) \d/i],[c,[m,U],[p,_]],[/droid.+; (wt63?0{2,3})\)/i],[c,[m,G],[p,_]],[/(quest( 2| pro)?)/i],[c,[m,H],[p,_]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[m,[p,y]],[/(aeobc)\b/i],[c,[m,T],[p,y]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[c,[p,g]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[c,[p,k]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[p,k]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[p,g]],[/(android[-\w\. ]{0,9});.+buil/i],[c,[m,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[f,[u,E+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[f,[u,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[u,f],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[f,u]],os:[[/microsoft (windows) (vista|xp)/i],[u,f],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[u,[f,strMapper,X]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[u,"Windows"],[f,strMapper,X]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/ios;fbsv\/([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[f,/_/g,"."],[u,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[u,Z],[f,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[f,u],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[u,f],[/\(bb(10);/i],[f,[u,N]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[f,[u,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[f,[u,O+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[f,[u,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[f,[u,"watchOS"]],[/crkey\/([\d\.]+)/i],[f,[u,C+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[u,L],f],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[u,f],[/(sunos) ?([\w\.\d]*)/i],[[u,"Solaris"],f],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[u,f]]};var UAParser=function(i,e){if(typeof i===w){e=i;i=a}if(!(this instanceof UAParser)){return new UAParser(i,e).getResult()}var r=typeof o!==b&&o.navigator?o.navigator:a;var n=i||(r&&r.userAgent?r.userAgent:t);var v=r&&r.userAgentData?r.userAgentData:a;var x=e?extend(K,e):K;var _=r&&r.userAgent==n;this.getBrowser=function(){var i={};i[u]=a;i[f]=a;rgxMapper.call(i,n,x.browser);i[d]=majorize(i[f]);if(_&&r&&r.brave&&typeof r.brave.isBrave==s){i[u]="Brave"}return i};this.getCPU=function(){var i={};i[h]=a;rgxMapper.call(i,n,x.cpu);return i};this.getDevice=function(){var i={};i[m]=a;i[c]=a;i[p]=a;rgxMapper.call(i,n,x.device);if(_&&!i[p]&&v&&v.mobile){i[p]=g}if(_&&i[c]=="Macintosh"&&r&&typeof r.standalone!==b&&r.maxTouchPoints&&r.maxTouchPoints>2){i[c]="iPad";i[p]=k}return i};this.getEngine=function(){var i={};i[u]=a;i[f]=a;rgxMapper.call(i,n,x.engine);return i};this.getOS=function(){var i={};i[u]=a;i[f]=a;rgxMapper.call(i,n,x.os);if(_&&!i[u]&&v&&v.platform!="Unknown"){i[u]=v.platform.replace(/chrome os/i,L).replace(/macos/i,Z)}return i};this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return n};this.setUA=function(i){n=typeof i===l&&i.length>q?trim(i,q):i;return this};this.setUA(n);return this};UAParser.VERSION=r;UAParser.BROWSER=enumerize([u,f,d]);UAParser.CPU=enumerize([h]);UAParser.DEVICE=enumerize([c,m,p,v,g,x,k,_,y]);UAParser.ENGINE=UAParser.OS=enumerize([u,f]);if(typeof e!==b){if("object"!==b&&i.exports){e=i.exports=UAParser}e.UAParser=UAParser}else{if("function"===s&&__webpack_require__.amdO){!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return UAParser}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}else if(typeof o!==b){o.UAParser=UAParser}}var Q=typeof o!==b&&(o.jQuery||o.Zepto);if(Q&&!Q.ua){var Y=new UAParser;Q.ua=Y.getResult();Q.ua.get=function(){return Y.getUA()};Q.ua.set=function(i){Y.setUA(i);var e=Y.getResult();for(var o in e){Q.ua[o]=e[o]}}}})(typeof window==="object"?window:this)}};var e={};function __nccwpck_require__(o){var a=e[o];if(a!==undefined){return a.exports}var r=e[o]={exports:{}};var t=true;try{i[o].call(r.exports,r,r.exports,__nccwpck_require__);t=false}finally{if(t)delete e[o]}return r.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var o=__nccwpck_require__(226);module.exports=o})();

/***/ }),

/***/ 18346:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;(()=>{var i={226:function(i,e){(function(o,a){"use strict";var r="1.0.35",t="",n="?",s="function",b="undefined",w="object",l="string",d="major",c="model",u="name",p="type",m="vendor",f="version",h="architecture",v="console",g="mobile",k="tablet",x="smarttv",_="wearable",y="embedded",q=350;var T="Amazon",S="Apple",z="ASUS",N="BlackBerry",A="Browser",C="Chrome",E="Edge",O="Firefox",U="Google",j="Huawei",P="LG",R="Microsoft",M="Motorola",B="Opera",V="Samsung",D="Sharp",I="Sony",W="Viera",F="Xiaomi",G="Zebra",H="Facebook",L="Chromium OS",Z="Mac OS";var extend=function(i,e){var o={};for(var a in i){if(e[a]&&e[a].length%2===0){o[a]=e[a].concat(i[a])}else{o[a]=i[a]}}return o},enumerize=function(i){var e={};for(var o=0;o<i.length;o++){e[i[o].toUpperCase()]=i[o]}return e},has=function(i,e){return typeof i===l?lowerize(e).indexOf(lowerize(i))!==-1:false},lowerize=function(i){return i.toLowerCase()},majorize=function(i){return typeof i===l?i.replace(/[^\d\.]/g,t).split(".")[0]:a},trim=function(i,e){if(typeof i===l){i=i.replace(/^\s\s*/,t);return typeof e===b?i:i.substring(0,q)}};var rgxMapper=function(i,e){var o=0,r,t,n,b,l,d;while(o<e.length&&!l){var c=e[o],u=e[o+1];r=t=0;while(r<c.length&&!l){if(!c[r]){break}l=c[r++].exec(i);if(!!l){for(n=0;n<u.length;n++){d=l[++t];b=u[n];if(typeof b===w&&b.length>0){if(b.length===2){if(typeof b[1]==s){this[b[0]]=b[1].call(this,d)}else{this[b[0]]=b[1]}}else if(b.length===3){if(typeof b[1]===s&&!(b[1].exec&&b[1].test)){this[b[0]]=d?b[1].call(this,d,b[2]):a}else{this[b[0]]=d?d.replace(b[1],b[2]):a}}else if(b.length===4){this[b[0]]=d?b[3].call(this,d.replace(b[1],b[2])):a}}else{this[b]=d?d:a}}}}o+=2}},strMapper=function(i,e){for(var o in e){if(typeof e[o]===w&&e[o].length>0){for(var r=0;r<e[o].length;r++){if(has(e[o][r],i)){return o===n?a:o}}}else if(has(e[o],i)){return o===n?a:o}}return i};var $={"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},X={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"};var K={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[f,[u,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[f,[u,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[u,f],[/opios[\/ ]+([\w\.]+)/i],[f,[u,B+" Mini"]],[/\bopr\/([\w\.]+)/i],[f,[u,B]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[u,f],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[f,[u,"UC"+A]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[f,[u,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[f,[u,"WeChat"]],[/konqueror\/([\w\.]+)/i],[f,[u,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[f,[u,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[f,[u,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[u,/(.+)/,"$1 Secure "+A],f],[/\bfocus\/([\w\.]+)/i],[f,[u,O+" Focus"]],[/\bopt\/([\w\.]+)/i],[f,[u,B+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[f,[u,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[f,[u,"Dolphin"]],[/coast\/([\w\.]+)/i],[f,[u,B+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[f,[u,"MIUI "+A]],[/fxios\/([-\w\.]+)/i],[f,[u,O]],[/\bqihu|(qi?ho?o?|360)browser/i],[[u,"360 "+A]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[u,/(.+)/,"$1 "+A],f],[/(comodo_dragon)\/([\w\.]+)/i],[[u,/_/g," "],f],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[u,f],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[u],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[u,H],f],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[u,f],[/\bgsa\/([\w\.]+) .*safari\//i],[f,[u,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[f,[u,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[f,[u,C+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[u,C+" WebView"],f],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[f,[u,"Android "+A]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[u,f],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[f,[u,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[f,u],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[u,[f,strMapper,$]],[/(webkit|khtml)\/([\w\.]+)/i],[u,f],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[u,"Netscape"],f],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[f,[u,O+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[u,f],[/(cobalt)\/([\w\.]+)/i],[u,[f,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[h,"amd64"]],[/(ia32(?=;))/i],[[h,lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[h,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[h,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[h,"armhf"]],[/windows (ce|mobile); ppc;/i],[[h,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[h,/ower/,t,lowerize]],[/(sun4\w)[;\)]/i],[[h,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[h,lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[c,[m,V],[p,k]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[c,[m,V],[p,g]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[c,[m,S],[p,g]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[c,[m,S],[p,k]],[/(macintosh);/i],[c,[m,S]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[c,[m,D],[p,g]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[c,[m,j],[p,k]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[c,[m,j],[p,g]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[c,/_/g," "],[m,F],[p,g]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[c,/_/g," "],[m,F],[p,k]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[c,[m,"OPPO"],[p,g]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[c,[m,"Vivo"],[p,g]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[c,[m,"Realme"],[p,g]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[c,[m,M],[p,g]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[c,[m,M],[p,k]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[c,[m,P],[p,k]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[c,[m,P],[p,g]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[c,[m,"Lenovo"],[p,k]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[c,/_/g," "],[m,"Nokia"],[p,g]],[/(pixel c)\b/i],[c,[m,U],[p,k]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[c,[m,U],[p,g]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[c,[m,I],[p,g]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[c,"Xperia Tablet"],[m,I],[p,k]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[c,[m,"OnePlus"],[p,g]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[c,[m,T],[p,k]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[c,/(.+)/g,"Fire Phone $1"],[m,T],[p,g]],[/(playbook);[-\w\),; ]+(rim)/i],[c,m,[p,k]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[c,[m,N],[p,g]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[c,[m,z],[p,k]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[c,[m,z],[p,g]],[/(nexus 9)/i],[c,[m,"HTC"],[p,k]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[m,[c,/_/g," "],[p,g]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[c,[m,"Acer"],[p,k]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[c,[m,"Meizu"],[p,g]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[m,c,[p,g]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[m,c,[p,k]],[/(surface duo)/i],[c,[m,R],[p,k]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[c,[m,"Fairphone"],[p,g]],[/(u304aa)/i],[c,[m,"AT&T"],[p,g]],[/\bsie-(\w*)/i],[c,[m,"Siemens"],[p,g]],[/\b(rct\w+) b/i],[c,[m,"RCA"],[p,k]],[/\b(venue[\d ]{2,7}) b/i],[c,[m,"Dell"],[p,k]],[/\b(q(?:mv|ta)\w+) b/i],[c,[m,"Verizon"],[p,k]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[c,[m,"Barnes & Noble"],[p,k]],[/\b(tm\d{3}\w+) b/i],[c,[m,"NuVision"],[p,k]],[/\b(k88) b/i],[c,[m,"ZTE"],[p,k]],[/\b(nx\d{3}j) b/i],[c,[m,"ZTE"],[p,g]],[/\b(gen\d{3}) b.+49h/i],[c,[m,"Swiss"],[p,g]],[/\b(zur\d{3}) b/i],[c,[m,"Swiss"],[p,k]],[/\b((zeki)?tb.*\b) b/i],[c,[m,"Zeki"],[p,k]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[m,"Dragon Touch"],c,[p,k]],[/\b(ns-?\w{0,9}) b/i],[c,[m,"Insignia"],[p,k]],[/\b((nxa|next)-?\w{0,9}) b/i],[c,[m,"NextBook"],[p,k]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[m,"Voice"],c,[p,g]],[/\b(lvtel\-)?(v1[12]) b/i],[[m,"LvTel"],c,[p,g]],[/\b(ph-1) /i],[c,[m,"Essential"],[p,g]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[c,[m,"Envizen"],[p,k]],[/\b(trio[-\w\. ]+) b/i],[c,[m,"MachSpeed"],[p,k]],[/\btu_(1491) b/i],[c,[m,"Rotor"],[p,k]],[/(shield[\w ]+) b/i],[c,[m,"Nvidia"],[p,k]],[/(sprint) (\w+)/i],[m,c,[p,g]],[/(kin\.[onetw]{3})/i],[[c,/\./g," "],[m,R],[p,g]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[c,[m,G],[p,k]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[c,[m,G],[p,g]],[/smart-tv.+(samsung)/i],[m,[p,x]],[/hbbtv.+maple;(\d+)/i],[[c,/^/,"SmartTV"],[m,V],[p,x]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[m,P],[p,x]],[/(apple) ?tv/i],[m,[c,S+" TV"],[p,x]],[/crkey/i],[[c,C+"cast"],[m,U],[p,x]],[/droid.+aft(\w)( bui|\))/i],[c,[m,T],[p,x]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[c,[m,D],[p,x]],[/(bravia[\w ]+)( bui|\))/i],[c,[m,I],[p,x]],[/(mitv-\w{5}) bui/i],[c,[m,F],[p,x]],[/Hbbtv.*(technisat) (.*);/i],[m,c,[p,x]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[m,trim],[c,trim],[p,x]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[p,x]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[m,c,[p,v]],[/droid.+; (shield) bui/i],[c,[m,"Nvidia"],[p,v]],[/(playstation [345portablevi]+)/i],[c,[m,I],[p,v]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[c,[m,R],[p,v]],[/((pebble))app/i],[m,c,[p,_]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[c,[m,S],[p,_]],[/droid.+; (glass) \d/i],[c,[m,U],[p,_]],[/droid.+; (wt63?0{2,3})\)/i],[c,[m,G],[p,_]],[/(quest( 2| pro)?)/i],[c,[m,H],[p,_]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[m,[p,y]],[/(aeobc)\b/i],[c,[m,T],[p,y]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[c,[p,g]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[c,[p,k]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[p,k]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[p,g]],[/(android[-\w\. ]{0,9});.+buil/i],[c,[m,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[f,[u,E+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[f,[u,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[u,f],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[f,u]],os:[[/microsoft (windows) (vista|xp)/i],[u,f],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[u,[f,strMapper,X]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[u,"Windows"],[f,strMapper,X]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/ios;fbsv\/([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[f,/_/g,"."],[u,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[u,Z],[f,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[f,u],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[u,f],[/\(bb(10);/i],[f,[u,N]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[f,[u,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[f,[u,O+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[f,[u,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[f,[u,"watchOS"]],[/crkey\/([\d\.]+)/i],[f,[u,C+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[u,L],f],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[u,f],[/(sunos) ?([\w\.\d]*)/i],[[u,"Solaris"],f],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[u,f]]};var UAParser=function(i,e){if(typeof i===w){e=i;i=a}if(!(this instanceof UAParser)){return new UAParser(i,e).getResult()}var r=typeof o!==b&&o.navigator?o.navigator:a;var n=i||(r&&r.userAgent?r.userAgent:t);var v=r&&r.userAgentData?r.userAgentData:a;var x=e?extend(K,e):K;var _=r&&r.userAgent==n;this.getBrowser=function(){var i={};i[u]=a;i[f]=a;rgxMapper.call(i,n,x.browser);i[d]=majorize(i[f]);if(_&&r&&r.brave&&typeof r.brave.isBrave==s){i[u]="Brave"}return i};this.getCPU=function(){var i={};i[h]=a;rgxMapper.call(i,n,x.cpu);return i};this.getDevice=function(){var i={};i[m]=a;i[c]=a;i[p]=a;rgxMapper.call(i,n,x.device);if(_&&!i[p]&&v&&v.mobile){i[p]=g}if(_&&i[c]=="Macintosh"&&r&&typeof r.standalone!==b&&r.maxTouchPoints&&r.maxTouchPoints>2){i[c]="iPad";i[p]=k}return i};this.getEngine=function(){var i={};i[u]=a;i[f]=a;rgxMapper.call(i,n,x.engine);return i};this.getOS=function(){var i={};i[u]=a;i[f]=a;rgxMapper.call(i,n,x.os);if(_&&!i[u]&&v&&v.platform!="Unknown"){i[u]=v.platform.replace(/chrome os/i,L).replace(/macos/i,Z)}return i};this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return n};this.setUA=function(i){n=typeof i===l&&i.length>q?trim(i,q):i;return this};this.setUA(n);return this};UAParser.VERSION=r;UAParser.BROWSER=enumerize([u,f,d]);UAParser.CPU=enumerize([h]);UAParser.DEVICE=enumerize([c,m,p,v,g,x,k,_,y]);UAParser.ENGINE=UAParser.OS=enumerize([u,f]);if(typeof e!==b){if("object"!==b&&i.exports){e=i.exports=UAParser}e.UAParser=UAParser}else{if("function"===s&&__webpack_require__.amdO){!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return UAParser}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}else if(typeof o!==b){o.UAParser=UAParser}}var Q=typeof o!==b&&(o.jQuery||o.Zepto);if(Q&&!Q.ua){var Y=new UAParser;Q.ua=Y.getResult();Q.ua.get=function(){return Y.getUA()};Q.ua.set=function(i){Y.setUA(i);var e=Y.getResult();for(var o in e){Q.ua[o]=e[o]}}}})(typeof window==="object"?window:this)}};var e={};function __nccwpck_require__(o){var a=e[o];if(a!==undefined){return a.exports}var r=e[o]={exports:{}};var t=true;try{i[o].call(r.exports,r,r.exports,__nccwpck_require__);t=false}finally{if(t)delete e[o]}return r.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var o=__nccwpck_require__(226);module.exports=o})();

/***/ }),

/***/ 11943:
/***/ ((__unused_webpack_module, exports) => {

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
    ACTION_SUFFIX: function() {
        return ACTION_SUFFIX;
    },
    APP_DIR_ALIAS: function() {
        return APP_DIR_ALIAS;
    },
    CACHE_ONE_YEAR: function() {
        return CACHE_ONE_YEAR;
    },
    DOT_NEXT_ALIAS: function() {
        return DOT_NEXT_ALIAS;
    },
    ESLINT_DEFAULT_DIRS: function() {
        return ESLINT_DEFAULT_DIRS;
    },
    GSP_NO_RETURNED_VALUE: function() {
        return GSP_NO_RETURNED_VALUE;
    },
    GSSP_COMPONENT_MEMBER_ERROR: function() {
        return GSSP_COMPONENT_MEMBER_ERROR;
    },
    GSSP_NO_RETURNED_VALUE: function() {
        return GSSP_NO_RETURNED_VALUE;
    },
    INSTRUMENTATION_HOOK_FILENAME: function() {
        return INSTRUMENTATION_HOOK_FILENAME;
    },
    MIDDLEWARE_FILENAME: function() {
        return MIDDLEWARE_FILENAME;
    },
    MIDDLEWARE_LOCATION_REGEXP: function() {
        return MIDDLEWARE_LOCATION_REGEXP;
    },
    NEXT_BODY_SUFFIX: function() {
        return NEXT_BODY_SUFFIX;
    },
    NEXT_CACHE_IMPLICIT_TAG_ID: function() {
        return NEXT_CACHE_IMPLICIT_TAG_ID;
    },
    NEXT_CACHE_REVALIDATED_TAGS_HEADER: function() {
        return NEXT_CACHE_REVALIDATED_TAGS_HEADER;
    },
    NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: function() {
        return NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER;
    },
    NEXT_CACHE_SOFT_TAGS_HEADER: function() {
        return NEXT_CACHE_SOFT_TAGS_HEADER;
    },
    NEXT_CACHE_SOFT_TAG_MAX_LENGTH: function() {
        return NEXT_CACHE_SOFT_TAG_MAX_LENGTH;
    },
    NEXT_CACHE_TAGS_HEADER: function() {
        return NEXT_CACHE_TAGS_HEADER;
    },
    NEXT_CACHE_TAG_MAX_ITEMS: function() {
        return NEXT_CACHE_TAG_MAX_ITEMS;
    },
    NEXT_CACHE_TAG_MAX_LENGTH: function() {
        return NEXT_CACHE_TAG_MAX_LENGTH;
    },
    NEXT_DATA_SUFFIX: function() {
        return NEXT_DATA_SUFFIX;
    },
    NEXT_META_SUFFIX: function() {
        return NEXT_META_SUFFIX;
    },
    NEXT_QUERY_PARAM_PREFIX: function() {
        return NEXT_QUERY_PARAM_PREFIX;
    },
    NON_STANDARD_NODE_ENV: function() {
        return NON_STANDARD_NODE_ENV;
    },
    PAGES_DIR_ALIAS: function() {
        return PAGES_DIR_ALIAS;
    },
    PRERENDER_REVALIDATE_HEADER: function() {
        return PRERENDER_REVALIDATE_HEADER;
    },
    PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function() {
        return PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER;
    },
    PUBLIC_DIR_MIDDLEWARE_CONFLICT: function() {
        return PUBLIC_DIR_MIDDLEWARE_CONFLICT;
    },
    ROOT_DIR_ALIAS: function() {
        return ROOT_DIR_ALIAS;
    },
    RSC_ACTION_CLIENT_WRAPPER_ALIAS: function() {
        return RSC_ACTION_CLIENT_WRAPPER_ALIAS;
    },
    RSC_ACTION_ENCRYPTION_ALIAS: function() {
        return RSC_ACTION_ENCRYPTION_ALIAS;
    },
    RSC_ACTION_PROXY_ALIAS: function() {
        return RSC_ACTION_PROXY_ALIAS;
    },
    RSC_ACTION_VALIDATE_ALIAS: function() {
        return RSC_ACTION_VALIDATE_ALIAS;
    },
    RSC_MOD_REF_PROXY_ALIAS: function() {
        return RSC_MOD_REF_PROXY_ALIAS;
    },
    RSC_PREFETCH_SUFFIX: function() {
        return RSC_PREFETCH_SUFFIX;
    },
    RSC_SUFFIX: function() {
        return RSC_SUFFIX;
    },
    SERVER_PROPS_EXPORT_ERROR: function() {
        return SERVER_PROPS_EXPORT_ERROR;
    },
    SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function() {
        return SERVER_PROPS_GET_INIT_PROPS_CONFLICT;
    },
    SERVER_PROPS_SSG_CONFLICT: function() {
        return SERVER_PROPS_SSG_CONFLICT;
    },
    SERVER_RUNTIME: function() {
        return SERVER_RUNTIME;
    },
    SSG_FALLBACK_EXPORT_ERROR: function() {
        return SSG_FALLBACK_EXPORT_ERROR;
    },
    SSG_GET_INITIAL_PROPS_CONFLICT: function() {
        return SSG_GET_INITIAL_PROPS_CONFLICT;
    },
    STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function() {
        return STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR;
    },
    UNSTABLE_REVALIDATE_RENAME_ERROR: function() {
        return UNSTABLE_REVALIDATE_RENAME_ERROR;
    },
    WEBPACK_LAYERS: function() {
        return WEBPACK_LAYERS;
    },
    WEBPACK_RESOURCE_QUERIES: function() {
        return WEBPACK_RESOURCE_QUERIES;
    }
});
const NEXT_QUERY_PARAM_PREFIX = "nxtP";
const PRERENDER_REVALIDATE_HEADER = "x-prerender-revalidate";
const PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = "x-prerender-revalidate-if-generated";
const RSC_PREFETCH_SUFFIX = ".prefetch.rsc";
const RSC_SUFFIX = ".rsc";
const ACTION_SUFFIX = ".action";
const NEXT_DATA_SUFFIX = ".json";
const NEXT_META_SUFFIX = ".meta";
const NEXT_BODY_SUFFIX = ".body";
const NEXT_CACHE_TAGS_HEADER = "x-next-cache-tags";
const NEXT_CACHE_SOFT_TAGS_HEADER = "x-next-cache-soft-tags";
const NEXT_CACHE_REVALIDATED_TAGS_HEADER = "x-next-revalidated-tags";
const NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER = "x-next-revalidate-tag-token";
const NEXT_CACHE_TAG_MAX_ITEMS = 64;
const NEXT_CACHE_TAG_MAX_LENGTH = 256;
const NEXT_CACHE_SOFT_TAG_MAX_LENGTH = 1024;
const NEXT_CACHE_IMPLICIT_TAG_ID = "_N_T_";
const CACHE_ONE_YEAR = 31536000;
const MIDDLEWARE_FILENAME = "middleware";
const MIDDLEWARE_LOCATION_REGEXP = `(?:src/)?${MIDDLEWARE_FILENAME}`;
const INSTRUMENTATION_HOOK_FILENAME = "instrumentation";
const PAGES_DIR_ALIAS = "private-next-pages";
const DOT_NEXT_ALIAS = "private-dot-next";
const ROOT_DIR_ALIAS = "private-next-root-dir";
const APP_DIR_ALIAS = "private-next-app-dir";
const RSC_MOD_REF_PROXY_ALIAS = "next/dist/build/webpack/loaders/next-flight-loader/module-proxy";
const RSC_ACTION_VALIDATE_ALIAS = "private-next-rsc-action-validate";
const RSC_ACTION_PROXY_ALIAS = "private-next-rsc-server-reference";
const RSC_ACTION_ENCRYPTION_ALIAS = "private-next-rsc-action-encryption";
const RSC_ACTION_CLIENT_WRAPPER_ALIAS = "private-next-rsc-action-client-wrapper";
const PUBLIC_DIR_MIDDLEWARE_CONFLICT = `You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`;
const SSG_GET_INITIAL_PROPS_CONFLICT = `You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`;
const SERVER_PROPS_GET_INIT_PROPS_CONFLICT = `You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`;
const SERVER_PROPS_SSG_CONFLICT = `You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`;
const STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = `can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`;
const SERVER_PROPS_EXPORT_ERROR = `pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`;
const GSP_NO_RETURNED_VALUE = "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?";
const GSSP_NO_RETURNED_VALUE = "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?";
const UNSTABLE_REVALIDATE_RENAME_ERROR = "The `unstable_revalidate` property is available for general use.\n" + "Please use `revalidate` instead.";
const GSSP_COMPONENT_MEMBER_ERROR = `can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`;
const NON_STANDARD_NODE_ENV = `You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`;
const SSG_FALLBACK_EXPORT_ERROR = `Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`;
const ESLINT_DEFAULT_DIRS = [
    "app",
    "pages",
    "components",
    "lib",
    "src"
];
const SERVER_RUNTIME = {
    edge: "edge",
    experimentalEdge: "experimental-edge",
    nodejs: "nodejs"
};
/**
 * The names of the webpack layers. These layers are the primitives for the
 * webpack chunks.
 */ const WEBPACK_LAYERS_NAMES = {
    /**
   * The layer for the shared code between the client and server bundles.
   */ shared: "shared",
    /**
   * React Server Components layer (rsc).
   */ reactServerComponents: "rsc",
    /**
   * Server Side Rendering layer for app (ssr).
   */ serverSideRendering: "ssr",
    /**
   * The browser client bundle layer for actions.
   */ actionBrowser: "action-browser",
    /**
   * The layer for the API routes.
   */ api: "api",
    /**
   * The layer for the middleware code.
   */ middleware: "middleware",
    /**
   * The layer for the instrumentation hooks.
   */ instrument: "instrument",
    /**
   * The layer for assets on the edge.
   */ edgeAsset: "edge-asset",
    /**
   * The browser client bundle layer for App directory.
   */ appPagesBrowser: "app-pages-browser",
    /**
   * The server bundle layer for metadata routes.
   */ appMetadataRoute: "app-metadata-route",
    /**
   * The layer for the server bundle for App Route handlers.
   */ appRouteHandler: "app-route-handler"
};
const WEBPACK_LAYERS = {
    ...WEBPACK_LAYERS_NAMES,
    GROUP: {
        serverOnly: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.appMetadataRoute,
            WEBPACK_LAYERS_NAMES.appRouteHandler,
            WEBPACK_LAYERS_NAMES.instrument
        ],
        clientOnly: [
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser
        ],
        nonClientServerTarget: [
            // middleware and pages api
            WEBPACK_LAYERS_NAMES.middleware,
            WEBPACK_LAYERS_NAMES.api
        ],
        app: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.appMetadataRoute,
            WEBPACK_LAYERS_NAMES.appRouteHandler,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser,
            WEBPACK_LAYERS_NAMES.shared,
            WEBPACK_LAYERS_NAMES.instrument
        ]
    }
};
const WEBPACK_RESOURCE_QUERIES = {
    edgeSSREntry: "__next_edge_ssr_entry__",
    metadata: "__next_metadata__",
    metadataRoute: "__next_metadata_route__",
    metadataImageMeta: "__next_metadata_image_meta__"
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 66621:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
    fillMetadataSegment: function() {
        return fillMetadataSegment;
    },
    normalizeMetadataRoute: function() {
        return normalizeMetadataRoute;
    }
});
const _ismetadataroute = __webpack_require__(20616);
const _path = /*#__PURE__*/ _interop_require_default(__webpack_require__(11293));
const _serverutils = __webpack_require__(47262);
const _routeregex = __webpack_require__(55679);
const _hash = __webpack_require__(8785);
const _apppaths = __webpack_require__(78168);
const _normalizepathsep = __webpack_require__(41040);
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/*
 * If there's special convention like (...) or @ in the page path,
 * Give it a unique hash suffix to avoid conflicts
 *
 * e.g.
 * /app/open-graph.tsx -> /open-graph/route
 * /app/(post)/open-graph.tsx -> /open-graph/route-[0-9a-z]{6}
 */ function getMetadataRouteSuffix(page) {
    let suffix = "";
    if (page.includes("(") && page.includes(")") || page.includes("@")) {
        suffix = (0, _hash.djb2Hash)(page).toString(36).slice(0, 6);
    }
    return suffix;
}
function fillMetadataSegment(segment, params, imageSegment) {
    const pathname = (0, _apppaths.normalizeAppPath)(segment);
    const routeRegex = (0, _routeregex.getNamedRouteRegex)(pathname, false);
    const route = (0, _serverutils.interpolateDynamicPath)(pathname, params, routeRegex);
    const suffix = getMetadataRouteSuffix(segment);
    const routeSuffix = suffix ? `-${suffix}` : "";
    const { name, ext } = _path.default.parse(imageSegment);
    return (0, _normalizepathsep.normalizePathSep)(_path.default.join(route, `${name}${routeSuffix}${ext}`));
}
function normalizeMetadataRoute(page) {
    if (!(0, _ismetadataroute.isMetadataRoute)(page)) {
        return page;
    }
    let route = page;
    let suffix = "";
    if (page === "/robots") {
        route += ".txt";
    } else if (page === "/manifest") {
        route += ".webmanifest";
    } else if (page.endsWith("/sitemap")) {
        route += ".xml";
    } else {
        // Remove the file extension, e.g. /route-path/robots.txt -> /route-path
        const pathnamePrefix = page.slice(0, -(_path.default.basename(page).length + 1));
        suffix = getMetadataRouteSuffix(pathnamePrefix);
    }
    // Support both /<metadata-route.ext> and custom routes /<metadata-route>/route.ts.
    // If it's a metadata file route, we need to append /[id]/route to the page.
    if (!route.endsWith("/route")) {
        const { dir, name: baseName, ext } = _path.default.parse(route);
        const isStaticRoute = (0, _ismetadataroute.isStaticMetadataRoute)(page);
        route = _path.default.posix.join(dir, `${baseName}${suffix ? `-${suffix}` : ""}${ext}`, isStaticRoute ? "" : "[[...__metadata_id__]]", "route");
    }
    return route;
}

//# sourceMappingURL=get-metadata-route.js.map

/***/ }),

/***/ 20616:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
    STATIC_METADATA_IMAGES: function() {
        return STATIC_METADATA_IMAGES;
    },
    isMetadataRoute: function() {
        return isMetadataRoute;
    },
    isMetadataRouteFile: function() {
        return isMetadataRouteFile;
    },
    isStaticMetadataRoute: function() {
        return isStaticMetadataRoute;
    },
    isStaticMetadataRouteFile: function() {
        return isStaticMetadataRouteFile;
    }
});
const _normalizepathsep = __webpack_require__(41040);
const STATIC_METADATA_IMAGES = {
    icon: {
        filename: "icon",
        extensions: [
            "ico",
            "jpg",
            "jpeg",
            "png",
            "svg"
        ]
    },
    apple: {
        filename: "apple-icon",
        extensions: [
            "jpg",
            "jpeg",
            "png"
        ]
    },
    favicon: {
        filename: "favicon",
        extensions: [
            "ico"
        ]
    },
    openGraph: {
        filename: "opengraph-image",
        extensions: [
            "jpg",
            "jpeg",
            "png",
            "gif"
        ]
    },
    twitter: {
        filename: "twitter-image",
        extensions: [
            "jpg",
            "jpeg",
            "png",
            "gif"
        ]
    }
};
// Match routes that are metadata routes, e.g. /sitemap.xml, /favicon.<ext>, /<icon>.<ext>, etc.
// TODO-METADATA: support more metadata routes with more extensions
const defaultExtensions = [
    "js",
    "jsx",
    "ts",
    "tsx"
];
const getExtensionRegexString = (extensions)=>`(?:${extensions.join("|")})`;
function isMetadataRouteFile(appDirRelativePath, pageExtensions, withExtension) {
    const metadataRouteFilesRegex = [
        new RegExp(`^[\\\\/]robots${withExtension ? `\\.${getExtensionRegexString(pageExtensions.concat("txt"))}$` : ""}`),
        new RegExp(`^[\\\\/]manifest${withExtension ? `\\.${getExtensionRegexString(pageExtensions.concat("webmanifest", "json"))}$` : ""}`),
        new RegExp(`^[\\\\/]favicon\\.ico$`),
        new RegExp(`[\\\\/]sitemap${withExtension ? `\\.${getExtensionRegexString(pageExtensions.concat("xml"))}$` : ""}`),
        new RegExp(`[\\\\/]${STATIC_METADATA_IMAGES.icon.filename}\\d?${withExtension ? `\\.${getExtensionRegexString(pageExtensions.concat(STATIC_METADATA_IMAGES.icon.extensions))}$` : ""}`),
        new RegExp(`[\\\\/]${STATIC_METADATA_IMAGES.apple.filename}\\d?${withExtension ? `\\.${getExtensionRegexString(pageExtensions.concat(STATIC_METADATA_IMAGES.apple.extensions))}$` : ""}`),
        new RegExp(`[\\\\/]${STATIC_METADATA_IMAGES.openGraph.filename}\\d?${withExtension ? `\\.${getExtensionRegexString(pageExtensions.concat(STATIC_METADATA_IMAGES.openGraph.extensions))}$` : ""}`),
        new RegExp(`[\\\\/]${STATIC_METADATA_IMAGES.twitter.filename}\\d?${withExtension ? `\\.${getExtensionRegexString(pageExtensions.concat(STATIC_METADATA_IMAGES.twitter.extensions))}$` : ""}`)
    ];
    const normalizedAppDirRelativePath = (0, _normalizepathsep.normalizePathSep)(appDirRelativePath);
    return metadataRouteFilesRegex.some((r)=>r.test(normalizedAppDirRelativePath));
}
function isStaticMetadataRouteFile(appDirRelativePath) {
    return isMetadataRouteFile(appDirRelativePath, [], true);
}
function isStaticMetadataRoute(page) {
    return page === "/robots" || page === "/manifest" || isStaticMetadataRouteFile(page);
}
function isMetadataRoute(route) {
    let page = route.replace(/^\/?app\//, "").replace(/\/route$/, "");
    if (page[0] !== "/") page = "/" + page;
    return !page.endsWith("/page") && isMetadataRouteFile(page, defaultExtensions, false);
}

//# sourceMappingURL=is-metadata-route.js.map

/***/ }),

/***/ 91354:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
// ISC License
// Copyright (c) 2021 Alexey Raspopov, Kostiantyn Denysov, Anton Verinov
// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
// ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
// OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
//
// https://github.com/alexeyraspopov/picocolors/blob/b6261487e7b81aaab2440e397a356732cad9e342/picocolors.js#L1

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
    bgBlack: function() {
        return bgBlack;
    },
    bgBlue: function() {
        return bgBlue;
    },
    bgCyan: function() {
        return bgCyan;
    },
    bgGreen: function() {
        return bgGreen;
    },
    bgMagenta: function() {
        return bgMagenta;
    },
    bgRed: function() {
        return bgRed;
    },
    bgWhite: function() {
        return bgWhite;
    },
    bgYellow: function() {
        return bgYellow;
    },
    black: function() {
        return black;
    },
    blue: function() {
        return blue;
    },
    bold: function() {
        return bold;
    },
    cyan: function() {
        return cyan;
    },
    dim: function() {
        return dim;
    },
    gray: function() {
        return gray;
    },
    green: function() {
        return green;
    },
    hidden: function() {
        return hidden;
    },
    inverse: function() {
        return inverse;
    },
    italic: function() {
        return italic;
    },
    magenta: function() {
        return magenta;
    },
    purple: function() {
        return purple;
    },
    red: function() {
        return red;
    },
    reset: function() {
        return reset;
    },
    strikethrough: function() {
        return strikethrough;
    },
    underline: function() {
        return underline;
    },
    white: function() {
        return white;
    },
    yellow: function() {
        return yellow;
    }
});
var _globalThis;
const { env, stdout } = ((_globalThis = globalThis) == null ? void 0 : _globalThis.process) ?? {};
const enabled = env && !env.NO_COLOR && (env.FORCE_COLOR || (stdout == null ? void 0 : stdout.isTTY) && !env.CI && env.TERM !== "dumb");
const replaceClose = (str, close, replace, index)=>{
    const start = str.substring(0, index) + replace;
    const end = str.substring(index + close.length);
    const nextIndex = end.indexOf(close);
    return ~nextIndex ? start + replaceClose(end, close, replace, nextIndex) : start + end;
};
const formatter = (open, close, replace = open)=>{
    if (!enabled) return String;
    return (input)=>{
        const string = "" + input;
        const index = string.indexOf(close, open.length);
        return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
    };
};
const reset = enabled ? (s)=>`\x1b[0m${s}\x1b[0m` : String;
const bold = formatter("\x1b[1m", "\x1b[22m", "\x1b[22m\x1b[1m");
const dim = formatter("\x1b[2m", "\x1b[22m", "\x1b[22m\x1b[2m");
const italic = formatter("\x1b[3m", "\x1b[23m");
const underline = formatter("\x1b[4m", "\x1b[24m");
const inverse = formatter("\x1b[7m", "\x1b[27m");
const hidden = formatter("\x1b[8m", "\x1b[28m");
const strikethrough = formatter("\x1b[9m", "\x1b[29m");
const black = formatter("\x1b[30m", "\x1b[39m");
const red = formatter("\x1b[31m", "\x1b[39m");
const green = formatter("\x1b[32m", "\x1b[39m");
const yellow = formatter("\x1b[33m", "\x1b[39m");
const blue = formatter("\x1b[34m", "\x1b[39m");
const magenta = formatter("\x1b[35m", "\x1b[39m");
const purple = formatter("\x1b[38;2;173;127;168m", "\x1b[39m");
const cyan = formatter("\x1b[36m", "\x1b[39m");
const white = formatter("\x1b[37m", "\x1b[39m");
const gray = formatter("\x1b[90m", "\x1b[39m");
const bgBlack = formatter("\x1b[40m", "\x1b[49m");
const bgRed = formatter("\x1b[41m", "\x1b[49m");
const bgGreen = formatter("\x1b[42m", "\x1b[49m");
const bgYellow = formatter("\x1b[43m", "\x1b[49m");
const bgBlue = formatter("\x1b[44m", "\x1b[49m");
const bgMagenta = formatter("\x1b[45m", "\x1b[49m");
const bgCyan = formatter("\x1b[46m", "\x1b[49m");
const bgWhite = formatter("\x1b[47m", "\x1b[49m");

//# sourceMappingURL=picocolors.js.map

/***/ }),

/***/ 38834:
/***/ ((__unused_webpack_module, exports) => {

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
    getPathname: function() {
        return getPathname;
    },
    isFullStringUrl: function() {
        return isFullStringUrl;
    },
    parseUrl: function() {
        return parseUrl;
    }
});
const DUMMY_ORIGIN = "http://n";
function getUrlWithoutHost(url) {
    return new URL(url, DUMMY_ORIGIN);
}
function getPathname(url) {
    return getUrlWithoutHost(url).pathname;
}
function isFullStringUrl(url) {
    return /https?:\/\//.test(url);
}
function parseUrl(url) {
    let parsed = undefined;
    try {
        parsed = new URL(url, DUMMY_ORIGIN);
    } catch  {}
    return parsed;
}

//# sourceMappingURL=url.js.map

/***/ }),

/***/ 16975:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getCookieParser", ({
    enumerable: true,
    get: function() {
        return getCookieParser;
    }
}));
function getCookieParser(headers) {
    return function parseCookie() {
        const { cookie } = headers;
        if (!cookie) {
            return {};
        }
        const { parse: parseCookieFn } = __webpack_require__(17255);
        return parseCookieFn(Array.isArray(cookie) ? cookie.join("; ") : cookie);
    };
}

//# sourceMappingURL=get-cookie-parser.js.map

/***/ }),

/***/ 6278:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * The functions provided by this module are used to communicate certain properties
 * about the currently running code so that Next.js can make decisions on how to handle
 * the current execution in different rendering modes such as pre-rendering, resuming, and SSR.
 *
 * Today Next.js treats all code as potentially static. Certain APIs may only make sense when dynamically rendering.
 * Traditionally this meant deopting the entire render to dynamic however with PPR we can now deopt parts
 * of a React tree as dynamic while still keeping other parts static. There are really two different kinds of
 * Dynamic indications.
 *
 * The first is simply an intention to be dynamic. unstable_noStore is an example of this where
 * the currently executing code simply declares that the current scope is dynamic but if you use it
 * inside unstable_cache it can still be cached. This type of indication can be removed if we ever
 * make the default dynamic to begin with because the only way you would ever be static is inside
 * a cache scope which this indication does not affect.
 *
 * The second is an indication that a dynamic data source was read. This is a stronger form of dynamic
 * because it means that it is inappropriate to cache this at all. using a dynamic data source inside
 * unstable_cache should error. If you want to use some dynamic data inside unstable_cache you should
 * read that data outside the cache and pass it in as an argument to the cached function.
 */ // Once postpone is in stable we should switch to importing the postpone export directly

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
    Postpone: function() {
        return Postpone;
    },
    createPostponedAbortSignal: function() {
        return createPostponedAbortSignal;
    },
    createPrerenderState: function() {
        return createPrerenderState;
    },
    formatDynamicAPIAccesses: function() {
        return formatDynamicAPIAccesses;
    },
    markCurrentScopeAsDynamic: function() {
        return markCurrentScopeAsDynamic;
    },
    trackDynamicDataAccessed: function() {
        return trackDynamicDataAccessed;
    },
    trackDynamicFetch: function() {
        return trackDynamicFetch;
    },
    usedDynamicAPIs: function() {
        return usedDynamicAPIs;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(__webpack_require__(71159));
const _hooksservercontext = __webpack_require__(44789);
const _staticgenerationbailout = __webpack_require__(24618);
const _url = __webpack_require__(38834);
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const hasPostpone = typeof _react.default.unstable_postpone === "function";
function createPrerenderState(isDebugSkeleton) {
    return {
        isDebugSkeleton,
        dynamicAccesses: []
    };
}
function markCurrentScopeAsDynamic(store, expression) {
    const pathname = (0, _url.getPathname)(store.urlPathname);
    if (store.isUnstableCacheCallback) {
        // inside cache scopes marking a scope as dynamic has no effect because the outer cache scope
        // creates a cache boundary. This is subtly different from reading a dynamic data source which is
        // forbidden inside a cache scope.
        return;
    } else if (store.dynamicShouldError) {
        throw new _staticgenerationbailout.StaticGenBailoutError(`Route ${pathname} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
    } else if (// We are in a prerender (PPR enabled, during build)
    store.prerenderState) {
        // We track that we had a dynamic scope that postponed.
        // This will be used by the renderer to decide whether
        // the prerender requires a resume
        postponeWithTracking(store.prerenderState, expression, pathname);
    } else {
        store.revalidate = 0;
        if (store.isStaticGeneration) {
            // We aren't prerendering but we are generating a static page. We need to bail out of static generation
            const err = new _hooksservercontext.DynamicServerError(`Route ${pathname} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
            store.dynamicUsageDescription = expression;
            store.dynamicUsageStack = err.stack;
            throw err;
        }
    }
}
function trackDynamicDataAccessed(store, expression) {
    const pathname = (0, _url.getPathname)(store.urlPathname);
    if (store.isUnstableCacheCallback) {
        throw new Error(`Route ${pathname} used "${expression}" inside a function cached with "unstable_cache(...)". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "${expression}" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`);
    } else if (store.dynamicShouldError) {
        throw new _staticgenerationbailout.StaticGenBailoutError(`Route ${pathname} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
    } else if (// We are in a prerender (PPR enabled, during build)
    store.prerenderState) {
        // We track that we had a dynamic scope that postponed.
        // This will be used by the renderer to decide whether
        // the prerender requires a resume
        postponeWithTracking(store.prerenderState, expression, pathname);
    } else {
        store.revalidate = 0;
        if (store.isStaticGeneration) {
            // We aren't prerendering but we are generating a static page. We need to bail out of static generation
            const err = new _hooksservercontext.DynamicServerError(`Route ${pathname} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
            store.dynamicUsageDescription = expression;
            store.dynamicUsageStack = err.stack;
            throw err;
        }
    }
}
function Postpone({ reason, prerenderState, pathname }) {
    postponeWithTracking(prerenderState, reason, pathname);
}
function trackDynamicFetch(store, expression) {
    if (store.prerenderState) {
        postponeWithTracking(store.prerenderState, expression, store.urlPathname);
    }
}
function postponeWithTracking(prerenderState, expression, pathname) {
    assertPostpone();
    const reason = `Route ${pathname} needs to bail out of prerendering at this point because it used ${expression}. ` + `React throws this special object to indicate where. It should not be caught by ` + `your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
    prerenderState.dynamicAccesses.push({
        // When we aren't debugging, we don't need to create another error for the
        // stack trace.
        stack: prerenderState.isDebugSkeleton ? new Error().stack : undefined,
        expression
    });
    _react.default.unstable_postpone(reason);
}
function usedDynamicAPIs(prerenderState) {
    return prerenderState.dynamicAccesses.length > 0;
}
function formatDynamicAPIAccesses(prerenderState) {
    return prerenderState.dynamicAccesses.filter((access)=>typeof access.stack === "string" && access.stack.length > 0).map(({ expression, stack })=>{
        stack = stack.split("\n")// Remove the "Error: " prefix from the first line of the stack trace as
        // well as the first 4 lines of the stack trace which is the distance
        // from the user code and the `new Error().stack` call.
        .slice(4).filter((line)=>{
            // Exclude Next.js internals from the stack trace.
            if (line.includes("node_modules/next/")) {
                return false;
            }
            // Exclude anonymous functions from the stack trace.
            if (line.includes(" (<anonymous>)")) {
                return false;
            }
            // Exclude Node.js internals from the stack trace.
            if (line.includes(" (node:")) {
                return false;
            }
            return true;
        }).join("\n");
        return `Dynamic API Usage Debug - ${expression}:\n${stack}`;
    });
}
function assertPostpone() {
    if (!hasPostpone) {
        throw new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`);
    }
}
function createPostponedAbortSignal(reason) {
    assertPostpone();
    const controller = new AbortController();
    // We get our hands on a postpone instance by calling postpone and catching the throw
    try {
        _react.default.unstable_postpone(reason);
    } catch (x) {
        controller.abort(x);
    }
    return controller.signal;
}

//# sourceMappingURL=dynamic-rendering.js.map

/***/ }),

/***/ 95231:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
// eslint-disable-next-line import/no-extraneous-dependencies

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
    AppRouter: function() {
        return _approuter.default;
    },
    ClientPageRoot: function() {
        return _clientpage.ClientPageRoot;
    },
    LayoutRouter: function() {
        return _layoutrouter.default;
    },
    NotFoundBoundary: function() {
        return _notfoundboundary.NotFoundBoundary;
    },
    Postpone: function() {
        return _postpone.Postpone;
    },
    RenderFromTemplateContext: function() {
        return _renderfromtemplatecontext.default;
    },
    actionAsyncStorage: function() {
        return _actionasyncstorageexternal.actionAsyncStorage;
    },
    createDynamicallyTrackedSearchParams: function() {
        return _searchparams.createDynamicallyTrackedSearchParams;
    },
    createUntrackedSearchParams: function() {
        return _searchparams.createUntrackedSearchParams;
    },
    decodeAction: function() {
        return _serveredge.decodeAction;
    },
    decodeFormState: function() {
        return _serveredge.decodeFormState;
    },
    decodeReply: function() {
        return _serveredge.decodeReply;
    },
    patchFetch: function() {
        return patchFetch;
    },
    preconnect: function() {
        return _preloads.preconnect;
    },
    preloadFont: function() {
        return _preloads.preloadFont;
    },
    preloadStyle: function() {
        return _preloads.preloadStyle;
    },
    renderToReadableStream: function() {
        return _serveredge.renderToReadableStream;
    },
    requestAsyncStorage: function() {
        return _requestasyncstorageexternal.requestAsyncStorage;
    },
    serverHooks: function() {
        return _hooksservercontext;
    },
    staticGenerationAsyncStorage: function() {
        return _staticgenerationasyncstorageexternal.staticGenerationAsyncStorage;
    },
    taintObjectReference: function() {
        return _taint.taintObjectReference;
    }
});
const _serveredge = __webpack_require__(51749);
const _approuter = /*#__PURE__*/ _interop_require_default(__webpack_require__(59943));
const _layoutrouter = /*#__PURE__*/ _interop_require_default(__webpack_require__(95106));
const _renderfromtemplatecontext = /*#__PURE__*/ _interop_require_default(__webpack_require__(84892));
const _staticgenerationasyncstorageexternal = __webpack_require__(45869);
const _requestasyncstorageexternal = __webpack_require__(54580);
const _actionasyncstorageexternal = __webpack_require__(72934);
const _clientpage = __webpack_require__(53144);
const _searchparams = __webpack_require__(79181);
const _hooksservercontext = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(44789));
const _notfoundboundary = __webpack_require__(60525);
const _patchfetch = __webpack_require__(60670);
__webpack_require__(37922);
const _preloads = __webpack_require__(20135);
const _postpone = __webpack_require__(49257);
const _taint = __webpack_require__(526);
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
// patchFetch makes use of APIs such as `React.unstable_postpone` which are only available
// in the experimental channel of React, so export it from here so that it comes from the bundled runtime
function patchFetch() {
    return (0, _patchfetch.patchFetch)({
        serverHooks: _hooksservercontext,
        staticGenerationAsyncStorage: _staticgenerationasyncstorageexternal.staticGenerationAsyncStorage
    });
}

//# sourceMappingURL=entry-base.js.map

/***/ }),

/***/ 49257:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*

Files in the rsc directory are meant to be packaged as part of the RSC graph using next-app-loader.

*/ // When postpone is available in canary React we can switch to importing it directly

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "Postpone", ({
    enumerable: true,
    get: function() {
        return _dynamicrendering.Postpone;
    }
}));
const _dynamicrendering = __webpack_require__(6278);

//# sourceMappingURL=postpone.js.map

/***/ }),

/***/ 20135:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*

Files in the rsc directory are meant to be packaged as part of the RSC graph using next-app-loader.

*/ 
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
    preconnect: function() {
        return preconnect;
    },
    preloadFont: function() {
        return preloadFont;
    },
    preloadStyle: function() {
        return preloadStyle;
    }
});
const _reactdom = /*#__PURE__*/ _interop_require_default(__webpack_require__(97049));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function preloadStyle(href, crossOrigin) {
    const opts = {
        as: "style"
    };
    if (typeof crossOrigin === "string") {
        opts.crossOrigin = crossOrigin;
    }
    _reactdom.default.preload(href, opts);
}
function preloadFont(href, type, crossOrigin) {
    const opts = {
        as: "font",
        type
    };
    if (typeof crossOrigin === "string") {
        opts.crossOrigin = crossOrigin;
    }
    _reactdom.default.preload(href, opts);
}
function preconnect(href, crossOrigin) {
    _reactdom.default.preconnect(href, typeof crossOrigin === "string" ? {
        crossOrigin
    } : undefined);
}

//# sourceMappingURL=preloads.js.map

/***/ }),

/***/ 526:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*

Files in the rsc directory are meant to be packaged as part of the RSC graph using next-app-loader.

*/ 
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
    taintObjectReference: function() {
        return taintObjectReference;
    },
    taintUniqueValue: function() {
        return taintUniqueValue;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(71159));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function notImplemented() {
    throw new Error("Taint can only be used with the taint flag.");
}
const taintObjectReference =  false ? 0 : notImplemented;
const taintUniqueValue =  false ? 0 : notImplemented;

//# sourceMappingURL=taint.js.map

/***/ }),

/***/ 11586:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
    INTERCEPTION_ROUTE_MARKERS: function() {
        return INTERCEPTION_ROUTE_MARKERS;
    },
    extractInterceptionRouteInformation: function() {
        return extractInterceptionRouteInformation;
    },
    isInterceptionRouteAppPath: function() {
        return isInterceptionRouteAppPath;
    }
});
const _apppaths = __webpack_require__(78168);
const INTERCEPTION_ROUTE_MARKERS = [
    "(..)(..)",
    "(.)",
    "(..)",
    "(...)"
];
function isInterceptionRouteAppPath(path) {
    // TODO-APP: add more serious validation
    return path.split("/").find((segment)=>INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m))) !== undefined;
}
function extractInterceptionRouteInformation(path) {
    let interceptingRoute, marker, interceptedRoute;
    for (const segment of path.split("/")){
        marker = INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
        if (marker) {
            [interceptingRoute, interceptedRoute] = path.split(marker, 2);
            break;
        }
    }
    if (!interceptingRoute || !marker || !interceptedRoute) {
        throw new Error(`Invalid interception route: ${path}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);
    }
    interceptingRoute = (0, _apppaths.normalizeAppPath)(interceptingRoute) // normalize the path, e.g. /(blog)/feed -> /feed
    ;
    switch(marker){
        case "(.)":
            // (.) indicates that we should match with sibling routes, so we just need to append the intercepted route to the intercepting route
            if (interceptingRoute === "/") {
                interceptedRoute = `/${interceptedRoute}`;
            } else {
                interceptedRoute = interceptingRoute + "/" + interceptedRoute;
            }
            break;
        case "(..)":
            // (..) indicates that we should match at one level up, so we need to remove the last segment of the intercepting route
            if (interceptingRoute === "/") {
                throw new Error(`Invalid interception route: ${path}. Cannot use (..) marker at the root level, use (.) instead.`);
            }
            interceptedRoute = interceptingRoute.split("/").slice(0, -1).concat(interceptedRoute).join("/");
            break;
        case "(...)":
            // (...) will match the route segment in the root directory, so we need to use the root directory to prepend the intercepted route
            interceptedRoute = "/" + interceptedRoute;
            break;
        case "(..)(..)":
            // (..)(..) indicates that we should match at two levels up, so we need to remove the last two segments of the intercepting route
            const splitInterceptingRoute = interceptingRoute.split("/");
            if (splitInterceptingRoute.length <= 2) {
                throw new Error(`Invalid interception route: ${path}. Cannot use (..)(..) marker at the root level or one level up.`);
            }
            interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join("/");
            break;
        default:
            throw new Error("Invariant: unexpected marker");
    }
    return {
        interceptingRoute,
        interceptedRoute
    };
}

//# sourceMappingURL=interception-routes.js.map

/***/ }),

/***/ 88716:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "x", ({
    enumerable: true,
    get: function() {
        return RouteKind;
    }
}));
var RouteKind;
(function(RouteKind) {
    /**
   * `PAGES` represents all the React pages that are under `pages/`.
   */ RouteKind["PAGES"] = "PAGES";
    /**
   * `PAGES_API` represents all the API routes under `pages/api/`.
   */ RouteKind["PAGES_API"] = "PAGES_API";
    /**
   * `APP_PAGE` represents all the React pages that are under `app/` with the
   * filename of `page.{j,t}s{,x}`.
   */ RouteKind["APP_PAGE"] = "APP_PAGE";
    /**
   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the
   * filename of `route.{j,t}s{,x}`.
   */ RouteKind["APP_ROUTE"] = "APP_ROUTE";
})(RouteKind || (RouteKind = {}));

//# sourceMappingURL=route-kind.js.map

/***/ }),

/***/ 23191:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (false) {} else {
    if (false) {} else {
        if (false) {} else if (false) {} else {
            module.exports = __webpack_require__(20399);
        }
    }
}

//# sourceMappingURL=module.compiled.js.map

/***/ }),

/***/ 97049:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(23191).vendored["react-rsc"].ReactDOM;

//# sourceMappingURL=react-dom.js.map

/***/ }),

/***/ 19510:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(23191).vendored["react-rsc"].ReactJsxRuntime;

//# sourceMappingURL=react-jsx-runtime.js.map

/***/ }),

/***/ 51749:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(23191).vendored["react-rsc"].ReactServerDOMWebpackServerEdge;

//# sourceMappingURL=react-server-dom-webpack-server-edge.js.map

/***/ }),

/***/ 71159:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(23191).vendored["react-rsc"].React;

//# sourceMappingURL=react.js.map

/***/ }),

/***/ 49303:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (false) {} else {
    if (false) {} else {
        if (false) {} else if (false) {} else {
            module.exports = __webpack_require__(30517);
        }
    }
}

//# sourceMappingURL=module.compiled.js.map

/***/ }),

/***/ 60670:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
    addImplicitTags: function() {
        return addImplicitTags;
    },
    patchFetch: function() {
        return patchFetch;
    },
    validateRevalidate: function() {
        return validateRevalidate;
    },
    validateTags: function() {
        return validateTags;
    }
});
const _constants = __webpack_require__(71376);
const _tracer = __webpack_require__(64994);
const _constants1 = __webpack_require__(11943);
const _log = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(48839));
const _dynamicrendering = __webpack_require__(6278);
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const isEdgeRuntime = "nodejs" === "edge";
function isPatchedFetch(fetch) {
    return "__nextPatched" in fetch && fetch.__nextPatched === true;
}
function validateRevalidate(revalidateVal, pathname) {
    try {
        let normalizedRevalidate = undefined;
        if (revalidateVal === false) {
            normalizedRevalidate = revalidateVal;
        } else if (typeof revalidateVal === "number" && !isNaN(revalidateVal) && revalidateVal > -1) {
            normalizedRevalidate = revalidateVal;
        } else if (typeof revalidateVal !== "undefined") {
            throw new Error(`Invalid revalidate value "${revalidateVal}" on "${pathname}", must be a non-negative number or "false"`);
        }
        return normalizedRevalidate;
    } catch (err) {
        // handle client component error from attempting to check revalidate value
        if (err instanceof Error && err.message.includes("Invalid revalidate")) {
            throw err;
        }
        return undefined;
    }
}
function validateTags(tags, description) {
    const validTags = [];
    const invalidTags = [];
    for(let i = 0; i < tags.length; i++){
        const tag = tags[i];
        if (typeof tag !== "string") {
            invalidTags.push({
                tag,
                reason: "invalid type, must be a string"
            });
        } else if (tag.length > _constants1.NEXT_CACHE_TAG_MAX_LENGTH) {
            invalidTags.push({
                tag,
                reason: `exceeded max length of ${_constants1.NEXT_CACHE_TAG_MAX_LENGTH}`
            });
        } else {
            validTags.push(tag);
        }
        if (validTags.length > _constants1.NEXT_CACHE_TAG_MAX_ITEMS) {
            console.warn(`Warning: exceeded max tag count for ${description}, dropped tags:`, tags.slice(i).join(", "));
            break;
        }
    }
    if (invalidTags.length > 0) {
        console.warn(`Warning: invalid tags passed to ${description}: `);
        for (const { tag, reason } of invalidTags){
            console.log(`tag: "${tag}" ${reason}`);
        }
    }
    return validTags;
}
const getDerivedTags = (pathname)=>{
    const derivedTags = [
        `/layout`
    ];
    // we automatically add the current path segments as tags
    // for revalidatePath handling
    if (pathname.startsWith("/")) {
        const pathnameParts = pathname.split("/");
        for(let i = 1; i < pathnameParts.length + 1; i++){
            let curPathname = pathnameParts.slice(0, i).join("/");
            if (curPathname) {
                // all derived tags other than the page are layout tags
                if (!curPathname.endsWith("/page") && !curPathname.endsWith("/route")) {
                    curPathname = `${curPathname}${!curPathname.endsWith("/") ? "/" : ""}layout`;
                }
                derivedTags.push(curPathname);
            }
        }
    }
    return derivedTags;
};
function addImplicitTags(staticGenerationStore) {
    const newTags = [];
    const { pagePath, urlPathname } = staticGenerationStore;
    if (!Array.isArray(staticGenerationStore.tags)) {
        staticGenerationStore.tags = [];
    }
    if (pagePath) {
        const derivedTags = getDerivedTags(pagePath);
        for (let tag of derivedTags){
            var _staticGenerationStore_tags;
            tag = `${_constants1.NEXT_CACHE_IMPLICIT_TAG_ID}${tag}`;
            if (!((_staticGenerationStore_tags = staticGenerationStore.tags) == null ? void 0 : _staticGenerationStore_tags.includes(tag))) {
                staticGenerationStore.tags.push(tag);
            }
            newTags.push(tag);
        }
    }
    if (urlPathname) {
        var _staticGenerationStore_tags1;
        const parsedPathname = new URL(urlPathname, "http://n").pathname;
        const tag = `${_constants1.NEXT_CACHE_IMPLICIT_TAG_ID}${parsedPathname}`;
        if (!((_staticGenerationStore_tags1 = staticGenerationStore.tags) == null ? void 0 : _staticGenerationStore_tags1.includes(tag))) {
            staticGenerationStore.tags.push(tag);
        }
        newTags.push(tag);
    }
    return newTags;
}
function trackFetchMetric(staticGenerationStore, ctx) {
    var _staticGenerationStore_requestEndedState;
    if (!staticGenerationStore || ((_staticGenerationStore_requestEndedState = staticGenerationStore.requestEndedState) == null ? void 0 : _staticGenerationStore_requestEndedState.ended) || "production" !== "development") {
        return;
    }
    staticGenerationStore.fetchMetrics ??= [];
    const dedupeFields = [
        "url",
        "status",
        "method"
    ];
    // don't add metric if one already exists for the fetch
    if (staticGenerationStore.fetchMetrics.some((metric)=>dedupeFields.every((field)=>metric[field] === ctx[field]))) {
        return;
    }
    staticGenerationStore.fetchMetrics.push({
        ...ctx,
        end: Date.now(),
        idx: staticGenerationStore.nextFetchId || 0
    });
    // only store top 10 metrics to avoid storing too many
    if (staticGenerationStore.fetchMetrics.length > 10) {
        // sort slowest first as these should be highlighted
        staticGenerationStore.fetchMetrics.sort((a, b)=>{
            const aDur = a.end - a.start;
            const bDur = b.end - b.start;
            if (aDur < bDur) {
                return 1;
            } else if (aDur > bDur) {
                return -1;
            }
            return 0;
        });
        // now grab top 10
        staticGenerationStore.fetchMetrics = staticGenerationStore.fetchMetrics.slice(0, 10);
    }
}
function createPatchedFetcher(originFetch, { serverHooks: { DynamicServerError }, staticGenerationAsyncStorage }) {
    // Create the patched fetch function. We don't set the type here, as it's
    // verified as the return value of this function.
    const patched = async (input, init)=>{
        var _init_method, _init_next;
        let url;
        try {
            url = new URL(input instanceof Request ? input.url : input);
            url.username = "";
            url.password = "";
        } catch  {
            // Error caused by malformed URL should be handled by native fetch
            url = undefined;
        }
        const fetchUrl = (url == null ? void 0 : url.href) ?? "";
        const fetchStart = Date.now();
        const method = (init == null ? void 0 : (_init_method = init.method) == null ? void 0 : _init_method.toUpperCase()) || "GET";
        // Do create a new span trace for internal fetches in the
        // non-verbose mode.
        const isInternal = (init == null ? void 0 : (_init_next = init.next) == null ? void 0 : _init_next.internal) === true;
        const hideSpan = process.env.NEXT_OTEL_FETCH_DISABLED === "1";
        return (0, _tracer.getTracer)().trace(isInternal ? _constants.NextNodeServerSpan.internalFetch : _constants.AppRenderSpan.fetch, {
            hideSpan,
            kind: _tracer.SpanKind.CLIENT,
            spanName: [
                "fetch",
                method,
                fetchUrl
            ].filter(Boolean).join(" "),
            attributes: {
                "http.url": fetchUrl,
                "http.method": method,
                "net.peer.name": url == null ? void 0 : url.hostname,
                "net.peer.port": (url == null ? void 0 : url.port) || undefined
            }
        }, async ()=>{
            var _getRequestMeta;
            // If this is an internal fetch, we should not do any special treatment.
            if (isInternal) return originFetch(input, init);
            const staticGenerationStore = staticGenerationAsyncStorage.getStore();
            // If the staticGenerationStore is not available, we can't do any
            // special treatment of fetch, therefore fallback to the original
            // fetch implementation.
            if (!staticGenerationStore || staticGenerationStore.isDraftMode) {
                return originFetch(input, init);
            }
            const isRequestInput = input && typeof input === "object" && typeof input.method === "string";
            const getRequestMeta = (field)=>{
                // If request input is present but init is not, retrieve from input first.
                const value = init == null ? void 0 : init[field];
                return value || (isRequestInput ? input[field] : null);
            };
            let revalidate = undefined;
            const getNextField = (field)=>{
                var _init_next, _init_next1, _input_next;
                return typeof (init == null ? void 0 : (_init_next = init.next) == null ? void 0 : _init_next[field]) !== "undefined" ? init == null ? void 0 : (_init_next1 = init.next) == null ? void 0 : _init_next1[field] : isRequestInput ? (_input_next = input.next) == null ? void 0 : _input_next[field] : undefined;
            };
            // RequestInit doesn't keep extra fields e.g. next so it's
            // only available if init is used separate
            let curRevalidate = getNextField("revalidate");
            const tags = validateTags(getNextField("tags") || [], `fetch ${input.toString()}`);
            if (Array.isArray(tags)) {
                if (!staticGenerationStore.tags) {
                    staticGenerationStore.tags = [];
                }
                for (const tag of tags){
                    if (!staticGenerationStore.tags.includes(tag)) {
                        staticGenerationStore.tags.push(tag);
                    }
                }
            }
            const implicitTags = addImplicitTags(staticGenerationStore);
            const fetchCacheMode = staticGenerationStore.fetchCache;
            const isUsingNoStore = !!staticGenerationStore.isUnstableNoStore;
            let _cache = getRequestMeta("cache");
            let cacheReason = "";
            if (typeof _cache === "string" && typeof curRevalidate !== "undefined") {
                // when providing fetch with a Request input, it'll automatically set a cache value of 'default'
                // we only want to warn if the user is explicitly setting a cache value
                if (!(isRequestInput && _cache === "default")) {
                    _log.warn(`fetch for ${fetchUrl} on ${staticGenerationStore.urlPathname} specified "cache: ${_cache}" and "revalidate: ${curRevalidate}", only one should be specified.`);
                }
                _cache = undefined;
            }
            if (_cache === "force-cache") {
                curRevalidate = false;
            } else if (_cache === "no-cache" || _cache === "no-store" || fetchCacheMode === "force-no-store" || fetchCacheMode === "only-no-store") {
                curRevalidate = 0;
            }
            if (_cache === "no-cache" || _cache === "no-store") {
                cacheReason = `cache: ${_cache}`;
            }
            revalidate = validateRevalidate(curRevalidate, staticGenerationStore.urlPathname);
            const _headers = getRequestMeta("headers");
            const initHeaders = typeof (_headers == null ? void 0 : _headers.get) === "function" ? _headers : new Headers(_headers || {});
            const hasUnCacheableHeader = initHeaders.get("authorization") || initHeaders.get("cookie");
            const isUnCacheableMethod = ![
                "get",
                "head"
            ].includes(((_getRequestMeta = getRequestMeta("method")) == null ? void 0 : _getRequestMeta.toLowerCase()) || "get");
            // if there are authorized headers or a POST method and
            // dynamic data usage was present above the tree we bail
            // e.g. if cookies() is used before an authed/POST fetch
            const autoNoCache = (hasUnCacheableHeader || isUnCacheableMethod) && staticGenerationStore.revalidate === 0;
            switch(fetchCacheMode){
                case "force-no-store":
                    {
                        cacheReason = "fetchCache = force-no-store";
                        break;
                    }
                case "only-no-store":
                    {
                        if (_cache === "force-cache" || typeof revalidate !== "undefined" && (revalidate === false || revalidate > 0)) {
                            throw new Error(`cache: 'force-cache' used on fetch for ${fetchUrl} with 'export const fetchCache = 'only-no-store'`);
                        }
                        cacheReason = "fetchCache = only-no-store";
                        break;
                    }
                case "only-cache":
                    {
                        if (_cache === "no-store") {
                            throw new Error(`cache: 'no-store' used on fetch for ${fetchUrl} with 'export const fetchCache = 'only-cache'`);
                        }
                        break;
                    }
                case "force-cache":
                    {
                        if (typeof curRevalidate === "undefined" || curRevalidate === 0) {
                            cacheReason = "fetchCache = force-cache";
                            revalidate = false;
                        }
                        break;
                    }
                default:
            }
            if (typeof revalidate === "undefined") {
                if (fetchCacheMode === "default-cache") {
                    revalidate = false;
                    cacheReason = "fetchCache = default-cache";
                } else if (autoNoCache) {
                    revalidate = 0;
                    cacheReason = "auto no cache";
                } else if (fetchCacheMode === "default-no-store") {
                    revalidate = 0;
                    cacheReason = "fetchCache = default-no-store";
                } else if (isUsingNoStore) {
                    revalidate = 0;
                    cacheReason = "noStore call";
                } else {
                    cacheReason = "auto cache";
                    revalidate = typeof staticGenerationStore.revalidate === "boolean" || typeof staticGenerationStore.revalidate === "undefined" ? false : staticGenerationStore.revalidate;
                }
            } else if (!cacheReason) {
                cacheReason = `revalidate: ${revalidate}`;
            }
            if (// when force static is configured we don't bail from
            // `revalidate: 0` values
            !(staticGenerationStore.forceStatic && revalidate === 0) && // we don't consider autoNoCache to switch to dynamic during
            // revalidate although if it occurs during build we do
            !autoNoCache && // If the revalidate value isn't currently set or the value is less
            // than the current revalidate value, we should update the revalidate
            // value.
            (typeof staticGenerationStore.revalidate === "undefined" || typeof revalidate === "number" && (staticGenerationStore.revalidate === false || typeof staticGenerationStore.revalidate === "number" && revalidate < staticGenerationStore.revalidate))) {
                // If we were setting the revalidate value to 0, we should try to
                // postpone instead first.
                if (revalidate === 0) {
                    (0, _dynamicrendering.trackDynamicFetch)(staticGenerationStore, "revalidate: 0");
                }
                staticGenerationStore.revalidate = revalidate;
            }
            const isCacheableRevalidate = typeof revalidate === "number" && revalidate > 0 || revalidate === false;
            let cacheKey;
            if (staticGenerationStore.incrementalCache && isCacheableRevalidate) {
                try {
                    cacheKey = await staticGenerationStore.incrementalCache.fetchCacheKey(fetchUrl, isRequestInput ? input : init);
                } catch (err) {
                    console.error(`Failed to generate cache key for`, input);
                }
            }
            const fetchIdx = staticGenerationStore.nextFetchId ?? 1;
            staticGenerationStore.nextFetchId = fetchIdx + 1;
            const normalizedRevalidate = typeof revalidate !== "number" ? _constants1.CACHE_ONE_YEAR : revalidate;
            const doOriginalFetch = async (isStale, cacheReasonOverride)=>{
                const requestInputFields = [
                    "cache",
                    "credentials",
                    "headers",
                    "integrity",
                    "keepalive",
                    "method",
                    "mode",
                    "redirect",
                    "referrer",
                    "referrerPolicy",
                    "window",
                    "duplex",
                    // don't pass through signal when revalidating
                    ...isStale ? [] : [
                        "signal"
                    ]
                ];
                if (isRequestInput) {
                    const reqInput = input;
                    const reqOptions = {
                        body: reqInput._ogBody || reqInput.body
                    };
                    for (const field of requestInputFields){
                        // @ts-expect-error custom fields
                        reqOptions[field] = reqInput[field];
                    }
                    input = new Request(reqInput.url, reqOptions);
                } else if (init) {
                    const { _ogBody, body, signal, ...otherInput } = init;
                    init = {
                        ...otherInput,
                        body: _ogBody || body,
                        signal: isStale ? undefined : signal
                    };
                }
                // add metadata to init without editing the original
                const clonedInit = {
                    ...init,
                    next: {
                        ...init == null ? void 0 : init.next,
                        fetchType: "origin",
                        fetchIdx
                    }
                };
                return originFetch(input, clonedInit).then(async (res)=>{
                    if (!isStale) {
                        trackFetchMetric(staticGenerationStore, {
                            start: fetchStart,
                            url: fetchUrl,
                            cacheReason: cacheReasonOverride || cacheReason,
                            cacheStatus: revalidate === 0 || cacheReasonOverride ? "skip" : "miss",
                            status: res.status,
                            method: clonedInit.method || "GET"
                        });
                    }
                    if (res.status === 200 && staticGenerationStore.incrementalCache && cacheKey && isCacheableRevalidate) {
                        const bodyBuffer = Buffer.from(await res.arrayBuffer());
                        try {
                            await staticGenerationStore.incrementalCache.set(cacheKey, {
                                kind: "FETCH",
                                data: {
                                    headers: Object.fromEntries(res.headers.entries()),
                                    body: bodyBuffer.toString("base64"),
                                    status: res.status,
                                    url: res.url
                                },
                                revalidate: normalizedRevalidate
                            }, {
                                fetchCache: true,
                                revalidate,
                                fetchUrl,
                                fetchIdx,
                                tags
                            });
                        } catch (err) {
                            console.warn(`Failed to set fetch cache`, input, err);
                        }
                        const response = new Response(bodyBuffer, {
                            headers: new Headers(res.headers),
                            status: res.status
                        });
                        Object.defineProperty(response, "url", {
                            value: res.url
                        });
                        return response;
                    }
                    return res;
                });
            };
            let handleUnlock = ()=>Promise.resolve();
            let cacheReasonOverride;
            let isForegroundRevalidate = false;
            if (cacheKey && staticGenerationStore.incrementalCache) {
                handleUnlock = await staticGenerationStore.incrementalCache.lock(cacheKey);
                const entry = staticGenerationStore.isOnDemandRevalidate ? null : await staticGenerationStore.incrementalCache.get(cacheKey, {
                    kindHint: "fetch",
                    revalidate,
                    fetchUrl,
                    fetchIdx,
                    tags,
                    softTags: implicitTags
                });
                if (entry) {
                    await handleUnlock();
                } else {
                    // in dev, incremental cache response will be null in case the browser adds `cache-control: no-cache` in the request headers
                    cacheReasonOverride = "cache-control: no-cache (hard refresh)";
                }
                if ((entry == null ? void 0 : entry.value) && entry.value.kind === "FETCH") {
                    // when stale and is revalidating we wait for fresh data
                    // so the revalidated entry has the updated data
                    if (staticGenerationStore.isRevalidate && entry.isStale) {
                        isForegroundRevalidate = true;
                    } else {
                        if (entry.isStale) {
                            staticGenerationStore.pendingRevalidates ??= {};
                            if (!staticGenerationStore.pendingRevalidates[cacheKey]) {
                                staticGenerationStore.pendingRevalidates[cacheKey] = doOriginalFetch(true).catch(console.error).finally(()=>{
                                    staticGenerationStore.pendingRevalidates ??= {};
                                    delete staticGenerationStore.pendingRevalidates[cacheKey || ""];
                                });
                            }
                        }
                        const resData = entry.value.data;
                        trackFetchMetric(staticGenerationStore, {
                            start: fetchStart,
                            url: fetchUrl,
                            cacheReason,
                            cacheStatus: "hit",
                            status: resData.status || 200,
                            method: (init == null ? void 0 : init.method) || "GET"
                        });
                        const response = new Response(Buffer.from(resData.body, "base64"), {
                            headers: resData.headers,
                            status: resData.status
                        });
                        Object.defineProperty(response, "url", {
                            value: entry.value.data.url
                        });
                        return response;
                    }
                }
            }
            if (staticGenerationStore.isStaticGeneration && init && typeof init === "object") {
                const { cache } = init;
                // Delete `cache` property as Cloudflare Workers will throw an error
                if (isEdgeRuntime) delete init.cache;
                if (!staticGenerationStore.forceStatic && cache === "no-store") {
                    const dynamicUsageReason = `no-store fetch ${input}${staticGenerationStore.urlPathname ? ` ${staticGenerationStore.urlPathname}` : ""}`;
                    // If enabled, we should bail out of static generation.
                    (0, _dynamicrendering.trackDynamicFetch)(staticGenerationStore, dynamicUsageReason);
                    // PPR is not enabled, or React postpone is not available, we
                    // should set the revalidate to 0.
                    staticGenerationStore.revalidate = 0;
                    const err = new DynamicServerError(dynamicUsageReason);
                    staticGenerationStore.dynamicUsageErr = err;
                    staticGenerationStore.dynamicUsageDescription = dynamicUsageReason;
                    throw err;
                }
                const hasNextConfig = "next" in init;
                const { next = {} } = init;
                if (typeof next.revalidate === "number" && (typeof staticGenerationStore.revalidate === "undefined" || typeof staticGenerationStore.revalidate === "number" && next.revalidate < staticGenerationStore.revalidate)) {
                    if (!staticGenerationStore.forceDynamic && !staticGenerationStore.forceStatic && next.revalidate === 0) {
                        const dynamicUsageReason = `revalidate: 0 fetch ${input}${staticGenerationStore.urlPathname ? ` ${staticGenerationStore.urlPathname}` : ""}`;
                        // If enabled, we should bail out of static generation.
                        (0, _dynamicrendering.trackDynamicFetch)(staticGenerationStore, dynamicUsageReason);
                        const err = new DynamicServerError(dynamicUsageReason);
                        staticGenerationStore.dynamicUsageErr = err;
                        staticGenerationStore.dynamicUsageDescription = dynamicUsageReason;
                        throw err;
                    }
                    if (!staticGenerationStore.forceStatic || next.revalidate !== 0) {
                        staticGenerationStore.revalidate = next.revalidate;
                    }
                }
                if (hasNextConfig) delete init.next;
            }
            // if we are revalidating the whole page via time or on-demand and
            // the fetch cache entry is stale we should still de-dupe the
            // origin hit if it's a cache-able entry
            if (cacheKey && isForegroundRevalidate) {
                staticGenerationStore.pendingRevalidates ??= {};
                const pendingRevalidate = staticGenerationStore.pendingRevalidates[cacheKey];
                if (pendingRevalidate) {
                    const res = await pendingRevalidate;
                    return res.clone();
                }
                return staticGenerationStore.pendingRevalidates[cacheKey] = doOriginalFetch(true, cacheReasonOverride).finally(async ()=>{
                    staticGenerationStore.pendingRevalidates ??= {};
                    delete staticGenerationStore.pendingRevalidates[cacheKey || ""];
                    await handleUnlock();
                });
            } else {
                return doOriginalFetch(false, cacheReasonOverride).finally(handleUnlock);
            }
        });
    };
    // Attach the necessary properties to the patched fetch function.
    patched.__nextPatched = true;
    patched.__nextGetStaticStore = ()=>staticGenerationAsyncStorage;
    patched._nextOriginalFetch = originFetch;
    return patched;
}
function patchFetch(options) {
    // If we've already patched fetch, we should not patch it again.
    if (isPatchedFetch(globalThis.fetch)) return;
    // Grab the original fetch function. We'll attach this so we can use it in
    // the patched fetch function.
    const original = globalThis.fetch;
    // Set the global fetch to the patched fetch.
    globalThis.fetch = createPatchedFetcher(original, options);
}

//# sourceMappingURL=patch-fetch.js.map

/***/ }),

/***/ 71376:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * Contains predefined constants for the trace span name in next/server.
 *
 * Currently, next/server/tracer is internal implementation only for tracking
 * next.js's implementation only with known span names defined here.
 **/ // eslint typescript has a bug with TS enums
/* eslint-disable no-shadow */ 
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
    AppRenderSpan: function() {
        return AppRenderSpan;
    },
    AppRouteRouteHandlersSpan: function() {
        return AppRouteRouteHandlersSpan;
    },
    BaseServerSpan: function() {
        return BaseServerSpan;
    },
    LoadComponentsSpan: function() {
        return LoadComponentsSpan;
    },
    LogSpanAllowList: function() {
        return LogSpanAllowList;
    },
    MiddlewareSpan: function() {
        return MiddlewareSpan;
    },
    NextNodeServerSpan: function() {
        return NextNodeServerSpan;
    },
    NextServerSpan: function() {
        return NextServerSpan;
    },
    NextVanillaSpanAllowlist: function() {
        return NextVanillaSpanAllowlist;
    },
    NodeSpan: function() {
        return NodeSpan;
    },
    RenderSpan: function() {
        return RenderSpan;
    },
    ResolveMetadataSpan: function() {
        return ResolveMetadataSpan;
    },
    RouterSpan: function() {
        return RouterSpan;
    },
    StartServerSpan: function() {
        return StartServerSpan;
    }
});
var BaseServerSpan;
(function(BaseServerSpan) {
    BaseServerSpan["handleRequest"] = "BaseServer.handleRequest";
    BaseServerSpan["run"] = "BaseServer.run";
    BaseServerSpan["pipe"] = "BaseServer.pipe";
    BaseServerSpan["getStaticHTML"] = "BaseServer.getStaticHTML";
    BaseServerSpan["render"] = "BaseServer.render";
    BaseServerSpan["renderToResponseWithComponents"] = "BaseServer.renderToResponseWithComponents";
    BaseServerSpan["renderToResponse"] = "BaseServer.renderToResponse";
    BaseServerSpan["renderToHTML"] = "BaseServer.renderToHTML";
    BaseServerSpan["renderError"] = "BaseServer.renderError";
    BaseServerSpan["renderErrorToResponse"] = "BaseServer.renderErrorToResponse";
    BaseServerSpan["renderErrorToHTML"] = "BaseServer.renderErrorToHTML";
    BaseServerSpan["render404"] = "BaseServer.render404";
})(BaseServerSpan || (BaseServerSpan = {}));
var LoadComponentsSpan;
(function(LoadComponentsSpan) {
    LoadComponentsSpan["loadDefaultErrorComponents"] = "LoadComponents.loadDefaultErrorComponents";
    LoadComponentsSpan["loadComponents"] = "LoadComponents.loadComponents";
})(LoadComponentsSpan || (LoadComponentsSpan = {}));
var NextServerSpan;
(function(NextServerSpan) {
    NextServerSpan["getRequestHandler"] = "NextServer.getRequestHandler";
    NextServerSpan["getServer"] = "NextServer.getServer";
    NextServerSpan["getServerRequestHandler"] = "NextServer.getServerRequestHandler";
    NextServerSpan["createServer"] = "createServer.createServer";
})(NextServerSpan || (NextServerSpan = {}));
var NextNodeServerSpan;
(function(NextNodeServerSpan) {
    NextNodeServerSpan["compression"] = "NextNodeServer.compression";
    NextNodeServerSpan["getBuildId"] = "NextNodeServer.getBuildId";
    NextNodeServerSpan["createComponentTree"] = "NextNodeServer.createComponentTree";
    NextNodeServerSpan["clientComponentLoading"] = "NextNodeServer.clientComponentLoading";
    NextNodeServerSpan["getLayoutOrPageModule"] = "NextNodeServer.getLayoutOrPageModule";
    NextNodeServerSpan["generateStaticRoutes"] = "NextNodeServer.generateStaticRoutes";
    NextNodeServerSpan["generateFsStaticRoutes"] = "NextNodeServer.generateFsStaticRoutes";
    NextNodeServerSpan["generatePublicRoutes"] = "NextNodeServer.generatePublicRoutes";
    NextNodeServerSpan["generateImageRoutes"] = "NextNodeServer.generateImageRoutes.route";
    NextNodeServerSpan["sendRenderResult"] = "NextNodeServer.sendRenderResult";
    NextNodeServerSpan["proxyRequest"] = "NextNodeServer.proxyRequest";
    NextNodeServerSpan["runApi"] = "NextNodeServer.runApi";
    NextNodeServerSpan["render"] = "NextNodeServer.render";
    NextNodeServerSpan["renderHTML"] = "NextNodeServer.renderHTML";
    NextNodeServerSpan["imageOptimizer"] = "NextNodeServer.imageOptimizer";
    NextNodeServerSpan["getPagePath"] = "NextNodeServer.getPagePath";
    NextNodeServerSpan["getRoutesManifest"] = "NextNodeServer.getRoutesManifest";
    NextNodeServerSpan["findPageComponents"] = "NextNodeServer.findPageComponents";
    NextNodeServerSpan["getFontManifest"] = "NextNodeServer.getFontManifest";
    NextNodeServerSpan["getServerComponentManifest"] = "NextNodeServer.getServerComponentManifest";
    NextNodeServerSpan["getRequestHandler"] = "NextNodeServer.getRequestHandler";
    NextNodeServerSpan["renderToHTML"] = "NextNodeServer.renderToHTML";
    NextNodeServerSpan["renderError"] = "NextNodeServer.renderError";
    NextNodeServerSpan["renderErrorToHTML"] = "NextNodeServer.renderErrorToHTML";
    NextNodeServerSpan["render404"] = "NextNodeServer.render404";
    NextNodeServerSpan["startResponse"] = "NextNodeServer.startResponse";
    // nested inner span, does not require parent scope name
    NextNodeServerSpan["route"] = "route";
    NextNodeServerSpan["onProxyReq"] = "onProxyReq";
    NextNodeServerSpan["apiResolver"] = "apiResolver";
    NextNodeServerSpan["internalFetch"] = "internalFetch";
})(NextNodeServerSpan || (NextNodeServerSpan = {}));
var StartServerSpan;
(function(StartServerSpan) {
    StartServerSpan["startServer"] = "startServer.startServer";
})(StartServerSpan || (StartServerSpan = {}));
var RenderSpan;
(function(RenderSpan) {
    RenderSpan["getServerSideProps"] = "Render.getServerSideProps";
    RenderSpan["getStaticProps"] = "Render.getStaticProps";
    RenderSpan["renderToString"] = "Render.renderToString";
    RenderSpan["renderDocument"] = "Render.renderDocument";
    RenderSpan["createBodyResult"] = "Render.createBodyResult";
})(RenderSpan || (RenderSpan = {}));
var AppRenderSpan;
(function(AppRenderSpan) {
    AppRenderSpan["renderToString"] = "AppRender.renderToString";
    AppRenderSpan["renderToReadableStream"] = "AppRender.renderToReadableStream";
    AppRenderSpan["getBodyResult"] = "AppRender.getBodyResult";
    AppRenderSpan["fetch"] = "AppRender.fetch";
})(AppRenderSpan || (AppRenderSpan = {}));
var RouterSpan;
(function(RouterSpan) {
    RouterSpan["executeRoute"] = "Router.executeRoute";
})(RouterSpan || (RouterSpan = {}));
var NodeSpan;
(function(NodeSpan) {
    NodeSpan["runHandler"] = "Node.runHandler";
})(NodeSpan || (NodeSpan = {}));
var AppRouteRouteHandlersSpan;
(function(AppRouteRouteHandlersSpan) {
    AppRouteRouteHandlersSpan["runHandler"] = "AppRouteRouteHandlers.runHandler";
})(AppRouteRouteHandlersSpan || (AppRouteRouteHandlersSpan = {}));
var ResolveMetadataSpan;
(function(ResolveMetadataSpan) {
    ResolveMetadataSpan["generateMetadata"] = "ResolveMetadata.generateMetadata";
    ResolveMetadataSpan["generateViewport"] = "ResolveMetadata.generateViewport";
})(ResolveMetadataSpan || (ResolveMetadataSpan = {}));
var MiddlewareSpan;
(function(MiddlewareSpan) {
    MiddlewareSpan["execute"] = "Middleware.execute";
})(MiddlewareSpan || (MiddlewareSpan = {}));
const NextVanillaSpanAllowlist = [
    "Middleware.execute",
    "BaseServer.handleRequest",
    "Render.getServerSideProps",
    "Render.getStaticProps",
    "AppRender.fetch",
    "AppRender.getBodyResult",
    "Render.renderDocument",
    "Node.runHandler",
    "AppRouteRouteHandlers.runHandler",
    "ResolveMetadata.generateMetadata",
    "ResolveMetadata.generateViewport",
    "NextNodeServer.createComponentTree",
    "NextNodeServer.findPageComponents",
    "NextNodeServer.getLayoutOrPageModule",
    "NextNodeServer.startResponse",
    "NextNodeServer.clientComponentLoading"
];
const LogSpanAllowList = [
    "NextNodeServer.findPageComponents",
    "NextNodeServer.createComponentTree",
    "NextNodeServer.clientComponentLoading"
];

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 64994:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
    SpanKind: function() {
        return SpanKind;
    },
    SpanStatusCode: function() {
        return SpanStatusCode;
    },
    getTracer: function() {
        return getTracer;
    }
});
const _constants = __webpack_require__(71376);
let api;
// we want to allow users to use their own version of @opentelemetry/api if they
// want to, so we try to require it first, and if it fails we fall back to the
// version that is bundled with Next.js
// this is because @opentelemetry/api has to be synced with the version of
// @opentelemetry/tracing that is used, and we don't want to force users to use
// the version that is bundled with Next.js.
// the API is ~stable, so this should be fine
if (false) {} else {
    try {
        api = __webpack_require__(27482);
    } catch (err) {
        api = __webpack_require__(27482);
    }
}
const { context, propagation, trace, SpanStatusCode, SpanKind, ROOT_CONTEXT } = api;
const isPromise = (p)=>{
    return p !== null && typeof p === "object" && typeof p.then === "function";
};
const closeSpanWithError = (span, error)=>{
    if ((error == null ? void 0 : error.bubble) === true) {
        span.setAttribute("next.bubble", true);
    } else {
        if (error) {
            span.recordException(error);
        }
        span.setStatus({
            code: SpanStatusCode.ERROR,
            message: error == null ? void 0 : error.message
        });
    }
    span.end();
};
/** we use this map to propagate attributes from nested spans to the top span */ const rootSpanAttributesStore = new Map();
const rootSpanIdKey = api.createContextKey("next.rootSpanId");
let lastSpanId = 0;
const getSpanId = ()=>lastSpanId++;
class NextTracerImpl {
    /**
   * Returns an instance to the trace with configured name.
   * Since wrap / trace can be defined in any place prior to actual trace subscriber initialization,
   * This should be lazily evaluated.
   */ getTracerInstance() {
        return trace.getTracer("next.js", "0.0.1");
    }
    getContext() {
        return context;
    }
    getActiveScopeSpan() {
        return trace.getSpan(context == null ? void 0 : context.active());
    }
    withPropagatedContext(carrier, fn, getter) {
        const activeContext = context.active();
        if (trace.getSpanContext(activeContext)) {
            // Active span is already set, too late to propagate.
            return fn();
        }
        const remoteContext = propagation.extract(activeContext, carrier, getter);
        return context.with(remoteContext, fn);
    }
    trace(...args) {
        var _trace_getSpanContext;
        const [type, fnOrOptions, fnOrEmpty] = args;
        // coerce options form overload
        const { fn, options } = typeof fnOrOptions === "function" ? {
            fn: fnOrOptions,
            options: {}
        } : {
            fn: fnOrEmpty,
            options: {
                ...fnOrOptions
            }
        };
        const spanName = options.spanName ?? type;
        if (!_constants.NextVanillaSpanAllowlist.includes(type) && process.env.NEXT_OTEL_VERBOSE !== "1" || options.hideSpan) {
            return fn();
        }
        // Trying to get active scoped span to assign parent. If option specifies parent span manually, will try to use it.
        let spanContext = this.getSpanContext((options == null ? void 0 : options.parentSpan) ?? this.getActiveScopeSpan());
        let isRootSpan = false;
        if (!spanContext) {
            spanContext = (context == null ? void 0 : context.active()) ?? ROOT_CONTEXT;
            isRootSpan = true;
        } else if ((_trace_getSpanContext = trace.getSpanContext(spanContext)) == null ? void 0 : _trace_getSpanContext.isRemote) {
            isRootSpan = true;
        }
        const spanId = getSpanId();
        options.attributes = {
            "next.span_name": spanName,
            "next.span_type": type,
            ...options.attributes
        };
        return context.with(spanContext.setValue(rootSpanIdKey, spanId), ()=>this.getTracerInstance().startActiveSpan(spanName, options, (span)=>{
                const startTime = "performance" in globalThis ? globalThis.performance.now() : undefined;
                const onCleanup = ()=>{
                    rootSpanAttributesStore.delete(spanId);
                    if (startTime && process.env.NEXT_OTEL_PERFORMANCE_PREFIX && _constants.LogSpanAllowList.includes(type || "")) {
                        performance.measure(`${process.env.NEXT_OTEL_PERFORMANCE_PREFIX}:next-${(type.split(".").pop() || "").replace(/[A-Z]/g, (match)=>"-" + match.toLowerCase())}`, {
                            start: startTime,
                            end: performance.now()
                        });
                    }
                };
                if (isRootSpan) {
                    rootSpanAttributesStore.set(spanId, new Map(Object.entries(options.attributes ?? {})));
                }
                try {
                    if (fn.length > 1) {
                        return fn(span, (err)=>closeSpanWithError(span, err));
                    }
                    const result = fn(span);
                    if (isPromise(result)) {
                        // If there's error make sure it throws
                        return result.then((res)=>{
                            span.end();
                            // Need to pass down the promise result,
                            // it could be react stream response with error { error, stream }
                            return res;
                        }).catch((err)=>{
                            closeSpanWithError(span, err);
                            throw err;
                        }).finally(onCleanup);
                    } else {
                        span.end();
                        onCleanup();
                    }
                    return result;
                } catch (err) {
                    closeSpanWithError(span, err);
                    onCleanup();
                    throw err;
                }
            }));
    }
    wrap(...args) {
        const tracer = this;
        const [name, options, fn] = args.length === 3 ? args : [
            args[0],
            {},
            args[1]
        ];
        if (!_constants.NextVanillaSpanAllowlist.includes(name) && process.env.NEXT_OTEL_VERBOSE !== "1") {
            return fn;
        }
        return function() {
            let optionsObj = options;
            if (typeof optionsObj === "function" && typeof fn === "function") {
                optionsObj = optionsObj.apply(this, arguments);
            }
            const lastArgId = arguments.length - 1;
            const cb = arguments[lastArgId];
            if (typeof cb === "function") {
                const scopeBoundCb = tracer.getContext().bind(context.active(), cb);
                return tracer.trace(name, optionsObj, (_span, done)=>{
                    arguments[lastArgId] = function(err) {
                        done == null ? void 0 : done(err);
                        return scopeBoundCb.apply(this, arguments);
                    };
                    return fn.apply(this, arguments);
                });
            } else {
                return tracer.trace(name, optionsObj, ()=>fn.apply(this, arguments));
            }
        };
    }
    startSpan(...args) {
        const [type, options] = args;
        const spanContext = this.getSpanContext((options == null ? void 0 : options.parentSpan) ?? this.getActiveScopeSpan());
        return this.getTracerInstance().startSpan(type, options, spanContext);
    }
    getSpanContext(parentSpan) {
        const spanContext = parentSpan ? trace.setSpan(context.active(), parentSpan) : undefined;
        return spanContext;
    }
    getRootSpanAttributes() {
        const spanId = context.active().getValue(rootSpanIdKey);
        return rootSpanAttributesStore.get(spanId);
    }
}
const getTracer = (()=>{
    const tracer = new NextTracerImpl();
    return ()=>tracer;
})();

//# sourceMappingURL=tracer.js.map

/***/ }),

/***/ 47262:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
    getUtils: function() {
        return getUtils;
    },
    interpolateDynamicPath: function() {
        return interpolateDynamicPath;
    },
    normalizeDynamicRouteParams: function() {
        return normalizeDynamicRouteParams;
    },
    normalizeVercelUrl: function() {
        return normalizeVercelUrl;
    }
});
const _url = __webpack_require__(57310);
const _normalizelocalepath = __webpack_require__(95014);
const _pathmatch = __webpack_require__(3707);
const _routeregex = __webpack_require__(55679);
const _routematcher = __webpack_require__(23525);
const _preparedestination = __webpack_require__(5257);
const _removetrailingslash = __webpack_require__(37847);
const _apppaths = __webpack_require__(78168);
const _constants = __webpack_require__(11943);
function normalizeVercelUrl(req, trustQuery, paramKeys, pageIsDynamic, defaultRouteRegex) {
    // make sure to normalize req.url on Vercel to strip dynamic params
    // from the query which are added during routing
    if (pageIsDynamic && trustQuery && defaultRouteRegex) {
        const _parsedUrl = (0, _url.parse)(req.url, true);
        delete _parsedUrl.search;
        for (const key of Object.keys(_parsedUrl.query)){
            if (key !== _constants.NEXT_QUERY_PARAM_PREFIX && key.startsWith(_constants.NEXT_QUERY_PARAM_PREFIX) || (paramKeys || Object.keys(defaultRouteRegex.groups)).includes(key)) {
                delete _parsedUrl.query[key];
            }
        }
        req.url = (0, _url.format)(_parsedUrl);
    }
}
function interpolateDynamicPath(pathname, params, defaultRouteRegex) {
    if (!defaultRouteRegex) return pathname;
    for (const param of Object.keys(defaultRouteRegex.groups)){
        const { optional, repeat } = defaultRouteRegex.groups[param];
        let builtParam = `[${repeat ? "..." : ""}${param}]`;
        if (optional) {
            builtParam = `[${builtParam}]`;
        }
        const paramIdx = pathname.indexOf(builtParam);
        if (paramIdx > -1) {
            let paramValue;
            const value = params[param];
            if (Array.isArray(value)) {
                paramValue = value.map((v)=>v && encodeURIComponent(v)).join("/");
            } else if (value) {
                paramValue = encodeURIComponent(value);
            } else {
                paramValue = "";
            }
            pathname = pathname.slice(0, paramIdx) + paramValue + pathname.slice(paramIdx + builtParam.length);
        }
    }
    return pathname;
}
function normalizeDynamicRouteParams(params, ignoreOptional, defaultRouteRegex, defaultRouteMatches) {
    let hasValidParams = true;
    if (!defaultRouteRegex) return {
        params,
        hasValidParams: false
    };
    params = Object.keys(defaultRouteRegex.groups).reduce((prev, key)=>{
        let value = params[key];
        if (typeof value === "string") {
            value = (0, _apppaths.normalizeRscURL)(value);
        }
        if (Array.isArray(value)) {
            value = value.map((val)=>{
                if (typeof val === "string") {
                    val = (0, _apppaths.normalizeRscURL)(val);
                }
                return val;
            });
        }
        // if the value matches the default value we can't rely
        // on the parsed params, this is used to signal if we need
        // to parse x-now-route-matches or not
        const defaultValue = defaultRouteMatches[key];
        const isOptional = defaultRouteRegex.groups[key].optional;
        const isDefaultValue = Array.isArray(defaultValue) ? defaultValue.some((defaultVal)=>{
            return Array.isArray(value) ? value.some((val)=>val.includes(defaultVal)) : value == null ? void 0 : value.includes(defaultVal);
        }) : value == null ? void 0 : value.includes(defaultValue);
        if (isDefaultValue || typeof value === "undefined" && !(isOptional && ignoreOptional)) {
            hasValidParams = false;
        }
        // non-provided optional values should be undefined so normalize
        // them to undefined
        if (isOptional && (!value || Array.isArray(value) && value.length === 1 && // fallback optional catch-all SSG pages have
        // [[...paramName]] for the root path on Vercel
        (value[0] === "index" || value[0] === `[[...${key}]]`))) {
            value = undefined;
            delete params[key];
        }
        // query values from the proxy aren't already split into arrays
        // so make sure to normalize catch-all values
        if (value && typeof value === "string" && defaultRouteRegex.groups[key].repeat) {
            value = value.split("/");
        }
        if (value) {
            prev[key] = value;
        }
        return prev;
    }, {});
    return {
        params,
        hasValidParams
    };
}
function getUtils({ page, i18n, basePath, rewrites, pageIsDynamic, trailingSlash, caseSensitive }) {
    let defaultRouteRegex;
    let dynamicRouteMatcher;
    let defaultRouteMatches;
    if (pageIsDynamic) {
        defaultRouteRegex = (0, _routeregex.getNamedRouteRegex)(page, false);
        dynamicRouteMatcher = (0, _routematcher.getRouteMatcher)(defaultRouteRegex);
        defaultRouteMatches = dynamicRouteMatcher(page);
    }
    function handleRewrites(req, parsedUrl) {
        const rewriteParams = {};
        let fsPathname = parsedUrl.pathname;
        const matchesPage = ()=>{
            const fsPathnameNoSlash = (0, _removetrailingslash.removeTrailingSlash)(fsPathname || "");
            return fsPathnameNoSlash === (0, _removetrailingslash.removeTrailingSlash)(page) || (dynamicRouteMatcher == null ? void 0 : dynamicRouteMatcher(fsPathnameNoSlash));
        };
        const checkRewrite = (rewrite)=>{
            const matcher = (0, _pathmatch.getPathMatch)(rewrite.source + (trailingSlash ? "(/)?" : ""), {
                removeUnnamedParams: true,
                strict: true,
                sensitive: !!caseSensitive
            });
            let params = matcher(parsedUrl.pathname);
            if ((rewrite.has || rewrite.missing) && params) {
                const hasParams = (0, _preparedestination.matchHas)(req, parsedUrl.query, rewrite.has, rewrite.missing);
                if (hasParams) {
                    Object.assign(params, hasParams);
                } else {
                    params = false;
                }
            }
            if (params) {
                const { parsedDestination, destQuery } = (0, _preparedestination.prepareDestination)({
                    appendParamsToQuery: true,
                    destination: rewrite.destination,
                    params: params,
                    query: parsedUrl.query
                });
                // if the rewrite destination is external break rewrite chain
                if (parsedDestination.protocol) {
                    return true;
                }
                Object.assign(rewriteParams, destQuery, params);
                Object.assign(parsedUrl.query, parsedDestination.query);
                delete parsedDestination.query;
                Object.assign(parsedUrl, parsedDestination);
                fsPathname = parsedUrl.pathname;
                if (basePath) {
                    fsPathname = fsPathname.replace(new RegExp(`^${basePath}`), "") || "/";
                }
                if (i18n) {
                    const destLocalePathResult = (0, _normalizelocalepath.normalizeLocalePath)(fsPathname, i18n.locales);
                    fsPathname = destLocalePathResult.pathname;
                    parsedUrl.query.nextInternalLocale = destLocalePathResult.detectedLocale || params.nextInternalLocale;
                }
                if (fsPathname === page) {
                    return true;
                }
                if (pageIsDynamic && dynamicRouteMatcher) {
                    const dynamicParams = dynamicRouteMatcher(fsPathname);
                    if (dynamicParams) {
                        parsedUrl.query = {
                            ...parsedUrl.query,
                            ...dynamicParams
                        };
                        return true;
                    }
                }
            }
            return false;
        };
        for (const rewrite of rewrites.beforeFiles || []){
            checkRewrite(rewrite);
        }
        if (fsPathname !== page) {
            let finished = false;
            for (const rewrite of rewrites.afterFiles || []){
                finished = checkRewrite(rewrite);
                if (finished) break;
            }
            if (!finished && !matchesPage()) {
                for (const rewrite of rewrites.fallback || []){
                    finished = checkRewrite(rewrite);
                    if (finished) break;
                }
            }
        }
        return rewriteParams;
    }
    function getParamsFromRouteMatches(req, renderOpts, detectedLocale) {
        return (0, _routematcher.getRouteMatcher)(function() {
            const { groups, routeKeys } = defaultRouteRegex;
            return {
                re: {
                    // Simulate a RegExp match from the \`req.url\` input
                    exec: (str)=>{
                        const obj = Object.fromEntries(new URLSearchParams(str));
                        const matchesHasLocale = i18n && detectedLocale && obj["1"] === detectedLocale;
                        for (const key of Object.keys(obj)){
                            const value = obj[key];
                            if (key !== _constants.NEXT_QUERY_PARAM_PREFIX && key.startsWith(_constants.NEXT_QUERY_PARAM_PREFIX)) {
                                const normalizedKey = key.substring(_constants.NEXT_QUERY_PARAM_PREFIX.length);
                                obj[normalizedKey] = value;
                                delete obj[key];
                            }
                        }
                        // favor named matches if available
                        const routeKeyNames = Object.keys(routeKeys || {});
                        const filterLocaleItem = (val)=>{
                            if (i18n) {
                                // locale items can be included in route-matches
                                // for fallback SSG pages so ensure they are
                                // filtered
                                const isCatchAll = Array.isArray(val);
                                const _val = isCatchAll ? val[0] : val;
                                if (typeof _val === "string" && i18n.locales.some((item)=>{
                                    if (item.toLowerCase() === _val.toLowerCase()) {
                                        detectedLocale = item;
                                        renderOpts.locale = detectedLocale;
                                        return true;
                                    }
                                    return false;
                                })) {
                                    // remove the locale item from the match
                                    if (isCatchAll) {
                                        val.splice(0, 1);
                                    }
                                    // the value is only a locale item and
                                    // shouldn't be added
                                    return isCatchAll ? val.length === 0 : true;
                                }
                            }
                            return false;
                        };
                        if (routeKeyNames.every((name)=>obj[name])) {
                            return routeKeyNames.reduce((prev, keyName)=>{
                                const paramName = routeKeys == null ? void 0 : routeKeys[keyName];
                                if (paramName && !filterLocaleItem(obj[keyName])) {
                                    prev[groups[paramName].pos] = obj[keyName];
                                }
                                return prev;
                            }, {});
                        }
                        return Object.keys(obj).reduce((prev, key)=>{
                            if (!filterLocaleItem(obj[key])) {
                                let normalizedKey = key;
                                if (matchesHasLocale) {
                                    normalizedKey = parseInt(key, 10) - 1 + "";
                                }
                                return Object.assign(prev, {
                                    [normalizedKey]: obj[key]
                                });
                            }
                            return prev;
                        }, {});
                    }
                },
                groups
            };
        }())(req.headers["x-now-route-matches"]);
    }
    return {
        handleRewrites,
        defaultRouteRegex,
        dynamicRouteMatcher,
        defaultRouteMatches,
        getParamsFromRouteMatches,
        normalizeDynamicRouteParams: (params, ignoreOptional)=>normalizeDynamicRouteParams(params, ignoreOptional, defaultRouteRegex, defaultRouteMatches),
        normalizeVercelUrl: (req, trustQuery, paramKeys)=>normalizeVercelUrl(req, trustQuery, paramKeys, pageIsDynamic, defaultRouteRegex),
        interpolateDynamicPath: (pathname, params)=>interpolateDynamicPath(pathname, params, defaultRouteRegex)
    };
}

//# sourceMappingURL=server-utils.js.map

/***/ }),

/***/ 46294:
/***/ ((__unused_webpack_module, exports) => {

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
    PageSignatureError: function() {
        return PageSignatureError;
    },
    RemovedPageError: function() {
        return RemovedPageError;
    },
    RemovedUAError: function() {
        return RemovedUAError;
    }
});
class PageSignatureError extends Error {
    constructor({ page }){
        super(`The middleware "${page}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
    }
}
class RemovedPageError extends Error {
    constructor(){
        super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
    }
}
class RemovedUAError extends Error {
    constructor(){
        super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
    }
}

//# sourceMappingURL=error.js.map

/***/ }),

/***/ 44:
/***/ ((__unused_webpack_module, exports) => {

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
    PageSignatureError: function() {
        return PageSignatureError;
    },
    RemovedPageError: function() {
        return RemovedPageError;
    },
    RemovedUAError: function() {
        return RemovedUAError;
    }
});
class PageSignatureError extends Error {
    constructor({ page }){
        super(`The middleware "${page}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
    }
}
class RemovedPageError extends Error {
    constructor(){
        super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
    }
}
class RemovedUAError extends Error {
    constructor(){
        super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
    }
}

//# sourceMappingURL=error.js.map

/***/ }),

/***/ 73896:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
// Alias index file of next/server for edge runtime for tree-shaking purpose

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
    ImageResponse: function() {
        return _imageresponse.ImageResponse;
    },
    NextRequest: function() {
        return _request.NextRequest;
    },
    NextResponse: function() {
        return _response.NextResponse;
    },
    URLPattern: function() {
        return _urlpattern.URLPattern;
    },
    userAgent: function() {
        return _useragent.userAgent;
    },
    userAgentFromString: function() {
        return _useragent.userAgentFromString;
    }
});
const _imageresponse = __webpack_require__(76274);
const _request = __webpack_require__(49253);
const _response = __webpack_require__(86716);
const _useragent = __webpack_require__(27);
const _urlpattern = __webpack_require__(27718);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 98277:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
// Alias index file of next/server for edge runtime for tree-shaking purpose

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
    ImageResponse: function() {
        return _imageresponse.ImageResponse;
    },
    NextRequest: function() {
        return _request.NextRequest;
    },
    NextResponse: function() {
        return _response.NextResponse;
    },
    URLPattern: function() {
        return _urlpattern.URLPattern;
    },
    userAgent: function() {
        return _useragent.userAgent;
    },
    userAgentFromString: function() {
        return _useragent.userAgentFromString;
    }
});
const _imageresponse = __webpack_require__(10006);
const _request = __webpack_require__(39745);
const _response = __webpack_require__(59211);
const _useragent = __webpack_require__(78471);
const _urlpattern = __webpack_require__(72433);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 62420:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "NextURL", ({
    enumerable: true,
    get: function() {
        return NextURL;
    }
}));
const _detectdomainlocale = __webpack_require__(19976);
const _formatnextpathnameinfo = __webpack_require__(61704);
const _gethostname = __webpack_require__(48614);
const _getnextpathnameinfo = __webpack_require__(95393);
const REGEX_LOCALHOST_HOSTNAME = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;
function parseURL(url, base) {
    return new URL(String(url).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"), base && String(base).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"));
}
const Internal = Symbol("NextURLInternal");
class NextURL {
    constructor(input, baseOrOpts, opts){
        let base;
        let options;
        if (typeof baseOrOpts === "object" && "pathname" in baseOrOpts || typeof baseOrOpts === "string") {
            base = baseOrOpts;
            options = opts || {};
        } else {
            options = opts || baseOrOpts || {};
        }
        this[Internal] = {
            url: parseURL(input, base ?? options.base),
            options: options,
            basePath: ""
        };
        this.analyze();
    }
    analyze() {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig, _this_Internal_domainLocale, _this_Internal_options_nextConfig_i18n1, _this_Internal_options_nextConfig1;
        const info = (0, _getnextpathnameinfo.getNextPathnameInfo)(this[Internal].url.pathname, {
            nextConfig: this[Internal].options.nextConfig,
            parseData: !undefined,
            i18nProvider: this[Internal].options.i18nProvider
        });
        const hostname = (0, _gethostname.getHostname)(this[Internal].url, this[Internal].options.headers);
        this[Internal].domainLocale = this[Internal].options.i18nProvider ? this[Internal].options.i18nProvider.detectDomainLocale(hostname) : (0, _detectdomainlocale.detectDomainLocale)((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.domains, hostname);
        const defaultLocale = ((_this_Internal_domainLocale = this[Internal].domainLocale) == null ? void 0 : _this_Internal_domainLocale.defaultLocale) || ((_this_Internal_options_nextConfig1 = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n1 = _this_Internal_options_nextConfig1.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n1.defaultLocale);
        this[Internal].url.pathname = info.pathname;
        this[Internal].defaultLocale = defaultLocale;
        this[Internal].basePath = info.basePath ?? "";
        this[Internal].buildId = info.buildId;
        this[Internal].locale = info.locale ?? defaultLocale;
        this[Internal].trailingSlash = info.trailingSlash;
    }
    formatPathname() {
        return (0, _formatnextpathnameinfo.formatNextPathnameInfo)({
            basePath: this[Internal].basePath,
            buildId: this[Internal].buildId,
            defaultLocale: !this[Internal].options.forceLocale ? this[Internal].defaultLocale : undefined,
            locale: this[Internal].locale,
            pathname: this[Internal].url.pathname,
            trailingSlash: this[Internal].trailingSlash
        });
    }
    formatSearch() {
        return this[Internal].url.search;
    }
    get buildId() {
        return this[Internal].buildId;
    }
    set buildId(buildId) {
        this[Internal].buildId = buildId;
    }
    get locale() {
        return this[Internal].locale ?? "";
    }
    set locale(locale) {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig;
        if (!this[Internal].locale || !((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.locales.includes(locale))) {
            throw new TypeError(`The NextURL configuration includes no locale "${locale}"`);
        }
        this[Internal].locale = locale;
    }
    get defaultLocale() {
        return this[Internal].defaultLocale;
    }
    get domainLocale() {
        return this[Internal].domainLocale;
    }
    get searchParams() {
        return this[Internal].url.searchParams;
    }
    get host() {
        return this[Internal].url.host;
    }
    set host(value) {
        this[Internal].url.host = value;
    }
    get hostname() {
        return this[Internal].url.hostname;
    }
    set hostname(value) {
        this[Internal].url.hostname = value;
    }
    get port() {
        return this[Internal].url.port;
    }
    set port(value) {
        this[Internal].url.port = value;
    }
    get protocol() {
        return this[Internal].url.protocol;
    }
    set protocol(value) {
        this[Internal].url.protocol = value;
    }
    get href() {
        const pathname = this.formatPathname();
        const search = this.formatSearch();
        return `${this.protocol}//${this.host}${pathname}${search}${this.hash}`;
    }
    set href(url) {
        this[Internal].url = parseURL(url);
        this.analyze();
    }
    get origin() {
        return this[Internal].url.origin;
    }
    get pathname() {
        return this[Internal].url.pathname;
    }
    set pathname(value) {
        this[Internal].url.pathname = value;
    }
    get hash() {
        return this[Internal].url.hash;
    }
    set hash(value) {
        this[Internal].url.hash = value;
    }
    get search() {
        return this[Internal].url.search;
    }
    set search(value) {
        this[Internal].url.search = value;
    }
    get password() {
        return this[Internal].url.password;
    }
    set password(value) {
        this[Internal].url.password = value;
    }
    get username() {
        return this[Internal].url.username;
    }
    set username(value) {
        this[Internal].url.username = value;
    }
    get basePath() {
        return this[Internal].basePath;
    }
    set basePath(value) {
        this[Internal].basePath = value.startsWith("/") ? value : `/${value}`;
    }
    toString() {
        return this.href;
    }
    toJSON() {
        return this.href;
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            href: this.href,
            origin: this.origin,
            protocol: this.protocol,
            username: this.username,
            password: this.password,
            host: this.host,
            hostname: this.hostname,
            port: this.port,
            pathname: this.pathname,
            search: this.search,
            searchParams: this.searchParams,
            hash: this.hash
        };
    }
    clone() {
        return new NextURL(String(this), this[Internal].options);
    }
}

//# sourceMappingURL=next-url.js.map

/***/ }),

/***/ 79519:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "NextURL", ({
    enumerable: true,
    get: function() {
        return NextURL;
    }
}));
const _detectdomainlocale = __webpack_require__(23777);
const _formatnextpathnameinfo = __webpack_require__(93817);
const _gethostname = __webpack_require__(61675);
const _getnextpathnameinfo = __webpack_require__(6111);
const REGEX_LOCALHOST_HOSTNAME = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;
function parseURL(url, base) {
    return new URL(String(url).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"), base && String(base).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"));
}
const Internal = Symbol("NextURLInternal");
class NextURL {
    constructor(input, baseOrOpts, opts){
        let base;
        let options;
        if (typeof baseOrOpts === "object" && "pathname" in baseOrOpts || typeof baseOrOpts === "string") {
            base = baseOrOpts;
            options = opts || {};
        } else {
            options = opts || baseOrOpts || {};
        }
        this[Internal] = {
            url: parseURL(input, base ?? options.base),
            options: options,
            basePath: ""
        };
        this.analyze();
    }
    analyze() {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig, _this_Internal_domainLocale, _this_Internal_options_nextConfig_i18n1, _this_Internal_options_nextConfig1;
        const info = (0, _getnextpathnameinfo.getNextPathnameInfo)(this[Internal].url.pathname, {
            nextConfig: this[Internal].options.nextConfig,
            parseData: !undefined,
            i18nProvider: this[Internal].options.i18nProvider
        });
        const hostname = (0, _gethostname.getHostname)(this[Internal].url, this[Internal].options.headers);
        this[Internal].domainLocale = this[Internal].options.i18nProvider ? this[Internal].options.i18nProvider.detectDomainLocale(hostname) : (0, _detectdomainlocale.detectDomainLocale)((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.domains, hostname);
        const defaultLocale = ((_this_Internal_domainLocale = this[Internal].domainLocale) == null ? void 0 : _this_Internal_domainLocale.defaultLocale) || ((_this_Internal_options_nextConfig1 = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n1 = _this_Internal_options_nextConfig1.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n1.defaultLocale);
        this[Internal].url.pathname = info.pathname;
        this[Internal].defaultLocale = defaultLocale;
        this[Internal].basePath = info.basePath ?? "";
        this[Internal].buildId = info.buildId;
        this[Internal].locale = info.locale ?? defaultLocale;
        this[Internal].trailingSlash = info.trailingSlash;
    }
    formatPathname() {
        return (0, _formatnextpathnameinfo.formatNextPathnameInfo)({
            basePath: this[Internal].basePath,
            buildId: this[Internal].buildId,
            defaultLocale: !this[Internal].options.forceLocale ? this[Internal].defaultLocale : undefined,
            locale: this[Internal].locale,
            pathname: this[Internal].url.pathname,
            trailingSlash: this[Internal].trailingSlash
        });
    }
    formatSearch() {
        return this[Internal].url.search;
    }
    get buildId() {
        return this[Internal].buildId;
    }
    set buildId(buildId) {
        this[Internal].buildId = buildId;
    }
    get locale() {
        return this[Internal].locale ?? "";
    }
    set locale(locale) {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig;
        if (!this[Internal].locale || !((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.locales.includes(locale))) {
            throw new TypeError(`The NextURL configuration includes no locale "${locale}"`);
        }
        this[Internal].locale = locale;
    }
    get defaultLocale() {
        return this[Internal].defaultLocale;
    }
    get domainLocale() {
        return this[Internal].domainLocale;
    }
    get searchParams() {
        return this[Internal].url.searchParams;
    }
    get host() {
        return this[Internal].url.host;
    }
    set host(value) {
        this[Internal].url.host = value;
    }
    get hostname() {
        return this[Internal].url.hostname;
    }
    set hostname(value) {
        this[Internal].url.hostname = value;
    }
    get port() {
        return this[Internal].url.port;
    }
    set port(value) {
        this[Internal].url.port = value;
    }
    get protocol() {
        return this[Internal].url.protocol;
    }
    set protocol(value) {
        this[Internal].url.protocol = value;
    }
    get href() {
        const pathname = this.formatPathname();
        const search = this.formatSearch();
        return `${this.protocol}//${this.host}${pathname}${search}${this.hash}`;
    }
    set href(url) {
        this[Internal].url = parseURL(url);
        this.analyze();
    }
    get origin() {
        return this[Internal].url.origin;
    }
    get pathname() {
        return this[Internal].url.pathname;
    }
    set pathname(value) {
        this[Internal].url.pathname = value;
    }
    get hash() {
        return this[Internal].url.hash;
    }
    set hash(value) {
        this[Internal].url.hash = value;
    }
    get search() {
        return this[Internal].url.search;
    }
    set search(value) {
        this[Internal].url.search = value;
    }
    get password() {
        return this[Internal].url.password;
    }
    set password(value) {
        this[Internal].url.password = value;
    }
    get username() {
        return this[Internal].url.username;
    }
    set username(value) {
        this[Internal].url.username = value;
    }
    get basePath() {
        return this[Internal].basePath;
    }
    set basePath(value) {
        this[Internal].basePath = value.startsWith("/") ? value : `/${value}`;
    }
    toString() {
        return this.href;
    }
    toJSON() {
        return this.href;
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            href: this.href,
            origin: this.origin,
            protocol: this.protocol,
            username: this.username,
            password: this.password,
            host: this.host,
            hostname: this.hostname,
            port: this.port,
            pathname: this.pathname,
            search: this.search,
            searchParams: this.searchParams,
            hash: this.hash
        };
    }
    clone() {
        return new NextURL(String(this), this[Internal].options);
    }
}

//# sourceMappingURL=next-url.js.map

/***/ }),

/***/ 53047:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
    HeadersAdapter: function() {
        return HeadersAdapter;
    },
    ReadonlyHeadersError: function() {
        return ReadonlyHeadersError;
    }
});
const _reflect = __webpack_require__(38238);
class ReadonlyHeadersError extends Error {
    constructor(){
        super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers");
    }
    static callable() {
        throw new ReadonlyHeadersError();
    }
}
class HeadersAdapter extends Headers {
    constructor(headers){
        // We've already overridden the methods that would be called, so we're just
        // calling the super constructor to ensure that the instanceof check works.
        super();
        this.headers = new Proxy(headers, {
            get (target, prop, receiver) {
                // Because this is just an object, we expect that all "get" operations
                // are for properties. If it's a "get" for a symbol, we'll just return
                // the symbol.
                if (typeof prop === "symbol") {
                    return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return undefined.
                if (typeof original === "undefined") return;
                // If the original casing exists, return the value.
                return _reflect.ReflectAdapter.get(target, original, receiver);
            },
            set (target, prop, value, receiver) {
                if (typeof prop === "symbol") {
                    return _reflect.ReflectAdapter.set(target, prop, value, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, use the prop as the key.
                return _reflect.ReflectAdapter.set(target, original ?? prop, value, receiver);
            },
            has (target, prop) {
                if (typeof prop === "symbol") return _reflect.ReflectAdapter.has(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return false.
                if (typeof original === "undefined") return false;
                // If the original casing exists, return true.
                return _reflect.ReflectAdapter.has(target, original);
            },
            deleteProperty (target, prop) {
                if (typeof prop === "symbol") return _reflect.ReflectAdapter.deleteProperty(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return true.
                if (typeof original === "undefined") return true;
                // If the original casing exists, delete the property.
                return _reflect.ReflectAdapter.deleteProperty(target, original);
            }
        });
    }
    /**
   * Seals a Headers instance to prevent modification by throwing an error when
   * any mutating method is called.
   */ static seal(headers) {
        return new Proxy(headers, {
            get (target, prop, receiver) {
                switch(prop){
                    case "append":
                    case "delete":
                    case "set":
                        return ReadonlyHeadersError.callable;
                    default:
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
    }
    /**
   * Merges a header value into a string. This stores multiple values as an
   * array, so we need to merge them into a string.
   *
   * @param value a header value
   * @returns a merged header value (a string)
   */ merge(value) {
        if (Array.isArray(value)) return value.join(", ");
        return value;
    }
    /**
   * Creates a Headers instance from a plain object or a Headers instance.
   *
   * @param headers a plain object or a Headers instance
   * @returns a headers instance
   */ static from(headers) {
        if (headers instanceof Headers) return headers;
        return new HeadersAdapter(headers);
    }
    append(name, value) {
        const existing = this.headers[name];
        if (typeof existing === "string") {
            this.headers[name] = [
                existing,
                value
            ];
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            this.headers[name] = value;
        }
    }
    delete(name) {
        delete this.headers[name];
    }
    get(name) {
        const value = this.headers[name];
        if (typeof value !== "undefined") return this.merge(value);
        return null;
    }
    has(name) {
        return typeof this.headers[name] !== "undefined";
    }
    set(name, value) {
        this.headers[name] = value;
    }
    forEach(callbackfn, thisArg) {
        for (const [name, value] of this.entries()){
            callbackfn.call(thisArg, value, name, this);
        }
    }
    *entries() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(name);
            yield [
                name,
                value
            ];
        }
    }
    *keys() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            yield name;
        }
    }
    *values() {
        for (const key of Object.keys(this.headers)){
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(key);
            yield value;
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
}

//# sourceMappingURL=headers.js.map

/***/ }),

/***/ 90127:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ReflectAdapter", ({
    enumerable: true,
    get: function() {
        return ReflectAdapter;
    }
}));
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === "function") {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
}

//# sourceMappingURL=reflect.js.map

/***/ }),

/***/ 38238:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ReflectAdapter", ({
    enumerable: true,
    get: function() {
        return ReflectAdapter;
    }
}));
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === "function") {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
}

//# sourceMappingURL=reflect.js.map

/***/ }),

/***/ 68996:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
    MutableRequestCookiesAdapter: function() {
        return MutableRequestCookiesAdapter;
    },
    ReadonlyRequestCookiesError: function() {
        return ReadonlyRequestCookiesError;
    },
    RequestCookiesAdapter: function() {
        return RequestCookiesAdapter;
    },
    appendMutableCookies: function() {
        return appendMutableCookies;
    },
    getModifiedCookieValues: function() {
        return getModifiedCookieValues;
    }
});
const _cookies = __webpack_require__(92044);
const _reflect = __webpack_require__(38238);
const _staticgenerationasyncstorageexternal = __webpack_require__(45869);
class ReadonlyRequestCookiesError extends Error {
    constructor(){
        super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options");
    }
    static callable() {
        throw new ReadonlyRequestCookiesError();
    }
}
class RequestCookiesAdapter {
    static seal(cookies) {
        return new Proxy(cookies, {
            get (target, prop, receiver) {
                switch(prop){
                    case "clear":
                    case "delete":
                    case "set":
                        return ReadonlyRequestCookiesError.callable;
                    default:
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
    }
}
const SYMBOL_MODIFY_COOKIE_VALUES = Symbol.for("next.mutated.cookies");
function getModifiedCookieValues(cookies) {
    const modified = cookies[SYMBOL_MODIFY_COOKIE_VALUES];
    if (!modified || !Array.isArray(modified) || modified.length === 0) {
        return [];
    }
    return modified;
}
function appendMutableCookies(headers, mutableCookies) {
    const modifiedCookieValues = getModifiedCookieValues(mutableCookies);
    if (modifiedCookieValues.length === 0) {
        return false;
    }
    // Return a new response that extends the response with
    // the modified cookies as fallbacks. `res` cookies
    // will still take precedence.
    const resCookies = new _cookies.ResponseCookies(headers);
    const returnedCookies = resCookies.getAll();
    // Set the modified cookies as fallbacks.
    for (const cookie of modifiedCookieValues){
        resCookies.set(cookie);
    }
    // Set the original cookies as the final values.
    for (const cookie of returnedCookies){
        resCookies.set(cookie);
    }
    return true;
}
class MutableRequestCookiesAdapter {
    static wrap(cookies, onUpdateCookies) {
        const responseCookies = new _cookies.ResponseCookies(new Headers());
        for (const cookie of cookies.getAll()){
            responseCookies.set(cookie);
        }
        let modifiedValues = [];
        const modifiedCookies = new Set();
        const updateResponseCookies = ()=>{
            // TODO-APP: change method of getting staticGenerationAsyncStore
            const staticGenerationAsyncStore = _staticgenerationasyncstorageexternal.staticGenerationAsyncStorage.getStore();
            if (staticGenerationAsyncStore) {
                staticGenerationAsyncStore.pathWasRevalidated = true;
            }
            const allCookies = responseCookies.getAll();
            modifiedValues = allCookies.filter((c)=>modifiedCookies.has(c.name));
            if (onUpdateCookies) {
                const serializedCookies = [];
                for (const cookie of modifiedValues){
                    const tempCookies = new _cookies.ResponseCookies(new Headers());
                    tempCookies.set(cookie);
                    serializedCookies.push(tempCookies.toString());
                }
                onUpdateCookies(serializedCookies);
            }
        };
        return new Proxy(responseCookies, {
            get (target, prop, receiver) {
                switch(prop){
                    // A special symbol to get the modified cookie values
                    case SYMBOL_MODIFY_COOKIE_VALUES:
                        return modifiedValues;
                    // TODO: Throw error if trying to set a cookie after the response
                    // headers have been set.
                    case "delete":
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === "string" ? args[0] : args[0].name);
                            try {
                                target.delete(...args);
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    case "set":
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === "string" ? args[0] : args[0].name);
                            try {
                                return target.set(...args);
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    default:
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
    }
}

//# sourceMappingURL=request-cookies.js.map

/***/ }),

/***/ 32205:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
    RequestCookies: function() {
        return _cookies.RequestCookies;
    },
    ResponseCookies: function() {
        return _cookies.ResponseCookies;
    },
    stringifyCookie: function() {
        return _cookies.stringifyCookie;
    }
});
const _cookies = __webpack_require__(36637);

//# sourceMappingURL=cookies.js.map

/***/ }),

/***/ 92044:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
    RequestCookies: function() {
        return _cookies.RequestCookies;
    },
    ResponseCookies: function() {
        return _cookies.ResponseCookies;
    },
    stringifyCookie: function() {
        return _cookies.stringifyCookie;
    }
});
const _cookies = __webpack_require__(79925);

//# sourceMappingURL=cookies.js.map

/***/ }),

/***/ 76274:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @deprecated ImageResponse moved from "next/server" to "next/og" since Next.js 14, please import from "next/og" instead.
 * Migration with codemods: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#next-og-import
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ImageResponse", ({
    enumerable: true,
    get: function() {
        return ImageResponse;
    }
}));
function ImageResponse() {
    throw new Error('ImageResponse moved from "next/server" to "next/og" since Next.js 14, please import from "next/og" instead');
}

//# sourceMappingURL=image-response.js.map

/***/ }),

/***/ 10006:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @deprecated ImageResponse moved from "next/server" to "next/og" since Next.js 14, please import from "next/og" instead.
 * Migration with codemods: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#next-og-import
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ImageResponse", ({
    enumerable: true,
    get: function() {
        return ImageResponse;
    }
}));
function ImageResponse() {
    throw new Error('ImageResponse moved from "next/server" to "next/og" since Next.js 14, please import from "next/og" instead');
}

//# sourceMappingURL=image-response.js.map

/***/ }),

/***/ 49253:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
    INTERNALS: function() {
        return INTERNALS;
    },
    NextRequest: function() {
        return NextRequest;
    }
});
const _nexturl = __webpack_require__(62420);
const _utils = __webpack_require__(45724);
const _error = __webpack_require__(46294);
const _cookies = __webpack_require__(32205);
const INTERNALS = Symbol("internal request");
class NextRequest extends Request {
    constructor(input, init = {}){
        const url = typeof input !== "string" && "url" in input ? input.url : String(input);
        (0, _utils.validateURL)(url);
        if (input instanceof Request) super(input, init);
        else super(url, init);
        const nextUrl = new _nexturl.NextURL(url, {
            headers: (0, _utils.toNodeOutgoingHttpHeaders)(this.headers),
            nextConfig: init.nextConfig
        });
        this[INTERNALS] = {
            cookies: new _cookies.RequestCookies(this.headers),
            geo: init.geo || {},
            ip: init.ip,
            nextUrl,
            url:  false ? 0 : nextUrl.toString()
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            geo: this.geo,
            ip: this.ip,
            nextUrl: this.nextUrl,
            url: this.url,
            // rest of props come from Request
            bodyUsed: this.bodyUsed,
            cache: this.cache,
            credentials: this.credentials,
            destination: this.destination,
            headers: Object.fromEntries(this.headers),
            integrity: this.integrity,
            keepalive: this.keepalive,
            method: this.method,
            mode: this.mode,
            redirect: this.redirect,
            referrer: this.referrer,
            referrerPolicy: this.referrerPolicy,
            signal: this.signal
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    get geo() {
        return this[INTERNALS].geo;
    }
    get ip() {
        return this[INTERNALS].ip;
    }
    get nextUrl() {
        return this[INTERNALS].nextUrl;
    }
    /**
   * @deprecated
   * `page` has been deprecated in favour of `URLPattern`.
   * Read more: https://nextjs.org/docs/messages/middleware-request-page
   */ get page() {
        throw new _error.RemovedPageError();
    }
    /**
   * @deprecated
   * `ua` has been removed in favour of \`userAgent\` function.
   * Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
   */ get ua() {
        throw new _error.RemovedUAError();
    }
    get url() {
        return this[INTERNALS].url;
    }
}

//# sourceMappingURL=request.js.map

/***/ }),

/***/ 39745:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
    INTERNALS: function() {
        return INTERNALS;
    },
    NextRequest: function() {
        return NextRequest;
    }
});
const _nexturl = __webpack_require__(79519);
const _utils = __webpack_require__(17636);
const _error = __webpack_require__(44);
const _cookies = __webpack_require__(92044);
const INTERNALS = Symbol("internal request");
class NextRequest extends Request {
    constructor(input, init = {}){
        const url = typeof input !== "string" && "url" in input ? input.url : String(input);
        (0, _utils.validateURL)(url);
        if (input instanceof Request) super(input, init);
        else super(url, init);
        const nextUrl = new _nexturl.NextURL(url, {
            headers: (0, _utils.toNodeOutgoingHttpHeaders)(this.headers),
            nextConfig: init.nextConfig
        });
        this[INTERNALS] = {
            cookies: new _cookies.RequestCookies(this.headers),
            geo: init.geo || {},
            ip: init.ip,
            nextUrl,
            url:  false ? 0 : nextUrl.toString()
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            geo: this.geo,
            ip: this.ip,
            nextUrl: this.nextUrl,
            url: this.url,
            // rest of props come from Request
            bodyUsed: this.bodyUsed,
            cache: this.cache,
            credentials: this.credentials,
            destination: this.destination,
            headers: Object.fromEntries(this.headers),
            integrity: this.integrity,
            keepalive: this.keepalive,
            method: this.method,
            mode: this.mode,
            redirect: this.redirect,
            referrer: this.referrer,
            referrerPolicy: this.referrerPolicy,
            signal: this.signal
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    get geo() {
        return this[INTERNALS].geo;
    }
    get ip() {
        return this[INTERNALS].ip;
    }
    get nextUrl() {
        return this[INTERNALS].nextUrl;
    }
    /**
   * @deprecated
   * `page` has been deprecated in favour of `URLPattern`.
   * Read more: https://nextjs.org/docs/messages/middleware-request-page
   */ get page() {
        throw new _error.RemovedPageError();
    }
    /**
   * @deprecated
   * `ua` has been removed in favour of \`userAgent\` function.
   * Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
   */ get ua() {
        throw new _error.RemovedUAError();
    }
    get url() {
        return this[INTERNALS].url;
    }
}

//# sourceMappingURL=request.js.map

/***/ }),

/***/ 86716:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "NextResponse", ({
    enumerable: true,
    get: function() {
        return NextResponse;
    }
}));
const _cookies = __webpack_require__(32205);
const _nexturl = __webpack_require__(62420);
const _utils = __webpack_require__(45724);
const _reflect = __webpack_require__(90127);
const _cookies1 = __webpack_require__(32205);
const INTERNALS = Symbol("internal response");
const REDIRECTS = new Set([
    301,
    302,
    303,
    307,
    308
]);
function handleMiddlewareField(init, headers) {
    var _init_request;
    if (init == null ? void 0 : (_init_request = init.request) == null ? void 0 : _init_request.headers) {
        if (!(init.request.headers instanceof Headers)) {
            throw new Error("request.headers must be an instance of Headers");
        }
        const keys = [];
        for (const [key, value] of init.request.headers){
            headers.set("x-middleware-request-" + key, value);
            keys.push(key);
        }
        headers.set("x-middleware-override-headers", keys.join(","));
    }
}
class NextResponse extends Response {
    constructor(body, init = {}){
        super(body, init);
        const headers = this.headers;
        const cookies = new _cookies1.ResponseCookies(headers);
        const cookiesProxy = new Proxy(cookies, {
            get (target, prop, receiver) {
                switch(prop){
                    case "delete":
                    case "set":
                        {
                            return (...args)=>{
                                const result = Reflect.apply(target[prop], target, args);
                                const newHeaders = new Headers(headers);
                                if (result instanceof _cookies1.ResponseCookies) {
                                    headers.set("x-middleware-set-cookie", result.getAll().map((cookie)=>(0, _cookies.stringifyCookie)(cookie)).join(","));
                                }
                                handleMiddlewareField(init, newHeaders);
                                return result;
                            };
                        }
                    default:
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
        this[INTERNALS] = {
            cookies: cookiesProxy,
            url: init.url ? new _nexturl.NextURL(init.url, {
                headers: (0, _utils.toNodeOutgoingHttpHeaders)(headers),
                nextConfig: init.nextConfig
            }) : undefined
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            url: this.url,
            // rest of props come from Response
            body: this.body,
            bodyUsed: this.bodyUsed,
            headers: Object.fromEntries(this.headers),
            ok: this.ok,
            redirected: this.redirected,
            status: this.status,
            statusText: this.statusText,
            type: this.type
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    static json(body, init) {
        const response = Response.json(body, init);
        return new NextResponse(response.body, response);
    }
    static redirect(url, init) {
        const status = typeof init === "number" ? init : (init == null ? void 0 : init.status) ?? 307;
        if (!REDIRECTS.has(status)) {
            throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
        }
        const initObj = typeof init === "object" ? init : {};
        const headers = new Headers(initObj == null ? void 0 : initObj.headers);
        headers.set("Location", (0, _utils.validateURL)(url));
        return new NextResponse(null, {
            ...initObj,
            headers,
            status
        });
    }
    static rewrite(destination, init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-rewrite", (0, _utils.validateURL)(destination));
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
    static next(init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-next", "1");
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
}

//# sourceMappingURL=response.js.map

/***/ }),

/***/ 59211:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "NextResponse", ({
    enumerable: true,
    get: function() {
        return NextResponse;
    }
}));
const _cookies = __webpack_require__(92044);
const _nexturl = __webpack_require__(79519);
const _utils = __webpack_require__(17636);
const _reflect = __webpack_require__(38238);
const _cookies1 = __webpack_require__(92044);
const INTERNALS = Symbol("internal response");
const REDIRECTS = new Set([
    301,
    302,
    303,
    307,
    308
]);
function handleMiddlewareField(init, headers) {
    var _init_request;
    if (init == null ? void 0 : (_init_request = init.request) == null ? void 0 : _init_request.headers) {
        if (!(init.request.headers instanceof Headers)) {
            throw new Error("request.headers must be an instance of Headers");
        }
        const keys = [];
        for (const [key, value] of init.request.headers){
            headers.set("x-middleware-request-" + key, value);
            keys.push(key);
        }
        headers.set("x-middleware-override-headers", keys.join(","));
    }
}
class NextResponse extends Response {
    constructor(body, init = {}){
        super(body, init);
        const headers = this.headers;
        const cookies = new _cookies1.ResponseCookies(headers);
        const cookiesProxy = new Proxy(cookies, {
            get (target, prop, receiver) {
                switch(prop){
                    case "delete":
                    case "set":
                        {
                            return (...args)=>{
                                const result = Reflect.apply(target[prop], target, args);
                                const newHeaders = new Headers(headers);
                                if (result instanceof _cookies1.ResponseCookies) {
                                    headers.set("x-middleware-set-cookie", result.getAll().map((cookie)=>(0, _cookies.stringifyCookie)(cookie)).join(","));
                                }
                                handleMiddlewareField(init, newHeaders);
                                return result;
                            };
                        }
                    default:
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
        this[INTERNALS] = {
            cookies: cookiesProxy,
            url: init.url ? new _nexturl.NextURL(init.url, {
                headers: (0, _utils.toNodeOutgoingHttpHeaders)(headers),
                nextConfig: init.nextConfig
            }) : undefined
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            url: this.url,
            // rest of props come from Response
            body: this.body,
            bodyUsed: this.bodyUsed,
            headers: Object.fromEntries(this.headers),
            ok: this.ok,
            redirected: this.redirected,
            status: this.status,
            statusText: this.statusText,
            type: this.type
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    static json(body, init) {
        const response = Response.json(body, init);
        return new NextResponse(response.body, response);
    }
    static redirect(url, init) {
        const status = typeof init === "number" ? init : (init == null ? void 0 : init.status) ?? 307;
        if (!REDIRECTS.has(status)) {
            throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
        }
        const initObj = typeof init === "object" ? init : {};
        const headers = new Headers(initObj == null ? void 0 : initObj.headers);
        headers.set("Location", (0, _utils.validateURL)(url));
        return new NextResponse(null, {
            ...initObj,
            headers,
            status
        });
    }
    static rewrite(destination, init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-rewrite", (0, _utils.validateURL)(destination));
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
    static next(init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-next", "1");
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
}

//# sourceMappingURL=response.js.map

/***/ }),

/***/ 27718:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "URLPattern", ({
    enumerable: true,
    get: function() {
        return GlobalURLPattern;
    }
}));
const GlobalURLPattern = // @ts-expect-error: URLPattern is not available in Node.js
typeof URLPattern === "undefined" ? undefined : URLPattern;

//# sourceMappingURL=url-pattern.js.map

/***/ }),

/***/ 72433:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "URLPattern", ({
    enumerable: true,
    get: function() {
        return GlobalURLPattern;
    }
}));
const GlobalURLPattern = // @ts-expect-error: URLPattern is not available in Node.js
typeof URLPattern === "undefined" ? undefined : URLPattern;

//# sourceMappingURL=url-pattern.js.map

/***/ }),

/***/ 27:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
    isBot: function() {
        return isBot;
    },
    userAgent: function() {
        return userAgent;
    },
    userAgentFromString: function() {
        return userAgentFromString;
    }
});
const _uaparserjs = /*#__PURE__*/ _interop_require_default(__webpack_require__(42565));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isBot(input) {
    return /Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Google-InspectionTool|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(input);
}
function userAgentFromString(input) {
    return {
        ...(0, _uaparserjs.default)(input),
        isBot: input === undefined ? false : isBot(input)
    };
}
function userAgent({ headers }) {
    return userAgentFromString(headers.get("user-agent") || undefined);
}

//# sourceMappingURL=user-agent.js.map

/***/ }),

/***/ 78471:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
    isBot: function() {
        return isBot;
    },
    userAgent: function() {
        return userAgent;
    },
    userAgentFromString: function() {
        return userAgentFromString;
    }
});
const _uaparserjs = /*#__PURE__*/ _interop_require_default(__webpack_require__(18346));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isBot(input) {
    return /Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Google-InspectionTool|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(input);
}
function userAgentFromString(input) {
    return {
        ...(0, _uaparserjs.default)(input),
        isBot: input === undefined ? false : isBot(input)
    };
}
function userAgent({ headers }) {
    return userAgentFromString(headers.get("user-agent") || undefined);
}

//# sourceMappingURL=user-agent.js.map

/***/ }),

/***/ 45724:
/***/ ((__unused_webpack_module, exports) => {

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
    fromNodeOutgoingHttpHeaders: function() {
        return fromNodeOutgoingHttpHeaders;
    },
    splitCookiesString: function() {
        return splitCookiesString;
    },
    toNodeOutgoingHttpHeaders: function() {
        return toNodeOutgoingHttpHeaders;
    },
    validateURL: function() {
        return validateURL;
    }
});
function fromNodeOutgoingHttpHeaders(nodeHeaders) {
    const headers = new Headers();
    for (let [key, value] of Object.entries(nodeHeaders)){
        const values = Array.isArray(value) ? value : [
            value
        ];
        for (let v of values){
            if (typeof v === "undefined") continue;
            if (typeof v === "number") {
                v = v.toString();
            }
            headers.append(key, v);
        }
    }
    return headers;
}
function splitCookiesString(cookiesString) {
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                // ',' is a cookie separator if we have later first '=', not ';' or ','
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                // currently special character
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    // we found cookies separator
                    cookiesSeparatorFound = true;
                    // pos is inside the next cookie, so back up and return it.
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    // in param ',' or param separator ';',
                    // we continue from that comma
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
function toNodeOutgoingHttpHeaders(headers) {
    const nodeHeaders = {};
    const cookies = [];
    if (headers) {
        for (const [key, value] of headers.entries()){
            if (key.toLowerCase() === "set-cookie") {
                // We may have gotten a comma joined string of cookies, or multiple
                // set-cookie headers. We need to merge them into one header array
                // to represent all the cookies.
                cookies.push(...splitCookiesString(value));
                nodeHeaders[key] = cookies.length === 1 ? cookies[0] : cookies;
            } else {
                nodeHeaders[key] = value;
            }
        }
    }
    return nodeHeaders;
}
function validateURL(url) {
    try {
        return String(new URL(String(url)));
    } catch (error) {
        throw new Error(`URL is malformed "${String(url)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
            cause: error
        });
    }
}

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 17636:
/***/ ((__unused_webpack_module, exports) => {

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
    fromNodeOutgoingHttpHeaders: function() {
        return fromNodeOutgoingHttpHeaders;
    },
    splitCookiesString: function() {
        return splitCookiesString;
    },
    toNodeOutgoingHttpHeaders: function() {
        return toNodeOutgoingHttpHeaders;
    },
    validateURL: function() {
        return validateURL;
    }
});
function fromNodeOutgoingHttpHeaders(nodeHeaders) {
    const headers = new Headers();
    for (let [key, value] of Object.entries(nodeHeaders)){
        const values = Array.isArray(value) ? value : [
            value
        ];
        for (let v of values){
            if (typeof v === "undefined") continue;
            if (typeof v === "number") {
                v = v.toString();
            }
            headers.append(key, v);
        }
    }
    return headers;
}
function splitCookiesString(cookiesString) {
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                // ',' is a cookie separator if we have later first '=', not ';' or ','
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                // currently special character
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    // we found cookies separator
                    cookiesSeparatorFound = true;
                    // pos is inside the next cookie, so back up and return it.
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    // in param ',' or param separator ';',
                    // we continue from that comma
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
function toNodeOutgoingHttpHeaders(headers) {
    const nodeHeaders = {};
    const cookies = [];
    if (headers) {
        for (const [key, value] of headers.entries()){
            if (key.toLowerCase() === "set-cookie") {
                // We may have gotten a comma joined string of cookies, or multiple
                // set-cookie headers. We need to merge them into one header array
                // to represent all the cookies.
                cookies.push(...splitCookiesString(value));
                nodeHeaders[key] = cookies.length === 1 ? cookies[0] : cookies;
            } else {
                nodeHeaders[key] = value;
            }
        }
    }
    return nodeHeaders;
}
function validateURL(url) {
    try {
        return String(new URL(String(url)));
    } catch (error) {
        throw new Error(`URL is malformed "${String(url)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
            cause: error
        });
    }
}

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 4080:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
// regexp is based on https://github.com/sindresorhus/escape-string-regexp

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "escapeStringRegexp", ({
    enumerable: true,
    get: function() {
        return escapeStringRegexp;
    }
}));
const reHasRegExp = /[|\\{}()[\]^$+*?.-]/;
const reReplaceRegExp = /[|\\{}()[\]^$+*?.-]/g;
function escapeStringRegexp(str) {
    // see also: https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/escapeRegExp.js#L23
    if (reHasRegExp.test(str)) {
        return str.replace(reReplaceRegExp, "\\$&");
    }
    return str;
} //# sourceMappingURL=escape-regexp.js.map


/***/ }),

/***/ 48614:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getHostname", ({
    enumerable: true,
    get: function() {
        return getHostname;
    }
}));
function getHostname(parsed, headers) {
    // Get the hostname from the headers if it exists, otherwise use the parsed
    // hostname.
    let hostname;
    if ((headers == null ? void 0 : headers.host) && !Array.isArray(headers.host)) {
        hostname = headers.host.toString().split(":", 1)[0];
    } else if (parsed.hostname) {
        hostname = parsed.hostname;
    } else return;
    return hostname.toLowerCase();
} //# sourceMappingURL=get-hostname.js.map


/***/ }),

/***/ 61675:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getHostname", ({
    enumerable: true,
    get: function() {
        return getHostname;
    }
}));
function getHostname(parsed, headers) {
    // Get the hostname from the headers if it exists, otherwise use the parsed
    // hostname.
    let hostname;
    if ((headers == null ? void 0 : headers.host) && !Array.isArray(headers.host)) {
        hostname = headers.host.toString().split(":", 1)[0];
    } else if (parsed.hostname) {
        hostname = parsed.hostname;
    } else return;
    return hostname.toLowerCase();
} //# sourceMappingURL=get-hostname.js.map


/***/ }),

/***/ 79241:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getImgProps", ({
    enumerable: true,
    get: function() {
        return getImgProps;
    }
}));
const _warnonce = __webpack_require__(96501);
const _imageblursvg = __webpack_require__(95728);
const _imageconfig = __webpack_require__(29472);
const VALID_LOADING_VALUES = (/* unused pure expression or super */ null && ([
    "lazy",
    "eager",
    undefined
]));
function isStaticRequire(src) {
    return src.default !== undefined;
}
function isStaticImageData(src) {
    return src.src !== undefined;
}
function isStaticImport(src) {
    return typeof src === "object" && (isStaticRequire(src) || isStaticImageData(src));
}
const allImgs = new Map();
let perfObserver;
function getInt(x) {
    if (typeof x === "undefined") {
        return x;
    }
    if (typeof x === "number") {
        return Number.isFinite(x) ? x : NaN;
    }
    if (typeof x === "string" && /^[0-9]+$/.test(x)) {
        return parseInt(x, 10);
    }
    return NaN;
}
function getWidths(param, width, sizes) {
    let { deviceSizes, allSizes } = param;
    if (sizes) {
        // Find all the "vw" percent sizes used in the sizes prop
        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
        const percentSizes = [];
        for(let match; match = viewportWidthRe.exec(sizes); match){
            percentSizes.push(parseInt(match[2]));
        }
        if (percentSizes.length) {
            const smallestRatio = Math.min(...percentSizes) * 0.01;
            return {
                widths: allSizes.filter((s)=>s >= deviceSizes[0] * smallestRatio),
                kind: "w"
            };
        }
        return {
            widths: allSizes,
            kind: "w"
        };
    }
    if (typeof width !== "number") {
        return {
            widths: deviceSizes,
            kind: "w"
        };
    }
    const widths = [
        ...new Set(// > are actually 3x in the green color, but only 1.5x in the red and
        // > blue colors. Showing a 3x resolution image in the app vs a 2x
        // > resolution image will be visually the same, though the 3x image
        // > takes significantly more data. Even true 3x resolution screens are
        // > wasteful as the human eye cannot see that level of detail without
        // > something like a magnifying glass.
        // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
        [
            width,
            width * 2 /*, width * 3*/ 
        ].map((w)=>allSizes.find((p)=>p >= w) || allSizes[allSizes.length - 1]))
    ];
    return {
        widths,
        kind: "x"
    };
}
function generateImgAttrs(param) {
    let { config, src, unoptimized, width, quality, sizes, loader } = param;
    if (unoptimized) {
        return {
            src,
            srcSet: undefined,
            sizes: undefined
        };
    }
    const { widths, kind } = getWidths(config, width, sizes);
    const last = widths.length - 1;
    return {
        sizes: !sizes && kind === "w" ? "100vw" : sizes,
        srcSet: widths.map((w, i)=>loader({
                config,
                src,
                quality,
                width: w
            }) + " " + (kind === "w" ? w : i + 1) + kind).join(", "),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: loader({
            config,
            src,
            quality,
            width: widths[last]
        })
    };
}
function getImgProps(param, _state) {
    let { src, sizes, unoptimized = false, priority = false, loading, className, quality, width, height, fill = false, style, overrideSrc, onLoad, onLoadingComplete, placeholder = "empty", blurDataURL, fetchPriority, layout, objectFit, objectPosition, lazyBoundary, lazyRoot, ...rest } = param;
    const { imgConf, showAltText, blurComplete, defaultLoader } = _state;
    let config;
    let c = imgConf || _imageconfig.imageConfigDefault;
    if ("allSizes" in c) {
        config = c;
    } else {
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        config = {
            ...c,
            allSizes,
            deviceSizes
        };
    }
    if (typeof defaultLoader === "undefined") {
        throw new Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
    }
    let loader = rest.loader || defaultLoader;
    // Remove property so it's not spread on <img> element
    delete rest.loader;
    delete rest.srcSet;
    // This special value indicates that the user
    // didn't define a "loader" prop or "loader" config.
    const isDefaultLoader = "__next_img_default" in loader;
    if (isDefaultLoader) {
        if (config.loader === "custom") {
            throw new Error('Image with src "' + src + '" is missing "loader" prop.' + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader");
        }
    } else {
        // The user defined a "loader" prop or config.
        // Since the config object is internal only, we
        // must not pass it to the user-defined "loader".
        const customImageLoader = loader;
        loader = (obj)=>{
            const { config: _, ...opts } = obj;
            return customImageLoader(opts);
        };
    }
    if (layout) {
        if (layout === "fill") {
            fill = true;
        }
        const layoutToStyle = {
            intrinsic: {
                maxWidth: "100%",
                height: "auto"
            },
            responsive: {
                width: "100%",
                height: "auto"
            }
        };
        const layoutToSizes = {
            responsive: "100vw",
            fill: "100vw"
        };
        const layoutStyle = layoutToStyle[layout];
        if (layoutStyle) {
            style = {
                ...style,
                ...layoutStyle
            };
        }
        const layoutSizes = layoutToSizes[layout];
        if (layoutSizes && !sizes) {
            sizes = layoutSizes;
        }
    }
    let staticSrc = "";
    let widthInt = getInt(width);
    let heightInt = getInt(height);
    let blurWidth;
    let blurHeight;
    if (isStaticImport(src)) {
        const staticImageData = isStaticRequire(src) ? src.default : src;
        if (!staticImageData.src) {
            throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(staticImageData));
        }
        if (!staticImageData.height || !staticImageData.width) {
            throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(staticImageData));
        }
        blurWidth = staticImageData.blurWidth;
        blurHeight = staticImageData.blurHeight;
        blurDataURL = blurDataURL || staticImageData.blurDataURL;
        staticSrc = staticImageData.src;
        if (!fill) {
            if (!widthInt && !heightInt) {
                widthInt = staticImageData.width;
                heightInt = staticImageData.height;
            } else if (widthInt && !heightInt) {
                const ratio = widthInt / staticImageData.width;
                heightInt = Math.round(staticImageData.height * ratio);
            } else if (!widthInt && heightInt) {
                const ratio = heightInt / staticImageData.height;
                widthInt = Math.round(staticImageData.width * ratio);
            }
        }
    }
    src = typeof src === "string" ? src : staticSrc;
    let isLazy = !priority && (loading === "lazy" || typeof loading === "undefined");
    if (!src || src.startsWith("data:") || src.startsWith("blob:")) {
        // https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
        unoptimized = true;
        isLazy = false;
    }
    if (config.unoptimized) {
        unoptimized = true;
    }
    if (isDefaultLoader && src.endsWith(".svg") && !config.dangerouslyAllowSVG) {
        // Special case to make svg serve as-is to avoid proxying
        // through the built-in Image Optimization API.
        unoptimized = true;
    }
    if (priority) {
        fetchPriority = "high";
    }
    const qualityInt = getInt(quality);
    if (false) {}
    const imgStyle = Object.assign(fill ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit,
        objectPosition
    } : {}, showAltText ? {} : {
        color: "transparent"
    }, style);
    const backgroundImage = !blurComplete && placeholder !== "empty" ? placeholder === "blur" ? 'url("data:image/svg+xml;charset=utf-8,' + (0, _imageblursvg.getImageBlurSvg)({
        widthInt,
        heightInt,
        blurWidth,
        blurHeight,
        blurDataURL: blurDataURL || "",
        objectFit: imgStyle.objectFit
    }) + '")' : 'url("' + placeholder + '")' // assume `data:image/`
     : null;
    let placeholderStyle = backgroundImage ? {
        backgroundSize: imgStyle.objectFit || "cover",
        backgroundPosition: imgStyle.objectPosition || "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundImage
    } : {};
    if (false) {}
    const imgAttributes = generateImgAttrs({
        config,
        src,
        unoptimized,
        width: widthInt,
        quality: qualityInt,
        sizes,
        loader
    });
    if (false) {}
    const props = {
        ...rest,
        loading: isLazy ? "lazy" : loading,
        fetchPriority,
        width: widthInt,
        height: heightInt,
        decoding: "async",
        className,
        style: {
            ...imgStyle,
            ...placeholderStyle
        },
        sizes: imgAttributes.sizes,
        srcSet: imgAttributes.srcSet,
        src: overrideSrc || imgAttributes.src
    };
    const meta = {
        unoptimized,
        priority,
        placeholder,
        fill
    };
    return {
        props,
        meta
    };
} //# sourceMappingURL=get-img-props.js.map


/***/ }),

/***/ 8785:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
// http://www.cse.yorku.ca/~oz/hash.html
// More specifically, 32-bit hash via djbxor
// (ref: https://gist.github.com/eplawless/52813b1d8ad9af510d85?permalink_comment_id=3367765#gistcomment-3367765)
// This is due to number type differences between rust for turbopack to js number types,
// where rust does not have easy way to repreesnt js's 53-bit float number type for the matching
// overflow behavior. This is more `correct` in terms of having canonical hash across different runtime / implementation
// as can gaurantee determinstic output from 32bit hash.

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
    djb2Hash: function() {
        return djb2Hash;
    },
    hexHash: function() {
        return hexHash;
    }
});
function djb2Hash(str) {
    let hash = 5381;
    for(let i = 0; i < str.length; i++){
        const char = str.charCodeAt(i);
        hash = (hash << 5) + hash + char & 0xffffffff;
    }
    return hash >>> 0;
}
function hexHash(str) {
    return djb2Hash(str).toString(36).slice(0, 5);
} //# sourceMappingURL=hash.js.map


/***/ }),

/***/ 19976:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "detectDomainLocale", ({
    enumerable: true,
    get: function() {
        return detectDomainLocale;
    }
}));
function detectDomainLocale(domainItems, hostname, detectedLocale) {
    if (!domainItems) return;
    if (detectedLocale) {
        detectedLocale = detectedLocale.toLowerCase();
    }
    for (const item of domainItems){
        var _item_domain, _item_locales;
        // remove port if present
        const domainHostname = (_item_domain = item.domain) == null ? void 0 : _item_domain.split(":", 1)[0].toLowerCase();
        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((_item_locales = item.locales) == null ? void 0 : _item_locales.some((locale)=>locale.toLowerCase() === detectedLocale))) {
            return item;
        }
    }
} //# sourceMappingURL=detect-domain-locale.js.map


/***/ }),

/***/ 23777:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "detectDomainLocale", ({
    enumerable: true,
    get: function() {
        return detectDomainLocale;
    }
}));
function detectDomainLocale(domainItems, hostname, detectedLocale) {
    if (!domainItems) return;
    if (detectedLocale) {
        detectedLocale = detectedLocale.toLowerCase();
    }
    for (const item of domainItems){
        var _item_domain, _item_locales;
        // remove port if present
        const domainHostname = (_item_domain = item.domain) == null ? void 0 : _item_domain.split(":", 1)[0].toLowerCase();
        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((_item_locales = item.locales) == null ? void 0 : _item_locales.some((locale)=>locale.toLowerCase() === detectedLocale))) {
            return item;
        }
    }
} //# sourceMappingURL=detect-domain-locale.js.map


/***/ }),

/***/ 82823:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "normalizeLocalePath", ({
    enumerable: true,
    get: function() {
        return normalizeLocalePath;
    }
}));
function normalizeLocalePath(pathname, locales) {
    let detectedLocale;
    // first item will be empty string from splitting at first char
    const pathnameParts = pathname.split("/");
    (locales || []).some((locale)=>{
        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
            detectedLocale = locale;
            pathnameParts.splice(1, 1);
            pathname = pathnameParts.join("/") || "/";
            return true;
        }
        return false;
    });
    return {
        pathname,
        detectedLocale
    };
} //# sourceMappingURL=normalize-locale-path.js.map


/***/ }),

/***/ 95014:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "normalizeLocalePath", ({
    enumerable: true,
    get: function() {
        return normalizeLocalePath;
    }
}));
function normalizeLocalePath(pathname, locales) {
    let detectedLocale;
    // first item will be empty string from splitting at first char
    const pathnameParts = pathname.split("/");
    (locales || []).some((locale)=>{
        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
            detectedLocale = locale;
            pathnameParts.splice(1, 1);
            pathname = pathnameParts.join("/") || "/";
            return true;
        }
        return false;
    });
    return {
        pathname,
        detectedLocale
    };
} //# sourceMappingURL=normalize-locale-path.js.map


/***/ }),

/***/ 95728:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * A shared function, used on both client and server, to generate a SVG blur placeholder.
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getImageBlurSvg", ({
    enumerable: true,
    get: function() {
        return getImageBlurSvg;
    }
}));
function getImageBlurSvg(param) {
    let { widthInt, heightInt, blurWidth, blurHeight, blurDataURL, objectFit } = param;
    const std = 20;
    const svgWidth = blurWidth ? blurWidth * 40 : widthInt;
    const svgHeight = blurHeight ? blurHeight * 40 : heightInt;
    const viewBox = svgWidth && svgHeight ? "viewBox='0 0 " + svgWidth + " " + svgHeight + "'" : "";
    const preserveAspectRatio = viewBox ? "none" : objectFit === "contain" ? "xMidYMid" : objectFit === "cover" ? "xMidYMid slice" : "none";
    return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + viewBox + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='" + std + "'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='" + std + "'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + preserveAspectRatio + "' style='filter: url(%23b);' href='" + blurDataURL + "'/%3E%3C/svg%3E";
} //# sourceMappingURL=image-blur-svg.js.map


/***/ }),

/***/ 29472:
/***/ ((__unused_webpack_module, exports) => {

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
    VALID_LOADERS: function() {
        return VALID_LOADERS;
    },
    imageConfigDefault: function() {
        return imageConfigDefault;
    }
});
const VALID_LOADERS = [
    "default",
    "imgix",
    "cloudinary",
    "akamai",
    "custom"
];
const imageConfigDefault = {
    deviceSizes: [
        640,
        750,
        828,
        1080,
        1200,
        1920,
        2048,
        3840
    ],
    imageSizes: [
        16,
        32,
        48,
        64,
        96,
        128,
        256,
        384
    ],
    path: "/_next/image",
    loader: "default",
    loaderFile: "",
    domains: [],
    disableStaticImages: false,
    minimumCacheTTL: 60,
    formats: [
        "image/webp"
    ],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
    contentDispositionType: "inline",
    remotePatterns: [],
    unoptimized: false
}; //# sourceMappingURL=image-config.js.map


/***/ }),

/***/ 66794:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
    default: function() {
        return _default;
    },
    getImageProps: function() {
        return getImageProps;
    }
});
const _interop_require_default = __webpack_require__(53370);
const _getimgprops = __webpack_require__(79241);
const _imagecomponent = __webpack_require__(10221);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(52049));
function getImageProps(imgProps) {
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false}
    });
    // Normally we don't care about undefined props because we pass to JSX,
    // but this exported function could be used by the end user for anything
    // so we delete undefined props to clean it up a little.
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
}
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map


/***/ }),

/***/ 52049:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
function defaultLoader(param) {
    let { config, src, width, quality } = param;
    if (false) {}
    return config.path + "?url=" + encodeURIComponent(src) + "&w=" + width + "&q=" + (quality || 75) + ( false ? 0 : "");
}
// We use this to determine if the import is the default loader
// or a custom loader defined by the user in next.config.js
defaultLoader.__next_img_default = true;
const _default = defaultLoader; //# sourceMappingURL=image-loader.js.map


/***/ }),

/***/ 11293:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * This module is for next.js server internal usage of path module.
 * It will use native path module for nodejs runtime.
 * It will use path-browserify polyfill for edge runtime.
 */ 
let path;
if (false) {} else {
    path = __webpack_require__(71017);
}
module.exports = path; //# sourceMappingURL=path.js.map


/***/ }),

/***/ 1555:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * For a given page path, this function ensures that there is a leading slash.
 * If there is not a leading slash, one is added, otherwise it is noop.
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ensureLeadingSlash", ({
    enumerable: true,
    get: function() {
        return ensureLeadingSlash;
    }
}));
function ensureLeadingSlash(path) {
    return path.startsWith("/") ? path : "/" + path;
} //# sourceMappingURL=ensure-leading-slash.js.map


/***/ }),

/***/ 41040:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * For a given page path, this function ensures that there is no backslash
 * escaping slashes in the path. Example:
 *  - `foo\/bar\/baz` -> `foo/bar/baz`
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "normalizePathSep", ({
    enumerable: true,
    get: function() {
        return normalizePathSep;
    }
}));
function normalizePathSep(path) {
    return path.replace(/\\/g, "/");
} //# sourceMappingURL=normalize-path-sep.js.map


/***/ }),

/***/ 68277:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addLocale", ({
    enumerable: true,
    get: function() {
        return addLocale;
    }
}));
const _addpathprefix = __webpack_require__(49337);
const _pathhasprefix = __webpack_require__(20234);
function addLocale(path, locale, defaultLocale, ignorePrefix) {
    // If no locale was given or the locale is the default locale, we don't need
    // to prefix the path.
    if (!locale || locale === defaultLocale) return path;
    const lower = path.toLowerCase();
    // If the path is an API path or the path already has the locale prefix, we
    // don't need to prefix the path.
    if (!ignorePrefix) {
        if ((0, _pathhasprefix.pathHasPrefix)(lower, "/api")) return path;
        if ((0, _pathhasprefix.pathHasPrefix)(lower, "/" + locale.toLowerCase())) return path;
    }
    // Add the locale prefix to the path.
    return (0, _addpathprefix.addPathPrefix)(path, "/" + locale);
} //# sourceMappingURL=add-locale.js.map


/***/ }),

/***/ 80225:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addLocale", ({
    enumerable: true,
    get: function() {
        return addLocale;
    }
}));
const _addpathprefix = __webpack_require__(91041);
const _pathhasprefix = __webpack_require__(84329);
function addLocale(path, locale, defaultLocale, ignorePrefix) {
    // If no locale was given or the locale is the default locale, we don't need
    // to prefix the path.
    if (!locale || locale === defaultLocale) return path;
    const lower = path.toLowerCase();
    // If the path is an API path or the path already has the locale prefix, we
    // don't need to prefix the path.
    if (!ignorePrefix) {
        if ((0, _pathhasprefix.pathHasPrefix)(lower, "/api")) return path;
        if ((0, _pathhasprefix.pathHasPrefix)(lower, "/" + locale.toLowerCase())) return path;
    }
    // Add the locale prefix to the path.
    return (0, _addpathprefix.addPathPrefix)(path, "/" + locale);
} //# sourceMappingURL=add-locale.js.map


/***/ }),

/***/ 49337:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addPathPrefix", ({
    enumerable: true,
    get: function() {
        return addPathPrefix;
    }
}));
const _parsepath = __webpack_require__(93415);
function addPathPrefix(path, prefix) {
    if (!path.startsWith("/") || !prefix) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    return "" + prefix + pathname + query + hash;
} //# sourceMappingURL=add-path-prefix.js.map


/***/ }),

/***/ 91041:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addPathPrefix", ({
    enumerable: true,
    get: function() {
        return addPathPrefix;
    }
}));
const _parsepath = __webpack_require__(81693);
function addPathPrefix(path, prefix) {
    if (!path.startsWith("/") || !prefix) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    return "" + prefix + pathname + query + hash;
} //# sourceMappingURL=add-path-prefix.js.map


/***/ }),

/***/ 15366:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addPathSuffix", ({
    enumerable: true,
    get: function() {
        return addPathSuffix;
    }
}));
const _parsepath = __webpack_require__(93415);
function addPathSuffix(path, suffix) {
    if (!path.startsWith("/") || !suffix) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    return "" + pathname + suffix + query + hash;
} //# sourceMappingURL=add-path-suffix.js.map


/***/ }),

/***/ 98166:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addPathSuffix", ({
    enumerable: true,
    get: function() {
        return addPathSuffix;
    }
}));
const _parsepath = __webpack_require__(81693);
function addPathSuffix(path, suffix) {
    if (!path.startsWith("/") || !suffix) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    return "" + pathname + suffix + query + hash;
} //# sourceMappingURL=add-path-suffix.js.map


/***/ }),

/***/ 78168:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
    normalizeAppPath: function() {
        return normalizeAppPath;
    },
    normalizeRscURL: function() {
        return normalizeRscURL;
    }
});
const _ensureleadingslash = __webpack_require__(1555);
const _segment = __webpack_require__(65406);
function normalizeAppPath(route) {
    return (0, _ensureleadingslash.ensureLeadingSlash)(route.split("/").reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if ((0, _segment.isGroupSegment)(segment)) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment[0] === "@") {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === "page" || segment === "route") && index === segments.length - 1) {
            return pathname;
        }
        return pathname + "/" + segment;
    }, ""));
}
function normalizeRscURL(url) {
    return url.replace(/\.rsc($|\?)/, "$1");
} //# sourceMappingURL=app-paths.js.map


/***/ }),

/***/ 61704:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "formatNextPathnameInfo", ({
    enumerable: true,
    get: function() {
        return formatNextPathnameInfo;
    }
}));
const _removetrailingslash = __webpack_require__(4864);
const _addpathprefix = __webpack_require__(49337);
const _addpathsuffix = __webpack_require__(15366);
const _addlocale = __webpack_require__(68277);
function formatNextPathnameInfo(info) {
    let pathname = (0, _addlocale.addLocale)(info.pathname, info.locale, info.buildId ? undefined : info.defaultLocale, info.ignorePrefix);
    if (info.buildId || !info.trailingSlash) {
        pathname = (0, _removetrailingslash.removeTrailingSlash)(pathname);
    }
    if (info.buildId) {
        pathname = (0, _addpathsuffix.addPathSuffix)((0, _addpathprefix.addPathPrefix)(pathname, "/_next/data/" + info.buildId), info.pathname === "/" ? "index.json" : ".json");
    }
    pathname = (0, _addpathprefix.addPathPrefix)(pathname, info.basePath);
    return !info.buildId && info.trailingSlash ? !pathname.endsWith("/") ? (0, _addpathsuffix.addPathSuffix)(pathname, "/") : pathname : (0, _removetrailingslash.removeTrailingSlash)(pathname);
} //# sourceMappingURL=format-next-pathname-info.js.map


/***/ }),

/***/ 93817:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "formatNextPathnameInfo", ({
    enumerable: true,
    get: function() {
        return formatNextPathnameInfo;
    }
}));
const _removetrailingslash = __webpack_require__(37847);
const _addpathprefix = __webpack_require__(91041);
const _addpathsuffix = __webpack_require__(98166);
const _addlocale = __webpack_require__(80225);
function formatNextPathnameInfo(info) {
    let pathname = (0, _addlocale.addLocale)(info.pathname, info.locale, info.buildId ? undefined : info.defaultLocale, info.ignorePrefix);
    if (info.buildId || !info.trailingSlash) {
        pathname = (0, _removetrailingslash.removeTrailingSlash)(pathname);
    }
    if (info.buildId) {
        pathname = (0, _addpathsuffix.addPathSuffix)((0, _addpathprefix.addPathPrefix)(pathname, "/_next/data/" + info.buildId), info.pathname === "/" ? "index.json" : ".json");
    }
    pathname = (0, _addpathprefix.addPathPrefix)(pathname, info.basePath);
    return !info.buildId && info.trailingSlash ? !pathname.endsWith("/") ? (0, _addpathsuffix.addPathSuffix)(pathname, "/") : pathname : (0, _removetrailingslash.removeTrailingSlash)(pathname);
} //# sourceMappingURL=format-next-pathname-info.js.map


/***/ }),

/***/ 95393:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getNextPathnameInfo", ({
    enumerable: true,
    get: function() {
        return getNextPathnameInfo;
    }
}));
const _normalizelocalepath = __webpack_require__(82823);
const _removepathprefix = __webpack_require__(40135);
const _pathhasprefix = __webpack_require__(20234);
function getNextPathnameInfo(pathname, options) {
    var _options_nextConfig;
    const { basePath, i18n, trailingSlash } = (_options_nextConfig = options.nextConfig) != null ? _options_nextConfig : {};
    const info = {
        pathname,
        trailingSlash: pathname !== "/" ? pathname.endsWith("/") : trailingSlash
    };
    if (basePath && (0, _pathhasprefix.pathHasPrefix)(info.pathname, basePath)) {
        info.pathname = (0, _removepathprefix.removePathPrefix)(info.pathname, basePath);
        info.basePath = basePath;
    }
    let pathnameNoDataPrefix = info.pathname;
    if (info.pathname.startsWith("/_next/data/") && info.pathname.endsWith(".json")) {
        const paths = info.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
        const buildId = paths[0];
        info.buildId = buildId;
        pathnameNoDataPrefix = paths[1] !== "index" ? "/" + paths.slice(1).join("/") : "/";
        // update pathname with normalized if enabled although
        // we use normalized to populate locale info still
        if (options.parseData === true) {
            info.pathname = pathnameNoDataPrefix;
        }
    }
    // If provided, use the locale route normalizer to detect the locale instead
    // of the function below.
    if (i18n) {
        let result = options.i18nProvider ? options.i18nProvider.analyze(info.pathname) : (0, _normalizelocalepath.normalizeLocalePath)(info.pathname, i18n.locales);
        info.locale = result.detectedLocale;
        var _result_pathname;
        info.pathname = (_result_pathname = result.pathname) != null ? _result_pathname : info.pathname;
        if (!result.detectedLocale && info.buildId) {
            result = options.i18nProvider ? options.i18nProvider.analyze(pathnameNoDataPrefix) : (0, _normalizelocalepath.normalizeLocalePath)(pathnameNoDataPrefix, i18n.locales);
            if (result.detectedLocale) {
                info.locale = result.detectedLocale;
            }
        }
    }
    return info;
} //# sourceMappingURL=get-next-pathname-info.js.map


/***/ }),

/***/ 6111:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getNextPathnameInfo", ({
    enumerable: true,
    get: function() {
        return getNextPathnameInfo;
    }
}));
const _normalizelocalepath = __webpack_require__(95014);
const _removepathprefix = __webpack_require__(29529);
const _pathhasprefix = __webpack_require__(84329);
function getNextPathnameInfo(pathname, options) {
    var _options_nextConfig;
    const { basePath, i18n, trailingSlash } = (_options_nextConfig = options.nextConfig) != null ? _options_nextConfig : {};
    const info = {
        pathname,
        trailingSlash: pathname !== "/" ? pathname.endsWith("/") : trailingSlash
    };
    if (basePath && (0, _pathhasprefix.pathHasPrefix)(info.pathname, basePath)) {
        info.pathname = (0, _removepathprefix.removePathPrefix)(info.pathname, basePath);
        info.basePath = basePath;
    }
    let pathnameNoDataPrefix = info.pathname;
    if (info.pathname.startsWith("/_next/data/") && info.pathname.endsWith(".json")) {
        const paths = info.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
        const buildId = paths[0];
        info.buildId = buildId;
        pathnameNoDataPrefix = paths[1] !== "index" ? "/" + paths.slice(1).join("/") : "/";
        // update pathname with normalized if enabled although
        // we use normalized to populate locale info still
        if (options.parseData === true) {
            info.pathname = pathnameNoDataPrefix;
        }
    }
    // If provided, use the locale route normalizer to detect the locale instead
    // of the function below.
    if (i18n) {
        let result = options.i18nProvider ? options.i18nProvider.analyze(info.pathname) : (0, _normalizelocalepath.normalizeLocalePath)(info.pathname, i18n.locales);
        info.locale = result.detectedLocale;
        var _result_pathname;
        info.pathname = (_result_pathname = result.pathname) != null ? _result_pathname : info.pathname;
        if (!result.detectedLocale && info.buildId) {
            result = options.i18nProvider ? options.i18nProvider.analyze(pathnameNoDataPrefix) : (0, _normalizelocalepath.normalizeLocalePath)(pathnameNoDataPrefix, i18n.locales);
            if (result.detectedLocale) {
                info.locale = result.detectedLocale;
            }
        }
    }
    return info;
} //# sourceMappingURL=get-next-pathname-info.js.map


/***/ }),

/***/ 93415:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "parsePath", ({
    enumerable: true,
    get: function() {
        return parsePath;
    }
}));
function parsePath(path) {
    const hashIndex = path.indexOf("#");
    const queryIndex = path.indexOf("?");
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : "",
            hash: hashIndex > -1 ? path.slice(hashIndex) : ""
        };
    }
    return {
        pathname: path,
        query: "",
        hash: ""
    };
} //# sourceMappingURL=parse-path.js.map


/***/ }),

/***/ 81693:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "parsePath", ({
    enumerable: true,
    get: function() {
        return parsePath;
    }
}));
function parsePath(path) {
    const hashIndex = path.indexOf("#");
    const queryIndex = path.indexOf("?");
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : "",
            hash: hashIndex > -1 ? path.slice(hashIndex) : ""
        };
    }
    return {
        pathname: path,
        query: "",
        hash: ""
    };
} //# sourceMappingURL=parse-path.js.map


/***/ }),

/***/ 81942:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "parseRelativeUrl", ({
    enumerable: true,
    get: function() {
        return parseRelativeUrl;
    }
}));
const _utils = __webpack_require__(62569);
const _querystring = __webpack_require__(54869);
function parseRelativeUrl(url, base) {
    const globalBase = new URL( true ? "http://n" : 0);
    const resolvedBase = base ? new URL(base, globalBase) : url.startsWith(".") ? new URL( true ? "http://n" : 0) : globalBase;
    const { pathname, searchParams, search, hash, href, origin } = new URL(url, resolvedBase);
    if (origin !== globalBase.origin) {
        throw new Error("invariant: invalid relative URL, router received " + url);
    }
    return {
        pathname,
        query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
        search,
        hash,
        href: href.slice(globalBase.origin.length)
    };
} //# sourceMappingURL=parse-relative-url.js.map


/***/ }),

/***/ 13226:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "parseUrl", ({
    enumerable: true,
    get: function() {
        return parseUrl;
    }
}));
const _querystring = __webpack_require__(54869);
const _parserelativeurl = __webpack_require__(81942);
function parseUrl(url) {
    if (url.startsWith("/")) {
        return (0, _parserelativeurl.parseRelativeUrl)(url);
    }
    const parsedURL = new URL(url);
    return {
        hash: parsedURL.hash,
        hostname: parsedURL.hostname,
        href: parsedURL.href,
        pathname: parsedURL.pathname,
        port: parsedURL.port,
        protocol: parsedURL.protocol,
        query: (0, _querystring.searchParamsToUrlQuery)(parsedURL.searchParams),
        search: parsedURL.search
    };
} //# sourceMappingURL=parse-url.js.map


/***/ }),

/***/ 20234:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "pathHasPrefix", ({
    enumerable: true,
    get: function() {
        return pathHasPrefix;
    }
}));
const _parsepath = __webpack_require__(93415);
function pathHasPrefix(path, prefix) {
    if (typeof path !== "string") {
        return false;
    }
    const { pathname } = (0, _parsepath.parsePath)(path);
    return pathname === prefix || pathname.startsWith(prefix + "/");
} //# sourceMappingURL=path-has-prefix.js.map


/***/ }),

/***/ 84329:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "pathHasPrefix", ({
    enumerable: true,
    get: function() {
        return pathHasPrefix;
    }
}));
const _parsepath = __webpack_require__(81693);
function pathHasPrefix(path, prefix) {
    if (typeof path !== "string") {
        return false;
    }
    const { pathname } = (0, _parsepath.parsePath)(path);
    return pathname === prefix || pathname.startsWith(prefix + "/");
} //# sourceMappingURL=path-has-prefix.js.map


/***/ }),

/***/ 3707:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getPathMatch", ({
    enumerable: true,
    get: function() {
        return getPathMatch;
    }
}));
const _pathtoregexp = __webpack_require__(81792);
function getPathMatch(path, options) {
    const keys = [];
    const regexp = (0, _pathtoregexp.pathToRegexp)(path, keys, {
        delimiter: "/",
        sensitive: typeof (options == null ? void 0 : options.sensitive) === "boolean" ? options.sensitive : false,
        strict: options == null ? void 0 : options.strict
    });
    const matcher = (0, _pathtoregexp.regexpToFunction)((options == null ? void 0 : options.regexModifier) ? new RegExp(options.regexModifier(regexp.source), regexp.flags) : regexp, keys);
    /**
   * A matcher function that will check if a given pathname matches the path
   * given in the builder function. When the path does not match it will return
   * `false` but if it does it will return an object with the matched params
   * merged with the params provided in the second argument.
   */ return (pathname, params)=>{
        // If no pathname is provided it's not a match.
        if (typeof pathname !== "string") return false;
        const match = matcher(pathname);
        // If the path did not match `false` will be returned.
        if (!match) return false;
        /**
     * If unnamed params are not allowed they must be removed from
     * the matched parameters. path-to-regexp uses "string" for named and
     * "number" for unnamed parameters.
     */ if (options == null ? void 0 : options.removeUnnamedParams) {
            for (const key of keys){
                if (typeof key.name === "number") {
                    delete match.params[key.name];
                }
            }
        }
        return {
            ...params,
            ...match.params
        };
    };
} //# sourceMappingURL=path-match.js.map


/***/ }),

/***/ 5257:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
    compileNonPath: function() {
        return compileNonPath;
    },
    matchHas: function() {
        return matchHas;
    },
    prepareDestination: function() {
        return prepareDestination;
    }
});
const _pathtoregexp = __webpack_require__(81792);
const _escaperegexp = __webpack_require__(4080);
const _parseurl = __webpack_require__(13226);
const _interceptionroutes = __webpack_require__(11586);
const _approuterheaders = __webpack_require__(50338);
const _getcookieparser = __webpack_require__(16975);
/**
 * Ensure only a-zA-Z are used for param names for proper interpolating
 * with path-to-regexp
 */ function getSafeParamName(paramName) {
    let newParamName = "";
    for(let i = 0; i < paramName.length; i++){
        const charCode = paramName.charCodeAt(i);
        if (charCode > 64 && charCode < 91 || // A-Z
        charCode > 96 && charCode < 123 // a-z
        ) {
            newParamName += paramName[i];
        }
    }
    return newParamName;
}
function escapeSegment(str, segmentName) {
    return str.replace(new RegExp(":" + (0, _escaperegexp.escapeStringRegexp)(segmentName), "g"), "__ESC_COLON_" + segmentName);
}
function unescapeSegments(str) {
    return str.replace(/__ESC_COLON_/gi, ":");
}
function matchHas(req, query, has, missing) {
    if (has === void 0) has = [];
    if (missing === void 0) missing = [];
    const params = {};
    const hasMatch = (hasItem)=>{
        let value;
        let key = hasItem.key;
        switch(hasItem.type){
            case "header":
                {
                    key = key.toLowerCase();
                    value = req.headers[key];
                    break;
                }
            case "cookie":
                {
                    if ("cookies" in req) {
                        value = req.cookies[hasItem.key];
                    } else {
                        const cookies = (0, _getcookieparser.getCookieParser)(req.headers)();
                        value = cookies[hasItem.key];
                    }
                    break;
                }
            case "query":
                {
                    value = query[key];
                    break;
                }
            case "host":
                {
                    const { host } = (req == null ? void 0 : req.headers) || {};
                    // remove port from host if present
                    const hostname = host == null ? void 0 : host.split(":", 1)[0].toLowerCase();
                    value = hostname;
                    break;
                }
            default:
                {
                    break;
                }
        }
        if (!hasItem.value && value) {
            params[getSafeParamName(key)] = value;
            return true;
        } else if (value) {
            const matcher = new RegExp("^" + hasItem.value + "$");
            const matches = Array.isArray(value) ? value.slice(-1)[0].match(matcher) : value.match(matcher);
            if (matches) {
                if (Array.isArray(matches)) {
                    if (matches.groups) {
                        Object.keys(matches.groups).forEach((groupKey)=>{
                            params[groupKey] = matches.groups[groupKey];
                        });
                    } else if (hasItem.type === "host" && matches[0]) {
                        params.host = matches[0];
                    }
                }
                return true;
            }
        }
        return false;
    };
    const allMatch = has.every((item)=>hasMatch(item)) && !missing.some((item)=>hasMatch(item));
    if (allMatch) {
        return params;
    }
    return false;
}
function compileNonPath(value, params) {
    if (!value.includes(":")) {
        return value;
    }
    for (const key of Object.keys(params)){
        if (value.includes(":" + key)) {
            value = value.replace(new RegExp(":" + key + "\\*", "g"), ":" + key + "--ESCAPED_PARAM_ASTERISKS").replace(new RegExp(":" + key + "\\?", "g"), ":" + key + "--ESCAPED_PARAM_QUESTION").replace(new RegExp(":" + key + "\\+", "g"), ":" + key + "--ESCAPED_PARAM_PLUS").replace(new RegExp(":" + key + "(?!\\w)", "g"), "--ESCAPED_PARAM_COLON" + key);
        }
    }
    value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, "\\$1").replace(/--ESCAPED_PARAM_PLUS/g, "+").replace(/--ESCAPED_PARAM_COLON/g, ":").replace(/--ESCAPED_PARAM_QUESTION/g, "?").replace(/--ESCAPED_PARAM_ASTERISKS/g, "*");
    // the value needs to start with a forward-slash to be compiled
    // correctly
    return (0, _pathtoregexp.compile)("/" + value, {
        validate: false
    })(params).slice(1);
}
function prepareDestination(args) {
    const query = Object.assign({}, args.query);
    delete query.__nextLocale;
    delete query.__nextDefaultLocale;
    delete query.__nextDataReq;
    delete query.__nextInferredLocaleFromDefault;
    delete query[_approuterheaders.NEXT_RSC_UNION_QUERY];
    let escapedDestination = args.destination;
    for (const param of Object.keys({
        ...args.params,
        ...query
    })){
        escapedDestination = escapeSegment(escapedDestination, param);
    }
    const parsedDestination = (0, _parseurl.parseUrl)(escapedDestination);
    const destQuery = parsedDestination.query;
    const destPath = unescapeSegments("" + parsedDestination.pathname + (parsedDestination.hash || ""));
    const destHostname = unescapeSegments(parsedDestination.hostname || "");
    const destPathParamKeys = [];
    const destHostnameParamKeys = [];
    (0, _pathtoregexp.pathToRegexp)(destPath, destPathParamKeys);
    (0, _pathtoregexp.pathToRegexp)(destHostname, destHostnameParamKeys);
    const destParams = [];
    destPathParamKeys.forEach((key)=>destParams.push(key.name));
    destHostnameParamKeys.forEach((key)=>destParams.push(key.name));
    const destPathCompiler = (0, _pathtoregexp.compile)(destPath, // have already validated before we got to this point and validating
    // breaks compiling destinations with named pattern params from the source
    // e.g. /something:hello(.*) -> /another/:hello is broken with validation
    // since compile validation is meant for reversing and not for inserting
    // params from a separate path-regex into another
    {
        validate: false
    });
    const destHostnameCompiler = (0, _pathtoregexp.compile)(destHostname, {
        validate: false
    });
    // update any params in query values
    for (const [key, strOrArray] of Object.entries(destQuery)){
        // the value needs to start with a forward-slash to be compiled
        // correctly
        if (Array.isArray(strOrArray)) {
            destQuery[key] = strOrArray.map((value)=>compileNonPath(unescapeSegments(value), args.params));
        } else if (typeof strOrArray === "string") {
            destQuery[key] = compileNonPath(unescapeSegments(strOrArray), args.params);
        }
    }
    // add path params to query if it's not a redirect and not
    // already defined in destination query or path
    let paramKeys = Object.keys(args.params).filter((name)=>name !== "nextInternalLocale");
    if (args.appendParamsToQuery && !paramKeys.some((key)=>destParams.includes(key))) {
        for (const key of paramKeys){
            if (!(key in destQuery)) {
                destQuery[key] = args.params[key];
            }
        }
    }
    let newUrl;
    // The compiler also that the interception route marker is an unnamed param, hence '0',
    // so we need to add it to the params object.
    if ((0, _interceptionroutes.isInterceptionRouteAppPath)(destPath)) {
        for (const segment of destPath.split("/")){
            const marker = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
            if (marker) {
                args.params["0"] = marker;
                break;
            }
        }
    }
    try {
        newUrl = destPathCompiler(args.params);
        const [pathname, hash] = newUrl.split("#", 2);
        parsedDestination.hostname = destHostnameCompiler(args.params);
        parsedDestination.pathname = pathname;
        parsedDestination.hash = "" + (hash ? "#" : "") + (hash || "");
        delete parsedDestination.search;
    } catch (err) {
        if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
            throw new Error("To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match");
        }
        throw err;
    }
    // Query merge order lowest priority to highest
    // 1. initial URL query values
    // 2. path segment values
    // 3. destination specified query values
    parsedDestination.query = {
        ...query,
        ...parsedDestination.query
    };
    return {
        newUrl,
        destQuery,
        parsedDestination
    };
} //# sourceMappingURL=prepare-destination.js.map


/***/ }),

/***/ 54869:
/***/ ((__unused_webpack_module, exports) => {

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
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    searchParams.forEach((value, key)=>{
        if (typeof query[key] === "undefined") {
            query[key] = value;
        } else if (Array.isArray(query[key])) {
            query[key].push(value);
        } else {
            query[key] = [
                query[key],
                value
            ];
        }
    });
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === "string" || typeof param === "number" && !isNaN(param) || typeof param === "boolean") {
        return String(param);
    } else {
        return "";
    }
}
function urlQueryToSearchParams(urlQuery) {
    const result = new URLSearchParams();
    Object.entries(urlQuery).forEach((param)=>{
        let [key, value] = param;
        if (Array.isArray(value)) {
            value.forEach((item)=>result.append(key, stringifyUrlQueryParam(item)));
        } else {
            result.set(key, stringifyUrlQueryParam(value));
        }
    });
    return result;
}
function assign(target) {
    for(var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        searchParamsList[_key - 1] = arguments[_key];
    }
    searchParamsList.forEach((searchParams)=>{
        Array.from(searchParams.keys()).forEach((key)=>target.delete(key));
        searchParams.forEach((value, key)=>target.append(key, value));
    });
    return target;
} //# sourceMappingURL=querystring.js.map


/***/ }),

/***/ 40135:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "removePathPrefix", ({
    enumerable: true,
    get: function() {
        return removePathPrefix;
    }
}));
const _pathhasprefix = __webpack_require__(20234);
function removePathPrefix(path, prefix) {
    // If the path doesn't start with the prefix we can return it as is. This
    // protects us from situations where the prefix is a substring of the path
    // prefix such as:
    //
    // For prefix: /blog
    //
    //   /blog -> true
    //   /blog/ -> true
    //   /blog/1 -> true
    //   /blogging -> false
    //   /blogging/ -> false
    //   /blogging/1 -> false
    if (!(0, _pathhasprefix.pathHasPrefix)(path, prefix)) {
        return path;
    }
    // Remove the prefix from the path via slicing.
    const withoutPrefix = path.slice(prefix.length);
    // If the path without the prefix starts with a `/` we can return it as is.
    if (withoutPrefix.startsWith("/")) {
        return withoutPrefix;
    }
    // If the path without the prefix doesn't start with a `/` we need to add it
    // back to the path to make sure it's a valid path.
    return "/" + withoutPrefix;
} //# sourceMappingURL=remove-path-prefix.js.map


/***/ }),

/***/ 29529:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "removePathPrefix", ({
    enumerable: true,
    get: function() {
        return removePathPrefix;
    }
}));
const _pathhasprefix = __webpack_require__(84329);
function removePathPrefix(path, prefix) {
    // If the path doesn't start with the prefix we can return it as is. This
    // protects us from situations where the prefix is a substring of the path
    // prefix such as:
    //
    // For prefix: /blog
    //
    //   /blog -> true
    //   /blog/ -> true
    //   /blog/1 -> true
    //   /blogging -> false
    //   /blogging/ -> false
    //   /blogging/1 -> false
    if (!(0, _pathhasprefix.pathHasPrefix)(path, prefix)) {
        return path;
    }
    // Remove the prefix from the path via slicing.
    const withoutPrefix = path.slice(prefix.length);
    // If the path without the prefix starts with a `/` we can return it as is.
    if (withoutPrefix.startsWith("/")) {
        return withoutPrefix;
    }
    // If the path without the prefix doesn't start with a `/` we need to add it
    // back to the path to make sure it's a valid path.
    return "/" + withoutPrefix;
} //# sourceMappingURL=remove-path-prefix.js.map


/***/ }),

/***/ 4864:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "removeTrailingSlash", ({
    enumerable: true,
    get: function() {
        return removeTrailingSlash;
    }
}));
function removeTrailingSlash(route) {
    return route.replace(/\/$/, "") || "/";
} //# sourceMappingURL=remove-trailing-slash.js.map


/***/ }),

/***/ 37847:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "removeTrailingSlash", ({
    enumerable: true,
    get: function() {
        return removeTrailingSlash;
    }
}));
function removeTrailingSlash(route) {
    return route.replace(/\/$/, "") || "/";
} //# sourceMappingURL=remove-trailing-slash.js.map


/***/ }),

/***/ 23525:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getRouteMatcher", ({
    enumerable: true,
    get: function() {
        return getRouteMatcher;
    }
}));
const _utils = __webpack_require__(62569);
function getRouteMatcher(param) {
    let { re, groups } = param;
    return (pathname)=>{
        const routeMatch = re.exec(pathname);
        if (!routeMatch) {
            return false;
        }
        const decode = (param)=>{
            try {
                return decodeURIComponent(param);
            } catch (_) {
                throw new _utils.DecodeError("failed to decode param");
            }
        };
        const params = {};
        Object.keys(groups).forEach((slugName)=>{
            const g = groups[slugName];
            const m = routeMatch[g.pos];
            if (m !== undefined) {
                params[slugName] = ~m.indexOf("/") ? m.split("/").map((entry)=>decode(entry)) : g.repeat ? [
                    decode(m)
                ] : decode(m);
            }
        });
        return params;
    };
} //# sourceMappingURL=route-matcher.js.map


/***/ }),

/***/ 55679:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
    getNamedMiddlewareRegex: function() {
        return getNamedMiddlewareRegex;
    },
    getNamedRouteRegex: function() {
        return getNamedRouteRegex;
    },
    getRouteRegex: function() {
        return getRouteRegex;
    }
});
const _interceptionroutes = __webpack_require__(11586);
const _escaperegexp = __webpack_require__(4080);
const _removetrailingslash = __webpack_require__(37847);
const NEXT_QUERY_PARAM_PREFIX = "nxtP";
const NEXT_INTERCEPTION_MARKER_PREFIX = "nxtI";
/**
 * Parses a given parameter from a route to a data structure that can be used
 * to generate the parametrized route. Examples:
 *   - `[...slug]` -> `{ key: 'slug', repeat: true, optional: true }`
 *   - `...slug` -> `{ key: 'slug', repeat: true, optional: false }`
 *   - `[foo]` -> `{ key: 'foo', repeat: false, optional: true }`
 *   - `bar` -> `{ key: 'bar', repeat: false, optional: false }`
 */ function parseParameter(param) {
    const optional = param.startsWith("[") && param.endsWith("]");
    if (optional) {
        param = param.slice(1, -1);
    }
    const repeat = param.startsWith("...");
    if (repeat) {
        param = param.slice(3);
    }
    return {
        key: param,
        repeat,
        optional
    };
}
function getParametrizedRoute(route) {
    const segments = (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split("/");
    const groups = {};
    let groupIndex = 1;
    return {
        parameterizedRoute: segments.map((segment)=>{
            const markerMatch = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
            const paramMatches = segment.match(/\[((?:\[.*\])|.+)\]/) // Check for parameters
            ;
            if (markerMatch && paramMatches) {
                const { key, optional, repeat } = parseParameter(paramMatches[1]);
                groups[key] = {
                    pos: groupIndex++,
                    repeat,
                    optional
                };
                return "/" + (0, _escaperegexp.escapeStringRegexp)(markerMatch) + "([^/]+?)";
            } else if (paramMatches) {
                const { key, repeat, optional } = parseParameter(paramMatches[1]);
                groups[key] = {
                    pos: groupIndex++,
                    repeat,
                    optional
                };
                return repeat ? optional ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
            } else {
                return "/" + (0, _escaperegexp.escapeStringRegexp)(segment);
            }
        }).join(""),
        groups
    };
}
function getRouteRegex(normalizedRoute) {
    const { parameterizedRoute, groups } = getParametrizedRoute(normalizedRoute);
    return {
        re: new RegExp("^" + parameterizedRoute + "(?:/)?$"),
        groups: groups
    };
}
/**
 * Builds a function to generate a minimal routeKey using only a-z and minimal
 * number of characters.
 */ function buildGetSafeRouteKey() {
    let i = 0;
    return ()=>{
        let routeKey = "";
        let j = ++i;
        while(j > 0){
            routeKey += String.fromCharCode(97 + (j - 1) % 26);
            j = Math.floor((j - 1) / 26);
        }
        return routeKey;
    };
}
function getSafeKeyFromSegment(param) {
    let { interceptionMarker, getSafeRouteKey, segment, routeKeys, keyPrefix } = param;
    const { key, optional, repeat } = parseParameter(segment);
    // replace any non-word characters since they can break
    // the named regex
    let cleanedKey = key.replace(/\W/g, "");
    if (keyPrefix) {
        cleanedKey = "" + keyPrefix + cleanedKey;
    }
    let invalidKey = false;
    // check if the key is still invalid and fallback to using a known
    // safe key
    if (cleanedKey.length === 0 || cleanedKey.length > 30) {
        invalidKey = true;
    }
    if (!isNaN(parseInt(cleanedKey.slice(0, 1)))) {
        invalidKey = true;
    }
    if (invalidKey) {
        cleanedKey = getSafeRouteKey();
    }
    if (keyPrefix) {
        routeKeys[cleanedKey] = "" + keyPrefix + key;
    } else {
        routeKeys[cleanedKey] = key;
    }
    // if the segment has an interception marker, make sure that's part of the regex pattern
    // this is to ensure that the route with the interception marker doesn't incorrectly match
    // the non-intercepted route (ie /app/(.)[username] should not match /app/[username])
    const interceptionPrefix = interceptionMarker ? (0, _escaperegexp.escapeStringRegexp)(interceptionMarker) : "";
    return repeat ? optional ? "(?:/" + interceptionPrefix + "(?<" + cleanedKey + ">.+?))?" : "/" + interceptionPrefix + "(?<" + cleanedKey + ">.+?)" : "/" + interceptionPrefix + "(?<" + cleanedKey + ">[^/]+?)";
}
function getNamedParametrizedRoute(route, prefixRouteKeys) {
    const segments = (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split("/");
    const getSafeRouteKey = buildGetSafeRouteKey();
    const routeKeys = {};
    return {
        namedParameterizedRoute: segments.map((segment)=>{
            const hasInterceptionMarker = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>segment.startsWith(m));
            const paramMatches = segment.match(/\[((?:\[.*\])|.+)\]/) // Check for parameters
            ;
            if (hasInterceptionMarker && paramMatches) {
                const [usedMarker] = segment.split(paramMatches[0]);
                return getSafeKeyFromSegment({
                    getSafeRouteKey,
                    interceptionMarker: usedMarker,
                    segment: paramMatches[1],
                    routeKeys,
                    keyPrefix: prefixRouteKeys ? NEXT_INTERCEPTION_MARKER_PREFIX : undefined
                });
            } else if (paramMatches) {
                return getSafeKeyFromSegment({
                    getSafeRouteKey,
                    segment: paramMatches[1],
                    routeKeys,
                    keyPrefix: prefixRouteKeys ? NEXT_QUERY_PARAM_PREFIX : undefined
                });
            } else {
                return "/" + (0, _escaperegexp.escapeStringRegexp)(segment);
            }
        }).join(""),
        routeKeys
    };
}
function getNamedRouteRegex(normalizedRoute, prefixRouteKey) {
    const result = getNamedParametrizedRoute(normalizedRoute, prefixRouteKey);
    return {
        ...getRouteRegex(normalizedRoute),
        namedRegex: "^" + result.namedParameterizedRoute + "(?:/)?$",
        routeKeys: result.routeKeys
    };
}
function getNamedMiddlewareRegex(normalizedRoute, options) {
    const { parameterizedRoute } = getParametrizedRoute(normalizedRoute);
    const { catchAll = true } = options;
    if (parameterizedRoute === "/") {
        let catchAllRegex = catchAll ? ".*" : "";
        return {
            namedRegex: "^/" + catchAllRegex + "$"
        };
    }
    const { namedParameterizedRoute } = getNamedParametrizedRoute(normalizedRoute, false);
    let catchAllGroupedRegex = catchAll ? "(?:(/.*)?)" : "";
    return {
        namedRegex: "^" + namedParameterizedRoute + catchAllGroupedRegex + "$"
    };
} //# sourceMappingURL=route-regex.js.map


/***/ }),

/***/ 65406:
/***/ ((__unused_webpack_module, exports) => {

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
    DEFAULT_SEGMENT_KEY: function() {
        return DEFAULT_SEGMENT_KEY;
    },
    PAGE_SEGMENT_KEY: function() {
        return PAGE_SEGMENT_KEY;
    },
    isGroupSegment: function() {
        return isGroupSegment;
    }
});
function isGroupSegment(segment) {
    // Use array[0] for performant purpose
    return segment[0] === "(" && segment.endsWith(")");
}
const PAGE_SEGMENT_KEY = "__PAGE__";
const DEFAULT_SEGMENT_KEY = "__DEFAULT__"; //# sourceMappingURL=segment.js.map


/***/ }),

/***/ 62569:
/***/ ((__unused_webpack_module, exports) => {

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
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    "CLS",
    "FCP",
    "FID",
    "INP",
    "LCP",
    "TTFB"
];
function execOnce(fn) {
    let used = false;
    let result;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return protocol + "//" + hostname + (port ? ":" + port : "");
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === "string" ? Component : Component.displayName || Component.name || "Unknown";
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split("?");
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, "/").replace(/\/\/+/g, "/") + (urlParts[1] ? "?" + urlParts.slice(1).join("?") : "");
}
async function loadGetInitialProps(App, ctx) {
    if (false) { var _App_prototype; }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
        throw new Error(message);
    }
    if (false) {}
    return props;
}
const SP = typeof performance !== "undefined";
const ST = SP && [
    "mark",
    "measure",
    "getEntriesByName"
].every((method)=>typeof performance[method] === "function");
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = "ENOENT";
        this.name = "PageNotFoundError";
        this.message = "Cannot find module for page: " + page;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = "Failed to load static file for page: " + page + " " + message;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = "ENOENT";
        this.message = "Cannot find the middleware module";
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map


/***/ }),

/***/ 96501:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "warnOnce", ({
    enumerable: true,
    get: function() {
        return warnOnce;
    }
}));
let warnOnce = (_)=>{};
if (false) {} //# sourceMappingURL=warn-once.js.map


/***/ })

};
;