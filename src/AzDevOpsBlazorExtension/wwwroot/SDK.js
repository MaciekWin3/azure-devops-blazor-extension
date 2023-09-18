"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HostType = void 0;
exports.applyTheme = applyTheme;
exports.getAccessToken = getAccessToken;
exports.getAppToken = getAppToken;
exports.getConfiguration = getConfiguration;
exports.getContributionId = getContributionId;
exports.getExtensionContext = getExtensionContext;
exports.getHost = getHost;
exports.getService = getService;
exports.getUser = getUser;
exports.init = init;
exports.notifyLoadFailed = notifyLoadFailed;
exports.notifyLoadSucceeded = notifyLoadSucceeded;
exports.ready = ready;
exports.register = register;
exports.resize = resize;
exports.sdkVersion = void 0;
exports.unregister = unregister;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var getArray = function getArray() {
  return [];
};
// src/XDM.ts
var newFingerprint = function newFingerprint() {
  return Math.floor(Math.random() * (maxSafeInteger - smallestRandom) + smallestRandom).toString(36) + Math.floor(Math.random() * (maxSafeInteger - smallestRandom) + smallestRandom).toString(36);
};
var getAllPropertyNames = function getAllPropertyNames(obj) {
  var properties = {};
  while (obj && obj !== Object.prototype) {
    var ownPropertyNames = Object.getOwnPropertyNames(obj);
    var _iterator = _createForOfIteratorHelper(ownPropertyNames),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var name = _step.value;
        if (name !== "constructor") {
          properties[name] = true;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    obj = Object.getPrototypeOf(obj);
  }
  return properties;
};
var smallestRandom = parseInt("10000000000", 36);
var maxSafeInteger = Number.MAX_SAFE_INTEGER || 9007199254740991;
var XDMObjectRegistry = /*#__PURE__*/function () {
  function XDMObjectRegistry() {
    _classCallCheck(this, XDMObjectRegistry);
    _defineProperty(this, "objects", {});
  }
  _createClass(XDMObjectRegistry, [{
    key: "register",
    value: function register(instanceId, instance) {
      this.objects[instanceId] = instance;
    }
  }, {
    key: "unregister",
    value: function unregister(instanceId) {
      delete this.objects[instanceId];
    }
  }, {
    key: "getInstance",
    value: function getInstance(instanceId, contextData) {
      var instance = this.objects[instanceId];
      if (!instance) {
        return;
      }
      if (typeof instance === "function") {
        return instance(contextData);
      } else {
        return instance;
      }
    }
  }]);
  return XDMObjectRegistry;
}();
var MAX_XDM_DEPTH = 100;
var nextChannelId = 1;
var XDMChannel = /*#__PURE__*/function () {
  function XDMChannel(postToWindow, targetOrigin) {
    _classCallCheck(this, XDMChannel);
    _defineProperty(this, "promises", {});
    _defineProperty(this, "postToWindow", void 0);
    _defineProperty(this, "targetOrigin", void 0);
    _defineProperty(this, "handshakeToken", void 0);
    _defineProperty(this, "registry", void 0);
    _defineProperty(this, "channelId", void 0);
    _defineProperty(this, "nextMessageId", 1);
    _defineProperty(this, "nextProxyId", 1);
    _defineProperty(this, "proxyFunctions", {});
    this.postToWindow = postToWindow;
    this.targetOrigin = targetOrigin;
    this.registry = new XDMObjectRegistry();
    this.channelId = nextChannelId++;
    if (!this.targetOrigin) {
      this.handshakeToken = newFingerprint();
    }
  }
  _createClass(XDMChannel, [{
    key: "getObjectRegistry",
    value: function getObjectRegistry() {
      return this.registry;
    }
  }, {
    key: "invokeRemoteMethod",
    value: function () {
      var _invokeRemoteMethod = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(methodName, instanceId, params, instanceContextData, serializationSettings) {
        var _this = this;
        var message, promise;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              message = {
                id: this.nextMessageId++,
                methodName: methodName,
                instanceId: instanceId,
                instanceContext: instanceContextData,
                params: this._customSerializeObject(params, serializationSettings),
                serializationSettings: serializationSettings
              };
              if (!this.targetOrigin) {
                message.handshakeToken = this.handshakeToken;
              }
              promise = new Promise(function (resolve, reject) {
                _this.promises[message.id] = {
                  resolve: resolve,
                  reject: reject
                };
              });
              this._sendRpcMessage(message);
              return _context.abrupt("return", promise);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function invokeRemoteMethod(_x, _x2, _x3, _x4, _x5) {
        return _invokeRemoteMethod.apply(this, arguments);
      }
      return invokeRemoteMethod;
    }()
  }, {
    key: "getRemoteObjectProxy",
    value: function getRemoteObjectProxy(instanceId, contextData) {
      return this.invokeRemoteMethod("", instanceId, undefined, contextData);
    }
  }, {
    key: "invokeMethod",
    value: function invokeMethod(registeredInstance, rpcMessage) {
      var _this2 = this;
      if (!rpcMessage.methodName) {
        this._success(rpcMessage, registeredInstance, rpcMessage.handshakeToken);
        return;
      }
      var method = registeredInstance[rpcMessage.methodName];
      if (typeof method !== "function") {
        this.error(rpcMessage, new Error("RPC method not found: " + rpcMessage.methodName));
        return;
      }
      try {
        var methodArgs = [];
        if (rpcMessage.params) {
          methodArgs = this._customDeserializeObject(rpcMessage.params, {});
        }
        var result = method.apply(registeredInstance, methodArgs);
        if (result && result.then && typeof result.then === "function") {
          result.then(function (asyncResult) {
            _this2._success(rpcMessage, asyncResult, rpcMessage.handshakeToken);
          }, function (e) {
            _this2.error(rpcMessage, e);
          });
        } else {
          this._success(rpcMessage, result, rpcMessage.handshakeToken);
        }
      } catch (exception) {
        this.error(rpcMessage, exception);
      }
    }
  }, {
    key: "getRegisteredObject",
    value: function getRegisteredObject(instanceId, instanceContext) {
      if (instanceId === "__proxyFunctions") {
        return this.proxyFunctions;
      }
      var registeredObject = this.registry.getInstance(instanceId, instanceContext);
      if (!registeredObject) {
        registeredObject = globalObjectRegistry.getInstance(instanceId, instanceContext);
      }
      return registeredObject;
    }
  }, {
    key: "onMessage",
    value: function onMessage(rpcMessage) {
      var _this3 = this;
      if (rpcMessage.instanceId) {
        var registeredObject = this.getRegisteredObject(rpcMessage.instanceId, rpcMessage.instanceContext);
        if (!registeredObject) {
          return false;
        }
        if (typeof registeredObject["then"] === "function") {
          registeredObject.then(function (resolvedInstance) {
            _this3.invokeMethod(resolvedInstance, rpcMessage);
          }, function (e) {
            _this3.error(rpcMessage, e);
          });
        } else {
          this.invokeMethod(registeredObject, rpcMessage);
        }
      } else {
        var promise = this.promises[rpcMessage.id];
        if (!promise) {
          return false;
        }
        if (rpcMessage.error) {
          promise.reject(this._customDeserializeObject([rpcMessage.error], {})[0]);
        } else {
          promise.resolve(this._customDeserializeObject([rpcMessage.result], {})[0]);
        }
        delete this.promises[rpcMessage.id];
      }
      return true;
    }
  }, {
    key: "owns",
    value: function owns(source, origin, rpcMessage) {
      if (this.postToWindow === source) {
        if (this.targetOrigin) {
          if (origin) {
            return origin.toLowerCase() === "null" || this.targetOrigin.toLowerCase().indexOf(origin.toLowerCase()) === 0;
          } else {
            return false;
          }
        } else {
          if (rpcMessage.handshakeToken && rpcMessage.handshakeToken === this.handshakeToken) {
            this.targetOrigin = origin;
            return true;
          }
        }
      }
      return false;
    }
  }, {
    key: "error",
    value: function error(messageObj, errorObj) {
      this._sendRpcMessage({
        id: messageObj.id,
        error: this._customSerializeObject([errorObj], messageObj.serializationSettings)[0],
        handshakeToken: messageObj.handshakeToken
      });
    }
  }, {
    key: "_success",
    value: function _success(messageObj, result, handshakeToken) {
      this._sendRpcMessage({
        id: messageObj.id,
        result: this._customSerializeObject([result], messageObj.serializationSettings)[0],
        handshakeToken: handshakeToken
      });
    }
  }, {
    key: "_sendRpcMessage",
    value: function _sendRpcMessage(message) {
      this.postToWindow.postMessage(JSON.stringify(message), "*");
    }
  }, {
    key: "_customSerializeObject",
    value: function _customSerializeObject(obj, settings, prevParentObjects) {
      var _this4 = this;
      var nextCircularRefId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var depth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
      if (!obj || depth > MAX_XDM_DEPTH) {
        return;
      }
      if (obj instanceof Node || obj instanceof Window || obj instanceof Event) {
        return;
      }
      var returnValue;
      var parentObjects;
      if (!prevParentObjects) {
        parentObjects = {
          newObjects: [],
          originalObjects: []
        };
      } else {
        parentObjects = prevParentObjects;
      }
      parentObjects.originalObjects.push(obj);
      var serializeMember = function serializeMember(parentObject, newObject, key2) {
        var item;
        try {
          item = parentObject[key2];
        } catch (ex) {}
        var itemType = _typeof(item);
        if (itemType === "undefined") {
          return;
        }
        var parentItemIndex = -1;
        if (itemType === "object") {
          parentItemIndex = parentObjects.originalObjects.indexOf(item);
        }
        if (parentItemIndex >= 0) {
          var parentItem = parentObjects.newObjects[parentItemIndex];
          if (!parentItem.__circularReferenceId) {
            parentItem.__circularReferenceId = nextCircularRefId++;
          }
          newObject[key2] = {
            __circularReference: parentItem.__circularReferenceId
          };
        } else {
          if (itemType === "function") {
            var proxyFunctionId = _this4.nextProxyId++;
            newObject[key2] = {
              __proxyFunctionId: _this4._registerProxyFunction(item, obj),
              _channelId: _this4.channelId
            };
          } else if (itemType === "object") {
            if (item && item instanceof Date) {
              newObject[key2] = {
                __proxyDate: item.getTime()
              };
            } else {
              newObject[key2] = _this4._customSerializeObject(item, settings, parentObjects, nextCircularRefId, depth + 1);
            }
          } else if (key2 !== "__proxyFunctionId") {
            newObject[key2] = item;
          }
        }
      };
      if (obj instanceof Array) {
        returnValue = [];
        parentObjects.newObjects.push(returnValue);
        for (var i = 0, l = obj.length; i < l; i++) {
          serializeMember(obj, returnValue, i);
        }
      } else {
        returnValue = {};
        parentObjects.newObjects.push(returnValue);
        var keys = {};
        try {
          keys = getAllPropertyNames(obj);
        } catch (ex) {}
        for (var key in keys) {
          if (key && key[0] !== "_" || settings && settings.includeUnderscoreProperties) {
            serializeMember(obj, returnValue, key);
          }
        }
      }
      parentObjects.originalObjects.pop();
      parentObjects.newObjects.pop();
      return returnValue;
    }
  }, {
    key: "_registerProxyFunction",
    value: function _registerProxyFunction(func, context) {
      var proxyFunctionId = this.nextProxyId++;
      this.proxyFunctions["proxy" + proxyFunctionId] = function () {
        return func.apply(context, Array.prototype.slice.call(arguments, 0));
      };
      return proxyFunctionId;
    }
  }, {
    key: "_customDeserializeObject",
    value: function _customDeserializeObject(obj, circularRefs) {
      var _this5 = this;
      var that = this;
      if (!obj) {
        return null;
      }
      var deserializeMember = function deserializeMember(parentObject, key2) {
        var item = parentObject[key2];
        var itemType = _typeof(item);
        if (key2 === "__circularReferenceId" && itemType === "number") {
          circularRefs[item] = parentObject;
          delete parentObject[key2];
        } else if (itemType === "object" && item) {
          if (item.__proxyFunctionId) {
            parentObject[key2] = function () {
              return that.invokeRemoteMethod("proxy" + item.__proxyFunctionId, "__proxyFunctions", Array.prototype.slice.call(arguments, 0), {}, {
                includeUnderscoreProperties: true
              });
            };
          } else if (item.__proxyDate) {
            parentObject[key2] = new Date(item.__proxyDate);
          } else if (item.__circularReference) {
            parentObject[key2] = circularRefs[item.__circularReference];
          } else {
            _this5._customDeserializeObject(item, circularRefs);
          }
        }
      };
      if (obj instanceof Array) {
        for (var i = 0, l = obj.length; i < l; i++) {
          deserializeMember(obj, i);
        }
      } else if (_typeof(obj) === "object") {
        for (var key in obj) {
          deserializeMember(obj, key);
        }
      }
      return obj;
    }
  }]);
  return XDMChannel;
}();
var XDMChannelManager = /*#__PURE__*/function () {
  function XDMChannelManager() {
    var _this6 = this;
    _classCallCheck(this, XDMChannelManager);
    _defineProperty(this, "_channels", []);
    _defineProperty(this, "_handleMessageReceived", function (event) {
      var rpcMessage;
      if (typeof event.data === "string") {
        try {
          rpcMessage = JSON.parse(event.data);
        } catch (error) {}
      }
      if (rpcMessage) {
        var handled = false;
        var channelOwner;
        var _iterator2 = _createForOfIteratorHelper(_this6._channels),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var channel = _step2.value;
            if (channel.owns(event.source, event.origin, rpcMessage)) {
              channelOwner = channel;
              handled = channel.onMessage(rpcMessage) || handled;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        if (channelOwner && !handled) {
          if (window.console) {
            console.error("No handler found on any channel for message: ".concat(JSON.stringify(rpcMessage)));
          }
          if (rpcMessage.instanceId) {
            channelOwner.error(rpcMessage, new Error("The registered object ".concat(rpcMessage.instanceId, " could not be found.")));
          }
        }
      }
    });
    if (typeof window !== "undefined") {
      window.addEventListener("message", this._handleMessageReceived);
    }
  }
  _createClass(XDMChannelManager, [{
    key: "addChannel",
    value: function addChannel(window2, targetOrigin) {
      var channel = new XDMChannel(window2, targetOrigin);
      this._channels.push(channel);
      return channel;
    }
  }, {
    key: "removeChannel",
    value: function removeChannel(channel) {
      this._channels = this._channels.filter(function (c) {
        return c !== channel;
      });
    }
  }]);
  return XDMChannelManager;
}();
var globalObjectRegistry = new XDMObjectRegistry();
var channelManager = new XDMChannelManager();

// src/SDK.ts
var dispatchEvent = function dispatchEvent(eventName, params) {
  var global = window;
  var evt;
  if (typeof global.CustomEvent === "function") {
    evt = new global.CustomEvent(eventName, { detail: params });
  } else {
    params = params || {
      bubbles: false,
      cancelable: false
    };
    evt = new CustomEvent(eventName, {
      bubbles: params.bubbles,
      cancelable: params.cancelable,
      detail: params.detail
    });
  }
  //window.dispatchEvent(evt);
};
function init(options) {
  return new Promise(function (resolve) {
    var initOptions = _objectSpread(_objectSpread({}, options), {}, {
      sdkVersion: sdkVersion
    });
    parentChannel.invokeRemoteMethod("initialHandshake", hostControlId, [initOptions]).then(function (handshakeData) {
      initialConfiguration = handshakeData.initialConfig || {};
      initialContributionId = handshakeData.contributionId;
      var context = handshakeData.context;
      extensionContext = context.extension;
      userContext = context.user;
      hostContext = context.host;
      if (handshakeData.themeData) {
        applyTheme(handshakeData.themeData);
        window.addEventListener("themeChanged", function (ev) {
          applyTheme(ev.detail.data);
        });
      }
      resolveReady();
      resolve();
    });
  });
}
function ready() {
  return _ready.apply(this, arguments);
}
function _ready() {
  _ready = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", readyPromise);
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _ready.apply(this, arguments);
}
function notifyLoadSucceeded() {
  return parentChannel.invokeRemoteMethod("notifyLoadSucceeded", hostControlId);
}
function notifyLoadFailed(e) {
  return parentChannel.invokeRemoteMethod("notifyLoadFailed", hostControlId, [e]);
}
var getWaitForReadyError = function getWaitForReadyError(method) {
  return "Attempted to call ".concat(method, "() before init() was complete. Wait for init to complete or place within a ready() callback.");
};
function getConfiguration() {
  if (!initialConfiguration) {
    throw new Error(getWaitForReadyError("getConfiguration"));
  }
  return initialConfiguration;
}
function getContributionId() {
  if (!initialContributionId) {
    throw new Error(getWaitForReadyError("getContributionId"));
  }
  return initialContributionId;
}
function getUser() {
  if (!userContext) {
    throw new Error(getWaitForReadyError("getUser"));
  }
  return userContext;
}
function getHost() {
  if (!hostContext) {
    throw new Error(getWaitForReadyError("getHost"));
  }
  return hostContext;
}
function getExtensionContext() {
  if (!extensionContext) {
    throw new Error(getWaitForReadyError("getExtensionContext"));
  }
  return extensionContext;
}
function getService(_x6) {
  return _getService.apply(this, arguments);
}
function _getService() {
  _getService = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(contributionId) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", ready().then(function () {
            return parentChannel.invokeRemoteMethod("getService", serviceManagerId, [contributionId]);
          }));
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _getService.apply(this, arguments);
}
function register(instanceId, instance) {
  parentChannel.getObjectRegistry().register(instanceId, instance);
}
function unregister(instanceId) {
  parentChannel.getObjectRegistry().unregister(instanceId);
}
function getAccessToken() {
  return _getAccessToken.apply(this, arguments);
}
function _getAccessToken() {
  _getAccessToken = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", parentChannel.invokeRemoteMethod("getAccessToken", hostControlId).then(function (tokenObj) {
            return tokenObj.token;
          }));
        case 1:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _getAccessToken.apply(this, arguments);
}
function getAppToken() {
  return _getAppToken.apply(this, arguments);
}
function _getAppToken() {
  _getAppToken = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          return _context5.abrupt("return", parentChannel.invokeRemoteMethod("getAppToken", hostControlId).then(function (tokenObj) {
            return tokenObj.token;
          }));
        case 1:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _getAppToken.apply(this, arguments);
}
function resize(width, height) {
  var body = document.body;
  if (body) {
    var newWidth = typeof width === "number" ? width : body ? body.scrollWidth : undefined;
    var newHeight = typeof height === "number" ? height : body ? body.scrollHeight : undefined;
    parentChannel.invokeRemoteMethod("resize", hostControlId, [newWidth, newHeight]);
  }
}
function applyTheme(themeData) {
  if (!themeElement) {
    themeElement = document.createElement("style");
    themeElement.type = "text/css";
    document.head.appendChild(themeElement);
  }
  var cssVariables = [];
  if (themeData) {
    for (var varName in themeData) {
      cssVariables.push("--" + varName + ": " + themeData[varName]);
    }
  }
  themeElement.innerText = ":root { " + cssVariables.join("; ") + " } body { color: var(--text-primary-color) }";
  dispatchEvent("themeApplied", {
    detail: themeData
  });
}
var sdkVersion = 3;
exports.sdkVersion = sdkVersion;
var global = window;
if (global._AzureDevOpsSDKVersion) {
  console.error("The AzureDevOps SDK is already loaded. Only one version of this module can be loaded in a given document.");
}
global._AzureDevOpsSDKVersion = sdkVersion;
var HostType;
exports.HostType = HostType;
(function (HostType2) {
  HostType2[HostType2["Deployment"] = 1] = "Deployment";
  HostType2[HostType2["Enterprise"] = 2] = "Enterprise";
  HostType2[HostType2["Organization"] = 4] = "Organization";
})(HostType || (exports.HostType = HostType = {}));
var hostControlId = "DevOps.HostControl";
var serviceManagerId = "DevOps.ServiceManager";
var parentChannel = channelManager.addChannel(window.parent);
var extensionContext;
var initialConfiguration;
var initialContributionId;
var userContext;
var hostContext;
var themeElement;
var resolveReady;
var readyPromise = new Promise(function (resolve) {
  resolveReady = resolve;
});
parentChannel.getObjectRegistry().register("DevOps.SdkClient", {
  dispatchEvent: dispatchEvent
});