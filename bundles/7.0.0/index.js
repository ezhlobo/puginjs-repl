!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).plugin=e()}}(function(){var e,t,r;return function(){return function e(t,r,n){function i(o,a){if(!r[o]){if(!t[o]){var u="function"==typeof require&&require;if(!a&&u)return u(o,!0);if(s)return s(o,!0);var l=new Error("Cannot find module '"+o+"'");throw l.code="MODULE_NOT_FOUND",l}var c=r[o]={exports:{}};t[o][0].call(c.exports,function(e){return i(t[o][1][e]||e)},c,c.exports,e,t,r,n)}return r[o].exports}for(var s="function"==typeof require&&require,o=0;o<n.length;o++)i(n[o]);return i}}()({1:[function(e,t,r){t.exports=e("babel-plugin-transform-react-pug")},{"babel-plugin-transform-react-pug":175}],2:[function(e,t,r){(function(t){"use strict";function n(){const t=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(e("@babel/highlight"));return n=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.codeFrameColumns=o,r.default=function(e,r,n,s={}){if(!i){i=!0;const e="Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";if(t.emitWarning)t.emitWarning(e,"DeprecationWarning");else{const t=new Error(e);t.name="DeprecationWarning",console.warn(new Error(e))}}return n=Math.max(n,0),o(e,{start:{column:n,line:r}},s)};let i=!1;const s=/\r\n|[\n\r\u2028\u2029]/;function o(e,t,r={}){const i=(r.highlightCode||r.forceColor)&&(0,n().shouldHighlight)(r),o=(0,n().getChalk)(r),a=function(e){return{gutter:e.grey,marker:e.red.bold,message:e.red.bold}}(o),u=(e,t)=>i?e(t):t;i&&(e=(0,n().default)(e,r));const l=e.split(s),{start:c,end:p,markerLines:f}=function(e,t,r){const n=Object.assign({column:0,line:-1},e.start),i=Object.assign({},n,e.end),{linesAbove:s=2,linesBelow:o=3}=r||{},a=n.line,u=n.column,l=i.line,c=i.column;let p=Math.max(a-(s+1),0),f=Math.min(t.length,l+o);-1===a&&(p=0),-1===l&&(f=t.length);const h=l-a,d={};if(h)for(let e=0;e<=h;e++){const r=e+a;if(u)if(0===e){const e=t[r-1].length;d[r]=[u,e-u]}else if(e===h)d[r]=[0,c];else{const n=t[r-e].length;d[r]=[0,n]}else d[r]=!0}else d[a]=u===c?!u||[u,0]:[u,c-u];return{start:p,end:f,markerLines:d}}(t,l,r),h=t.start&&"number"==typeof t.start.column,d=String(p).length;let m=l.slice(c,p).map((e,t)=>{const n=c+1+t,i=` ${` ${n}`.slice(-d)} | `,s=f[n],o=!f[n+1];if(s){let t="";if(Array.isArray(s)){const n=e.slice(0,Math.max(s[0]-1,0)).replace(/[^\t]/g," "),l=s[1]||1;t=["\n ",u(a.gutter,i.replace(/\d/g," ")),n,u(a.marker,"^").repeat(l)].join(""),o&&r.message&&(t+=" "+u(a.message,r.message))}return[u(a.marker,">"),u(a.gutter,i),e,t].join("")}return` ${u(a.gutter,i)}${e}`}).join("\n");return r.message&&!h&&(m=`${" ".repeat(d+1)}${r.message}\n${m}`),i?o.reset(m):m}}).call(this,e("_process"))},{"@babel/highlight":60,_process:695}],3:[function(e,t,r){"use strict";function n(e,t){return function(r,n){let s=e.get(r);if(s)for(const e of s){const{value:t,valid:r}=e;if(r(n))return t}const o=new i(n),a=t(r,o);switch(o.configured()||o.forever(),o.deactivate(),o.mode()){case"forever":s=[{value:a,valid:()=>!0}],e.set(r,s);break;case"invalidate":s=[{value:a,valid:o.validator()}],e.set(r,s);break;case"valid":s?s.push({value:a,valid:o.validator()}):(s=[{value:a,valid:o.validator()}],e.set(r,s))}return a}}Object.defineProperty(r,"__esModule",{value:!0}),r.makeStrongCache=function(e){return n(new Map,e)},r.makeWeakCache=function(e){return n(new WeakMap,e)},r.assertSimpleType=s;class i{constructor(e){this._active=!0,this._never=!1,this._forever=!1,this._invalidate=!1,this._configured=!1,this._pairs=[],this._data=e}simple(){return function(e){function t(t){if("boolean"!=typeof t)return e.using(()=>s(t()));t?e.forever():e.never()}return t.forever=(()=>e.forever()),t.never=(()=>e.never()),t.using=(t=>e.using(()=>s(t()))),t.invalidate=(t=>e.invalidate(()=>s(t()))),t}(this)}mode(){return this._never?"never":this._forever?"forever":this._invalidate?"invalidate":"valid"}forever(){if(!this._active)throw new Error("Cannot change caching after evaluation has completed.");if(this._never)throw new Error("Caching has already been configured with .never()");this._forever=!0,this._configured=!0}never(){if(!this._active)throw new Error("Cannot change caching after evaluation has completed.");if(this._forever)throw new Error("Caching has already been configured with .forever()");this._never=!0,this._configured=!0}using(e){if(!this._active)throw new Error("Cannot change caching after evaluation has completed.");if(this._never||this._forever)throw new Error("Caching has already been configured with .never or .forever()");this._configured=!0;const t=e(this._data);return this._pairs.push([t,e]),t}invalidate(e){if(!this._active)throw new Error("Cannot change caching after evaluation has completed.");if(this._never||this._forever)throw new Error("Caching has already been configured with .never or .forever()");this._invalidate=!0,this._configured=!0;const t=e(this._data);return this._pairs.push([t,e]),t}validator(){const e=this._pairs;return t=>e.every(([e,r])=>e===r(t))}deactivate(){this._active=!1}configured(){return this._configured}}function s(e){if(null!=e&&"string"!=typeof e&&"boolean"!=typeof e&&"number"!=typeof e)throw new Error("Cache keys must be either string, boolean, number, null, or undefined.");return e}},{}],4:[function(e,t,r){"use strict";function n(){const t=c(e("path"));return n=function(){return t},t}function i(){const t=c(e("debug"));return i=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.buildPresetChain=function(e,t){const r=f(e,t);return r?{plugins:L(r.plugins),presets:L(r.presets),options:r.options.map(e=>N(e))}:null},r.buildRootChain=function(e,t){const r=E({options:e,dirname:t.cwd},t);if(!r)return null;let i;"string"==typeof e.configFile?i=(0,a.loadConfig)(e.configFile,t.cwd,t.envName,t.caller):!1!==e.configFile&&(i=(0,a.findRootConfig)(t.root,t.envName,t.caller));let{babelrc:s,babelrcRoots:u}=e,l=t.cwd;const c={options:[],presets:[],plugins:[]};if(i){const e=g(i),r=x(e,t);if(!r)return null;void 0===s&&(s=e.options.babelrc),void 0===u&&(l=e.dirname,u=e.options.babelrcRoots),F(c,r)}const p="string"==typeof t.filename?(0,a.findPackageData)(t.filename):null;let f,h;const d={options:[],presets:[],plugins:[]};if((!0===s||void 0===s)&&p&&function(e,t,r,i){if("boolean"==typeof r)return r;const s=e.root;if(void 0===r)return-1!==t.directories.indexOf(s);let a=r;Array.isArray(a)||(a=[a]);if(1===(a=a.map(e=>"string"==typeof e?n().default.resolve(i,e):e)).length&&a[0]===s)return-1!==t.directories.indexOf(s);return a.some(r=>("string"==typeof r&&(r=(0,o.default)(r,i)),t.directories.some(t=>U(r,i,t,e))))}(t,p,u,l)){if(({ignore:f,config:h}=(0,a.findRelativeConfig)(p,t.envName,t.caller)),f&&R(t,f.ignore,null,f.dirname))return null;if(h){const e=x(b(h),t);if(!e)return null;F(d,e)}}const m=F(F(F({options:[],presets:[],plugins:[]},c),d),r);return{plugins:L(m.plugins),presets:L(m.presets),options:m.options.map(e=>N(e)),ignore:f||void 0,babelrc:h||void 0,config:i||void 0}},r.buildPresetChainWalker=void 0;var s=e("./validation/options"),o=c(e("./pattern-to-regex")),a=e("./files"),u=e("./caching"),l=e("./config-descriptors");function c(e){return e&&e.__esModule?e:{default:e}}const p=(0,i().default)("babel:config:config-chain");const f=k({init:e=>e,root:e=>h(e),env:(e,t)=>d(e)(t),overrides:(e,t)=>m(e)(t),overridesEnv:(e,t,r)=>y(e)(t)(r)});r.buildPresetChainWalker=f;const h=(0,u.makeWeakCache)(e=>_(e,e.alias,l.createUncachedDescriptors)),d=(0,u.makeWeakCache)(e=>(0,u.makeStrongCache)(t=>C(e,e.alias,l.createUncachedDescriptors,t))),m=(0,u.makeWeakCache)(e=>(0,u.makeStrongCache)(t=>P(e,e.alias,l.createUncachedDescriptors,t))),y=(0,u.makeWeakCache)(e=>(0,u.makeStrongCache)(t=>(0,u.makeStrongCache)(r=>D(e,e.alias,l.createUncachedDescriptors,t,r))));const g=(0,u.makeWeakCache)(e=>({filepath:e.filepath,dirname:e.dirname,options:(0,s.validate)("configfile",e.options)})),b=(0,u.makeWeakCache)(e=>({filepath:e.filepath,dirname:e.dirname,options:(0,s.validate)("babelrcfile",e.options)})),v=(0,u.makeWeakCache)(e=>({filepath:e.filepath,dirname:e.dirname,options:(0,s.validate)("extendsfile",e.options)})),E=k({root:e=>_(e,"base",l.createCachedDescriptors),env:(e,t)=>C(e,"base",l.createCachedDescriptors,t),overrides:(e,t)=>P(e,"base",l.createCachedDescriptors,t),overridesEnv:(e,t,r)=>D(e,"base",l.createCachedDescriptors,t,r)}),x=k({root:e=>T(e),env:(e,t)=>A(e)(t),overrides:(e,t)=>S(e)(t),overridesEnv:(e,t,r)=>w(e)(t)(r)}),T=(0,u.makeWeakCache)(e=>_(e,e.filepath,l.createUncachedDescriptors)),A=(0,u.makeWeakCache)(e=>(0,u.makeStrongCache)(t=>C(e,e.filepath,l.createUncachedDescriptors,t))),S=(0,u.makeWeakCache)(e=>(0,u.makeStrongCache)(t=>P(e,e.filepath,l.createUncachedDescriptors,t))),w=(0,u.makeWeakCache)(e=>(0,u.makeStrongCache)(t=>(0,u.makeStrongCache)(r=>D(e,e.filepath,l.createUncachedDescriptors,t,r))));function _({dirname:e,options:t},r,n){return n(e,t,r)}function C({dirname:e,options:t},r,n,i){const s=t.env&&t.env[i];return s?n(e,s,`${r}.env["${i}"]`):null}function P({dirname:e,options:t},r,n,i){const s=t.overrides&&t.overrides[i];if(!s)throw new Error("Assertion failure - missing override");return n(e,s,`${r}.overrides[${i}]`)}function D({dirname:e,options:t},r,n,i,s){const o=t.overrides&&t.overrides[i];if(!o)throw new Error("Assertion failure - missing override");const a=o.env&&o.env[s];return a?n(e,a,`${r}.overrides[${i}].env["${s}"]`):null}function k({root:e,env:t,overrides:r,overridesEnv:n}){return(i,s,o=new Set)=>{const{dirname:a}=i,u=[],l=e(i);if(I(l,a,s)){u.push(l);const e=t(i,s.envName);e&&I(e,a,s)&&u.push(e),(l.options.overrides||[]).forEach((e,t)=>{const o=r(i,t);if(I(o,a,s)){u.push(o);const e=n(i,t,s.envName);e&&I(e,a,s)&&u.push(e)}})}if(u.some(({options:{ignore:e,only:t}})=>R(s,e,t,a)))return null;const c={options:[],presets:[],plugins:[]};for(const e of u){if(!O(c,e.options,a,s,o))return null;j(c,e)}return c}}function O(e,t,r,n,i){if(void 0===t.extends)return!0;const s=(0,a.loadConfig)(t.extends,r,n.envName,n.caller);if(i.has(s))throw new Error(`Configuration cycle detected loading ${s.filepath}.\n`+"File already loaded following the config chain:\n"+Array.from(i,e=>` - ${e.filepath}`).join("\n"));i.add(s);const o=x(v(s),n,i);return i.delete(s),!!o&&(F(e,o),!0)}function F(e,t){return e.options.push(...t.options),e.plugins.push(...t.plugins),e.presets.push(...t.presets),e}function j(e,{options:t,plugins:r,presets:n}){return e.options.push(t),e.plugins.push(...r()),e.presets.push(...n()),e}function N(e){const t=Object.assign({},e);return delete t.extends,delete t.env,delete t.overrides,delete t.plugins,delete t.presets,delete t.passPerPreset,delete t.ignore,delete t.only,delete t.test,delete t.include,delete t.exclude,t.hasOwnProperty("sourceMap")&&(t.sourceMaps=t.sourceMap,delete t.sourceMap),t}function L(e){const t=new Map,r=[];for(const n of e)if("function"==typeof n.value){const e=n.value;let i=t.get(e);i||(i=new Map,t.set(e,i));let s=i.get(n.name);s?s.value=n:(s={value:n},r.push(s),n.ownPass||i.set(n.name,s))}else r.push({value:n});return r.reduce((e,t)=>(e.push(t.value),e),[])}function I({options:e},t,r){return(void 0===e.test||B(r,e.test,t))&&(void 0===e.include||B(r,e.include,t))&&(void 0===e.exclude||!B(r,e.exclude,t))}function B(e,t,r){return M(e,Array.isArray(t)?t:[t],r)}function R(e,t,r,n){return t&&M(e,t,n)?(p("Ignored %o because it matched one of %O from %o",e.filename,t,n),!0):!(!r||M(e,r,n))&&(p("Ignored %o because it failed to match one of %O from %o",e.filename,r,n),!0)}function M(e,t,r){return t.some(t=>U(t,r,e.filename,e))}function U(e,t,r,n){if("function"==typeof e)return!!e(r,{dirname:t,envName:n.envName,caller:n.caller});if("string"!=typeof r)throw new Error("Configuration contains string/RegExp pattern, but no filename was passed to Babel");return"string"==typeof e&&(e=(0,o.default)(e,t)),e.test(r)}},{"./caching":3,"./config-descriptors":5,"./files":6,"./pattern-to-regex":13,"./validation/options":17,debug:418,path:693}],5:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.createCachedDescriptors=function(e,t,r){const{plugins:n,presets:i,passPerPreset:s}=t;return{options:t,plugins:n?()=>l(n,e)(r):()=>[],presets:i?()=>a(i,e)(r)(!!s):()=>[]}},r.createUncachedDescriptors=function(e,t,r){let n,i;return{options:t,plugins:()=>(n||(n=h(t.plugins||[],e,r)),n),presets:()=>(i||(i=f(t.presets||[],e,r,!!t.passPerPreset)),i)}},r.createDescriptor=m;var n=e("./files"),i=e("./item"),s=e("./caching");const o=new WeakMap,a=(0,s.makeWeakCache)((e,t)=>{const r=t.using(e=>e);return(0,s.makeStrongCache)(t=>(0,s.makeStrongCache)(n=>f(e,r,t,n).map(e=>p(o,e))))}),u=new WeakMap,l=(0,s.makeWeakCache)((e,t)=>{const r=t.using(e=>e);return(0,s.makeStrongCache)(t=>h(e,r,t).map(e=>p(u,e)))}),c={};function p(e,t){const{value:r,options:n=c}=t;if(!1===n)return t;let i=e.get(r);i||(i=new WeakMap,e.set(r,i));let s=i.get(n);if(s||(s=[],i.set(n,s)),-1===s.indexOf(t)){const e=s.filter(e=>(o=e,a=t,o.name===a.name&&o.value===a.value&&o.options===a.options&&o.dirname===a.dirname&&o.alias===a.alias&&o.ownPass===a.ownPass&&(o.file&&o.file.request)===(a.file&&a.file.request)&&(o.file&&o.file.resolved)===(a.file&&a.file.resolved)));if(e.length>0)return e[0];s.push(t)}var o,a;return t}function f(e,t,r,n){return d("preset",e,t,r,n)}function h(e,t,r){return d("plugin",e,t,r)}function d(e,t,r,n,i){const s=t.map((t,s)=>m(t,r,{type:e,alias:`${n}$${s}`,ownPass:!!i}));return function(e){const t=new Map;for(const r of e){if("function"!=typeof r.value)continue;let e=t.get(r.value);if(e||(e=new Set,t.set(r.value,e)),e.has(r.name))throw new Error(["Duplicate plugin/preset detected.","If you'd like to use two separate instances of a plugin,","they need separate names, e.g.","","  plugins: [","    ['some-plugin', {}],","    ['some-plugin', {}, 'some unique name'],","  ]"].join("\n"));e.add(r.name)}}(s),s}function m(e,t,{type:r,alias:s,ownPass:o}){const a=(0,i.getItemDescriptor)(e);if(a)return a;let u,l,c=e;Array.isArray(c)&&(3===c.length?[c,l,u]=c:[c,l]=c);let p=void 0,f=null;if("string"==typeof c){if("string"!=typeof r)throw new Error("To resolve a string-based item, the type of item must be given");const e="plugin"===r?n.loadPlugin:n.loadPreset,i=c;({filepath:f,value:c}=e(c,t)),p={request:i,resolved:f}}if(!c)throw new Error(`Unexpected falsy value: ${String(c)}`);if("object"==typeof c&&c.__esModule){if(!c.default)throw new Error("Must export a default export when using ES6 modules.");c=c.default}if("object"!=typeof c&&"function"!=typeof c)throw new Error(`Unsupported format: ${typeof c}. Expected an object or a function.`);if(null!==f&&"object"==typeof c&&c)throw new Error(`Plugin/Preset files are not allowed to export objects, only functions. In ${f}`);return{name:u,alias:f||s,value:c,options:l,dirname:t,ownPass:o,file:p}}},{"./caching":3,"./files":6,"./item":11}],6:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.findConfigUpwards=function(e){return null},r.findPackageData=function(e){return{filepath:e,directories:[],pkg:null,isPackage:!1}},r.findRelativeConfig=function(e,t,r){return{pkg:null,config:null,ignore:null}},r.findRootConfig=function(e,t,r){return null},r.loadConfig=function(e,t,r,n){throw new Error(`Cannot load ${e} relative to ${t} in a browser`)},r.resolvePlugin=function(e,t){return null},r.resolvePreset=function(e,t){return null},r.loadPlugin=function(e,t){throw new Error(`Cannot load plugin ${e} relative to ${t} in a browser`)},r.loadPreset=function(e,t){throw new Error(`Cannot load preset ${e} relative to ${t} in a browser`)}},{}],7:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){const t=(0,h.default)(e);if(!t)return null;const{options:r,context:i}=t,s={},a=[[]];try{const{plugins:e,presets:t}=r;if(!e||!t)throw new Error("Assertion failure - plugins and presets exist");const u=function e(t,r){const o=t.plugins.reduce((e,t)=>(!1!==t.options&&e.push(y(t,i)),e),[]),u=t.presets.reduce((e,t)=>(!1!==t.options&&e.push({preset:b(t,i),pass:t.ownPass?[]:r}),e),[]);if(u.length>0){a.splice(1,0,...u.map(e=>e.pass).filter(e=>e!==r));for(const t of u){const{preset:r,pass:i}=t;if(!r)return!0;const o=e({plugins:r.plugins,presets:r.presets},i);if(o)return!0;r.options.forEach(e=>{(0,n.mergeOptions)(s,e)})}}o.length>0&&r.unshift(...o)}({plugins:e.map(e=>{const t=(0,o.getItemDescriptor)(e);if(!t)throw new Error("Assertion failure - must be config item");return t}),presets:t.map(e=>{const t=(0,o.getItemDescriptor)(e);if(!t)throw new Error("Assertion failure - must be config item");return t})},a[0]);if(u)return null}catch(e){throw/^\[BABEL\]/.test(e.message)||(e.message=`[BABEL] ${i.filename||"unknown"}: ${e.message}`),e}const u=s;return(0,n.mergeOptions)(u,r),u.plugins=a[0],u.presets=a.slice(1).filter(e=>e.length>0).map(e=>({plugins:e})),u.passPerPreset=u.presets.length>0,{options:u,passes:a}};var n=e("./util"),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(e("../index")),s=d(e("./plugin")),o=e("./item"),a=e("./config-chain");function u(){const t=d(e("@babel/traverse"));return u=function(){return t},t}var l=e("./caching"),c=e("./validation/options"),p=e("./validation/plugins"),f=d(e("./helpers/config-api")),h=d(e("./partial"));function d(e){return e&&e.__esModule?e:{default:e}}const m=(0,l.makeWeakCache)(({value:e,options:t,dirname:r,alias:n},s)=>{if(!1===t)throw new Error("Assertion failure");t=t||{};let o=e;if("function"==typeof e){const a=Object.assign({},i,(0,f.default)(s));try{o=e(a,t,r)}catch(e){throw n&&(e.message+=` (While processing: ${JSON.stringify(n)})`),e}}if(!o||"object"!=typeof o)throw new Error("Plugin/Preset did not return an object.");if("function"==typeof o.then)throw new Error("You appear to be using an async plugin, which your current version of Babel does not support.If you're using a published plugin, you may need to upgrade your @babel/core version.");return{value:o,options:t,dirname:r,alias:n}});function y(e,t){if(e.value instanceof s.default){if(e.options)throw new Error("Passed options to an existing Plugin instance will not work.");return e.value}return g(m(e,t),t)}const g=(0,l.makeWeakCache)(({value:e,options:t,dirname:r,alias:n},i)=>{const o=(0,p.validatePluginObject)(e),a=Object.assign({},o);if(a.visitor&&(a.visitor=u().default.explode(Object.assign({},a.visitor))),a.inherits){const e={name:void 0,alias:`${n}$inherits`,value:a.inherits,options:t,dirname:r},s=i.invalidate(t=>y(e,t));a.pre=E(s.pre,a.pre),a.post=E(s.post,a.post),a.manipulateOptions=E(s.manipulateOptions,a.manipulateOptions),a.visitor=u().default.visitors.merge([s.visitor||{},a.visitor||{}])}return new s.default(a,t,n)}),b=(e,t)=>(0,a.buildPresetChain)(v(m(e,t)),t),v=(0,l.makeWeakCache)(({value:e,dirname:t,alias:r})=>({options:(0,c.validate)("preset",e),alias:r,dirname:t}));function E(e,t){const r=[e,t].filter(Boolean);return r.length<=1?r[0]:function(...e){for(const t of r)t.apply(this,e)}}},{"../index":20,"./caching":3,"./config-chain":4,"./helpers/config-api":8,"./item":11,"./partial":12,"./plugin":14,"./util":15,"./validation/options":17,"./validation/plugins":18,"@babel/traverse":73}],8:[function(e,t,r){"use strict";function n(){const t=(r=e("semver"))&&r.__esModule?r:{default:r};var r;return n=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return{version:i.version,cache:e.simple(),env:t=>e.using(e=>void 0===t?e.envName:"function"==typeof t?(0,s.assertSimpleType)(t(e.envName)):(Array.isArray(t)||(t=[t]),t.some(t=>{if("string"!=typeof t)throw new Error("Unexpected non-string value");return t===e.envName}))),async:()=>!1,caller:t=>e.using(e=>(0,s.assertSimpleType)(t(e.caller))),assertVersion:o,tokTypes:void 0}};var i=e("../../"),s=e("../caching");function o(e){if("number"==typeof e){if(!Number.isInteger(e))throw new Error("Expected string or integer value.");e=`^${e}.0.0-0`}if("string"!=typeof e)throw new Error("Expected string or integer value.");if(n().default.satisfies(i.version,e))return;const t=Error.stackTraceLimit;"number"==typeof t&&t<25&&(Error.stackTraceLimit=25);const r=new Error(`Requires Babel "${e}", but was loaded with "${i.version}". `+'If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error to look for the first entry that doesn\'t mention "@babel/core" or "babel-core" to see what is calling Babel.');throw"number"==typeof t&&(Error.stackTraceLimit=t),Object.assign(r,{code:"BABEL_VERSION_UNSUPPORTED",version:i.version,range:e})}},{"../../":20,"../caching":3,semver:659}],9:[function(e,t,r){(function(e){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.getEnv=function(t="development"){return e.env.BABEL_ENV||e.env.NODE_ENV||t}}).call(this,e("_process"))},{_process:695}],10:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.loadOptions=function(e){const t=(0,i.default)(e);return t?t.options:null},Object.defineProperty(r,"default",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(r,"loadPartialConfig",{enumerable:!0,get:function(){return s.loadPartialConfig}});var n,i=(n=e("./full"))&&n.__esModule?n:{default:n},s=e("./partial")},{"./full":7,"./partial":12}],11:[function(e,t,r){"use strict";function n(){const t=(r=e("path"))&&r.__esModule?r:{default:r};var r;return n=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.createItemFromDescriptor=s,r.createConfigItem=function(e,{dirname:t=".",type:r}={}){return s((0,i.createDescriptor)(e,n().default.resolve(t),{type:r,alias:"programmatic item"}))},r.getItemDescriptor=function(e){if(e instanceof o)return e._descriptor;return};var i=e("./config-descriptors");function s(e){return new o(e)}class o{constructor(e){this._descriptor=e,Object.defineProperty(this,"_descriptor",{enumerable:!1}),this.value=this._descriptor.value,this.options=this._descriptor.options,this.dirname=this._descriptor.dirname,this.name=this._descriptor.name,this.file=this._descriptor.file?{request:this._descriptor.file.request,resolved:this._descriptor.file.resolved}:void 0,Object.freeze(this)}}Object.freeze(o.prototype)},{"./config-descriptors":5,path:693}],12:[function(e,t,r){"use strict";function n(){const t=p(e("path"));return n=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.default=f,r.loadPartialConfig=function(e){const t=f(e);if(!t)return null;const{options:r,babelrc:n,ignore:s,config:o}=t;return(r.plugins||[]).forEach(e=>{if(e.value instanceof i.default)throw new Error("Passing cached plugin instances is not supported in babel.loadPartialConfig()")}),new h(r,n?n.filepath:void 0,s?s.filepath:void 0,o?o.filepath:void 0)};var i=p(e("./plugin")),s=e("./util"),o=e("./item"),a=e("./config-chain"),u=e("./helpers/environment"),l=e("./validation/options"),c=e("./files");function p(e){return e&&e.__esModule?e:{default:e}}function f(e){if(null!=e&&("object"!=typeof e||Array.isArray(e)))throw new Error("Babel options must be an object, null, or undefined");const t=e?(0,l.validate)("arguments",e):{},{envName:r=(0,u.getEnv)(),cwd:i=".",root:p=".",rootMode:f="root",caller:h}=t,d=n().default.resolve(i),m=function(e,t){switch(t){case"root":return e;case"upward-optional":{const t=(0,c.findConfigUpwards)(e);return null===t?e:t}case"upward":{const t=(0,c.findConfigUpwards)(e);if(null!==t)return t;throw Object.assign(new Error('Babel was run with rootMode:"upward" but a root could not '+`be found when searching upward from "${e}"`),{code:"BABEL_ROOT_NOT_FOUND",dirname:e})}default:throw new Error("Assertion failure - unknown rootMode value")}}(n().default.resolve(d,p),f),y={filename:"string"==typeof t.filename?n().default.resolve(i,t.filename):void 0,cwd:d,root:m,envName:r,caller:h},g=(0,a.buildRootChain)(t,y);if(!g)return null;const b={};return g.options.forEach(e=>{(0,s.mergeOptions)(b,e)}),b.babelrc=!1,b.configFile=!1,b.passPerPreset=!1,b.envName=y.envName,b.cwd=y.cwd,b.root=y.root,b.filename="string"==typeof y.filename?y.filename:void 0,b.plugins=g.plugins.map(e=>(0,o.createItemFromDescriptor)(e)),b.presets=g.presets.map(e=>(0,o.createItemFromDescriptor)(e)),{options:b,context:y,ignore:g.ignore,babelrc:g.babelrc,config:g.config}}class h{constructor(e,t,r,n){this.options=e,this.babelignore=r,this.babelrc=t,this.config=n,Object.freeze(this)}hasFilesystemConfig(){return void 0!==this.babelrc||void 0!==this.config}}Object.freeze(h.prototype)},{"./config-chain":4,"./files":6,"./helpers/environment":9,"./item":11,"./plugin":14,"./util":15,"./validation/options":17,path:693}],13:[function(e,t,r){"use strict";function n(){const t=s(e("path"));return n=function(){return t},t}function i(){const t=s(e("lodash/escapeRegExp"));return i=function(){return t},t}function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t){const r=n().default.resolve(t,e).split(n().default.sep);return new RegExp(["^",...r.map((e,t)=>{const n=t===r.length-1;return"**"===e?n?f:p:"*"===e?n?c:l:0===e.indexOf("*.")?u+(0,i().default)(e.slice(1))+(n?a:o):(0,i().default)(e)+(n?a:o)})].join(""))};const o=`\\${n().default.sep}`,a=`(?:${o}|$)`,u=`[^${o}]+`,l=`(?:${u}${o})`,c=`(?:${u}${a})`,p=`${l}*?`,f=`${l}*?${c}?`},{"lodash/escapeRegExp":594,path:693}],14:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;r.default=class{constructor(e,t,r){this.key=e.name||r,this.manipulateOptions=e.manipulateOptions,this.post=e.post,this.pre=e.pre,this.visitor=e.visitor||{},this.parserOverride=e.parserOverride,this.generatorOverride=e.generatorOverride,this.options=t}}},{}],15:[function(e,t,r){"use strict";function n(e,t){for(const r of Object.keys(t)){const n=t[r];void 0!==n&&(e[r]=n)}}Object.defineProperty(r,"__esModule",{value:!0}),r.mergeOptions=function(e,t){for(const r of Object.keys(t))if("parserOpts"===r&&t.parserOpts){const r=t.parserOpts,i=e.parserOpts=e.parserOpts||{};n(i,r)}else if("generatorOpts"===r&&t.generatorOpts){const r=t.generatorOpts,i=e.generatorOpts=e.generatorOpts||{};n(i,r)}else{const n=t[r];void 0!==n&&(e[r]=n)}}},{}],16:[function(e,t,r){"use strict";function n(e){switch(e.type){case"root":return"";case"env":return`${n(e.parent)}.env["${e.name}"]`;case"overrides":return`${n(e.parent)}.overrides[${e.index}]`;case"option":return`${n(e.parent)}.${e.name}`;case"access":return`${n(e.parent)}[${JSON.stringify(e.name)}]`;default:throw new Error(`Assertion failure: Unknown type ${e.type}`)}}function i(e,t){return{type:"access",name:t,parent:e}}function s(e,t){if(void 0!==t&&("object"!=typeof t||Array.isArray(t)||!t))throw new Error(`${n(e)} must be an object, or undefined`);return t}function o(e,t){if(null!=t&&!Array.isArray(t))throw new Error(`${n(e)} must be an array, or undefined`);return t}function a(e){return"string"==typeof e||"function"==typeof e||e instanceof RegExp}function u(e,t){if(("object"!=typeof t||!t)&&"string"!=typeof t&&"function"!=typeof t)throw new Error(`${n(e)} must be a string, object, function`);return t}Object.defineProperty(r,"__esModule",{value:!0}),r.msg=n,r.access=i,r.assertRootMode=function(e,t){if(void 0!==t&&"root"!==t&&"upward"!==t&&"upward-optional"!==t)throw new Error(`${n(e)} must be a "root", "upward", "upward-optional" or undefined`);return t},r.assertSourceMaps=function(e,t){if(void 0!==t&&"boolean"!=typeof t&&"inline"!==t&&"both"!==t)throw new Error(`${n(e)} must be a boolean, "inline", "both", or undefined`);return t},r.assertCompact=function(e,t){if(void 0!==t&&"boolean"!=typeof t&&"auto"!==t)throw new Error(`${n(e)} must be a boolean, "auto", or undefined`);return t},r.assertSourceType=function(e,t){if(void 0!==t&&"module"!==t&&"script"!==t&&"unambiguous"!==t)throw new Error(`${n(e)} must be "module", "script", "unambiguous", or undefined`);return t},r.assertCallerMetadata=function(e,t){const r=s(e,t);if(r){if("string"!=typeof r.name)throw new Error(`${n(e)} set but does not contain "name" property string`);for(const t of Object.keys(r)){const s=i(e,t),o=r[t];if(null!=o&&"boolean"!=typeof o&&"string"!=typeof o&&"number"!=typeof o)throw new Error(`${n(s)} must be null, undefined, a boolean, a string, or a number.`)}}return t},r.assertInputSourceMap=function(e,t){if(void 0!==t&&"boolean"!=typeof t&&("object"!=typeof t||!t))throw new Error(`${n(e)} must be a boolean, object, or undefined`);return t},r.assertString=function(e,t){if(void 0!==t&&"string"!=typeof t)throw new Error(`${n(e)} must be a string, or undefined`);return t},r.assertFunction=function(e,t){if(void 0!==t&&"function"!=typeof t)throw new Error(`${n(e)} must be a function, or undefined`);return t},r.assertBoolean=function(e,t){if(void 0!==t&&"boolean"!=typeof t)throw new Error(`${n(e)} must be a boolean, or undefined`);return t},r.assertObject=s,r.assertArray=o,r.assertIgnoreList=function(e,t){const r=o(e,t);r&&r.forEach((t,r)=>(function(e,t){if("string"!=typeof t&&"function"!=typeof t&&!(t instanceof RegExp))throw new Error(`${n(e)} must be an array of string/Funtion/RegExp values, or undefined`);return t})(i(e,r),t));return r},r.assertConfigApplicableTest=function(e,t){if(void 0===t)return t;if(Array.isArray(t))t.forEach((t,r)=>{if(!a(t))throw new Error(`${n(i(e,r))} must be a string/Function/RegExp.`)});else if(!a(t))throw new Error(`${n(e)} must be a string/Function/RegExp, or an array of those`);return t},r.assertConfigFileSearch=function(e,t){if(void 0!==t&&"boolean"!=typeof t&&"string"!=typeof t)throw new Error(`${n(e)} must be a undefined, a boolean, a string, `+`got ${JSON.stringify(t)}`);return t},r.assertBabelrcSearch=function(e,t){if(void 0===t||"boolean"==typeof t)return t;if(Array.isArray(t))t.forEach((t,r)=>{if(!a(t))throw new Error(`${n(i(e,r))} must be a string/Function/RegExp.`)});else if(!a(t))throw new Error(`${n(e)} must be a undefined, a boolean, a string/Function/RegExp `+`or an array of those, got ${JSON.stringify(t)}`);return t},r.assertPluginList=function(e,t){const r=o(e,t);r&&r.forEach((t,r)=>(function(e,t){if(Array.isArray(t)){if(0===t.length)throw new Error(`${n(e)} must include an object`);if(t.length>3)throw new Error(`${n(e)} may only be a two-tuple or three-tuple`);if(u(i(e,0),t[0]),t.length>1){const r=t[1];if(void 0!==r&&!1!==r&&("object"!=typeof r||Array.isArray(r)))throw new Error(`${n(i(e,1))} must be an object, false, or undefined`)}if(3===t.length){const r=t[2];if(void 0!==r&&"string"!=typeof r)throw new Error(`${n(i(e,2))} must be a string, or undefined`)}}else u(e,t);return t})(i(e,r),t));return r}},{}],17:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.validate=function(e,t){return c({type:"root",source:e},t)};s(e("../plugin"));var n=s(e("./removed")),i=e("./option-assertions");function s(e){return e&&e.__esModule?e:{default:e}}const o={cwd:i.assertString,root:i.assertString,rootMode:i.assertRootMode,configFile:i.assertConfigFileSearch,caller:i.assertCallerMetadata,filename:i.assertString,filenameRelative:i.assertString,code:i.assertBoolean,ast:i.assertBoolean,envName:i.assertString},a={babelrc:i.assertBoolean,babelrcRoots:i.assertBabelrcSearch},u={extends:i.assertString,ignore:i.assertIgnoreList,only:i.assertIgnoreList},l={inputSourceMap:i.assertInputSourceMap,presets:i.assertPluginList,plugins:i.assertPluginList,passPerPreset:i.assertBoolean,env:function(e,t){if("env"===e.parent.type)throw new Error(`${(0,i.msg)(e)} is not allowed inside of another .env block`);const r=e.parent,n=(0,i.assertObject)(e,t);if(n)for(const t of Object.keys(n)){const s=(0,i.assertObject)((0,i.access)(e,t),n[t]);if(!s)continue;const o={type:"env",name:t,parent:r};c(o,s)}return n},overrides:function(e,t){if("env"===e.parent.type)throw new Error(`${(0,i.msg)(e)} is not allowed inside an .env block`);if("overrides"===e.parent.type)throw new Error(`${(0,i.msg)(e)} is not allowed inside an .overrides block`);const r=e.parent,n=(0,i.assertArray)(e,t);if(n)for(const[t,s]of n.entries()){const n=(0,i.access)(e,t),o=(0,i.assertObject)(n,s);if(!o)throw new Error(`${(0,i.msg)(n)} must be an object`);const a={type:"overrides",index:t,parent:r};c(a,o)}return n},test:i.assertConfigApplicableTest,include:i.assertConfigApplicableTest,exclude:i.assertConfigApplicableTest,retainLines:i.assertBoolean,comments:i.assertBoolean,shouldPrintComment:i.assertFunction,compact:i.assertCompact,minified:i.assertBoolean,auxiliaryCommentBefore:i.assertString,auxiliaryCommentAfter:i.assertString,sourceType:i.assertSourceType,wrapPluginVisitorMethod:i.assertFunction,highlightCode:i.assertBoolean,sourceMaps:i.assertSourceMaps,sourceMap:i.assertSourceMaps,sourceFileName:i.assertString,sourceRoot:i.assertString,getModuleId:i.assertFunction,moduleRoot:i.assertString,moduleIds:i.assertBoolean,moduleId:i.assertString,parserOpts:i.assertObject,generatorOpts:i.assertObject};function c(e,t){const r=function e(t){return"root"===t.type?t.source:e(t.parent)}(e);return function(e){if(f(e,"sourceMap")&&f(e,"sourceMaps"))throw new Error(".sourceMap is an alias for .sourceMaps, cannot use both")}(t),Object.keys(t).forEach(n=>{const s={type:"option",name:n,parent:e};if("preset"===r&&u[n])throw new Error(`${(0,i.msg)(s)} is not allowed in preset options`);if("arguments"!==r&&o[n])throw new Error(`${(0,i.msg)(s)} is only allowed in root programmatic options`);if("arguments"!==r&&"configfile"!==r&&a[n]){if("babelrcfile"===r||"extendsfile"===r)throw new Error(`${(0,i.msg)(s)} is not allowed in .babelrc or "extends"ed files, only in root programmatic options, `+"or babel.config.js/config file options");throw new Error(`${(0,i.msg)(s)} is only allowed in root programmatic options, or babel.config.js/config file options`)}(l[n]||u[n]||a[n]||o[n]||p)(s,t[n])}),t}function p(e){const t=e.name;if(n.default[t]){const{message:r,version:s=5}=n.default[t];throw new ReferenceError(`Using removed Babel ${s} option: ${(0,i.msg)(e)} - ${r}`)}{const t=`Unknown option: ${(0,i.msg)(e)}. Check out https://babeljs.io/docs/en/babel-core/#options for more information about options.`;throw new ReferenceError(t)}}function f(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},{"../plugin":14,"./option-assertions":16,"./removed":19}],18:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.validatePluginObject=function(e){return Object.keys(e).forEach(t=>{const r=i[t];if(!r)throw new Error(`.${t} is not a valid Plugin property`);r(t,e[t])}),e};var n=e("./option-assertions");const i={name:n.assertString,manipulateOptions:n.assertFunction,pre:n.assertFunction,post:n.assertFunction,inherits:n.assertFunction,visitor:function(e,t){const r=(0,n.assertObject)(e,t);if(r&&(Object.keys(r).forEach(e=>(function(e,t){if(t&&"object"==typeof t)Object.keys(t).forEach(t=>{if("enter"!==t&&"exit"!==t)throw new Error(`.visitor["${e}"] may only have .enter and/or .exit handlers.`)});else if("function"!=typeof t)throw new Error(`.visitor["${e}"] must be a function`);return t})(e,r[e])),r.enter||r.exit))throw new Error(`.${e} cannot contain catch-all "enter" or "exit" handlers. Please target individual nodes.`);return r},parserOverride:n.assertFunction,generatorOverride:n.assertFunction}},{"./option-assertions":16}],19:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;r.default={auxiliaryComment:{message:"Use `auxiliaryCommentBefore` or `auxiliaryCommentAfter`"},blacklist:{message:"Put the specific transforms you want in the `plugins` option"},breakConfig:{message:"This is not a necessary option in Babel 6"},experimental:{message:"Put the specific transforms you want in the `plugins` option"},externalHelpers:{message:"Use the `external-helpers` plugin instead. Check out http://babeljs.io/docs/plugins/external-helpers/"},extra:{message:""},jsxPragma:{message:"use the `pragma` option in the `react-jsx` plugin. Check out http://babeljs.io/docs/plugins/transform-react-jsx/"},loose:{message:"Specify the `loose` option for the relevant plugin you are using or use a preset that sets the option."},metadataUsedHelpers:{message:"Not required anymore as this is enabled by default"},modules:{message:"Use the corresponding module transform plugin in the `plugins` option. Check out http://babeljs.io/docs/plugins/#modules"},nonStandard:{message:"Use the `react-jsx` and `flow-strip-types` plugins to support JSX and Flow. Also check out the react preset http://babeljs.io/docs/plugins/preset-react/"},optional:{message:"Put the specific transforms you want in the `plugins` option"},sourceMapName:{message:"The `sourceMapName` option has been removed because it makes more sense for the tooling that calls Babel to assign `map.file` themselves."},stage:{message:"Check out the corresponding stage-x presets http://babeljs.io/docs/plugins/#presets"},whitelist:{message:"Put the specific transforms you want in the `plugins` option"},resolveModuleSource:{version:6,message:"Use `babel-plugin-module-resolver@3`'s 'resolvePath' options"},metadata:{version:6,message:"Generated plugin metadata is always included in the output result"},sourceMapTarget:{version:6,message:"The `sourceMapTarget` option has been removed because it makes more sense for the tooling that calls Babel to assign `map.file` themselves."}}},{}],20:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.Plugin=function(e){throw new Error(`The (${e}) Babel 5 plugin is being run with an unsupported Babel version.`)},Object.defineProperty(r,"File",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(r,"buildExternalHelpers",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(r,"resolvePlugin",{enumerable:!0,get:function(){return s.resolvePlugin}}),Object.defineProperty(r,"resolvePreset",{enumerable:!0,get:function(){return s.resolvePreset}}),Object.defineProperty(r,"version",{enumerable:!0,get:function(){return o.version}}),Object.defineProperty(r,"getEnv",{enumerable:!0,get:function(){return a.getEnv}}),Object.defineProperty(r,"tokTypes",{enumerable:!0,get:function(){return function(){const t=e("@babel/parser");(function(){return t});return t}().tokTypes}}),Object.defineProperty(r,"traverse",{enumerable:!0,get:function(){return function(){const t=m(e("@babel/traverse"));(function(){return t});return t}().default}}),Object.defineProperty(r,"template",{enumerable:!0,get:function(){return function(){const t=m(e("@babel/template"));(function(){return t});return t}().default}}),Object.defineProperty(r,"createConfigItem",{enumerable:!0,get:function(){return l.createConfigItem}}),Object.defineProperty(r,"loadPartialConfig",{enumerable:!0,get:function(){return c.loadPartialConfig}}),Object.defineProperty(r,"loadOptions",{enumerable:!0,get:function(){return c.loadOptions}}),Object.defineProperty(r,"transform",{enumerable:!0,get:function(){return p.transform}}),Object.defineProperty(r,"transformSync",{enumerable:!0,get:function(){return p.transformSync}}),Object.defineProperty(r,"transformAsync",{enumerable:!0,get:function(){return p.transformAsync}}),Object.defineProperty(r,"transformFile",{enumerable:!0,get:function(){return f.transformFile}}),Object.defineProperty(r,"transformFileSync",{enumerable:!0,get:function(){return f.transformFileSync}}),Object.defineProperty(r,"transformFileAsync",{enumerable:!0,get:function(){return f.transformFileAsync}}),Object.defineProperty(r,"transformFromAst",{enumerable:!0,get:function(){return h.transformFromAst}}),Object.defineProperty(r,"transformFromAstSync",{enumerable:!0,get:function(){return h.transformFromAstSync}}),Object.defineProperty(r,"transformFromAstAsync",{enumerable:!0,get:function(){return h.transformFromAstAsync}}),Object.defineProperty(r,"parse",{enumerable:!0,get:function(){return d.parse}}),Object.defineProperty(r,"parseSync",{enumerable:!0,get:function(){return d.parseSync}}),Object.defineProperty(r,"parseAsync",{enumerable:!0,get:function(){return d.parseAsync}}),r.types=r.OptionManager=r.DEFAULT_EXTENSIONS=void 0;var n=m(e("./transformation/file/file")),i=m(e("./tools/build-external-helpers")),s=e("./config/files"),o=e("../package.json"),a=e("./config/helpers/environment");function u(){const t=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(e("@babel/types"));return u=function(){return t},t}Object.defineProperty(r,"types",{enumerable:!0,get:function(){return u()}});var l=e("./config/item"),c=e("./config"),p=e("./transform"),f=e("./transform-file"),h=e("./transform-ast"),d=e("./parse");function m(e){return e&&e.__esModule?e:{default:e}}const y=Object.freeze([".js",".jsx",".es6",".es",".mjs"]);r.DEFAULT_EXTENSIONS=y;r.OptionManager=class{init(e){return(0,c.loadOptions)(e)}}},{"../package.json":35,"./config":10,"./config/files":6,"./config/helpers/environment":9,"./config/item":11,"./parse":21,"./tools/build-external-helpers":22,"./transform":25,"./transform-ast":23,"./transform-file":24,"./transformation/file/file":27,"@babel/parser":61,"@babel/template":64,"@babel/traverse":73,"@babel/types":135}],21:[function(e,t,r){(function(t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.parseSync=u,r.parseAsync=function(e,t){return new Promise((r,n)=>{a(e,t,(e,t)=>{null==e?r(t):n(e)})})},r.parse=void 0;var n=o(e("./config")),i=o(e("./transformation/normalize-file")),s=o(e("./transformation/normalize-opts"));function o(e){return e&&e.__esModule?e:{default:e}}const a=function(e,r,o){if("function"==typeof r&&(o=r,r=void 0),void 0===o)return u(e,r);if(null===(0,n.default)(r))return null;const a=o;t.nextTick(()=>{let t=null;try{const o=(0,n.default)(r);if(null===o)return a(null,null);t=(0,i.default)(o.passes,(0,s.default)(o),e).ast}catch(e){return a(e)}a(null,t)})};function u(e,t){const r=(0,n.default)(t);return null===r?null:(0,i.default)(r.passes,(0,s.default)(r),e).ast}r.parse=a}).call(this,e("_process"))},{"./config":10,"./transformation/normalize-file":31,"./transformation/normalize-opts":32,_process:695}],22:[function(e,t,r){"use strict";function n(){const t=u(e("@babel/helpers"));return n=function(){return t},t}function i(){const t=a(e("@babel/generator"));return i=function(){return t},t}function s(){const t=a(e("@babel/template"));return s=function(){return t},t}function o(){const t=u(e("@babel/types"));return o=function(){return t},t}function a(e){return e&&e.__esModule?e:{default:e}}function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t="global"){let r;const n={global:c,module:p,umd:f,var:h}[t];if(!n)throw new Error(`Unsupported output type ${t}`);r=n(e);return(0,i().default)(r).code};const l=e=>s().default`
    (function (root, factory) {
      if (typeof define === "function" && define.amd) {
        define(AMD_ARGUMENTS, factory);
      } else if (typeof exports === "object") {
        factory(COMMON_ARGUMENTS);
      } else {
        factory(BROWSER_ARGUMENTS);
      }
    })(UMD_ROOT, function (FACTORY_PARAMETERS) {
      FACTORY_BODY
    });
  `(e);function c(e){const t=o().identifier("babelHelpers"),r=[],n=o().functionExpression(null,[o().identifier("global")],o().blockStatement(r)),i=o().program([o().expressionStatement(o().callExpression(n,[o().conditionalExpression(o().binaryExpression("===",o().unaryExpression("typeof",o().identifier("global")),o().stringLiteral("undefined")),o().identifier("self"),o().identifier("global"))]))]);return r.push(o().variableDeclaration("var",[o().variableDeclarator(t,o().assignmentExpression("=",o().memberExpression(o().identifier("global"),t),o().objectExpression([])))])),d(r,t,e),i}function p(e){const t=[],r=d(t,null,e);return t.unshift(o().exportNamedDeclaration(null,Object.keys(r).map(e=>o().exportSpecifier(o().cloneNode(r[e]),o().identifier(e))))),o().program(t,[],"module")}function f(e){const t=o().identifier("babelHelpers"),r=[];return r.push(o().variableDeclaration("var",[o().variableDeclarator(t,o().identifier("global"))])),d(r,t,e),o().program([l({FACTORY_PARAMETERS:o().identifier("global"),BROWSER_ARGUMENTS:o().assignmentExpression("=",o().memberExpression(o().identifier("root"),t),o().objectExpression([])),COMMON_ARGUMENTS:o().identifier("exports"),AMD_ARGUMENTS:o().arrayExpression([o().stringLiteral("exports")]),FACTORY_BODY:r,UMD_ROOT:o().identifier("this")})])}function h(e){const t=o().identifier("babelHelpers"),r=[];r.push(o().variableDeclaration("var",[o().variableDeclarator(t,o().objectExpression([]))]));const n=o().program(r);return d(r,t,e),r.push(o().expressionStatement(t)),n}function d(e,t,r){const i=e=>t?o().memberExpression(t,o().identifier(e)):o().identifier(`_${e}`),s={};return n().list.forEach(function(t){if(r&&r.indexOf(t)<0)return;const o=s[t]=i(t),{nodes:a}=n().get(t,i,o);e.push(...a)}),s}},{"@babel/generator":49,"@babel/helpers":59,"@babel/template":64,"@babel/types":135}],23:[function(e,t,r){(function(t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.transformFromAstSync=a,r.transformFromAstAsync=function(e,t,r){return new Promise((n,i)=>{o(e,t,r,(e,t)=>{null==e?n(t):i(e)})})},r.transformFromAst=void 0;var n,i=(n=e("./config"))&&n.__esModule?n:{default:n},s=e("./transformation");const o=function(e,r,n,o){if("function"==typeof n&&(o=n,n=void 0),void 0===o)return a(e,r,n);const u=o;t.nextTick(()=>{let t;try{if(null===(t=(0,i.default)(n)))return u(null,null)}catch(e){return u(e)}if(!e)return u(new Error("No AST given"));(0,s.runAsync)(t,r,e,u)})};function a(e,t,r){const n=(0,i.default)(r);if(null===n)return null;if(!e)throw new Error("No AST given");return(0,s.runSync)(n,t,e)}r.transformFromAst=o}).call(this,e("_process"))},{"./config":10,"./transformation":30,_process:695}],24:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.transformFileSync=function(){throw new Error("Transforming files is not supported in browsers")},r.transformFileAsync=function(){return Promise.reject(new Error("Transforming files is not supported in browsers"))},r.transformFile=void 0;r.transformFile=function(e,t,r){"function"==typeof t&&(r=t),r(new Error("Transforming files is not supported in browsers"),null)}},{}],25:[function(e,t,r){(function(t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.transformSync=a,r.transformAsync=function(e,t){return new Promise((r,n)=>{o(e,t,(e,t)=>{null==e?r(t):n(e)})})},r.transform=void 0;var n,i=(n=e("./config"))&&n.__esModule?n:{default:n},s=e("./transformation");const o=function(e,r,n){if("function"==typeof r&&(n=r,r=void 0),void 0===n)return a(e,r);const o=n;t.nextTick(()=>{let t;try{if(null===(t=(0,i.default)(r)))return o(null,null)}catch(e){return o(e)}(0,s.runAsync)(t,e,null,o)})};function a(e,t){const r=(0,i.default)(t);return null===r?null:(0,s.runSync)(r,e)}r.transform=o}).call(this,e("_process"))},{"./config":10,"./transformation":30,_process:695}],26:[function(e,t,r){"use strict";function n(){const t=s(e("lodash/sortBy"));return n=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(){if(!o){const e=(0,i.default)({babelrc:!1,configFile:!1,plugins:[a]});if(!(o=e?e.passes[0][0]:void 0))throw new Error("Assertion failure")}return o};var i=s(e("../config"));function s(e){return e&&e.__esModule?e:{default:e}}let o;const a={name:"internal.blockHoist",visitor:{Block:{exit({node:e}){let t=!1;for(let r=0;r<e.body.length;r++){const n=e.body[r];if(n&&null!=n._blockHoist){t=!0;break}}t&&(e.body=(0,n().default)(e.body,function(e){let t=e&&e._blockHoist;return null==t&&(t=1),!0===t&&(t=2),-1*t}))}}}}},{"../config":10,"lodash/sortBy":621}],27:[function(e,t,r){"use strict";function n(){const t=u(e("@babel/helpers"));return n=function(){return t},t}function i(){const t=u(e("@babel/traverse"));return i=function(){return t},t}function s(){const t=e("@babel/code-frame");return s=function(){return t},t}function o(){const t=u(e("@babel/types"));return o=function(){return t},t}function a(){const t=(r=e("semver"))&&r.__esModule?r:{default:r};var r;return a=function(){return t},t}function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;const l={enter(e,t){const r=e.node.loc;r&&(t.loc=r,e.stop())}};r.default=class{constructor(e,{code:t,ast:r,inputMap:n}){this._map=new Map,this.declarations={},this.path=null,this.ast={},this.metadata={},this.code="",this.inputMap=null,this.hub={file:this,getCode:()=>this.code,getScope:()=>this.scope,addHelper:this.addHelper.bind(this),buildError:this.buildCodeFrameError.bind(this)},this.opts=e,this.code=t,this.ast=r,this.inputMap=n,this.path=i().NodePath.get({hub:this.hub,parentPath:null,parent:this.ast,container:this.ast,key:"program"}).setContext(),this.scope=this.path.scope}get shebang(){const{interpreter:e}=this.path.node;return e?e.value:""}set shebang(e){e?this.path.get("interpreter").replaceWith(o().interpreterDirective(e)):this.path.get("interpreter").remove()}set(e,t){if("helpersNamespace"===e)throw new Error("Babel 7.0.0-beta.56 has dropped support for the 'helpersNamespace' utility.If you are using @babel/plugin-external-helpers you will need to use a newer version than the one you currently have installed. If you have your own implementation, you'll want to explore using 'helperGenerator' alongside 'file.availableHelper()'.");this._map.set(e,t)}get(e){return this._map.get(e)}has(e){return this._map.has(e)}getModuleName(){const{filename:e,filenameRelative:t=e,moduleId:r,moduleIds:n=!!r,getModuleId:i,sourceRoot:s,moduleRoot:o=s,sourceRoot:a=o}=this.opts;if(!n)return null;if(null!=r&&!i)return r;let u=null!=o?o+"/":"";if(t){const e=null!=a?new RegExp("^"+a+"/?"):"";u+=t.replace(e,"").replace(/\.(\w*?)$/,"")}return u=u.replace(/\\/g,"/"),i&&i(u)||u}addImport(){throw new Error("This API has been removed. If you're looking for this functionality in Babel 7, you should import the '@babel/helper-module-imports' module and use the functions exposed  from that module, such as 'addNamed' or 'addDefault'.")}availableHelper(e,t){let r;try{r=n().minVersion(e)}catch(e){if("BABEL_HELPER_UNKNOWN"!==e.code)throw e;return!1}return"string"!=typeof t||(a().default.valid(t)&&(t=`^${t}`),!a().default.intersects(`<${r}`,t)&&!a().default.intersects(">=8.0.0",t))}addHelper(e){const t=this.declarations[e];if(t)return o().cloneNode(t);const r=this.get("helperGenerator");if(r){const t=r(e);if(t)return t}const i=this.declarations[e]=this.scope.generateUidIdentifier(e),s={};for(const t of n().getDependencies(e))s[t]=this.addHelper(t);const{nodes:a,globals:u}=n().get(e,e=>s[e],i,Object.keys(this.scope.getAllBindings()));return u.forEach(e=>{this.path.scope.hasBinding(e,!0)&&this.path.scope.rename(e)}),a.forEach(e=>{e._compact=!0}),this.path.unshiftContainer("body",a),this.path.get("body").forEach(e=>{-1!==a.indexOf(e.node)&&e.isVariableDeclaration()&&this.scope.registerDeclaration(e)}),i}addTemplateObject(){throw new Error("This function has been moved into the template literal transform itself.")}buildCodeFrameError(e,t,r=SyntaxError){let n=e&&(e.loc||e._loc);if(t=`${this.opts.filename}: ${t}`,!n&&e){const r={loc:null};(0,i().default)(e,l,this.scope,r);let s="This is an error on an internal node. Probably an internal error.";(n=r.loc)&&(s+=" Location has been estimated."),t+=` (${s})`}if(n){const{highlightCode:e=!0}=this.opts;t+="\n"+(0,s().codeFrameColumns)(this.code,{start:{line:n.start.line,column:n.start.column+1}},{highlightCode:e})}return new r(t)}}},{"@babel/code-frame":2,"@babel/helpers":59,"@babel/traverse":73,"@babel/types":135,semver:659}],28:[function(e,t,r){"use strict";function n(){const t=o(e("convert-source-map"));return n=function(){return t},t}function i(){const t=o(e("@babel/generator"));return i=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t){const{opts:r,ast:o,code:a,inputMap:u}=t,l=[];for(const t of e)for(const e of t){const{generatorOverride:t}=e;if(t){const e=t(o,r.generatorOpts,a,i().default);void 0!==e&&l.push(e)}}let c;if(0===l.length)c=(0,i().default)(o,r.generatorOpts,a);else{if(1!==l.length)throw new Error("More than one plugin attempted to override codegen.");if("function"==typeof(c=l[0]).then)throw new Error("You appear to be using an async parser plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.")}let{code:p,map:f}=c;f&&u&&(f=(0,s.default)(u.toObject(),f));"inline"!==r.sourceMaps&&"both"!==r.sourceMaps||(p+="\n"+n().default.fromObject(f).toComment());"inline"===r.sourceMaps&&(f=null);return{outputCode:p,outputMap:f}};var s=o(e("./merge-map"));function o(e){return e&&e.__esModule?e:{default:e}}},{"./merge-map":29,"@babel/generator":49,"convert-source-map":339}],29:[function(e,t,r){"use strict";function n(){const t=(r=e("source-map"))&&r.__esModule?r:{default:r};var r;return n=function(){return t},t}function i(e){return`${e.line}/${e.columnStart}`}function s(e){const t=new(n().default.SourceMapConsumer)(Object.assign({},e,{sourceRoot:null})),r=new Map,i=new Map;let s=null;return t.computeColumnSpans(),t.eachMapping(e=>{if(null===e.originalLine)return;let n=r.get(e.source);n||(n={path:e.source,content:t.sourceContentFor(e.source,!0)},r.set(e.source,n));let o=i.get(n);o||(o={source:n,mappings:[]},i.set(n,o));const a={line:e.originalLine,columnStart:e.originalColumn,columnEnd:1/0,name:e.name};s&&s.source===n&&s.mapping.line===e.originalLine&&(s.mapping.columnEnd=e.originalColumn),s={source:n,mapping:a},o.mappings.push({original:a,generated:t.allGeneratedPositionsFor({source:e.source,line:e.originalLine,column:e.originalColumn}).map(e=>({line:e.line,columnStart:e.column,columnEnd:e.lastColumn+1}))})},null,n().default.SourceMapConsumer.ORIGINAL_ORDER),{file:e.file,sourceRoot:e.sourceRoot,sources:Array.from(i.values())}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t){const r=s(e),o=s(t),a=new(n().default.SourceMapGenerator);for(const e of r.sources){const{source:t}=e;"string"==typeof t.content&&a.setSourceContent(t.path,t.content)}if(1===o.sources.length){const e=o.sources[0],t=new Map;!function(e,t){for(const r of e.sources){const{source:e,mappings:n}=r;for(const r of n){const{original:n,generated:i}=r;for(const r of i)t(r,n,e)}}}(r,(r,n,s)=>{!function(e,t,r){const n=function({mappings:e},{line:t,columnStart:r,columnEnd:n}){return function(e,t){const r=[];for(let n=function(e,t){let r=0,n=e.length;for(;r<n;){const i=Math.floor((r+n)/2),s=e[i],o=t(s);if(0===o){r=i;break}o>=0?n=i:r=i+1}let i=r;if(i<e.length){for(;i>=0&&t(e[i])>=0;)i--;return i+1}return i}(e,t);n<e.length&&0===t(e[n]);n++)r.push(e[n]);return r}(e,({original:e})=>t>e.line?-1:t<e.line?1:r>=e.columnEnd?-1:n<=e.columnStart?1:0)}(e,t);for(const e of n){const{generated:t}=e;for(const e of t)r(e)}}(e,r,e=>{const r=i(e);t.has(r)||(t.set(r,e),a.addMapping({source:s.path,original:{line:n.line,column:n.columnStart},generated:{line:e.line,column:e.columnStart},name:n.name}))})});for(const e of t.values()){if(e.columnEnd===1/0)continue;const r={line:e.line,columnStart:e.columnEnd},n=i(r);t.has(n)||a.addMapping({generated:{line:r.line,column:r.columnStart}})}}const u=a.toJSON();"string"==typeof r.sourceRoot&&(u.sourceRoot=r.sourceRoot);return u}},{"source-map":670}],30:[function(e,t,r){"use strict";function n(){const t=l(e("@babel/traverse"));return n=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.runAsync=function(e,t,r,n){let i;try{i=c(e,t,r)}catch(e){return n(e)}return n(null,i)},r.runSync=c;var i=l(e("./plugin-pass")),s=l(e("./block-hoist-plugin")),o=l(e("./normalize-opts")),a=l(e("./normalize-file")),u=l(e("./file/generate"));function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t,r){const l=(0,a.default)(e.passes,(0,o.default)(e),t,r);!function(e,t){for(const r of t){const t=[],o=[],a=[];for(const n of r.concat([(0,s.default)()])){const r=new i.default(e,n.key,n.options);t.push([n,r]),o.push(r),a.push(n.visitor)}for(const[r,n]of t){const t=r.pre;if(t){const r=t.call(n,e);if(p(r))throw new Error("You appear to be using an plugin with an async .pre, which your current version of Babel does not support.If you're using a published plugin, you may need to upgrade your @babel/core version.")}}const u=n().default.visitors.merge(a,o,e.opts.wrapPluginVisitorMethod);(0,n().default)(e.ast,u,e.scope);for(const[r,n]of t){const t=r.post;if(t){const r=t.call(n,e);if(p(r))throw new Error("You appear to be using an plugin with an async .post, which your current version of Babel does not support.If you're using a published plugin, you may need to upgrade your @babel/core version.")}}}}(l,e.passes);const c=l.opts,{outputCode:f,outputMap:h}=!1!==c.code?(0,u.default)(e.passes,l):{};return{metadata:l.metadata,options:c,ast:!0===c.ast?l.ast:null,code:void 0===f?null:f,map:void 0===h?null:h,sourceType:l.ast.program.sourceType}}function p(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}},{"./block-hoist-plugin":26,"./file/generate":28,"./normalize-file":31,"./normalize-opts":32,"./plugin-pass":33,"@babel/traverse":73}],31:[function(e,t,r){"use strict";function n(){const t=f(e("path"));return n=function(){return t},t}function i(){const t=f(e("debug"));return i=function(){return t},t}function s(){const t=f(e("lodash/cloneDeep"));return s=function(){return t},t}function o(){const t=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(e("@babel/types"));return o=function(){return t},t}function a(){const t=f(e("convert-source-map"));return a=function(){return t},t}function u(){const t=e("@babel/parser");return u=function(){return t},t}function l(){const t=e("@babel/code-frame");return l=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t,r,i){r=`${r||""}`;let f=null;if(!1!==t.inputSourceMap){if("object"==typeof t.inputSourceMap&&(f=a().default.fromObject(t.inputSourceMap)),!f)try{(f=a().default.fromSource(r))&&(r=a().default.removeComments(r))}catch(e){h("discarding unknown inline input sourcemap",e),r=a().default.removeComments(r)}if(!f)if("string"==typeof t.filename)try{(f=a().default.fromMapFileSource(r,n().default.dirname(t.filename)))&&(r=a().default.removeMapFileComments(r))}catch(e){h("discarding unknown file input sourcemap",e),r=a().default.removeMapFileComments(r)}else h("discarding un-loadable file input sourcemap"),r=a().default.removeMapFileComments(r)}if(i){if("Program"===i.type)i=o().file(i,[],[]);else if("File"!==i.type)throw new Error("AST root must be a Program or File node");i=(0,s().default)(i)}else i=function(e,{parserOpts:t,highlightCode:r=!0,filename:n="unknown"},i){try{const s=[];for(const r of e)for(const e of r){const{parserOverride:r}=e;if(r){const e=r(i,t,u().parse);void 0!==e&&s.push(e)}}if(0===s.length)return(0,u().parse)(i,t);if(1===s.length){if("function"==typeof s[0].then)throw new Error("You appear to be using an async codegen plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.");return s[0]}throw new Error("More than one plugin attempted to override parsing.")}catch(e){"BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED"===e.code&&(e.message+="\nConsider renaming the file to '.mjs', or setting sourceType:module or sourceType:unambiguous in your Babel config for this file.");const{loc:t,missingPlugin:s}=e;if(t){const o=(0,l().codeFrameColumns)(i,{start:{line:t.line,column:t.column+1}},{highlightCode:r});e.message=s?`${n}: `+(0,p.default)(s[0],t,o):`${n}: ${e.message}\n\n`+o,e.code="BABEL_PARSE_ERROR"}throw e}}(e,t,r);return new c.default(t,{code:r,ast:i,inputMap:f})};var c=f(e("./file/file")),p=f(e("./util/missing-plugin-helper"));function f(e){return e&&e.__esModule?e:{default:e}}const h=(0,i().default)("babel:transform:file")},{"./file/file":27,"./util/missing-plugin-helper":34,"@babel/code-frame":2,"@babel/parser":61,"@babel/types":135,"convert-source-map":339,debug:418,"lodash/cloneDeep":590,path:693}],32:[function(e,t,r){"use strict";function n(){const t=(r=e("path"))&&r.__esModule?r:{default:r};var r;return n=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){const{filename:t,cwd:r,filenameRelative:i=("string"==typeof t?n().default.relative(r,t):"unknown"),sourceType:s="module",inputSourceMap:o,sourceMaps:a=!!o,moduleRoot:u,sourceRoot:l=u,sourceFileName:c=n().default.basename(i),comments:p=!0,compact:f="auto"}=e.options,h=e.options,d=Object.assign({},h,{parserOpts:Object.assign({sourceType:".mjs"===n().default.extname(i)?"module":s,sourceFileName:t,plugins:[]},h.parserOpts),generatorOpts:Object.assign({filename:t,auxiliaryCommentBefore:h.auxiliaryCommentBefore,auxiliaryCommentAfter:h.auxiliaryCommentAfter,retainLines:h.retainLines,comments:p,shouldPrintComment:h.shouldPrintComment,compact:f,minified:h.minified,sourceMaps:a,sourceRoot:l,sourceFileName:c},h.generatorOpts)});for(const t of e.passes)for(const e of t)e.manipulateOptions&&e.manipulateOptions(d,d.parserOpts);return d}},{path:693}],33:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;r.default=class{constructor(e,t,r){this._map=new Map,this.key=t,this.file=e,this.opts=r||{},this.cwd=e.opts.cwd,this.filename=e.opts.filename}set(e,t){this._map.set(e,t)}get(e){return this._map.get(e)}availableHelper(e,t){return this.file.availableHelper(e,t)}addHelper(e){return this.file.addHelper(e)}addImport(){return this.file.addImport()}getModuleName(){return this.file.getModuleName()}buildCodeFrameError(e,t,r){return this.file.buildCodeFrameError(e,t,r)}}},{}],34:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t,r){let s=`Support for the experimental syntax '${e}' isn't currently enabled `+`(${t.line}:${t.column+1}):\n\n`+r;const o=n[e];if(o){const{syntax:e,transform:t}=o;if(e)if(t){const e=i(t);s+=`\n\nAdd ${e} to the 'plugins' section of your Babel config `+"to enable transformation."}else{const t=i(e);s+=`\n\nAdd ${t} to the 'plugins' section of your Babel config `+"to enable parsing."}}return s};const n={classProperties:{syntax:{name:"@babel/plugin-syntax-class-properties",url:"https://git.io/vb4yQ"},transform:{name:"@babel/plugin-proposal-class-properties",url:"https://git.io/vb4SL"}},decorators:{syntax:{name:"@babel/plugin-syntax-decorators",url:"https://git.io/vb4y9"},transform:{name:"@babel/plugin-proposal-decorators",url:"https://git.io/vb4ST"}},doExpressions:{syntax:{name:"@babel/plugin-syntax-do-expressions",url:"https://git.io/vb4yh"},transform:{name:"@babel/plugin-proposal-do-expressions",url:"https://git.io/vb4S3"}},dynamicImport:{syntax:{name:"@babel/plugin-syntax-dynamic-import",url:"https://git.io/vb4Sv"}},exportDefaultFrom:{syntax:{name:"@babel/plugin-syntax-export-default-from",url:"https://git.io/vb4SO"},transform:{name:"@babel/plugin-proposal-export-default-from",url:"https://git.io/vb4yH"}},exportNamespaceFrom:{syntax:{name:"@babel/plugin-syntax-export-namespace-from",url:"https://git.io/vb4Sf"},transform:{name:"@babel/plugin-proposal-export-namespace-from",url:"https://git.io/vb4SG"}},flow:{syntax:{name:"@babel/plugin-syntax-flow",url:"https://git.io/vb4yb"},transform:{name:"@babel/plugin-transform-flow-strip-types",url:"https://git.io/vb49g"}},functionBind:{syntax:{name:"@babel/plugin-syntax-function-bind",url:"https://git.io/vb4y7"},transform:{name:"@babel/plugin-proposal-function-bind",url:"https://git.io/vb4St"}},functionSent:{syntax:{name:"@babel/plugin-syntax-function-sent",url:"https://git.io/vb4yN"},transform:{name:"@babel/plugin-proposal-function-sent",url:"https://git.io/vb4SZ"}},importMeta:{syntax:{name:"@babel/plugin-syntax-import-meta",url:"https://git.io/vbKK6"}},jsx:{syntax:{name:"@babel/plugin-syntax-jsx",url:"https://git.io/vb4yA"},transform:{name:"@babel/plugin-transform-react-jsx",url:"https://git.io/vb4yd"}},logicalAssignment:{syntax:{name:"@babel/plugin-syntax-logical-assignment-operators",url:"https://git.io/vAlBp"},transform:{name:"@babel/plugin-proposal-logical-assignment-operators",url:"https://git.io/vAlRe"}},nullishCoalescingOperator:{syntax:{name:"@babel/plugin-syntax-nullish-coalescing-operator",url:"https://git.io/vb4yx"},transform:{name:"@babel/plugin-proposal-nullish-coalescing-operator",url:"https://git.io/vb4Se"}},numericSeparator:{syntax:{name:"@babel/plugin-syntax-numeric-separator",url:"https://git.io/vb4Sq"},transform:{name:"@babel/plugin-proposal-numeric-separator",url:"https://git.io/vb4yS"}},optionalChaining:{syntax:{name:"@babel/plugin-syntax-optional-chaining",url:"https://git.io/vb4Sc"},transform:{name:"@babel/plugin-proposal-optional-chaining",url:"https://git.io/vb4Sk"}},pipelineOperator:{syntax:{name:"@babel/plugin-syntax-pipeline-operator",url:"https://git.io/vb4yj"},transform:{name:"@babel/plugin-proposal-pipeline-operator",url:"https://git.io/vb4SU"}},throwExpressions:{syntax:{name:"@babel/plugin-syntax-throw-expressions",url:"https://git.io/vb4SJ"},transform:{name:"@babel/plugin-proposal-throw-expressions",url:"https://git.io/vb4yF"}},typescript:{syntax:{name:"@babel/plugin-syntax-typescript",url:"https://git.io/vb4SC"},transform:{name:"@babel/plugin-transform-typescript",url:"https://git.io/vb4Sm"}},asyncGenerators:{syntax:{name:"@babel/plugin-syntax-async-generators",url:"https://git.io/vb4SY"},transform:{name:"@babel/plugin-proposal-async-generator-functions",url:"https://git.io/vb4yp"}},objectRestSpread:{syntax:{name:"@babel/plugin-syntax-object-rest-spread",url:"https://git.io/vb4y5"},transform:{name:"@babel/plugin-proposal-object-rest-spread",url:"https://git.io/vb4Ss"}},optionalCatchBinding:{syntax:{name:"@babel/plugin-syntax-optional-catch-binding",url:"https://git.io/vb4Sn"},transform:{name:"@babel/plugin-proposal-optional-catch-binding",url:"https://git.io/vb4SI"}}},i=({name:e,url:t})=>`${e} (${t})`},{}],35:[function(e,t,r){t.exports={name:"@babel/core",version:"7.2.2",description:"Babel compiler core.",main:"lib/index.js",author:"Sebastian McKenzie <sebmck@gmail.com>",homepage:"https://babeljs.io/",license:"MIT",publishConfig:{access:"public"},repository:"https://github.com/babel/babel/tree/master/packages/babel-core",keywords:["6to5","babel","classes","const","es6","harmony","let","modules","transpile","transpiler","var","babel-core","compiler"],engines:{node:">=6.9.0"},browser:{"./lib/config/files/index.js":"./lib/config/files/index-browser.js","./lib/transform-file.js":"./lib/transform-file-browser.js"},dependencies:{"@babel/code-frame":"^7.0.0","@babel/generator":"^7.2.2","@babel/helpers":"^7.2.0","@babel/parser":"^7.2.2","@babel/template":"^7.2.2","@babel/traverse":"^7.2.2","@babel/types":"^7.2.2","convert-source-map":"^1.1.0",debug:"^4.1.0",json5:"^2.1.0",lodash:"^4.17.10",resolve:"^1.3.2",semver:"^5.4.1","source-map":"^0.5.0"},devDependencies:{"@babel/helper-transform-fixture-test-runner":"^7.0.0","@babel/register":"^7.0.0"}}},{}],36:[function(e,t,r){(function(t){"use strict";function n(){const t=(r=e("trim-right"))&&r.__esModule?r:{default:r};var r;return n=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;const i=/^[ \t]+$/;r.default=class{constructor(e){this._map=null,this._buf=[],this._last="",this._queue=[],this._position={line:1,column:0},this._sourcePosition={identifierName:null,line:null,column:null,filename:null},this._disallowedPop=null,this._map=e}get(){this._flush();const e=this._map,t={code:(0,n().default)(this._buf.join("")),map:null,rawMappings:e&&e.getRawMappings()};return e&&Object.defineProperty(t,"map",{configurable:!0,enumerable:!0,get(){return this.map=e.get()},set(e){Object.defineProperty(this,"map",{value:e,writable:!0})}}),t}append(e){this._flush();const{line:t,column:r,filename:n,identifierName:i,force:s}=this._sourcePosition;this._append(e,t,r,i,n,s)}queue(e){if("\n"===e)for(;this._queue.length>0&&i.test(this._queue[0][0]);)this._queue.shift();const{line:t,column:r,filename:n,identifierName:s,force:o}=this._sourcePosition;this._queue.unshift([e,t,r,s,n,o])}_flush(){let e;for(;e=this._queue.pop();)this._append(...e)}_append(e,t,r,n,i,s){this._map&&"\n"!==e[0]&&this._map.mark(this._position.line,this._position.column,t,r,n,i,s),this._buf.push(e),this._last=e[e.length-1];for(let t=0;t<e.length;t++)"\n"===e[t]?(this._position.line++,this._position.column=0):this._position.column++}removeTrailingNewline(){this._queue.length>0&&"\n"===this._queue[0][0]&&this._queue.shift()}removeLastSemicolon(){this._queue.length>0&&";"===this._queue[0][0]&&this._queue.shift()}endsWith(e){if(1===e.length){let t;if(this._queue.length>0){const e=this._queue[0][0];t=e[e.length-1]}else t=this._last;return t===e}const t=this._last+this._queue.reduce((e,t)=>t[0]+e,"");return e.length<=t.length&&t.slice(-e.length)===e}hasContent(){return this._queue.length>0||!!this._last}exactSource(e,t){this.source("start",e,!0),t(),this.source("end",e),this._disallowPop("start",e)}source(e,t,r){e&&!t||this._normalizePosition(e,t,this._sourcePosition,r)}withSource(e,t,r){if(!this._map)return r();const n=this._sourcePosition.line,i=this._sourcePosition.column,s=this._sourcePosition.filename,o=this._sourcePosition.identifierName;this.source(e,t),r(),this._sourcePosition.force&&this._sourcePosition.line===n&&this._sourcePosition.column===i&&this._sourcePosition.filename===s||this._disallowedPop&&this._disallowedPop.line===n&&this._disallowedPop.column===i&&this._disallowedPop.filename===s||(this._sourcePosition.line=n,this._sourcePosition.column=i,this._sourcePosition.filename=s,this._sourcePosition.identifierName=o,this._sourcePosition.force=!1,this._disallowedPop=null)}_disallowPop(e,t){e&&!t||(this._disallowedPop=this._normalizePosition(e,t))}_normalizePosition(e,t,r,n){const i=t?t[e]:null;void 0===r&&(r={identifierName:null,line:null,column:null,filename:null,force:!1});const s=r.line,o=r.column,a=r.filename;return r.identifierName="start"===e&&t&&t.identifierName||null,r.line=i?i.line:null,r.column=i?i.column:null,r.filename=t&&t.filename||null,(n||r.line!==s||r.column!==o||r.filename!==a)&&(r.force=n),r}getCurrentColumn(){const e=this._queue.reduce((e,t)=>t[0]+e,""),t=e.lastIndexOf("\n");return-1===t?this._position.column+e.length:e.length-1-t}getCurrentLine(){const e=this._queue.reduce((e,t)=>t[0]+e,"");let t=0;for(let r=0;r<e.length;r++)"\n"===e[r]&&t++;return this._position.line+t}}}).call(this,e("buffer").Buffer)},{buffer:683,"trim-right":674}],37:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.File=function(e){e.program&&this.print(e.program.interpreter,e);this.print(e.program,e)},r.Program=function(e){this.printInnerComments(e,!1),this.printSequence(e.directives,e),e.directives&&e.directives.length&&this.newline();this.printSequence(e.body,e)},r.BlockStatement=function(e){this.token("{"),this.printInnerComments(e);const t=e.directives&&e.directives.length;e.body.length||t?(this.newline(),this.printSequence(e.directives,e,{indent:!0}),t&&this.newline(),this.printSequence(e.body,e,{indent:!0}),this.removeTrailingNewline(),this.source("end",e.loc),this.endsWith("\n")||this.newline(),this.rightBrace()):(this.source("end",e.loc),this.token("}"))},r.Noop=function(){},r.Directive=function(e){this.print(e.value,e),this.semicolon()},r.InterpreterDirective=function(e){this.token(`#!${e.value}\n`)},Object.defineProperty(r,"DirectiveLiteral",{enumerable:!0,get:function(){return n.StringLiteral}});var n=e("./types")},{"./types":47}],38:[function(e,t,r){"use strict";function n(){const t=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(e("@babel/types"));return n=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.ClassExpression=r.ClassDeclaration=function(e,t){this.format.decoratorsBeforeExport&&(n().isExportDefaultDeclaration(t)||n().isExportNamedDeclaration(t))||this.printJoin(e.decorators,e);e.declare&&(this.word("declare"),this.space());e.abstract&&(this.word("abstract"),this.space());this.word("class"),e.id&&(this.space(),this.print(e.id,e));this.print(e.typeParameters,e),e.superClass&&(this.space(),this.word("extends"),this.space(),this.print(e.superClass,e),this.print(e.superTypeParameters,e));e.implements&&(this.space(),this.word("implements"),this.space(),this.printList(e.implements,e));this.space(),this.print(e.body,e)},r.ClassBody=function(e){this.token("{"),this.printInnerComments(e),0===e.body.length?this.token("}"):(this.newline(),this.indent(),this.printSequence(e.body,e),this.dedent(),this.endsWith("\n")||this.newline(),this.rightBrace())},r.ClassProperty=function(e){this.printJoin(e.decorators,e),e.accessibility&&(this.word(e.accessibility),this.space());e.static&&(this.word("static"),this.space());e.abstract&&(this.word("abstract"),this.space());e.readonly&&(this.word("readonly"),this.space());e.computed?(this.token("["),this.print(e.key,e),this.token("]")):(this._variance(e),this.print(e.key,e));e.optional&&this.token("?");e.definite&&this.token("!");this.print(e.typeAnnotation,e),e.value&&(this.space(),this.token("="),this.space(),this.print(e.value,e));this.semicolon()},r.ClassPrivateProperty=function(e){e.static&&(this.word("static"),this.space());this.print(e.key,e),this.print(e.typeAnnotation,e),e.value&&(this.space(),this.token("="),this.space(),this.print(e.value,e));this.semicolon()},r.ClassMethod=function(e){this._classMethodHead(e),this.space(),this.print(e.body,e)},r.ClassPrivateMethod=function(e){this._classMethodHead(e),this.space(),this.print(e.body,e)},r._classMethodHead=function(e){this.printJoin(e.decorators,e),e.accessibility&&(this.word(e.accessibility),this.space());e.abstract&&(this.word("abstract"),this.space());e.static&&(this.word("static"),this.space());this._methodHead(e)}},{"@babel/types":135}],39:[function(e,t,r){"use strict";function n(){const t=s(e("@babel/types"));return n=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.UnaryExpression=function(e){"void"===e.operator||"delete"===e.operator||"typeof"===e.operator||"throw"===e.operator?(this.word(e.operator),this.space()):this.token(e.operator);this.print(e.argument,e)},r.DoExpression=function(e){this.word("do"),this.space(),this.print(e.body,e)},r.ParenthesizedExpression=function(e){this.token("("),this.print(e.expression,e),this.token(")")},r.UpdateExpression=function(e){e.prefix?(this.token(e.operator),this.print(e.argument,e)):(this.startTerminatorless(!0),this.print(e.argument,e),this.endTerminatorless(),this.token(e.operator))},r.ConditionalExpression=function(e){this.print(e.test,e),this.space(),this.token("?"),this.space(),this.print(e.consequent,e),this.space(),this.token(":"),this.space(),this.print(e.alternate,e)},r.NewExpression=function(e,t){if(this.word("new"),this.space(),this.print(e.callee,e),this.format.minified&&0===e.arguments.length&&!e.optional&&!n().isCallExpression(t,{callee:e})&&!n().isMemberExpression(t)&&!n().isNewExpression(t))return;this.print(e.typeArguments,e),this.print(e.typeParameters,e),e.optional&&this.token("?.");this.token("("),this.printList(e.arguments,e),this.token(")")},r.SequenceExpression=function(e){this.printList(e.expressions,e)},r.ThisExpression=function(){this.word("this")},r.Super=function(){this.word("super")},r.Decorator=function(e){this.token("@"),this.print(e.expression,e),this.newline()},r.OptionalMemberExpression=function(e){if(this.print(e.object,e),!e.computed&&n().isMemberExpression(e.property))throw new TypeError("Got a MemberExpression for MemberExpression property");let t=e.computed;n().isLiteral(e.property)&&"number"==typeof e.property.value&&(t=!0);e.optional&&this.token("?.");t?(this.token("["),this.print(e.property,e),this.token("]")):(e.optional||this.token("."),this.print(e.property,e))},r.OptionalCallExpression=function(e){this.print(e.callee,e),this.print(e.typeArguments,e),this.print(e.typeParameters,e),e.optional&&this.token("?.");this.token("("),this.printList(e.arguments,e),this.token(")")},r.CallExpression=function(e){this.print(e.callee,e),this.print(e.typeArguments,e),this.print(e.typeParameters,e),this.token("("),this.printList(e.arguments,e),this.token(")")},r.Import=function(){this.word("import")},r.EmptyStatement=function(){this.semicolon(!0)},r.ExpressionStatement=function(e){this.print(e.expression,e),this.semicolon()},r.AssignmentPattern=function(e){this.print(e.left,e),e.left.optional&&this.token("?");this.print(e.left.typeAnnotation,e),this.space(),this.token("="),this.space(),this.print(e.right,e)},r.LogicalExpression=r.BinaryExpression=r.AssignmentExpression=function(e,t){const r=this.inForStatementInitCounter&&"in"===e.operator&&!i.needsParens(e,t);r&&this.token("(");this.print(e.left,e),this.space(),"in"===e.operator||"instanceof"===e.operator?this.word(e.operator):this.token(e.operator);this.space(),this.print(e.right,e),r&&this.token(")")},r.BindExpression=function(e){this.print(e.object,e),this.token("::"),this.print(e.callee,e)},r.MemberExpression=function(e){if(this.print(e.object,e),!e.computed&&n().isMemberExpression(e.property))throw new TypeError("Got a MemberExpression for MemberExpression property");let t=e.computed;n().isLiteral(e.property)&&"number"==typeof e.property.value&&(t=!0);t?(this.token("["),this.print(e.property,e),this.token("]")):(this.token("."),this.print(e.property,e))},r.MetaProperty=function(e){this.print(e.meta,e),this.token("."),this.print(e.property,e)},r.PrivateName=function(e){this.token("#"),this.print(e.id,e)},r.AwaitExpression=r.YieldExpression=void 0;var i=s(e("../node"));function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}function o(e){return function(t){if(this.word(e),t.delegate&&this.token("*"),t.argument){this.space();const e=this.startTerminatorless();this.print(t.argument,t),this.endTerminatorless(e)}}}const a=o("yield");r.YieldExpression=a;const u=o("await");r.AwaitExpression=u},{"../node":50,"@babel/types":135}],40:[function(e,t,r){"use strict";function n(){const t=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(e("@babel/types"));return n=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.AnyTypeAnnotation=function(){this.word("any")},r.ArrayTypeAnnotation=function(e){this.print(e.elementType,e),this.token("["),this.token("]")},r.BooleanTypeAnnotation=function(){this.word("boolean")},r.BooleanLiteralTypeAnnotation=function(e){this.word(e.value?"true":"false")},r.NullLiteralTypeAnnotation=function(){this.word("null")},r.DeclareClass=function(e,t){n().isDeclareExportDeclaration(t)||(this.word("declare"),this.space());this.word("class"),this.space(),this._interfaceish(e)},r.DeclareFunction=function(e,t){n().isDeclareExportDeclaration(t)||(this.word("declare"),this.space());this.word("function"),this.space(),this.print(e.id,e),this.print(e.id.typeAnnotation.typeAnnotation,e),e.predicate&&(this.space(),this.print(e.predicate,e));this.semicolon()},r.InferredPredicate=function(){this.token("%"),this.word("checks")},r.DeclaredPredicate=function(e){this.token("%"),this.word("checks"),this.token("("),this.print(e.value,e),this.token(")")},r.DeclareInterface=function(e){this.word("declare"),this.space(),this.InterfaceDeclaration(e)},r.DeclareModule=function(e){this.word("declare"),this.space(),this.word("module"),this.space(),this.print(e.id,e),this.space(),this.print(e.body,e)},r.DeclareModuleExports=function(e){this.word("declare"),this.space(),this.word("module"),this.token("."),this.word("exports"),this.print(e.typeAnnotation,e)},r.DeclareTypeAlias=function(e){this.word("declare"),this.space(),this.TypeAlias(e)},r.DeclareOpaqueType=function(e,t){n().isDeclareExportDeclaration(t)||(this.word("declare"),this.space());this.OpaqueType(e)},r.DeclareVariable=function(e,t){n().isDeclareExportDeclaration(t)||(this.word("declare"),this.space());this.word("var"),this.space(),this.print(e.id,e),this.print(e.id.typeAnnotation,e),this.semicolon()},r.DeclareExportDeclaration=function(e){this.word("declare"),this.space(),this.word("export"),this.space(),e.default&&(this.word("default"),this.space());(function(e){if(e.declaration){const t=e.declaration;this.print(t,e),n().isStatement(t)||this.semicolon()}else this.token("{"),e.specifiers.length&&(this.space(),this.printList(e.specifiers,e),this.space()),this.token("}"),e.source&&(this.space(),this.word("from"),this.space(),this.print(e.source,e)),this.semicolon()}).apply(this,arguments)},r.DeclareExportAllDeclaration=function(){this.word("declare"),this.space(),i.ExportAllDeclaration.apply(this,arguments)},r.ExistsTypeAnnotation=function(){this.token("*")},r.FunctionTypeAnnotation=function(e,t){this.print(e.typeParameters,e),this.token("("),this.printList(e.params,e),e.rest&&(e.params.length&&(this.token(","),this.space()),this.token("..."),this.print(e.rest,e));this.token(")"),"ObjectTypeCallProperty"===t.type||"DeclareFunction"===t.type||"ObjectTypeProperty"===t.type&&t.method?this.token(":"):(this.space(),this.token("=>"));this.space(),this.print(e.returnType,e)},r.FunctionTypeParam=function(e){this.print(e.name,e),e.optional&&this.token("?");e.name&&(this.token(":"),this.space());this.print(e.typeAnnotation,e)},r.GenericTypeAnnotation=r.ClassImplements=r.InterfaceExtends=function(e){this.print(e.id,e),this.print(e.typeParameters,e)},r._interfaceish=function(e){this.print(e.id,e),this.print(e.typeParameters,e),e.extends.length&&(this.space(),this.word("extends"),this.space(),this.printList(e.extends,e));e.mixins&&e.mixins.length&&(this.space(),this.word("mixins"),this.space(),this.printList(e.mixins,e));e.implements&&e.implements.length&&(this.space(),this.word("implements"),this.space(),this.printList(e.implements,e));this.space(),this.print(e.body,e)},r._variance=function(e){e.variance&&("plus"===e.variance.kind?this.token("+"):"minus"===e.variance.kind&&this.token("-"))},r.InterfaceDeclaration=function(e){this.word("interface"),this.space(),this._interfaceish(e)},r.InterfaceTypeAnnotation=function(e){this.word("interface"),e.extends&&e.extends.length&&(this.space(),this.word("extends"),this.space(),this.printList(e.extends,e));this.space(),this.print(e.body,e)},r.IntersectionTypeAnnotation=function(e){this.printJoin(e.types,e,{separator:o})},r.MixedTypeAnnotation=function(){this.word("mixed")},r.EmptyTypeAnnotation=function(){this.word("empty")},r.NullableTypeAnnotation=function(e){this.token("?"),this.print(e.typeAnnotation,e)},r.NumberTypeAnnotation=function(){this.word("number")},r.StringTypeAnnotation=function(){this.word("string")},r.ThisTypeAnnotation=function(){this.word("this")},r.TupleTypeAnnotation=function(e){this.token("["),this.printList(e.types,e),this.token("]")},r.TypeofTypeAnnotation=function(e){this.word("typeof"),this.space(),this.print(e.argument,e)},r.TypeAlias=function(e){this.word("type"),this.space(),this.print(e.id,e),this.print(e.typeParameters,e),this.space(),this.token("="),this.space(),this.print(e.right,e),this.semicolon()},r.TypeAnnotation=function(e){this.token(":"),this.space(),e.optional&&this.token("?");this.print(e.typeAnnotation,e)},r.TypeParameterDeclaration=r.TypeParameterInstantiation=function(e){this.token("<"),this.printList(e.params,e,{}),this.token(">")},r.TypeParameter=function(e){this._variance(e),this.word(e.name),e.bound&&this.print(e.bound,e);e.default&&(this.space(),this.token("="),this.space(),this.print(e.default,e))},r.OpaqueType=function(e){this.word("opaque"),this.space(),this.word("type"),this.space(),this.print(e.id,e),this.print(e.typeParameters,e),e.supertype&&(this.token(":"),this.space(),this.print(e.supertype,e));e.impltype&&(this.space(),this.token("="),this.space(),this.print(e.impltype,e));this.semicolon()},r.ObjectTypeAnnotation=function(e){e.exact?this.token("{|"):this.token("{");const t=e.properties.concat(e.callProperties||[],e.indexers||[],e.internalSlots||[]);t.length&&(this.space(),this.printJoin(t,e,{addNewlines(e){if(e&&!t[0])return 1},indent:!0,statement:!0,iterator:()=>{1!==t.length&&(this.token(","),this.space())}}),this.space());e.exact?this.token("|}"):this.token("}")},r.ObjectTypeInternalSlot=function(e){e.static&&(this.word("static"),this.space());this.token("["),this.token("["),this.print(e.id,e),this.token("]"),this.token("]"),e.optional&&this.token("?");e.method||(this.token(":"),this.space());this.print(e.value,e)},r.ObjectTypeCallProperty=function(e){e.static&&(this.word("static"),this.space());this.print(e.value,e)},r.ObjectTypeIndexer=function(e){e.static&&(this.word("static"),this.space());this._variance(e),this.token("["),e.id&&(this.print(e.id,e),this.token(":"),this.space());this.print(e.key,e),this.token("]"),this.token(":"),this.space(),this.print(e.value,e)},r.ObjectTypeProperty=function(e){e.proto&&(this.word("proto"),this.space());e.static&&(this.word("static"),this.space());this._variance(e),this.print(e.key,e),e.optional&&this.token("?");e.method||(this.token(":"),this.space());this.print(e.value,e)},r.ObjectTypeSpreadProperty=function(e){this.token("..."),this.print(e.argument,e)},r.QualifiedTypeIdentifier=function(e){this.print(e.qualification,e),this.token("."),this.print(e.id,e)},r.UnionTypeAnnotation=function(e){this.printJoin(e.types,e,{separator:a})},r.TypeCastExpression=function(e){this.token("("),this.print(e.expression,e),this.print(e.typeAnnotation,e),this.token(")")},r.Variance=function(e){"plus"===e.kind?this.token("+"):this.token("-")},r.VoidTypeAnnotation=function(){this.word("void")},Object.defineProperty(r,"NumberLiteralTypeAnnotation",{enumerable:!0,get:function(){return s.NumericLiteral}}),Object.defineProperty(r,"StringLiteralTypeAnnotation",{enumerable:!0,get:function(){return s.StringLiteral}});var i=e("./modules"),s=e("./types");function o(){this.space(),this.token("&"),this.space()}function a(){this.space(),this.token("|"),this.space()}},{"./modules":44,"./types":47,"@babel/types":135}],41:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e("./template-literals");Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return n[e]}})});var i=e("./expressions");Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return i[e]}})});var s=e("./statements");Object.keys(s).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return s[e]}})});var o=e("./classes");Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return o[e]}})});var a=e("./methods");Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return a[e]}})});var u=e("./modules");Object.keys(u).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return u[e]}})});var l=e("./types");Object.keys(l).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return l[e]}})});var c=e("./flow");Object.keys(c).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return c[e]}})});var p=e("./base");Object.keys(p).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return p[e]}})});var f=e("./jsx");Object.keys(f).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return f[e]}})});var h=e("./typescript");Object.keys(h).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return h[e]}})})},{"./base":37,"./classes":38,"./expressions":39,"./flow":40,"./jsx":42,"./methods":43,"./modules":44,"./statements":45,"./template-literals":46,"./types":47,"./typescript":48}],42:[function(e,t,r){"use strict";function n(){this.space()}Object.defineProperty(r,"__esModule",{value:!0}),r.JSXAttribute=function(e){this.print(e.name,e),e.value&&(this.token("="),this.print(e.value,e))},r.JSXIdentifier=function(e){this.word(e.name)},r.JSXNamespacedName=function(e){this.print(e.namespace,e),this.token(":"),this.print(e.name,e)},r.JSXMemberExpression=function(e){this.print(e.object,e),this.token("."),this.print(e.property,e)},r.JSXSpreadAttribute=function(e){this.token("{"),this.token("..."),this.print(e.argument,e),this.token("}")},r.JSXExpressionContainer=function(e){this.token("{"),this.print(e.expression,e),this.token("}")},r.JSXSpreadChild=function(e){this.token("{"),this.token("..."),this.print(e.expression,e),this.token("}")},r.JSXText=function(e){const t=this.getPossibleRaw(e);null!=t?this.token(t):this.token(e.value)},r.JSXElement=function(e){const t=e.openingElement;if(this.print(t,e),t.selfClosing)return;this.indent();for(const t of e.children)this.print(t,e);this.dedent(),this.print(e.closingElement,e)},r.JSXOpeningElement=function(e){this.token("<"),this.print(e.name,e),this.print(e.typeParameters,e),e.attributes.length>0&&(this.space(),this.printJoin(e.attributes,e,{separator:n}));e.selfClosing?(this.space(),this.token("/>")):this.token(">")},r.JSXClosingElement=function(e){this.token("</"),this.print(e.name,e),this.token(">")},r.JSXEmptyExpression=function(e){this.printInnerComments(e)},r.JSXFragment=function(e){this.print(e.openingFragment,e),this.indent();for(const t of e.children)this.print(t,e);this.dedent(),this.print(e.closingFragment,e)},r.JSXOpeningFragment=function(){this.token("<"),this.token(">")},r.JSXClosingFragment=function(){this.token("</"),this.token(">")}},{}],43:[function(e,t,r){"use strict";function n(){const t=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(e("@babel/types"));return n=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r._params=function(e){this.print(e.typeParameters,e),this.token("("),this._parameters(e.params,e),this.token(")"),this.print(e.returnType,e)},r._parameters=function(e,t){for(let r=0;r<e.length;r++)this._param(e[r],t),r<e.length-1&&(this.token(","),this.space())},r._param=function(e,t){this.printJoin(e.decorators,e),this.print(e,t),e.optional&&this.token("?");this.print(e.typeAnnotation,e)},r._methodHead=function(e){const t=e.kind,r=e.key;"get"!==t&&"set"!==t||(this.word(t),this.space());e.async&&(this.word("async"),this.space());"method"!==t&&"init"!==t||e.generator&&this.token("*");e.computed?(this.token("["),this.print(r,e),this.token("]")):this.print(r,e);e.optional&&this.token("?");this._params(e)},r._predicate=function(e){e.predicate&&(e.returnType||this.token(":"),this.space(),this.print(e.predicate,e))},r._functionHead=function(e){e.async&&(this.word("async"),this.space());this.word("function"),e.generator&&this.token("*");this.space(),e.id&&this.print(e.id,e);this._params(e),this._predicate(e)},r.FunctionDeclaration=r.FunctionExpression=function(e){this._functionHead(e),this.space(),this.print(e.body,e)},r.ArrowFunctionExpression=function(e){e.async&&(this.word("async"),this.space());const t=e.params[0];1===e.params.length&&n().isIdentifier(t)&&!function(e,t){return e.typeParameters||e.returnType||t.typeAnnotation||t.optional||t.trailingComments}(e,t)?this.format.retainLines&&e.loc&&e.body.loc&&e.loc.start.line<e.body.loc.start.line?(this.token("("),t.loc&&t.loc.start.line>e.loc.start.line?(this.indent(),this.print(t,e),this.dedent(),this._catchUp("start",e.body.loc)):this.print(t,e),this.token(")")):this.print(t,e):this._params(e);this._predicate(e),this.space(),this.token("=>"),this.space(),this.print(e.body,e)}},{"@babel/types":135}],44:[function(e,t,r){"use strict";function n(){const t=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(e("@babel/types"));return n=function(){return t},t}function i(e){if(e.declaration){const t=e.declaration;this.print(t,e),n().isStatement(t)||this.semicolon()}else{"type"===e.exportKind&&(this.word("type"),this.space());const t=e.specifiers.slice(0);let r=!1;for(;;){const i=t[0];if(!n().isExportDefaultSpecifier(i)&&!n().isExportNamespaceSpecifier(i))break;r=!0,this.print(t.shift(),e),t.length&&(this.token(","),this.space())}(t.length||!t.length&&!r)&&(this.token("{"),t.length&&(this.space(),this.printList(t,e),this.space()),this.token("}")),e.source&&(this.space(),this.word("from"),this.space(),this.print(e.source,e)),this.semicolon()}}Object.defineProperty(r,"__esModule",{value:!0}),r.ImportSpecifier=function(e){"type"!==e.importKind&&"typeof"!==e.importKind||(this.word(e.importKind),this.space());this.print(e.imported,e),e.local&&e.local.name!==e.imported.name&&(this.space(),this.word("as"),this.space(),this.print(e.local,e))},r.ImportDefaultSpecifier=function(e){this.print(e.local,e)},r.ExportDefaultSpecifier=function(e){this.print(e.exported,e)},r.ExportSpecifier=function(e){this.print(e.local,e),e.exported&&e.local.name!==e.exported.name&&(this.space(),this.word("as"),this.space(),this.print(e.exported,e))},r.ExportNamespaceSpecifier=function(e){this.token("*"),this.space(),this.word("as"),this.space(),this.print(e.exported,e)},r.ExportAllDeclaration=function(e){this.word("export"),this.space(),"type"===e.exportKind&&(this.word("type"),this.space());this.token("*"),this.space(),this.word("from"),this.space(),this.print(e.source,e),this.semicolon()},r.ExportNamedDeclaration=function(e){this.format.decoratorsBeforeExport&&n().isClassDeclaration(e.declaration)&&this.printJoin(e.declaration.decorators,e);this.word("export"),this.space(),i.apply(this,arguments)},r.ExportDefaultDeclaration=function(e){this.format.decoratorsBeforeExport&&n().isClassDeclaration(e.declaration)&&this.printJoin(e.declaration.decorators,e);this.word("export"),this.space(),this.word("default"),this.space(),i.apply(this,arguments)},r.ImportDeclaration=function(e){this.word("import"),this.space(),("type"===e.importKind||"typeof"===e.importKind)&&(this.word(e.importKind),this.space());const t=e.specifiers.slice(0);if(t&&t.length){for(;;){const r=t[0];if(!n().isImportDefaultSpecifier(r)&&!n().isImportNamespaceSpecifier(r))break;this.print(t.shift(),e),t.length&&(this.token(","),this.space())}t.length&&(this.token("{"),this.space(),this.printList(t,e),this.space(),this.token("}")),this.space(),this.word("from"),this.space()}this.print(e.source,e),this.semicolon()},r.ImportNamespaceSpecifier=function(e){this.token("*"),this.space(),this.word("as"),this.space(),this.print(e.local,e)}},{"@babel/types":135}],45:[function(e,t,r){"use strict";function n(){const t=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(e("@babel/types"));return n=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.WithStatement=function(e){this.word("with"),this.space(),this.token("("),this.print(e.object,e),this.token(")"),this.printBlock(e)},r.IfStatement=function(e){this.word("if"),this.space(),this.token("("),this.print(e.test,e),this.token(")"),this.space();const t=e.alternate&&n().isIfStatement(function e(t){if(!n().isStatement(t.body))return t;return e(t.body)}(e.consequent));t&&(this.token("{"),this.newline(),this.indent());this.printAndIndentOnComments(e.consequent,e),t&&(this.dedent(),this.newline(),this.token("}"));e.alternate&&(this.endsWith("}")&&this.space(),this.word("else"),this.space(),this.printAndIndentOnComments(e.alternate,e))},r.ForStatement=function(e){this.word("for"),this.space(),this.token("("),this.inForStatementInitCounter++,this.print(e.init,e),this.inForStatementInitCounter--,this.token(";"),e.test&&(this.space(),this.print(e.test,e));this.token(";"),e.update&&(this.space(),this.print(e.update,e));this.token(")"),this.printBlock(e)},r.WhileStatement=function(e){this.word("while"),this.space(),this.token("("),this.print(e.test,e),this.token(")"),this.printBlock(e)},r.DoWhileStatement=function(e){this.word("do"),this.space(),this.print(e.body,e),this.space(),this.word("while"),this.space(),this.token("("),this.print(e.test,e),this.token(")"),this.semicolon()},r.LabeledStatement=function(e){this.print(e.label,e),this.token(":"),this.space(),this.print(e.body,e)},r.TryStatement=function(e){this.word("try"),this.space(),this.print(e.block,e),this.space(),e.handlers?this.print(e.handlers[0],e):this.print(e.handler,e);e.finalizer&&(this.space(),this.word("finally"),this.space(),this.print(e.finalizer,e))},r.CatchClause=function(e){this.word("catch"),this.space(),e.param&&(this.token("("),this.print(e.param,e),this.token(")"),this.space());this.print(e.body,e)},r.SwitchStatement=function(e){this.word("switch"),this.space(),this.token("("),this.print(e.discriminant,e),this.token(")"),this.space(),this.token("{"),this.printSequence(e.cases,e,{indent:!0,addNewlines(t,r){if(!t&&e.cases[e.cases.length-1]===r)return-1}}),this.token("}")},r.SwitchCase=function(e){e.test?(this.word("case"),this.space(),this.print(e.test,e),this.token(":")):(this.word("default"),this.token(":"));e.consequent.length&&(this.newline(),this.printSequence(e.consequent,e,{indent:!0}))},r.DebuggerStatement=function(){this.word("debugger"),this.semicolon()},r.VariableDeclaration=function(e,t){e.declare&&(this.word("declare"),this.space());this.word(e.kind),this.space();let r,i=!1;if(!n().isFor(t))for(const t of e.declarations)t.init&&(i=!0);i&&(r="const"===e.kind?h:f);if(this.printList(e.declarations,e,{separator:r}),n().isFor(t)&&(t.left===e||t.init===e))return;this.semicolon()},r.VariableDeclarator=function(e){this.print(e.id,e),e.definite&&this.token("!");this.print(e.id.typeAnnotation,e),e.init&&(this.space(),this.token("="),this.space(),this.print(e.init,e))},r.ThrowStatement=r.BreakStatement=r.ReturnStatement=r.ContinueStatement=r.ForOfStatement=r.ForInStatement=void 0;const i=function(e){return function(t){this.word("for"),this.space(),"of"===e&&t.await&&(this.word("await"),this.space()),this.token("("),this.print(t.left,t),this.space(),this.word(e),this.space(),this.print(t.right,t),this.token(")"),this.printBlock(t)}},s=i("in");r.ForInStatement=s;const o=i("of");function a(e,t="label"){return function(r){this.word(e);const n=r[t];if(n){this.space();const e="label"==t,i=this.startTerminatorless(e);this.print(n,r),this.endTerminatorless(i)}this.semicolon()}}r.ForOfStatement=o;const u=a("continue");r.ContinueStatement=u;const l=a("return","argument");r.ReturnStatement=l;const c=a("break");r.BreakStatement=c;const p=a("throw","argument");function f(){if(this.token(","),this.newline(),this.endsWith("\n"))for(let e=0;e<4;e++)this.space(!0)}function h(){if(this.token(","),this.newline(),this.endsWith("\n"))for(let e=0;e<6;e++)this.space(!0)}r.ThrowStatement=p},{"@babel/types":135}],46:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.TaggedTemplateExpression=function(e){this.print(e.tag,e),this.print(e.typeParameters,e),this.print(e.quasi,e)},r.TemplateElement=function(e,t){const r=t.quasis[0]===e,n=t.quasis[t.quasis.length-1]===e,i=(r?"`":"}")+e.value.raw+(n?"`":"${");this.token(i)},r.TemplateLiteral=function(e){const t=e.quasis;for(let r=0;r<t.length;r++)this.print(t[r],e),r+1<t.length&&this.print(e.expressions[r],e)}},{}],47:[function(e,t,r){"use strict";function n(){const t=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(e("@babel/types"));return n=function(){return t},t}function i(){const t=(r=e("jsesc"))&&r.__esModule?r:{default:r};var r;return i=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.Identifier=function(e){this.exactSource(e.loc,()=>{this.word(e.name)})},r.SpreadElement=r.RestElement=function(e){this.token("..."),this.print(e.argument,e)},r.ObjectPattern=r.ObjectExpression=function(e){const t=e.properties;this.token("{"),this.printInnerComments(e),t.length&&(this.space(),this.printList(t,e,{indent:!0,statement:!0}),this.space());this.token("}")},r.ObjectMethod=function(e){this.printJoin(e.decorators,e),this._methodHead(e),this.space(),this.print(e.body,e)},r.ObjectProperty=function(e){if(this.printJoin(e.decorators,e),e.computed)this.token("["),this.print(e.key,e),this.token("]");else{if(n().isAssignmentPattern(e.value)&&n().isIdentifier(e.key)&&e.key.name===e.value.left.name)return void this.print(e.value,e);if(this.print(e.key,e),e.shorthand&&n().isIdentifier(e.key)&&n().isIdentifier(e.value)&&e.key.name===e.value.name)return}this.token(":"),this.space(),this.print(e.value,e)},r.ArrayPattern=r.ArrayExpression=function(e){const t=e.elements,r=t.length;this.token("["),this.printInnerComments(e);for(let n=0;n<t.length;n++){const i=t[n];i?(n>0&&this.space(),this.print(i,e),n<r-1&&this.token(",")):this.token(",")}this.token("]")},r.RegExpLiteral=function(e){this.word(`/${e.pattern}/${e.flags}`)},r.BooleanLiteral=function(e){this.word(e.value?"true":"false")},r.NullLiteral=function(){this.word("null")},r.NumericLiteral=function(e){const t=this.getPossibleRaw(e),r=e.value+"";null==t?this.number(r):this.format.minified?this.number(t.length<r.length?t:r):this.number(t)},r.StringLiteral=function(e){const t=this.getPossibleRaw(e);if(!this.format.minified&&null!=t)return void this.token(t);const r=this.format.jsescOption;this.format.jsonCompatibleStrings&&(r.json=!0);const n=(0,i().default)(e.value,r);return this.token(n)},r.BigIntLiteral=function(e){const t=this.getPossibleRaw(e);if(!this.format.minified&&null!=t)return void this.token(t);this.token(e.value)},r.PipelineTopicExpression=function(e){this.print(e.expression,e)},r.PipelineBareFunction=function(e){this.print(e.callee,e)},r.PipelinePrimaryTopicReference=function(){this.token("#")}},{"@babel/types":135,jsesc:435}],48:[function(e,t,r){"use strict";function n(e,t){!0!==t&&e.token(t)}Object.defineProperty(r,"__esModule",{value:!0}),r.TSTypeAnnotation=function(e){this.token(":"),this.space(),e.optional&&this.token("?");this.print(e.typeAnnotation,e)},r.TSTypeParameterDeclaration=r.TSTypeParameterInstantiation=function(e){this.token("<"),this.printList(e.params,e,{}),this.token(">")},r.TSTypeParameter=function(e){this.word(e.name),e.constraint&&(this.space(),this.word("extends"),this.space(),this.print(e.constraint,e));e.default&&(this.space(),this.token("="),this.space(),this.print(e.default,e))},r.TSParameterProperty=function(e){e.accessibility&&(this.word(e.accessibility),this.space());e.readonly&&(this.word("readonly"),this.space());this._param(e.parameter)},r.TSDeclareFunction=function(e){e.declare&&(this.word("declare"),this.space());this._functionHead(e),this.token(";")},r.TSDeclareMethod=function(e){this._classMethodHead(e),this.token(";")},r.TSQualifiedName=function(e){this.print(e.left,e),this.token("."),this.print(e.right,e)},r.TSCallSignatureDeclaration=function(e){this.tsPrintSignatureDeclarationBase(e)},r.TSConstructSignatureDeclaration=function(e){this.word("new"),this.space(),this.tsPrintSignatureDeclarationBase(e)},r.TSPropertySignature=function(e){const{readonly:t,initializer:r}=e;t&&(this.word("readonly"),this.space());this.tsPrintPropertyOrMethodName(e),this.print(e.typeAnnotation,e),r&&(this.space(),this.token("="),this.space(),this.print(r,e));this.token(";")},r.tsPrintPropertyOrMethodName=function(e){e.computed&&this.token("[");this.print(e.key,e),e.computed&&this.token("]");e.optional&&this.token("?")},r.TSMethodSignature=function(e){this.tsPrintPropertyOrMethodName(e),this.tsPrintSignatureDeclarationBase(e),this.token(";")},r.TSIndexSignature=function(e){const{readonly:t}=e;t&&(this.word("readonly"),this.space());this.token("["),this._parameters(e.parameters,e),this.token("]"),this.print(e.typeAnnotation,e),this.token(";")},r.TSAnyKeyword=function(){this.word("any")},r.TSUnknownKeyword=function(){this.word("unknown")},r.TSNumberKeyword=function(){this.word("number")},r.TSObjectKeyword=function(){this.word("object")},r.TSBooleanKeyword=function(){this.word("boolean")},r.TSStringKeyword=function(){this.word("string")},r.TSSymbolKeyword=function(){this.word("symbol")},r.TSVoidKeyword=function(){this.word("void")},r.TSUndefinedKeyword=function(){this.word("undefined")},r.TSNullKeyword=function(){this.word("null")},r.TSNeverKeyword=function(){this.word("never")},r.TSThisType=function(){this.word("this")},r.TSFunctionType=function(e){this.tsPrintFunctionOrConstructorType(e)},r.TSConstructorType=function(e){this.word("new"),this.space(),this.tsPrintFunctionOrConstructorType(e)},r.tsPrintFunctionOrConstructorType=function(e){const{typeParameters:t,parameters:r}=e;this.print(t,e),this.token("("),this._parameters(r,e),this.token(")"),this.space(),this.token("=>"),this.space(),this.print(e.typeAnnotation.typeAnnotation,e)},r.TSTypeReference=function(e){this.print(e.typeName,e),this.print(e.typeParameters,e)},r.TSTypePredicate=function(e){this.print(e.parameterName),this.space(),this.word("is"),this.space(),this.print(e.typeAnnotation.typeAnnotation)},r.TSTypeQuery=function(e){this.word("typeof"),this.space(),this.print(e.exprName)},r.TSTypeLiteral=function(e){this.tsPrintTypeLiteralOrInterfaceBody(e.members,e)},r.tsPrintTypeLiteralOrInterfaceBody=function(e,t){this.tsPrintBraced(e,t)},r.tsPrintBraced=function(e,t){if(this.token("{"),e.length){this.indent(),this.newline();for(const r of e)this.print(r,t),this.newline();this.dedent(),this.rightBrace()}else this.token("}")},r.TSArrayType=function(e){this.print(e.elementType),this.token("[]")},r.TSTupleType=function(e){this.token("["),this.printList(e.elementTypes,e),this.token("]")},r.TSOptionalType=function(e){this.print(e.typeAnnotation,e),this.token("?")},r.TSRestType=function(e){this.token("..."),this.print(e.typeAnnotation,e)},r.TSUnionType=function(e){this.tsPrintUnionOrIntersectionType(e,"|")},r.TSIntersectionType=function(e){this.tsPrintUnionOrIntersectionType(e,"&")},r.tsPrintUnionOrIntersectionType=function(e,t){this.printJoin(e.types,e,{separator(){this.space(),this.token(t),this.space()}})},r.TSConditionalType=function(e){this.print(e.checkType),this.space(),this.word("extends"),this.space(),this.print(e.extendsType),this.space(),this.token("?"),this.space(),this.print(e.trueType),this.space(),this.token(":"),this.space(),this.print(e.falseType)},r.TSInferType=function(e){this.token("infer"),this.space(),this.print(e.typeParameter)},r.TSParenthesizedType=function(e){this.token("("),this.print(e.typeAnnotation,e),this.token(")")},r.TSTypeOperator=function(e){this.token(e.operator),this.space(),this.print(e.typeAnnotation,e)},r.TSIndexedAccessType=function(e){this.print(e.objectType,e),this.token("["),this.print(e.indexType,e),this.token("]")},r.TSMappedType=function(e){const{readonly:t,typeParameter:r,optional:i}=e;this.token("{"),this.space(),t&&(n(this,t),this.word("readonly"),this.space());this.token("["),this.word(r.name),this.space(),this.word("in"),this.space(),this.print(r.constraint,r),this.token("]"),i&&(n(this,i),this.token("?"));this.token(":"),this.space(),this.print(e.typeAnnotation,e),this.space(),this.token("}")},r.TSLiteralType=function(e){this.print(e.literal,e)},r.TSExpressionWithTypeArguments=function(e){this.print(e.expression,e),this.print(e.typeParameters,e)},r.TSInterfaceDeclaration=function(e){const{declare:t,id:r,typeParameters:n,extends:i,body:s}=e;t&&(this.word("declare"),this.space());this.word("interface"),this.space(),this.print(r,e),this.print(n,e),i&&(this.space(),this.word("extends"),this.space(),this.printList(i,e));this.space(),this.print(s,e)},r.TSInterfaceBody=function(e){this.tsPrintTypeLiteralOrInterfaceBody(e.body,e)},r.TSTypeAliasDeclaration=function(e){const{declare:t,id:r,typeParameters:n,typeAnnotation:i}=e;t&&(this.word("declare"),this.space());this.word("type"),this.space(),this.print(r,e),this.print(n,e),this.space(),this.token("="),this.space(),this.print(i,e),this.token(";")},r.TSAsExpression=function(e){const{expression:t,typeAnnotation:r}=e;this.print(t,e),this.space(),this.word("as"),this.space(),this.print(r,e)},r.TSTypeAssertion=function(e){const{typeAnnotation:t,expression:r}=e;this.token("<"),this.print(t,e),this.token(">"),this.space(),this.print(r,e)},r.TSEnumDeclaration=function(e){const{declare:t,const:r,id:n,members:i}=e;t&&(this.word("declare"),this.space());r&&(this.word("const"),this.space());this.word("enum"),this.space(),this.print(n,e),this.space(),this.tsPrintBraced(i,e)},r.TSEnumMember=function(e){const{id:t,initializer:r}=e;this.print(t,e),r&&(this.space(),this.token("="),this.space(),this.print(r,e));this.token(",")},r.TSModuleDeclaration=function(e){const{declare:t,id:r}=e;t&&(this.word("declare"),this.space());e.global||(this.word("Identifier"===r.type?"namespace":"module"),this.space());if(this.print(r,e),!e.body)return void this.token(";");let n=e.body;for(;"TSModuleDeclaration"===n.type;)this.token("."),this.print(n.id,n),n=n.body;this.space(),this.print(n,e)},r.TSModuleBlock=function(e){this.tsPrintBraced(e.body,e)},r.TSImportEqualsDeclaration=function(e){const{isExport:t,id:r,moduleReference:n}=e;t&&(this.word("export"),this.space());this.word("import"),this.space(),this.print(r,e),this.space(),this.token("="),this.space(),this.print(n,e),this.token(";")},r.TSExternalModuleReference=function(e){this.token("require("),this.print(e.expression,e),this.token(")")},r.TSNonNullExpression=function(e){this.print(e.expression,e),this.token("!")},r.TSExportAssignment=function(e){this.word("export"),this.space(),this.token("="),this.space(),this.print(e.expression,e),this.token(";")},r.TSNamespaceExportDeclaration=function(e){this.word("export"),this.space(),this.word("as"),this.space(),this.word("namespace"),this.space(),this.print(e.id,e)},r.tsPrintSignatureDeclarationBase=function(e){const{typeParameters:t,parameters:r}=e;this.print(t,e),this.token("("),this._parameters(r,e),this.token(")"),this.print(e.typeAnnotation,e)}},{}],49:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t,r){return new o(e,t,r).generate()},r.CodeGenerator=void 0;var n=s(e("./source-map")),i=s(e("./printer"));function s(e){return e&&e.__esModule?e:{default:e}}class o extends i.default{constructor(e,t={},r){super(function(e,t){const r={auxiliaryCommentBefore:t.auxiliaryCommentBefore,auxiliaryCommentAfter:t.auxiliaryCommentAfter,shouldPrintComment:t.shouldPrintComment,retainLines:t.retainLines,retainFunctionParens:t.retainFunctionParens,comments:null==t.comments||t.comments,compact:t.compact,minified:t.minified,concise:t.concise,jsonCompatibleStrings:t.jsonCompatibleStrings,indent:{adjustMultilineComment:!0,style:"  ",base:0},decoratorsBeforeExport:!!t.decoratorsBeforeExport,jsescOption:Object.assign({quotes:"double",wrap:!0},t.jsescOption)};r.minified?(r.compact=!0,r.shouldPrintComment=r.shouldPrintComment||(()=>r.comments)):r.shouldPrintComment=r.shouldPrintComment||(e=>r.comments||e.indexOf("@license")>=0||e.indexOf("@preserve")>=0);"auto"===r.compact&&(r.compact=e.length>5e5,r.compact&&console.error("[BABEL] Note: The code generator has deoptimised the styling of "+`${t.filename} as it exceeds the max of 500KB.`));r.compact&&(r.indent.adjustMultilineComment=!1);return r}(r,t),t.sourceMaps?new n.default(t,r):null),this.ast=e}generate(){return super.generate(this.ast)}}r.CodeGenerator=class{constructor(e,t,r){this._generator=new o(e,t,r)}generate(){return this._generator.generate()}}},{"./printer":53,"./source-map":54}],50:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.needsWhitespace=p,r.needsWhitespaceBefore=function(e,t){return p(e,t,"before")},r.needsWhitespaceAfter=function(e,t){return p(e,t,"after")},r.needsParens=function(e,t,r){if(!t)return!1;if(i().isNewExpression(t)&&t.callee===e&&function e(t){if(i().isCallExpression(t))return!0;return!!i().isMemberExpression(t)&&(e(t.object)||!t.computed&&e(t.property))}(e))return!0;return c(a,e,t,r)};var n=s(e("./whitespace"));function i(){const t=s(e("@babel/types"));return i=function(){return t},t}function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}function o(e){const t={};function r(e,r){const n=t[e];t[e]=n?function(e,t,i){const s=n(e,t,i);return null==s?r(e,t,i):s}:r}for(const t of Object.keys(e)){const n=i().FLIPPED_ALIAS_KEYS[t];if(n)for(const i of n)r(i,e[t]);else r(t,e[t])}return t}const a=o(s(e("./parentheses"))),u=o(n.nodes),l=o(n.list);function c(e,t,r,n){const i=e[t.type];return i?i(t,r,n):null}function p(e,t,r){if(!e)return 0;i().isExpressionStatement(e)&&(e=e.expression);let n=c(u,e,t);if(!n){const i=c(l,e,t);if(i)for(let t=0;t<i.length&&!(n=p(i[t],e,r));t++);}return"object"==typeof n&&null!==n&&n[r]||0}},{"./parentheses":51,"./whitespace":52,"@babel/types":135}],51:[function(e,t,r){"use strict";function n(){const t=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(e("@babel/types"));return n=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.FunctionTypeAnnotation=r.NullableTypeAnnotation=function(e,t){return n().isArrayTypeAnnotation(t)},r.UpdateExpression=function(e,t){return n().isMemberExpression(t,{object:e})||n().isCallExpression(t,{callee:e})||n().isNewExpression(t,{callee:e})||s(e,t)},r.ObjectExpression=function(e,t,r){return u(r,{considerArrow:!0})},r.DoExpression=function(e,t,r){return u(r)},r.Binary=function(e,t){if("**"===e.operator&&n().isBinaryExpression(t,{operator:"**"}))return t.left===e;if(s(e,t))return!0;if((n().isCallExpression(t)||n().isNewExpression(t))&&t.callee===e||n().isUnaryLike(t)||n().isMemberExpression(t)&&t.object===e||n().isAwaitExpression(t))return!0;if(n().isBinary(t)){const r=t.operator,s=i[r],o=e.operator,a=i[o];if(s===a&&t.right===e&&!n().isLogicalExpression(t)||s>a)return!0}return!1},r.IntersectionTypeAnnotation=r.UnionTypeAnnotation=function(e,t){return n().isArrayTypeAnnotation(t)||n().isNullableTypeAnnotation(t)||n().isIntersectionTypeAnnotation(t)||n().isUnionTypeAnnotation(t)},r.TSAsExpression=function(){return!0},r.TSTypeAssertion=function(){return!0},r.BinaryExpression=function(e,t){return"in"===e.operator&&(n().isVariableDeclarator(t)||n().isFor(t))},r.SequenceExpression=function(e,t){if(n().isForStatement(t)||n().isThrowStatement(t)||n().isReturnStatement(t)||n().isIfStatement(t)&&t.test===e||n().isWhileStatement(t)&&t.test===e||n().isForInStatement(t)&&t.right===e||n().isSwitchStatement(t)&&t.discriminant===e||n().isExpressionStatement(t)&&t.expression===e)return!1;return!0},r.AwaitExpression=r.YieldExpression=function(e,t){return n().isBinary(t)||n().isUnaryLike(t)||n().isCallExpression(t)||n().isMemberExpression(t)||n().isNewExpression(t)||n().isAwaitExpression(t)&&n().isYieldExpression(e)||n().isConditionalExpression(t)&&e===t.test||s(e,t)},r.ClassExpression=function(e,t,r){return u(r,{considerDefaultExports:!0})},r.UnaryLike=o,r.FunctionExpression=function(e,t,r){return u(r,{considerDefaultExports:!0})},r.ArrowFunctionExpression=function(e,t){return n().isExportDeclaration(t)||a(e,t)},r.ConditionalExpression=a,r.OptionalMemberExpression=function(e,t){return n().isCallExpression(t)||n().isMemberExpression(t)},r.AssignmentExpression=function(e){return!!n().isObjectPattern(e.left)||a(...arguments)},r.NewExpression=function(e,t){return s(e,t)};const i={"||":0,"&&":1,"|":2,"^":3,"&":4,"==":5,"===":5,"!=":5,"!==":5,"<":6,">":6,"<=":6,">=":6,in:6,instanceof:6,">>":7,"<<":7,">>>":7,"+":8,"-":8,"*":9,"/":9,"%":9,"**":10},s=(e,t)=>(n().isClassDeclaration(t)||n().isClassExpression(t))&&t.superClass===e;function o(e,t){return n().isMemberExpression(t,{object:e})||n().isCallExpression(t,{callee:e})||n().isNewExpression(t,{callee:e})||n().isBinaryExpression(t,{operator:"**",left:e})||s(e,t)}function a(e,t){return!!(n().isUnaryLike(t)||n().isBinary(t)||n().isConditionalExpression(t,{test:e})||n().isAwaitExpression(t)||n().isOptionalMemberExpression(t)||n().isTaggedTemplateExpression(t)||n().isTSTypeAssertion(t)||n().isTSAsExpression(t))||o(e,t)}function u(e,{considerArrow:t=!1,considerDefaultExports:r=!1}={}){let i=e.length-1,s=e[i],o=e[--i];for(;i>0;){if(n().isExpressionStatement(o,{expression:s})||n().isTaggedTemplateExpression(o)||r&&n().isExportDefaultDeclaration(o,{declaration:s})||t&&n().isArrowFunctionExpression(o,{body:s}))return!0;if(!(n().isCallExpression(o,{callee:s})||n().isSequenceExpression(o)&&o.expressions[0]===s||n().isMemberExpression(o,{object:s})||n().isConditional(o,{test:s})||n().isBinary(o,{left:s})||n().isAssignmentExpression(o,{left:s})))return!1;s=o,o=e[--i]}return!1}},{"@babel/types":135}],52:[function(e,t,r){"use strict";function n(){const t=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(e("@babel/types"));return n=function(){return t},t}function i(e,t={}){return n().isMemberExpression(e)?(i(e.object,t),e.computed&&i(e.property,t)):n().isBinary(e)||n().isAssignmentExpression(e)?(i(e.left,t),i(e.right,t)):n().isCallExpression(e)?(t.hasCall=!0,i(e.callee,t)):n().isFunction(e)?t.hasFunction=!0:n().isIdentifier(e)&&(t.hasHelper=t.hasHelper||s(e.callee)),t}function s(e){return n().isMemberExpression(e)?s(e.object)||s(e.property):n().isIdentifier(e)?"require"===e.name||"_"===e.name[0]:n().isCallExpression(e)?s(e.callee):!(!n().isBinary(e)&&!n().isAssignmentExpression(e))&&(n().isIdentifier(e.left)&&s(e.left)||s(e.right))}function o(e){return n().isLiteral(e)||n().isObjectExpression(e)||n().isArrayExpression(e)||n().isIdentifier(e)||n().isMemberExpression(e)}Object.defineProperty(r,"__esModule",{value:!0}),r.list=r.nodes=void 0;const a={AssignmentExpression(e){const t=i(e.right);if(t.hasCall&&t.hasHelper||t.hasFunction)return{before:t.hasFunction,after:!0}},SwitchCase:(e,t)=>({before:e.consequent.length||t.cases[0]===e,after:!e.consequent.length&&t.cases[t.cases.length-1]===e}),LogicalExpression(e){if(n().isFunction(e.left)||n().isFunction(e.right))return{after:!0}},Literal(e){if("use strict"===e.value)return{after:!0}},CallExpression(e){if(n().isFunction(e.callee)||s(e))return{before:!0,after:!0}},VariableDeclaration(e){for(let t=0;t<e.declarations.length;t++){const r=e.declarations[t];let n=s(r.id)&&!o(r.init);if(!n){const e=i(r.init);n=s(r.init)&&e.hasCall||e.hasFunction}if(n)return{before:!0,after:!0}}},IfStatement(e){if(n().isBlockStatement(e.consequent))return{before:!0,after:!0}}};r.nodes=a,a.ObjectProperty=a.ObjectTypeProperty=a.ObjectMethod=function(e,t){if(t.properties[0]===e)return{before:!0}},a.ObjectTypeCallProperty=function(e,t){if(!(t.callProperties[0]!==e||t.properties&&t.properties.length))return{before:!0}},a.ObjectTypeIndexer=function(e,t){if(!(t.indexers[0]!==e||t.properties&&t.properties.length||t.callProperties&&t.callProperties.length))return{before:!0}},a.ObjectTypeInternalSlot=function(e,t){if(!(t.internalSlots[0]!==e||t.properties&&t.properties.length||t.callProperties&&t.callProperties.length||t.indexers&&t.indexers.length))return{before:!0}};const u={VariableDeclaration:e=>e.declarations.map(e=>e.init),ArrayExpression:e=>e.elements,ObjectExpression:e=>e.properties};r.list=u,[["Function",!0],["Class",!0],["Loop",!0],["LabeledStatement",!0],["SwitchStatement",!0],["TryStatement",!0]].forEach(function([e,t]){"boolean"==typeof t&&(t={after:t,before:t}),[e].concat(n().FLIPPED_ALIAS_KEYS[e]||[]).forEach(function(e){a[e]=function(){return t}})})},{"@babel/types":135}],53:[function(e,t,r){"use strict";function n(){const t=c(e("lodash/isInteger"));return n=function(){return t},t}function i(){const t=c(e("lodash/repeat"));return i=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var s=c(e("./buffer")),o=l(e("./node"));function a(){const t=l(e("@babel/types"));return a=function(){return t},t}var u=l(e("./generators"));function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}function c(e){return e&&e.__esModule?e:{default:e}}const p=/e/i,f=/\.0+$/,h=/^0[box]/;class d{constructor(e,t){this.inForStatementInitCounter=0,this._printStack=[],this._indent=0,this._insideAux=!1,this._printedCommentStarts={},this._parenPushNewlineState=null,this._noLineTerminator=!1,this._printAuxAfterOnNextUserNode=!1,this._printedComments=new WeakSet,this._endsWithInteger=!1,this._endsWithWord=!1,this.format=e||{},this._buf=new s.default(t)}generate(e){return this.print(e),this._maybeAddAuxComment(),this._buf.get()}indent(){this.format.compact||this.format.concise||this._indent++}dedent(){this.format.compact||this.format.concise||this._indent--}semicolon(e=!1){this._maybeAddAuxComment(),this._append(";",!e)}rightBrace(){this.format.minified&&this._buf.removeLastSemicolon(),this.token("}")}space(e=!1){this.format.compact||(this._buf.hasContent()&&!this.endsWith(" ")&&!this.endsWith("\n")||e)&&this._space()}word(e){(this._endsWithWord||this.endsWith("/")&&0===e.indexOf("/"))&&this._space(),this._maybeAddAuxComment(),this._append(e),this._endsWithWord=!0}number(e){this.word(e),this._endsWithInteger=(0,n().default)(+e)&&!h.test(e)&&!p.test(e)&&!f.test(e)&&"."!==e[e.length-1]}token(e){("--"===e&&this.endsWith("!")||"+"===e[0]&&this.endsWith("+")||"-"===e[0]&&this.endsWith("-")||"."===e[0]&&this._endsWithInteger)&&this._space(),this._maybeAddAuxComment(),this._append(e)}newline(e){if(!this.format.retainLines&&!this.format.compact)if(this.format.concise)this.space();else if(!(this.endsWith("\n\n")||("number"!=typeof e&&(e=1),e=Math.min(2,e),(this.endsWith("{\n")||this.endsWith(":\n"))&&e--,e<=0)))for(let t=0;t<e;t++)this._newline()}endsWith(e){return this._buf.endsWith(e)}removeTrailingNewline(){this._buf.removeTrailingNewline()}exactSource(e,t){this._catchUp("start",e),this._buf.exactSource(e,t)}source(e,t){this._catchUp(e,t),this._buf.source(e,t)}withSource(e,t,r){this._catchUp(e,t),this._buf.withSource(e,t,r)}_space(){this._append(" ",!0)}_newline(){this._append("\n",!0)}_append(e,t=!1){this._maybeAddParen(e),this._maybeIndent(e),t?this._buf.queue(e):this._buf.append(e),this._endsWithWord=!1,this._endsWithInteger=!1}_maybeIndent(e){this._indent&&this.endsWith("\n")&&"\n"!==e[0]&&this._buf.queue(this._getIndent())}_maybeAddParen(e){const t=this._parenPushNewlineState;if(!t)return;let r;for(this._parenPushNewlineState=null,r=0;r<e.length&&" "===e[r];r++)continue;if(r===e.length)return;const n=e[r];if("\n"!==n){if("/"!==n)return;if(r+1===e.length)return;const t=e[r+1];if("/"!==t&&"*"!==t)return}this.token("("),this.indent(),t.printed=!0}_catchUp(e,t){if(!this.format.retainLines)return;const r=t?t[e]:null;if(r&&null!==r.line){const e=r.line-this._buf.getCurrentLine();for(let t=0;t<e;t++)this._newline()}}_getIndent(){return(0,i().default)(this.format.indent.style,this._indent)}startTerminatorless(e=!1){return e?(this._noLineTerminator=!0,null):this._parenPushNewlineState={printed:!1}}endTerminatorless(e){this._noLineTerminator=!1,e&&e.printed&&(this.dedent(),this.newline(),this.token(")"))}print(e,t){if(!e)return;const r=this.format.concise;if(e._compact&&(this.format.concise=!0),!this[e.type])throw new ReferenceError(`unknown node of type ${JSON.stringify(e.type)} with constructor ${JSON.stringify(e&&e.constructor.name)}`);this._printStack.push(e);const n=this._insideAux;this._insideAux=!e.loc,this._maybeAddAuxComment(this._insideAux&&!n);let i=o.needsParens(e,t,this._printStack);this.format.retainFunctionParens&&"FunctionExpression"===e.type&&e.extra&&e.extra.parenthesized&&(i=!0),i&&this.token("("),this._printLeadingComments(e);const s=a().isProgram(e)||a().isFile(e)?null:e.loc;this.withSource("start",s,()=>{this[e.type](e,t)}),this._printTrailingComments(e),i&&this.token(")"),this._printStack.pop(),this.format.concise=r,this._insideAux=n}_maybeAddAuxComment(e){e&&this._printAuxBeforeComment(),this._insideAux||this._printAuxAfterComment()}_printAuxBeforeComment(){if(this._printAuxAfterOnNextUserNode)return;this._printAuxAfterOnNextUserNode=!0;const e=this.format.auxiliaryCommentBefore;e&&this._printComment({type:"CommentBlock",value:e})}_printAuxAfterComment(){if(!this._printAuxAfterOnNextUserNode)return;this._printAuxAfterOnNextUserNode=!1;const e=this.format.auxiliaryCommentAfter;e&&this._printComment({type:"CommentBlock",value:e})}getPossibleRaw(e){const t=e.extra;if(t&&null!=t.raw&&null!=t.rawValue&&e.value===t.rawValue)return t.raw}printJoin(e,t,r={}){if(!e||!e.length)return;r.indent&&this.indent();const n={addNewlines:r.addNewlines};for(let i=0;i<e.length;i++){const s=e[i];s&&(r.statement&&this._printNewline(!0,s,t,n),this.print(s,t),r.iterator&&r.iterator(s,i),r.separator&&i<e.length-1&&r.separator.call(this),r.statement&&this._printNewline(!1,s,t,n))}r.indent&&this.dedent()}printAndIndentOnComments(e,t){const r=e.leadingComments&&e.leadingComments.length>0;r&&this.indent(),this.print(e,t),r&&this.dedent()}printBlock(e){const t=e.body;a().isEmptyStatement(t)||this.space(),this.print(t,e)}_printTrailingComments(e){this._printComments(this._getComments(!1,e))}_printLeadingComments(e){this._printComments(this._getComments(!0,e))}printInnerComments(e,t=!0){e.innerComments&&e.innerComments.length&&(t&&this.indent(),this._printComments(e.innerComments),t&&this.dedent())}printSequence(e,t,r={}){return r.statement=!0,this.printJoin(e,t,r)}printList(e,t,r={}){return null==r.separator&&(r.separator=m),this.printJoin(e,t,r)}_printNewline(e,t,r,n){if(this.format.retainLines||this.format.compact)return;if(this.format.concise)return void this.space();let i=0;if(this._buf.hasContent()){e||i++,n.addNewlines&&(i+=n.addNewlines(e,t)||0),(e?o.needsWhitespaceBefore:o.needsWhitespaceAfter)(t,r)&&i++}this.newline(i)}_getComments(e,t){return t&&(e?t.leadingComments:t.trailingComments)||[]}_printComment(e){if(!this.format.shouldPrintComment(e.value))return;if(e.ignore)return;if(this._printedComments.has(e))return;if(this._printedComments.add(e),null!=e.start){if(this._printedCommentStarts[e.start])return;this._printedCommentStarts[e.start]=!0}const t="CommentBlock"===e.type;this.newline(this._buf.hasContent()&&!this._noLineTerminator&&t?1:0),this.endsWith("[")||this.endsWith("{")||this.space();let r=t||this._noLineTerminator?`/*${e.value}*/`:`//${e.value}\n`;if(t&&this.format.indent.adjustMultilineComment){const t=e.loc&&e.loc.start.column;if(t){const e=new RegExp("\\n\\s{1,"+t+"}","g");r=r.replace(e,"\n")}const n=Math.max(this._getIndent().length,this._buf.getCurrentColumn());r=r.replace(/\n(?!$)/g,`\n${(0,i().default)(" ",n)}`)}this.endsWith("/")&&this._space(),this.withSource("start",e.loc,()=>{this._append(r)}),this.newline(t&&!this._noLineTerminator?1:0)}_printComments(e){if(e&&e.length)for(const t of e)this._printComment(t)}}function m(){this.token(","),this.space()}r.default=d,Object.assign(d.prototype,u)},{"./buffer":36,"./generators":41,"./node":50,"@babel/types":135,"lodash/isInteger":604,"lodash/repeat":620}],54:[function(e,t,r){"use strict";function n(){const t=(r=e("source-map"))&&r.__esModule?r:{default:r};var r;return n=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;r.default=class{constructor(e,t){this._cachedMap=null,this._code=t,this._opts=e,this._rawMappings=[]}get(){if(!this._cachedMap){const e=this._cachedMap=new(n().default.SourceMapGenerator)({sourceRoot:this._opts.sourceRoot}),t=this._code;"string"==typeof t?e.setSourceContent(this._opts.sourceFileName,t):"object"==typeof t&&Object.keys(t).forEach(r=>{e.setSourceContent(r,t[r])}),this._rawMappings.forEach(e.addMapping,e)}return this._cachedMap.toJSON()}getRawMappings(){return this._rawMappings.slice()}mark(e,t,r,n,i,s,o){this._lastGenLine!==e&&null===r||(o||this._lastGenLine!==e||this._lastSourceLine!==r||this._lastSourceColumn!==n)&&(this._cachedMap=null,this._lastGenLine=e,this._lastSourceLine=r,this._lastSourceColumn=n,this._rawMappings.push({name:i||void 0,generated:{line:e,column:t},source:null==r?void 0:s||this._opts.sourceFileName,original:null==r?void 0:{line:r,column:n}}))}}},{"source-map":670}],55:[function(e,t,r){"use strict";function n(){const t=o(e("@babel/helper-get-function-arity"));return n=function(){return t},t}function i(){const t=o(e("@babel/template"));return i=function(){return t},t}function s(){const t=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(e("@babel/types"));return s=function(){return t},t}function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function({node:e,parent:t,scope:r,id:i},o=!1){if(e.id)return;if(!s().isObjectProperty(t)&&!s().isObjectMethod(t,{kind:"method"})||t.computed&&!s().isLiteral(t.key)){if(s().isVariableDeclarator(t)){if(i=t.id,s().isIdentifier(i)&&!o){const t=r.parent.getBinding(i.name);if(t&&t.constant&&r.getBinding(i.name)===t)return e.id=s().cloneNode(i),void(e.id[s().NOT_LOCAL_BINDING]=!0)}}else if(s().isAssignmentExpression(t))i=t.left;else if(!i)return}else i=t.key;let c;i&&s().isLiteral(i)?c=function(e){if(s().isNullLiteral(e))return"null";if(s().isRegExpLiteral(e))return`_${e.pattern}_${e.flags}`;if(s().isTemplateLiteral(e))return e.quasis.map(e=>e.value.raw).join("");if(void 0!==e.value)return e.value+"";return""}(i):i&&s().isIdentifier(i)&&(c=i.name);if(void 0===c)return;return c=s().toBindingIdentifierName(c),(i=s().identifier(c))[s().NOT_LOCAL_BINDING]=!0,function(e,t,r,i){if(e.selfReference){if(!i.hasBinding(r.name)||i.hasGlobal(r.name)){if(!s().isFunction(t))return;let e=a;t.generator&&(e=u);const o=e({FUNCTION:t,FUNCTION_ID:r,FUNCTION_KEY:i.generateUidIdentifier(r.name)}).expression,l=o.callee.body.body[0].params;for(let e=0,r=(0,n().default)(t);e<r;e++)l.push(i.generateUidIdentifier("x"));return o}i.rename(r.name)}t.id=r,i.getProgramParent().references[r.name]=!0}(function(e,t,r){const n={selfAssignment:!1,selfReference:!1,outerDeclar:r.getBindingIdentifier(t),references:[],name:t},i=r.getOwnBinding(t);return i?"param"===i.kind&&(n.selfReference=!0):(n.outerDeclar||r.hasGlobal(t))&&r.traverse(e,l,n),n}(e,c,r),e,i,r)||e};const a=(0,i().default)("\n  (function (FUNCTION_KEY) {\n    function FUNCTION_ID() {\n      return FUNCTION_KEY.apply(this, arguments);\n    }\n\n    FUNCTION_ID.toString = function () {\n      return FUNCTION_KEY.toString();\n    }\n\n    return FUNCTION_ID;\n  })(FUNCTION)\n"),u=(0,i().default)("\n  (function (FUNCTION_KEY) {\n    function* FUNCTION_ID() {\n      return yield* FUNCTION_KEY.apply(this, arguments);\n    }\n\n    FUNCTION_ID.toString = function () {\n      return FUNCTION_KEY.toString();\n    };\n\n    return FUNCTION_ID;\n  })(FUNCTION)\n"),l={"ReferencedIdentifier|BindingIdentifier"(e,t){if(e.node.name!==t.name)return;e.scope.getBindingIdentifier(t.name)===t.outerDeclar&&(t.selfReference=!0,e.stop())}}},{"@babel/helper-get-function-arity":56,"@babel/template":64,"@babel/types":135}],56:[function(e,t,r){"use strict";function n(){const t=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(e("@babel/types"));return n=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){const t=e.params;for(let e=0;e<t.length;e++){const r=t[e];if(n().isAssignmentPattern(r)||n().isRestElement(r))return e}return t.length}},{"@babel/types":135}],57:[function(e,t,r){"use strict";function n(){const t=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(e("@babel/types"));return n=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){if(!e.isExportDeclaration())throw new Error("Only export declarations can be splitted.");const t=e.isExportDefaultDeclaration(),r=e.get("declaration"),i=r.isClassDeclaration();if(t){const t=r.isFunctionDeclaration()||i,s=r.isScope()?r.scope.parent:r.scope;let o=r.node.id,a=!1;o||(a=!0,o=s.generateUidIdentifier("default"),(t||r.isFunctionExpression()||r.isClassExpression())&&(r.node.id=n().cloneNode(o)));const u=t?r:n().variableDeclaration("var",[n().variableDeclarator(n().cloneNode(o),r.node)]),l=n().exportNamedDeclaration(null,[n().exportSpecifier(n().cloneNode(o),n().identifier("default"))]);return e.insertAfter(l),e.replaceWith(u),a&&s.registerBinding(i?"let":"var",e),e}if(e.get("specifiers").length>0)throw new Error("It doesn't make sense to split exported specifiers.");const s=r.getOuterBindingIdentifiers(),o=Object.keys(s).map(e=>n().exportSpecifier(n().identifier(e),n().identifier(e))),a=n().exportNamedDeclaration(null,o);return e.insertAfter(a),e.replaceWith(r.node),e}},{"@babel/types":135}],58:[function(e,t,r){"use strict";function n(){const t=(r=e("@babel/template"))&&r.__esModule?r:{default:r};var r;return n=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;const i=Object.create(null);var s=i;r.default=s;const o=e=>t=>({minVersion:e,ast:()=>n().default.program.ast(t)});i.typeof=o("7.0.0-beta.0")`
  export default function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) { return typeof obj; };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype
          ? "symbol"
          : typeof obj;
      };
    }

    return _typeof(obj);
  }
`,i.jsx=o("7.0.0-beta.0")`
  var REACT_ELEMENT_TYPE;

  export default function _createRawReactElement(type, props, key, children) {
    if (!REACT_ELEMENT_TYPE) {
      REACT_ELEMENT_TYPE = (
        typeof Symbol === "function" && Symbol.for && Symbol.for("react.element")
      ) || 0xeac7;
    }

    var defaultProps = type && type.defaultProps;
    var childrenLength = arguments.length - 3;

    if (!props && childrenLength !== 0) {
      // If we're going to assign props.children, we create a new object now
      // to avoid mutating defaultProps.
      props = {
        children: void 0,
      };
    }
    if (props && defaultProps) {
      for (var propName in defaultProps) {
        if (props[propName] === void 0) {
          props[propName] = defaultProps[propName];
        }
      }
    } else if (!props) {
      props = defaultProps || {};
    }

    if (childrenLength === 1) {
      props.children = children;
    } else if (childrenLength > 1) {
      var childArray = new Array(childrenLength);
      for (var i = 0; i < childrenLength; i++) {
        childArray[i] = arguments[i + 3];
      }
      props.children = childArray;
    }

    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: type,
      key: key === undefined ? null : '' + key,
      ref: null,
      props: props,
      _owner: null,
    };
  }
`,i.asyncIterator=o("7.0.0-beta.0")`
  export default function _asyncIterator(iterable) {
    var method
    if (typeof Symbol === "function") {
      if (Symbol.asyncIterator) {
        method = iterable[Symbol.asyncIterator]
        if (method != null) return method.call(iterable);
      }
      if (Symbol.iterator) {
        method = iterable[Symbol.iterator]
        if (method != null) return method.call(iterable);
      }
    }
    throw new TypeError("Object is not async iterable");
  }
`,i.AwaitValue=o("7.0.0-beta.0")`
  export default function _AwaitValue(value) {
    this.wrapped = value;
  }
`,i.AsyncGenerator=o("7.0.0-beta.0")`
  import AwaitValue from "AwaitValue";

  export default function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null,
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg)
        var value = result.value;
        var wrappedAwait = value instanceof AwaitValue;

        Promise.resolve(wrappedAwait ? value.wrapped : value).then(
          function (arg) {
            if (wrappedAwait) {
              resume("next", arg);
              return
            }

            settle(result.done ? "return" : "normal", arg);
          },
          function (err) { resume("throw", err); });
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({ value: value, done: true });
          break;
        case "throw":
          front.reject(value);
          break;
        default:
          front.resolve({ value: value, done: false });
          break;
      }

      front = front.next;
      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    // Hide "return" method if generator return is not supported
    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; };
  }

  AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };
  AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };
  AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };
`,i.wrapAsyncGenerator=o("7.0.0-beta.0")`
  import AsyncGenerator from "AsyncGenerator";

  export default function _wrapAsyncGenerator(fn) {
    return function () {
      return new AsyncGenerator(fn.apply(this, arguments));
    };
  }
`,i.awaitAsyncGenerator=o("7.0.0-beta.0")`
  import AwaitValue from "AwaitValue";

  export default function _awaitAsyncGenerator(value) {
    return new AwaitValue(value);
  }
`,i.asyncGeneratorDelegate=o("7.0.0-beta.0")`
  export default function _asyncGeneratorDelegate(inner, awaitWrap) {
    var iter = {}, waiting = false;

    function pump(key, value) {
      waiting = true;
      value = new Promise(function (resolve) { resolve(inner[key](value)); });
      return { done: false, value: awaitWrap(value) };
    };

    if (typeof Symbol === "function" && Symbol.iterator) {
      iter[Symbol.iterator] = function () { return this; };
    }

    iter.next = function (value) {
      if (waiting) {
        waiting = false;
        return value;
      }
      return pump("next", value);
    };

    if (typeof inner.throw === "function") {
      iter.throw = function (value) {
        if (waiting) {
          waiting = false;
          throw value;
        }
        return pump("throw", value);
      };
    }

    if (typeof inner.return === "function") {
      iter.return = function (value) {
        return pump("return", value);
      };
    }

    return iter;
  }
`,i.asyncToGenerator=o("7.0.0-beta.0")`
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  export default function _asyncToGenerator(fn) {
    return function () {
      var self = this, args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }
`,i.classCallCheck=o("7.0.0-beta.0")`
  export default function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
`,i.createClass=o("7.0.0-beta.0")`
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i ++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  export default function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
`,i.defineEnumerableProperties=o("7.0.0-beta.0")`
  export default function _defineEnumerableProperties(obj, descs) {
    for (var key in descs) {
      var desc = descs[key];
      desc.configurable = desc.enumerable = true;
      if ("value" in desc) desc.writable = true;
      Object.defineProperty(obj, key, desc);
    }

    // Symbols are not enumerated over by for-in loops. If native
    // Symbols are available, fetch all of the descs object's own
    // symbol properties and define them on our target object too.
    if (Object.getOwnPropertySymbols) {
      var objectSymbols = Object.getOwnPropertySymbols(descs);
      for (var i = 0; i < objectSymbols.length; i++) {
        var sym = objectSymbols[i];
        var desc = descs[sym];
        desc.configurable = desc.enumerable = true;
        if ("value" in desc) desc.writable = true;
        Object.defineProperty(obj, sym, desc);
      }
    }
    return obj;
  }
`,i.defaults=o("7.0.0-beta.0")`
  export default function _defaults(obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = Object.getOwnPropertyDescriptor(defaults, key);
      if (value && value.configurable && obj[key] === undefined) {
        Object.defineProperty(obj, key, value);
      }
    }
    return obj;
  }
`,i.defineProperty=o("7.0.0-beta.0")`
  export default function _defineProperty(obj, key, value) {
    // Shortcircuit the slow defineProperty path when possible.
    // We are trying to avoid issues where setters defined on the
    // prototype cause side effects under the fast path of simple
    // assignment. By checking for existence of the property with
    // the in operator, we can optimize most of this overhead away.
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
`,i.extends=o("7.0.0-beta.0")`
  export default function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };

    return _extends.apply(this, arguments);
  }
`,i.objectSpread=o("7.0.0-beta.0")`
  import defineProperty from "defineProperty";

  export default function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = (arguments[i] != null) ? arguments[i] : {};
      var ownKeys = Object.keys(source);
      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }
      ownKeys.forEach(function(key) {
        defineProperty(target, key, source[key]);
      });
    }
    return target;
  }
`,i.inherits=o("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";

  export default function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) setPrototypeOf(subClass, superClass);
  }
`,i.inheritsLoose=o("7.0.0-beta.0")`
  export default function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
`,i.getPrototypeOf=o("7.0.0-beta.0")`
  export default function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
    return _getPrototypeOf(o);
  }
`,i.setPrototypeOf=o("7.0.0-beta.0")`
  export default function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
`,i.construct=o("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";

  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;

    // core-js@3
    if (Reflect.construct.sham) return false;

    // Proxy can't be polyfilled. Every browser implemented
    // proxies before or at the same time as Reflect.construct,
    // so if they support Proxy they also support Reflect.construct.
    if (typeof Proxy === "function") return true;

    // Since Reflect.construct can't be properly polyfilled, some
    // implementations (e.g. core-js@2) don't set the correct internal slots.
    // Those polyfills don't allow us to subclass built-ins, so we need to
    // use our fallback implementation.
    try {
      // If the internal slots aren't set, this throws an error similar to
      //   TypeError: this is not a Date object.
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  export default function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      // NOTE: If Parent !== Class, the correct __proto__ is set *after*
      //       calling the constructor.
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }
    // Avoid issues with Class being present but undefined when it wasn't
    // present in the original call.
    return _construct.apply(null, arguments);
  }
`,i.isNativeFunction=o("7.0.0-beta.0")`
  export default function _isNativeFunction(fn) {
    // Note: This function returns "true" for core-js functions.
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
`,i.wrapNativeSuper=o("7.0.0-beta.0")`
  import getPrototypeOf from "getPrototypeOf";
  import setPrototypeOf from "setPrototypeOf";
  import isNativeFunction from "isNativeFunction";
  import construct from "construct";

  export default function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return construct(Class, arguments, getPrototypeOf(this).constructor)
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true,
        }
      });

      return setPrototypeOf(Wrapper, Class);
    }

    return _wrapNativeSuper(Class)
  }
`,i.instanceof=o("7.0.0-beta.0")`
  export default function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
      return right[Symbol.hasInstance](left);
    } else {
      return left instanceof right;
    }
  }
`,i.interopRequireDefault=o("7.0.0-beta.0")`
  export default function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
`,i.interopRequireWildcard=o("7.0.0-beta.0")`
  export default function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};
      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = Object.defineProperty && Object.getOwnPropertyDescriptor
              ? Object.getOwnPropertyDescriptor(obj, key)
              : {};
            if (desc.get || desc.set) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
      }
      newObj.default = obj;
      return newObj;
    }
  }
`,i.newArrowCheck=o("7.0.0-beta.0")`
  export default function _newArrowCheck(innerThis, boundThis) {
    if (innerThis !== boundThis) {
      throw new TypeError("Cannot instantiate an arrow function");
    }
  }
`,i.objectDestructuringEmpty=o("7.0.0-beta.0")`
  export default function _objectDestructuringEmpty(obj) {
    if (obj == null) throw new TypeError("Cannot destructure undefined");
  }
`,i.objectWithoutPropertiesLoose=o("7.0.0-beta.0")`
  export default function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};

    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }
`,i.objectWithoutProperties=o("7.0.0-beta.0")`
  import objectWithoutPropertiesLoose from "objectWithoutPropertiesLoose";

  export default function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = objectWithoutPropertiesLoose(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }
`,i.assertThisInitialized=o("7.0.0-beta.0")`
  export default function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
`,i.possibleConstructorReturn=o("7.0.0-beta.0")`
  import assertThisInitialized from "assertThisInitialized";

  export default function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }
    return assertThisInitialized(self);
  }
`,i.superPropBase=o("7.0.0-beta.0")`
  import getPrototypeOf from "getPrototypeOf";

  export default function _superPropBase(object, property) {
    // Yes, this throws if object is null to being with, that's on purpose.
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = getPrototypeOf(object);
      if (object === null) break;
    }
    return object;
  }
`,i.get=o("7.0.0-beta.0")`
  import getPrototypeOf from "getPrototypeOf";
  import superPropBase from "superPropBase";

  export default function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = superPropBase(target, property);

        if (!base) return;

        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }
    return _get(target, property, receiver || target);
  }
`,i.set=o("7.0.0-beta.0")`
  import getPrototypeOf from "getPrototypeOf";
  import superPropBase from "superPropBase";
  import defineProperty from "defineProperty";

  function set(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) {
      set = Reflect.set;
    } else {
      set = function set(target, property, value, receiver) {
        var base = superPropBase(target, property);
        var desc;

        if (base) {
          desc = Object.getOwnPropertyDescriptor(base, property);
          if (desc.set) {
            desc.set.call(receiver, value);
            return true;
          } else if (!desc.writable) {
            // Both getter and non-writable fall into this.
            return false;
          }
        }

        // Without a super that defines the property, spec boils down to
        // "define on receiver" for some reason.
        desc = Object.getOwnPropertyDescriptor(receiver, property);
        if (desc) {
          if (!desc.writable) {
            // Setter, getter, and non-writable fall into this.
            return false;
          }

          desc.value = value;
          Object.defineProperty(receiver, property, desc);
        } else {
          // Avoid setters that may be defined on Sub's prototype, but not on
          // the instance.
          defineProperty(receiver, property, value);
        }

        return true;
      };
    }

    return set(target, property, value, receiver);
  }

  export default function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);
    if (!s && isStrict) {
      throw new Error('failed to set property');
    }

    return value;
  }
`,i.taggedTemplateLiteral=o("7.0.0-beta.0")`
  export default function _taggedTemplateLiteral(strings, raw) {
    if (!raw) { raw = strings.slice(0); }
    return Object.freeze(Object.defineProperties(strings, {
        raw: { value: Object.freeze(raw) }
    }));
  }
`,i.taggedTemplateLiteralLoose=o("7.0.0-beta.0")`
  export default function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) { raw = strings.slice(0); }
    strings.raw = raw;
    return strings;
  }
`,i.temporalRef=o("7.0.0-beta.0")`
  import undef from "temporalUndefined";

  export default function _temporalRef(val, name) {
    if (val === undef) {
      throw new ReferenceError(name + " is not defined - temporal dead zone");
    } else {
      return val;
    }
  }
`,i.readOnlyError=o("7.0.0-beta.0")`
  export default function _readOnlyError(name) {
    throw new Error("\\"" + name + "\\" is read-only");
  }
`,i.classNameTDZError=o("7.0.0-beta.0")`
  export default function _classNameTDZError(name) {
    throw new Error("Class \\"" + name + "\\" cannot be referenced in computed property keys.");
  }
`,i.temporalUndefined=o("7.0.0-beta.0")`
  export default {};
`,i.slicedToArray=o("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArrayLimit from "iterableToArrayLimit";
  import nonIterableRest from "nonIterableRest";

  export default function _slicedToArray(arr, i) {
    return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
  }
`,i.slicedToArrayLoose=o("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArrayLimitLoose from "iterableToArrayLimitLoose";
  import nonIterableRest from "nonIterableRest";

  export default function _slicedToArrayLoose(arr, i) {
    return arrayWithHoles(arr) || iterableToArrayLimitLoose(arr, i) || nonIterableRest();
  }
`,i.toArray=o("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArray from "iterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _toArray(arr) {
    return arrayWithHoles(arr) || iterableToArray(arr) || nonIterableRest();
  }
`,i.toConsumableArray=o("7.0.0-beta.0")`
  import arrayWithoutHoles from "arrayWithoutHoles";
  import iterableToArray from "iterableToArray";
  import nonIterableSpread from "nonIterableSpread";

  export default function _toConsumableArray(arr) {
    return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
  }
`,i.arrayWithoutHoles=o("7.0.0-beta.0")`
  export default function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
      return arr2;
    }
  }
`,i.arrayWithHoles=o("7.0.0-beta.0")`
  export default function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
`,i.iterableToArray=o("7.0.0-beta.0")`
  export default function _iterableToArray(iter) {
    if (
      Symbol.iterator in Object(iter) ||
      Object.prototype.toString.call(iter) === "[object Arguments]"
    ) return Array.from(iter);
  }
`,i.iterableToArrayLimit=o("7.0.0-beta.0")`
  export default function _iterableToArrayLimit(arr, i) {
    // this is an expanded form of \`for...of\` that properly supports abrupt completions of
    // iterators etc. variable names have been minimised to reduce the size of this massive
    // helper. sometimes spec compliancy is annoying :(
    //
    // _n = _iteratorNormalCompletion
    // _d = _didIteratorError
    // _e = _iteratorError
    // _i = _iterator
    // _s = _step

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
`,i.iterableToArrayLimitLoose=o("7.0.0-beta.0")`
  export default function _iterableToArrayLimitLoose(arr, i) {
    var _arr = [];
    for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
      _arr.push(_step.value);
      if (i && _arr.length === i) break;
    }
    return _arr;
  }
`,i.nonIterableSpread=o("7.0.0-beta.0")`
  export default function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }
`,i.nonIterableRest=o("7.0.0-beta.0")`
  export default function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }
`,i.skipFirstGeneratorNext=o("7.0.0-beta.0")`
  export default function _skipFirstGeneratorNext(fn) {
    return function () {
      var it = fn.apply(this, arguments);
      it.next();
      return it;
    }
  }
`,i.toPrimitive=o("7.1.5")`
  export default function _toPrimitive(
    input,
    hint /*: "default" | "string" | "number" | void */
  ) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
`,i.toPropertyKey=o("7.1.5")`
  import toPrimitive from "toPrimitive";

  export default function _toPropertyKey(arg) {
    var key = toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
`,i.initializerWarningHelper=o("7.0.0-beta.0")`
    export default function _initializerWarningHelper(descriptor, context){
        throw new Error(
          'Decorating class property failed. Please ensure that ' +
          'proposal-class-properties is enabled and set to use loose mode. ' +
          'To use proposal-class-properties in spec mode with decorators, wait for ' +
          'the next major version of decorators in stage 2.'
        );
    }
`,i.initializerDefineProperty=o("7.0.0-beta.0")`
    export default function _initializerDefineProperty(target, property, descriptor, context){
        if (!descriptor) return;

        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0,
        });
    }
`,i.applyDecoratedDescriptor=o("7.0.0-beta.0")`
    export default function _applyDecoratedDescriptor(target, property, decorators, descriptor, context){
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function(key){
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;
        if ('value' in desc || desc.initializer){
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function(desc, decorator){
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0){
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0){
            // This is a hack to avoid this being processed by 'transform-runtime'.
            // See issue #9.
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }
`,i.classPrivateFieldLooseKey=o("7.0.0-beta.0")`
  var id = 0;
  export default function _classPrivateFieldKey(name) {
    return "__private_" + (id++) + "_" + name;
  }
`,i.classPrivateFieldLooseBase=o("7.0.0-beta.0")`
  export default function _classPrivateFieldBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
      throw new TypeError("attempted to use private field on non-instance");
    }
    return receiver;
  }
`,i.classPrivateFieldGet=o("7.0.0-beta.0")`
  export default function _classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver).value;
  }
`,i.classPrivateFieldSet=o("7.0.0-beta.0")`
  export default function _classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to set private field on non-instance");
    }
    var descriptor = privateMap.get(receiver);
    if (!descriptor.writable) {
      // This should only throw in strict mode, but class bodies are
      // always strict and private fields can only be used inside
      // class bodies.
      throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
    return value;
  }
`,i.classStaticPrivateFieldSpecGet=o("7.0.2")`
  export default function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }
    return descriptor.value;
  }
`,i.classStaticPrivateFieldSpecSet=o("7.0.2")`
  export default function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }
    if (!descriptor.writable) {
      // This should only throw in strict mode, but class bodies are
      // always strict and private fields can only be used inside
      // class bodies.
      throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
    return value;
  }
  
`,i.decorate=o("7.1.5")`
  import toArray from "toArray";
  import toPropertyKey from "toPropertyKey";

  // These comments are stripped by @babel/template
  /*::
  type PropertyDescriptor =
    | {
        value: any,
        writable: boolean,
        configurable: boolean,
        enumerable: boolean,
      }
    | {
        get?: () => any,
        set?: (v: any) => void,
        configurable: boolean,
        enumerable: boolean,
      };

  type FieldDescriptor ={
    writable: boolean,
    configurable: boolean,
    enumerable: boolean,
  };

  type Placement = "static" | "prototype" | "own";
  type Key = string | symbol; // PrivateName is not supported yet.

  type ElementDescriptor =
    | {
        kind: "method",
        key: Key,
        placement: Placement,
        descriptor: PropertyDescriptor
      }
    | {
        kind: "field",
        key: Key,
        placement: Placement,
        descriptor: FieldDescriptor,
        initializer?: () => any,
      };

  // This is exposed to the user code
  type ElementObjectInput = ElementDescriptor & {
    [@@toStringTag]?: "Descriptor"
  };

  // This is exposed to the user code
  type ElementObjectOutput = ElementDescriptor & {
    [@@toStringTag]?: "Descriptor"
    extras?: ElementDescriptor[],
    finisher?: ClassFinisher,
  };

  // This is exposed to the user code
  type ClassObject = {
    [@@toStringTag]?: "Descriptor",
    kind: "class",
    elements: ElementDescriptor[],
  };

  type ElementDecorator = (descriptor: ElementObjectInput) => ?ElementObjectOutput;
  type ClassDecorator = (descriptor: ClassObject) => ?ClassObject;
  type ClassFinisher = <A, B>(cl: Class<A>) => Class<B>;

  // Only used by Babel in the transform output, not part of the spec.
  type ElementDefinition =
    | {
        kind: "method",
        value: any,
        key: Key,
        static?: boolean,
        decorators?: ElementDecorator[],
      }
    | {
        kind: "field",
        value: () => any,
        key: Key,
        static?: boolean,
        decorators?: ElementDecorator[],
    };

  declare function ClassFactory<C>(initialize: (instance: C) => void): {
    F: Class<C>,
    d: ElementDefinition[]
  }

  */

  /*::
  // Various combinations with/without extras and with one or many finishers

  type ElementFinisherExtras = {
    element: ElementDescriptor,
    finisher?: ClassFinisher,
    extras?: ElementDescriptor[],
  };

  type ElementFinishersExtras = {
    element: ElementDescriptor,
    finishers: ClassFinisher[],
    extras: ElementDescriptor[],
  };

  type ElementsFinisher = {
    elements: ElementDescriptor[],
    finisher?: ClassFinisher,
  };

  type ElementsFinishers = {
    elements: ElementDescriptor[],
    finishers: ClassFinisher[],
  };

  */

  // ClassDefinitionEvaluation (Steps 26-*)
  export default function _decorate(
    decorators /*: ClassDecorator[] */,
    factory /*: ClassFactory */,
    superClass /*: ?Class<*> */,
  ) /*: Class<*> */ {
    var r = factory(function initialize(O) {
      _initializeInstanceElements(O, decorated.elements);
    }, superClass);
    var decorated = _decorateClass(
      _coalesceClassElements(r.d.map(_createElementDescriptor)),
      decorators,
    );

    _initializeClassElements(r.F, decorated.elements);

    return _runClassFinishers(r.F, decorated.finishers);
  }

  // ClassElementEvaluation
  function _createElementDescriptor(
    def /*: ElementDefinition */,
  ) /*: ElementDescriptor */ {
    var key = toPropertyKey(def.key);

    var descriptor /*: PropertyDescriptor */;
    if (def.kind === "method") {
      descriptor = {
        value: def.value,
        writable: true,
        configurable: true,
        enumerable: false,
      };
      Object.defineProperty(def.value, "name", {
        value: typeof key === "symbol" ? "" : key,
        configurable: true,
      });
    } else if (def.kind === "get") {
      descriptor = { get: def.value, configurable: true, enumerable: false };
    } else if (def.kind === "set") {
      descriptor = { set: def.value, configurable: true, enumerable: false };
    } else if (def.kind === "field") {
      descriptor = { configurable: true, writable: true, enumerable: true };
    }

    var element /*: ElementDescriptor */ = {
      kind: def.kind === "field" ? "field" : "method",
      key: key,
      placement: def.static
        ? "static"
        : def.kind === "field"
          ? "own"
          : "prototype",
      descriptor: descriptor,
    };
    if (def.decorators) element.decorators = def.decorators;
    if (def.kind === "field") element.initializer = def.value;

    return element;
  }

  // CoalesceGetterSetter
  function _coalesceGetterSetter(
    element /*: ElementDescriptor */,
    other /*: ElementDescriptor */,
  ) {
    if (element.descriptor.get !== undefined) {
      other.descriptor.get = element.descriptor.get;
    } else {
      other.descriptor.set = element.descriptor.set;
    }
  }

  // CoalesceClassElements
  function _coalesceClassElements(
    elements /*: ElementDescriptor[] */,
  ) /*: ElementDescriptor[] */ {
    var newElements /*: ElementDescriptor[] */ = [];

    var isSameElement = function(other /*: ElementDescriptor */) /*: boolean */ {
      return (
        other.kind === "method" &&
        other.key === element.key &&
        other.placement === element.placement
      );
    };

    for (var i = 0; i < elements.length; i++) {
      var element /*: ElementDescriptor */ = elements[i];
      var other /*: ElementDescriptor */;

      if (
        element.kind === "method" &&
        (other = newElements.find(isSameElement))
      ) {
        if (
          _isDataDescriptor(element.descriptor) ||
          _isDataDescriptor(other.descriptor)
        ) {
          if (_hasDecorators(element) || _hasDecorators(other)) {
            throw new ReferenceError(
              "Duplicated methods (" + element.key + ") can't be decorated.",
            );
          }
          other.descriptor = element.descriptor;
        } else {
          if (_hasDecorators(element)) {
            if (_hasDecorators(other)) {
              throw new ReferenceError(
                "Decorators can't be placed on different accessors with for " +
                  "the same property (" +
                  element.key +
                  ").",
              );
            }
            other.decorators = element.decorators;
          }
          _coalesceGetterSetter(element, other);
        }
      } else {
        newElements.push(element);
      }
    }

    return newElements;
  }

  function _hasDecorators(element /*: ElementDescriptor */) /*: boolean */ {
    return element.decorators && element.decorators.length;
  }

  function _isDataDescriptor(desc /*: PropertyDescriptor */) /*: boolean */ {
    return (
      desc !== undefined &&
      !(desc.value === undefined && desc.writable === undefined)
    );
  }

  // InitializeClassElements
  function _initializeClassElements /*::<C>*/(
    F /*: Class<C> */,
    elements /*: ElementDescriptor[] */,
  ) {
    var proto = F.prototype;

    ["method", "field"].forEach(function(kind) {
      elements.forEach(function(element /*: ElementDescriptor */) {
        var placement = element.placement;
        if (
          element.kind === kind &&
          (placement === "static" || placement === "prototype")
        ) {
          var receiver = placement === "static" ? F : proto;
          _defineClassElement(receiver, element);
        }
      });
    });
  }

  // InitializeInstanceElements
  function _initializeInstanceElements /*::<C>*/(
    O /*: C */,
    elements /*: ElementDescriptor[] */,
  ) {
    ["method", "field"].forEach(function(kind) {
      elements.forEach(function(element /*: ElementDescriptor */) {
        if (element.kind === kind && element.placement === "own") {
          _defineClassElement(O, element);
        }
      });
    });
  }

  // DefineClassElement
  function _defineClassElement /*::<C>*/(
    receiver /*: C | Class<C> */,
    element /*: ElementDescriptor */,
  ) {
    var descriptor /*: PropertyDescriptor */ = element.descriptor;
    if (element.kind === "field") {
      var initializer = element.initializer;
      descriptor = {
        enumerable: descriptor.enumerable,
        writable: descriptor.writable,
        configurable: descriptor.configurable,
        value: initializer === void 0 ? void 0 : initializer.call(receiver),
      };
    }
    Object.defineProperty(receiver, element.key, descriptor);
  }

  /*::

  type Placements = {
    static: Key[],
    prototype: Key[],
    own: Key[],
  };

  */

  // DecorateClass
  function _decorateClass(
    elements /*: ElementDescriptor[] */,
    decorators /*: ClassDecorator[] */,
  ) /*: ElementsFinishers */ {
    var newElements /*: ElementDescriptor[] */ = [];
    var finishers /*: ClassFinisher[] */ = [];
    var placements /*: Placements */ = { static: [], prototype: [], own: [] };

    elements.forEach(function(element /*: ElementDescriptor */) {
      _addElementPlacement(element, placements);
    });

    elements.forEach(function(element /*: ElementDescriptor */) {
      if (!_hasDecorators(element)) return newElements.push(element);

      var elementFinishersExtras /*: ElementFinishersExtras */ = _decorateElement(
        element,
        placements,
      );
      newElements.push(elementFinishersExtras.element);
      newElements.push.apply(newElements, elementFinishersExtras.extras);
      finishers.push.apply(finishers, elementFinishersExtras.finishers);
    });

    if (!decorators) {
      return { elements: newElements, finishers: finishers };
    }

    var result /*: ElementsFinishers */ = _decorateConstructor(
      newElements,
      decorators,
    );
    finishers.push.apply(finishers, result.finishers);
    result.finishers = finishers;

    return result;
  }

  // AddElementPlacement
  function _addElementPlacement(
    element /*: ElementDescriptor */,
    placements /*: Placements */,
    silent /*: boolean */,
  ) {
    var keys = placements[element.placement];
    if (!silent && keys.indexOf(element.key) !== -1) {
      throw new TypeError("Duplicated element (" + element.key + ")");
    }
    keys.push(element.key);
  }

  // DecorateElement
  function _decorateElement(
    element /*: ElementDescriptor */,
    placements /*: Placements */,
  ) /*: ElementFinishersExtras */ {
    var extras /*: ElementDescriptor[] */ = [];
    var finishers /*: ClassFinisher[] */ = [];

    for (
      var decorators = element.decorators, i = decorators.length - 1;
      i >= 0;
      i--
    ) {
      // (inlined) RemoveElementPlacement
      var keys = placements[element.placement];
      keys.splice(keys.indexOf(element.key), 1);

      var elementObject /*: ElementObjectInput */ = _fromElementDescriptor(
        element,
      );
      var elementFinisherExtras /*: ElementFinisherExtras */ = _toElementFinisherExtras(
        (0, decorators[i])(elementObject) /*: ElementObjectOutput */ ||
          elementObject,
      );

      element = elementFinisherExtras.element;
      _addElementPlacement(element, placements);

      if (elementFinisherExtras.finisher) {
        finishers.push(elementFinisherExtras.finisher);
      }

      var newExtras /*: ElementDescriptor[] | void */ =
        elementFinisherExtras.extras;
      if (newExtras) {
        for (var j = 0; j < newExtras.length; j++) {
          _addElementPlacement(newExtras[j], placements);
        }
        extras.push.apply(extras, newExtras);
      }
    }

    return { element: element, finishers: finishers, extras: extras };
  }

  // DecorateConstructor
  function _decorateConstructor(
    elements /*: ElementDescriptor[] */,
    decorators /*: ClassDecorator[] */,
  ) /*: ElementsFinishers */ {
    var finishers /*: ClassFinisher[] */ = [];

    for (var i = decorators.length - 1; i >= 0; i--) {
      var obj /*: ClassObject */ = _fromClassDescriptor(elements);
      var elementsAndFinisher /*: ElementsFinisher */ = _toClassDescriptor(
        (0, decorators[i])(obj) /*: ClassObject */ || obj,
      );

      if (elementsAndFinisher.finisher !== undefined) {
        finishers.push(elementsAndFinisher.finisher);
      }

      if (elementsAndFinisher.elements !== undefined) {
        elements = elementsAndFinisher.elements;

        for (var j = 0; j < elements.length - 1; j++) {
          for (var k = j + 1; k < elements.length; k++) {
            if (
              elements[j].key === elements[k].key &&
              elements[j].placement === elements[k].placement
            ) {
              throw new TypeError("Duplicated element (" + elements[j].key + ")");
            }
          }
        }
      }
    }

    return { elements: elements, finishers: finishers };
  }

  // FromElementDescriptor
  function _fromElementDescriptor(
    element /*: ElementDescriptor */,
  ) /*: ElementObject */ {
    var obj /*: ElementObject */ = {
      kind: element.kind,
      key: element.key,
      placement: element.placement,
      descriptor: element.descriptor,
    };

    var desc = {
      value: "Descriptor",
      configurable: true,
    };
    Object.defineProperty(obj, Symbol.toStringTag, desc);

    if (element.kind === "field") obj.initializer = element.initializer;

    return obj;
  }

  // ToElementDescriptors
  function _toElementDescriptors(
    elementObjects /*: ElementObject[] */,
  ) /*: ElementDescriptor[] */ {
    if (elementObjects === undefined) return;
    return toArray(elementObjects).map(function(elementObject) {
      var element = _toElementDescriptor(elementObject);
      _disallowProperty(elementObject, "finisher", "An element descriptor");
      _disallowProperty(elementObject, "extras", "An element descriptor");
      return element;
    });
  }

  // ToElementDescriptor
  function _toElementDescriptor(
    elementObject /*: ElementObject */,
  ) /*: ElementDescriptor */ {
    var kind = String(elementObject.kind);
    if (kind !== "method" && kind !== "field") {
      throw new TypeError(
        'An element descriptor\\'s .kind property must be either "method" or' +
          ' "field", but a decorator created an element descriptor with' +
          ' .kind "' +
          kind +
          '"',
      );
    }

    var key = toPropertyKey(elementObject.key);

    var placement = String(elementObject.placement);
    if (
      placement !== "static" &&
      placement !== "prototype" &&
      placement !== "own"
    ) {
      throw new TypeError(
        'An element descriptor\\'s .placement property must be one of "static",' +
          ' "prototype" or "own", but a decorator created an element descriptor' +
          ' with .placement "' +
          placement +
          '"',
      );
    }

    var descriptor /*: PropertyDescriptor */ = elementObject.descriptor;

    _disallowProperty(elementObject, "elements", "An element descriptor");

    var element /*: ElementDescriptor */ = {
      kind: kind,
      key: key,
      placement: placement,
      descriptor: Object.assign({}, descriptor),
    };

    if (kind !== "field") {
      _disallowProperty(elementObject, "initializer", "A method descriptor");
    } else {
      _disallowProperty(
        descriptor,
        "get",
        "The property descriptor of a field descriptor",
      );
      _disallowProperty(
        descriptor,
        "set",
        "The property descriptor of a field descriptor",
      );
      _disallowProperty(
        descriptor,
        "value",
        "The property descriptor of a field descriptor",
      );

      element.initializer = elementObject.initializer;
    }

    return element;
  }

  function _toElementFinisherExtras(
    elementObject /*: ElementObject */,
  ) /*: ElementFinisherExtras */ {
    var element /*: ElementDescriptor */ = _toElementDescriptor(elementObject);
    var finisher /*: ClassFinisher */ = _optionalCallableProperty(
      elementObject,
      "finisher",
    );
    var extras /*: ElementDescriptors[] */ = _toElementDescriptors(
      elementObject.extras,
    );

    return { element: element, finisher: finisher, extras: extras };
  }

  // FromClassDescriptor
  function _fromClassDescriptor(
    elements /*: ElementDescriptor[] */,
  ) /*: ClassObject */ {
    var obj = {
      kind: "class",
      elements: elements.map(_fromElementDescriptor),
    };

    var desc = { value: "Descriptor", configurable: true };
    Object.defineProperty(obj, Symbol.toStringTag, desc);

    return obj;
  }

  // ToClassDescriptor
  function _toClassDescriptor(obj /*: ClassObject */) /*: ElementsFinisher */ {
    var kind = String(obj.kind);
    if (kind !== "class") {
      throw new TypeError(
        'A class descriptor\\'s .kind property must be "class", but a decorator' +
          ' created a class descriptor with .kind "' +
          kind +
          '"',
      );
    }

    _disallowProperty(obj, "key", "A class descriptor");
    _disallowProperty(obj, "placement", "A class descriptor");
    _disallowProperty(obj, "descriptor", "A class descriptor");
    _disallowProperty(obj, "initializer", "A class descriptor");
    _disallowProperty(obj, "extras", "A class descriptor");

    var finisher = _optionalCallableProperty(obj, "finisher");
    var elements = _toElementDescriptors(obj.elements);

    return { elements: elements, finisher: finisher };
  }

  function _disallowProperty(obj, name, objectType) {
    if (obj[name] !== undefined) {
      throw new TypeError(objectType + " can't have a ." + name + " property.");
    }
  }

  function _optionalCallableProperty /*::<T>*/(
    obj /*: T */,
    name /*: $Keys<T> */,
  ) /*: ?Function */ {
    var value = obj[name];
    if (value !== undefined && typeof value !== "function") {
      throw new TypeError("Expected '" + name + "' to be a function");
    }
    return value;
  }

  // RunClassFinishers
  function _runClassFinishers(
    constructor /*: Class<*> */,
    finishers /*: ClassFinisher[] */,
  ) /*: Class<*> */ {
    for (var i = 0; i < finishers.length; i++) {
      var newConstructor /*: ?Class<*> */ = (0, finishers[i])(constructor);
      if (newConstructor !== undefined) {
        // NOTE: This should check if IsConstructor(newConstructor) is false.
        if (typeof newConstructor !== "function") {
          throw new TypeError("Finishers must return a constructor.");
        }
        constructor = newConstructor;
      }
    }
    return constructor;
  }
`,i.classPrivateMethodGet=o("7.1.6")`
  export default function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
  }
`,i.classPrivateMethodSet=o("7.1.6")`
  export default function _classPrivateMethodSet() {
    throw new TypeError("attempted to reassign private method");
  }