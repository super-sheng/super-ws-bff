"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const lodash_es_1 = require("lodash-es");
let config = {
    viewDir: (0, path_1.join)(__dirname, '..', 'views'),
    staticDir: (0, path_1.join)(__dirname, '..', 'assets'),
    port: 8081,
    memory: false,
};
if (process.env.NODE_ENV === 'production') {
    let prodConfig = {
        port: 8082,
        memory: 'memory',
    };
    config = (0, lodash_es_1.assignIn)(config, prodConfig);
}
exports.default = config;
