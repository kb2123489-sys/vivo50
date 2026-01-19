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
/* harmony import */ var C_Users_94362_Downloads_vme_src_app_layout_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48158);
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
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 48158)), "C:\\Users\\94362\\Downloads\\vme\\src\\app\\layout.tsx"],
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
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_4__/* .RouteKind */ .x.APP_PAGE,
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

/***/ 35270:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 54452));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 92481, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 76999));
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

/***/ 73168:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 72298));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 62202));


/***/ }),

/***/ 20504:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(39618);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BroadcastChannel = BroadcastChannel;
exports.apiBaseUrl = apiBaseUrl;
exports.fetchData = fetchData;
exports.now = now;
var _regenerator = _interopRequireDefault(__webpack_require__(16477));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(61092));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(50231));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function fetchData(_x, _x2, _x3) {
  return _fetchData.apply(this, arguments);
}
function _fetchData() {
  _fetchData = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee(path, __NEXTAUTH, logger) {
    var _ref,
      ctx,
      _ref$req,
      req,
      url,
      _req$headers,
      options,
      res,
      data,
      _args = arguments;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _ref = _args.length > 3 && _args[3] !== undefined ? _args[3] : {}, ctx = _ref.ctx, _ref$req = _ref.req, req = _ref$req === void 0 ? ctx === null || ctx === void 0 ? void 0 : ctx.req : _ref$req;
          url = "".concat(apiBaseUrl(__NEXTAUTH), "/").concat(path);
          _context.prev = 2;
          options = {
            headers: _objectSpread({
              "Content-Type": "application/json"
            }, req !== null && req !== void 0 && (_req$headers = req.headers) !== null && _req$headers !== void 0 && _req$headers.cookie ? {
              cookie: req.headers.cookie
            } : {})
          };
          if (req !== null && req !== void 0 && req.body) {
            options.body = JSON.stringify(req.body);
            options.method = "POST";
          }
          _context.next = 7;
          return fetch(url, options);
        case 7:
          res = _context.sent;
          _context.next = 10;
          return res.json();
        case 10:
          data = _context.sent;
          if (res.ok) {
            _context.next = 13;
            break;
          }
          throw data;
        case 13:
          return _context.abrupt("return", Object.keys(data).length > 0 ? data : null);
        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](2);
          logger.error("CLIENT_FETCH_ERROR", {
            error: _context.t0,
            url: url
          });
          return _context.abrupt("return", null);
        case 20:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 16]]);
  }));
  return _fetchData.apply(this, arguments);
}
function apiBaseUrl(__NEXTAUTH) {
  if (typeof window === "undefined") {
    return "".concat(__NEXTAUTH.baseUrlServer).concat(__NEXTAUTH.basePathServer);
  }
  return __NEXTAUTH.basePath;
}
function now() {
  return Math.floor(Date.now() / 1000);
}
function BroadcastChannel() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "nextauth.message";
  return {
    receive: function receive(onReceive) {
      var handler = function handler(event) {
        var _event$newValue;
        if (event.key !== name) return;
        var message = JSON.parse((_event$newValue = event.newValue) !== null && _event$newValue !== void 0 ? _event$newValue : "{}");
        if ((message === null || message === void 0 ? void 0 : message.event) !== "session" || !(message !== null && message !== void 0 && message.data)) return;
        onReceive(message);
      };
      window.addEventListener("storage", handler);
      return function () {
        return window.removeEventListener("storage", handler);
      };
    },
    post: function post(message) {
      if (typeof window === "undefined") return;
      try {
        localStorage.setItem(name, JSON.stringify(_objectSpread(_objectSpread({}, message), {}, {
          timestamp: now()
        })));
      } catch (_unused) {}
    }
  };
}

/***/ }),

/***/ 70560:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(39618);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.UnsupportedStrategy = exports.UnknownError = exports.OAuthCallbackError = exports.MissingSecret = exports.MissingAuthorize = exports.MissingAdapterMethods = exports.MissingAdapter = exports.MissingAPIRoute = exports.InvalidCallbackUrl = exports.AccountNotLinkedError = void 0;
exports.adapterErrorHandler = adapterErrorHandler;
exports.capitalize = capitalize;
exports.eventsErrorHandler = eventsErrorHandler;
exports.upperSnake = upperSnake;
var _regenerator = _interopRequireDefault(__webpack_require__(16477));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(50231));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(61092));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(68326));
var _createClass2 = _interopRequireDefault(__webpack_require__(42706));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(83041));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(89899));
var _inherits2 = _interopRequireDefault(__webpack_require__(59356));
var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(71799));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2.default)(o), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var UnknownError = exports.UnknownError = function (_Error) {
  function UnknownError(error) {
    var _message;
    var _this;
    (0, _classCallCheck2.default)(this, UnknownError);
    _this = _callSuper(this, UnknownError, [(_message = error === null || error === void 0 ? void 0 : error.message) !== null && _message !== void 0 ? _message : error]);
    _this.name = "UnknownError";
    _this.code = error.code;
    if (error instanceof Error) {
      _this.stack = error.stack;
    }
    return _this;
  }
  (0, _inherits2.default)(UnknownError, _Error);
  return (0, _createClass2.default)(UnknownError, [{
    key: "toJSON",
    value: function toJSON() {
      return {
        name: this.name,
        message: this.message,
        stack: this.stack
      };
    }
  }]);
}((0, _wrapNativeSuper2.default)(Error));
var OAuthCallbackError = exports.OAuthCallbackError = function (_UnknownError) {
  function OAuthCallbackError() {
    var _this2;
    (0, _classCallCheck2.default)(this, OAuthCallbackError);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this2 = _callSuper(this, OAuthCallbackError, [].concat(args));
    (0, _defineProperty2.default)(_this2, "name", "OAuthCallbackError");
    return _this2;
  }
  (0, _inherits2.default)(OAuthCallbackError, _UnknownError);
  return (0, _createClass2.default)(OAuthCallbackError);
}(UnknownError);
var AccountNotLinkedError = exports.AccountNotLinkedError = function (_UnknownError2) {
  function AccountNotLinkedError() {
    var _this3;
    (0, _classCallCheck2.default)(this, AccountNotLinkedError);
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    _this3 = _callSuper(this, AccountNotLinkedError, [].concat(args));
    (0, _defineProperty2.default)(_this3, "name", "AccountNotLinkedError");
    return _this3;
  }
  (0, _inherits2.default)(AccountNotLinkedError, _UnknownError2);
  return (0, _createClass2.default)(AccountNotLinkedError);
}(UnknownError);
var MissingAPIRoute = exports.MissingAPIRoute = function (_UnknownError3) {
  function MissingAPIRoute() {
    var _this4;
    (0, _classCallCheck2.default)(this, MissingAPIRoute);
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    _this4 = _callSuper(this, MissingAPIRoute, [].concat(args));
    (0, _defineProperty2.default)(_this4, "name", "MissingAPIRouteError");
    (0, _defineProperty2.default)(_this4, "code", "MISSING_NEXTAUTH_API_ROUTE_ERROR");
    return _this4;
  }
  (0, _inherits2.default)(MissingAPIRoute, _UnknownError3);
  return (0, _createClass2.default)(MissingAPIRoute);
}(UnknownError);
var MissingSecret = exports.MissingSecret = function (_UnknownError4) {
  function MissingSecret() {
    var _this5;
    (0, _classCallCheck2.default)(this, MissingSecret);
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    _this5 = _callSuper(this, MissingSecret, [].concat(args));
    (0, _defineProperty2.default)(_this5, "name", "MissingSecretError");
    (0, _defineProperty2.default)(_this5, "code", "NO_SECRET");
    return _this5;
  }
  (0, _inherits2.default)(MissingSecret, _UnknownError4);
  return (0, _createClass2.default)(MissingSecret);
}(UnknownError);
var MissingAuthorize = exports.MissingAuthorize = function (_UnknownError5) {
  function MissingAuthorize() {
    var _this6;
    (0, _classCallCheck2.default)(this, MissingAuthorize);
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }
    _this6 = _callSuper(this, MissingAuthorize, [].concat(args));
    (0, _defineProperty2.default)(_this6, "name", "MissingAuthorizeError");
    (0, _defineProperty2.default)(_this6, "code", "CALLBACK_CREDENTIALS_HANDLER_ERROR");
    return _this6;
  }
  (0, _inherits2.default)(MissingAuthorize, _UnknownError5);
  return (0, _createClass2.default)(MissingAuthorize);
}(UnknownError);
var MissingAdapter = exports.MissingAdapter = function (_UnknownError6) {
  function MissingAdapter() {
    var _this7;
    (0, _classCallCheck2.default)(this, MissingAdapter);
    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }
    _this7 = _callSuper(this, MissingAdapter, [].concat(args));
    (0, _defineProperty2.default)(_this7, "name", "MissingAdapterError");
    (0, _defineProperty2.default)(_this7, "code", "EMAIL_REQUIRES_ADAPTER_ERROR");
    return _this7;
  }
  (0, _inherits2.default)(MissingAdapter, _UnknownError6);
  return (0, _createClass2.default)(MissingAdapter);
}(UnknownError);
var MissingAdapterMethods = exports.MissingAdapterMethods = function (_UnknownError7) {
  function MissingAdapterMethods() {
    var _this8;
    (0, _classCallCheck2.default)(this, MissingAdapterMethods);
    for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      args[_key7] = arguments[_key7];
    }
    _this8 = _callSuper(this, MissingAdapterMethods, [].concat(args));
    (0, _defineProperty2.default)(_this8, "name", "MissingAdapterMethodsError");
    (0, _defineProperty2.default)(_this8, "code", "MISSING_ADAPTER_METHODS_ERROR");
    return _this8;
  }
  (0, _inherits2.default)(MissingAdapterMethods, _UnknownError7);
  return (0, _createClass2.default)(MissingAdapterMethods);
}(UnknownError);
var UnsupportedStrategy = exports.UnsupportedStrategy = function (_UnknownError8) {
  function UnsupportedStrategy() {
    var _this9;
    (0, _classCallCheck2.default)(this, UnsupportedStrategy);
    for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      args[_key8] = arguments[_key8];
    }
    _this9 = _callSuper(this, UnsupportedStrategy, [].concat(args));
    (0, _defineProperty2.default)(_this9, "name", "UnsupportedStrategyError");
    (0, _defineProperty2.default)(_this9, "code", "CALLBACK_CREDENTIALS_JWT_ERROR");
    return _this9;
  }
  (0, _inherits2.default)(UnsupportedStrategy, _UnknownError8);
  return (0, _createClass2.default)(UnsupportedStrategy);
}(UnknownError);
var InvalidCallbackUrl = exports.InvalidCallbackUrl = function (_UnknownError9) {
  function InvalidCallbackUrl() {
    var _this10;
    (0, _classCallCheck2.default)(this, InvalidCallbackUrl);
    for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      args[_key9] = arguments[_key9];
    }
    _this10 = _callSuper(this, InvalidCallbackUrl, [].concat(args));
    (0, _defineProperty2.default)(_this10, "name", "InvalidCallbackUrl");
    (0, _defineProperty2.default)(_this10, "code", "INVALID_CALLBACK_URL_ERROR");
    return _this10;
  }
  (0, _inherits2.default)(InvalidCallbackUrl, _UnknownError9);
  return (0, _createClass2.default)(InvalidCallbackUrl);
}(UnknownError);
function upperSnake(s) {
  return s.replace(/([A-Z])/g, "_$1").toUpperCase();
}
function capitalize(s) {
  return "".concat(s[0].toUpperCase()).concat(s.slice(1));
}
function eventsErrorHandler(methods, logger) {
  return Object.keys(methods).reduce(function (acc, name) {
    acc[name] = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee() {
      var method,
        _args = arguments;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            method = methods[name];
            _context.next = 4;
            return method.apply(void 0, _args);
          case 4:
            return _context.abrupt("return", _context.sent);
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            logger.error("".concat(upperSnake(name), "_EVENT_ERROR"), _context.t0);
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 7]]);
    }));
    return acc;
  }, {});
}
function adapterErrorHandler(adapter, logger) {
  if (!adapter) return;
  return Object.keys(adapter).reduce(function (acc, name) {
    acc[name] = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee2() {
      var _len10,
        args,
        _key10,
        method,
        e,
        _args2 = arguments;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            for (_len10 = _args2.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
              args[_key10] = _args2[_key10];
            }
            logger.debug("adapter_".concat(name), {
              args: args
            });
            method = adapter[name];
            _context2.next = 6;
            return method.apply(void 0, args);
          case 6:
            return _context2.abrupt("return", _context2.sent);
          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            logger.error("adapter_error_".concat(name), _context2.t0);
            e = new UnknownError(_context2.t0);
            e.name = "".concat(capitalize(name), "Error");
            throw e;
          case 15:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 9]]);
    }));
    return acc;
  }, {});
}

/***/ }),

/***/ 77109:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(39618);
var _typeof = __webpack_require__(12054);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  SessionContext: true,
  useSession: true,
  getSession: true,
  getCsrfToken: true,
  getProviders: true,
  signIn: true,
  signOut: true,
  SessionProvider: true
};
exports.SessionContext = void 0;
exports.SessionProvider = SessionProvider;
exports.getCsrfToken = getCsrfToken;
exports.getProviders = getProviders;
exports.getSession = getSession;
exports.signIn = signIn;
exports.signOut = signOut;
exports.useSession = useSession;
var _regenerator = _interopRequireDefault(__webpack_require__(16477));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(61092));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(50231));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(35895));
var React = _interopRequireWildcard(__webpack_require__(17577));
var _logger2 = _interopRequireWildcard(__webpack_require__(22427));
var _parseUrl = _interopRequireDefault(__webpack_require__(62064));
var _utils = __webpack_require__(20504);
var _jsxRuntime = __webpack_require__(10326);
var _types = __webpack_require__(82384);
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types[key];
    }
  });
});
var _process$env$NEXTAUTH, _ref, _process$env$NEXTAUTH2, _process$env$NEXTAUTH3, _React$createContext;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var __NEXTAUTH = {
  baseUrl: (0, _parseUrl.default)((_process$env$NEXTAUTH = process.env.NEXTAUTH_URL) !== null && _process$env$NEXTAUTH !== void 0 ? _process$env$NEXTAUTH : process.env.VERCEL_URL).origin,
  basePath: (0, _parseUrl.default)(process.env.NEXTAUTH_URL).path,
  baseUrlServer: (0, _parseUrl.default)((_ref = (_process$env$NEXTAUTH2 = process.env.NEXTAUTH_URL_INTERNAL) !== null && _process$env$NEXTAUTH2 !== void 0 ? _process$env$NEXTAUTH2 : process.env.NEXTAUTH_URL) !== null && _ref !== void 0 ? _ref : process.env.VERCEL_URL).origin,
  basePathServer: (0, _parseUrl.default)((_process$env$NEXTAUTH3 = process.env.NEXTAUTH_URL_INTERNAL) !== null && _process$env$NEXTAUTH3 !== void 0 ? _process$env$NEXTAUTH3 : process.env.NEXTAUTH_URL).path,
  _lastSync: 0,
  _session: undefined,
  _getSession: function _getSession() {}
};
var broadcast = (0, _utils.BroadcastChannel)();
var logger = (0, _logger2.proxyLogger)(_logger2.default, __NEXTAUTH.basePath);
function useOnline() {
  var _React$useState = React.useState(typeof navigator !== "undefined" ? navigator.onLine : false),
    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
    isOnline = _React$useState2[0],
    setIsOnline = _React$useState2[1];
  var setOnline = function setOnline() {
    return setIsOnline(true);
  };
  var setOffline = function setOffline() {
    return setIsOnline(false);
  };
  React.useEffect(function () {
    window.addEventListener("online", setOnline);
    window.addEventListener("offline", setOffline);
    return function () {
      window.removeEventListener("online", setOnline);
      window.removeEventListener("offline", setOffline);
    };
  }, []);
  return isOnline;
}
var SessionContext = exports.SessionContext = (_React$createContext = React.createContext) === null || _React$createContext === void 0 ? void 0 : _React$createContext.call(React, undefined);
function useSession(options) {
  if (!SessionContext) {
    throw new Error("React Context is unavailable in Server Components");
  }
  var value = React.useContext(SessionContext);
  if (!value && "production" !== "production") {}
  var _ref2 = options !== null && options !== void 0 ? options : {},
    required = _ref2.required,
    onUnauthenticated = _ref2.onUnauthenticated;
  var requiredAndNotLoading = required && value.status === "unauthenticated";
  React.useEffect(function () {
    if (requiredAndNotLoading) {
      var url = "/api/auth/signin?".concat(new URLSearchParams({
        error: "SessionRequired",
        callbackUrl: window.location.href
      }));
      if (onUnauthenticated) onUnauthenticated();else window.location.href = url;
    }
  }, [requiredAndNotLoading, onUnauthenticated]);
  if (requiredAndNotLoading) {
    return {
      data: value.data,
      update: value.update,
      status: "loading"
    };
  }
  return value;
}
function getSession(_x) {
  return _getSession2.apply(this, arguments);
}
function _getSession2() {
  _getSession2 = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee3(params) {
    var _params$broadcast;
    var session;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _utils.fetchData)("session", __NEXTAUTH, logger, params);
        case 2:
          session = _context3.sent;
          if ((_params$broadcast = params === null || params === void 0 ? void 0 : params.broadcast) !== null && _params$broadcast !== void 0 ? _params$broadcast : true) {
            broadcast.post({
              event: "session",
              data: {
                trigger: "getSession"
              }
            });
          }
          return _context3.abrupt("return", session);
        case 5:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _getSession2.apply(this, arguments);
}
function getCsrfToken(_x2) {
  return _getCsrfToken.apply(this, arguments);
}
function _getCsrfToken() {
  _getCsrfToken = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee4(params) {
    var response;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _utils.fetchData)("csrf", __NEXTAUTH, logger, params);
        case 2:
          response = _context4.sent;
          return _context4.abrupt("return", response === null || response === void 0 ? void 0 : response.csrfToken);
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _getCsrfToken.apply(this, arguments);
}
function getProviders() {
  return _getProviders.apply(this, arguments);
}
function _getProviders() {
  _getProviders = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee5() {
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _utils.fetchData)("providers", __NEXTAUTH, logger);
        case 2:
          return _context5.abrupt("return", _context5.sent);
        case 3:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _getProviders.apply(this, arguments);
}
function signIn(_x3, _x4, _x5) {
  return _signIn.apply(this, arguments);
}
function _signIn() {
  _signIn = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee6(provider, options, authorizationParams) {
    var _ref5, _ref5$callbackUrl, callbackUrl, _ref5$redirect, redirect, baseUrl, providers, isCredentials, isEmail, isSupportingReturn, signInUrl, _signInUrl, res, data, _data$url, url, error;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _ref5 = options !== null && options !== void 0 ? options : {}, _ref5$callbackUrl = _ref5.callbackUrl, callbackUrl = _ref5$callbackUrl === void 0 ? window.location.href : _ref5$callbackUrl, _ref5$redirect = _ref5.redirect, redirect = _ref5$redirect === void 0 ? true : _ref5$redirect;
          baseUrl = (0, _utils.apiBaseUrl)(__NEXTAUTH);
          _context6.next = 4;
          return getProviders();
        case 4:
          providers = _context6.sent;
          if (providers) {
            _context6.next = 8;
            break;
          }
          window.location.href = "".concat(baseUrl, "/error");
          return _context6.abrupt("return");
        case 8:
          if (!(!provider || !(provider in providers))) {
            _context6.next = 11;
            break;
          }
          window.location.href = "".concat(baseUrl, "/signin?").concat(new URLSearchParams({
            callbackUrl: callbackUrl
          }));
          return _context6.abrupt("return");
        case 11:
          isCredentials = providers[provider].type === "credentials";
          isEmail = providers[provider].type === "email";
          isSupportingReturn = isCredentials || isEmail;
          signInUrl = "".concat(baseUrl, "/").concat(isCredentials ? "callback" : "signin", "/").concat(provider);
          _signInUrl = "".concat(signInUrl).concat(authorizationParams ? "?".concat(new URLSearchParams(authorizationParams)) : "");
          _context6.t0 = fetch;
          _context6.t1 = _signInUrl;
          _context6.t2 = {
            "Content-Type": "application/x-www-form-urlencoded"
          };
          _context6.t3 = URLSearchParams;
          _context6.t4 = _objectSpread;
          _context6.t5 = _objectSpread({}, options);
          _context6.t6 = {};
          _context6.next = 25;
          return getCsrfToken();
        case 25:
          _context6.t7 = _context6.sent;
          _context6.t8 = callbackUrl;
          _context6.t9 = {
            csrfToken: _context6.t7,
            callbackUrl: _context6.t8,
            json: true
          };
          _context6.t10 = (0, _context6.t4)(_context6.t5, _context6.t6, _context6.t9);
          _context6.t11 = new _context6.t3(_context6.t10);
          _context6.t12 = {
            method: "post",
            headers: _context6.t2,
            body: _context6.t11
          };
          _context6.next = 33;
          return (0, _context6.t0)(_context6.t1, _context6.t12);
        case 33:
          res = _context6.sent;
          _context6.next = 36;
          return res.json();
        case 36:
          data = _context6.sent;
          if (!(redirect || !isSupportingReturn)) {
            _context6.next = 42;
            break;
          }
          url = (_data$url = data.url) !== null && _data$url !== void 0 ? _data$url : callbackUrl;
          window.location.href = url;
          if (url.includes("#")) window.location.reload();
          return _context6.abrupt("return");
        case 42:
          error = new URL(data.url).searchParams.get("error");
          if (!res.ok) {
            _context6.next = 46;
            break;
          }
          _context6.next = 46;
          return __NEXTAUTH._getSession({
            event: "storage"
          });
        case 46:
          return _context6.abrupt("return", {
            error: error,
            status: res.status,
            ok: res.ok,
            url: error ? null : data.url
          });
        case 47:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _signIn.apply(this, arguments);
}
function signOut(_x6) {
  return _signOut.apply(this, arguments);
}
function _signOut() {
  _signOut = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee7(options) {
    var _options$redirect;
    var _ref6, _ref6$callbackUrl, callbackUrl, baseUrl, fetchOptions, res, data, _data$url2, url;
    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _ref6 = options !== null && options !== void 0 ? options : {}, _ref6$callbackUrl = _ref6.callbackUrl, callbackUrl = _ref6$callbackUrl === void 0 ? window.location.href : _ref6$callbackUrl;
          baseUrl = (0, _utils.apiBaseUrl)(__NEXTAUTH);
          _context7.t0 = {
            "Content-Type": "application/x-www-form-urlencoded"
          };
          _context7.t1 = URLSearchParams;
          _context7.next = 6;
          return getCsrfToken();
        case 6:
          _context7.t2 = _context7.sent;
          _context7.t3 = callbackUrl;
          _context7.t4 = {
            csrfToken: _context7.t2,
            callbackUrl: _context7.t3,
            json: true
          };
          _context7.t5 = new _context7.t1(_context7.t4);
          fetchOptions = {
            method: "post",
            headers: _context7.t0,
            body: _context7.t5
          };
          _context7.next = 13;
          return fetch("".concat(baseUrl, "/signout"), fetchOptions);
        case 13:
          res = _context7.sent;
          _context7.next = 16;
          return res.json();
        case 16:
          data = _context7.sent;
          broadcast.post({
            event: "session",
            data: {
              trigger: "signout"
            }
          });
          if (!((_options$redirect = options === null || options === void 0 ? void 0 : options.redirect) !== null && _options$redirect !== void 0 ? _options$redirect : true)) {
            _context7.next = 23;
            break;
          }
          url = (_data$url2 = data.url) !== null && _data$url2 !== void 0 ? _data$url2 : callbackUrl;
          window.location.href = url;
          if (url.includes("#")) window.location.reload();
          return _context7.abrupt("return");
        case 23:
          _context7.next = 25;
          return __NEXTAUTH._getSession({
            event: "storage"
          });
        case 25:
          return _context7.abrupt("return", data);
        case 26:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return _signOut.apply(this, arguments);
}
function SessionProvider(props) {
  if (!SessionContext) {
    throw new Error("React Context is unavailable in Server Components");
  }
  var children = props.children,
    basePath = props.basePath,
    refetchInterval = props.refetchInterval,
    refetchWhenOffline = props.refetchWhenOffline;
  if (basePath) __NEXTAUTH.basePath = basePath;
  var hasInitialSession = props.session !== undefined;
  __NEXTAUTH._lastSync = hasInitialSession ? (0, _utils.now)() : 0;
  var _React$useState3 = React.useState(function () {
      if (hasInitialSession) __NEXTAUTH._session = props.session;
      return props.session;
    }),
    _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
    session = _React$useState4[0],
    setSession = _React$useState4[1];
  var _React$useState5 = React.useState(!hasInitialSession),
    _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
    loading = _React$useState6[0],
    setLoading = _React$useState6[1];
  React.useEffect(function () {
    __NEXTAUTH._getSession = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee() {
      var _ref4,
        event,
        storageEvent,
        _args = arguments;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _ref4 = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, event = _ref4.event;
            _context.prev = 1;
            storageEvent = event === "storage";
            if (!(storageEvent || __NEXTAUTH._session === undefined)) {
              _context.next = 10;
              break;
            }
            __NEXTAUTH._lastSync = (0, _utils.now)();
            _context.next = 7;
            return getSession({
              broadcast: !storageEvent
            });
          case 7:
            __NEXTAUTH._session = _context.sent;
            setSession(__NEXTAUTH._session);
            return _context.abrupt("return");
          case 10:
            if (!(!event || __NEXTAUTH._session === null || (0, _utils.now)() < __NEXTAUTH._lastSync)) {
              _context.next = 12;
              break;
            }
            return _context.abrupt("return");
          case 12:
            __NEXTAUTH._lastSync = (0, _utils.now)();
            _context.next = 15;
            return getSession();
          case 15:
            __NEXTAUTH._session = _context.sent;
            setSession(__NEXTAUTH._session);
            _context.next = 22;
            break;
          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](1);
            logger.error("CLIENT_SESSION_ERROR", _context.t0);
          case 22:
            _context.prev = 22;
            setLoading(false);
            return _context.finish(22);
          case 25:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 19, 22, 25]]);
    }));
    __NEXTAUTH._getSession();
    return function () {
      __NEXTAUTH._lastSync = 0;
      __NEXTAUTH._session = undefined;
      __NEXTAUTH._getSession = function () {};
    };
  }, []);
  React.useEffect(function () {
    var unsubscribe = broadcast.receive(function () {
      return __NEXTAUTH._getSession({
        event: "storage"
      });
    });
    return function () {
      return unsubscribe();
    };
  }, []);
  React.useEffect(function () {
    var _props$refetchOnWindo = props.refetchOnWindowFocus,
      refetchOnWindowFocus = _props$refetchOnWindo === void 0 ? true : _props$refetchOnWindo;
    var visibilityHandler = function visibilityHandler() {
      if (refetchOnWindowFocus && document.visibilityState === "visible") __NEXTAUTH._getSession({
        event: "visibilitychange"
      });
    };
    document.addEventListener("visibilitychange", visibilityHandler, false);
    return function () {
      return document.removeEventListener("visibilitychange", visibilityHandler, false);
    };
  }, [props.refetchOnWindowFocus]);
  var isOnline = useOnline();
  var shouldRefetch = refetchWhenOffline !== false || isOnline;
  React.useEffect(function () {
    if (refetchInterval && shouldRefetch) {
      var refetchIntervalTimer = setInterval(function () {
        if (__NEXTAUTH._session) {
          __NEXTAUTH._getSession({
            event: "poll"
          });
        }
      }, refetchInterval * 1000);
      return function () {
        return clearInterval(refetchIntervalTimer);
      };
    }
  }, [refetchInterval, shouldRefetch]);
  var value = React.useMemo(function () {
    return {
      data: session,
      status: loading ? "loading" : session ? "authenticated" : "unauthenticated",
      update: function update(data) {
        return (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee2() {
          var newSession;
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (!(loading || !session)) {
                  _context2.next = 2;
                  break;
                }
                return _context2.abrupt("return");
              case 2:
                setLoading(true);
                _context2.t0 = _utils.fetchData;
                _context2.t1 = __NEXTAUTH;
                _context2.t2 = logger;
                _context2.next = 8;
                return getCsrfToken();
              case 8:
                _context2.t3 = _context2.sent;
                _context2.t4 = data;
                _context2.t5 = {
                  csrfToken: _context2.t3,
                  data: _context2.t4
                };
                _context2.t6 = {
                  body: _context2.t5
                };
                _context2.t7 = {
                  req: _context2.t6
                };
                _context2.next = 15;
                return (0, _context2.t0)("session", _context2.t1, _context2.t2, _context2.t7);
              case 15:
                newSession = _context2.sent;
                setLoading(false);
                if (newSession) {
                  setSession(newSession);
                  broadcast.post({
                    event: "session",
                    data: {
                      trigger: "getSession"
                    }
                  });
                }
                return _context2.abrupt("return", newSession);
              case 19:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      }
    };
  }, [session, loading]);
  return (0, _jsxRuntime.jsx)(SessionContext.Provider, {
    value: value,
    children: children
  });
}

/***/ }),

/***/ 82384:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 22427:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(39618);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.proxyLogger = proxyLogger;
exports.setLogger = setLogger;
var _regenerator = _interopRequireDefault(__webpack_require__(16477));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(61092));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(50231));
var _errors = __webpack_require__(70560);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function formatError(o) {
  if (o instanceof Error && !(o instanceof _errors.UnknownError)) {
    return {
      message: o.message,
      stack: o.stack,
      name: o.name
    };
  }
  if (hasErrorProperty(o)) {
    var _o$message;
    o.error = formatError(o.error);
    o.message = (_o$message = o.message) !== null && _o$message !== void 0 ? _o$message : o.error.message;
  }
  return o;
}
function hasErrorProperty(x) {
  return !!(x !== null && x !== void 0 && x.error);
}
var _logger = {
  error: function error(code, metadata) {
    metadata = formatError(metadata);
    console.error("[next-auth][error][".concat(code, "]"), "\nhttps://next-auth.js.org/errors#".concat(code.toLowerCase()), metadata.message, metadata);
  },
  warn: function warn(code) {
    console.warn("[next-auth][warn][".concat(code, "]"), "\nhttps://next-auth.js.org/warnings#".concat(code.toLowerCase()));
  },
  debug: function debug(code, metadata) {
    console.log("[next-auth][debug][".concat(code, "]"), metadata);
  }
};
function setLogger() {
  var newLogger = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var debug = arguments.length > 1 ? arguments[1] : undefined;
  if (!debug) _logger.debug = function () {};
  if (newLogger.error) _logger.error = newLogger.error;
  if (newLogger.warn) _logger.warn = newLogger.warn;
  if (newLogger.debug) _logger.debug = newLogger.debug;
}
var _default = exports["default"] = _logger;
function proxyLogger() {
  var logger = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _logger;
  var basePath = arguments.length > 1 ? arguments[1] : undefined;
  try {
    if (typeof window === "undefined") {
      return logger;
    }
    var clientLogger = {};
    var _loop = function _loop(level) {
      clientLogger[level] = function () {
        var _ref = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee(code, metadata) {
          var url, body;
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _logger[level](code, metadata);
                if (level === "error") {
                  metadata = formatError(metadata);
                }
                ;
                metadata.client = true;
                url = "".concat(basePath, "/_log");
                body = new URLSearchParams(_objectSpread({
                  level: level,
                  code: code
                }, metadata));
                if (!navigator.sendBeacon) {
                  _context.next = 8;
                  break;
                }
                return _context.abrupt("return", navigator.sendBeacon(url, body));
              case 8:
                _context.next = 10;
                return fetch(url, {
                  method: "POST",
                  body: body,
                  keepalive: true
                });
              case 10:
                return _context.abrupt("return", _context.sent);
              case 11:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }();
    };
    for (var level in logger) {
      _loop(level);
    }
    return clientLogger;
  } catch (_unused) {
    return _logger;
  }
}

/***/ }),

/***/ 62064:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = parseUrl;
function parseUrl(url) {
  var _url2;
  const defaultUrl = new URL("http://localhost:3000/api/auth");
  if (url && !url.startsWith("http")) {
    url = `https://${url}`;
  }
  const _url = new URL((_url2 = url) !== null && _url2 !== void 0 ? _url2 : defaultUrl);
  const path = (_url.pathname === "/" ? defaultUrl.pathname : _url.pathname).replace(/\/$/, "");
  const base = `${_url.origin}${path}`;
  return {
    origin: _url.origin,
    host: _url.host,
    path,
    base,
    toString: () => base
  };
}

/***/ }),

/***/ 76999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Providers: () => (/* binding */ Providers)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(10326);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(17577);
var react_default = /*#__PURE__*/__webpack_require__.n(react);
;// CONCATENATED MODULE: ./node_modules/next-themes/dist/index.module.js
const c=["light","dark"],i="(prefers-color-scheme: dark)",d="undefined"==typeof window,u=/*#__PURE__*/(0,react.createContext)(void 0),h={setTheme:e=>{},themes:[]},y=()=>{var e;return null!==(e=t(u))&&void 0!==e?e:h},$=r=>(0,react.useContext)(u)?/*#__PURE__*/react_default().createElement(react.Fragment,null,r.children):/*#__PURE__*/react_default().createElement(f,r),v=["light","dark"],f=({forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:l=!0,enableColorScheme:m=!0,storageKey:d="theme",themes:h=v,defaultTheme:y=(l?"system":"light"),attribute:$="data-theme",value:f,children:w,nonce:T})=>{const[E,k]=(0,react.useState)(()=>S(d,y)),[C,L]=(0,react.useState)(()=>S(d)),x=f?Object.values(f):h,I=(0,react.useCallback)(e=>{let t=e;if(!t)return;"system"===e&&l&&(t=p());const r=f?f[t]:t,o=n?b():null,a=document.documentElement;if("class"===$?(a.classList.remove(...x),r&&a.classList.add(r)):r?a.setAttribute($,r):a.removeAttribute($),m){const e=c.includes(y)?y:null,n=c.includes(t)?t:e;a.style.colorScheme=n}null==o||o()},[]),O=(0,react.useCallback)(e=>{k(e);try{localStorage.setItem(d,e)}catch(e){}},[t]),M=(0,react.useCallback)(e=>{const n=p(e);L(n),"system"===E&&l&&!t&&I("system")},[E,t]);(0,react.useEffect)(()=>{const e=window.matchMedia(i);return e.addListener(M),M(e),()=>e.removeListener(M)},[M]),(0,react.useEffect)(()=>{const e=e=>{e.key===d&&O(e.newValue||y)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[O]),(0,react.useEffect)(()=>{I(null!=t?t:E)},[t,E]);const A=(0,react.useMemo)(()=>({theme:E,setTheme:O,forcedTheme:t,resolvedTheme:"system"===E?C:E,themes:l?[...h,"system"]:h,systemTheme:l?C:void 0}),[E,O,t,C,l,h]);/*#__PURE__*/return react_default().createElement(u.Provider,{value:A},/*#__PURE__*/react_default().createElement(g,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:l,enableColorScheme:m,storageKey:d,themes:h,defaultTheme:y,attribute:$,value:f,children:w,attrs:x,nonce:T}),w)},g=/*#__PURE__*/(0,react.memo)(({forcedTheme:t,storageKey:n,attribute:r,enableSystem:o,enableColorScheme:a,defaultTheme:s,value:l,attrs:m,nonce:d})=>{const u="system"===s,h="class"===r?`var d=document.documentElement,c=d.classList;c.remove(${m.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${r}',s='setAttribute';`,y=a?c.includes(s)&&s?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",$=(e,t=!1,n=!0)=>{const o=l?l[e]:e,s=t?e+"|| ''":`'${o}'`;let m="";return a&&n&&!t&&c.includes(e)&&(m+=`d.style.colorScheme = '${e}';`),"class"===r?m+=t||o?`c.add(${s})`:"null":o&&(m+=`d[s](n,${s})`),m},v=t?`!function(){${h}${$(t)}}()`:o?`!function(){try{${h}var e=localStorage.getItem('${n}');if('system'===e||(!e&&${u})){var t='${i}',m=window.matchMedia(t);if(m.media!==t||m.matches){${$("dark")}}else{${$("light")}}}else if(e){${l?`var x=${JSON.stringify(l)};`:""}${$(l?"x[e]":"e",!0)}}${u?"":"else{"+$(s,!1,!1)+"}"}${y}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${n}');if(e){${l?`var x=${JSON.stringify(l)};`:""}${$(l?"x[e]":"e",!0)}}else{${$(s,!1,!1)};}${y}}catch(t){}}();`;/*#__PURE__*/return react_default().createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:v}})},()=>!0),S=(e,t)=>{if(d)return;let n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t},b=()=>{const e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},p=e=>(e||(e=window.matchMedia(i)),e.matches?"dark":"light");

// EXTERNAL MODULE: ./node_modules/next-auth/react/index.js
var next_auth_react = __webpack_require__(77109);
;// CONCATENATED MODULE: ./src/app/providers.tsx
/* __next_internal_client_entry_do_not_use__ Providers auto */ 


function Providers({ children }) {
    return /*#__PURE__*/ react_jsx_runtime.jsx(next_auth_react.SessionProvider, {
        children: /*#__PURE__*/ react_jsx_runtime.jsx($, {
            attribute: "class",
            defaultTheme: "system",
            enableSystem: true,
            disableTransitionOnChange: true,
            children: children
        })
    });
}


/***/ }),

/***/ 72298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

/***/ 69843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
            this.root = (0,client/* createRoot */.s)(container);
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
// EXTERNAL MODULE: ./src/lib/server-utils.ts + 1 modules
var server_utils = __webpack_require__(54431);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(68570);
;// CONCATENATED MODULE: ./src/components/jokes/ListWithReactions.tsx

/* harmony default export */ const ListWithReactions = ((0,module_proxy.createProxy)(String.raw`C:\Users\94362\Downloads\vme\src\components\jokes\ListWithReactions.tsx#default`));

;// CONCATENATED MODULE: ./src/components/jokes/List.tsx




/**
 * 段子列表容器（服务端组件）
 * 职责：获取分页数据，渲染列表结构
 */ async function JokesList({ currentPage }) {
    const { items, totalPages, total } = await (0,server_utils/* getKfcItemsWithPagination */.CE)(currentPage, 10);
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
            /*#__PURE__*/ react_jsx_runtime.jsx(Pagination/* default */.Z, {
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


/***/ }),

/***/ 48158:
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
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(68570);
;// CONCATENATED MODULE: ./node_modules/@vercel/analytics/dist/next/index.mjs


const e0 = (0,module_proxy.createProxy)(String.raw`C:\Users\94362\Downloads\vme\node_modules\@vercel\analytics\dist\next\index.mjs#Analytics`);

;// CONCATENATED MODULE: ./src/app/providers.tsx


const providers_e0 = (0,module_proxy.createProxy)(String.raw`C:\Users\94362\Downloads\vme\src\app\providers.tsx#Providers`);

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







// EXTERNAL MODULE: ./src/lib/server-utils.ts + 1 modules
var server_utils = __webpack_require__(54431);
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
    const contributorsCount = await (0,server_utils/* getUniqueContributorsCount */.qb)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("html", {
        lang: "zh-CN",
        className: (0,clsx/* default */.Z)("h-full antialiased", (Mona_Sans_var_woff2_display_swap_variable_font_mona_sans_weight_200_900_variableName_monaSans_default()).variable),
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
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(providers_e0, {
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
                    /*#__PURE__*/ react_jsx_runtime.jsx(e0, {})
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
        className: (0,clsx/* default */.Z)(className, "group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-sky-300", compact ? "gap-x-2" : "gap-x-3"),
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68570);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\94362\Downloads\vme\src\components\shared\CopyButton.tsx#default`));


/***/ }),

/***/ 54174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ FormattedDate)
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68570);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\94362\Downloads\vme\src\components\shared\Pagination.tsx#default`));


/***/ }),

/***/ 54431:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  PP: () => (/* binding */ getAllKfcItems),
  CE: () => (/* binding */ getKfcItemsWithPagination),
  k1: () => (/* binding */ getRandomKfcItem),
  qb: () => (/* binding */ getUniqueContributorsCount)
});

// UNUSED EXPORTS: getAllContributors, getAvailableMonths, getKfcItemsByMonth, getSummary, getTopContributors

;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(71017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
;// CONCATENATED MODULE: ./src/lib/server-utils.ts
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
        const filePath = external_path_default().resolve(process.cwd(), "data", `${month}.json`);
        if (!external_fs_default().existsSync(filePath)) {
            return [];
        }
        const data = await external_fs_default().promises.readFile(filePath, "utf-8");
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
        const filePath = external_path_default().resolve(process.cwd(), "data", "summary.json");
        if (!external_fs_default().existsSync(filePath)) {
            throw new Error("汇总数据文件不存在");
        }
        const data = await external_fs_default().promises.readFile(filePath, "utf-8");
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



/***/ }),

/***/ 2939:
/***/ ((module) => {

function _OverloadYield(e, d) {
  this.v = e, this.k = d;
}
module.exports = _OverloadYield, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 4798:
/***/ ((module) => {

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 31439:
/***/ ((module) => {

function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 33002:
/***/ ((module) => {

function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 50231:
/***/ ((module) => {

function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 68326:
/***/ ((module) => {

function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 62519:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isNativeReflectConstruct = __webpack_require__(41584);
var setPrototypeOf = __webpack_require__(86896);
function _construct(t, e, r) {
  if (isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && setPrototypeOf(p, r.prototype), p;
}
module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 42706:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPropertyKey = __webpack_require__(61518);
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 61092:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPropertyKey = __webpack_require__(61518);
function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 89899:
/***/ ((module) => {

function _getPrototypeOf(t) {
  return module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _getPrototypeOf(t);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 59356:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(86896);
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && setPrototypeOf(t, e);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 39618:
/***/ ((module) => {

function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 23642:
/***/ ((module) => {

function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}
module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 41584:
/***/ ((module) => {

function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (module.exports = _isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 98562:
/***/ ((module) => {

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 77427:
/***/ ((module) => {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 83041:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(12054)["default"]);
var assertThisInitialized = __webpack_require__(33002);
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return assertThisInitialized(t);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 23720:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var regeneratorDefine = __webpack_require__(61151);
function _regenerator() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var e,
    t,
    r = "function" == typeof Symbol ? Symbol : {},
    n = r.iterator || "@@iterator",
    o = r.toStringTag || "@@toStringTag";
  function i(r, n, o, i) {
    var c = n && n.prototype instanceof Generator ? n : Generator,
      u = Object.create(c.prototype);
    return regeneratorDefine(u, "_invoke", function (r, n, o) {
      var i,
        c,
        u,
        f = 0,
        p = o || [],
        y = !1,
        G = {
          p: 0,
          n: 0,
          v: e,
          a: d,
          f: d.bind(e, 4),
          d: function d(t, r) {
            return i = t, c = 0, u = e, G.n = r, a;
          }
        };
      function d(r, n) {
        for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
          var o,
            i = p[t],
            d = G.p,
            l = i[2];
          r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
        }
        if (o || r > 1) return a;
        throw y = !0, n;
      }
      return function (o, p, l) {
        if (f > 1) throw TypeError("Generator is already running");
        for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
          i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
          try {
            if (f = 2, i) {
              if (c || (o = "next"), t = i[o]) {
                if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                u = t.value, c < 2 && (c = 0);
              } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
              i = e;
            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
          } catch (t) {
            i = e, c = 1, u = t;
          } finally {
            f = 1;
          }
        }
        return {
          value: t,
          done: y
        };
      };
    }(r, o, i), !0), u;
  }
  var a = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  t = Object.getPrototypeOf;
  var c = [][n] ? t(t([][n]())) : (regeneratorDefine(t = {}, n, function () {
      return this;
    }), t),
    u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
  function f(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), regeneratorDefine(u), regeneratorDefine(u, o, "Generator"), regeneratorDefine(u, n, function () {
    return this;
  }), regeneratorDefine(u, "toString", function () {
    return "[object Generator]";
  }), (module.exports = _regenerator = function _regenerator() {
    return {
      w: i,
      m: f
    };
  }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
}
module.exports = _regenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 77912:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var regeneratorAsyncGen = __webpack_require__(51359);
function _regeneratorAsync(n, e, r, t, o) {
  var a = regeneratorAsyncGen(n, e, r, t, o);
  return a.next().then(function (n) {
    return n.done ? n.value : a.next();
  });
}
module.exports = _regeneratorAsync, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 51359:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var regenerator = __webpack_require__(23720);
var regeneratorAsyncIterator = __webpack_require__(6799);
function _regeneratorAsyncGen(r, e, t, o, n) {
  return new regeneratorAsyncIterator(regenerator().w(r, e, t, o), n || Promise);
}
module.exports = _regeneratorAsyncGen, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 6799:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var OverloadYield = __webpack_require__(2939);
var regeneratorDefine = __webpack_require__(61151);
function AsyncIterator(t, e) {
  function n(r, o, i, f) {
    try {
      var c = t[r](o),
        u = c.value;
      return u instanceof OverloadYield ? e.resolve(u.v).then(function (t) {
        n("next", t, i, f);
      }, function (t) {
        n("throw", t, i, f);
      }) : e.resolve(u).then(function (t) {
        c.value = t, i(c);
      }, function (t) {
        return n("throw", t, i, f);
      });
    } catch (t) {
      f(t);
    }
  }
  var r;
  this.next || (regeneratorDefine(AsyncIterator.prototype), regeneratorDefine(AsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function () {
    return this;
  })), regeneratorDefine(this, "_invoke", function (t, o, i) {
    function f() {
      return new e(function (e, r) {
        n(t, i, e, r);
      });
    }
    return r = r ? r.then(f, f) : f();
  }, !0);
}
module.exports = AsyncIterator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 61151:
/***/ ((module) => {

function _regeneratorDefine(e, r, n, t) {
  var i = Object.defineProperty;
  try {
    i({}, "", {});
  } catch (e) {
    i = 0;
  }
  module.exports = _regeneratorDefine = function regeneratorDefine(e, r, n, t) {
    function o(r, n) {
      _regeneratorDefine(e, r, function (e) {
        return this._invoke(r, n, e);
      });
    }
    r ? i ? i(e, r, {
      value: n,
      enumerable: !t,
      configurable: !t,
      writable: !t
    }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _regeneratorDefine(e, r, n, t);
}
module.exports = _regeneratorDefine, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 19666:
/***/ ((module) => {

function _regeneratorKeys(e) {
  var n = Object(e),
    r = [];
  for (var t in n) r.unshift(t);
  return function e() {
    for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = !1, e;
    return e.done = !0, e;
  };
}
module.exports = _regeneratorKeys, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 72354:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var OverloadYield = __webpack_require__(2939);
var regenerator = __webpack_require__(23720);
var regeneratorAsync = __webpack_require__(77912);
var regeneratorAsyncGen = __webpack_require__(51359);
var regeneratorAsyncIterator = __webpack_require__(6799);
var regeneratorKeys = __webpack_require__(19666);
var regeneratorValues = __webpack_require__(90042);
function _regeneratorRuntime() {
  "use strict";

  var r = regenerator(),
    e = r.m(_regeneratorRuntime),
    t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor;
  function n(r) {
    var e = "function" == typeof r && r.constructor;
    return !!e && (e === t || "GeneratorFunction" === (e.displayName || e.name));
  }
  var o = {
    "throw": 1,
    "return": 2,
    "break": 3,
    "continue": 3
  };
  function a(r) {
    var e, t;
    return function (n) {
      e || (e = {
        stop: function stop() {
          return t(n.a, 2);
        },
        "catch": function _catch() {
          return n.v;
        },
        abrupt: function abrupt(r, e) {
          return t(n.a, o[r], e);
        },
        delegateYield: function delegateYield(r, o, a) {
          return e.resultName = o, t(n.d, regeneratorValues(r), a);
        },
        finish: function finish(r) {
          return t(n.f, r);
        }
      }, t = function t(r, _t, o) {
        n.p = e.prev, n.n = e.next;
        try {
          return r(_t, o);
        } finally {
          e.next = n.n;
        }
      }), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n;
      try {
        return r.call(this, e);
      } finally {
        n.p = e.prev, n.n = e.next;
      }
    };
  }
  return (module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return {
      wrap: function wrap(e, t, n, o) {
        return r.w(a(e), t, n, o && o.reverse());
      },
      isGeneratorFunction: n,
      mark: r.m,
      awrap: function awrap(r, e) {
        return new OverloadYield(r, e);
      },
      AsyncIterator: regeneratorAsyncIterator,
      async: function async(r, e, t, o, u) {
        return (n(e) ? regeneratorAsyncGen : regeneratorAsync)(a(r), e, t, o, u);
      },
      keys: regeneratorKeys,
      values: regeneratorValues
    };
  }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 90042:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(12054)["default"]);
function _regeneratorValues(e) {
  if (null != e) {
    var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"],
      r = 0;
    if (t) return t.call(e);
    if ("function" == typeof e.next) return e;
    if (!isNaN(e.length)) return {
      next: function next() {
        return e && r >= e.length && (e = void 0), {
          value: e && e[r++],
          done: !e
        };
      }
    };
  }
  throw new TypeError(_typeof(e) + " is not iterable");
}
module.exports = _regeneratorValues, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 86896:
/***/ ((module) => {

function _setPrototypeOf(t, e) {
  return module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _setPrototypeOf(t, e);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 35895:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithHoles = __webpack_require__(31439);
var iterableToArrayLimit = __webpack_require__(98562);
var unsupportedIterableToArray = __webpack_require__(81287);
var nonIterableRest = __webpack_require__(77427);
function _slicedToArray(r, e) {
  return arrayWithHoles(r) || iterableToArrayLimit(r, e) || unsupportedIterableToArray(r, e) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 31961:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(12054)["default"]);
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 61518:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(12054)["default"]);
var toPrimitive = __webpack_require__(31961);
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 12054:
/***/ ((module) => {

function _typeof(o) {
  "@babel/helpers - typeof";

  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 81287:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(4798);
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? arrayLikeToArray(r, a) : void 0;
  }
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 71799:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getPrototypeOf = __webpack_require__(89899);
var setPrototypeOf = __webpack_require__(86896);
var isNativeFunction = __webpack_require__(23642);
var construct = __webpack_require__(62519);
function _wrapNativeSuper(t) {
  var r = "function" == typeof Map ? new Map() : void 0;
  return module.exports = _wrapNativeSuper = function _wrapNativeSuper(t) {
    if (null === t || !isNativeFunction(t)) return t;
    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r) {
      if (r.has(t)) return r.get(t);
      r.set(t, Wrapper);
    }
    function Wrapper() {
      return construct(t, arguments, getPrototypeOf(this).constructor);
    }
    return Wrapper.prototype = Object.create(t.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), setPrototypeOf(Wrapper, t);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _wrapNativeSuper(t);
}
module.exports = _wrapNativeSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 16477:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(72354)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ 98285:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ _class_private_field_loose_base),
/* harmony export */   _class_private_field_loose_base: () => (/* binding */ _class_private_field_loose_base)
/* harmony export */ });
function _class_private_field_loose_base(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
        throw new TypeError("attempted to use private field on non-instance");
    }

    return receiver;
}



/***/ }),

/***/ 78817:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ _class_private_field_loose_key),
/* harmony export */   _class_private_field_loose_key: () => (/* binding */ _class_private_field_loose_key)
/* harmony export */ });
var id = 0;

function _class_private_field_loose_key(name) {
    return "__private_" + id++ + "_" + name;
}



/***/ }),

/***/ 91174:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ _interop_require_default),
/* harmony export */   _interop_require_default: () => (/* binding */ _interop_require_default)
/* harmony export */ });
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}



/***/ }),

/***/ 58374:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ _interop_require_wildcard),
/* harmony export */   _interop_require_wildcard: () => (/* binding */ _interop_require_wildcard)
/* harmony export */ });
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;

    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();

    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return { default: obj };

    var cache = _getRequireWildcardCache(nodeInterop);

    if (cache && cache.has(obj)) return cache.get(obj);

    var newObj = { __proto__: null };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }

    newObj.default = obj;

    if (cache) cache.set(obj, newObj);

    return newObj;
}



/***/ }),

/***/ 54452:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Analytics: () => (/* binding */ Analytics2)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17577);
/* harmony import */ var next_navigation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35047);
/* __next_internal_client_entry_do_not_use__ Analytics auto */ // src/nextjs/index.tsx

// src/react/index.tsx

// package.json
var name = "@vercel/analytics";
var version = "1.5.0";
// src/queue.ts
var initQueue = ()=>{
    if (window.va) return;
    window.va = function a(...params) {
        (window.vaq = window.vaq || []).push(params);
    };
};
// src/utils.ts
function isBrowser() {
    return "undefined" !== "undefined";
}
function detectEnvironment() {
    try {
        const env = "production";
        if (env === "development" || env === "test") {
            return "development";
        }
    } catch (e) {}
    return "production";
}
function setMode(mode = "auto") {
    if (mode === "auto") {
        window.vam = detectEnvironment();
        return;
    }
    window.vam = mode;
}
function getMode() {
    const mode = isBrowser() ? window.vam : detectEnvironment();
    return mode || "production";
}
function isDevelopment() {
    return getMode() === "development";
}
function computeRoute(pathname, pathParams) {
    if (!pathname || !pathParams) {
        return pathname;
    }
    let result = pathname;
    try {
        const entries = Object.entries(pathParams);
        for (const [key, value] of entries){
            if (!Array.isArray(value)) {
                const matcher = turnValueToRegExp(value);
                if (matcher.test(result)) {
                    result = result.replace(matcher, `/[${key}]`);
                }
            }
        }
        for (const [key, value] of entries){
            if (Array.isArray(value)) {
                const matcher = turnValueToRegExp(value.join("/"));
                if (matcher.test(result)) {
                    result = result.replace(matcher, `/[...${key}]`);
                }
            }
        }
        return result;
    } catch (e) {
        return pathname;
    }
}
function turnValueToRegExp(value) {
    return new RegExp(`/${escapeRegExp(value)}(?=[/?#]|$)`);
}
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function getScriptSrc(props) {
    if (props.scriptSrc) {
        return props.scriptSrc;
    }
    if (isDevelopment()) {
        return "https://va.vercel-scripts.com/v1/script.debug.js";
    }
    if (props.basePath) {
        return `${props.basePath}/insights/script.js`;
    }
    return "/_vercel/insights/script.js";
}
// src/generic.ts
function inject(props = {
    debug: true
}) {
    var _a;
    if (!isBrowser()) return;
    setMode(props.mode);
    initQueue();
    if (props.beforeSend) {
        (_a = window.va) == null ? void 0 : _a.call(window, "beforeSend", props.beforeSend);
    }
    const src = getScriptSrc(props);
    if (document.head.querySelector(`script[src*="${src}"]`)) return;
    const script = document.createElement("script");
    script.src = src;
    script.defer = true;
    script.dataset.sdkn = name + (props.framework ? `/${props.framework}` : "");
    script.dataset.sdkv = version;
    if (props.disableAutoTrack) {
        script.dataset.disableAutoTrack = "1";
    }
    if (props.endpoint) {
        script.dataset.endpoint = props.endpoint;
    } else if (props.basePath) {
        script.dataset.endpoint = `${props.basePath}/insights`;
    }
    if (props.dsn) {
        script.dataset.dsn = props.dsn;
    }
    script.onerror = ()=>{
        const errorMessage = isDevelopment() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
        console.log(`[Vercel Web Analytics] Failed to load script from ${src}. ${errorMessage}`);
    };
    if (isDevelopment() && props.debug === false) {
        script.dataset.debug = "false";
    }
    document.head.appendChild(script);
}
function pageview({ route, path }) {
    var _a;
    (_a = window.va) == null ? void 0 : _a.call(window, "pageview", {
        route,
        path
    });
}
// src/react/utils.ts
function getBasePath() {
    if (typeof process === "undefined" || typeof process.env === "undefined") {
        return void 0;
    }
    return process.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
}
// src/react/index.tsx
function Analytics(props) {
    null;
    null;
    null;
    return null;
}
// src/nextjs/utils.ts

var useRoute = ()=>{
    const params = (0,next_navigation_js__WEBPACK_IMPORTED_MODULE_1__.useParams)();
    const searchParams = (0,next_navigation_js__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();
    const path = (0,next_navigation_js__WEBPACK_IMPORTED_MODULE_1__.usePathname)();
    if (!params) {
        return {
            route: null,
            path
        };
    }
    const finalParams = Object.keys(params).length ? params : Object.fromEntries(searchParams.entries());
    return {
        route: computeRoute(path, finalParams),
        path
    };
};
function getBasePath2() {
    if (typeof process === "undefined" || typeof process.env === "undefined") {
        return void 0;
    }
    return process.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH;
}
// src/nextjs/index.tsx
function AnalyticsComponent(props) {
    const { route, path } = useRoute();
    return /* @__PURE__ */ /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Analytics, {
        path,
        route,
        ...props,
        basePath: getBasePath2(),
        framework: "next"
    });
}
function Analytics2(props) {
    return /* @__PURE__ */ /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
        fallback: null
    }, /* @__PURE__ */ /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(AnalyticsComponent, {
        ...props
    }));
}
 //# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 53370:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ _interop_require_default),
/* harmony export */   _interop_require_default: () => (/* binding */ _interop_require_default)
/* harmony export */ });
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}



/***/ }),

/***/ 55761:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export clsx */
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [774], () => (__webpack_exec__(35440)));
module.exports = __webpack_exports__;

})();