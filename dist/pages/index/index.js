(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
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
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread2; });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      Object(_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(source, excluded);
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js ***!
  \***********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _regeneratorRuntime; });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == Object(_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/index/index.tsx":
/*!*******************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/index/index.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Index; });
/* harmony import */ var C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var tard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tard */ "./node_modules/tard/dist/tard.es.js");
/* harmony import */ var _node_modules_tard_dist_styles_index_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../node_modules/tard/dist/styles/index.less */ "./node_modules/tard/dist/styles/index.less");
/* harmony import */ var _node_modules_tard_dist_styles_index_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tard_dist_styles_index_less__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var taro_ui_dist_style_components_button_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! taro-ui/dist/style/components/button.scss */ "./node_modules/taro-ui/dist/style/components/button.scss");
/* harmony import */ var taro_ui_dist_style_components_button_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(taro_ui_dist_style_components_button_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.css */ "./src/pages/index/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _src_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../src/toast */ "./src/toast.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);









 // 按需引入




var Index = /*#__PURE__*/function (_Component) {
  Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Index, _Component);
  var _super = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Index);
  function Index() {
    Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Index);
    return _super.apply(this, arguments);
  }
  Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "u"], {
        className: "index",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Text */ "r"], {
          children: "Hello world!"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_6__[/* AtButton */ "a"], {
          type: "primary",
          children: "I need Taro UI"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Text */ "r"], {
          children: "Taro UI \u652F\u6301 Vue \u4E86\u5417\uFF1F "
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_6__[/* AtButton */ "a"], {
          type: "primary",
          circle: true,
          children: "\u652F\u6301"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Text */ "r"], {
          children: "\u5171\u5EFA\uFF1F"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_6__[/* AtButton */ "a"], {
          type: "secondary",
          circle: true,
          children: "\u6765"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(tard__WEBPACK_IMPORTED_MODULE_7__[/* Price */ "a"], {
          price: "88.00",
          originPrice: "188.00",
          fixedNum: 2
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_src_toast__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {})]
      });
    }
  }]);
  return Index;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);


/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(window) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js").default;
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
  'use strict';

  var hasOwn = {}.hasOwnProperty;
  var nativeCodeString = '[native code]';
  function classNames() {
    var classes = [];
    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (!arg) continue;
      var argType = _typeof(arg);
      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg)) {
        if (arg.length) {
          var inner = classNames.apply(null, arg);
          if (inner) {
            classes.push(inner);
          }
        }
      } else if (argType === 'object') {
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
          classes.push(arg.toString());
          continue;
        }
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }
    return classes.join(' ');
  }
  if ( true && module.exports) {
    classNames.default = classNames;
    module.exports = classNames;
  } else if ( true && _typeof(__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) === 'object' && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
    // register as 'classnames', consistent with npm package name
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return classNames;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    window.classNames = classNames;
  }
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.production.min.js":
/*!********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-runtime.production.min.js ***!
  \********************************************************************/
/*! no static exports found */
/*! exports used: jsx, jsxs */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var f = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js"),
  k = Symbol.for("react.element"),
  l = Symbol.for("react.fragment"),
  m = Object.prototype.hasOwnProperty,
  n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  p = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };
function q(c, a, g) {
  var b,
    d = {},
    e = null,
    h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);
  for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
  return {
    $$typeof: k,
    type: c,
    key: e,
    ref: h,
    props: d,
    _owner: n.current
  };
}
exports.Fragment = l;
exports.jsx = q;
exports.jsxs = q;

/***/ }),

/***/ "./node_modules/tard/dist/styles/index.less":
/*!**************************************************!*\
  !*** ./node_modules/tard/dist/styles/index.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/tard/dist/tard.es.js":
/*!*******************************************!*\
  !*** ./node_modules/tard/dist/tard.es.js ***!
  \*******************************************/
/*! exports provided: Badge, Button, Canvas, Cell, ConfigProvider, DatetimePicker, DropdownMenu, Empty, Field, FooterButton, Form, Grid, Icon, Image, InputNumber, Loading, Modal, NavBar, Overlay, Popup, Price, Progress, ProgressCircle, Rate, SearchBar, Skeleton, Sort, Switch, Tab, TagPrice, Toast, Uploader */
/*! exports used: Price, Toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(document, window) {/* unused harmony export Badge */
/* unused harmony export Button */
/* unused harmony export Canvas */
/* unused harmony export Cell */
/* unused harmony export ConfigProvider */
/* unused harmony export DatetimePicker */
/* unused harmony export DropdownMenu */
/* unused harmony export Empty */
/* unused harmony export Field */
/* unused harmony export FooterButton */
/* unused harmony export Form */
/* unused harmony export Grid */
/* unused harmony export Icon */
/* unused harmony export Image */
/* unused harmony export InputNumber */
/* unused harmony export Loading */
/* unused harmony export Modal */
/* unused harmony export NavBar */
/* unused harmony export Overlay */
/* unused harmony export Popup */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Price; });
/* unused harmony export Progress */
/* unused harmony export ProgressCircle */
/* unused harmony export Rate */
/* unused harmony export SearchBar */
/* unused harmony export Skeleton */
/* unused harmony export Sort */
/* unused harmony export Switch */
/* unused harmony export Tab */
/* unused harmony export TagPrice */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Toast; });
/* unused harmony export Uploader */
/* harmony import */ var C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_10__);







var _excluded = ["className", "style", "customizeStyle", "children"];




var scrollTop = 0;
var isWeapp = _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.ENV_TYPE.WEAPP,
  isWeb = _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.ENV_TYPE.WEB;
function handleTouchScroll(e) {
  isWeb && (e ? (scrollTop = document.documentElement.scrollTop, document.body.classList.add("at-frozen"), document.body.style.top = -scrollTop + "px") : (document.body.style.top = "", document.body.classList.remove("at-frozen"), document.documentElement.scrollTop = scrollTop));
}
function mergeStyle(e, t) {
  return e && "object" == Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(e) && t && "object" == Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(t) ? Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({}, e), t) : objectToString(e) + objectToString(t);
}
function pxTransform(e) {
  if (!e) return "";
  return isWeb ? 16 / 750 * e + "rem" : +e + "rpx";
}
function objectToString(r) {
  if (r && "object" == Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(r)) {
    var a = "";
    return Object.keys(r).forEach(function (e) {
      var t = e.replace(/([A-Z])/g, "-$1").toLowerCase();
      a += "".concat(t, ":").concat(r[e], ";");
    }), a;
  }
  return r && "string" == typeof r ? r : "";
}
function isTest() {
  return "test" === "development";
}
function uuid() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
  var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  var r = [];
  var n = 0;
  var s,
    c = t || a.length;
  if (e) for (n = 0; n < e; n++) r[n] = a[0 | Math.random() * c];else for (r[8] = r[13] = r[18] = r[23] = "-", r[14] = "4", n = 0; n < 36; n++) r[n] || (s = 0 | 16 * Math.random(), r[n] = a[19 === n ? 3 & s | 8 : s]);
  return r.join("");
}
function getDateUTC(e) {
  return e ? new Date(e.replace(/-/g, "/")) : new Date(new Date().getTime() + 3e5);
}
var regex = new RegExp(/[A-Z]/g),
  kebabCase = function kebabCase(e) {
    return e.replace(regex, function (e) {
      return "-" + e.toLowerCase();
    });
  };
function transformationString(a) {
  return Object.keys(a).reduce(function (e, t) {
    return "" + e + kebabCase(t) + ":".concat(a[t].replace("'", ""), ";");
  }, "");
}
function isObject(e) {
  return null !== e && "object" == Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(e);
}
function isFunction(e) {
  return "function" == typeof e;
}
var CompContainer = function CompContainer(_ref) {
    var _ref$className = _ref.className,
      e = _ref$className === void 0 ? "" : _ref$className,
      _ref$style = _ref.style,
      t = _ref$style === void 0 ? "" : _ref$style,
      _ref$customizeStyle = _ref.customizeStyle,
      a = _ref$customizeStyle === void 0 ? "" : _ref$customizeStyle,
      _ref$children = _ref.children,
      r = _ref$children === void 0 ? "" : _ref$children,
      n = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_ref, _excluded);
    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      _useState2 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState, 2),
      s = _useState2[0],
      c = _useState2[1],
      l = Object(react__WEBPACK_IMPORTED_MODULE_7__["useCallback"])(function (e) {
        var t = e;
        var a = "";
        for (var _r in t) a += "--".concat(_r, ": ").concat(t[_r], ";");
        c(a);
      }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
      return l(_tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.Current.app.themeParams), _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.Current.app.eventCenter.on("THEME_CHANGE", function (e) {
        l(e);
      }), function () {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.Current.app.eventCenter.removeListener("THEME_CHANGE");
      };
    }, []);
    t = isObject(t) ? transformationString(t) : t;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({
      className: e,
      style: t + s + a
    }, n), r);
  },
  cssPrefix = function cssPrefix() {
    return _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.Current.app.cssPrefix || "tard";
  },
  DropdownMenu$1 = function DropdownMenu$1(_ref2) {
    var _ref2$titleAlign = _ref2.titleAlign,
      r = _ref2$titleAlign === void 0 ? "center" : _ref2$titleAlign,
      n = _ref2.activeColor,
      e = _ref2.children,
      t = _ref2.customizeStyle;
    var s = cssPrefix(),
      _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(-1),
      _useState4 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState3, 2),
      c = _useState4[0],
      a = _useState4[1],
      _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(!1),
      _useState6 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState5, 2),
      l = _useState6[0],
      o = _useState6[1],
      i = (Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
        return function () {
          isWeb && (document.body.style.overflow = "auto");
        };
      }, []), []),
      m = function m(e) {
        a(e), -1 === e ? isWeb && (document.body.style.overflow = "auto") : isWeb && (document.body.style.overflow = "hidden");
      };
    e = react__WEBPACK_IMPORTED_MODULE_7___default.a.Children.map(e, function (e, t) {
      var a;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.isValidElement(e) ? (a = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({}, e.props), {}, {
        onClick: function onClick() {
          e.props.onClick ? e.props.onClick() : (m(c === t ? -1 : t), o(!0));
        },
        activeColor: n,
        titleAlign: r,
        active: t === c
      }), i.push(e), /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_7__["cloneElement"])(e, a)) : e;
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CompContainer, {
      customizeStyle: t,
      className: s + "-dropdown-menu dropdown-menu"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: s + "-dropdown-menu__bar"
    }, e), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: s + "-dropdown-menu__popup"
    }, i.map(function (e, t) {
      var _e$props = e.props,
        r = _e$props.value,
        a = _e$props.options;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(s + "-dropdown-menu__overlay", Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, s + "-dropdown-menu__overlay-active", l && c === t)),
        key: t,
        onClick: function onClick() {
          m(-1), o(!1);
        },
        catchMove: !0
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        key: t,
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(s + "-dropdown-menu__popup-item", Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, s + "-dropdown-menu__popup-item__active", l && c === t))
      }, a && a.map(function (a) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
          className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(s + "-dropdown-menu-item__view", Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, s + "-dropdown-menu-item__view__active", r === a.value)),
          style: n && r === a.value ? "color: " + n : "",
          key: a.text,
          onClick: function onClick() {
            {
              var e = a.value;
              m(-1), o(!1);
              var _t = i[c].props["onChange"];
              return void (_t && _t(e));
            }
          }
        }, a.text);
      }), e.props.content));
    })));
  },
  Icon = function Icon(e) {
    var t = cssPrefix();
    var _e = e,
      _e$customStyle = _e.customStyle,
      a = _e$customStyle === void 0 ? "" : _e$customStyle,
      _e$className = _e.className,
      r = _e$className === void 0 ? "" : _e$className,
      _e$prefixClass = _e.prefixClass,
      n = _e$prefixClass === void 0 ? t + "-icon" : _e$prefixClass,
      _e$value = _e.value,
      s = _e$value === void 0 ? "" : _e$value,
      _e$color = _e.color,
      c = _e$color === void 0 ? "" : _e$color,
      _e$size = _e.size,
      l = _e$size === void 0 ? 16 : _e$size,
      _e$onClick = _e.onClick,
      o = _e$onClick === void 0 ? function () {} : _e$onClick;
    e = {
      fontSize: "" + pxTransform(2 * parseInt(String(l))),
      color: c
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "r"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(n, s ? n + "-" + s : "", r),
      style: mergeStyle(e, a),
      onClick: function onClick(e) {
        o(e);
      }
    });
  },
  DropdownMenuItem = function DropdownMenuItem(_ref3) {
    var _ref3$value = _ref3.value,
      t = _ref3$value === void 0 ? "" : _ref3$value,
      _ref3$title = _ref3.title,
      e = _ref3$title === void 0 ? "" : _ref3$title,
      _ref3$options = _ref3.options,
      a = _ref3$options === void 0 ? [] : _ref3$options,
      _ref3$activeColor = _ref3.activeColor,
      r = _ref3$activeColor === void 0 ? "" : _ref3$activeColor,
      _ref3$titleAlign = _ref3.titleAlign,
      n = _ref3$titleAlign === void 0 ? "center" : _ref3$titleAlign,
      _ref3$flex = _ref3.flex,
      s = _ref3$flex === void 0 ? 1 : _ref3$flex,
      c = _ref3.active,
      _ref3$onClick = _ref3.onClick,
      l = _ref3$onClick === void 0 ? function () {} : _ref3$onClick;
    var o = cssPrefix();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: o + "-dropdown-menu-item",
      style: "flex: " + s,
      onClick: function onClick() {
        return l();
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(o + "-dropdown-menu-item__title", Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, o + "-dropdown-menu-item__active", c)),
      style: r && c ? "color: ".concat(r, "; justify-content: ") + n : "justify-content: " + n
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: o + "-dropdown-menu-item__title-text"
    }, e || a.filter(function (e) {
      return e.value === t;
    })[0].text || a[0].text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Icon, {
      value: c ? "chevron-up" : "chevron-down",
      size: 16
    })));
  },
  DropdownMenu = DropdownMenu$1,
  ButtonComponent = (DropdownMenu.Item = DropdownMenuItem, function (t) {
    var _s;
    var e = cssPrefix();
    var a = _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.ENV_TYPE.WEB,
      r = _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.ENV_TYPE.WEAPP;
    var _t$type = t.type,
      n = _t$type === void 0 ? "primary" : _t$type,
      _t$size = t.size,
      s = _t$size === void 0 ? "normal" : _t$size,
      _t$radius = t.radius,
      c = _t$radius === void 0 ? 0 : _t$radius,
      l = t.fill,
      o = t.full,
      i = t.lang,
      m = t.round,
      u = t.disabled,
      d = t.formType,
      p = t.openType,
      g = t.color,
      f = t.border,
      h = t.borderColor,
      E = t.fillColor,
      _t$customStyle = t.customStyle,
      y = _t$customStyle === void 0 ? "" : _t$customStyle,
      v = t.sessionFrom,
      x = t.sendMessageTitle,
      N = t.sendMessagePath,
      b = t.sendMessageImg,
      C = t.showMessageCard,
      w = t.appParameter,
      S = [e + "-button", e + "-button--" + n],
      s = (_s = {}, Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_s, e + "-button--" + s, s), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_s, e + "-button--disabled", u), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_s, e + "-button--full", o), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_s, e + "-button--" + m, m), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_s, e + "-button--fill", l), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_s, e + "-button--".concat(n, "--border"), f && n), _s);
    var R = {
      color: g,
      borderColor: h,
      fillColor: E
    };
    E && f && (R.color = E, R.borderColor = E, R.fillColor = "none"), E && !f && (R.color = "#fff", R.border = "none");
    o = R.borderColor ? {
      "border-color": R.borderColor
    } : {}, m = R.fillColor ? {
      background: R.fillColor
    } : {}, l = objectToString(Object.assign(y, Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({
      "border-radius": pxTransform(c),
      color: R.color
    }, o), m))), n = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Button */ "a"], {
      className: e + "-button__wxbutton",
      lang: i,
      formType: d
    }), g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Button */ "a"], {
      className: e + "-button__wxbutton",
      formType: d,
      openType: p,
      lang: i,
      sessionFrom: v,
      sendMessageTitle: x,
      sendMessagePath: N,
      sendMessageImg: b,
      showMessageCard: C,
      appParameter: w,
      onGetUserInfo: function onGetUserInfo(e) {
        isFunction(t.onGetUserInfo) && t.onGetUserInfo(e);
      },
      onGetPhoneNumber: function onGetPhoneNumber(e) {
        isFunction(t.onGetPhoneNumber) && t.onGetPhoneNumber(e);
      },
      onOpenSetting: function onOpenSetting(e) {
        isFunction(t.onOpenSetting) && t.onOpenSetting(e);
      },
      onError: function onError(e) {
        isFunction(t.onError) && t.onError(e);
      },
      onContact: function onContact(e) {
        isFunction(t.onContact) && t.onContact(e);
      }
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CompContainer, {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(S, s, t.className),
      onClick: function onClick(e) {
        t.disabled || isFunction(t.onClick) && t.onClick(e);
      },
      customizeStyle: t.customizeStyle,
      style: l
    }, a && !u && n, r && !u && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Form */ "c"], {
      onSubmit: function onSubmit(e) {
        (r || a) && $scope.triggerEvent("submit", e.detail, {
          bubbles: !0,
          composed: !0
        });
      },
      onReset: function onReset(e) {
        (r || a) && $scope.triggerEvent("reset", e.detail, {
          bubbles: !0,
          composed: !0
        });
      }
    }, g), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: e + "-button__text"
    }, t.children));
  }),
  ConfigProvider$1 = function ConfigProvider$1(_ref4) {
    var a = _ref4.style,
      e = _ref4.className,
      t = _ref4.children;
    var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      _useState8 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState7, 2),
      r = _useState8[0],
      n = _useState8[1];
    Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
      var e = "";
      for (var _t2 in a) e += "--".concat(_t2, ": ").concat(a[_t2], ";");
      e += "display: inline-block;", n(e);
    }, [a]);
    t = react__WEBPACK_IMPORTED_MODULE_7___default.a.Children.map(t, function (e) {
      if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.isValidElement(e)) return null;
      var t = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({}, e.props), {}, {
        customizeStyle: r
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.cloneElement(e, t);
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: e,
      style: r
    }, t);
  },
  config = function config(_ref5) {
    var _ref5$theme = _ref5.theme,
      e = _ref5$theme === void 0 ? {} : _ref5$theme,
      _ref5$cssPrefix = _ref5.cssPrefix,
      t = _ref5$cssPrefix === void 0 ? "tard" : _ref5$cssPrefix;
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.Current.app.eventCenter && _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.Current.app.eventCenter.emit("THEME_CHANGE", e), _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.Current.app.themeParams = e, _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.Current.app.cssPrefix = t;
  },
  ConfigProvider = ConfigProvider$1,
  BUYIMG = (ConfigProvider.config = config, "https://storage.360buyimg.com/hawley-common/tard-image"),
  ImageComponent = function ImageComponent(_ref6) {
    var _classNames5;
    var _ref6$className = _ref6.className,
      e = _ref6$className === void 0 ? "" : _ref6$className,
      _ref6$src = _ref6.src,
      t = _ref6$src === void 0 ? "" : _ref6$src,
      _ref6$transition = _ref6.transition,
      a = _ref6$transition === void 0 ? !0 : _ref6$transition,
      _ref6$res = _ref6.res,
      r = _ref6$res === void 0 ? {} : _ref6$res,
      _ref6$preview = _ref6.preview,
      n = _ref6$preview === void 0 ? !1 : _ref6$preview,
      _ref6$errorContent = _ref6.errorContent,
      s = _ref6$errorContent === void 0 ? "" : _ref6$errorContent,
      _ref6$radius = _ref6.radius,
      c = _ref6$radius === void 0 ? 0 : _ref6$radius,
      _ref6$round = _ref6.round,
      l = _ref6$round === void 0 ? !1 : _ref6$round,
      _ref6$showLoading = _ref6.showLoading,
      o = _ref6$showLoading === void 0 ? !1 : _ref6$showLoading,
      _ref6$loadingContent = _ref6.loadingContent,
      i = _ref6$loadingContent === void 0 ? "" : _ref6$loadingContent,
      _ref6$customizeStyle = _ref6.customizeStyle,
      m = _ref6$customizeStyle === void 0 ? "" : _ref6$customizeStyle,
      _ref6$onClick = _ref6.onClick,
      u = _ref6$onClick === void 0 ? function () {} : _ref6$onClick;
    var d = cssPrefix();
    var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(t),
      _useState10 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState9, 2),
      p = _useState10[0],
      g = _useState10[1],
      _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(BUYIMG + "/image-error.png"),
      _useState12 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState11, 1),
      f = _useState12[0],
      _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(!1),
      _useState14 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState13, 2),
      h = _useState14[0],
      E = _useState14[1];
    l = objectToString({
      "border-radius": l ? "50%" : pxTransform(c)
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CompContainer, {
      customizeStyle: m
    }, o ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(e, d + "-image-default")
    }, i || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Image */ "d"], {
      src: BUYIMG + "/image-loading.png",
      className: d + "-image-loading"
    }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, h && s ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      style: l,
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(e, d + "-image-error")
    }, s) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Image */ "d"], Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({}, r), {}, {
      src: p,
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(e, (_classNames5 = {}, Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames5, d + "-image-default", !p.includes(f) && a), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames5, d + "-image-none", p.includes(f) && a), _classNames5)),
      style: l,
      onClick: function onClick() {
        n && Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_10__["previewImage"])({
          urls: [t]
        }), isFunction(u) && u();
      },
      onError: function onError() {
        g(f), E(!0);
      }
    }))));
  },
  Price = function Price(_ref7) {
    var _classNames6, _classNames7, _classNames8, _classNames9;
    var _ref7$className = _ref7.className,
      e = _ref7$className === void 0 ? "" : _ref7$className,
      _ref7$price = _ref7.price,
      t = _ref7$price === void 0 ? "" : _ref7$price,
      _ref7$fixedNum = _ref7.fixedNum,
      a = _ref7$fixedNum === void 0 ? -1 : _ref7$fixedNum,
      _ref7$color = _ref7.color,
      r = _ref7$color === void 0 ? "" : _ref7$color,
      _ref7$afterContent = _ref7.afterContent,
      n = _ref7$afterContent === void 0 ? "" : _ref7$afterContent,
      _ref7$beforeContent = _ref7.beforeContent,
      s = _ref7$beforeContent === void 0 ? "" : _ref7$beforeContent,
      _ref7$commissionPrice = _ref7.commissionPrice,
      c = _ref7$commissionPrice === void 0 ? "" : _ref7$commissionPrice,
      _ref7$originColor = _ref7.originColor,
      l = _ref7$originColor === void 0 ? "" : _ref7$originColor,
      _ref7$originPrice = _ref7.originPrice,
      o = _ref7$originPrice === void 0 ? "" : _ref7$originPrice,
      _ref7$type = _ref7.type,
      i = _ref7$type === void 0 ? "middle" : _ref7$type,
      _ref7$size = _ref7.size,
      m = _ref7$size === void 0 ? 0 : _ref7$size,
      _ref7$symbolSize = _ref7.symbolSize,
      u = _ref7$symbolSize === void 0 ? 0 : _ref7$symbolSize,
      _ref7$showAfterSymbol = _ref7.showAfterSymbol,
      d = _ref7$showAfterSymbol === void 0 ? !1 : _ref7$showAfterSymbol,
      _ref7$priceUnit = _ref7.priceUnit,
      p = _ref7$priceUnit === void 0 ? "¥" : _ref7$priceUnit,
      _ref7$unitSize = _ref7.unitSize,
      g = _ref7$unitSize === void 0 ? 0 : _ref7$unitSize,
      _ref7$thousands = _ref7.thousands,
      f = _ref7$thousands === void 0 ? !1 : _ref7$thousands,
      _ref7$customizeStyle = _ref7.customizeStyle,
      h = _ref7$customizeStyle === void 0 ? "" : _ref7$customizeStyle;
    var E = cssPrefix(),
      y = function y(e) {
        e = Number(e);
        if (-1 === String(e).indexOf(".")) return e;
        var t = "";
        t += String(e).split(".")[0];
        var a = String(e).split(".")[1];
        return 0 === Number(a) ? t += "" : Number(a) < 10 ? t += "." + String(e).split(".")[1] : Number(a) % 10 != 0 ? t += "." + String(Number(a)) : t += "." + String(Number(a)).substr(0, 1), t;
      },
      v = function v(e) {
        return -1 === a ? f ? x(y(e)) : y(e) : f ? x(Number(e).toFixed(a)) : Number(e).toFixed(a);
      },
      x = function x(e) {
        var r = /\d{1,3}(?=(\d{3})+$)/g;
        return String(e).replace(/^(\d+)((\.\d+)?)$/, function (e, t, a) {
          return t.replace(r, "$&,") + a;
        });
      };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CompContainer, {
      customizeStyle: h,
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(E + "-price", e)
    }, "" !== s && s, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(E + "-price__text", (_classNames6 = {}, Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames6, E + "-price__text-large", "large" === i), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames6, E + "-price__text-middle", "largeMiddle" === i || "smallMiddle" === i), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames6, E + "-price__text-small", "small" === i || "middle" === i), _classNames6)),
      style: ("" !== r ? "color: ".concat(r, ";") : "") + (0 !== m ? "font-size: " + pxTransform(m) : "")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "r"], {
      style: 0 === g ? "" : "font-size: " + pxTransform(g)
    }, p), (h = t) instanceof Array && 1 < h.length ? (e = h.map(function (e) {
      return Number(e);
    }).sort(function (e, t) {
      return e - t;
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "r"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(E + "-price__text-content", (_classNames7 = {}, Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames7, E + "-price__content-large", "large" === i), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames7, E + "-price__content-large-middle", "largeMiddle" === i), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames7, E + "-price__content-middle", "middle" === i), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames7, E + "-price__content-small-middle", "smallMiddle" === i), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames7, E + "-price__content-small", "small" === i), _classNames7)),
      style: 0 !== u ? "font-size: " + pxTransform(u) : ""
    }, String(v(e[0])).split(".")[0]), String(v(e[0])).split(".")[1] ? "." + String(v(e[0])).split(".")[1] : "", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "r"], {
      className: E + "-price__text-line"
    }, "-"), d && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "r"], {
      style: 0 === g ? "" : "font-size: " + pxTransform(g)
    }, p), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "r"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(E + "-price__text-content", (_classNames8 = {}, Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames8, E + "-price__content-large", "large" === i), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames8, E + "-price__content-large-middle", "largeMiddle" === i), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames8, E + "-price__content-middle", "middle" === i), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames8, E + "-price__content-small-middle", "smallMiddle" === i), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames8, E + "-price__content-small", "small" === i), _classNames8)),
      style: 0 !== u ? "font-size: " + pxTransform(u) : ""
    }, String(v(e[e.length - 1])).split(".")[0]), String(v(e[e.length - 1])).split(".")[1] ? "." + String(v(e[e.length - 1])).split(".")[1] : "")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "r"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(E + "-price__text-content", (_classNames9 = {}, Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames9, E + "-price__content-large", "large" === i), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames9, E + "-price__content-large-middle", "largeMiddle" === i), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames9, E + "-price__content-middle", "middle" === i), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames9, E + "-price__content-small-middle", "smallMiddle" === i), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames9, E + "-price__content-small", "small" === i), _classNames9)),
      style: 0 !== u ? "font-size: " + pxTransform(u) : ""
    }, String(v(h)).split(".")[0]), String(v(h)).split(".")[1] ? "." + String(v(h)).split(".")[1] : ""), "" !== o && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "r"], {
      className: E + "-price__origin-price",
      style: "color: " + l
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "r"], null, p), v(o))), "" !== n && n, "" !== c && "" === n && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: E + "-price__commission"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: E + "-price__commission--box"
    }, "佣金 ", c)));
  };
var error = "data:image/png;base64,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",
  success = "data:image/png;base64,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",
  loading = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAn1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Kd3m4AAAANHRSTlMA6AN+QRH69xUI7Z7x2sWzcWYvphvj4MxiXVIiGAuH08K9ibepmI+Oc2tKHQ+helY5NykfkF5N9AAABmhJREFUeNrdnWlT4kAQhjt3CARIwg1yH3Lpqv3/f9tabsYJMUGCsM6b56NVVjGV6WP6pLvTijTb8bS2X29U581BaBEmLY9T1LrVpukSGhFn06n2W4SExvn4q2ecL6PxeSbrPwRBxN/iG0NSHyHs55kGB1KdVqTxBTjLnU6qo1csdx+ag8CIujXOxe+pf5QEIzPYNDo5OnlbITD2/WObM9AeHwiOYbDMEB/PgHRiwo3GaWpbKFkR6LvI4RTdF4Lk0JtyihXk/Xrnbe2kRKVHoLjjlImphwSKZXicxH4iVB4eNU6ywPHy01SME1nRTIJluOAEtgFpU/4xaHOC2YhgeRjbJble9Dplid0nXHSDEzQJGFNjyZyAGc1YUgVWXqfXqwH3dsy7XnVUf/iD1oQ/mUCfxKonvgn07ao0EnKCLPGkVxO6i6AZl8SeEDVLYuNPToLsd53cLhvZF35HSrwG/D55R5daeAathKkiLaNB0FiTsohJS/sUE9wo0QcmCxaEjcEC3BjkB/rsU0xg48L/GH2KSZ2wkWICm3VIi4kH/V4k0qccsyJsXm2OAc0zfnWEu9g+Fz20OWZL2Aw4pgYu77QoiRtMQ0eoYMC6lWxj8kjYVDThz0PHHt95LIvievBEpRq4LSGjLL6jJepWfPRP8umo7AgbV9iSJYGzFvXC6lc+n+eNYwICR7ywpgROj2MQOgTOcXBK4gNTJEwJgbPjGJBOmlx04QOvCZyNKIkgcEKOAc8yyEa0ZwJnWZKgIwVlUcBDjsHqMc2gXY5yCKJjOaqGiPoiBkHg7EtjSUQ/I3gJAVGjHGVcRJuySLswiV0CxxQ5HwJnxDHoySsSoVPwkg6iLv9jQOBEZdG/Rjkqm4mCshgSkXRvEDhmSeq3KCzLa1c48u2PASxaBPvodUXGPR6J46GexBLVHMKiRIRJRWTgSBOfBhNd1M+SqKwDzVfLg4i8D2h5irxaHrZDL4Vdww6oSPUroo57gkQaRB/7iSVdlDp2iEs6jQ3st6J046vYJR3yYTXHrh+QT90mQztbMvgwwA46ynBQiB10lAE6i2MgW2CTIdMasiFJBrG7yPo3mVYQhmRDgCQTPU3kEFcy9WYip3iTyVCXcR350/R0B7cOIlkwIKX9SHDIEo7ksdoEx2lRTQu2Ejhd5uSjmsR04dkKtYMhXQr4zKBh03RxpsuYkZSv5bITTHfrawHzWtwtqEh2Rkn5H8jOq6wifx8xApHVdmEAdl5lNsIMARstZWtSVufVjGDIbhYLOOaNQMhp3zs4aN0xeQ2VS/F3kMyVbHHNU8pjgiC36Vj3oWZ0nGkD70HN6DjTmK93gGZ0nB2VsAWa0SGHV2DP6Pjmpz7CSIkc8HL+4jmKh1O+HbljgIxBlEOQ8pUzQtL9+7FUUnG1FVbBlwwK07sAjsr8ktFtLxxjv5KiXDhMb8UxU0UDKpeON7Q8xY3JxQMne8wqp6sLjACtqzxEu8hQ1tBWd4h2sTG5T+oO0S44uHihqpgUHSXtyiHaSpX+Fx/ubdoqLmG5Zty6oeASlqsG4Osz5ZawXLmSYKSptoSl8JIIKSZKOcLXr+3oK7WEJblIBXmdzM9+y5xVuV0/XTZ0VGNlXHL90/FKjafCyrhbLOSq1H9/ZdxtVqRZyZVxLSqKQkvrrPoPdpAqtUYweUO50Ipb1RY76sffWXGbXrV51G8SECt+vVRcftrkotdL1XW0fZsl01f6BoUXBJ98ZXv8QLmovrL5RO64PaAc1F+irRs2J1gMKQuIteYn14sdI0etAyyadxecRHtMiQrQ6v8nm5N4hkU3xTI8TmI/0Z0I63xCbezSzXDHNT6hHtL96Hl8grN+o5vwtnb4BK9Hd8VacYpZ70A/5NCbcYqVRffmpcspnGin09Xou8jhFN0X+g/o2xqn0TbhlWK30ThNbavT3ZHqJY22DIYFTV+wFKcoqAzvpPAl7WN/Txex7x/bLMk1T/ensu1wJp3GJjBHlMvIDDaNvP/dVuj/o/d8zqXWjYxgYIZ716roesVy96E5CIyoW+Nc/J5Ov4O+Wzp8I5zlTqdf5BBM+QZMAwXaC4aGzz/CN5SpdPuznvCVTNaKLatwn1c+F8RfPatZwd7qVzt8IZ1qX6nk9xdcs1kVOjZPM1ebpppf4itWOGjOq42639Y8x7YdT2v79UZ13hyEFt2Fv6Loy9OZgJFyAAAAAElFTkSuQmCC",
  statusImg = {
    error: error,
    success: success,
    loading: loading
  };
var Toast = function Toast(_ref8) {
    var _ref8$duration = _ref8.duration,
      e = _ref8$duration === void 0 ? 3e3 : _ref8$duration,
      _ref8$visible = _ref8.visible,
      t = _ref8$visible === void 0 ? !1 : _ref8$visible,
      _ref8$text = _ref8.text,
      a = _ref8$text === void 0 ? "" : _ref8$text,
      _ref8$icon = _ref8.icon,
      r = _ref8$icon === void 0 ? "" : _ref8$icon,
      _ref8$image = _ref8.image,
      n = _ref8$image === void 0 ? "" : _ref8$image,
      s = _ref8.status,
      _ref8$overlay = _ref8.overlay,
      c = _ref8$overlay === void 0 ? !1 : _ref8$overlay,
      _ref8$top = _ref8.top,
      l = _ref8$top === void 0 ? "50%" : _ref8$top,
      _ref8$onClick = _ref8.onClick,
      o = _ref8$onClick === void 0 ? function () {} : _ref8$onClick,
      _ref8$onClose = _ref8.onClose,
      i = _ref8$onClose === void 0 ? function () {} : _ref8$onClose,
      _ref8$className = _ref8.className,
      m = _ref8$className === void 0 ? "" : _ref8$className,
      _ref8$customStyle = _ref8.customStyle,
      u = _ref8$customStyle === void 0 ? {} : _ref8$customStyle,
      _ref8$customizeStyle = _ref8.customizeStyle,
      d = _ref8$customizeStyle === void 0 ? "" : _ref8$customizeStyle;
    return function (n, l, u) {
      var _classNames10;
      var p = cssPrefix();
      var g;
      var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(t),
        _useState16 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState15, 2),
        f = _useState16[0],
        h = _useState16[1],
        E = (Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
          t ? (h(!0), E(e || 0)) : y(), g = null;
        }, [t, e]), function (e) {
          0 !== e && (g = setTimeout(function () {
            y();
          }, +e));
        }),
        y = function y() {
          h(!1), v(), g && (clearTimeout(g), g = null);
        },
        v = function v(e) {
          "function" == typeof i && i(e);
        };
      var x = n || statusImg[s] || null,
        N = !(!r || n || statusImg[s]),
        n = classnames__WEBPACK_IMPORTED_MODULE_8___default()("toast-body", (_classNames10 = {}, Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames10, p + "-toast__body--custom-image", n), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames10, "toast-body--text", !x && !r), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames10, p + "-toast__body--" + s, !!s), _classNames10)),
        b = {
          "toast-body-content--slot": x || r
        },
        u = objectToString(Object.assign(u, {
          top: l
        })),
        l = classnames__WEBPACK_IMPORTED_MODULE_8___default()(p + "-icon", Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, p + "-icon-" + r, r));
      return f ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CompContainer, {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(p + "-toast", m),
        customizeStyle: d
      }, c && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: p + "-toast__overlay"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: n,
        style: u,
        onClick: function onClick(e) {
          if ("loading" !== s) return o ? o(e) : void y();
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()("toast-body-content", b)
      }, x ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Image */ "d"], {
        className: "toast-body-content__img-item",
        src: x,
        mode: "scaleToFill"
      }) : null, N && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: "toast-body-content__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "r"], {
        className: l
      })), a && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: "toast-body-content__info"
      }, a)))) : null;
    }(n, l, u);
  },
  loadingObj = {
    default: "loading",
    ios: "loading-ios",
    loading: "loading-size"
  },
  LoadingComponent = function LoadingComponent(_ref9) {
    var _ref9$type = _ref9.type,
      e = _ref9$type === void 0 ? "default" : _ref9$type,
      _ref9$color = _ref9.color,
      t = _ref9$color === void 0 ? "" : _ref9$color,
      _ref9$overlay = _ref9.overlay,
      a = _ref9$overlay === void 0 ? !1 : _ref9$overlay,
      _ref9$size = _ref9.size,
      r = _ref9$size === void 0 ? 0 : _ref9$size,
      _ref9$onClick = _ref9.onClick,
      n = _ref9$onClick === void 0 ? null : _ref9$onClick,
      _ref9$customizeStyle = _ref9.customizeStyle,
      s = _ref9$customizeStyle === void 0 ? "" : _ref9$customizeStyle;
    return function (e, r) {
      var c = cssPrefix(),
        e = classnames__WEBPACK_IMPORTED_MODULE_8___default()(c + "-loading-icon ".concat(c, "-icon"), c + "-icon-" + loadingObj[e]),
        r = objectToString(0 !== r ? {
          width: pxTransform(r),
          height: pxTransform(r),
          "font-size": pxTransform(r)
        } : {});
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CompContainer, {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(c + "-loading", Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, c + "-loading-flex", a)),
        onClick: function onClick(e) {
          isFunction(n) && n(e);
        },
        customizeStyle: s
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "r"], {
        className: e,
        style: ("" !== t ? "color: ".concat(t, ";") : "") + r
      }));
    }(e, r);
  },
  FormComponent = function FormComponent(_ref10) {
    var _ref10$className = _ref10.className,
      e = _ref10$className === void 0 ? "" : _ref10$className,
      _ref10$customStyle = _ref10.customStyle,
      t = _ref10$customStyle === void 0 ? "" : _ref10$customStyle,
      _ref10$reportSubmit = _ref10.reportSubmit,
      a = _ref10$reportSubmit === void 0 ? !1 : _ref10$reportSubmit,
      _ref10$border = _ref10.border,
      r = _ref10$border === void 0 ? !1 : _ref10$border,
      _ref10$round = _ref10.round,
      n = _ref10$round === void 0 ? !1 : _ref10$round,
      _ref10$onReset = _ref10.onReset,
      s = _ref10$onReset === void 0 ? function () {} : _ref10$onReset,
      _ref10$onSubmit = _ref10.onSubmit,
      c = _ref10$onSubmit === void 0 ? function () {} : _ref10$onSubmit,
      l = _ref10.children,
      _ref10$customizeStyle = _ref10.customizeStyle,
      o = _ref10$customizeStyle === void 0 ? "" : _ref10$customizeStyle;
    return function (e) {
      var i = cssPrefix(),
        e = classnames__WEBPACK_IMPORTED_MODULE_8___default()(i + "-form", e, Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, i + "-form-round", n), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, i + "-form-border", r));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CompContainer, {
        customizeStyle: o
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Form */ "c"], {
        className: e,
        style: t,
        onSubmit: function onSubmit(e) {
          c && c(e);
        },
        reportSubmit: a,
        onReset: function onReset(e) {
          s && s(e);
        }
      }, l));
    }(e);
  };
function getInputProps(e) {
  var t = {
    type: e.type,
    maxlength: e.maxlength,
    disabled: e.disabled,
    password: !1
  };
  switch (t.type) {
    case "phone":
      t.type = "number", t.maxlength = 11;
      break;
    case "password":
      t.type = "text", t.password = !0;
  }
  return t;
}
function getTextareaProps(e) {
  var t = {
    type: e.type,
    maxlength: e.maxlength,
    disabled: e.disabled,
    autoHeight: e.autoHeight,
    fixed: e.fixed,
    password: !1
  };
  return "textarea" === t.type && (t.maxlength = 1e3), t;
}
var FieldComponent = function FieldComponent(t) {
    var _classNames15, _classNames16;
    var e = cssPrefix();
    var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(!1),
      _useState18 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState17, 2),
      _ = _useState18[0],
      a = _useState18[1];
    var r = function r(e) {
        isFunction(t.onChange) && t.onChange(e.detail.value, e);
      },
      n = function n(e) {
        "function" == typeof t.onFocus && t.onFocus(e.detail.value, e);
      },
      s = function s(e) {
        "function" == typeof t.onBlur && t.onBlur(e.detail.value, e), "blur" === e.type && !_ && isFunction(t.onChange) && t.onChange(e.detail.value, e), a(!1);
      },
      c = function c(e) {
        isFunction(t.onConfirm) && t.onConfirm(e.detail.value, e);
      },
      l = function l(e) {
        isFunction(t.onKeyboardHeightChange) && t.onKeyboardHeightChange(e);
      },
      o = t.className,
      B = t.customStyle,
      i = t.name,
      m = t.cursorSpacing,
      D = t.confirmType,
      u = t.cursor,
      d = t.selectionStart,
      p = t.selectionEnd,
      g = t.adjustPosition,
      f = t.border,
      h = t.label,
      E = t.error,
      j = t.errorMessage,
      y = t.clear,
      v = t.placeholder,
      x = t.placeholderStyle,
      N = t.placeholderClass,
      b = t.autoFocus,
      C = t.focus,
      w = t.value,
      S = t.required,
      Y = t.children,
      R = t.disabled,
      T = t.readonly,
      k = t.contentColor,
      A = t.labelClass,
      _t$labelWidth = t.labelWidth,
      V = _t$labelWidth === void 0 ? 144 : _t$labelWidth,
      M = t.labelAlign,
      z = t.valueAlign,
      W = t.autoHeight,
      P = t.textareaHeight,
      O = t.card,
      F = t.leftIcon,
      K = t.rightIcon,
      J = t.iconColor,
      G = t.iconSize,
      L = t.showWordLimit,
      _getInputProps = getInputProps(t),
      Q = _getInputProps.type,
      I = _getInputProps.maxlength,
      U = _getInputProps.password,
      _getTextareaProps = getTextareaProps(t),
      H = _getTextareaProps.type,
      Z = _getTextareaProps.fixed,
      f = classnames__WEBPACK_IMPORTED_MODULE_8___default()(e + "-field", (_classNames15 = {}, Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames15, e + "-field--without-border", !f), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames15, e + "-field__textarea-padding", "textarea" == H && !h), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames15, e + "-field-card", O), _classNames15), o),
      O = classnames__WEBPACK_IMPORTED_MODULE_8___default()(e + "-field__container", (_classNames16 = {}, Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames16, e + "-field--error", E), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames16, e + "-field--disabled", R), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames16, e + "-field__content-textarea", "textarea" == H), _classNames16)),
      o = classnames__WEBPACK_IMPORTED_MODULE_8___default()("placeholder", N),
      N = classnames__WEBPACK_IMPORTED_MODULE_8___default()(e + "-field__title", Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, e + "-field__title--required", S), A),
      S = classnames__WEBPACK_IMPORTED_MODULE_8___default()(e + "-field__title--left-icon"),
      A = {
        width: pxTransform(V),
        "text-align": M
      },
      M = i && {
        id: i
      },
      X = i ? {
        name: i
      } : {};
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CompContainer, {
      className: f,
      style: B,
      customizeStyle: t.customizeStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: O,
      onClick: function onClick(e) {
        isFunction(t.onClick) && t.onClick(e);
      }
    }, (h || F) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Label */ "f"], {
      className: N,
      style: A,
      for: i
    }, F && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Icon, {
      className: S,
      value: F,
      color: J,
      size: G
    }), h), "textarea" === H ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Textarea */ "s"], Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({
      className: e + "-field__textarea"
    }, M), X), {}, {
      style: "color: ".concat(k, ";") + (P ? "height: " + pxTransform(P) : ""),
      disabled: R || T,
      placeholderStyle: x,
      placeholderClass: classnames__WEBPACK_IMPORTED_MODULE_8___default()(e + "-field__box-textarea__ph", o),
      placeholder: v,
      cursorSpacing: m,
      maxlength: I,
      autoFocus: b,
      autoHeight: W,
      fixed: Z,
      focus: C,
      value: w,
      cursor: u,
      selectionStart: d,
      selectionEnd: p,
      adjustPosition: g,
      onInput: r,
      onFocus: n,
      onBlur: s,
      onConfirm: c,
      onKeyboardHeightChange: l
    })), L && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: e + "-field__word-limit"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "r"], {
      className: e + "-field__word-num"
    }, (w || "").length), "/", I)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Input */ "e"], Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({
      className: e + "-field__input"
    }, M), X), {}, {
      type: Q,
      password: U,
      disabled: R || T,
      style: "color: ".concat(k, ";text-align: ") + z,
      placeholderStyle: x,
      placeholderClass: o,
      placeholder: v,
      cursorSpacing: m,
      maxlength: I,
      autoFocus: b,
      focus: C,
      value: w,
      confirmType: D,
      cursor: u,
      selectionStart: d,
      selectionEnd: p,
      adjustPosition: g,
      onInput: r,
      onFocus: n,
      onBlur: s,
      onConfirm: c,
      onKeyboardHeightChange: l
    })), y && w && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: e + "-field__icon",
      onClick: function onClick(e) {
        a(!0), isFunction(t.onChange) && t.onChange("", e);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Icon, {
      value: "close-circle",
      color: "#999999",
      size: 16
    })), !y && K && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: e + "-field__icon",
      onClick: function onClick() {
        return t.onRightIconClick;
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Icon, {
      value: K,
      color: J,
      size: G
    })), E && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: e + "-field__error",
      style: "padding-left: ".concat(pxTransform(V), ";width: 100%"),
      onTouchStart: function onTouchStart(e) {
        isFunction(t.onErrorClick) && t.onErrorClick(e);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "r"], null, j || h + "必填"))), Y));
  },
  Rate = function Rate(_ref11) {
    var _ref11$customStyle = _ref11.customStyle,
      e = _ref11$customStyle === void 0 ? "" : _ref11$customStyle,
      _ref11$className = _ref11.className,
      t = _ref11$className === void 0 ? "" : _ref11$className,
      _ref11$size = _ref11.size,
      a = _ref11$size === void 0 ? 36 : _ref11$size,
      _ref11$value = _ref11.value,
      r = _ref11$value === void 0 ? 0 : _ref11$value,
      _ref11$max = _ref11.max,
      n = _ref11$max === void 0 ? 5 : _ref11$max,
      _ref11$margin = _ref11.margin,
      s = _ref11$margin === void 0 ? 5 : _ref11$margin,
      _ref11$activeColor = _ref11.activeColor,
      c = _ref11$activeColor === void 0 ? "" : _ref11$activeColor,
      _ref11$customizeStyle = _ref11.customizeStyle,
      l = _ref11$customizeStyle === void 0 ? "" : _ref11$customizeStyle,
      _ref11$onChange = _ref11.onChange,
      o = _ref11$onChange === void 0 ? function () {} : _ref11$onChange;
    var i = cssPrefix(),
      m = function m(e, t) {
        return e.includes("--" + t);
      },
      u = {
        marginRight: pxTransform(s)
      },
      d = {
        fontSize: a ? "" + pxTransform(a) : ""
      },
      p = {
        color: c
      };
    s = [i + "-rate"];
    var g = [];
    var f = Math.floor(r),
      h = Math.ceil(r);
    for (var _e2 = 0; _e2 < n; _e2++) f > _e2 ? g.push("".concat(i, "-rate__icon ").concat(i, "-rate__icon--on")) : h - 1 === _e2 ? g.push("".concat(i, "-rate__icon ").concat(i, "-rate__icon--half")) : g.push("".concat(i, "-rate__icon ").concat(i, "-rate__icon--off"));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CompContainer, {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(s, t),
      style: e,
      customizeStyle: l
    }, g.map(function (e, a) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: e,
        key: i + "-rate-star-" + a,
        style: u,
        onClick: function onClick(e) {
          var t = a + 1;
          o && o(e, t);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "r"], {
        className: "".concat(i, "-icon ").concat(i, "-icon-star"),
        style: m(e, "on") ? Object.assign(p, d) : d
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: i + "-rate__left",
        style: m(e, "half") ? p : {}
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "r"], {
        className: "".concat(i, "-icon ").concat(i, "-icon-star"),
        style: d
      })));
    }));
  },
  Switch = function Switch(t) {
    var _t$className = t.className,
      e = _t$className === void 0 ? "" : _t$className,
      _t$activeColor = t.activeColor,
      a = _t$activeColor === void 0 ? "" : _t$activeColor,
      _t$btnColor = t.btnColor,
      r = _t$btnColor === void 0 ? "" : _t$btnColor,
      _t$bgColor = t.bgColor,
      n = _t$bgColor === void 0 ? "" : _t$bgColor,
      _t$bgHeight = t.bgHeight,
      s = _t$bgHeight === void 0 ? 32 : _t$bgHeight,
      _t$bgWidth = t.bgWidth,
      c = _t$bgWidth === void 0 ? 90 : _t$bgWidth,
      _t$btnSize = t.btnSize,
      l = _t$btnSize === void 0 ? 44 : _t$btnSize,
      _t$disabled = t.disabled,
      o = _t$disabled === void 0 ? !1 : _t$disabled,
      _t$radius2 = t.radius,
      i = _t$radius2 === void 0 ? 19 : _t$radius2,
      _t$customizeStyle = t.customizeStyle,
      m = _t$customizeStyle === void 0 ? "" : _t$customizeStyle;
    var u = cssPrefix();
    var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(!1),
      _useState20 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState19, 2),
      d = _useState20[0],
      p = _useState20[1];
    Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
      p(t.checked || !1);
    }, [t.checked]);
    var g = classnames__WEBPACK_IMPORTED_MODULE_8___default()(u + "-switch", Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, u + "-switch__active", d), e),
      f = "\n    width: ".concat(pxTransform(c), ";\n    height: ").concat(pxTransform(s), "; \n    background: ").concat(d ? a : n, ";\n    border-radius: ") + pxTransform(i),
      h = "\n    width: ".concat(pxTransform(l), ";\n    height: ").concat(pxTransform(l), "; \n    background: ").concat(r, "; \n    transform: ").concat(d ? "translateX(".concat(pxTransform(c - l), ")") : "", "; \n    top: ") + pxTransform(-(l - s) / 2);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CompContainer, {
      className: g,
      style: {
        width: pxTransform(c),
        height: pxTransform(s)
      },
      customizeStyle: m,
      onClick: function onClick() {
        var e = !d;
        isFunction(t.onChange) && !o && t.onChange(e);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: u + "-switch__bg",
      style: f
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: u + "-switch__btn",
      style: h
    }));
  },
  Popup = function Popup(_ref12) {
    var _ref12$title = _ref12.title,
      e = _ref12$title === void 0 ? "" : _ref12$title,
      _ref12$className = _ref12.className,
      t = _ref12$className === void 0 ? "" : _ref12$className,
      _ref12$visible = _ref12.visible,
      a = _ref12$visible === void 0 ? !1 : _ref12$visible,
      _ref12$closeOnclickOv = _ref12.closeOnclickOverlay,
      r = _ref12$closeOnclickOv === void 0 ? !1 : _ref12$closeOnclickOv,
      _ref12$titleAlign = _ref12.titleAlign,
      n = _ref12$titleAlign === void 0 ? "center" : _ref12$titleAlign,
      _ref12$children = _ref12.children,
      s = _ref12$children === void 0 ? "" : _ref12$children,
      _ref12$customizeStyle = _ref12.customizeStyle,
      c = _ref12$customizeStyle === void 0 ? "" : _ref12$customizeStyle,
      _ref12$onClose = _ref12.onClose,
      l = _ref12$onClose === void 0 ? function () {} : _ref12$onClose;
    return function (t, n) {
      var o = cssPrefix();
      var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(!1),
        _useState22 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState21, 2),
        i = _useState22[0],
        m = _useState22[1],
        u = (Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
          m(a);
        }, [a]), function () {
          "function" == typeof l && l();
        }),
        d = function d() {
          m(!1), u();
        };
      var t = classnames__WEBPACK_IMPORTED_MODULE_8___default()(o + "-popup", Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, o + "-popup__active", i), t),
        p = classnames__WEBPACK_IMPORTED_MODULE_8___default()(o + "-popup__container", Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, o + "-popup__container__active", i)),
        n = objectToString({
          "text-align": n
        });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CompContainer, {
        className: t,
        onTouchMove: function onTouchMove(e) {
          e.stopPropagation();
        },
        customizeStyle: c
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: o + "-popup__mask",
        onClick: function onClick() {
          r && d();
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: p
      }, e ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: "popup-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: "popup-header__title",
        style: n
      }, e), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: "popup-header-btn__close",
        onClick: d
      })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: "popup-main"
      }, s)));
    }(t, n);
  },
  Sort = function Sort(r) {
    var _r$list = r.list,
      n = _r$list === void 0 ? [] : _r$list,
      _r$scroll = r.scroll,
      e = _r$scroll === void 0 ? !1 : _r$scroll,
      _r$textColor = r.textColor,
      s = _r$textColor === void 0 ? "#333333" : _r$textColor,
      _r$arrowColor = r.arrowColor,
      c = _r$arrowColor === void 0 ? "#CCCCCC" : _r$arrowColor,
      _r$activeColor = r.activeColor,
      l = _r$activeColor === void 0 ? "#FF2929" : _r$activeColor,
      _r$border = r.border,
      o = _r$border === void 0 ? !1 : _r$border,
      _r$customizeStyle = r.customizeStyle,
      t = _r$customizeStyle === void 0 ? "" : _r$customizeStyle,
      i = cssPrefix(),
      _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      _useState24 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState23, 2),
      m = _useState24[0],
      u = _useState24[1],
      _useState25 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])("asc"),
      _useState26 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState25, 2),
      d = _useState26[0],
      p = _useState26[1];
    Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
      u(r.activeKey || "");
    }, [r.activeKey]), Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
      u(r.activeSort || "asc");
    }, [r.activeSort]);
    var a = {
      flexWrap: e ? "nowrap" : "wrap",
      overflow: 1 < n.length && e ? "auto" : ""
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CompContainer, {
      className: i + "-sort",
      style: a,
      customizeStyle: t
    }, n.map(function (a, e) {
      var t = {
        border: o && 1 === n.length ? "1PX solid" : "",
        borderRadius: 1 === n.length ? pxTransform(21) : "",
        color: m === a.key ? l : s
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        key: e,
        className: i + "-sort__item",
        onClick: function onClick() {
          var e,
            t = m === a.key && "asc" === d ? "desc" : "asc";
          e = a.key, t = t, isFunction(r.onChange) && r.onChange(e, t), u(e), p(t);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: i + "-sort__item-text",
        style: t
      }, a.text, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: i + "-sort__item-icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: i + "-sort__item-icon-item",
        style: {
          color: m === a.key && "asc" === d ? l : c
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: i + "-sort__item-icon-item",
        style: {
          color: m === a.key && "desc" === d ? l : c
        }
      }))));
    }));
  },
  Empty = function Empty(_ref13) {
    var _ref13$src = _ref13.src,
      e = _ref13$src === void 0 ? "" : _ref13$src,
      _ref13$text = _ref13.text,
      t = _ref13$text === void 0 ? "" : _ref13$text,
      _ref13$btnText = _ref13.btnText,
      a = _ref13$btnText === void 0 ? "" : _ref13$btnText,
      _ref13$rect = _ref13.rect,
      r = _ref13$rect === void 0 ? "rect" : _ref13$rect,
      _ref13$className = _ref13.className,
      n = _ref13$className === void 0 ? "" : _ref13$className,
      _ref13$children = _ref13.children,
      s = _ref13$children === void 0 ? "" : _ref13$children,
      _ref13$customizeStyle = _ref13.customizeStyle,
      c = _ref13$customizeStyle === void 0 ? "" : _ref13$customizeStyle,
      _ref13$onClick = _ref13.onClick,
      l = _ref13$onClick === void 0 ? function () {} : _ref13$onClick;
    return function (r, n) {
      var o = cssPrefix(),
        n = classnames__WEBPACK_IMPORTED_MODULE_8___default()(o + "-empty", n),
        r = classnames__WEBPACK_IMPORTED_MODULE_8___default()(o + "-empty__image", Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, o + "-empty__image__" + r, ["angle", "circle"].includes(r)));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CompContainer, {
        className: n,
        customizeStyle: c
      }, e && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ImageComponent, {
        src: e,
        className: r
      }), t && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "r"], {
        className: o + "-empty__text"
      }, t), s || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, a && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ButtonComponent, {
        fill: !0,
        radius: 12,
        onClick: l
      }, a)));
    }(r, n);
  },
  obj = {
    squared: cssPrefix() + "-skeleton-squared",
    rounded: cssPrefix() + "-skeleton-rounded",
    default: ""
  },
  Skeleton = function Skeleton(_ref14) {
    var _ref14$className = _ref14.className,
      e = _ref14$className === void 0 ? "" : _ref14$className,
      _ref14$width = _ref14.width,
      t = _ref14$width === void 0 ? 24 : _ref14$width,
      _ref14$height = _ref14.height,
      a = _ref14$height === void 0 ? 24 : _ref14$height,
      _ref14$type = _ref14.type,
      r = _ref14$type === void 0 ? "default" : _ref14$type,
      _ref14$customizeStyle = _ref14.customizeStyle,
      n = _ref14$customizeStyle === void 0 ? "" : _ref14$customizeStyle;
    return function (t) {
      var s = cssPrefix(),
        t = {
          width: pxTransform(t || 24),
          minHeight: pxTransform(a || 24)
        };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CompContainer, {
        customizeStyle: n,
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(s + "-skeleton", e)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(s + "-skeleton-box", obj[r || "default"]),
        style: t
      }));
    }(t);
  },
  TagPrice = function TagPrice(_ref15) {
    var _ref15$className = _ref15.className,
      e = _ref15$className === void 0 ? "" : _ref15$className,
      _ref15$color = _ref15.color,
      t = _ref15$color === void 0 ? "#FF2929" : _ref15$color,
      _ref15$title = _ref15.title,
      a = _ref15$title === void 0 ? "价格" : _ref15$title,
      _ref15$price = _ref15.price,
      r = _ref15$price === void 0 ? "0" : _ref15$price,
      _ref15$size = _ref15.size,
      n = _ref15$size === void 0 ? 24 : _ref15$size,
      _ref15$customizeStyle = _ref15.customizeStyle,
      s = _ref15$customizeStyle === void 0 ? "" : _ref15$customizeStyle;
    var c = cssPrefix(),
      l = {
        color: t,
        fontSize: pxTransform(n || 24)
      },
      o = {
        background: t,
        borderColor: t
      };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CompContainer, {
      customizeStyle: s,
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(c + "-tag-price", e),
      style: l
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: c + "-tag-price__title",
      style: o
    }, a), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Price, {
      price: r,
      color: t,
      symbolSize: n,
      unitSize: n,
      className: c + "-tag-price__price"
    }));
  },
  Grid$1 = function Grid$1(a) {
    var _a$columnNum = a.columnNum,
      r = _a$columnNum === void 0 ? 4 : _a$columnNum,
      _a$border = a.border,
      n = _a$border === void 0 ? !1 : _a$border,
      _a$iconSize = a.iconSize,
      s = _a$iconSize === void 0 ? 60 : _a$iconSize,
      _a$clickable = a.clickable,
      c = _a$clickable === void 0 ? !1 : _a$clickable,
      _a$direction = a.direction,
      l = _a$direction === void 0 ? "bottom" : _a$direction,
      _a$customizeStyle = a.customizeStyle,
      e = _a$customizeStyle === void 0 ? "" : _a$customizeStyle;
    var t = cssPrefix(),
      t = classnames__WEBPACK_IMPORTED_MODULE_8___default()(t + "-grid"),
      o = react__WEBPACK_IMPORTED_MODULE_7___default.a.Children.map(a.children, function (e, t) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.isValidElement(e) ? (t = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({}, e.props), {}, {
          columnNum: r,
          border: n,
          iconSize: s,
          direction: l,
          index: t + 1,
          length: a.children.length,
          onClick: function onClick() {
            c || e.props.onClick();
          }
        }), /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_7__["cloneElement"])(e, t)) : e;
      }),
      i = objectToString({
        "grid-template-columns": new Array(r).fill("auto ").reduce(function (e, t) {
          return e + t;
        }, "")
      });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CompContainer, {
      className: t,
      style: i,
      customizeStyle: e
    }, o);
  },
  GridItem = function GridItem(t) {
    var _classNames22, _classNames23;
    var e = cssPrefix(),
      a = function a(e) {
        isFunction(t.onClick) && t.onClick(e);
      },
      r = t.className,
      n = t.url,
      s = t.icon,
      c = t.text,
      l = t.direction,
      o = t.border,
      i = t.children,
      _t$columnNum = t.columnNum,
      m = _t$columnNum === void 0 ? 4 : _t$columnNum,
      _t$index = t.index,
      u = _t$index === void 0 ? 0 : _t$index,
      _t$length = t.length,
      d = _t$length === void 0 ? 0 : _t$length,
      _t$iconSize = t.iconSize,
      p = _t$iconSize === void 0 ? 60 : _t$iconSize,
      g = o && u % m != 0,
      o = o && Math.ceil(u / m) < Math.ceil(d / m),
      u = classnames__WEBPACK_IMPORTED_MODULE_8___default()(e + "-grid-item", r, (_classNames22 = {}, Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames22, e + "-grid-item-border-right", g), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames22, e + "-grid-item-border-bottom", o), _classNames22)),
      d = classnames__WEBPACK_IMPORTED_MODULE_8___default()(e + "-grid-item__content", (_classNames23 = {}, Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames23, e + "-grid-item__content_row", "right" === l || "left" === l), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames23, e + "-grid-item__content_top", "top" === l), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames23, e + "-grid-item__content_right", "right" === l), _classNames23)),
      m = classnames__WEBPACK_IMPORTED_MODULE_8___default()(e + "-grid-item__content-image ".concat(e, "-icon"), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, e + "-icon-" + s, s)),
      r = objectToString({
        width: pxTransform(p),
        height: pxTransform(p)
      }),
      g = n ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Image */ "d"], {
        className: e + "-grid-item__content-image",
        style: r,
        src: n
      }) : s ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "r"], {
        className: m,
        style: r
      }) : null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: u
    }, i, !i && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, "bottom" === l || "left" === l ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: d,
      onClick: a
    }, g, c && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "r"], {
      className: e + "-grid-item__content-text"
    }, c)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: d,
      onClick: a
    }, c && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "r"], {
      className: e + "-grid-item__content-text"
    }, c), g)));
  },
  Grid = Grid$1,
  Badge = (Grid.Item = GridItem, function (_ref16) {
    var _ref16$dot = _ref16.dot,
      e = _ref16$dot === void 0 ? !1 : _ref16$dot,
      _ref16$value = _ref16.value,
      t = _ref16$value === void 0 ? "" : _ref16$value,
      _ref16$maxValue = _ref16.maxValue,
      a = _ref16$maxValue === void 0 ? 99 : _ref16$maxValue,
      r = _ref16.className,
      n = _ref16.color,
      s = _ref16.content,
      c = _ref16.children,
      l = _ref16.customizeStyle;
    return function (t) {
      var o = cssPrefix(),
        i = [o + "-badge"],
        t = function (e, t) {
          if (!e) return "";
          var a = +e;
          return Number.isNaN(a) ? e : t < a ? t + "+" : a;
        }(t, a);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CompContainer, {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(i, r),
        customizeStyle: l
      }, c, s ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: o + "-badge__num",
        style: n ? "background:" + n : ""
      }, s) : e ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: o + "-badge__dot",
        style: n ? "background:" + n : ""
      }) : "" !== t && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: o + "-badge__num",
        style: n ? "background:" + n : ""
      }, t));
    }(t);
  });
function addNum(e, t) {
  var a, r;
  try {
    a = String(e).split(".")[1].length;
  } catch (e) {
    a = 0;
  }
  try {
    r = String(t).split(".")[1].length;
  } catch (e) {
    r = 0;
  }
  var n = Math.pow(10, Math.max(a, r));
  return (Math.round(e * n) + Math.round(t * n)) / n;
}
function parseValue(e) {
  if ("" === e) return "0";
  var t = String(e);
  return 0 === t.indexOf("0") && -1 === t.indexOf(".") ? String(parseFloat(e)) : String(e);
}
var InputNumber = function InputNumber(_ref17) {
    var e = _ref17.className,
      _ref17$disabled = _ref17.disabled,
      s = _ref17$disabled === void 0 ? !1 : _ref17$disabled,
      _ref17$readonly = _ref17.readonly,
      t = _ref17$readonly === void 0 ? !1 : _ref17$readonly,
      _ref17$value = _ref17.value,
      c = _ref17$value === void 0 ? 0 : _ref17$value,
      _ref17$type = _ref17.type,
      a = _ref17$type === void 0 ? "number" : _ref17$type,
      _ref17$width = _ref17.width,
      r = _ref17$width === void 0 ? 0 : _ref17$width,
      _ref17$min = _ref17.min,
      l = _ref17$min === void 0 ? 0 : _ref17$min,
      _ref17$max = _ref17.max,
      o = _ref17$max === void 0 ? 9999 : _ref17$max,
      _ref17$step = _ref17.step,
      i = _ref17$step === void 0 ? 1 : _ref17$step,
      _ref17$size = _ref17.size,
      n = _ref17$size === void 0 ? "normal" : _ref17$size,
      _ref17$onChange = _ref17.onChange,
      m = _ref17$onChange === void 0 ? function () {} : _ref17$onChange,
      _ref17$onBlur = _ref17.onBlur,
      u = _ref17$onBlur === void 0 ? function () {} : _ref17$onBlur,
      _ref17$onErrorInput = _ref17.onErrorInput,
      d = _ref17$onErrorInput === void 0 ? function () {} : _ref17$onErrorInput,
      p = _ref17.customizeStyle;
    return function (e, r, n) {
      var g = cssPrefix();
      var f = function f(e, t) {
          var a = "minus" === e && c <= l;
          if (a || "plus" === e && o <= c || s) {
            var _n = "minus" === e ? -i : i;
            var r = addNum(Number(c), _n);
            void (s ? E({
              type: "DISABLED",
              errorValue: r
            }) : E({
              type: a ? "LOW" : "OVER",
              errorValue: r
            }));
          } else {
            var _n2 = "minus" === e ? -i : i;
            a = addNum(Number(c), _n2), a = Number(h(a));
            m(a, t);
          }
        },
        h = function h(e) {
          var t = "" === e ? l : e;
          return t > o && (t = o, E({
            type: "OVER",
            errorValue: t
          })), t < l && (t = l, E({
            type: "LOW",
            errorValue: t
          })), t && !Number(t) && (t = parseFloat(String(t)) || l, E({
            type: "OVER",
            errorValue: t
          })), t = parseValue(String(t));
        };
      var E = function E(e) {
        d && d(e);
      };
      var r = {
          width: r ? "" + pxTransform(r) : ""
        },
        y = Number(h(c)),
        n = classnames__WEBPACK_IMPORTED_MODULE_8___default()(g + "-input-number", Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, g + "-input-number--lg", "large" === n), e),
        e = classnames__WEBPACK_IMPORTED_MODULE_8___default()(g + "-input-number__btn", Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, g + "-input-number--disabled", y <= l || s)),
        v = classnames__WEBPACK_IMPORTED_MODULE_8___default()(g + "-input-number__btn", Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, g + "-input-number--disabled", o <= y || s));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CompContainer, {
        className: n,
        customizeStyle: p
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: e,
        onClick: function onClick(e) {
          return f("minus", e);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "r"], {
        className: g + "-icon ".concat(g, "-icon-subtract ").concat(g, "-input-number__btn-subtract")
      }, "-")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Input */ "e"], {
        className: g + "-input-number__input",
        style: r,
        type: a,
        value: String(y),
        disabled: t || s,
        onInput: function onInput(e) {
          var t = e.target["value"];
          if (s) return "";
          t = h(t);
          return m(Number(t), e), t;
        },
        onBlur: function onBlur(e) {
          return u && u(e);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: v,
        onClick: function onClick(e) {
          return f("plus", e);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "r"], {
        className: g + "-icon ".concat(g, "-icon-add ").concat(g, "-input-number__btn-add")
      }, "+")));
    }(e, r, n);
  },
  ModalAction = function ModalAction(_ref18) {
    var _ref18$isSimple = _ref18.isSimple,
      e = _ref18$isSimple === void 0 ? !1 : _ref18$isSimple,
      t = _ref18.className,
      a = _ref18.children;
    return function (e) {
      var r = cssPrefix(),
        e = classnames__WEBPACK_IMPORTED_MODULE_8___default()(r + "-modal__footer", Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, r + "-modal__footer--simple", e), t);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: e
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: r + "-modal__action"
      }, a));
    }(e);
  },
  ModalContent = (ModalAction.prototype.displayName = "ModalAction", function (_ref19) {
    var e = _ref19.children,
      t = _ref19.className;
    var a = cssPrefix(),
      a = classnames__WEBPACK_IMPORTED_MODULE_8___default()(a + "-modal__content", t);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* ScrollView */ "m"], {
      scrollY: !0,
      className: a
    }, e);
  }),
  ModalHeader = (ModalContent.prototype.displayName = "ModalContent", function (_ref20) {
    var e = _ref20.children,
      t = _ref20.className;
    var a = cssPrefix(),
      a = classnames__WEBPACK_IMPORTED_MODULE_8___default()(a + "-modal__header", t);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: a
    }, e);
  }),
  Modal$1 = (ModalHeader.prototype.displayName = "ModalHeader", function (_ref21) {
    var _ref21$isOpened = _ref21.isOpened,
      e = _ref21$isOpened === void 0 ? !1 : _ref21$isOpened,
      _ref21$closeOnClickOv = _ref21.closeOnClickOverlay,
      t = _ref21$closeOnClickOv === void 0 ? !0 : _ref21$closeOnClickOv,
      _ref21$contentAlign = _ref21.contentAlign,
      a = _ref21$contentAlign === void 0 ? "center" : _ref21$contentAlign,
      r = _ref21.title,
      n = _ref21.content,
      s = _ref21.cancelText,
      c = _ref21.confirmText,
      l = _ref21.className,
      o = _ref21.onClose,
      i = _ref21.onConfirm,
      m = _ref21.onCancel,
      u = _ref21.customizeStyle,
      d = _ref21.children;
    return function (l) {
      var p = cssPrefix();
      var _useState27 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(e),
        _useState28 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState27, 2),
        g = _useState28[0],
        f = _useState28[1];
      var _useState29 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(isWeb),
        _useState30 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState29, 1),
        h = _useState30[0],
        E = (Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
          handleTouchScroll(e), f(e);
        }, [e]), function () {
          if (t) {
            f(!1);
            var e = void 0;
            if (typeof o === "function") o(e);
          }
        });
      var y = {
        ModalHeader: null,
        ModalContent: null,
        ModalAction: null
      };
      react__WEBPACK_IMPORTED_MODULE_7___default.a.Children.map(d, function (e) {
        var t;
        /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.isValidElement(e) && (t = e.type.displayName, console.log(d), y[t] = e);
      });
      var v,
        l = classnames__WEBPACK_IMPORTED_MODULE_8___default()(p + "-modal", Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, p + "-modal--active", g), l);
      return r || n ? (v = s || c, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CompContainer, {
        className: l,
        customizeStyle: u
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        onClick: E,
        className: p + "-modal__overlay"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: p + "-modal__container"
      }, r && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ModalHeader, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "r"], null, r)), y.ModalHeader, n && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ModalContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: "content-simple",
        style: "text-align: " + a
      }, h ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "r"], {
        dangerouslySetInnerHTML: {
          __html: n.replace(/\n/g, "<br/>")
        }
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "r"], null, n))), y.ModalContent, v && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ModalAction, {
        isSimple: !0
      }, s && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Button */ "a"], {
        className: p + "-modal__button",
        onClick: function onClick(e) {
          "function" == typeof m && m(e);
        }
      }, s), c && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Button */ "a"], {
        className: p + "-modal__button ".concat(p, "-modal__button-confirm"),
        onClick: function onClick(e) {
          "function" == typeof i && i(e);
        }
      }, c)), y.ModalAction))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        onTouchMove: function onTouchMove(e) {
          e.stopPropagation();
        },
        className: l
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: p + "-modal__overlay",
        onClick: E
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: p + "-modal__container"
      }, d));
    }(l);
  }),
  Modal = Modal$1,
  NavBar = (Modal.Header = ModalHeader, Modal.Content = ModalContent, Modal.Action = ModalAction, function (_ref22) {
    var e = _ref22.customStyle,
      _ref22$className = _ref22.className,
      t = _ref22$className === void 0 ? "" : _ref22$className,
      _ref22$fixed = _ref22.fixed,
      a = _ref22$fixed === void 0 ? !1 : _ref22$fixed,
      _ref22$border = _ref22.border,
      r = _ref22$border === void 0 ? !0 : _ref22$border,
      _ref22$color = _ref22.color,
      n = _ref22$color === void 0 ? "" : _ref22$color,
      _ref22$leftIcon = _ref22.leftIcon,
      s = _ref22$leftIcon === void 0 ? !1 : _ref22$leftIcon,
      _ref22$leftIconType = _ref22.leftIconType,
      c = _ref22$leftIconType === void 0 ? "chevron-left" : _ref22$leftIconType,
      _ref22$leftText = _ref22.leftText,
      l = _ref22$leftText === void 0 ? "" : _ref22$leftText,
      _ref22$title = _ref22.title,
      o = _ref22$title === void 0 ? "" : _ref22$title,
      _ref22$rightIconType = _ref22.rightIconType,
      i = _ref22$rightIconType === void 0 ? "" : _ref22$rightIconType,
      _ref22$onClickLeft = _ref22.onClickLeft,
      m = _ref22$onClickLeft === void 0 ? function () {} : _ref22$onClickLeft,
      _ref22$onClickRight = _ref22.onClickRight,
      u = _ref22$onClickRight === void 0 ? function () {} : _ref22$onClickRight,
      d = _ref22.children,
      p = _ref22.customizeStyle;
    return function (n) {
      var _classNames32, _classNames33;
      var g = cssPrefix(),
        n = {
          color: n
        },
        f = {
          customStyle: "",
          className: "",
          prefixClass: g + "-icon",
          value: "",
          color: "",
          size: 20
        };
      var h = c instanceof Object ? Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({}, f), c) : Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({}, f), {}, {
        value: c
      });
      var E = classnames__WEBPACK_IMPORTED_MODULE_8___default()(h.prefixClass, Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, h.prefixClass + "-" + h.value, h.value), h.className);
      var y = i instanceof Object ? Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({}, f), i) : Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({}, f), {}, {
        value: i
      });
      f = classnames__WEBPACK_IMPORTED_MODULE_8___default()(y.prefixClass, Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, y.prefixClass + "-" + y.value, y.value), y.className);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CompContainer, {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()((_classNames32 = {}, Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames32, g + "-nav-bar", !0), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames32, g + "-nav-bar--fixed", a), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames32, g + "-nav-bar--no-border", !r), _classNames32), t),
        style: e,
        customizeStyle: p
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: g + "-nav-bar__left-view",
        onClick: function onClick(e) {
          m && m(e);
        },
        style: n
      }, s && c && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "r"], {
        className: E,
        style: mergeStyle({
          color: h.color,
          fontSize: "" + _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.pxTransform(2 * parseInt(h.size.toString()))
        }, h.customStyle)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "r"], {
        className: g + "-nav-bar__text"
      }, l)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: g + "-nav-bar__title"
      }, o || d), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: g + "-nav-bar__right-view"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()((_classNames33 = {}, Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames33, g + "-nav-bar__container", !0), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames33, g + "-nav-bar__container--hide", !i), _classNames33)),
        style: n,
        onClick: function onClick(e) {
          u && u(e);
        }
      }, i && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "r"], {
        className: f,
        style: mergeStyle({
          color: y.color,
          fontSize: "" + _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.pxTransform(2 * parseInt(y.size.toString()))
        }, y.customStyle)
      }))));
    }(n);
  }),
  Overlay = function Overlay(_ref23) {
    var _ref23$show = _ref23.show,
      e = _ref23$show === void 0 ? !1 : _ref23$show,
      _ref23$onClick = _ref23.onClick,
      t = _ref23$onClick === void 0 ? function () {} : _ref23$onClick,
      a = _ref23.children,
      r = _ref23.customizeStyle;
    var n = cssPrefix();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CompContainer, {
      className: n + "-overlay-wrapper",
      style: "display: ".concat(e ? "block" : "none", " "),
      customizeStyle: r,
      onClick: function onClick() {
        return t();
      }
    }, a);
  },
  SearchBar = function SearchBar(_ref24) {
    var _ref24$value = _ref24.value,
      e = _ref24$value === void 0 ? "" : _ref24$value,
      _ref24$placeholder = _ref24.placeholder,
      t = _ref24$placeholder === void 0 ? "搜索" : _ref24$placeholder,
      _ref24$maxLength = _ref24.maxLength,
      a = _ref24$maxLength === void 0 ? 140 : _ref24$maxLength,
      _ref24$fixed = _ref24.fixed,
      r = _ref24$fixed === void 0 ? !1 : _ref24$fixed,
      _ref24$inputAlign = _ref24.inputAlign,
      n = _ref24$inputAlign === void 0 ? "right" : _ref24$inputAlign,
      _ref24$focus = _ref24.focus,
      s = _ref24$focus === void 0 ? !1 : _ref24$focus,
      _ref24$disabled = _ref24.disabled,
      c = _ref24$disabled === void 0 ? !1 : _ref24$disabled,
      _ref24$cancelText = _ref24.cancelText,
      l = _ref24$cancelText === void 0 ? "取消" : _ref24$cancelText,
      _ref24$inputType = _ref24.inputType,
      o = _ref24$inputType === void 0 ? "text" : _ref24$inputType,
      _ref24$shape = _ref24.shape,
      i = _ref24$shape === void 0 ? "round" : _ref24$shape,
      _ref24$onChange = _ref24.onChange,
      m = _ref24$onChange === void 0 ? function () {} : _ref24$onChange,
      _ref24$onFocus = _ref24.onFocus,
      u = _ref24$onFocus === void 0 ? function () {} : _ref24$onFocus,
      _ref24$onBlur = _ref24.onBlur,
      d = _ref24$onBlur === void 0 ? function () {} : _ref24$onBlur,
      _ref24$onConfirm = _ref24.onConfirm,
      p = _ref24$onConfirm === void 0 ? function () {} : _ref24$onConfirm,
      _ref24$onCancel = _ref24.onCancel,
      g = _ref24$onCancel === void 0 ? function () {} : _ref24$onCancel,
      f = _ref24.onClear,
      h = _ref24.showCancel,
      E = _ref24.background,
      y = _ref24.className,
      v = _ref24.customizeStyle;
    var x = cssPrefix();
    var _useState31 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(!!s),
      _useState32 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState31, 2),
      N = _useState32[0],
      b = _useState32[1];
    s = classnames__WEBPACK_IMPORTED_MODULE_8___default()(x + "-search-bar", Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, x + "-search-bar--fixed", r), y);
    var C = {},
      w = {
        opacity: 0
      },
      S = (h ? (w.opacity = 1, w.marginRight = "0") : (w.opacity = 0, w.marginRight = "-".concat(14 * (l.length + 1) + 7 + 10, "px")), N || e ? "center" === n && (C.flexGrow = 0) : "center" === n && (C.flexGrow = 1), {
        display: "flex"
      }),
      R = {
        visibility: "hidden"
      };
    return e.length || (S.display = "none", R.visibility = "visible"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CompContainer, {
      className: s,
      style: E ? {
        backgroundColor: E
      } : {},
      customizeStyle: v
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()([x + "-search-bar__input-cnt"], Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, x + "-search-bar__input-cnt__round", "round" === i))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: x + "-search-bar__placeholder-wrap",
      style: C
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Icon, {
      value: "search"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "r"], {
      className: x + "-search-bar__placeholder",
      style: R
    }, N || e ? "" : t)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Input */ "e"], {
      className: x + "-search-bar__input",
      type: o,
      confirmType: "search",
      value: e,
      focus: N,
      disabled: c,
      maxlength: a,
      onInput: function onInput(e) {
        m(e.detail.value, e);
      },
      onFocus: function onFocus(e) {
        b(!0), u && u(e);
      },
      onBlur: function onBlur(e) {
        b(!1), d && d(e);
      },
      onConfirm: function onConfirm(e) {
        p && p(e);
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: x + "-search-bar__clear",
      style: S,
      onClick: function onClick(e) {
        f ? f(e) : m("", e);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Icon, {
      value: "close-circle"
    }))), h && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: x + "-search-bar__action",
      style: w,
      onClick: function onClick(e) {
        m("", e), g && g(e);
      }
    }, l));
  },
  ProgressCircle = function ProgressCircle(_ref25) {
    var _ref25$percent = _ref25.percent,
      e = _ref25$percent === void 0 ? 0 : _ref25$percent,
      _ref25$size = _ref25.size,
      t = _ref25$size === void 0 ? 200 : _ref25$size,
      _ref25$strokeWidth = _ref25.strokeWidth,
      a = _ref25$strokeWidth === void 0 ? 4 : _ref25$strokeWidth,
      _ref25$layerColor = _ref25.layerColor,
      r = _ref25$layerColor === void 0 ? "#EFEFEF" : _ref25$layerColor,
      _ref25$color = _ref25.color,
      n = _ref25$color === void 0 ? "#DC8D20" : _ref25$color,
      s = _ref25.text,
      c = _ref25.customizeStyle;
    var l = cssPrefix(),
      o = function o(e) {
        return e.replace("#", "%23");
      },
      i = function i(e) {
        return e ? e / 750 * _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.getSystemInfoSync().windowWidth + "px" : "";
      },
      m = (t - 2 * a) / 2,
      u = 2 * Math.PI * m,
      o = {
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle id='circleBg' cx='".concat(i(t / 2), "' cy='").concat(i(t / 2), "' r='").concat(i(m), "' fill='none' stroke-width='").concat(i(a), "' stroke='").concat(o(r), "'%3E%3C/circle%3E%3Ccircle id='circle' cx='").concat(i(t / 2), "' cy='").concat(i(t / 2), "' r='").concat(i(m), "' fill='none' stroke-width='").concat(i(a), "' stroke='").concat(o(n), "' stroke-dasharray='").concat(i(u), "' stroke-dashoffset='").concat(i(u * (1 - e / 100)), "' stroke-linecap='round'%3E%3C/circle%3E%3C/svg%3E\")"),
        width: "100%",
        height: "100%",
        transform: "rotate(-90deg)",
        transformOrigin: "50% 50%"
      };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CompContainer, {
      className: l + "-progress-circle",
      customizeStyle: c,
      style: "width:".concat((isWeapp ? i : pxTransform)(t), "; height:") + (isWeapp ? i : pxTransform)(t)
    }, isWeapp ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("view", {
      style: o
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
      style: {
        height: "100%",
        width: "100%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("circle", {
      id: "circleBg",
      cx: pxTransform(t / 2),
      cy: pxTransform(t / 2),
      r: pxTransform(m),
      fill: "none",
      strokeWidth: pxTransform(a),
      stroke: r
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("circle", {
      id: "circle",
      style: {
        transform: "rotate(-90deg)",
        transformOrigin: "50% 50%"
      },
      cx: pxTransform(t / 2),
      cy: pxTransform(t / 2),
      r: pxTransform(m),
      fill: "none",
      strokeWidth: pxTransform(a),
      stroke: n,
      strokeDasharray: pxTransform(u),
      strokeDashoffset: pxTransform(u * (1 - e / 100)),
      strokeLinecap: "round"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "r"], {
      className: l + "-progress-circle-text"
    }, s));
  },
  Progress = function Progress(_ref26) {
    var _ref26$percent = _ref26.percent,
      e = _ref26$percent === void 0 ? 0 : _ref26$percent,
      _ref26$strokeWidth = _ref26.strokeWidth,
      t = _ref26$strokeWidth === void 0 ? 4 : _ref26$strokeWidth,
      _ref26$color = _ref26.color,
      a = _ref26$color === void 0 ? "#DC8D20" : _ref26$color,
      _ref26$trackColor = _ref26.trackColor,
      r = _ref26$trackColor === void 0 ? "#EFEFEF" : _ref26$trackColor,
      _ref26$showPivot = _ref26.showPivot,
      n = _ref26$showPivot === void 0 ? !0 : _ref26$showPivot,
      _ref26$radius = _ref26.radius,
      s = _ref26$radius === void 0 ? 6 : _ref26$radius,
      c = _ref26.status,
      l = _ref26.pivotText,
      o = _ref26.className,
      i = _ref26.customizeStyle;
    return function (o, t, r) {
      var _classNames37;
      var m = cssPrefix(),
        o = classnames__WEBPACK_IMPORTED_MODULE_8___default()(m + "-progress", Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, m + "-progress--" + c, !!c), o),
        u = classnames__WEBPACK_IMPORTED_MODULE_8___default()(m + "-icon", (_classNames37 = {}, Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames37, m + "-icon-close-circle", "error" === c), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames37, m + "-icon-check-circle", "success" === c), _classNames37)),
        r = {
          backgroundColor: r,
          borderRadius: "" + pxTransform(s)
        },
        t = {
          width: e && +e + "%",
          height: t && "" + pxTransform(+t),
          borderRadius: "" + pxTransform(s),
          backgroundColor: a
        };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CompContainer, {
        className: o,
        customizeStyle: i
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: m + "-progress__outer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: m + "-progress__outer-inner",
        style: r
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: m + "-progress__outer-inner-background",
        style: t
      }))), n && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: m + "-progress__content"
      }, c && "progress" !== c ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "r"], {
        className: u
      }) : "" + (l || e + "%")));
    }(o, t, r);
  },
  CanvasWeapp = function CanvasWeapp(_ref27) {
    var _ref27$id = _ref27.id,
      t = _ref27$id === void 0 ? "canvas" : _ref27$id,
      _ref27$className = _ref27.className,
      e = _ref27$className === void 0 ? "" : _ref27$className,
      _ref27$width = _ref27.width,
      a = _ref27$width === void 0 ? 600 : _ref27$width,
      _ref27$height = _ref27.height,
      r = _ref27$height === void 0 ? 800 : _ref27$height,
      _ref27$visible = _ref27.visible,
      n = _ref27$visible === void 0 ? !1 : _ref27$visible,
      _ref27$overlay = _ref27.overlay,
      s = _ref27$overlay === void 0 ? !0 : _ref27$overlay,
      _ref27$onClose = _ref27.onClose,
      c = _ref27$onClose === void 0 ? function () {} : _ref27$onClose,
      _ref27$customizeStyle = _ref27.customizeStyle,
      l = _ref27$customizeStyle === void 0 ? "" : _ref27$customizeStyle,
      _ref27$contentCallbac = _ref27.contentCallback,
      o = _ref27$contentCallbac === void 0 ? function () {} : _ref27$contentCallbac;
    var i = cssPrefix();
    var _useState33 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(!1),
      _useState34 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState33, 2),
      m = _useState34[0],
      u = _useState34[1],
      d = (Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
        d(), u(n);
      }, [n]), function () {
        try {
          var _e3 = _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.createCanvasContext(t);
          _e3.beginPath(), p(_e3, "#fff", 0, 0, g(a), g(r), g(8)), o(_e3, g), _e3.draw(!0);
        } catch (e) {
          console.log(e);
        }
      }),
      p = function p(e, t, a, r, n, s, c) {
        e.beginPath(), e.save(), e.setFillStyle(t), e.arc(a + c, r + c, c, Math.PI, 1.5 * Math.PI), e.moveTo(a + c, r), e.lineTo(a + n - c, r), e.lineTo(a + n, r + c), e.arc(a + n - c, r + c, c, 1.5 * Math.PI, 2 * Math.PI), e.lineTo(a + n, r + s - c), e.lineTo(a + n - c, r + s), e.arc(a + n - c, r + s - c, c, 0, .5 * Math.PI), e.lineTo(a + c, r + s), e.lineTo(a, r + s - c), e.arc(a + c, r + s - c, c, .5 * Math.PI, Math.PI), e.lineTo(a, r + c), e.lineTo(a + c, r), e.fill(), e.closePath();
      },
      g = function g(e) {
        var t = _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.getSystemInfoSync()["windowWidth"];
        return t / 750 * e;
      };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CompContainer, {
      customizeStyle: l
    }, s ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(i + "-canvas", Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, i + "-canvas-show", m))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: i + "-canvas-mask"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: i + "-canvas-box",
      style: "width: ".concat(pxTransform(a), ";")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: i + "-canvas-icon",
      onClick: function onClick() {
        u(!1), c && c();
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Icon, {
      value: "close",
      size: "20",
      color: "#fff"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Canvas */ "b"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(i + "-canvas-content", e),
      "canvas-id": t,
      style: "width: ".concat(pxTransform(a), "; height: ") + pxTransform(r)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: i + "-canvas-save"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ButtonComponent, {
      size: "large",
      type: "primary",
      className: i + "-canvas-save__button",
      onClick: function onClick() {
        return Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
          var e;
          return Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                e = _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.getSystemInfoSync()["windowWidth"];
                e = e / 375;
                _context.next = 4;
                return _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.canvasToTempFilePath({
                  x: 0,
                  y: 0,
                  width: 300 * e,
                  height: 400 * e,
                  destWidth: 300 * e * 6,
                  destHeight: 400 * e * 6,
                  canvasId: "canvas",
                  fileType: "jpg",
                  quality: 1
                });
              case 4:
                e = _context.sent;
                _context.t0 = e.tempFilePath;
                if (!_context.t0) {
                  _context.next = 9;
                  break;
                }
                _context.next = 9;
                return _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.saveImageToPhotosAlbum({
                  filePath: e.tempFilePath,
                  success: function success() {
                    Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_10__["showToast"])({
                      title: "保存图片成功"
                    });
                  },
                  fail: function fail() {
                    Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_10__["showToast"])({
                      title: "保存图片失败"
                    });
                  }
                });
              case 9:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      },
      color: "#ffffff"
    }, "保存")))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(i + "-canvas-overlay", Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, i + "-canvas-overlay-show", m))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Canvas */ "b"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(i + "-canvas-content", e),
      "canvas-id": t,
      style: "width: ".concat(pxTransform(a), "; height: ") + pxTransform(r)
    })));
  },
  CanvasH5 = function CanvasH5(_ref29) {
    var _ref29$className = _ref29.className,
      e = _ref29$className === void 0 ? "" : _ref29$className,
      _ref29$customizeStyle = _ref29.customizeStyle,
      t = _ref29$customizeStyle === void 0 ? "" : _ref29$customizeStyle,
      _ref29$width = _ref29.width,
      a = _ref29$width === void 0 ? 600 : _ref29$width,
      _ref29$height = _ref29.height,
      r = _ref29$height === void 0 ? 800 : _ref29$height,
      _ref29$visible = _ref29.visible,
      n = _ref29$visible === void 0 ? !1 : _ref29$visible,
      _ref29$overlay = _ref29.overlay,
      s = _ref29$overlay === void 0 ? !0 : _ref29$overlay,
      _ref29$onClose = _ref29.onClose,
      c = _ref29$onClose === void 0 ? function () {} : _ref29$onClose;
    var l = cssPrefix();
    var _useState35 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(!1),
      _useState36 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState35, 2),
      o = _useState36[0],
      i = _useState36[1],
      m = (Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
        i(n);
      }, [n]), function () {
        i(!1), c && c();
      });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CompContainer, {
      customizeStyle: t
    }, s ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(l + "-canvas", Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, l + "-canvas-show", o))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: l + "-canvas-mask"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: l + "-canvas-box",
      style: "width: ".concat(pxTransform(a), ";")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: l + "-canvas-icon",
      onClick: function onClick() {
        return m();
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Icon, {
      value: "close",
      size: "20",
      color: "#fff"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(l + "-canvas-content ".concat(l, "-canvas-contenth5"), e),
      "canvas-id": "canvas",
      style: "width: ".concat(pxTransform(a), "; height: ").concat(pxTransform(r), ";")
    }, "商羚组件无敌~"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: l + "-canvas-save"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ButtonComponent, {
      type: "success",
      size: "large",
      className: l + "-canvas-save__button",
      onClick: function onClick() {
        return Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
          return Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", m());
              case 1:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      }
    }, "保存")))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(l + "-canvas-content ".concat(l, "-canvas-contenth5 ").concat(l, "-canvas-overlay"), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, l + "-canvas-overlay-show", o), e),
      "canvas-id": "canvas",
      style: "width: ".concat(pxTransform(a), "; height: ").concat(pxTransform(r), ";")
    }, "商羚组件无敌~"));
  },
  SlCanvas = isWeb ? CanvasH5 : CanvasWeapp,
  FooterButton = function FooterButton(t) {
    var e = cssPrefix(),
      a = objectToString(function () {
        var e = {
          "border-radius": pxTransform(t.radius || 0),
          lineHeight: pxTransform(t.lineHeight || 1.5)
        };
        return t.color && (e.color = t.color), t.margin && t.doubleBtn && (e["margin-left"] = pxTransform(t.margin)), t.background && (e.background = t.background), e;
      }()),
      r = objectToString(function () {
        var e = {
          "border-radius": pxTransform(t.radius || 0),
          lineHeight: pxTransform(t.lineHeight || 0)
        };
        return t.secColor && (e.color = t.secColor), t.secBackground && (e.background = t.secBackground), e;
      }()),
      n = objectToString({
        width: "100%",
        padding: function () {
          if (!t.padding) return pxTransform(20);
          var e = t.padding.split(" ");
          if (!e.length) return pxTransform(20);
          return e.forEach(function (e) {
            e.replace("/px/g", "");
          }), 1 === e.length ? "" + pxTransform(e[0]) : 2 === e.length ? pxTransform(e[0]) + " " + pxTransform(e[1]) : 3 === e.length ? "".concat(pxTransform(e[0]), " ").concat(pxTransform(e[1]), " ") + pxTransform(e[2]) : 4 === e.length ? "".concat(pxTransform(e[0]), " ").concat(pxTransform(e[1]), " ").concat(pxTransform(e[2]), " ") + pxTransform(e[3]) : void 0;
        }()
      });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CompContainer, {
      customizeStyle: t.customizeStyle,
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(e + "-custom-footer-container", t.className, Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, e + "-custom-footer-container-fixed", t.isFixed))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      style: n
    }, t.content ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, t.content) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: e + "-custom-outer"
    }, t.doubleBtn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: e + "-custom-footer ".concat(e, "-custom-footer-btn2"),
      style: r,
      onClick: function onClick() {
        isFunction(t.secClick) && t.secClick();
      }
    }, t.secondName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: e + "-custom-footer ".concat(e, "-custom-footer-btn1"),
      style: a,
      onClick: function onClick() {
        isFunction(t.onClick) && t.onClick();
      }
    }, t.name, " "))));
  };
function getYears(t, e) {
  var t = new Date(t.replace(/-/g, "/")).getFullYear(),
    a = new Date(e.replace(/-/g, "/")).getFullYear();
  var r = [];
  for (var _e4 = t; _e4 <= a; _e4++) r.push(_e4);
  return r;
}
function getMonths(e, t, a) {
  var r = new Date(t.replace(/-/g, "/")),
    n = new Date(a.replace(/-/g, "/"));
  var t = r.getFullYear(),
    s = r.getMonth() + 1,
    a = n.getFullYear(),
    c = n.getMonth() + 1;
  if (t < e && e < a) return Array.from({
    length: 12
  }, function (e, t) {
    return t + 1;
  });
  if (e === t) {
    var _t3 = [];
    for (var _e5 = 1; _e5 <= 12; _e5++) _e5 >= s && _t3.push(_e5);
    return _t3;
  }
  if (e === a) {
    var _t4 = [];
    for (var _e6 = 1; _e6 <= c; _e6++) _t4.push(_e6);
    return _t4;
  }
}
function getDays(e, t, a, r) {
  var n = new Date(a.replace(/-/g, "/")),
    s = new Date(r.replace(/-/g, "/"));
  var c = [];
  switch (t) {
    case 2:
      c = filterDays(n, s, e, t, e % 4 != 0 ? 28 : 29);
      break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      c = filterDays(n, s, e, t, 31);
      break;
    default:
      c = filterDays(n, s, e, t, 30);
  }
  return c;
}
function getHours(e, t, a, r, n) {
  var s = new Date(r.replace(/-/g, "/")),
    c = new Date(n.replace(/-/g, "/"));
  var r = s.getFullYear(),
    n = s.getMonth() + 1,
    l = s.getDate(),
    o = s.getHours(),
    i = c.getFullYear(),
    m = c.getMonth() + 1,
    u = c.getDate(),
    d = c.getHours();
  var p = [];
  if (r === e && n === t && l === a) for (var _e7 = 0; _e7 <= 23; _e7++) _e7 >= o && p.push(_e7);else if (i === e && m === t && u === a) for (var _e8 = 0; _e8 <= d; _e8++) p.push(_e8);else p = getMapDate(23);
  return p;
}
function getMinutes(e, t, a, r, n, s) {
  var c = new Date(n.replace(/-/g, "/")),
    l = new Date(s.replace(/-/g, "/"));
  var n = c.getFullYear(),
    s = c.getMonth() + 1,
    o = c.getDate(),
    i = c.getHours(),
    m = c.getMinutes(),
    u = l.getFullYear(),
    d = l.getMonth() + 1,
    p = l.getDate(),
    g = l.getHours(),
    f = l.getMinutes();
  var h = [];
  if (n === e && s === t && o === a && i === r) for (var _e9 = 0; _e9 <= 59; _e9++) _e9 >= m && h.push(_e9);else if (u === e && d === t && p === a && g === r) for (var _e10 = 0; _e10 <= f; _e10++) h.push(_e10);else h = getMapDate(59);
  return h;
}
function filterDays(e, t, a, r, n) {
  var s = e.getFullYear(),
    c = e.getMonth() + 1,
    l = e.getDate(),
    e = t.getFullYear(),
    o = t.getMonth() + 1,
    i = t.getDate();
  var m = [];
  if (s === a && c === r) for (var _e11 = 1; _e11 <= n; _e11++) _e11 >= l && m.push(_e11);else if (e === a && o === r) for (var _e12 = 1; _e12 <= i; _e12++) m.push(_e12);else m = getMapDate(n, !0);
  return m;
}
function getMapDate(e) {
  var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  return Array.from({
    length: e
  }, function (e, t) {
    return a ? t + 1 : t;
  });
}
var getYear = function getYear(e) {
    return getDateUTC(e).getFullYear();
  },
  getMonth = function getMonth(e) {
    return getDateUTC(e).getMonth() + 1;
  },
  getDate = function getDate(e) {
    return getDateUTC(e).getDate();
  },
  getHour = function getHour(e) {
    return getDateUTC(e).getHours();
  },
  getMinute = function getMinute(e) {
    return getDateUTC(e).getMinutes();
  },
  DatetimePicker = function DatetimePicker(l) {
    var _classNames44;
    var _l$showEndDate = l.showEndDate,
      r = _l$showEndDate === void 0 ? !1 : _l$showEndDate,
      _l$visible = l.visible,
      e = _l$visible === void 0 ? !1 : _l$visible,
      _l$closeOnclickOverla = l.closeOnclickOverlay,
      _ = _l$closeOnclickOverla === void 0 ? !0 : _l$closeOnclickOverla,
      _l$title = l.title,
      B = _l$title === void 0 ? "选中时间" : _l$title,
      _l$endTitle = l.endTitle,
      D = _l$endTitle === void 0 ? "结束时间" : _l$endTitle,
      _l$type = l.type,
      t = _l$type === void 0 ? "date" : _l$type,
      _l$value = l.value,
      s = _l$value === void 0 ? "" : _l$value,
      _l$endValue = l.endValue,
      a = _l$endValue === void 0 ? "" : _l$endValue,
      _l$minDate = l.minDate,
      c = _l$minDate === void 0 ? "1990-01-01" : _l$minDate,
      _l$maxDate = l.maxDate,
      o = _l$maxDate === void 0 ? new Date().getFullYear() + 5 + "-01-01" : _l$maxDate,
      _l$round = l.round,
      j = _l$round === void 0 ? !1 : _l$round,
      _l$customizeStyle = l.customizeStyle,
      Y = _l$customizeStyle === void 0 ? "" : _l$customizeStyle,
      n = cssPrefix(),
      i = function i(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "date";
        return function (e) {
          var a = new Date();
          if ("time" === t) {
            var _r2 = [getHour(e), getMinute(e)];
            return [-1 !== h.indexOf(+_r2[0]) ? h.indexOf(+_r2[0]) : 1, -1 !== E.indexOf(+_r2[1]) ? E.indexOf(+_r2[1]) : 1];
          }
          var r = [getYear(e), getMonth(e), getDate(e), getHour(e), getMinute(e)];
          var e = +r[0] < a.getFullYear() ? +r[0] : a.getFullYear(),
            e = -1 != +d.indexOf(e) ? +d.indexOf(e) : d[d.length - 1],
            n = -1 !== p.indexOf(+r[1]) ? p.indexOf(+r[1]) : 1,
            s = -1 !== f.indexOf(+r[2]) ? f.indexOf(+r[2]) : 1;
          return "datetime" === t ? [e, n, s, -1 !== h.indexOf(+r[3]) ? h.indexOf(+r[3]) : 1, -1 !== E.indexOf(+r[4]) ? E.indexOf(+r[4]) : 1] : [e, n, s];
        }(e);
      },
      _useState37 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(e),
      _useState38 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState37, 2),
      m = _useState38[0],
      u = _useState38[1],
      _useState39 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(getYears(c, o)),
      _useState40 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState39, 2),
      d = _useState40[0],
      z = _useState40[1],
      _useState41 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(getMonths(getYear(s), c, o) || []),
      _useState42 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState41, 2),
      p = _useState42[0],
      g = _useState42[1],
      _useState43 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(getDays(getYear(s), getMonth(s), c, o)),
      _useState44 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState43, 2),
      f = _useState44[0],
      W = _useState44[1],
      _useState45 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(getHours(getMonth(s), getDate(s), getYear(s), c, o)),
      _useState46 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState45, 2),
      h = _useState46[0],
      O = _useState46[1],
      _useState47 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(getMinutes(getMonth(s), getDate(s), getYear(s), getHour(s), c, o)),
      _useState48 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState47, 2),
      E = _useState48[0],
      K = _useState48[1],
      _useState49 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(getYear(s)),
      _useState50 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState49, 2),
      y = _useState50[0],
      J = _useState50[1],
      _useState51 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(getYear(a)),
      _useState52 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState51, 2),
      v = _useState52[0],
      G = _useState52[1],
      _useState53 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(getMonth(s)),
      _useState54 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState53, 2),
      x = _useState54[0],
      L = _useState54[1],
      _useState55 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(getMonth(a)),
      _useState56 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState55, 2),
      N = _useState56[0],
      Q = _useState56[1],
      _useState57 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(getDate(s)),
      _useState58 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState57, 2),
      b = _useState58[0],
      U = _useState58[1],
      _useState59 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(getDate(a)),
      _useState60 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState59, 2),
      C = _useState60[0],
      Z = _useState60[1],
      _useState61 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(getHour(s)),
      _useState62 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState61, 2),
      w = _useState62[0],
      S = _useState62[1],
      _useState63 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(getHour(a)),
      _useState64 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState63, 2),
      R = _useState64[0],
      T = _useState64[1],
      _useState65 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(getMinute(s)),
      _useState66 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState65, 2),
      k = _useState66[0],
      A = _useState66[1],
      _useState67 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(getMinute(a)),
      _useState68 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState67, 2),
      V = _useState68[0],
      M = _useState68[1],
      _useState69 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(i(s, l.type)),
      _useState70 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState69, 2),
      X = _useState70[0],
      P = _useState70[1],
      _useState71 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(a ? i(a, l.type) : [9999, 0, 0]),
      _useState72 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState71, 2),
      q = _useState72[0],
      $ = _useState72[1],
      _useState73 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(1),
      _useState74 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState73, 2),
      F = _useState74[0],
      ee = _useState74[1],
      _useState75 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(!1),
      _useState76 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState75, 2),
      te = _useState76[0],
      ae = _useState76[1];
    Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
      u(e);
    }, [e]), Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
      "date" !== t && P(i(s, t));
    }, [t, s]), Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
      J(getYear(s)), L(getMonth(s)), U(getDate(s)), P(i(s, t)), S(getHour(s)), A(getMinute(s));
    }, [s]), Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
      G(getYear(a)), Q(getMonth(a)), Z(getDate(a)), $(a ? i(a, t) : [9999, 0, 0]), T(getHour(a)), M(getMinute(a));
    }, [a]), Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
      var e = getYears(c, o),
        t = getMonths(getYear(s), c, o) || [],
        a = getDays(getYear(s), getMonth(s), c, o),
        r = getHours(getMonth(s), getDate(s), getYear(s), c, o),
        n = getMinutes(getMonth(s), getDate(s), getYear(s), getHour(s), c, o);
      z(e), g(t), W(a), O(r), K(n);
    }, [c, o]);
    var re = function re() {
        "function" == typeof l.onClose && l.onClose();
      },
      I = function I(e) {
        return e < 10 ? "0" + e : e;
      },
      ne = function ne() {
        u(!1), re();
      },
      se = function se() {
        if (r && ce("start") > ce("end")) ae(!0);else {
          u(!1);
          {
            var t = l["type"];
            var _a = [];
            var _e13 = "";
            if ("datetime" === t ? _e13 = (_e13 += "".concat(y, "-").concat(I(x), "-") + I(b)) + " ".concat(I(w), ":") + I(k) : _e13 += "date" === t ? "".concat(y, "-").concat(I(x), "-") + I(b) : I(w) + ":" + I(k), _a.push(_e13), r) {
              var _e14 = "".concat(v, "-").concat(I(N), "-") + I(C);
              "datetime" === t ? (_e14 = "".concat(v, "-").concat(I(N), "-") + I(C), _e14 += " ".concat(I(R), ":") + I(V)) : "date" === t ? _e14 = "".concat(v, "-").concat(I(N), "-") + I(C) : _e14 += I(R) + ":" + I(V), _a.push(_e14);
            }
            "function" == typeof l.onOk && l.onOk(_a);
          }
        }
      },
      ce = function ce(e) {
        return ("start" === e ? new Date("".concat(y, "/").concat(x, "/").concat(b, " ").concat(w, ":") + k) : new Date("".concat(v, "/").concat(N, "/").concat(C, " ").concat(R, ":") + V)).getTime();
      };
    var le = classnames__WEBPACK_IMPORTED_MODULE_8___default()(n + "-datetime__mask", Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, n + "-datetime__mask-active", m)),
      oe = classnames__WEBPACK_IMPORTED_MODULE_8___default()(n + "-datetime__container", (_classNames44 = {}, Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames44, n + "-datetime__container-active", m), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames44, n + "-datetime__container-round", j), _classNames44)),
      ie = classnames__WEBPACK_IMPORTED_MODULE_8___default()("time-show-left", {
        half: r,
        active: 1 === F
      }),
      me = classnames__WEBPACK_IMPORTED_MODULE_8___default()("time-show-right", {
        hidden: !r,
        half: r,
        active: 2 === F
      }),
      H = {
        "line-height": pxTransform(50),
        "text-align": "center"
      };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CompContainer, {
      className: n + "-datetime",
      onTouchMove: function onTouchMove(e) {
        e.stopPropagation();
      },
      customizeStyle: Y
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: le,
      onClick: function onClick() {
        _ && ne();
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: oe
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: "time-picker-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: "time-show-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: ie,
      onClick: function onClick() {
        ee(1);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: "time-show-left-title"
    }, B), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: "time-show-left-content"
    }, "time" !== t && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, y, ".", I(x), ".", I(b)), "date" !== t && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, " ", I(w), ":", I(k)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: me,
      onClick: function onClick() {
        return ee(2);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: "time-show-left-title"
    }, D), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: "time-show-left-content"
    }, "time" !== t && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, v, ".", I(N), ".", I(C)), "date" !== t && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, " ", I(R), ":", I(V))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* PickerView */ "k"], {
      indicatorClass: "picker-column",
      className: "picker-row",
      value: 1 === F ? X : q,
      onChange: function onChange(e) {
        var t = l.type,
          a = l.minDate,
          r = l.maxDate,
          e = e.detail.value;
        if ("time" === t) return 1 === F ? (S(h[e[0]]), A(E[e[1]])) : (T(h[e[0]]), M(E[e[1]])), void P(e);
        var n = getMonths(d[e[0]], a, r) || [],
          s = getDays(d[e[0]], p[e[1]], a, r),
          c = getHours(d[e[0]], p[e[1]], f[e[2]], a, r),
          a = getMinutes(d[e[0]], p[e[1]], f[e[2]], h[e[3]], a, r);
        g(n), W(s), O(c), K(a), 1 === F ? (J(d[e[0]]), L(n[e[1]]), U(s[e[2]]), P(e), "datetime" === t && (S(c[e[3]]), A(a[e[4]]))) : (G(d[e[0]]), Q(n[e[1]]), Z(s[e[2]]), $(e), "datetime" === t && (T(c[e[3]]), M(a[e[4]])));
      }
    }, "time" !== t && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* PickerViewColumn */ "l"], {
      style: H
    }, d.map(function (e) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: n + "-datetime-picker__label"
      }, e, "年");
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* PickerViewColumn */ "l"], {
      style: H
    }, p.map(function (e) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: n + "-datetime-picker__label"
      }, e, "月");
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* PickerViewColumn */ "l"], {
      style: H
    }, f.map(function (e) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: n + "-datetime-picker__label"
      }, e, "日");
    }))), "date" !== t && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* PickerViewColumn */ "l"], {
      style: H
    }, h.map(function (e) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: n + "-datetime-picker__label"
      }, e, "时");
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* PickerViewColumn */ "l"], {
      style: H
    }, E.map(function (e) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: n + "-datetime-picker__label"
      }, e, "分");
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: "time-bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: "cancel-btn",
      onClick: function onClick() {
        return ne();
      }
    }, "取消"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: "confirm-btn",
      onClick: function onClick() {
        return se();
      }
    }, "确定"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Toast, {
      visible: te,
      text: "结束时间不能小于开始时间",
      onClose: function onClose() {
        return ae(!1);
      }
    }));
  },
  MEDIA_TYPES = {
    camera: "图片",
    video: "视频"
  },
  generateMatrix = function generateMatrix(t, a, r) {
    var n = [];
    var e = r ? t.length + 1 : t.length,
      s = Math.ceil(e / a);
    for (var _e15 = 0; _e15 < s; _e15++) if (_e15 === s - 1) {
      var c = t.slice(_e15 * a);
      if (c.length < a) {
        r && c.push({
          type: "btn",
          uuid: uuid()
        });
        for (var _e16 = c.length; _e16 < a; _e16++) c.push({
          type: "blank",
          uuid: uuid()
        });
      }
      n.push(c);
    } else n.push(t.slice(_e15 * a, (_e15 + 1) * a));
    return n;
  },
  ENV$1 = _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.getEnv(),
  Uploader = function Uploader(_ref31) {
    var _ref31$className = _ref31.className,
      e = _ref31$className === void 0 ? "" : _ref31$className,
      _ref31$customStyle = _ref31.customStyle,
      t = _ref31$customStyle === void 0 ? "" : _ref31$customStyle,
      _ref31$files = _ref31.files,
      n = _ref31$files === void 0 ? [] : _ref31$files,
      _ref31$mode = _ref31.mode,
      a = _ref31$mode === void 0 ? "aspectFill" : _ref31$mode,
      _ref31$mediaType = _ref31.mediaType,
      s = _ref31$mediaType === void 0 ? "camera" : _ref31$mediaType,
      _ref31$showAddBtn = _ref31.showAddBtn,
      r = _ref31$showAddBtn === void 0 ? !0 : _ref31$showAddBtn,
      _ref31$multiple = _ref31.multiple,
      c = _ref31$multiple === void 0 ? !1 : _ref31$multiple,
      _ref31$maxDuration = _ref31.maxDuration,
      l = _ref31$maxDuration === void 0 ? 30 : _ref31$maxDuration,
      _ref31$length = _ref31.length,
      o = _ref31$length === void 0 ? 3 : _ref31$length,
      i = _ref31.sizeType,
      m = _ref31.sourceType,
      _ref31$maxCount = _ref31.maxCount,
      u = _ref31$maxCount === void 0 ? 3 : _ref31$maxCount,
      _ref31$children = _ref31.children,
      d = _ref31$children === void 0 ? "" : _ref31$children,
      _ref31$onFail = _ref31.onFail,
      p = _ref31$onFail === void 0 ? function () {} : _ref31$onFail,
      _ref31$onChange = _ref31.onChange,
      g = _ref31$onChange === void 0 ? function () {} : _ref31$onChange,
      _ref31$onImageClick = _ref31.onImageClick,
      f = _ref31$onImageClick === void 0 ? function () {} : _ref31$onImageClick,
      _ref31$customizeStyle = _ref31.customizeStyle,
      h = _ref31$customizeStyle === void 0 ? "" : _ref31$customizeStyle;
    var E = cssPrefix(),
      _useState77 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])({
        file: "",
        url: ""
      }),
      _useState78 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState77, 2),
      y = _useState78[0],
      v = _useState78[1],
      x = function x() {
        var r = ENV$1 === _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.ENV_TYPE.ALIPAY ? "apFilePaths" : "tempFiles";
        var e = c ? 99 : 1;
        var t = {
          sizeType: ["original"],
          sourceType: ["album", "camera"]
        };
        c && (t.count = 99), e && (t.count = e), i && (t.sizeType = i), m && (t.sourceType = m), l && (t.maxDuration = l), "camera" === s ? _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.chooseImage(t).then(function (a) {
          var e = a.tempFilePaths.map(function (e, t) {
              return {
                url: e,
                file: a[r][t]
              };
            }),
            e = n.concat(e);
          g(e, "add");
        }).catch(p) : (t.camera = "back", _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.chooseVideo(t).then(function (e) {
          v({
            url: e.thumbTempFilePath,
            file: e.tempFilePath
          });
          e = n.concat([{
            url: e.thumbTempFilePath,
            file: e.tempFilePath
          }]);
          g(e, "add");
        }).catch(p));
      };
    var N = "video" === s || o <= 0 ? 1 : o;
    var b = generateMatrix(n, N, r);
    N = classnames__WEBPACK_IMPORTED_MODULE_8___default()(E + "-uploader-picker", e);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CompContainer, {
      className: N,
      style: t,
      customizeStyle: h
    }, b.map(function (e, r) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: E + "-uploader-picker__flex-box",
        key: r + 1
      }, e.map(function (e, t) {
        return e.url ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
          className: E + "-uploader-picker__flex-item",
          key: r * o + t
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
          className: E + "-uploader-picker__item"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
          className: E + "-uploader-picker__remove-btn",
          onClick: function onClick(e) {
            var a = r * o + t;
            e.stopPropagation(), e.preventDefault(), ENV$1 === _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.ENV_TYPE.WEB && window.URL.revokeObjectURL(n[a].url), e = n.filter(function (e, t) {
              return t !== a;
            }), g(e, "remove", a);
          }
        }), "camera" === s ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Image */ "d"], {
          className: E + "-uploader-picker__preview-img",
          mode: a,
          src: e.url,
          onClick: function onClick() {
            var e = r * o + t;
            f && f(e, n[e]);
          }
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Video */ "t"], {
          id: "video",
          className: E + "-uploader-picker__preview-video",
          src: y.file,
          poster: y.url,
          controls: !0,
          autoplay: !1,
          showFullscreenBtn: !1,
          loop: !1,
          muted: !1
        }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, n.length < u ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
          className: E + "-uploader-picker__flex-item",
          key: "empty_" + r * o + t
        }, "btn" === e.type && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
          className: "".concat(E, "-uploader-picker__item ").concat(E, "-uploader-picker__choose-btn"),
          onClick: x
        }, d || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Icon, {
          value: s,
          color: "#666666",
          size: 32
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
          className: "text"
        }, "添加", MEDIA_TYPES[s], 1 < u && "(".concat(n.length, "/").concat(u, ")"))))) : null);
      }));
    }));
  },
  Cell$1 = function Cell$1(_ref32) {
    var _ref32$border = _ref32.border,
      e = _ref32$border === void 0 ? !0 : _ref32$border,
      _ref32$link = _ref32.link,
      t = _ref32$link === void 0 ? !1 : _ref32$link,
      _ref32$arrowDirection = _ref32.arrowDirection,
      a = _ref32$arrowDirection === void 0 ? "right" : _ref32$arrowDirection,
      _ref32$center = _ref32.center,
      r = _ref32$center === void 0 ? !1 : _ref32$center,
      n = _ref32.to,
      s = _ref32.title,
      c = _ref32.value,
      l = _ref32.label,
      o = _ref32.icon,
      i = _ref32.rightContent,
      m = _ref32.leftContent,
      u = _ref32.onClick,
      d = _ref32.customizeStyle;
    return function (e) {
      var _classNames45;
      var p = cssPrefix(),
        e = classnames__WEBPACK_IMPORTED_MODULE_8___default()(p + "-cell", (_classNames45 = {}, Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames45, p + "-cell__border", e), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames45, p + "-cell__center", r), _classNames45));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CompContainer, {
        className: e,
        customizeStyle: d,
        onClick: function onClick() {
          u && u(), n && _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.navigateTo({
            url: n
          });
        }
      }, (s || o || m) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: p + "-cell__item"
      }, m || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: p + "-cell__item-title"
      }, o && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Icon, {
        className: p + "-cell__item-icon",
        value: o
      }), s), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: p + "-cell__item-label"
      }, l))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: p + "-cell__item"
      }, i || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: t ? p + "-cell__item-click" : ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "r"], null, c), t && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Icon, {
        className: p + "-cell__item-link",
        value: "chevron-" + a
      }))));
    }(e);
  },
  CellGroup = function CellGroup(_ref33) {
    var _ref33$border = _ref33.border,
      e = _ref33$border === void 0 ? !0 : _ref33$border,
      _ref33$inset = _ref33.inset,
      t = _ref33$inset === void 0 ? !1 : _ref33$inset,
      a = _ref33.title,
      r = _ref33.children;
    return function (e) {
      var _classNames46;
      var n = cssPrefix(),
        e = classnames__WEBPACK_IMPORTED_MODULE_8___default()(n + "-cell-group-item", (_classNames46 = {}, Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames46, n + "-cell__border", e), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames46, n + "-cell__inset", t), _classNames46));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: n + "-cell-group"
      }, a && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: n + "-cell-group-title"
      }, a), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
        className: e
      }, r));
    }(e);
  },
  Cell = Cell$1,
  ENV = (Cell.Group = CellGroup, _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.getEnv()),
  MIN_DISTANCE = 100,
  MAX_INTERVAL = 10;
var timer = null,
  interval = 0,
  tabHeaderRef = null;
var Tab = function Tab(_ref34) {
  var _ref34$customStyle = _ref34.customStyle,
    e = _ref34$customStyle === void 0 ? "" : _ref34$customStyle,
    _ref34$tabDirection = _ref34.tabDirection,
    r = _ref34$tabDirection === void 0 ? "horizontal" : _ref34$tabDirection,
    _ref34$height = _ref34.height,
    t = _ref34$height === void 0 ? "" : _ref34$height,
    _ref34$current = _ref34.current,
    n = _ref34$current === void 0 ? 0 : _ref34$current,
    _ref34$swipeable = _ref34.swipeable,
    s = _ref34$swipeable === void 0 ? !0 : _ref34$swipeable,
    _ref34$scroll = _ref34.scroll,
    a = _ref34$scroll === void 0 ? !1 : _ref34$scroll,
    _ref34$animated = _ref34.animated,
    c = _ref34$animated === void 0 ? !0 : _ref34$animated,
    _ref34$tabList = _ref34.tabList,
    l = _ref34$tabList === void 0 ? [] : _ref34$tabList,
    _ref34$onClick = _ref34.onClick,
    o = _ref34$onClick === void 0 ? function () {} : _ref34$onClick,
    _ref34$activeColor = _ref34.activeColor,
    i = _ref34$activeColor === void 0 ? "#FF2929" : _ref34$activeColor,
    _ref34$color = _ref34.color,
    m = _ref34$color === void 0 ? "#666666" : _ref34$color,
    u = _ref34.className,
    _ref34$customizeStyle = _ref34.customizeStyle,
    d = _ref34$customizeStyle === void 0 ? "" : _ref34$customizeStyle,
    p = _ref34.children;
  return function (u, t, c) {
    var _classNames48;
    var _useState79 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(0),
      _useState80 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState79, 2),
      g = _useState80[0],
      f = _useState80[1],
      _useState81 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(0),
      _useState82 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState81, 2),
      h = _useState82[0],
      E = _useState82[1],
      _useState83 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(0),
      _useState84 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState83, 1),
      y = _useState84[0],
      _useState85 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(!1),
      _useState86 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState85, 2),
      v = _useState86[0],
      x = _useState86[1],
      _useState87 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(isTest() ? "tab-AUTO2021" : uuid()),
      _useState88 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState87, 1),
      N = _useState88[0],
      _useState89 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      _useState90 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState89, 2),
      b = _useState90[0],
      C = _useState90[1],
      w = function w(e, t) {
        o(e, t);
      };
    Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
      ENV === _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.ENV_TYPE.WEB && (tabHeaderRef = document.getElementById(N));
      var e = n;
      if (a) switch (ENV) {
        case _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.ENV_TYPE.WEAPP:
        case _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.ENV_TYPE.ALIPAY:
        case _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.ENV_TYPE.SWAN:
          var t = Math.max(e - 1, 0);
          C("tab" + N + t);
          break;
        case _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.ENV_TYPE.WEB:
          t = Math.max(e - 1, 0), t = tabHeaderRef && tabHeaderRef.childNodes[t];
          t && f(t.offsetLeft), E(t.offsetTop);
        default:
          console.warn("Tab组件未适配～");
      }
      return function () {
        tabHeaderRef = null;
      };
    }, []);
    var t = {
        height: t
      },
      S = {
        height: "vertical" === r ? 100 * l.length + "%" : "1PX",
        width: "horizontal" === r ? 100 * l.length + "%" : "1PX"
      };
    var R = {};
    var T = "horizontal" === r ? "translate3d(-".concat(100 * n, "%, 0, 0)") : "translate3d(0px, -".concat(100 * n, "%, 0)");
    Object.assign(R, {
      transform: T,
      "-webkit-transform": T
    }), c || (R.transition = "unset");
    var c = l.map(function (e, t) {
        var _classNames47;
        var a = n === t,
          r = classnames__WEBPACK_IMPORTED_MODULE_8___default()((_classNames47 = {}, Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames47, cssPrefix() + "-tab__item", !0), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames47, cssPrefix() + "-tab__item--active", a), _classNames47));
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
          className: r,
          id: "tab" + N + t,
          key: cssPrefix() + "-tab-item-" + t,
          onClick: function onClick(e) {
            return w(t, e);
          },
          style: {
            color: a ? i : m
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
          className: cssPrefix() + "-tab__item-content"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
          className: cssPrefix() + "-tab__item-text"
        }, e.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
          className: cssPrefix() + "-tab__item-underline",
          style: {
            background: a ? i : ""
          }
        })));
      }),
      u = classnames__WEBPACK_IMPORTED_MODULE_8___default()((_classNames48 = {}, Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames48, cssPrefix() + "-tab", !0), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames48, cssPrefix() + "-tab--scroll", a), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames48, cssPrefix() + "-tab--" + r, !0), Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_classNames48, cssPrefix() + "-tab--" + ENV, !0), _classNames48), u),
      k = "horizontal" === r,
      A = "vertical" === r;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CompContainer, {
      customizeStyle: d,
      className: u,
      style: mergeStyle(t, e)
    }, a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* ScrollView */ "m"], {
      id: N,
      className: cssPrefix() + "-tab__header",
      style: t,
      scrollX: k,
      scrollY: A,
      scrollWithAnimation: !0,
      scrollLeft: g,
      scrollTop: h,
      scrollIntoView: b
    }, c) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      id: N,
      className: cssPrefix() + "-tab__header"
    }, c), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: cssPrefix() + "-tab__body",
      onTouchStart: function onTouchStart() {
        s && "vertical" !== r && (timer = setInterval(function () {
          interval++;
        }, 100));
      },
      onTouchEnd: function onTouchEnd() {
        s && "vertical" !== r && (clearInterval(timer), interval = 0, x(!1));
      },
      onTouchMove: function onTouchMove(e) {
        var t, a;
        s && "vertical" !== r && (t = e.touches[0].pageX - y, a = l.length, !v && interval < MAX_INTERVAL && 20 < y && (n + 1 < a && t <= -MIN_DISTANCE ? (x(!0), w(n + 1, e)) : 0 <= n - 1 && t >= MIN_DISTANCE && (x(!0), w(n - 1, e))));
      },
      style: mergeStyle(R, {
        minHeight: "1PX"
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "u"], {
      className: cssPrefix() + "-tab__underline",
      style: S
    }), p));
  }(u, t, c);
};
var eventemitter3 = {
    exports: {}
  },
  Event = (!function (e) {
    var r = Object.prototype.hasOwnProperty,
      p = "~";
    function a() {}
    function s(e, t, a) {
      this.fn = e, this.context = t, this.once = a || !1;
    }
    function n(e, t, a, r, n) {
      if ("function" != typeof a) throw new TypeError("The listener must be a function");
      a = new s(a, r || e, n), r = p ? p + t : t;
      return e._events[r] ? e._events[r].fn ? e._events[r] = [e._events[r], a] : e._events[r].push(a) : (e._events[r] = a, e._eventsCount++), e;
    }
    function o(e, t) {
      0 == --e._eventsCount ? e._events = new a() : delete e._events[t];
    }
    function t() {
      this._events = new a(), this._eventsCount = 0;
    }
    Object.create && (a.prototype = Object.create(null), new a().__proto__ || (p = !1)), t.prototype.eventNames = function () {
      var e,
        t,
        a = [];
      if (0 === this._eventsCount) return a;
      for (t in e = this._events) r.call(e, t) && a.push(p ? t.slice(1) : t);
      return Object.getOwnPropertySymbols ? a.concat(Object.getOwnPropertySymbols(e)) : a;
    }, t.prototype.listeners = function (e) {
      var e = p ? p + e : e,
        t = this._events[e];
      if (!t) return [];
      if (t.fn) return [t.fn];
      for (var a = 0, r = t.length, n = new Array(r); a < r; a++) n[a] = t[a].fn;
      return n;
    }, t.prototype.listenerCount = function (e) {
      e = p ? p + e : e, e = this._events[e];
      return e ? e.fn ? 1 : e.length : 0;
    }, t.prototype.emit = function (e, t, a, r, n, s) {
      var c = p ? p + e : e;
      if (!this._events[c]) return !1;
      var l,
        o = this._events[c],
        i = arguments.length;
      if (o.fn) {
        switch (o.once && this.removeListener(e, o.fn, void 0, !0), i) {
          case 1:
            return o.fn.call(o.context), !0;
          case 2:
            return o.fn.call(o.context, t), !0;
          case 3:
            return o.fn.call(o.context, t, a), !0;
          case 4:
            return o.fn.call(o.context, t, a, r), !0;
          case 5:
            return o.fn.call(o.context, t, a, r, n), !0;
          case 6:
            return o.fn.call(o.context, t, a, r, n, s), !0;
        }
        for (d = 1, l = new Array(i - 1); d < i; d++) l[d - 1] = arguments[d];
        o.fn.apply(o.context, l);
      } else for (var m, u = o.length, d = 0; d < u; d++) switch (o[d].once && this.removeListener(e, o[d].fn, void 0, !0), i) {
        case 1:
          o[d].fn.call(o[d].context);
          break;
        case 2:
          o[d].fn.call(o[d].context, t);
          break;
        case 3:
          o[d].fn.call(o[d].context, t, a);
          break;
        case 4:
          o[d].fn.call(o[d].context, t, a, r);
          break;
        default:
          if (!l) for (m = 1, l = new Array(i - 1); m < i; m++) l[m - 1] = arguments[m];
          o[d].fn.apply(o[d].context, l);
      }
      return !0;
    }, t.prototype.on = function (e, t, a) {
      return n(this, e, t, a, !1);
    }, t.prototype.once = function (e, t, a) {
      return n(this, e, t, a, !0);
    }, t.prototype.removeListener = function (e, t, a, r) {
      e = p ? p + e : e;
      if (!this._events[e]) return this;
      if (!t) return o(this, e), this;
      var n = this._events[e];
      if (n.fn) n.fn !== t || r && !n.once || a && n.context !== a || o(this, e);else {
        for (var s = 0, c = [], l = n.length; s < l; s++) (n[s].fn !== t || r && !n[s].once || a && n[s].context !== a) && c.push(n[s]);
        c.length ? this._events[e] = 1 === c.length ? c[0] : c : o(this, e);
      }
      return this;
    }, t.prototype.removeAllListeners = function (e) {
      return e ? (e = p ? p + e : e, this._events[e] && o(this, e)) : (this._events = new a(), this._eventsCount = 0), this;
    }, t.prototype.off = t.prototype.removeListener, t.prototype.addListener = t.prototype.on, t.prefixed = p, e.exports = t.EventEmitter = t;
  }(eventemitter3), eventemitter3.exports);
var eventCenter = new Event(),
  initEvent = function initEvent() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.Current.app.eventCenter || (_tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.Current.app.eventCenter = eventCenter);
  };
initEvent();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ }),

/***/ "./node_modules/taro-ui/dist/index.esm.js":
/*!************************************************!*\
  !*** ./node_modules/taro-ui/dist/index.esm.js ***!
  \************************************************/
/*! exports provided: AtAccordion, AtActionSheet, AtActionSheetItem, AtActivityIndicator, AtAvatar, AtBadge, AtButton, AtCalendar, AtCard, AtCheckbox, AtComponent, AtCountdown, AtCurtain, AtDivider, AtDrawer, AtFab, AtFloatLayout, AtForm, AtGrid, AtIcon, AtImagePicker, AtIndexes, AtInput, AtInputNumber, AtList, AtListItem, AtLoadMore, AtLoading, AtMessage, AtModal, AtModalAction, AtModalContent, AtModalHeader, AtNavBar, AtNoticebar, AtPagination, AtProgress, AtRadio, AtRange, AtRate, AtSearchBar, AtSegmentedControl, AtSlider, AtSteps, AtSwipeAction, AtSwitch, AtTabBar, AtTabs, AtTabsPane, AtTag, AtTextarea, AtTimeline, AtToast */
/*! exports used: AtButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(window, global, document) {/* unused harmony export AtAccordion */
/* unused harmony export AtActionSheet */
/* unused harmony export AtActionSheetItem */
/* unused harmony export AtActivityIndicator */
/* unused harmony export AtAvatar */
/* unused harmony export AtBadge */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtButton; });
/* unused harmony export AtCalendar */
/* unused harmony export AtCard */
/* unused harmony export AtCheckbox */
/* unused harmony export AtComponent */
/* unused harmony export AtCountdown */
/* unused harmony export AtCurtain */
/* unused harmony export AtDivider */
/* unused harmony export AtDrawer */
/* unused harmony export AtFab */
/* unused harmony export AtFloatLayout */
/* unused harmony export AtForm */
/* unused harmony export AtGrid */
/* unused harmony export AtIcon */
/* unused harmony export AtImagePicker */
/* unused harmony export AtIndexes */
/* unused harmony export AtInput */
/* unused harmony export AtInputNumber */
/* unused harmony export AtList */
/* unused harmony export AtListItem */
/* unused harmony export AtLoadMore */
/* unused harmony export AtLoading */
/* unused harmony export AtMessage */
/* unused harmony export AtModal */
/* unused harmony export AtModalAction */
/* unused harmony export AtModalContent */
/* unused harmony export AtModalHeader */
/* unused harmony export AtNavBar */
/* unused harmony export AtNoticebar */
/* unused harmony export AtPagination */
/* unused harmony export AtProgress */
/* unused harmony export AtRadio */
/* unused harmony export AtRange */
/* unused harmony export AtRate */
/* unused harmony export AtSearchBar */
/* unused harmony export AtSegmentedControl */
/* unused harmony export AtSlider */
/* unused harmony export AtSteps */
/* unused harmony export AtSwipeAction */
/* unused harmony export AtSwitch */
/* unused harmony export AtTabBar */
/* unused harmony export AtTabs */
/* unused harmony export AtTabsPane */
/* unused harmony export AtTag */
/* unused harmony export AtTextarea */
/* unused harmony export AtTimeline */
/* unused harmony export AtToast */
/* harmony import */ var C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);





/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var _extendStatics = function extendStatics(d, b) {
  _extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };
  return _extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  _extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return _assign.apply(this, arguments);
};
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
  return ar;
}
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
function createCommonjsModule(fn, module) {
  return module = {
    exports: {}
  }, fn(module, module.exports), module.exports;
}
var classnames = createCommonjsModule(function (module) {
  /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */
  /* global define */

  (function () {
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
      var classes = [];
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg) continue;
        var argType = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arg);
        if (argType === 'string' || argType === 'number') {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames.apply(null, arg);
            if (inner) {
              classes.push(inner);
            }
          }
        } else if (argType === 'object') {
          if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
            classes.push(arg.toString());
            continue;
          }
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        }
      }
      return classes.join(' ');
    }
    if (module.exports) {
      classNames.default = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
});

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = "function" === typeof Symbol && Symbol.for,
  c = b ? Symbol.for("react.element") : 60103,
  d = b ? Symbol.for("react.portal") : 60106,
  e = b ? Symbol.for("react.fragment") : 60107,
  f = b ? Symbol.for("react.strict_mode") : 60108,
  g = b ? Symbol.for("react.profiler") : 60114,
  h = b ? Symbol.for("react.provider") : 60109,
  k = b ? Symbol.for("react.context") : 60110,
  l = b ? Symbol.for("react.async_mode") : 60111,
  m = b ? Symbol.for("react.concurrent_mode") : 60111,
  n = b ? Symbol.for("react.forward_ref") : 60112,
  p = b ? Symbol.for("react.suspense") : 60113,
  q = b ? Symbol.for("react.suspense_list") : 60120,
  r = b ? Symbol.for("react.memo") : 60115,
  t = b ? Symbol.for("react.lazy") : 60116,
  v = b ? Symbol.for("react.block") : 60121,
  w = b ? Symbol.for("react.fundamental") : 60117,
  x = b ? Symbol.for("react.responder") : 60118,
  y = b ? Symbol.for("react.scope") : 60119;
function z(a) {
  if ("object" === Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(a) && null !== a) {
    var u = a.$$typeof;
    switch (u) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return a;
              default:
                return u;
            }
        }
      case d:
        return u;
    }
  }
}
function A(a) {
  return z(a) === m;
}
var AsyncMode = l;
var ConcurrentMode = m;
var ContextConsumer = k;
var ContextProvider = h;
var Element = c;
var ForwardRef = n;
var Fragment = e;
var Lazy = t;
var Memo = r;
var Portal = d;
var Profiler = g;
var StrictMode = f;
var Suspense = p;
var isAsyncMode = function isAsyncMode(a) {
  return A(a) || z(a) === l;
};
var isConcurrentMode = A;
var isContextConsumer = function isContextConsumer(a) {
  return z(a) === k;
};
var isContextProvider = function isContextProvider(a) {
  return z(a) === h;
};
var isElement = function isElement(a) {
  return "object" === Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(a) && null !== a && a.$$typeof === c;
};
var isForwardRef = function isForwardRef(a) {
  return z(a) === n;
};
var isFragment = function isFragment(a) {
  return z(a) === e;
};
var isLazy = function isLazy(a) {
  return z(a) === t;
};
var isMemo = function isMemo(a) {
  return z(a) === r;
};
var isPortal = function isPortal(a) {
  return z(a) === d;
};
var isProfiler = function isProfiler(a) {
  return z(a) === g;
};
var isStrictMode = function isStrictMode(a) {
  return z(a) === f;
};
var isSuspense = function isSuspense(a) {
  return z(a) === p;
};
var isValidElementType = function isValidElementType(a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(a) && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
};
var typeOf = z;
var reactIs_production_min = {
  AsyncMode: AsyncMode,
  ConcurrentMode: ConcurrentMode,
  ContextConsumer: ContextConsumer,
  ContextProvider: ContextProvider,
  Element: Element,
  ForwardRef: ForwardRef,
  Fragment: Fragment,
  Lazy: Lazy,
  Memo: Memo,
  Portal: Portal,
  Profiler: Profiler,
  StrictMode: StrictMode,
  Suspense: Suspense,
  isAsyncMode: isAsyncMode,
  isConcurrentMode: isConcurrentMode,
  isContextConsumer: isContextConsumer,
  isContextProvider: isContextProvider,
  isElement: isElement,
  isForwardRef: isForwardRef,
  isFragment: isFragment,
  isLazy: isLazy,
  isMemo: isMemo,
  isPortal: isPortal,
  isProfiler: isProfiler,
  isStrictMode: isStrictMode,
  isSuspense: isSuspense,
  isValidElementType: isValidElementType,
  typeOf: typeOf
};
var reactIs_development = createCommonjsModule(function (module, exports) {
  if (true) {
    (function () {
      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.
      var hasSymbol = typeof Symbol === 'function' && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
      // (unstable) APIs that have been removed. Can we remove the symbols?

      var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
      function isValidElementType(type) {
        return typeof type === 'string' || typeof type === 'function' ||
        // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
        type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
      }
      function typeOf(object) {
        if (Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(object) === 'object' && object !== null) {
          var $$typeof = object.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;
              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;
                default:
                  var $$typeofType = type && type.$$typeof;
                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
        return undefined;
      } // AsyncMode is deprecated along with isAsyncMode

      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

            console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
          }
        }
        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }
      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement(object) {
        return Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }
      exports.AsyncMode = AsyncMode;
      exports.ConcurrentMode = ConcurrentMode;
      exports.ContextConsumer = ContextConsumer;
      exports.ContextProvider = ContextProvider;
      exports.Element = Element;
      exports.ForwardRef = ForwardRef;
      exports.Fragment = Fragment;
      exports.Lazy = Lazy;
      exports.Memo = Memo;
      exports.Portal = Portal;
      exports.Profiler = Profiler;
      exports.StrictMode = StrictMode;
      exports.Suspense = Suspense;
      exports.isAsyncMode = isAsyncMode;
      exports.isConcurrentMode = isConcurrentMode;
      exports.isContextConsumer = isContextConsumer;
      exports.isContextProvider = isContextProvider;
      exports.isElement = isElement;
      exports.isForwardRef = isForwardRef;
      exports.isFragment = isFragment;
      exports.isLazy = isLazy;
      exports.isMemo = isMemo;
      exports.isPortal = isPortal;
      exports.isProfiler = isProfiler;
      exports.isStrictMode = isStrictMode;
      exports.isSuspense = isSuspense;
      exports.isValidElementType = isValidElementType;
      exports.typeOf = typeOf;
    })();
  }
});
reactIs_development.AsyncMode;
reactIs_development.ConcurrentMode;
reactIs_development.ContextConsumer;
reactIs_development.ContextProvider;
reactIs_development.Element;
reactIs_development.ForwardRef;
reactIs_development.Fragment;
reactIs_development.Lazy;
reactIs_development.Memo;
reactIs_development.Portal;
reactIs_development.Profiler;
reactIs_development.StrictMode;
reactIs_development.Suspense;
reactIs_development.isAsyncMode;
reactIs_development.isConcurrentMode;
reactIs_development.isContextConsumer;
reactIs_development.isContextProvider;
reactIs_development.isElement;
reactIs_development.isForwardRef;
reactIs_development.isFragment;
reactIs_development.isLazy;
reactIs_development.isMemo;
reactIs_development.isPortal;
reactIs_development.isProfiler;
reactIs_development.isStrictMode;
reactIs_development.isSuspense;
reactIs_development.isValidElementType;
reactIs_development.typeOf;
var reactIs = createCommonjsModule(function (module) {
  if (false) {} else {
    module.exports = reactIs_development;
  }
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$7 = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }

    // Detect buggy property enumeration order in older V8 versions.

    // https://bugs.chromium.org/p/v8/issues/detail?id=4118
    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
    test1[5] = 'de';
    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    }

    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });
    if (order2.join('') !== '0123456789') {
      return false;
    }

    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }
    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty$7.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$2 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
var ReactPropTypesSecret_1 = ReactPropTypesSecret$2;
var has$2 = Function.call.bind(Object.prototype.hasOwnProperty);
var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
var has$1 = has$2;
var printWarning$1 = function printWarning$1() {};
if (true) {
  var ReactPropTypesSecret = ReactPropTypesSecret$1;
  var loggedTypeFailures = {};
  var has = has$1;
  printWarning$1 = function printWarning$1(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {/**/}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(typeSpecs[typeSpecName]) + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$1((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(error) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning$1('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes$1.resetWarningCache = function () {
  if (true) {
    loggedTypeFailures = {};
  }
};
var checkPropTypes_1 = checkPropTypes$1;
var checkPropTypes = checkPropTypes_1;
var printWarning = function printWarning() {};
if (true) {
  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
function emptyFunctionThatReturnsNull() {
  return null;
}
var factoryWithTypeCheckers = function factoryWithTypeCheckers(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(data) === 'object' ? data : {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;
  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;
      if (secret !== ReactPropTypesSecret$1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (!manualPropTypeCallCache[cacheKey] &&
          // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }
    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }
  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
          expectedType: expectedType
        });
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }
  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret$1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }
      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }
  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }
    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }
    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret$1);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has$1(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }
  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
  }
  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has$1(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function isNode(propValue) {
    switch (Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }
        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }
        return true;
      default:
        return false;
    }
  }
  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }
    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(propValue);
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }
  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function factoryWithThrowingShims() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret$1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  } // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
var require$$1 = factoryWithTypeCheckers;
var require$$2 = factoryWithThrowingShims;
var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  if (true) {
    var ReactIs = reactIs;

    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = require$$1(ReactIs.isElement, throwOnDirectAccess);
  } else {}
});
var PropTypes = propTypes;
var AtActionSheetBody = /** @class */function (_super) {
  __extends(AtActionSheetBody, _super);
  function AtActionSheetBody() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AtActionSheetBody.prototype.render = function () {
    var rootClass = classnames('at-action-sheet__body', this.props.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: rootClass
    }, this.props.children);
  };
  return AtActionSheetBody;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
var AtActionSheetFooter = /** @class */function (_super) {
  __extends(AtActionSheetFooter, _super);
  function AtActionSheetFooter() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.handleClick = function () {
      var _a;
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      if (typeof _this.props.onClick === 'function') {
        (_a = _this.props).onClick.apply(_a, __spread(args));
      }
    };
    return _this;
  }
  AtActionSheetFooter.prototype.render = function () {
    var rootClass = classnames('at-action-sheet__footer', this.props.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      onClick: this.handleClick,
      className: rootClass
    }, this.props.children);
  };
  return AtActionSheetFooter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtActionSheetFooter.propTypes = {
  onClick: PropTypes.func
};
var AtActionSheetHeader = /** @class */function (_super) {
  __extends(AtActionSheetHeader, _super);
  function AtActionSheetHeader() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AtActionSheetHeader.prototype.render = function () {
    var rootClass = classnames('at-action-sheet__header', this.props.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: rootClass
    }, this.props.children);
  };
  return AtActionSheetHeader;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
var AtActionSheet = /** @class */function (_super) {
  __extends(AtActionSheet, _super);
  function AtActionSheet(props) {
    var _this = _super.call(this, props) || this;
    _this.handleClose = function () {
      if (typeof _this.props.onClose === 'function') {
        _this.props.onClose();
      }
    };
    _this.handleCancel = function () {
      if (typeof _this.props.onCancel === 'function') {
        return _this.props.onCancel();
      }
      _this.close();
    };
    _this.close = function () {
      _this.setState({
        _isOpened: false
      }, _this.handleClose);
    };
    _this.handleTouchMove = function (e) {
      e.stopPropagation();
      e.preventDefault();
    };
    var isOpened = props.isOpened;
    _this.state = {
      _isOpened: isOpened
    };
    return _this;
  }
  AtActionSheet.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    var isOpened = nextProps.isOpened;
    if (isOpened !== this.state._isOpened) {
      this.setState({
        _isOpened: isOpened
      });
      !isOpened && this.handleClose();
    }
  };
  AtActionSheet.prototype.render = function () {
    var _a = this.props,
      title = _a.title,
      cancelText = _a.cancelText,
      className = _a.className;
    var _isOpened = this.state._isOpened;
    var rootClass = classnames('at-action-sheet', {
      'at-action-sheet--active': _isOpened
    }, className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: rootClass,
      onTouchMove: this.handleTouchMove
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      onClick: this.close,
      className: 'at-action-sheet__overlay'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-action-sheet__container'
    }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtActionSheetHeader, null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtActionSheetBody, null, this.props.children), cancelText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtActionSheetFooter, {
      onClick: this.handleCancel
    }, cancelText)));
  };
  return AtActionSheet;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtActionSheet.defaultProps = {
  title: '',
  cancelText: '',
  isOpened: false
};
AtActionSheet.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
  onCancel: PropTypes.func,
  isOpened: PropTypes.bool.isRequired,
  cancelText: PropTypes.string
};
var AtActionSheetItem = /** @class */function (_super) {
  __extends(AtActionSheetItem, _super);
  function AtActionSheetItem() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.handleClick = function (args) {
      if (typeof _this.props.onClick === 'function') {
        _this.props.onClick(args);
      }
    };
    return _this;
  }
  AtActionSheetItem.prototype.render = function () {
    var rootClass = classnames('at-action-sheet__item', this.props.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: rootClass,
      onClick: this.handleClick
    }, this.props.children);
  };
  return AtActionSheetItem;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtActionSheetItem.propTypes = {
  onClick: PropTypes.func
};
var ENV$4 = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv();
function delay(delayTime) {
  if (delayTime === void 0) {
    delayTime = 25;
  }
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, delayTime);
  });
}
function delayQuerySelector(selectorStr, delayTime) {
  if (delayTime === void 0) {
    delayTime = 500;
  }
  return new Promise(function (resolve) {
    var selector = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.createSelectorQuery();
    delay(delayTime).then(function () {
      selector.select(selectorStr).boundingClientRect().exec(function (res) {
        resolve(res);
      });
    });
  });
}
function uuid(len, radix) {
  if (len === void 0) {
    len = 8;
  }
  if (radix === void 0) {
    radix = 16;
  }
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var value = [];
  var i = 0;
  radix = radix || chars.length;
  if (len) {
    // Compact form
    for (i = 0; i < len; i++) value[i] = chars[0 | Math.random() * radix];
  } else {
    // rfc4122, version 4 form
    var r
    // rfc4122 requires these characters
    /* eslint-disable-next-line */ = void 0;
    // rfc4122 requires these characters
    /* eslint-disable-next-line */
    value[8] = value[13] = value[18] = value[23] = '-';
    value[14] = '4';
    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (i = 0; i < 36; i++) {
      if (!value[i]) {
        r = 0 | Math.random() * 16;
        value[i] = chars[i === 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }
  return value.join('');
}
function getEventDetail(event) {
  var detail;
  switch (ENV$4) {
    case _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEB:
      detail = {
        pageX: event.pageX,
        pageY: event.pageY,
        clientX: event.clientX,
        clientY: event.clientY,
        offsetX: event.offsetX,
        offsetY: event.offsetY,
        x: event.x,
        y: event.y
      };
      break;
    case _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEAPP:
      detail = {
        pageX: event.touches[0].pageX,
        pageY: event.touches[0].pageY,
        clientX: event.touches[0].clientX,
        clientY: event.touches[0].clientY,
        offsetX: event.target.offsetLeft,
        offsetY: event.target.offsetTop,
        x: event.target.x,
        y: event.target.y
      };
      break;
    case _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.ALIPAY:
      detail = {
        pageX: event.target.pageX,
        pageY: event.target.pageY,
        clientX: event.target.clientX,
        clientY: event.target.clientY,
        offsetX: event.target.offsetLeft,
        offsetY: event.target.offsetTop,
        x: event.target.x,
        y: event.target.y
      };
      break;
    case _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.SWAN:
      detail = {
        pageX: event.changedTouches[0].pageX,
        pageY: event.changedTouches[0].pageY,
        clientX: event.target.clientX,
        clientY: event.target.clientY,
        offsetX: event.target.offsetLeft,
        offsetY: event.target.offsetTop,
        x: event.detail.x,
        y: event.detail.y
      };
      break;
    default:
      detail = {
        pageX: 0,
        pageY: 0,
        clientX: 0,
        clientY: 0,
        offsetX: 0,
        offsetY: 0,
        x: 0,
        y: 0
      };
      console.warn('getEventDetail暂未支持该环境');
      break;
  }
  return detail;
}
function isTest() {
  return "development" === 'test';
}
var scrollTop = 0;
function handleTouchScroll(flag) {
  if (ENV$4 !== _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEB) {
    return;
  }
  if (flag) {
    scrollTop = document.documentElement.scrollTop;
    // 使body脱离文档流
    document.body.classList.add('at-frozen');
    // 把脱离文档流的body拉上去！否则页面会回到顶部！
    document.body.style.top = -scrollTop + "px";
  } else {
    document.body.style.top = '';
    document.body.classList.remove('at-frozen');
    document.documentElement.scrollTop = scrollTop;
  }
}
function pxTransform(size) {
  if (!size) return '';
  var designWidth = 750;
  var deviceRatio = {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  };
  return size / deviceRatio[designWidth] + "rpx";
}
function objectToString$2(style) {
  if (style && Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(style) === 'object') {
    var styleStr_1 = '';
    Object.keys(style).forEach(function (key) {
      var lowerCaseKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      styleStr_1 += lowerCaseKey + ":" + style[key] + ";";
    });
    return styleStr_1;
  } else if (style && typeof style === 'string') {
    return style;
  }
  return '';
}
/**
 * 合并 style
 * @param {Object|String} style1
 * @param {Object|String} style2
 * @returns {String}
 */
function mergeStyle(style1, style2) {
  if (style1 && Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(style1) === 'object' && style2 && Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(style2) === 'object') {
    return Object.assign({}, style1, style2);
  }
  return objectToString$2(style1) + objectToString$2(style2);
}
var AtLoading = /** @class */function (_super) {
  __extends(AtLoading, _super);
  function AtLoading() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AtLoading.prototype.render = function () {
    var _a = this.props,
      color = _a.color,
      size = _a.size;
    var loadingSize = typeof size === 'string' ? size : String(size);
    var sizeStyle = {
      width: size ? "" + pxTransform(parseInt(loadingSize)) : '',
      height: size ? "" + pxTransform(parseInt(loadingSize)) : ''
    };
    var colorStyle = {
      border: color ? "1px solid " + color : '',
      borderColor: color ? color + " transparent transparent transparent" : ''
    };
    var ringStyle = Object.assign({}, colorStyle, sizeStyle);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-loading',
      style: sizeStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-loading__ring',
      style: ringStyle
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-loading__ring',
      style: ringStyle
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-loading__ring',
      style: ringStyle
    }));
  };
  return AtLoading;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtLoading.defaultProps = {
  size: 0,
  color: ''
};
AtLoading.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
var AtActivityIndicator = /** @class */function (_super) {
  __extends(AtActivityIndicator, _super);
  function AtActivityIndicator() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AtActivityIndicator.prototype.render = function () {
    var _a = this.props,
      color = _a.color,
      size = _a.size,
      mode = _a.mode,
      content = _a.content,
      isOpened = _a.isOpened;
    var rootClass = classnames('at-activity-indicator', {
      'at-activity-indicator--center': mode === 'center',
      'at-activity-indicator--isopened': isOpened
    }, this.props.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: rootClass
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-activity-indicator__body'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtLoading, {
      size: size,
      color: color
    })), content && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
      className: 'at-activity-indicator__content'
    }, content));
  };
  return AtActivityIndicator;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtActivityIndicator.defaultProps = {
  size: 0,
  mode: 'normal',
  color: '',
  content: '',
  className: '',
  isOpened: true
};
AtActivityIndicator.propTypes = {
  size: PropTypes.number,
  mode: PropTypes.string,
  color: PropTypes.string,
  content: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  isOpened: PropTypes.bool
};
var SIZE_CLASS$2 = {
  large: 'large',
  normal: 'normal',
  small: 'small'
};
var AtAvatar = /** @class */function (_super) {
  __extends(AtAvatar, _super);
  function AtAvatar(props) {
    var _this = _super.call(this, props) || this;
    _this.state = {
      isWEAPP: _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEAPP
    };
    return _this;
  }
  AtAvatar.prototype.render = function () {
    var _a;
    var _b = this.props,
      size = _b.size,
      circle = _b.circle,
      image = _b.image,
      text = _b.text,
      openData = _b.openData,
      customStyle = _b.customStyle;
    var rootClassName = ['at-avatar'];
    var iconSize = SIZE_CLASS$2[size || 'normal'];
    var classObject = (_a = {}, _a["at-avatar--" + iconSize] = iconSize, _a['at-avatar--circle'] = circle, _a);
    var letter = '';
    if (text) letter = text[0];
    var elem;
    if (openData && openData.type === 'userAvatarUrl' && this.state.isWEAPP) {
      elem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* OpenData */ "i"], {
        type: openData.type
      });
    } else if (image) {
      elem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "d"], {
        className: 'at-avatar__img',
        src: image
      });
    } else {
      elem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
        className: 'at-avatar__text'
      }, letter);
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: classnames(rootClassName, classObject, this.props.className),
      style: customStyle
    }, elem);
  };
  return AtAvatar;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtAvatar.defaultProps = {
  size: 'normal',
  circle: false,
  text: '',
  image: '',
  customStyle: {},
  className: ''
};
AtAvatar.propTypes = {
  size: PropTypes.oneOf(['large', 'normal', 'small']),
  circle: PropTypes.bool,
  text: PropTypes.string,
  image: PropTypes.string,
  openData: PropTypes.object,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
};
var AtBadge = /** @class */function (_super) {
  __extends(AtBadge, _super);
  function AtBadge(props) {
    var _this = _super.call(this, props) || this;
    _this.state = {};
    return _this;
  }
  AtBadge.prototype.formatValue = function (value, maxValue) {
    if (value === '' || value === null || typeof value === 'undefined') return '';
    var numValue = +value;
    if (Number.isNaN(numValue)) {
      return value;
    }
    return numValue > maxValue ? maxValue + "+" : numValue;
  };
  AtBadge.prototype.render = function () {
    var _a = this.props,
      dot = _a.dot,
      value = _a.value,
      _b = _a.maxValue,
      maxValue = _b === void 0 ? 99 : _b,
      customStyle = _a.customStyle;
    var rootClassName = ['at-badge'];
    var val = this.formatValue(value, maxValue);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: classnames(rootClassName, this.props.className),
      style: customStyle
    }, this.props.children, dot ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-badge__dot'
    }) : val !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-badge__num'
    }, val));
  };
  return AtBadge;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtBadge.defaultProps = {
  dot: false,
  value: '',
  maxValue: 99,
  customStyle: {},
  className: ''
};
AtBadge.propTypes = {
  dot: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxValue: PropTypes.number,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
};
var SIZE_CLASS$1 = {
  normal: 'normal',
  small: 'small'
};
var TYPE_CLASS$1 = {
  primary: 'primary',
  secondary: 'secondary'
};
var AtButton = /** @class */function (_super) {
  __extends(AtButton, _super);
  function AtButton(props) {
    var _this = _super.call(this, props) || this;
    _this.state = {
      isWEB: _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEB,
      isWEAPP: _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEAPP,
      isALIPAY: _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.ALIPAY
    };
    return _this;
  }
  AtButton.prototype.onClick = function (event) {
    if (!this.props.disabled) {
      this.props.onClick && this.props.onClick(event);
    }
  };
  AtButton.prototype.onGetUserInfo = function (event) {
    this.props.onGetUserInfo && this.props.onGetUserInfo(event);
  };
  AtButton.prototype.onContact = function (event) {
    this.props.onContact && this.props.onContact(event);
  };
  AtButton.prototype.onGetPhoneNumber = function (event) {
    this.props.onGetPhoneNumber && this.props.onGetPhoneNumber(event);
  };
  AtButton.prototype.onError = function (event) {
    this.props.onError && this.props.onError(event);
  };
  AtButton.prototype.onOpenSetting = function (event) {
    this.props.onOpenSetting && this.props.onOpenSetting(event);
  };
  AtButton.prototype.render = function () {
    var _a;
    var _b = this.props,
      _c = _b.size,
      size = _c === void 0 ? 'normal' : _c,
      _d = _b.type,
      type = _d === void 0 ? '' : _d,
      circle = _b.circle,
      full = _b.full,
      loading = _b.loading,
      disabled = _b.disabled,
      customStyle = _b.customStyle,
      formType = _b.formType,
      openType = _b.openType,
      lang = _b.lang,
      sessionFrom = _b.sessionFrom,
      sendMessageTitle = _b.sendMessageTitle,
      sendMessagePath = _b.sendMessagePath,
      sendMessageImg = _b.sendMessageImg,
      showMessageCard = _b.showMessageCard,
      appParameter = _b.appParameter;
    var _e = this.state,
      isWEAPP = _e.isWEAPP,
      isALIPAY = _e.isALIPAY,
      isWEB = _e.isWEB;
    var rootClassName = ['at-button'];
    var classObject = (_a = {}, _a["at-button--" + SIZE_CLASS$1[size]] = SIZE_CLASS$1[size], _a['at-button--disabled'] = disabled, _a["at-button--" + type] = TYPE_CLASS$1[type], _a['at-button--circle'] = circle, _a['at-button--full'] = full, _a);
    var loadingColor = type === 'primary' ? '#fff' : '';
    var loadingSize = size === 'small' ? '30' : 0;
    var loadingComponent = null;
    if (loading) {
      loadingComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: 'at-button__icon'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtLoading, {
        color: loadingColor,
        size: loadingSize
      }));
      rootClassName.push('at-button--icon');
    }
    var webButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "a"], {
      className: 'at-button__wxbutton',
      lang: lang,
      formType: formType
    });
    var button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "a"], {
      className: 'at-button__wxbutton',
      formType: formType,
      openType: openType,
      lang: lang,
      sessionFrom: sessionFrom,
      sendMessageTitle: sendMessageTitle,
      sendMessagePath: sendMessagePath,
      sendMessageImg: sendMessageImg,
      showMessageCard: showMessageCard,
      appParameter: appParameter,
      onGetUserInfo: this.onGetUserInfo.bind(this),
      onGetPhoneNumber: this.onGetPhoneNumber.bind(this),
      onOpenSetting: this.onOpenSetting.bind(this),
      onError: this.onError.bind(this),
      onContact: this.onContact.bind(this)
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: classnames(rootClassName, classObject, this.props.className),
      style: customStyle,
      onClick: this.onClick.bind(this)
    }, isWEB && !disabled && webButton, isWEAPP && !disabled && button, isALIPAY && !disabled && button, loadingComponent, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-button__text'
    }, this.props.children));
  };
  return AtButton;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtButton.defaultProps = {
  size: 'normal',
  circle: false,
  full: false,
  loading: false,
  disabled: false,
  customStyle: {},
  // Button props
  lang: 'en',
  sessionFrom: '',
  sendMessageTitle: '',
  sendMessagePath: '',
  sendMessageImg: '',
  showMessageCard: false,
  appParameter: ''
};
AtButton.propTypes = {
  size: PropTypes.oneOf(['normal', 'small']),
  type: PropTypes.oneOf(['primary', 'secondary', '']),
  circle: PropTypes.bool,
  full: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  formType: PropTypes.oneOf(['submit', 'reset', '']),
  openType: PropTypes.oneOf(['contact', 'share', 'getUserInfo', 'getPhoneNumber', 'launchApp', 'openSetting', 'feedback', 'getRealnameAuthInfo', 'getAuthorize', 'contactShare', '']),
  lang: PropTypes.string,
  sessionFrom: PropTypes.string,
  sendMessageTitle: PropTypes.string,
  sendMessagePath: PropTypes.string,
  sendMessageImg: PropTypes.string,
  showMessageCard: PropTypes.bool,
  appParameter: PropTypes.string,
  onGetUserInfo: PropTypes.func,
  onContact: PropTypes.func,
  onGetPhoneNumber: PropTypes.func,
  onError: PropTypes.func,
  onOpenSetting: PropTypes.func
};
var AtCard = /** @class */function (_super) {
  __extends(AtCard, _super);
  function AtCard() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.handleClick = function (args) {
      if (typeof _this.props.onClick === 'function') {
        _this.props.onClick(args);
      }
    };
    return _this;
  }
  AtCard.prototype.render = function () {
    var _a;
    var _b = this.props,
      title = _b.title,
      note = _b.note,
      extra = _b.extra,
      extraStyle = _b.extraStyle,
      thumb = _b.thumb,
      isFull = _b.isFull,
      icon = _b.icon,
      renderIcon = _b.renderIcon;
    var rootClass = classnames('at-card', {
      'at-card--full': isFull
    }, this.props.className);
    var iconClass = classnames((_a = {
      'at-icon': true
    }, _a["at-icon-" + (icon && icon.value)] = icon && icon.value, _a['at-card__header-icon'] = true, _a));
    var iconStyle = {
      color: icon && icon.color || '',
      fontSize: icon && icon.size + "px" || ''
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      onClick: this.handleClick,
      className: rootClass
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-card__header'
    }, thumb && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-card__header-thumb'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "d"], {
      className: 'at-card__header-thumb-info',
      mode: 'scaleToFill',
      src: thumb
    })), renderIcon || '', !thumb && icon && icon.value && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
      className: iconClass,
      style: iconStyle
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
      className: 'at-card__header-title'
    }, title), extra && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
      style: _assign({}, extraStyle),
      className: 'at-card__header-extra'
    }, extra)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-card__content'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-card__content-info'
    }, this.props.children), note && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-card__content-note'
    }, note)));
  };
  return AtCard;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtCard.defaultProps = {
  note: '',
  isFull: false,
  thumb: '',
  title: '',
  extra: '',
  extraStyle: {}
};
AtCard.propTypes = {
  note: PropTypes.string,
  isFull: PropTypes.bool,
  thumb: PropTypes.string,
  title: PropTypes.string,
  extra: PropTypes.string,
  icon: PropTypes.object,
  onClick: PropTypes.func,
  renderIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  extraStyle: PropTypes.object // 自定义extra样式
};

var AtCheckbox = /** @class */function (_super) {
  __extends(AtCheckbox, _super);
  function AtCheckbox() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AtCheckbox.prototype.handleClick = function (idx) {
    var _a = this.props,
      selectedList = _a.selectedList,
      options = _a.options;
    var option = options[idx];
    var disabled = option.disabled,
      value = option.value;
    if (disabled) return;
    var selectedSet = new Set(selectedList);
    if (!selectedSet.has(value)) {
      selectedSet.add(value);
    } else {
      selectedSet.delete(value);
    }
    this.props.onChange(__spread(selectedSet));
  };
  AtCheckbox.prototype.render = function () {
    var _this = this;
    var _a = this.props,
      customStyle = _a.customStyle,
      className = _a.className,
      options = _a.options,
      selectedList = _a.selectedList;
    var rootCls = classnames('at-checkbox', className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: rootCls,
      style: customStyle
    }, options.map(function (option, idx) {
      var value = option.value,
        disabled = option.disabled,
        label = option.label,
        desc = option.desc;
      var optionCls = classnames('at-checkbox__option', {
        'at-checkbox__option--disabled': disabled,
        'at-checkbox__option--selected': selectedList.includes(value)
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: optionCls,
        key: value,
        onClick: _this.handleClick.bind(_this, idx)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: 'at-checkbox__option-wrap'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: 'at-checkbox__option-cnt'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: 'at-checkbox__icon-cnt'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
        className: 'at-icon at-icon-check'
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: 'at-checkbox__title'
      }, label)), desc && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: 'at-checkbox__desc'
      }, desc)));
    }));
  };
  return AtCheckbox;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtCheckbox.defaultProps = {
  customStyle: '',
  className: '',
  options: [],
  selectedList: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: function onChange() {}
};
AtCheckbox.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  options: PropTypes.array,
  selectedList: PropTypes.array,
  onChange: PropTypes.func
};
var AtList = /** @class */function (_super) {
  __extends(AtList, _super);
  function AtList() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AtList.prototype.render = function () {
    var rootClass = classnames('at-list', {
      'at-list--no-border': !this.props.hasBorder
    }, this.props.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: rootClass
    }, this.props.children);
  };
  return AtList;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtList.defaultProps = {
  hasBorder: true
};
AtList.propTypes = {
  hasBorder: PropTypes.bool
};
var AtListItem = /** @class */function (_super) {
  __extends(AtListItem, _super);
  function AtListItem() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.handleClick = function (event) {
      if (typeof _this.props.onClick === 'function' && !_this.props.disabled) {
        _this.props.onClick(event);
      }
    };
    _this.handleSwitchChange = function (event) {
      if (typeof _this.props.onSwitchChange === 'function' && !_this.props.disabled) {
        _this.props.onSwitchChange(event);
      }
    };
    return _this;
  }
  AtListItem.prototype.handleSwitchClick = function (e) {
    e.stopPropagation();
  };
  AtListItem.prototype.render = function () {
    var _a;
    var _b = this.props,
      note = _b.note,
      arrow = _b.arrow,
      thumb = _b.thumb,
      iconInfo = _b.iconInfo,
      disabled = _b.disabled,
      isSwitch = _b.isSwitch,
      hasBorder = _b.hasBorder,
      extraThumb = _b.extraThumb,
      switchColor = _b.switchColor,
      switchIsCheck = _b.switchIsCheck;
    var _c = this.props,
      extraText = _c.extraText,
      title = _c.title;
    extraText = String(extraText);
    title = String(title);
    var rootClass = classnames('at-list__item', {
      'at-list__item--thumb': thumb,
      'at-list__item--multiple': note,
      'at-list__item--disabled': disabled,
      'at-list__item--no-border': !hasBorder
    }, this.props.className);
    var iconClass = classnames(iconInfo && iconInfo.prefixClass || 'at-icon', (_a = {}, _a[(iconInfo && iconInfo.prefixClass || 'at-icon') + "-" + (iconInfo && iconInfo.value)] = iconInfo && iconInfo.value, _a), iconInfo && iconInfo.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: rootClass,
      onClick: this.handleClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-list__item-container'
    }, thumb && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-list__item-thumb item-thumb'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "d"], {
      className: 'item-thumb__info',
      mode: 'scaleToFill',
      src: thumb
    })), iconInfo && iconInfo.value && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-list__item-icon item-icon'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
      className: iconClass,
      style: mergeStyle({
        color: iconInfo.color || '',
        fontSize: (iconInfo.size || 24) + "px"
      }, iconInfo.customStyle || '')
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-list__item-content item-content'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'item-content__info'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'item-content__info-title'
    }, title), note && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'item-content__info-note'
    }, note))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-list__item-extra item-extra'
    }, extraText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'item-extra__info'
    }, extraText), extraThumb && !extraText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'item-extra__image'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "d"], {
      className: 'item-extra__image-info',
      mode: 'aspectFit',
      src: extraThumb
    })), isSwitch && !extraThumb && !extraText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'item-extra__switch',
      onClick: this.handleSwitchClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Switch */ "q"], {
      color: switchColor,
      disabled: disabled,
      checked: switchIsCheck,
      onChange: this.handleSwitchChange
    })), arrow ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'item-extra__icon'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
      className: "at-icon item-extra__icon-arrow at-icon-chevron-" + arrow
    })) : null)));
  };
  return AtListItem;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtListItem.defaultProps = {
  note: '',
  disabled: false,
  title: '',
  thumb: '',
  isSwitch: false,
  hasBorder: true,
  switchColor: '#6190E8',
  switchIsCheck: false,
  extraText: '',
  extraThumb: '',
  iconInfo: {
    value: ''
  }
};
AtListItem.propTypes = {
  note: PropTypes.string,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  thumb: PropTypes.string,
  onClick: PropTypes.func,
  isSwitch: PropTypes.bool,
  hasBorder: PropTypes.bool,
  switchColor: PropTypes.string,
  switchIsCheck: PropTypes.bool,
  extraText: PropTypes.string,
  extraThumb: PropTypes.string,
  onSwitchChange: PropTypes.func,
  arrow: PropTypes.oneOf(['up', 'down', 'right']),
  iconInfo: PropTypes.shape({
    size: PropTypes.number,
    value: PropTypes.string,
    color: PropTypes.string,
    prefixClass: PropTypes.string,
    customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
  })
};
var AtDrawer = /** @class */function (_super) {
  __extends(AtDrawer, _super);
  function AtDrawer(props) {
    var _this = _super.call(this, props) || this;
    _this.state = {
      animShow: false,
      _show: props.show
    };
    return _this;
  }
  AtDrawer.prototype.componentDidMount = function () {
    var _show = this.state._show;
    if (_show) this.animShow();
  };
  AtDrawer.prototype.onItemClick = function (index) {
    this.props.onItemClick && this.props.onItemClick(index);
    this.animHide();
  };
  AtDrawer.prototype.onHide = function () {
    var _this = this;
    this.setState({
      _show: false
    }, function () {
      _this.props.onClose && _this.props.onClose();
    });
  };
  AtDrawer.prototype.animHide = function () {
    var _this = this;
    this.setState({
      animShow: false
    });
    setTimeout(function () {
      _this.onHide();
    }, 300);
  };
  AtDrawer.prototype.animShow = function () {
    var _this = this;
    this.setState({
      _show: true
    });
    setTimeout(function () {
      _this.setState({
        animShow: true
      });
    }, 200);
  };
  AtDrawer.prototype.onMaskClick = function () {
    this.animHide();
  };
  AtDrawer.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    var show = nextProps.show;
    if (show !== this.state._show) {
      show ? this.animShow() : this.animHide();
    }
  };
  AtDrawer.prototype.render = function () {
    var _this = this;
    var _a = this.props,
      mask = _a.mask,
      width = _a.width,
      right = _a.right,
      items = _a.items;
    var _b = this.state,
      animShow = _b.animShow,
      _show = _b._show;
    var rootClassName = ['at-drawer'];
    var maskStyle = {
      display: mask ? 'block' : 'none',
      opacity: animShow ? 1 : 0
    };
    var listStyle = {
      width: width,
      transition: animShow ? 'all 225ms cubic-bezier(0, 0, 0.2, 1)' : 'all 195ms cubic-bezier(0.4, 0, 0.6, 1)'
    };
    var classObject = {
      'at-drawer--show': animShow,
      'at-drawer--right': right,
      'at-drawer--left': !right
    };
    return _show ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: classnames(rootClassName, classObject, this.props.className)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-drawer__mask',
      style: maskStyle,
      onClick: this.onMaskClick.bind(this)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-drawer__content',
      style: listStyle
    }, !!items && items.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtList, null, items.map(function (name, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtListItem, {
        key: name + "-" + index,
        "data-index": index,
        onClick: _this.onItemClick.bind(_this, index),
        title: name,
        arrow: 'right'
      });
    })) : this.props.children)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], null);
  };
  return AtDrawer;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtDrawer.defaultProps = {
  show: false,
  mask: true,
  width: '',
  right: false,
  items: []
};
AtDrawer.propTypes = {
  show: PropTypes.bool,
  mask: PropTypes.bool,
  width: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
  onItemClick: PropTypes.func,
  onClose: PropTypes.func
};
var AtFloatLayout = /** @class */function (_super) {
  __extends(AtFloatLayout, _super);
  function AtFloatLayout(props) {
    var _this = _super.call(this, props) || this;
    _this.handleClose = function () {
      if (typeof _this.props.onClose === 'function') {
        // TODO: Fix typings
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        _this.props.onClose();
      }
    };
    _this.close = function () {
      _this.setState({
        _isOpened: false
      }, _this.handleClose);
    };
    _this.handleTouchMove = function (e) {
      e.stopPropagation();
    };
    var isOpened = props.isOpened;
    _this.state = {
      _isOpened: isOpened
    };
    return _this;
  }
  AtFloatLayout.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    var isOpened = nextProps.isOpened;
    if (this.props.isOpened !== isOpened) {
      handleTouchScroll(isOpened);
    }
    if (isOpened !== this.state._isOpened) {
      this.setState({
        _isOpened: isOpened
      });
    }
  };
  AtFloatLayout.prototype.render = function () {
    var _isOpened = this.state._isOpened;
    var _a = this.props,
      title = _a.title,
      scrollY = _a.scrollY,
      scrollX = _a.scrollX,
      scrollTop = _a.scrollTop,
      scrollLeft = _a.scrollLeft,
      upperThreshold = _a.upperThreshold,
      lowerThreshold = _a.lowerThreshold,
      scrollWithAnimation = _a.scrollWithAnimation;
    var rootClass = classnames('at-float-layout', {
      'at-float-layout--active': _isOpened
    }, this.props.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: rootClass,
      onTouchMove: this.handleTouchMove
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      onClick: this.close,
      className: 'at-float-layout__overlay'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-float-layout__container layout'
    }, title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'layout-header'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
      className: 'layout-header__title'
    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'layout-header__btn-close',
      onClick: this.close
    })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'layout-body'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* ScrollView */ "m"], {
      scrollY: scrollY,
      scrollX: scrollX,
      scrollTop: scrollTop,
      scrollLeft: scrollLeft,
      upperThreshold: upperThreshold,
      lowerThreshold: lowerThreshold,
      scrollWithAnimation: scrollWithAnimation,
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore // TODO: Fix typings
      onScroll: this.props.onScroll,
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore // TODO: Fix typings
      onScrollToLower: this.props.onScrollToLower,
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore // TODO: Fix typings
      onScrollToUpper: this.props.onScrollToUpper,
      className: 'layout-body__content'
    }, this.props.children))));
  };
  return AtFloatLayout;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtFloatLayout.defaultProps = {
  title: '',
  isOpened: false,
  scrollY: true,
  scrollX: false,
  scrollWithAnimation: false
};
AtFloatLayout.propTypes = {
  title: PropTypes.string,
  isOpened: PropTypes.bool,
  scrollY: PropTypes.bool,
  scrollX: PropTypes.bool,
  scrollTop: PropTypes.number,
  scrollLeft: PropTypes.number,
  upperThreshold: PropTypes.number,
  lowerThreshold: PropTypes.number,
  scrollWithAnimation: PropTypes.bool,
  onClose: PropTypes.func,
  onScroll: PropTypes.func,
  onScrollToLower: PropTypes.func,
  onScrollToUpper: PropTypes.func
};
var AtForm = /** @class */function (_super) {
  __extends(AtForm, _super);
  function AtForm() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AtForm.prototype.onSubmit = function () {
    this.props.onSubmit && this.props.onSubmit(arguments);
  };
  AtForm.prototype.onReset = function () {
    this.props.onReset && this.props.onReset(arguments);
  };
  AtForm.prototype.render = function () {
    var _a = this.props,
      customStyle = _a.customStyle,
      className = _a.className,
      reportSubmit = _a.reportSubmit;
    var rootCls = classnames('at-form', className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Form */ "c"], {
      className: rootCls,
      style: customStyle,
      onSubmit: this.onSubmit.bind(this),
      reportSubmit: reportSubmit,
      onReset: this.onReset.bind(this)
    }, this.props.children);
  };
  return AtForm;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtForm.defaultProps = {
  customStyle: '',
  className: '',
  reportSubmit: false
};
AtForm.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  reportSubmit: PropTypes.bool,
  onSubmit: PropTypes.func,
  onReset: PropTypes.func
};

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
    length = array.length;
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}
var _baseSlice = baseSlice;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1 = eq;

/** Detect free variable `global` from Node.js. */
var freeGlobal = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = (typeof self === "undefined" ? "undefined" : Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();
var _root = root;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;
var _Symbol = Symbol$1;

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$8.toString;

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$6.call(value, symToStringTag$1),
    tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$7.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
  undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? _getRawTag(value) : _objectToString(value);
}
var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value);
  return value != null && (type == 'object' || type == 'function');
}
var isObject_1 = isObject;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
  funcTag$1 = '[object Function]',
  genTag = '[object GeneratorFunction]',
  proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}
var isLength_1 = isLength;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}
var isArrayLike_1 = isArrayLike;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value);
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
var _isIndex = isIndex;

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject_1(object)) {
    return false;
  }
  var type = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(index);
  if (type == 'number' ? isArrayLike_1(object) && _isIndex(index, object.length) : type == 'string' && index in object) {
    return eq_1(object[index], value);
  }
  return false;
}
var _isIterateeCall = isIterateeCall;

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}
var _trimmedEndIndex = trimmedEndIndex;

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string ? string.slice(0, _trimmedEndIndex(string) + 1).replace(reTrimStart, '') : string;
}
var _baseTrim = baseTrim;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value) == 'object';
}
var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value) == 'symbol' || isObjectLike_1(value) && _baseGetTag(value) == symbolTag;
}
var isSymbol_1 = isSymbol;

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol_1(value)) {
    return NAN;
  }
  if (isObject_1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject_1(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = _baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var toNumber_1 = toNumber;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0,
  MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber_1(value);
  if (value === INFINITY$1 || value === -INFINITY$1) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}
var toFinite_1 = toFinite;

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite_1(value),
    remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}
var toInteger_1 = toInteger;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
  nativeMax$1 = Math.max;

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * _.chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * _.chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size, guard) {
  if (guard ? _isIterateeCall(array, size, guard) : size === undefined) {
    size = 1;
  } else {
    size = nativeMax$1(toInteger_1(size), 0);
  }
  var length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  var index = 0,
    resIndex = 0,
    result = Array(nativeCeil(length / size));
  while (index < length) {
    result[resIndex++] = _baseSlice(array, index, index += size);
  }
  return result;
}
var chunk_1 = chunk;
var AtGrid = /** @class */function (_super) {
  __extends(AtGrid, _super);
  function AtGrid() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.handleClick = function (item, index, row, event) {
      var _a = _this.props,
        onClick = _a.onClick,
        _b = _a.columnNum,
        columnNum = _b === void 0 ? 3 : _b;
      if (typeof onClick === 'function') {
        var clickIndex = row * columnNum + index;
        onClick(item, clickIndex, event);
      }
    };
    return _this;
  }
  AtGrid.prototype.render = function () {
    var _this = this;
    var _a = this.props,
      data = _a.data,
      mode = _a.mode,
      _b = _a.columnNum,
      columnNum = _b === void 0 ? 3 : _b,
      hasBorder = _a.hasBorder;
    if (Array.isArray(data) && data.length === 0) {
      return null;
    }
    var gridGroup = chunk_1(data, columnNum);
    var bodyClass = classnames(['at-grid__flex-item', 'at-grid-item', "at-grid-item--" + mode], {
      'at-grid-item--no-border': !hasBorder
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: classnames('at-grid', this.props.className)
    }, gridGroup.map(function (item, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: 'at-grid__flex',
        key: "at-grid-group-" + i
      }, item.map(function (childItem, index) {
        var _a;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
          key: "at-grid-item-" + index,
          className: classnames(bodyClass, {
            'at-grid-item--last': index === columnNum - 1
          }),
          onClick: _this.handleClick.bind(_this, childItem, index, i),
          style: {
            flex: "0 0 " + 100 / columnNum + "%"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
          className: 'at-grid-item__content'
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
          className: 'at-grid-item__content-inner'
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
          className: 'content-inner__icon'
        }, childItem.image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "d"], {
          className: 'content-inner__img',
          src: childItem.image,
          mode: 'scaleToFill'
        }), childItem.iconInfo && !childItem.image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
          className: classnames(childItem.iconInfo.prefixClass || 'at-icon', (_a = {}, _a[(childItem.iconInfo.prefixClass || 'at-icon') + "-" + childItem.iconInfo.value] = childItem.iconInfo.value, _a), childItem.iconInfo.className),
          style: mergeStyle({
            color: childItem.iconInfo.color,
            fontSize: (childItem.iconInfo.size || 24) + "px"
          },
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          childItem.iconInfo.customStyle)
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
          className: 'content-inner__text'
        }, childItem.value))));
      }));
    }));
  };
  return AtGrid;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtGrid.defaultProps = {
  data: [],
  columnNum: 3,
  mode: 'square',
  hasBorder: true
};
AtGrid.propTypes = {
  mode: PropTypes.string,
  onClick: PropTypes.func,
  hasBorder: PropTypes.bool,
  columnNum: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string,
    value: PropTypes.string,
    iconInfo: PropTypes.shape({
      size: PropTypes.number,
      value: PropTypes.string,
      color: PropTypes.string,
      prefixClass: PropTypes.string,
      customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      className: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
    })
  }))
};
var AtIcon = /** @class */function (_super) {
  __extends(AtIcon, _super);
  function AtIcon() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AtIcon.prototype.handleClick = function () {
    this.props.onClick && this.props.onClick(arguments);
  };
  AtIcon.prototype.render = function () {
    var _a = this.props,
      _b = _a.customStyle,
      customStyle = _b === void 0 ? {} : _b,
      className = _a.className,
      prefixClass = _a.prefixClass,
      value = _a.value,
      size = _a.size,
      color = _a.color;
    var rootStyle = {
      fontSize: "" + pxTransform(parseInt(String(size)) * 2),
      color: color
    };
    var iconName = value ? prefixClass + "-" + value : '';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
      className: classnames(prefixClass, iconName, className),
      style: mergeStyle(rootStyle, customStyle),
      onClick: this.handleClick.bind(this)
    });
  };
  return AtIcon;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtIcon.defaultProps = {
  customStyle: '',
  className: '',
  prefixClass: 'at-icon',
  value: '',
  color: '',
  size: 24
};
AtIcon.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  prefixClass: PropTypes.string,
  value: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func
};
function getInputProps(props) {
  var actualProps = {
    type: props.type,
    maxLength: props.maxLength || props.maxlength,
    disabled: props.disabled,
    password: false
  };
  switch (actualProps.type) {
    case 'phone':
      actualProps.type = 'number';
      actualProps.maxLength = 11;
      break;
    case 'password':
      actualProps.type = 'text';
      actualProps.password = true;
      break;
  }
  if (!props.disabled && !props.editable) {
    actualProps.disabled = true;
  }
  return actualProps;
}
var AtInput = /** @class */function (_super) {
  __extends(AtInput, _super);
  function AtInput() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    // TODO: 有待考证是否为合理方式处理 #840
    _this.inputClearing = false;
    _this.handleInput = function (event) {
      var _a, _b;
      return (_b = (_a = _this.props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, event.detail.value, event);
    };
    _this.handleFocus = function (event) {
      if (typeof _this.props.onFocus === 'function') {
        _this.props.onFocus(event.detail.value, event);
      }
    };
    _this.handleBlur = function (event) {
      var _a, _b;
      if (typeof _this.props.onBlur === 'function') {
        _this.props.onBlur(event.detail.value, event);
      }
      if (event.type === 'blur' && !_this.inputClearing) {
        // fix # 583 AtInput 不触发 onChange 的问题
        (_b = (_a = _this.props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, event.detail.value, event);
      }
      // 还原状态
      _this.inputClearing = false;
    };
    _this.handleConfirm = function (event) {
      if (typeof _this.props.onConfirm === 'function') {
        _this.props.onConfirm(event.detail.value, event);
      }
    };
    _this.handleClick = function (event) {
      if (!_this.props.editable && typeof _this.props.onClick === 'function') {
        _this.props.onClick(event);
      }
    };
    _this.handleClearValue = function (event) {
      var _a, _b;
      _this.inputClearing = true;
      (_b = (_a = _this.props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, '', event);
    };
    _this.handleKeyboardHeightChange = function (event) {
      if (typeof _this.props.onKeyboardHeightChange === 'function') {
        _this.props.onKeyboardHeightChange(event);
      }
    };
    _this.handleErrorClick = function (event) {
      if (typeof _this.props.onErrorClick === 'function') {
        _this.props.onErrorClick(event);
      }
    };
    return _this;
  }
  AtInput.prototype.render = function () {
    var _a = this.props,
      className = _a.className,
      customStyle = _a.customStyle,
      name = _a.name,
      cursorSpacing = _a.cursorSpacing,
      confirmType = _a.confirmType,
      cursor = _a.cursor,
      selectionStart = _a.selectionStart,
      selectionEnd = _a.selectionEnd,
      adjustPosition = _a.adjustPosition,
      border = _a.border,
      title = _a.title,
      error = _a.error,
      clear = _a.clear,
      placeholder = _a.placeholder,
      placeholderStyle = _a.placeholderStyle,
      placeholderClass = _a.placeholderClass,
      _b = _a.autoFocus,
      autoFocus = _b === void 0 ? false : _b,
      _c = _a.focus,
      focus = _c === void 0 ? false : _c,
      value = _a.value,
      required = _a.required;
    var _d = getInputProps(this.props),
      type = _d.type,
      maxLength = _d.maxLength,
      disabled = _d.disabled,
      password = _d.password;
    var rootCls = classnames('at-input', {
      'at-input--without-border': !border
    }, className);
    var containerCls = classnames('at-input__container', {
      'at-input--error': error,
      'at-input--disabled': disabled
    });
    // TODO: overlayCls 是否需要移除
    var overlayCls = classnames('at-input__overlay', {
      'at-input__overlay--hidden': !disabled
    });
    var placeholderCls = classnames('placeholder', placeholderClass);
    var id = name && {
      id: name
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: rootCls,
      style: customStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: containerCls
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: overlayCls,
      onClick: this.handleClick
    }), title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Label */ "f"], {
      className: "at-input__title " + (required && 'at-input__title--required'),
      for: name
    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Input */ "e"], _assign({
      className: 'at-input__input'
    }, id, {
      name: name,
      type: type,
      disabled: disabled,
      password: password,
      placeholderStyle: placeholderStyle,
      placeholderClass: placeholderCls,
      placeholder: placeholder,
      cursorSpacing: cursorSpacing,
      maxlength: maxLength,
      autoFocus: autoFocus
    }, focus ? {
      focus: focus
    } : {}, {
      value: value,
      confirmType: confirmType,
      cursor: cursor,
      selectionStart: selectionStart,
      selectionEnd: selectionEnd,
      adjustPosition: adjustPosition,
      onInput: this.handleInput,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onConfirm: this.handleConfirm,
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      onKeyboardHeightChange: this.handleKeyboardHeightChange
    })), clear && value && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-input__icon',
      onTouchEnd: this.handleClearValue
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
      className: 'at-icon at-icon-close-circle at-input__icon-close'
    })), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-input__icon',
      onTouchStart: this.handleErrorClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
      className: 'at-icon at-icon-alert-circle at-input__icon-alert'
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-input__children'
    }, this.props.children)));
  };
  return AtInput;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtInput.defaultProps = {
  className: '',
  customStyle: '',
  value: '',
  name: '',
  placeholder: '',
  placeholderStyle: '',
  placeholderClass: '',
  title: '',
  cursorSpacing: 50,
  confirmType: 'done',
  cursor: 0,
  selectionStart: -1,
  selectionEnd: -1,
  adjustPosition: true,
  maxlength: 140,
  maxLength: 140,
  type: 'text',
  disabled: false,
  border: true,
  editable: true,
  error: false,
  clear: false,
  autoFocus: false,
  focus: false,
  required: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: function onChange() {}
};
AtInput.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  customStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderStyle: PropTypes.string,
  placeholderClass: PropTypes.string,
  title: PropTypes.string,
  confirmType: PropTypes.string,
  cursor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selectionStart: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selectionEnd: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  adjustPosition: PropTypes.bool,
  cursorSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxlength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  disabled: PropTypes.bool,
  border: PropTypes.bool,
  editable: PropTypes.bool,
  error: PropTypes.bool,
  clear: PropTypes.bool,
  autoFocus: PropTypes.bool,
  focus: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onConfirm: PropTypes.func,
  onErrorClick: PropTypes.func,
  onClick: PropTypes.func,
  required: PropTypes.bool
};

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
    length = array == null ? 0 : array.length,
    result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var _arrayMap = arrayMap;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
var isArray_1 = isArray;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
  symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
var _baseToString = baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : _baseToString(value);
}
var toString_1 = toString;

// TODO: Check all types
// 实现两数相加并保留小数点后最短尾数
function addNum(num1, num2) {
  var sq1, sq2;
  try {
    sq1 = toString_1(num1).split('.')[1].length;
  } catch (e) {
    sq1 = 0;
  }
  try {
    sq2 = toString_1(num2).split('.')[1].length;
  } catch (e) {
    sq2 = 0;
  }
  var m = Math.pow(10, Math.max(sq1, sq2));
  return (Math.round(num1 * m) + Math.round(num2 * m)) / m;
}
// 格式化数字，处理01变成1,并且不处理1. 这种情况
function parseValue(num) {
  if (num === '') return '0';
  var numStr = toString_1(num);
  if (numStr.indexOf('0') === 0 && numStr.indexOf('.') === -1) {
    // 处理01变成1,并且不处理1.
    return toString_1(parseFloat(num));
  }
  return toString_1(num);
}
var AtInputNumber = /** @class */function (_super) {
  __extends(AtInputNumber, _super);
  function AtInputNumber() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.handleValue = function (value) {
      var _a = _this.props,
        _b = _a.max,
        max = _b === void 0 ? 100 : _b,
        _c = _a.min,
        min = _c === void 0 ? 0 : _c;
      var resultValue = value === '' ? min : value;
      // 此处不能使用 Math.max，会是字符串变数字，并丢失 .
      if (resultValue > max) {
        resultValue = max;
        _this.handleError({
          type: 'OVER',
          errorValue: resultValue
        });
      }
      if (resultValue < min) {
        resultValue = min;
        _this.handleError({
          type: 'LOW',
          errorValue: resultValue
        });
      }
      if (resultValue && !Number(resultValue)) {
        resultValue = parseFloat(String(resultValue)) || min;
        _this.handleError({
          type: 'OVER',
          errorValue: resultValue
        });
      }
      resultValue = parseValue(String(resultValue));
      return resultValue;
    };
    _this.handleInput = function (e) {
      var value = e.target.value;
      var disabled = _this.props.disabled;
      if (disabled) return '';
      var newValue = _this.handleValue(value);
      _this.props.onChange(Number(newValue), e);
      return newValue;
    };
    _this.handleBlur = function (event) {
      return _this.props.onBlur && _this.props.onBlur(event);
    };
    _this.handleError = function (errorValue) {
      if (!_this.props.onErrorInput) {
        return;
      }
      _this.props.onErrorInput(errorValue);
    };
    return _this;
  }
  AtInputNumber.prototype.handleClick = function (clickType, e) {
    var _a = this.props,
      disabled = _a.disabled,
      value = _a.value,
      _b = _a.min,
      min = _b === void 0 ? 0 : _b,
      _c = _a.max,
      max = _c === void 0 ? 100 : _c,
      _d = _a.step,
      step = _d === void 0 ? 1 : _d;
    var lowThanMin = clickType === 'minus' && value <= min;
    var overThanMax = clickType === 'plus' && value >= max;
    if (lowThanMin || overThanMax || disabled) {
      var deltaValue_1 = clickType === 'minus' ? -step : step;
      var errorValue = addNum(Number(value), deltaValue_1);
      if (disabled) {
        this.handleError({
          type: 'DISABLED',
          errorValue: errorValue
        });
      } else {
        this.handleError({
          type: lowThanMin ? 'LOW' : 'OVER',
          errorValue: errorValue
        });
      }
      return;
    }
    var deltaValue = clickType === 'minus' ? -step : step;
    var newValue = addNum(Number(value), deltaValue);
    newValue = Number(this.handleValue(newValue));
    this.props.onChange(newValue, e);
  };
  AtInputNumber.prototype.render = function () {
    var _a = this.props,
      customStyle = _a.customStyle,
      className = _a.className,
      width = _a.width,
      disabled = _a.disabled,
      value = _a.value,
      type = _a.type,
      _b = _a.min,
      min = _b === void 0 ? 0 : _b,
      _c = _a.max,
      max = _c === void 0 ? 100 : _c,
      size = _a.size,
      disabledInput = _a.disabledInput;
    var inputStyle = {
      width: width ? "" + pxTransform(width) : ''
    };
    var inputValue = Number(this.handleValue(value));
    var rootCls = classnames('at-input-number', {
      'at-input-number--lg': size === 'large'
    }, className);
    var minusBtnCls = classnames('at-input-number__btn', {
      'at-input-number--disabled': inputValue <= min || disabled
    });
    var plusBtnCls = classnames('at-input-number__btn', {
      'at-input-number--disabled': inputValue >= max || disabled
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: rootCls,
      style: customStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: minusBtnCls,
      onClick: this.handleClick.bind(this, 'minus')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
      className: 'at-icon at-icon-subtract at-input-number__btn-subtract'
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Input */ "e"], {
      className: 'at-input-number__input',
      style: inputStyle,
      type: type,
      value: String(inputValue),
      disabled: disabledInput || disabled,
      onInput: this.handleInput,
      onBlur: this.handleBlur
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: plusBtnCls,
      onClick: this.handleClick.bind(this, 'plus')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
      className: 'at-icon at-icon-add at-input-number__btn-add'
    })));
  };
  return AtInputNumber;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtInputNumber.defaultProps = {
  customStyle: {},
  className: '',
  disabled: false,
  disabledInput: false,
  value: 1,
  type: 'number',
  width: 0,
  min: 0,
  max: 100,
  step: 1,
  size: 'normal',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: function onChange() {}
};
AtInputNumber.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  type: PropTypes.oneOf(['number', 'digit']),
  disabled: PropTypes.bool,
  width: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  size: PropTypes.oneOf(['normal', 'large']),
  disabledInput: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onErrorInput: PropTypes.func
};
var AtModalAction = /** @class */function (_super) {
  __extends(AtModalAction, _super);
  function AtModalAction() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AtModalAction.prototype.render = function () {
    var rootClass = classnames('at-modal__footer', {
      'at-modal__footer--simple': this.props.isSimple
    }, this.props.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: rootClass
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-modal__action'
    }, this.props.children));
  };
  return AtModalAction;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtModalAction.defaultProps = {
  isSimple: false
};
AtModalAction.propTypes = {
  isSimple: PropTypes.bool
};
var AtModalContent = /** @class */function (_super) {
  __extends(AtModalContent, _super);
  function AtModalContent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AtModalContent.prototype.render = function () {
    var rootClass = classnames('at-modal__content', this.props.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* ScrollView */ "m"], {
      scrollY: true,
      className: rootClass
    }, this.props.children);
  };
  return AtModalContent;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
var AtModalHeader = /** @class */function (_super) {
  __extends(AtModalHeader, _super);
  function AtModalHeader() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AtModalHeader.prototype.render = function () {
    var rootClass = classnames('at-modal__header', this.props.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: rootClass
    }, this.props.children);
  };
  return AtModalHeader;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
var AtModal = /** @class */function (_super) {
  __extends(AtModal, _super);
  function AtModal(props) {
    var _this = _super.call(this, props) || this;
    _this.handleClickOverlay = function () {
      if (_this.props.closeOnClickOverlay) {
        _this.setState({
          _isOpened: false
        }, _this.handleClose);
      }
    };
    _this.handleClose = function (event) {
      if (typeof _this.props.onClose === 'function') {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        _this.props.onClose(event);
      }
    };
    _this.handleCancel = function (event) {
      if (typeof _this.props.onCancel === 'function') {
        _this.props.onCancel(event);
      }
    };
    _this.handleConfirm = function (event) {
      if (typeof _this.props.onConfirm === 'function') {
        _this.props.onConfirm(event);
      }
    };
    _this.handleTouchMove = function (e) {
      e.stopPropagation();
    };
    var isOpened = props.isOpened;
    _this.state = {
      _isOpened: isOpened,
      isWEB: _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEB
    };
    return _this;
  }
  AtModal.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    var isOpened = nextProps.isOpened;
    if (this.props.isOpened !== isOpened) {
      handleTouchScroll(isOpened);
    }
    if (isOpened !== this.state._isOpened) {
      this.setState({
        _isOpened: isOpened
      });
    }
  };
  AtModal.prototype.render = function () {
    var _a = this.state,
      _isOpened = _a._isOpened,
      isWEB = _a.isWEB;
    var _b = this.props,
      title = _b.title,
      content = _b.content,
      cancelText = _b.cancelText,
      confirmText = _b.confirmText;
    var rootClass = classnames('at-modal', {
      'at-modal--active': _isOpened
    }, this.props.className);
    if (title || content) {
      var isRenderAction = cancelText || confirmText;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: rootClass
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        onClick: this.handleClickOverlay,
        className: 'at-modal__overlay'
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: 'at-modal__container'
      }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtModalHeader, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], null, title)), content && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtModalContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: 'content-simple'
      }, isWEB ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"]
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      , {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        dangerouslySetInnerHTML: {
          __html: content.replace(/\n/g, '<br/>')
        }
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], null, content))), isRenderAction && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtModalAction, {
        isSimple: true
      }, cancelText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "a"], {
        onClick: this.handleCancel
      }, cancelText), confirmText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "a"], {
        onClick: this.handleConfirm
      }, confirmText))));
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      onTouchMove: this.handleTouchMove,
      className: rootClass
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-modal__overlay',
      onClick: this.handleClickOverlay
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-modal__container'
    }, this.props.children));
  };
  return AtModal;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtModal.defaultProps = {
  isOpened: false,
  closeOnClickOverlay: true
};
AtModal.propTypes = {
  title: PropTypes.string,
  isOpened: PropTypes.bool,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  onClose: PropTypes.func,
  content: PropTypes.string,
  closeOnClickOverlay: PropTypes.bool,
  cancelText: PropTypes.string,
  confirmText: PropTypes.string
};
var AtNavBar = /** @class */function (_super) {
  __extends(AtNavBar, _super);
  function AtNavBar() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AtNavBar.prototype.handleClickLeftView = function (event) {
    this.props.onClickLeftIcon && this.props.onClickLeftIcon(event);
  };
  AtNavBar.prototype.handleClickSt = function (event) {
    this.props.onClickRgIconSt && this.props.onClickRgIconSt(event);
  };
  AtNavBar.prototype.handleClickNd = function (event) {
    this.props.onClickRgIconNd && this.props.onClickRgIconNd(event);
  };
  AtNavBar.prototype.render = function () {
    var _a, _b, _c;
    var _d = this.props,
      customStyle = _d.customStyle,
      className = _d.className,
      color = _d.color,
      fixed = _d.fixed,
      border = _d.border,
      leftIconType = _d.leftIconType,
      leftText = _d.leftText,
      title = _d.title,
      rightFirstIconType = _d.rightFirstIconType,
      rightSecondIconType = _d.rightSecondIconType;
    var linkStyle = {
      color: color
    };
    var defaultIconInfo = {
      customStyle: '',
      className: '',
      prefixClass: 'at-icon',
      value: '',
      color: '',
      size: 24
    };
    var leftIconInfo = leftIconType instanceof Object ? _assign(_assign({}, defaultIconInfo), leftIconType) : _assign(_assign({}, defaultIconInfo), {
      value: leftIconType
    });
    var leftIconClass = classnames(leftIconInfo.prefixClass, (_a = {}, _a[leftIconInfo.prefixClass + "-" + leftIconInfo.value] = leftIconInfo.value, _a), leftIconInfo.className);
    var rightFirstIconInfo = rightFirstIconType instanceof Object ? _assign(_assign({}, defaultIconInfo), rightFirstIconType) : _assign(_assign({}, defaultIconInfo), {
      value: rightFirstIconType
    });
    var rightFirstIconClass = classnames(rightFirstIconInfo.prefixClass, (_b = {}, _b[rightFirstIconInfo.prefixClass + "-" + rightFirstIconInfo.value] = rightFirstIconInfo.value, _b), rightFirstIconInfo.className);
    var rightSecondIconInfo = rightSecondIconType instanceof Object ? _assign(_assign({}, defaultIconInfo), rightSecondIconType) : _assign(_assign({}, defaultIconInfo), {
      value: rightSecondIconType
    });
    var rightSecondIconClass = classnames(rightSecondIconInfo.prefixClass, (_c = {}, _c[rightSecondIconInfo.prefixClass + "-" + rightSecondIconInfo.value] = rightSecondIconInfo.value, _c), rightSecondIconInfo.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: classnames({
        'at-nav-bar': true,
        'at-nav-bar--fixed': fixed,
        'at-nav-bar--no-border': !border
      }, className),
      style: customStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-nav-bar__left-view',
      onClick: this.handleClickLeftView.bind(this),
      style: linkStyle
    }, leftIconType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
      className: leftIconClass,
      style: mergeStyle({
        color: leftIconInfo.color,
        fontSize: "" + pxTransform(parseInt(leftIconInfo.size.toString()) * 2)
      }, leftIconInfo.customStyle)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
      className: 'at-nav-bar__text'
    }, leftText)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-nav-bar__title'
    }, title || this.props.children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-nav-bar__right-view'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: classnames({
        'at-nav-bar__container': true,
        'at-nav-bar__container--hide': !rightSecondIconType
      }),
      style: linkStyle,
      onClick: this.handleClickNd.bind(this)
    }, rightSecondIconType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
      className: rightSecondIconClass,
      style: mergeStyle({
        color: rightSecondIconInfo.color,
        fontSize: "" + pxTransform(parseInt(rightSecondIconInfo.size.toString()) * 2)
      }, rightSecondIconInfo.customStyle)
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: classnames({
        'at-nav-bar__container': true,
        'at-nav-bar__container--hide': !rightFirstIconType
      }),
      style: linkStyle,
      onClick: this.handleClickSt.bind(this)
    }, rightFirstIconType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
      className: rightFirstIconClass,
      style: mergeStyle({
        color: rightFirstIconInfo.color,
        fontSize: "" + pxTransform(parseInt(rightFirstIconInfo.size.toString()) * 2)
      }, rightFirstIconInfo.customStyle)
    }))));
  };
  return AtNavBar;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtNavBar.defaultProps = {
  customStyle: '',
  className: '',
  fixed: false,
  border: true,
  color: '',
  leftIconType: '',
  leftText: '',
  title: '',
  rightFirstIconType: '',
  rightSecondIconType: ''
};
AtNavBar.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  fixed: PropTypes.bool,
  border: PropTypes.bool,
  color: PropTypes.string,
  leftIconType: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  leftText: PropTypes.string,
  title: PropTypes.string,
  rightFirstIconType: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  rightSecondIconType: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onClickLeftIcon: PropTypes.func,
  onClickRgIconSt: PropTypes.func,
  onClickRgIconNd: PropTypes.func
};
var AtNoticebar = /** @class */function (_super) {
  __extends(AtNoticebar, _super);
  function AtNoticebar(props) {
    var _this = _super.call(this, props) || this;
    var animElemId = "J_" + Math.ceil(Math.random() * 10e5).toString(36);
    _this.state = {
      show: true,
      animElemId: animElemId,
      animationData: {
        actions: [{}]
      },
      dura: 15,
      isWEAPP: _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEAPP,
      isALIPAY: _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.ALIPAY,
      isWEB: _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEB
    };
    return _this;
  }
  AtNoticebar.prototype.onClose = function (event) {
    this.setState({
      show: false
    });
    this.props.onClose && this.props.onClose(event);
  };
  AtNoticebar.prototype.onGotoMore = function (event) {
    this.props.onGotoMore && this.props.onGotoMore(event);
  };
  AtNoticebar.prototype.UNSAFE_componentWillReceiveProps = function () {
    if (!this.timeout) {
      this.interval && clearInterval(this.interval);
      this.initAnimation();
    }
  };
  AtNoticebar.prototype.componentDidMount = function () {
    if (!this.props.marquee) return;
    this.initAnimation();
  };
  AtNoticebar.prototype.initAnimation = function () {
    var _this = this;
    var _a = this.state,
      isWEAPP = _a.isWEAPP,
      isALIPAY = _a.isALIPAY;
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    this.timeout = setTimeout(function () {
      _this.timeout = null;
      if (_this.state.isWEB) {
        var _a = _this.props.speed,
          speed = _a === void 0 ? 100 : _a;
        var elem = document.querySelector("." + _this.state.animElemId);
        if (!elem) return;
        var width = elem.getBoundingClientRect().width;
        var dura = width / +speed;
        _this.setState({
          dura: dura
        });
      } else if (isWEAPP || isALIPAY) {
        var query = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.createSelectorQuery();
        query.select("." + _this.state.animElemId).boundingClientRect().exec(function (res) {
          var queryRes = res[0];
          if (!queryRes) return;
          var width = queryRes.width;
          var _a = _this.props.speed,
            speed = _a === void 0 ? 100 : _a;
          var dura = width / +speed;
          var animation = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.createAnimation({
            duration: dura * 1000,
            timingFunction: 'linear'
          });
          var resetAnimation = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.createAnimation({
            duration: 0,
            timingFunction: 'linear'
          });
          var resetOpacityAnimation = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.createAnimation({
            duration: 0,
            timingFunction: 'linear'
          });
          var animBody = function animBody() {
            resetOpacityAnimation.opacity(0).step();
            _this.setState({
              animationData: resetOpacityAnimation.export()
            });
            setTimeout(function () {
              resetAnimation.translateX(0).step();
              _this.setState({
                animationData: resetAnimation.export()
              });
            }, 300);
            setTimeout(function () {
              resetOpacityAnimation.opacity(1).step();
              _this.setState({
                animationData: resetOpacityAnimation.export()
              });
            }, 600);
            setTimeout(function () {
              animation.translateX(-width).step();
              _this.setState({
                animationData: animation.export()
              });
            }, 900);
          };
          animBody();
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          _this.interval = setInterval(animBody, dura * 1000 + 1000);
        });
      }
    }, 1000);
  };
  AtNoticebar.prototype.render = function () {
    var _a = this.props,
      single = _a.single,
      icon = _a.icon,
      marquee = _a.marquee,
      customStyle = _a.customStyle,
      className = _a.className,
      _b = _a.moreText,
      moreText = _b === void 0 ? '查看详情' : _b;
    var _c = this.props,
      showMore = _c.showMore,
      close = _c.close;
    var _d = this.state,
      dura = _d.dura,
      show = _d.show,
      animElemId = _d.animElemId,
      animationData = _d.animationData,
      isWEAPP = _d.isWEAPP,
      isALIPAY = _d.isALIPAY;
    var rootClassName = ['at-noticebar'];
    if (!single) showMore = false;
    var style = {};
    var innerClassName = ['at-noticebar__content-inner'];
    if (marquee) {
      close = false;
      style['animation-duration'] = dura + "s";
      innerClassName.push(animElemId);
    }
    var classObject = {
      'at-noticebar--marquee': marquee,
      'at-noticebar--weapp': marquee && (isWEAPP || isALIPAY),
      'at-noticebar--single': !marquee && single
    };
    var iconClass = ['at-icon'];
    if (icon) iconClass.push("at-icon-" + icon);
    return show && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: classnames(rootClassName, classObject, className),
      style: customStyle
    }, close && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-noticebar__close',
      onClick: this.onClose.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
      className: 'at-icon at-icon-close'
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-noticebar__content'
    }, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-noticebar__content-icon'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
      className: classnames(iconClass, iconClass)
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-noticebar__content-text'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      id: animElemId,
      animation: animationData,
      className: classnames(innerClassName),
      style: style
    }, this.props.children))), showMore && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-noticebar__more',
      onClick: this.onGotoMore.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
      className: 'text'
    }, moreText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-noticebar__more-icon'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
      className: 'at-icon at-icon-chevron-right'
    }))));
  };
  return AtNoticebar;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtNoticebar.defaultProps = {
  close: false,
  single: false,
  marquee: false,
  speed: 100,
  moreText: '查看详情',
  showMore: false,
  icon: '',
  customStyle: {}
};
AtNoticebar.propTypes = {
  close: PropTypes.bool,
  single: PropTypes.bool,
  marquee: PropTypes.bool,
  speed: PropTypes.number,
  moreText: PropTypes.string,
  showMore: PropTypes.bool,
  icon: PropTypes.string,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  onClose: PropTypes.func,
  onGotoMore: PropTypes.func
};
var MIN_MAXPAGE = 1;
var getMaxPage = function getMaxPage(maxPage) {
  if (maxPage === void 0) {
    maxPage = 0;
  }
  if (maxPage <= 0) return MIN_MAXPAGE;
  return maxPage;
};
var createPickerRange = function createPickerRange(max) {
  var range = new Array(max).fill(0).map(function (_val, index) {
    return index + 1;
  });
  return range;
};
var AtPagination = /** @class */function (_super) {
  __extends(AtPagination, _super);
  function AtPagination(props) {
    var _this = _super.call(this, props) || this;
    var _a = _this.props,
      current = _a.current,
      _b = _a.pageSize,
      pageSize = _b === void 0 ? 20 : _b,
      total = _a.total;
    var maxPage = getMaxPage(Math.ceil(total / pageSize));
    _this.state = {
      currentPage: current || 1,
      maxPage: maxPage,
      pickerRange: createPickerRange(maxPage)
    };
    return _this;
  }
  AtPagination.prototype.onPrev = function () {
    var currentPage = this.state.currentPage;
    var originCur = currentPage;
    currentPage -= 1;
    currentPage = Math.max(1, currentPage);
    if (originCur === currentPage) return;
    this.props.onPageChange && this.props.onPageChange({
      type: 'prev',
      current: currentPage
    });
    this.setState({
      currentPage: currentPage
    });
  };
  AtPagination.prototype.onNext = function () {
    var currentPage = this.state.currentPage;
    var originCur = currentPage;
    var maxPage = this.state.maxPage;
    currentPage += 1;
    currentPage = Math.min(maxPage, currentPage);
    if (originCur === currentPage) return;
    this.props.onPageChange && this.props.onPageChange({
      type: 'next',
      current: currentPage
    });
    this.setState({
      currentPage: currentPage
    });
  };
  AtPagination.prototype.UNSAFE_componentWillReceiveProps = function (props) {
    var total = props.total,
      _a = props.pageSize,
      pageSize = _a === void 0 ? 20 : _a,
      current = props.current;
    var maxPage = getMaxPage(Math.ceil(total / pageSize));
    if (maxPage !== this.state.maxPage) {
      this.setState({
        maxPage: maxPage,
        pickerRange: createPickerRange(maxPage)
      });
    }
    if (typeof current === 'number' && current !== this.state.currentPage) {
      this.setState({
        currentPage: current
      });
    }
  };
  // onPickerChange (evt) {
  //   const { value } = evt.detail
  //   const current = +value + 1
  //   if (current === this.state.currentPage) return
  //   this.props.onPageChange && this.props.onPageChange({ type: 'pick', current })
  //   this.setState({
  //     currentPage: current,
  //   })
  // }
  AtPagination.prototype.render = function () {
    var _a = this.props,
      icon = _a.icon,
      // pickerSelect,
      customStyle = _a.customStyle;
    var _b = this.state,
      currentPage = _b.currentPage,
      maxPage = _b.maxPage
      // pickerRange,
    ;

    var rootClassName = ['at-pagination'];
    var prevDisabled = maxPage === MIN_MAXPAGE || currentPage === 1;
    var nextDisabled = maxPage === MIN_MAXPAGE || currentPage === maxPage;
    var classObject = {
      'at-pagination--icon': icon
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: classnames(rootClassName, classObject, this.props.className),
      style: customStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-pagination__btn-prev'
    }, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtButton, {
      onClick: this.onPrev.bind(this),
      size: 'small',
      disabled: prevDisabled
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
      className: 'at-icon at-icon-chevron-left'
    })), !icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtButton, {
      onClick: this.onPrev.bind(this),
      size: 'small',
      disabled: prevDisabled
    }, "\u4E0A\u4E00\u9875")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-pagination__number'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
      className: 'at-pagination__number-current'
    }, currentPage), "/", maxPage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-pagination__btn-next'
    }, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtButton, {
      onClick: this.onNext.bind(this),
      size: 'small',
      disabled: nextDisabled
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
      className: 'at-icon at-icon-chevron-right'
    })), !icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtButton, {
      onClick: this.onNext.bind(this),
      size: 'small',
      disabled: nextDisabled
    }, "\u4E0B\u4E00\u9875")));
  };
  return AtPagination;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtPagination.defaultProps = {
  current: 1,
  total: 0,
  pageSize: 20,
  icon: false,
  customStyle: {}
};
AtPagination.propTypes = {
  current: PropTypes.number,
  total: PropTypes.number,
  pageSize: PropTypes.number,
  icon: PropTypes.bool,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  onPageChange: PropTypes.func
};
var AtProgress = /** @class */function (_super) {
  __extends(AtProgress, _super);
  function AtProgress() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AtProgress.prototype.render = function () {
    var _a;
    var color = this.props.color;
    var percent = this.props.percent;
    var _b = this.props,
      strokeWidth = _b.strokeWidth,
      status = _b.status,
      isHidePercent = _b.isHidePercent;
    if (typeof percent !== 'number') {
      percent = 0;
    }
    if (percent < 0) {
      percent = 0;
    } else if (percent > 100) {
      percent = 100;
    }
    var rootClass = classnames('at-progress', (_a = {}, _a["at-progress--" + status] = !!status, _a), this.props.className);
    var iconClass = classnames('at-icon', {
      'at-icon-close-circle': status === 'error',
      'at-icon-check-circle': status === 'success'
    });
    var progressStyle = {
      width: percent && +percent + "%",
      height: strokeWidth && +strokeWidth + "px",
      backgroundColor: color
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: rootClass
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-progress__outer'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-progress__outer-inner'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-progress__outer-inner-background',
      style: progressStyle
    }))), !isHidePercent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-progress__content'
    }, !status || status === 'progress' ? percent + "%" : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
      className: iconClass
    })));
  };
  return AtProgress;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtProgress.propTypes = {
  color: PropTypes.string,
  status: PropTypes.string,
  percent: PropTypes.number,
  strokeWidth: PropTypes.number,
  isHidePercent: PropTypes.bool
};
var AtRadio = /** @class */function (_super) {
  __extends(AtRadio, _super);
  function AtRadio() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AtRadio.prototype.handleClick = function (option, event) {
    if (option.disabled) return;
    this.props.onClick(option.value, event);
  };
  AtRadio.prototype.render = function () {
    var _this = this;
    var _a = this.props,
      customStyle = _a.customStyle,
      className = _a.className,
      options = _a.options,
      value = _a.value;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: classnames('at-radio', className),
      style: customStyle
    }, options.map(function (option) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        key: option.value,
        onClick: _this.handleClick.bind(_this, option),
        className: classnames({
          'at-radio__option': true,
          'at-radio__option--disabled': option.disabled
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: 'at-radio__option-wrap'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: 'at-radio__option-container'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: 'at-radio__title'
      }, option.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: classnames({
          'at-radio__icon': true,
          'at-radio__icon--checked': value === option.value
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
        className: 'at-icon at-icon-check'
      }))), option.desc && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: 'at-radio__desc'
      }, option.desc)));
    }));
  };
  return AtRadio;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtRadio.defaultProps = {
  customStyle: '',
  className: '',
  value: '',
  options: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: function onClick() {}
};
AtRadio.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  value: PropTypes.string,
  options: PropTypes.array,
  onClick: PropTypes.func
};
var AtRate = /** @class */function (_super) {
  __extends(AtRate, _super);
  function AtRate() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AtRate.prototype.handleClick = function (event) {
    this.props.onChange && this.props.onChange(event);
  };
  AtRate.prototype.render = function () {
    var _this = this;
    var _a = this.props,
      customStyle = _a.customStyle,
      className = _a.className,
      _b = _a.value,
      value = _b === void 0 ? 0 : _b,
      _c = _a.max,
      max = _c === void 0 ? 5 : _c,
      size = _a.size,
      _d = _a.margin,
      margin = _d === void 0 ? 5 : _d;
    var iconStyle = {
      marginRight: pxTransform(margin)
    };
    var starIconStyle = {
      fontSize: size ? size + "px" : ''
    };
    // 生成星星颜色 className 数组，方便在jsx中直接map
    var classNameArr = [];
    var floorValue = Math.floor(value);
    var ceilValue = Math.ceil(value);
    for (var i = 0; i < max; i++) {
      if (floorValue > i) {
        classNameArr.push('at-rate__icon at-rate__icon--on');
      } else if (ceilValue - 1 === i) {
        classNameArr.push('at-rate__icon at-rate__icon--half');
      } else {
        classNameArr.push('at-rate__icon at-rate__icon--off');
      }
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: classnames('at-rate', className),
      style: customStyle
    }, classNameArr.map(function (cls, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: cls,
        key: "at-rate-star-" + i,
        style: iconStyle,
        onClick: _this.handleClick.bind(_this, i + 1)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
        className: 'at-icon at-icon-star-2',
        style: starIconStyle
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: 'at-rate__left'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
        className: 'at-icon at-icon-star-2',
        style: starIconStyle
      })));
    }));
  };
  return AtRate;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtRate.defaultProps = {
  customStyle: '',
  className: '',
  size: 0,
  value: 0,
  max: 5,
  margin: 5
};
AtRate.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.number,
  max: PropTypes.number,
  margin: PropTypes.number,
  onChange: PropTypes.func
};
var AtSegmentedControl = /** @class */function (_super) {
  __extends(AtSegmentedControl, _super);
  function AtSegmentedControl() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AtSegmentedControl.prototype.handleClick = function (index, event) {
    if (this.props.disabled) return;
    this.props.onClick(index, event);
  };
  AtSegmentedControl.prototype.render = function () {
    var _this = this;
    var _a = this.props,
      _b = _a.customStyle,
      customStyle = _b === void 0 ? '' : _b,
      className = _a.className,
      disabled = _a.disabled,
      values = _a.values,
      selectedColor = _a.selectedColor,
      current = _a.current,
      color = _a.color,
      _c = _a.fontSize,
      fontSize = _c === void 0 ? 28 : _c;
    var rootStyle = {
      borderColor: selectedColor
    };
    var itemStyle = {
      color: selectedColor,
      fontSize: pxTransform(fontSize),
      borderColor: selectedColor,
      backgroundColor: color
    };
    var selectedItemStyle = {
      color: color,
      fontSize: pxTransform(fontSize),
      borderColor: selectedColor,
      backgroundColor: selectedColor
    };
    var rootCls = classnames('at-segmented-control', {
      'at-segmented-control--disabled': disabled
    }, className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: rootCls,
      style: mergeStyle(rootStyle, customStyle)
    }, values.map(function (value, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: classnames('at-segmented-control__item', {
          'at-segmented-control__item--active': current === i
        }),
        style: current === i ? selectedItemStyle : itemStyle,
        key: value,
        onClick: _this.handleClick.bind(_this, i)
      }, value);
    }));
  };
  return AtSegmentedControl;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtSegmentedControl.defaultProps = {
  customStyle: '',
  className: '',
  current: 0,
  color: '',
  fontSize: 28,
  disabled: false,
  selectedColor: '',
  values: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: function onClick() {}
};
AtSegmentedControl.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  current: PropTypes.number,
  color: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  values: PropTypes.array,
  onClick: PropTypes.func
};
var AtSwitch = /** @class */function (_super) {
  __extends(AtSwitch, _super);
  function AtSwitch() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.handleChange = function (event) {
      var _a = event.detail,
        value = _a.value,
        checked = _a.checked;
      var state = typeof value === 'undefined' ? checked : value;
      _this.props.onChange && _this.props.onChange(state);
    };
    return _this;
  }
  AtSwitch.prototype.render = function () {
    var _a = this.props,
      customStyle = _a.customStyle,
      className = _a.className,
      disabled = _a.disabled,
      border = _a.border,
      title = _a.title,
      checked = _a.checked,
      color = _a.color;
    var rootCls = classnames('at-switch', {
      'at-switch--without-border': !border
    }, className);
    var containerCls = classnames('at-switch__container', {
      'at-switch--disabled': disabled
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: rootCls,
      style: customStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-switch__title'
    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: containerCls
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-switch__mask'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Switch */ "q"], {
      className: 'at-switch__switch',
      checked: checked,
      color: color,
      onChange: this.handleChange
    })));
  };
  return AtSwitch;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtSwitch.defaultProps = {
  customStyle: '',
  className: '',
  title: '',
  color: '#6190e8',
  border: true,
  disabled: false,
  checked: false
};
AtSwitch.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  title: PropTypes.string,
  color: PropTypes.string,
  checked: PropTypes.bool,
  border: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};
var AtTabBar = /** @class */function (_super) {
  __extends(AtTabBar, _super);
  function AtTabBar() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  // constructor () {
  //   super(...arguments)
  //   this.state = {
  //     isIPhoneX: false
  //   }
  // }
  // componentDidMount () {
  //   const curEnv = Taro.getEnv()
  //   if (
  //     curEnv === Taro.ENV_TYPE.WEAPP &&
  //     Taro.getSystemInfoSync().model.indexOf('iPhone X') >= 0
  //   ) {
  //     this.setState({ isIPhoneX: true })
  //   }
  // }
  AtTabBar.prototype.handleClick = function (index, event) {
    this.props.onClick(index, event);
  };
  AtTabBar.prototype.render = function () {
    var _this = this;
    var _a = this.props,
      _b = _a.customStyle,
      customStyle = _b === void 0 ? '' : _b,
      className = _a.className,
      fixed = _a.fixed,
      backgroundColor = _a.backgroundColor,
      tabList = _a.tabList,
      current = _a.current,
      color = _a.color,
      iconSize = _a.iconSize,
      fontSize = _a.fontSize,
      selectedColor = _a.selectedColor;
    // const { isIPhoneX } = this.state
    var defaultStyle = {
      color: color || ''
    };
    var selectedStyle = {
      color: selectedColor || ''
    };
    var titleStyle = {
      fontSize: fontSize ? fontSize + "px" : ''
    };
    var rootStyle = {
      backgroundColor: backgroundColor || ''
    };
    var imgStyle = {
      width: iconSize + "px",
      height: iconSize + "px"
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: classnames({
        'at-tab-bar': true,
        'at-tab-bar--fixed': fixed
        // 'at-tab-bar--ipx': isIPhoneX
      }, className),
      style: mergeStyle(rootStyle, customStyle)
    }, tabList.map(function (item, i) {
      var _a;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: classnames('at-tab-bar__item', {
          'at-tab-bar__item--active': current === i
        }),
        style: current === i ? selectedStyle : defaultStyle,
        key: item.title,
        onClick: _this.handleClick.bind(_this, i)
      }, item.iconType ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtBadge, {
        dot: !!item.dot,
        value: item.text,
        maxValue: Number(item.max)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: 'at-tab-bar__icon'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
        className: classnames("" + (item.iconPrefixClass || 'at-icon'), (_a = {}, _a[(item.iconPrefixClass || 'at-icon') + "-" + item.selectedIconType] = current === i && item.selectedIconType, _a[(item.iconPrefixClass || 'at-icon') + "-" + item.iconType] = !(current === i && item.selectedIconType), _a)),
        style: {
          color: current === i ? selectedColor : color,
          fontSize: iconSize ? iconSize + "px" : ''
        }
      }))) : null, item.image ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtBadge, {
        dot: !!item.dot,
        value: item.text,
        maxValue: Number(item.max)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: 'at-tab-bar__icon'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "d"], {
        className: classnames('at-tab-bar__inner-img', {
          'at-tab-bar__inner-img--inactive': current !== i
        }),
        mode: 'widthFix',
        src: item.selectedImage || item.image,
        style: imgStyle
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "d"], {
        className: classnames('at-tab-bar__inner-img', {
          'at-tab-bar__inner-img--inactive': current === i
        }),
        mode: 'widthFix',
        src: item.image,
        style: imgStyle
      }))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtBadge, {
        dot: item.iconType || item.image ? false : !!item.dot,
        value: item.iconType || item.image ? '' : item.text,
        maxValue: item.iconType || item.image ? 0 : Number(item.max)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: 'at-tab-bar__title',
        style: titleStyle
      }, item.title))));
    }));
  };
  return AtTabBar;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtTabBar.defaultProps = {
  customStyle: '',
  className: '',
  fixed: false,
  current: 0,
  tabList: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: function onClick() {}
};
AtTabBar.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  fixed: PropTypes.bool,
  backgroundColor: PropTypes.string,
  current: PropTypes.number,
  iconSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
  selectedColor: PropTypes.string,
  tabList: PropTypes.array,
  onClick: PropTypes.func
};
var ENV$3 = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv();
var MIN_DISTANCE = 100;
var MAX_INTERVAL = 10;
var AtTabs = /** @class */function (_super) {
  __extends(AtTabs, _super);
  function AtTabs(props) {
    var _this = _super.call(this, props) || this;
    _this.updateState = function (idx) {
      if (_this.props.scroll) {
        // 标签栏滚动
        switch (ENV$3) {
          case _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEAPP:
          case _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.ALIPAY:
          case _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.SWAN:
            {
              var index = Math.max(idx - 1, 0);
              _this.setState({
                _scrollIntoView: "tab" + _this._tabId + index
              });
              break;
            }
          case _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEB:
            {
              var index = Math.max(idx - 1, 0);
              var prevTabItem = _this.tabHeaderRef.children[index];
              prevTabItem && _this.setState({
                _scrollTop: prevTabItem.offsetTop,
                _scrollLeft: prevTabItem.offsetLeft
              });
              break;
            }
          default:
            {
              console.warn('AtTab 组件在该环境还未适配');
              break;
            }
        }
      }
    };
    _this.state = {
      _scrollLeft: 0,
      _scrollTop: 0,
      _scrollIntoView: ''
    };
    _this._tabId = isTest() ? 'tabs-AOTU2018' : uuid();
    // 触摸时的原点
    _this._touchDot = 0;
    // 定时器
    _this._timer = null;
    // 滑动时间间隔
    _this._interval = 0;
    // 是否已经在滑动
    _this._isMoving = false;
    return _this;
  }
  AtTabs.prototype.handleClick = function (index, event) {
    this.props.onClick(index, event);
  };
  AtTabs.prototype.handleTouchStart = function (e) {
    var _this = this;
    var _a = this.props,
      swipeable = _a.swipeable,
      tabDirection = _a.tabDirection;
    if (!swipeable || tabDirection === 'vertical') return;
    // 获取触摸时的原点
    this._touchDot = e.touches[0].pageX;
    // 使用js计时器记录时间
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    this._timer = setInterval(function () {
      _this._interval++;
    }, 100);
  };
  AtTabs.prototype.handleTouchMove = function (e) {
    var _a = this.props,
      swipeable = _a.swipeable,
      tabDirection = _a.tabDirection,
      current = _a.current,
      tabList = _a.tabList;
    if (!swipeable || tabDirection === 'vertical') return;
    var touchMove = e.touches[0].pageX;
    var moveDistance = touchMove - this._touchDot;
    var maxIndex = tabList.length;
    if (!this._isMoving && this._interval < MAX_INTERVAL && this._touchDot > 20) {
      // 向左滑动
      if (current + 1 < maxIndex && moveDistance <= -MIN_DISTANCE) {
        this._isMoving = true;
        this.handleClick(current + 1, e);
        // 向右滑动
      } else if (current - 1 >= 0 && moveDistance >= MIN_DISTANCE) {
        this._isMoving = true;
        this.handleClick(current - 1, e);
      }
    }
  };
  AtTabs.prototype.handleTouchEnd = function () {
    var _a = this.props,
      swipeable = _a.swipeable,
      tabDirection = _a.tabDirection;
    if (!swipeable || tabDirection === 'vertical') return;
    clearInterval(this._timer);
    this._interval = 0;
    this._isMoving = false;
  };
  AtTabs.prototype.getTabHeaderRef = function () {
    if (ENV$3 === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEB) {
      this.tabHeaderRef = document.getElementById(this._tabId);
    }
  };
  AtTabs.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    if (nextProps.scroll !== this.props.scroll) {
      this.getTabHeaderRef();
    }
    if (nextProps.current !== this.props.current) {
      this.updateState(nextProps.current);
    }
  };
  AtTabs.prototype.componentDidMount = function () {
    this.getTabHeaderRef();
    this.updateState(this.props.current);
  };
  AtTabs.prototype.componentWillUnmount = function () {
    this.tabHeaderRef = null;
  };
  AtTabs.prototype.render = function () {
    var _a;
    var _this = this;
    var _b = this.props,
      _c = _b.customStyle,
      customStyle = _c === void 0 ? '' : _c,
      className = _b.className,
      height = _b.height,
      tabDirection = _b.tabDirection,
      animated = _b.animated,
      tabList = _b.tabList,
      scroll = _b.scroll,
      current = _b.current;
    var _d = this.state,
      _scrollLeft = _d._scrollLeft,
      _scrollTop = _d._scrollTop,
      _scrollIntoView = _d._scrollIntoView;
    var heightStyle = {
      height: height
    };
    var underlineStyle = {
      height: tabDirection === 'vertical' ? tabList.length * 100 + "%" : '1PX',
      width: tabDirection === 'horizontal' ? tabList.length * 100 + "%" : '1PX'
    };
    var bodyStyle = {};
    var transformStyle = "translate3d(0px, -" + current * 100 + "%, 0px)";
    if (tabDirection === 'horizontal') {
      transformStyle = "translate3d(-" + current * 100 + "%, 0px, 0px)";
    }
    Object.assign(bodyStyle, {
      transform: transformStyle,
      '-webkit-transform': transformStyle
    });
    if (!animated) {
      bodyStyle.transition = 'unset';
    }
    var tabItems = tabList.map(function (item, idx) {
      var itemCls = classnames({
        'at-tabs__item': true,
        'at-tabs__item--active': current === idx
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: itemCls,
        id: "tab" + _this._tabId + idx,
        key: "at-tabs-item-" + idx,
        onClick: _this.handleClick.bind(_this, idx)
      }, item.title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: 'at-tabs__item-underline'
      }));
    });
    var rootCls = classnames((_a = {
      'at-tabs': true,
      'at-tabs--scroll': scroll
    }, _a["at-tabs--" + tabDirection] = true, _a["at-tabs--" + ENV$3] = true, _a), className);
    var scrollX = tabDirection === 'horizontal';
    var scrollY = tabDirection === 'vertical';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: rootCls,
      style: mergeStyle(heightStyle, customStyle)
    }, scroll ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* ScrollView */ "m"], {
      id: this._tabId,
      className: 'at-tabs__header',
      style: heightStyle,
      scrollX: scrollX,
      scrollY: scrollY,
      scrollWithAnimation: true,
      scrollLeft: _scrollLeft,
      scrollTop: _scrollTop,
      scrollIntoView: _scrollIntoView
    }, tabItems) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      id: this._tabId,
      className: 'at-tabs__header'
    }, tabItems), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-tabs__body',
      onTouchStart: this.handleTouchStart.bind(this),
      onTouchEnd: this.handleTouchEnd.bind(this),
      onTouchMove: this.handleTouchMove.bind(this),
      style: mergeStyle(bodyStyle, heightStyle)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-tabs__underline',
      style: underlineStyle
    }), this.props.children));
  };
  return AtTabs;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtTabs.defaultProps = {
  customStyle: '',
  className: '',
  tabDirection: 'horizontal',
  height: '',
  current: 0,
  swipeable: true,
  scroll: false,
  animated: true,
  tabList: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: function onClick() {}
};
AtTabs.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  height: PropTypes.string,
  tabDirection: PropTypes.oneOf(['horizontal', 'vertical']),
  current: PropTypes.number,
  swipeable: PropTypes.bool,
  scroll: PropTypes.bool,
  animated: PropTypes.bool,
  tabList: PropTypes.array,
  onClick: PropTypes.func
};
var AtTabsPane = /** @class */function (_super) {
  __extends(AtTabsPane, _super);
  function AtTabsPane() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AtTabsPane.prototype.render = function () {
    var _a = this.props,
      customStyle = _a.customStyle,
      className = _a.className,
      tabDirection = _a.tabDirection,
      index = _a.index,
      current = _a.current;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: classnames({
        'at-tabs-pane': true,
        'at-tabs-pane--vertical': tabDirection === 'vertical',
        'at-tabs-pane--active': index === current,
        'at-tabs-pane--inactive': index !== current
      }, className),
      style: customStyle
    }, this.props.children);
  };
  return AtTabsPane;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtTabsPane.defaultProps = {
  customStyle: '',
  className: '',
  tabDirection: 'horizontal',
  index: 0,
  current: 0
};
AtTabsPane.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  tabDirection: PropTypes.oneOf(['horizontal', 'vertical']),
  index: PropTypes.number,
  current: PropTypes.number
};
var SIZE_CLASS = {
  normal: 'normal',
  small: 'small'
};
var TYPE_CLASS = {
  primary: 'primary'
};
var AtTag = /** @class */function (_super) {
  __extends(AtTag, _super);
  function AtTag() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AtTag.prototype.onClick = function (event) {
    var _a = this.props,
      _b = _a.name,
      name = _b === void 0 ? '' : _b,
      _c = _a.active,
      active = _c === void 0 ? false : _c,
      disabled = _a.disabled,
      onClick = _a.onClick;
    if (!disabled) {
      typeof onClick === 'function' && onClick({
        name: name,
        active: active
      }, event);
    }
  };
  AtTag.prototype.render = function () {
    var _a;
    var _b = this.props,
      _c = _b.size,
      size = _c === void 0 ? 'normal' : _c,
      _d = _b.type,
      type = _d === void 0 ? '' : _d,
      _e = _b.circle,
      circle = _e === void 0 ? false : _e,
      _f = _b.disabled,
      disabled = _f === void 0 ? false : _f,
      _g = _b.active,
      active = _g === void 0 ? false : _g,
      customStyle = _b.customStyle;
    var rootClassName = ['at-tag'];
    var classObject = (_a = {}, _a["at-tag--" + SIZE_CLASS[size]] = SIZE_CLASS[size], _a["at-tag--" + type] = TYPE_CLASS[type], _a['at-tag--disabled'] = disabled, _a['at-tag--active'] = active, _a['at-tag--circle'] = circle, _a);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: classnames(rootClassName, classObject, this.props.className),
      style: customStyle,
      onClick: this.onClick.bind(this)
    }, this.props.children);
  };
  return AtTag;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtTag.defaultProps = {
  size: 'normal',
  type: '',
  name: '',
  circle: false,
  active: false,
  disabled: false,
  customStyle: {}
};
AtTag.propTypes = {
  size: PropTypes.oneOf(['normal', 'small']),
  type: PropTypes.oneOf(['', 'primary']),
  name: PropTypes.string,
  circle: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  onClick: PropTypes.func
};
function getMaxLength(maxLength, textOverflowForbidden) {
  if (!textOverflowForbidden) {
    return maxLength + 500;
  }
  return maxLength;
}
var ENV$2 = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv();
var AtTextarea = /** @class */function (_super) {
  __extends(AtTextarea, _super);
  function AtTextarea() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.handleInput = function (event) {
      _this.props.onChange(event.detail.value, event);
    };
    _this.handleFocus = function (event) {
      _this.props.onFocus && _this.props.onFocus(event);
    };
    _this.handleBlur = function (event) {
      _this.props.onBlur && _this.props.onBlur(event);
    };
    _this.handleConfirm = function (event) {
      _this.props.onConfirm && _this.props.onConfirm(event);
    };
    _this.handleLinechange = function (event) {
      _this.props.onLinechange && _this.props.onLinechange(event);
    };
    return _this;
  }
  AtTextarea.prototype.render = function () {
    var _a = this.props,
      customStyle = _a.customStyle,
      className = _a.className,
      value = _a.value,
      cursorSpacing = _a.cursorSpacing,
      placeholder = _a.placeholder,
      placeholderStyle = _a.placeholderStyle,
      placeholderClass = _a.placeholderClass,
      _b = _a.maxLength,
      maxLength = _b === void 0 ? 200 : _b,
      count = _a.count,
      disabled = _a.disabled,
      autoFocus = _a.autoFocus,
      focus = _a.focus,
      showConfirmBar = _a.showConfirmBar,
      selectionStart = _a.selectionStart,
      selectionEnd = _a.selectionEnd,
      fixed = _a.fixed,
      _c = _a.textOverflowForbidden,
      textOverflowForbidden = _c === void 0 ? true : _c,
      height = _a.height;
    var _maxLength = parseInt(maxLength.toString());
    var actualMaxLength = getMaxLength(_maxLength, textOverflowForbidden);
    var textareaStyle = height ? "height:" + pxTransform(Number(height)) : '';
    var rootCls = classnames('at-textarea', "at-textarea--" + ENV$2, {
      'at-textarea--error': _maxLength < value.length
    }, className);
    var placeholderCls = classnames('placeholder', placeholderClass);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: rootCls,
      style: customStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Textarea */ "s"], {
      className: 'at-textarea__textarea',
      style: textareaStyle,
      placeholderStyle: placeholderStyle,
      placeholderClass: placeholderCls,
      cursorSpacing: cursorSpacing,
      value: value,
      maxlength: actualMaxLength,
      placeholder: placeholder,
      disabled: disabled,
      autoFocus: autoFocus,
      focus: focus,
      showConfirmBar: showConfirmBar,
      selectionStart: selectionStart,
      selectionEnd: selectionEnd,
      fixed: fixed,
      onInput: this.handleInput,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onConfirm: this.handleConfirm,
      onLineChange: this.handleLinechange
    }), count && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-textarea__counter'
    }, value.length, "/", _maxLength));
  };
  return AtTextarea;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtTextarea.defaultProps = {
  customStyle: '',
  className: '',
  value: '',
  cursorSpacing: 100,
  maxLength: 200,
  placeholder: '',
  disabled: false,
  autoFocus: false,
  focus: false,
  showConfirmBar: false,
  selectionStart: -1,
  selectionEnd: -1,
  count: true,
  fixed: false,
  height: '',
  textOverflowForbidden: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: function onChange() {}
};
AtTextarea.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  value: PropTypes.string.isRequired,
  cursorSpacing: PropTypes.number,
  maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholderClass: PropTypes.string,
  placeholderStyle: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  focus: PropTypes.bool,
  showConfirmBar: PropTypes.bool,
  selectionStart: PropTypes.number,
  selectionEnd: PropTypes.number,
  count: PropTypes.bool,
  textOverflowForbidden: PropTypes.bool,
  fixed: PropTypes.bool,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onLinechange: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onConfirm: PropTypes.func
};
var AtTimeline = /** @class */function (_super) {
  __extends(AtTimeline, _super);
  function AtTimeline() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AtTimeline.prototype.render = function () {
    var _a = this.props,
      pending = _a.pending,
      items = _a.items,
      customStyle = _a.customStyle;
    var rootClassName = ['at-timeline'];
    if (pending) rootClassName.push('at-timeline--pending');
    var rootClassObject = {
      'at-timeline--pending': pending
    };
    var itemElems = items.map(function (item, index) {
      var _a;
      var _b = item.title,
        title = _b === void 0 ? '' : _b,
        color = item.color,
        icon = item.icon,
        _c = item.content,
        content = _c === void 0 ? [] : _c;
      var iconClass = classnames((_a = {
        'at-icon': true
      }, _a["at-icon-" + icon] = icon, _a));
      var itemRootClassName = ['at-timeline-item'];
      if (color) itemRootClassName.push("at-timeline-item--" + color);
      var dotClass = [];
      if (icon) {
        dotClass.push('at-timeline-item__icon');
      } else {
        dotClass.push('at-timeline-item__dot');
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: classnames(itemRootClassName),
        key: "at-timeline-item-" + index
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: 'at-timeline-item__tail'
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: classnames(dotClass)
      }, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
        className: iconClass
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: 'at-timeline-item__content'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: 'at-timeline-item__content-item'
      }, title), content.map(function (sub, subIndex) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
          className: 'at-timeline-item__content-item at-timeline-item__content--sub',
          key: subIndex
        }, sub);
      })));
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: classnames(rootClassName, rootClassObject, this.props.className),
      style: customStyle
    }, itemElems);
  };
  return AtTimeline;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtTimeline.defaultProps = {
  pending: false,
  items: [],
  customStyle: {}
};
AtTimeline.propTypes = {
  pending: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.object),
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};
var error = "data:image/png;base64,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";
var success = "data:image/png;base64,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";
var loading = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAn1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Kd3m4AAAANHRSTlMA6AN+QRH69xUI7Z7x2sWzcWYvphvj4MxiXVIiGAuH08K9ibepmI+Oc2tKHQ+helY5NykfkF5N9AAABmhJREFUeNrdnWlT4kAQhjt3CARIwg1yH3Lpqv3/f9tabsYJMUGCsM6b56NVVjGV6WP6pLvTijTb8bS2X29U581BaBEmLY9T1LrVpukSGhFn06n2W4SExvn4q2ecL6PxeSbrPwRBxN/iG0NSHyHs55kGB1KdVqTxBTjLnU6qo1csdx+ag8CIujXOxe+pf5QEIzPYNDo5OnlbITD2/WObM9AeHwiOYbDMEB/PgHRiwo3GaWpbKFkR6LvI4RTdF4Lk0JtyihXk/Xrnbe2kRKVHoLjjlImphwSKZXicxH4iVB4eNU6ywPHy01SME1nRTIJluOAEtgFpU/4xaHOC2YhgeRjbJble9Dplid0nXHSDEzQJGFNjyZyAGc1YUgVWXqfXqwH3dsy7XnVUf/iD1oQ/mUCfxKonvgn07ao0EnKCLPGkVxO6i6AZl8SeEDVLYuNPToLsd53cLhvZF35HSrwG/D55R5daeAathKkiLaNB0FiTsohJS/sUE9wo0QcmCxaEjcEC3BjkB/rsU0xg48L/GH2KSZ2wkWICm3VIi4kH/V4k0qccsyJsXm2OAc0zfnWEu9g+Fz20OWZL2Aw4pgYu77QoiRtMQ0eoYMC6lWxj8kjYVDThz0PHHt95LIvievBEpRq4LSGjLL6jJepWfPRP8umo7AgbV9iSJYGzFvXC6lc+n+eNYwICR7ywpgROj2MQOgTOcXBK4gNTJEwJgbPjGJBOmlx04QOvCZyNKIkgcEKOAc8yyEa0ZwJnWZKgIwVlUcBDjsHqMc2gXY5yCKJjOaqGiPoiBkHg7EtjSUQ/I3gJAVGjHGVcRJuySLswiV0CxxQ5HwJnxDHoySsSoVPwkg6iLv9jQOBEZdG/Rjkqm4mCshgSkXRvEDhmSeq3KCzLa1c48u2PASxaBPvodUXGPR6J46GexBLVHMKiRIRJRWTgSBOfBhNd1M+SqKwDzVfLg4i8D2h5irxaHrZDL4Vdww6oSPUroo57gkQaRB/7iSVdlDp2iEs6jQ3st6J046vYJR3yYTXHrh+QT90mQztbMvgwwA46ynBQiB10lAE6i2MgW2CTIdMasiFJBrG7yPo3mVYQhmRDgCQTPU3kEFcy9WYip3iTyVCXcR350/R0B7cOIlkwIKX9SHDIEo7ksdoEx2lRTQu2Ejhd5uSjmsR04dkKtYMhXQr4zKBh03RxpsuYkZSv5bITTHfrawHzWtwtqEh2Rkn5H8jOq6wifx8xApHVdmEAdl5lNsIMARstZWtSVufVjGDIbhYLOOaNQMhp3zs4aN0xeQ2VS/F3kMyVbHHNU8pjgiC36Vj3oWZ0nGkD70HN6DjTmK93gGZ0nB2VsAWa0SGHV2DP6Pjmpz7CSIkc8HL+4jmKh1O+HbljgIxBlEOQ8pUzQtL9+7FUUnG1FVbBlwwK07sAjsr8ktFtLxxjv5KiXDhMb8UxU0UDKpeON7Q8xY3JxQMne8wqp6sLjACtqzxEu8hQ1tBWd4h2sTG5T+oO0S44uHihqpgUHSXtyiHaSpX+Fx/ubdoqLmG5Zty6oeASlqsG4Osz5ZawXLmSYKSptoSl8JIIKSZKOcLXr+3oK7WEJblIBXmdzM9+y5xVuV0/XTZ0VGNlXHL90/FKjafCyrhbLOSq1H9/ZdxtVqRZyZVxLSqKQkvrrPoPdpAqtUYweUO50Ipb1RY76sffWXGbXrV51G8SECt+vVRcftrkotdL1XW0fZsl01f6BoUXBJ98ZXv8QLmovrL5RO64PaAc1F+irRs2J1gMKQuIteYn14sdI0etAyyadxecRHtMiQrQ6v8nm5N4hkU3xTI8TmI/0Z0I63xCbezSzXDHNT6hHtL96Hl8grN+o5vwtnb4BK9Hd8VacYpZ70A/5NCbcYqVRffmpcspnGin09Xou8jhFN0X+g/o2xqn0TbhlWK30ThNbavT3ZHqJY22DIYFTV+wFKcoqAzvpPAl7WN/Txex7x/bLMk1T/ensu1wJp3GJjBHlMvIDDaNvP/dVuj/o/d8zqXWjYxgYIZ716roesVy96E5CIyoW+Nc/J5Ov4O+Wzp8I5zlTqdf5BBM+QZMAwXaC4aGzz/CN5SpdPuznvCVTNaKLatwn1c+F8RfPatZwd7qVzt8IZ1qX6nk9xdcs1kVOjZPM1ebpppf4itWOGjOq42639Y8x7YdT2v79UZ13hyEFt2Fv6Loy9OZgJFyAAAAAElFTkSuQmCC";
var statusImg = {
  error: error,
  success: success,
  loading: loading
};
var AtToast = /** @class */function (_super) {
  __extends(AtToast, _super);
  function AtToast(props) {
    var _this = _super.call(this, props) || this;
    _this.handleClick = function (event) {
      var _a = _this.props,
        onClick = _a.onClick,
        status = _a.status;
      if (status === 'loading') {
        return;
      }
      if (onClick) {
        return onClick(event);
      }
      _this.close();
    };
    var isOpened = props.isOpened,
      duration = props.duration;
    if (isOpened) {
      _this.makeTimer(duration || 0);
    }
    _this._timer = null;
    _this.state = {
      _isOpened: isOpened
    };
    return _this;
  }
  AtToast.prototype.clearTimmer = function () {
    if (this._timer) {
      clearTimeout(this._timer);
      this._timer = null;
    }
  };
  AtToast.prototype.makeTimer = function (duration) {
    var _this = this;
    if (duration === 0) {
      return;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    this._timer = setTimeout(function () {
      _this.close();
    }, +duration);
  };
  AtToast.prototype.close = function () {
    var _isOpened = this.state._isOpened;
    if (_isOpened) {
      this.setState({
        _isOpened: false
      }, this.handleClose // TODO: Fix dirty hack
      );

      this.clearTimmer();
    }
  };
  AtToast.prototype.handleClose = function (event) {
    // TODO: Fix dirty hack
    if (typeof this.props.onClose === 'function') {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.props.onClose(event);
    }
  };
  AtToast.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    var isOpened = nextProps.isOpened,
      duration = nextProps.duration;
    if (!isOpened) {
      this.close();
      return;
    }
    if (!this.state._isOpened) {
      this.setState({
        _isOpened: true
      });
    } else {
      this.clearTimmer();
    }
    this.makeTimer(duration || 0);
  };
  AtToast.prototype.render = function () {
    var _a, _b;
    var _isOpened = this.state._isOpened;
    var _c = this.props,
      customStyle = _c.customStyle,
      text = _c.text,
      icon = _c.icon,
      status = _c.status,
      image = _c.image,
      hasMask = _c.hasMask;
    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    var realImg = image || statusImg[status] || null;
    var isRenderIcon = !!(icon && !(image || statusImg[status]));
    /* eslint-enable @typescript-eslint/no-non-null-assertion */
    var bodyClass = classnames('toast-body', (_a = {
      'at-toast__body--custom-image': image,
      'toast-body--text': !realImg && !icon
    }, _a["at-toast__body--" + status] = !!status, _a));
    var iconClass = classnames('at-icon', (_b = {}, _b["at-icon-" + icon] = icon, _b));
    return _isOpened ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: classnames('at-toast', this.props.className)
    }, hasMask && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-toast__overlay'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: bodyClass,
      style: customStyle,
      onClick: this.handleClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'toast-body-content'
    }, realImg ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'toast-body-content__img'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "d"], {
      className: 'toast-body-content__img-item',
      src: realImg,
      mode: 'scaleToFill'
    })) : null, isRenderIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'toast-body-content__icon'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
      className: iconClass
    })), text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'toast-body-content__info'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], null, text))))) : null;
  };
  return AtToast;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtToast.defaultProps = {
  duration: 3000,
  isOpened: false
};
AtToast.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  hasMask: PropTypes.bool,
  image: PropTypes.string,
  isOpened: PropTypes.bool,
  duration: PropTypes.number,
  status: PropTypes.oneOf(['', 'error', 'loading', 'success']),
  onClick: PropTypes.func,
  onClose: PropTypes.func
};
var AtAccordion = /** @class */function (_super) {
  __extends(AtAccordion, _super);
  function AtAccordion(props) {
    var _this = _super.call(this, props) || this;
    _this.handleClick = function (event) {
      var open = _this.props.open;
      if (!_this.isCompleted) return;
      _this.props.onClick && _this.props.onClick(!open, event);
    };
    _this.isCompleted = true;
    _this.startOpen = false;
    _this.state = {
      wrapperHeight: 0
    };
    return _this;
  }
  AtAccordion.prototype.toggleWithAnimation = function () {
    var _this = this;
    var _a = this.props,
      open = _a.open,
      isAnimation = _a.isAnimation;
    if (!this.isCompleted || !isAnimation) return;
    this.isCompleted = false;
    delayQuerySelector('.at-accordion__body', 0).then(function (rect) {
      var height = parseInt(rect[0].height.toString());
      var startHeight = open ? height : 0;
      var endHeight = open ? 0 : height;
      _this.startOpen = false;
      _this.setState({
        wrapperHeight: startHeight
      }, function () {
        setTimeout(function () {
          _this.setState({
            wrapperHeight: endHeight
          }, function () {
            setTimeout(function () {
              _this.isCompleted = true;
              _this.setState({});
            }, 700);
          });
        }, 100);
      });
    });
  };
  AtAccordion.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    if (nextProps.open !== this.props.open) {
      this.startOpen = !!nextProps.open && !!nextProps.isAnimation;
      this.toggleWithAnimation();
    }
  };
  AtAccordion.prototype.render = function () {
    var _a;
    var _b = this.props,
      customStyle = _b.customStyle,
      className = _b.className,
      title = _b.title,
      icon = _b.icon,
      hasBorder = _b.hasBorder,
      open = _b.open,
      note = _b.note;
    var wrapperHeight = this.state.wrapperHeight;
    var rootCls = classnames('at-accordion', className);
    var prefixClass = icon && icon.prefixClass || 'at-icon';
    var iconCls = classnames((_a = {}, _a[prefixClass] = true, _a[prefixClass + "-" + (icon && icon.value)] = icon && icon.value, _a['at-accordion__icon'] = true, _a));
    var headerCls = classnames('at-accordion__header', {
      'at-accordion__header--noborder': !hasBorder
    });
    var arrowCls = classnames('at-accordion__arrow', {
      'at-accordion__arrow--folded': !!open
    });
    var contentCls = classnames('at-accordion__content', {
      'at-accordion__content--inactive': !open && this.isCompleted || this.startOpen
    });
    var iconStyle = {
      color: icon && icon.color || '',
      fontSize: icon && icon.size + "px" || ''
    };
    var contentStyle = {
      height: wrapperHeight + "px"
    };
    if (this.isCompleted) {
      contentStyle.height = '';
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: rootCls,
      style: customStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: headerCls,
      onClick: this.handleClick
    }, icon && icon.value && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
      className: iconCls,
      style: iconStyle
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-accordion__info'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-accordion__info__title'
    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-accordion__info__note'
    }, note)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: arrowCls
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
      className: 'at-icon at-icon-chevron-down'
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      style: contentStyle,
      className: contentCls
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-accordion__body'
    }, this.props.children)));
  };
  return AtAccordion;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtAccordion.defaultProps = {
  open: false,
  customStyle: '',
  className: '',
  title: '',
  note: '',
  icon: {
    value: ''
  },
  hasBorder: true,
  isAnimation: true
};
AtAccordion.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  open: PropTypes.bool,
  isAnimation: PropTypes.bool,
  title: PropTypes.string,
  note: PropTypes.string,
  icon: PropTypes.object,
  hasBorder: PropTypes.bool,
  onClick: PropTypes.func
};
var AtSlider = /** @class */function (_super) {
  __extends(AtSlider, _super);
  function AtSlider(props) {
    var _this = _super.call(this, props) || this;
    var _a = props.value,
      value = _a === void 0 ? 0 : _a,
      _b = props.min,
      min = _b === void 0 ? 0 : _b,
      _c = props.max,
      max = _c === void 0 ? 100 : _c;
    _this.state = {
      _value: AtSlider.clampNumber(value, min, max)
    };
    return _this;
  }
  AtSlider.clampNumber = function (value, lower, upper) {
    return Math.max(lower, Math.min(upper, value));
  };
  AtSlider.prototype.handleChanging = function (e) {
    var _value = this.state._value;
    var value = e.detail.value;
    if (value !== _value) {
      this.setState({
        _value: value
      });
    }
    this.props.onChanging && this.props.onChanging(value);
  };
  AtSlider.prototype.handleChange = function (e) {
    var value = e.detail.value;
    this.setState({
      _value: value
    });
    this.props.onChange && this.props.onChange(value);
  };
  AtSlider.prototype.UNSAFE_componentWillReceiveProps = function (props) {
    var _a = props.value,
      value = _a === void 0 ? 0 : _a,
      _b = props.min,
      min = _b === void 0 ? 0 : _b,
      _c = props.max,
      max = _c === void 0 ? 100 : _c;
    this.setState({
      _value: AtSlider.clampNumber(value, min, max)
    });
  };
  AtSlider.prototype.render = function () {
    var _value = this.state._value;
    var _a = this.props,
      customStyle = _a.customStyle,
      className = _a.className,
      min = _a.min,
      max = _a.max,
      step = _a.step,
      disabled = _a.disabled,
      activeColor = _a.activeColor,
      backgroundColor = _a.backgroundColor,
      blockSize = _a.blockSize,
      blockColor = _a.blockColor,
      showValue = _a.showValue;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: classnames({
        'at-slider': true,
        'at-slider--disabled': disabled
      }, className),
      style: customStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-slider__inner'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Slider */ "n"], {
      min: min,
      max: max,
      step: step,
      value: _value,
      disabled: disabled,
      activeColor: activeColor,
      backgroundColor: backgroundColor,
      blockSize: blockSize,
      blockColor: blockColor,
      onChanging: this.handleChanging.bind(this),
      onChange: this.handleChange.bind(this)
    })), showValue && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-slider__text'
    }, "" + _value));
  };
  return AtSlider;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtSlider.defaultProps = {
  customStyle: '',
  className: '',
  min: 0,
  max: 100,
  step: 1,
  value: 0,
  disabled: false,
  activeColor: '#6190e8',
  backgroundColor: '#e9e9e9',
  blockSize: 28,
  blockColor: '#ffffff',
  showValue: false
};
AtSlider.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
  disabled: PropTypes.bool,
  activeColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  blockSize: PropTypes.number,
  blockColor: PropTypes.string,
  showValue: PropTypes.bool,
  onChange: PropTypes.func,
  onChanging: PropTypes.func
};
var AtSwipeActionOptions = /** @class */function (_super) {
  __extends(AtSwipeActionOptions, _super);
  function AtSwipeActionOptions() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AtSwipeActionOptions.prototype.render = function () {
    var rootClass = classnames('at-swipe-action__options', this.props.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      id: "swipeActionOptions-" + this.props.componentId,
      className: rootClass,
      style: this.props.customStyle
    }, this.props.children);
  };
  return AtSwipeActionOptions;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
var AtSwipeAction = /** @class */function (_super) {
  __extends(AtSwipeAction, _super);
  function AtSwipeAction(props) {
    var _this = _super.call(this, props) || this;
    _this.handleOpened = function (event) {
      var onOpened = _this.props.onOpened;
      if (typeof onOpened === 'function') {
        onOpened(event);
      }
    };
    _this.handleClosed = function (event) {
      var onClosed = _this.props.onClosed;
      if (typeof onClosed === 'function') {
        onClosed(event);
      }
    };
    _this.handleClick = function (item, index, event) {
      var _a = _this.props,
        onClick = _a.onClick,
        autoClose = _a.autoClose;
      if (typeof onClick === 'function') {
        onClick(item, index, event);
      }
      if (autoClose) {
        _this._reset(false); // TODO: Check behavior
        _this.handleClosed(event);
      }
    };
    _this.onTouchEnd = function (e) {
      if (_this.moveX === -_this.maxOffsetSize) {
        _this._reset(true);
        _this.handleOpened(e);
        return;
      }
      if (_this.moveX === 0) {
        _this._reset(false);
        _this.handleClosed(e);
        return;
      }
      if (_this.state._isOpened && _this.moveX < 0) {
        _this._reset(false);
        _this.handleClosed(e);
        return;
      }
      if (Math.abs(_this.moveX) < _this.maxOffsetSize * _this.moveRatio) {
        _this._reset(false);
        _this.handleClosed(e);
      } else {
        _this._reset(true);
        _this.handleOpened(e);
      }
    };
    _this.onChange = function (e) {
      _this.moveX = e.detail.x;
    };
    var isOpened = props.isOpened,
      maxDistance = props.maxDistance,
      areaWidth = props.areaWidth,
      moveRatio = props.moveRatio;
    _this.maxOffsetSize = maxDistance;
    _this.state = {
      componentId: uuid(),
      // eslint-disable-next-line no-extra-boolean-cast
      offsetSize: !!isOpened ? -_this.maxOffsetSize : 0,
      _isOpened: !!isOpened,
      needAnimation: false
    };
    _this.moveX = _this.state.offsetSize;
    _this.eleWidth = areaWidth;
    _this.moveRatio = moveRatio || 0.5;
    return _this;
  }
  AtSwipeAction.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    var isOpened = nextProps.isOpened;
    var _isOpened = this.state._isOpened;
    if (isOpened !== _isOpened) {
      this.moveX = isOpened ? 0 : this.maxOffsetSize;
      this._reset(!!isOpened); // TODO: Check behavior
    }
  };

  AtSwipeAction.prototype._reset = function (isOpened) {
    var _this = this;
    if (isOpened) {
      if (false) {} else {
        this.setState({
          _isOpened: true,
          offsetSize: -this.maxOffsetSize
        });
      }
    } else {
      this.setState({
        offsetSize: this.moveX
      }, function () {
        _this.setState({
          offsetSize: 0,
          _isOpened: false
        });
      });
    }
  };
  AtSwipeAction.prototype.render = function () {
    var _this = this;
    var _a = this.state,
      componentId = _a.componentId,
      offsetSize = _a.offsetSize;
    var _b = this.props,
      options = _b.options,
      disabled = _b.disabled;
    var rootClass = classnames('at-swipe-action', this.props.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      id: "swipeAction-" + componentId,
      className: rootClass,
      style: {
        width: this.eleWidth + "px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* MovableArea */ "g"], {
      className: 'at-swipe-action__area',
      style: {
        width: this.eleWidth + this.maxOffsetSize + "px",
        transform: "translate(-" + this.maxOffsetSize + "px, 0)"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* MovableView */ "h"], {
      className: 'at-swipe-action__content',
      direction: 'horizontal',
      damping: 50,
      x: offsetSize,
      onTouchEnd: this.onTouchEnd,
      onChange: this.onChange,
      disabled: disabled,
      style: {
        width: this.eleWidth + "px",
        left: this.maxOffsetSize + "px"
      }
    }, this.props.children, Array.isArray(options) && options.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtSwipeActionOptions, {
      options: options,
      componentId: componentId,
      customStyle: {
        transform: "translate(" + this.maxOffsetSize + "px, 0)",
        opacity: 1
      }
    }, options.map(function (item, key) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        key: item.text + "-" + key,
        style: item.style,
        onClick: function onClick(e) {
          return _this.handleClick(item, key, e);
        },
        className: classnames('at-swipe-action__option', item.className)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
        className: 'option__text'
      }, item.text));
    })) : null)));
  };
  return AtSwipeAction;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtSwipeAction.defaultProps = {
  options: [],
  isOpened: false,
  disabled: false,
  autoClose: false,
  maxDistance: 0,
  areaWidth: 0
};
AtSwipeAction.propTypes = {
  isOpened: PropTypes.bool,
  disabled: PropTypes.bool,
  autoClose: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    className: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.array])
  })),
  onClick: PropTypes.func,
  onOpened: PropTypes.func,
  onClosed: PropTypes.func
};
var AtSearchBar = /** @class */function (_super) {
  __extends(AtSearchBar, _super);
  function AtSearchBar(props) {
    var _this = _super.call(this, props) || this;
    _this.handleFocus = function (event) {
      _this.setState({
        isFocus: true
      });
      _this.props.onFocus && _this.props.onFocus(event);
    };
    _this.handleBlur = function (event) {
      _this.setState({
        isFocus: false
      });
      _this.props.onBlur && _this.props.onBlur(event);
    };
    _this.handleChange = function (e) {
      _this.props.onChange(e.detail.value, e);
    };
    _this.handleClear = function (event) {
      if (_this.props.onClear) {
        _this.props.onClear(event);
      } else {
        _this.props.onChange('', event);
      }
    };
    _this.handleConfirm = function (event) {
      _this.props.onConfirm && _this.props.onConfirm(event);
    };
    _this.handleActionClick = function (event) {
      _this.props.onActionClick && _this.props.onActionClick(event);
    };
    _this.state = {
      isFocus: !!props.focus
    };
    return _this;
  }
  AtSearchBar.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    if (nextProps.focus !== this.props.focus) {
      this.setState({
        isFocus: !!nextProps.focus
      });
    }
  };
  AtSearchBar.prototype.render = function () {
    var _a = this.props,
      value = _a.value,
      placeholder = _a.placeholder,
      maxLength = _a.maxLength,
      fixed = _a.fixed,
      disabled = _a.disabled,
      showActionButton = _a.showActionButton,
      _b = _a.actionName,
      actionName = _b === void 0 ? '搜索' : _b,
      inputType = _a.inputType,
      // 处理issue#464
      className = _a.className,
      customStyle = _a.customStyle;
    var isFocus = this.state.isFocus;
    var fontSize = 14;
    var rootCls = classnames('at-search-bar', {
      'at-search-bar--fixed': fixed
    }, className);
    var placeholderWrapStyle = {};
    var actionStyle = {};
    if (isFocus || !isFocus && value) {
      actionStyle.opacity = 1;
      actionStyle.marginRight = "0";
      placeholderWrapStyle.flexGrow = 0;
    } else if (!isFocus && !value) {
      placeholderWrapStyle.flexGrow = 1;
      actionStyle.opacity = 0;
      actionStyle.marginRight = "-" + ((actionName.length + 1) * fontSize + fontSize / 2 + 10) + "px";
    }
    if (showActionButton) {
      actionStyle.opacity = 1;
      actionStyle.marginRight = "0";
    }
    var clearIconStyle = {
      display: 'flex'
    };
    var placeholderStyle = {
      visibility: 'hidden'
    };
    if (!value.length) {
      clearIconStyle.display = 'none';
      placeholderStyle.visibility = 'visible';
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: rootCls,
      style: customStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-search-bar__input-cnt'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-search-bar__placeholder-wrap',
      style: placeholderWrapStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
      className: 'at-icon at-icon-search'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
      className: 'at-search-bar__placeholder',
      style: placeholderStyle
    }, isFocus ? '' : placeholder)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Input */ "e"], {
      className: 'at-search-bar__input',
      type: inputType,
      confirmType: 'search',
      value: value,
      focus: isFocus,
      disabled: disabled,
      maxlength: maxLength,
      onInput: this.handleChange,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onConfirm: this.handleConfirm
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-search-bar__clear',
      style: clearIconStyle,
      onTouchStart: this.handleClear
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
      className: 'at-icon at-icon-close-circle'
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-search-bar__action',
      style: actionStyle,
      onClick: this.handleActionClick
    }, actionName));
  };
  return AtSearchBar;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtSearchBar.defaultProps = {
  value: '',
  placeholder: '搜索',
  maxLength: 140,
  fixed: false,
  focus: false,
  disabled: false,
  showActionButton: false,
  actionName: '搜索',
  inputType: 'text',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: function onChange() {}
};
AtSearchBar.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  fixed: PropTypes.bool,
  focus: PropTypes.bool,
  disabled: PropTypes.bool,
  showActionButton: PropTypes.bool,
  actionName: PropTypes.string,
  inputType: PropTypes.oneOf(['text', 'number', 'idcard', 'digit']),
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onConfirm: PropTypes.func,
  onActionClick: PropTypes.func,
  onClear: PropTypes.func
};
var AtLoadMore = /** @class */function (_super) {
  __extends(AtLoadMore, _super);
  function AtLoadMore() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AtLoadMore.prototype.onClick = function () {
    this.props.onClick && this.props.onClick(arguments);
  };
  AtLoadMore.prototype.render = function () {
    var _a = this.props,
      className = _a.className,
      customStyle = _a.customStyle,
      loadingText = _a.loadingText,
      moreText = _a.moreText,
      status = _a.status,
      moreBtnStyle = _a.moreBtnStyle,
      noMoreTextStyle = _a.noMoreTextStyle,
      noMoreText = _a.noMoreText;
    var component = null;
    if (status === 'loading') {
      component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtActivityIndicator, {
        mode: 'center',
        content: loadingText
      });
    } else if (status === 'more') {
      component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: 'at-load-more__cnt'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtButton, {
        full: true,
        onClick: this.onClick.bind(this),
        customStyle: moreBtnStyle
      }, moreText));
    } else {
      component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
        className: 'at-load-more__tip',
        style: noMoreTextStyle
      }, noMoreText);
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: classnames('at-load-more', className),
      style: customStyle
    }, component);
  };
  return AtLoadMore;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtLoadMore.defaultProps = {
  customStyle: '',
  className: '',
  noMoreTextStyle: '',
  moreBtnStyle: '',
  status: 'more',
  loadingText: '加载中',
  moreText: '查看更多',
  noMoreText: '没有更多'
};
AtLoadMore.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  noMoreTextStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  moreBtnStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  status: PropTypes.oneOf(['more', 'loading', 'noMore']),
  loadingText: PropTypes.string,
  moreText: PropTypes.string,
  noMoreText: PropTypes.string,
  onClick: PropTypes.func
};
var AtDivider = /** @class */function (_super) {
  __extends(AtDivider, _super);
  function AtDivider() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AtDivider.prototype.render = function () {
    var _a = this.props,
      className = _a.className,
      customStyle = _a.customStyle,
      content = _a.content,
      height = _a.height,
      fontColor = _a.fontColor,
      fontSize = _a.fontSize,
      lineColor = _a.lineColor;
    var rootStyle = {
      height: height ? "" + pxTransform(Number(height)) : ''
    };
    var fontStyle = {
      color: fontColor,
      'fontSize': fontSize ? "" + pxTransform(Number(fontSize)) : ''
    };
    var lineStyle = {
      backgroundColor: lineColor
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: classnames('at-divider', className),
      style: mergeStyle(rootStyle, customStyle)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-divider__content',
      style: fontStyle
    }, content === '' ? this.props.children : content), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-divider__line',
      style: lineStyle
    }));
  };
  return AtDivider;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtDivider.defaultProps = {
  content: '',
  height: 0,
  fontColor: '',
  fontSize: 0,
  lineColor: ''
};
AtDivider.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  content: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontColor: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  lineColor: PropTypes.string
};
var AtCountdownItem = /** @class */function (_super) {
  __extends(AtCountdownItem, _super);
  function AtCountdownItem() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AtCountdownItem.prototype.formatNum = function (num) {
    return num <= 9 ? "0" + num : "" + num;
  };
  AtCountdownItem.prototype.render = function () {
    var _a = this.props,
      num = _a.num,
      separator = _a.separator;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-countdown__item'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-countdown__time-box'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
      className: 'at-countdown__time'
    }, this.formatNum(num))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
      className: 'at-countdown__separator'
    }, separator));
  };
  return AtCountdownItem;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtCountdownItem.defaultProps = {
  num: 0,
  separator: ':'
};
AtCountdownItem.propTypes = {
  num: PropTypes.number.isRequired,
  separator: PropTypes.string
};
var toSeconds = function toSeconds(day, hours, minutes, seconds) {
  return day * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds;
};
var AtCountdown = /** @class */function (_super) {
  __extends(AtCountdown, _super);
  function AtCountdown(props) {
    var _this = _super.call(this, props) || this;
    var _a = _this.props,
      _b = _a.day,
      day = _b === void 0 ? 0 : _b,
      _c = _a.hours,
      hours = _c === void 0 ? 0 : _c,
      _d = _a.minutes,
      minutes = _d === void 0 ? 0 : _d,
      _e = _a.seconds,
      seconds = _e === void 0 ? 0 : _e;
    _this.seconds = toSeconds(day, hours, minutes, seconds);
    var _f = _this.calculateTime(),
      _day = _f.day,
      _hours = _f.hours,
      _minutes = _f.minutes,
      _seconds = _f.seconds;
    _this.state = {
      _day: _day,
      _hours: _hours,
      _minutes: _minutes,
      _seconds: _seconds
    };
    return _this;
  }
  AtCountdown.prototype.setTimer = function () {
    if (!this.timer) this.countdonwn();
  };
  AtCountdown.prototype.clearTimer = function () {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  };
  AtCountdown.prototype.calculateTime = function () {
    var _a = __read([0, 0, 0, 0], 4),
      day = _a[0],
      hours = _a[1],
      minutes = _a[2],
      seconds = _a[3];
    if (this.seconds > 0) {
      day = this.props.isShowDay ? Math.floor(this.seconds / (60 * 60 * 24)) : 0;
      hours = Math.floor(this.seconds / (60 * 60)) - day * 24;
      minutes = Math.floor(this.seconds / 60) - day * 24 * 60 - hours * 60;
      seconds = Math.floor(this.seconds) - day * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
    }
    return {
      day: day,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  };
  AtCountdown.prototype.countdonwn = function () {
    var _this = this;
    var _a = this.calculateTime(),
      day = _a.day,
      hours = _a.hours,
      minutes = _a.minutes,
      seconds = _a.seconds;
    this.setState({
      _day: day,
      _hours: hours,
      _minutes: minutes,
      _seconds: seconds
    });
    this.seconds--;
    if (this.seconds < 0) {
      this.clearTimer();
      this.props.onTimeUp && this.props.onTimeUp();
      return;
    }
    this.timer = setTimeout(function () {
      _this.countdonwn();
    }, 1000);
  };
  AtCountdown.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    if (JSON.stringify(this.props) === JSON.stringify(nextProps)) return;
    var day = nextProps.day,
      hours = nextProps.hours,
      minutes = nextProps.minutes,
      seconds = nextProps.seconds;
    this.seconds = toSeconds(day, hours, minutes, seconds);
    this.clearTimer();
    this.setTimer();
  };
  AtCountdown.prototype.componentDidMount = function () {
    this.setTimer();
  };
  AtCountdown.prototype.componentWillUnmount = function () {
    this.clearTimer();
  };
  AtCountdown.prototype.componentDidHide = function () {
    this.clearTimer();
  };
  AtCountdown.prototype.componentDidShow = function () {
    this.setTimer();
  };
  AtCountdown.prototype.render = function () {
    var _a = this.props,
      className = _a.className,
      customStyle = _a.customStyle,
      format = _a.format,
      isShowDay = _a.isShowDay,
      isCard = _a.isCard,
      isShowHour = _a.isShowHour;
    var _b = this.state,
      _day = _b._day,
      _hours = _b._hours,
      _minutes = _b._minutes,
      _seconds = _b._seconds;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: classnames({
        'at-countdown': true,
        'at-countdown--card': isCard
      }, className),
      style: customStyle
    }, isShowDay && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtCountdownItem, {
      num: _day,
      separator: format.day
    }), isShowHour && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtCountdownItem, {
      num: _hours,
      separator: format.hours
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtCountdownItem, {
      num: _minutes,
      separator: format.minutes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtCountdownItem, {
      num: _seconds,
      separator: format.seconds
    }));
  };
  return AtCountdown;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtCountdown.defaultProps = {
  customStyle: '',
  className: '',
  isCard: false,
  isShowDay: false,
  isShowHour: true,
  format: {
    day: '天',
    hours: '时',
    minutes: '分',
    seconds: '秒'
  },
  day: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
};
AtCountdown.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  isCard: PropTypes.bool,
  isShowDay: PropTypes.bool,
  isShowHour: PropTypes.bool,
  format: PropTypes.object,
  day: PropTypes.number,
  hours: PropTypes.number,
  minutes: PropTypes.number,
  seconds: PropTypes.number,
  onTimeUp: PropTypes.func
};
var AtSteps = /** @class */function (_super) {
  __extends(AtSteps, _super);
  function AtSteps() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AtSteps.prototype.handleClick = function (current, event) {
    this.props.onChange(current, event);
  };
  AtSteps.prototype.render = function () {
    var _this = this;
    var _a = this.props,
      customStyle = _a.customStyle,
      className = _a.className,
      items = _a.items,
      current = _a.current;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: classnames('at-steps', className),
      style: customStyle
    }, !!items && items.map(function (item, i) {
      var _a;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        key: item.title,
        className: classnames({
          'at-steps__item': true,
          'at-steps__item--active': i === current,
          'at-steps__item--inactive': i !== current
        }),
        onClick: _this.handleClick.bind(_this, i)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: 'at-steps__circular-wrap'
      }, i !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: 'at-steps__left-line'
      }), item.status ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: classnames({
          'at-icon': true,
          'at-icon-check-circle': item.status === 'success',
          'at-icon-close-circle': item.status === 'error',
          'at-steps__single-icon': true,
          'at-steps__single-icon--success': item.status === 'success',
          'at-steps__single-icon--error': item.status === 'error'
        })
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: 'at-steps__circular'
      }, item.icon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
        className: classnames('at-icon', (_a = {}, _a["at-icon-" + item.icon.value] = item.icon.value, _a['at-steps__circle-icon'] = true, _a))
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
        className: 'at-steps__num'
      }, i + 1)), i !== items.length - 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: 'at-steps__right-line'
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: 'at-steps__title'
      }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: 'at-steps__desc'
      }, item.desc));
    }));
  };
  return AtSteps;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtSteps.defaultProps = {
  customStyle: '',
  className: '',
  current: 0,
  items: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: function onChange() {}
};
AtSteps.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  current: PropTypes.number,
  items: PropTypes.array,
  onChange: PropTypes.func
};
var AtCurtain = /** @class */function (_super) {
  __extends(AtCurtain, _super);
  function AtCurtain() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AtCurtain.prototype.onClose = function (e) {
    e.stopPropagation();
    this.props.onClose(e);
  };
  AtCurtain.prototype._stopPropagation = function (e) {
    e.stopPropagation();
  };
  AtCurtain.prototype.render = function () {
    var _a;
    var _b = this.props,
      className = _b.className,
      customStyle = _b.customStyle,
      isOpened = _b.isOpened,
      closeBtnPosition = _b.closeBtnPosition;
    var curtainClass = classnames({
      'at-curtain': true,
      'at-curtain--closed': !isOpened
    }, className);
    var btnCloseClass = classnames((_a = {
      'at-curtain__btn-close': true
    }, _a["at-curtain__btn-close--" + closeBtnPosition] = closeBtnPosition, _a));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: curtainClass,
      style: customStyle,
      onClick: this._stopPropagation
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-curtain__container'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-curtain__body'
    }, this.props.children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: btnCloseClass,
      onClick: this.onClose.bind(this)
    }))));
  };
  return AtCurtain;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtCurtain.defaultProps = {
  customStyle: '',
  className: '',
  isOpened: false,
  closeBtnPosition: 'bottom',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose: function onClose() {}
};
AtCurtain.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  isOpened: PropTypes.bool,
  closeBtnPosition: PropTypes.string,
  onClose: PropTypes.func
};
var AtMessage = /** @class */function (_super) {
  __extends(AtMessage, _super);
  function AtMessage(props) {
    var _this = _super.call(this, props) || this;
    _this.state = {
      _isOpened: false,
      _message: '',
      _type: 'info',
      _duration: 3000
    };
    _this._timer = null;
    return _this;
  }
  AtMessage.prototype.bindMessageListener = function () {
    var _this = this;
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.eventCenter.on('atMessage', function (options) {
      if (options === void 0) {
        options = {};
      }
      var message = options.message,
        type = options.type,
        duration = options.duration;
      var newState = {
        _isOpened: true,
        _message: message,
        _type: type,
        _duration: duration || _this.state._duration
      };
      _this.setState(newState, function () {
        clearTimeout(_this._timer);
        _this._timer = setTimeout(function () {
          _this.setState({
            _isOpened: false
          });
        }, _this.state._duration);
      });
    });
    // 绑定函数
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.atMessage = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.eventCenter.trigger.bind(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.eventCenter, 'atMessage');
  };
  AtMessage.prototype.componentDidShow = function () {
    this.bindMessageListener();
  };
  AtMessage.prototype.componentDidMount = function () {
    this.bindMessageListener();
  };
  AtMessage.prototype.componentDidHide = function () {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.eventCenter.off('atMessage');
  };
  AtMessage.prototype.componentWillUnmount = function () {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.eventCenter.off('atMessage');
  };
  AtMessage.prototype.render = function () {
    var _a = this.props,
      className = _a.className,
      customStyle = _a.customStyle;
    var _b = this.state,
      _message = _b._message,
      _isOpened = _b._isOpened,
      _type = _b._type;
    var rootCls = classnames({
      'at-message': true,
      'at-message--show': _isOpened,
      'at-message--hidden': !_isOpened
    }, "at-message--" + _type, className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: rootCls,
      style: customStyle
    }, _message);
  };
  return AtMessage;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtMessage.defaultProps = {
  customStyle: '',
  className: ''
};
AtMessage.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
};

// 生成 jsx 二维矩阵
var generateMatrix = function generateMatrix(files, col, showAddBtn) {
  var matrix = [];
  var length = showAddBtn ? files.length + 1 : files.length;
  var row = Math.ceil(length / col);
  for (var i = 0; i < row; i++) {
    if (i === row - 1) {
      // 最后一行数据加上添加按钮
      var lastArr = files.slice(i * col);
      if (lastArr.length < col) {
        if (showAddBtn) {
          lastArr.push({
            type: 'btn',
            uuid: uuid()
          });
        }
        // 填补剩下的空列
        for (var j = lastArr.length; j < col; j++) {
          lastArr.push({
            type: 'blank',
            uuid: uuid()
          });
        }
      }
      matrix.push(lastArr);
    } else {
      matrix.push(files.slice(i * col, (i + 1) * col));
    }
  }
  return matrix;
};
var ENV$1 = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv();
var AtImagePicker = /** @class */function (_super) {
  __extends(AtImagePicker, _super);
  function AtImagePicker() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.chooseFile = function () {
      var _a = _this.props,
        _b = _a.files,
        files = _b === void 0 ? [] : _b,
        multiple = _a.multiple,
        count = _a.count,
        sizeType = _a.sizeType,
        sourceType = _a.sourceType;
      var filePathName = ENV$1 === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.ALIPAY ? 'apFilePaths' : 'tempFiles';
      // const count = multiple ? 99 : 1
      var params = {};
      if (multiple) {
        params.count = 99;
      }
      if (count) {
        params.count = count;
      }
      if (sizeType) {
        params.sizeType = sizeType;
      }
      if (sourceType) {
        params.sourceType = sourceType;
      }
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.chooseImage(params).then(function (res) {
        var targetFiles = res.tempFilePaths.map(function (path, i) {
          return {
            url: path,
            file: res[filePathName][i]
          };
        });
        var newFiles = files.concat(targetFiles);
        _this.props.onChange(newFiles, 'add');
      }).catch(function (err) {
        var _a, _b;
        (_b = (_a = _this.props) === null || _a === void 0 ? void 0 : _a.onFail) === null || _b === void 0 ? void 0 : _b.call(_a, err);
      });
    };
    _this.handleImageClick = function (idx) {
      _this.props.onImageClick && _this.props.onImageClick(idx, _this.props.files[idx]);
    };
    _this.handleRemoveImg = function (idx, event) {
      event.stopPropagation();
      event.preventDefault();
      var _a = _this.props.files,
        files = _a === void 0 ? [] : _a;
      if (ENV$1 === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEB) {
        window.URL.revokeObjectURL(files[idx].url);
      }
      var newFiles = files.filter(function (_, i) {
        return i !== idx;
      });
      _this.props.onChange(newFiles, 'remove', idx);
    };
    return _this;
  }
  AtImagePicker.prototype.render = function () {
    var _this = this;
    var _a = this.props,
      className = _a.className,
      customStyle = _a.customStyle,
      files = _a.files,
      mode = _a.mode,
      _b = _a.length,
      length = _b === void 0 ? 4 : _b,
      _c = _a.showAddBtn,
      showAddBtn = _c === void 0 ? true : _c;
    var rowLength = length <= 0 ? 1 : length;
    // 行数
    var matrix = generateMatrix(files, rowLength, showAddBtn);
    var rootCls = classnames('at-image-picker', className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: rootCls,
      style: customStyle
    }, matrix.map(function (row, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: 'at-image-picker__flex-box',
        key: i + 1
      }, row.map(function (item, j) {
        return item.url ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
          className: 'at-image-picker__flex-item',
          key: i * length + j
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
          className: 'at-image-picker__item'
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
          className: 'at-image-picker__remove-btn',
          onClick: _this.handleRemoveImg.bind(_this, i * length + j)
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "d"], {
          className: 'at-image-picker__preview-img',
          mode: mode,
          src: item.url,
          onClick: _this.handleImageClick.bind(_this, i * length + j)
        }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
          className: 'at-image-picker__flex-item',
          key: 'empty_' + i * length + j
        }, item.type === 'btn' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
          className: 'at-image-picker__item at-image-picker__choose-btn',
          onClick: _this.chooseFile
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
          className: 'add-bar'
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
          className: 'add-bar'
        })));
      }));
    }));
  };
  return AtImagePicker;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtImagePicker.defaultProps = {
  className: '',
  customStyle: '',
  files: [],
  mode: 'aspectFill',
  showAddBtn: true,
  multiple: false,
  length: 4,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: function onChange() {}
};
AtImagePicker.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  customStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  files: PropTypes.array,
  mode: PropTypes.oneOf(['scaleToFill', 'aspectFit', 'aspectFill', 'widthFix', 'top', 'bottom', 'center', 'left', 'right', 'top left', 'top right', 'bottom left', 'bottom right']),
  showAddBtn: PropTypes.bool,
  multiple: PropTypes.bool,
  length: PropTypes.number,
  onChange: PropTypes.func,
  onImageClick: PropTypes.func,
  onFail: PropTypes.func,
  count: PropTypes.number,
  sizeType: PropTypes.array,
  sourceType: PropTypes.array
};
var AtRange = /** @class */function (_super) {
  __extends(AtRange, _super);
  function AtRange(props) {
    var _this = _super.call(this, props) || this;
    _this.handleClick = function (event) {
      if (_this.currentSlider && !_this.props.disabled) {
        var sliderValue = 0;
        var detail = getEventDetail(event);
        sliderValue = detail.x - _this.left;
        _this.setSliderValue(_this.currentSlider, sliderValue, 'onChange');
      }
    };
    var _a = props.min,
      min = _a === void 0 ? 0 : _a,
      _b = props.max,
      max = _b === void 0 ? 100 : _b;
    // range 宽度
    _this.width = 0;
    // range 到屏幕左边的距离
    _this.left = 0;
    _this.deltaValue = max - min;
    _this.currentSlider = '';
    _this.state = {
      aX: 0,
      bX: 0
    };
    return _this;
  }
  AtRange.prototype.handleTouchMove = function (sliderName, event) {
    if (this.props.disabled) return;
    event.stopPropagation();
    var clientX = event.touches[0].clientX;
    this.setSliderValue(sliderName, clientX - this.left, 'onChange');
  };
  AtRange.prototype.handleTouchEnd = function (sliderName) {
    if (this.props.disabled) return;
    this.currentSlider = sliderName;
    this.triggerEvent('onAfterChange');
  };
  AtRange.prototype.setSliderValue = function (sliderName, targetValue, funcName) {
    var _a, _b;
    var _this = this;
    var distance = Math.min(Math.max(targetValue, 0), this.width);
    var sliderValue = Math.floor(distance / this.width * 100);
    if (funcName) {
      this.setState((_a = {}, _a[sliderName] = sliderValue, _a), function () {
        return _this.triggerEvent(funcName);
      });
    } else {
      this.setState((_b = {}, _b[sliderName] = sliderValue, _b));
    }
  };
  AtRange.prototype.setValue = function (value) {
    var _a = this.props.min,
      min = _a === void 0 ? 0 : _a;
    var aX = Math.round((value[0] - min) / this.deltaValue * 100); // fix issue #670
    var bX = Math.round((value[1] - min) / this.deltaValue * 100); // fix issue #670
    this.setState({
      aX: aX,
      bX: bX
    });
  };
  AtRange.prototype.triggerEvent = function (funcName) {
    var _a = this.props.min,
      min = _a === void 0 ? 0 : _a;
    var _b = this.state,
      aX = _b.aX,
      bX = _b.bX;
    var a = Math.round(aX / 100 * this.deltaValue) + min; // fix issue #670
    var b = Math.round(bX / 100 * this.deltaValue) + min; // fix issue #670
    var result = [a, b].sort(function (x, y) {
      return x - y;
    });
    if (funcName === 'onChange') {
      this.props.onChange && this.props.onChange(result);
    } else if (funcName === 'onAfterChange') {
      this.props.onAfterChange && this.props.onAfterChange(result);
    }
  };
  AtRange.prototype.updatePos = function () {
    var _this = this;
    delayQuerySelector('.at-range__container', 0).then(function (rect) {
      var _a, _b;
      _this.width = Math.round((_a = rect[0]) === null || _a === void 0 ? void 0 : _a.width);
      _this.left = Math.round((_b = rect[0]) === null || _b === void 0 ? void 0 : _b.left);
    });
  };
  AtRange.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    var value = nextProps.value;
    this.updatePos();
    if (this.props.value[0] !== value[0] || this.props.value[1] !== value[1]) {
      this.setValue(value);
    }
  };
  AtRange.prototype.componentDidMount = function () {
    var value = this.props.value;
    this.updatePos();
    this.setValue(value);
  };
  AtRange.prototype.render = function () {
    var _a = this.props,
      className = _a.className,
      customStyle = _a.customStyle,
      sliderStyle = _a.sliderStyle,
      railStyle = _a.railStyle,
      trackStyle = _a.trackStyle,
      blockSize = _a.blockSize,
      disabled = _a.disabled;
    var rootCls = classnames('at-range', {
      'at-range--disabled': disabled
    }, className);
    var _b = this.state,
      aX = _b.aX,
      bX = _b.bX;
    var sliderCommonStyle = {
      width: blockSize ? blockSize + "PX" : '',
      height: blockSize ? blockSize + "PX" : '',
      marginLeft: blockSize ? -blockSize / 2 + "PX" : ''
    };
    var sliderAStyle = _assign(_assign({}, sliderCommonStyle), {
      left: aX + "%"
    });
    var sliderBStyle = _assign(_assign({}, sliderCommonStyle), {
      left: bX + "%"
    });
    var containerStyle = {
      height: blockSize ? blockSize + "PX" : ''
    };
    var smallerX = Math.min(aX, bX);
    var deltaX = Math.abs(aX - bX);
    var atTrackStyle = {
      left: smallerX + "%",
      width: deltaX + "%"
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: rootCls,
      style: customStyle,
      onClick: this.handleClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-range__container',
      style: containerStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-range__rail',
      style: railStyle
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-range__track',
      style: mergeStyle(atTrackStyle, trackStyle)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-range__slider',
      style: mergeStyle(sliderAStyle, sliderStyle),
      onTouchMove: this.handleTouchMove.bind(this, 'aX'),
      onTouchEnd: this.handleTouchEnd.bind(this, 'aX')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-range__slider',
      style: mergeStyle(sliderBStyle, sliderStyle),
      onTouchMove: this.handleTouchMove.bind(this, 'bX'),
      onTouchEnd: this.handleTouchEnd.bind(this, 'bX')
    })));
  };
  return AtRange;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtRange.defaultProps = {
  customStyle: '',
  className: '',
  sliderStyle: '',
  railStyle: '',
  trackStyle: '',
  value: [0, 0],
  min: 0,
  max: 100,
  disabled: false,
  blockSize: 0
};
AtRange.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  sliderStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  railStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  trackStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  value: PropTypes.array,
  min: PropTypes.number,
  max: PropTypes.number,
  disabled: PropTypes.bool,
  blockSize: PropTypes.number,
  onChange: PropTypes.func,
  onAfterChange: PropTypes.func
};
var ENV = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv();
var AtIndexes = /** @class */function (_super) {
  __extends(AtIndexes, _super);
  function AtIndexes(props) {
    var _this = _super.call(this, props) || this;
    _this.handleClick = function (item) {
      _this.props.onClick && _this.props.onClick(item);
    };
    _this.handleTouchMove = function (event) {
      event.stopPropagation();
      event.preventDefault();
      var list = _this.props.list;
      var pageY = event.touches[0].pageY;
      var index = Math.floor((pageY - _this.startTop) / _this.itemHeight);
      if (index >= 0 && index <= list.length && _this.currentIndex !== index) {
        _this.currentIndex = index;
        var key = index > 0 ? list[index - 1].key : 'top';
        var touchView = "at-indexes__list-" + key;
        _this.jumpTarget(touchView, index);
      }
    };
    _this.handleTouchEnd = function () {
      _this.currentIndex = -1;
    };
    _this.state = {
      _scrollIntoView: '',
      _scrollTop: 0,
      _tipText: '',
      _isShowToast: false,
      isWEB: _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEB
    };
    // 右侧导航高度
    _this.menuHeight = 0;
    // 右侧导航距离顶部高度
    _this.startTop = 0;
    // 右侧导航元素高度
    _this.itemHeight = 0;
    // 当前索引
    _this.currentIndex = -1;
    _this.listId = isTest() ? 'indexes-list-AOTU2018' : "list-" + uuid();
    return _this;
  }
  AtIndexes.prototype.jumpTarget = function (_scrollIntoView, idx) {
    var _this = this;
    var _a = this.props,
      _b = _a.topKey,
      topKey = _b === void 0 ? 'Top' : _b,
      list = _a.list;
    var _tipText = idx === 0 ? topKey : list[idx - 1].key;
    if (ENV === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEB) {
      delayQuerySelector('.at-indexes', 0).then(function (rect) {
        var targetOffsetTop = _this.listRef.children[idx].offsetTop;
        var _scrollTop = targetOffsetTop - rect[0].top;
        _this.updateState({
          _scrollTop: _scrollTop,
          _scrollIntoView: _scrollIntoView,
          _tipText: _tipText
        });
      });
      return;
    }
    this.updateState({
      _scrollIntoView: _scrollIntoView,
      _tipText: _tipText
    });
  };
  AtIndexes.prototype.__jumpTarget = function (key) {
    var list = this.props.list;
    // const index = _findIndex(list, ['key', key])
    var index = list.findIndex(function (item) {
      return item.key === key;
    });
    var targetView = "at-indexes__list-" + key;
    this.jumpTarget(targetView, index + 1);
  };
  AtIndexes.prototype.updateState = function (state) {
    var _this = this;
    var _a = this.props,
      isShowToast = _a.isShowToast,
      isVibrate = _a.isVibrate;
    var _scrollIntoView = state._scrollIntoView,
      _tipText = state._tipText,
      _scrollTop = state._scrollTop;
    // TODO: Fix dirty hack
    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    this.setState({
      _scrollIntoView: _scrollIntoView,
      _tipText: _tipText,
      _scrollTop: _scrollTop,
      _isShowToast: isShowToast
    }, /* eslint-enable @typescript-eslint/no-non-null-assertion */
    function () {
      clearTimeout(_this.timeoutTimer);
      _this.timeoutTimer = setTimeout(function () {
        _this.setState({
          _tipText: '',
          _isShowToast: false
        });
      }, 3000);
    });
    if (isVibrate) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.vibrateShort();
    }
  };
  AtIndexes.prototype.initData = function () {
    var _this = this;
    delayQuerySelector('.at-indexes__menu').then(function (rect) {
      var len = _this.props.list.length;
      _this.menuHeight = rect[0].height;
      _this.startTop = rect[0].top;
      _this.itemHeight = Math.floor(_this.menuHeight / (len + 1));
    });
  };
  AtIndexes.prototype.handleScroll = function (e) {
    if (e && e.detail) {
      this.setState({
        _scrollTop: e.detail.scrollTop
      });
    }
  };
  AtIndexes.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    if (nextProps.list.length !== this.props.list.length) {
      this.initData();
    }
  };
  AtIndexes.prototype.componentDidMount = function () {
    if (ENV === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEB) {
      this.listRef = document.getElementById(this.listId);
    }
    this.initData();
  };
  AtIndexes.prototype.UNSAFE_componentWillMount = function () {
    this.props.onScrollIntoView && this.props.onScrollIntoView(this.__jumpTarget.bind(this));
  };
  AtIndexes.prototype.render = function () {
    var _this = this;
    var _a = this.props,
      className = _a.className,
      customStyle = _a.customStyle,
      animation = _a.animation,
      topKey = _a.topKey,
      list = _a.list;
    var _b = this.state,
      _scrollTop = _b._scrollTop,
      _scrollIntoView = _b._scrollIntoView,
      _tipText = _b._tipText,
      _isShowToast = _b._isShowToast,
      isWEB = _b.isWEB;
    var toastStyle = {
      minWidth: pxTransform(100)
    };
    var rootCls = classnames('at-indexes', className);
    var menuList = list.map(function (dataList, i) {
      var key = dataList.key;
      var targetView = "at-indexes__list-" + key;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: 'at-indexes__menu-item',
        key: key,
        onClick: _this.jumpTarget.bind(_this, targetView, i + 1)
      }, key);
    });
    var indexesList = list.map(function (dataList) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        id: "at-indexes__list-" + dataList.key,
        className: 'at-indexes__list',
        key: dataList.key
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: 'at-indexes__list-title'
      }, dataList.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtList, null, dataList.items && dataList.items.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtListItem, {
          key: item.name,
          title: item.name,
          onClick: _this.handleClick.bind(_this, item)
        });
      })));
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: rootCls,
      style: customStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtToast, {
      customStyle: toastStyle,
      isOpened: _isShowToast,
      text: _tipText,
      duration: 2000
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-indexes__menu',
      onTouchMove: this.handleTouchMove,
      onTouchEnd: this.handleTouchEnd
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-indexes__menu-item',
      onClick: this.jumpTarget.bind(this, 'at-indexes__top', 0)
    }, topKey), menuList), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* ScrollView */ "m"], {
      className: 'at-indexes__body',
      id: this.listId,
      scrollY: true,
      scrollWithAnimation: animation,
      // eslint-disable-next-line no-undefined
      scrollTop: isWEB ? _scrollTop : undefined,
      scrollIntoView: !isWEB ? _scrollIntoView : '',
      onScroll: this.handleScroll.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-indexes__content',
      id: 'at-indexes__top'
    }, this.props.children), indexesList));
  };
  return AtIndexes;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtIndexes.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  animation: PropTypes.bool,
  isVibrate: PropTypes.bool,
  isShowToast: PropTypes.bool,
  topKey: PropTypes.string,
  list: PropTypes.array,
  onClick: PropTypes.func,
  onScrollIntoView: PropTypes.func
};
AtIndexes.defaultProps = {
  customStyle: '',
  className: '',
  animation: false,
  topKey: 'Top',
  isVibrate: true,
  isShowToast: true,
  list: []
};
var dayjs_min = createCommonjsModule(function (module, exports) {
  !function (t, e) {
    module.exports = e();
  }(commonjsGlobal, function () {
    var t = 1e3,
      e = 6e4,
      n = 36e5,
      r = "millisecond",
      i = "second",
      s = "minute",
      u = "hour",
      a = "day",
      o = "week",
      f = "month",
      h = "quarter",
      c = "year",
      d = "date",
      l = "Invalid Date",
      $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      M = {
        name: "en",
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        ordinal: function ordinal(t) {
          var e = ["th", "st", "nd", "rd"],
            n = t % 100;
          return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]";
        }
      },
      m = function m(t, e, n) {
        var r = String(t);
        return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
      },
      v = {
        s: m,
        z: function z(t) {
          var e = -t.utcOffset(),
            n = Math.abs(e),
            r = Math.floor(n / 60),
            i = n % 60;
          return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
        },
        m: function t(e, n) {
          if (e.date() < n.date()) return -t(n, e);
          var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
            i = e.clone().add(r, f),
            s = n - i < 0,
            u = e.clone().add(r + (s ? -1 : 1), f);
          return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
        },
        a: function a(t) {
          return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
        },
        p: function p(t) {
          return {
            M: f,
            y: c,
            w: o,
            d: a,
            D: d,
            h: u,
            m: s,
            s: i,
            ms: r,
            Q: h
          }[t] || String(t || "").toLowerCase().replace(/s$/, "");
        },
        u: function u(t) {
          return void 0 === t;
        }
      },
      g = "en",
      D = {};
    D[g] = M;
    var p = function p(t) {
        return t instanceof _;
      },
      S = function t(e, n, r) {
        var i;
        if (!e) return g;
        if ("string" == typeof e) {
          var s = e.toLowerCase();
          D[s] && (i = s), n && (D[s] = n, i = s);
          var u = e.split("-");
          if (!i && u.length > 1) return t(u[0]);
        } else {
          var a = e.name;
          D[a] = e, i = a;
        }
        return !r && i && (g = i), i || !r && g;
      },
      w = function w(t, e) {
        if (p(t)) return t.clone();
        var n = "object" == Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(e) ? e : {};
        return n.date = t, n.args = arguments, new _(n);
      },
      O = v;
    O.l = S, O.i = p, O.w = function (t, e) {
      return w(t, {
        locale: e.$L,
        utc: e.$u,
        x: e.$x,
        $offset: e.$offset
      });
    };
    var _ = function () {
        function M(t) {
          this.$L = S(t.locale, null, !0), this.parse(t);
        }
        var m = M.prototype;
        return m.parse = function (t) {
          this.$d = function (t) {
            var e = t.date,
              n = t.utc;
            if (null === e) return new Date(NaN);
            if (O.u(e)) return new Date();
            if (e instanceof Date) return new Date(e);
            if ("string" == typeof e && !/Z$/i.test(e)) {
              var r = e.match($);
              if (r) {
                var i = r[2] - 1 || 0,
                  s = (r[7] || "0").substring(0, 3);
                return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
              }
            }
            return new Date(e);
          }(t), this.$x = t.x || {}, this.init();
        }, m.init = function () {
          var t = this.$d;
          this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
        }, m.$utils = function () {
          return O;
        }, m.isValid = function () {
          return !(this.$d.toString() === l);
        }, m.isSame = function (t, e) {
          var n = w(t);
          return this.startOf(e) <= n && n <= this.endOf(e);
        }, m.isAfter = function (t, e) {
          return w(t) < this.startOf(e);
        }, m.isBefore = function (t, e) {
          return this.endOf(e) < w(t);
        }, m.$g = function (t, e, n) {
          return O.u(t) ? this[e] : this.set(n, t);
        }, m.unix = function () {
          return Math.floor(this.valueOf() / 1e3);
        }, m.valueOf = function () {
          return this.$d.getTime();
        }, m.startOf = function (t, e) {
          var n = this,
            r = !!O.u(e) || e,
            h = O.p(t),
            l = function l(t, e) {
              var i = O.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
              return r ? i : i.endOf(a);
            },
            $ = function $(t, e) {
              return O.w(n.toDate()[t].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n);
            },
            y = this.$W,
            M = this.$M,
            m = this.$D,
            v = "set" + (this.$u ? "UTC" : "");
          switch (h) {
            case c:
              return r ? l(1, 0) : l(31, 11);
            case f:
              return r ? l(1, M) : l(0, M + 1);
            case o:
              var g = this.$locale().weekStart || 0,
                D = (y < g ? y + 7 : y) - g;
              return l(r ? m - D : m + (6 - D), M);
            case a:
            case d:
              return $(v + "Hours", 0);
            case u:
              return $(v + "Minutes", 1);
            case s:
              return $(v + "Seconds", 2);
            case i:
              return $(v + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m.endOf = function (t) {
          return this.startOf(t, !1);
        }, m.$set = function (t, e) {
          var n,
            o = O.p(t),
            h = "set" + (this.$u ? "UTC" : ""),
            l = (n = {}, n[a] = h + "Date", n[d] = h + "Date", n[f] = h + "Month", n[c] = h + "FullYear", n[u] = h + "Hours", n[s] = h + "Minutes", n[i] = h + "Seconds", n[r] = h + "Milliseconds", n)[o],
            $ = o === a ? this.$D + (e - this.$W) : e;
          if (o === f || o === c) {
            var y = this.clone().set(d, 1);
            y.$d[l]($), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;
          } else l && this.$d[l]($);
          return this.init(), this;
        }, m.set = function (t, e) {
          return this.clone().$set(t, e);
        }, m.get = function (t) {
          return this[O.p(t)]();
        }, m.add = function (r, h) {
          var d,
            l = this;
          r = Number(r);
          var $ = O.p(h),
            y = function y(t) {
              var e = w(l);
              return O.w(e.date(e.date() + Math.round(t * r)), l);
            };
          if ($ === f) return this.set(f, this.$M + r);
          if ($ === c) return this.set(c, this.$y + r);
          if ($ === a) return y(1);
          if ($ === o) return y(7);
          var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[$] || 1,
            m = this.$d.getTime() + r * M;
          return O.w(m, this);
        }, m.subtract = function (t, e) {
          return this.add(-1 * t, e);
        }, m.format = function (t) {
          var e = this,
            n = this.$locale();
          if (!this.isValid()) return n.invalidDate || l;
          var r = t || "YYYY-MM-DDTHH:mm:ssZ",
            i = O.z(this),
            s = this.$H,
            u = this.$m,
            a = this.$M,
            o = n.weekdays,
            f = n.months,
            h = function h(t, n, i, s) {
              return t && (t[n] || t(e, r)) || i[n].slice(0, s);
            },
            c = function c(t) {
              return O.s(s % 12 || 12, t, "0");
            },
            d = n.meridiem || function (t, e, n) {
              var r = t < 12 ? "AM" : "PM";
              return n ? r.toLowerCase() : r;
            },
            $ = {
              YY: String(this.$y).slice(-2),
              YYYY: this.$y,
              M: a + 1,
              MM: O.s(a + 1, 2, "0"),
              MMM: h(n.monthsShort, a, f, 3),
              MMMM: h(f, a),
              D: this.$D,
              DD: O.s(this.$D, 2, "0"),
              d: String(this.$W),
              dd: h(n.weekdaysMin, this.$W, o, 2),
              ddd: h(n.weekdaysShort, this.$W, o, 3),
              dddd: o[this.$W],
              H: String(s),
              HH: O.s(s, 2, "0"),
              h: c(1),
              hh: c(2),
              a: d(s, u, !0),
              A: d(s, u, !1),
              m: String(u),
              mm: O.s(u, 2, "0"),
              s: String(this.$s),
              ss: O.s(this.$s, 2, "0"),
              SSS: O.s(this.$ms, 3, "0"),
              Z: i
            };
          return r.replace(y, function (t, e) {
            return e || $[t] || i.replace(":", "");
          });
        }, m.utcOffset = function () {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m.diff = function (r, d, l) {
          var $,
            y = O.p(d),
            M = w(r),
            m = (M.utcOffset() - this.utcOffset()) * e,
            v = this - M,
            g = O.m(this, M);
          return g = ($ = {}, $[c] = g / 12, $[f] = g, $[h] = g / 3, $[o] = (v - m) / 6048e5, $[a] = (v - m) / 864e5, $[u] = v / n, $[s] = v / e, $[i] = v / t, $)[y] || v, l ? g : O.a(g);
        }, m.daysInMonth = function () {
          return this.endOf(f).$D;
        }, m.$locale = function () {
          return D[this.$L];
        }, m.locale = function (t, e) {
          if (!t) return this.$L;
          var n = this.clone(),
            r = S(t, e, !0);
          return r && (n.$L = r), n;
        }, m.clone = function () {
          return O.w(this.$d, this);
        }, m.toDate = function () {
          return new Date(this.valueOf());
        }, m.toJSON = function () {
          return this.isValid() ? this.toISOString() : null;
        }, m.toISOString = function () {
          return this.$d.toISOString();
        }, m.toString = function () {
          return this.$d.toUTCString();
        }, M;
      }(),
      T = _.prototype;
    return w.prototype = T, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", f], ["$y", c], ["$D", d]].forEach(function (t) {
      T[t[1]] = function (e) {
        return this.$g(e, t[0], t[1]);
      };
    }), w.extend = function (t, e) {
      return t.$i || (t(e, _, w), t.$i = !0), w;
    }, w.locale = S, w.isDayjs = p, w.unix = function (t) {
      return w(1e3 * t);
    }, w.en = D[g], w.Ls = D, w.p = {}, w;
  });
});

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = function () {
  function object() {}
  return function (proto) {
    if (!isObject_1(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();
var _baseCreate = baseCreate;

/**
 * The function whose prototype chain sequence wrappers inherit from.
 *
 * @private
 */
function baseLodash() {
  // No operation performed.
}
var _baseLodash = baseLodash;

/**
 * The base constructor for creating `lodash` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable explicit method chain sequences.
 */
function LodashWrapper(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = undefined;
}
LodashWrapper.prototype = _baseCreate(_baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;
var _LodashWrapper = LodashWrapper;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
    length = values.length,
    offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
var _arrayPush = arrayPush;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag$1;
}
var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function () {
  return arguments;
}()) ? _baseIsArguments : function (value) {
  return isObjectLike_1(value) && hasOwnProperty$5.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
var isArguments_1 = isArguments;

/** Built-in value references. */
var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray_1(value) || isArguments_1(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
var _isFlattenable = isFlattenable;

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
    length = array.length;
  predicate || (predicate = _isFlattenable);
  result || (result = []);
  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        _arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
var _baseFlatten = baseFlatten;

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? _baseFlatten(array, 1) : [];
}
var flatten_1 = flatten;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var _apply = apply;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
      index = -1,
      length = nativeMax(args.length - start, 0),
      array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return _apply(func, this, otherArgs);
  };
}
var _overRest = overRest;

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function () {
    return value;
  };
}
var constant_1 = constant;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];
var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}
var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
  objectProto$5 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty$4).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}
var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}
var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}
var _getNative = getNative;
var defineProperty = function () {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();
var _defineProperty = defineProperty;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}
var identity_1 = identity;

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !_defineProperty ? identity_1 : function (func, string) {
  return _defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant_1(string),
    'writable': true
  });
};
var _baseSetToString = baseSetToString;

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
  HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
    lastCalled = 0;
  return function () {
    var stamp = nativeNow(),
      remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}
var _shortOut = shortOut;

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = _shortOut(_baseSetToString);
var _setToString = setToString;

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return _setToString(_overRest(func, undefined, flatten_1), func + '');
}
var _flatRest = flatRest;

/* Built-in method references that are verified to be native. */
var WeakMap = _getNative(_root, 'WeakMap');
var _WeakMap = WeakMap;

/** Used to store function metadata. */
var metaMap = _WeakMap && new _WeakMap();
var _metaMap = metaMap;

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}
var noop_1 = noop;

/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */
var getData = !_metaMap ? noop_1 : function (func) {
  return _metaMap.get(func);
};
var _getData = getData;

/** Used to lookup unminified function names. */
var realNames = {};
var _realNames = realNames;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */
function getFuncName(func) {
  var result = func.name + '',
    array = _realNames[result],
    length = hasOwnProperty$3.call(_realNames, result) ? array.length : 0;
  while (length--) {
    var data = array[length],
      otherFunc = data.func;
    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }
  return result;
}
var _getFuncName = getFuncName;

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @constructor
 * @param {*} value The value to wrap.
 */
function LazyWrapper(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH;
  this.__views__ = [];
}

// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype = _baseCreate(_baseLodash.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;
var _LazyWrapper = LazyWrapper;

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
    length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var _copyArray = copyArray;

/**
 * Creates a clone of `wrapper`.
 *
 * @private
 * @param {Object} wrapper The wrapper to clone.
 * @returns {Object} Returns the cloned wrapper.
 */
function wrapperClone(wrapper) {
  if (wrapper instanceof _LazyWrapper) {
    return wrapper.clone();
  }
  var result = new _LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
  result.__actions__ = _copyArray(wrapper.__actions__);
  result.__index__ = wrapper.__index__;
  result.__values__ = wrapper.__values__;
  return result;
}
var _wrapperClone = wrapperClone;

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chain sequences. Methods that operate on and return arrays, collections,
 * and functions can be chained together. Methods that retrieve a single value
 * or may return a primitive value will automatically end the chain sequence
 * and return the unwrapped value. Otherwise, the value must be unwrapped
 * with `_#value`.
 *
 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
 * enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, it's deferred until
 * `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion.
 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
 * the creation of intermediate arrays and can greatly reduce the number of
 * iteratee executions. Sections of a chain sequence qualify for shortcut
 * fusion if the section is applied to an array and iteratees accept only
 * one argument. The heuristic for whether a section qualifies for shortcut
 * fusion is subject to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
 * `zipObject`, `zipObjectDeep`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
 * `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Seq
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // Returns an unwrapped value.
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // Returns a wrapped value.
 * var squares = wrapped.map(square);
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */
function lodash(value) {
  if (isObjectLike_1(value) && !isArray_1(value) && !(value instanceof _LazyWrapper)) {
    if (value instanceof _LodashWrapper) {
      return value;
    }
    if (hasOwnProperty$2.call(value, '__wrapped__')) {
      return _wrapperClone(value);
    }
  }
  return new _LodashWrapper(value);
}

// Ensure wrappers are instances of `baseLodash`.
lodash.prototype = _baseLodash.prototype;
lodash.prototype.constructor = lodash;
var wrapperLodash = lodash;

/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
 *  else `false`.
 */
function isLaziable(func) {
  var funcName = _getFuncName(func),
    other = wrapperLodash[funcName];
  if (typeof other != 'function' || !(funcName in _LazyWrapper.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  var data = _getData(other);
  return !!data && func === data[0];
}
var _isLaziable = isLaziable;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to compose bitmasks for function metadata. */
var WRAP_CURRY_FLAG = 8,
  WRAP_PARTIAL_FLAG = 32,
  WRAP_ARY_FLAG = 128,
  WRAP_REARG_FLAG = 256;

/**
 * Creates a `_.flow` or `_.flowRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new flow function.
 */
function createFlow(fromRight) {
  return _flatRest(function (funcs) {
    var length = funcs.length,
      index = length,
      prereq = _LodashWrapper.prototype.thru;
    if (fromRight) {
      funcs.reverse();
    }
    while (index--) {
      var func = funcs[index];
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (prereq && !wrapper && _getFuncName(func) == 'wrapper') {
        var wrapper = new _LodashWrapper([], true);
      }
    }
    index = wrapper ? index : length;
    while (++index < length) {
      func = funcs[index];
      var funcName = _getFuncName(func),
        data = funcName == 'wrapper' ? _getData(func) : undefined;
      if (data && _isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
        wrapper = wrapper[_getFuncName(data[0])].apply(wrapper, data[3]);
      } else {
        wrapper = func.length == 1 && _isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
      }
    }
    return function () {
      var args = arguments,
        value = args[0];
      if (wrapper && args.length == 1 && isArray_1(value)) {
        return wrapper.plant(value).value();
      }
      var index = 0,
        result = length ? funcs[index].apply(this, args) : value;
      while (++index < length) {
        result = funcs[index].call(this, result);
      }
      return result;
    };
  });
}
var _createFlow = createFlow;

/**
 * Creates a function that returns the result of invoking the given functions
 * with the `this` binding of the created function, where each successive
 * invocation is supplied the return value of the previous.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Util
 * @param {...(Function|Function[])} [funcs] The functions to invoke.
 * @returns {Function} Returns the new composite function.
 * @see _.flowRight
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var addSquare = _.flow([_.add, square]);
 * addSquare(1, 2);
 * // => 9
 */
var flow = _createFlow();
var flow_1 = flow;
var TYPE_PRE_MONTH = -1;
var TYPE_NOW_MONTH = 0;
var TYPE_NEXT_MONTH = 1;

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
    proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$2;
  return value === proto;
}
var _isPrototype = isPrototype;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}
var _overArg = overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);
var _nativeKeys = nativeKeys;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$1.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}
var _baseKeys = baseKeys;

/* Built-in method references that are verified to be native. */
var DataView = _getNative(_root, 'DataView');
var _DataView = DataView;

/* Built-in method references that are verified to be native. */
var Map = _getNative(_root, 'Map');
var _Map = Map;

/* Built-in method references that are verified to be native. */
var Promise$1 = _getNative(_root, 'Promise');
var _Promise = Promise$1;

/* Built-in method references that are verified to be native. */
var Set$1 = _getNative(_root, 'Set');
var _Set = Set$1;

/** `Object#toString` result references. */
var mapTag$2 = '[object Map]',
  objectTag$1 = '[object Object]',
  promiseTag = '[object Promise]',
  setTag$2 = '[object Set]',
  weakMapTag$1 = '[object WeakMap]';
var dataViewTag$1 = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = _toSource(_DataView),
  mapCtorString = _toSource(_Map),
  promiseCtorString = _toSource(_Promise),
  setCtorString = _toSource(_Set),
  weakMapCtorString = _toSource(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$1 || _Map && getTag(new _Map()) != mapTag$2 || _Promise && getTag(_Promise.resolve()) != promiseTag || _Set && getTag(new _Set()) != setTag$2 || _WeakMap && getTag(new _WeakMap()) != weakMapTag$1) {
  getTag = function getTag(value) {
    var result = _baseGetTag(value),
      Ctor = result == objectTag$1 ? value.constructor : undefined,
      ctorString = Ctor ? _toSource(Ctor) : '';
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$1;
        case mapCtorString:
          return mapTag$2;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$2;
        case weakMapCtorString:
          return weakMapTag$1;
      }
    }
    return result;
  };
}
var _getTag = getTag;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}
var stubFalse_1 = stubFalse;
var isBuffer_1 = createCommonjsModule(function (module, exports) {
  /** Detect free variable `exports`. */
  var freeExports = exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Built-in value references. */
  var Buffer = moduleExports ? _root.Buffer : undefined;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */
  var isBuffer = nativeIsBuffer || stubFalse_1;
  module.exports = isBuffer;
});

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
  arrayTag = '[object Array]',
  boolTag = '[object Boolean]',
  dateTag = '[object Date]',
  errorTag = '[object Error]',
  funcTag = '[object Function]',
  mapTag$1 = '[object Map]',
  numberTag = '[object Number]',
  objectTag = '[object Object]',
  regexpTag = '[object RegExp]',
  setTag$1 = '[object Set]',
  stringTag = '[object String]',
  weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
  dataViewTag = '[object DataView]',
  float32Tag = '[object Float32Array]',
  float64Tag = '[object Float64Array]',
  int8Tag = '[object Int8Array]',
  int16Tag = '[object Int16Array]',
  int32Tag = '[object Int32Array]',
  uint8Tag = '[object Uint8Array]',
  uint8ClampedTag = '[object Uint8ClampedArray]',
  uint16Tag = '[object Uint16Array]',
  uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag$1] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag$1] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike_1(value) && isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}
var _baseIsTypedArray = baseIsTypedArray;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}
var _baseUnary = baseUnary;
var _nodeUtil = createCommonjsModule(function (module, exports) {
  /** Detect free variable `exports`. */
  var freeExports = exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && _freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = function () {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;
      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }();
  module.exports = nodeUtil;
});

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;
var isTypedArray_1 = isTypedArray;

/** `Object#toString` result references. */
var mapTag = '[object Map]',
  setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike_1(value) && (isArray_1(value) || typeof value == 'string' || typeof value.splice == 'function' || isBuffer_1(value) || isTypedArray_1(value) || isArguments_1(value))) {
    return !value.length;
  }
  var tag = _getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (_isPrototype(value)) {
    return !_baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}
var isEmpty_1 = isEmpty;
function handleActive(args, item) {
  var selectedDate = args.selectedDate;
  var _value = item._value;
  var start = selectedDate.start,
    end = selectedDate.end;
  var dayjsEnd = dayjs_min(end);
  var dayjsStart = start ? dayjs_min(start) : dayjsEnd;
  item.isSelected = (_value === null || _value === void 0 ? void 0 : _value.isSame(dayjsEnd)) || (_value === null || _value === void 0 ? void 0 : _value.isSame(dayjsStart)) || (_value === null || _value === void 0 ? void 0 : _value.isAfter(dayjsStart)) && (_value === null || _value === void 0 ? void 0 : _value.isBefore(dayjsEnd));
  item.isSelectedHead = _value === null || _value === void 0 ? void 0 : _value.isSame(dayjsStart);
  item.isSelectedTail = _value === null || _value === void 0 ? void 0 : _value.isSame(dayjsEnd);
  item.isToday = (_value === null || _value === void 0 ? void 0 : _value.diff(dayjs_min(Date.now()).startOf('day'), 'day')) === 0;
  return item;
}
function handleMarks(args, item) {
  var options = args.options;
  var _value = item._value;
  var marks = options.marks;
  var markList = marks.filter(function (mark) {
    return dayjs_min(mark.value).startOf('day').isSame(_value);
  });
  item.marks = markList.slice(0, 1);
  return item;
}
// export function handleSelectedDates (args: PluginArg): Calendar.Item {
// const { item, options } = args
// const { _value } = item
// const { selectedDates } = options
// if (selectedDates.length === 0) return args
// _forEach(selectedDates, date => {
//   const { isSelected, isHead, isTail } = item
//   // 如果当前 Item 已经具备了 三种状态下 无需继续判断 跳出循环
//   if (isSelected) {
//     return false
//   }
//   const { start, end } = date
//   const dayjsEnd = dayjs(end).startOf('day')
//   const dayjsStart = dayjs(start).startOf('day')
//   item.isSelected =
//     item.isSelected ||
//     (_value.isAfter(dayjsStart) && _value.isBefore(dayjsEnd))
//   item.isHead = item.isHead || _value.isSame(dayjsStart)
//   item.isTail = item.isTail || _value.isSame(dayjsEnd)
// })
//   return item
// }
function handleDisabled(args, item) {
  var options = args.options;
  var _value = item._value;
  var minDate = options.minDate,
    maxDate = options.maxDate;
  var dayjsMinDate = dayjs_min(minDate);
  var dayjsMaxDate = dayjs_min(maxDate);
  item.isDisabled = !!(minDate && (_value === null || _value === void 0 ? void 0 : _value.isBefore(dayjsMinDate))) || !!(maxDate && (_value === null || _value === void 0 ? void 0 : _value.isAfter(dayjsMaxDate)));
  return item;
}
function handleValid(args, item) {
  var options = args.options;
  var _value = item._value;
  var validDates = options.validDates;
  if (!isEmpty_1(validDates)) {
    var isInclude = validDates.some(function (date) {
      return dayjs_min(date.value).startOf('day').isSame(_value);
    });
    item.isDisabled = !isInclude;
  }
  delete item._value;
  return item;
}
var plugins = [handleActive, handleMarks, handleDisabled, handleValid];
var TOTAL = 7 * 6;
function getFullItem(item, options, selectedDate, isShowStatus) {
  if (options.marks.find(function (x) {
    return x.value === item.value;
  })) {
    item.marks = [{
      value: item.value
    }];
  }
  if (!isShowStatus) return item;
  var bindedPlugins = plugins.map(function (fn) {
    return fn.bind(null, {
      options: options,
      selectedDate: selectedDate
    });
  });
  return flow_1(bindedPlugins)(item);
}
function generateCalendarGroup(options) {
  return function (generateDate, selectedDate, isShowStatus) {
    var date = dayjs_min(generateDate);
    var format = options.format;
    // 获取生成日期的第一天 和 最后一天
    var firstDate = date.startOf('month');
    var lastDate = date.endOf('month');
    var preMonthDate = date.subtract(1, 'month');
    var list = [];
    var nowMonthDays = date.daysInMonth(); // 获取这个月有多少天
    var preMonthLastDay = preMonthDate.endOf('month').day(); // 获取上个月最后一天是周几
    // 生成上个月的日期
    for (var i_1 = 1; i_1 <= preMonthLastDay + 1; i_1++) {
      var thisDate = firstDate.subtract(i_1, 'day').startOf('day');
      var item = {
        marks: [],
        _value: thisDate,
        text: thisDate.date(),
        type: TYPE_PRE_MONTH,
        value: thisDate.format(format)
      };
      item = getFullItem(item, options, selectedDate, isShowStatus);
      list.push(item);
    }
    list.reverse();
    // 生成这个月的日期
    for (var i_2 = 0; i_2 < nowMonthDays; i_2++) {
      var thisDate = firstDate.add(i_2, 'day').startOf('day');
      var item = {
        marks: [],
        _value: thisDate,
        text: thisDate.date(),
        type: TYPE_NOW_MONTH,
        value: thisDate.format(format)
      };
      item = getFullItem(item, options, selectedDate, isShowStatus);
      list.push(item);
    }
    // 生成下个月的日期
    var i = 1;
    while (list.length < TOTAL) {
      var thisDate = lastDate.add(i++, 'day').startOf('day');
      var item = {
        marks: [],
        _value: thisDate,
        text: thisDate.date(),
        type: TYPE_NEXT_MONTH,
        value: thisDate.format(format)
      };
      item = getFullItem(item, options, selectedDate, isShowStatus);
      list.push(item);
    }
    return {
      list: list,
      value: generateDate
    };
  };
}
var _a;
var MAP = (_a = {}, _a[TYPE_PRE_MONTH] = 'pre', _a[TYPE_NOW_MONTH] = 'now', _a[TYPE_NEXT_MONTH] = 'next', _a);
var AtCalendarList = /** @class */function (_super) {
  __extends(AtCalendarList, _super);
  function AtCalendarList() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.handleClick = function (item) {
      if (typeof _this.props.onClick === 'function') {
        _this.props.onClick(item);
      }
    };
    _this.handleLongClick = function (item) {
      if (typeof _this.props.onLongClick === 'function') {
        _this.props.onLongClick(item);
      }
    };
    return _this;
  }
  AtCalendarList.prototype.render = function () {
    var _this = this;
    var list = this.props.list;
    if (!list || list.length === 0) return null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-calendar__list flex'
    }, list.map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        key: "list-item-" + item.value,
        onClick: _this.handleClick.bind(_this, item),
        onLongPress: _this.handleLongClick.bind(_this, item),
        className: classnames('flex__item', "flex__item--" + MAP[item.type], {
          'flex__item--today': item.isToday,
          'flex__item--active': item.isActive,
          'flex__item--selected': item.isSelected,
          'flex__item--selected-head': item.isSelectedHead,
          'flex__item--selected-tail': item.isSelectedTail,
          'flex__item--blur': item.isDisabled || item.type === TYPE_PRE_MONTH || item.type === TYPE_NEXT_MONTH
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: 'flex__item-container'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: 'container-text'
      }, item.text)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: 'flex__item-extra extra'
      }, item.marks && item.marks.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: 'extra-marks'
      }, item.marks.map(function (mark, key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
          key: key,
          className: 'mark'
        }, mark.value);
      })) : null));
    }));
  };
  return AtCalendarList;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
var AtCalendarHeader = /** @class */function (_super) {
  __extends(AtCalendarHeader, _super);
  function AtCalendarHeader() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AtCalendarHeader.prototype.render = function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-calendar__header header'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'header__flex'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'header__flex-item'
    }, "\u65E5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'header__flex-item'
    }, "\u4E00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'header__flex-item'
    }, "\u4E8C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'header__flex-item'
    }, "\u4E09"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'header__flex-item'
    }, "\u56DB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'header__flex-item'
    }, "\u4E94"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'header__flex-item'
    }, "\u516D")));
  };
  return AtCalendarHeader;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
var ANIMTE_DURATION = 300;
var defaultProps$1 = {
  marks: [],
  selectedDate: {
    end: Date.now(),
    start: Date.now()
  },
  format: 'YYYY-MM-DD',
  generateDate: Date.now()
};
var AtCalendarBody = /** @class */function (_super) {
  __extends(AtCalendarBody, _super);
  function AtCalendarBody(props) {
    var _this = _super.call(this, props) || this;
    _this.changeCount = 0;
    _this.currentSwiperIndex = 1;
    _this.startX = 0;
    _this.swipeStartPoint = 0;
    _this.isPreMonth = false;
    _this.maxWidth = 0;
    _this.isTouching = false;
    _this.getGroups = function (generateDate, selectedDate) {
      var dayjsDate = dayjs_min(generateDate);
      var arr = [];
      var preList = _this.generateFunc(dayjsDate.subtract(1, 'month').valueOf(), selectedDate);
      var nowList = _this.generateFunc(generateDate, selectedDate, true);
      var nextList = _this.generateFunc(dayjsDate.add(1, 'month').valueOf(), selectedDate);
      var preListIndex = _this.currentSwiperIndex === 0 ? 2 : _this.currentSwiperIndex - 1;
      var nextListIndex = _this.currentSwiperIndex === 2 ? 0 : _this.currentSwiperIndex + 1;
      arr[preListIndex] = preList;
      arr[nextListIndex] = nextList;
      arr[_this.currentSwiperIndex] = nowList;
      return arr;
    };
    _this.handleTouchStart = function (e) {
      if (!_this.props.isSwiper) {
        return;
      }
      _this.isTouching = true;
      _this.startX = e.touches[0].clientX;
    };
    _this.handleTouchMove = function (e) {
      if (!_this.props.isSwiper) {
        return;
      }
      if (!_this.isTouching) return;
      var clientX = e.touches[0].clientX;
      var offsetSize = clientX - _this.startX;
      _this.setState({
        offsetSize: offsetSize
      });
    };
    _this.animateMoveSlide = function (offset, callback) {
      _this.setState({
        isAnimate: true
      }, function () {
        _this.setState({
          offsetSize: offset
        });
        setTimeout(function () {
          _this.setState({
            isAnimate: false
          }, function () {
            callback && callback();
          });
        }, ANIMTE_DURATION);
      });
    };
    _this.handleTouchEnd = function () {
      if (!_this.props.isSwiper) {
        return;
      }
      var offsetSize = _this.state.offsetSize;
      _this.isTouching = false;
      var isRight = offsetSize > 0;
      var breakpoint = _this.maxWidth / 2;
      var absOffsetSize = Math.abs(offsetSize);
      if (absOffsetSize > breakpoint) {
        var res = isRight ? _this.maxWidth : -_this.maxWidth;
        return _this.animateMoveSlide(res, function () {
          _this.props.onSwipeMonth(isRight ? -1 : 1);
        });
      }
      _this.animateMoveSlide(0);
    };
    _this.handleChange = function (e) {
      var _a = e.detail,
        current = _a.current,
        source = _a.source;
      if (source === 'touch') {
        _this.currentSwiperIndex = current;
        _this.changeCount += 1;
      }
    };
    _this.handleAnimateFinish = function () {
      if (_this.changeCount > 0) {
        _this.props.onSwipeMonth(_this.isPreMonth ? -_this.changeCount : _this.changeCount);
        _this.changeCount = 0;
      }
    };
    _this.handleSwipeTouchStart = function (e) {
      var _a = e.changedTouches[0],
        clientY = _a.clientY,
        clientX = _a.clientX;
      _this.swipeStartPoint = _this.props.isVertical ? clientY : clientX;
    };
    _this.handleSwipeTouchEnd = function (e) {
      var _a = e.changedTouches[0],
        clientY = _a.clientY,
        clientX = _a.clientX;
      _this.isPreMonth = _this.props.isVertical ? clientY - _this.swipeStartPoint > 0 : clientX - _this.swipeStartPoint > 0;
    };
    var validDates = props.validDates,
      marks = props.marks,
      format = props.format,
      minDate = props.minDate,
      maxDate = props.maxDate,
      generateDate = props.generateDate,
      selectedDate = props.selectedDate,
      selectedDates = props.selectedDates;
    _this.generateFunc = generateCalendarGroup({
      validDates: validDates,
      format: format,
      minDate: minDate,
      maxDate: maxDate,
      marks: marks,
      selectedDates: selectedDates
    });
    var listGroup = _this.getGroups(generateDate, selectedDate);
    _this.state = {
      listGroup: listGroup,
      offsetSize: 0,
      isAnimate: false
    };
    return _this;
  }
  AtCalendarBody.prototype.componentDidMount = function () {
    var _this = this;
    delayQuerySelector('.at-calendar-slider__main').then(function (res) {
      _this.maxWidth = res[0].width;
    });
  };
  AtCalendarBody.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    var validDates = nextProps.validDates,
      marks = nextProps.marks,
      format = nextProps.format,
      minDate = nextProps.minDate,
      maxDate = nextProps.maxDate,
      generateDate = nextProps.generateDate,
      selectedDate = nextProps.selectedDate,
      selectedDates = nextProps.selectedDates;
    this.generateFunc = generateCalendarGroup({
      validDates: validDates,
      format: format,
      minDate: minDate,
      maxDate: maxDate,
      marks: marks,
      selectedDates: selectedDates
    });
    var listGroup = this.getGroups(generateDate, selectedDate);
    this.setState({
      offsetSize: 0,
      listGroup: listGroup
    });
  };
  AtCalendarBody.prototype.render = function () {
    var _this = this;
    var isSwiper = this.props.isSwiper;
    var _a = this.state,
      isAnimate = _a.isAnimate,
      offsetSize = _a.offsetSize,
      listGroup = _a.listGroup;
    if (!isSwiper) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: classnames('main', 'at-calendar-slider__main', "at-calendar-slider__main--" + "weapp")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtCalendarHeader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: 'main__body body'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
        className: 'body__slider body__slider--now'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtCalendarList, {
        list: listGroup[1].list,
        onClick: this.props.onDayClick,
        onLongClick: this.props.onLongClick
      }))));
    }
    /* 需要 Taro 组件库维护 Swiper 使 小程序 和 H5 的表现保持一致  */
    if (false) {}
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: classnames('main', 'at-calendar-slider__main', "at-calendar-slider__main--" + "weapp")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtCalendarHeader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Swiper */ "o"], {
      circular: true,
      current: 1,
      skipHiddenItemLayout: true,
      className: classnames('main__body'),
      onChange: this.handleChange,
      vertical: this.props.isVertical,
      onAnimationFinish: this.handleAnimateFinish,
      onTouchEnd: this.handleSwipeTouchEnd,
      onTouchStart: this.handleSwipeTouchStart
    }, listGroup.map(function (item, key) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* SwiperItem */ "p"], {
        key: key,
        itemId: key.toString()
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtCalendarList, {
        list: item.list,
        onClick: _this.props.onDayClick,
        onLongClick: _this.props.onLongClick
      }));
    })));
  };
  AtCalendarBody.defaultProps = defaultProps$1;
  return AtCalendarBody;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
var AtCalendarController = /** @class */function (_super) {
  __extends(AtCalendarController, _super);
  function AtCalendarController() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AtCalendarController.prototype.render = function () {
    var _a = this.props,
      generateDate = _a.generateDate,
      minDate = _a.minDate,
      maxDate = _a.maxDate,
      monthFormat = _a.monthFormat,
      hideArrow = _a.hideArrow;
    var dayjsDate = dayjs_min(generateDate);
    var dayjsMinDate = !!minDate && dayjs_min(minDate);
    var dayjsMaxDate = !!maxDate && dayjs_min(maxDate);
    var isMinMonth = dayjsMinDate && dayjsMinDate.startOf('month').isSame(dayjsDate);
    var isMaxMonth = dayjsMaxDate && dayjsMaxDate.startOf('month').isSame(dayjsDate);
    var minDateValue = dayjsMinDate ? dayjsMinDate.format('YYYY-MM') : '';
    var maxDateValue = dayjsMaxDate ? dayjsMaxDate.format('YYYY-MM') : '';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: 'at-calendar__controller controller'
    }, hideArrow ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: classnames('controller__arrow controller__arrow--left', {
        'controller__arrow--disabled': isMinMonth
      }),
      onClick: this.props.onPreMonth.bind(this, isMinMonth)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Picker */ "j"], {
      mode: 'date',
      fields: 'month',
      end: maxDateValue,
      start: minDateValue,
      onChange: this.props.onSelectDate,
      value: dayjsDate.format('YYYY-MM')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "r"], {
      className: 'controller__info'
    }, dayjsDate.format(monthFormat))), hideArrow ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: classnames('controller__arrow controller__arrow--right', {
        'controller__arrow--disabled': isMaxMonth
      }),
      onClick: this.props.onNextMonth.bind(this, isMaxMonth)
    }));
  };
  return AtCalendarController;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
var defaultProps = {
  validDates: [],
  marks: [],
  isSwiper: true,
  hideArrow: false,
  isVertical: false,
  selectedDates: [],
  isMultiSelect: false,
  format: 'YYYY-MM-DD',
  currentDate: Date.now(),
  monthFormat: 'YYYY年MM月'
};
var AtCalendar = /** @class */function (_super) {
  __extends(AtCalendar, _super);
  function AtCalendar(props) {
    var _this = _super.call(this, props) || this;
    _this.getSingleSelectdState = function (value) {
      var generateDate = _this.state.generateDate;
      var stateValue = {
        selectedDate: _this.getSelectedDate(value.valueOf())
      };
      var dayjsGenerateDate = value.startOf('month');
      var generateDateValue = dayjsGenerateDate.valueOf();
      if (generateDateValue !== generateDate) {
        _this.triggerChangeDate(dayjsGenerateDate);
        stateValue.generateDate = generateDateValue;
      }
      return stateValue;
    };
    _this.getMultiSelectedState = function (value) {
      var selectedDate = _this.state.selectedDate;
      var end = selectedDate.end,
        start = selectedDate.start;
      var valueUnix = value.valueOf();
      var state = {
        selectedDate: selectedDate
      };
      if (end) {
        state.selectedDate = _this.getSelectedDate(valueUnix, 0);
      } else {
        state.selectedDate.end = Math.max(valueUnix, +start);
        state.selectedDate.start = Math.min(valueUnix, +start);
      }
      return state;
    };
    _this.getSelectedDate = function (start, end) {
      var stateValue = {
        start: start,
        end: start
      };
      if (typeof end !== 'undefined') {
        stateValue.end = end;
      }
      return stateValue;
    };
    _this.triggerChangeDate = function (value) {
      var format = _this.props.format;
      if (typeof _this.props.onMonthChange !== 'function') return;
      _this.props.onMonthChange(value.format(format));
    };
    _this.setMonth = function (vectorCount) {
      var format = _this.props.format;
      var generateDate = _this.state.generateDate;
      var _generateDate = dayjs_min(generateDate).add(vectorCount, 'month');
      _this.setState({
        generateDate: _generateDate.valueOf()
      });
      if (vectorCount && typeof _this.props.onMonthChange === 'function') {
        _this.props.onMonthChange(_generateDate.format(format));
      }
    };
    _this.handleClickPreMonth = function (isMinMonth) {
      if (isMinMonth === true) {
        return;
      }
      _this.setMonth(-1);
      if (typeof _this.props.onClickPreMonth === 'function') {
        _this.props.onClickPreMonth();
      }
    };
    _this.handleClickNextMonth = function (isMaxMonth) {
      if (isMaxMonth === true) {
        return;
      }
      _this.setMonth(1);
      if (typeof _this.props.onClickNextMonth === 'function') {
        _this.props.onClickNextMonth();
      }
    };
    // picker 选择时间改变时触发
    _this.handleSelectDate = function (e) {
      var value = e.detail.value;
      var _generateDate = dayjs_min(value);
      var _generateDateValue = _generateDate.valueOf();
      if (_this.state.generateDate === _generateDateValue) return;
      _this.triggerChangeDate(_generateDate);
      _this.setState({
        generateDate: _generateDateValue
      });
    };
    _this.handleDayClick = function (item) {
      var isMultiSelect = _this.props.isMultiSelect;
      var isDisabled = item.isDisabled,
        value = item.value;
      if (isDisabled) return;
      var dayjsDate = dayjs_min(value);
      var stateValue = {};
      if (isMultiSelect) {
        stateValue = _this.getMultiSelectedState(dayjsDate);
      } else {
        stateValue = _this.getSingleSelectdState(dayjsDate);
      }
      _this.setState(stateValue, function () {
        _this.handleSelectedDate();
      });
      if (typeof _this.props.onDayClick === 'function') {
        _this.props.onDayClick({
          value: item.value
        });
      }
    };
    _this.handleSelectedDate = function () {
      var selectDate = _this.state.selectedDate;
      if (typeof _this.props.onSelectDate === 'function') {
        var info = {
          start: dayjs_min(selectDate.start).format(_this.props.format)
        };
        if (selectDate.end) {
          info.end = dayjs_min(selectDate.end).format(_this.props.format);
        }
        _this.props.onSelectDate({
          value: info
        });
      }
    };
    _this.handleDayLongClick = function (item) {
      if (typeof _this.props.onDayLongClick === 'function') {
        _this.props.onDayLongClick({
          value: item.value
        });
      }
    };
    var _a = props,
      currentDate = _a.currentDate,
      isMultiSelect = _a.isMultiSelect;
    _this.state = _this.getInitializeState(currentDate, isMultiSelect);
    return _this;
  }
  AtCalendar.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    var currentDate = nextProps.currentDate,
      isMultiSelect = nextProps.isMultiSelect;
    if (!currentDate || currentDate === this.props.currentDate) return;
    if (isMultiSelect && this.props.isMultiSelect) {
      var _a = currentDate,
        start = _a.start,
        end = _a.end;
      var _b = this.props.currentDate,
        preStart = _b.start,
        preEnd = _b.end;
      if (start === preStart && preEnd === end) {
        return;
      }
    }
    var stateValue = this.getInitializeState(currentDate, isMultiSelect);
    this.setState(stateValue);
  };
  AtCalendar.prototype.getInitializeState = function (currentDate, isMultiSelect) {
    var end;
    var start;
    var generateDateValue;
    if (!currentDate) {
      var dayjsStart = dayjs_min();
      start = dayjsStart.startOf('day').valueOf();
      generateDateValue = dayjsStart.startOf('month').valueOf();
      return {
        generateDate: generateDateValue,
        selectedDate: {
          start: ''
        }
      };
    }
    if (isMultiSelect) {
      var _a = currentDate,
        cStart = _a.start,
        cEnd = _a.end;
      var dayjsStart = dayjs_min(cStart);
      start = dayjsStart.startOf('day').valueOf();
      generateDateValue = dayjsStart.startOf('month').valueOf();
      end = cEnd ? dayjs_min(cEnd).startOf('day').valueOf() : start;
    } else {
      var dayjsStart = dayjs_min(currentDate);
      start = dayjsStart.startOf('day').valueOf();
      generateDateValue = dayjsStart.startOf('month').valueOf();
      end = start;
    }
    return {
      generateDate: generateDateValue,
      selectedDate: this.getSelectedDate(start, end)
    };
  };
  AtCalendar.prototype.render = function () {
    var _a = this.state,
      generateDate = _a.generateDate,
      selectedDate = _a.selectedDate;
    var _b = this.props,
      validDates = _b.validDates,
      marks = _b.marks,
      format = _b.format,
      minDate = _b.minDate,
      maxDate = _b.maxDate,
      isSwiper = _b.isSwiper,
      className = _b.className,
      hideArrow = _b.hideArrow,
      isVertical = _b.isVertical,
      monthFormat = _b.monthFormat,
      selectedDates = _b.selectedDates;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: classnames('at-calendar', className)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtCalendarController, {
      minDate: minDate,
      maxDate: maxDate,
      hideArrow: hideArrow,
      monthFormat: monthFormat,
      generateDate: generateDate,
      onPreMonth: this.handleClickPreMonth,
      onNextMonth: this.handleClickNextMonth,
      onSelectDate: this.handleSelectDate
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtCalendarBody, {
      validDates: validDates,
      marks: marks,
      format: format,
      minDate: minDate,
      maxDate: maxDate,
      isSwiper: isSwiper,
      isVertical: isVertical,
      selectedDate: selectedDate,
      selectedDates: selectedDates,
      generateDate: generateDate,
      onDayClick: this.handleDayClick,
      onSwipeMonth: this.setMonth,
      onLongClick: this.handleDayLongClick
    }));
  };
  AtCalendar.defaultProps = defaultProps;
  return AtCalendar;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
var AtFab = /** @class */function (_super) {
  __extends(AtFab, _super);
  function AtFab() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AtFab.prototype.onClick = function (e) {
    if (typeof this.props.onClick === 'function') {
      this.props.onClick(e);
    }
  };
  AtFab.prototype.render = function () {
    var _a;
    var _b = this.props,
      size = _b.size,
      className = _b.className,
      children = _b.children;
    var rootClass = classnames('at-fab', className, (_a = {}, _a["at-fab--" + size] = size, _a));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
      className: rootClass,
      onClick: this.onClick.bind(this)
    }, children);
  };
  return AtFab;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
AtFab.propTypes = {
  size: PropTypes.oneOf(['normal', 'small']),
  onClick: PropTypes.func
};
AtFab.defaultProps = {
  size: 'normal'
};
var objectToString = function objectToString(style) {
  if (style && Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(style) === 'object') {
    var styleStr_1 = '';
    Object.keys(style).forEach(function (key) {
      var lowerCaseKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      styleStr_1 += lowerCaseKey + ":" + style[key] + ";";
    });
    return styleStr_1;
  } else if (style && typeof style === 'string') {
    return style;
  }
  return '';
};
var AtComponent = /** @class */function (_super) {
  __extends(AtComponent, _super);
  function AtComponent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  /**
   * 合并 style
   * @param {Object|String} style1
   * @param {Object|String} style2
   * @returns {String}
   */
  AtComponent.prototype.mergeStyle = function (style1, style2) {
    if (style1 && Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(style1) === 'object' && style2 && Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(style2) === 'object') {
      return Object.assign({}, style1, style2);
    }
    return objectToString(style1) + objectToString(style2);
  };
  return AtComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"]))

/***/ }),

/***/ "./node_modules/taro-ui/dist/style/components/button.scss":
/*!****************************************************************!*\
  !*** ./node_modules/taro-ui/dist/style/components/button.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./src/pages/index/index.css":
/*!***********************************!*\
  !*** ./src/pages/index/index.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.tsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/index/index.tsx");


var config = {"navigationBarTitleText":"首页"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/index/index', {root:{cn:[]}}, config || {}))


/* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);


/***/ }),

/***/ "./src/toast.tsx":
/*!***********************!*\
  !*** ./src/toast.tsx ***!
  \***********************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tard */ "./node_modules/tard/dist/tard.es.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






var Toasts = function Toasts() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
      text: '普通提示',
      visible: true
    }),
    _useState2 = Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState, 2),
    toastParams = _useState2[0],
    setToast = _useState2[1];
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "u"], {
    className: "container",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(tard__WEBPACK_IMPORTED_MODULE_4__[/* Toast */ "b"], Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(C_Users_86177_Desktop_taro_xiaoxin_app2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, toastParams), {}, {
      onClose: function onClose() {
        return setToast({
          visible: false,
          text: ''
        });
      }
    }))
  });
};
/* harmony default export */ __webpack_exports__["a"] = (Toasts);

/***/ })

},[["./src/pages/index/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map