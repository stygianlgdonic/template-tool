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
/******/ 	var hotCurrentHash = "d09425cbc200e6aef349";
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
/******/ 	__webpack_require__.p = "http://localhost:3001/";
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
/*! exports provided: 0, 1, client, noentry, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"0\":{\"js\":[\"http://localhost:3001/static/js/0.chunk.js\"],\"map\":[\"http://localhost:3001/static/js/0.chunk.js.map\"],\"chunks\":[0]},\"1\":{\"js\":[\"http://localhost:3001/static/js/1.chunk.js\"],\"map\":[\"http://localhost:3001/static/js/1.chunk.js.map\"],\"chunks\":[1]},\"client\":{\"js\":[\"http://localhost:3001/static/js/client.js\"],\"map\":[\"http://localhost:3001/static/js/client.js.map\"],\"chunks\":[\"client\"]},\"noentry\":{\"jpg\":[\"http://localhost:3001/static/media/1.f5f798cc.jpg\"],\"png\":[\"http://localhost:3001/static/media/ALP-Summer.63b90db3.png\",\"http://localhost:3001/static/media/card1.9acd410d.png\",\"http://localhost:3001/static/media/card2.a3e6d397.png\",\"http://localhost:3001/static/media/insta.638d5ee2.png\"]}}");

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

  if (!cssMapping) {
    return content;
  }

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

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@tailwind base;\r\n@tailwind components;\r\n@tailwind utilities;", "",{"version":3,"sources":["webpack://./src/App.css"],"names":[],"mappings":"AAAA,cAAc;AACd,oBAAoB;AACpB,mBAAmB","sourcesContent":["@tailwind base;\r\n@tailwind components;\r\n@tailwind utilities;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


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
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var _NoSSR__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NoSSR */ "./src/NoSSR.tsx");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contexts/TemplateContext */ "./src/contexts/TemplateContext.tsx");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\App.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Dashboard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./Screens/Dashboard/Dashboard */ "./src/Screens/Dashboard/Dashboard.tsx")));
const CreateCardLayout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./Screens/CreateCardLayout/CreateCardLayout */ "./src/Screens/CreateCardLayout/CreateCardLayout.tsx")));



 // import Dashboard from './components/Dashboard/Dashboard';

const App = () => __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }
}, __jsx(_NoSSR__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: "/",
  render: () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
    fallback: __jsx("div", {
      className: "text-red-700",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 43
      }
    }, "Loading ..."),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx(_contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_5__["TemplateProvider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, __jsx(CreateCardLayout, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }))),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 13
  }
})));

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
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\contexts\\TemplateContext.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const INITIAL_STATE = {
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
    textBoxes: [],
    images: [],
    svgs: [],
    shapes: [{
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
      fillLinearGradientColorStops: [0, '#F0F0F0', 1, '#F0F0F0'],
      draggable: false
    }]
  }]
};
const TemplateContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
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

const port =  true ? parseInt("3000", 10) : undefined;
/* harmony default export */ __webpack_exports__["default"] = (express__WEBPACK_IMPORTED_MODULE_0___default()().use((req, res) => app.handle(req, res)).listen(port, () => {
  console.log(`> App started http://localhost:${port}`);
}));

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
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\server.tsx";
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
const server = express__WEBPACK_IMPORTED_MODULE_0___default()().disable('x-powered-by').use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static("C:\\Users\\HP\\cardclan-backend\\client\\public")).get('/*', (req, res) => {
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
/*! exports provided: stageDimensions, ORIGINAL_SVG, defaultImage, defaultSvg, defaultRect, defaultRoundedRect, defaultCircle, defaultPolygon, defaultTriangle, defaultTextBox, googleFontsList, fontSizeArray, ORIGINAL_SVG_mailicon, ORIGINAL_SVG_imageicon, ORIGINAL_SVG_eyeicon, ORIGINAL_SVG_impressionicon, ORIGINAL_SVG_arrow_upicon, ORIGINAL_SVG_editicon, ORIGINAL_SVG_attachementicon, ORIGINAL_SVG_deleteicon, ORIGINAL_SVG_updownicon, ORIGINAL_SVG_bluedoticon, ORIGINAL_SVG_greendoticon */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIGINAL_SVG_mailicon", function() { return ORIGINAL_SVG_mailicon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIGINAL_SVG_imageicon", function() { return ORIGINAL_SVG_imageicon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIGINAL_SVG_eyeicon", function() { return ORIGINAL_SVG_eyeicon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIGINAL_SVG_impressionicon", function() { return ORIGINAL_SVG_impressionicon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIGINAL_SVG_arrow_upicon", function() { return ORIGINAL_SVG_arrow_upicon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIGINAL_SVG_editicon", function() { return ORIGINAL_SVG_editicon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIGINAL_SVG_attachementicon", function() { return ORIGINAL_SVG_attachementicon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIGINAL_SVG_deleteicon", function() { return ORIGINAL_SVG_deleteicon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIGINAL_SVG_updownicon", function() { return ORIGINAL_SVG_updownicon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIGINAL_SVG_bluedoticon", function() { return ORIGINAL_SVG_bluedoticon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIGINAL_SVG_greendoticon", function() { return ORIGINAL_SVG_greendoticon; });
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
const ORIGINAL_SVG_mailicon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 13.4088V6.30415C1 5.77211 1.25994 5.27527 1.69269 4.98015L7.13713 1.26725C7.65964 0.910917 8.34036 0.910917 8.86287 1.26725L14.3073 4.98015C14.7401 5.27527 15 5.77211 15 6.30415V13.4088M1 13.4088C1 14.2876 1.69645 15 2.55556 15H13.4444C14.3036 15 15 14.2876 15 13.4088M1 13.4088L6.25 9.82846M15 13.4088L9.75 9.82846M1 6.24816L6.25 9.82846M15 6.24816L9.75 9.82846M9.75 9.82846L8.86287 10.4334C8.34036 10.7898 7.65964 10.7898 7.13713 10.4334L6.25 9.82846" stroke="#6366F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
const ORIGINAL_SVG_imageicon = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 13L5.58579 8.41421C6.36683 7.63317 7.63316 7.63316 8.41421 8.41421L13 13M11 11L12.5858 9.41421C13.3668 8.63317 14.6332 8.63316 15.4142 9.41421L17 11M11 5H11.01M3 17H15C16.1046 17 17 16.1046 17 15V3C17 1.89543 16.1046 1 15 1H3C1.89543 1 1 1.89543 1 3V15C1 16.1046 1.89543 17 3 17Z" stroke="#6366F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
const ORIGINAL_SVG_eyeicon = `<svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.54325 6C9.54325 7.18347 8.62832 8.14286 7.49969 8.14286C6.37107 8.14286 5.45614 7.18347 5.45614 6C5.45614 4.81653 6.37107 3.85714 7.49969 3.85714C8.62832 3.85714 9.54325 4.81653 9.54325 6Z" stroke="#6B7280" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 5.99998C1.86802 3.10205 4.4499 1 7.49999 1C10.5501 1 13.132 3.10208 14 6.00003C13.132 8.89795 10.5501 11 7.50001 11C4.4499 11 1.868 8.89792 1 5.99998Z" stroke="#6B7280" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
const ORIGINAL_SVG_impressionicon = `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.3404 10.3404L8.87657 14L5.9489 5.94887L14 8.87655L10.3404 10.3404ZM10.3404 10.3404L14 14M4.62283 1L5.19114 3.12094M3.12094 5.19112L1 4.62282M9.57168 2.32607L8.01905 3.87871M3.87876 8.01901L2.32613 9.57165" stroke="#6B7280" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
const ORIGINAL_SVG_arrow_upicon = `<svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.293153 5.70679C0.105447 5.51926 0 5.26495 0 4.99979C0 4.73462 0.105447 4.48031 0.293153 4.29279L4.29816 0.292787C4.48592 0.105316 4.74055 0 5.00604 0C5.27154 0 5.52617 0.105316 5.71393 0.292787L9.71894 4.29279C9.90132 4.48139 10.0022 4.73399 9.99996 4.99619C9.99768 5.25838 9.89238 5.5092 9.70674 5.6946C9.5211 5.88001 9.26997 5.98518 9.00745 5.98746C8.74492 5.98974 8.49201 5.88894 8.30317 5.70679L6.0073 3.41379L6.0073 10.9998C6.0073 11.265 5.90181 11.5194 5.71404 11.7069C5.52627 11.8944 5.27159 11.9998 5.00604 11.9998C4.7405 11.9998 4.48582 11.8944 4.29805 11.7069C4.11028 11.5194 4.00479 11.265 4.00479 10.9998L4.00479 3.41379L1.70892 5.70679C1.52116 5.89426 1.26653 5.99957 1.00104 5.99957C0.735542 5.99957 0.480915 5.89426 0.293153 5.70679Z" fill="#6366F1"/>
</svg>
`;
const ORIGINAL_SVG_editicon = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.58824 2.88236H2.88235C1.84276 2.88236 1 3.72511 1 4.76471V15.1176C1 16.1572 1.84276 17 2.88235 17H13.2353C14.2749 17 15.1176 16.1572 15.1176 15.1176V10.4118M13.7866 1.55133C14.5217 0.816224 15.7136 0.816224 16.4487 1.55133C17.1838 2.28643 17.1838 3.47827 16.4487 4.21338L8.36793 12.2941H5.70588L5.70588 9.63207L13.7866 1.55133Z" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
const ORIGINAL_SVG_attachementicon = `<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.156 4.55556L5.1689 10.4096C4.45885 11.1039 4.45885 12.2295 5.1689 12.9237C5.87894 13.618 7.03015 13.618 7.7402 12.9237L13.5713 7.06971C14.9914 5.68118 14.9914 3.42993 13.5713 2.0414C12.1512 0.652867 9.84879 0.652867 8.4287 2.0414L2.5976 7.89543C0.467467 9.97823 0.467467 13.3551 2.5976 15.4379C4.72773 17.5207 8.18136 17.5207 10.3115 15.4379L16 9.88889" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
const ORIGINAL_SVG_deleteicon = `<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.125 4.55556L13.3661 15.3489C13.3007 16.2792 12.5387 17 11.6205 17H4.37946C3.46134 17 2.69932 16.2792 2.63391 15.3489L1.875 4.55556M6.25 8.11111V13.4444M9.75 8.11111V13.4444M10.625 4.55556V1.88889C10.625 1.39797 10.2332 1 9.75 1H6.25C5.76675 1 5.375 1.39797 5.375 1.88889V4.55556M1 4.55556H15" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
const ORIGINAL_SVG_updownicon = `<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 0C4.26522 5.96046e-08 4.51957 0.105357 4.70711 0.292893L7.70711 3.29289C8.09763 3.68342 8.09763 4.31658 7.70711 4.70711C7.31658 5.09763 6.68342 5.09763 6.29289 4.70711L4 2.41421L1.70711 4.70711C1.31658 5.09763 0.683417 5.09763 0.292893 4.70711C-0.0976311 4.31658 -0.097631 3.68342 0.292893 3.29289L3.29289 0.292893C3.48043 0.105357 3.73478 0 4 0ZM0.292893 9.29289C0.683417 8.90237 1.31658 8.90237 1.70711 9.29289L4 11.5858L6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289C8.09763 9.68342 8.09763 10.3166 7.70711 10.7071L4.70711 13.7071C4.31658 14.0976 3.68342 14.0976 3.29289 13.7071L0.292893 10.7071C-0.0976311 10.3166 -0.0976311 9.68342 0.292893 9.29289Z" fill="#9CA3AF"/>
</svg>`;
const ORIGINAL_SVG_bluedoticon = `<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="5.5" cy="5.5" r="5.5" fill="#4F46E5"/>
</svg>
`;
const ORIGINAL_SVG_greendoticon = `<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="5.5" cy="5.5" r="5.5" fill="#10B981"/>
</svg>
`;

/***/ }),

/***/ 0:
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./node_modules/razzle-dev-utils/prettyNodeErrors.js (webpack)/hot/poll.js?300 ./src !./node_modules/razzle-start-server-webpack-plugin/dist/monitor-loader.js!./node_modules/razzle-start-server-webpack-plugin/dist/monitor-loader.js ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\HP\cardclan-backend\client\node_modules\razzle-dev-utils\prettyNodeErrors.js */"./node_modules/razzle-dev-utils/prettyNodeErrors.js");
__webpack_require__(/*! C:\Users\HP\cardclan-backend\client\node_modules\webpack\hot\poll.js?300 */"./node_modules/webpack/hot/poll.js?300");
__webpack_require__(/*! C:\Users\HP\cardclan-backend\client\src */"./src/index.ts");
module.exports = __webpack_require__(/*! !!C:\Users\HP\cardclan-backend\client\node_modules\razzle-start-server-webpack-plugin\dist\monitor-loader.js!C:\Users\HP\cardclan-backend\client\node_modules\razzle-start-server-webpack-plugin\dist\monitor-loader.js */"./node_modules/razzle-start-server-webpack-plugin/dist/monitor-loader.js!./node_modules/razzle-start-server-webpack-plugin/dist/monitor-loader.js");


/***/ }),

/***/ "@babel/code-frame":
/*!************************************!*\
  !*** external "@babel/code-frame" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/code-frame");

/***/ }),

/***/ "@heroicons/react/outline":
/*!*******************************************!*\
  !*** external "@heroicons/react/outline" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ "@heroicons/react/solid":
/*!*****************************************!*\
  !*** external "@heroicons/react/solid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@heroicons/react/solid");

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

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

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
//# sourceMappingURL=server.js.map