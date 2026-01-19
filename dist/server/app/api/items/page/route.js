"use strict";
(() => {
var exports = {};
exports.id = 954;
exports.ids = [954];
exports.modules = {

/***/ 20399:
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");

/***/ }),

/***/ 30517:
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.prod.js");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 54539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  originalPathname: () => (/* binding */ originalPathname),
  patchFetch: () => (/* binding */ patchFetch),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)
});

// NAMESPACE OBJECT: ./src/app/api/items/page/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET),
  OPTIONS: () => (OPTIONS),
  revalidate: () => (revalidate)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js
var module_compiled = __webpack_require__(49303);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(88716);
// EXTERNAL MODULE: ./node_modules/next/dist/server/lib/patch-fetch.js
var patch_fetch = __webpack_require__(60670);
// EXTERNAL MODULE: ./node_modules/next/dist/api/server.js
var server = __webpack_require__(87070);
// EXTERNAL MODULE: ./src/lib/server-utils.ts + 1 modules
var server_utils = __webpack_require__(54431);
;// CONCATENATED MODULE: ./src/app/api/items/page/route.ts


const revalidate = 60 // 设置重新验证间隔为60秒
;
async function GET(request) {
    // 处理跨域请求
    const headers = new Headers();
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Access-Control-Allow-Methods", "GET, OPTIONS, HEAD");
    headers.set("Access-Control-Allow-Headers", "Content-Type");
    try {
        const { searchParams } = new URL(request.url);
        // 从查询参数中获取分页信息
        const page = parseInt(searchParams.get("page") || "1", 10);
        const pageSize = parseInt(searchParams.get("pageSize") || "10", 10);
        // 获取分页数据
        const data = await (0,server_utils/* getKfcItemsWithPagination */.CE)(page, pageSize);
        return server.NextResponse.json(data, {
            headers
        });
    } catch (error) {
        console.error(error);
        return server.NextResponse.json({
            error: "Internal Server Error"
        }, {
            status: 500,
            headers
        });
    }
}
function OPTIONS() {
    const headers = new Headers();
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Access-Control-Allow-Methods", "GET, OPTIONS, HEAD");
    headers.set("Access-Control-Allow-Headers", "Content-Type");
    return new server.NextResponse(null, {
        status: 200,
        headers
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fitems%2Fpage%2Froute&name=app%2Fapi%2Fitems%2Fpage%2Froute&pagePath=private-next-app-dir%2Fapi%2Fitems%2Fpage%2Froute.ts&appDir=C%3A%5CUsers%5C94362%5CDownloads%5Cvme%5Csrc%5Capp&appPaths=%2Fapi%2Fitems%2Fpage%2Froute&pageExtensions=js&pageExtensions=jsx&pageExtensions=ts&pageExtensions=tsx&basePath=&assetPrefix=&nextConfigOutput=&nextConfigExperimentalUseEarlyImport=false&preferredRegion=&middlewareConfig=e30%3D!




// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new module_compiled.AppRouteRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.APP_ROUTE,
        page: "/api/items/page/route",
        pathname: "/api/items/page",
        filename: "route",
        bundlePath: "app/api/items/page/route"
    },
    resolvedPagePath: "C:\\Users\\94362\\Downloads\\vme\\src\\app\\api\\items\\page\\route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;
const originalPathname = "/api/items/page/route";
function patchFetch() {
    return (0,patch_fetch.patchFetch)({
        serverHooks,
        staticGenerationAsyncStorage
    });
}


//# sourceMappingURL=app-route.js.map

/***/ }),

/***/ 54431:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [774], () => (__webpack_exec__(54539)));
module.exports = __webpack_exports__;

})();