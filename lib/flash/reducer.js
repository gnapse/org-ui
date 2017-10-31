'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = require('./actionTypes');

var actionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { open: false };

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var type = _ref.type,
      props = _objectWithoutProperties(_ref, ['type']);

  switch (type) {
    case actionTypes.SHOW_FLASH:
      return _extends({}, props, { open: true });
    case actionTypes.HIDE_FLASH:
      return _extends({}, state, { open: false });
    default:
      return state;
  }
};