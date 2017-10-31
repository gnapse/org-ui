'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = require('./actionTypes');

var actionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      type = _ref.type,
      component = _ref.component,
      props = _ref.props;

  switch (type) {
    case actionTypes.SHOW_MODAL:
      return component ? { component: component, props: props } : state;
    case actionTypes.HIDE_MODAL:
      return {};
    default:
      return state;
  }
};