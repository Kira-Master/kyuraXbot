let { Functions } = require('./Functionsw')
let { WAConnection } = require('@adiwajshing/baileys');
let { nocache } = require('./functions')
let syntaxerror = require('syntax-error');
global.Functs = new Functions();
global.conn = new WAConnection();
//plugins function
let plugFol = Functs['path'].join(__dirname, '../plugins');
let plugFil = fname => /\.js$/.test(fname);
global.plugins = {}
for (let fname of Functs['fs'].readdirSync(plugFol).filter(plugFil)) { try {
global.plugins[fname] = require(Functs['path'].join(plugFol, fname)); } catch (e) {
conn.logger.error(e);
delete global.plugins[fname];
}}

global.reload = (_event, fname) => {
if (plugFil(fname)) {
let dir = Functs['path'].join(plugFol, fname);
if (dir in require.cache) {
delete require.cache[dir];
console.log(`now '${fname}' is update`);
if (Functs['fs'].existsSync(dir)) conn.logger.info(`re - require plugin '${fname}'`);
else {
conn.logger.warn(`deleted plugin '${fname}'`);
return delete global.plugins[fname];
}
} else conn.logger.info(`requiring new plugin '${fname}'`);
let err = syntaxerror(Functs['fs'].readFileSync(dir), fname);
if (err) conn.logger.error(`syntax error while loading '${fname}'\n${err}`);
else try { global.plugins[fname] = require(dir);
} catch (e) { conn.logger.error(e);
} finally { global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([a], [b]) => a.localeCompare(b)));
}}} 

Object.freeze(global.reload);
Functs['fs'].watch(Functs['path'].join(__dirname, '../plugins'), global.reload);
console.log(Object.keys(global.plugins));

//lib function
let libFol = Functs['path'].join(__dirname, '../lib');
let libFil = fname => /\.js$/.test(fname);
global.lib = {}
for (let fname of Functs['fs'].readdirSync(libFol).filter(libFil)) { try {
global.lib[fname] = require(Functs['path'].join(libFol, fname)); } catch (e) {
conn.logger.error(e);
delete global.lib[fname];
}}

global.reload = (_event, fname) => {
if (libFil(fname)) {
let dir = Functs['path'].join(libFol, fname);
if (dir in require.cache) {
delete require.cache[dir];
console.log(`now '${fname}' is update`);
if (Functs['fs'].existsSync(dir)) conn.logger.info(`re - require lib '${fname}'`);
else {
conn.logger.warn(`deleted lib '${fname}'`);
return delete global.lib[fname];
}
} else conn.logger.info(`requiring new lib '${fname}'`);
let err = syntaxerror(Functs['fs'].readFileSync(dir), fname);
if (err) conn.logger.error(`syntax error while loading '${fname}'\n${err}`);
else try { global.lib[fname] = require(dir);
} catch (e) { conn.logger.error(e);
} finally { global.lib = Object.fromEntries(Object.entries(global.lib).sort(([a], [b]) => a.localeCompare(b)));
}}} 

Object.freeze(global.reload);
Functs['fs'].watch(Functs['path'].join(__dirname, '../lib'), global.reload);

console.log(Object.keys(global.lib));
require('../main.js')
nocache('../main.js')
//index
require('../index.js')
nocache('../index.js')