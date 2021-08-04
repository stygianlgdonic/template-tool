<<<<<<< HEAD
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var chunk = require("./" + "" + chunkId + "." + hotCurrentHash + ".hot-update.js");
/******/ 		hotAddUpdateChunk(chunk.id, chunk.modules);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest() {
/******/ 		try {
/******/ 			var update = require("./" + "" + hotCurrentHash + ".hot-update.json");
/******/ 		} catch (e) {
/******/ 			return Promise.resolve();
/******/ 		}
/******/ 		return Promise.resolve(update);
/******/ 	}
/******/
/******/ 	//eslint-disable-next-line no-unused-vars
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "9fed06f10eb27bffd4af";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_selfInvalidated: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 			invalidate: function() {
/******/ 				this._selfInvalidated = true;
/******/ 				switch (hotStatus) {
/******/ 					case "idle":
/******/ 						hotUpdate = {};
/******/ 						hotUpdate[moduleId] = modules[moduleId];
/******/ 						hotSetStatus("ready");
/******/ 						break;
/******/ 					case "ready":
/******/ 						hotApplyInvalidatedModule(moduleId);
/******/ 						break;
/******/ 					case "prepare":
/******/ 					case "check":
/******/ 					case "dispose":
/******/ 					case "apply":
/******/ 						(hotQueuedInvalidatedModules =
/******/ 							hotQueuedInvalidatedModules || []).push(moduleId);
/******/ 						break;
/******/ 					default:
/******/ 						// ignore requests in error states
/******/ 						break;
/******/ 				}
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash, hotQueuedInvalidatedModules;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus(hotApplyInvalidatedModules() ? "ready" : "idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			for(var chunkId in installedChunks)
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 		return hotApplyInternal(options);
/******/ 	}
/******/
/******/ 	function hotApplyInternal(options) {
/******/ 		hotApplyInvalidatedModules();
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!installedModules[moduleId].hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					parents: installedModules[moduleId].parents.slice(),
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		if (hotUpdateNewHash !== undefined) {
/******/ 			hotCurrentHash = hotUpdateNewHash;
/******/ 			hotUpdateNewHash = undefined;
/******/ 		}
/******/ 		hotUpdate = undefined;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = item.parents;
/******/ 			hotCurrentChildModule = moduleId;
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			return hotApplyInternal(options).then(function(list) {
/******/ 				outdatedModules.forEach(function(moduleId) {
/******/ 					if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 				});
/******/ 				return list;
/******/ 			});
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModules() {
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			if (!hotUpdate) hotUpdate = {};
/******/ 			hotQueuedInvalidatedModules.forEach(hotApplyInvalidatedModule);
/******/ 			hotQueuedInvalidatedModules = undefined;
/******/ 			return true;
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModule(moduleId) {
/******/ 		if (!Object.prototype.hasOwnProperty.call(hotUpdate, moduleId))
/******/ 			hotUpdate[moduleId] = modules[moduleId];
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"server": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({}[chunkId]||chunkId) + ".chunk.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:4001/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/assets.json":
/*!***************************!*\
  !*** ./build/assets.json ***!
  \***************************/
/*! exports provided: 0, 1, 2, client, noentry, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"0\":{\"js\":[\"http://localhost:4001/static/js/0.chunk.js\"],\"map\":[\"http://localhost:4001/static/js/0.chunk.js.map\"],\"chunks\":[0]},\"1\":{\"js\":[\"http://localhost:4001/static/js/1.chunk.js\"],\"map\":[\"http://localhost:4001/static/js/1.chunk.js.map\"],\"chunks\":[1]},\"2\":{\"js\":[\"http://localhost:4001/static/js/2.chunk.js\"],\"map\":[\"http://localhost:4001/static/js/2.chunk.js.map\"],\"chunks\":[2]},\"client\":{\"js\":[\"http://localhost:4001/static/js/client.js\"],\"map\":[\"http://localhost:4001/static/js/client.js.map\"],\"chunks\":[\"client\"]},\"noentry\":{\"svg\":[\"http://localhost:4001/static/media/chevron-down.c16040f3.svg\",\"http://localhost:4001/static/media/plus.cc6d96c4.svg\"]}}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/razzle-dev-utils/prettyNodeErrors.js":
/*!***********************************************************!*\
  !*** ./node_modules/razzle-dev-utils/prettyNodeErrors.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const fs = __webpack_require__(/*! fs */ "fs");
const {
  getTopFrame,
  getStackTraceLines,
  separateMessageFromStack,
} = __webpack_require__(/*! jest-message-util */ "jest-message-util");
const { codeFrameColumns } = __webpack_require__(/*! @babel/code-frame */ "@babel/code-frame");

function pretty(error) {
  const { message, stack } = error;
  const lines = getStackTraceLines(stack);
  const topFrame = getTopFrame(lines);
  const fallback = `${message}${stack}`;

  if (!topFrame) {
    return fallback;
  }

  const { file, line } = topFrame;
  try {
    const result = codeFrameColumns(
      fs.readFileSync(file, 'utf8'),
      { start: { line } },
      { highlightCode: true }
    );
    return `\n${message}\n\n${result}\n${stack}\n`;
  } catch (error) {
    return fallback;
  }
}

function usePrettyErrors(transform) {
  const { prepareStackTrace } = Error;

  Error.prepareStackTrace = (error, trace) => {
    const prepared = prepareStackTrace
      ? separateMessageFromStack(prepareStackTrace(error, trace))
      : error;
    const transformed = transform ? transform(prepared) : prepared;
    return pretty(transformed);
  };
}

// Clean up Webpack's sourcemap namespacing in error stacks
// @see https://github.com/facebook/create-react-app/blob/next/packages/react-dev-utils/formatWebpackMessages.js#L112
const stackTransform = ({ stack = '', ...rest }) => ({
  stack: stack.replace('/build/webpack:', ''),
  ...rest,
});

usePrettyErrors(stackTransform);


/***/ }),

/***/ "./node_modules/razzle-start-server-webpack-plugin/dist/monitor-loader.js!./node_modules/razzle-start-server-webpack-plugin/dist/monitor-loader.js":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/razzle-start-server-webpack-plugin/dist/monitor-loader.js!./node_modules/razzle-start-server-webpack-plugin/dist/monitor-loader.js ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(() => {
  // Handle hot updates, copied with slight adjustments from webpack/hot/signal.js
  if (true) {
    const log = (type, msg) => console[type](`sswp> ${msg}`); // TODO don't show this when sending signal instead of message


    log('log', 'Handling Hot Module Reloading');

    var checkForUpdate = function checkForUpdate(fromUpdate) {
      module.hot.check().then(function (updatedModules) {
        if (!updatedModules) {
          if (fromUpdate) log('log', 'Update applied.');else log('warn', 'Cannot find update.');
          return;
        }

        return module.hot.apply({
          ignoreUnaccepted: true,
          // TODO probably restart
          onUnaccepted: function (data) {
            log('warn', '\u0007Ignored an update to unaccepted module ' + data.chain.join(' -> '));
          }
        }).then(function (renewedModules) {
          __webpack_require__(/*! webpack/hot/log-apply-result */ "webpack/hot/log-apply-result")(updatedModules, renewedModules);

          checkForUpdate(true);
        });
      }).catch(function (err) {
        var status = module.hot.status();

        if (['abort', 'fail'].indexOf(status) >= 0) {
          if (process.send) {
            process.send('SSWP_HMR_FAIL');
          }

          log('warn', 'Cannot apply update.');
          log('warn', '' + err.stack || err.message);
          log('error', 'Quitting process - will reload on next file change\u0007\n\u0007\n\u0007');
          process.exit(222);
        } else {
          log('warn', 'Update failed: ' + err.stack || false);
        }
      });
    };

    process.on('message', function (message) {
      if (message !== 'SSWP_HMR') return;

      if (module.hot.status() !== 'idle') {
        log('warn', 'Got signal but currently in ' + module.hot.status() + ' state.');
        log('warn', 'Need to be in idle state to start hot update.');
        return;
      }

      checkForUpdate();
    });
  } // Tell our plugin we loaded all the code without initially crashing


  if (process.send) {
    process.send('SSWP_LOADED');
  }
})()

/***/ }),

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@tailwind base;\n\n@tailwind components;\n\n@tailwind utilities;\n", "",{"version":3,"sources":["webpack://./node_modules/tailwindcss/tailwind.css"],"names":[],"mappings":"AAAA,cAAc;;AAEd,oBAAoB;;AAEpB,mBAAmB","sourcesContent":["@tailwind base;\n\n@tailwind components;\n\n@tailwind utilities;\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/*!*****************************************!*\
  !*** (webpack)/hot/log-apply-result.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(updatedModules, renewedModules) {
	var unacceptedModules = updatedModules.filter(function(moduleId) {
		return renewedModules && renewedModules.indexOf(moduleId) < 0;
	});
	var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");

	if (unacceptedModules.length > 0) {
		log(
			"warning",
			"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)"
		);
		unacceptedModules.forEach(function(moduleId) {
			log("warning", "[HMR]  - " + moduleId);
		});
	}

	if (!renewedModules || renewedModules.length === 0) {
		log("info", "[HMR] Nothing hot updated.");
	} else {
		log("info", "[HMR] Updated modules:");
		renewedModules.forEach(function(moduleId) {
			if (typeof moduleId === "string" && moduleId.indexOf("!") !== -1) {
				var parts = moduleId.split("!");
				log.groupCollapsed("info", "[HMR]  - " + parts.pop());
				log("info", "[HMR]  - " + moduleId);
				log.groupEnd("info");
			} else {
				log("info", "[HMR]  - " + moduleId);
			}
		});
		var numberIds = renewedModules.every(function(moduleId) {
			return typeof moduleId === "number";
		});
		if (numberIds)
			log(
				"info",
				"[HMR] Consider using the NamedModulesPlugin for module names."
			);
	}
};


/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/*!****************************!*\
  !*** (webpack)/hot/log.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var logLevel = "info";

function dummy() {}

function shouldLog(level) {
	var shouldLog =
		(logLevel === "info" && level === "info") ||
		(["info", "warning"].indexOf(logLevel) >= 0 && level === "warning") ||
		(["info", "warning", "error"].indexOf(logLevel) >= 0 && level === "error");
	return shouldLog;
}

function logGroup(logFn) {
	return function(level, msg) {
		if (shouldLog(level)) {
			logFn(msg);
		}
	};
}

module.exports = function(level, msg) {
	if (shouldLog(level)) {
		if (level === "info") {
			console.log(msg);
		} else if (level === "warning") {
			console.warn(msg);
		} else if (level === "error") {
			console.error(msg);
		}
	}
};

/* eslint-disable node/no-unsupported-features/node-builtins */
var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;
/* eslint-enable node/no-unsupported-features/node-builtins */

module.exports.group = logGroup(group);

module.exports.groupCollapsed = logGroup(groupCollapsed);

module.exports.groupEnd = logGroup(groupEnd);

module.exports.setLogLevel = function(level) {
	logLevel = level;
};

module.exports.formatError = function(err) {
	var message = err.message;
	var stack = err.stack;
	if (!stack) {
		return message;
	} else if (stack.indexOf(message) < 0) {
		return message + "\n" + stack;
	} else {
		return stack;
	}
};


/***/ }),

/***/ "./node_modules/webpack/hot/poll.js?300":
/*!*********************************!*\
  !*** (webpack)/hot/poll.js?300 ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__resourceQuery) {/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
/*globals __resourceQuery */
if (true) {
	var hotPollInterval = +__resourceQuery.substr(1) || 10 * 60 * 1000;
	var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");

	var checkForUpdate = function checkForUpdate(fromUpdate) {
		if (module.hot.status() === "idle") {
			module.hot
				.check(true)
				.then(function(updatedModules) {
					if (!updatedModules) {
						if (fromUpdate) log("info", "[HMR] Update applied.");
						return;
					}
					__webpack_require__(/*! ./log-apply-result */ "./node_modules/webpack/hot/log-apply-result.js")(updatedModules, updatedModules);
					checkForUpdate(true);
				})
				.catch(function(err) {
					var status = module.hot.status();
					if (["abort", "fail"].indexOf(status) >= 0) {
						log("warning", "[HMR] Cannot apply update.");
						log("warning", "[HMR] " + log.formatError(err));
						log("warning", "[HMR] You need to restart the application!");
					} else {
						log("warning", "[HMR] Update failed: " + log.formatError(err));
					}
				});
		}
	};
	setInterval(checkForUpdate, hotPollInterval);
} else {}

/* WEBPACK VAR INJECTION */}.call(this, "?300"))

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NoSSR__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NoSSR */ "./src/NoSSR.tsx");
/* harmony import */ var _routes_route_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/route_names */ "./src/routes/route_names.tsx");
/* harmony import */ var _contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contexts/TemplateContext */ "./src/contexts/TemplateContext.tsx");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\App.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const DesignTool = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./components/DesignTool/index */ "./src/components/DesignTool/index.tsx")));
const SelectPalette = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./components/SelectPalette/index */ "./src/components/SelectPalette/index.tsx")));
const Home = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./components/Home */ "./src/components/Home/index.tsx")));


const App = () => __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }
}, __jsx(_NoSSR__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}, __jsx(_contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_4__["TemplateProvider"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 13
  }
}, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: _routes_route_names__WEBPACK_IMPORTED_MODULE_3__["ROUTE_NAMES"].home,
  render: () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
    fallback: __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 51
      }
    }, "Loading ..."),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }, __jsx(Home, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 29
    }
  })),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 17
  }
}), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: _routes_route_names__WEBPACK_IMPORTED_MODULE_3__["ROUTE_NAMES"].select_palette,
  render: () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
    fallback: __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 51
      }
    }, "Loading ..."),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, __jsx(SelectPalette, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 29
    }
  })),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 17
  }
}), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: _routes_route_names__WEBPACK_IMPORTED_MODULE_3__["ROUTE_NAMES"].design_tool,
  render: () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
    fallback: __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 51
      }
    }, "Loading ..."),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  }, __jsx(DesignTool, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 29
    }
  })),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 17
  }
}), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: _routes_route_names__WEBPACK_IMPORTED_MODULE_3__["ROUTE_NAMES"].design_tool_noID,
  render: () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
    fallback: __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 51
      }
    }, "Loading ..."),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  }, __jsx(DesignTool, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 29
    }
  })),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 17
  }
}))));

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/NoSSR.tsx":
/*!***********************!*\
  !*** ./src/NoSSR.tsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const NoSSR = ({
  children
}) => {
  const {
    0: isClient,
    1: setIsClient
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setIsClient(true);
  }, []);
  return isClient ? children : null;
};

/* harmony default export */ __webpack_exports__["default"] = (NoSSR);

/***/ }),

/***/ "./src/contexts/TemplateContext.tsx":
/*!******************************************!*\
  !*** ./src/contexts/TemplateContext.tsx ***!
  \******************************************/
/*! exports provided: INITIAL_STATE, TemplateContext, TemplateProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateContext", function() { return TemplateContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateProvider", function() { return TemplateProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shrugsy_use_immer_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shrugsy/use-immer-state */ "@shrugsy/use-immer-state");
/* harmony import */ var _shrugsy_use_immer_state__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shrugsy_use_immer_state__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/defaults */ "./src/utils/defaults.ts");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\contexts\\TemplateContext.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const INITIAL_STATE = {
  dimensions: {
    width: _utils_defaults__WEBPACK_IMPORTED_MODULE_2__["stageDimensions"].width,
    height: _utils_defaults__WEBPACK_IMPORTED_MODULE_2__["stageDimensions"].height
  },
  tags: [],
  palette: [{
    name: "primary",
    color: "#ff0000"
  }, {
    name: "secondary",
    color: "#00ff00"
  }, {
    name: "tertiary",
    color: "#0000ff"
  }],
  variations: [{
    name: "untitled",
    face: "",
    elements: [{
      id: 'shapes_background',
      type: "rectangle",
      x: 0,
      y: 0,
      width: _utils_defaults__WEBPACK_IMPORTED_MODULE_2__["stageDimensions"].width,
      height: _utils_defaults__WEBPACK_IMPORTED_MODULE_2__["stageDimensions"].height,
      // fill: '#F0F0F0',
      fillLinearGradientStartPoint: {
        x: 0,
        y: 0
      },
      fillLinearGradientEndPoint: {
        x: _utils_defaults__WEBPACK_IMPORTED_MODULE_2__["stageDimensions"].width,
        y: _utils_defaults__WEBPACK_IMPORTED_MODULE_2__["stageDimensions"].height
      },
      fillLinearGradientColorStops: [0, '#FFFFFF', 1, '#FFFFFF'],
      draggable: false
    }]
  }]
};
const TemplateContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
TemplateContext.displayName = 'TemplateContext';

const TemplateProvider = ({
  children
}) => {
  const [templateData, setTemplateData, {
    goForward,
    goBack,
    stepNum,
    history
  }] = Object(_shrugsy_use_immer_state__WEBPACK_IMPORTED_MODULE_1__["useImmerState"])(INITIAL_STATE);
  return __jsx(TemplateContext.Provider, {
    value: [templateData, setTemplateData, {
      goForward,
      goBack,
      stepNum,
      history
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, children);
};



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);


let app = __webpack_require__(/*! ./server */ "./src/server.tsx").default;

if (true) {
  module.hot.accept(/*! ./server */ "./src/server.tsx", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (() => {
    console.log('🔁  HMR Reloading `./server`...');

    try {
      app = __webpack_require__(/*! ./server */ "./src/server.tsx").default;
    } catch (error) {
      console.error(error);
    }
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this));
  console.info('✅  Server-side HMR Enabled!');
}

const port =  true ? parseInt("4000") : undefined;
/* harmony default export */ __webpack_exports__["default"] = (express__WEBPACK_IMPORTED_MODULE_0___default()().use((req, res) => app.handle(req, res)).listen(port, () => {
  console.log(`> App started http://localhost:${port}`);
}));

/***/ }),

/***/ "./src/routes/route_names.tsx":
/*!************************************!*\
  !*** ./src/routes/route_names.tsx ***!
  \************************************/
/*! exports provided: ROUTE_NAMES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTE_NAMES", function() { return ROUTE_NAMES; });
const ROUTE_NAMES = {
  home: "/",
  select_palette: "/selectPalette",
  design_tool: "/tool/:templateID",
  design_tool_noID: "/tool"
};

/***/ }),

/***/ "./src/server.tsx":
/*!************************!*\
  !*** ./src/server.tsx ***!
  \************************/
/*! exports provided: renderApp, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderApp", function() { return renderApp; });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\server.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





let assets;

const syncLoadAssets = () => {
  assets = __webpack_require__(/*! ./build/assets.json */ "./build/assets.json");
};

syncLoadAssets();

const cssLinksFromAssets = (assets, entrypoint) => {
  return assets[entrypoint] ? assets[entrypoint].css ? assets[entrypoint].css.map(asset => `<link rel="stylesheet" href="${asset}">`).join('') : '' : '';
};

const jsScriptTagsFromAssets = (assets, entrypoint, extra = '') => {
  return assets[entrypoint] ? assets[entrypoint].js ? assets[entrypoint].js.map(asset => `<script src="${asset}"${extra}></script>`).join('') : '' : '';
};

const renderApp = (req, res) => {
  const context = {};
  const markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__["renderToString"])(__jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["StaticRouter"], {
    context: context,
    location: req.url,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx(_App__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  })));

  if (context.url) {
    return {
      redirect: context.url
    };
  } else {
    const html = // prettier-ignore
    `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${cssLinksFromAssets(assets, 'client')}
    </head>
    <body>
        <div id="root">${markup}</div>
        ${jsScriptTagsFromAssets(assets, 'client', ' defer crossorigin')}
    </body>
  </html>`;
    return {
      html
    };
  }
};
const server = express__WEBPACK_IMPORTED_MODULE_0___default()().disable('x-powered-by').use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static("D:\\dev\\cardclan-backend\\template-tool\\public")).get('/*', (req, res) => {
  const {
    html = '',
    redirect = false
  } = renderApp(req, res);

  if (redirect) {
    res.redirect(redirect);
  } else {
    res.send(html);
  }
});
/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ }),

/***/ "./src/utils/defaults.ts":
/*!*******************************!*\
  !*** ./src/utils/defaults.ts ***!
  \*******************************/
/*! exports provided: stageDimensions, ORIGINAL_SVG, defaultImage, defaultSvg, defaultRect, defaultRoundedRect, defaultCircle, defaultPolygon, defaultTriangle, defaultTextBox, googleFontsList, fontSizeArray, ORIGINAL_SVG_updownicon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stageDimensions", function() { return stageDimensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIGINAL_SVG", function() { return ORIGINAL_SVG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultImage", function() { return defaultImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSvg", function() { return defaultSvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRect", function() { return defaultRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRoundedRect", function() { return defaultRoundedRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultCircle", function() { return defaultCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultPolygon", function() { return defaultPolygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTriangle", function() { return defaultTriangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTextBox", function() { return defaultTextBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleFontsList", function() { return googleFontsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSizeArray", function() { return fontSizeArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIGINAL_SVG_updownicon", function() { return ORIGINAL_SVG_updownicon; });
const stageDimensions = {
  width: 500,
  height: 500
};
const ORIGINAL_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g data-name="discount(Splash tag)"><path fill="#db5669" d="M45.93,26.39a3.2,3.2,0,0,0-.76,3.79,3.21,3.21,0,0,1-1.83,4.42,3.19,3.19,0,0,0-2.15,3c0,.06,0,.36,0,.39a3.21,3.21,0,0,1-3.4,3.2,3.19,3.19,0,0,0-3.21,2.14,3.2,3.2,0,0,1-4.42,1.83,3.2,3.2,0,0,0-3.79.76,3.2,3.2,0,0,1-4.78,0,3.2,3.2,0,0,0-3.79-.76,3.2,3.2,0,0,1-4.42-1.83,3.18,3.18,0,0,0-3.21-2.14A3.2,3.2,0,0,1,6.8,37.81,3.19,3.19,0,0,0,4.66,34.6a3.2,3.2,0,0,1-1.83-4.42,3.2,3.2,0,0,0-.76-3.79,3.2,3.2,0,0,1,0-4.78,3.2,3.2,0,0,0,.76-3.79A3.2,3.2,0,0,1,4.66,13.4,3.18,3.18,0,0,0,6.8,10.19,3.2,3.2,0,0,1,10.1,6.8h.29a3.19,3.19,0,0,0,3-2.15,3.21,3.21,0,0,1,4.42-1.83,3.2,3.2,0,0,0,3.79-.76,3.2,3.2,0,0,1,4.78,0,3.21,3.21,0,0,0,3.79.76A3.2,3.2,0,0,1,34.6,4.66a3.19,3.19,0,0,0,3,2.15l.39,0a3.21,3.21,0,0,1,3.2,3.4,3.19,3.19,0,0,0,2.14,3.21,3.19,3.19,0,0,1,2.15,3c0,1.29-.64,1.52-.64,2.79C44.85,21.68,47,21.53,47,24A3.19,3.19,0,0,1,45.93,26.39Z"/><path fill="#f26674" d="M45.93,26.39a3.2,3.2,0,0,0-.76,3.79,3.12,3.12,0,0,1,.18,2.3c0,.1-.76,1.28-.82,1.38a3.08,3.08,0,0,1-1.19.74,3.19,3.19,0,0,0-2.15,3s0,.14,0,.29C27.32,51.18,4,41.37,4,22A21.9,21.9,0,0,1,10.1,6.8a3.2,3.2,0,0,0,3.3-2.14c.38-1.13,1-1.39,2.11-2a2.89,2.89,0,0,1,.91-.14c1.29,0,1.52.64,2.79.64C21.68,3.15,21.53,1,24,1a3.19,3.19,0,0,1,2.39,1.07,3.21,3.21,0,0,0,3.79.76A3.2,3.2,0,0,1,34.6,4.66,3.18,3.18,0,0,0,37.81,6.8a3.2,3.2,0,0,1,3.39,3.39,3.19,3.19,0,0,0,2.14,3.21,3.2,3.2,0,0,1,1.83,4.42,3.2,3.2,0,0,0,.76,3.79A3.2,3.2,0,0,1,45.93,26.39Z"/><path fill="#c4455e" d="M41,24A17,17,0,0,1,24,41C8.17,41,1,21.21,13,11,23.87,1.82,41,9.36,41,24Z"/><path fill="#db5669" d="M41,24a16.91,16.91,0,0,1-4,11,16.91,16.91,0,0,1-11,4C11.38,39,3.81,21.88,13,11,23.87,1.82,41,9.36,41,24Z"/><path fill="#ffde76" d="M16 33a1 1 0 0 1-.71-1.71l16-16a1 1 0 0 1 1.42 1.42C15.31 34.1 16.59 33 16 33zM19 22a4 4 0 1 0-4-4A4 4 0 0 0 19 22zm0-6a2 2 0 1 1-2 2A2 2 0 0 1 19 16zM29 26a4 4 0 1 0 4 4A4 4 0 0 0 29 26zm0 6a2 2 0 1 1 2-2A2 2 0 0 1 29 32z"/></g></svg>`;
const defaultImage = {
  name: "object",
  x: 200,
  y: 250,
  width: 200,
  height: 200,
  draggable: true,
  type: "image"
};
const defaultSvg = {
  name: "object",
  colorMap: {},
  type: "svg",
  x: 100,
  y: 200,
  width: 100,
  height: 100,
  draggable: true
};
const defaultRect = {
  name: "object",
  x: 150,
  y: 150,
  width: 100,
  stroke: "#000000",
  strokeWidth: 4,
  height: 100,
  fill: '#FF0000',
  draggable: true,
  type: "rectangle"
};
const defaultRoundedRect = {
  name: "object",
  x: 150,
  y: 250,
  width: 100,
  stroke: "#000000",
  strokeWidth: 4,
  height: 100,
  cornerRadius: 10,
  fill: '#FF0000',
  draggable: true,
  type: "rectangle"
};
const defaultCircle = {
  name: "object",
  x: 200,
  y: 100,
  radius: 50,
  stroke: "#000000",
  strokeWidth: 4,
  fill: '#FF0000',
  draggable: true,
  type: "circle"
};
const defaultPolygon = {
  name: "object",
  x: 100,
  y: 150,
  sides: 6,
  stroke: "#000000",
  strokeWidth: 4,
  radius: 70,
  fill: '#FF0000',
  type: "polygon"
};
const defaultTriangle = {
  name: "object",
  x: 20,
  y: 200,
  stroke: "#000000",
  strokeWidth: 4,
  fill: "#FF0000",
  points: [0, 100, 50, 0, 100, 100],
  tension: 0,
  closed: true,
  type: "line"
};
const defaultTextBox = {
  name: "object",
  text: 'New text',
  x: 150,
  y: 200,
  fontSize: 20,
  draggable: true,
  width: 200,
  type: "text"
};
const googleFontsList = ['Montserrat', 'Comfortaa', 'Euphoria Script', 'Josefin Sans', 'Oswald', 'Alfa Slab One', 'Bangers', 'Caveat', 'DM Sans', 'East Sea Dokdo', 'Homemade Apple', 'Kristi', 'Lobster Two', 'Maven Pro', 'Monoton', 'Playfair Display', 'Raleway', 'Roboto Slab', 'Shadows Into Light', 'Swanky and Moo Moo'];
const fontSizeArray = [{
  name: "Header",
  size: 40
}, {
  name: "Sub header",
  size: 25
}, {
  name: "body text",
  size: 15
}];
const ORIGINAL_SVG_updownicon = `<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 0C4.26522 5.96046e-08 4.51957 0.105357 4.70711 0.292893L7.70711 3.29289C8.09763 3.68342 8.09763 4.31658 7.70711 4.70711C7.31658 5.09763 6.68342 5.09763 6.29289 4.70711L4 2.41421L1.70711 4.70711C1.31658 5.09763 0.683417 5.09763 0.292893 4.70711C-0.0976311 4.31658 -0.097631 3.68342 0.292893 3.29289L3.29289 0.292893C3.48043 0.105357 3.73478 0 4 0ZM0.292893 9.29289C0.683417 8.90237 1.31658 8.90237 1.70711 9.29289L4 11.5858L6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289C8.09763 9.68342 8.09763 10.3166 7.70711 10.7071L4.70711 13.7071C4.31658 14.0976 3.68342 14.0976 3.29289 13.7071L0.292893 10.7071C-0.0976311 10.3166 -0.0976311 9.68342 0.292893 9.29289Z" fill="#9CA3AF"/>
</svg>`;

/***/ }),

/***/ 0:
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./node_modules/razzle-dev-utils/prettyNodeErrors.js (webpack)/hot/poll.js?300 ./src !./node_modules/razzle-start-server-webpack-plugin/dist/monitor-loader.js!./node_modules/razzle-start-server-webpack-plugin/dist/monitor-loader.js ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\dev\cardclan-backend\template-tool\node_modules\razzle-dev-utils\prettyNodeErrors.js */"./node_modules/razzle-dev-utils/prettyNodeErrors.js");
__webpack_require__(/*! D:\dev\cardclan-backend\template-tool\node_modules\webpack\hot\poll.js?300 */"./node_modules/webpack/hot/poll.js?300");
__webpack_require__(/*! D:\dev\cardclan-backend\template-tool\src */"./src/index.ts");
module.exports = __webpack_require__(/*! !!D:\dev\cardclan-backend\template-tool\node_modules\razzle-start-server-webpack-plugin\dist\monitor-loader.js!D:\dev\cardclan-backend\template-tool\node_modules\razzle-start-server-webpack-plugin\dist\monitor-loader.js */"./node_modules/razzle-start-server-webpack-plugin/dist/monitor-loader.js!./node_modules/razzle-start-server-webpack-plugin/dist/monitor-loader.js");


/***/ }),

/***/ "@babel/code-frame":
/*!************************************!*\
  !*** external "@babel/code-frame" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/code-frame");

/***/ }),

/***/ "@shrugsy/use-immer-state":
/*!*******************************************!*\
  !*** external "@shrugsy/use-immer-state" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shrugsy/use-immer-state");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "jest-message-util":
/*!************************************!*\
  !*** external "jest-message-util" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jest-message-util");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-color":
/*!******************************!*\
  !*** external "react-color" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-color");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-konva":
/*!******************************!*\
  !*** external "react-konva" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-konva");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-query");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "sweetalert":
/*!*****************************!*\
  !*** external "sweetalert" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sweetalert");

/***/ }),

/***/ "use-file-upload":
/*!**********************************!*\
  !*** external "use-file-upload" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("use-file-upload");

/***/ }),

/***/ "use-image":
/*!****************************!*\
  !*** external "use-image" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("use-image");

/***/ }),

/***/ "webfontloader":
/*!********************************!*\
  !*** external "webfontloader" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("webfontloader");

/***/ }),

/***/ "webpack/hot/log-apply-result":
/*!***********************************************!*\
  !*** external "webpack/hot/log-apply-result" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("webpack/hot/log-apply-result");

/***/ })

/******/ });
=======
module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.e=function(){return Promise.resolve()},n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n.oe=function(e){process.nextTick((function(){throw e}))},n(n.s=20)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-konva")},function(e,t,n){"use strict";n.d(t,"j",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"f",(function(){return o})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return c})),n.d(t,"h",(function(){return u})),n.d(t,"g",(function(){return d})),n.d(t,"i",(function(){return m}));const r={width:500,height:500},a={name:"object",x:200,y:250,width:200,height:200,draggable:!0,type:"image"},o={name:"object",colorMap:{},type:"svg",x:100,y:200,width:100,height:100,draggable:!0},l={name:"object",x:150,y:150,width:100,stroke:"#000000",strokeWidth:4,height:100,fill:"#FF0000",draggable:!0,type:"rectangle"},i={name:"object",x:150,y:250,width:100,stroke:"#000000",strokeWidth:4,height:100,cornerRadius:10,fill:"#FF0000",draggable:!0,type:"rectangle"},s={name:"object",x:200,y:100,radius:50,stroke:"#000000",strokeWidth:4,fill:"#FF0000",draggable:!0,type:"circle"},c={name:"object",x:100,y:150,sides:6,stroke:"#000000",strokeWidth:4,radius:70,fill:"#FF0000",type:"polygon"},u={name:"object",x:20,y:200,stroke:"#000000",strokeWidth:4,fill:"#FF0000",points:[0,100,50,0,100,100],tension:0,closed:!0,type:"line"},d={name:"object",text:"New text",x:150,y:200,fontSize:20,draggable:!0,width:200,type:"text"},m=["Montserrat","Comfortaa","Euphoria Script","Josefin Sans","Oswald","Alfa Slab One","Bangers","Caveat","DM Sans","East Sea Dokdo","Homemade Apple","Kristi","Lobster Two","Maven Pro","Monoton","Playfair Display","Raleway","Roboto Slab","Shadows Into Light","Swanky and Moo Moo"]},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("use-image")},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r={home:"/",select_palette:"/selectPalette",design_tool:"/tool/:templateID",design_tool_noID:"/tool"}},function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return u}));var r=n(0),a=n.n(r),o=n(11),l=n(2),i=a.a.createElement;const s={dimensions:{width:l.j.width,height:l.j.height},tags:[],palette:[{name:"primary",color:"#ff0000"},{name:"secondary",color:"#00ff00"},{name:"tertiary",color:"#0000ff"}],variations:[{name:"untitled",face:"",elements:[{id:"shapes_background",type:"rectangle",x:0,y:0,width:l.j.width,height:l.j.height,fillLinearGradientStartPoint:{x:0,y:0},fillLinearGradientEndPoint:{x:l.j.width,y:l.j.height},fillLinearGradientColorStops:[0,"#FFFFFF",1,"#FFFFFF"],draggable:!1}]}]},c=Object(r.createContext)(null);c.displayName="TemplateContext";const u=({children:e})=>{const[t,n,{goForward:r,goBack:a,stepNum:l,history:u}]=Object(o.useImmerState)(s);return i(c.Provider,{value:[t,n,{goForward:r,goBack:a,stepNum:l,history:u}]},e)}},function(e,t){e.exports=require("react-color")},function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));const r="https://polar-tor-04971.herokuapp.com/template",a="https://polar-tor-04971.herokuapp.com/template",o="https://polar-tor-04971.herokuapp.com/template",l={getAllTemplates:async function(){const e=await fetch(r);if(!e.ok)throw new Error("Error while fetching Templates");return e.json()},addNewTemplate:async function(e){const t=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw new Error("Error while adding new template");return t.json()},getTemplateByID:async function(e){const t=await fetch(`${r}/${e}`);if(!t.ok)throw new Error("Error while fetching Templates");return t.json()},updateTemplateByID:async function(e,t){console.log({JSON:JSON.stringify(t),templateData:t});const n=await fetch(`${o}/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(console.log({response:n}),!n.ok)throw new Error("Error while updating template");return n.json()},deleteTemplateByID:async function(e){return null}}},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("sweetalert")},function(e,t){e.exports=require("@shrugsy/use-immer-state")},function(e,t){e.exports=require("use-file-upload")},function(e,t){e.exports=require("react-query")},function(e,t){e.exports=require("react-dom/server")},function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,a,o=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.exports=function(e){var t=r(e,4),n=t[1],a=t[3];if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),i="/*# ".concat(l," */"),s=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[n].concat(s).concat([i]).join("\n")}return[n].join("\n")}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(a[l]=!0)}for(var i=0;i<e.length;i++){var s=[].concat(e[i]);r&&a[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){e.exports=n.p+"static/media/plus.cc6d96c4.svg"},function(e,t,n){e.exports=n.p+"static/media/chevron-down.c16040f3.svg"},function(e,t){e.exports=require("webfontloader")},function(e,t,n){e.exports=n(21)},function(e,t,n){"use strict";n.r(t);var r=n(9),a=n.n(r);let o=n(24).default;const l=parseInt("4000");t.default=a()().use((e,t)=>o.handle(e,t)).listen(l,()=>{console.log("> App started http://localhost:"+l)})},function(e,t,n){"use strict";var r=n(15),a=n.n(r),o=n(16),l=n.n(o)()(a.a);l.push([e.i,"@tailwind base;\n\n@tailwind components;\n\n@tailwind utilities;\n","",{version:3,sources:["webpack://./node_modules/tailwindcss/tailwind.css"],names:[],mappings:"AAAA,cAAc;;AAEd,oBAAoB;;AAEpB,mBAAmB",sourcesContent:["@tailwind base;\n\n@tailwind components;\n\n@tailwind utilities;\n"],sourceRoot:""}])},function(e){e.exports=JSON.parse('{"1":{"js":["/static/js/1.4c6a6d8a.chunk.js"],"map":["/static/js/1.4c6a6d8a.chunk.js.map"],"chunks":[1]},"2":{"js":["/static/js/2.00ed587c.chunk.js"],"map":["/static/js/2.00ed587c.chunk.js.map"],"chunks":[2]},"3":{"js":["/static/js/3.9ad6742f.chunk.js"],"map":["/static/js/3.9ad6742f.chunk.js.map"],"chunks":[3]},"client":{"css":["/static/css/client.389fc836.css"],"js":["/static/js/client.cb8291fb.js"],"map":["/static/css/client.389fc836.css.map","/static/js/client.cb8291fb.js.map"],"chunks":[0]},"noentry":{"ico":["/favicon.ico"],"txt":["/robots.txt","/static/js/1.4c6a6d8a.chunk.js.LICENSE.txt","/static/js/3.9ad6742f.chunk.js.LICENSE.txt","/static/js/client.cb8291fb.js.LICENSE.txt"],"svg":["/static/media/chevron-down.c16040f3.svg","/static/media/plus.cc6d96c4.svg"]}}')},function(e,t,n){"use strict";n.r(t),n.d(t,"renderApp",(function(){return y}));var r=n(9),a=n.n(r),o=n(0),l=n.n(o),i=n(14),s=n(3);var c=({children:e})=>{const{0:t,1:n}=Object(o.useState)(!1);return Object(o.useEffect)(()=>{n(!0)},[]),t?e:null},u=n(5),d=n(6),m=(n(22),l.a.createElement);const f=l.a.lazy(()=>Promise.resolve().then(n.bind(null,25))),p=l.a.lazy(()=>Promise.resolve().then(n.bind(null,27))),g=l.a.lazy(()=>Promise.resolve().then(n.bind(null,26)));var b=()=>m(s.Switch,null,m(c,null,m(d.c,null,m(s.Route,{exact:!0,path:u.a.home,render:()=>m(l.a.Suspense,{fallback:m("div",null,"Loading ...")},m(g,null))}),m(s.Route,{exact:!0,path:u.a.select_palette,render:()=>m(l.a.Suspense,{fallback:m("div",null,"Loading ...")},m(p,null))}),m(s.Route,{exact:!0,path:u.a.design_tool,render:()=>m(l.a.Suspense,{fallback:m("div",null,"Loading ...")},m(f,null))}),m(s.Route,{exact:!0,path:u.a.design_tool_noID,render:()=>m(l.a.Suspense,{fallback:m("div",null,"Loading ...")},m(f,null))})))),h=l.a.createElement;let v;v=n(23);const y=(e,t)=>{const n={},r=Object(i.renderToString)(h(s.StaticRouter,{context:n,location:e.url},h(b,null)));if(n.url)return{redirect:n.url};return{html:`<!doctype html>\n    <html lang="">\n    <head>\n        <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n        <meta charSet='utf-8' />\n        <title>Welcome to Razzle</title>\n        <meta name="viewport" content="width=device-width, initial-scale=1">\n        ${((e,t)=>e[t]&&e[t].css?e[t].css.map(e=>`<link rel="stylesheet" href="${e}">`).join(""):"")(v,"client")}\n    </head>\n    <body>\n        <div id="root">${r}</div>\n        ${((e,t,n="")=>e[t]&&e[t].js?e[t].js.map(e=>`<script src="${e}"${n}><\/script>`).join(""):"")(v,"client"," defer crossorigin")}\n    </body>\n  </html>`}},x=a()().disable("x-powered-by").use(a.a.static("build\\public")).get("/*",(e,t)=>{const{html:n="",redirect:r=!1}=y(e,t);r?t.redirect(r):t.send(n)});t.default=x},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(6),l=a.a.createElement;var i=({variations:e,variationIndex:t,setVariationIndex:n})=>l("div",{className:"flex"},e.map((e,r)=>l("p",{key:r,className:`${t===r?"text-red-100":"text-red-800"} block px-4 py-2 mr-1 ml-1 text-sm cursor-pointer rounded border border-gray-900 ${t===r?"bg-red-700 hover:bg-red-800":""}`,onClick:()=>n(r),role:"menuitem",tabIndex:-1},e.name))),s=n(11),c=a.a.createElement;var u=({handleSaveVariation:e,templateData:t})=>{const[n,r]=Object(s.useImmerState)({name:"untitled",face:"#FF0000"});return c("div",{className:"fixed z-10 inset-0 overflow-y-auto","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},c("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},c("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity","aria-hidden":"true"}),c("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"​"),c("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"},c("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},c("div",{className:""},c("label",null,"Name: "),c("input",{type:"text",placeholder:"Variation name",onChange:e=>r(t=>{t.name=e.target.value})}),c("div",null,"Current face: ",c("div",{className:"w-10 h-10 m-5 border border-black",style:{backgroundColor:n.face}})),c("p",null,"Select face: "),t.palette.map((e,t)=>c("div",{key:t,className:"inline-block"},c("div",{className:"w-10 h-10 m-5 border border-black",style:{backgroundColor:e.color},onClick:()=>r(t=>{t.face=e.color})}))))),c("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"},c("button",{onClick:()=>e(n),type:"button",className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"},"Save")))))},d=n(10),m=n.n(d),f=n(17),p=n.n(f);const g=["onClick","startIcon","endIcon","error","helperText","className","label"];var b=a.a.createElement;function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const y=e=>{let{onClick:t,startIcon:n,endIcon:r,error:o,helperText:l,className:i,label:s}=e,c=v(e,g);return b(a.a.Fragment,null,b("div",{className:"mb-4 relative  "},b("label",{className:"text-jacksonsPurple"},s),b("br",null),b("input",h({},c,{className:i,style:{textIndent:n?"15px":""}})),b("img",{src:n,alt:"error",width:"18",className:n?" absolute left-0 top-0 mt-9 ml-2":"hidden"}),b("img",{onClick:t,src:r,alt:"error",width:"18",className:r?"absolute right-0 top-0 mt-9 mr-4  cursor-pointer ":"hidden"}),b("p",{className:l?"text-red text-sm pl-2 transition duration-500":"hidden"},l)))};var x=Object(r.memo)(y);const w=["isLoading","loadingProps","startIcon","endIcon","className","style","children"];var O=a.a.createElement;function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const N=e=>{let{isLoading:t,loadingProps:n,startIcon:r,endIcon:o,className:l,style:i,children:s}=e,c=k(e,w);return O(a.a.Fragment,null,O("button",j({className:l||"w-full  justify-center place-items-center flex focus:outline-none relative ",style:{paddingLeft:r?"30px":""}},c),t?O("svg",j({className:"animate-spin w-6 ",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"white"},n),O("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})):s),O("img",{src:r,alt:"error",width:"20",className:r?"absolute    ml-2 ":"hidden"}),O("img",{src:o,alt:"error",width:"20",className:o?"absolute right-0 top-0 mt-3.5 mr-4  cursor-pointer ":"hidden"}))};var S=Object(r.memo)(N);var P=(e,t,n,r,a)=>{let o=new Blob([`<svg xmlns="${e}" fill="${n}" viewBox="${t}" stroke="${r}">${a}</svg>`],{type:"image/svg+xml"});return URL.createObjectURL(o)},C=n(18),E=n.n(C);const D=e=>{if(e){let t=null==e?void 0:e.toLowerCase().split("_");for(let e=0;e<(null==t?void 0:t.length);e++)t[e]=t[e][0].toUpperCase()+t[e].slice(1);return null==t?void 0:t.join(" ")}return console.log("no value to convert to titleCase"),e||""},I=["label","value","onChange","dataArray","width"];var T=a.a.createElement;function M(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const F=e=>{let{label:t,value:n,onChange:o,dataArray:l,width:i}=e;M(e,I);const{ref:s,isComponentVisible:c,setIsComponentVisible:u}=function(e){const{0:t,1:n}=Object(r.useState)(e),a=Object(r.useRef)(null),o=e=>{a.current&&!a.current.contains(e.target)&&n(!1)};return Object(r.useEffect)(()=>(document.addEventListener("click",o,!0),()=>{document.removeEventListener("click",o,!0)})),{ref:a,isComponentVisible:t,setIsComponentVisible:n}}(!1);return T(a.a.Fragment,null,T("div",{className:"flex flex-col bg-gray94  w-60 "},T("label",{className:"text-base text-left text-grey top-16  "},t),T("div",{className:" w-full relative",ref:s},T("button",{onClick:()=>u(!c),className:"relative bg-white text-left pl-5 w-full border py-2 border-gray95 rounded-md shadow-sm cursor-pointer focus:outline-none text-jacksonsPurple focus:ring-1 focus:ring-radicalRed focus:border-radicalRed text-base"},T("h2",{className:"truncate"},D(n)),T("div",{className:"absolute inset-y-0 right-0 pr-2 flex items-center  pointer-events-none"},T("img",{src:E.a,className:"w-4 "}))),T("ul",{className:c?"w-full absolute z-20 mt-1  bg-white shadow-lg  rounded-md py-1 text-base ring-1 ring-black ring-opacity-5  focus:outline-none sm:text-sm":"hidden"},(null==l?void 0:l.length)&&l.map((e,t)=>T("li",{key:t,className:"text-mineShaft select-none cursor-pointer relative py-2 pl-3 pr-9 hover:bg-gray94  ",value:e,onClick:()=>{o(e),u(!1)}},T("div",{className:"flex items-center"},T("h2",{className:"text-jacksonsPurple font-normal ml-3 block truncate "},D(e)))))))))};var A=Object(r.memo)(F),R=a.a.createElement;var L=({templateData:e,handleSaveTemplate:t})=>{const{0:n,1:a}=Object(r.useState)([]),{0:o,1:l}=Object(r.useState)(!0),{0:i,1:s}=Object(r.useState)(""),{0:c,1:u}=Object(r.useState)(["cat1","cat2","cat3"]),{0:d,1:f}=Object(r.useState)(c[0]);Object(r.useEffect)(()=>{var t;null!==(t=e.tags)&&void 0!==t&&t.length&&a(e.tags)},[]);const g=P("http://www.w3.org/2000/svg","0 0 24 24","white","#FF3C69",'  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />'),b=e=>{if(!e)return;n.filter(t=>t==e).length&&!o?m()({title:"Tag already added",icon:"error"}):(a([...n,e]),l(!1))},h=()=>{t(n,d)};return R("div",{className:"fixed z-10 inset-0 overflow-y-auto","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},R("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},R("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity","aria-hidden":"true"}),R("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"​"),R("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"},R("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},R("div",{className:"h-96"},R("div",null,R(x,{label:"Enter Tag",id:"tagName",name:"tagName",value:i,onChange:e=>{s(e.target.value)},placeholder:"Enter tag",onKeyDown:e=>{"Enter"===e.key&&(b(i),s(""))},onClick:()=>{b(i),s("")},endIcon:p.a,className:"relative  border border-grey appearance-none rounded w-full p-2 mt-0 focus:outline-none cursor-text"}),R("div",{className:"flex flex-grow flex-wrap flex-col"},n.map((e,t)=>R("div",{key:t,className:"flex justify-between rounded-3xl px-5 py-1 border-radicalRed border-2 mt-1 text-radicalRed "},R("p",null,e),R("img",{onClick:()=>(e=>{let t=[...n];t.splice(e,1),a(t)})(t),src:g,alt:"error",className:"w-4  cursor-pointer "})))),R("div",{className:"z-20"},R(A,{label:"Select Category",value:d,onChange:e=>{f(e)},dataArray:c}))))),R("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 flex justify-between"},R("div",{className:"mt-2"},R(S,{loadingProps:{size:24,style:{color:"white"}},disableElevation:!0,onClick:h,type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:"red-button"},"Close")),R("div",{className:"mt-2"},R(S,{loadingProps:{size:24,style:{color:"white"}},disableElevation:!0,onClick:h,type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:"red-button"},"Save Template"))))))},_=n(2);function B(e){return(new DOMParser).parseFromString(e,"image/svg+xml")}function X(e){return e.getAttribute("fill")}var U=n(12),Y=a.a.createElement;function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){$(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var q=({variationIndex:e,setTemplateData:t})=>{const[n,r]=Object(U.useFileUpload)();return Y("div",null,Y("div",{className:"flex justify-center"},Y("button",{className:"inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",onClick:()=>{t(t=>{let n=(new Date).getTime();t.variations[e].elements.push(z(z({},_.d),{},{id:"shapes_"+n.toString()}))})}},"Add new Square")),Y("div",{className:"flex justify-center"},Y("button",{className:"inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",onClick:()=>{t(t=>{let n=(new Date).getTime();t.variations[e].elements.push(z(z({},_.a),{},{id:"shapes_"+n.toString()}))})}},"Add new Circle")),Y("div",{className:"flex justify-center"},Y("button",{className:"inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",onClick:()=>{t(t=>{let n=(new Date).getTime();t.variations[e].elements.push(z(z({},_.h),{},{id:"shapes_"+n.toString()}))})}},"Add new Triangle")),Y("div",{className:"flex justify-center"},Y("button",{className:"inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",onClick:()=>{t(t=>{let n=(new Date).getTime();t.variations[e].elements.push(z(z({},_.c),{},{id:"shapes_"+n.toString()}))})}},"Add new Pentagon")),Y("div",{className:"flex justify-center"},Y("button",{className:"inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",onClick:()=>{t(t=>{let n=(new Date).getTime();t.variations[e].elements.push(z(z({},_.e),{},{id:"shapes_"+n.toString()}))})}},"Add new Rounded Square")),Y("div",{className:"flex justify-center"},Y("button",{className:"inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",onClick:()=>{t(t=>{let n=(new Date).getTime();t.variations[e].elements.push(z(z({},_.g),{},{id:"textBoxes_"+n.toString()}))})}},"Add new Text")),Y("div",{className:"flex justify-center"},Y("p",null,"upload svg"),Y("input",{className:"",type:"file",accept:".svg",onChange:n=>{var r;(r=n.target.files,new Promise((e,t)=>{try{var n=new FileReader;n.onload=function(t){var n=t.target.result,r=(new DOMParser).parseFromString(n,"image/svg+xml");e(r.documentElement.outerHTML)},n.readAsText(r[0])}catch(e){t(e)}})).then(n=>{t(t=>{let r=(new Date).getTime();t.variations[e].elements.push(z({id:"svgs_"+r.toString(),svgString:n},_.f))})})}})),Y("div",{className:"flex justify-center"},Y("button",{className:"inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",onClick:()=>{r({accept:"image/png, image/jpg, image/jpeg",multiple:!1},({file:n})=>{const r=new FileReader;r.readAsDataURL(n),r.onload=()=>{t(t=>{let n=(new Date).getTime();t.variations[e].elements.push(z(z({},_.b),{},{src:r.result,id:"images_"+n.toString()}))})}})}},"Upload image")))},V=n(19),J=n.n(V),W=a.a.createElement;var H=({onUndo:e,onRedo:t,setTemplateData:n,variationIndex:r,selectedId:a})=>W("div",{className:"flex justify-center"},W("div",{className:"flex justify-center"},W("button",{onClick:()=>{a&&"shapes_background"!==a&&n(e=>{const t=e.variations[r].elements.findIndex(e=>e.id===a);if(t<e.variations[r].elements.length-1){const n=e.variations[r].elements[t+1];e.variations[r].elements[t+1]=e.variations[r].elements[t],e.variations[r].elements[t]=n}})},className:"inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"},"Bring to front")),W("div",{className:"flex justify-center"},W("button",{onClick:()=>{a&&"shapes_background"!==a&&n(e=>{const t=e.variations[r].elements.findIndex(e=>e.id===a);if(t>1){const n=e.variations[r].elements[t-1];e.variations[r].elements[t-1]=e.variations[r].elements[t],e.variations[r].elements[t]=n}})},className:"inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"},"Bring to Back")),W("div",{className:"flex justify-center"},W("button",{onClick:e,className:"inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"},"Undo")),W("div",{className:"flex justify-center"},W("button",{onClick:t,className:"inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"},"Redo"))),K=n(1),Q=n(4),Z=n.n(Q);const ee=["patternImageUrl"];var te=a.a.createElement;function ne(){return(ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(Object(n),!0).forEach((function(t){oe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function le(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var ie=({shapeProps:e,onSelect:t,onChange:n,onEditClick:o})=>{const l=Object(r.useRef)(null),{patternImageUrl:i}=e,s=le(e,ee),[c]=Z()(i||null),u=s.width,d=s.height,m=c?c.width:10,f=c?c.height:10,p=s.patternScale||Math.max(u/m,d/f);return te(a.a.Fragment,null,te(K.Rect,ne({ref:l,onClick:t,onTap:t,onDblClick:o,onDblTap:o,draggable:!0,strokeScaleEnabled:!1,onTransformEnd:t=>{const r=l.current,a=r.scaleX(),o=r.scaleY();r.scaleX(1),r.scaleY(1),n(ae(ae({},e),{},{x:r.x(),y:r.y(),width:Math.max(r.width()*a),height:Math.max(r.height()*o)}))},onDragEnd:t=>{n(ae(ae({},e),{},{x:t.target.x(),y:t.target.y()}))},fillPatternImage:c,fillPatternOffsetX:0,fillPatternOffsetY:0,fillPatternScaleX:p,fillPatternScaleY:p,fillPatternRepeat:"no-repeat"},s)))};const se=["patternImageUrl"];var ce=a.a.createElement;function ue(){return(ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function de(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?de(Object(n),!0).forEach((function(t){fe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):de(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pe(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var ge=({shapeProps:e,onSelect:t,onChange:n,onEditClick:o})=>{const l=Object(r.useRef)(null),{patternImageUrl:i}=e,s=pe(e,se),[c]=Z()(i||null);return ce(a.a.Fragment,null,ce(K.Circle,ue({ref:l,onClick:t,onTap:t,onDblClick:o,onDblTap:o,draggable:!0,strokeScaleEnabled:!1,onTransformEnd:t=>{n(me(me({},e),{},{scaleX:t.target.attrs.scaleX,scaleY:t.target.attrs.scaleY}))},onDragEnd:t=>{n(me(me({},e),{},{x:t.target.x(),y:t.target.y()}))},fillPatternImage:c,fillPatternOffsetX:0,fillPatternOffsetY:0,fillPatternScaleX:.1,fillPatternScaleY:.1,fillPatternRepeat:"no-repeat"},s)))};const be=["patternImageUrl"];var he=a.a.createElement;function ve(){return(ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function xe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ye(Object(n),!0).forEach((function(t){we(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ye(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function we(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Oe(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var je=({shapeProps:e,onSelect:t,onChange:n,onEditClick:o})=>{const l=Object(r.useRef)(null),{patternImageUrl:i}=e,s=Oe(e,be),[c]=Z()(i||null);return he(a.a.Fragment,null,he(K.RegularPolygon,ve({ref:l,onClick:t,onTap:t,onDblClick:o,onDblTap:o,draggable:!0,strokeScaleEnabled:!1,onDragEnd:t=>{n(xe(xe({},e),{},{x:t.target.x(),y:t.target.y()}))},onTransformEnd:t=>{n(xe(xe({},e),{},{scaleX:t.target.attrs.scaleX,scaleY:t.target.attrs.scaleY}))},fillPatternImage:c,fillPatternOffsetX:0,fillPatternOffsetY:0,fillPatternScaleX:.1,fillPatternScaleY:.1,fillPatternRepeat:"no-repeat"},s)))};const ke=["patternImageUrl"];var Ne=a.a.createElement;function Se(){return(Se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Pe(Object(n),!0).forEach((function(t){Ee(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function De(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Ie=({shapeProps:e,onSelect:t,onChange:n,onEditClick:o})=>{const l=Object(r.useRef)(null),{patternImageUrl:i}=e,s=De(e,ke),[c]=Z()(i||null);return Ne(a.a.Fragment,null,Ne(K.Line,Se({ref:l,onClick:t,onTap:t,onDblClick:o,onDblTap:o,draggable:!0,strokeScaleEnabled:!1,onTransformEnd:t=>{n(Ce(Ce({},e),{},{scaleX:t.target.attrs.scaleX,scaleY:t.target.attrs.scaleY}))},onDragEnd:t=>{n(Ce(Ce({},e),{},{x:t.target.x(),y:t.target.y()}))},fillPatternImage:c,fillPatternOffsetX:0,fillPatternOffsetY:0,fillPatternScaleX:.1,fillPatternScaleY:.1,fillPatternRepeat:"no-repeat"},s)))},Te=a.a.createElement;function Me(){return(Me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Fe=({svgProps:e,onChange:t,onSelect:n,onEditClick:r})=>{const[o]=Z()((l=function(e,t){const n=B(e);var r=n.getElementsByTagName("*");for(const e of r){const n=X(e);t[n]&&e.setAttribute("fill",t[n])}return(new XMLSerializer).serializeToString(n)}(e.svgString,e.colorMap),"data:image/svg+xml;base64,"+window.btoa(unescape(encodeURIComponent(l)))));var l;return Te(a.a.Fragment,null,Te(K.Image,Me({},e,{image:o,onClick:n,onTap:n,onDblClick:r,onDblTap:r,onDragEnd:t,onTransformEnd:t})))},Ae=a.a.createElement;function Re(){return(Re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Le=({textProps:e,onChange:t,onSelect:n,onEditClick:a})=>{const o=Object(r.useRef)(null);return Ae(K.Text,Re({ref:o,draggable:!0,onClick:n,onTap:n,onDblClick:a,onDblTap:a,onTransform:e=>{let t=o.current.scaleX(),n=o.current.width();o.current.setAttrs({width:n*t,scaleX:1,scaleY:1})},onDragEnd:t},e))},_e=a.a.createElement;function Be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Xe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Be(Object(n),!0).forEach((function(t){Ue(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Be(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ye=({id:e,selectedShapeName:t,templateData:n,$tr:o})=>{Object(r.useEffect)(()=>{l()},[t,n.variations]);const l=()=>{const e=o.current.getStage().findOne("#"+t);e?o.current.nodes([e]):o.current.detach(),o.current.getLayer().batchDraw()};return _e(a.a.Fragment,null,_e(K.Transformer,{id:e,ref:o,ignoreStroke:!0,boundBoxFunc:(e,n)=>"shapes_background"===t?e:n.width<50?Xe(Xe({},e),{},{width:50}):n}))};const Ge=["src"];var ze=a.a.createElement;function $e(){return($e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function qe(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Ve=({imageProps:e,onChange:t,onSelect:n})=>{const[r]=Z()(e.src),{src:o}=e,l=qe(e,Ge);return ze(a.a.Fragment,null,ze(K.Image,$e({},l,{image:r,onClick:()=>n(e.id),onTap:()=>n(e.id),onDragEnd:t,onTransformEnd:t})))},Je=a.a.createElement;function We(){return(We=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function He(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ke(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?He(Object(n),!0).forEach((function(t){Qe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):He(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Qe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ze=({templateData:e,setTemplateData:t,variationIndex:n,selectedId:o,setSelectedId:l,unSelectAll:i,handleEditSelectedItem:s})=>{var c;const u=Object(r.useRef)(null),d=Object(r.useRef)(null),m=Object(r.useRef)(null),f=Object(r.useRef)(null),p=Object(r.useRef)({visible:!1,x1:0,y1:0,x2:0,y2:0}),{0:g,1:b}=Object(r.useState)([]),h=window.Konva,v=()=>{const e=f.current;e.setAttrs({visible:p.current.visible,x:Math.min(p.current.x1,p.current.x2),y:Math.min(p.current.y1,p.current.y2),width:Math.abs(p.current.x1-p.current.x2),height:Math.abs(p.current.y1-p.current.y2),fill:"rgba(0, 161, 255, 0.3)"}),e.getLayer().batchDraw()},y=a.a.useRef(null);return Je(K.Stage,We({ref:u,onMouseDown:e=>{const t=e.target.findAncestor(".elements-container"),n=e.target.findAncestor("Transformer");if(t||n)return;const r=e.target.getStage().getPointerPosition();p.current.visible=!0,p.current.x1=r.x,p.current.y1=r.y,p.current.x2=r.x,p.current.y2=r.y,v()},onMouseUp:()=>{if(y.current=null,!p.current.visible)return;const e=f.current.getClientRect(),t=[];d.current.find(".object").forEach(n=>{const r=n.getClientRect();h.Util.haveIntersection(e,r)&&t.push(n)}),m.current.nodes(t),p.current.visible=!1,h.listenClickTap=!1,v()},onMouseMove:e=>{if(!p.current.visible)return;const t=e.target.getStage().getPointerPosition();p.current.x2=t.x,p.current.y2=t.y,v()},onTouchStart:e=>{e.target===e.target.getStage()&&(i(),m.current.nodes([]),b([]))},onClick:e=>{if(f.current.visible())return;let t=e.target.getStage(),n=d.current,r=m.current;if(e.target===t)return i(),b([]),r.nodes([]),void n.draw();if(!e.target.hasName(".object"))return;const a=e.evt.shiftKey||e.evt.ctrlKey||e.evt.metaKey,o=r.nodes().indexOf(e.target)>=0;if(a||o){if(a&&o){const t=r.nodes().slice();t.splice(t.indexOf(e.target),1),r.nodes(t)}else if(a&&!o){const t=r.nodes().concat([e.target]);r.nodes(t)}}else r.nodes([e.target]);n.draw()}},_.j),Je(K.Layer,{ref:d,onDragMove:e=>{const t=d.current.find(".guid-line");t.length&&t.forEach(e=>e.destroy());const n=((e,t)=>{const n=[],r=[];e.vertical.forEach(e=>{t.vertical.forEach(t=>{const r=Math.abs(e-t.guide);r<5&&n.push({lineGuide:e,diff:r,snap:t.snap,offset:t.offset})})}),e.horizontal.forEach(e=>{t.horizontal.forEach(t=>{const n=Math.abs(e-t.guide);n<5&&r.push({lineGuide:e,diff:n,snap:t.snap,offset:t.offset})})});const a=[],o=n.sort((e,t)=>e.diff-t.diff)[0],l=r.sort((e,t)=>e.diff-t.diff)[0];return o&&a.push({lineGuide:o.lineGuide,offset:o.offset,orientation:"V",snap:o.snap}),l&&a.push({lineGuide:l.lineGuide,offset:l.offset,orientation:"H",snap:l.snap}),a})((e=>{const t=[0,_.j.width/2,_.j.width],n=[0,_.j.height/2,_.j.height];return u.current.find(".object").forEach(r=>{if(r===e)return;const a=r.getClientRect();t.push([a.x,a.x+a.width,a.x+a.width/2]),n.push([a.y,a.y+a.height,a.y+a.height/2])}),{vertical:t.flat(),horizontal:n.flat()}})(e.target),(e=>{const t=e.getClientRect();return{vertical:[{guide:Math.round(t.x),offset:Math.round(e.x()-t.x),snap:"start"},{guide:Math.round(t.x+t.width/2),offset:Math.round(e.x()-t.x-t.width/2),snap:"center"},{guide:Math.round(t.x+t.width),offset:Math.round(e.x()-t.x-t.width),snap:"end"}],horizontal:[{guide:Math.round(t.y),offset:Math.round(e.y()-t.y),snap:"start"},{guide:Math.round(t.y+t.height/2),offset:Math.round(e.y()-t.y-t.height/2),snap:"center"},{guide:Math.round(t.y+t.height),offset:Math.round(e.y()-t.y-t.height),snap:"end"}]}})(e.target));n.length&&((e=>{e.forEach(e=>{if("H"===e.orientation){const t=new h.Line({points:[-6e3,e.lineGuide,6e3,e.lineGuide],stroke:"rgb(0, 161, 255)",strokeWidth:1,name:"guid-line",dash:[4,6]});d.current.add(t),d.current.batchDraw()}else if("V"===e.orientation){const t=new h.Line({points:[e.lineGuide,-6e3,e.lineGuide,6e3],stroke:"rgb(0, 161, 255)",strokeWidth:1,name:"guid-line",dash:[4,6]});d.current.add(t),d.current.batchDraw()}})})(n),n.forEach(t=>{switch(t.snap){case"start":case"center":case"end":switch(t.orientation){case"V":e.target.x(t.lineGuide+t.offset);break;case"H":e.target.y(t.lineGuide+t.offset);break;default:return}break;default:return}}))},onDragEnd:e=>{const t=d.current.find(".guid-line");t.length&&t.forEach(e=>e.destroy()),d.current.batchDraw()}},null===(c=e.variations[n].elements)||void 0===c?void 0:c.map((e,r)=>"rectangle"===e.type?Je(ie,{key:r,shapeProps:e,onSelect:t=>{if(void 0!==t.current){let e=g;g.includes(t.current)||e.push(t.current),b(e),m.current.nodes(g),m.current.nodes(g),m.current.getLayer().batchDraw()}l(e.id)},onEditClick:s,onChange:r=>{t(t=>{const a=t.variations[n].elements.findIndex(t=>t.id===e.id);t.variations[n].elements[a]=r})}}):"circle"===e.type?Je(ge,{key:r,shapeProps:e,onSelect:()=>{l(e.id)},onEditClick:s,onChange:r=>{t(t=>{const a=t.variations[n].elements.findIndex(t=>t.id===e.id);t.variations[n].elements[a]=r})}}):"line"===e.type?Je(Ie,{key:r,shapeProps:e,onSelect:()=>{l(e.id)},onEditClick:s,onChange:r=>{t(t=>{const a=t.variations[n].elements.findIndex(t=>t.id===e.id);t.variations[n].elements[a]=r})}}):"polygon"===e.type?Je(je,{key:r,shapeProps:e,onSelect:()=>{l(e.id)},onEditClick:s,onChange:r=>{t(t=>{const a=t.variations[n].elements.findIndex(t=>t.id===e.id);t.variations[n].elements[a]=r})}}):"svg"===e.type?Je(Fe,{key:r,svgProps:e,onSelect:()=>{l(e.id)},onEditClick:s,onChange:r=>t(t=>{const a=t.variations[n].elements.findIndex(t=>t.id===e.id);t.variations[n].elements[a]=Ke(Ke({},t.variations[n].elements[a]),JSON.parse(JSON.stringify(r.target.attrs)))})}):"image"===e.type?Je(Ve,{key:r,imageProps:e,onSelect:()=>{l(e.id)},onChange:r=>t(t=>{const a=t.variations[n].elements.findIndex(t=>t.id===e.id);t.variations[n].elements[a]=Ke(Ke({},t.variations[n].elements[a]),JSON.parse(JSON.stringify(r.target.attrs)))})}):"text"===e.type?Je(Le,{key:r,textProps:e,onSelect:()=>{l(e.id)},onEditClick:s,onChange:r=>t(t=>{const a=t.variations[n].elements.findIndex(t=>t.id===e.id);t.variations[n].elements[a]=Ke({},r.target.attrs)})}):void 0),Je(Ye,{id:"tr"+o,$tr:m,selectedShapeName:o,templateData:e}),Je(K.Rect,{fill:"rgba(0,0,255,0.5)",ref:f})))},et=a.a.createElement;var tt=({selectedId:e,variationIndex:t,templateData:n,setTemplateData:a,handleCloseEditTextModal:o})=>{const{0:l,1:i}=Object(r.useState)(""),{0:s,1:c}=Object(r.useState)(20),{0:u,1:d}=Object(r.useState)("normal"),{0:m,1:f}=Object(r.useState)(_.i[0]),{0:p,1:g}=Object(r.useState)("left");Object(r.useEffect)(()=>{if("textBoxes"===(null==e?void 0:e.split("_")[0])){const r=n.variations[t].elements.findIndex(t=>t.id===e);i(n.variations[t].elements[r].text),c(n.variations[t].elements[r].fontSize),f(n.variations[t].elements[r].fontFamily),g(n.variations[t].elements[r].align)}},[e]);return et("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"},et("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},et("div",{className:""},et("p",null,"Font Size:"),et("input",{className:"border mb-5",type:"number",value:s,onChange:e=>c(parseInt(e.target.value))}),et("p",null,"Select Font style:"),et("select",{className:"border mb-5",name:"font-style",onChange:e=>d(e.target.value)},et("option",{value:"normal"},"normal"),et("option",{value:"bold"},"bold"),et("option",{value:"italic"},"italic"),et("option",{value:"italic bold"},"italic bold")),et("p",null,"Select Text Alignment:"),et("select",{className:"border mb-5",name:"text-align",onChange:e=>g(e.target.value)},et("option",{value:"left"},"left"),et("option",{value:"center"},"center"),et("option",{value:"right"},"right")),et("p",null,"Select font family:"),et("select",{value:m,style:{fontFamily:m},onChange:e=>f(e.target.value),className:"border mb-5"},_.i.map((e,t)=>et("option",{className:"bg-white text-black",style:{fontFamily:e},key:t,selected:e===m,value:e},e)))),et("div",{className:""},et("textarea",{className:"border h-40 w-full",style:{fontFamily:m,fontSize:s,fontStyle:u,textAlign:p},value:l,onChange:e=>i(e.target.value)}))),et("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"},et("button",{onClick:()=>{a(n=>{const r=n.variations[t].elements.findIndex(t=>t.id===e);n.variations[t].elements[r].text=l,n.variations[t].elements[r].fontSize=s,n.variations[t].elements[r].fontStyle=u,n.variations[t].elements[r].fontFamily=m,n.variations[t].elements[r].align=p}),o()},type:"button",className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"},"Done")))},nt=n(7),rt=a.a.createElement;var at=({selectedId:e,templateData:t,setTemplateData:n,variationIndex:r,currentPalette:a})=>{const[o,l]=Object(U.useFileUpload)(),i=t=>{n(n=>{const a=n.variations[r].elements.find(t=>t.id===e);a.fill=t,a.patternImageUrl=void 0})},s=(t,a)=>{n(n=>{const o=n.variations[r].elements.find(t=>t.id===e);o.fill="",o.fillLinearGradientColorStops=[0,t,1,a],o.fillLinearGradientStartPoint={x:0,y:0},o.fillLinearGradientEndPoint={x:"shapes_background"===e?_.j.width:100,y:"shapes_background"===e?_.j.height:100},o.patternImageUrl=void 0})},c=t=>{n(n=>{n.variations[r].elements.find(t=>t.id===e).fillPatternScaleX=parseFloat(t.target.value)})},u=t=>{n(n=>{n.variations[r].elements.find(t=>t.id===e).fillPatternScaleY=parseFloat(t.target.value)})},d=t=>{n(n=>{n.variations[r].elements.find(t=>t.id===e).fillPatternOffsetX=parseFloat(t.target.value)})},m=t=>{n(n=>{n.variations[r].elements.find(t=>t.id===e).fillPatternOffsetY=parseFloat(t.target.value)})},f=t.variations[r].elements.find(t=>t.id===e);return rt("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"},rt("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},rt("div",{className:"shapes_background"!==e?"":"hidden"},rt("p",null,"Border width: "),rt("input",{className:"border mb-5",type:"number",min:0,value:null==f?void 0:f.strokeWidth,onChange:t=>{n(n=>{n.variations[r].elements.find(t=>t.id===e).strokeWidth=parseInt(t.target.value)})}}),rt("p",null,"Corner radius:"),rt("input",{className:"border mb-5",type:"number",min:0,value:null==f?void 0:f.cornerRadius,onChange:t=>{n(n=>{n.variations[r].elements.find(t=>t.id===e).cornerRadius=parseInt(t.target.value)})}}),rt("p",null,"Opacity: "),rt("input",{className:"border mb-5",type:"number",value:null==f?void 0:f.opacity,step:.1,min:.1,max:1,onChange:t=>{n(n=>{n.variations[r].elements.find(t=>t.id===e).opacity=parseFloat(t.target.value)})}}),rt("p",null,"Image Scale X: "),rt("input",{className:"border mb-5",type:"number",step:.1,value:null==f?void 0:f.fillPatternScaleX,onChange:c}),rt("p",null,"Image Scale Y: "),rt("input",{className:"border mb-5",type:"number",step:.1,value:null==f?void 0:f.fillPatternScaleY,onChange:u}),rt("p",null,"Image offset X: "),rt("input",{className:"border mb-5",type:"number",step:.1,value:null==f?void 0:f.fillPatternOffsetX,onChange:d}),rt("p",null,"Image offset Y: "),rt("input",{className:"border mb-5",type:"number",step:.1,value:null==f?void 0:f.fillPatternOffsetY,onChange:m}),rt("p",null,"Borer color:"),rt(nt.SketchPicker,{width:"150px",color:null==f?void 0:f.stroke,onChange:t=>{n(n=>{n.variations[r].elements.find(t=>t.id===e).stroke=t.hex})}})),rt("div",{className:null!=f&&f.fillPatternImage?"":"hidden"},rt("p",null,"Image Offset X: "),rt("input",{className:"border mb-5",type:"number",value:null==f?void 0:f.fillPatternOffsetX,step:.1,min:.1,max:1,onChange:d}),rt("p",null,"Image Offset Y: "),rt("input",{className:"border mb-5",type:"number",value:null==f?void 0:f.fillPatternOffsetY,step:.1,min:.1,max:1,onChange:m}),rt("p",null,"Image Scale X: "),rt("input",{className:"border mb-5",type:"number",value:null==f?void 0:f.fillPatternScaleX,step:.1,min:.1,max:1,onChange:c}),rt("p",null,"Image Scale Y: "),rt("input",{className:"border mb-5",type:"number",value:null==f?void 0:f.fillPatternScaleY,step:.1,min:.1,max:1,onChange:u})),rt("div",null,a.map((e,t)=>rt("div",{key:t,className:"h-10 mt-5 mb-5 flex flex-wrap justify-center content-center"},rt("p",{className:"w-48"},"Select ",e.name)," ",rt("div",{className:"w-10 h-10 border border-black",style:{backgroundColor:e.color},onClick:()=>i(e.color)})))),rt("div",{className:"sm:flex sm:items-start"},rt(nt.SketchPicker,{width:"100%",color:null==f?void 0:f.fill,onChange:e=>i(e.hex)}))),rt("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},rt("div",{className:"flex justify-center"},rt("button",{className:"inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",onClick:()=>{l({accept:"image/png, image/jpg, image/jpeg",multiple:!1},({file:t})=>{const a=new FileReader;a.readAsDataURL(t),a.onload=()=>{n(t=>{const n=t.variations[r].elements.find(t=>t.id===e);n.fill="",n.patternImageUrl=a.result})}})}},"Insert image"))),rt("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},rt("b",null,"Gradient:"),rt("div",{className:"grid grid-cols-2"},rt("div",null,rt("p",null,"Color 1"),rt("div",{className:"sm:flex sm:items-start"},rt(nt.SketchPicker,{width:"150px",color:null!=f&&f.fillLinearGradientColorStops?null==f?void 0:f.fillLinearGradientColorStops[1]:"#171717",onChange:e=>s(e.hex,null!=f&&f.fillLinearGradientColorStops?null==f?void 0:f.fillLinearGradientColorStops[3]:"#171717")}))),rt("div",null,rt("p",null,"Color 2"),rt("div",{className:"sm:flex sm:items-start"},rt(nt.SketchPicker,{width:"150px",color:null!=f&&f.fillLinearGradientColorStops?null==f?void 0:f.fillLinearGradientColorStops[3]:null==f?void 0:f.fill,onChange:e=>s(null!=f&&f.fillLinearGradientColorStops?null==f?void 0:f.fillLinearGradientColorStops[1]:null==f?void 0:f.fill,e.hex)}))))))},ot=a.a.createElement;var lt=({selectedId:e,templateData:t,setTemplateData:n,variationIndex:a})=>{const{0:o,1:l}=Object(r.useState)("#171717"),i=t.variations[a].elements.find(t=>t.id===e),s=function(e){var t=B(e).getElementsByTagName("*");const n=[];for(const e of t){const t=X(e);t&&-1===n.indexOf(t)&&n.push(t)}return n}(i.svgString),c=i.colorMap,u=(t,r)=>{n(n=>{n.variations[a].elements.find(t=>t.id===e).colorMap[t]=r})};return ot("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"},ot("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},ot("div",null,ot("p",null,"Select a color to edit"),s.map((e,t)=>ot("div",{key:t,className:"h-10 m-5 inline-block"},ot("div",{className:"w-10 h-10 border border-black",style:{backgroundColor:i.colorMap[e]||e},onClick:()=>l(e)})))),ot("div",{className:o?"":"hidden"},t.palette.map((e,t)=>ot("div",{key:t,className:"h-10 mt-5 mb-5 flex flex-wrap justify-center content-center"},ot("p",{className:"w-48"},"Select ",e.name)," ",ot("div",{className:"w-10 h-10 border border-black "+(o===e.color&&"opacity-50"),style:{backgroundColor:e.color},onClick:()=>u(o,e.color)})))),ot("div",{className:o?"sm:flex sm:items-start":"hidden"},ot(nt.SketchPicker,{width:"100%",color:c[o]||"#000000",onChange:e=>u(o,e.hex)}))))},it=a.a.createElement;var st=({selectedId:e,unSelectAll:t,isOpenColorPicker:n,isEditTextBox:r,templateData:a,setTemplateData:o,variationIndex:l,handleEditSelectedItem:i,handleDeleteSelectedItem:s,handleCloseEditTextModal:c})=>it("div",{className:"h-screen overflow-y-scroll"},it("div",{className:"flex justify-center"},it("button",{onClick:i,className:"images"===(null==e?void 0:e.split("_")[0])?"hidden":"inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"},"Edit")),it("div",{className:"flex justify-center"},it("button",{onClick:s,className:"shapes_background"===e?"hidden":"inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"},"Delete")),it("div",{className:"flex justify-center"},it("button",{onClick:t,className:"inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"},"Close")),n&&"shapes"===(null==e?void 0:e.split("_")[0])&&it(at,{selectedId:e,templateData:a,setTemplateData:o,variationIndex:l,currentPalette:a.palette}),n&&"svgs"===(null==e?void 0:e.split("_")[0])&&it(lt,{selectedId:e,templateData:a,setTemplateData:o,variationIndex:l}),r&&it(tt,{selectedId:e,templateData:a,setTemplateData:o,variationIndex:l,handleCloseEditTextModal:c})),ct=n(3),ut=n(5),dt=n(13),mt=n(8),ft=a.a.createElement;function pt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function gt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pt(Object(n),!0).forEach((function(t){bt(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function bt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=()=>{const e=Object(ct.useHistory)(),{0:t,1:n,2:{goForward:a,goBack:l,stepNum:s,history:c}}=Object(r.useContext)(o.b),{0:d,1:f}=Object(r.useState)(!1);let{templateID:p}=Object(ct.useParams)();const{data:g,error:b,isLoading:h}=Object(dt.useQuery)(["currentTemplate",p],()=>mt.a.getTemplateByID(p));Object(r.useEffect)(()=>{d||g&&!b&&(n(g),f(!0))},[g]);const{0:v,1:y}=Object(r.useState)(0),{0:x,1:w}=Object(r.useState)(!1),{0:O,1:j}=Object(r.useState)(null),{0:k,1:N}=Object(r.useState)(!1),{0:S,1:P}=Object(r.useState)(!1),{0:C,1:E}=Object(r.useState)(!1);Object(r.useEffect)(()=>{N(!1),P(!1)},[O]);const D=()=>{N(!1),P(!1),j(null)},I=e=>{"Escape"===e.key&&D()};Object(r.useEffect)(()=>(document.addEventListener("keydown",I,!1),J.a.load({google:{families:["Comfortaa","Josefin Sans","Euphoria Script","Oswald","Alfa Slab One","Bangers","Caveat","DM Sans","East Sea Dokdo","Homemade Apple","Kristi","Lobster Two","Maven Pro","Monoton","Montserrat","Playfair Display","Press Start 2P","Raleway","Roboto Slab","Shadows Into Light","Swanky and Moo Moo"]}}),()=>{document.removeEventListener("keydown",I,!1)}),[]);const T=()=>{"textBoxes"!==O.split("_")[0]?N(!0):P(!0)};return ft("div",{className:"min-w-max bg-gray300 h-screen"},ft("div",{className:"h-20 mb-5 flex flex-wrap justify-evenly content-center bg-gray900"},ft(ct.NavLink,{to:ut.a.select_palette,className:"text-white font-semibold py-2 px-4 border border-white-500 rounded"},"Select Palette"),ft("p",{className:"text-xl text-white"},"Tempalte Design"),ft("button",{onClick:()=>{E(!0)},className:"text-white font-semibold py-2 px-4 border border-white-500 rounded"},"Save Template")),x&&ft(u,{templateData:t,handleSaveVariation:e=>{n(t=>{t.variations[v].name=e.name,t.variations[v].face=e.face}),w(!1)}}),C&&ft(L,{templateData:t,handleSaveTemplate:async(n,r)=>{p?await mt.a.updateTemplateByID(p,gt(gt({},t),{},{tags:n})):(await mt.a.addNewTemplate(gt(gt({},t),{},{tags:n})),e.push(ut.a.home)),E(!1)}}),ft("div",{className:"grid grid-cols-3 gap-4"},ft(q,{variationIndex:v,setTemplateData:n}),ft("div",null,ft(H,{onUndo:()=>{j&&D(),s>0&&(v>0&&c[s].variations.length>c[s-1].variations.length&&y(v-1),l())},onRedo:()=>{j&&D(),s>0&&v>0&&c[s].variations.length>c[s+1].variations.length&&y(v-1),s<c.length-1&&a()},setTemplateData:n,variationIndex:v,selectedId:O}),ft("div",{className:"flex justify-center mt-5"},ft(Ze,{templateData:t,setTemplateData:n,variationIndex:v,selectedId:O,setSelectedId:j,unSelectAll:D,handleEditSelectedItem:T})),ft("div",{className:"flex justify-center mt-5"},ft(i,{variations:t.variations,variationIndex:v,setVariationIndex:y})),ft("div",{className:"flex justify-center"},ft("button",{className:"inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",onClick:()=>w(!0)},"Save Variation"),ft("button",{className:"inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",onClick:()=>{t.variations.length<3?(n(e=>{e.variations.push(t.variations[v])}),y(e=>e+1)):m()("Cannot create more than 3 variations!")}},"Add New Variation"),ft("button",{className:"inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",onClick:()=>{const e=t.variations.length;m()({title:"Are you sure?",text:"Do you want to delete this variation?",icon:"warning",buttons:["Cancel","Confirm"],dangerMode:!0}).then(t=>{t&&n(e>1?t=>{t.variations.splice(v,1),v===e-1&&y(v-1)}:o.a)})}},"Delete variation"))),ft("div",{className:O?"":"hidden"},ft(st,{selectedId:O,unSelectAll:D,isOpenColorPicker:k,isEditTextBox:S,templateData:t,setTemplateData:n,variationIndex:v,handleEditSelectedItem:T,handleDeleteSelectedItem:()=>{n(e=>{e.variations[v].elements=e.variations[v].elements.filter(e=>e.id!==O),D()})},handleCloseEditTextModal:()=>{P(!1)}}))))}},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),l=n(5),i=a.a.createElement;var s=()=>{const{0:e,1:t}=Object(r.useState)("");return i("div",{className:"space-y-4 p-5"},i("span",{className:"block"},"Category 1"),i("span",{className:"block"},"Category 2"),i("span",{className:"block"},"Category 3"),i("div",{className:"w-full"},i("form",{className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"},i("div",{className:"mb-4"},i("label",{className:"block text-gray-700 text-sm font-bold mb-2"},"Category name"),i("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"username",type:"text",placeholder:"Enter category name",value:e,onChange:e=>t(e.target.value)})),i("div",{className:"flex items-center justify-between"},i("button",{onClick:()=>{console.log({newCategoryName:e})},className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button"},"Add new Category"))),i("p",{className:"text-center text-gray-500 text-xs"},"©2020 Acme Corp. All rights reserved.")))},c=a.a.createElement;var u=()=>c("div",{className:" flex justify-center items-center  w-full"},c("div",{className:"flex h-14 rounded-md border-bordercolor border justify-center items-center w-11/12 z-50"},c("button",null,c("span",{className:"w-auto flex justify-end items-center text-grey text-sm p-3"},c("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2ZM0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 7.29583 11.5892 8.49572 10.8907 9.47653L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L9.47653 10.8907C8.49572 11.5892 7.29583 12 6 12C2.68629 12 0 9.31371 0 6Z",fill:"#9CA3AF"})))),c("input",{className:"w-full rounded text-sm text-gray95 outline-none h-12 z-0 ",type:"text",placeholder:"Search anything from elements"}))),d=n(13),m=n(8),f=n(1),p=n(6),g=n(2),b=a.a.createElement;function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var v=({konvaItem:e,index:t})=>e?b(a.a.Fragment,null,"rectangle"===(null==e?void 0:e.type)&&b(f.Rect,h({key:t},e)),"circle"===(null==e?void 0:e.type)&&b(f.Circle,h({key:t},e)),"line"===(null==e?void 0:e.type)&&b(f.Line,h({key:t},e)),"polygon"===(null==e?void 0:e.type)&&b(f.RegularPolygon,h({key:t},e)),"svg"===(null==e?void 0:e.type)&&b(f.Image,h({key:t},e)),"image"===(null==e?void 0:e.type)&&b(f.Image,h({key:t},e)),"text"===(null==e?void 0:e.type)&&b(f.Text,h({key:t},e))):b(a.a.Fragment,null),y=a.a.createElement;var x=({templateObj:e})=>{var t,n;const a=Object(o.useHistory)(),{0:l,1:i}=Object(r.useContext)(p.b);return y("button",{onClick:()=>{i(e,!1),a.push("/tool/"+e.id)},className:"border-2  border-dashed rounded-md border-bordercolor justify-center items-center flex flex-col py-4 "},y(f.Stage,{width:.3*g.j.width,height:.3*g.j.height,scaleX:.3,scaleY:.3},y(f.Layer,{listening:!1},null==e||null===(t=e.variations[0])||void 0===t||null===(n=t.elements)||void 0===n?void 0:n.map((e,t)=>y(v,{key:t,konvaItem:e,index:t})))))},w=a.a.createElement;var O=()=>{const{data:e,error:t,isLoading:n}=Object(d.useQuery)("templates",m.a.getAllTemplates);return console.log({data:e}),n?w(a.a.Fragment,null,w("p",null,"Getting all templates ...")):t?w(a.a.Fragment,null,w("p",null,t.message)):w("div",{className:"space-y-4 p-5"},w(a.a.Fragment,null,w("div",{className:"relative flex  h-full flex-col w-full  outline-none focus:outline-none"},w("div",{className:"flex"},w("div",{className:"flex items-start justify-between w-full p-5 border-b border-solid border-bordercolor rounded-t"},w("div",null,w("h3",{className:"text-2xl text-gray94 font-semibold"},"Select Template")),w("div",{className:"flex flex-row"},w("div",{className:"flex flex-row px-2 text-gray900 border-2 h-8 w border-bordercolor rounded-md  mr-2"},w("button",{className:"pr-2 text-sm"},"Most Popular "))))),w("div",{className:"w-full flex justify-center"},w("div",{className:"mt-3 w-3/6 "},w(u,null))),w("div",{className:" flex gap-4 mt-3 px-6"},w("button",{className:"bg-lightindigo text-indigo700 rounded-md px-4 py-1 h-10"},"Employes"),w("button",{className:"bg-lightindigo text-indigo700 rounded-md px-3 py-1 h-10"},"Events"),w("button",{className:"bg-lightindigo text-indigo700 rounded-md px-4 py-1 h-10"},"Promotion"),w("button",{className:"bg-lightindigo text-indigo700 rounded-md px-3 py-1 h-10"},"Property")),w("div",null,w("h1",{className:"text-xl font-bold mt-6 px-6 text-gray94"},"Your Templates")),w("div",{className:"pl-6 mt-4 flex flex-row flex-wrap gap-4"},e.map((e,t)=>w("div",{key:t},w(x,{templateObj:e})))))))},j=a.a.createElement;const k=["categories","templates"];t.default=()=>{const{0:e,1:t}=Object(r.useState)(k[1]);return j("div",{className:"min-w-max"},j("div",{className:"h-20 mb-5 flex flex-wrap justify-evenly content-center bg-gray900"},j("div",null),j("p",{className:"text-xl text-white"},"Home"),j(o.NavLink,{to:l.a.select_palette,className:"text-white font-semibold py-2 px-4 border border-white-500 rounded"},"Create New Template")),j("div",null,j("div",{className:"flex flex-no-wrap"},j("div",{style:{minHeight:"80vh"},className:"w-64 absolute sm:relative shadow flex-col justify-between flex"},j("div",{className:"p-8"},j("ul",{className:"mt-12"},j("li",{onClick:()=>t(k[0]),className:"flex w-full bg-gray300 justify-between hover:text-gray-900 cursor-pointer items-center mb-6"},j("div",{className:"flex items-center  hover:bg-rightbackgroundcolor  w-full hover:rounded-lg border-0 rounded-sm  h-10"},j("p",{className:"text-gray900 font-medium pl-3"},"Categories"))),j("li",{onClick:()=>t(k[1]),className:"flex w-full bg-gray300 justify-between text-gray900 hover:text-gray-900 cursor-pointer items-center mb-6"},j("div",{className:"flex items-center  hover:bg-rightbackgroundcolor  w-full hover:rounded-lg border-0 rounded-sm h-10"},j("p",{className:"text-gray900 font-medium pl-3"},"Templates")))))),j("div",{className:"container mx-auto py-10 md:w-4/5 w-11/12 px-6"},j("div",{className:"w-full h-full rounded border-dashed border-2 border-gray-300"},j("div",{className:e===k[0]?"":"hidden"},j(s,null)),j("div",{className:e===k[1]?"":"hidden"},j(O,null)))))))}},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),l=n(5),i=n(6),s=n(7),c=a.a.createElement;var u=({currentSelectedColor:e,handleColorChange:t,handleCloseColorPicker:n})=>{const[r,o]=a.a.useState("#000000");a.a.useEffect(()=>{o(e)},[e]);return c("div",{className:"fixed z-10 inset-0 overflow-y-auto","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},c("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},c("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity","aria-hidden":"true"}),c("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"​"),c("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"},c("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},c("div",{className:"sm:flex sm:items-start"},c(s.SketchPicker,{color:r,onChange:e=>o(e.hex)}))),c("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"},c("button",{onClick:()=>{t(r),n()},type:"button",className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"},"Done")))))},d=a.a.createElement;function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=()=>{const{0:e,1:t}=Object(r.useContext)(i.b),{0:n,1:a}=Object(r.useState)(!1),{0:s,1:c}=Object(r.useState)(null);return d("div",{className:"min-w-max"},n&&d(u,{currentSelectedColor:s.color,handleColorChange:e=>{t(t=>{const n=t.palette.findIndex(e=>e.name===(null==s?void 0:s.name));t.palette[n].color=e,c(f(f({},s),{},{color:e}))})},handleCloseColorPicker:()=>{a(!1)}}),d("div",{className:"h-20 mb-5 flex flex-wrap justify-evenly content-center bg-gray900"},d(o.NavLink,{to:l.a.home,className:"text-white font-semibold py-2 px-4 border border-white-500 rounded"},"Back to home"),d("p",{className:"text-xl text-white"},"Select Palette"),d("div",null)),"            ",e.palette.map((e,t)=>d("div",{key:t,className:"h-10 mt-5 mb-5 flex flex-wrap justify-center content-center"},d("p",{className:"w-48"},e.name)," ",d("div",{className:"w-10 h-10 border border-black",style:{backgroundColor:e.color},onClick:()=>{return t=e,a(!0),void c(t);var t}}))),d("div",{className:"flex justify-center"},d(o.NavLink,{className:"inline-flex items-center h-8 px-4 m-2 text-sm text-gray300 hover:text-gray900 transition-colors duration-150 bg-gray900 rounded-lg focus:shadow-outline hover:bg-bluish",to:"/tool"},"Proceed")))}}]);
>>>>>>> staging
//# sourceMappingURL=server.js.map