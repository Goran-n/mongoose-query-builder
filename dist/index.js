"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nestedQuery = exports.formPaginationOptions = exports.validateQuery = exports.objectQuery = exports.objectIdArray = exports.gteQuery = exports.lteQuery = exports.neQuery = exports.inQuery = exports.ninQuery = void 0;

var _lodash = require("lodash");

var _mongoose = require("mongoose");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ninQuery = function ninQuery(q) {
  return q ? {
    $nin: q
  } : undefined;
};

exports.ninQuery = ninQuery;

var inQuery = function inQuery(q) {
  return q ? {
    $in: q
  } : undefined;
};

exports.inQuery = inQuery;

var neQuery = function neQuery(q) {
  return q ? {
    $ne: q
  } : undefined;
};

exports.neQuery = neQuery;

var lteQuery = function lteQuery(q) {
  return q ? {
    $lte: q
  } : undefined;
};

exports.lteQuery = lteQuery;

var gteQuery = function gteQuery(q) {
  return q ? {
    $gte: q
  } : undefined;
};
/**
 * Converts an array of Strings to Mongoose ObjectIds
 * @param {Array} arr
 * @return {Array} []
 */


exports.gteQuery = gteQuery;

var objectIdArray = function objectIdArray(arr) {
  if (!(0, _lodash.isArray)(arr) || (0, _lodash.isEmpty)(arr)) {
    return null;
  }

  return arr.map(function (elm) {
    return new _mongoose.Types.ObjectId(elm);
  });
};

exports.objectIdArray = objectIdArray;

var objectQuery = function objectQuery() {
  var q = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (Object.entries(q).length > 0) {
    return q;
  }

  return undefined;
};

exports.objectQuery = objectQuery;

var validateQuery = function validateQuery() {
  var q = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var obj = (0, _lodash.clone)(q);
  Object.keys(obj).forEach(function (key) {
    return obj[key] === undefined && delete obj[key];
  });
  return obj;
};

exports.validateQuery = validateQuery;

var formPaginationOptions = function formPaginationOptions() {
  var q = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    'limit': q.limit || 25,
    'page': q.page || 1
  };
};

exports.formPaginationOptions = formPaginationOptions;

var nestedQuery = function nestedQuery() {
  var q = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var nest = arguments.length > 1 ? arguments[1] : undefined;
  var query = {};
  Object.entries(q).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    query["".concat(nest, ".").concat(key)] = value;
  });
  return query;
};

exports.nestedQuery = nestedQuery;