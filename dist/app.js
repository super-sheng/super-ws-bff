"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_alias_1 = require("module-alias");
(0, module_alias_1.addAliases)({
    '@interfaces': `${__dirname}/interface`,
    '@config': `${__dirname}/config`,
    '@middlewares': `${__dirname}/middlewares`,
});
const koa_1 = __importDefault(require("koa"));
const index_1 = __importDefault(require("@config/index"));
const koa_static_1 = __importDefault(require("koa-static"));
const awilix_1 = require("awilix");
const awilix_koa_1 = require("awilix-koa");
const koa2_connect_history_api_fallback_1 = __importDefault(require("koa2-connect-history-api-fallback"));
const co_1 = __importDefault(require("co"));
const koa_swig_1 = __importDefault(require("koa-swig"));
const app = new koa_1.default();
const { port, viewDir, memory, staticDir } = index_1.default;
const container = (0, awilix_1.createContainer)();
container.loadModules([`${__dirname}/services/.ts`], {
    formatName: 'camelCase',
    resolverOptions: {
        lifetime: awilix_1.Lifetime.SCOPED
    }
});
app.context.render = co_1.default.wrap((0, koa_swig_1.default)({
    root: viewDir,
    autoescape: true,
    cache: memory,
    ext: 'html',
    writeBody: false,
}));
app.use((0, awilix_koa_1.scopePerRequest)(container));
app.use((0, koa_static_1.default)(staticDir));
app.use((0, koa2_connect_history_api_fallback_1.default)({ index: '/', whiteList: ['/api'] }));
app.use((0, awilix_koa_1.loadControllers)(`${__dirname}/routers/*.ts`));
app.listen(port, '0.0.0.0', () => {
    console.log(`🚀 server is running at ${port}`);
});
