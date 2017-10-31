'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hide = exports.show = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = require('./actionTypes');

var actionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var show = exports.show = function show(message) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _extends({
    type: actionTypes.SHOW_FLASH,
    autoHideDuration: 5000
  }, props, {
    message: message
  });
};

var hide = exports.hide = function hide() {
  return {
    type: actionTypes.HIDE_FLASH
  };
};