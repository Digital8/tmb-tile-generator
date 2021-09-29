var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module) => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    init_react_shim();
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
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
  }
});

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "node_modules/react/cjs/react.development.js"(exports) {
    init_react_shim();
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var _assign = require_object_assign();
        var ReactVersion = "17.0.2";
        var REACT_ELEMENT_TYPE = 60103;
        var REACT_PORTAL_TYPE = 60106;
        exports.Fragment = 60107;
        exports.StrictMode = 60108;
        exports.Profiler = 60114;
        var REACT_PROVIDER_TYPE = 60109;
        var REACT_CONTEXT_TYPE = 60110;
        var REACT_FORWARD_REF_TYPE = 60112;
        exports.Suspense = 60113;
        var REACT_SUSPENSE_LIST_TYPE = 60120;
        var REACT_MEMO_TYPE = 60115;
        var REACT_LAZY_TYPE = 60116;
        var REACT_BLOCK_TYPE = 60121;
        var REACT_SERVER_BLOCK_TYPE = 60122;
        var REACT_FUNDAMENTAL_TYPE = 60117;
        var REACT_SCOPE_TYPE = 60119;
        var REACT_OPAQUE_ID_TYPE = 60128;
        var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
        var REACT_OFFSCREEN_TYPE = 60130;
        var REACT_LEGACY_HIDDEN_TYPE = 60131;
        if (typeof Symbol === "function" && Symbol.for) {
          var symbolFor = Symbol.for;
          REACT_ELEMENT_TYPE = symbolFor("react.element");
          REACT_PORTAL_TYPE = symbolFor("react.portal");
          exports.Fragment = symbolFor("react.fragment");
          exports.StrictMode = symbolFor("react.strict_mode");
          exports.Profiler = symbolFor("react.profiler");
          REACT_PROVIDER_TYPE = symbolFor("react.provider");
          REACT_CONTEXT_TYPE = symbolFor("react.context");
          REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
          exports.Suspense = symbolFor("react.suspense");
          REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
          REACT_MEMO_TYPE = symbolFor("react.memo");
          REACT_LAZY_TYPE = symbolFor("react.lazy");
          REACT_BLOCK_TYPE = symbolFor("react.block");
          REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
          REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
          REACT_SCOPE_TYPE = symbolFor("react.scope");
          REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
          REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
          REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
          REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
        }
        var MAYBE_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactCurrentDispatcher = {
          current: null
        };
        var ReactCurrentBatchConfig = {
          transition: 0
        };
        var ReactCurrentOwner = {
          current: null
        };
        var ReactDebugCurrentFrame = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
          {
            currentExtraStackFrame = stack;
          }
        }
        {
          ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
            {
              currentExtraStackFrame = stack;
            }
          };
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function() {
            var stack = "";
            if (currentExtraStackFrame) {
              stack += currentExtraStackFrame;
            }
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || "";
            }
            return stack;
          };
        }
        var IsSomeRendererActing = {
          current: false
        };
        var ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner,
          IsSomeRendererActing,
          assign: _assign
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
        }
        function warn(format) {
          {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            printWarning("warn", format, args);
          }
        }
        function error(format) {
          {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            printWarning("error", format, args);
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return "" + item;
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        var ReactNoopUpdateQueue = {
          isMounted: function(publicInstance) {
            return false;
          },
          enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
          },
          enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
          },
          enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
          }
        };
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function(partialState, callback) {
          if (!(typeof partialState === "object" || typeof partialState === "function" || partialState == null)) {
            {
              throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            }
          }
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        {
          var deprecatedAPIs = {
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          };
          var defineDeprecationWarning = function(methodName, info) {
            Object.defineProperty(Component.prototype, methodName, {
              get: function() {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return void 0;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {
        }
        ComponentDummy.prototype = Component.prototype;
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent;
        _assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var functionName = innerType.displayName || innerType.name || "";
          return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentName(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case exports.Fragment:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case exports.Profiler:
              return "Profiler";
            case exports.StrictMode:
              return "StrictMode";
            case exports.Suspense:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                return getComponentName(type.type);
              case REACT_BLOCK_TYPE:
                return getComponentName(type._render);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentName(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function() {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function() {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
              var componentName = getComponentName(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            $$typeof: REACT_ELEMENT_TYPE,
            type,
            key,
            ref,
            props,
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function createElement(type, config, children) {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          var self = null;
          var source = null;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config);
              }
            }
            if (hasValidKey(config)) {
              key = "" + config.key;
            }
            self = config.__self === void 0 ? null : config.__self;
            source = config.__source === void 0 ? null : config.__source;
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        function cloneElement(element, config, children) {
          if (!!(element === null || element === void 0)) {
            {
              throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
            }
          }
          var propName;
          var props = _assign({}, element.props);
          var key = element.key;
          var ref = element.ref;
          var self = element._self;
          var source = element._source;
          var owner = element._owner;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
              key = "" + config.key;
            }
            var defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === void 0 && defaultProps !== void 0) {
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config[propName];
                }
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self, source, owner, props);
        }
        function isValidElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = ".";
        var SUBSEPARATOR = ":";
        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            "=": "=0",
            ":": "=2"
          };
          var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
          });
          return "$" + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return text.replace(userProvidedKeyEscapeRegex, "$&/");
        }
        function getElementKey(element, index) {
          if (typeof element === "object" && element !== null && element.key != null) {
            return escape("" + element.key);
          }
          return index.toString(36);
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if (type === "undefined" || type === "boolean") {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child);
            var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (Array.isArray(mappedChild)) {
              var escapedChildKey = "";
              if (childKey != null) {
                escapedChildKey = escapeUserProvidedKey(childKey) + "/";
              }
              mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                return c;
              });
            } else if (mappedChild != null) {
              if (isValidElement(mappedChild)) {
                mappedChild = cloneAndReplaceKey(mappedChild, escapedPrefix + (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? escapeUserProvidedKey("" + mappedChild.key) + "/" : "") + childKey);
              }
              array.push(mappedChild);
            }
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0;
          var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getElementKey(child, i);
              subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
              var iterableChildren = children;
              {
                if (iteratorFn === iterableChildren.entries) {
                  if (!didWarnAboutMaps) {
                    warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator2 = iteratorFn.call(iterableChildren);
              var step;
              var ii = 0;
              while (!(step = iterator2.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getElementKey(child, ii++);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else if (type === "object") {
              var childrenString = "" + children;
              {
                {
                  throw Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
                }
              }
            }
          }
          return subtreeCount;
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          var count = 0;
          mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function countChildren(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          mapChildren(children, function() {
            forEachFunc.apply(this, arguments);
          }, forEachContext);
        }
        function toArray(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        }
        function onlyChild(children) {
          if (!isValidElement(children)) {
            {
              throw Error("React.Children.only expected to receive a single React element child.");
            }
          }
          return children;
        }
        function createContext(defaultValue, calculateChangedBits) {
          if (calculateChangedBits === void 0) {
            calculateChangedBits = null;
          } else {
            {
              if (calculateChangedBits !== null && typeof calculateChangedBits !== "function") {
                error("createContext: Expected the optional second argument to be a function. Instead received: %s", calculateChangedBits);
              }
            }
          }
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            _calculateChangedBits: calculateChangedBits,
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            _threadCount: 0,
            Provider: null,
            Consumer: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          var hasWarnedAboutDisplayNameOnConsumer = false;
          {
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context,
              _calculateChangedBits: context._calculateChangedBits
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get: function() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                  }
                  return context.Provider;
                },
                set: function(_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function() {
                  return context._currentValue;
                },
                set: function(_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function() {
                  return context._currentValue2;
                },
                set: function(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function() {
                  return context._threadCount;
                },
                set: function(_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                  return context.Consumer;
                }
              },
              displayName: {
                get: function() {
                  return context.displayName;
                },
                set: function(displayName) {
                  if (!hasWarnedAboutDisplayNameOnConsumer) {
                    warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                    hasWarnedAboutDisplayNameOnConsumer = true;
                  }
                }
              }
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
          if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor();
            var pending = payload;
            pending._status = Pending;
            pending._result = thenable;
            thenable.then(function(moduleObject) {
              if (payload._status === Pending) {
                var defaultExport = moduleObject.default;
                {
                  if (defaultExport === void 0) {
                    error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
                  }
                }
                var resolved = payload;
                resolved._status = Resolved;
                resolved._result = defaultExport;
              }
            }, function(error2) {
              if (payload._status === Pending) {
                var rejected = payload;
                rejected._status = Rejected;
                rejected._result = error2;
              }
            });
          }
          if (payload._status === Resolved) {
            return payload._result;
          } else {
            throw payload._result;
          }
        }
        function lazy(ctor) {
          var payload = {
            _status: -1,
            _result: ctor
          };
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
          };
          {
            var defaultProps;
            var propTypes;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function() {
                  return defaultProps;
                },
                set: function(newDefaultProps) {
                  error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, "defaultProps", {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function() {
                  return propTypes;
                },
                set: function(newPropTypes) {
                  error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  propTypes = newPropTypes;
                  Object.defineProperty(lazyType, "propTypes", {
                    enumerable: true
                  });
                }
              }
            });
          }
          return lazyType;
        }
        function forwardRef(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
            } else if (typeof render !== "function") {
              error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
            } else {
              if (render.length !== 0 && render.length !== 2) {
                error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
              }
            }
            if (render != null) {
              if (render.defaultProps != null || render.propTypes != null) {
                error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
              }
            }
          }
          var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (render.displayName == null) {
                  render.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        var enableScopeAPI = false;
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
              return true;
            }
          }
          return false;
        }
        function memo(type, compare) {
          {
            if (!isValidElementType(type)) {
              error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
            }
          }
          var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (type.displayName == null) {
                  type.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          if (!(dispatcher !== null)) {
            {
              throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          return dispatcher;
        }
        function useContext(Context, unstable_observedBits) {
          var dispatcher = resolveDispatcher();
          {
            if (unstable_observedBits !== void 0) {
              error("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s", unstable_observedBits, typeof unstable_observedBits === "number" && Array.isArray(arguments[2]) ? "\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://reactjs.org/link/rules-of-hooks" : "");
            }
            if (Context._context !== void 0) {
              var realContext = Context._context;
              if (realContext.Consumer === Context) {
                error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
              } else if (realContext.Provider === Context) {
                error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
              }
            }
          }
          return dispatcher.useContext(Context, unstable_observedBits);
        }
        function useState(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer(reducer2, initialArg, init) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer2, initialArg, init);
        }
        function useRef(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useLayoutEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: _assign({}, props, {
                  value: prevLog
                }),
                info: _assign({}, props, {
                  value: prevInfo
                }),
                warn: _assign({}, props, {
                  value: prevWarn
                }),
                error: _assign({}, props, {
                  value: prevError
                }),
                group: _assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: _assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: _assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher$1.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component2) {
          var prototype = Component2.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case exports.Suspense:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_BLOCK_TYPE:
                return describeFunctionComponentFrame(type._render);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(Object.prototype.hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              setExtraStackFrame(stack);
            } else {
              setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentName(ReactCurrentOwner.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return "";
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
          }
          {
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== "object") {
            return;
          }
          if (Array.isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator2 = iteratorFn.call(node);
                var step;
                while (!(step = iterator2.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentName(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentName(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (Array.isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentName(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            {
              error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
          }
          var element = createElement.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === exports.Fragment) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
            }
            Object.defineProperty(validatedFactory, "type", {
              enumerable: false,
              get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                  value: type
                });
                return type;
              }
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        {
          try {
            var frozenObject = Object.freeze({});
            new Map([[frozenObject, null]]);
            new Set([frozenObject]);
          } catch (e) {
          }
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray,
          only: onlyChild
        };
        exports.Children = Children;
        exports.Component = Component;
        exports.PureComponent = PureComponent;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports.cloneElement = cloneElement$1;
        exports.createContext = createContext;
        exports.createElement = createElement$1;
        exports.createFactory = createFactory;
        exports.createRef = createRef;
        exports.forwardRef = forwardRef;
        exports.isValidElement = isValidElement;
        exports.lazy = lazy;
        exports.memo = memo;
        exports.useCallback = useCallback;
        exports.useContext = useContext;
        exports.useDebugValue = useDebugValue;
        exports.useEffect = useEffect;
        exports.useImperativeHandle = useImperativeHandle;
        exports.useLayoutEffect = useLayoutEffect;
        exports.useMemo = useMemo;
        exports.useReducer = useReducer;
        exports.useRef = useRef;
        exports.useState = useState;
        exports.version = ReactVersion;
      })();
    }
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module) {
    init_react_shim();
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_development();
    }
  }
});

// react-shim.js
var React;
var init_react_shim = __esm({
  "react-shim.js"() {
    React = __toModule(require_react());
  }
});

// node_modules/bit-twiddle/twiddle.js
var require_twiddle = __commonJS({
  "node_modules/bit-twiddle/twiddle.js"(exports) {
    init_react_shim();
    "use strict";
    "use restrict";
    var INT_BITS = 32;
    exports.INT_BITS = INT_BITS;
    exports.INT_MAX = 2147483647;
    exports.INT_MIN = -1 << INT_BITS - 1;
    exports.sign = function(v) {
      return (v > 0) - (v < 0);
    };
    exports.abs = function(v) {
      var mask = v >> INT_BITS - 1;
      return (v ^ mask) - mask;
    };
    exports.min = function(x, y) {
      return y ^ (x ^ y) & -(x < y);
    };
    exports.max = function(x, y) {
      return x ^ (x ^ y) & -(x < y);
    };
    exports.isPow2 = function(v) {
      return !(v & v - 1) && !!v;
    };
    exports.log2 = function(v) {
      var r, shift;
      r = (v > 65535) << 4;
      v >>>= r;
      shift = (v > 255) << 3;
      v >>>= shift;
      r |= shift;
      shift = (v > 15) << 2;
      v >>>= shift;
      r |= shift;
      shift = (v > 3) << 1;
      v >>>= shift;
      r |= shift;
      return r | v >> 1;
    };
    exports.log10 = function(v) {
      return v >= 1e9 ? 9 : v >= 1e8 ? 8 : v >= 1e7 ? 7 : v >= 1e6 ? 6 : v >= 1e5 ? 5 : v >= 1e4 ? 4 : v >= 1e3 ? 3 : v >= 100 ? 2 : v >= 10 ? 1 : 0;
    };
    exports.popCount = function(v) {
      v = v - (v >>> 1 & 1431655765);
      v = (v & 858993459) + (v >>> 2 & 858993459);
      return (v + (v >>> 4) & 252645135) * 16843009 >>> 24;
    };
    function countTrailingZeros(v) {
      var c = 32;
      v &= -v;
      if (v)
        c--;
      if (v & 65535)
        c -= 16;
      if (v & 16711935)
        c -= 8;
      if (v & 252645135)
        c -= 4;
      if (v & 858993459)
        c -= 2;
      if (v & 1431655765)
        c -= 1;
      return c;
    }
    exports.countTrailingZeros = countTrailingZeros;
    exports.nextPow2 = function(v) {
      v += v === 0;
      --v;
      v |= v >>> 1;
      v |= v >>> 2;
      v |= v >>> 4;
      v |= v >>> 8;
      v |= v >>> 16;
      return v + 1;
    };
    exports.prevPow2 = function(v) {
      v |= v >>> 1;
      v |= v >>> 2;
      v |= v >>> 4;
      v |= v >>> 8;
      v |= v >>> 16;
      return v - (v >>> 1);
    };
    exports.parity = function(v) {
      v ^= v >>> 16;
      v ^= v >>> 8;
      v ^= v >>> 4;
      v &= 15;
      return 27030 >>> v & 1;
    };
    var REVERSE_TABLE = new Array(256);
    (function(tab) {
      for (var i = 0; i < 256; ++i) {
        var v = i, r = i, s = 7;
        for (v >>>= 1; v; v >>>= 1) {
          r <<= 1;
          r |= v & 1;
          --s;
        }
        tab[i] = r << s & 255;
      }
    })(REVERSE_TABLE);
    exports.reverse = function(v) {
      return REVERSE_TABLE[v & 255] << 24 | REVERSE_TABLE[v >>> 8 & 255] << 16 | REVERSE_TABLE[v >>> 16 & 255] << 8 | REVERSE_TABLE[v >>> 24 & 255];
    };
    exports.interleave2 = function(x, y) {
      x &= 65535;
      x = (x | x << 8) & 16711935;
      x = (x | x << 4) & 252645135;
      x = (x | x << 2) & 858993459;
      x = (x | x << 1) & 1431655765;
      y &= 65535;
      y = (y | y << 8) & 16711935;
      y = (y | y << 4) & 252645135;
      y = (y | y << 2) & 858993459;
      y = (y | y << 1) & 1431655765;
      return x | y << 1;
    };
    exports.deinterleave2 = function(v, n) {
      v = v >>> n & 1431655765;
      v = (v | v >>> 1) & 858993459;
      v = (v | v >>> 2) & 252645135;
      v = (v | v >>> 4) & 16711935;
      v = (v | v >>> 16) & 65535;
      return v << 16 >> 16;
    };
    exports.interleave3 = function(x, y, z) {
      x &= 1023;
      x = (x | x << 16) & 4278190335;
      x = (x | x << 8) & 251719695;
      x = (x | x << 4) & 3272356035;
      x = (x | x << 2) & 1227133513;
      y &= 1023;
      y = (y | y << 16) & 4278190335;
      y = (y | y << 8) & 251719695;
      y = (y | y << 4) & 3272356035;
      y = (y | y << 2) & 1227133513;
      x |= y << 1;
      z &= 1023;
      z = (z | z << 16) & 4278190335;
      z = (z | z << 8) & 251719695;
      z = (z | z << 4) & 3272356035;
      z = (z | z << 2) & 1227133513;
      return x | z << 2;
    };
    exports.deinterleave3 = function(v, n) {
      v = v >>> n & 1227133513;
      v = (v | v >>> 2) & 3272356035;
      v = (v | v >>> 4) & 251719695;
      v = (v | v >>> 8) & 4278190335;
      v = (v | v >>> 16) & 1023;
      return v << 22 >> 22;
    };
    exports.nextCombination = function(v) {
      var t = v | v - 1;
      return t + 1 | (~t & -~t) - 1 >>> countTrailingZeros(v) + 1;
    };
  }
});

// node_modules/dup/dup.js
var require_dup = __commonJS({
  "node_modules/dup/dup.js"(exports, module) {
    init_react_shim();
    "use strict";
    function dupe_array(count, value, i) {
      var c = count[i] | 0;
      if (c <= 0) {
        return [];
      }
      var result = new Array(c), j;
      if (i === count.length - 1) {
        for (j = 0; j < c; ++j) {
          result[j] = value;
        }
      } else {
        for (j = 0; j < c; ++j) {
          result[j] = dupe_array(count, value, i + 1);
        }
      }
      return result;
    }
    function dupe_number(count, value) {
      var result, i;
      result = new Array(count);
      for (i = 0; i < count; ++i) {
        result[i] = value;
      }
      return result;
    }
    function dupe(count, value) {
      if (typeof value === "undefined") {
        value = 0;
      }
      switch (typeof count) {
        case "number":
          if (count > 0) {
            return dupe_number(count | 0, value);
          }
          break;
        case "object":
          if (typeof count.length === "number") {
            return dupe_array(count, value, 0);
          }
          break;
      }
      return [];
    }
    module.exports = dupe;
  }
});

// node_modules/base64-js/index.js
var require_base64_js = __commonJS({
  "node_modules/base64-js/index.js"(exports) {
    init_react_shim();
    "use strict";
    exports.byteLength = byteLength;
    exports.toByteArray = toByteArray;
    exports.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }
    var i;
    var len;
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
      var len2 = b64.length;
      if (len2 % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
      }
      var validLen = b64.indexOf("=");
      if (validLen === -1)
        validLen = len2;
      var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
      return [validLen, placeHoldersLen];
    }
    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function _byteLength(b64, validLen, placeHoldersLen) {
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i2;
      for (i2 = 0; i2 < len2; i2 += 4) {
        tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      return arr;
    }
    function tripletToBase64(num) {
      return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
    }
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i2 = start; i2 < end; i2 += 3) {
        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
        output.push(tripletToBase64(tmp));
      }
      return output.join("");
    }
    function fromByteArray(uint8) {
      var tmp;
      var len2 = uint8.length;
      var extraBytes = len2 % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
        parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
      }
      if (extraBytes === 1) {
        tmp = uint8[len2 - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
      } else if (extraBytes === 2) {
        tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
      }
      return parts.join("");
    }
  }
});

// node_modules/ieee754/index.js
var require_ieee754 = __commonJS({
  "node_modules/ieee754/index.js"(exports) {
    init_react_shim();
    exports.read = function(buffer, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? nBytes - 1 : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];
      i += d;
      e = s & (1 << -nBits) - 1;
      s >>= -nBits;
      nBits += eLen;
      for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : (s ? -1 : 1) * Infinity;
      } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
    };
    exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i = isLE ? 0 : nBytes - 1;
      var d = isLE ? 1 : -1;
      var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      value = Math.abs(value);
      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e++;
          c /= 2;
        }
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }
      for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
      }
      e = e << mLen | m;
      eLen += mLen;
      for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
      }
      buffer[offset + i - d] |= s * 128;
    };
  }
});

// node_modules/isarray/index.js
var require_isarray = __commonJS({
  "node_modules/isarray/index.js"(exports, module) {
    init_react_shim();
    var toString = {}.toString;
    module.exports = Array.isArray || function(arr) {
      return toString.call(arr) == "[object Array]";
    };
  }
});

// node_modules/buffer/index.js
var require_buffer = __commonJS({
  "node_modules/buffer/index.js"(exports) {
    init_react_shim();
    "use strict";
    var base64 = require_base64_js();
    var ieee754 = require_ieee754();
    var isArray = require_isarray();
    exports.Buffer = Buffer2;
    exports.SlowBuffer = SlowBuffer;
    exports.INSPECT_MAX_BYTES = 50;
    Buffer2.TYPED_ARRAY_SUPPORT = window.TYPED_ARRAY_SUPPORT !== void 0 ? window.TYPED_ARRAY_SUPPORT : typedArraySupport();
    exports.kMaxLength = kMaxLength();
    function typedArraySupport() {
      try {
        var arr = new Uint8Array(1);
        arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function() {
          return 42;
        } };
        return arr.foo() === 42 && typeof arr.subarray === "function" && arr.subarray(1, 1).byteLength === 0;
      } catch (e) {
        return false;
      }
    }
    function kMaxLength() {
      return Buffer2.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
    }
    function createBuffer(that, length) {
      if (kMaxLength() < length) {
        throw new RangeError("Invalid typed array length");
      }
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        that = new Uint8Array(length);
        that.__proto__ = Buffer2.prototype;
      } else {
        if (that === null) {
          that = new Buffer2(length);
        }
        that.length = length;
      }
      return that;
    }
    function Buffer2(arg, encodingOrOffset, length) {
      if (!Buffer2.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer2)) {
        return new Buffer2(arg, encodingOrOffset, length);
      }
      if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
          throw new Error("If encoding is specified then the first argument must be a string");
        }
        return allocUnsafe(this, arg);
      }
      return from(this, arg, encodingOrOffset, length);
    }
    Buffer2.poolSize = 8192;
    Buffer2._augment = function(arr) {
      arr.__proto__ = Buffer2.prototype;
      return arr;
    };
    function from(that, value, encodingOrOffset, length) {
      if (typeof value === "number") {
        throw new TypeError('"value" argument must not be a number');
      }
      if (typeof ArrayBuffer !== "undefined" && value instanceof ArrayBuffer) {
        return fromArrayBuffer(that, value, encodingOrOffset, length);
      }
      if (typeof value === "string") {
        return fromString(that, value, encodingOrOffset);
      }
      return fromObject(that, value);
    }
    Buffer2.from = function(value, encodingOrOffset, length) {
      return from(null, value, encodingOrOffset, length);
    };
    if (Buffer2.TYPED_ARRAY_SUPPORT) {
      Buffer2.prototype.__proto__ = Uint8Array.prototype;
      Buffer2.__proto__ = Uint8Array;
      if (typeof Symbol !== "undefined" && Symbol.species && Buffer2[Symbol.species] === Buffer2) {
        Object.defineProperty(Buffer2, Symbol.species, {
          value: null,
          configurable: true
        });
      }
    }
    function assertSize(size) {
      if (typeof size !== "number") {
        throw new TypeError('"size" argument must be a number');
      } else if (size < 0) {
        throw new RangeError('"size" argument must not be negative');
      }
    }
    function alloc(that, size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(that, size);
      }
      if (fill !== void 0) {
        return typeof encoding === "string" ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
      }
      return createBuffer(that, size);
    }
    Buffer2.alloc = function(size, fill, encoding) {
      return alloc(null, size, fill, encoding);
    };
    function allocUnsafe(that, size) {
      assertSize(size);
      that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
      if (!Buffer2.TYPED_ARRAY_SUPPORT) {
        for (var i = 0; i < size; ++i) {
          that[i] = 0;
        }
      }
      return that;
    }
    Buffer2.allocUnsafe = function(size) {
      return allocUnsafe(null, size);
    };
    Buffer2.allocUnsafeSlow = function(size) {
      return allocUnsafe(null, size);
    };
    function fromString(that, string, encoding) {
      if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
      }
      if (!Buffer2.isEncoding(encoding)) {
        throw new TypeError('"encoding" must be a valid string encoding');
      }
      var length = byteLength(string, encoding) | 0;
      that = createBuffer(that, length);
      var actual = that.write(string, encoding);
      if (actual !== length) {
        that = that.slice(0, actual);
      }
      return that;
    }
    function fromArrayLike(that, array) {
      var length = array.length < 0 ? 0 : checked(array.length) | 0;
      that = createBuffer(that, length);
      for (var i = 0; i < length; i += 1) {
        that[i] = array[i] & 255;
      }
      return that;
    }
    function fromArrayBuffer(that, array, byteOffset, length) {
      array.byteLength;
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError("'offset' is out of bounds");
      }
      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError("'length' is out of bounds");
      }
      if (byteOffset === void 0 && length === void 0) {
        array = new Uint8Array(array);
      } else if (length === void 0) {
        array = new Uint8Array(array, byteOffset);
      } else {
        array = new Uint8Array(array, byteOffset, length);
      }
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        that = array;
        that.__proto__ = Buffer2.prototype;
      } else {
        that = fromArrayLike(that, array);
      }
      return that;
    }
    function fromObject(that, obj) {
      if (Buffer2.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        that = createBuffer(that, len);
        if (that.length === 0) {
          return that;
        }
        obj.copy(that, 0, 0, len);
        return that;
      }
      if (obj) {
        if (typeof ArrayBuffer !== "undefined" && obj.buffer instanceof ArrayBuffer || "length" in obj) {
          if (typeof obj.length !== "number" || isnan(obj.length)) {
            return createBuffer(that, 0);
          }
          return fromArrayLike(that, obj);
        }
        if (obj.type === "Buffer" && isArray(obj.data)) {
          return fromArrayLike(that, obj.data);
        }
      }
      throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
    }
    function checked(length) {
      if (length >= kMaxLength()) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength().toString(16) + " bytes");
      }
      return length | 0;
    }
    function SlowBuffer(length) {
      if (+length != length) {
        length = 0;
      }
      return Buffer2.alloc(+length);
    }
    Buffer2.isBuffer = function isBuffer(b) {
      return !!(b != null && b._isBuffer);
    };
    Buffer2.compare = function compare(a, b) {
      if (!Buffer2.isBuffer(a) || !Buffer2.isBuffer(b)) {
        throw new TypeError("Arguments must be Buffers");
      }
      if (a === b)
        return 0;
      var x = a.length;
      var y = b.length;
      for (var i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    };
    Buffer2.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    Buffer2.concat = function concat(list, length) {
      if (!isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer2.alloc(0);
      }
      var i;
      if (length === void 0) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }
      var buffer = Buffer2.allocUnsafe(length);
      var pos = 0;
      for (i = 0; i < list.length; ++i) {
        var buf = list[i];
        if (!Buffer2.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        }
        buf.copy(buffer, pos);
        pos += buf.length;
      }
      return buffer;
    };
    function byteLength(string, encoding) {
      if (Buffer2.isBuffer(string)) {
        return string.length;
      }
      if (typeof ArrayBuffer !== "undefined" && typeof ArrayBuffer.isView === "function" && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
        return string.byteLength;
      }
      if (typeof string !== "string") {
        string = "" + string;
      }
      var len = string.length;
      if (len === 0)
        return 0;
      var loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "ascii":
          case "latin1":
          case "binary":
            return len;
          case "utf8":
          case "utf-8":
          case void 0:
            return utf8ToBytes(string).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return len * 2;
          case "hex":
            return len >>> 1;
          case "base64":
            return base64ToBytes(string).length;
          default:
            if (loweredCase)
              return utf8ToBytes(string).length;
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer2.byteLength = byteLength;
    function slowToString(encoding, start, end) {
      var loweredCase = false;
      if (start === void 0 || start < 0) {
        start = 0;
      }
      if (start > this.length) {
        return "";
      }
      if (end === void 0 || end > this.length) {
        end = this.length;
      }
      if (end <= 0) {
        return "";
      }
      end >>>= 0;
      start >>>= 0;
      if (end <= start) {
        return "";
      }
      if (!encoding)
        encoding = "utf8";
      while (true) {
        switch (encoding) {
          case "hex":
            return hexSlice(this, start, end);
          case "utf8":
          case "utf-8":
            return utf8Slice(this, start, end);
          case "ascii":
            return asciiSlice(this, start, end);
          case "latin1":
          case "binary":
            return latin1Slice(this, start, end);
          case "base64":
            return base64Slice(this, start, end);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, start, end);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer2.prototype._isBuffer = true;
    function swap(b, n, m) {
      var i = b[n];
      b[n] = b[m];
      b[m] = i;
    }
    Buffer2.prototype.swap16 = function swap16() {
      var len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (var i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }
      return this;
    };
    Buffer2.prototype.swap32 = function swap32() {
      var len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (var i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this;
    };
    Buffer2.prototype.swap64 = function swap64() {
      var len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (var i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }
      return this;
    };
    Buffer2.prototype.toString = function toString() {
      var length = this.length | 0;
      if (length === 0)
        return "";
      if (arguments.length === 0)
        return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };
    Buffer2.prototype.equals = function equals(b) {
      if (!Buffer2.isBuffer(b))
        throw new TypeError("Argument must be a Buffer");
      if (this === b)
        return true;
      return Buffer2.compare(this, b) === 0;
    };
    Buffer2.prototype.inspect = function inspect() {
      var str = "";
      var max = exports.INSPECT_MAX_BYTES;
      if (this.length > 0) {
        str = this.toString("hex", 0, max).match(/.{2}/g).join(" ");
        if (this.length > max)
          str += " ... ";
      }
      return "<Buffer " + str + ">";
    };
    Buffer2.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
      if (!Buffer2.isBuffer(target)) {
        throw new TypeError("Argument must be a Buffer");
      }
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target)
        return 0;
      var x = thisEnd - thisStart;
      var y = end - start;
      var len = Math.min(x, y);
      var thisCopy = this.slice(thisStart, thisEnd);
      var targetCopy = target.slice(start, end);
      for (var i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    };
    function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
      if (buffer.length === 0)
        return -1;
      if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
      } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
      }
      byteOffset = +byteOffset;
      if (isNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer.length - 1;
      }
      if (byteOffset < 0)
        byteOffset = buffer.length + byteOffset;
      if (byteOffset >= buffer.length) {
        if (dir)
          return -1;
        else
          byteOffset = buffer.length - 1;
      } else if (byteOffset < 0) {
        if (dir)
          byteOffset = 0;
        else
          return -1;
      }
      if (typeof val === "string") {
        val = Buffer2.from(val, encoding);
      }
      if (Buffer2.isBuffer(val)) {
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
      } else if (typeof val === "number") {
        val = val & 255;
        if (Buffer2.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === "function") {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
          }
        }
        return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      var indexSize = 1;
      var arrLength = arr.length;
      var valLength = val.length;
      if (encoding !== void 0) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }
      function read(buf, i2) {
        if (indexSize === 1) {
          return buf[i2];
        } else {
          return buf.readUInt16BE(i2 * indexSize);
        }
      }
      var i;
      if (dir) {
        var foundIndex = -1;
        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1)
              foundIndex = i;
            if (i - foundIndex + 1 === valLength)
              return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1)
              i -= i - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength)
          byteOffset = arrLength - valLength;
        for (i = byteOffset; i >= 0; i--) {
          var found = true;
          for (var j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break;
            }
          }
          if (found)
            return i;
        }
      }
      return -1;
    }
    Buffer2.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    function hexWrite(buf, string, offset, length) {
      offset = Number(offset) || 0;
      var remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }
      var strLen = string.length;
      if (strLen % 2 !== 0)
        throw new TypeError("Invalid hex string");
      if (length > strLen / 2) {
        length = strLen / 2;
      }
      for (var i = 0; i < length; ++i) {
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (isNaN(parsed))
          return i;
        buf[offset + i] = parsed;
      }
      return i;
    }
    function utf8Write(buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
    }
    function asciiWrite(buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length);
    }
    function latin1Write(buf, string, offset, length) {
      return asciiWrite(buf, string, offset, length);
    }
    function base64Write(buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length);
    }
    function ucs2Write(buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
    }
    Buffer2.prototype.write = function write(string, offset, length, encoding) {
      if (offset === void 0) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
      } else if (length === void 0 && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset | 0;
        if (isFinite(length)) {
          length = length | 0;
          if (encoding === void 0)
            encoding = "utf8";
        } else {
          encoding = length;
          length = void 0;
        }
      } else {
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      }
      var remaining = this.length - offset;
      if (length === void 0 || length > remaining)
        length = remaining;
      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding)
        encoding = "utf8";
      var loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string, offset, length);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string, offset, length);
          case "ascii":
            return asciiWrite(this, string, offset, length);
          case "latin1":
          case "binary":
            return latin1Write(this, string, offset, length);
          case "base64":
            return base64Write(this, string, offset, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string, offset, length);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };
    Buffer2.prototype.toJSON = function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
      } else {
        return base64.fromByteArray(buf.slice(start, end));
      }
    }
    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end);
      var res = [];
      var i = start;
      while (i < end) {
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
          var secondByte, thirdByte, fourthByte, tempCodePoint;
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 128) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i + 1];
              if ((secondByte & 192) === 128) {
                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                if (tempCodePoint > 127) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }
        if (codePoint === null) {
          codePoint = 65533;
          bytesPerSequence = 1;
        } else if (codePoint > 65535) {
          codePoint -= 65536;
          res.push(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
      }
      return decodeCodePointsArray(res);
    }
    var MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
      var len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
      }
      var res = "";
      var i = 0;
      while (i < len) {
        res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
      }
      return res;
    }
    function asciiSlice(buf, start, end) {
      var ret = "";
      end = Math.min(buf.length, end);
      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 127);
      }
      return ret;
    }
    function latin1Slice(buf, start, end) {
      var ret = "";
      end = Math.min(buf.length, end);
      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
      }
      return ret;
    }
    function hexSlice(buf, start, end) {
      var len = buf.length;
      if (!start || start < 0)
        start = 0;
      if (!end || end < 0 || end > len)
        end = len;
      var out = "";
      for (var i = start; i < end; ++i) {
        out += toHex(buf[i]);
      }
      return out;
    }
    function utf16leSlice(buf, start, end) {
      var bytes = buf.slice(start, end);
      var res = "";
      for (var i = 0; i < bytes.length; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
      }
      return res;
    }
    Buffer2.prototype.slice = function slice(start, end) {
      var len = this.length;
      start = ~~start;
      end = end === void 0 ? len : ~~end;
      if (start < 0) {
        start += len;
        if (start < 0)
          start = 0;
      } else if (start > len) {
        start = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0)
          end = 0;
      } else if (end > len) {
        end = len;
      }
      if (end < start)
        end = start;
      var newBuf;
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        newBuf = this.subarray(start, end);
        newBuf.__proto__ = Buffer2.prototype;
      } else {
        var sliceLen = end - start;
        newBuf = new Buffer2(sliceLen, void 0);
        for (var i = 0; i < sliceLen; ++i) {
          newBuf[i] = this[i + start];
        }
      }
      return newBuf;
    };
    function checkOffset(offset, ext, length) {
      if (offset % 1 !== 0 || offset < 0)
        throw new RangeError("offset is not uint");
      if (offset + ext > length)
        throw new RangeError("Trying to access beyond buffer length");
    }
    Buffer2.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      var val = this[offset + --byteLength2];
      var mul = 1;
      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength2] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      return this[offset];
    };
    Buffer2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };
    Buffer2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };
    Buffer2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer2.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer2.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      var i = byteLength2;
      var mul = 1;
      var val = this[offset + --i];
      while (i > 0 && (mul *= 256)) {
        val += this[offset + --i] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer2.prototype.readInt8 = function readInt8(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128))
        return this[offset];
      return (255 - this[offset] + 1) * -1;
    };
    Buffer2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      var val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      var val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, true, 23, 4);
    };
    Buffer2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, false, 23, 4);
    };
    Buffer2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, true, 52, 8);
    };
    Buffer2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, false, 52, 8);
    };
    function checkInt(buf, value, offset, ext, max, min) {
      if (!Buffer2.isBuffer(buf))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max || value < min)
        throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length)
        throw new RangeError("Index out of range");
    }
    Buffer2.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      var mul = 1;
      var i = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      var i = byteLength2 - 1;
      var mul = 1;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 255, 0);
      if (!Buffer2.TYPED_ARRAY_SUPPORT)
        value = Math.floor(value);
      this[offset] = value & 255;
      return offset + 1;
    };
    function objectWriteUInt16(buf, value, offset, littleEndian) {
      if (value < 0)
        value = 65535 + value + 1;
      for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
        buf[offset + i] = (value & 255 << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
      }
    }
    Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
      } else {
        objectWriteUInt16(this, value, offset, true);
      }
      return offset + 2;
    };
    Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
      } else {
        objectWriteUInt16(this, value, offset, false);
      }
      return offset + 2;
    };
    function objectWriteUInt32(buf, value, offset, littleEndian) {
      if (value < 0)
        value = 4294967295 + value + 1;
      for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
        buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 255;
      }
    }
    Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset + 3] = value >>> 24;
        this[offset + 2] = value >>> 16;
        this[offset + 1] = value >>> 8;
        this[offset] = value & 255;
      } else {
        objectWriteUInt32(this, value, offset, true);
      }
      return offset + 4;
    };
    Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
      } else {
        objectWriteUInt32(this, value, offset, false);
      }
      return offset + 4;
    };
    Buffer2.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      var i = 0;
      var mul = 1;
      var sub = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      var i = byteLength2 - 1;
      var mul = 1;
      var sub = 0;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 127, -128);
      if (!Buffer2.TYPED_ARRAY_SUPPORT)
        value = Math.floor(value);
      if (value < 0)
        value = 255 + value + 1;
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer2.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
      } else {
        objectWriteUInt16(this, value, offset, true);
      }
      return offset + 2;
    };
    Buffer2.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
      } else {
        objectWriteUInt16(this, value, offset, false);
      }
      return offset + 2;
    };
    Buffer2.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        this[offset + 2] = value >>> 16;
        this[offset + 3] = value >>> 24;
      } else {
        objectWriteUInt32(this, value, offset, true);
      }
      return offset + 4;
    };
    Buffer2.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (value < 0)
        value = 4294967295 + value + 1;
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
      } else {
        objectWriteUInt32(this, value, offset, false);
      }
      return offset + 4;
    };
    function checkIEEE754(buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length)
        throw new RangeError("Index out of range");
      if (offset < 0)
        throw new RangeError("Index out of range");
    }
    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
      }
      ieee754.write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4;
    }
    Buffer2.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };
    Buffer2.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };
    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
      }
      ieee754.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8;
    }
    Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };
    Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    };
    Buffer2.prototype.copy = function copy(target, targetStart, start, end) {
      if (!start)
        start = 0;
      if (!end && end !== 0)
        end = this.length;
      if (targetStart >= target.length)
        targetStart = target.length;
      if (!targetStart)
        targetStart = 0;
      if (end > 0 && end < start)
        end = start;
      if (end === start)
        return 0;
      if (target.length === 0 || this.length === 0)
        return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length)
        throw new RangeError("sourceStart out of bounds");
      if (end < 0)
        throw new RangeError("sourceEnd out of bounds");
      if (end > this.length)
        end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      var len = end - start;
      var i;
      if (this === target && start < targetStart && targetStart < end) {
        for (i = len - 1; i >= 0; --i) {
          target[i + targetStart] = this[i + start];
        }
      } else if (len < 1e3 || !Buffer2.TYPED_ARRAY_SUPPORT) {
        for (i = 0; i < len; ++i) {
          target[i + targetStart] = this[i + start];
        }
      } else {
        Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
      }
      return len;
    };
    Buffer2.prototype.fill = function fill(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (val.length === 1) {
          var code = val.charCodeAt(0);
          if (code < 256) {
            val = code;
          }
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
      } else if (typeof val === "number") {
        val = val & 255;
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val)
        val = 0;
      var i;
      if (typeof val === "number") {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        var bytes = Buffer2.isBuffer(val) ? val : utf8ToBytes(new Buffer2(val, encoding).toString());
        var len = bytes.length;
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }
      return this;
    };
    var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
    function base64clean(str) {
      str = stringtrim(str).replace(INVALID_BASE64_RE, "");
      if (str.length < 2)
        return "";
      while (str.length % 4 !== 0) {
        str = str + "=";
      }
      return str;
    }
    function stringtrim(str) {
      if (str.trim)
        return str.trim();
      return str.replace(/^\s+|\s+$/g, "");
    }
    function toHex(n) {
      if (n < 16)
        return "0" + n.toString(16);
      return n.toString(16);
    }
    function utf8ToBytes(string, units) {
      units = units || Infinity;
      var codePoint;
      var length = string.length;
      var leadSurrogate = null;
      var bytes = [];
      for (var i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);
        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              continue;
            } else if (i + 1 === length) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              continue;
            }
            leadSurrogate = codePoint;
            continue;
          }
          if (codePoint < 56320) {
            if ((units -= 3) > -1)
              bytes.push(239, 191, 189);
            leadSurrogate = codePoint;
            continue;
          }
          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
          if ((units -= 1) < 0)
            break;
          bytes.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0)
            break;
          bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0)
            break;
          bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0)
            break;
          bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else {
          throw new Error("Invalid code point");
        }
      }
      return bytes;
    }
    function asciiToBytes(str) {
      var byteArray = [];
      for (var i = 0; i < str.length; ++i) {
        byteArray.push(str.charCodeAt(i) & 255);
      }
      return byteArray;
    }
    function utf16leToBytes(str, units) {
      var c, hi, lo;
      var byteArray = [];
      for (var i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0)
          break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }
      return byteArray;
    }
    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str));
    }
    function blitBuffer(src, dst, offset, length) {
      for (var i = 0; i < length; ++i) {
        if (i + offset >= dst.length || i >= src.length)
          break;
        dst[i + offset] = src[i];
      }
      return i;
    }
    function isnan(val) {
      return val !== val;
    }
  }
});

// node_modules/typedarray-pool/pool.js
var require_pool = __commonJS({
  "node_modules/typedarray-pool/pool.js"(exports) {
    init_react_shim();
    "use strict";
    var bits = require_twiddle();
    var dup = require_dup();
    var Buffer2 = require_buffer().Buffer;
    if (!window.__TYPEDARRAY_POOL) {
      window.__TYPEDARRAY_POOL = {
        UINT8: dup([32, 0]),
        UINT16: dup([32, 0]),
        UINT32: dup([32, 0]),
        BIGUINT64: dup([32, 0]),
        INT8: dup([32, 0]),
        INT16: dup([32, 0]),
        INT32: dup([32, 0]),
        BIGINT64: dup([32, 0]),
        FLOAT: dup([32, 0]),
        DOUBLE: dup([32, 0]),
        DATA: dup([32, 0]),
        UINT8C: dup([32, 0]),
        BUFFER: dup([32, 0])
      };
    }
    var hasUint8C = typeof Uint8ClampedArray !== "undefined";
    var hasBigUint64 = typeof BigUint64Array !== "undefined";
    var hasBigInt64 = typeof BigInt64Array !== "undefined";
    var POOL = window.__TYPEDARRAY_POOL;
    if (!POOL.UINT8C) {
      POOL.UINT8C = dup([32, 0]);
    }
    if (!POOL.BIGUINT64) {
      POOL.BIGUINT64 = dup([32, 0]);
    }
    if (!POOL.BIGINT64) {
      POOL.BIGINT64 = dup([32, 0]);
    }
    if (!POOL.BUFFER) {
      POOL.BUFFER = dup([32, 0]);
    }
    var DATA = POOL.DATA;
    var BUFFER = POOL.BUFFER;
    exports.free = function free(array) {
      if (Buffer2.isBuffer(array)) {
        BUFFER[bits.log2(array.length)].push(array);
      } else {
        if (Object.prototype.toString.call(array) !== "[object ArrayBuffer]") {
          array = array.buffer;
        }
        if (!array) {
          return;
        }
        var n = array.length || array.byteLength;
        var log_n = bits.log2(n) | 0;
        DATA[log_n].push(array);
      }
    };
    function freeArrayBuffer(buffer) {
      if (!buffer) {
        return;
      }
      var n = buffer.length || buffer.byteLength;
      var log_n = bits.log2(n);
      DATA[log_n].push(buffer);
    }
    function freeTypedArray(array) {
      freeArrayBuffer(array.buffer);
    }
    exports.freeUint8 = exports.freeUint16 = exports.freeUint32 = exports.freeBigUint64 = exports.freeInt8 = exports.freeInt16 = exports.freeInt32 = exports.freeBigInt64 = exports.freeFloat32 = exports.freeFloat = exports.freeFloat64 = exports.freeDouble = exports.freeUint8Clamped = exports.freeDataView = freeTypedArray;
    exports.freeArrayBuffer = freeArrayBuffer;
    exports.freeBuffer = function freeBuffer(array) {
      BUFFER[bits.log2(array.length)].push(array);
    };
    exports.malloc = function malloc(n, dtype) {
      if (dtype === void 0 || dtype === "arraybuffer") {
        return mallocArrayBuffer(n);
      } else {
        switch (dtype) {
          case "uint8":
            return mallocUint8(n);
          case "uint16":
            return mallocUint16(n);
          case "uint32":
            return mallocUint32(n);
          case "int8":
            return mallocInt8(n);
          case "int16":
            return mallocInt16(n);
          case "int32":
            return mallocInt32(n);
          case "float":
          case "float32":
            return mallocFloat(n);
          case "double":
          case "float64":
            return mallocDouble(n);
          case "uint8_clamped":
            return mallocUint8Clamped(n);
          case "bigint64":
            return mallocBigInt64(n);
          case "biguint64":
            return mallocBigUint64(n);
          case "buffer":
            return mallocBuffer(n);
          case "data":
          case "dataview":
            return mallocDataView(n);
          default:
            return null;
        }
      }
      return null;
    };
    function mallocArrayBuffer(n) {
      var n = bits.nextPow2(n);
      var log_n = bits.log2(n);
      var d = DATA[log_n];
      if (d.length > 0) {
        return d.pop();
      }
      return new ArrayBuffer(n);
    }
    exports.mallocArrayBuffer = mallocArrayBuffer;
    function mallocUint8(n) {
      return new Uint8Array(mallocArrayBuffer(n), 0, n);
    }
    exports.mallocUint8 = mallocUint8;
    function mallocUint16(n) {
      return new Uint16Array(mallocArrayBuffer(2 * n), 0, n);
    }
    exports.mallocUint16 = mallocUint16;
    function mallocUint32(n) {
      return new Uint32Array(mallocArrayBuffer(4 * n), 0, n);
    }
    exports.mallocUint32 = mallocUint32;
    function mallocInt8(n) {
      return new Int8Array(mallocArrayBuffer(n), 0, n);
    }
    exports.mallocInt8 = mallocInt8;
    function mallocInt16(n) {
      return new Int16Array(mallocArrayBuffer(2 * n), 0, n);
    }
    exports.mallocInt16 = mallocInt16;
    function mallocInt32(n) {
      return new Int32Array(mallocArrayBuffer(4 * n), 0, n);
    }
    exports.mallocInt32 = mallocInt32;
    function mallocFloat(n) {
      return new Float32Array(mallocArrayBuffer(4 * n), 0, n);
    }
    exports.mallocFloat32 = exports.mallocFloat = mallocFloat;
    function mallocDouble(n) {
      return new Float64Array(mallocArrayBuffer(8 * n), 0, n);
    }
    exports.mallocFloat64 = exports.mallocDouble = mallocDouble;
    function mallocUint8Clamped(n) {
      if (hasUint8C) {
        return new Uint8ClampedArray(mallocArrayBuffer(n), 0, n);
      } else {
        return mallocUint8(n);
      }
    }
    exports.mallocUint8Clamped = mallocUint8Clamped;
    function mallocBigUint64(n) {
      if (hasBigUint64) {
        return new BigUint64Array(mallocArrayBuffer(8 * n), 0, n);
      } else {
        return null;
      }
    }
    exports.mallocBigUint64 = mallocBigUint64;
    function mallocBigInt64(n) {
      if (hasBigInt64) {
        return new BigInt64Array(mallocArrayBuffer(8 * n), 0, n);
      } else {
        return null;
      }
    }
    exports.mallocBigInt64 = mallocBigInt64;
    function mallocDataView(n) {
      return new DataView(mallocArrayBuffer(n), 0, n);
    }
    exports.mallocDataView = mallocDataView;
    function mallocBuffer(n) {
      n = bits.nextPow2(n);
      var log_n = bits.log2(n);
      var cache = BUFFER[log_n];
      if (cache.length > 0) {
        return cache.pop();
      }
      return new Buffer2(n);
    }
    exports.mallocBuffer = mallocBuffer;
    exports.clearCache = function clearCache() {
      for (var i = 0; i < 32; ++i) {
        POOL.UINT8[i].length = 0;
        POOL.UINT16[i].length = 0;
        POOL.UINT32[i].length = 0;
        POOL.INT8[i].length = 0;
        POOL.INT16[i].length = 0;
        POOL.INT32[i].length = 0;
        POOL.FLOAT[i].length = 0;
        POOL.DOUBLE[i].length = 0;
        POOL.BIGUINT64[i].length = 0;
        POOL.BIGINT64[i].length = 0;
        POOL.UINT8C[i].length = 0;
        DATA[i].length = 0;
        BUFFER[i].length = 0;
      }
    };
  }
});

// node_modules/box-intersect/lib/sort.js
var require_sort = __commonJS({
  "node_modules/box-intersect/lib/sort.js"(exports, module) {
    init_react_shim();
    "use strict";
    module.exports = wrapper;
    var INSERT_SORT_CUTOFF = 32;
    function wrapper(data, n0) {
      if (n0 <= 4 * INSERT_SORT_CUTOFF) {
        insertionSort(0, n0 - 1, data);
      } else {
        quickSort(0, n0 - 1, data);
      }
    }
    function insertionSort(left, right, data) {
      var ptr = 2 * (left + 1);
      for (var i = left + 1; i <= right; ++i) {
        var a = data[ptr++];
        var b = data[ptr++];
        var j = i;
        var jptr = ptr - 2;
        while (j-- > left) {
          var x = data[jptr - 2];
          var y = data[jptr - 1];
          if (x < a) {
            break;
          } else if (x === a && y < b) {
            break;
          }
          data[jptr] = x;
          data[jptr + 1] = y;
          jptr -= 2;
        }
        data[jptr] = a;
        data[jptr + 1] = b;
      }
    }
    function swap(i, j, data) {
      i *= 2;
      j *= 2;
      var x = data[i];
      var y = data[i + 1];
      data[i] = data[j];
      data[i + 1] = data[j + 1];
      data[j] = x;
      data[j + 1] = y;
    }
    function move(i, j, data) {
      i *= 2;
      j *= 2;
      data[i] = data[j];
      data[i + 1] = data[j + 1];
    }
    function rotate(i, j, k, data) {
      i *= 2;
      j *= 2;
      k *= 2;
      var x = data[i];
      var y = data[i + 1];
      data[i] = data[j];
      data[i + 1] = data[j + 1];
      data[j] = data[k];
      data[j + 1] = data[k + 1];
      data[k] = x;
      data[k + 1] = y;
    }
    function shufflePivot(i, j, px, py, data) {
      i *= 2;
      j *= 2;
      data[i] = data[j];
      data[j] = px;
      data[i + 1] = data[j + 1];
      data[j + 1] = py;
    }
    function compare(i, j, data) {
      i *= 2;
      j *= 2;
      var x = data[i], y = data[j];
      if (x < y) {
        return false;
      } else if (x === y) {
        return data[i + 1] > data[j + 1];
      }
      return true;
    }
    function comparePivot(i, y, b, data) {
      i *= 2;
      var x = data[i];
      if (x < y) {
        return true;
      } else if (x === y) {
        return data[i + 1] < b;
      }
      return false;
    }
    function quickSort(left, right, data) {
      var sixth = (right - left + 1) / 6 | 0, index1 = left + sixth, index5 = right - sixth, index3 = left + right >> 1, index2 = index3 - sixth, index4 = index3 + sixth, el1 = index1, el2 = index2, el3 = index3, el4 = index4, el5 = index5, less = left + 1, great = right - 1, tmp = 0;
      if (compare(el1, el2, data)) {
        tmp = el1;
        el1 = el2;
        el2 = tmp;
      }
      if (compare(el4, el5, data)) {
        tmp = el4;
        el4 = el5;
        el5 = tmp;
      }
      if (compare(el1, el3, data)) {
        tmp = el1;
        el1 = el3;
        el3 = tmp;
      }
      if (compare(el2, el3, data)) {
        tmp = el2;
        el2 = el3;
        el3 = tmp;
      }
      if (compare(el1, el4, data)) {
        tmp = el1;
        el1 = el4;
        el4 = tmp;
      }
      if (compare(el3, el4, data)) {
        tmp = el3;
        el3 = el4;
        el4 = tmp;
      }
      if (compare(el2, el5, data)) {
        tmp = el2;
        el2 = el5;
        el5 = tmp;
      }
      if (compare(el2, el3, data)) {
        tmp = el2;
        el2 = el3;
        el3 = tmp;
      }
      if (compare(el4, el5, data)) {
        tmp = el4;
        el4 = el5;
        el5 = tmp;
      }
      var pivot1X = data[2 * el2];
      var pivot1Y = data[2 * el2 + 1];
      var pivot2X = data[2 * el4];
      var pivot2Y = data[2 * el4 + 1];
      var ptr0 = 2 * el1;
      var ptr2 = 2 * el3;
      var ptr4 = 2 * el5;
      var ptr5 = 2 * index1;
      var ptr6 = 2 * index3;
      var ptr7 = 2 * index5;
      for (var i1 = 0; i1 < 2; ++i1) {
        var x = data[ptr0 + i1];
        var y = data[ptr2 + i1];
        var z = data[ptr4 + i1];
        data[ptr5 + i1] = x;
        data[ptr6 + i1] = y;
        data[ptr7 + i1] = z;
      }
      move(index2, left, data);
      move(index4, right, data);
      for (var k = less; k <= great; ++k) {
        if (comparePivot(k, pivot1X, pivot1Y, data)) {
          if (k !== less) {
            swap(k, less, data);
          }
          ++less;
        } else {
          if (!comparePivot(k, pivot2X, pivot2Y, data)) {
            while (true) {
              if (!comparePivot(great, pivot2X, pivot2Y, data)) {
                if (--great < k) {
                  break;
                }
                continue;
              } else {
                if (comparePivot(great, pivot1X, pivot1Y, data)) {
                  rotate(k, less, great, data);
                  ++less;
                  --great;
                } else {
                  swap(k, great, data);
                  --great;
                }
                break;
              }
            }
          }
        }
      }
      shufflePivot(left, less - 1, pivot1X, pivot1Y, data);
      shufflePivot(right, great + 1, pivot2X, pivot2Y, data);
      if (less - 2 - left <= INSERT_SORT_CUTOFF) {
        insertionSort(left, less - 2, data);
      } else {
        quickSort(left, less - 2, data);
      }
      if (right - (great + 2) <= INSERT_SORT_CUTOFF) {
        insertionSort(great + 2, right, data);
      } else {
        quickSort(great + 2, right, data);
      }
      if (great - less <= INSERT_SORT_CUTOFF) {
        insertionSort(less, great, data);
      } else {
        quickSort(less, great, data);
      }
    }
  }
});

// node_modules/box-intersect/lib/sweep.js
var require_sweep = __commonJS({
  "node_modules/box-intersect/lib/sweep.js"(exports, module) {
    init_react_shim();
    "use strict";
    module.exports = {
      init: sqInit,
      sweepBipartite,
      sweepComplete,
      scanBipartite,
      scanComplete
    };
    var pool = require_pool();
    var bits = require_twiddle();
    var isort = require_sort();
    var BLUE_FLAG = 1 << 28;
    var INIT_CAPACITY = 1024;
    var RED_SWEEP_QUEUE = pool.mallocInt32(INIT_CAPACITY);
    var RED_SWEEP_INDEX = pool.mallocInt32(INIT_CAPACITY);
    var BLUE_SWEEP_QUEUE = pool.mallocInt32(INIT_CAPACITY);
    var BLUE_SWEEP_INDEX = pool.mallocInt32(INIT_CAPACITY);
    var COMMON_SWEEP_QUEUE = pool.mallocInt32(INIT_CAPACITY);
    var COMMON_SWEEP_INDEX = pool.mallocInt32(INIT_CAPACITY);
    var SWEEP_EVENTS = pool.mallocDouble(INIT_CAPACITY * 8);
    function sqInit(count) {
      var rcount = bits.nextPow2(count);
      if (RED_SWEEP_QUEUE.length < rcount) {
        pool.free(RED_SWEEP_QUEUE);
        RED_SWEEP_QUEUE = pool.mallocInt32(rcount);
      }
      if (RED_SWEEP_INDEX.length < rcount) {
        pool.free(RED_SWEEP_INDEX);
        RED_SWEEP_INDEX = pool.mallocInt32(rcount);
      }
      if (BLUE_SWEEP_QUEUE.length < rcount) {
        pool.free(BLUE_SWEEP_QUEUE);
        BLUE_SWEEP_QUEUE = pool.mallocInt32(rcount);
      }
      if (BLUE_SWEEP_INDEX.length < rcount) {
        pool.free(BLUE_SWEEP_INDEX);
        BLUE_SWEEP_INDEX = pool.mallocInt32(rcount);
      }
      if (COMMON_SWEEP_QUEUE.length < rcount) {
        pool.free(COMMON_SWEEP_QUEUE);
        COMMON_SWEEP_QUEUE = pool.mallocInt32(rcount);
      }
      if (COMMON_SWEEP_INDEX.length < rcount) {
        pool.free(COMMON_SWEEP_INDEX);
        COMMON_SWEEP_INDEX = pool.mallocInt32(rcount);
      }
      var eventLength = 8 * rcount;
      if (SWEEP_EVENTS.length < eventLength) {
        pool.free(SWEEP_EVENTS);
        SWEEP_EVENTS = pool.mallocDouble(eventLength);
      }
    }
    function sqPop(queue, index, count, item) {
      var idx = index[item];
      var top = queue[count - 1];
      queue[idx] = top;
      index[top] = idx;
    }
    function sqPush(queue, index, count, item) {
      queue[count] = item;
      index[item] = count;
    }
    function sweepBipartite(d, visit, redStart, redEnd, red, redIndex, blueStart, blueEnd, blue, blueIndex) {
      var ptr = 0;
      var elemSize = 2 * d;
      var istart = d - 1;
      var iend = elemSize - 1;
      for (var i = redStart; i < redEnd; ++i) {
        var idx = redIndex[i];
        var redOffset = elemSize * i;
        SWEEP_EVENTS[ptr++] = red[redOffset + istart];
        SWEEP_EVENTS[ptr++] = -(idx + 1);
        SWEEP_EVENTS[ptr++] = red[redOffset + iend];
        SWEEP_EVENTS[ptr++] = idx;
      }
      for (var i = blueStart; i < blueEnd; ++i) {
        var idx = blueIndex[i] + BLUE_FLAG;
        var blueOffset = elemSize * i;
        SWEEP_EVENTS[ptr++] = blue[blueOffset + istart];
        SWEEP_EVENTS[ptr++] = -idx;
        SWEEP_EVENTS[ptr++] = blue[blueOffset + iend];
        SWEEP_EVENTS[ptr++] = idx;
      }
      var n = ptr >>> 1;
      isort(SWEEP_EVENTS, n);
      var redActive = 0;
      var blueActive = 0;
      for (var i = 0; i < n; ++i) {
        var e = SWEEP_EVENTS[2 * i + 1] | 0;
        if (e >= BLUE_FLAG) {
          e = e - BLUE_FLAG | 0;
          sqPop(BLUE_SWEEP_QUEUE, BLUE_SWEEP_INDEX, blueActive--, e);
        } else if (e >= 0) {
          sqPop(RED_SWEEP_QUEUE, RED_SWEEP_INDEX, redActive--, e);
        } else if (e <= -BLUE_FLAG) {
          e = -e - BLUE_FLAG | 0;
          for (var j = 0; j < redActive; ++j) {
            var retval = visit(RED_SWEEP_QUEUE[j], e);
            if (retval !== void 0) {
              return retval;
            }
          }
          sqPush(BLUE_SWEEP_QUEUE, BLUE_SWEEP_INDEX, blueActive++, e);
        } else {
          e = -e - 1 | 0;
          for (var j = 0; j < blueActive; ++j) {
            var retval = visit(e, BLUE_SWEEP_QUEUE[j]);
            if (retval !== void 0) {
              return retval;
            }
          }
          sqPush(RED_SWEEP_QUEUE, RED_SWEEP_INDEX, redActive++, e);
        }
      }
    }
    function sweepComplete(d, visit, redStart, redEnd, red, redIndex, blueStart, blueEnd, blue, blueIndex) {
      var ptr = 0;
      var elemSize = 2 * d;
      var istart = d - 1;
      var iend = elemSize - 1;
      for (var i = redStart; i < redEnd; ++i) {
        var idx = redIndex[i] + 1 << 1;
        var redOffset = elemSize * i;
        SWEEP_EVENTS[ptr++] = red[redOffset + istart];
        SWEEP_EVENTS[ptr++] = -idx;
        SWEEP_EVENTS[ptr++] = red[redOffset + iend];
        SWEEP_EVENTS[ptr++] = idx;
      }
      for (var i = blueStart; i < blueEnd; ++i) {
        var idx = blueIndex[i] + 1 << 1;
        var blueOffset = elemSize * i;
        SWEEP_EVENTS[ptr++] = blue[blueOffset + istart];
        SWEEP_EVENTS[ptr++] = -idx | 1;
        SWEEP_EVENTS[ptr++] = blue[blueOffset + iend];
        SWEEP_EVENTS[ptr++] = idx | 1;
      }
      var n = ptr >>> 1;
      isort(SWEEP_EVENTS, n);
      var redActive = 0;
      var blueActive = 0;
      var commonActive = 0;
      for (var i = 0; i < n; ++i) {
        var e = SWEEP_EVENTS[2 * i + 1] | 0;
        var color = e & 1;
        if (i < n - 1 && e >> 1 === SWEEP_EVENTS[2 * i + 3] >> 1) {
          color = 2;
          i += 1;
        }
        if (e < 0) {
          var id = -(e >> 1) - 1;
          for (var j = 0; j < commonActive; ++j) {
            var retval = visit(COMMON_SWEEP_QUEUE[j], id);
            if (retval !== void 0) {
              return retval;
            }
          }
          if (color !== 0) {
            for (var j = 0; j < redActive; ++j) {
              var retval = visit(RED_SWEEP_QUEUE[j], id);
              if (retval !== void 0) {
                return retval;
              }
            }
          }
          if (color !== 1) {
            for (var j = 0; j < blueActive; ++j) {
              var retval = visit(BLUE_SWEEP_QUEUE[j], id);
              if (retval !== void 0) {
                return retval;
              }
            }
          }
          if (color === 0) {
            sqPush(RED_SWEEP_QUEUE, RED_SWEEP_INDEX, redActive++, id);
          } else if (color === 1) {
            sqPush(BLUE_SWEEP_QUEUE, BLUE_SWEEP_INDEX, blueActive++, id);
          } else if (color === 2) {
            sqPush(COMMON_SWEEP_QUEUE, COMMON_SWEEP_INDEX, commonActive++, id);
          }
        } else {
          var id = (e >> 1) - 1;
          if (color === 0) {
            sqPop(RED_SWEEP_QUEUE, RED_SWEEP_INDEX, redActive--, id);
          } else if (color === 1) {
            sqPop(BLUE_SWEEP_QUEUE, BLUE_SWEEP_INDEX, blueActive--, id);
          } else if (color === 2) {
            sqPop(COMMON_SWEEP_QUEUE, COMMON_SWEEP_INDEX, commonActive--, id);
          }
        }
      }
    }
    function scanBipartite(d, axis, visit, flip, redStart, redEnd, red, redIndex, blueStart, blueEnd, blue, blueIndex) {
      var ptr = 0;
      var elemSize = 2 * d;
      var istart = axis;
      var iend = axis + d;
      var redShift = 1;
      var blueShift = 1;
      if (flip) {
        blueShift = BLUE_FLAG;
      } else {
        redShift = BLUE_FLAG;
      }
      for (var i = redStart; i < redEnd; ++i) {
        var idx = i + redShift;
        var redOffset = elemSize * i;
        SWEEP_EVENTS[ptr++] = red[redOffset + istart];
        SWEEP_EVENTS[ptr++] = -idx;
        SWEEP_EVENTS[ptr++] = red[redOffset + iend];
        SWEEP_EVENTS[ptr++] = idx;
      }
      for (var i = blueStart; i < blueEnd; ++i) {
        var idx = i + blueShift;
        var blueOffset = elemSize * i;
        SWEEP_EVENTS[ptr++] = blue[blueOffset + istart];
        SWEEP_EVENTS[ptr++] = -idx;
      }
      var n = ptr >>> 1;
      isort(SWEEP_EVENTS, n);
      var redActive = 0;
      for (var i = 0; i < n; ++i) {
        var e = SWEEP_EVENTS[2 * i + 1] | 0;
        if (e < 0) {
          var idx = -e;
          var isRed = false;
          if (idx >= BLUE_FLAG) {
            isRed = !flip;
            idx -= BLUE_FLAG;
          } else {
            isRed = !!flip;
            idx -= 1;
          }
          if (isRed) {
            sqPush(RED_SWEEP_QUEUE, RED_SWEEP_INDEX, redActive++, idx);
          } else {
            var blueId = blueIndex[idx];
            var bluePtr = elemSize * idx;
            var b0 = blue[bluePtr + axis + 1];
            var b1 = blue[bluePtr + axis + 1 + d];
            red_loop:
              for (var j = 0; j < redActive; ++j) {
                var oidx = RED_SWEEP_QUEUE[j];
                var redPtr = elemSize * oidx;
                if (b1 < red[redPtr + axis + 1] || red[redPtr + axis + 1 + d] < b0) {
                  continue;
                }
                for (var k = axis + 2; k < d; ++k) {
                  if (blue[bluePtr + k + d] < red[redPtr + k] || red[redPtr + k + d] < blue[bluePtr + k]) {
                    continue red_loop;
                  }
                }
                var redId = redIndex[oidx];
                var retval;
                if (flip) {
                  retval = visit(blueId, redId);
                } else {
                  retval = visit(redId, blueId);
                }
                if (retval !== void 0) {
                  return retval;
                }
              }
          }
        } else {
          sqPop(RED_SWEEP_QUEUE, RED_SWEEP_INDEX, redActive--, e - redShift);
        }
      }
    }
    function scanComplete(d, axis, visit, redStart, redEnd, red, redIndex, blueStart, blueEnd, blue, blueIndex) {
      var ptr = 0;
      var elemSize = 2 * d;
      var istart = axis;
      var iend = axis + d;
      for (var i = redStart; i < redEnd; ++i) {
        var idx = i + BLUE_FLAG;
        var redOffset = elemSize * i;
        SWEEP_EVENTS[ptr++] = red[redOffset + istart];
        SWEEP_EVENTS[ptr++] = -idx;
        SWEEP_EVENTS[ptr++] = red[redOffset + iend];
        SWEEP_EVENTS[ptr++] = idx;
      }
      for (var i = blueStart; i < blueEnd; ++i) {
        var idx = i + 1;
        var blueOffset = elemSize * i;
        SWEEP_EVENTS[ptr++] = blue[blueOffset + istart];
        SWEEP_EVENTS[ptr++] = -idx;
      }
      var n = ptr >>> 1;
      isort(SWEEP_EVENTS, n);
      var redActive = 0;
      for (var i = 0; i < n; ++i) {
        var e = SWEEP_EVENTS[2 * i + 1] | 0;
        if (e < 0) {
          var idx = -e;
          if (idx >= BLUE_FLAG) {
            RED_SWEEP_QUEUE[redActive++] = idx - BLUE_FLAG;
          } else {
            idx -= 1;
            var blueId = blueIndex[idx];
            var bluePtr = elemSize * idx;
            var b0 = blue[bluePtr + axis + 1];
            var b1 = blue[bluePtr + axis + 1 + d];
            red_loop:
              for (var j = 0; j < redActive; ++j) {
                var oidx = RED_SWEEP_QUEUE[j];
                var redId = redIndex[oidx];
                if (redId === blueId) {
                  break;
                }
                var redPtr = elemSize * oidx;
                if (b1 < red[redPtr + axis + 1] || red[redPtr + axis + 1 + d] < b0) {
                  continue;
                }
                for (var k = axis + 2; k < d; ++k) {
                  if (blue[bluePtr + k + d] < red[redPtr + k] || red[redPtr + k + d] < blue[bluePtr + k]) {
                    continue red_loop;
                  }
                }
                var retval = visit(redId, blueId);
                if (retval !== void 0) {
                  return retval;
                }
              }
          }
        } else {
          var idx = e - BLUE_FLAG;
          for (var j = redActive - 1; j >= 0; --j) {
            if (RED_SWEEP_QUEUE[j] === idx) {
              for (var k = j + 1; k < redActive; ++k) {
                RED_SWEEP_QUEUE[k - 1] = RED_SWEEP_QUEUE[k];
              }
              break;
            }
          }
          --redActive;
        }
      }
    }
  }
});

// node_modules/box-intersect/lib/brute.js
var require_brute = __commonJS({
  "node_modules/box-intersect/lib/brute.js"(exports) {
    init_react_shim();
    "use strict";
    var DIMENSION = "d";
    var AXIS = "ax";
    var VISIT = "vv";
    var FLIP = "fp";
    var ELEM_SIZE = "es";
    var RED_START = "rs";
    var RED_END = "re";
    var RED_BOXES = "rb";
    var RED_INDEX = "ri";
    var RED_PTR = "rp";
    var BLUE_START = "bs";
    var BLUE_END = "be";
    var BLUE_BOXES = "bb";
    var BLUE_INDEX = "bi";
    var BLUE_PTR = "bp";
    var RETVAL = "rv";
    var INNER_LABEL = "Q";
    var ARGS = [
      DIMENSION,
      AXIS,
      VISIT,
      RED_START,
      RED_END,
      RED_BOXES,
      RED_INDEX,
      BLUE_START,
      BLUE_END,
      BLUE_BOXES,
      BLUE_INDEX
    ];
    function generateBruteForce(redMajor, flip, full) {
      var funcName = "bruteForce" + (redMajor ? "Red" : "Blue") + (flip ? "Flip" : "") + (full ? "Full" : "");
      var code = [
        "function ",
        funcName,
        "(",
        ARGS.join(),
        "){",
        "var ",
        ELEM_SIZE,
        "=2*",
        DIMENSION,
        ";"
      ];
      var redLoop = "for(var i=" + RED_START + "," + RED_PTR + "=" + ELEM_SIZE + "*" + RED_START + ";i<" + RED_END + ";++i," + RED_PTR + "+=" + ELEM_SIZE + "){var x0=" + RED_BOXES + "[" + AXIS + "+" + RED_PTR + "],x1=" + RED_BOXES + "[" + AXIS + "+" + RED_PTR + "+" + DIMENSION + "],xi=" + RED_INDEX + "[i];";
      var blueLoop = "for(var j=" + BLUE_START + "," + BLUE_PTR + "=" + ELEM_SIZE + "*" + BLUE_START + ";j<" + BLUE_END + ";++j," + BLUE_PTR + "+=" + ELEM_SIZE + "){var y0=" + BLUE_BOXES + "[" + AXIS + "+" + BLUE_PTR + "]," + (full ? "y1=" + BLUE_BOXES + "[" + AXIS + "+" + BLUE_PTR + "+" + DIMENSION + "]," : "") + "yi=" + BLUE_INDEX + "[j];";
      if (redMajor) {
        code.push(redLoop, INNER_LABEL, ":", blueLoop);
      } else {
        code.push(blueLoop, INNER_LABEL, ":", redLoop);
      }
      if (full) {
        code.push("if(y1<x0||x1<y0)continue;");
      } else if (flip) {
        code.push("if(y0<=x0||x1<y0)continue;");
      } else {
        code.push("if(y0<x0||x1<y0)continue;");
      }
      code.push("for(var k=" + AXIS + "+1;k<" + DIMENSION + ";++k){var r0=" + RED_BOXES + "[k+" + RED_PTR + "],r1=" + RED_BOXES + "[k+" + DIMENSION + "+" + RED_PTR + "],b0=" + BLUE_BOXES + "[k+" + BLUE_PTR + "],b1=" + BLUE_BOXES + "[k+" + DIMENSION + "+" + BLUE_PTR + "];if(r1<b0||b1<r0)continue " + INNER_LABEL + ";}var " + RETVAL + "=" + VISIT + "(");
      if (flip) {
        code.push("yi,xi");
      } else {
        code.push("xi,yi");
      }
      code.push(");if(" + RETVAL + "!==void 0)return " + RETVAL + ";}}}");
      return {
        name: funcName,
        code: code.join("")
      };
    }
    function bruteForcePlanner(full) {
      var funcName = "bruteForce" + (full ? "Full" : "Partial");
      var prefix = [];
      var fargs = ARGS.slice();
      if (!full) {
        fargs.splice(3, 0, FLIP);
      }
      var code = ["function " + funcName + "(" + fargs.join() + "){"];
      function invoke(redMajor, flip) {
        var res = generateBruteForce(redMajor, flip, full);
        prefix.push(res.code);
        code.push("return " + res.name + "(" + ARGS.join() + ");");
      }
      code.push("if(" + RED_END + "-" + RED_START + ">" + BLUE_END + "-" + BLUE_START + "){");
      if (full) {
        invoke(true, false);
        code.push("}else{");
        invoke(false, false);
      } else {
        code.push("if(" + FLIP + "){");
        invoke(true, true);
        code.push("}else{");
        invoke(true, false);
        code.push("}}else{if(" + FLIP + "){");
        invoke(false, true);
        code.push("}else{");
        invoke(false, false);
        code.push("}");
      }
      code.push("}}return " + funcName);
      var codeStr = prefix.join("") + code.join("");
      var proc = new Function(codeStr);
      return proc();
    }
    exports.partial = bruteForcePlanner(false);
    exports.full = bruteForcePlanner(true);
  }
});

// node_modules/box-intersect/lib/partition.js
var require_partition = __commonJS({
  "node_modules/box-intersect/lib/partition.js"(exports, module) {
    init_react_shim();
    "use strict";
    module.exports = genPartition;
    var code = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m";
    function genPartition(predicate, args) {
      var fargs = "abcdef".split("").concat(args);
      var reads = [];
      if (predicate.indexOf("lo") >= 0) {
        reads.push("lo=e[k+n]");
      }
      if (predicate.indexOf("hi") >= 0) {
        reads.push("hi=e[k+o]");
      }
      fargs.push(code.replace("_", reads.join()).replace("$", predicate));
      return Function.apply(void 0, fargs);
    }
  }
});

// node_modules/box-intersect/lib/median.js
var require_median = __commonJS({
  "node_modules/box-intersect/lib/median.js"(exports, module) {
    init_react_shim();
    "use strict";
    module.exports = findMedian;
    var genPartition = require_partition();
    var partitionStartLessThan = genPartition("lo<p0", ["p0"]);
    var PARTITION_THRESHOLD = 8;
    function insertionSort(d, axis, start, end, boxes, ids) {
      var elemSize = 2 * d;
      var boxPtr = elemSize * (start + 1) + axis;
      for (var i = start + 1; i < end; ++i, boxPtr += elemSize) {
        var x = boxes[boxPtr];
        for (var j = i, ptr = elemSize * (i - 1); j > start && boxes[ptr + axis] > x; --j, ptr -= elemSize) {
          var aPtr = ptr;
          var bPtr = ptr + elemSize;
          for (var k = 0; k < elemSize; ++k, ++aPtr, ++bPtr) {
            var y = boxes[aPtr];
            boxes[aPtr] = boxes[bPtr];
            boxes[bPtr] = y;
          }
          var tmp = ids[j];
          ids[j] = ids[j - 1];
          ids[j - 1] = tmp;
        }
      }
    }
    function findMedian(d, axis, start, end, boxes, ids) {
      if (end <= start + 1) {
        return start;
      }
      var lo = start;
      var hi = end;
      var mid = end + start >>> 1;
      var elemSize = 2 * d;
      var pivot = mid;
      var value = boxes[elemSize * mid + axis];
      while (lo < hi) {
        if (hi - lo < PARTITION_THRESHOLD) {
          insertionSort(d, axis, lo, hi, boxes, ids);
          value = boxes[elemSize * mid + axis];
          break;
        }
        var count = hi - lo;
        var pivot0 = Math.random() * count + lo | 0;
        var value0 = boxes[elemSize * pivot0 + axis];
        var pivot1 = Math.random() * count + lo | 0;
        var value1 = boxes[elemSize * pivot1 + axis];
        var pivot2 = Math.random() * count + lo | 0;
        var value2 = boxes[elemSize * pivot2 + axis];
        if (value0 <= value1) {
          if (value2 >= value1) {
            pivot = pivot1;
            value = value1;
          } else if (value0 >= value2) {
            pivot = pivot0;
            value = value0;
          } else {
            pivot = pivot2;
            value = value2;
          }
        } else {
          if (value1 >= value2) {
            pivot = pivot1;
            value = value1;
          } else if (value2 >= value0) {
            pivot = pivot0;
            value = value0;
          } else {
            pivot = pivot2;
            value = value2;
          }
        }
        var aPtr = elemSize * (hi - 1);
        var bPtr = elemSize * pivot;
        for (var i = 0; i < elemSize; ++i, ++aPtr, ++bPtr) {
          var x = boxes[aPtr];
          boxes[aPtr] = boxes[bPtr];
          boxes[bPtr] = x;
        }
        var y = ids[hi - 1];
        ids[hi - 1] = ids[pivot];
        ids[pivot] = y;
        pivot = partitionStartLessThan(d, axis, lo, hi - 1, boxes, ids, value);
        var aPtr = elemSize * (hi - 1);
        var bPtr = elemSize * pivot;
        for (var i = 0; i < elemSize; ++i, ++aPtr, ++bPtr) {
          var x = boxes[aPtr];
          boxes[aPtr] = boxes[bPtr];
          boxes[bPtr] = x;
        }
        var y = ids[hi - 1];
        ids[hi - 1] = ids[pivot];
        ids[pivot] = y;
        if (mid < pivot) {
          hi = pivot - 1;
          while (lo < hi && boxes[elemSize * (hi - 1) + axis] === value) {
            hi -= 1;
          }
          hi += 1;
        } else if (pivot < mid) {
          lo = pivot + 1;
          while (lo < hi && boxes[elemSize * lo + axis] === value) {
            lo += 1;
          }
        } else {
          break;
        }
      }
      return partitionStartLessThan(d, axis, start, mid, boxes, ids, boxes[elemSize * mid + axis]);
    }
  }
});

// node_modules/box-intersect/lib/intersect.js
var require_intersect = __commonJS({
  "node_modules/box-intersect/lib/intersect.js"(exports, module) {
    init_react_shim();
    "use strict";
    module.exports = boxIntersectIter;
    var pool = require_pool();
    var bits = require_twiddle();
    var bruteForce = require_brute();
    var bruteForcePartial = bruteForce.partial;
    var bruteForceFull = bruteForce.full;
    var sweep = require_sweep();
    var findMedian = require_median();
    var genPartition = require_partition();
    var BRUTE_FORCE_CUTOFF = 128;
    var SCAN_CUTOFF = 1 << 22;
    var SCAN_COMPLETE_CUTOFF = 1 << 22;
    var partitionInteriorContainsInterval = genPartition("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]);
    var partitionStartEqual = genPartition("lo===p0", ["p0"]);
    var partitionStartLessThan = genPartition("lo<p0", ["p0"]);
    var partitionEndLessThanEqual = genPartition("hi<=p0", ["p0"]);
    var partitionContainsPoint = genPartition("lo<=p0&&p0<=hi", ["p0"]);
    var partitionContainsPointProper = genPartition("lo<p0&&p0<=hi", ["p0"]);
    var IFRAME_SIZE = 6;
    var DFRAME_SIZE = 2;
    var INIT_CAPACITY = 1024;
    var BOX_ISTACK = pool.mallocInt32(INIT_CAPACITY);
    var BOX_DSTACK = pool.mallocDouble(INIT_CAPACITY);
    function iterInit(d, count) {
      var levels = 8 * bits.log2(count + 1) * (d + 1) | 0;
      var maxInts = bits.nextPow2(IFRAME_SIZE * levels);
      if (BOX_ISTACK.length < maxInts) {
        pool.free(BOX_ISTACK);
        BOX_ISTACK = pool.mallocInt32(maxInts);
      }
      var maxDoubles = bits.nextPow2(DFRAME_SIZE * levels);
      if (BOX_DSTACK.length < maxDoubles) {
        pool.free(BOX_DSTACK);
        BOX_DSTACK = pool.mallocDouble(maxDoubles);
      }
    }
    function iterPush(ptr, axis, redStart, redEnd, blueStart, blueEnd, state, lo, hi) {
      var iptr = IFRAME_SIZE * ptr;
      BOX_ISTACK[iptr] = axis;
      BOX_ISTACK[iptr + 1] = redStart;
      BOX_ISTACK[iptr + 2] = redEnd;
      BOX_ISTACK[iptr + 3] = blueStart;
      BOX_ISTACK[iptr + 4] = blueEnd;
      BOX_ISTACK[iptr + 5] = state;
      var dptr = DFRAME_SIZE * ptr;
      BOX_DSTACK[dptr] = lo;
      BOX_DSTACK[dptr + 1] = hi;
    }
    function onePointPartial(d, axis, visit, flip, redStart, redEnd, red, redIndex, blueOffset, blue, blueId) {
      var elemSize = 2 * d;
      var bluePtr = blueOffset * elemSize;
      var blueX = blue[bluePtr + axis];
      red_loop:
        for (var i = redStart, redPtr = redStart * elemSize; i < redEnd; ++i, redPtr += elemSize) {
          var r0 = red[redPtr + axis];
          var r1 = red[redPtr + axis + d];
          if (blueX < r0 || r1 < blueX) {
            continue;
          }
          if (flip && blueX === r0) {
            continue;
          }
          var redId = redIndex[i];
          for (var j = axis + 1; j < d; ++j) {
            var r0 = red[redPtr + j];
            var r1 = red[redPtr + j + d];
            var b0 = blue[bluePtr + j];
            var b1 = blue[bluePtr + j + d];
            if (r1 < b0 || b1 < r0) {
              continue red_loop;
            }
          }
          var retval;
          if (flip) {
            retval = visit(blueId, redId);
          } else {
            retval = visit(redId, blueId);
          }
          if (retval !== void 0) {
            return retval;
          }
        }
    }
    function onePointFull(d, axis, visit, redStart, redEnd, red, redIndex, blueOffset, blue, blueId) {
      var elemSize = 2 * d;
      var bluePtr = blueOffset * elemSize;
      var blueX = blue[bluePtr + axis];
      red_loop:
        for (var i = redStart, redPtr = redStart * elemSize; i < redEnd; ++i, redPtr += elemSize) {
          var redId = redIndex[i];
          if (redId === blueId) {
            continue;
          }
          var r0 = red[redPtr + axis];
          var r1 = red[redPtr + axis + d];
          if (blueX < r0 || r1 < blueX) {
            continue;
          }
          for (var j = axis + 1; j < d; ++j) {
            var r0 = red[redPtr + j];
            var r1 = red[redPtr + j + d];
            var b0 = blue[bluePtr + j];
            var b1 = blue[bluePtr + j + d];
            if (r1 < b0 || b1 < r0) {
              continue red_loop;
            }
          }
          var retval = visit(redId, blueId);
          if (retval !== void 0) {
            return retval;
          }
        }
    }
    function boxIntersectIter(d, visit, initFull, xSize, xBoxes, xIndex, ySize, yBoxes, yIndex) {
      iterInit(d, xSize + ySize);
      var top = 0;
      var elemSize = 2 * d;
      var retval;
      iterPush(top++, 0, 0, xSize, 0, ySize, initFull ? 16 : 0, -Infinity, Infinity);
      if (!initFull) {
        iterPush(top++, 0, 0, ySize, 0, xSize, 1, -Infinity, Infinity);
      }
      while (top > 0) {
        top -= 1;
        var iptr = top * IFRAME_SIZE;
        var axis = BOX_ISTACK[iptr];
        var redStart = BOX_ISTACK[iptr + 1];
        var redEnd = BOX_ISTACK[iptr + 2];
        var blueStart = BOX_ISTACK[iptr + 3];
        var blueEnd = BOX_ISTACK[iptr + 4];
        var state = BOX_ISTACK[iptr + 5];
        var dptr = top * DFRAME_SIZE;
        var lo = BOX_DSTACK[dptr];
        var hi = BOX_DSTACK[dptr + 1];
        var flip = state & 1;
        var full = !!(state & 16);
        var red = xBoxes;
        var redIndex = xIndex;
        var blue = yBoxes;
        var blueIndex = yIndex;
        if (flip) {
          red = yBoxes;
          redIndex = yIndex;
          blue = xBoxes;
          blueIndex = xIndex;
        }
        if (state & 2) {
          redEnd = partitionStartLessThan(d, axis, redStart, redEnd, red, redIndex, hi);
          if (redStart >= redEnd) {
            continue;
          }
        }
        if (state & 4) {
          redStart = partitionEndLessThanEqual(d, axis, redStart, redEnd, red, redIndex, lo);
          if (redStart >= redEnd) {
            continue;
          }
        }
        var redCount = redEnd - redStart;
        var blueCount = blueEnd - blueStart;
        if (full) {
          if (d * redCount * (redCount + blueCount) < SCAN_COMPLETE_CUTOFF) {
            retval = sweep.scanComplete(d, axis, visit, redStart, redEnd, red, redIndex, blueStart, blueEnd, blue, blueIndex);
            if (retval !== void 0) {
              return retval;
            }
            continue;
          }
        } else {
          if (d * Math.min(redCount, blueCount) < BRUTE_FORCE_CUTOFF) {
            retval = bruteForcePartial(d, axis, visit, flip, redStart, redEnd, red, redIndex, blueStart, blueEnd, blue, blueIndex);
            if (retval !== void 0) {
              return retval;
            }
            continue;
          } else if (d * redCount * blueCount < SCAN_CUTOFF) {
            retval = sweep.scanBipartite(d, axis, visit, flip, redStart, redEnd, red, redIndex, blueStart, blueEnd, blue, blueIndex);
            if (retval !== void 0) {
              return retval;
            }
            continue;
          }
        }
        var red0 = partitionInteriorContainsInterval(d, axis, redStart, redEnd, red, redIndex, lo, hi);
        if (redStart < red0) {
          if (d * (red0 - redStart) < BRUTE_FORCE_CUTOFF) {
            retval = bruteForceFull(d, axis + 1, visit, redStart, red0, red, redIndex, blueStart, blueEnd, blue, blueIndex);
            if (retval !== void 0) {
              return retval;
            }
          } else if (axis === d - 2) {
            if (flip) {
              retval = sweep.sweepBipartite(d, visit, blueStart, blueEnd, blue, blueIndex, redStart, red0, red, redIndex);
            } else {
              retval = sweep.sweepBipartite(d, visit, redStart, red0, red, redIndex, blueStart, blueEnd, blue, blueIndex);
            }
            if (retval !== void 0) {
              return retval;
            }
          } else {
            iterPush(top++, axis + 1, redStart, red0, blueStart, blueEnd, flip, -Infinity, Infinity);
            iterPush(top++, axis + 1, blueStart, blueEnd, redStart, red0, flip ^ 1, -Infinity, Infinity);
          }
        }
        if (red0 < redEnd) {
          var blue0 = findMedian(d, axis, blueStart, blueEnd, blue, blueIndex);
          var mid = blue[elemSize * blue0 + axis];
          var blue1 = partitionStartEqual(d, axis, blue0, blueEnd, blue, blueIndex, mid);
          if (blue1 < blueEnd) {
            iterPush(top++, axis, red0, redEnd, blue1, blueEnd, (flip | 4) + (full ? 16 : 0), mid, hi);
          }
          if (blueStart < blue0) {
            iterPush(top++, axis, red0, redEnd, blueStart, blue0, (flip | 2) + (full ? 16 : 0), lo, mid);
          }
          if (blue0 + 1 === blue1) {
            if (full) {
              retval = onePointFull(d, axis, visit, red0, redEnd, red, redIndex, blue0, blue, blueIndex[blue0]);
            } else {
              retval = onePointPartial(d, axis, visit, flip, red0, redEnd, red, redIndex, blue0, blue, blueIndex[blue0]);
            }
            if (retval !== void 0) {
              return retval;
            }
          } else if (blue0 < blue1) {
            var red1;
            if (full) {
              red1 = partitionContainsPoint(d, axis, red0, redEnd, red, redIndex, mid);
              if (red0 < red1) {
                var redX = partitionStartEqual(d, axis, red0, red1, red, redIndex, mid);
                if (axis === d - 2) {
                  if (red0 < redX) {
                    retval = sweep.sweepComplete(d, visit, red0, redX, red, redIndex, blue0, blue1, blue, blueIndex);
                    if (retval !== void 0) {
                      return retval;
                    }
                  }
                  if (redX < red1) {
                    retval = sweep.sweepBipartite(d, visit, redX, red1, red, redIndex, blue0, blue1, blue, blueIndex);
                    if (retval !== void 0) {
                      return retval;
                    }
                  }
                } else {
                  if (red0 < redX) {
                    iterPush(top++, axis + 1, red0, redX, blue0, blue1, 16, -Infinity, Infinity);
                  }
                  if (redX < red1) {
                    iterPush(top++, axis + 1, redX, red1, blue0, blue1, 0, -Infinity, Infinity);
                    iterPush(top++, axis + 1, blue0, blue1, redX, red1, 1, -Infinity, Infinity);
                  }
                }
              }
            } else {
              if (flip) {
                red1 = partitionContainsPointProper(d, axis, red0, redEnd, red, redIndex, mid);
              } else {
                red1 = partitionContainsPoint(d, axis, red0, redEnd, red, redIndex, mid);
              }
              if (red0 < red1) {
                if (axis === d - 2) {
                  if (flip) {
                    retval = sweep.sweepBipartite(d, visit, blue0, blue1, blue, blueIndex, red0, red1, red, redIndex);
                  } else {
                    retval = sweep.sweepBipartite(d, visit, red0, red1, red, redIndex, blue0, blue1, blue, blueIndex);
                  }
                } else {
                  iterPush(top++, axis + 1, red0, red1, blue0, blue1, flip, -Infinity, Infinity);
                  iterPush(top++, axis + 1, blue0, blue1, red0, red1, flip ^ 1, -Infinity, Infinity);
                }
              }
            }
          }
        }
      }
    }
  }
});

// node_modules/box-intersect/index.js
var require_box_intersect = __commonJS({
  "node_modules/box-intersect/index.js"(exports, module) {
    init_react_shim();
    "use strict";
    module.exports = boxIntersectWrapper;
    var pool = require_pool();
    var sweep = require_sweep();
    var boxIntersectIter = require_intersect();
    function boxEmpty(d, box) {
      for (var j = 0; j < d; ++j) {
        if (!(box[j] <= box[j + d])) {
          return true;
        }
      }
      return false;
    }
    function convertBoxes(boxes, d, data, ids) {
      var ptr = 0;
      var count = 0;
      for (var i = 0, n = boxes.length; i < n; ++i) {
        var b = boxes[i];
        if (boxEmpty(d, b)) {
          continue;
        }
        for (var j = 0; j < 2 * d; ++j) {
          data[ptr++] = b[j];
        }
        ids[count++] = i;
      }
      return count;
    }
    function boxIntersect2(red, blue, visit, full) {
      var n = red.length;
      var m = blue.length;
      if (n <= 0 || m <= 0) {
        return;
      }
      var d = red[0].length >>> 1;
      if (d <= 0) {
        return;
      }
      var retval;
      var redList = pool.mallocDouble(2 * d * n);
      var redIds = pool.mallocInt32(n);
      n = convertBoxes(red, d, redList, redIds);
      if (n > 0) {
        if (d === 1 && full) {
          sweep.init(n);
          retval = sweep.sweepComplete(d, visit, 0, n, redList, redIds, 0, n, redList, redIds);
        } else {
          var blueList = pool.mallocDouble(2 * d * m);
          var blueIds = pool.mallocInt32(m);
          m = convertBoxes(blue, d, blueList, blueIds);
          if (m > 0) {
            sweep.init(n + m);
            if (d === 1) {
              retval = sweep.sweepBipartite(d, visit, 0, n, redList, redIds, 0, m, blueList, blueIds);
            } else {
              retval = boxIntersectIter(d, visit, full, n, redList, redIds, m, blueList, blueIds);
            }
            pool.free(blueList);
            pool.free(blueIds);
          }
        }
        pool.free(redList);
        pool.free(redIds);
      }
      return retval;
    }
    var RESULT;
    function appendItem(i, j) {
      RESULT.push([i, j]);
    }
    function intersectFullArray(x) {
      RESULT = [];
      boxIntersect2(x, x, appendItem, true);
      return RESULT;
    }
    function intersectBipartiteArray(x, y) {
      RESULT = [];
      boxIntersect2(x, y, appendItem, false);
      return RESULT;
    }
    function boxIntersectWrapper(arg0, arg1, arg2) {
      var result;
      switch (arguments.length) {
        case 1:
          return intersectFullArray(arg0);
        case 2:
          if (typeof arg1 === "function") {
            return boxIntersect2(arg0, arg0, arg1, true);
          } else {
            return intersectBipartiteArray(arg0, arg1);
          }
        case 3:
          return boxIntersect2(arg0, arg1, arg2, false);
        default:
          throw new Error("box-intersect: Invalid arguments");
      }
    }
  }
});

// node_modules/react-dom/cjs/react-dom-server.browser.development.js
var require_react_dom_server_browser_development = __commonJS({
  "node_modules/react-dom/cjs/react-dom-server.browser.development.js"(exports) {
    init_react_shim();
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React2 = require_react();
        var _assign = require_object_assign();
        function formatProdErrorMessage(code) {
          var url = "https://reactjs.org/docs/error-decoder.html?invariant=" + code;
          for (var i2 = 1; i2 < arguments.length; i2++) {
            url += "&args[]=" + encodeURIComponent(arguments[i2]);
          }
          return "Minified React error #" + code + "; visit " + url + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        var ReactVersion = "17.0.2";
        var ReactSharedInternals = React2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function warn(format) {
          {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            printWarning("warn", format, args);
          }
        }
        function error(format) {
          {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            printWarning("error", format, args);
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return "" + item;
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var REACT_ELEMENT_TYPE = 60103;
        var REACT_PORTAL_TYPE = 60106;
        var REACT_FRAGMENT_TYPE = 60107;
        var REACT_STRICT_MODE_TYPE = 60108;
        var REACT_PROFILER_TYPE = 60114;
        var REACT_PROVIDER_TYPE = 60109;
        var REACT_CONTEXT_TYPE = 60110;
        var REACT_FORWARD_REF_TYPE = 60112;
        var REACT_SUSPENSE_TYPE = 60113;
        var REACT_SUSPENSE_LIST_TYPE = 60120;
        var REACT_MEMO_TYPE = 60115;
        var REACT_LAZY_TYPE = 60116;
        var REACT_BLOCK_TYPE = 60121;
        var REACT_SERVER_BLOCK_TYPE = 60122;
        var REACT_FUNDAMENTAL_TYPE = 60117;
        var REACT_SCOPE_TYPE = 60119;
        var REACT_OPAQUE_ID_TYPE = 60128;
        var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
        var REACT_OFFSCREEN_TYPE = 60130;
        var REACT_LEGACY_HIDDEN_TYPE = 60131;
        if (typeof Symbol === "function" && Symbol.for) {
          var symbolFor = Symbol.for;
          REACT_ELEMENT_TYPE = symbolFor("react.element");
          REACT_PORTAL_TYPE = symbolFor("react.portal");
          REACT_FRAGMENT_TYPE = symbolFor("react.fragment");
          REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
          REACT_PROFILER_TYPE = symbolFor("react.profiler");
          REACT_PROVIDER_TYPE = symbolFor("react.provider");
          REACT_CONTEXT_TYPE = symbolFor("react.context");
          REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
          REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
          REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
          REACT_MEMO_TYPE = symbolFor("react.memo");
          REACT_LAZY_TYPE = symbolFor("react.lazy");
          REACT_BLOCK_TYPE = symbolFor("react.block");
          REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
          REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
          REACT_SCOPE_TYPE = symbolFor("react.scope");
          REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
          REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
          REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
          REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var functionName = innerType.displayName || innerType.name || "";
          return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentName(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                return getComponentName(type.type);
              case REACT_BLOCK_TYPE:
                return getComponentName(type._render);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentName(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var enableSuspenseServerRenderer = false;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: _assign({}, props, {
                  value: prevLog
                }),
                info: _assign({}, props, {
                  value: prevInfo
                }),
                warn: _assign({}, props, {
                  value: prevWarn
                }),
                error: _assign({}, props, {
                  value: prevError
                }),
                group: _assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: _assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: _assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_BLOCK_TYPE:
                return describeFunctionComponentFrame(type._render);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(Object.prototype.hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var didWarnAboutInvalidateContextType;
        {
          didWarnAboutInvalidateContextType = new Set();
        }
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function maskContext(type, context) {
          var contextTypes = type.contextTypes;
          if (!contextTypes) {
            return emptyObject;
          }
          var maskedContext = {};
          for (var contextName in contextTypes) {
            maskedContext[contextName] = context[contextName];
          }
          return maskedContext;
        }
        function checkContextTypes(typeSpecs, values, location) {
          {
            checkPropTypes(typeSpecs, values, location, "Component");
          }
        }
        function validateContextBounds(context, threadID) {
          for (var i2 = context._threadCount | 0; i2 <= threadID; i2++) {
            context[i2] = context._currentValue2;
            context._threadCount = i2 + 1;
          }
        }
        function processContext(type, context, threadID, isClass) {
          if (isClass) {
            var contextType = type.contextType;
            {
              if ("contextType" in type) {
                var isValid = contextType === null || contextType !== void 0 && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === void 0;
                if (!isValid && !didWarnAboutInvalidateContextType.has(type)) {
                  didWarnAboutInvalidateContextType.add(type);
                  var addendum = "";
                  if (contextType === void 0) {
                    addendum = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.";
                  } else if (typeof contextType !== "object") {
                    addendum = " However, it is set to a " + typeof contextType + ".";
                  } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
                    addendum = " Did you accidentally pass the Context.Provider instead?";
                  } else if (contextType._context !== void 0) {
                    addendum = " Did you accidentally pass the Context.Consumer instead?";
                  } else {
                    addendum = " However, it is set to an object with keys {" + Object.keys(contextType).join(", ") + "}.";
                  }
                  error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", getComponentName(type) || "Component", addendum);
                }
              }
            }
            if (typeof contextType === "object" && contextType !== null) {
              validateContextBounds(contextType, threadID);
              return contextType[threadID];
            }
            {
              var maskedContext = maskContext(type, context);
              {
                if (type.contextTypes) {
                  checkContextTypes(type.contextTypes, maskedContext, "context");
                }
              }
              return maskedContext;
            }
          } else {
            {
              var _maskedContext = maskContext(type, context);
              {
                if (type.contextTypes) {
                  checkContextTypes(type.contextTypes, _maskedContext, "context");
                }
              }
              return _maskedContext;
            }
          }
        }
        var nextAvailableThreadIDs = new Uint16Array(16);
        for (var i = 0; i < 15; i++) {
          nextAvailableThreadIDs[i] = i + 1;
        }
        nextAvailableThreadIDs[15] = 0;
        function growThreadCountAndReturnNextAvailable() {
          var oldArray = nextAvailableThreadIDs;
          var oldSize = oldArray.length;
          var newSize = oldSize * 2;
          if (!(newSize <= 65536)) {
            {
              throw Error("Maximum number of concurrent React renderers exceeded. This can happen if you are not properly destroying the Readable provided by React. Ensure that you call .destroy() on it if you no longer want to read from it, and did not read to the end. If you use .pipe() this should be automatic.");
            }
          }
          var newArray = new Uint16Array(newSize);
          newArray.set(oldArray);
          nextAvailableThreadIDs = newArray;
          nextAvailableThreadIDs[0] = oldSize + 1;
          for (var _i = oldSize; _i < newSize - 1; _i++) {
            nextAvailableThreadIDs[_i] = _i + 1;
          }
          nextAvailableThreadIDs[newSize - 1] = 0;
          return oldSize;
        }
        function allocThreadID() {
          var nextID = nextAvailableThreadIDs[0];
          if (nextID === 0) {
            return growThreadCountAndReturnNextAvailable();
          }
          nextAvailableThreadIDs[0] = nextAvailableThreadIDs[nextID];
          return nextID;
        }
        function freeThreadID(id) {
          nextAvailableThreadIDs[id] = nextAvailableThreadIDs[0];
          nextAvailableThreadIDs[0] = id;
        }
        var RESERVED = 0;
        var STRING = 1;
        var BOOLEANISH_STRING = 2;
        var BOOLEAN = 3;
        var OVERLOADED_BOOLEAN = 4;
        var NUMERIC = 5;
        var POSITIVE_NUMERIC = 6;
        var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
        var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
        var ROOT_ATTRIBUTE_NAME = "data-reactroot";
        var VALID_ATTRIBUTE_NAME_REGEX = new RegExp("^[" + ATTRIBUTE_NAME_START_CHAR + "][" + ATTRIBUTE_NAME_CHAR + "]*$");
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var illegalAttributeNameCache = {};
        var validatedAttributeNameCache = {};
        function isAttributeNameSafe(attributeName) {
          if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) {
            return true;
          }
          if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) {
            return false;
          }
          if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
            validatedAttributeNameCache[attributeName] = true;
            return true;
          }
          illegalAttributeNameCache[attributeName] = true;
          {
            error("Invalid attribute name: `%s`", attributeName);
          }
          return false;
        }
        function shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag) {
          if (propertyInfo !== null) {
            return propertyInfo.type === RESERVED;
          }
          if (isCustomComponentTag) {
            return false;
          }
          if (name.length > 2 && (name[0] === "o" || name[0] === "O") && (name[1] === "n" || name[1] === "N")) {
            return true;
          }
          return false;
        }
        function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
          if (propertyInfo !== null && propertyInfo.type === RESERVED) {
            return false;
          }
          switch (typeof value) {
            case "function":
            case "symbol":
              return true;
            case "boolean": {
              if (isCustomComponentTag) {
                return false;
              }
              if (propertyInfo !== null) {
                return !propertyInfo.acceptsBooleans;
              } else {
                var prefix2 = name.toLowerCase().slice(0, 5);
                return prefix2 !== "data-" && prefix2 !== "aria-";
              }
            }
            default:
              return false;
          }
        }
        function shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag) {
          if (value === null || typeof value === "undefined") {
            return true;
          }
          if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag)) {
            return true;
          }
          if (isCustomComponentTag) {
            return false;
          }
          if (propertyInfo !== null) {
            switch (propertyInfo.type) {
              case BOOLEAN:
                return !value;
              case OVERLOADED_BOOLEAN:
                return value === false;
              case NUMERIC:
                return isNaN(value);
              case POSITIVE_NUMERIC:
                return isNaN(value) || value < 1;
            }
          }
          return false;
        }
        function getPropertyInfo(name) {
          return properties.hasOwnProperty(name) ? properties[name] : null;
        }
        function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL2, removeEmptyString) {
          this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
          this.attributeName = attributeName;
          this.attributeNamespace = attributeNamespace;
          this.mustUseProperty = mustUseProperty;
          this.propertyName = name;
          this.type = type;
          this.sanitizeURL = sanitizeURL2;
          this.removeEmptyString = removeEmptyString;
        }
        var properties = {};
        var reservedProps = [
          "children",
          "dangerouslySetInnerHTML",
          "defaultValue",
          "defaultChecked",
          "innerHTML",
          "suppressContentEditableWarning",
          "suppressHydrationWarning",
          "style"
        ];
        reservedProps.forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, RESERVED, false, name, null, false, false);
        });
        [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(_ref) {
          var name = _ref[0], attributeName = _ref[1];
          properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null, false, false);
        });
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, name.toLowerCase(), null, false, false);
        });
        ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, name, null, false, false);
        });
        [
          "allowFullScreen",
          "async",
          "autoFocus",
          "autoPlay",
          "controls",
          "default",
          "defer",
          "disabled",
          "disablePictureInPicture",
          "disableRemotePlayback",
          "formNoValidate",
          "hidden",
          "loop",
          "noModule",
          "noValidate",
          "open",
          "playsInline",
          "readOnly",
          "required",
          "reversed",
          "scoped",
          "seamless",
          "itemScope"
        ].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, name.toLowerCase(), null, false, false);
        });
        [
          "checked",
          "multiple",
          "muted",
          "selected"
        ].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, name, null, false, false);
        });
        [
          "capture",
          "download"
        ].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, name, null, false, false);
        });
        [
          "cols",
          "rows",
          "size",
          "span"
        ].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, name, null, false, false);
        });
        ["rowSpan", "start"].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, NUMERIC, false, name.toLowerCase(), null, false, false);
        });
        var CAMELIZE = /[\-\:]([a-z])/g;
        var capitalize = function(token) {
          return token[1].toUpperCase();
        };
        [
          "accent-height",
          "alignment-baseline",
          "arabic-form",
          "baseline-shift",
          "cap-height",
          "clip-path",
          "clip-rule",
          "color-interpolation",
          "color-interpolation-filters",
          "color-profile",
          "color-rendering",
          "dominant-baseline",
          "enable-background",
          "fill-opacity",
          "fill-rule",
          "flood-color",
          "flood-opacity",
          "font-family",
          "font-size",
          "font-size-adjust",
          "font-stretch",
          "font-style",
          "font-variant",
          "font-weight",
          "glyph-name",
          "glyph-orientation-horizontal",
          "glyph-orientation-vertical",
          "horiz-adv-x",
          "horiz-origin-x",
          "image-rendering",
          "letter-spacing",
          "lighting-color",
          "marker-end",
          "marker-mid",
          "marker-start",
          "overline-position",
          "overline-thickness",
          "paint-order",
          "panose-1",
          "pointer-events",
          "rendering-intent",
          "shape-rendering",
          "stop-color",
          "stop-opacity",
          "strikethrough-position",
          "strikethrough-thickness",
          "stroke-dasharray",
          "stroke-dashoffset",
          "stroke-linecap",
          "stroke-linejoin",
          "stroke-miterlimit",
          "stroke-opacity",
          "stroke-width",
          "text-anchor",
          "text-decoration",
          "text-rendering",
          "underline-position",
          "underline-thickness",
          "unicode-bidi",
          "unicode-range",
          "units-per-em",
          "v-alphabetic",
          "v-hanging",
          "v-ideographic",
          "v-mathematical",
          "vector-effect",
          "vert-adv-y",
          "vert-origin-x",
          "vert-origin-y",
          "word-spacing",
          "writing-mode",
          "xmlns:xlink",
          "x-height"
        ].forEach(function(attributeName) {
          var name = attributeName.replace(CAMELIZE, capitalize);
          properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null, false, false);
        });
        [
          "xlink:actuate",
          "xlink:arcrole",
          "xlink:role",
          "xlink:show",
          "xlink:title",
          "xlink:type"
        ].forEach(function(attributeName) {
          var name = attributeName.replace(CAMELIZE, capitalize);
          properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, "http://www.w3.org/1999/xlink", false, false);
        });
        [
          "xml:base",
          "xml:lang",
          "xml:space"
        ].forEach(function(attributeName) {
          var name = attributeName.replace(CAMELIZE, capitalize);
          properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, "http://www.w3.org/XML/1998/namespace", false, false);
        });
        ["tabIndex", "crossOrigin"].forEach(function(attributeName) {
          properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, attributeName.toLowerCase(), null, false, false);
        });
        var xlinkHref = "xlinkHref";
        properties[xlinkHref] = new PropertyInfoRecord("xlinkHref", STRING, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
        ["src", "href", "action", "formAction"].forEach(function(attributeName) {
          properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, attributeName.toLowerCase(), null, true, true);
        });
        var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
        var didWarn = false;
        function sanitizeURL(url) {
          {
            if (!didWarn && isJavaScriptProtocol.test(url)) {
              didWarn = true;
              error("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(url));
            }
          }
        }
        var matchHtmlRegExp = /["'&<>]/;
        function escapeHtml(string) {
          var str = "" + string;
          var match = matchHtmlRegExp.exec(str);
          if (!match) {
            return str;
          }
          var escape;
          var html = "";
          var index;
          var lastIndex = 0;
          for (index = match.index; index < str.length; index++) {
            switch (str.charCodeAt(index)) {
              case 34:
                escape = "&quot;";
                break;
              case 38:
                escape = "&amp;";
                break;
              case 39:
                escape = "&#x27;";
                break;
              case 60:
                escape = "&lt;";
                break;
              case 62:
                escape = "&gt;";
                break;
              default:
                continue;
            }
            if (lastIndex !== index) {
              html += str.substring(lastIndex, index);
            }
            lastIndex = index + 1;
            html += escape;
          }
          return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
        }
        function escapeTextForBrowser(text) {
          if (typeof text === "boolean" || typeof text === "number") {
            return "" + text;
          }
          return escapeHtml(text);
        }
        function quoteAttributeValueForBrowser(value) {
          return '"' + escapeTextForBrowser(value) + '"';
        }
        function createMarkupForRoot() {
          return ROOT_ATTRIBUTE_NAME + '=""';
        }
        function createMarkupForProperty(name, value) {
          var propertyInfo = getPropertyInfo(name);
          if (name !== "style" && shouldIgnoreAttribute(name, propertyInfo, false)) {
            return "";
          }
          if (shouldRemoveAttribute(name, value, propertyInfo, false)) {
            return "";
          }
          if (propertyInfo !== null) {
            var attributeName = propertyInfo.attributeName;
            var type = propertyInfo.type;
            if (type === BOOLEAN || type === OVERLOADED_BOOLEAN && value === true) {
              return attributeName + '=""';
            } else {
              if (propertyInfo.sanitizeURL) {
                value = "" + value;
                sanitizeURL(value);
              }
              return attributeName + "=" + quoteAttributeValueForBrowser(value);
            }
          } else if (isAttributeNameSafe(name)) {
            return name + "=" + quoteAttributeValueForBrowser(value);
          }
          return "";
        }
        function createMarkupForCustomAttribute(name, value) {
          if (!isAttributeNameSafe(name) || value == null) {
            return "";
          }
          return name + "=" + quoteAttributeValueForBrowser(value);
        }
        function is(x, y) {
          return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var currentlyRenderingComponent = null;
        var firstWorkInProgressHook = null;
        var workInProgressHook = null;
        var isReRender = false;
        var didScheduleRenderPhaseUpdate = false;
        var renderPhaseUpdates = null;
        var numberOfReRenders = 0;
        var RE_RENDER_LIMIT = 25;
        var isInHookUserCodeInDev = false;
        var currentHookNameInDev;
        function resolveCurrentlyRenderingComponent() {
          if (!(currentlyRenderingComponent !== null)) {
            {
              throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          {
            if (isInHookUserCodeInDev) {
              error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
            }
          }
          return currentlyRenderingComponent;
        }
        function areHookInputsEqual(nextDeps, prevDeps) {
          if (prevDeps === null) {
            {
              error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", currentHookNameInDev);
            }
            return false;
          }
          {
            if (nextDeps.length !== prevDeps.length) {
              error("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s", currentHookNameInDev, "[" + nextDeps.join(", ") + "]", "[" + prevDeps.join(", ") + "]");
            }
          }
          for (var i2 = 0; i2 < prevDeps.length && i2 < nextDeps.length; i2++) {
            if (objectIs(nextDeps[i2], prevDeps[i2])) {
              continue;
            }
            return false;
          }
          return true;
        }
        function createHook() {
          if (numberOfReRenders > 0) {
            {
              {
                throw Error("Rendered more hooks than during the previous render");
              }
            }
          }
          return {
            memoizedState: null,
            queue: null,
            next: null
          };
        }
        function createWorkInProgressHook() {
          if (workInProgressHook === null) {
            if (firstWorkInProgressHook === null) {
              isReRender = false;
              firstWorkInProgressHook = workInProgressHook = createHook();
            } else {
              isReRender = true;
              workInProgressHook = firstWorkInProgressHook;
            }
          } else {
            if (workInProgressHook.next === null) {
              isReRender = false;
              workInProgressHook = workInProgressHook.next = createHook();
            } else {
              isReRender = true;
              workInProgressHook = workInProgressHook.next;
            }
          }
          return workInProgressHook;
        }
        function prepareToUseHooks(componentIdentity) {
          currentlyRenderingComponent = componentIdentity;
          {
            isInHookUserCodeInDev = false;
          }
        }
        function finishHooks(Component, props, children, refOrContext) {
          while (didScheduleRenderPhaseUpdate) {
            didScheduleRenderPhaseUpdate = false;
            numberOfReRenders += 1;
            workInProgressHook = null;
            children = Component(props, refOrContext);
          }
          resetHooksState();
          return children;
        }
        function resetHooksState() {
          {
            isInHookUserCodeInDev = false;
          }
          currentlyRenderingComponent = null;
          didScheduleRenderPhaseUpdate = false;
          firstWorkInProgressHook = null;
          numberOfReRenders = 0;
          renderPhaseUpdates = null;
          workInProgressHook = null;
        }
        function readContext(context, observedBits) {
          var threadID = currentPartialRenderer.threadID;
          validateContextBounds(context, threadID);
          {
            if (isInHookUserCodeInDev) {
              error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
            }
          }
          return context[threadID];
        }
        function useContext(context, observedBits) {
          {
            currentHookNameInDev = "useContext";
          }
          resolveCurrentlyRenderingComponent();
          var threadID = currentPartialRenderer.threadID;
          validateContextBounds(context, threadID);
          return context[threadID];
        }
        function basicStateReducer(state, action) {
          return typeof action === "function" ? action(state) : action;
        }
        function useState(initialState) {
          {
            currentHookNameInDev = "useState";
          }
          return useReducer(basicStateReducer, initialState);
        }
        function useReducer(reducer2, initialArg, init) {
          {
            if (reducer2 !== basicStateReducer) {
              currentHookNameInDev = "useReducer";
            }
          }
          currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
          workInProgressHook = createWorkInProgressHook();
          if (isReRender) {
            var queue = workInProgressHook.queue;
            var dispatch = queue.dispatch;
            if (renderPhaseUpdates !== null) {
              var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
              if (firstRenderPhaseUpdate !== void 0) {
                renderPhaseUpdates.delete(queue);
                var newState = workInProgressHook.memoizedState;
                var update = firstRenderPhaseUpdate;
                do {
                  var action = update.action;
                  {
                    isInHookUserCodeInDev = true;
                  }
                  newState = reducer2(newState, action);
                  {
                    isInHookUserCodeInDev = false;
                  }
                  update = update.next;
                } while (update !== null);
                workInProgressHook.memoizedState = newState;
                return [newState, dispatch];
              }
            }
            return [workInProgressHook.memoizedState, dispatch];
          } else {
            {
              isInHookUserCodeInDev = true;
            }
            var initialState;
            if (reducer2 === basicStateReducer) {
              initialState = typeof initialArg === "function" ? initialArg() : initialArg;
            } else {
              initialState = init !== void 0 ? init(initialArg) : initialArg;
            }
            {
              isInHookUserCodeInDev = false;
            }
            workInProgressHook.memoizedState = initialState;
            var _queue = workInProgressHook.queue = {
              last: null,
              dispatch: null
            };
            var _dispatch = _queue.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue);
            return [workInProgressHook.memoizedState, _dispatch];
          }
        }
        function useMemo(nextCreate, deps) {
          currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
          workInProgressHook = createWorkInProgressHook();
          var nextDeps = deps === void 0 ? null : deps;
          if (workInProgressHook !== null) {
            var prevState = workInProgressHook.memoizedState;
            if (prevState !== null) {
              if (nextDeps !== null) {
                var prevDeps = prevState[1];
                if (areHookInputsEqual(nextDeps, prevDeps)) {
                  return prevState[0];
                }
              }
            }
          }
          {
            isInHookUserCodeInDev = true;
          }
          var nextValue = nextCreate();
          {
            isInHookUserCodeInDev = false;
          }
          workInProgressHook.memoizedState = [nextValue, nextDeps];
          return nextValue;
        }
        function useRef(initialValue) {
          currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
          workInProgressHook = createWorkInProgressHook();
          var previousRef = workInProgressHook.memoizedState;
          if (previousRef === null) {
            var ref = {
              current: initialValue
            };
            {
              Object.seal(ref);
            }
            workInProgressHook.memoizedState = ref;
            return ref;
          } else {
            return previousRef;
          }
        }
        function useLayoutEffect(create, inputs) {
          {
            currentHookNameInDev = "useLayoutEffect";
            error("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
          }
        }
        function dispatchAction(componentIdentity, queue, action) {
          if (!(numberOfReRenders < RE_RENDER_LIMIT)) {
            {
              throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
            }
          }
          if (componentIdentity === currentlyRenderingComponent) {
            didScheduleRenderPhaseUpdate = true;
            var update = {
              action,
              next: null
            };
            if (renderPhaseUpdates === null) {
              renderPhaseUpdates = new Map();
            }
            var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
            if (firstRenderPhaseUpdate === void 0) {
              renderPhaseUpdates.set(queue, update);
            } else {
              var lastRenderPhaseUpdate = firstRenderPhaseUpdate;
              while (lastRenderPhaseUpdate.next !== null) {
                lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
              }
              lastRenderPhaseUpdate.next = update;
            }
          }
        }
        function useCallback(callback, deps) {
          return useMemo(function() {
            return callback;
          }, deps);
        }
        function useMutableSource(source, getSnapshot, subscribe) {
          resolveCurrentlyRenderingComponent();
          return getSnapshot(source._source);
        }
        function useDeferredValue(value) {
          resolveCurrentlyRenderingComponent();
          return value;
        }
        function useTransition() {
          resolveCurrentlyRenderingComponent();
          var startTransition = function(callback) {
            callback();
          };
          return [startTransition, false];
        }
        function useOpaqueIdentifier() {
          return (currentPartialRenderer.identifierPrefix || "") + "R:" + (currentPartialRenderer.uniqueID++).toString(36);
        }
        function noop() {
        }
        var currentPartialRenderer = null;
        function setCurrentPartialRenderer(renderer) {
          currentPartialRenderer = renderer;
        }
        var Dispatcher = {
          readContext,
          useContext,
          useMemo,
          useReducer,
          useRef,
          useState,
          useLayoutEffect,
          useCallback,
          useImperativeHandle: noop,
          useEffect: noop,
          useDebugValue: noop,
          useDeferredValue,
          useTransition,
          useOpaqueIdentifier,
          useMutableSource
        };
        var HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
        var MATH_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
        var SVG_NAMESPACE = "http://www.w3.org/2000/svg";
        var Namespaces = {
          html: HTML_NAMESPACE,
          mathml: MATH_NAMESPACE,
          svg: SVG_NAMESPACE
        };
        function getIntrinsicNamespace(type) {
          switch (type) {
            case "svg":
              return SVG_NAMESPACE;
            case "math":
              return MATH_NAMESPACE;
            default:
              return HTML_NAMESPACE;
          }
        }
        function getChildNamespace(parentNamespace, type) {
          if (parentNamespace == null || parentNamespace === HTML_NAMESPACE) {
            return getIntrinsicNamespace(type);
          }
          if (parentNamespace === SVG_NAMESPACE && type === "foreignObject") {
            return HTML_NAMESPACE;
          }
          return parentNamespace;
        }
        var hasReadOnlyValue = {
          button: true,
          checkbox: true,
          image: true,
          hidden: true,
          radio: true,
          reset: true,
          submit: true
        };
        function checkControlledValueProps(tagName, props) {
          {
            if (!(hasReadOnlyValue[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || props.value == null)) {
              error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.");
            }
            if (!(props.onChange || props.readOnly || props.disabled || props.checked == null)) {
              error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
            }
          }
        }
        var omittedCloseTags = {
          area: true,
          base: true,
          br: true,
          col: true,
          embed: true,
          hr: true,
          img: true,
          input: true,
          keygen: true,
          link: true,
          meta: true,
          param: true,
          source: true,
          track: true,
          wbr: true
        };
        var voidElementTags = _assign({
          menuitem: true
        }, omittedCloseTags);
        var HTML = "__html";
        function assertValidProps(tag, props) {
          if (!props) {
            return;
          }
          if (voidElementTags[tag]) {
            if (!(props.children == null && props.dangerouslySetInnerHTML == null)) {
              {
                throw Error(tag + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
              }
            }
          }
          if (props.dangerouslySetInnerHTML != null) {
            if (!(props.children == null)) {
              {
                throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
              }
            }
            if (!(typeof props.dangerouslySetInnerHTML === "object" && HTML in props.dangerouslySetInnerHTML)) {
              {
                throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
              }
            }
          }
          {
            if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null) {
              error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.");
            }
          }
          if (!(props.style == null || typeof props.style === "object")) {
            {
              throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
            }
          }
        }
        var isUnitlessNumber = {
          animationIterationCount: true,
          borderImageOutset: true,
          borderImageSlice: true,
          borderImageWidth: true,
          boxFlex: true,
          boxFlexGroup: true,
          boxOrdinalGroup: true,
          columnCount: true,
          columns: true,
          flex: true,
          flexGrow: true,
          flexPositive: true,
          flexShrink: true,
          flexNegative: true,
          flexOrder: true,
          gridArea: true,
          gridRow: true,
          gridRowEnd: true,
          gridRowSpan: true,
          gridRowStart: true,
          gridColumn: true,
          gridColumnEnd: true,
          gridColumnSpan: true,
          gridColumnStart: true,
          fontWeight: true,
          lineClamp: true,
          lineHeight: true,
          opacity: true,
          order: true,
          orphans: true,
          tabSize: true,
          widows: true,
          zIndex: true,
          zoom: true,
          fillOpacity: true,
          floodOpacity: true,
          stopOpacity: true,
          strokeDasharray: true,
          strokeDashoffset: true,
          strokeMiterlimit: true,
          strokeOpacity: true,
          strokeWidth: true
        };
        function prefixKey(prefix2, key) {
          return prefix2 + key.charAt(0).toUpperCase() + key.substring(1);
        }
        var prefixes = ["Webkit", "ms", "Moz", "O"];
        Object.keys(isUnitlessNumber).forEach(function(prop) {
          prefixes.forEach(function(prefix2) {
            isUnitlessNumber[prefixKey(prefix2, prop)] = isUnitlessNumber[prop];
          });
        });
        function dangerousStyleValue(name, value, isCustomProperty) {
          var isEmpty = value == null || typeof value === "boolean" || value === "";
          if (isEmpty) {
            return "";
          }
          if (!isCustomProperty && typeof value === "number" && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) {
            return value + "px";
          }
          return ("" + value).trim();
        }
        var uppercasePattern = /([A-Z])/g;
        var msPattern = /^ms-/;
        function hyphenateStyleName(name) {
          return name.replace(uppercasePattern, "-$1").toLowerCase().replace(msPattern, "-ms-");
        }
        function isCustomComponent(tagName, props) {
          if (tagName.indexOf("-") === -1) {
            return typeof props.is === "string";
          }
          switch (tagName) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return false;
            default:
              return true;
          }
        }
        var warnValidStyle = function() {
        };
        {
          var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
          var msPattern$1 = /^-ms-/;
          var hyphenPattern = /-(.)/g;
          var badStyleValueWithSemicolonPattern = /;\s*$/;
          var warnedStyleNames = {};
          var warnedStyleValues = {};
          var warnedForNaNValue = false;
          var warnedForInfinityValue = false;
          var camelize = function(string) {
            return string.replace(hyphenPattern, function(_, character) {
              return character.toUpperCase();
            });
          };
          var warnHyphenatedStyleName = function(name) {
            if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
              return;
            }
            warnedStyleNames[name] = true;
            error("Unsupported style property %s. Did you mean %s?", name, camelize(name.replace(msPattern$1, "ms-")));
          };
          var warnBadVendoredStyleName = function(name) {
            if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
              return;
            }
            warnedStyleNames[name] = true;
            error("Unsupported vendor-prefixed style property %s. Did you mean %s?", name, name.charAt(0).toUpperCase() + name.slice(1));
          };
          var warnStyleValueWithSemicolon = function(name, value) {
            if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
              return;
            }
            warnedStyleValues[value] = true;
            error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, name, value.replace(badStyleValueWithSemicolonPattern, ""));
          };
          var warnStyleValueIsNaN = function(name, value) {
            if (warnedForNaNValue) {
              return;
            }
            warnedForNaNValue = true;
            error("`NaN` is an invalid value for the `%s` css style property.", name);
          };
          var warnStyleValueIsInfinity = function(name, value) {
            if (warnedForInfinityValue) {
              return;
            }
            warnedForInfinityValue = true;
            error("`Infinity` is an invalid value for the `%s` css style property.", name);
          };
          warnValidStyle = function(name, value) {
            if (name.indexOf("-") > -1) {
              warnHyphenatedStyleName(name);
            } else if (badVendoredStyleNamePattern.test(name)) {
              warnBadVendoredStyleName(name);
            } else if (badStyleValueWithSemicolonPattern.test(value)) {
              warnStyleValueWithSemicolon(name, value);
            }
            if (typeof value === "number") {
              if (isNaN(value)) {
                warnStyleValueIsNaN(name, value);
              } else if (!isFinite(value)) {
                warnStyleValueIsInfinity(name, value);
              }
            }
          };
        }
        var warnValidStyle$1 = warnValidStyle;
        var ariaProperties = {
          "aria-current": 0,
          "aria-details": 0,
          "aria-disabled": 0,
          "aria-hidden": 0,
          "aria-invalid": 0,
          "aria-keyshortcuts": 0,
          "aria-label": 0,
          "aria-roledescription": 0,
          "aria-autocomplete": 0,
          "aria-checked": 0,
          "aria-expanded": 0,
          "aria-haspopup": 0,
          "aria-level": 0,
          "aria-modal": 0,
          "aria-multiline": 0,
          "aria-multiselectable": 0,
          "aria-orientation": 0,
          "aria-placeholder": 0,
          "aria-pressed": 0,
          "aria-readonly": 0,
          "aria-required": 0,
          "aria-selected": 0,
          "aria-sort": 0,
          "aria-valuemax": 0,
          "aria-valuemin": 0,
          "aria-valuenow": 0,
          "aria-valuetext": 0,
          "aria-atomic": 0,
          "aria-busy": 0,
          "aria-live": 0,
          "aria-relevant": 0,
          "aria-dropeffect": 0,
          "aria-grabbed": 0,
          "aria-activedescendant": 0,
          "aria-colcount": 0,
          "aria-colindex": 0,
          "aria-colspan": 0,
          "aria-controls": 0,
          "aria-describedby": 0,
          "aria-errormessage": 0,
          "aria-flowto": 0,
          "aria-labelledby": 0,
          "aria-owns": 0,
          "aria-posinset": 0,
          "aria-rowcount": 0,
          "aria-rowindex": 0,
          "aria-rowspan": 0,
          "aria-setsize": 0
        };
        var warnedProperties = {};
        var rARIA = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$");
        var rARIACamel = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
        var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
        function validateProperty(tagName, name) {
          {
            if (hasOwnProperty$1.call(warnedProperties, name) && warnedProperties[name]) {
              return true;
            }
            if (rARIACamel.test(name)) {
              var ariaName = "aria-" + name.slice(4).toLowerCase();
              var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;
              if (correctName == null) {
                error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", name);
                warnedProperties[name] = true;
                return true;
              }
              if (name !== correctName) {
                error("Invalid ARIA attribute `%s`. Did you mean `%s`?", name, correctName);
                warnedProperties[name] = true;
                return true;
              }
            }
            if (rARIA.test(name)) {
              var lowerCasedName = name.toLowerCase();
              var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;
              if (standardName == null) {
                warnedProperties[name] = true;
                return false;
              }
              if (name !== standardName) {
                error("Unknown ARIA attribute `%s`. Did you mean `%s`?", name, standardName);
                warnedProperties[name] = true;
                return true;
              }
            }
          }
          return true;
        }
        function warnInvalidARIAProps(type, props) {
          {
            var invalidProps = [];
            for (var key in props) {
              var isValid = validateProperty(type, key);
              if (!isValid) {
                invalidProps.push(key);
              }
            }
            var unknownPropString = invalidProps.map(function(prop) {
              return "`" + prop + "`";
            }).join(", ");
            if (invalidProps.length === 1) {
              error("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type);
            } else if (invalidProps.length > 1) {
              error("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type);
            }
          }
        }
        function validateProperties(type, props) {
          if (isCustomComponent(type, props)) {
            return;
          }
          warnInvalidARIAProps(type, props);
        }
        var didWarnValueNull = false;
        function validateProperties$1(type, props) {
          {
            if (type !== "input" && type !== "textarea" && type !== "select") {
              return;
            }
            if (props != null && props.value === null && !didWarnValueNull) {
              didWarnValueNull = true;
              if (type === "select" && props.multiple) {
                error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", type);
              } else {
                error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", type);
              }
            }
          }
        }
        var possibleStandardNames = {
          accept: "accept",
          acceptcharset: "acceptCharset",
          "accept-charset": "acceptCharset",
          accesskey: "accessKey",
          action: "action",
          allowfullscreen: "allowFullScreen",
          alt: "alt",
          as: "as",
          async: "async",
          autocapitalize: "autoCapitalize",
          autocomplete: "autoComplete",
          autocorrect: "autoCorrect",
          autofocus: "autoFocus",
          autoplay: "autoPlay",
          autosave: "autoSave",
          capture: "capture",
          cellpadding: "cellPadding",
          cellspacing: "cellSpacing",
          challenge: "challenge",
          charset: "charSet",
          checked: "checked",
          children: "children",
          cite: "cite",
          class: "className",
          classid: "classID",
          classname: "className",
          cols: "cols",
          colspan: "colSpan",
          content: "content",
          contenteditable: "contentEditable",
          contextmenu: "contextMenu",
          controls: "controls",
          controlslist: "controlsList",
          coords: "coords",
          crossorigin: "crossOrigin",
          dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
          data: "data",
          datetime: "dateTime",
          default: "default",
          defaultchecked: "defaultChecked",
          defaultvalue: "defaultValue",
          defer: "defer",
          dir: "dir",
          disabled: "disabled",
          disablepictureinpicture: "disablePictureInPicture",
          disableremoteplayback: "disableRemotePlayback",
          download: "download",
          draggable: "draggable",
          enctype: "encType",
          enterkeyhint: "enterKeyHint",
          for: "htmlFor",
          form: "form",
          formmethod: "formMethod",
          formaction: "formAction",
          formenctype: "formEncType",
          formnovalidate: "formNoValidate",
          formtarget: "formTarget",
          frameborder: "frameBorder",
          headers: "headers",
          height: "height",
          hidden: "hidden",
          high: "high",
          href: "href",
          hreflang: "hrefLang",
          htmlfor: "htmlFor",
          httpequiv: "httpEquiv",
          "http-equiv": "httpEquiv",
          icon: "icon",
          id: "id",
          innerhtml: "innerHTML",
          inputmode: "inputMode",
          integrity: "integrity",
          is: "is",
          itemid: "itemID",
          itemprop: "itemProp",
          itemref: "itemRef",
          itemscope: "itemScope",
          itemtype: "itemType",
          keyparams: "keyParams",
          keytype: "keyType",
          kind: "kind",
          label: "label",
          lang: "lang",
          list: "list",
          loop: "loop",
          low: "low",
          manifest: "manifest",
          marginwidth: "marginWidth",
          marginheight: "marginHeight",
          max: "max",
          maxlength: "maxLength",
          media: "media",
          mediagroup: "mediaGroup",
          method: "method",
          min: "min",
          minlength: "minLength",
          multiple: "multiple",
          muted: "muted",
          name: "name",
          nomodule: "noModule",
          nonce: "nonce",
          novalidate: "noValidate",
          open: "open",
          optimum: "optimum",
          pattern: "pattern",
          placeholder: "placeholder",
          playsinline: "playsInline",
          poster: "poster",
          preload: "preload",
          profile: "profile",
          radiogroup: "radioGroup",
          readonly: "readOnly",
          referrerpolicy: "referrerPolicy",
          rel: "rel",
          required: "required",
          reversed: "reversed",
          role: "role",
          rows: "rows",
          rowspan: "rowSpan",
          sandbox: "sandbox",
          scope: "scope",
          scoped: "scoped",
          scrolling: "scrolling",
          seamless: "seamless",
          selected: "selected",
          shape: "shape",
          size: "size",
          sizes: "sizes",
          span: "span",
          spellcheck: "spellCheck",
          src: "src",
          srcdoc: "srcDoc",
          srclang: "srcLang",
          srcset: "srcSet",
          start: "start",
          step: "step",
          style: "style",
          summary: "summary",
          tabindex: "tabIndex",
          target: "target",
          title: "title",
          type: "type",
          usemap: "useMap",
          value: "value",
          width: "width",
          wmode: "wmode",
          wrap: "wrap",
          about: "about",
          accentheight: "accentHeight",
          "accent-height": "accentHeight",
          accumulate: "accumulate",
          additive: "additive",
          alignmentbaseline: "alignmentBaseline",
          "alignment-baseline": "alignmentBaseline",
          allowreorder: "allowReorder",
          alphabetic: "alphabetic",
          amplitude: "amplitude",
          arabicform: "arabicForm",
          "arabic-form": "arabicForm",
          ascent: "ascent",
          attributename: "attributeName",
          attributetype: "attributeType",
          autoreverse: "autoReverse",
          azimuth: "azimuth",
          basefrequency: "baseFrequency",
          baselineshift: "baselineShift",
          "baseline-shift": "baselineShift",
          baseprofile: "baseProfile",
          bbox: "bbox",
          begin: "begin",
          bias: "bias",
          by: "by",
          calcmode: "calcMode",
          capheight: "capHeight",
          "cap-height": "capHeight",
          clip: "clip",
          clippath: "clipPath",
          "clip-path": "clipPath",
          clippathunits: "clipPathUnits",
          cliprule: "clipRule",
          "clip-rule": "clipRule",
          color: "color",
          colorinterpolation: "colorInterpolation",
          "color-interpolation": "colorInterpolation",
          colorinterpolationfilters: "colorInterpolationFilters",
          "color-interpolation-filters": "colorInterpolationFilters",
          colorprofile: "colorProfile",
          "color-profile": "colorProfile",
          colorrendering: "colorRendering",
          "color-rendering": "colorRendering",
          contentscripttype: "contentScriptType",
          contentstyletype: "contentStyleType",
          cursor: "cursor",
          cx: "cx",
          cy: "cy",
          d: "d",
          datatype: "datatype",
          decelerate: "decelerate",
          descent: "descent",
          diffuseconstant: "diffuseConstant",
          direction: "direction",
          display: "display",
          divisor: "divisor",
          dominantbaseline: "dominantBaseline",
          "dominant-baseline": "dominantBaseline",
          dur: "dur",
          dx: "dx",
          dy: "dy",
          edgemode: "edgeMode",
          elevation: "elevation",
          enablebackground: "enableBackground",
          "enable-background": "enableBackground",
          end: "end",
          exponent: "exponent",
          externalresourcesrequired: "externalResourcesRequired",
          fill: "fill",
          fillopacity: "fillOpacity",
          "fill-opacity": "fillOpacity",
          fillrule: "fillRule",
          "fill-rule": "fillRule",
          filter: "filter",
          filterres: "filterRes",
          filterunits: "filterUnits",
          floodopacity: "floodOpacity",
          "flood-opacity": "floodOpacity",
          floodcolor: "floodColor",
          "flood-color": "floodColor",
          focusable: "focusable",
          fontfamily: "fontFamily",
          "font-family": "fontFamily",
          fontsize: "fontSize",
          "font-size": "fontSize",
          fontsizeadjust: "fontSizeAdjust",
          "font-size-adjust": "fontSizeAdjust",
          fontstretch: "fontStretch",
          "font-stretch": "fontStretch",
          fontstyle: "fontStyle",
          "font-style": "fontStyle",
          fontvariant: "fontVariant",
          "font-variant": "fontVariant",
          fontweight: "fontWeight",
          "font-weight": "fontWeight",
          format: "format",
          from: "from",
          fx: "fx",
          fy: "fy",
          g1: "g1",
          g2: "g2",
          glyphname: "glyphName",
          "glyph-name": "glyphName",
          glyphorientationhorizontal: "glyphOrientationHorizontal",
          "glyph-orientation-horizontal": "glyphOrientationHorizontal",
          glyphorientationvertical: "glyphOrientationVertical",
          "glyph-orientation-vertical": "glyphOrientationVertical",
          glyphref: "glyphRef",
          gradienttransform: "gradientTransform",
          gradientunits: "gradientUnits",
          hanging: "hanging",
          horizadvx: "horizAdvX",
          "horiz-adv-x": "horizAdvX",
          horizoriginx: "horizOriginX",
          "horiz-origin-x": "horizOriginX",
          ideographic: "ideographic",
          imagerendering: "imageRendering",
          "image-rendering": "imageRendering",
          in2: "in2",
          in: "in",
          inlist: "inlist",
          intercept: "intercept",
          k1: "k1",
          k2: "k2",
          k3: "k3",
          k4: "k4",
          k: "k",
          kernelmatrix: "kernelMatrix",
          kernelunitlength: "kernelUnitLength",
          kerning: "kerning",
          keypoints: "keyPoints",
          keysplines: "keySplines",
          keytimes: "keyTimes",
          lengthadjust: "lengthAdjust",
          letterspacing: "letterSpacing",
          "letter-spacing": "letterSpacing",
          lightingcolor: "lightingColor",
          "lighting-color": "lightingColor",
          limitingconeangle: "limitingConeAngle",
          local: "local",
          markerend: "markerEnd",
          "marker-end": "markerEnd",
          markerheight: "markerHeight",
          markermid: "markerMid",
          "marker-mid": "markerMid",
          markerstart: "markerStart",
          "marker-start": "markerStart",
          markerunits: "markerUnits",
          markerwidth: "markerWidth",
          mask: "mask",
          maskcontentunits: "maskContentUnits",
          maskunits: "maskUnits",
          mathematical: "mathematical",
          mode: "mode",
          numoctaves: "numOctaves",
          offset: "offset",
          opacity: "opacity",
          operator: "operator",
          order: "order",
          orient: "orient",
          orientation: "orientation",
          origin: "origin",
          overflow: "overflow",
          overlineposition: "overlinePosition",
          "overline-position": "overlinePosition",
          overlinethickness: "overlineThickness",
          "overline-thickness": "overlineThickness",
          paintorder: "paintOrder",
          "paint-order": "paintOrder",
          panose1: "panose1",
          "panose-1": "panose1",
          pathlength: "pathLength",
          patterncontentunits: "patternContentUnits",
          patterntransform: "patternTransform",
          patternunits: "patternUnits",
          pointerevents: "pointerEvents",
          "pointer-events": "pointerEvents",
          points: "points",
          pointsatx: "pointsAtX",
          pointsaty: "pointsAtY",
          pointsatz: "pointsAtZ",
          prefix: "prefix",
          preservealpha: "preserveAlpha",
          preserveaspectratio: "preserveAspectRatio",
          primitiveunits: "primitiveUnits",
          property: "property",
          r: "r",
          radius: "radius",
          refx: "refX",
          refy: "refY",
          renderingintent: "renderingIntent",
          "rendering-intent": "renderingIntent",
          repeatcount: "repeatCount",
          repeatdur: "repeatDur",
          requiredextensions: "requiredExtensions",
          requiredfeatures: "requiredFeatures",
          resource: "resource",
          restart: "restart",
          result: "result",
          results: "results",
          rotate: "rotate",
          rx: "rx",
          ry: "ry",
          scale: "scale",
          security: "security",
          seed: "seed",
          shaperendering: "shapeRendering",
          "shape-rendering": "shapeRendering",
          slope: "slope",
          spacing: "spacing",
          specularconstant: "specularConstant",
          specularexponent: "specularExponent",
          speed: "speed",
          spreadmethod: "spreadMethod",
          startoffset: "startOffset",
          stddeviation: "stdDeviation",
          stemh: "stemh",
          stemv: "stemv",
          stitchtiles: "stitchTiles",
          stopcolor: "stopColor",
          "stop-color": "stopColor",
          stopopacity: "stopOpacity",
          "stop-opacity": "stopOpacity",
          strikethroughposition: "strikethroughPosition",
          "strikethrough-position": "strikethroughPosition",
          strikethroughthickness: "strikethroughThickness",
          "strikethrough-thickness": "strikethroughThickness",
          string: "string",
          stroke: "stroke",
          strokedasharray: "strokeDasharray",
          "stroke-dasharray": "strokeDasharray",
          strokedashoffset: "strokeDashoffset",
          "stroke-dashoffset": "strokeDashoffset",
          strokelinecap: "strokeLinecap",
          "stroke-linecap": "strokeLinecap",
          strokelinejoin: "strokeLinejoin",
          "stroke-linejoin": "strokeLinejoin",
          strokemiterlimit: "strokeMiterlimit",
          "stroke-miterlimit": "strokeMiterlimit",
          strokewidth: "strokeWidth",
          "stroke-width": "strokeWidth",
          strokeopacity: "strokeOpacity",
          "stroke-opacity": "strokeOpacity",
          suppresscontenteditablewarning: "suppressContentEditableWarning",
          suppresshydrationwarning: "suppressHydrationWarning",
          surfacescale: "surfaceScale",
          systemlanguage: "systemLanguage",
          tablevalues: "tableValues",
          targetx: "targetX",
          targety: "targetY",
          textanchor: "textAnchor",
          "text-anchor": "textAnchor",
          textdecoration: "textDecoration",
          "text-decoration": "textDecoration",
          textlength: "textLength",
          textrendering: "textRendering",
          "text-rendering": "textRendering",
          to: "to",
          transform: "transform",
          typeof: "typeof",
          u1: "u1",
          u2: "u2",
          underlineposition: "underlinePosition",
          "underline-position": "underlinePosition",
          underlinethickness: "underlineThickness",
          "underline-thickness": "underlineThickness",
          unicode: "unicode",
          unicodebidi: "unicodeBidi",
          "unicode-bidi": "unicodeBidi",
          unicoderange: "unicodeRange",
          "unicode-range": "unicodeRange",
          unitsperem: "unitsPerEm",
          "units-per-em": "unitsPerEm",
          unselectable: "unselectable",
          valphabetic: "vAlphabetic",
          "v-alphabetic": "vAlphabetic",
          values: "values",
          vectoreffect: "vectorEffect",
          "vector-effect": "vectorEffect",
          version: "version",
          vertadvy: "vertAdvY",
          "vert-adv-y": "vertAdvY",
          vertoriginx: "vertOriginX",
          "vert-origin-x": "vertOriginX",
          vertoriginy: "vertOriginY",
          "vert-origin-y": "vertOriginY",
          vhanging: "vHanging",
          "v-hanging": "vHanging",
          videographic: "vIdeographic",
          "v-ideographic": "vIdeographic",
          viewbox: "viewBox",
          viewtarget: "viewTarget",
          visibility: "visibility",
          vmathematical: "vMathematical",
          "v-mathematical": "vMathematical",
          vocab: "vocab",
          widths: "widths",
          wordspacing: "wordSpacing",
          "word-spacing": "wordSpacing",
          writingmode: "writingMode",
          "writing-mode": "writingMode",
          x1: "x1",
          x2: "x2",
          x: "x",
          xchannelselector: "xChannelSelector",
          xheight: "xHeight",
          "x-height": "xHeight",
          xlinkactuate: "xlinkActuate",
          "xlink:actuate": "xlinkActuate",
          xlinkarcrole: "xlinkArcrole",
          "xlink:arcrole": "xlinkArcrole",
          xlinkhref: "xlinkHref",
          "xlink:href": "xlinkHref",
          xlinkrole: "xlinkRole",
          "xlink:role": "xlinkRole",
          xlinkshow: "xlinkShow",
          "xlink:show": "xlinkShow",
          xlinktitle: "xlinkTitle",
          "xlink:title": "xlinkTitle",
          xlinktype: "xlinkType",
          "xlink:type": "xlinkType",
          xmlbase: "xmlBase",
          "xml:base": "xmlBase",
          xmllang: "xmlLang",
          "xml:lang": "xmlLang",
          xmlns: "xmlns",
          "xml:space": "xmlSpace",
          xmlnsxlink: "xmlnsXlink",
          "xmlns:xlink": "xmlnsXlink",
          xmlspace: "xmlSpace",
          y1: "y1",
          y2: "y2",
          y: "y",
          ychannelselector: "yChannelSelector",
          z: "z",
          zoomandpan: "zoomAndPan"
        };
        var validateProperty$1 = function() {
        };
        {
          var warnedProperties$1 = {};
          var _hasOwnProperty = Object.prototype.hasOwnProperty;
          var EVENT_NAME_REGEX = /^on./;
          var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
          var rARIA$1 = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$");
          var rARIACamel$1 = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
          validateProperty$1 = function(tagName, name, value, eventRegistry) {
            if (_hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
              return true;
            }
            var lowerCasedName = name.toLowerCase();
            if (lowerCasedName === "onfocusin" || lowerCasedName === "onfocusout") {
              error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.");
              warnedProperties$1[name] = true;
              return true;
            }
            if (eventRegistry != null) {
              var registrationNameDependencies = eventRegistry.registrationNameDependencies, possibleRegistrationNames = eventRegistry.possibleRegistrationNames;
              if (registrationNameDependencies.hasOwnProperty(name)) {
                return true;
              }
              var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;
              if (registrationName != null) {
                error("Invalid event handler property `%s`. Did you mean `%s`?", name, registrationName);
                warnedProperties$1[name] = true;
                return true;
              }
              if (EVENT_NAME_REGEX.test(name)) {
                error("Unknown event handler property `%s`. It will be ignored.", name);
                warnedProperties$1[name] = true;
                return true;
              }
            } else if (EVENT_NAME_REGEX.test(name)) {
              if (INVALID_EVENT_NAME_REGEX.test(name)) {
                error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", name);
              }
              warnedProperties$1[name] = true;
              return true;
            }
            if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
              return true;
            }
            if (lowerCasedName === "innerhtml") {
              error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`.");
              warnedProperties$1[name] = true;
              return true;
            }
            if (lowerCasedName === "aria") {
              error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead.");
              warnedProperties$1[name] = true;
              return true;
            }
            if (lowerCasedName === "is" && value !== null && value !== void 0 && typeof value !== "string") {
              error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof value);
              warnedProperties$1[name] = true;
              return true;
            }
            if (typeof value === "number" && isNaN(value)) {
              error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", name);
              warnedProperties$1[name] = true;
              return true;
            }
            var propertyInfo = getPropertyInfo(name);
            var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED;
            if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
              var standardName = possibleStandardNames[lowerCasedName];
              if (standardName !== name) {
                error("Invalid DOM property `%s`. Did you mean `%s`?", name, standardName);
                warnedProperties$1[name] = true;
                return true;
              }
            } else if (!isReserved && name !== lowerCasedName) {
              error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", name, lowerCasedName);
              warnedProperties$1[name] = true;
              return true;
            }
            if (typeof value === "boolean" && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
              if (value) {
                error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', value, name, name, value, name);
              } else {
                error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
              }
              warnedProperties$1[name] = true;
              return true;
            }
            if (isReserved) {
              return true;
            }
            if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
              warnedProperties$1[name] = true;
              return false;
            }
            if ((value === "false" || value === "true") && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
              error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", value, name, value === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', name, value);
              warnedProperties$1[name] = true;
              return true;
            }
            return true;
          };
        }
        var warnUnknownProperties = function(type, props, eventRegistry) {
          {
            var unknownProps = [];
            for (var key in props) {
              var isValid = validateProperty$1(type, key, props[key], eventRegistry);
              if (!isValid) {
                unknownProps.push(key);
              }
            }
            var unknownPropString = unknownProps.map(function(prop) {
              return "`" + prop + "`";
            }).join(", ");
            if (unknownProps.length === 1) {
              error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type);
            } else if (unknownProps.length > 1) {
              error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type);
            }
          }
        };
        function validateProperties$2(type, props, eventRegistry) {
          if (isCustomComponent(type, props)) {
            return;
          }
          warnUnknownProperties(type, props, eventRegistry);
        }
        var toArray = React2.Children.toArray;
        var currentDebugStacks = [];
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var ReactDebugCurrentFrame$1;
        var prevGetCurrentStackImpl = null;
        var getCurrentServerStackImpl = function() {
          return "";
        };
        var describeStackFrame = function(element) {
          return "";
        };
        var validatePropertiesInDevelopment = function(type, props) {
        };
        var pushCurrentDebugStack = function(stack) {
        };
        var pushElementToDebugStack = function(element) {
        };
        var popCurrentDebugStack = function() {
        };
        var hasWarnedAboutUsingContextAsConsumer = false;
        {
          ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
          validatePropertiesInDevelopment = function(type, props) {
            validateProperties(type, props);
            validateProperties$1(type, props);
            validateProperties$2(type, props, null);
          };
          describeStackFrame = function(element) {
            return describeUnknownElementTypeFrameInDEV(element.type, element._source, null);
          };
          pushCurrentDebugStack = function(stack) {
            currentDebugStacks.push(stack);
            if (currentDebugStacks.length === 1) {
              prevGetCurrentStackImpl = ReactDebugCurrentFrame$1.getCurrentStack;
              ReactDebugCurrentFrame$1.getCurrentStack = getCurrentServerStackImpl;
            }
          };
          pushElementToDebugStack = function(element) {
            var stack = currentDebugStacks[currentDebugStacks.length - 1];
            var frame = stack[stack.length - 1];
            frame.debugElementStack.push(element);
          };
          popCurrentDebugStack = function() {
            currentDebugStacks.pop();
            if (currentDebugStacks.length === 0) {
              ReactDebugCurrentFrame$1.getCurrentStack = prevGetCurrentStackImpl;
              prevGetCurrentStackImpl = null;
            }
          };
          getCurrentServerStackImpl = function() {
            if (currentDebugStacks.length === 0) {
              return "";
            }
            var frames = currentDebugStacks[currentDebugStacks.length - 1];
            var stack = "";
            for (var i2 = frames.length - 1; i2 >= 0; i2--) {
              var frame = frames[i2];
              var debugElementStack = frame.debugElementStack;
              for (var ii = debugElementStack.length - 1; ii >= 0; ii--) {
                stack += describeStackFrame(debugElementStack[ii]);
              }
            }
            return stack;
          };
        }
        var didWarnDefaultInputValue = false;
        var didWarnDefaultChecked = false;
        var didWarnDefaultSelectValue = false;
        var didWarnDefaultTextareaValue = false;
        var didWarnInvalidOptionChildren = false;
        var didWarnAboutNoopUpdateForComponent = {};
        var didWarnAboutBadClass = {};
        var didWarnAboutModulePatternComponent = {};
        var didWarnAboutDeprecatedWillMount = {};
        var didWarnAboutUndefinedDerivedState = {};
        var didWarnAboutUninitializedState = {};
        var valuePropNames = ["value", "defaultValue"];
        var newlineEatingTags = {
          listing: true,
          pre: true,
          textarea: true
        };
        var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
        var validatedTagCache = {};
        function validateDangerousTag(tag) {
          if (!validatedTagCache.hasOwnProperty(tag)) {
            if (!VALID_TAG_REGEX.test(tag)) {
              {
                throw Error("Invalid tag: " + tag);
              }
            }
            validatedTagCache[tag] = true;
          }
        }
        var styleNameCache = {};
        var processStyleName = function(styleName) {
          if (styleNameCache.hasOwnProperty(styleName)) {
            return styleNameCache[styleName];
          }
          var result = hyphenateStyleName(styleName);
          styleNameCache[styleName] = result;
          return result;
        };
        function createMarkupForStyles(styles) {
          var serialized = "";
          var delimiter = "";
          for (var styleName in styles) {
            if (!styles.hasOwnProperty(styleName)) {
              continue;
            }
            var isCustomProperty = styleName.indexOf("--") === 0;
            var styleValue = styles[styleName];
            {
              if (!isCustomProperty) {
                warnValidStyle$1(styleName, styleValue);
              }
            }
            if (styleValue != null) {
              serialized += delimiter + (isCustomProperty ? styleName : processStyleName(styleName)) + ":";
              serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty);
              delimiter = ";";
            }
          }
          return serialized || null;
        }
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && getComponentName(_constructor) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnAboutNoopUpdateForComponent[warningKey]) {
              return;
            }
            error("%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.\n\nPlease check the code for the %s component.", callerName, callerName, componentName);
            didWarnAboutNoopUpdateForComponent[warningKey] = true;
          }
        }
        function shouldConstruct$1(Component) {
          return Component.prototype && Component.prototype.isReactComponent;
        }
        function getNonChildrenInnerMarkup(props) {
          var innerHTML = props.dangerouslySetInnerHTML;
          if (innerHTML != null) {
            if (innerHTML.__html != null) {
              return innerHTML.__html;
            }
          } else {
            var content = props.children;
            if (typeof content === "string" || typeof content === "number") {
              return escapeTextForBrowser(content);
            }
          }
          return null;
        }
        function flattenTopLevelChildren(children) {
          if (!React2.isValidElement(children)) {
            return toArray(children);
          }
          var element = children;
          if (element.type !== REACT_FRAGMENT_TYPE) {
            return [element];
          }
          var fragmentChildren = element.props.children;
          if (!React2.isValidElement(fragmentChildren)) {
            return toArray(fragmentChildren);
          }
          var fragmentChildElement = fragmentChildren;
          return [fragmentChildElement];
        }
        function flattenOptionChildren(children) {
          if (children === void 0 || children === null) {
            return children;
          }
          var content = "";
          React2.Children.forEach(children, function(child) {
            if (child == null) {
              return;
            }
            content += child;
            {
              if (!didWarnInvalidOptionChildren && typeof child !== "string" && typeof child !== "number") {
                didWarnInvalidOptionChildren = true;
                error("Only strings and numbers are supported as <option> children.");
              }
            }
          });
          return content;
        }
        var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
        var STYLE = "style";
        var RESERVED_PROPS = {
          children: null,
          dangerouslySetInnerHTML: null,
          suppressContentEditableWarning: null,
          suppressHydrationWarning: null
        };
        function createOpenTagMarkup(tagVerbatim, tagLowercase, props, namespace, makeStaticMarkup, isRootElement) {
          var ret = "<" + tagVerbatim;
          var isCustomComponent$1 = isCustomComponent(tagLowercase, props);
          for (var propKey in props) {
            if (!hasOwnProperty$2.call(props, propKey)) {
              continue;
            }
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            if (propKey === STYLE) {
              propValue = createMarkupForStyles(propValue);
            }
            var markup = null;
            if (isCustomComponent$1) {
              if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
                markup = createMarkupForCustomAttribute(propKey, propValue);
              }
            } else {
              markup = createMarkupForProperty(propKey, propValue);
            }
            if (markup) {
              ret += " " + markup;
            }
          }
          if (makeStaticMarkup) {
            return ret;
          }
          if (isRootElement) {
            ret += " " + createMarkupForRoot();
          }
          return ret;
        }
        function validateRenderResult(child, type) {
          if (child === void 0) {
            {
              {
                throw Error((getComponentName(type) || "Component") + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");
              }
            }
          }
        }
        function resolve(child, context, threadID) {
          while (React2.isValidElement(child)) {
            var element = child;
            var Component = element.type;
            {
              pushElementToDebugStack(element);
            }
            if (typeof Component !== "function") {
              break;
            }
            processChild(element, Component);
          }
          function processChild(element2, Component2) {
            var isClass = shouldConstruct$1(Component2);
            var publicContext = processContext(Component2, context, threadID, isClass);
            var queue = [];
            var replace = false;
            var updater = {
              isMounted: function(publicInstance) {
                return false;
              },
              enqueueForceUpdate: function(publicInstance) {
                if (queue === null) {
                  warnNoop(publicInstance, "forceUpdate");
                  return null;
                }
              },
              enqueueReplaceState: function(publicInstance, completeState) {
                replace = true;
                queue = [completeState];
              },
              enqueueSetState: function(publicInstance, currentPartialState) {
                if (queue === null) {
                  warnNoop(publicInstance, "setState");
                  return null;
                }
                queue.push(currentPartialState);
              }
            };
            var inst;
            if (isClass) {
              inst = new Component2(element2.props, publicContext, updater);
              if (typeof Component2.getDerivedStateFromProps === "function") {
                {
                  if (inst.state === null || inst.state === void 0) {
                    var componentName = getComponentName(Component2) || "Unknown";
                    if (!didWarnAboutUninitializedState[componentName]) {
                      error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", componentName, inst.state === null ? "null" : "undefined", componentName);
                      didWarnAboutUninitializedState[componentName] = true;
                    }
                  }
                }
                var partialState = Component2.getDerivedStateFromProps.call(null, element2.props, inst.state);
                {
                  if (partialState === void 0) {
                    var _componentName = getComponentName(Component2) || "Unknown";
                    if (!didWarnAboutUndefinedDerivedState[_componentName]) {
                      error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", _componentName);
                      didWarnAboutUndefinedDerivedState[_componentName] = true;
                    }
                  }
                }
                if (partialState != null) {
                  inst.state = _assign({}, inst.state, partialState);
                }
              }
            } else {
              {
                if (Component2.prototype && typeof Component2.prototype.render === "function") {
                  var _componentName2 = getComponentName(Component2) || "Unknown";
                  if (!didWarnAboutBadClass[_componentName2]) {
                    error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", _componentName2, _componentName2);
                    didWarnAboutBadClass[_componentName2] = true;
                  }
                }
              }
              var componentIdentity = {};
              prepareToUseHooks(componentIdentity);
              inst = Component2(element2.props, publicContext, updater);
              inst = finishHooks(Component2, element2.props, inst, publicContext);
              {
                if (inst != null && inst.render != null) {
                  var _componentName3 = getComponentName(Component2) || "Unknown";
                  if (!didWarnAboutModulePatternComponent[_componentName3]) {
                    error("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName3, _componentName3, _componentName3);
                    didWarnAboutModulePatternComponent[_componentName3] = true;
                  }
                }
              }
              if (inst == null || inst.render == null) {
                child = inst;
                validateRenderResult(child, Component2);
                return;
              }
            }
            inst.props = element2.props;
            inst.context = publicContext;
            inst.updater = updater;
            var initialState = inst.state;
            if (initialState === void 0) {
              inst.state = initialState = null;
            }
            if (typeof inst.UNSAFE_componentWillMount === "function" || typeof inst.componentWillMount === "function") {
              if (typeof inst.componentWillMount === "function") {
                {
                  if (inst.componentWillMount.__suppressDeprecationWarning !== true) {
                    var _componentName4 = getComponentName(Component2) || "Unknown";
                    if (!didWarnAboutDeprecatedWillMount[_componentName4]) {
                      warn("componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.\n\nPlease update the following components: %s", _componentName4);
                      didWarnAboutDeprecatedWillMount[_componentName4] = true;
                    }
                  }
                }
                if (typeof Component2.getDerivedStateFromProps !== "function") {
                  inst.componentWillMount();
                }
              }
              if (typeof inst.UNSAFE_componentWillMount === "function" && typeof Component2.getDerivedStateFromProps !== "function") {
                inst.UNSAFE_componentWillMount();
              }
              if (queue.length) {
                var oldQueue = queue;
                var oldReplace = replace;
                queue = null;
                replace = false;
                if (oldReplace && oldQueue.length === 1) {
                  inst.state = oldQueue[0];
                } else {
                  var nextState = oldReplace ? oldQueue[0] : inst.state;
                  var dontMutate = true;
                  for (var i2 = oldReplace ? 1 : 0; i2 < oldQueue.length; i2++) {
                    var partial = oldQueue[i2];
                    var _partialState = typeof partial === "function" ? partial.call(inst, nextState, element2.props, publicContext) : partial;
                    if (_partialState != null) {
                      if (dontMutate) {
                        dontMutate = false;
                        nextState = _assign({}, nextState, _partialState);
                      } else {
                        _assign(nextState, _partialState);
                      }
                    }
                  }
                  inst.state = nextState;
                }
              } else {
                queue = null;
              }
            }
            child = inst.render();
            {
              if (child === void 0 && inst.render._isMockFunction) {
                child = null;
              }
            }
            validateRenderResult(child, Component2);
            var childContext;
            {
              if (typeof inst.getChildContext === "function") {
                var _childContextTypes = Component2.childContextTypes;
                if (typeof _childContextTypes === "object") {
                  childContext = inst.getChildContext();
                  for (var contextKey in childContext) {
                    if (!(contextKey in _childContextTypes)) {
                      {
                        throw Error((getComponentName(Component2) || "Unknown") + '.getChildContext(): key "' + contextKey + '" is not defined in childContextTypes.');
                      }
                    }
                  }
                } else {
                  {
                    error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", getComponentName(Component2) || "Unknown");
                  }
                }
              }
              if (childContext) {
                context = _assign({}, context, childContext);
              }
            }
          }
          return {
            child,
            context
          };
        }
        var ReactDOMServerRenderer = /* @__PURE__ */ function() {
          function ReactDOMServerRenderer2(children, makeStaticMarkup, options) {
            var flatChildren = flattenTopLevelChildren(children);
            var topFrame = {
              type: null,
              domNamespace: Namespaces.html,
              children: flatChildren,
              childIndex: 0,
              context: emptyObject,
              footer: ""
            };
            {
              topFrame.debugElementStack = [];
            }
            this.threadID = allocThreadID();
            this.stack = [topFrame];
            this.exhausted = false;
            this.currentSelectValue = null;
            this.previousWasTextNode = false;
            this.makeStaticMarkup = makeStaticMarkup;
            this.suspenseDepth = 0;
            this.contextIndex = -1;
            this.contextStack = [];
            this.contextValueStack = [];
            this.uniqueID = 0;
            this.identifierPrefix = options && options.identifierPrefix || "";
            {
              this.contextProviderStack = [];
            }
          }
          var _proto = ReactDOMServerRenderer2.prototype;
          _proto.destroy = function destroy() {
            if (!this.exhausted) {
              this.exhausted = true;
              this.clearProviders();
              freeThreadID(this.threadID);
            }
          };
          _proto.pushProvider = function pushProvider(provider) {
            var index = ++this.contextIndex;
            var context = provider.type._context;
            var threadID = this.threadID;
            validateContextBounds(context, threadID);
            var previousValue = context[threadID];
            this.contextStack[index] = context;
            this.contextValueStack[index] = previousValue;
            {
              this.contextProviderStack[index] = provider;
            }
            context[threadID] = provider.props.value;
          };
          _proto.popProvider = function popProvider(provider) {
            var index = this.contextIndex;
            {
              if (index < 0 || provider !== this.contextProviderStack[index]) {
                error("Unexpected pop.");
              }
            }
            var context = this.contextStack[index];
            var previousValue = this.contextValueStack[index];
            this.contextStack[index] = null;
            this.contextValueStack[index] = null;
            {
              this.contextProviderStack[index] = null;
            }
            this.contextIndex--;
            context[this.threadID] = previousValue;
          };
          _proto.clearProviders = function clearProviders() {
            for (var index = this.contextIndex; index >= 0; index--) {
              var context = this.contextStack[index];
              var previousValue = this.contextValueStack[index];
              context[this.threadID] = previousValue;
            }
          };
          _proto.read = function read(bytes) {
            if (this.exhausted) {
              return null;
            }
            var prevPartialRenderer = currentPartialRenderer;
            setCurrentPartialRenderer(this);
            var prevDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = Dispatcher;
            try {
              var out = [""];
              var suspended = false;
              while (out[0].length < bytes) {
                if (this.stack.length === 0) {
                  this.exhausted = true;
                  freeThreadID(this.threadID);
                  break;
                }
                var frame = this.stack[this.stack.length - 1];
                if (suspended || frame.childIndex >= frame.children.length) {
                  var footer = frame.footer;
                  if (footer !== "") {
                    this.previousWasTextNode = false;
                  }
                  this.stack.pop();
                  if (frame.type === "select") {
                    this.currentSelectValue = null;
                  } else if (frame.type != null && frame.type.type != null && frame.type.type.$$typeof === REACT_PROVIDER_TYPE) {
                    var provider = frame.type;
                    this.popProvider(provider);
                  } else if (frame.type === REACT_SUSPENSE_TYPE) {
                    this.suspenseDepth--;
                    var buffered = out.pop();
                    if (suspended) {
                      suspended = false;
                      var fallbackFrame = frame.fallbackFrame;
                      if (!fallbackFrame) {
                        {
                          throw Error(true ? "ReactDOMServer did not find an internal fallback frame for Suspense. This is a bug in React. Please file an issue." : formatProdErrorMessage(303));
                        }
                      }
                      this.stack.push(fallbackFrame);
                      out[this.suspenseDepth] += "<!--$!-->";
                      continue;
                    } else {
                      out[this.suspenseDepth] += buffered;
                    }
                  }
                  out[this.suspenseDepth] += footer;
                  continue;
                }
                var child = frame.children[frame.childIndex++];
                var outBuffer = "";
                if (true) {
                  pushCurrentDebugStack(this.stack);
                  frame.debugElementStack.length = 0;
                }
                try {
                  outBuffer += this.render(child, frame.context, frame.domNamespace);
                } catch (err) {
                  if (err != null && typeof err.then === "function") {
                    if (enableSuspenseServerRenderer) {
                      if (!(this.suspenseDepth > 0)) {
                        {
                          throw Error(true ? "A React component suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." : formatProdErrorMessage(342));
                        }
                      }
                      suspended = true;
                    } else {
                      if (true) {
                        {
                          throw Error(true ? "ReactDOMServer does not yet support Suspense." : formatProdErrorMessage(294));
                        }
                      }
                    }
                  } else {
                    throw err;
                  }
                } finally {
                  if (true) {
                    popCurrentDebugStack();
                  }
                }
                if (out.length <= this.suspenseDepth) {
                  out.push("");
                }
                out[this.suspenseDepth] += outBuffer;
              }
              return out[0];
            } finally {
              ReactCurrentDispatcher$1.current = prevDispatcher;
              setCurrentPartialRenderer(prevPartialRenderer);
              resetHooksState();
            }
          };
          _proto.render = function render(child, context, parentNamespace) {
            if (typeof child === "string" || typeof child === "number") {
              var text = "" + child;
              if (text === "") {
                return "";
              }
              if (this.makeStaticMarkup) {
                return escapeTextForBrowser(text);
              }
              if (this.previousWasTextNode) {
                return "<!-- -->" + escapeTextForBrowser(text);
              }
              this.previousWasTextNode = true;
              return escapeTextForBrowser(text);
            } else {
              var nextChild;
              var _resolve = resolve(child, context, this.threadID);
              nextChild = _resolve.child;
              context = _resolve.context;
              if (nextChild === null || nextChild === false) {
                return "";
              } else if (!React2.isValidElement(nextChild)) {
                if (nextChild != null && nextChild.$$typeof != null) {
                  var $$typeof = nextChild.$$typeof;
                  if (!($$typeof !== REACT_PORTAL_TYPE)) {
                    {
                      throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
                    }
                  }
                  {
                    {
                      throw Error("Unknown element-like object type: " + $$typeof.toString() + ". This is likely a bug in React. Please file an issue.");
                    }
                  }
                }
                var nextChildren = toArray(nextChild);
                var frame = {
                  type: null,
                  domNamespace: parentNamespace,
                  children: nextChildren,
                  childIndex: 0,
                  context,
                  footer: ""
                };
                {
                  frame.debugElementStack = [];
                }
                this.stack.push(frame);
                return "";
              }
              var nextElement = nextChild;
              var elementType = nextElement.type;
              if (typeof elementType === "string") {
                return this.renderDOM(nextElement, context, parentNamespace);
              }
              switch (elementType) {
                case REACT_LEGACY_HIDDEN_TYPE:
                case REACT_DEBUG_TRACING_MODE_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_SUSPENSE_LIST_TYPE:
                case REACT_FRAGMENT_TYPE: {
                  var _nextChildren = toArray(nextChild.props.children);
                  var _frame = {
                    type: null,
                    domNamespace: parentNamespace,
                    children: _nextChildren,
                    childIndex: 0,
                    context,
                    footer: ""
                  };
                  {
                    _frame.debugElementStack = [];
                  }
                  this.stack.push(_frame);
                  return "";
                }
                case REACT_SUSPENSE_TYPE: {
                  {
                    {
                      {
                        throw Error("ReactDOMServer does not yet support Suspense.");
                      }
                    }
                  }
                }
                case REACT_SCOPE_TYPE: {
                  {
                    {
                      throw Error("ReactDOMServer does not yet support scope components.");
                    }
                  }
                }
              }
              if (typeof elementType === "object" && elementType !== null) {
                switch (elementType.$$typeof) {
                  case REACT_FORWARD_REF_TYPE: {
                    var element = nextChild;
                    var _nextChildren5;
                    var componentIdentity = {};
                    prepareToUseHooks(componentIdentity);
                    _nextChildren5 = elementType.render(element.props, element.ref);
                    _nextChildren5 = finishHooks(elementType.render, element.props, _nextChildren5, element.ref);
                    _nextChildren5 = toArray(_nextChildren5);
                    var _frame5 = {
                      type: null,
                      domNamespace: parentNamespace,
                      children: _nextChildren5,
                      childIndex: 0,
                      context,
                      footer: ""
                    };
                    {
                      _frame5.debugElementStack = [];
                    }
                    this.stack.push(_frame5);
                    return "";
                  }
                  case REACT_MEMO_TYPE: {
                    var _element = nextChild;
                    var _nextChildren6 = [React2.createElement(elementType.type, _assign({
                      ref: _element.ref
                    }, _element.props))];
                    var _frame6 = {
                      type: null,
                      domNamespace: parentNamespace,
                      children: _nextChildren6,
                      childIndex: 0,
                      context,
                      footer: ""
                    };
                    {
                      _frame6.debugElementStack = [];
                    }
                    this.stack.push(_frame6);
                    return "";
                  }
                  case REACT_PROVIDER_TYPE: {
                    var provider = nextChild;
                    var nextProps = provider.props;
                    var _nextChildren7 = toArray(nextProps.children);
                    var _frame7 = {
                      type: provider,
                      domNamespace: parentNamespace,
                      children: _nextChildren7,
                      childIndex: 0,
                      context,
                      footer: ""
                    };
                    {
                      _frame7.debugElementStack = [];
                    }
                    this.pushProvider(provider);
                    this.stack.push(_frame7);
                    return "";
                  }
                  case REACT_CONTEXT_TYPE: {
                    var reactContext = nextChild.type;
                    {
                      if (reactContext._context === void 0) {
                        if (reactContext !== reactContext.Consumer) {
                          if (!hasWarnedAboutUsingContextAsConsumer) {
                            hasWarnedAboutUsingContextAsConsumer = true;
                            error("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                          }
                        }
                      } else {
                        reactContext = reactContext._context;
                      }
                    }
                    var _nextProps = nextChild.props;
                    var threadID = this.threadID;
                    validateContextBounds(reactContext, threadID);
                    var nextValue = reactContext[threadID];
                    var _nextChildren8 = toArray(_nextProps.children(nextValue));
                    var _frame8 = {
                      type: nextChild,
                      domNamespace: parentNamespace,
                      children: _nextChildren8,
                      childIndex: 0,
                      context,
                      footer: ""
                    };
                    {
                      _frame8.debugElementStack = [];
                    }
                    this.stack.push(_frame8);
                    return "";
                  }
                  case REACT_FUNDAMENTAL_TYPE: {
                    {
                      {
                        throw Error("ReactDOMServer does not yet support the fundamental API.");
                      }
                    }
                  }
                  case REACT_LAZY_TYPE: {
                    var _element2 = nextChild;
                    var lazyComponent = nextChild.type;
                    var payload = lazyComponent._payload;
                    var init = lazyComponent._init;
                    var result = init(payload);
                    var _nextChildren10 = [React2.createElement(result, _assign({
                      ref: _element2.ref
                    }, _element2.props))];
                    var _frame10 = {
                      type: null,
                      domNamespace: parentNamespace,
                      children: _nextChildren10,
                      childIndex: 0,
                      context,
                      footer: ""
                    };
                    {
                      _frame10.debugElementStack = [];
                    }
                    this.stack.push(_frame10);
                    return "";
                  }
                }
              }
              var info = "";
              {
                var owner = nextElement._owner;
                if (elementType === void 0 || typeof elementType === "object" && elementType !== null && Object.keys(elementType).length === 0) {
                  info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
                }
                var ownerName = owner ? getComponentName(owner) : null;
                if (ownerName) {
                  info += "\n\nCheck the render method of `" + ownerName + "`.";
                }
              }
              {
                {
                  throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (elementType == null ? elementType : typeof elementType) + "." + info);
                }
              }
            }
          };
          _proto.renderDOM = function renderDOM(element, context, parentNamespace) {
            var tag = element.type.toLowerCase();
            var namespace = parentNamespace;
            if (parentNamespace === Namespaces.html) {
              namespace = getIntrinsicNamespace(tag);
            }
            {
              if (namespace === Namespaces.html) {
                if (tag !== element.type) {
                  error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", element.type);
                }
              }
            }
            validateDangerousTag(tag);
            var props = element.props;
            if (tag === "input") {
              {
                checkControlledValueProps("input", props);
                if (props.checked !== void 0 && props.defaultChecked !== void 0 && !didWarnDefaultChecked) {
                  error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", props.type);
                  didWarnDefaultChecked = true;
                }
                if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultInputValue) {
                  error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", props.type);
                  didWarnDefaultInputValue = true;
                }
              }
              props = _assign({
                type: void 0
              }, props, {
                defaultChecked: void 0,
                defaultValue: void 0,
                value: props.value != null ? props.value : props.defaultValue,
                checked: props.checked != null ? props.checked : props.defaultChecked
              });
            } else if (tag === "textarea") {
              {
                checkControlledValueProps("textarea", props);
                if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultTextareaValue) {
                  error("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components");
                  didWarnDefaultTextareaValue = true;
                }
              }
              var initialValue = props.value;
              if (initialValue == null) {
                var defaultValue = props.defaultValue;
                var textareaChildren = props.children;
                if (textareaChildren != null) {
                  {
                    error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
                  }
                  if (!(defaultValue == null)) {
                    {
                      throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
                    }
                  }
                  if (Array.isArray(textareaChildren)) {
                    if (!(textareaChildren.length <= 1)) {
                      {
                        throw Error("<textarea> can only have at most one child.");
                      }
                    }
                    textareaChildren = textareaChildren[0];
                  }
                  defaultValue = "" + textareaChildren;
                }
                if (defaultValue == null) {
                  defaultValue = "";
                }
                initialValue = defaultValue;
              }
              props = _assign({}, props, {
                value: void 0,
                children: "" + initialValue
              });
            } else if (tag === "select") {
              {
                checkControlledValueProps("select", props);
                for (var i2 = 0; i2 < valuePropNames.length; i2++) {
                  var propName = valuePropNames[i2];
                  if (props[propName] == null) {
                    continue;
                  }
                  var isArray = Array.isArray(props[propName]);
                  if (props.multiple && !isArray) {
                    error("The `%s` prop supplied to <select> must be an array if `multiple` is true.", propName);
                  } else if (!props.multiple && isArray) {
                    error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", propName);
                  }
                }
                if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultSelectValue) {
                  error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components");
                  didWarnDefaultSelectValue = true;
                }
              }
              this.currentSelectValue = props.value != null ? props.value : props.defaultValue;
              props = _assign({}, props, {
                value: void 0
              });
            } else if (tag === "option") {
              var selected = null;
              var selectValue = this.currentSelectValue;
              var optionChildren = flattenOptionChildren(props.children);
              if (selectValue != null) {
                var value;
                if (props.value != null) {
                  value = props.value + "";
                } else {
                  value = optionChildren;
                }
                selected = false;
                if (Array.isArray(selectValue)) {
                  for (var j = 0; j < selectValue.length; j++) {
                    if ("" + selectValue[j] === value) {
                      selected = true;
                      break;
                    }
                  }
                } else {
                  selected = "" + selectValue === value;
                }
                props = _assign({
                  selected: void 0,
                  children: void 0
                }, props, {
                  selected,
                  children: optionChildren
                });
              }
            }
            {
              validatePropertiesInDevelopment(tag, props);
            }
            assertValidProps(tag, props);
            var out = createOpenTagMarkup(element.type, tag, props, namespace, this.makeStaticMarkup, this.stack.length === 1);
            var footer = "";
            if (omittedCloseTags.hasOwnProperty(tag)) {
              out += "/>";
            } else {
              out += ">";
              footer = "</" + element.type + ">";
            }
            var children;
            var innerMarkup = getNonChildrenInnerMarkup(props);
            if (innerMarkup != null) {
              children = [];
              if (newlineEatingTags.hasOwnProperty(tag) && innerMarkup.charAt(0) === "\n") {
                out += "\n";
              }
              out += innerMarkup;
            } else {
              children = toArray(props.children);
            }
            var frame = {
              domNamespace: getChildNamespace(parentNamespace, element.type),
              type: tag,
              children,
              childIndex: 0,
              context,
              footer
            };
            {
              frame.debugElementStack = [];
            }
            this.stack.push(frame);
            this.previousWasTextNode = false;
            return out;
          };
          return ReactDOMServerRenderer2;
        }();
        function renderToString(element, options) {
          var renderer = new ReactDOMServerRenderer(element, false, options);
          try {
            var markup = renderer.read(Infinity);
            return markup;
          } finally {
            renderer.destroy();
          }
        }
        function renderToStaticMarkup2(element, options) {
          var renderer = new ReactDOMServerRenderer(element, true, options);
          try {
            var markup = renderer.read(Infinity);
            return markup;
          } finally {
            renderer.destroy();
          }
        }
        function renderToNodeStream() {
          {
            {
              throw Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
            }
          }
        }
        function renderToStaticNodeStream() {
          {
            {
              throw Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
            }
          }
        }
        exports.renderToNodeStream = renderToNodeStream;
        exports.renderToStaticMarkup = renderToStaticMarkup2;
        exports.renderToStaticNodeStream = renderToStaticNodeStream;
        exports.renderToString = renderToString;
        exports.version = ReactVersion;
      })();
    }
  }
});

// node_modules/react-dom/server.browser.js
var require_server_browser = __commonJS({
  "node_modules/react-dom/server.browser.js"(exports, module) {
    init_react_shim();
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_dom_server_browser_development();
    }
  }
});

// src/Tile.tsx
init_react_shim();

// node_modules/@thi.ng/lowdisc/halton.js
init_react_shim();

// node_modules/@thi.ng/lowdisc/lowdisc.js
init_react_shim();

// node_modules/@thi.ng/api/assert.js
init_react_shim();

// node_modules/@thi.ng/api/constants.js
init_react_shim();
var SEMAPHORE = Symbol();
var NO_OP = () => {
};

// node_modules/@thi.ng/api/assert.js
var assert = (() => {
  try {
    return true;
  } catch (e) {
  }
  return false;
})() ? (test, msg = "assertion failed") => {
  if (typeof test === "function" && !test() || !test) {
    throw new Error(typeof msg === "function" ? msg() : msg);
  }
} : NO_OP;

// node_modules/@thi.ng/lowdisc/lowdisc.js
var lowDiscrepancy = (dims, offset = 0) => {
  const num = dims.length;
  assert(num > 0, `invalid dimensions`);
  const [x, y, z] = dims;
  const iter = num === 1 ? function* () {
    while (true)
      yield [x.next().value];
  }() : num === 2 ? function* () {
    while (true)
      yield [x.next().value, y.next().value];
  }() : num === 3 ? function* () {
    while (true)
      yield [
        x.next().value,
        y.next().value,
        z.next().value
      ];
  }() : function* () {
    while (true)
      yield dims.map((d) => d.next().value);
  }();
  for (; --offset >= 0; )
    iter.next();
  return iter;
};

// node_modules/@thi.ng/lowdisc/halton.js
function* halton(base) {
  let n = 0;
  let d = 1;
  let invB = 1 / base;
  while (true) {
    let x = d - n;
    if (x === 1) {
      n = 1;
      d *= base;
    } else {
      let y = d * invB | 0;
      while (x <= y) {
        y = y * invB | 0;
      }
      n = (base + 1) * y - x;
    }
    yield n / d;
  }
}
var haltonND = (bases, offset = 0) => lowDiscrepancy(bases.map(halton), offset);

// node_modules/@thi.ng/lowdisc/kronecker.js
init_react_shim();
var fract = (x) => x - Math.floor(x);
function* kronecker(alpha, start = 0) {
  while (true)
    yield start = fract(start + alpha);
}
var kroneckerND = (alphas, offset = 0) => lowDiscrepancy(alphas.map(kronecker), offset);

// node_modules/@thi.ng/lowdisc/plastic.js
init_react_shim();
var phi = (d, i = 18) => {
  assert(d > 0, `d must be > 0`);
  d = 1 / (d + 1);
  let x = 2;
  while (i-- > 0)
    x = (1 + x) ** d;
  return x;
};
var plasticND = (dim, offset = 0) => {
  const g = phi(dim);
  return lowDiscrepancy(new Array(dim).fill(0).map((_, i) => kronecker(1 / Math.pow(g, i + 1), 0.5)), offset);
};

// node_modules/@thi.ng/transducers/iterator.js
init_react_shim();

// node_modules/@thi.ng/checks/implements-function.js
init_react_shim();
var implementsFunction = (x, fn) => x != null && typeof x[fn] === "function";

// node_modules/@thi.ng/checks/is-iterable.js
init_react_shim();
var isIterable = (x) => x != null && typeof x[Symbol.iterator] === "function";

// node_modules/@thi.ng/transducers/internal/ensure.js
init_react_shim();
var ensureTransducer = (x) => implementsFunction(x, "xform") ? x.xform() : x;

// node_modules/@thi.ng/transducers/reduced.js
init_react_shim();
var Reduced = class {
  constructor(val) {
    this.value = val;
  }
  deref() {
    return this.value;
  }
};
var reduced = (x) => new Reduced(x);
var isReduced = (x) => x instanceof Reduced;
var ensureReduced = (x) => x instanceof Reduced ? x : new Reduced(x);
var unreduced = (x) => x instanceof Reduced ? x.deref() : x;

// node_modules/@thi.ng/transducers/rfn/push.js
init_react_shim();

// node_modules/@thi.ng/transducers/reduce.js
init_react_shim();
var reducer = (init, rfn) => [init, (acc) => acc, rfn];

// node_modules/@thi.ng/transducers/rfn/push.js
function push(xs) {
  return xs ? [...xs] : reducer(() => [], (acc, x) => (acc.push(x), acc));
}

// node_modules/@thi.ng/transducers/iterator.js
function* iterator(xform, xs) {
  const rfn = ensureTransducer(xform)(push());
  const complete = rfn[1];
  const reduce = rfn[2];
  for (let x of xs) {
    const y = reduce([], x);
    if (isReduced(y)) {
      yield* unreduced(complete(y.deref()));
      return;
    }
    if (y.length) {
      yield* y;
    }
  }
  yield* unreduced(complete([]));
}

// node_modules/@thi.ng/transducers/func/compr.js
init_react_shim();
var compR = (rfn, fn) => [rfn[0], rfn[1], fn];

// node_modules/@thi.ng/transducers/xform/take.js
init_react_shim();
function take(n, src) {
  return isIterable(src) ? iterator(take(n), src) : (rfn) => {
    const r = rfn[2];
    let m = n;
    return compR(rfn, (acc, x) => --m > 0 ? r(acc, x) : m === 0 ? ensureReduced(r(acc, x)) : reduced(acc));
  };
}

// src/Tile.tsx
var import_box_intersect = __toModule(require_box_intersect());
var import_server = __toModule(require_server_browser());

// src/tile.worker.ts
init_react_shim();

// inline-worker:__inline-worker
init_react_shim();
function inlineWorker(scriptText) {
  let blob = new Blob([scriptText], { type: "text/javascript" });
  let url = URL.createObjectURL(blob);
  let worker2 = new Worker(url);
  URL.revokeObjectURL(url);
  return worker2;
}

// src/tile.worker.ts
function Worker2() {
  return inlineWorker('var e=()=>{postMessage("hello from worker!")};console.log("test");export{e as default};\n');
}

// src/Tile.tsx
var RESOLUTION = 512;
var random = Math.random;
var ITERATIONS = 256;
var worker = Worker2();
worker.onmessage = ({ data }) => console.log(data);
async function makeDataURL(props) {
  const { text, background, colors, font } = props;
  const url = font ?? "https://thatsmyblankie.wpengine.com/wp-content/themes/picostrap-child/fonts/customiser/UnicornsareAwesome.woff2";
  const fontFamily = "blankie";
  const fontFace = new FontFace(fontFamily, `url("${url}")`);
  await fontFace.load();
  document.fonts.add(fontFace);
  const fontSize = fit({
    fontFamily,
    text
  });
  const metrics = measure({ font: `${fontSize}px ${fontFamily}`, text });
  const tile = new Tile({
    font: fontFamily,
    text,
    metrics,
    fontSize,
    background,
    colors
  });
  const canvas = tile.toCanvas();
  return canvas.toDataURL();
}
var Tile = class {
  constructor(props) {
    if (props.texts) {
      Object.assign(this, props);
      return;
    }
    const _a = props, {
      colors,
      distribution = "plastic",
      gap = 0.1,
      font: fontFamily,
      metrics,
      fontSize
    } = _a, rest = __objRest(_a, [
      "colors",
      "distribution",
      "gap",
      "font",
      "metrics",
      "fontSize"
    ]);
    const generator = {
      halton: haltonND.bind(null, [2, 3]),
      kronecker: kroneckerND.bind(null, [1 / 2 ** 0.5, 1 / 5 ** 0.5]),
      plastic: plasticND.bind(null, 2)
    }[distribution](0);
    let texts = Array.from(take(32, generator)).map(([x, y]) => {
      return {
        x: x * 2 - 1,
        y: y * 2 - 1,
        size: 0.75 + random() * 0.75,
        color: colors[colors.length * random() | 0]
      };
    });
    const getMetrics = (scale) => {
      return {
        left: metrics.actualBoundingBoxLeft * scale,
        right: metrics.actualBoundingBoxRight * scale,
        ascent: metrics.actualBoundingBoxAscent * scale,
        descent: metrics.actualBoundingBoxDescent * scale
      };
    };
    const tick = () => {
      const boxes = [];
      texts.forEach((text) => {
        delete text.op;
        const metrics2 = getMetrics(text.size);
        instances(text, (instance) => {
          const x = (instance.x + 1) / 2 * RESOLUTION;
          const y = (-instance.y + 1) / 2 * RESOLUTION;
          const xMin = x - metrics2.left;
          const yMin = y - metrics2.ascent;
          const box = [
            xMin,
            yMin,
            xMin + metrics2.left + metrics2.right,
            yMin + metrics2.ascent + metrics2.descent
          ];
          box.text = text;
          boxes.push(box);
        });
      });
      (0, import_box_intersect.default)(boxes, (i, j) => {
        [i, j].forEach((index) => boxes[index].text.op = "shrink");
      });
      const delta = 1e-3 * 5;
      texts.forEach((t) => {
        t.size *= t.op === "shrink" ? 1 - delta : 1 + delta;
      });
    };
    for (let index = 0; index < ITERATIONS; index++) {
      tick();
    }
    Object.assign(this, __spreadProps(__spreadValues({}, rest), {
      texts,
      fontSize,
      fontFamily,
      gap,
      metrics
    }));
  }
  toCanvas() {
    const canvas = document.createElement("canvas");
    canvas.width = RESOLUTION;
    canvas.height = RESOLUTION;
    const ctx = canvas.getContext("2d");
    ctx.textAlign = "center";
    ctx.textBaseline = "alphabetic";
    const blit = (props) => {
      ctx.font = `${this.fontSize * props.size * (1 - this.gap)}px ${this.fontFamily}`;
      ctx.fillStyle = props.color;
      instances(props, (instance) => {
        const x = (instance.x + 1) / 2 * RESOLUTION;
        const y = (-instance.y + 1) / 2 * RESOLUTION;
        ctx.fillText(this.text, x, y);
      });
    };
    const draw = () => {
      ctx.fillStyle = this.background;
      ctx.fillRect(0, 0, RESOLUTION, RESOLUTION);
      this.texts.forEach(blit);
    };
    draw();
    return canvas;
  }
  toDataURL() {
    return this.toCanvas().toDataURL();
  }
  toSVG() {
    return (0, import_server.renderToStaticMarkup)(/* @__PURE__ */ React.createElement("svg", {
      style: { width: 512, height: 512, background: this.background },
      xmlns: "http://www.w3.org/2000/svg"
    }, this.texts.flatMap((text) => {
      const texts = [];
      const fontSize = `${this.fontSize * text.size * (1 - this.gap)}px`;
      instances(text, (instance) => {
        const x = (instance.x + 1) / 2 * RESOLUTION;
        const y = (-instance.y + 1) / 2 * RESOLUTION;
        texts.push(/* @__PURE__ */ React.createElement("text", {
          x,
          y,
          style: {
            fontSize,
            fontFamily: this.fontFamily
          },
          textAnchor: "middle",
          fill: text.color
        }, this.text));
      });
      return texts;
    })));
  }
};
function instances(_a, fn) {
  var _b = _a, { x, y } = _b, rest = __objRest(_b, ["x", "y"]);
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      fn(__spreadProps(__spreadValues({}, rest), { x: i * 2 + x, y: j * 2 + y }));
    }
  }
}
function fit({
  fontFamily,
  text
}) {
  const { width } = measure({
    font: `${RESOLUTION / 8}px ${fontFamily}`,
    text
  });
  return RESOLUTION / 8 * (RESOLUTION / 3 / width);
}
function measure({ font, text }) {
  const canvas = document.createElement("canvas");
  canvas.width = RESOLUTION;
  canvas.height = RESOLUTION;
  const ctx = canvas.getContext("2d");
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";
  ctx.font = font;
  return ctx.measureText(text);
}
async function makeSVG(props) {
  const { text, background, colors, font } = props;
  const url = font ?? "https://thatsmyblankie.wpengine.com/wp-content/themes/picostrap-child/fonts/customiser/UnicornsareAwesome.woff2";
  const fontFamily = "blankie";
  const fontFace = new FontFace(fontFamily, `url("${url}")`);
  await fontFace.load();
  document.fonts.add(fontFace);
  const fontSize = fit({
    fontFamily,
    text
  });
  const metrics = measure({ font: `${fontSize}px ${fontFamily}`, text });
  const tile = new Tile({
    font: fontFamily,
    text,
    metrics,
    fontSize,
    background,
    colors
  });
  return tile.toSVG();
}
export {
  Tile,
  fit,
  instances,
  makeDataURL,
  makeSVG,
  measure
};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
/** @license React v17.0.2
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
