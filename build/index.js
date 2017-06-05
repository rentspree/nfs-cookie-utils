'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setOption = setOption;
exports.setLocalItem = setLocalItem;
exports.getLocalItem = getLocalItem;
exports.removeLocalItem = removeLocalItem;
exports.removeAllLocalItem = removeAllLocalItem;

var _cookieLib = require('./cookie-lib');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = {
  path: '/'
};

function setOption() {
  var op = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  options = _lodash2.default.merge(options, op);
}

function setLocalItem(localStorageName, data) {
  // SAVE TO COOKIE
  (0, _cookieLib.save)(localStorageName, JSON.stringify(data), options);
}

function getLocalItem(localStorageName) {
  // GET ITEM FROM LOCAL STORAGE
  if (typeof document !== "undefined" && !!(0, _cookieLib.load)(localStorageName)) {
    return (0, _cookieLib.load)(localStorageName);
  } else {
    return false;
  }
}

function removeLocalItem(localStorageName) {
  // REMOVE ITEM FROM COOKIE
  (0, _cookieLib.remove)(localStorageName, options);
}

function removeAllLocalItem(storageName) {
  Object.keys(storageName).forEach(function (key) {
    removeLocalItem(storageName[key]);
  });
}
//# sourceMappingURL=index.js.map