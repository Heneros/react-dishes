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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BuZXh0L3JlYWN0LXJlZnJlc2gtdXRpbHMvaW50ZXJuYWwvaGVscGVycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BuZXh0L3JlYWN0LXJlZnJlc2gtdXRpbHMvcnVudGltZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZnJlc2gvcnVudGltZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHNFQUF1QjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsVUFBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DOzs7Ozs7Ozs7OztBQzlJYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELGtDQUFrQyxtQkFBTyxDQUFDLHNFQUF1QjtBQUNqRSxrQ0FBa0MsbUJBQU8sQ0FBQyx3RkFBb0I7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQzs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYixJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvRUFBb0U7QUFDcEU7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBOztBQUVBLGtEQUFrRDtBQUNsRDs7QUFFQSx3QkFBd0I7O0FBRXhCO0FBQ0EsOEJBQThCOztBQUU5Qiw2QkFBNkI7O0FBRTdCLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsa0JBQWtCO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1DQUFtQztBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0M7QUFDcEM7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLHdDQUF3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNkRBQTZEO0FBQzdELCtFQUErRTtBQUMvRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsb0NBQW9DO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOzs7QUFHYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUEsV0FBVzs7O0FBR1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEI7QUFDNUIsc0NBQXNDO0FBQ3RDLDJDQUEyQztBQUMzQyxpQ0FBaUM7QUFDakMscUJBQXFCO0FBQ3JCLHVCQUF1QjtBQUN2Qiw4QkFBOEI7QUFDOUIsNEJBQTRCO0FBQzVCLDZCQUE2QjtBQUM3QiwyQkFBMkI7QUFDM0IsZ0JBQWdCO0FBQ2hCLG9CQUFvQjtBQUNwQixHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ3hyQmE7O0FBRWIsSUFBSSxLQUFxQyxFQUFFLEVBRTFDO0FBQ0QsRUFBRSwrSkFBc0U7QUFDeEUiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1yZWZyZXNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIE1JVCBMaWNlbnNlXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiBTT0ZUV0FSRS5cbiAqL1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gVGhpcyBmaWxlIGlzIGNvcGllZCBmcm9tIHRoZSBNZXRybyBKYXZhU2NyaXB0IGJ1bmRsZXIsIHdpdGggbWlub3IgdHdlYWtzIGZvclxuLy8gd2VicGFjayA0IGNvbXBhdGliaWxpdHkuXG4vL1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL21ldHJvL2Jsb2IvZDZiOTY4NWM3MzBkMGQ2MzU3N2RiNDBmNDEzNjkxNTdmMjhkZmEzYS9wYWNrYWdlcy9tZXRyby9zcmMvbGliL3BvbHlmaWxscy9yZXF1aXJlLmpzXG5jb25zdCBydW50aW1lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7XG5mdW5jdGlvbiBpc1NhZmVFeHBvcnQoa2V5KSB7XG4gICAgcmV0dXJuIChrZXkgPT09ICdfX2VzTW9kdWxlJyB8fFxuICAgICAgICBrZXkgPT09ICdfX05fU1NHJyB8fFxuICAgICAgICBrZXkgPT09ICdfX05fU1NQJyB8fFxuICAgICAgICAvLyBUT0RPOiByZW1vdmUgdGhpcyBrZXkgZnJvbSBwYWdlIGNvbmZpZyBpbnN0ZWFkIG9mIGFsbG93IGxpc3RpbmcgaXRcbiAgICAgICAga2V5ID09PSAnY29uZmlnJyk7XG59XG5mdW5jdGlvbiByZWdpc3RlckV4cG9ydHNGb3JSZWFjdFJlZnJlc2gobW9kdWxlRXhwb3J0cywgbW9kdWxlSUQpIHtcbiAgICBydW50aW1lXzEuZGVmYXVsdC5yZWdpc3Rlcihtb2R1bGVFeHBvcnRzLCBtb2R1bGVJRCArICcgJWV4cG9ydHMlJyk7XG4gICAgaWYgKG1vZHVsZUV4cG9ydHMgPT0gbnVsbCB8fCB0eXBlb2YgbW9kdWxlRXhwb3J0cyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgLy8gRXhpdCBpZiB3ZSBjYW4ndCBpdGVyYXRlIG92ZXIgZXhwb3J0cy5cbiAgICAgICAgLy8gKFRoaXMgaXMgaW1wb3J0YW50IGZvciBsZWdhY3kgZW52aXJvbm1lbnRzLilcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKHZhciBrZXkgaW4gbW9kdWxlRXhwb3J0cykge1xuICAgICAgICBpZiAoaXNTYWZlRXhwb3J0KGtleSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBleHBvcnRWYWx1ZSA9IG1vZHVsZUV4cG9ydHNba2V5XTtcbiAgICAgICAgdmFyIHR5cGVJRCA9IG1vZHVsZUlEICsgJyAlZXhwb3J0cyUgJyArIGtleTtcbiAgICAgICAgcnVudGltZV8xLmRlZmF1bHQucmVnaXN0ZXIoZXhwb3J0VmFsdWUsIHR5cGVJRCk7XG4gICAgfVxufVxuZnVuY3Rpb24gaXNSZWFjdFJlZnJlc2hCb3VuZGFyeShtb2R1bGVFeHBvcnRzKSB7XG4gICAgaWYgKHJ1bnRpbWVfMS5kZWZhdWx0LmlzTGlrZWx5Q29tcG9uZW50VHlwZShtb2R1bGVFeHBvcnRzKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKG1vZHVsZUV4cG9ydHMgPT0gbnVsbCB8fCB0eXBlb2YgbW9kdWxlRXhwb3J0cyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgLy8gRXhpdCBpZiB3ZSBjYW4ndCBpdGVyYXRlIG92ZXIgZXhwb3J0cy5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgaGFzRXhwb3J0cyA9IGZhbHNlO1xuICAgIHZhciBhcmVBbGxFeHBvcnRzQ29tcG9uZW50cyA9IHRydWU7XG4gICAgZm9yICh2YXIga2V5IGluIG1vZHVsZUV4cG9ydHMpIHtcbiAgICAgICAgaGFzRXhwb3J0cyA9IHRydWU7XG4gICAgICAgIGlmIChpc1NhZmVFeHBvcnQoa2V5KSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGV4cG9ydFZhbHVlID0gbW9kdWxlRXhwb3J0c1trZXldO1xuICAgICAgICBpZiAoIXJ1bnRpbWVfMS5kZWZhdWx0LmlzTGlrZWx5Q29tcG9uZW50VHlwZShleHBvcnRWYWx1ZSkpIHtcbiAgICAgICAgICAgIGFyZUFsbEV4cG9ydHNDb21wb25lbnRzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGhhc0V4cG9ydHMgJiYgYXJlQWxsRXhwb3J0c0NvbXBvbmVudHM7XG59XG5mdW5jdGlvbiBzaG91bGRJbnZhbGlkYXRlUmVhY3RSZWZyZXNoQm91bmRhcnkocHJldkV4cG9ydHMsIG5leHRFeHBvcnRzKSB7XG4gICAgdmFyIHByZXZTaWduYXR1cmUgPSBnZXRSZWZyZXNoQm91bmRhcnlTaWduYXR1cmUocHJldkV4cG9ydHMpO1xuICAgIHZhciBuZXh0U2lnbmF0dXJlID0gZ2V0UmVmcmVzaEJvdW5kYXJ5U2lnbmF0dXJlKG5leHRFeHBvcnRzKTtcbiAgICBpZiAocHJldlNpZ25hdHVyZS5sZW5ndGggIT09IG5leHRTaWduYXR1cmUubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5leHRTaWduYXR1cmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHByZXZTaWduYXR1cmVbaV0gIT09IG5leHRTaWduYXR1cmVbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGdldFJlZnJlc2hCb3VuZGFyeVNpZ25hdHVyZShtb2R1bGVFeHBvcnRzKSB7XG4gICAgdmFyIHNpZ25hdHVyZSA9IFtdO1xuICAgIHNpZ25hdHVyZS5wdXNoKHJ1bnRpbWVfMS5kZWZhdWx0LmdldEZhbWlseUJ5VHlwZShtb2R1bGVFeHBvcnRzKSk7XG4gICAgaWYgKG1vZHVsZUV4cG9ydHMgPT0gbnVsbCB8fCB0eXBlb2YgbW9kdWxlRXhwb3J0cyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgLy8gRXhpdCBpZiB3ZSBjYW4ndCBpdGVyYXRlIG92ZXIgZXhwb3J0cy5cbiAgICAgICAgLy8gKFRoaXMgaXMgaW1wb3J0YW50IGZvciBsZWdhY3kgZW52aXJvbm1lbnRzLilcbiAgICAgICAgcmV0dXJuIHNpZ25hdHVyZTtcbiAgICB9XG4gICAgZm9yICh2YXIga2V5IGluIG1vZHVsZUV4cG9ydHMpIHtcbiAgICAgICAgaWYgKGlzU2FmZUV4cG9ydChrZXkpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXhwb3J0VmFsdWUgPSBtb2R1bGVFeHBvcnRzW2tleV07XG4gICAgICAgIHNpZ25hdHVyZS5wdXNoKGtleSk7XG4gICAgICAgIHNpZ25hdHVyZS5wdXNoKHJ1bnRpbWVfMS5kZWZhdWx0LmdldEZhbWlseUJ5VHlwZShleHBvcnRWYWx1ZSkpO1xuICAgIH1cbiAgICByZXR1cm4gc2lnbmF0dXJlO1xufVxudmFyIGlzVXBkYXRlU2NoZWR1bGVkID0gZmFsc2U7XG5mdW5jdGlvbiBzY2hlZHVsZVVwZGF0ZSgpIHtcbiAgICBpZiAoaXNVcGRhdGVTY2hlZHVsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjYW5BcHBseVVwZGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIG1vZHVsZS5ob3Quc3RhdHVzKCkgPT09ICdpZGxlJztcbiAgICB9XG4gICAgaXNVcGRhdGVTY2hlZHVsZWQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpc1VwZGF0ZVNjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICAvLyBPbmx5IHRyaWdnZXIgcmVmcmVzaCBpZiB0aGUgd2VicGFjayBITVIgc3RhdGUgaXMgaWRsZVxuICAgICAgICBpZiAoY2FuQXBwbHlVcGRhdGUoKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBydW50aW1lXzEuZGVmYXVsdC5wZXJmb3JtUmVhY3RSZWZyZXNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdXYXJuaW5nOiBGYWlsZWQgdG8gcmUtcmVuZGVyLiBXZSB3aWxsIHJldHJ5IG9uIHRoZSBuZXh0IEZhc3QgUmVmcmVzaCBldmVudC5cXG4nICtcbiAgICAgICAgICAgICAgICAgICAgZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2NoZWR1bGVVcGRhdGUoKTtcbiAgICB9LCAzMCk7XG59XG4vLyBOZWVkcyB0byBiZSBjb21wYXRpYmxlIHdpdGggSUUxMVxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIHJlZ2lzdGVyRXhwb3J0c0ZvclJlYWN0UmVmcmVzaDogcmVnaXN0ZXJFeHBvcnRzRm9yUmVhY3RSZWZyZXNoLFxuICAgIGlzUmVhY3RSZWZyZXNoQm91bmRhcnk6IGlzUmVhY3RSZWZyZXNoQm91bmRhcnksXG4gICAgc2hvdWxkSW52YWxpZGF0ZVJlYWN0UmVmcmVzaEJvdW5kYXJ5OiBzaG91bGRJbnZhbGlkYXRlUmVhY3RSZWZyZXNoQm91bmRhcnksXG4gICAgZ2V0UmVmcmVzaEJvdW5kYXJ5U2lnbmF0dXJlOiBnZXRSZWZyZXNoQm91bmRhcnlTaWduYXR1cmUsXG4gICAgc2NoZWR1bGVVcGRhdGU6IHNjaGVkdWxlVXBkYXRlLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhlbHBlcnMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBydW50aW1lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7XG5jb25zdCBoZWxwZXJzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vaW50ZXJuYWwvaGVscGVyc1wiKSk7XG4vLyBIb29rIGludG8gUmVhY3RET00gaW5pdGlhbGl6YXRpb25cbnJ1bnRpbWVfMS5kZWZhdWx0LmluamVjdEludG9HbG9iYWxIb29rKHNlbGYpO1xuLy8gUmVnaXN0ZXIgZ2xvYmFsIGhlbHBlcnNcbnNlbGYuJFJlZnJlc2hIZWxwZXJzJCA9IGhlbHBlcnNfMS5kZWZhdWx0O1xuLy8gUmVnaXN0ZXIgYSBoZWxwZXIgZm9yIG1vZHVsZSBleGVjdXRpb24gaW50ZXJjZXB0aW9uXG5zZWxmLiRSZWZyZXNoSW50ZXJjZXB0TW9kdWxlRXhlY3V0aW9uJCA9IGZ1bmN0aW9uICh3ZWJwYWNrTW9kdWxlSWQpIHtcbiAgICB2YXIgcHJldlJlZnJlc2hSZWcgPSBzZWxmLiRSZWZyZXNoUmVnJDtcbiAgICB2YXIgcHJldlJlZnJlc2hTaWcgPSBzZWxmLiRSZWZyZXNoU2lnJDtcbiAgICBzZWxmLiRSZWZyZXNoUmVnJCA9IGZ1bmN0aW9uICh0eXBlLCBpZCkge1xuICAgICAgICBydW50aW1lXzEuZGVmYXVsdC5yZWdpc3Rlcih0eXBlLCB3ZWJwYWNrTW9kdWxlSWQgKyAnICcgKyBpZCk7XG4gICAgfTtcbiAgICBzZWxmLiRSZWZyZXNoU2lnJCA9IHJ1bnRpbWVfMS5kZWZhdWx0LmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtO1xuICAgIC8vIE1vZGVsZWQgYWZ0ZXIgYHVzZUVmZmVjdGAgY2xlYW51cCBwYXR0ZXJuOlxuICAgIC8vIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9ob29rcy1lZmZlY3QuaHRtbCNlZmZlY3RzLXdpdGgtY2xlYW51cFxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYuJFJlZnJlc2hSZWckID0gcHJldlJlZnJlc2hSZWc7XG4gICAgICAgIHNlbGYuJFJlZnJlc2hTaWckID0gcHJldlJlZnJlc2hTaWc7XG4gICAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ydW50aW1lLmpzLm1hcCIsIi8qKiBAbGljZW5zZSBSZWFjdCB2dW5kZWZpbmVkXG4gKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcbnZhciBSRUFDVF9DQUNIRV9UWVBFID0gMHhlYWU0O1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBSRUFDVF9GUkFHTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbiAgUkVBQ1RfQ0FDSEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY2FjaGUnKTtcbn1cblxudmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDsgLy8gV2UgbmV2ZXIgcmVtb3ZlIHRoZXNlIGFzc29jaWF0aW9ucy5cbi8vIEl0J3MgT0sgdG8gcmVmZXJlbmNlIGZhbWlsaWVzLCBidXQgdXNlIFdlYWtNYXAvU2V0IGZvciB0eXBlcy5cblxudmFyIGFsbEZhbWlsaWVzQnlJRCA9IG5ldyBNYXAoKTtcbnZhciBhbGxGYW1pbGllc0J5VHlwZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbnZhciBhbGxTaWduYXR1cmVzQnlUeXBlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpOyAvLyBUaGlzIFdlYWtNYXAgaXMgcmVhZCBieSBSZWFjdCwgc28gd2Ugb25seSBwdXQgZmFtaWxpZXNcbi8vIHRoYXQgaGF2ZSBhY3R1YWxseSBiZWVuIGVkaXRlZCBoZXJlLiBUaGlzIGtlZXBzIGNoZWNrcyBmYXN0LlxuLy8gJEZsb3dJc3N1ZVxuXG52YXIgdXBkYXRlZEZhbWlsaWVzQnlUeXBlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpOyAvLyBUaGlzIGlzIGNsZWFyZWQgb24gZXZlcnkgcGVyZm9ybVJlYWN0UmVmcmVzaCgpIGNhbGwuXG4vLyBJdCBpcyBhbiBhcnJheSBvZiBbRmFtaWx5LCBOZXh0VHlwZV0gdHVwbGVzLlxuXG52YXIgcGVuZGluZ1VwZGF0ZXMgPSBbXTsgLy8gVGhpcyBpcyBpbmplY3RlZCBieSB0aGUgcmVuZGVyZXIgdmlhIERldlRvb2xzIGdsb2JhbCBob29rLlxuXG52YXIgaGVscGVyc0J5UmVuZGVyZXJJRCA9IG5ldyBNYXAoKTtcbnZhciBoZWxwZXJzQnlSb290ID0gbmV3IE1hcCgpOyAvLyBXZSBrZWVwIHRyYWNrIG9mIG1vdW50ZWQgcm9vdHMgc28gd2UgY2FuIHNjaGVkdWxlIHVwZGF0ZXMuXG5cbnZhciBtb3VudGVkUm9vdHMgPSBuZXcgU2V0KCk7IC8vIElmIGEgcm9vdCBjYXB0dXJlcyBhbiBlcnJvciwgd2UgcmVtZW1iZXIgaXQgc28gd2UgY2FuIHJldHJ5IG9uIGVkaXQuXG5cbnZhciBmYWlsZWRSb290cyA9IG5ldyBTZXQoKTsgLy8gSW4gZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBXZWFrTWFwLCB3ZSBhbHNvIHJlbWVtYmVyIHRoZSBsYXN0IGVsZW1lbnQgZm9yIGV2ZXJ5IHJvb3QuXG4vLyBJdCBuZWVkcyB0byBiZSB3ZWFrIGJlY2F1c2Ugd2UgZG8gdGhpcyBldmVuIGZvciByb290cyB0aGF0IGZhaWxlZCB0byBtb3VudC5cbi8vIElmIHRoZXJlIGlzIG5vIFdlYWtNYXAsIHdlIHdvbid0IGF0dGVtcHQgdG8gZG8gcmV0cnlpbmcuXG4vLyAkRmxvd0lzc3VlXG5cbnZhciByb290RWxlbWVudHMgPSAvLyAkRmxvd0lzc3VlXG50eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IG5ldyBXZWFrTWFwKCkgOiBudWxsO1xudmFyIGlzUGVyZm9ybWluZ1JlZnJlc2ggPSBmYWxzZTtcblxuZnVuY3Rpb24gY29tcHV0ZUZ1bGxLZXkoc2lnbmF0dXJlKSB7XG4gIGlmIChzaWduYXR1cmUuZnVsbEtleSAhPT0gbnVsbCkge1xuICAgIHJldHVybiBzaWduYXR1cmUuZnVsbEtleTtcbiAgfVxuXG4gIHZhciBmdWxsS2V5ID0gc2lnbmF0dXJlLm93bktleTtcbiAgdmFyIGhvb2tzO1xuXG4gIHRyeSB7XG4gICAgaG9va3MgPSBzaWduYXR1cmUuZ2V0Q3VzdG9tSG9va3MoKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gVGhpcyBjYW4gaGFwcGVuIGluIGFuIGVkZ2UgY2FzZSwgZS5nLiBpZiBleHByZXNzaW9uIGxpa2UgRm9vLnVzZVNvbWV0aGluZ1xuICAgIC8vIGRlcGVuZHMgb24gRm9vIHdoaWNoIGlzIGxhemlseSBpbml0aWFsaXplZCBkdXJpbmcgcmVuZGVyaW5nLlxuICAgIC8vIEluIHRoYXQgY2FzZSBqdXN0IGFzc3VtZSB3ZSdsbCBoYXZlIHRvIHJlbW91bnQuXG4gICAgc2lnbmF0dXJlLmZvcmNlUmVzZXQgPSB0cnVlO1xuICAgIHNpZ25hdHVyZS5mdWxsS2V5ID0gZnVsbEtleTtcbiAgICByZXR1cm4gZnVsbEtleTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaG9vayA9IGhvb2tzW2ldO1xuXG4gICAgaWYgKHR5cGVvZiBob29rICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBTb21ldGhpbmcncyB3cm9uZy4gQXNzdW1lIHdlIG5lZWQgdG8gcmVtb3VudC5cbiAgICAgIHNpZ25hdHVyZS5mb3JjZVJlc2V0ID0gdHJ1ZTtcbiAgICAgIHNpZ25hdHVyZS5mdWxsS2V5ID0gZnVsbEtleTtcbiAgICAgIHJldHVybiBmdWxsS2V5O1xuICAgIH1cblxuICAgIHZhciBuZXN0ZWRIb29rU2lnbmF0dXJlID0gYWxsU2lnbmF0dXJlc0J5VHlwZS5nZXQoaG9vayk7XG5cbiAgICBpZiAobmVzdGVkSG9va1NpZ25hdHVyZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBObyBzaWduYXR1cmUgbWVhbnMgSG9vayB3YXNuJ3QgaW4gdGhlIHNvdXJjZSBjb2RlLCBlLmcuIGluIGEgbGlicmFyeS5cbiAgICAgIC8vIFdlJ2xsIHNraXAgaXQgYmVjYXVzZSB3ZSBjYW4gYXNzdW1lIGl0IHdvbid0IGNoYW5nZSBkdXJpbmcgdGhpcyBzZXNzaW9uLlxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIG5lc3RlZEhvb2tLZXkgPSBjb21wdXRlRnVsbEtleShuZXN0ZWRIb29rU2lnbmF0dXJlKTtcblxuICAgIGlmIChuZXN0ZWRIb29rU2lnbmF0dXJlLmZvcmNlUmVzZXQpIHtcbiAgICAgIHNpZ25hdHVyZS5mb3JjZVJlc2V0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdWxsS2V5ICs9ICdcXG4tLS1cXG4nICsgbmVzdGVkSG9va0tleTtcbiAgfVxuXG4gIHNpZ25hdHVyZS5mdWxsS2V5ID0gZnVsbEtleTtcbiAgcmV0dXJuIGZ1bGxLZXk7XG59XG5cbmZ1bmN0aW9uIGhhdmVFcXVhbFNpZ25hdHVyZXMocHJldlR5cGUsIG5leHRUeXBlKSB7XG4gIHZhciBwcmV2U2lnbmF0dXJlID0gYWxsU2lnbmF0dXJlc0J5VHlwZS5nZXQocHJldlR5cGUpO1xuICB2YXIgbmV4dFNpZ25hdHVyZSA9IGFsbFNpZ25hdHVyZXNCeVR5cGUuZ2V0KG5leHRUeXBlKTtcblxuICBpZiAocHJldlNpZ25hdHVyZSA9PT0gdW5kZWZpbmVkICYmIG5leHRTaWduYXR1cmUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHByZXZTaWduYXR1cmUgPT09IHVuZGVmaW5lZCB8fCBuZXh0U2lnbmF0dXJlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoY29tcHV0ZUZ1bGxLZXkocHJldlNpZ25hdHVyZSkgIT09IGNvbXB1dGVGdWxsS2V5KG5leHRTaWduYXR1cmUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKG5leHRTaWduYXR1cmUuZm9yY2VSZXNldCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBpc1JlYWN0Q2xhc3ModHlwZSkge1xuICByZXR1cm4gdHlwZS5wcm90b3R5cGUgJiYgdHlwZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudDtcbn1cblxuZnVuY3Rpb24gY2FuUHJlc2VydmVTdGF0ZUJldHdlZW4ocHJldlR5cGUsIG5leHRUeXBlKSB7XG4gIGlmIChpc1JlYWN0Q2xhc3MocHJldlR5cGUpIHx8IGlzUmVhY3RDbGFzcyhuZXh0VHlwZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoaGF2ZUVxdWFsU2lnbmF0dXJlcyhwcmV2VHlwZSwgbmV4dFR5cGUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVGYW1pbHkodHlwZSkge1xuICAvLyBPbmx5IGNoZWNrIHVwZGF0ZWQgdHlwZXMgdG8ga2VlcCBsb29rdXBzIGZhc3QuXG4gIHJldHVybiB1cGRhdGVkRmFtaWxpZXNCeVR5cGUuZ2V0KHR5cGUpO1xufSAvLyBJZiB3ZSBkaWRuJ3QgY2FyZSBhYm91dCBJRTExLCB3ZSBjb3VsZCB1c2UgbmV3IE1hcC9TZXQoaXRlcmFibGUpLlxuXG5cbmZ1bmN0aW9uIGNsb25lTWFwKG1hcCkge1xuICB2YXIgY2xvbmUgPSBuZXcgTWFwKCk7XG4gIG1hcC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgY2xvbmUuc2V0KGtleSwgdmFsdWUpO1xuICB9KTtcbiAgcmV0dXJuIGNsb25lO1xufVxuXG5mdW5jdGlvbiBjbG9uZVNldChzZXQpIHtcbiAgdmFyIGNsb25lID0gbmV3IFNldCgpO1xuICBzZXQuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBjbG9uZS5hZGQodmFsdWUpO1xuICB9KTtcbiAgcmV0dXJuIGNsb25lO1xufSAvLyBUaGlzIGlzIGEgc2FmZXR5IG1lY2hhbmlzbSB0byBwcm90ZWN0IGFnYWluc3Qgcm9ndWUgZ2V0dGVycyBhbmQgUHJveGllcy5cblxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIG9iamVjdFtwcm9wZXJ0eV07XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIEludGVudGlvbmFsbHkgaWdub3JlLlxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGVyZm9ybVJlYWN0UmVmcmVzaCgpIHtcblxuICBpZiAocGVuZGluZ1VwZGF0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoaXNQZXJmb3JtaW5nUmVmcmVzaCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaXNQZXJmb3JtaW5nUmVmcmVzaCA9IHRydWU7XG5cbiAgdHJ5IHtcbiAgICB2YXIgc3RhbGVGYW1pbGllcyA9IG5ldyBTZXQoKTtcbiAgICB2YXIgdXBkYXRlZEZhbWlsaWVzID0gbmV3IFNldCgpO1xuICAgIHZhciB1cGRhdGVzID0gcGVuZGluZ1VwZGF0ZXM7XG4gICAgcGVuZGluZ1VwZGF0ZXMgPSBbXTtcbiAgICB1cGRhdGVzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBmYW1pbHkgPSBfcmVmWzBdLFxuICAgICAgICAgIG5leHRUeXBlID0gX3JlZlsxXTtcbiAgICAgIC8vIE5vdyB0aGF0IHdlIGdvdCBhIHJlYWwgZWRpdCwgd2UgY2FuIGNyZWF0ZSBhc3NvY2lhdGlvbnNcbiAgICAgIC8vIHRoYXQgd2lsbCBiZSByZWFkIGJ5IHRoZSBSZWFjdCByZWNvbmNpbGVyLlxuICAgICAgdmFyIHByZXZUeXBlID0gZmFtaWx5LmN1cnJlbnQ7XG4gICAgICB1cGRhdGVkRmFtaWxpZXNCeVR5cGUuc2V0KHByZXZUeXBlLCBmYW1pbHkpO1xuICAgICAgdXBkYXRlZEZhbWlsaWVzQnlUeXBlLnNldChuZXh0VHlwZSwgZmFtaWx5KTtcbiAgICAgIGZhbWlseS5jdXJyZW50ID0gbmV4dFR5cGU7IC8vIERldGVybWluZSB3aGV0aGVyIHRoaXMgc2hvdWxkIGJlIGEgcmUtcmVuZGVyIG9yIGEgcmUtbW91bnQuXG5cbiAgICAgIGlmIChjYW5QcmVzZXJ2ZVN0YXRlQmV0d2VlbihwcmV2VHlwZSwgbmV4dFR5cGUpKSB7XG4gICAgICAgIHVwZGF0ZWRGYW1pbGllcy5hZGQoZmFtaWx5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YWxlRmFtaWxpZXMuYWRkKGZhbWlseSk7XG4gICAgICB9XG4gICAgfSk7IC8vIFRPRE86IHJlbmFtZSB0aGVzZSBmaWVsZHMgdG8gc29tZXRoaW5nIG1vcmUgbWVhbmluZ2Z1bC5cblxuICAgIHZhciB1cGRhdGUgPSB7XG4gICAgICB1cGRhdGVkRmFtaWxpZXM6IHVwZGF0ZWRGYW1pbGllcyxcbiAgICAgIC8vIEZhbWlsaWVzIHRoYXQgd2lsbCByZS1yZW5kZXIgcHJlc2VydmluZyBzdGF0ZVxuICAgICAgc3RhbGVGYW1pbGllczogc3RhbGVGYW1pbGllcyAvLyBGYW1pbGllcyB0aGF0IHdpbGwgYmUgcmVtb3VudGVkXG5cbiAgICB9O1xuICAgIGhlbHBlcnNCeVJlbmRlcmVySUQuZm9yRWFjaChmdW5jdGlvbiAoaGVscGVycykge1xuICAgICAgLy8gRXZlbiBpZiB0aGVyZSBhcmUgbm8gcm9vdHMsIHNldCB0aGUgaGFuZGxlciBvbiBmaXJzdCB1cGRhdGUuXG4gICAgICAvLyBUaGlzIGVuc3VyZXMgdGhhdCBpZiAqbmV3KiByb290cyBhcmUgbW91bnRlZCwgdGhleSdsbCB1c2UgdGhlIHJlc29sdmUgaGFuZGxlci5cbiAgICAgIGhlbHBlcnMuc2V0UmVmcmVzaEhhbmRsZXIocmVzb2x2ZUZhbWlseSk7XG4gICAgfSk7XG4gICAgdmFyIGRpZEVycm9yID0gZmFsc2U7XG4gICAgdmFyIGZpcnN0RXJyb3IgPSBudWxsOyAvLyBXZSBzbmFwc2hvdCBtYXBzIGFuZCBzZXRzIHRoYXQgYXJlIG11dGF0ZWQgZHVyaW5nIGNvbW1pdHMuXG4gICAgLy8gSWYgd2UgZG9uJ3QgZG8gdGhpcywgdGhlcmUgaXMgYSByaXNrIHRoZXkgd2lsbCBiZSBtdXRhdGVkIHdoaWxlXG4gICAgLy8gd2UgaXRlcmF0ZSBvdmVyIHRoZW0uIEZvciBleGFtcGxlLCB0cnlpbmcgdG8gcmVjb3ZlciBhIGZhaWxlZCByb290XG4gICAgLy8gbWF5IGNhdXNlIGFub3RoZXIgcm9vdCB0byBiZSBhZGRlZCB0byB0aGUgZmFpbGVkIGxpc3QgLS0gYW4gaW5maW5pdGUgbG9vcC5cblxuICAgIHZhciBmYWlsZWRSb290c1NuYXBzaG90ID0gY2xvbmVTZXQoZmFpbGVkUm9vdHMpO1xuICAgIHZhciBtb3VudGVkUm9vdHNTbmFwc2hvdCA9IGNsb25lU2V0KG1vdW50ZWRSb290cyk7XG4gICAgdmFyIGhlbHBlcnNCeVJvb3RTbmFwc2hvdCA9IGNsb25lTWFwKGhlbHBlcnNCeVJvb3QpO1xuICAgIGZhaWxlZFJvb3RzU25hcHNob3QuZm9yRWFjaChmdW5jdGlvbiAocm9vdCkge1xuICAgICAgdmFyIGhlbHBlcnMgPSBoZWxwZXJzQnlSb290U25hcHNob3QuZ2V0KHJvb3QpO1xuXG4gICAgICBpZiAoaGVscGVycyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghZmFpbGVkUm9vdHMuaGFzKHJvb3QpKSB7Ly8gTm8gbG9uZ2VyIGZhaWxlZC5cbiAgICAgIH1cblxuICAgICAgaWYgKHJvb3RFbGVtZW50cyA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghcm9vdEVsZW1lbnRzLmhhcyhyb290KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBlbGVtZW50ID0gcm9vdEVsZW1lbnRzLmdldChyb290KTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgaGVscGVycy5zY2hlZHVsZVJvb3Qocm9vdCwgZWxlbWVudCk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKCFkaWRFcnJvcikge1xuICAgICAgICAgIGRpZEVycm9yID0gdHJ1ZTtcbiAgICAgICAgICBmaXJzdEVycm9yID0gZXJyO1xuICAgICAgICB9IC8vIEtlZXAgdHJ5aW5nIG90aGVyIHJvb3RzLlxuXG4gICAgICB9XG4gICAgfSk7XG4gICAgbW91bnRlZFJvb3RzU25hcHNob3QuZm9yRWFjaChmdW5jdGlvbiAocm9vdCkge1xuICAgICAgdmFyIGhlbHBlcnMgPSBoZWxwZXJzQnlSb290U25hcHNob3QuZ2V0KHJvb3QpO1xuXG4gICAgICBpZiAoaGVscGVycyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghbW91bnRlZFJvb3RzLmhhcyhyb290KSkgey8vIE5vIGxvbmdlciBtb3VudGVkLlxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICBoZWxwZXJzLnNjaGVkdWxlUmVmcmVzaChyb290LCB1cGRhdGUpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmICghZGlkRXJyb3IpIHtcbiAgICAgICAgICBkaWRFcnJvciA9IHRydWU7XG4gICAgICAgICAgZmlyc3RFcnJvciA9IGVycjtcbiAgICAgICAgfSAvLyBLZWVwIHRyeWluZyBvdGhlciByb290cy5cblxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGRpZEVycm9yKSB7XG4gICAgICB0aHJvdyBmaXJzdEVycm9yO1xuICAgIH1cblxuICAgIHJldHVybiB1cGRhdGU7XG4gIH0gZmluYWxseSB7XG4gICAgaXNQZXJmb3JtaW5nUmVmcmVzaCA9IGZhbHNlO1xuICB9XG59XG5mdW5jdGlvbiByZWdpc3Rlcih0eXBlLCBpZCkge1xuICB7XG4gICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBUaGlzIGNhbiBoYXBwZW4gaW4gYW4gZWRnZSBjYXNlLCBlLmcuIGlmIHdlIHJlZ2lzdGVyXG4gICAgLy8gcmV0dXJuIHZhbHVlIG9mIGEgSE9DIGJ1dCBpdCByZXR1cm5zIGEgY2FjaGVkIGNvbXBvbmVudC5cbiAgICAvLyBJZ25vcmUgYW55dGhpbmcgYnV0IHRoZSBmaXJzdCByZWdpc3RyYXRpb24gZm9yIGVhY2ggdHlwZS5cblxuXG4gICAgaWYgKGFsbEZhbWlsaWVzQnlUeXBlLmhhcyh0eXBlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gQ3JlYXRlIGZhbWlseSBvciByZW1lbWJlciB0byB1cGRhdGUgaXQuXG4gICAgLy8gTm9uZSBvZiB0aGlzIGJvb2trZWVwaW5nIGFmZmVjdHMgcmVjb25jaWxpYXRpb25cbiAgICAvLyB1bnRpbCB0aGUgZmlyc3QgcGVyZm9ybVJlYWN0UmVmcmVzaCgpIGNhbGwgYWJvdmUuXG5cblxuICAgIHZhciBmYW1pbHkgPSBhbGxGYW1pbGllc0J5SUQuZ2V0KGlkKTtcblxuICAgIGlmIChmYW1pbHkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZmFtaWx5ID0ge1xuICAgICAgICBjdXJyZW50OiB0eXBlXG4gICAgICB9O1xuICAgICAgYWxsRmFtaWxpZXNCeUlELnNldChpZCwgZmFtaWx5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGVuZGluZ1VwZGF0ZXMucHVzaChbZmFtaWx5LCB0eXBlXSk7XG4gICAgfVxuXG4gICAgYWxsRmFtaWxpZXNCeVR5cGUuc2V0KHR5cGUsIGZhbWlseSk7IC8vIFZpc2l0IGlubmVyIHR5cGVzIGJlY2F1c2Ugd2UgbWlnaHQgbm90IGhhdmUgcmVnaXN0ZXJlZCB0aGVtLlxuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgICBzd2l0Y2ggKGdldFByb3BlcnR5KHR5cGUsICckJHR5cGVvZicpKSB7XG4gICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICByZWdpc3Rlcih0eXBlLnJlbmRlciwgaWQgKyAnJHJlbmRlcicpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgIHJlZ2lzdGVyKHR5cGUudHlwZSwgaWQgKyAnJHR5cGUnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHNldFNpZ25hdHVyZSh0eXBlLCBrZXkpIHtcbiAgdmFyIGZvcmNlUmVzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuICB2YXIgZ2V0Q3VzdG9tSG9va3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMyA/IGFyZ3VtZW50c1szXSA6IHVuZGVmaW5lZDtcblxuICB7XG4gICAgaWYgKCFhbGxTaWduYXR1cmVzQnlUeXBlLmhhcyh0eXBlKSkge1xuICAgICAgYWxsU2lnbmF0dXJlc0J5VHlwZS5zZXQodHlwZSwge1xuICAgICAgICBmb3JjZVJlc2V0OiBmb3JjZVJlc2V0LFxuICAgICAgICBvd25LZXk6IGtleSxcbiAgICAgICAgZnVsbEtleTogbnVsbCxcbiAgICAgICAgZ2V0Q3VzdG9tSG9va3M6IGdldEN1c3RvbUhvb2tzIHx8IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gLy8gVmlzaXQgaW5uZXIgdHlwZXMgYmVjYXVzZSB3ZSBtaWdodCBub3QgaGF2ZSBzaWduZWQgdGhlbS5cblxuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgICBzd2l0Y2ggKGdldFByb3BlcnR5KHR5cGUsICckJHR5cGVvZicpKSB7XG4gICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICBzZXRTaWduYXR1cmUodHlwZS5yZW5kZXIsIGtleSwgZm9yY2VSZXNldCwgZ2V0Q3VzdG9tSG9va3MpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgIHNldFNpZ25hdHVyZSh0eXBlLnR5cGUsIGtleSwgZm9yY2VSZXNldCwgZ2V0Q3VzdG9tSG9va3MpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSAvLyBUaGlzIGlzIGxhemlseSBjYWxsZWQgZHVyaW5nIGZpcnN0IHJlbmRlciBmb3IgYSB0eXBlLlxuLy8gSXQgY2FwdHVyZXMgSG9vayBsaXN0IGF0IHRoYXQgdGltZSBzbyBpbmxpbmUgcmVxdWlyZXMgZG9uJ3QgYnJlYWsgY29tcGFyaXNvbnMuXG5cbmZ1bmN0aW9uIGNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZSh0eXBlKSB7XG4gIHtcbiAgICB2YXIgc2lnbmF0dXJlID0gYWxsU2lnbmF0dXJlc0J5VHlwZS5nZXQodHlwZSk7XG5cbiAgICBpZiAoc2lnbmF0dXJlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbXB1dGVGdWxsS2V5KHNpZ25hdHVyZSk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBnZXRGYW1pbHlCeUlEKGlkKSB7XG4gIHtcbiAgICByZXR1cm4gYWxsRmFtaWxpZXNCeUlELmdldChpZCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldEZhbWlseUJ5VHlwZSh0eXBlKSB7XG4gIHtcbiAgICByZXR1cm4gYWxsRmFtaWxpZXNCeVR5cGUuZ2V0KHR5cGUpO1xuICB9XG59XG5mdW5jdGlvbiBmaW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzKGZhbWlsaWVzKSB7XG4gIHtcbiAgICB2YXIgYWZmZWN0ZWRJbnN0YW5jZXMgPSBuZXcgU2V0KCk7XG4gICAgbW91bnRlZFJvb3RzLmZvckVhY2goZnVuY3Rpb24gKHJvb3QpIHtcbiAgICAgIHZhciBoZWxwZXJzID0gaGVscGVyc0J5Um9vdC5nZXQocm9vdCk7XG5cbiAgICAgIGlmIChoZWxwZXJzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC4nKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGluc3RhbmNlc0ZvclJvb3QgPSBoZWxwZXJzLmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChyb290LCBmYW1pbGllcyk7XG4gICAgICBpbnN0YW5jZXNGb3JSb290LmZvckVhY2goZnVuY3Rpb24gKGluc3QpIHtcbiAgICAgICAgYWZmZWN0ZWRJbnN0YW5jZXMuYWRkKGluc3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFmZmVjdGVkSW5zdGFuY2VzO1xuICB9XG59XG5mdW5jdGlvbiBpbmplY3RJbnRvR2xvYmFsSG9vayhnbG9iYWxPYmplY3QpIHtcbiAge1xuICAgIC8vIEZvciBSZWFjdCBOYXRpdmUsIHRoZSBnbG9iYWwgaG9vayB3aWxsIGJlIHNldCB1cCBieSByZXF1aXJlKCdyZWFjdC1kZXZ0b29scy1jb3JlJykuXG4gICAgLy8gVGhhdCBjb2RlIHdpbGwgcnVuIGJlZm9yZSB1cy4gU28gd2UgbmVlZCB0byBtb25rZXlwYXRjaCBmdW5jdGlvbnMgb24gZXhpc3RpbmcgaG9vay5cbiAgICAvLyBGb3IgUmVhY3QgV2ViLCB0aGUgZ2xvYmFsIGhvb2sgd2lsbCBiZSBzZXQgdXAgYnkgdGhlIGV4dGVuc2lvbi5cbiAgICAvLyBUaGlzIHdpbGwgYWxzbyBydW4gYmVmb3JlIHVzLlxuICAgIHZhciBob29rID0gZ2xvYmFsT2JqZWN0Ll9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztcblxuICAgIGlmIChob29rID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEhvd2V2ZXIsIGlmIHRoZXJlIGlzIG5vIERldlRvb2xzIGV4dGVuc2lvbiwgd2UnbGwgbmVlZCB0byBzZXQgdXAgdGhlIGdsb2JhbCBob29rIG91cnNlbHZlcy5cbiAgICAgIC8vIE5vdGUgdGhhdCBpbiB0aGlzIGNhc2UgaXQncyBpbXBvcnRhbnQgdGhhdCByZW5kZXJlciBjb2RlIHJ1bnMgKmFmdGVyKiB0aGlzIG1ldGhvZCBjYWxsLlxuICAgICAgLy8gT3RoZXJ3aXNlLCB0aGUgcmVuZGVyZXIgd2lsbCB0aGluayB0aGF0IHRoZXJlIGlzIG5vIGdsb2JhbCBob29rLCBhbmQgd29uJ3QgZG8gdGhlIGluamVjdGlvbi5cbiAgICAgIHZhciBuZXh0SUQgPSAwO1xuICAgICAgZ2xvYmFsT2JqZWN0Ll9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyA9IGhvb2sgPSB7XG4gICAgICAgIHJlbmRlcmVyczogbmV3IE1hcCgpLFxuICAgICAgICBzdXBwb3J0c0ZpYmVyOiB0cnVlLFxuICAgICAgICBpbmplY3Q6IGZ1bmN0aW9uIChpbmplY3RlZCkge1xuICAgICAgICAgIHJldHVybiBuZXh0SUQrKztcbiAgICAgICAgfSxcbiAgICAgICAgb25TY2hlZHVsZUZpYmVyUm9vdDogZnVuY3Rpb24gKGlkLCByb290LCBjaGlsZHJlbikge30sXG4gICAgICAgIG9uQ29tbWl0RmliZXJSb290OiBmdW5jdGlvbiAoaWQsIHJvb3QsIG1heWJlUHJpb3JpdHlMZXZlbCwgZGlkRXJyb3IpIHt9LFxuICAgICAgICBvbkNvbW1pdEZpYmVyVW5tb3VudDogZnVuY3Rpb24gKCkge31cbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGhvb2suaXNEaXNhYmxlZCkge1xuICAgICAgLy8gVGhpcyBpc24ndCBhIHJlYWwgcHJvcGVydHkgb24gdGhlIGhvb2ssIGJ1dCBpdCBjYW4gYmUgc2V0IHRvIG9wdCBvdXRcbiAgICAgIC8vIG9mIERldlRvb2xzIGludGVncmF0aW9uIGFuZCBhc3NvY2lhdGVkIHdhcm5pbmdzIGFuZCBsb2dzLlxuICAgICAgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gJyArICdGYXN0IFJlZnJlc2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIHNoaW0gYW5kIHdpbGwgYmUgZGlzYWJsZWQuJyk7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBIZXJlLCB3ZSBqdXN0IHdhbnQgdG8gZ2V0IGEgcmVmZXJlbmNlIHRvIHNjaGVkdWxlUmVmcmVzaC5cblxuXG4gICAgdmFyIG9sZEluamVjdCA9IGhvb2suaW5qZWN0O1xuXG4gICAgaG9vay5pbmplY3QgPSBmdW5jdGlvbiAoaW5qZWN0ZWQpIHtcbiAgICAgIHZhciBpZCA9IG9sZEluamVjdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgICBpZiAodHlwZW9mIGluamVjdGVkLnNjaGVkdWxlUmVmcmVzaCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgaW5qZWN0ZWQuc2V0UmVmcmVzaEhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gVGhpcyB2ZXJzaW9uIHN1cHBvcnRzIFJlYWN0IFJlZnJlc2guXG4gICAgICAgIGhlbHBlcnNCeVJlbmRlcmVySUQuc2V0KGlkLCBpbmplY3RlZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpZDtcbiAgICB9OyAvLyBEbyB0aGUgc2FtZSBmb3IgYW55IGFscmVhZHkgaW5qZWN0ZWQgcm9vdHMuXG4gICAgLy8gVGhpcyBpcyB1c2VmdWwgaWYgUmVhY3RET00gaGFzIGFscmVhZHkgYmVlbiBpbml0aWFsaXplZC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE3NjI2XG5cblxuICAgIGhvb2sucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24gKGluamVjdGVkLCBpZCkge1xuICAgICAgaWYgKHR5cGVvZiBpbmplY3RlZC5zY2hlZHVsZVJlZnJlc2ggPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGluamVjdGVkLnNldFJlZnJlc2hIYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIFRoaXMgdmVyc2lvbiBzdXBwb3J0cyBSZWFjdCBSZWZyZXNoLlxuICAgICAgICBoZWxwZXJzQnlSZW5kZXJlcklELnNldChpZCwgaW5qZWN0ZWQpO1xuICAgICAgfVxuICAgIH0pOyAvLyBXZSBhbHNvIHdhbnQgdG8gdHJhY2sgY3VycmVudGx5IG1vdW50ZWQgcm9vdHMuXG5cbiAgICB2YXIgb2xkT25Db21taXRGaWJlclJvb3QgPSBob29rLm9uQ29tbWl0RmliZXJSb290O1xuXG4gICAgdmFyIG9sZE9uU2NoZWR1bGVGaWJlclJvb3QgPSBob29rLm9uU2NoZWR1bGVGaWJlclJvb3QgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICBob29rLm9uU2NoZWR1bGVGaWJlclJvb3QgPSBmdW5jdGlvbiAoaWQsIHJvb3QsIGNoaWxkcmVuKSB7XG4gICAgICBpZiAoIWlzUGVyZm9ybWluZ1JlZnJlc2gpIHtcbiAgICAgICAgLy8gSWYgaXQgd2FzIGludGVudGlvbmFsbHkgc2NoZWR1bGVkLCBkb24ndCBhdHRlbXB0IHRvIHJlc3RvcmUuXG4gICAgICAgIC8vIFRoaXMgaW5jbHVkZXMgaW50ZW50aW9uYWxseSBzY2hlZHVsZWQgdW5tb3VudHMuXG4gICAgICAgIGZhaWxlZFJvb3RzLmRlbGV0ZShyb290KTtcblxuICAgICAgICBpZiAocm9vdEVsZW1lbnRzICE9PSBudWxsKSB7XG4gICAgICAgICAgcm9vdEVsZW1lbnRzLnNldChyb290LCBjaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9sZE9uU2NoZWR1bGVGaWJlclJvb3QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgaG9vay5vbkNvbW1pdEZpYmVyUm9vdCA9IGZ1bmN0aW9uIChpZCwgcm9vdCwgbWF5YmVQcmlvcml0eUxldmVsLCBkaWRFcnJvcikge1xuICAgICAgdmFyIGhlbHBlcnMgPSBoZWxwZXJzQnlSZW5kZXJlcklELmdldChpZCk7XG5cbiAgICAgIGlmIChoZWxwZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaGVscGVyc0J5Um9vdC5zZXQocm9vdCwgaGVscGVycyk7XG4gICAgICAgIHZhciBjdXJyZW50ID0gcm9vdC5jdXJyZW50O1xuICAgICAgICB2YXIgYWx0ZXJuYXRlID0gY3VycmVudC5hbHRlcm5hdGU7IC8vIFdlIG5lZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhpcyByb290IGhhcyBqdXN0ICh1biltb3VudGVkLlxuICAgICAgICAvLyBUaGlzIGxvZ2ljIGlzIGNvcHktcGFzdGVkIGZyb20gc2ltaWxhciBsb2dpYyBpbiB0aGUgRGV2VG9vbHMgYmFja2VuZC5cbiAgICAgICAgLy8gSWYgdGhpcyBicmVha3Mgd2l0aCBzb21lIHJlZmFjdG9yaW5nLCB5b3UnbGwgd2FudCB0byB1cGRhdGUgRGV2VG9vbHMgdG9vLlxuXG4gICAgICAgIGlmIChhbHRlcm5hdGUgIT09IG51bGwpIHtcbiAgICAgICAgICB2YXIgd2FzTW91bnRlZCA9IGFsdGVybmF0ZS5tZW1vaXplZFN0YXRlICE9IG51bGwgJiYgYWx0ZXJuYXRlLm1lbW9pemVkU3RhdGUuZWxlbWVudCAhPSBudWxsO1xuICAgICAgICAgIHZhciBpc01vdW50ZWQgPSBjdXJyZW50Lm1lbW9pemVkU3RhdGUgIT0gbnVsbCAmJiBjdXJyZW50Lm1lbW9pemVkU3RhdGUuZWxlbWVudCAhPSBudWxsO1xuXG4gICAgICAgICAgaWYgKCF3YXNNb3VudGVkICYmIGlzTW91bnRlZCkge1xuICAgICAgICAgICAgLy8gTW91bnQgYSBuZXcgcm9vdC5cbiAgICAgICAgICAgIG1vdW50ZWRSb290cy5hZGQocm9vdCk7XG4gICAgICAgICAgICBmYWlsZWRSb290cy5kZWxldGUocm9vdCk7XG4gICAgICAgICAgfSBlbHNlIGlmICh3YXNNb3VudGVkICYmIGlzTW91bnRlZCkgOyBlbHNlIGlmICh3YXNNb3VudGVkICYmICFpc01vdW50ZWQpIHtcbiAgICAgICAgICAgIC8vIFVubW91bnQgYW4gZXhpc3Rpbmcgcm9vdC5cbiAgICAgICAgICAgIG1vdW50ZWRSb290cy5kZWxldGUocm9vdCk7XG5cbiAgICAgICAgICAgIGlmIChkaWRFcnJvcikge1xuICAgICAgICAgICAgICAvLyBXZSdsbCByZW1vdW50IGl0IG9uIGZ1dHVyZSBlZGl0cy5cbiAgICAgICAgICAgICAgZmFpbGVkUm9vdHMuYWRkKHJvb3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaGVscGVyc0J5Um9vdC5kZWxldGUocm9vdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICghd2FzTW91bnRlZCAmJiAhaXNNb3VudGVkKSB7XG4gICAgICAgICAgICBpZiAoZGlkRXJyb3IpIHtcbiAgICAgICAgICAgICAgLy8gV2UnbGwgcmVtb3VudCBpdCBvbiBmdXR1cmUgZWRpdHMuXG4gICAgICAgICAgICAgIGZhaWxlZFJvb3RzLmFkZChyb290KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTW91bnQgYSBuZXcgcm9vdC5cbiAgICAgICAgICBtb3VudGVkUm9vdHMuYWRkKHJvb3QpO1xuICAgICAgICB9XG4gICAgICB9IC8vIEFsd2F5cyBjYWxsIHRoZSBkZWNvcmF0ZWQgRGV2VG9vbHMgaG9vay5cblxuXG4gICAgICByZXR1cm4gb2xkT25Db21taXRGaWJlclJvb3QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG59XG5mdW5jdGlvbiBoYXNVbnJlY292ZXJhYmxlRXJyb3JzKCkge1xuICAvLyBUT0RPOiBkZWxldGUgdGhpcyBhZnRlciByZW1vdmluZyBkZXBlbmRlbmN5IGluIFJOLlxuICByZXR1cm4gZmFsc2U7XG59IC8vIEV4cG9zZWQgZm9yIHRlc3RpbmcuXG5cbmZ1bmN0aW9uIF9nZXRNb3VudGVkUm9vdENvdW50KCkge1xuICB7XG4gICAgcmV0dXJuIG1vdW50ZWRSb290cy5zaXplO1xuICB9XG59IC8vIFRoaXMgaXMgYSB3cmFwcGVyIG92ZXIgbW9yZSBwcmltaXRpdmUgZnVuY3Rpb25zIGZvciBzZXR0aW5nIHNpZ25hdHVyZS5cbi8vIFNpZ25hdHVyZXMgbGV0IHVzIGRlY2lkZSB3aGV0aGVyIHRoZSBIb29rIG9yZGVyIGhhcyBjaGFuZ2VkIG9uIHJlZnJlc2guXG4vL1xuLy8gVGhpcyBmdW5jdGlvbiBpcyBpbnRlbmRlZCB0byBiZSB1c2VkIGFzIGEgdHJhbnNmb3JtIHRhcmdldCwgZS5nLjpcbi8vIHZhciBfcyA9IGNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtKClcbi8vXG4vLyBmdW5jdGlvbiBIZWxsbygpIHtcbi8vICAgY29uc3QgW2Zvbywgc2V0Rm9vXSA9IHVzZVN0YXRlKDApO1xuLy8gICBjb25zdCB2YWx1ZSA9IHVzZUN1c3RvbUhvb2soKTtcbi8vICAgX3MoKTsgLyogQ2FsbCB3aXRob3V0IGFyZ3VtZW50cyB0cmlnZ2VycyBjb2xsZWN0aW5nIHRoZSBjdXN0b20gSG9vayBsaXN0LlxuLy8gICAgICAgICAgKiBUaGlzIGRvZXNuJ3QgaGFwcGVuIGR1cmluZyB0aGUgbW9kdWxlIGV2YWx1YXRpb24gYmVjYXVzZSB3ZVxuLy8gICAgICAgICAgKiBkb24ndCB3YW50IHRvIGNoYW5nZSB0aGUgbW9kdWxlIG9yZGVyIHdpdGggaW5saW5lIHJlcXVpcmVzLlxuLy8gICAgICAgICAgKiBOZXh0IGNhbGxzIGFyZSBub29wcy4gKi9cbi8vICAgcmV0dXJuIDxoMT5IaTwvaDE+O1xuLy8gfVxuLy9cbi8vIC8qIENhbGwgd2l0aCBhcmd1bWVudHMgYXR0YWNoZXMgdGhlIHNpZ25hdHVyZSB0byB0aGUgdHlwZTogKi9cbi8vIF9zKFxuLy8gICBIZWxsbyxcbi8vICAgJ3VzZVN0YXRle1tmb28sIHNldEZvb119KDApJyxcbi8vICAgKCkgPT4gW3VzZUN1c3RvbUhvb2tdLCAvKiBMYXp5IHRvIGF2b2lkIHRyaWdnZXJpbmcgaW5saW5lIHJlcXVpcmVzICovXG4vLyApO1xuXG5mdW5jdGlvbiBjcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybSgpIHtcbiAge1xuICAgIHZhciBzYXZlZFR5cGU7XG4gICAgdmFyIGhhc0N1c3RvbUhvb2tzO1xuICAgIHZhciBkaWRDb2xsZWN0SG9va3MgPSBmYWxzZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHR5cGUsIGtleSwgZm9yY2VSZXNldCwgZ2V0Q3VzdG9tSG9va3MpIHtcbiAgICAgIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAvLyBXZSdyZSBpbiB0aGUgaW5pdGlhbCBwaGFzZSB0aGF0IGFzc29jaWF0ZXMgc2lnbmF0dXJlc1xuICAgICAgICAvLyB3aXRoIHRoZSBmdW5jdGlvbnMuIE5vdGUgdGhpcyBtYXkgYmUgY2FsbGVkIG11bHRpcGxlIHRpbWVzXG4gICAgICAgIC8vIGluIEhPQyBjaGFpbnMgbGlrZSBfcyhob2MxKF9zKGhvYzIoX3MoYWN0dWFsRnVuY3Rpb24pKSkpKS5cbiAgICAgICAgaWYgKCFzYXZlZFR5cGUpIHtcbiAgICAgICAgICAvLyBXZSdyZSBpbiB0aGUgaW5uZXJtb3N0IGNhbGwsIHNvIHRoaXMgaXMgdGhlIGFjdHVhbCB0eXBlLlxuICAgICAgICAgIHNhdmVkVHlwZSA9IHR5cGU7XG4gICAgICAgICAgaGFzQ3VzdG9tSG9va3MgPSB0eXBlb2YgZ2V0Q3VzdG9tSG9va3MgPT09ICdmdW5jdGlvbic7XG4gICAgICAgIH0gLy8gU2V0IHRoZSBzaWduYXR1cmUgZm9yIGFsbCB0eXBlcyAoZXZlbiB3cmFwcGVycyEpIGluIGNhc2VcbiAgICAgICAgLy8gdGhleSBoYXZlIG5vIHNpZ25hdHVyZXMgb2YgdGhlaXIgb3duLiBUaGlzIGlzIHRvIHByZXZlbnRcbiAgICAgICAgLy8gcHJvYmxlbXMgbGlrZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzIwNDE3LlxuXG5cbiAgICAgICAgaWYgKHR5cGUgIT0gbnVsbCAmJiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSkge1xuICAgICAgICAgIHNldFNpZ25hdHVyZSh0eXBlLCBrZXksIGZvcmNlUmVzZXQsIGdldEN1c3RvbUhvb2tzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gV2UncmUgaW4gdGhlIF9zKCkgY2FsbCB3aXRob3V0IGFyZ3VtZW50cywgd2hpY2ggbWVhbnNcbiAgICAgICAgLy8gdGhpcyBpcyB0aGUgdGltZSB0byBjb2xsZWN0IGN1c3RvbSBIb29rIHNpZ25hdHVyZXMuXG4gICAgICAgIC8vIE9ubHkgZG8gdGhpcyBvbmNlLiBUaGlzIHBhdGggaXMgaG90IGFuZCBydW5zICppbnNpZGUqIGV2ZXJ5IHJlbmRlciFcbiAgICAgICAgaWYgKCFkaWRDb2xsZWN0SG9va3MgJiYgaGFzQ3VzdG9tSG9va3MpIHtcbiAgICAgICAgICBkaWRDb2xsZWN0SG9va3MgPSB0cnVlO1xuICAgICAgICAgIGNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZShzYXZlZFR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuZnVuY3Rpb24gaXNMaWtlbHlDb21wb25lbnRUeXBlKHR5cGUpIHtcbiAge1xuICAgIHN3aXRjaCAodHlwZW9mIHR5cGUpIHtcbiAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgICAge1xuICAgICAgICAgIC8vIEZpcnN0LCBkZWFsIHdpdGggY2xhc3Nlcy5cbiAgICAgICAgICBpZiAodHlwZS5wcm90b3R5cGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHR5cGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgLy8gUmVhY3QgY2xhc3MuXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgb3duTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0eXBlLnByb3RvdHlwZSk7XG5cbiAgICAgICAgICAgIGlmIChvd25OYW1lcy5sZW5ndGggPiAxIHx8IG93bk5hbWVzWzBdICE9PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgbG9va3MgbGlrZSBhIGNsYXNzLlxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b1xuXG5cbiAgICAgICAgICAgIGlmICh0eXBlLnByb3RvdHlwZS5fX3Byb3RvX18gIT09IE9iamVjdC5wcm90b3R5cGUpIHtcbiAgICAgICAgICAgICAgLy8gSXQgaGFzIGEgc3VwZXJjbGFzcy5cbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSAvLyBQYXNzIHRocm91Z2guXG4gICAgICAgICAgICAvLyBUaGlzIGxvb2tzIGxpa2UgYSByZWd1bGFyIGZ1bmN0aW9uIHdpdGggZW1wdHkgcHJvdG90eXBlLlxuXG4gICAgICAgICAgfSAvLyBGb3IgcGxhaW4gZnVuY3Rpb25zIGFuZCBhcnJvd3MsIHVzZSBuYW1lIGFzIGEgaGV1cmlzdGljLlxuXG5cbiAgICAgICAgICB2YXIgbmFtZSA9IHR5cGUubmFtZSB8fCB0eXBlLmRpc3BsYXlOYW1lO1xuICAgICAgICAgIHJldHVybiB0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycgJiYgL15bQS1aXS8udGVzdChuYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICB7XG4gICAgICAgICAgaWYgKHR5cGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgc3dpdGNoIChnZXRQcm9wZXJ0eSh0eXBlLCAnJCR0eXBlb2YnKSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICAgIC8vIERlZmluaXRlbHkgUmVhY3QgY29tcG9uZW50cy5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnRzLl9nZXRNb3VudGVkUm9vdENvdW50ID0gX2dldE1vdW50ZWRSb290Q291bnQ7XG5leHBvcnRzLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZSA9IGNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZTtcbmV4cG9ydHMuY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm0gPSBjcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybTtcbmV4cG9ydHMuZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcyA9IGZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM7XG5leHBvcnRzLmdldEZhbWlseUJ5SUQgPSBnZXRGYW1pbHlCeUlEO1xuZXhwb3J0cy5nZXRGYW1pbHlCeVR5cGUgPSBnZXRGYW1pbHlCeVR5cGU7XG5leHBvcnRzLmhhc1VucmVjb3ZlcmFibGVFcnJvcnMgPSBoYXNVbnJlY292ZXJhYmxlRXJyb3JzO1xuZXhwb3J0cy5pbmplY3RJbnRvR2xvYmFsSG9vayA9IGluamVjdEludG9HbG9iYWxIb29rO1xuZXhwb3J0cy5pc0xpa2VseUNvbXBvbmVudFR5cGUgPSBpc0xpa2VseUNvbXBvbmVudFR5cGU7XG5leHBvcnRzLnBlcmZvcm1SZWFjdFJlZnJlc2ggPSBwZXJmb3JtUmVhY3RSZWZyZXNoO1xuZXhwb3J0cy5yZWdpc3RlciA9IHJlZ2lzdGVyO1xuZXhwb3J0cy5zZXRTaWduYXR1cmUgPSBzZXRTaWduYXR1cmU7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qcycpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==