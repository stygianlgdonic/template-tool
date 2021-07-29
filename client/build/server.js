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
/******/ 	var hotCurrentHash = "ec53fbe751197ef5ebd6";
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
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var _NoSSR__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NoSSR */ "./src/NoSSR.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contexts/DesignToolContext */ "./src/contexts/DesignToolContext.tsx");
/* harmony import */ var _contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contexts/TemplateContext */ "./src/contexts/TemplateContext.tsx");
/* harmony import */ var _Screens_Dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Screens/Dashboard/Dashboard */ "./src/Screens/Dashboard/Dashboard.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\App.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const CreateCardLayout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./../src/Screens/CreateCardLayout/CreateCardLayout */ "./src/Screens/CreateCardLayout/CreateCardLayout.tsx")));

const App = () => {
  return __jsx(_NoSSR__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Routes"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/",
    element: __jsx(_Screens_Dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 42
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }), __jsx(_contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_5__["DesignToolProvider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx(_contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_6__["TemplateProvider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 29
      }
    }, "Loading ..."),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "createcard",
    element: __jsx(CreateCardLayout, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 63
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 29
    }
  }))))));
};

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

/***/ "./src/Screens/Dashboard/Dashboard.tsx":
/*!*********************************************!*\
  !*** ./src/Screens/Dashboard/Dashboard.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_LeftSideBar_LeftSidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/LeftSideBar/LeftSidebar */ "./src/components/LeftSideBar/LeftSidebar.tsx");
/* harmony import */ var _components_RightSidebar_RightSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/RightSidebar/RightSidebar */ "./src/components/RightSidebar/RightSidebar.tsx");
/* harmony import */ var _components_Centerboard_Centerboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../components/Centerboard/Centerboard */ "./src/components/Centerboard/Centerboard.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\Dashboard\\Dashboard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Dashboard = () => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-full mx-auto grid grid-cols-12 font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-span-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx(_components_LeftSideBar_LeftSidebar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "col-span-7 bg-jacksonsGray overflow-y-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, __jsx(_components_Centerboard_Centerboard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "col-span-3 overflow-hidden  overscroll-y-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx(_components_RightSidebar_RightSidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }))), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Outlet"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./src/assets/images/ALP-Summer.png":
/*!******************************************!*\
  !*** ./src/assets/images/ALP-Summer.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ALP-Summer.63b90db3.png";

/***/ }),

/***/ "./src/assets/images/Chart.png":
/*!*************************************!*\
  !*** ./src/assets/images/Chart.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/images/card1.png":
/*!*************************************!*\
  !*** ./src/assets/images/card1.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/card1.9acd410d.png";

/***/ }),

/***/ "./src/assets/images/card2.png":
/*!*************************************!*\
  !*** ./src/assets/images/card2.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/card2.a3e6d397.png";

/***/ }),

/***/ "./src/assets/images/fb.png":
/*!**********************************!*\
  !*** ./src/assets/images/fb.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/images/insta.png":
/*!*************************************!*\
  !*** ./src/assets/images/insta.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/insta.638d5ee2.png";

/***/ }),

/***/ "./src/components/Centerboard/Centerboard.tsx":
/*!****************************************************!*\
  !*** ./src/components/Centerboard/Centerboard.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_HomeCard_HomeCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/HomeCard/HomeCard */ "./src/components/Centerboard/components/HomeCard/HomeCard.tsx");
/* harmony import */ var _components_StatCard_StatCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/StatCard/StatCard */ "./src/components/Centerboard/components/StatCard/StatCard.tsx");
/* harmony import */ var _components_RecentActivity_RecentActivity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/RecentActivity/RecentActivity */ "./src/components/Centerboard/components/RecentActivity/RecentActivity.tsx");
/* harmony import */ var _RightSidebar_components_CreateEmail_CreateEmail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../RightSidebar/components/CreateEmail/CreateEmail */ "./src/components/RightSidebar/components/CreateEmail/CreateEmail.tsx");
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../utils/defaults */ "./src/utils/defaults.ts");
/* harmony import */ var _Centerboard_components_StatsCardinfo_StatCardinfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../Centerboard/components/StatsCardinfo/StatCardinfo */ "./src/components/Centerboard/components/StatsCardinfo/StatCardinfo.tsx");
/* harmony import */ var _Centerboard_components_ImagesInfo_ImagesInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../Centerboard/components/ImagesInfo/ImagesInfo */ "./src/components/Centerboard/components/ImagesInfo/ImagesInfo.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\components\\Centerboard\\Centerboard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const cardimage1 = __webpack_require__(/*! ./../../assets/images/card1.png */ "./src/assets/images/card1.png");

const cardimage2 = __webpack_require__(/*! ./../../assets/images/card2.png */ "./src/assets/images/card2.png");





const Centerboard = () => {
  let Card_1_title = "Personlized Images";
  let Card_1_impressions = 7540;
  let Card_1_clicks = 122;
  let Card_1_tag = "Impressions";
  let Card_1_time = "in last 24 hours ";
  let title1 = "Personlized Images";
  let Card_2_title = "Email campaigns";
  let Card_2_impressions = 8775;
  let Card_2_clicks = 233;
  let Card_2_tag = "Clicks";
  let Card_2_time = "in last 2 days";
  let title2 = "Personlized Images";
  let email_title_1 = "Create a new email campaign";
  let email_text_1 = "Use our intuitive newsletter builder to create engaging emails to send to your contacts.";
  let email_button_text_1 = "Create New Email campaign";
  let email_title_2 = "Create a new personalized image";
  let email_text_2 = "Use our hyperpersonalize image editing tool to create better & engaging images";
  let email_button_text_2 = "Create New Personalize image";
  return __jsx("div", {
    className: "overflow-y-auto flex-grow px-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "mt-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx(_components_HomeCard_HomeCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "mt-6 flex flex-row  justify-between mb-10 gap-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx(_components_StatCard_StatCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    bio: Card_1_title,
    bio1: Card_1_impressions,
    bio2: Card_1_clicks,
    bio3: Card_1_tag,
    bio4: title1,
    image: cardimage1,
    bio5: Card_1_time,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }), __jsx(_components_StatCard_StatCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    bio: Card_2_title,
    bio1: Card_2_impressions,
    bio2: Card_2_clicks,
    bio3: Card_2_tag,
    bio4: title2,
    image: cardimage2,
    bio5: Card_2_time,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx(_components_RecentActivity_RecentActivity__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx(_RightSidebar_components_CreateEmail_CreateEmail__WEBPACK_IMPORTED_MODULE_4__["default"], {
    bio1: email_title_1,
    bio2: email_text_1,
    bio3: email_button_text_1,
    bio4: _utils_defaults__WEBPACK_IMPORTED_MODULE_5__["ORIGINAL_SVG_mailicon"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx(_Centerboard_components_StatsCardinfo_StatCardinfo__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx(_Centerboard_components_ImagesInfo_ImagesInfo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Centerboard);

/***/ }),

/***/ "./src/components/Centerboard/components/HomeCard/HomeCard.tsx":
/*!*********************************************************************!*\
  !*** ./src/components/Centerboard/components/HomeCard/HomeCard.tsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\components\\Centerboard\\components\\HomeCard\\HomeCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const HomeCard = () => {
  return __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "inline-block  pl-10 h-28 w-full pt-6 items-center justify-center justify-items-center align-middle border-0 rounded-xl bg-white shadow-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: " flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "text-gray95 mr-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, "Dashboard"), __jsx("svg", {
    className: "w-2 mr-6 mt-2 text-gray95",
    width: "9",
    height: "12",
    viewBox: "0 0 9 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, __jsx("path", {
    d: "M0.999999 1L8 8L1 15",
    stroke: "#111827",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  })), __jsx("button", {
    className: "text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, "Home")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "text-xl font-sans font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, "Home"))));
};

/* harmony default export */ __webpack_exports__["default"] = (HomeCard);

/***/ }),

/***/ "./src/components/Centerboard/components/ImagesInfo/ImageStat/ImageStat.tsx":
/*!**********************************************************************************!*\
  !*** ./src/components/Centerboard/components/ImagesInfo/ImageStat/ImageStat.tsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utils/generatesvgUrl */ "./src/utils/generatesvgUrl.ts");
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../utils/defaults */ "./src/utils/defaults.ts");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\components\\Centerboard\\components\\ImagesInfo\\ImageStat\\ImageStat.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ImageStat = ({
  title,
  sale,
  views,
  clicks,
  time,
  image
}) => {
  const eyesvg = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_1__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_SVG_eyeicon"]);
  const impressionsvg = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_1__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_SVG_impressionicon"]);
  const arrowup = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_1__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_SVG_arrow_upicon"]);
  return __jsx("div", {
    className: "w-11/12 border-0 rounded-md mb-8 shadow-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex justify-center border-0 rounded-t-md bg-grayshade ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "w-32 h-32",
    src: image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "flex flex-row justify-between space-x-14 text-sm leading-5 font-sans font-medium text-gray900 px-2 py-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "mr-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, title), __jsx("p", {
    className: "mr-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, "sale"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, sale)), __jsx("div", {
    className: "flex flex-row ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: eyesvg,
    className: "mr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: "mr-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, views), __jsx("img", {
    src: impressionsvg,
    className: "mr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, clicks))), __jsx("div", {
    className: "flex flex-row justify-between items-center px-2 text-sm leading-5 font-sans h-10 font-medium bg-grayshade",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "text-sm leading-5 font-sans pl-2 font-medium text-indigo600",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, "View all")), __jsx("div", {
    className: "flex flex-row bg-indigo100 px-2 rounded-lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: arrowup,
    className: "mr-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }), "  ", __jsx("p", {
    className: "text-indigo600",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 61
    }
  }, " ", time))));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageStat);

/***/ }),

/***/ "./src/components/Centerboard/components/ImagesInfo/ImagesInfo.tsx":
/*!*************************************************************************!*\
  !*** ./src/components/Centerboard/components/ImagesInfo/ImagesInfo.tsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ImageStat_ImageStat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageStat/ImageStat */ "./src/components/Centerboard/components/ImagesInfo/ImageStat/ImageStat.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\components\\Centerboard\\components\\ImagesInfo\\ImagesInfo.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const image1 = __webpack_require__(/*! ./../../../../assets/images/ALP-Summer.png */ "./src/assets/images/ALP-Summer.png");

const ImagesInfo = () => {
  let Card_1_title = "ALP";
  let Card_1_views = 121;
  let Card_1_clicks = 541;
  let Card_1_time = '0.32%';
  let Card_1_sale = '5%';
  return __jsx("div", {
    className: " w-full border-0 rounded-xl bg-white shadow-md pb-6 mb-4 h-auto mt-6 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: " ml-6 justify-between flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "mt-10 text-2xl font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, "Your Images"), __jsx("button", {
    className: "mt-10 mr-4 border-2 border-alto rounded-md px-4 py-2 mb-6 text-white bg-indigo600",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, "Filters")), __jsx("div", {
    className: " flex justify-center mx-auto w-10/12 border-t-2 border-gallery mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "flex flex-row px-4  mx-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "mb-6 w-full ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, __jsx(_ImageStat_ImageStat__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: Card_1_title,
    sale: Card_1_sale,
    views: Card_1_views,
    clicks: Card_1_clicks,
    time: Card_1_time,
    image: image1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "mb-6 w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx(_ImageStat_ImageStat__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: Card_1_title,
    sale: Card_1_sale,
    views: Card_1_views,
    clicks: Card_1_clicks,
    time: Card_1_time,
    image: image1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ImagesInfo);

/***/ }),

/***/ "./src/components/Centerboard/components/RecentActivity/RecentActivity.tsx":
/*!*********************************************************************************!*\
  !*** ./src/components/Centerboard/components/RecentActivity/RecentActivity.tsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\components\\Centerboard\\components\\RecentActivity\\RecentActivity.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const RecentActivity = () => {
  return __jsx("div", {
    className: "w-full border-0 rounded-xl bg-white shadow-md mt-4 mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: " ml-10 justify-between flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "mt-10 text-2xl font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, "Recent Activities"), __jsx("button", {
    className: "mt-10 mr-4 border-2 border-alto rounded-md px-2 mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, "View all")), __jsx("div", {
    className: " ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: " flex justify-center mx-auto w-10/12 border-t-2 border-gallery",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }), __jsx("ul", {
    className: "divide-y divide-gray-200",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "py-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex space-x-2 ml-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "h-6 w-6 rounded-full",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "flex-1 space-y-1 pr-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "flex items-center justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 33
    }
  }, __jsx("h3", {
    className: "text-sm font-medium text-gray900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 37
    }
  }, "Lindsay Walton"), __jsx("p", {
    className: "text-sm text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 37
    }
  }, "1h")), __jsx("p", {
    className: "text-sm text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 33
    }
  }, "Deployed Workcation (2d89f0c8 in master) to production")))))), __jsx("div", {
    className: " ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: " flex justify-center mx-auto w-10/12 border-t-2 border-gallery",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }), __jsx("ul", {
    className: "divide-y divide-gray-200",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "py-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex space-x-2 ml-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "h-6 w-6 rounded-full",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "flex-1 space-y-1 pr-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "flex items-center justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 33
    }
  }, __jsx("h3", {
    className: "text-sm font-medium text-gray900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 37
    }
  }, "Lindsay Walton"), __jsx("p", {
    className: "text-sm text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 37
    }
  }, "1h")), __jsx("p", {
    className: "text-sm text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 33
    }
  }, "Deployed Workcation (2d89f0c8 in master) to production")))))), __jsx("div", {
    className: " ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: " flex justify-center mx-auto w-10/12 border-t-2 border-gallery",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }), __jsx("ul", {
    className: "divide-y divide-gray-200",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "py-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex space-x-2 ml-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "h-6 w-6 rounded-full",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "flex-1 space-y-1 pr-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "flex items-center justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 33
    }
  }, __jsx("h3", {
    className: "text-sm font-medium text-gray900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 37
    }
  }, "Lindsay Walton"), __jsx("p", {
    className: "text-sm text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 37
    }
  }, "1h")), __jsx("p", {
    className: "text-sm text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 33
    }
  }, "Deployed Workcation (2d89f0c8 in master) to production")))))), __jsx("div", {
    className: " ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: " flex justify-center mx-auto w-10/12 border-t-2 border-gallery",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }), __jsx("ul", {
    className: "divide-y divide-gray-200",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "py-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex space-x-2 ml-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "h-6 w-6 rounded-full",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "flex-1 space-y-1 pr-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "flex items-center justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 33
    }
  }, __jsx("h3", {
    className: "text-sm font-medium text-gray900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 37
    }
  }, "Lindsay Walton"), __jsx("p", {
    className: "text-sm text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 37
    }
  }, "1h")), __jsx("p", {
    className: "text-sm text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 33
    }
  }, "Deployed Workcation (2d89f0c8 in master) to production")))))), __jsx("div", {
    className: " ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: " flex justify-center mx-auto w-10/12 border-t-2 border-gallery",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }), __jsx("ul", {
    className: "divide-y divide-gray-200",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "py-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex space-x-2 ml-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "h-6 w-6 rounded-full",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "flex-1 space-y-1 pr-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "flex items-center justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 33
    }
  }, __jsx("h3", {
    className: "text-sm font-medium text-gray900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 37
    }
  }, "Lindsay Walton"), __jsx("p", {
    className: "text-sm text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 37
    }
  }, "1h")), __jsx("p", {
    className: "text-sm text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 33
    }
  }, "Deployed Workcation (2d89f0c8 in master) to production")))))), __jsx("div", {
    className: " ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: " flex justify-center mx-auto w-10/12 border-t-2 border-gallery",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }), __jsx("ul", {
    className: "divide-y divide-gray-200",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "py-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex space-x-2 ml-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "h-6 w-6 rounded-full",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "flex-1 space-y-1 pr-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "flex items-center justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 33
    }
  }, __jsx("h3", {
    className: "text-sm font-medium text-gray900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 37
    }
  }, "Lindsay Walton"), __jsx("p", {
    className: "text-sm text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 37
    }
  }, "1h")), __jsx("p", {
    className: "text-sm text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 33
    }
  }, "Deployed Workcation (2d89f0c8 in master) to production")))))), __jsx("div", {
    className: " ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: " flex justify-center mx-auto w-10/12 border-t-2 border-gallery",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }), __jsx("ul", {
    className: "divide-y divide-gray-200",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "py-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex space-x-2 ml-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "h-6 w-6 rounded-full",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "flex-1 space-y-1 pr-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "flex items-center justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 33
    }
  }, __jsx("h3", {
    className: "text-sm font-medium text-gray900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 37
    }
  }, "Lindsay Walton"), __jsx("p", {
    className: "text-sm text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 37
    }
  }, "1h")), __jsx("p", {
    className: "text-sm text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 33
    }
  }, "Deployed Workcation (2d89f0c8 in master) to production")))))), __jsx("div", {
    className: " ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: " flex justify-center mx-auto w-10/12 border-t-2 border-gallery",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 17
    }
  }), __jsx("ul", {
    className: "divide-y divide-gray-200",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "py-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex space-x-2 ml-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "h-6 w-6 rounded-full",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "flex-1 space-y-1 pr-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "flex items-center justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 33
    }
  }, __jsx("h3", {
    className: "text-sm font-medium text-gray900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 37
    }
  }, "Lindsay Walton"), __jsx("p", {
    className: "text-sm text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 37
    }
  }, "1h")), __jsx("p", {
    className: "text-sm text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 33
    }
  }, "Deployed Workcation (2d89f0c8 in master) to production")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (RecentActivity);

/***/ }),

/***/ "./src/components/Centerboard/components/StatCard/StatCard.tsx":
/*!*********************************************************************!*\
  !*** ./src/components/Centerboard/components/StatCard/StatCard.tsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\components\\Centerboard\\components\\StatCard\\StatCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const StatCard = ({
  bio,
  bio1,
  bio2,
  bio3,
  bio4,
  bio5,
  image
}) => {
  return __jsx("div", {
    className: " border-2 border-bordercolor rounded-xl w-2/3  bg-white shadow-md  ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-row mt-4 justify-center items-center ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: " mt-6 ml-4",
    width: "80",
    height: "80",
    src: image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "ml-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex justify-start  text-gray95 mt-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, bio)), __jsx("div", {
    className: "flex mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: "text-xl text-indigo font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }, bio1), __jsx("p", {
    className: "text-indigo text-md mt-1 ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, bio3)), __jsx("div", {
    className: "flex justify-center mt-2 align-middle items-center mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, __jsx("svg", {
    className: "",
    width: "10",
    height: "12",
    viewBox: "0 0 10 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M0.293153 5.70679C0.105447 5.51926 0 5.26495 0 4.99979C0 4.73462 0.105447 4.48031 0.293153 4.29279L4.29816 0.292787C4.48592 0.105316 4.74055 0 5.00604 0C5.27154 0 5.52617 0.105316 5.71393 0.292787L9.71894 4.29279C9.90132 4.48139 10.0022 4.73399 9.99996 4.99619C9.99768 5.25838 9.89238 5.5092 9.70674 5.6946C9.5211 5.88001 9.26997 5.98518 9.00745 5.98746C8.74492 5.98974 8.49201 5.88894 8.30317 5.70679L6.0073 3.41379V10.9998C6.0073 11.265 5.90181 11.5194 5.71404 11.7069C5.52627 11.8944 5.27159 11.9998 5.00604 11.9998C4.7405 11.9998 4.48582 11.8944 4.29805 11.7069C4.11028 11.5194 4.00479 11.265 4.00479 10.9998V3.41379L1.70892 5.70679C1.52116 5.89426 1.26653 5.99957 1.00104 5.99957C0.735542 5.99957 0.480915 5.89426 0.293153 5.70679Z",
    fill: "#10B981",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 29
    }
  })), __jsx("p", {
    className: "text-green ml-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }, bio2), __jsx("p", {
    className: "ml-1 text-sm text-gray95 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 25
    }
  }, bio5)))), __jsx("div", {
    className: "bg-jacksonsGray border-b-0 border-bordercolor rounded-b-xl py-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "ml-6 text-sm text-indigo600 leading-5 font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, "View all")));
};

/* harmony default export */ __webpack_exports__["default"] = (StatCard);

/***/ }),

/***/ "./src/components/Centerboard/components/StatsCardinfo/StatCardinfo.tsx":
/*!******************************************************************************!*\
  !*** ./src/components/Centerboard/components/StatsCardinfo/StatCardinfo.tsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Example; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/solid */ "@heroicons/react/solid");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/outline */ "@heroicons/react/outline");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\components\\Centerboard\\components\\StatsCardinfo\\StatCardinfo.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* This example requires Tailwind CSS v2.0+ */



const stats = [{
  id: 1,
  name: 'Images Created',
  stat: '120',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__["UsersIcon"],
  change: '32',
  changeType: 'increase',
  time: 'in 2 days'
}, {
  id: 2,
  name: 'Impressions',
  stat: '1200',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__["MailOpenIcon"],
  change: '122',
  changeType: 'increase',
  time: 'in last 24 hours'
}, {
  id: 3,
  name: 'Clicks/Conversions',
  stat: '71,897',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__["CursorClickIcon"],
  change: '0.32%',
  changeType: 'decrease',
  time: 'going down'
}];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Example() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("dl", {
    className: "mt-5  grid-cols-1 grid gap-2 justify-between sm:grid-cols-2 lg:grid-cols-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, stats.map(item => __jsx("div", {
    key: item.id,
    className: "relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, __jsx("dt", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }, __jsx("p", {
    className: "ml-14 text-sm font-medium text-gray95 truncate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 29
    }
  }, item.name)), __jsx("dd", {
    className: "ml-14 pb-6 flex flex-col items-baseline sm:pb-7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  }, __jsx("p", {
    className: "text-2xl font-semibold text-gray900",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 29
    }
  }, item.stat), __jsx("div", {
    className: "flex flex-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: classNames(item.changeType === 'increase' ? 'text-green500' : 'text-red600', ' flex items-center align-middle text-sm font-semibold'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 33
    }
  }, item.changeType === 'increase' ? __jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__["ArrowSmUpIcon"], {
    className: "self-left  items-center align-middle flex-shrink-0 h-5 w-5 text-green500",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 41
    }
  }) : __jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__["ArrowSmDownIcon"], {
    className: "self-left flex-shrink-0 h-5 w-5 text-red600",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: " sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 37
    }
  }, item.changeType === 'increase' ? 'Increased' : 'Decreased', " by"), item.change), __jsx("p", {
    className: "text-sm font-semibold text-gray95 ml-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 33
    }
  }, item.time)), __jsx("div", {
    className: "absolute bottom-0 inset-x-0 bg-jacksonsGray px-4 py-4 sm:px-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "#",
    className: "font-medium text-indigo600 hover:text-indigo-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 37
    }
  }, ' ', "View all", __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 49
    }
  }, " ", item.name, " stats")))))))));
}

/***/ }),

/***/ "./src/components/LeftSideBar/1.jpg":
/*!******************************************!*\
  !*** ./src/components/LeftSideBar/1.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/1.f5f798cc.jpg";

/***/ }),

/***/ "./src/components/LeftSideBar/LeftSidebar.tsx":
/*!****************************************************!*\
  !*** ./src/components/LeftSideBar/LeftSidebar.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\components\\LeftSideBar\\LeftSidebar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const image = __webpack_require__(/*! ./1.jpg */ "./src/components/LeftSideBar/1.jpg");

const LeftSidebar = () => {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  return __jsx("div", {
    className: "h-full fixed",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex justify-start ml-6 items-start mx-auto mt-6 align-middle mb-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex justify-items-center items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: image,
    className: "w-12  rounded-3xl flex justify-items-center items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "ml-4 font-sans leading-tight",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "text-sm text-gray94 font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, "Tom Cook"), __jsx("button", {
    className: "text-xs font-normal text-grey",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, "View Profile"))), __jsx("div", {
    className: "flex flex-col justify-start text-left items-start ml-6 leading-10 text-lightGray w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex hover:bg-lightindigo w-full hover:rounded-lg border-0 rounded-md pl-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, __jsx("svg", {
    className: "mr-2 w-4",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, __jsx("path", {
    d: "M1 10L3 8M3 8L10 1L17 8M3 8V18C3 18.5523 3.44772 19 4 19H7M17 8L19 10M17 8V18C17 18.5523 16.5523 19 16 19H13M7 19C7.55228 19 8 18.5523 8 18V14C8 13.4477 8.44772 13 9 13H11C11.5523 13 12 13.4477 12 14V18C12 18.5523 12.4477 19 13 19M7 19H13",
    stroke: "#6B7280",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  })), __jsx("button", {
    className: "text-lightGray font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, "Home")), __jsx("div", {
    className: "flex hover:bg-lightindigo w-full hover:rounded-lg border-0 rounded-md pl-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx("svg", {
    className: "mr-2 w-4",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, __jsx("path", {
    d: "M1 14.5L6.15901 9.34099C7.03769 8.46231 8.46231 8.46231 9.34099 9.34099L14.5 14.5M12.25 12.25L14.034 10.466C14.9127 9.58731 16.3373 9.58731 17.216 10.466L19 12.25M12.25 5.5H12.2613M3.25 19H16.75C17.9926 19 19 17.9926 19 16.75V3.25C19 2.00736 17.9926 1 16.75 1H3.25C2.00736 1 1 2.00736 1 3.25V16.75C1 17.9926 2.00736 19 3.25 19Z",
    stroke: "#9CA3AF",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  })), __jsx("button", {
    className: "text-lightGray font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, "Personlized Images ")), __jsx("div", {
    className: "flex hover:bg-lightindigo w-full hover:rounded-md border-0 rounded-md pl-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx("svg", {
    className: "mr-2 w-4",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, __jsx("path", {
    d: "M1 16.5963V7.66667C1 6.99796 1.3342 6.3735 1.8906 6.00257L8.8906 1.3359C9.5624 0.888033 10.4376 0.888034 11.1094 1.3359L18.1094 6.00257C18.6658 6.3735 19 6.99796 19 7.66667V16.5963M1 16.5963C1 17.7009 1.89543 18.5963 3 18.5963H17C18.1046 18.5963 19 17.7009 19 16.5963M1 16.5963L7.75 12.0963M19 16.5963L12.25 12.0963M1 7.5963L7.75 12.0963M19 7.5963L12.25 12.0963M12.25 12.0963L11.1094 12.8567C10.4376 13.3046 9.5624 13.3046 8.8906 12.8567L7.75 12.0963",
    stroke: "#9CA3AF",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  })), __jsx("button", {
    className: "text-lightGray font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, "Email Campaigns")), __jsx("div", {
    className: "flex hover:bg-lightindigo w-full hover:rounded-md border-0 rounded-md pl-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, __jsx("svg", {
    className: "mr-2 w-4",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, __jsx("path", {
    d: "M5 19C2.79086 19 1 17.2091 1 15V3C1 1.89543 1.89543 1 3 1H7C8.10457 1 9 1.89543 9 3V15C9 17.2091 7.20914 19 5 19ZM5 19H17C18.1046 19 19 18.1046 19 17V13C19 11.8954 18.1046 11 17 11H14.6569M9.00002 5.34312L10.6569 3.68629C11.4379 2.90524 12.7042 2.90524 13.4853 3.68629L16.3137 6.51472C17.0948 7.29577 17.0948 8.5621 16.3137 9.34315L7.82843 17.8284M5 15H5.01",
    stroke: "#9CA3AF",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  })), __jsx("button", {
    className: "text-lightGray font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, "Activities")), __jsx("div", {
    className: "flex hover:bg-lightindigo w-full hover:rounded-md border-0 rounded-md pl-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx("svg", {
    className: "mr-2 w-4",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, __jsx("path", {
    d: "M10 2.35418C10.7329 1.52375 11.8053 1 13 1C15.2091 1 17 2.79086 17 5C17 7.20914 15.2091 9 13 9C11.8053 9 10.7329 8.47624 10 7.64582M13 19H1V18C1 14.6863 3.68629 12 7 12C10.3137 12 13 14.6863 13 18V19ZM13 19H19V18C19 14.6863 16.3137 12 13 12C11.9071 12 10.8825 12.2922 10 12.8027M11 5C11 7.20914 9.20914 9 7 9C4.79086 9 3 7.20914 3 5C3 2.79086 4.79086 1 7 1C9.20914 1 11 2.79086 11 5Z",
    stroke: "#9CA3AF",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  })), __jsx("button", {
    className: "text-lightGray font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, "Prospects")), __jsx("div", {
    className: "flex hover:bg-lightindigo w-full hover:rounded-md border-0 rounded-lg pl-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx("svg", {
    className: "mr-2 w-4",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, __jsx("path", {
    d: "M8.32463 2.31731C8.75103 0.560897 11.249 0.560897 11.6754 2.31731C11.9508 3.45193 13.2507 3.99038 14.2478 3.38285C15.7913 2.44239 17.5576 4.2087 16.6172 5.75218C16.0096 6.74925 16.5481 8.04918 17.6827 8.32463C19.4391 8.75103 19.4391 11.249 17.6827 11.6754C16.5481 11.9508 16.0096 13.2507 16.6172 14.2478C17.5576 15.7913 15.7913 17.5576 14.2478 16.6172C13.2507 16.0096 11.9508 16.5481 11.6754 17.6827C11.249 19.4391 8.75103 19.4391 8.32463 17.6827C8.04918 16.5481 6.74926 16.0096 5.75219 16.6172C4.2087 17.5576 2.44239 15.7913 3.38285 14.2478C3.99038 13.2507 3.45193 11.9508 2.31731 11.6754C0.560897 11.249 0.560897 8.75103 2.31731 8.32463C3.45193 8.04918 3.99037 6.74926 3.38285 5.75218C2.44239 4.2087 4.2087 2.44239 5.75219 3.38285C6.74926 3.99037 8.04918 3.45193 8.32463 2.31731Z",
    stroke: "#9CA3AF",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }), __jsx("path", {
    d: "M13 10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10Z",
    stroke: "#9CA3AF",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  })), __jsx("button", {
    className: "text-lightGray font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, "Settings"))));
};

/* harmony default export */ __webpack_exports__["default"] = (LeftSidebar);

/***/ }),

/***/ "./src/components/RightSidebar/RightSidebar.tsx":
/*!******************************************************!*\
  !*** ./src/components/RightSidebar/RightSidebar.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CreateEmail_CreateEmail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/CreateEmail/CreateEmail */ "./src/components/RightSidebar/components/CreateEmail/CreateEmail.tsx");
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../utils/defaults */ "./src/utils/defaults.ts");
/* harmony import */ var _components_ImagePreview_ImagePreview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ImagePreview/ImagePreview */ "./src/components/RightSidebar/components/ImagePreview/ImagePreview.tsx");
/* harmony import */ var _components_StatGraph_StatGraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/StatGraph/StatGraph */ "./src/components/RightSidebar/components/StatGraph/StatGraph.tsx");
/* harmony import */ var _components_SocialStats_SocialStats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/SocialStats/SocialStats */ "./src/components/RightSidebar/components/SocialStats/SocialStats.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\components\\RightSidebar\\RightSidebar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const image1 = __webpack_require__(/*! ./../../assets/images/ALP-Summer.png */ "./src/assets/images/ALP-Summer.png");



let email_title_1 = "Create a new email campaign";
let email_text_1 = "Use our intuitive newsletter builder to create engaging emails to send to your contacts.";
let email_button_text_1 = "Create New Email campaign";
let email_title_2 = "Create a new personalized image";
let email_text_2 = "Use our hyperpersonalize image editing tool to create better & engaging images";
let email_button_text_2 = "Create New Personalize image";
let date = "20 June, 2011";
let creator = "John Doe";
let last_edited_by = "Harry Potter";
let impressions = 344;
let link_clicks = 203;
let conversionrate = 3.4;
let fb_impressions = 5467;
let fb_clicks = 203;
let socialmedia1 = "Facebook";
let insta_impressions = 7890;
let insta_clicks = 244;
let socialmedia2 = "Instagram";

const RightSidebar = () => {
  return __jsx("div", {
    className: "pt-36 overflow-y-auto bg-rightbackgroundcolor h-full px-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx(_components_CreateEmail_CreateEmail__WEBPACK_IMPORTED_MODULE_1__["default"], {
    bio1: email_title_1,
    bio2: email_text_1,
    bio3: email_button_text_1,
    bio4: _utils_defaults__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_SVG_mailicon"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }), __jsx(_components_CreateEmail_CreateEmail__WEBPACK_IMPORTED_MODULE_1__["default"], {
    bio1: email_title_2,
    bio2: email_text_2,
    bio3: email_button_text_2,
    bio4: _utils_defaults__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_SVG_imageicon"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx(_components_ImagePreview_ImagePreview__WEBPACK_IMPORTED_MODULE_3__["default"], {
    date: date,
    creator: creator,
    last_edited_by: last_edited_by,
    image: image1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "mt-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx(_components_StatGraph_StatGraph__WEBPACK_IMPORTED_MODULE_4__["default"], {
    impressions: impressions,
    link_clicks: link_clicks,
    conversionrate: conversionrate,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "mt-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx(_components_SocialStats_SocialStats__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fb_impressions: fb_impressions,
    fb_clicks: fb_clicks,
    socialmedia1: socialmedia1,
    insta_impressions: insta_impressions,
    insta_clicks: insta_clicks,
    socialmedia2: socialmedia2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (RightSidebar);

/***/ }),

/***/ "./src/components/RightSidebar/components/CreateEmail/CreateEmail.tsx":
/*!****************************************************************************!*\
  !*** ./src/components/RightSidebar/components/CreateEmail/CreateEmail.tsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/generatesvgUrl */ "./src/utils/generatesvgUrl.ts");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\components\\RightSidebar\\components\\CreateEmail\\CreateEmail.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const CreateEmail = ({
  bio1,
  bio2,
  bio3,
  bio4
}) => {
  const svg = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__["default"])(bio4);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-col w-full mx-auto justify-center mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex flex-col border-dashed border-2 border-opacity-25 border-gray95 px-2 rounded-lg py-4 mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex flex-row justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: svg,
    className: "mr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }), __jsx("h1", {
    className: "text-indigo text-base",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, bio1)), __jsx("div", {
    className: "flex justify-center mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: "text-gray95 flex justify-center leading-4 text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  }, bio2)), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: "/createcard",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "bg-indigo flex flex-row border-0 rounded-lg justify-center p-2 mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }, __jsx("svg", {
    className: "mt-1 mr-4",
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 29
    }
  }, __jsx("path", {
    d: "M7 2V12M12 7L2 7",
    stroke: "#EEF2FF",
    "stroke-width": "4",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 33
    }
  })), __jsx("p", {
    className: "text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 29
    }
  }, bio3))))));
};

/* harmony default export */ __webpack_exports__["default"] = (CreateEmail);

/***/ }),

/***/ "./src/components/RightSidebar/components/ImagePreview/ImagePreview.tsx":
/*!******************************************************************************!*\
  !*** ./src/components/RightSidebar/components/ImagePreview/ImagePreview.tsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/defaults */ "./src/utils/defaults.ts");
/* harmony import */ var _utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/generatesvgUrl */ "./src/utils/generatesvgUrl.ts");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\components\\RightSidebar\\components\\ImagePreview\\ImagePreview.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ImagePreview = ({
  date,
  creator,
  last_edited_by,
  image
}) => {
  const svg1 = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_1__["ORIGINAL_SVG_editicon"]);
  const svg2 = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_1__["ORIGINAL_SVG_attachementicon"]);
  const svg3 = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_1__["ORIGINAL_SVG_deleteicon"]);
  return __jsx("div", {
    className: "mt-4 overflow-y-auto overscroll-y-auto w-full flex self-center bg-white justify-center border-0 shadow-sm rounded-lg pb-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: " pt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex justify-center flex-col items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "w-24 h-24 border-0 rounded-md ml-16",
    src: image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 29
    }
  })), __jsx("button", {
    className: "top-0 pb-16 ml-8 text-indigo600",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }, "Preview")), __jsx("p", {
    className: "text-base leading-6 font-medium text-gray900 pt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, "My brand sales campaign")), __jsx("div", {
    className: "flex flex-row justify-center mt-4 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "flex flex-row border-2 px-4 py-1 rounded-md items-center text-gray94 border-bordercolor shadow-md ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "pr-2",
    src: svg1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 144
    }
  }), "Edit")), __jsx("div", {
    className: "flex flex-row px-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "flex flex-row border-2 px-4 py-1 rounded-md items-center text-gray94 border-bordercolor shadow-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "pr-2",
    src: svg2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 143
    }
  }), "Use as")), __jsx("div", {
    className: "flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "flex flex-row border-2 px-4 py-1 rounded-md items-center text-gray94 border-bordercolor shadow-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "pr-2",
    src: svg3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 143
    }
  }), "Archive"))), __jsx("div", {
    className: " flex justify-center border-t-2 border-gallery mt-4 mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "flex flex-col justify-evenly",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex flex-row justify-evenly mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, __jsx("h1", {
    className: " text-gray95 font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }, "Date Created"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 83
    }
  }, date)), __jsx("div", {
    className: "flex flex-row justify-between px-16 mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, __jsx("h1", {
    className: "text-gray95 font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, "Created by"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 80
    }
  }, creator)), __jsx("div", {
    className: "flex flex-row justify-evenly mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, __jsx("h1", {
    className: "text-gray95 font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }, "Last Edited by"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 84
    }
  }, last_edited_by)))));
};

/* harmony default export */ __webpack_exports__["default"] = (ImagePreview);

/***/ }),

/***/ "./src/components/RightSidebar/components/SocialStats/SocialStats.tsx":
/*!****************************************************************************!*\
  !*** ./src/components/RightSidebar/components/SocialStats/SocialStats.tsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../utils/defaults */ "./src/utils/defaults.ts");
/* harmony import */ var _utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../utils/generatesvgUrl */ "./src/utils/generatesvgUrl.ts");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\components\\RightSidebar\\components\\SocialStats\\SocialStats.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const image1 = __webpack_require__(/*! ./../../../../assets/images/fb.png */ "./src/assets/images/fb.png");

const image2 = __webpack_require__(/*! ./../../../../assets/images/insta.png */ "./src/assets/images/insta.png");

const StatGraph = ({
  fb_impressions,
  fb_clicks,
  socialmedia1,
  insta_impressions,
  insta_clicks,
  socialmedia2
}) => {
  const svg1 = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_1__["ORIGINAL_SVG_updownicon"]);
  const svg2 = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_1__["ORIGINAL_SVG_bluedoticon"]);
  const svg3 = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_1__["ORIGINAL_SVG_greendoticon"]);
  return __jsx("div", {
    className: " border-0 rounded-md bg-white  w-full   py-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "text-xl leading-7 font-medium px-6 mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, "Sources")), __jsx("div", {
    className: "bg-jacksonsGray text-gray95 text-xs w-full flex flex-row leading-4 font-medium h-10 justify-start px-6 items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "w-32 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, "Name"), __jsx("h1", {
    className: "w-20 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, "Clicks"), __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, "Impressions")), __jsx("div", {
    className: " text-gray95 text-xs w-full flex flex-row leading-4 font-medium h-10 justify-start px-6 items-center mb-2 mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex flex-row w-32 items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: image1,
    className: "w-7 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }), __jsx("h1", {
    className: "pl-2 text-gray900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, " ", socialmedia1)), __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "w-20",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, fb_clicks)), __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, fb_impressions)), __jsx("div", {
    className: " text-gray95 text-xs w-full flex flex-row leading-4 font-medium h-10 justify-start px-6 items-center mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex flex-row w-32 items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: image1,
    className: "w-7 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }), __jsx("h1", {
    className: "pl-2 text-gray900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, " ", socialmedia2)), __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "w-20",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, insta_clicks)), __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, insta_impressions)));
};

/* harmony default export */ __webpack_exports__["default"] = (StatGraph);

/***/ }),

/***/ "./src/components/RightSidebar/components/StatGraph/StatGraph.tsx":
/*!************************************************************************!*\
  !*** ./src/components/RightSidebar/components/StatGraph/StatGraph.tsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../utils/defaults */ "./src/utils/defaults.ts");
/* harmony import */ var _utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../utils/generatesvgUrl */ "./src/utils/generatesvgUrl.ts");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\components\\RightSidebar\\components\\StatGraph\\StatGraph.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const image = __webpack_require__(/*! ./../../../../assets/images/Chart.png */ "./src/assets/images/Chart.png");

const StatGraph = ({
  impressions,
  link_clicks,
  conversionrate
}) => {
  const svg1 = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_1__["ORIGINAL_SVG_updownicon"]);
  const svg2 = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_1__["ORIGINAL_SVG_bluedoticon"]);
  const svg3 = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_1__["ORIGINAL_SVG_greendoticon"]);
  return __jsx("div", {
    className: " border-0 rounded-md bg-white  w-full px-4  py-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-row justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "text-xl text-black leading-7 font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, "Stats")), __jsx("div", {
    className: "flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex flex-row px-2 border-2 border-bordercolor rounded-md  mr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "pr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, "Last week "), __jsx("img", {
    className: "w-2 ",
    src: svg1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "flex flex-row px-2 border-2 border-bordercolor rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "pr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, "Sources "), __jsx("img", {
    className: "w-2 ",
    src: svg1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  })))), __jsx("div", {
    className: "flex flex-row mt-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex flex-col border-r-2 border-bordercolor pr-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, __jsx("img", {
    className: "",
    src: svg2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }), __jsx("h1", {
    className: "ml-2 text-xs text-gray95 leading-4 font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }, "Impressions")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, __jsx("h1", {
    className: "text-sm text-lightGray leading-5 font-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
    }
  }, impressions))), __jsx("div", {
    className: "flex flex-col  px-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, __jsx("img", {
    className: "",
    src: svg3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  }), __jsx("h1", {
    className: "ml-2 text-xs text-gray95 leading-4 font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }, "Link Clicks")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, __jsx("h1", {
    className: "text-sm text-lightGray leading-5 font-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }, link_clicks)))), __jsx("div", {
    className: "mt-4 flex justify-end",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "bg-indigo100 text-sm leading-5 font-normal border-0 rounded-xl text-lightGray px-4 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, conversionrate, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 132
    }
  }, "%"))), __jsx("div", {
    className: "flex justify-end mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "text-base text-gray95 leading-4 font-medium mt-1 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, "Conversion rate")), __jsx("div", {
    className: "flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: image,
    className: "w-10/12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (StatGraph);

/***/ }),

/***/ "./src/contexts/DesignToolContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/DesignToolContext.tsx ***!
  \********************************************/
/*! exports provided: INITIAL_STATE, DesignToolContext, DesignToolProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignToolContext", function() { return DesignToolContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignToolProvider", function() { return DesignToolProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\contexts\\DesignToolContext.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const INITIAL_STATE = {};
const DesignToolContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
const DesignToolProvider = ({
  children
}) => {
  const {
    0: designToolnavigator,
    1: setDesignToolnavigator
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('element');
  return __jsx(DesignToolContext.Provider, {
    value: [designToolnavigator, setDesignToolnavigator],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, children);
};

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
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\contexts\\TemplateContext.tsx";
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
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\server.tsx";
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
  const markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__["renderToString"])(__jsx(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }));
  console.log(markup);

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
const server = express__WEBPACK_IMPORTED_MODULE_0___default()().disable('x-powered-by').use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static("D:\\dev\\cardclan-backend\\client\\public")).get('/*', (req, res) => {
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

/***/ "./src/utils/generatesvgUrl.ts":
/*!*************************************!*\
  !*** ./src/utils/generatesvgUrl.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return generatesvgUrl; });
function generatesvgUrl(svg) {
  let blob = new Blob([svg], {
    type: 'image/svg+xml'
  });
  let url = URL.createObjectURL(blob);
  return url;
}

/***/ }),

/***/ 0:
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./node_modules/razzle-dev-utils/prettyNodeErrors.js (webpack)/hot/poll.js?300 ./src !./node_modules/razzle-start-server-webpack-plugin/dist/monitor-loader.js!./node_modules/razzle-start-server-webpack-plugin/dist/monitor-loader.js ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\dev\cardclan-backend\client\node_modules\razzle-dev-utils\prettyNodeErrors.js */"./node_modules/razzle-dev-utils/prettyNodeErrors.js");
__webpack_require__(/*! D:\dev\cardclan-backend\client\node_modules\webpack\hot\poll.js?300 */"./node_modules/webpack/hot/poll.js?300");
__webpack_require__(/*! D:\dev\cardclan-backend\client\src */"./src/index.ts");
module.exports = __webpack_require__(/*! !!D:\dev\cardclan-backend\client\node_modules\razzle-start-server-webpack-plugin\dist\monitor-loader.js!D:\dev\cardclan-backend\client\node_modules\razzle-start-server-webpack-plugin\dist\monitor-loader.js */"./node_modules/razzle-start-server-webpack-plugin/dist/monitor-loader.js!./node_modules/razzle-start-server-webpack-plugin/dist/monitor-loader.js");


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