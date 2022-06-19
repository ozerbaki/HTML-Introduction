//CommonJS module
const Person = require('./person'); // Modülü import ediyoruz.

const lodash = require('lodash'); // https://www.npmjs.com/package/lodash  3. parti bir uygulama

const alice = new Person('Alice', 29);
console.log(alice);

const cloneAlice = lodash.cloneDeep(alice);
console.log(lodash);
console.log(alice==cloneAlice);

//npm init //package.json ekliyoruz.
//npm i(install) lodash
//npm install
//package.jsona "serve": "node server.js" ekliyoruz.
// terminalde npm run serve ile çalıştırıyoruz.