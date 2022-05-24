(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-refresh"],{

/***/ "./node_modules/@next/react-refresh-utils/internal/helpers.js":
/*!********************************************************************!*\
  !*** ./node_modules/@next/react-refresh-utils/internal/helpers.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * MIT License
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
// This file is copied from the Metro JavaScript bundler, with minor tweaks for
// webpack 4 compatibility.
//
// https://github.com/facebook/metro/blob/d6b9685c730d0d63577db40f41369157f28dfa3a/packages/metro/src/lib/polyfills/require.js
const runtime_1 = __importDefault(__webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js"));
function isSafeExport(key) {
    return (key === '__esModule' ||
        key === '__N_SSG' ||
        key === '__N_SSP' ||
        // TODO: remove this key from page config instead of allow listing it
        key === 'config');
}
function registerExportsForReactRefresh(moduleExports, moduleID) {
    runtime_1.default.register(moduleExports, moduleID + ' %exports%');
    if (moduleExports == null || typeof moduleExports !== 'object') {
        // Exit if we can't iterate over exports.
        // (This is important for legacy environments.)
        return;
    }
    for (var key in moduleExports) {
        if (isSafeExport(key)) {
            continue;
        }
        var exportValue = moduleExports[key];
        var typeID = moduleID + ' %exports% ' + key;
        runtime_1.default.register(exportValue, typeID);
    }
}
function isReactRefreshBoundary(moduleExports) {
    if (runtime_1.default.isLikelyComponentType(moduleExports)) {
        return true;
    }
    if (moduleExports == null || typeof moduleExports !== 'object') {
        // Exit if we can't iterate over exports.
        return false;
    }
    var hasExports = false;
    var areAllExportsComponents = true;
    for (var key in moduleExports) {
        hasExports = true;
        if (isSafeExport(key)) {
            continue;
        }
        var exportValue = moduleExports[key];
        if (!runtime_1.default.isLikelyComponentType(exportValue)) {
            areAllExportsComponents = false;
        }
    }
    return hasExports && areAllExportsComponents;
}
function shouldInvalidateReactRefreshBoundary(prevExports, nextExports) {
    var prevSignature = getRefreshBoundarySignature(prevExports);
    var nextSignature = getRefreshBoundarySignature(nextExports);
    if (prevSignature.length !== nextSignature.length) {
        return true;
    }
    for (var i = 0; i < nextSignature.length; i++) {
        if (prevSignature[i] !== nextSignature[i]) {
            return true;
        }
    }
    return false;
}
function getRefreshBoundarySignature(moduleExports) {
    var signature = [];
    signature.push(runtime_1.default.getFamilyByType(moduleExports));
    if (moduleExports == null || typeof moduleExports !== 'object') {
        // Exit if we can't iterate over exports.
        // (This is important for legacy environments.)
        return signature;
    }
    for (var key in moduleExports) {
        if (isSafeExport(key)) {
            continue;
        }
        var exportValue = moduleExports[key];
        signature.push(key);
        signature.push(runtime_1.default.getFamilyByType(exportValue));
    }
    return signature;
}
var isUpdateScheduled = false;
function scheduleUpdate() {
    if (isUpdateScheduled) {
        return;
    }
    function canApplyUpdate() {
        return module.hot.status() === 'idle';
    }
    isUpdateScheduled = true;
    setTimeout(function () {
        isUpdateScheduled = false;
        // Only trigger refresh if the webpack HMR state is idle
        if (canApplyUpdate()) {
            try {
                runtime_1.default.performReactRefresh();
            }
            catch (err) {
                console.warn('Warning: Failed to re-render. We will retry on the next Fast Refresh event.\n' +
                    err);
            }
            return;
        }
        return scheduleUpdate();
    }, 30);
}
// Needs to be compatible with IE11
exports.default = {
    registerExportsForReactRefresh: registerExportsForReactRefresh,
    isReactRefreshBoundary: isReactRefreshBoundary,
    shouldInvalidateReactRefreshBoundary: shouldInvalidateReactRefreshBoundary,
    getRefreshBoundarySignature: getRefreshBoundarySignature,
    scheduleUpdate: scheduleUpdate,
};
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "./node_modules/@next/react-refresh-utils/runtime.js":
/*!***********************************************************!*\
  !*** ./node_modules/@next/react-refresh-utils/runtime.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const runtime_1 = __importDefault(__webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js"));
const helpers_1 = __importDefault(__webpack_require__(/*! ./internal/helpers */ "./node_modules/@next/react-refresh-utils/internal/helpers.js"));
// Hook into ReactDOM initialization
runtime_1.default.injectIntoGlobalHook(self);
// Register global helpers
self.$RefreshHelpers$ = helpers_1.default;
// Register a helper for module execution interception
self.$RefreshInterceptModuleExecution$ = function (webpackModuleId) {
    var prevRefreshReg = self.$RefreshReg$;
    var prevRefreshSig = self.$RefreshSig$;
    self.$RefreshReg$ = function (type, id) {
        runtime_1.default.register(type, webpackModuleId + ' ' + id);
    };
    self.$RefreshSig$ = runtime_1.default.createSignatureFunctionForTransform;
    // Modeled after `useEffect` cleanup pattern:
    // https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
    return function () {
        self.$RefreshReg$ = prevRefreshReg;
        self.$RefreshSig$ = prevRefreshSig;
    };
};
//# sourceMappingURL=runtime.js.map

/***/ }),

/***/ "./node_modules/react-refresh/cjs/react-refresh-runtime.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-refresh/cjs/react-refresh-runtime.development.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React vundefined
 * react-refresh-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;
var REACT_CACHE_TYPE = 0xeae4;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
  REACT_CACHE_TYPE = symbolFor('react.cache');
}

var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map; // We never remove these associations.
// It's OK to reference families, but use WeakMap/Set for types.

var allFamiliesByID = new Map();
var allFamiliesByType = new PossiblyWeakMap();
var allSignaturesByType = new PossiblyWeakMap(); // This WeakMap is read by React, so we only put families
// that have actually been edited here. This keeps checks fast.
// $FlowIssue

var updatedFamiliesByType = new PossiblyWeakMap(); // This is cleared on every performReactRefresh() call.
// It is an array of [Family, NextType] tuples.

var pendingUpdates = []; // This is injected by the renderer via DevTools global hook.

var helpersByRendererID = new Map();
var helpersByRoot = new Map(); // We keep track of mounted roots so we can schedule updates.

var mountedRoots = new Set(); // If a root captures an error, we remember it so we can retry on edit.

var failedRoots = new Set(); // In environments that support WeakMap, we also remember the last element for every root.
// It needs to be weak because we do this even for roots that failed to mount.
// If there is no WeakMap, we won't attempt to do retrying.
// $FlowIssue

var rootElements = // $FlowIssue
typeof WeakMap === 'function' ? new WeakMap() : null;
var isPerformingRefresh = false;

function computeFullKey(signature) {
  if (signature.fullKey !== null) {
    return signature.fullKey;
  }

  var fullKey = signature.ownKey;
  var hooks;

  try {
    hooks = signature.getCustomHooks();
  } catch (err) {
    // This can happen in an edge case, e.g. if expression like Foo.useSomething
    // depends on Foo which is lazily initialized during rendering.
    // In that case just assume we'll have to remount.
    signature.forceReset = true;
    signature.fullKey = fullKey;
    return fullKey;
  }

  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];

    if (typeof hook !== 'function') {
      // Something's wrong. Assume we need to remount.
      signature.forceReset = true;
      signature.fullKey = fullKey;
      return fullKey;
    }

    var nestedHookSignature = allSignaturesByType.get(hook);

    if (nestedHookSignature === undefined) {
      // No signature means Hook wasn't in the source code, e.g. in a library.
      // We'll skip it because we can assume it won't change during this session.
      continue;
    }

    var nestedHookKey = computeFullKey(nestedHookSignature);

    if (nestedHookSignature.forceReset) {
      signature.forceReset = true;
    }

    fullKey += '\n---\n' + nestedHookKey;
  }

  signature.fullKey = fullKey;
  return fullKey;
}

function haveEqualSignatures(prevType, nextType) {
  var prevSignature = allSignaturesByType.get(prevType);
  var nextSignature = allSignaturesByType.get(nextType);

  if (prevSignature === undefined && nextSignature === undefined) {
    return true;
  }

  if (prevSignature === undefined || nextSignature === undefined) {
    return false;
  }

  if (computeFullKey(prevSignature) !== computeFullKey(nextSignature)) {
    return false;
  }

  if (nextSignature.forceReset) {
    return false;
  }

  return true;
}

function isReactClass(type) {
  return type.prototype && type.prototype.isReactComponent;
}

function canPreserveStateBetween(prevType, nextType) {
  if (isReactClass(prevType) || isReactClass(nextType)) {
    return false;
  }

  if (haveEqualSignatures(prevType, nextType)) {
    return true;
  }

  return false;
}

function resolveFamily(type) {
  // Only check updated types to keep lookups fast.
  return updatedFamiliesByType.get(type);
} // If we didn't care about IE11, we could use new Map/Set(iterable).


function cloneMap(map) {
  var clone = new Map();
  map.forEach(function (value, key) {
    clone.set(key, value);
  });
  return clone;
}

function cloneSet(set) {
  var clone = new Set();
  set.forEach(function (value) {
    clone.add(value);
  });
  return clone;
} // This is a safety mechanism to protect against rogue getters and Proxies.


function getProperty(object, property) {
  try {
    return object[property];
  } catch (err) {
    // Intentionally ignore.
    return undefined;
  }
}

function performReactRefresh() {

  if (pendingUpdates.length === 0) {
    return null;
  }

  if (isPerformingRefresh) {
    return null;
  }

  isPerformingRefresh = true;

  try {
    var staleFamilies = new Set();
    var updatedFamilies = new Set();
    var updates = pendingUpdates;
    pendingUpdates = [];
    updates.forEach(function (_ref) {
      var family = _ref[0],
          nextType = _ref[1];
      // Now that we got a real edit, we can create associations
      // that will be read by the React reconciler.
      var prevType = family.current;
      updatedFamiliesByType.set(prevType, family);
      updatedFamiliesByType.set(nextType, family);
      family.current = nextType; // Determine whether this should be a re-render or a re-mount.

      if (canPreserveStateBetween(prevType, nextType)) {
        updatedFamilies.add(family);
      } else {
        staleFamilies.add(family);
      }
    }); // TODO: rename these fields to something more meaningful.

    var update = {
      updatedFamilies: updatedFamilies,
      // Families that will re-render preserving state
      staleFamilies: staleFamilies // Families that will be remounted

    };
    helpersByRendererID.forEach(function (helpers) {
      // Even if there are no roots, set the handler on first update.
      // This ensures that if *new* roots are mounted, they'll use the resolve handler.
      helpers.setRefreshHandler(resolveFamily);
    });
    var didError = false;
    var firstError = null; // We snapshot maps and sets that are mutated during commits.
    // If we don't do this, there is a risk they will be mutated while
    // we iterate over them. For example, trying to recover a failed root
    // may cause another root to be added to the failed list -- an infinite loop.

    var failedRootsSnapshot = cloneSet(failedRoots);
    var mountedRootsSnapshot = cloneSet(mountedRoots);
    var helpersByRootSnapshot = cloneMap(helpersByRoot);
    failedRootsSnapshot.forEach(function (root) {
      var helpers = helpersByRootSnapshot.get(root);

      if (helpers === undefined) {
        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
      }

      if (!failedRoots.has(root)) {// No longer failed.
      }

      if (rootElements === null) {
        return;
      }

      if (!rootElements.has(root)) {
        return;
      }

      var element = rootElements.get(root);

      try {
        helpers.scheduleRoot(root, element);
      } catch (err) {
        if (!didError) {
          didError = true;
          firstError = err;
        } // Keep trying other roots.

      }
    });
    mountedRootsSnapshot.forEach(function (root) {
      var helpers = helpersByRootSnapshot.get(root);

      if (helpers === undefined) {
        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
      }

      if (!mountedRoots.has(root)) {// No longer mounted.
      }

      try {
        helpers.scheduleRefresh(root, update);
      } catch (err) {
        if (!didError) {
          didError = true;
          firstError = err;
        } // Keep trying other roots.

      }
    });

    if (didError) {
      throw firstError;
    }

    return update;
  } finally {
    isPerformingRefresh = false;
  }
}
function register(type, id) {
  {
    if (type === null) {
      return;
    }

    if (typeof type !== 'function' && typeof type !== 'object') {
      return;
    } // This can happen in an edge case, e.g. if we register
    // return value of a HOC but it returns a cached component.
    // Ignore anything but the first registration for each type.


    if (allFamiliesByType.has(type)) {
      return;
    } // Create family or remember to update it.
    // None of this bookkeeping affects reconciliation
    // until the first performReactRefresh() call above.


    var family = allFamiliesByID.get(id);

    if (family === undefined) {
      family = {
        current: type
      };
      allFamiliesByID.set(id, family);
    } else {
      pendingUpdates.push([family, type]);
    }

    allFamiliesByType.set(type, family); // Visit inner types because we might not have registered them.

    if (typeof type === 'object' && type !== null) {
      switch (getProperty(type, '$$typeof')) {
        case REACT_FORWARD_REF_TYPE:
          register(type.render, id + '$render');
          break;

        case REACT_MEMO_TYPE:
          register(type.type, id + '$type');
          break;
      }
    }
  }
}
function setSignature(type, key) {
  var forceReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var getCustomHooks = arguments.length > 3 ? arguments[3] : undefined;

  {
    if (!allSignaturesByType.has(type)) {
      allSignaturesByType.set(type, {
        forceReset: forceReset,
        ownKey: key,
        fullKey: null,
        getCustomHooks: getCustomHooks || function () {
          return [];
        }
      });
    } // Visit inner types because we might not have signed them.


    if (typeof type === 'object' && type !== null) {
      switch (getProperty(type, '$$typeof')) {
        case REACT_FORWARD_REF_TYPE:
          setSignature(type.render, key, forceReset, getCustomHooks);
          break;

        case REACT_MEMO_TYPE:
          setSignature(type.type, key, forceReset, getCustomHooks);
          break;
      }
    }
  }
} // This is lazily called during first render for a type.
// It captures Hook list at that time so inline requires don't break comparisons.

function collectCustomHooksForSignature(type) {
  {
    var signature = allSignaturesByType.get(type);

    if (signature !== undefined) {
      computeFullKey(signature);
    }
  }
}
function getFamilyByID(id) {
  {
    return allFamiliesByID.get(id);
  }
}
function getFamilyByType(type) {
  {
    return allFamiliesByType.get(type);
  }
}
function findAffectedHostInstances(families) {
  {
    var affectedInstances = new Set();
    mountedRoots.forEach(function (root) {
      var helpers = helpersByRoot.get(root);

      if (helpers === undefined) {
        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
      }

      var instancesForRoot = helpers.findHostInstancesForRefresh(root, families);
      instancesForRoot.forEach(function (inst) {
        affectedInstances.add(inst);
      });
    });
    return affectedInstances;
  }
}
function injectIntoGlobalHook(globalObject) {
  {
    // For React Native, the global hook will be set up by require('react-devtools-core').
    // That code will run before us. So we need to monkeypatch functions on existing hook.
    // For React Web, the global hook will be set up by the extension.
    // This will also run before us.
    var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;

    if (hook === undefined) {
      // However, if there is no DevTools extension, we'll need to set up the global hook ourselves.
      // Note that in this case it's important that renderer code runs *after* this method call.
      // Otherwise, the renderer will think that there is no global hook, and won't do the injection.
      var nextID = 0;
      globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {
        renderers: new Map(),
        supportsFiber: true,
        inject: function (injected) {
          return nextID++;
        },
        onScheduleFiberRoot: function (id, root, children) {},
        onCommitFiberRoot: function (id, root, maybePriorityLevel, didError) {},
        onCommitFiberUnmount: function () {}
      };
    }

    if (hook.isDisabled) {
      // This isn't a real property on the hook, but it can be set to opt out
      // of DevTools integration and associated warnings and logs.
      // Using console['warn'] to evade Babel and ESLint
      console['warn']('Something has shimmed the React DevTools global hook (__REACT_DEVTOOLS_GLOBAL_HOOK__). ' + 'Fast Refresh is not compatible with this shim and will be disabled.');
      return;
    } // Here, we just want to get a reference to scheduleRefresh.


    var oldInject = hook.inject;

    hook.inject = function (injected) {
      var id = oldInject.apply(this, arguments);

      if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') {
        // This version supports React Refresh.
        helpersByRendererID.set(id, injected);
      }

      return id;
    }; // Do the same for any already injected roots.
    // This is useful if ReactDOM has already been initialized.
    // https://github.com/facebook/react/issues/17626


    hook.renderers.forEach(function (injected, id) {
      if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') {
        // This version supports React Refresh.
        helpersByRendererID.set(id, injected);
      }
    }); // We also want to track currently mounted roots.

    var oldOnCommitFiberRoot = hook.onCommitFiberRoot;

    var oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || function () {};

    hook.onScheduleFiberRoot = function (id, root, children) {
      if (!isPerformingRefresh) {
        // If it was intentionally scheduled, don't attempt to restore.
        // This includes intentionally scheduled unmounts.
        failedRoots.delete(root);

        if (rootElements !== null) {
          rootElements.set(root, children);
        }
      }

      return oldOnScheduleFiberRoot.apply(this, arguments);
    };

    hook.onCommitFiberRoot = function (id, root, maybePriorityLevel, didError) {
      var helpers = helpersByRendererID.get(id);

      if (helpers !== undefined) {
        helpersByRoot.set(root, helpers);
        var current = root.current;
        var alternate = current.alternate; // We need to determine whether this root has just (un)mounted.
        // This logic is copy-pasted from similar logic in the DevTools backend.
        // If this breaks with some refactoring, you'll want to update DevTools too.

        if (alternate !== null) {
          var wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null;
          var isMounted = current.memoizedState != null && current.memoizedState.element != null;

          if (!wasMounted && isMounted) {
            // Mount a new root.
            mountedRoots.add(root);
            failedRoots.delete(root);
          } else if (wasMounted && isMounted) ; else if (wasMounted && !isMounted) {
            // Unmount an existing root.
            mountedRoots.delete(root);

            if (didError) {
              // We'll remount it on future edits.
              failedRoots.add(root);
            } else {
              helpersByRoot.delete(root);
            }
          } else if (!wasMounted && !isMounted) {
            if (didError) {
              // We'll remount it on future edits.
              failedRoots.add(root);
            }
          }
        } else {
          // Mount a new root.
          mountedRoots.add(root);
        }
      } // Always call the decorated DevTools hook.


      return oldOnCommitFiberRoot.apply(this, arguments);
    };
  }
}
function hasUnrecoverableErrors() {
  // TODO: delete this after removing dependency in RN.
  return false;
} // Exposed for testing.

function _getMountedRootCount() {
  {
    return mountedRoots.size;
  }
} // This is a wrapper over more primitive functions for setting signature.
// Signatures let us decide whether the Hook order has changed on refresh.
//
// This function is intended to be used as a transform target, e.g.:
// var _s = createSignatureFunctionForTransform()
//
// function Hello() {
//   const [foo, setFoo] = useState(0);
//   const value = useCustomHook();
//   _s(); /* Call without arguments triggers collecting the custom Hook list.
//          * This doesn't happen during the module evaluation because we
//          * don't want to change the module order with inline requires.
//          * Next calls are noops. */
//   return <h1>Hi</h1>;
// }
//
// /* Call with arguments attaches the signature to the type: */
// _s(
//   Hello,
//   'useState{[foo, setFoo]}(0)',
//   () => [useCustomHook], /* Lazy to avoid triggering inline requires */
// );

function createSignatureFunctionForTransform() {
  {
    var savedType;
    var hasCustomHooks;
    var didCollectHooks = false;
    return function (type, key, forceReset, getCustomHooks) {
      if (typeof key === 'string') {
        // We're in the initial phase that associates signatures
        // with the functions. Note this may be called multiple times
        // in HOC chains like _s(hoc1(_s(hoc2(_s(actualFunction))))).
        if (!savedType) {
          // We're in the innermost call, so this is the actual type.
          savedType = type;
          hasCustomHooks = typeof getCustomHooks === 'function';
        } // Set the signature for all types (even wrappers!) in case
        // they have no signatures of their own. This is to prevent
        // problems like https://github.com/facebook/react/issues/20417.


        if (type != null && (typeof type === 'function' || typeof type === 'object')) {
          setSignature(type, key, forceReset, getCustomHooks);
        }

        return type;
      } else {
        // We're in the _s() call without arguments, which means
        // this is the time to collect custom Hook signatures.
        // Only do this once. This path is hot and runs *inside* every render!
        if (!didCollectHooks && hasCustomHooks) {
          didCollectHooks = true;
          collectCustomHooksForSignature(savedType);
        }
      }
    };
  }
}
function isLikelyComponentType(type) {
  {
    switch (typeof type) {
      case 'function':
        {
          // First, deal with classes.
          if (type.prototype != null) {
            if (type.prototype.isReactComponent) {
              // React class.
              return true;
            }

            var ownNames = Object.getOwnPropertyNames(type.prototype);

            if (ownNames.length > 1 || ownNames[0] !== 'constructor') {
              // This looks like a class.
              return false;
            } // eslint-disable-next-line no-proto


            if (type.prototype.__proto__ !== Object.prototype) {
              // It has a superclass.
              return false;
            } // Pass through.
            // This looks like a regular function with empty prototype.

          } // For plain functions and arrows, use name as a heuristic.


          var name = type.name || type.displayName;
          return typeof name === 'string' && /^[A-Z]/.test(name);
        }

      case 'object':
        {
          if (type != null) {
            switch (getProperty(type, '$$typeof')) {
              case REACT_FORWARD_REF_TYPE:
              case REACT_MEMO_TYPE:
                // Definitely React components.
                return true;

              default:
                return false;
            }
          }

          return false;
        }

      default:
        {
          return false;
        }
    }
  }
}

exports._getMountedRootCount = _getMountedRootCount;
exports.collectCustomHooksForSignature = collectCustomHooksForSignature;
exports.createSignatureFunctionForTransform = createSignatureFunctionForTransform;
exports.findAffectedHostInstances = findAffectedHostInstances;
exports.getFamilyByID = getFamilyByID;
exports.getFamilyByType = getFamilyByType;
exports.hasUnrecoverableErrors = hasUnrecoverableErrors;
exports.injectIntoGlobalHook = injectIntoGlobalHook;
exports.isLikelyComponentType = isLikelyComponentType;
exports.performReactRefresh = performReactRefresh;
exports.register = register;
exports.setSignature = setSignature;
  })();
}


/***/ }),

/***/ "./node_modules/react-refresh/runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react-refresh/runtime.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-refresh-runtime.development.js */ "./node_modules/react-refresh/cjs/react-refresh-runtime.development.js");
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./node_modules/@next/react-refresh-utils/runtime.js"));
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FL19OX0UvLi9ub2RlX21vZHVsZXMvQG5leHQvcmVhY3QtcmVmcmVzaC11dGlscy9pbnRlcm5hbC9oZWxwZXJzLmpzIiwid2VicGFjazovL19OX0UvX05fRS8uL25vZGVfbW9kdWxlcy9AbmV4dC9yZWFjdC1yZWZyZXNoLXV0aWxzL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsc0VBQXVCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwQkFBMEI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxVQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUM7Ozs7Ozs7Ozs7O0FDOUlhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0Qsa0NBQWtDLG1CQUFPLENBQUMsc0VBQXVCO0FBQ2pFLGtDQUFrQyxtQkFBTyxDQUFDLHdGQUFvQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DOzs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViLElBQUksSUFBcUM7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9FQUFvRTtBQUNwRTs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7O0FBRUEsa0RBQWtEO0FBQ2xEOztBQUVBLHdCQUF3Qjs7QUFFeEI7QUFDQSw4QkFBOEI7O0FBRTlCLDZCQUE2Qjs7QUFFN0IsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixrQkFBa0I7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDOztBQUVoQztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9DQUFvQztBQUNwQzs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsd0NBQXdDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw2REFBNkQ7QUFDN0QsK0VBQStFO0FBQy9FO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxvQ0FBb0M7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsY0FBYztBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7OztBQUdiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQSxXQUFXOzs7QUFHWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0QjtBQUM1QixzQ0FBc0M7QUFDdEMsMkNBQTJDO0FBQzNDLGlDQUFpQztBQUNqQyxxQkFBcUI7QUFDckIsdUJBQXVCO0FBQ3ZCLDhCQUE4QjtBQUM5Qiw0QkFBNEI7QUFDNUIsNkJBQTZCO0FBQzdCLDJCQUEyQjtBQUMzQixnQkFBZ0I7QUFDaEIsb0JBQW9CO0FBQ3BCLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDeHJCYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRCxFQUFFLCtKQUFzRTtBQUN4RSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXJlZnJlc2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogTUlUIExpY2Vuc2VcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqIFNPRlRXQVJFLlxuICovXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyBUaGlzIGZpbGUgaXMgY29waWVkIGZyb20gdGhlIE1ldHJvIEphdmFTY3JpcHQgYnVuZGxlciwgd2l0aCBtaW5vciB0d2Vha3MgZm9yXG4vLyB3ZWJwYWNrIDQgY29tcGF0aWJpbGl0eS5cbi8vXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svbWV0cm8vYmxvYi9kNmI5Njg1YzczMGQwZDYzNTc3ZGI0MGY0MTM2OTE1N2YyOGRmYTNhL3BhY2thZ2VzL21ldHJvL3NyYy9saWIvcG9seWZpbGxzL3JlcXVpcmUuanNcbmNvbnN0IHJ1bnRpbWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTtcbmZ1bmN0aW9uIGlzU2FmZUV4cG9ydChrZXkpIHtcbiAgICByZXR1cm4gKGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8XG4gICAgICAgIGtleSA9PT0gJ19fTl9TU0cnIHx8XG4gICAgICAgIGtleSA9PT0gJ19fTl9TU1AnIHx8XG4gICAgICAgIC8vIFRPRE86IHJlbW92ZSB0aGlzIGtleSBmcm9tIHBhZ2UgY29uZmlnIGluc3RlYWQgb2YgYWxsb3cgbGlzdGluZyBpdFxuICAgICAgICBrZXkgPT09ICdjb25maWcnKTtcbn1cbmZ1bmN0aW9uIHJlZ2lzdGVyRXhwb3J0c0ZvclJlYWN0UmVmcmVzaChtb2R1bGVFeHBvcnRzLCBtb2R1bGVJRCkge1xuICAgIHJ1bnRpbWVfMS5kZWZhdWx0LnJlZ2lzdGVyKG1vZHVsZUV4cG9ydHMsIG1vZHVsZUlEICsgJyAlZXhwb3J0cyUnKTtcbiAgICBpZiAobW9kdWxlRXhwb3J0cyA9PSBudWxsIHx8IHR5cGVvZiBtb2R1bGVFeHBvcnRzICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAvLyBFeGl0IGlmIHdlIGNhbid0IGl0ZXJhdGUgb3ZlciBleHBvcnRzLlxuICAgICAgICAvLyAoVGhpcyBpcyBpbXBvcnRhbnQgZm9yIGxlZ2FjeSBlbnZpcm9ubWVudHMuKVxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAodmFyIGtleSBpbiBtb2R1bGVFeHBvcnRzKSB7XG4gICAgICAgIGlmIChpc1NhZmVFeHBvcnQoa2V5KSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGV4cG9ydFZhbHVlID0gbW9kdWxlRXhwb3J0c1trZXldO1xuICAgICAgICB2YXIgdHlwZUlEID0gbW9kdWxlSUQgKyAnICVleHBvcnRzJSAnICsga2V5O1xuICAgICAgICBydW50aW1lXzEuZGVmYXVsdC5yZWdpc3RlcihleHBvcnRWYWx1ZSwgdHlwZUlEKTtcbiAgICB9XG59XG5mdW5jdGlvbiBpc1JlYWN0UmVmcmVzaEJvdW5kYXJ5KG1vZHVsZUV4cG9ydHMpIHtcbiAgICBpZiAocnVudGltZV8xLmRlZmF1bHQuaXNMaWtlbHlDb21wb25lbnRUeXBlKG1vZHVsZUV4cG9ydHMpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAobW9kdWxlRXhwb3J0cyA9PSBudWxsIHx8IHR5cGVvZiBtb2R1bGVFeHBvcnRzICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAvLyBFeGl0IGlmIHdlIGNhbid0IGl0ZXJhdGUgb3ZlciBleHBvcnRzLlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBoYXNFeHBvcnRzID0gZmFsc2U7XG4gICAgdmFyIGFyZUFsbEV4cG9ydHNDb21wb25lbnRzID0gdHJ1ZTtcbiAgICBmb3IgKHZhciBrZXkgaW4gbW9kdWxlRXhwb3J0cykge1xuICAgICAgICBoYXNFeHBvcnRzID0gdHJ1ZTtcbiAgICAgICAgaWYgKGlzU2FmZUV4cG9ydChrZXkpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXhwb3J0VmFsdWUgPSBtb2R1bGVFeHBvcnRzW2tleV07XG4gICAgICAgIGlmICghcnVudGltZV8xLmRlZmF1bHQuaXNMaWtlbHlDb21wb25lbnRUeXBlKGV4cG9ydFZhbHVlKSkge1xuICAgICAgICAgICAgYXJlQWxsRXhwb3J0c0NvbXBvbmVudHMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaGFzRXhwb3J0cyAmJiBhcmVBbGxFeHBvcnRzQ29tcG9uZW50cztcbn1cbmZ1bmN0aW9uIHNob3VsZEludmFsaWRhdGVSZWFjdFJlZnJlc2hCb3VuZGFyeShwcmV2RXhwb3J0cywgbmV4dEV4cG9ydHMpIHtcbiAgICB2YXIgcHJldlNpZ25hdHVyZSA9IGdldFJlZnJlc2hCb3VuZGFyeVNpZ25hdHVyZShwcmV2RXhwb3J0cyk7XG4gICAgdmFyIG5leHRTaWduYXR1cmUgPSBnZXRSZWZyZXNoQm91bmRhcnlTaWduYXR1cmUobmV4dEV4cG9ydHMpO1xuICAgIGlmIChwcmV2U2lnbmF0dXJlLmxlbmd0aCAhPT0gbmV4dFNpZ25hdHVyZS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV4dFNpZ25hdHVyZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocHJldlNpZ25hdHVyZVtpXSAhPT0gbmV4dFNpZ25hdHVyZVtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gZ2V0UmVmcmVzaEJvdW5kYXJ5U2lnbmF0dXJlKG1vZHVsZUV4cG9ydHMpIHtcbiAgICB2YXIgc2lnbmF0dXJlID0gW107XG4gICAgc2lnbmF0dXJlLnB1c2gocnVudGltZV8xLmRlZmF1bHQuZ2V0RmFtaWx5QnlUeXBlKG1vZHVsZUV4cG9ydHMpKTtcbiAgICBpZiAobW9kdWxlRXhwb3J0cyA9PSBudWxsIHx8IHR5cGVvZiBtb2R1bGVFeHBvcnRzICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAvLyBFeGl0IGlmIHdlIGNhbid0IGl0ZXJhdGUgb3ZlciBleHBvcnRzLlxuICAgICAgICAvLyAoVGhpcyBpcyBpbXBvcnRhbnQgZm9yIGxlZ2FjeSBlbnZpcm9ubWVudHMuKVxuICAgICAgICByZXR1cm4gc2lnbmF0dXJlO1xuICAgIH1cbiAgICBmb3IgKHZhciBrZXkgaW4gbW9kdWxlRXhwb3J0cykge1xuICAgICAgICBpZiAoaXNTYWZlRXhwb3J0KGtleSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBleHBvcnRWYWx1ZSA9IG1vZHVsZUV4cG9ydHNba2V5XTtcbiAgICAgICAgc2lnbmF0dXJlLnB1c2goa2V5KTtcbiAgICAgICAgc2lnbmF0dXJlLnB1c2gocnVudGltZV8xLmRlZmF1bHQuZ2V0RmFtaWx5QnlUeXBlKGV4cG9ydFZhbHVlKSk7XG4gICAgfVxuICAgIHJldHVybiBzaWduYXR1cmU7XG59XG52YXIgaXNVcGRhdGVTY2hlZHVsZWQgPSBmYWxzZTtcbmZ1bmN0aW9uIHNjaGVkdWxlVXBkYXRlKCkge1xuICAgIGlmIChpc1VwZGF0ZVNjaGVkdWxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNhbkFwcGx5VXBkYXRlKCkge1xuICAgICAgICByZXR1cm4gbW9kdWxlLmhvdC5zdGF0dXMoKSA9PT0gJ2lkbGUnO1xuICAgIH1cbiAgICBpc1VwZGF0ZVNjaGVkdWxlZCA9IHRydWU7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlzVXBkYXRlU2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgIC8vIE9ubHkgdHJpZ2dlciByZWZyZXNoIGlmIHRoZSB3ZWJwYWNrIEhNUiBzdGF0ZSBpcyBpZGxlXG4gICAgICAgIGlmIChjYW5BcHBseVVwZGF0ZSgpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJ1bnRpbWVfMS5kZWZhdWx0LnBlcmZvcm1SZWFjdFJlZnJlc2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1dhcm5pbmc6IEZhaWxlZCB0byByZS1yZW5kZXIuIFdlIHdpbGwgcmV0cnkgb24gdGhlIG5leHQgRmFzdCBSZWZyZXNoIGV2ZW50LlxcbicgK1xuICAgICAgICAgICAgICAgICAgICBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzY2hlZHVsZVVwZGF0ZSgpO1xuICAgIH0sIDMwKTtcbn1cbi8vIE5lZWRzIHRvIGJlIGNvbXBhdGlibGUgd2l0aCBJRTExXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgcmVnaXN0ZXJFeHBvcnRzRm9yUmVhY3RSZWZyZXNoOiByZWdpc3RlckV4cG9ydHNGb3JSZWFjdFJlZnJlc2gsXG4gICAgaXNSZWFjdFJlZnJlc2hCb3VuZGFyeTogaXNSZWFjdFJlZnJlc2hCb3VuZGFyeSxcbiAgICBzaG91bGRJbnZhbGlkYXRlUmVhY3RSZWZyZXNoQm91bmRhcnk6IHNob3VsZEludmFsaWRhdGVSZWFjdFJlZnJlc2hCb3VuZGFyeSxcbiAgICBnZXRSZWZyZXNoQm91bmRhcnlTaWduYXR1cmU6IGdldFJlZnJlc2hCb3VuZGFyeVNpZ25hdHVyZSxcbiAgICBzY2hlZHVsZVVwZGF0ZTogc2NoZWR1bGVVcGRhdGUsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGVscGVycy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHJ1bnRpbWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTtcbmNvbnN0IGhlbHBlcnNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9pbnRlcm5hbC9oZWxwZXJzXCIpKTtcbi8vIEhvb2sgaW50byBSZWFjdERPTSBpbml0aWFsaXphdGlvblxucnVudGltZV8xLmRlZmF1bHQuaW5qZWN0SW50b0dsb2JhbEhvb2soc2VsZik7XG4vLyBSZWdpc3RlciBnbG9iYWwgaGVscGVyc1xuc2VsZi4kUmVmcmVzaEhlbHBlcnMkID0gaGVscGVyc18xLmRlZmF1bHQ7XG4vLyBSZWdpc3RlciBhIGhlbHBlciBmb3IgbW9kdWxlIGV4ZWN1dGlvbiBpbnRlcmNlcHRpb25cbnNlbGYuJFJlZnJlc2hJbnRlcmNlcHRNb2R1bGVFeGVjdXRpb24kID0gZnVuY3Rpb24gKHdlYnBhY2tNb2R1bGVJZCkge1xuICAgIHZhciBwcmV2UmVmcmVzaFJlZyA9IHNlbGYuJFJlZnJlc2hSZWckO1xuICAgIHZhciBwcmV2UmVmcmVzaFNpZyA9IHNlbGYuJFJlZnJlc2hTaWckO1xuICAgIHNlbGYuJFJlZnJlc2hSZWckID0gZnVuY3Rpb24gKHR5cGUsIGlkKSB7XG4gICAgICAgIHJ1bnRpbWVfMS5kZWZhdWx0LnJlZ2lzdGVyKHR5cGUsIHdlYnBhY2tNb2R1bGVJZCArICcgJyArIGlkKTtcbiAgICB9O1xuICAgIHNlbGYuJFJlZnJlc2hTaWckID0gcnVudGltZV8xLmRlZmF1bHQuY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm07XG4gICAgLy8gTW9kZWxlZCBhZnRlciBgdXNlRWZmZWN0YCBjbGVhbnVwIHBhdHRlcm46XG4gICAgLy8gaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2hvb2tzLWVmZmVjdC5odG1sI2VmZmVjdHMtd2l0aC1jbGVhbnVwXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi4kUmVmcmVzaFJlZyQgPSBwcmV2UmVmcmVzaFJlZztcbiAgICAgICAgc2VsZi4kUmVmcmVzaFNpZyQgPSBwcmV2UmVmcmVzaFNpZztcbiAgICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJ1bnRpbWUuanMubWFwIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHZ1bmRlZmluZWRcbiAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xudmFyIFJFQUNUX0NBQ0hFX1RZUEUgPSAweGVhZTQ7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBSRUFDVF9TVVNQRU5TRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xuICBSRUFDVF9DQUNIRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jYWNoZScpO1xufVxuXG52YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwOyAvLyBXZSBuZXZlciByZW1vdmUgdGhlc2UgYXNzb2NpYXRpb25zLlxuLy8gSXQncyBPSyB0byByZWZlcmVuY2UgZmFtaWxpZXMsIGJ1dCB1c2UgV2Vha01hcC9TZXQgZm9yIHR5cGVzLlxuXG52YXIgYWxsRmFtaWxpZXNCeUlEID0gbmV3IE1hcCgpO1xudmFyIGFsbEZhbWlsaWVzQnlUeXBlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xudmFyIGFsbFNpZ25hdHVyZXNCeVR5cGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7IC8vIFRoaXMgV2Vha01hcCBpcyByZWFkIGJ5IFJlYWN0LCBzbyB3ZSBvbmx5IHB1dCBmYW1pbGllc1xuLy8gdGhhdCBoYXZlIGFjdHVhbGx5IGJlZW4gZWRpdGVkIGhlcmUuIFRoaXMga2VlcHMgY2hlY2tzIGZhc3QuXG4vLyAkRmxvd0lzc3VlXG5cbnZhciB1cGRhdGVkRmFtaWxpZXNCeVR5cGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7IC8vIFRoaXMgaXMgY2xlYXJlZCBvbiBldmVyeSBwZXJmb3JtUmVhY3RSZWZyZXNoKCkgY2FsbC5cbi8vIEl0IGlzIGFuIGFycmF5IG9mIFtGYW1pbHksIE5leHRUeXBlXSB0dXBsZXMuXG5cbnZhciBwZW5kaW5nVXBkYXRlcyA9IFtdOyAvLyBUaGlzIGlzIGluamVjdGVkIGJ5IHRoZSByZW5kZXJlciB2aWEgRGV2VG9vbHMgZ2xvYmFsIGhvb2suXG5cbnZhciBoZWxwZXJzQnlSZW5kZXJlcklEID0gbmV3IE1hcCgpO1xudmFyIGhlbHBlcnNCeVJvb3QgPSBuZXcgTWFwKCk7IC8vIFdlIGtlZXAgdHJhY2sgb2YgbW91bnRlZCByb290cyBzbyB3ZSBjYW4gc2NoZWR1bGUgdXBkYXRlcy5cblxudmFyIG1vdW50ZWRSb290cyA9IG5ldyBTZXQoKTsgLy8gSWYgYSByb290IGNhcHR1cmVzIGFuIGVycm9yLCB3ZSByZW1lbWJlciBpdCBzbyB3ZSBjYW4gcmV0cnkgb24gZWRpdC5cblxudmFyIGZhaWxlZFJvb3RzID0gbmV3IFNldCgpOyAvLyBJbiBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IFdlYWtNYXAsIHdlIGFsc28gcmVtZW1iZXIgdGhlIGxhc3QgZWxlbWVudCBmb3IgZXZlcnkgcm9vdC5cbi8vIEl0IG5lZWRzIHRvIGJlIHdlYWsgYmVjYXVzZSB3ZSBkbyB0aGlzIGV2ZW4gZm9yIHJvb3RzIHRoYXQgZmFpbGVkIHRvIG1vdW50LlxuLy8gSWYgdGhlcmUgaXMgbm8gV2Vha01hcCwgd2Ugd29uJ3QgYXR0ZW1wdCB0byBkbyByZXRyeWluZy5cbi8vICRGbG93SXNzdWVcblxudmFyIHJvb3RFbGVtZW50cyA9IC8vICRGbG93SXNzdWVcbnR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gbmV3IFdlYWtNYXAoKSA6IG51bGw7XG52YXIgaXNQZXJmb3JtaW5nUmVmcmVzaCA9IGZhbHNlO1xuXG5mdW5jdGlvbiBjb21wdXRlRnVsbEtleShzaWduYXR1cmUpIHtcbiAgaWYgKHNpZ25hdHVyZS5mdWxsS2V5ICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIHNpZ25hdHVyZS5mdWxsS2V5O1xuICB9XG5cbiAgdmFyIGZ1bGxLZXkgPSBzaWduYXR1cmUub3duS2V5O1xuICB2YXIgaG9va3M7XG5cbiAgdHJ5IHtcbiAgICBob29rcyA9IHNpZ25hdHVyZS5nZXRDdXN0b21Ib29rcygpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaW4gYW4gZWRnZSBjYXNlLCBlLmcuIGlmIGV4cHJlc3Npb24gbGlrZSBGb28udXNlU29tZXRoaW5nXG4gICAgLy8gZGVwZW5kcyBvbiBGb28gd2hpY2ggaXMgbGF6aWx5IGluaXRpYWxpemVkIGR1cmluZyByZW5kZXJpbmcuXG4gICAgLy8gSW4gdGhhdCBjYXNlIGp1c3QgYXNzdW1lIHdlJ2xsIGhhdmUgdG8gcmVtb3VudC5cbiAgICBzaWduYXR1cmUuZm9yY2VSZXNldCA9IHRydWU7XG4gICAgc2lnbmF0dXJlLmZ1bGxLZXkgPSBmdWxsS2V5O1xuICAgIHJldHVybiBmdWxsS2V5O1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBob29rcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBob29rID0gaG9va3NbaV07XG5cbiAgICBpZiAodHlwZW9mIGhvb2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIFNvbWV0aGluZydzIHdyb25nLiBBc3N1bWUgd2UgbmVlZCB0byByZW1vdW50LlxuICAgICAgc2lnbmF0dXJlLmZvcmNlUmVzZXQgPSB0cnVlO1xuICAgICAgc2lnbmF0dXJlLmZ1bGxLZXkgPSBmdWxsS2V5O1xuICAgICAgcmV0dXJuIGZ1bGxLZXk7XG4gICAgfVxuXG4gICAgdmFyIG5lc3RlZEhvb2tTaWduYXR1cmUgPSBhbGxTaWduYXR1cmVzQnlUeXBlLmdldChob29rKTtcblxuICAgIGlmIChuZXN0ZWRIb29rU2lnbmF0dXJlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIE5vIHNpZ25hdHVyZSBtZWFucyBIb29rIHdhc24ndCBpbiB0aGUgc291cmNlIGNvZGUsIGUuZy4gaW4gYSBsaWJyYXJ5LlxuICAgICAgLy8gV2UnbGwgc2tpcCBpdCBiZWNhdXNlIHdlIGNhbiBhc3N1bWUgaXQgd29uJ3QgY2hhbmdlIGR1cmluZyB0aGlzIHNlc3Npb24uXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIgbmVzdGVkSG9va0tleSA9IGNvbXB1dGVGdWxsS2V5KG5lc3RlZEhvb2tTaWduYXR1cmUpO1xuXG4gICAgaWYgKG5lc3RlZEhvb2tTaWduYXR1cmUuZm9yY2VSZXNldCkge1xuICAgICAgc2lnbmF0dXJlLmZvcmNlUmVzZXQgPSB0cnVlO1xuICAgIH1cblxuICAgIGZ1bGxLZXkgKz0gJ1xcbi0tLVxcbicgKyBuZXN0ZWRIb29rS2V5O1xuICB9XG5cbiAgc2lnbmF0dXJlLmZ1bGxLZXkgPSBmdWxsS2V5O1xuICByZXR1cm4gZnVsbEtleTtcbn1cblxuZnVuY3Rpb24gaGF2ZUVxdWFsU2lnbmF0dXJlcyhwcmV2VHlwZSwgbmV4dFR5cGUpIHtcbiAgdmFyIHByZXZTaWduYXR1cmUgPSBhbGxTaWduYXR1cmVzQnlUeXBlLmdldChwcmV2VHlwZSk7XG4gIHZhciBuZXh0U2lnbmF0dXJlID0gYWxsU2lnbmF0dXJlc0J5VHlwZS5nZXQobmV4dFR5cGUpO1xuXG4gIGlmIChwcmV2U2lnbmF0dXJlID09PSB1bmRlZmluZWQgJiYgbmV4dFNpZ25hdHVyZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAocHJldlNpZ25hdHVyZSA9PT0gdW5kZWZpbmVkIHx8IG5leHRTaWduYXR1cmUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChjb21wdXRlRnVsbEtleShwcmV2U2lnbmF0dXJlKSAhPT0gY29tcHV0ZUZ1bGxLZXkobmV4dFNpZ25hdHVyZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAobmV4dFNpZ25hdHVyZS5mb3JjZVJlc2V0KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGlzUmVhY3RDbGFzcyh0eXBlKSB7XG4gIHJldHVybiB0eXBlLnByb3RvdHlwZSAmJiB0eXBlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50O1xufVxuXG5mdW5jdGlvbiBjYW5QcmVzZXJ2ZVN0YXRlQmV0d2VlbihwcmV2VHlwZSwgbmV4dFR5cGUpIHtcbiAgaWYgKGlzUmVhY3RDbGFzcyhwcmV2VHlwZSkgfHwgaXNSZWFjdENsYXNzKG5leHRUeXBlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChoYXZlRXF1YWxTaWduYXR1cmVzKHByZXZUeXBlLCBuZXh0VHlwZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUZhbWlseSh0eXBlKSB7XG4gIC8vIE9ubHkgY2hlY2sgdXBkYXRlZCB0eXBlcyB0byBrZWVwIGxvb2t1cHMgZmFzdC5cbiAgcmV0dXJuIHVwZGF0ZWRGYW1pbGllc0J5VHlwZS5nZXQodHlwZSk7XG59IC8vIElmIHdlIGRpZG4ndCBjYXJlIGFib3V0IElFMTEsIHdlIGNvdWxkIHVzZSBuZXcgTWFwL1NldChpdGVyYWJsZSkuXG5cblxuZnVuY3Rpb24gY2xvbmVNYXAobWFwKSB7XG4gIHZhciBjbG9uZSA9IG5ldyBNYXAoKTtcbiAgbWFwLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICBjbG9uZS5zZXQoa2V5LCB2YWx1ZSk7XG4gIH0pO1xuICByZXR1cm4gY2xvbmU7XG59XG5cbmZ1bmN0aW9uIGNsb25lU2V0KHNldCkge1xuICB2YXIgY2xvbmUgPSBuZXcgU2V0KCk7XG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGNsb25lLmFkZCh2YWx1ZSk7XG4gIH0pO1xuICByZXR1cm4gY2xvbmU7XG59IC8vIFRoaXMgaXMgYSBzYWZldHkgbWVjaGFuaXNtIHRvIHByb3RlY3QgYWdhaW5zdCByb2d1ZSBnZXR0ZXJzIGFuZCBQcm94aWVzLlxuXG5cbmZ1bmN0aW9uIGdldFByb3BlcnR5KG9iamVjdCwgcHJvcGVydHkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gb2JqZWN0W3Byb3BlcnR5XTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gSW50ZW50aW9uYWxseSBpZ25vcmUuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG5mdW5jdGlvbiBwZXJmb3JtUmVhY3RSZWZyZXNoKCkge1xuXG4gIGlmIChwZW5kaW5nVXBkYXRlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmIChpc1BlcmZvcm1pbmdSZWZyZXNoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpc1BlcmZvcm1pbmdSZWZyZXNoID0gdHJ1ZTtcblxuICB0cnkge1xuICAgIHZhciBzdGFsZUZhbWlsaWVzID0gbmV3IFNldCgpO1xuICAgIHZhciB1cGRhdGVkRmFtaWxpZXMgPSBuZXcgU2V0KCk7XG4gICAgdmFyIHVwZGF0ZXMgPSBwZW5kaW5nVXBkYXRlcztcbiAgICBwZW5kaW5nVXBkYXRlcyA9IFtdO1xuICAgIHVwZGF0ZXMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIGZhbWlseSA9IF9yZWZbMF0sXG4gICAgICAgICAgbmV4dFR5cGUgPSBfcmVmWzFdO1xuICAgICAgLy8gTm93IHRoYXQgd2UgZ290IGEgcmVhbCBlZGl0LCB3ZSBjYW4gY3JlYXRlIGFzc29jaWF0aW9uc1xuICAgICAgLy8gdGhhdCB3aWxsIGJlIHJlYWQgYnkgdGhlIFJlYWN0IHJlY29uY2lsZXIuXG4gICAgICB2YXIgcHJldlR5cGUgPSBmYW1pbHkuY3VycmVudDtcbiAgICAgIHVwZGF0ZWRGYW1pbGllc0J5VHlwZS5zZXQocHJldlR5cGUsIGZhbWlseSk7XG4gICAgICB1cGRhdGVkRmFtaWxpZXNCeVR5cGUuc2V0KG5leHRUeXBlLCBmYW1pbHkpO1xuICAgICAgZmFtaWx5LmN1cnJlbnQgPSBuZXh0VHlwZTsgLy8gRGV0ZXJtaW5lIHdoZXRoZXIgdGhpcyBzaG91bGQgYmUgYSByZS1yZW5kZXIgb3IgYSByZS1tb3VudC5cblxuICAgICAgaWYgKGNhblByZXNlcnZlU3RhdGVCZXR3ZWVuKHByZXZUeXBlLCBuZXh0VHlwZSkpIHtcbiAgICAgICAgdXBkYXRlZEZhbWlsaWVzLmFkZChmYW1pbHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhbGVGYW1pbGllcy5hZGQoZmFtaWx5KTtcbiAgICAgIH1cbiAgICB9KTsgLy8gVE9ETzogcmVuYW1lIHRoZXNlIGZpZWxkcyB0byBzb21ldGhpbmcgbW9yZSBtZWFuaW5nZnVsLlxuXG4gICAgdmFyIHVwZGF0ZSA9IHtcbiAgICAgIHVwZGF0ZWRGYW1pbGllczogdXBkYXRlZEZhbWlsaWVzLFxuICAgICAgLy8gRmFtaWxpZXMgdGhhdCB3aWxsIHJlLXJlbmRlciBwcmVzZXJ2aW5nIHN0YXRlXG4gICAgICBzdGFsZUZhbWlsaWVzOiBzdGFsZUZhbWlsaWVzIC8vIEZhbWlsaWVzIHRoYXQgd2lsbCBiZSByZW1vdW50ZWRcblxuICAgIH07XG4gICAgaGVscGVyc0J5UmVuZGVyZXJJRC5mb3JFYWNoKGZ1bmN0aW9uIChoZWxwZXJzKSB7XG4gICAgICAvLyBFdmVuIGlmIHRoZXJlIGFyZSBubyByb290cywgc2V0IHRoZSBoYW5kbGVyIG9uIGZpcnN0IHVwZGF0ZS5cbiAgICAgIC8vIFRoaXMgZW5zdXJlcyB0aGF0IGlmICpuZXcqIHJvb3RzIGFyZSBtb3VudGVkLCB0aGV5J2xsIHVzZSB0aGUgcmVzb2x2ZSBoYW5kbGVyLlxuICAgICAgaGVscGVycy5zZXRSZWZyZXNoSGFuZGxlcihyZXNvbHZlRmFtaWx5KTtcbiAgICB9KTtcbiAgICB2YXIgZGlkRXJyb3IgPSBmYWxzZTtcbiAgICB2YXIgZmlyc3RFcnJvciA9IG51bGw7IC8vIFdlIHNuYXBzaG90IG1hcHMgYW5kIHNldHMgdGhhdCBhcmUgbXV0YXRlZCBkdXJpbmcgY29tbWl0cy5cbiAgICAvLyBJZiB3ZSBkb24ndCBkbyB0aGlzLCB0aGVyZSBpcyBhIHJpc2sgdGhleSB3aWxsIGJlIG11dGF0ZWQgd2hpbGVcbiAgICAvLyB3ZSBpdGVyYXRlIG92ZXIgdGhlbS4gRm9yIGV4YW1wbGUsIHRyeWluZyB0byByZWNvdmVyIGEgZmFpbGVkIHJvb3RcbiAgICAvLyBtYXkgY2F1c2UgYW5vdGhlciByb290IHRvIGJlIGFkZGVkIHRvIHRoZSBmYWlsZWQgbGlzdCAtLSBhbiBpbmZpbml0ZSBsb29wLlxuXG4gICAgdmFyIGZhaWxlZFJvb3RzU25hcHNob3QgPSBjbG9uZVNldChmYWlsZWRSb290cyk7XG4gICAgdmFyIG1vdW50ZWRSb290c1NuYXBzaG90ID0gY2xvbmVTZXQobW91bnRlZFJvb3RzKTtcbiAgICB2YXIgaGVscGVyc0J5Um9vdFNuYXBzaG90ID0gY2xvbmVNYXAoaGVscGVyc0J5Um9vdCk7XG4gICAgZmFpbGVkUm9vdHNTbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uIChyb290KSB7XG4gICAgICB2YXIgaGVscGVycyA9IGhlbHBlcnNCeVJvb3RTbmFwc2hvdC5nZXQocm9vdCk7XG5cbiAgICAgIGlmIChoZWxwZXJzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFmYWlsZWRSb290cy5oYXMocm9vdCkpIHsvLyBObyBsb25nZXIgZmFpbGVkLlxuICAgICAgfVxuXG4gICAgICBpZiAocm9vdEVsZW1lbnRzID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb290RWxlbWVudHMuaGFzKHJvb3QpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGVsZW1lbnQgPSByb290RWxlbWVudHMuZ2V0KHJvb3QpO1xuXG4gICAgICB0cnkge1xuICAgICAgICBoZWxwZXJzLnNjaGVkdWxlUm9vdChyb290LCBlbGVtZW50KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAoIWRpZEVycm9yKSB7XG4gICAgICAgICAgZGlkRXJyb3IgPSB0cnVlO1xuICAgICAgICAgIGZpcnN0RXJyb3IgPSBlcnI7XG4gICAgICAgIH0gLy8gS2VlcCB0cnlpbmcgb3RoZXIgcm9vdHMuXG5cbiAgICAgIH1cbiAgICB9KTtcbiAgICBtb3VudGVkUm9vdHNTbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uIChyb290KSB7XG4gICAgICB2YXIgaGVscGVycyA9IGhlbHBlcnNCeVJvb3RTbmFwc2hvdC5nZXQocm9vdCk7XG5cbiAgICAgIGlmIChoZWxwZXJzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFtb3VudGVkUm9vdHMuaGFzKHJvb3QpKSB7Ly8gTm8gbG9uZ2VyIG1vdW50ZWQuXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGhlbHBlcnMuc2NoZWR1bGVSZWZyZXNoKHJvb3QsIHVwZGF0ZSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKCFkaWRFcnJvcikge1xuICAgICAgICAgIGRpZEVycm9yID0gdHJ1ZTtcbiAgICAgICAgICBmaXJzdEVycm9yID0gZXJyO1xuICAgICAgICB9IC8vIEtlZXAgdHJ5aW5nIG90aGVyIHJvb3RzLlxuXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoZGlkRXJyb3IpIHtcbiAgICAgIHRocm93IGZpcnN0RXJyb3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVwZGF0ZTtcbiAgfSBmaW5hbGx5IHtcbiAgICBpc1BlcmZvcm1pbmdSZWZyZXNoID0gZmFsc2U7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZ2lzdGVyKHR5cGUsIGlkKSB7XG4gIHtcbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZSAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIFRoaXMgY2FuIGhhcHBlbiBpbiBhbiBlZGdlIGNhc2UsIGUuZy4gaWYgd2UgcmVnaXN0ZXJcbiAgICAvLyByZXR1cm4gdmFsdWUgb2YgYSBIT0MgYnV0IGl0IHJldHVybnMgYSBjYWNoZWQgY29tcG9uZW50LlxuICAgIC8vIElnbm9yZSBhbnl0aGluZyBidXQgdGhlIGZpcnN0IHJlZ2lzdHJhdGlvbiBmb3IgZWFjaCB0eXBlLlxuXG5cbiAgICBpZiAoYWxsRmFtaWxpZXNCeVR5cGUuaGFzKHR5cGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBDcmVhdGUgZmFtaWx5IG9yIHJlbWVtYmVyIHRvIHVwZGF0ZSBpdC5cbiAgICAvLyBOb25lIG9mIHRoaXMgYm9va2tlZXBpbmcgYWZmZWN0cyByZWNvbmNpbGlhdGlvblxuICAgIC8vIHVudGlsIHRoZSBmaXJzdCBwZXJmb3JtUmVhY3RSZWZyZXNoKCkgY2FsbCBhYm92ZS5cblxuXG4gICAgdmFyIGZhbWlseSA9IGFsbEZhbWlsaWVzQnlJRC5nZXQoaWQpO1xuXG4gICAgaWYgKGZhbWlseSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBmYW1pbHkgPSB7XG4gICAgICAgIGN1cnJlbnQ6IHR5cGVcbiAgICAgIH07XG4gICAgICBhbGxGYW1pbGllc0J5SUQuc2V0KGlkLCBmYW1pbHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwZW5kaW5nVXBkYXRlcy5wdXNoKFtmYW1pbHksIHR5cGVdKTtcbiAgICB9XG5cbiAgICBhbGxGYW1pbGllc0J5VHlwZS5zZXQodHlwZSwgZmFtaWx5KTsgLy8gVmlzaXQgaW5uZXIgdHlwZXMgYmVjYXVzZSB3ZSBtaWdodCBub3QgaGF2ZSByZWdpc3RlcmVkIHRoZW0uXG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICAgIHN3aXRjaCAoZ2V0UHJvcGVydHkodHlwZSwgJyQkdHlwZW9mJykpIHtcbiAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgIHJlZ2lzdGVyKHR5cGUucmVuZGVyLCBpZCArICckcmVuZGVyJyk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgcmVnaXN0ZXIodHlwZS50eXBlLCBpZCArICckdHlwZScpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gc2V0U2lnbmF0dXJlKHR5cGUsIGtleSkge1xuICB2YXIgZm9yY2VSZXNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG4gIHZhciBnZXRDdXN0b21Ib29rcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzID8gYXJndW1lbnRzWzNdIDogdW5kZWZpbmVkO1xuXG4gIHtcbiAgICBpZiAoIWFsbFNpZ25hdHVyZXNCeVR5cGUuaGFzKHR5cGUpKSB7XG4gICAgICBhbGxTaWduYXR1cmVzQnlUeXBlLnNldCh0eXBlLCB7XG4gICAgICAgIGZvcmNlUmVzZXQ6IGZvcmNlUmVzZXQsXG4gICAgICAgIG93bktleToga2V5LFxuICAgICAgICBmdWxsS2V5OiBudWxsLFxuICAgICAgICBnZXRDdXN0b21Ib29rczogZ2V0Q3VzdG9tSG9va3MgfHwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSAvLyBWaXNpdCBpbm5lciB0eXBlcyBiZWNhdXNlIHdlIG1pZ2h0IG5vdCBoYXZlIHNpZ25lZCB0aGVtLlxuXG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICAgIHN3aXRjaCAoZ2V0UHJvcGVydHkodHlwZSwgJyQkdHlwZW9mJykpIHtcbiAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgIHNldFNpZ25hdHVyZSh0eXBlLnJlbmRlciwga2V5LCBmb3JjZVJlc2V0LCBnZXRDdXN0b21Ib29rcyk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgc2V0U2lnbmF0dXJlKHR5cGUudHlwZSwga2V5LCBmb3JjZVJlc2V0LCBnZXRDdXN0b21Ib29rcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59IC8vIFRoaXMgaXMgbGF6aWx5IGNhbGxlZCBkdXJpbmcgZmlyc3QgcmVuZGVyIGZvciBhIHR5cGUuXG4vLyBJdCBjYXB0dXJlcyBIb29rIGxpc3QgYXQgdGhhdCB0aW1lIHNvIGlubGluZSByZXF1aXJlcyBkb24ndCBicmVhayBjb21wYXJpc29ucy5cblxuZnVuY3Rpb24gY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlKHR5cGUpIHtcbiAge1xuICAgIHZhciBzaWduYXR1cmUgPSBhbGxTaWduYXR1cmVzQnlUeXBlLmdldCh0eXBlKTtcblxuICAgIGlmIChzaWduYXR1cmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29tcHV0ZUZ1bGxLZXkoc2lnbmF0dXJlKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGdldEZhbWlseUJ5SUQoaWQpIHtcbiAge1xuICAgIHJldHVybiBhbGxGYW1pbGllc0J5SUQuZ2V0KGlkKTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0RmFtaWx5QnlUeXBlKHR5cGUpIHtcbiAge1xuICAgIHJldHVybiBhbGxGYW1pbGllc0J5VHlwZS5nZXQodHlwZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXMoZmFtaWxpZXMpIHtcbiAge1xuICAgIHZhciBhZmZlY3RlZEluc3RhbmNlcyA9IG5ldyBTZXQoKTtcbiAgICBtb3VudGVkUm9vdHMuZm9yRWFjaChmdW5jdGlvbiAocm9vdCkge1xuICAgICAgdmFyIGhlbHBlcnMgPSBoZWxwZXJzQnlSb290LmdldChyb290KTtcblxuICAgICAgaWYgKGhlbHBlcnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLicpO1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5zdGFuY2VzRm9yUm9vdCA9IGhlbHBlcnMuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKHJvb3QsIGZhbWlsaWVzKTtcbiAgICAgIGluc3RhbmNlc0ZvclJvb3QuZm9yRWFjaChmdW5jdGlvbiAoaW5zdCkge1xuICAgICAgICBhZmZlY3RlZEluc3RhbmNlcy5hZGQoaW5zdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gYWZmZWN0ZWRJbnN0YW5jZXM7XG4gIH1cbn1cbmZ1bmN0aW9uIGluamVjdEludG9HbG9iYWxIb29rKGdsb2JhbE9iamVjdCkge1xuICB7XG4gICAgLy8gRm9yIFJlYWN0IE5hdGl2ZSwgdGhlIGdsb2JhbCBob29rIHdpbGwgYmUgc2V0IHVwIGJ5IHJlcXVpcmUoJ3JlYWN0LWRldnRvb2xzLWNvcmUnKS5cbiAgICAvLyBUaGF0IGNvZGUgd2lsbCBydW4gYmVmb3JlIHVzLiBTbyB3ZSBuZWVkIHRvIG1vbmtleXBhdGNoIGZ1bmN0aW9ucyBvbiBleGlzdGluZyBob29rLlxuICAgIC8vIEZvciBSZWFjdCBXZWIsIHRoZSBnbG9iYWwgaG9vayB3aWxsIGJlIHNldCB1cCBieSB0aGUgZXh0ZW5zaW9uLlxuICAgIC8vIFRoaXMgd2lsbCBhbHNvIHJ1biBiZWZvcmUgdXMuXG4gICAgdmFyIGhvb2sgPSBnbG9iYWxPYmplY3QuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO1xuXG4gICAgaWYgKGhvb2sgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gSG93ZXZlciwgaWYgdGhlcmUgaXMgbm8gRGV2VG9vbHMgZXh0ZW5zaW9uLCB3ZSdsbCBuZWVkIHRvIHNldCB1cCB0aGUgZ2xvYmFsIGhvb2sgb3Vyc2VsdmVzLlxuICAgICAgLy8gTm90ZSB0aGF0IGluIHRoaXMgY2FzZSBpdCdzIGltcG9ydGFudCB0aGF0IHJlbmRlcmVyIGNvZGUgcnVucyAqYWZ0ZXIqIHRoaXMgbWV0aG9kIGNhbGwuXG4gICAgICAvLyBPdGhlcndpc2UsIHRoZSByZW5kZXJlciB3aWxsIHRoaW5rIHRoYXQgdGhlcmUgaXMgbm8gZ2xvYmFsIGhvb2ssIGFuZCB3b24ndCBkbyB0aGUgaW5qZWN0aW9uLlxuICAgICAgdmFyIG5leHRJRCA9IDA7XG4gICAgICBnbG9iYWxPYmplY3QuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fID0gaG9vayA9IHtcbiAgICAgICAgcmVuZGVyZXJzOiBuZXcgTWFwKCksXG4gICAgICAgIHN1cHBvcnRzRmliZXI6IHRydWUsXG4gICAgICAgIGluamVjdDogZnVuY3Rpb24gKGluamVjdGVkKSB7XG4gICAgICAgICAgcmV0dXJuIG5leHRJRCsrO1xuICAgICAgICB9LFxuICAgICAgICBvblNjaGVkdWxlRmliZXJSb290OiBmdW5jdGlvbiAoaWQsIHJvb3QsIGNoaWxkcmVuKSB7fSxcbiAgICAgICAgb25Db21taXRGaWJlclJvb3Q6IGZ1bmN0aW9uIChpZCwgcm9vdCwgbWF5YmVQcmlvcml0eUxldmVsLCBkaWRFcnJvcikge30sXG4gICAgICAgIG9uQ29tbWl0RmliZXJVbm1vdW50OiBmdW5jdGlvbiAoKSB7fVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoaG9vay5pc0Rpc2FibGVkKSB7XG4gICAgICAvLyBUaGlzIGlzbid0IGEgcmVhbCBwcm9wZXJ0eSBvbiB0aGUgaG9vaywgYnV0IGl0IGNhbiBiZSBzZXQgdG8gb3B0IG91dFxuICAgICAgLy8gb2YgRGV2VG9vbHMgaW50ZWdyYXRpb24gYW5kIGFzc29jaWF0ZWQgd2FybmluZ3MgYW5kIGxvZ3MuXG4gICAgICAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuICAgICAgY29uc29sZVsnd2FybiddKCdTb21ldGhpbmcgaGFzIHNoaW1tZWQgdGhlIFJlYWN0IERldlRvb2xzIGdsb2JhbCBob29rIChfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pLiAnICsgJ0Zhc3QgUmVmcmVzaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoaXMgc2hpbSBhbmQgd2lsbCBiZSBkaXNhYmxlZC4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEhlcmUsIHdlIGp1c3Qgd2FudCB0byBnZXQgYSByZWZlcmVuY2UgdG8gc2NoZWR1bGVSZWZyZXNoLlxuXG5cbiAgICB2YXIgb2xkSW5qZWN0ID0gaG9vay5pbmplY3Q7XG5cbiAgICBob29rLmluamVjdCA9IGZ1bmN0aW9uIChpbmplY3RlZCkge1xuICAgICAgdmFyIGlkID0gb2xkSW5qZWN0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICAgIGlmICh0eXBlb2YgaW5qZWN0ZWQuc2NoZWR1bGVSZWZyZXNoID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBpbmplY3RlZC5zZXRSZWZyZXNoSGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBUaGlzIHZlcnNpb24gc3VwcG9ydHMgUmVhY3QgUmVmcmVzaC5cbiAgICAgICAgaGVscGVyc0J5UmVuZGVyZXJJRC5zZXQoaWQsIGluamVjdGVkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGlkO1xuICAgIH07IC8vIERvIHRoZSBzYW1lIGZvciBhbnkgYWxyZWFkeSBpbmplY3RlZCByb290cy5cbiAgICAvLyBUaGlzIGlzIHVzZWZ1bCBpZiBSZWFjdERPTSBoYXMgYWxyZWFkeSBiZWVuIGluaXRpYWxpemVkLlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTc2MjZcblxuXG4gICAgaG9vay5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaW5qZWN0ZWQsIGlkKSB7XG4gICAgICBpZiAodHlwZW9mIGluamVjdGVkLnNjaGVkdWxlUmVmcmVzaCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgaW5qZWN0ZWQuc2V0UmVmcmVzaEhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gVGhpcyB2ZXJzaW9uIHN1cHBvcnRzIFJlYWN0IFJlZnJlc2guXG4gICAgICAgIGhlbHBlcnNCeVJlbmRlcmVySUQuc2V0KGlkLCBpbmplY3RlZCk7XG4gICAgICB9XG4gICAgfSk7IC8vIFdlIGFsc28gd2FudCB0byB0cmFjayBjdXJyZW50bHkgbW91bnRlZCByb290cy5cblxuICAgIHZhciBvbGRPbkNvbW1pdEZpYmVyUm9vdCA9IGhvb2sub25Db21taXRGaWJlclJvb3Q7XG5cbiAgICB2YXIgb2xkT25TY2hlZHVsZUZpYmVyUm9vdCA9IGhvb2sub25TY2hlZHVsZUZpYmVyUm9vdCB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIGhvb2sub25TY2hlZHVsZUZpYmVyUm9vdCA9IGZ1bmN0aW9uIChpZCwgcm9vdCwgY2hpbGRyZW4pIHtcbiAgICAgIGlmICghaXNQZXJmb3JtaW5nUmVmcmVzaCkge1xuICAgICAgICAvLyBJZiBpdCB3YXMgaW50ZW50aW9uYWxseSBzY2hlZHVsZWQsIGRvbid0IGF0dGVtcHQgdG8gcmVzdG9yZS5cbiAgICAgICAgLy8gVGhpcyBpbmNsdWRlcyBpbnRlbnRpb25hbGx5IHNjaGVkdWxlZCB1bm1vdW50cy5cbiAgICAgICAgZmFpbGVkUm9vdHMuZGVsZXRlKHJvb3QpO1xuXG4gICAgICAgIGlmIChyb290RWxlbWVudHMgIT09IG51bGwpIHtcbiAgICAgICAgICByb290RWxlbWVudHMuc2V0KHJvb3QsIGNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2xkT25TY2hlZHVsZUZpYmVyUm9vdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBob29rLm9uQ29tbWl0RmliZXJSb290ID0gZnVuY3Rpb24gKGlkLCByb290LCBtYXliZVByaW9yaXR5TGV2ZWwsIGRpZEVycm9yKSB7XG4gICAgICB2YXIgaGVscGVycyA9IGhlbHBlcnNCeVJlbmRlcmVySUQuZ2V0KGlkKTtcblxuICAgICAgaWYgKGhlbHBlcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBoZWxwZXJzQnlSb290LnNldChyb290LCBoZWxwZXJzKTtcbiAgICAgICAgdmFyIGN1cnJlbnQgPSByb290LmN1cnJlbnQ7XG4gICAgICAgIHZhciBhbHRlcm5hdGUgPSBjdXJyZW50LmFsdGVybmF0ZTsgLy8gV2UgbmVlZCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGlzIHJvb3QgaGFzIGp1c3QgKHVuKW1vdW50ZWQuXG4gICAgICAgIC8vIFRoaXMgbG9naWMgaXMgY29weS1wYXN0ZWQgZnJvbSBzaW1pbGFyIGxvZ2ljIGluIHRoZSBEZXZUb29scyBiYWNrZW5kLlxuICAgICAgICAvLyBJZiB0aGlzIGJyZWFrcyB3aXRoIHNvbWUgcmVmYWN0b3JpbmcsIHlvdSdsbCB3YW50IHRvIHVwZGF0ZSBEZXZUb29scyB0b28uXG5cbiAgICAgICAgaWYgKGFsdGVybmF0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHZhciB3YXNNb3VudGVkID0gYWx0ZXJuYXRlLm1lbW9pemVkU3RhdGUgIT0gbnVsbCAmJiBhbHRlcm5hdGUubWVtb2l6ZWRTdGF0ZS5lbGVtZW50ICE9IG51bGw7XG4gICAgICAgICAgdmFyIGlzTW91bnRlZCA9IGN1cnJlbnQubWVtb2l6ZWRTdGF0ZSAhPSBudWxsICYmIGN1cnJlbnQubWVtb2l6ZWRTdGF0ZS5lbGVtZW50ICE9IG51bGw7XG5cbiAgICAgICAgICBpZiAoIXdhc01vdW50ZWQgJiYgaXNNb3VudGVkKSB7XG4gICAgICAgICAgICAvLyBNb3VudCBhIG5ldyByb290LlxuICAgICAgICAgICAgbW91bnRlZFJvb3RzLmFkZChyb290KTtcbiAgICAgICAgICAgIGZhaWxlZFJvb3RzLmRlbGV0ZShyb290KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHdhc01vdW50ZWQgJiYgaXNNb3VudGVkKSA7IGVsc2UgaWYgKHdhc01vdW50ZWQgJiYgIWlzTW91bnRlZCkge1xuICAgICAgICAgICAgLy8gVW5tb3VudCBhbiBleGlzdGluZyByb290LlxuICAgICAgICAgICAgbW91bnRlZFJvb3RzLmRlbGV0ZShyb290KTtcblxuICAgICAgICAgICAgaWYgKGRpZEVycm9yKSB7XG4gICAgICAgICAgICAgIC8vIFdlJ2xsIHJlbW91bnQgaXQgb24gZnV0dXJlIGVkaXRzLlxuICAgICAgICAgICAgICBmYWlsZWRSb290cy5hZGQocm9vdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBoZWxwZXJzQnlSb290LmRlbGV0ZShyb290KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKCF3YXNNb3VudGVkICYmICFpc01vdW50ZWQpIHtcbiAgICAgICAgICAgIGlmIChkaWRFcnJvcikge1xuICAgICAgICAgICAgICAvLyBXZSdsbCByZW1vdW50IGl0IG9uIGZ1dHVyZSBlZGl0cy5cbiAgICAgICAgICAgICAgZmFpbGVkUm9vdHMuYWRkKHJvb3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBNb3VudCBhIG5ldyByb290LlxuICAgICAgICAgIG1vdW50ZWRSb290cy5hZGQocm9vdCk7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gQWx3YXlzIGNhbGwgdGhlIGRlY29yYXRlZCBEZXZUb29scyBob29rLlxuXG5cbiAgICAgIHJldHVybiBvbGRPbkNvbW1pdEZpYmVyUm9vdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cbn1cbmZ1bmN0aW9uIGhhc1VucmVjb3ZlcmFibGVFcnJvcnMoKSB7XG4gIC8vIFRPRE86IGRlbGV0ZSB0aGlzIGFmdGVyIHJlbW92aW5nIGRlcGVuZGVuY3kgaW4gUk4uXG4gIHJldHVybiBmYWxzZTtcbn0gLy8gRXhwb3NlZCBmb3IgdGVzdGluZy5cblxuZnVuY3Rpb24gX2dldE1vdW50ZWRSb290Q291bnQoKSB7XG4gIHtcbiAgICByZXR1cm4gbW91bnRlZFJvb3RzLnNpemU7XG4gIH1cbn0gLy8gVGhpcyBpcyBhIHdyYXBwZXIgb3ZlciBtb3JlIHByaW1pdGl2ZSBmdW5jdGlvbnMgZm9yIHNldHRpbmcgc2lnbmF0dXJlLlxuLy8gU2lnbmF0dXJlcyBsZXQgdXMgZGVjaWRlIHdoZXRoZXIgdGhlIEhvb2sgb3JkZXIgaGFzIGNoYW5nZWQgb24gcmVmcmVzaC5cbi8vXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGludGVuZGVkIHRvIGJlIHVzZWQgYXMgYSB0cmFuc2Zvcm0gdGFyZ2V0LCBlLmcuOlxuLy8gdmFyIF9zID0gY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm0oKVxuLy9cbi8vIGZ1bmN0aW9uIEhlbGxvKCkge1xuLy8gICBjb25zdCBbZm9vLCBzZXRGb29dID0gdXNlU3RhdGUoMCk7XG4vLyAgIGNvbnN0IHZhbHVlID0gdXNlQ3VzdG9tSG9vaygpO1xuLy8gICBfcygpOyAvKiBDYWxsIHdpdGhvdXQgYXJndW1lbnRzIHRyaWdnZXJzIGNvbGxlY3RpbmcgdGhlIGN1c3RvbSBIb29rIGxpc3QuXG4vLyAgICAgICAgICAqIFRoaXMgZG9lc24ndCBoYXBwZW4gZHVyaW5nIHRoZSBtb2R1bGUgZXZhbHVhdGlvbiBiZWNhdXNlIHdlXG4vLyAgICAgICAgICAqIGRvbid0IHdhbnQgdG8gY2hhbmdlIHRoZSBtb2R1bGUgb3JkZXIgd2l0aCBpbmxpbmUgcmVxdWlyZXMuXG4vLyAgICAgICAgICAqIE5leHQgY2FsbHMgYXJlIG5vb3BzLiAqL1xuLy8gICByZXR1cm4gPGgxPkhpPC9oMT47XG4vLyB9XG4vL1xuLy8gLyogQ2FsbCB3aXRoIGFyZ3VtZW50cyBhdHRhY2hlcyB0aGUgc2lnbmF0dXJlIHRvIHRoZSB0eXBlOiAqL1xuLy8gX3MoXG4vLyAgIEhlbGxvLFxuLy8gICAndXNlU3RhdGV7W2Zvbywgc2V0Rm9vXX0oMCknLFxuLy8gICAoKSA9PiBbdXNlQ3VzdG9tSG9va10sIC8qIExhenkgdG8gYXZvaWQgdHJpZ2dlcmluZyBpbmxpbmUgcmVxdWlyZXMgKi9cbi8vICk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtKCkge1xuICB7XG4gICAgdmFyIHNhdmVkVHlwZTtcbiAgICB2YXIgaGFzQ3VzdG9tSG9va3M7XG4gICAgdmFyIGRpZENvbGxlY3RIb29rcyA9IGZhbHNlO1xuICAgIHJldHVybiBmdW5jdGlvbiAodHlwZSwga2V5LCBmb3JjZVJlc2V0LCBnZXRDdXN0b21Ib29rcykge1xuICAgICAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8vIFdlJ3JlIGluIHRoZSBpbml0aWFsIHBoYXNlIHRoYXQgYXNzb2NpYXRlcyBzaWduYXR1cmVzXG4gICAgICAgIC8vIHdpdGggdGhlIGZ1bmN0aW9ucy4gTm90ZSB0aGlzIG1heSBiZSBjYWxsZWQgbXVsdGlwbGUgdGltZXNcbiAgICAgICAgLy8gaW4gSE9DIGNoYWlucyBsaWtlIF9zKGhvYzEoX3MoaG9jMihfcyhhY3R1YWxGdW5jdGlvbikpKSkpLlxuICAgICAgICBpZiAoIXNhdmVkVHlwZSkge1xuICAgICAgICAgIC8vIFdlJ3JlIGluIHRoZSBpbm5lcm1vc3QgY2FsbCwgc28gdGhpcyBpcyB0aGUgYWN0dWFsIHR5cGUuXG4gICAgICAgICAgc2F2ZWRUeXBlID0gdHlwZTtcbiAgICAgICAgICBoYXNDdXN0b21Ib29rcyA9IHR5cGVvZiBnZXRDdXN0b21Ib29rcyA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgICAgfSAvLyBTZXQgdGhlIHNpZ25hdHVyZSBmb3IgYWxsIHR5cGVzIChldmVuIHdyYXBwZXJzISkgaW4gY2FzZVxuICAgICAgICAvLyB0aGV5IGhhdmUgbm8gc2lnbmF0dXJlcyBvZiB0aGVpciBvd24uIFRoaXMgaXMgdG8gcHJldmVudFxuICAgICAgICAvLyBwcm9ibGVtcyBsaWtlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMjA0MTcuXG5cblxuICAgICAgICBpZiAodHlwZSAhPSBudWxsICYmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpKSB7XG4gICAgICAgICAgc2V0U2lnbmF0dXJlKHR5cGUsIGtleSwgZm9yY2VSZXNldCwgZ2V0Q3VzdG9tSG9va3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBXZSdyZSBpbiB0aGUgX3MoKSBjYWxsIHdpdGhvdXQgYXJndW1lbnRzLCB3aGljaCBtZWFuc1xuICAgICAgICAvLyB0aGlzIGlzIHRoZSB0aW1lIHRvIGNvbGxlY3QgY3VzdG9tIEhvb2sgc2lnbmF0dXJlcy5cbiAgICAgICAgLy8gT25seSBkbyB0aGlzIG9uY2UuIFRoaXMgcGF0aCBpcyBob3QgYW5kIHJ1bnMgKmluc2lkZSogZXZlcnkgcmVuZGVyIVxuICAgICAgICBpZiAoIWRpZENvbGxlY3RIb29rcyAmJiBoYXNDdXN0b21Ib29rcykge1xuICAgICAgICAgIGRpZENvbGxlY3RIb29rcyA9IHRydWU7XG4gICAgICAgICAgY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlKHNhdmVkVHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5mdW5jdGlvbiBpc0xpa2VseUNvbXBvbmVudFR5cGUodHlwZSkge1xuICB7XG4gICAgc3dpdGNoICh0eXBlb2YgdHlwZSkge1xuICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICB7XG4gICAgICAgICAgLy8gRmlyc3QsIGRlYWwgd2l0aCBjbGFzc2VzLlxuICAgICAgICAgIGlmICh0eXBlLnByb3RvdHlwZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAodHlwZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCkge1xuICAgICAgICAgICAgICAvLyBSZWFjdCBjbGFzcy5cbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBvd25OYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHR5cGUucHJvdG90eXBlKTtcblxuICAgICAgICAgICAgaWYgKG93bk5hbWVzLmxlbmd0aCA+IDEgfHwgb3duTmFtZXNbMF0gIT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBsb29rcyBsaWtlIGEgY2xhc3MuXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvXG5cblxuICAgICAgICAgICAgaWYgKHR5cGUucHJvdG90eXBlLl9fcHJvdG9fXyAhPT0gT2JqZWN0LnByb3RvdHlwZSkge1xuICAgICAgICAgICAgICAvLyBJdCBoYXMgYSBzdXBlcmNsYXNzLlxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IC8vIFBhc3MgdGhyb3VnaC5cbiAgICAgICAgICAgIC8vIFRoaXMgbG9va3MgbGlrZSBhIHJlZ3VsYXIgZnVuY3Rpb24gd2l0aCBlbXB0eSBwcm90b3R5cGUuXG5cbiAgICAgICAgICB9IC8vIEZvciBwbGFpbiBmdW5jdGlvbnMgYW5kIGFycm93cywgdXNlIG5hbWUgYXMgYSBoZXVyaXN0aWMuXG5cblxuICAgICAgICAgIHZhciBuYW1lID0gdHlwZS5uYW1lIHx8IHR5cGUuZGlzcGxheU5hbWU7XG4gICAgICAgICAgcmV0dXJuIHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJyAmJiAvXltBLVpdLy50ZXN0KG5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHtcbiAgICAgICAgICBpZiAodHlwZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGdldFByb3BlcnR5KHR5cGUsICckJHR5cGVvZicpKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgICAgLy8gRGVmaW5pdGVseSBSZWFjdCBjb21wb25lbnRzLlxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydHMuX2dldE1vdW50ZWRSb290Q291bnQgPSBfZ2V0TW91bnRlZFJvb3RDb3VudDtcbmV4cG9ydHMuY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlID0gY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlO1xuZXhwb3J0cy5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybSA9IGNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtO1xuZXhwb3J0cy5maW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzID0gZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcztcbmV4cG9ydHMuZ2V0RmFtaWx5QnlJRCA9IGdldEZhbWlseUJ5SUQ7XG5leHBvcnRzLmdldEZhbWlseUJ5VHlwZSA9IGdldEZhbWlseUJ5VHlwZTtcbmV4cG9ydHMuaGFzVW5yZWNvdmVyYWJsZUVycm9ycyA9IGhhc1VucmVjb3ZlcmFibGVFcnJvcnM7XG5leHBvcnRzLmluamVjdEludG9HbG9iYWxIb29rID0gaW5qZWN0SW50b0dsb2JhbEhvb2s7XG5leHBvcnRzLmlzTGlrZWx5Q29tcG9uZW50VHlwZSA9IGlzTGlrZWx5Q29tcG9uZW50VHlwZTtcbmV4cG9ydHMucGVyZm9ybVJlYWN0UmVmcmVzaCA9IHBlcmZvcm1SZWFjdFJlZnJlc2g7XG5leHBvcnRzLnJlZ2lzdGVyID0gcmVnaXN0ZXI7XG5leHBvcnRzLnNldFNpZ25hdHVyZSA9IHNldFNpZ25hdHVyZTtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzJyk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9