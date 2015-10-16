'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var removeNestedKey = function removeNestedKey(obj, nestedKey) {
  if (typeof nestedKey === 'undefined') {
    throw new Error('Specify nestedKey in format x.y');
  }

  var newObj = _extends({}, obj);
  var keys = nestedKey.split('.');
  var ref = newObj;

  for (var i in keys) {
    if (i < keys.length - 1) {
      ref = ref[keys[i]];
    } else {
      delete ref[keys[i]];
    }
  }
  return newObj;
};

var denormalizedObjectToArray = function denormalizedObjectToArray(normalizedObj) {
  return Object.keys(normalizedObj).sort().map(function (id) {
    return normalizedObj[id];
  });
};

exports['default'] = {
  removeNestedKey: removeNestedKey,
  denormalizedObjectToArray: denormalizedObjectToArray
};
module.exports = exports['default'];