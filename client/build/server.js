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
/******/ 	var hotCurrentHash = "886b4363fedddb34a257";
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
/*! exports provided: 0, 1, 2, client, noentry, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"0\":{\"js\":[\"http://localhost:3001/static/js/0.chunk.js\"],\"map\":[\"http://localhost:3001/static/js/0.chunk.js.map\"],\"chunks\":[0]},\"1\":{\"js\":[\"http://localhost:3001/static/js/1.chunk.js\"],\"map\":[\"http://localhost:3001/static/js/1.chunk.js.map\"],\"chunks\":[1]},\"2\":{\"js\":[\"http://localhost:3001/static/js/2.chunk.js\"],\"map\":[\"http://localhost:3001/static/js/2.chunk.js.map\"],\"chunks\":[2]},\"client\":{\"js\":[\"http://localhost:3001/static/js/client.js\"],\"map\":[\"http://localhost:3001/static/js/client.js.map\"],\"chunks\":[\"client\"]},\"noentry\":{\"jpg\":[\"http://localhost:3001/static/media/1.f5f798cc.jpg\"],\"png\":[\"http://localhost:3001/static/media/ALP-Summer.63b90db3.png\",\"http://localhost:3001/static/media/card1.9acd410d.png\",\"http://localhost:3001/static/media/card2.a3e6d397.png\",\"http://localhost:3001/static/media/insta.638d5ee2.png\"]}}");

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
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\App.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // const Dashboard = React.lazy(() => import('./Screens/Dashboard/Dashboard'));



const Registration = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./Screens/Registration/Registration */ "./src/Screens/Registration/Registration.tsx")));
const Dashboard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./Screens/Dashboard/Dashboard */ "./src/Screens/Dashboard/Dashboard.tsx")));
const CreateCardLayout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./../src/Screens/CreateCardLayout/CreateCardLayout */ "./src/Screens/CreateCardLayout/CreateCardLayout.tsx")));

const App = () => {
  return __jsx(_NoSSR__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 33
      }
    }, "Loading ..."),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Routes"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/",
    element: __jsx(Dashboard, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 46
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }), __jsx(_contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_5__["DesignToolProvider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, __jsx(_contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_6__["TemplateProvider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "createcard",
    element: __jsx(CreateCardLayout, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 63
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 29
    }
  }))), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/signin",
    element: __jsx(Registration, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 52
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }))));
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
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\contexts\\DesignToolContext.tsx";
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
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
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
=======
module.exports=function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.e=function(){return Promise.resolve()},r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r.oe=function(e){process.nextTick((function(){throw e}))},r(r.s=18)}([function(e,t){e.exports=require("react")},function(e,t,r){"use strict";r.d(t,"l",(function(){return a})),r.d(t,"j",(function(){return n})),r.d(t,"h",(function(){return l})),r.d(t,"f",(function(){return s})),r.d(t,"i",(function(){return o})),r.d(t,"a",(function(){return i})),r.d(t,"e",(function(){return c})),r.d(t,"b",(function(){return d})),r.d(t,"d",(function(){return m})),r.d(t,"k",(function(){return u})),r.d(t,"c",(function(){return f})),r.d(t,"g",(function(){return g}));const a={width:500,height:500},n='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M1 13.4088V6.30415C1 5.77211 1.25994 5.27527 1.69269 4.98015L7.13713 1.26725C7.65964 0.910917 8.34036 0.910917 8.86287 1.26725L14.3073 4.98015C14.7401 5.27527 15 5.77211 15 6.30415V13.4088M1 13.4088C1 14.2876 1.69645 15 2.55556 15H13.4444C14.3036 15 15 14.2876 15 13.4088M1 13.4088L6.25 9.82846M15 13.4088L9.75 9.82846M1 6.24816L6.25 9.82846M15 6.24816L9.75 9.82846M9.75 9.82846L8.86287 10.4334C8.34036 10.7898 7.65964 10.7898 7.13713 10.4334L6.25 9.82846" stroke="#6366F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>',l='<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M1 13L5.58579 8.41421C6.36683 7.63317 7.63316 7.63316 8.41421 8.41421L13 13M11 11L12.5858 9.41421C13.3668 8.63317 14.6332 8.63316 15.4142 9.41421L17 11M11 5H11.01M3 17H15C16.1046 17 17 16.1046 17 15V3C17 1.89543 16.1046 1 15 1H3C1.89543 1 1 1.89543 1 3V15C1 16.1046 1.89543 17 3 17Z" stroke="#6366F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>',s='<svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M9.54325 6C9.54325 7.18347 8.62832 8.14286 7.49969 8.14286C6.37107 8.14286 5.45614 7.18347 5.45614 6C5.45614 4.81653 6.37107 3.85714 7.49969 3.85714C8.62832 3.85714 9.54325 4.81653 9.54325 6Z" stroke="#6B7280" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M1 5.99998C1.86802 3.10205 4.4499 1 7.49999 1C10.5501 1 13.132 3.10208 14 6.00003C13.132 8.89795 10.5501 11 7.50001 11C4.4499 11 1.868 8.89792 1 5.99998Z" stroke="#6B7280" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>',o='<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M10.3404 10.3404L8.87657 14L5.9489 5.94887L14 8.87655L10.3404 10.3404ZM10.3404 10.3404L14 14M4.62283 1L5.19114 3.12094M3.12094 5.19112L1 4.62282M9.57168 2.32607L8.01905 3.87871M3.87876 8.01901L2.32613 9.57165" stroke="#6B7280" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>',i='<svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0.293153 5.70679C0.105447 5.51926 0 5.26495 0 4.99979C0 4.73462 0.105447 4.48031 0.293153 4.29279L4.29816 0.292787C4.48592 0.105316 4.74055 0 5.00604 0C5.27154 0 5.52617 0.105316 5.71393 0.292787L9.71894 4.29279C9.90132 4.48139 10.0022 4.73399 9.99996 4.99619C9.99768 5.25838 9.89238 5.5092 9.70674 5.6946C9.5211 5.88001 9.26997 5.98518 9.00745 5.98746C8.74492 5.98974 8.49201 5.88894 8.30317 5.70679L6.0073 3.41379L6.0073 10.9998C6.0073 11.265 5.90181 11.5194 5.71404 11.7069C5.52627 11.8944 5.27159 11.9998 5.00604 11.9998C4.7405 11.9998 4.48582 11.8944 4.29805 11.7069C4.11028 11.5194 4.00479 11.265 4.00479 10.9998L4.00479 3.41379L1.70892 5.70679C1.52116 5.89426 1.26653 5.99957 1.00104 5.99957C0.735542 5.99957 0.480915 5.89426 0.293153 5.70679Z" fill="#6366F1"/>\n</svg>\n',c='<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M7.58824 2.88236H2.88235C1.84276 2.88236 1 3.72511 1 4.76471V15.1176C1 16.1572 1.84276 17 2.88235 17H13.2353C14.2749 17 15.1176 16.1572 15.1176 15.1176V10.4118M13.7866 1.55133C14.5217 0.816224 15.7136 0.816224 16.4487 1.55133C17.1838 2.28643 17.1838 3.47827 16.4487 4.21338L8.36793 12.2941H5.70588L5.70588 9.63207L13.7866 1.55133Z" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>',d='<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M11.156 4.55556L5.1689 10.4096C4.45885 11.1039 4.45885 12.2295 5.1689 12.9237C5.87894 13.618 7.03015 13.618 7.7402 12.9237L13.5713 7.06971C14.9914 5.68118 14.9914 3.42993 13.5713 2.0414C12.1512 0.652867 9.84879 0.652867 8.4287 2.0414L2.5976 7.89543C0.467467 9.97823 0.467467 13.3551 2.5976 15.4379C4.72773 17.5207 8.18136 17.5207 10.3115 15.4379L16 9.88889" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>',m='<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M14.125 4.55556L13.3661 15.3489C13.3007 16.2792 12.5387 17 11.6205 17H4.37946C3.46134 17 2.69932 16.2792 2.63391 15.3489L1.875 4.55556M6.25 8.11111V13.4444M9.75 8.11111V13.4444M10.625 4.55556V1.88889C10.625 1.39797 10.2332 1 9.75 1H6.25C5.76675 1 5.375 1.39797 5.375 1.88889V4.55556M1 4.55556H15" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>',u='<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M4 0C4.26522 5.96046e-08 4.51957 0.105357 4.70711 0.292893L7.70711 3.29289C8.09763 3.68342 8.09763 4.31658 7.70711 4.70711C7.31658 5.09763 6.68342 5.09763 6.29289 4.70711L4 2.41421L1.70711 4.70711C1.31658 5.09763 0.683417 5.09763 0.292893 4.70711C-0.0976311 4.31658 -0.097631 3.68342 0.292893 3.29289L3.29289 0.292893C3.48043 0.105357 3.73478 0 4 0ZM0.292893 9.29289C0.683417 8.90237 1.31658 8.90237 1.70711 9.29289L4 11.5858L6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289C8.09763 9.68342 8.09763 10.3166 7.70711 10.7071L4.70711 13.7071C4.31658 14.0976 3.68342 14.0976 3.29289 13.7071L0.292893 10.7071C-0.0976311 10.3166 -0.0976311 9.68342 0.292893 9.29289Z" fill="#9CA3AF"/>\n</svg>',f='<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n<circle cx="5.5" cy="5.5" r="5.5" fill="#4F46E5"/>\n</svg>\n',g='<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n<circle cx="5.5" cy="5.5" r="5.5" fill="#10B981"/>\n</svg>\n'},function(e,t){e.exports=require("react-konva")},function(e,t,r){"use strict";function a(e){let t=new Blob([e],{type:"image/svg+xml"});return URL.createObjectURL(t)}r.d(t,"a",(function(){return a}))},function(e,t){e.exports=require("use-image")},function(e,t){e.exports=require("react-router-dom")},function(e,t,r){"use strict";function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==r)return;var a,n,l=[],s=!0,o=!1;try{for(r=r.call(e);!(s=(a=r.next()).done)&&(l.push(a.value),!t||l.length!==t);s=!0);}catch(e){o=!0,n=e}finally{try{s||null==r.return||r.return()}finally{if(o)throw n}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}e.exports=function(e){var t=a(e,4),r=t[1],n=t[3];if(!n)return r;if("function"==typeof btoa){var l=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),o="/*# ".concat(s," */"),i=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[r].concat(i).concat([o]).join("\n")}return[r].join("\n")}},function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,a){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(a)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(n[s]=!0)}for(var o=0;o<e.length;o++){var i=[].concat(e[o]);a&&n[i[0]]||(r&&(i[2]?i[2]="".concat(r," and ").concat(i[2]):i[2]=r),t.push(i))}},t}},function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return s}));var a=r(0),n=r.n(a).a.createElement;const l=Object(a.createContext)(null),s=({children:e})=>{const{0:t,1:r}=Object(a.useState)("element");return n(l.Provider,{value:[t,r]},e)}},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("@heroicons/react/solid")},function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a),l=r(16),s=r(1),o=n.a.createElement;const i={palette:[{name:"primary",color:"#ff0000"},{name:"secondary",color:"#00ff00"},{name:"tertiary",color:"#0000ff"}],variations:[{name:"untitled",face:"",textBoxes:[],images:[],svgs:[],shapes:[{id:"shapes_background",type:"rectangle",x:0,y:0,width:s.l.width,height:s.l.height,fillLinearGradientStartPoint:{x:0,y:0},fillLinearGradientEndPoint:{x:s.l.width,y:s.l.height},fillLinearGradientColorStops:[0,"#F0F0F0",1,"#F0F0F0"],draggable:!1}]}]},c=Object(a.createContext)(null),d=({children:e})=>{const[t,r,{goForward:a,goBack:n,stepNum:s,history:d}]=Object(l.useImmerState)(i);return o(c.Provider,{value:[t,r,{goForward:a,goBack:n,stepNum:s,history:d}]},e)}},function(e,t){e.exports=require("@heroicons/react/outline")},function(e,t,r){e.exports=r.p+"static/media/ALP-Summer.63b90db3.png"},function(e,t,r){"use strict";var a=r(6),n=r.n(a),l=r(7),s=r.n(l)()(n.a);s.push([e.i,".no-scrollbar::-webkit-scrollbar {\r\n    display: none;\r\n  }\r\n  \r\n  .no-scrollbar {\r\n    -ms-overflow-style: none;  /* IE and Edge */\r\n    scrollbar-width: none;  /* Firefox */\r\n  }","",{version:3,sources:["webpack://./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Stickers/styles.css"],names:[],mappings:"AAAA;IACI,aAAa;EACf;;EAEA;IACE,wBAAwB,GAAG,gBAAgB;IAC3C,qBAAqB,GAAG,YAAY;EACtC",sourcesContent:[".no-scrollbar::-webkit-scrollbar {\r\n    display: none;\r\n  }\r\n  \r\n  .no-scrollbar {\r\n    -ms-overflow-style: none;  /* IE and Edge */\r\n    scrollbar-width: none;  /* Firefox */\r\n  }"],sourceRoot:""}])},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("@shrugsy/use-immer-state")},function(e,t){e.exports=require("webfontloader")},function(e,t,r){e.exports=r(19)},function(e,t,r){"use strict";r.r(t);var a=r(9),n=r.n(a);let l=r(33).default;const s=parseInt(3e3,10);t.default=n()().use((e,t)=>l.handle(e,t)).listen(s,()=>{console.log("> App started http://localhost:"+s)})},function(e,t,r){"use strict";var a=r(6),n=r.n(a),l=r(7),s=r.n(l)()(n.a);s.push([e.i,"@tailwind base;\n\n@tailwind components;\n\n@tailwind utilities;\n","",{version:3,sources:["webpack://./node_modules/tailwindcss/tailwind.css"],names:[],mappings:"AAAA,cAAc;;AAEd,oBAAoB;;AAEpB,mBAAmB",sourcesContent:["@tailwind base;\n\n@tailwind components;\n\n@tailwind utilities;\n"],sourceRoot:""}])},function(e,t,r){"use strict";var a=r(6),n=r.n(a),l=r(7),s=r.n(l)()(n.a);s.push([e.i,"@tailwind base;\r\n@tailwind components;\r\n@tailwind utilities;","",{version:3,sources:["webpack://./src/App.css"],names:[],mappings:"AAAA,cAAc;AACd,oBAAoB;AACpB,mBAAmB",sourcesContent:["@tailwind base;\r\n@tailwind components;\r\n@tailwind utilities;"],sourceRoot:""}])},function(e){e.exports=JSON.parse('{"1":{"css":["/static/css/1.6e4a165f.chunk.css"],"js":["/static/js/1.35068bbe.chunk.js"],"map":["/static/css/1.6e4a165f.chunk.css.map","/static/js/1.35068bbe.chunk.js.map"],"chunks":[1]},"2":{"js":["/static/js/2.f8d31d61.chunk.js"],"map":["/static/js/2.f8d31d61.chunk.js.map"],"chunks":[2]},"3":{"js":["/static/js/3.7bf1c9f8.chunk.js"],"map":["/static/js/3.7bf1c9f8.chunk.js.map"],"chunks":[3]},"client":{"css":["/static/css/client.5862ae05.css"],"js":["/static/js/client.97365d2b.js"],"map":["/static/css/client.5862ae05.css.map","/static/js/client.97365d2b.js.map"],"chunks":[0]},"noentry":{"ico":["/favicon.ico"],"txt":["/robots.txt","/static/js/1.35068bbe.chunk.js.LICENSE.txt","/static/js/client.97365d2b.js.LICENSE.txt"],"jpg":["/static/media/1.f5f798cc.jpg"],"png":["/static/media/ALP-Summer.63b90db3.png","/static/media/card1.9acd410d.png","/static/media/card2.a3e6d397.png","/static/media/insta.638d5ee2.png"]}}')},function(e,t,r){e.exports=r.p+"static/media/1.f5f798cc.jpg"},function(e,t){e.exports="data:image/png;base64,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"},function(e,t){e.exports="data:image/png;base64,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"},function(e,t,r){e.exports=r.p+"static/media/insta.638d5ee2.png"},function(e,t,r){e.exports=r.p+"static/media/card1.9acd410d.png"},function(e,t,r){e.exports=r.p+"static/media/card2.a3e6d397.png"},function(e,t,r){"use strict";var a=r(6),n=r.n(a),l=r(7),s=r.n(l)()(n.a);s.push([e.i,'p.separator {\r\n    line-height:1em;\r\n    border-bottom:2px solid #D1D5DB;\r\n}\r\np.separator:before {\r\n    content:"OR";\r\n    position:relative;\r\n    left:55%;\r\n    right:40%;\r\n    margin-left:-2.5em;\r\n    padding:0 0.3em;\r\n    top:0.5em;\r\n    background:white;\r\n}',"",{version:3,sources:["webpack://./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/style.css"],names:[],mappings:"AAAA;IACI,eAAe;IACf,+BAA+B;AACnC;AACA;IACI,YAAY;IACZ,iBAAiB;IACjB,QAAQ;IACR,SAAS;IACT,kBAAkB;IAClB,eAAe;IACf,SAAS;IACT,gBAAgB;AACpB",sourcesContent:['p.separator {\r\n    line-height:1em;\r\n    border-bottom:2px solid #D1D5DB;\r\n}\r\np.separator:before {\r\n    content:"OR";\r\n    position:relative;\r\n    left:55%;\r\n    right:40%;\r\n    margin-left:-2.5em;\r\n    padding:0 0.3em;\r\n    top:0.5em;\r\n    background:white;\r\n}'],sourceRoot:""}])},function(e,t){e.exports="data:image/png;base64,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"},function(e,t){e.exports="data:image/png;base64,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"},function(e,t){e.exports="data:image/png;base64,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"},function(e,t,r){"use strict";r.r(t),r.d(t,"renderApp",(function(){return b}));var a=r(9),n=r.n(a),l=r(0),s=r.n(l),o=r(15);r(20);var i=({children:e})=>{const{0:t,1:r}=Object(l.useState)(!1);return Object(l.useEffect)(()=>{r(!0)},[]),t?e:null},c=r(5),d=(r(21),r(8)),m=r(11),u=s.a.createElement;const f=s.a.lazy(()=>Promise.resolve().then(r.bind(null,34))),g=s.a.lazy(()=>Promise.resolve().then(r.bind(null,36))),p=s.a.lazy(()=>Promise.resolve().then(r.bind(null,35)));var h=()=>u(i,null,u(l.Suspense,{fallback:u("p",null,"Loading ...")},u(c.Routes,null,u(c.Route,{path:"/",element:u(g,null)}),u(d.b,null,u(m.b,null,u(c.Route,{path:"createcard",element:u(p,null)}))),u(c.Route,{path:"/signin",element:u(f,null)})))),x=s.a.createElement;let w;w=r(22);const b=(e,t)=>{const r={},a=Object(o.renderToString)(x(h,null));if(console.log(a),r.url)return{redirect:r.url};return{html:`<!doctype html>\n    <html lang="">\n    <head>\n        <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n        <meta charSet='utf-8' />\n        <title>Welcome to Razzle</title>\n        <meta name="viewport" content="width=device-width, initial-scale=1">\n        ${((e,t)=>e[t]&&e[t].css?e[t].css.map(e=>`<link rel="stylesheet" href="${e}">`).join(""):"")(w,"client")}\n    </head>\n    <body>\n        <div id="root">${a}</div>\n        ${((e,t,r="")=>e[t]&&e[t].js?e[t].js.map(e=>`<script src="${e}"${r}><\/script>`).join(""):"")(w,"client"," defer crossorigin")}\n    </body>\n  </html>`}},v=n()().disable("x-powered-by").use(n.a.static("build\\public")).get("/*",(e,t)=>{const{html:r="",redirect:a=!1}=b(e,t);a?t.redirect(a):t.send(r)});t.default=v},function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return s}));var a=r(10),n=r(0),l=r.n(n).a.createElement;function s(){return l("div",{className:"min-h-screen flex items-center justify-center bg-gray50 py-12 px-4 sm:px-6 lg:px-8"},l("div",{className:"max-w-md w-full space-y-8"},l("div",null,l("img",{className:"mx-auto h-12 w-auto",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",alt:"Workflow"}),l("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900"},"Sign in to your account"),l("p",{className:"mt-2 text-center text-sm text-gray-600"},"Or"," ",l("a",{href:"#",className:"font-medium text-indigo-600 hover:text-indigo-500"},"start your 14-day free trial"))),l("form",{className:"mt-8 space-y-6",action:"#",method:"POST"},l("input",{type:"hidden",name:"remember",defaultValue:"true"}),l("div",{className:"rounded-md shadow-sm -space-y-px"},l("div",{className:"bg-white"},l("label",{htmlFor:"email-address",className:"sr-only"},"Email address"),l("input",{id:"email-address",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none rounded-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo500 focus:border-indigo500 focus:z-10 sm:text-sm",placeholder:"Email address"})),l("div",null,l("label",{htmlFor:"password",className:"sr-only"},"Password"),l("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2  border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Password"}))),l("div",{className:"flex items-center justify-between"},l("div",{className:"flex items-center"},l("input",{id:"remember-me",name:"remember-me",type:"checkbox",className:"h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"}),l("label",{htmlFor:"remember-me",className:"ml-2 block text-sm text-gray-900"},"Remember me")),l("div",{className:"text-sm"},l("a",{href:"#",className:"font-medium text-indigo500 hover:text-indigo700"},"Forgot your password?"))),l("div",null,l("button",{type:"submit",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo600 hover:bg-indigo700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo500"},l("span",{className:"absolute left-0 inset-y-0 flex items-center pl-3"},l(a.LockClosedIcon,{className:"h-5 w-5 text-indigo500 group-hover:text-indigo400","aria-hidden":"true"})),"Sign in")))))}},function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),l=r(11),s=r(17),o=r.n(s),i=r(2),c=r(4),d=r.n(c);const m=["patternImageUrl"];var u=n.a.createElement;function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function x(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var w=({shapeProps:e,onSelect:t,onChange:r,onEditClick:l})=>{const s=Object(a.useRef)(null),{patternImageUrl:o}=e,c=x(e,m),[g]=d()(o||null),h=c.width,w=c.height,b=g?g.width:10,v=g?g.height:10,y=c.patternScale||Math.max(h/b,w/v);return u(n.a.Fragment,null,u(i.Rect,f({ref:s,onClick:t,onTap:t,onDblClick:l,onDblTap:l,draggable:!0,strokeScaleEnabled:!1,onTransformEnd:t=>{const a=s.current,n=a.scaleX(),l=a.scaleY();a.scaleX(1),a.scaleY(1),r(p(p({},e),{},{x:a.x(),y:a.y(),width:Math.max(a.width()*n),height:Math.max(a.height()*l)}))},onDragEnd:t=>{r(p(p({},e),{},{x:t.target.x(),y:t.target.y()}))}},c,{fillPatternImage:g,fillPatternOffset:{x:0,y:0},fillPatternScaleX:y,fillPatternScaleY:y,fillPatternRepeat:"no-repeat"})))};const b=["patternImageUrl"];var v=n.a.createElement;function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){A(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function A(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var k=({shapeProps:e,onSelect:t,onChange:r,onEditClick:l})=>{const s=Object(a.useRef)(null),{patternImageUrl:o}=e,c=j(e,b),[m]=d()(o||null);return v(n.a.Fragment,null,v(i.Circle,y({ref:s,onClick:t,onTap:t,onDblClick:l,onDblTap:l,draggable:!0,strokeScaleEnabled:!1,onTransformEnd:t=>{r(N(N({},e),{},{scaleX:t.target.attrs.scaleX,scaleY:t.target.attrs.scaleY}))},onDragEnd:t=>{r(N(N({},e),{},{x:t.target.x(),y:t.target.y()}))}},c,{fillPatternImage:m,fillPatternOffsetX:0,fillPatternOffsetY:0,fillPatternScaleX:.1,fillPatternScaleY:.1,fillPatternRepeat:"no-repeat"})))};const E=["patternImageUrl"];var O=n.a.createElement;function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach((function(t){M(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function M(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function I(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var H=({shapeProps:e,onSelect:t,onChange:r,onEditClick:l})=>{const s=Object(a.useRef)(null),{patternImageUrl:o}=e,c=I(e,E),[m]=d()(o||null);return O(n.a.Fragment,null,O(i.RegularPolygon,L({ref:s,onClick:t,onTap:t,onDblClick:l,onDblTap:l,draggable:!0,strokeScaleEnabled:!1,onDragEnd:t=>{r(S(S({},e),{},{x:t.target.x(),y:t.target.y()}))},onTransformEnd:t=>{r(S(S({},e),{},{scaleX:t.target.attrs.scaleX,scaleY:t.target.attrs.scaleY}))}},c,{fillPatternImage:m,fillPatternOffsetX:0,fillPatternOffsetY:0,fillPatternScaleX:.1,fillPatternScaleY:.1,fillPatternRepeat:"no-repeat"})))};const P=["patternImageUrl"];var F=n.a.createElement;function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(Object(r),!0).forEach((function(t){T(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function T(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function W(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var G=({shapeProps:e,onSelect:t,onChange:r,onEditClick:l})=>{const s=Object(a.useRef)(null),{patternImageUrl:o}=e,c=W(e,P),[m]=d()(o||null);return F(n.a.Fragment,null,F(i.Line,D({ref:s,onClick:t,onTap:t,onDblClick:l,onDblTap:l,draggable:!0,strokeScaleEnabled:!1,onTransformEnd:t=>{r(R(R({},e),{},{scaleX:t.target.attrs.scaleX,scaleY:t.target.attrs.scaleY}))},onDragEnd:t=>{r(R(R({},e),{},{x:t.target.x(),y:t.target.y()}))}},c,{fillPatternImage:m,fillPatternOffsetX:0,fillPatternOffsetY:0,fillPatternScaleX:.1,fillPatternScaleY:.1,fillPatternRepeat:"no-repeat"})))};function Y(e){return(new DOMParser).parseFromString(e,"image/svg+xml")}function X(e){return e.getAttribute("fill")}var z=n.a.createElement;function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var U=({svgProps:e,onChange:t,onSelect:r,onEditClick:a})=>{const[l]=d()((s=function(e,t){const r=Y(e);var a=r.getElementsByTagName("*");for(const e of a){const r=X(e);t[r]&&e.setAttribute("fill",t[r])}return(new XMLSerializer).serializeToString(r)}(e.svgString,e.colorMap),"data:image/svg+xml;base64,"+window.btoa(unescape(encodeURIComponent(s)))));var s;return z(n.a.Fragment,null,z(i.Image,Q({},e,{image:l,onClick:r,onTap:r,onDblClick:a,onDblTap:a,onDragEnd:t,onTransformEnd:t})))},Z=n.a.createElement;function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var K=({textProps:e,onChange:t,onSelect:r,onEditClick:n})=>{const l=Object(a.useRef)(null);return Z(i.Text,q({ref:l,draggable:!0,onClick:r,onTap:r,onDblClick:n,onDblTap:n,onTransform:e=>{let t=l.current.scaleX(),r=l.current.width();l.current.setAttrs({width:r*t,scaleX:1,scaleY:1})},onDragEnd:t},e))},J=n.a.createElement;function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){ee(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ee(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var te=({id:e,selectedShapeName:t,$tr:r})=>{Object(a.useEffect)(()=>{l()},[t]);const l=()=>{const e=r.current.getStage().findOne("#"+t);e?r.current.nodes([e]):r.current.detach(),r.current.getLayer().batchDraw()};return J(n.a.Fragment,null,J(i.Transformer,{id:e,ref:r,ignoreStroke:!0,boundBoxFunc:(e,r)=>"shapes_background"===t?e:r.width<50?$($({},e),{},{width:50}):r}))},re=r(1);const ae=["src"];var ne=n.a.createElement;function le(){return(le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function se(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var oe=({imageProps:e,onChange:t,onSelect:r})=>{const[a]=d()(e.src),{src:l}=e,s=se(e,ae);return ne(n.a.Fragment,null,ne(i.Image,le({},s,{image:a,onClick:()=>r(e.id),onTap:()=>r(e.id),onDragEnd:t,onTransformEnd:t})))},ie=n.a.createElement;function ce(){return(ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function de(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function me(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?de(Object(r),!0).forEach((function(t){ue(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):de(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ue(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var fe=({templateData:e,setTemplateData:t,variationIndex:r,selectedId:l,setSelectedId:s,unSelectAll:o,handleEditSelectedItem:c})=>{var d,m,u,f,g,p,h,x,b,v,y;const C=Object(a.useRef)(null),N=Object(a.useRef)(null),A=Object(a.useRef)(null),j=Object(a.useRef)(null),E=Object(a.useRef)({visible:!1,x1:0,y1:0,x2:0,y2:0}),{0:O,1:L}=Object(a.useState)([]),B=window.Konva,S=()=>{const e=j.current;e.setAttrs({visible:E.current.visible,x:Math.min(E.current.x1,E.current.x2),y:Math.min(E.current.y1,E.current.y2),width:Math.abs(E.current.x1-E.current.x2),height:Math.abs(E.current.y1-E.current.y2),fill:"rgba(0, 161, 255, 0.3)"}),e.getLayer().batchDraw()},M=n.a.useRef(null);return ie(i.Stage,ce({ref:C,onMouseDown:e=>{const t=e.target.findAncestor(".elements-container"),r=e.target.findAncestor("Transformer");if(t||r)return;const a=e.target.getStage().getPointerPosition();E.current.visible=!0,E.current.x1=a.x,E.current.y1=a.y,E.current.x2=a.x,E.current.y2=a.y,S()},onMouseUp:()=>{if(M.current=null,!E.current.visible)return;const e=j.current.getClientRect(),t=[];N.current.find(".object").forEach(r=>{const a=r.getClientRect();B.Util.haveIntersection(e,a)&&t.push(r)}),A.current.nodes(t),E.current.visible=!1,B.listenClickTap=!1,S()},onMouseMove:e=>{if(!E.current.visible)return;const t=e.target.getStage().getPointerPosition();E.current.x2=t.x,E.current.y2=t.y,S()},onTouchStart:e=>{e.target===e.target.getStage()&&(o(),A.current.nodes([]),L([]))},onClick:e=>{if(j.current.visible())return;let t=e.target.getStage(),r=N.current,a=A.current;if(e.target===t)return o(),L([]),a.nodes([]),void r.draw();if(!e.target.hasName(".object"))return;const n=e.evt.shiftKey||e.evt.ctrlKey||e.evt.metaKey,l=a.nodes().indexOf(e.target)>=0;if(n||l){if(n&&l){const t=a.nodes().slice();t.splice(t.indexOf(e.target),1),a.nodes(t)}else if(n&&!l){const t=a.nodes().concat([e.target]);a.nodes(t)}}else a.nodes([e.target]);r.draw()}},re.l),ie(i.Layer,{ref:N,onDragMove:e=>{const t=N.current.find(".guid-line");t.length&&t.forEach(e=>e.destroy());const r=((e,t)=>{const r=[],a=[];e.vertical.forEach(e=>{t.vertical.forEach(t=>{const a=Math.abs(e-t.guide);a<5&&r.push({lineGuide:e,diff:a,snap:t.snap,offset:t.offset})})}),e.horizontal.forEach(e=>{t.horizontal.forEach(t=>{const r=Math.abs(e-t.guide);r<5&&a.push({lineGuide:e,diff:r,snap:t.snap,offset:t.offset})})});const n=[],l=null==r?void 0:r.sort((e,t)=>e.diff-t.diff)[0],s=null==a?void 0:a.sort((e,t)=>e.diff-t.diff)[0];return l&&n.push({lineGuide:l.lineGuide,offset:l.offset,orientation:"V",snap:l.snap}),s&&n.push({lineGuide:s.lineGuide,offset:s.offset,orientation:"H",snap:s.snap}),n})((e=>{const t=[0,re.l.width/2,re.l.width],r=[0,re.l.height/2,re.l.height];return C.current.find(".object").forEach(a=>{if(a===e)return;const n=a.getClientRect();t.push([n.x,n.x+n.width,n.x+n.width/2]),r.push([n.y,n.y+n.height,n.y+n.height/2])}),{vertical:t.flat(),horizontal:r.flat()}})(e.target),(e=>{const t=e.getClientRect();return{vertical:[{guide:Math.round(t.x),offset:Math.round(e.x()-t.x),snap:"start"},{guide:Math.round(t.x+t.width/2),offset:Math.round(e.x()-t.x-t.width/2),snap:"center"},{guide:Math.round(t.x+t.width),offset:Math.round(e.x()-t.x-t.width),snap:"end"}],horizontal:[{guide:Math.round(t.y),offset:Math.round(e.y()-t.y),snap:"start"},{guide:Math.round(t.y+t.height/2),offset:Math.round(e.y()-t.y-t.height/2),snap:"center"},{guide:Math.round(t.y+t.height),offset:Math.round(e.y()-t.y-t.height),snap:"end"}]}})(e.target));r.length&&((e=>{e.forEach(e=>{if("H"===e.orientation){const t=new B.Line({points:[-6e3,e.lineGuide,6e3,e.lineGuide],stroke:"rgb(0, 161, 255)",strokeWidth:1,name:"guid-line",dash:[4,6]});N.current.add(t),N.current.batchDraw()}else if("V"===e.orientation){const t=new B.Line({points:[e.lineGuide,-6e3,e.lineGuide,6e3],stroke:"rgb(0, 161, 255)",strokeWidth:1,name:"guid-line",dash:[4,6]});N.current.add(t),N.current.batchDraw()}})})(r),r.forEach(t=>{switch(t.snap){case"start":case"center":case"end":switch(t.orientation){case"V":e.target.x(t.lineGuide+t.offset);break;case"H":e.target.y(t.lineGuide+t.offset);break;default:return}break;default:return}}))},onDragEnd:e=>{const t=N.current.find(".guid-line");t.length&&t.forEach(e=>e.destroy()),N.current.batchDraw()}},null==e||null===(d=e.variations[r].shapes)||void 0===d||null===(m=d.filter(e=>"rectangle"===e.type))||void 0===m?void 0:m.map((e,a)=>ie(w,{key:a,shapeProps:e,onSelect:t=>{if(void 0!==t.current){let e=O;O.includes(t.current)||e.push(t.current),L(e),A.current.nodes(O),A.current.nodes(O),A.current.getLayer().batchDraw()}s(e.id)},onEditClick:c,onChange:a=>{t(t=>{const n=t.variations[r].shapes.findIndex(t=>t.id===e.id);t.variations[r].shapes[n]=a})}})),null==e||null===(u=e.variations[r].shapes)||void 0===u||null===(f=u.filter(e=>"circle"===e.type))||void 0===f?void 0:f.map((e,a)=>ie(k,{key:a,shapeProps:e,onSelect:()=>{s(e.id)},onEditClick:c,onChange:a=>{t(t=>{const n=t.variations[r].shapes.findIndex(t=>t.id===e.id);t.variations[r].shapes[n]=a})}})),null==e||null===(g=e.variations[r].shapes)||void 0===g||null===(p=g.filter(e=>"line"===e.type))||void 0===p?void 0:p.map((e,a)=>ie(G,{key:a,shapeProps:e,onSelect:()=>{s(e.id)},onEditClick:c,onChange:a=>{t(t=>{const n=t.variations[r].shapes.findIndex(t=>t.id===e.id);t.variations[r].shapes[n]=a})}})),null==e||null===(h=e.variations[r].shapes)||void 0===h||null===(x=h.filter(e=>"polygon"===e.type))||void 0===x?void 0:x.map((e,a)=>ie(H,{key:a,shapeProps:e,onSelect:()=>{s(e.id)},onEditClick:c,onChange:a=>{t(t=>{const n=t.variations[r].shapes.findIndex(t=>t.id===e.id);t.variations[r].shapes[n]=a})}})),null==e||null===(b=e.variations[r].svgs)||void 0===b?void 0:b.map((e,a)=>ie(U,{key:a,svgProps:e,onSelect:()=>{s(e.id)},onEditClick:c,onChange:e=>t(t=>{t.variations[r].svgs[a]=me(me({},t.variations[r].svgs[a]),JSON.parse(JSON.stringify(e.target.attrs)))})})),null==e||null===(v=e.variations[r].images)||void 0===v?void 0:v.map((e,a)=>ie(oe,{key:a,imageProps:e,onSelect:()=>{s(e.id)},onChange:e=>t(t=>{t.variations[r].images[a]=me(me({},t.variations[r].images[a]),JSON.parse(JSON.stringify(e.target.attrs)))})})),null==e||null===(y=e.variations[r].textBoxes)||void 0===y?void 0:y.map((e,a)=>ie(K,{key:a,textProps:e,onSelect:()=>{s(e.id)},onEditClick:c,onChange:e=>t(t=>{t.variations[r].textBoxes[a]=me({},e.target.attrs)})})),ie(te,{id:"tr"+l,$tr:A,selectedShapeName:l}),ie(i.Rect,{fill:"rgba(0,0,255,0.5)",ref:j})))},ge=n.a.createElement;var pe=()=>{const{0:e,1:t}=Object(a.useState)(0),{0:r,1:n,2:{goForward:s,goBack:i,stepNum:c}}=Object(a.useContext)(l.a),{0:d,1:m}=Object(a.useState)(null),{0:u,1:f}=Object(a.useState)(!1),{0:g,1:p}=Object(a.useState)(!1),h=()=>{f(!1),p(!1),m(null)},x=e=>{"Escape"===e.key&&h()};Object(a.useEffect)(()=>(document.addEventListener("keydown",x,!1),o.a.load({google:{families:["Comfortaa","Josefin Sans","Euphoria Script","Oswald","Alfa Slab One","Bangers","Caveat","DM Sans","East Sea Dokdo","Homemade Apple","Kristi","Lobster Two","Maven Pro","Monoton","Montserrat","Playfair Display","Press Start 2P","Raleway","Roboto Slab","Shadows Into Light","Swanky and Moo Moo"]}}),()=>{document.removeEventListener("keydown",x,!1)}),[]);return ge("div",{className:"min-w-max  flex justify-center flex-col h-full"},ge("div",{className:""},ge("div",null,ge("div",{className:"flex justify-center mt-5 h-full"},ge(fe,{templateData:r,setTemplateData:n,variationIndex:e,selectedId:d,setSelectedId:m,unSelectAll:h,handleEditSelectedItem:()=>{"textBoxes"!==(null==d?void 0:d.split("_")[0])?f(!0):p(!0)}})))))},he=n.a.createElement;var xe=()=>{const[e,t]=n.a.useState(!1),[r,a]=n.a.useState(!1),[l,s]=n.a.useState(!1);return he("div",{className:"px-6 flex flex-row items-center gap-4"},he("div",{className:"flex items-center"},he("div",{className:"relative inline-block text-left "},he("div",{role:"menu","aria-orientation":"vertical","aria-labelledby":"menu-button",onClick:()=>s(!l)},he("button",{onClick:()=>s(!0),type:"button",className:"inline-flex justify-center w-full rounded-md border border-bordercolor shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500",id:"menu-button","aria-expanded":"true","aria-haspopup":"true"},"Poppins thin",he("svg",{className:"-mr-1 ml-2 h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},he("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})))),he("div",null,he("div",{className:l?" origin-top-left absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none":"hidden",role:"menu","aria-orientation":"vertical","aria-labelledby":"menu-button",onClick:()=>s(!1)},he("div",{className:"",role:"none"},he("a",{href:"#",className:"text-gray-700 block px-4 py-2 text-sm",role:"menuitem",id:"menu-item-0"},"Poppins thin"),he("a",{href:"#",className:"text-gray-700 block px-4 py-2 text-sm",role:"menuitem",id:"menu-item-1"},"Poppins thin")),he("div",{className:"",role:"none"},he("a",{href:"#",className:"text-gray-700 block px-4 py-2 text-sm",role:"menuitem",id:"menu-item-2"},"Poppins thin"),he("a",{href:"#",className:"text-gray-700 block px-4 py-2 text-sm",role:"menuitem",id:"menu-item-3"},"Poppins thin")),he("div",{className:"",role:"none"},he("a",{href:"#",className:"text-gray-700 block px-4 py-2 text-sm",role:"menuitem",id:"menu-item-4"},"Poppins thin"),he("a",{href:"#",className:"text-gray-700 block px-4 py-2 text-sm",role:"menuitem",id:"menu-item-5"},"Poppins thin")),he("div",{className:"",role:"none"},he("a",{href:"#",className:"text-gray-700 block px-4 py-2 text-sm",role:"menuitem",id:"menu-item-6"},"Poppins thin")))))),he("div",{className:"flex items-center  z-50"},he("div",{className:"relative inline-block text-left "},he("div",{role:"menu","aria-orientation":"vertical","aria-labelledby":"menu-button",onClick:()=>a(!r)},he("button",{onClick:()=>a(!0),type:"button",className:"inline-flex justify-center w-full rounded-md border border-bordercolor shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500",id:"menu-button","aria-expanded":"true","aria-haspopup":"true"},"Heading 1",he("svg",{className:"-mr-1 ml-2 h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},he("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})))),he("div",null,he("div",{className:r?" origin-top-left absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none":"hidden",role:"menu","aria-orientation":"vertical","aria-labelledby":"menu-button",onClick:()=>a(!1)},he("div",{className:"",role:"none"},he("a",{href:"#",className:"text-gray-700 block px-4 py-2 text-sm",role:"menuitem",id:"menu-item-0"},"Heading 1"),he("a",{href:"#",className:"text-gray-700 block px-4 py-2 text-sm",role:"menuitem",id:"menu-item-1"},"Heading 2")),he("div",{className:"",role:"none"},he("a",{href:"#",className:"text-gray-700 block px-4 py-2 text-sm",role:"menuitem",id:"menu-item-2"},"Heading 3"),he("a",{href:"#",className:"text-gray-700 block px-4 py-2 text-sm",role:"menuitem",id:"menu-item-3"},"Heading 4")),he("div",{className:"",role:"none"},he("a",{href:"#",className:"text-gray-700 block px-4 py-2 text-sm",role:"menuitem",id:"menu-item-4"},"Heading 5"),he("a",{href:"#",className:"text-gray-700 block px-4 py-2 text-sm",role:"menuitem",id:"menu-item-5"},"Heading 6")),he("div",{className:"",role:"none"},he("a",{href:"#",className:"text-gray-700 block px-4 py-2 text-sm",role:"menuitem",id:"menu-item-6"},"Heading 6")))))))},we=n.a.createElement;var be=()=>we("div",{className:" h-18  flex flex-col"},we("div",{className:" py-2"},we(xe,null)),we("div",{className:"border-b-2 border-bordercolor"})),ve=n.a.createElement;var ye=()=>ve("div",{className:"h-full"},ve("div",null,ve(be,null)),ve("div",null,ve(pe,null))),Ce=r(8),Ne=n.a.createElement;var Ae=()=>{const{0:e,1:t}=Object(a.useContext)(Ce.a);return Ne("div",{className:"h-full fixed flex  flex-col w-2/12 "},Ne("div",{className:"flex flex-col justify-start text-left items-start leading-10  px-2 text-lightGray w-full  h-full mt-6 "},Ne("button",{className:"w-full",onClick:()=>t("element")},Ne("div",{className:"flex items-center  hover:bg-rightbackgroundcolor w-full hover:rounded-lg border-0 rounded-sm  pl-5 mb-1 h-10 mb-1"},Ne("svg",{className:"text-svgcolor",width:"20",height:"18",viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ne("path",{d:"M2.31802 2.31802C0.56066 4.07538 0.56066 6.92462 2.31802 8.68198L10.0001 16.364L17.682 8.68198C19.4393 6.92462 19.4393 4.07538 17.682 2.31802C15.9246 0.56066 13.0754 0.56066 11.318 2.31802L10.0001 3.63609L8.68198 2.31802C6.92462 0.56066 4.07538 0.56066 2.31802 2.31802Z",stroke:"#C4C4C4","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),Ne("p",{className:"text-lightGray font-medium pl-3"},"Elements"))),Ne("button",{className:"w-full",onClick:()=>t("text")},Ne("div",{className:"flex items-center hover:bg-rightbackgroundcolor w-full hover:rounded-lg border-0 rounded-sm  pl-5 mb-1"},Ne("svg",{width:"15",height:"16",viewBox:"0 0 15 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ne("path",{d:"M13.8867 0.109375L14.0625 3.83594H13.6172C13.5312 3.17969 13.4141 2.71094 13.2656 2.42969C13.0234 1.97656 12.6992 1.64453 12.293 1.43359C11.8945 1.21484 11.3672 1.10547 10.7109 1.10547H8.47266V13.2461C8.47266 14.2227 8.57812 14.832 8.78906 15.0742C9.08594 15.4023 9.54297 15.5664 10.1602 15.5664H10.7109V16H3.97266V15.5664H4.53516C5.20703 15.5664 5.68359 15.3633 5.96484 14.957C6.13672 14.707 6.22266 14.1367 6.22266 13.2461V1.10547H4.3125C3.57031 1.10547 3.04297 1.16016 2.73047 1.26953C2.32422 1.41797 1.97656 1.70312 1.6875 2.125C1.39844 2.54688 1.22656 3.11719 1.17188 3.83594H0.726562L0.914062 0.109375H13.8867Z",fill:"#D1D5DB"})),Ne("p",{className:"text-lightGray font-medium pl-4"},"Text"))),Ne("button",{className:"w-full",onClick:()=>t("images")},Ne("div",{className:"flex items-center hover:bg-rightbackgroundcolor w-full hover:rounded-sm border-0 rounded-sm  pl-5 mb-1"},Ne("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ne("path",{d:"M1 13L5.58579 8.41421C6.36683 7.63317 7.63316 7.63316 8.41421 8.41421L13 13M11 11L12.5858 9.41421C13.3668 8.63317 14.6332 8.63316 15.4142 9.41421L17 11M11 5H11.01M3 17H15C16.1046 17 17 16.1046 17 15V3C17 1.89543 16.1046 1 15 1H3C1.89543 1 1 1.89543 1 3V15C1 16.1046 1.89543 17 3 17Z",stroke:"#C4C4C4","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),Ne("p",{className:"text-lightGray font-medium pl-4"},"Images"))),Ne("button",{className:"w-full",onClick:()=>t("background")},Ne("div",{className:"flex items-center hover:bg-rightbackgroundcolor w-full hover:rounded-sm border-0 rounded-sm  pl-5 mb-1"},Ne("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ne("path",{d:"M17 10V3C17 1.89543 16.1046 1 15 1H3C1.89543 1 1 1.89543 1 3V10M17 10V15C17 16.1046 16.1046 17 15 17H3C1.89543 17 1 16.1046 1 15V10M17 10H14.4142C14.149 10 13.8946 10.1054 13.7071 10.2929L11.2929 12.7071C11.1054 12.8946 10.851 13 10.5858 13H7.41421C7.149 13 6.89464 12.8946 6.70711 12.7071L4.29289 10.2929C4.10536 10.1054 3.851 10 3.58579 10H1",stroke:"#C4C4C4","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),Ne("p",{className:"text-lightGray font-medium pl-4"},"Backgrounds"))),Ne("button",{className:"w-full"},Ne("div",{className:"flex items-center hover:bg-rightbackgroundcolor w-full hover:rounded-sm border-0 rounded-sm  pl-5 mb-1"},Ne("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ne("path",{d:"M10 3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3V4C14 4.55228 14.4477 5 15 5H18C18.5523 5 19 5.44772 19 6V9C19 9.55228 18.5523 10 18 10H17C15.8954 10 15 10.8954 15 12C15 13.1046 15.8954 14 17 14H18C18.5523 14 19 14.4477 19 15V18C19 18.5523 18.5523 19 18 19H15C14.4477 19 14 18.5523 14 18V17C14 15.8954 13.1046 15 12 15C10.8954 15 10 15.8954 10 17V18C10 18.5523 9.55228 19 9 19H6C5.44772 19 5 18.5523 5 18V15C5 14.4477 4.55228 14 4 14H3C1.89543 14 1 13.1046 1 12C1 10.8954 1.89543 10 3 10H4C4.55228 10 5 9.55228 5 9V6C5 5.44772 5.44772 5 6 5H9C9.55228 5 10 4.55228 10 4V3Z",stroke:"#C4C4C4","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),Ne("p",{className:"text-lightGray font-medium pl-4"},"Logo"))),Ne("div",{className:"mt-6 flex justify-end w-9/12  mx-auto mb-1"},Ne("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ne("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9 4C9 4.55228 8.55228 5 8 5C7.44772 5 7 4.55228 7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4ZM7 7C6.44772 7 6 7.44772 6 8C6 8.55229 6.44772 9 7 9V12C7 12.5523 7.44772 13 8 13H9C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11V8C9 7.44772 8.55228 7 8 7H7Z",fill:"#4338CA"}))),Ne("button",{className:"w-full"},Ne("div",{className:"flex w-9/12 items-center justify-center h-12 border-0 rounded-md bg-indigo600 px-auto  mx-auto relative"},Ne("svg",{className:"",width:"17",height:"20",viewBox:"0 0 17 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ne("path",{d:"M13.2995 17.5994H0.5V0.800049H14.0994V15.1995",stroke:"#F9FAFB","stroke-linejoin":"round"}),Ne("path",{d:"M0.5 6.7998L5.2998 2L10.0996 6.7998",stroke:"#F9FAFB","stroke-linejoin":"round"}),Ne("path",{d:"M8.09961 4.79988L10.2995 2.59998L14.0994 6.39982",stroke:"#F9FAFB","stroke-linejoin":"round"}),Ne("path",{d:"M8.09985 9.19904L6.49902 10.7999L14.8991 19.1999L16.4999 17.5991L8.09985 9.19904Z",stroke:"#F9FAFB","stroke-linejoin":"round"}),Ne("path",{d:"M8.89551 13.1955L10.4954 11.5956",stroke:"#F9FAFB","stroke-linejoin":"round"}),Ne("path",{d:"M6.49935 9.19973L4.89941 7.59979",stroke:"#F9FAFB","stroke-linejoin":"round"}),Ne("path",{d:"M5.30013 10.7996H3.7002",stroke:"#F9FAFB","stroke-linejoin":"round"}),Ne("path",{d:"M8.09961 7.99978V6.39984",stroke:"#F9FAFB","stroke-linejoin":"round"}),Ne("path",{d:"M6.49976 12.3996L5.2998 13.5995",stroke:"#F9FAFB","stroke-linejoin":"round"}),Ne("path",{d:"M9.69922 9.19971L10.8992 7.99976",stroke:"#F9FAFB","stroke-linejoin":"round"}),Ne("path",{d:"M0.5 15.5994H11.2996",stroke:"#F9FAFB","stroke-linejoin":"round"})),Ne("p",{className:"text-white font-medium pl-2"},"Brandify")))))},je=n.a.createElement;var ke=()=>je("div",{className:" flex justify-center items-center  w-full"},je("div",{className:"flex h-14 rounded-md border-bordercolor border justify-center items-center w-11/12 z-50"},je("button",null,je("span",{className:"w-auto flex justify-end items-center text-grey text-sm p-3"},je("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},je("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2ZM0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 7.29583 11.5892 8.49572 10.8907 9.47653L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L9.47653 10.8907C8.49572 11.5892 7.29583 12 6 12C2.68629 12 0 9.31371 0 6Z",fill:"#9CA3AF"})))),je("input",{className:"w-full rounded text-sm text-gray95 outline-none h-12 z-0 ",type:"text",placeholder:"Search anything from elements"}))),Ee=n.a.createElement;var Oe=()=>Ee("div",{className:" flex   flex-col justify-center w-full p-6 "},Ee("div",{className:"mt-2 w-full"},Ee("h1",{className:"font-bold text-xl text-gray95"},"Add background image")),Ee("button",null,Ee("div",{className:"flex flex-row bg-bluish w-full rounded-md h-12 items-center justify-center mt-4"},Ee("svg",{width:"16",height:"12",viewBox:"0 0 16 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ee("path",{d:"M0.00300002 1.884L8 5.882L15.997 1.884C15.9674 1.37444 15.7441 0.895488 15.3728 0.545227C15.0016 0.194965 14.5104 -9.35847e-05 14 3.36834e-08H2C1.48958 -9.35847e-05 0.998447 0.194965 0.627178 0.545227C0.255908 0.895488 0.0326041 1.37444 0.00300002 1.884Z",fill:"white"}),Ee("path",{d:"M16 4.118L8 8.118L0 4.118V10C0 10.5304 0.210714 11.0391 0.585786 11.4142C0.960859 11.7893 1.46957 12 2 12H14C14.5304 12 15.0391 11.7893 15.4142 11.4142C15.7893 11.0391 16 10.5304 16 10V4.118Z",fill:"white"})),Ee("p",{className:" text-white ml-2"},"Select from gallery"))),Ee("button",null,Ee("div",{className:"flex flex-row bg-jacksonsGray w-full border-2 border-lightGray rounded-md h-12 items-center justify-center mt-4"},Ee("svg",{width:"17",height:"12",viewBox:"0 0 17 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ee("path",{d:"M0.503 1.884L8.5 5.882L16.497 1.884C16.4674 1.37444 16.2441 0.895488 15.8728 0.545227C15.5016 0.194965 15.0104 -9.35847e-05 14.5 3.36834e-08H2.5C1.98958 -9.35847e-05 1.49845 0.194965 1.12718 0.545227C0.755908 0.895488 0.532604 1.37444 0.503 1.884Z",fill:"#4B5563"}),Ee("path",{d:"M16.5 4.118L8.5 8.118L0.5 4.118V10C0.5 10.5304 0.710714 11.0391 1.08579 11.4142C1.46086 11.7893 1.96957 12 2.5 12H14.5C15.0304 12 15.5391 11.7893 15.9142 11.4142C16.2893 11.0391 16.5 10.5304 16.5 10V4.118Z",fill:"#4B5563"})),Ee("p",{className:" text-lightGray ml-2"},"Design on Canva")))),Le=n.a.createElement;var Be=()=>{const[e,t]=n.a.useState(!1);return Le("div",{className:" flex   flex-col justify-center w-full  "},Le("div",{className:" mt-4"},Le("h1",{className:"font-bold text-xl text-gray95"},"Select background color")),Le("div",{className:" mt-4 flex flex-row items-center gap-4"},Le("button",null,Le("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Le("path",{d:"M11.7059 4.05883H4.05882C2.36948 4.05883 1 5.42831 1 7.11765V23.9412C1 25.6305 2.36948 27 4.05882 27H20.8824C22.5717 27 23.9412 25.6305 23.9412 23.9412V16.2941M21.7783 1.89591C22.9728 0.701364 24.9095 0.701364 26.1041 1.89591C27.2986 3.09045 27.2986 5.02719 26.1041 6.22174L12.9729 19.3529H8.64706L8.64706 15.0271L21.7783 1.89591Z",stroke:"#4B5563","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}))),Le("button",{className:"bg-indigo600 h-10 w-10 rounded-md"}),Le("button",{className:"bg-fuschia h-10 w-10 rounded-md"}),Le("button",{className:"bg-greenish h-10 w-10 rounded-md"}),Le("button",{className:"bg-yellowish h-10 w-10 rounded-md"}),Le("button",{className:"bg-redish h-10 w-10 rounded-md"})))},Se=(r(29),n.a.createElement);var Me=()=>Se("div",{className:" flex   flex-col justify-center w-full "},Se("div",{className:"mt-6 w-full"},Se(ke,null)),Se("div",{className:"flex flex-col p-6"},Se(Be,null)),Se("div",{className:"p-6 text-gray95"},Se("p",{className:"separator"})),Se("div",null,Se(Oe,null))),Ie=(r(14),n.a.createElement);const He=(e,t,r,a)=>{let n=0;const l=setInterval(()=>{e.scrollLeft+=a,n+=Math.abs(a),n>=r&&clearInterval(l)},t)};var Pe=()=>{const e=n.a.useRef(null);return Ie("div",{className:"h-full flex  flex-col"},Ie("div",{className:"flex flex-row justify-between items-center w-full mb-4 px-4"},Ie("h1",{className:"text-lg text-gray94 font-bold"},"Buttons"),Ie("button",{className:"text-md text-gray95 font-medium"},"See all")),Ie("div",{className:"flex flex-row items-center justify-between h-28 px-2"},Ie("div",null,Ie("button",{className:" mt-2",onClick:()=>{He(e.current,25,100,-10)}},Ie("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ie("path",{d:"M9 13L6 10M6 10L9 7M6 10L14 10M1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10Z",stroke:"#111827","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})))),Ie("div",{className:"flex flex-row flex-grow  gap-4 w-72  overflow-x-scroll flex-shrink-0  mx-2 no-scrollbar ",ref:e},Ie("div",{className:"bg-fuschia text-white flex flex-row w-40 justify-center  h-12 rounded-md flex-shrink-0"},Ie("button",{className:"flex flex-row justify-center items-center"},Ie("svg",{className:"mr-2",width:"16",height:"12",viewBox:"0 0 16 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ie("path",{d:"M0.00300002 1.884L8 5.882L15.997 1.884C15.9674 1.37444 15.7441 0.895488 15.3728 0.545227C15.0016 0.194965 14.5104 -9.35847e-05 14 3.36834e-08H2C1.48958 -9.35847e-05 0.998447 0.194965 0.627178 0.545227C0.255908 0.895488 0.0326041 1.37444 0.00300002 1.884Z",fill:"white"}),Ie("path",{d:"M16 4.118L8 8.118L0 4.118V10C0 10.5304 0.210714 11.0391 0.585786 11.4142C0.960859 11.7893 1.46957 12 2 12H14C14.5304 12 15.0391 11.7893 15.4142 11.4142C15.7893 11.0391 16 10.5304 16 10V4.118Z",fill:"white"})),"Button text")),Ie("div",{className:"bg-bluish text-white flex flex-row w-40 justify-center h-12 rounded-md  flex-shrink-0"},Ie("button",{className:"flex flex-row justify-center items-center"},Ie("svg",{className:"mr-2",width:"16",height:"12",viewBox:"0 0 16 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ie("path",{d:"M0.00300002 1.884L8 5.882L15.997 1.884C15.9674 1.37444 15.7441 0.895488 15.3728 0.545227C15.0016 0.194965 14.5104 -9.35847e-05 14 3.36834e-08H2C1.48958 -9.35847e-05 0.998447 0.194965 0.627178 0.545227C0.255908 0.895488 0.0326041 1.37444 0.00300002 1.884Z",fill:"white"}),Ie("path",{d:"M16 4.118L8 8.118L0 4.118V10C0 10.5304 0.210714 11.0391 0.585786 11.4142C0.960859 11.7893 1.46957 12 2 12H14C14.5304 12 15.0391 11.7893 15.4142 11.4142C15.7893 11.0391 16 10.5304 16 10V4.118Z",fill:"white"})),"Button text")),Ie("div",{className:"bg-yellowish text-white flex flex-row w-40 justify-center h-12 rounded-md flex-shrink-0"},Ie("button",{className:"flex flex-row justify-center items-center"},Ie("svg",{className:"mr-2",width:"16",height:"12",viewBox:"0 0 16 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ie("path",{d:"M0.00300002 1.884L8 5.882L15.997 1.884C15.9674 1.37444 15.7441 0.895488 15.3728 0.545227C15.0016 0.194965 14.5104 -9.35847e-05 14 3.36834e-08H2C1.48958 -9.35847e-05 0.998447 0.194965 0.627178 0.545227C0.255908 0.895488 0.0326041 1.37444 0.00300002 1.884Z",fill:"white"}),Ie("path",{d:"M16 4.118L8 8.118L0 4.118V10C0 10.5304 0.210714 11.0391 0.585786 11.4142C0.960859 11.7893 1.46957 12 2 12H14C14.5304 12 15.0391 11.7893 15.4142 11.4142C15.7893 11.0391 16 10.5304 16 10V4.118Z",fill:"white"})),"Button text")),Ie("div",{className:"bg-greenish text-white flex flex-row w-40 justify-center h-12 rounded-md flex-shrink-0"},Ie("button",{className:"flex flex-row justify-center items-center"},Ie("svg",{className:"mr-2",width:"16",height:"12",viewBox:"0 0 16 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ie("path",{d:"M0.00300002 1.884L8 5.882L15.997 1.884C15.9674 1.37444 15.7441 0.895488 15.3728 0.545227C15.0016 0.194965 14.5104 -9.35847e-05 14 3.36834e-08H2C1.48958 -9.35847e-05 0.998447 0.194965 0.627178 0.545227C0.255908 0.895488 0.0326041 1.37444 0.00300002 1.884Z",fill:"white"}),Ie("path",{d:"M16 4.118L8 8.118L0 4.118V10C0 10.5304 0.210714 11.0391 0.585786 11.4142C0.960859 11.7893 1.46957 12 2 12H14C14.5304 12 15.0391 11.7893 15.4142 11.4142C15.7893 11.0391 16 10.5304 16 10V4.118Z",fill:"white"})),"Button text"))),Ie("div",{className:""},Ie("button",{className:"mt-2",onClick:()=>{He(e.current,25,100,10)}},Ie("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ie("path",{d:"M11 7L14 10M14 10L11 13M14 10L6 10M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z",stroke:"#111827","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}))))))},Fe=n.a.createElement;var De=()=>Fe("div",{className:"h-full flex w-full  flex-col"},Fe("div",{className:"flex flex-row justify-between items-center w-full mb-6"},Fe("h1",{className:"text-lg text-gray94 font-bold"},"Shapes"),Fe("button",{className:"text-md text-gray95 font-medium"},"See all")),Fe("div",{className:"flex flex-row justify-between mt-4"},Fe("div",null,Fe("button",{className:" focus:ring focus:outline-none"},Fe("svg",{width:"63",height:"63",viewBox:"0 0 63 63",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Fe("rect",{width:"63",height:"63",fill:"#D1D5DB"})))),Fe("div",null,Fe("button",{className:" focus:ring focus:outline-none"},Fe("svg",{width:"64",height:"63",viewBox:"0 0 64 63",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Fe("ellipse",{cx:"32",cy:"31.5",rx:"32",ry:"31.5",fill:"#D1D5DB"})))),Fe("div",null,Fe("button",{className:" focus:ring focus:outline-none"},Fe("svg",{width:"80",height:"69",viewBox:"0 0 80 69",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Fe("path",{d:"M40 0L79.8372 69H0.16283L40 0Z",fill:"#D1D5DB"})))),Fe("div",null,Fe("button",{className:" focus:ring focus:outline-none"},Fe("svg",{width:"64",height:"63",viewBox:"0 0 64 63",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Fe("ellipse",{cx:"32",cy:"31.5",rx:"32",ry:"31.5",fill:"#D1D5DB"})))))),Ve=r(3),Re=n.a.createElement;const Te=(e,t,r,a)=>{let n=0;const l=setInterval(()=>{e.scrollLeft+=a,n+=Math.abs(a),n>=r&&clearInterval(l)},t)};var We=()=>{const e=Object(Ve.a)(re.j),t=n.a.useRef(null);return Re("div",{className:"h-full flex  flex-col "},Re("div",{className:"flex flex-row justify-between items-center w-full px-4"},Re("h1",{className:"text-lg text-gray94 font-bold"},"Stickers"),Re("button",{className:"text-md text-gray95 font-medium"},"See all")),Re("div",{className:"flex flex-row mt-4    overflow-x-scroll  items-center overflow-hidden  no-scrollbar"},Re("div",null,Re("button",{className:" pl-2 mt-3",onClick:()=>{Te(t.current,25,100,-10)}},Re("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Re("path",{d:"M9 13L6 10M6 10L9 7M6 10L14 10M1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10Z",stroke:"#111827","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})))),Re("div",{className:"flex flex-row flex-grow  gap-4 h-28 w-72 overflow-x-scroll no-scrollbar flex-shrink-0  mx-1    relative",ref:t},Re("button",{className:"flex-shrink-0"}," ",Re("img",{src:e,className:"w-12 flex-shrink-0 flex-grow"})),Re("button",{className:"flex-shrink-0"}," ",Re("img",{src:e,className:"w-12 flex-shrink-0"})),Re("button",{className:"flex-shrink-0"}," ",Re("img",{src:e,className:"w-12 flex-shrink-0"})),Re("button",{className:"flex-shrink-0"}," ",Re("img",{src:e,className:"w-12 flex-shrink-0"})),Re("button",{className:"flex-shrink-0"}," ",Re("img",{src:e,className:"w-12 flex-shrink-0"})),Re("button",{className:"flex-shrink-0"}," ",Re("img",{src:e,className:"w-12 flex-shrink-0"})),Re("button",{className:"flex-shrink-0"}," ",Re("img",{src:e,className:"w-12 flex-shrink-0"})),Re("button",{className:"flex-shrink-0"}," ",Re("img",{src:e,className:"w-12 flex-shrink-0"})),Re("button",{className:"flex-shrink-0"}," ",Re("img",{src:e,className:"w-12 flex-shrink-0"}))),Re("div",{className:""},Re("button",{className:"pr-2  mt-3 ",onClick:()=>{Te(t.current,25,100,10)}},Re("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Re("path",{d:"M11 7L14 10M14 10L11 13M14 10L6 10M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z",stroke:"#111827","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}))))))},Ge=n.a.createElement;var Ye=()=>Ge("div",{className:" flex   flex-col justify-center w-full  "},Ge("div",{className:"mt-6 w-full"},Ge(ke,null)),Ge("div",{className:"mt-6 w-full px-4"},Ge(De,null)),Ge("div",{className:"mt-6 w-full"},Ge(We,null)),Ge("div",{className:"mt-6 w-full"},Ge(Pe,null))),Xe=n.a.createElement;const ze=r(30),Qe=r(31),Ue=r(32);var Ze=()=>Xe("div",{className:" flex   flex-col  w-full "},Xe("div",{className:"flex w-full flex-col"},Xe("h1",{className:"font-bold text-xl"},"Frames"),Xe("div",{className:" w-full gap-4 grid grid-cols-3   mt-6 "},Xe("div",null,Xe("button",null,Xe("img",{src:Qe,className:"w-16 h-18"}))),Xe("div",null,Xe("button",null,Xe("img",{src:Ue,className:"w-16 h-18"}))),Xe("div",null,Xe("button",null,Xe("img",{src:ze,className:"w-16 h-18"}))),Xe("div",null,Xe("button",null,Xe("img",{src:Qe,className:"w-16 h-18"}))),Xe("div",null,Xe("button",null,Xe("img",{src:Ue,className:"w-16 h-18"}))),Xe("div",null,Xe("button",null,Xe("img",{src:ze,className:"w-16 h-18"}))),Xe("div",null,Xe("button",null,Xe("img",{src:Qe,className:"w-16 h-18"}))),Xe("div",null,Xe("button",null,Xe("img",{src:Ue,className:"w-16 h-18"}))),Xe("div",null,Xe("button",null,Xe("img",{src:ze,className:"w-16 h-18"}))),Xe("div",null,Xe("button",null,Xe("img",{src:Qe,className:"w-16 h-18"}))),Xe("div",null,Xe("button",null,Xe("img",{src:Ue,className:"w-16 h-18"}))),Xe("div",null,Xe("button",null,Xe("img",{src:ze,className:"w-16 h-18"})))))),qe=n.a.createElement;var Ke=()=>qe("div",{className:" flex   flex-col  w-full p-6 "},qe("div",{className:"mt-6 w-full"},qe(Ze,null))),Je=n.a.createElement;var _e=()=>Je("div",{className:" flex   flex-col justify-center w-full p-6 "},Je("div",{className:" w-full"},Je("h1",{className:"mt-3 font-bold text-xl"},"Click text to add to page")),Je("div",{className:"mt-6 w-full flex flex-col justify-start items-start"},Je("button",{className:"text-5xl leading-none font-normal text-gray94 mb-2"},Je("h1",null,"Heading 1")),Je("button",{className:"text-4xl leading-none font-normal text-gray94 mb-2"},Je("h1",null,"Heading 2")),Je("button",{className:"text-4xl leading-none font-normal text-gray94"},Je("h1",null,"Body 1"))),Je("div",{className:"mt-6 w-full border-b-2 border-bordercolor"}),Je("div",{className:" w-full flex flex-row items-center justify-start"},Je("h1",{className:"mt-3 font-bold text-xl mr-2"},"Available merge tags"),Je("svg",{className:"mt-3",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Je("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9 12C9 12.5523 8.55229 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55229 11 9 11.4477 9 12ZM8 3C7.44772 3 7 3.44772 7 4V8C7 8.55228 7.44772 9 8 9C8.55229 9 9 8.55228 9 8V4C9 3.44772 8.55229 3 8 3Z",fill:"#4338CA"}))),Je("div",{className:"flex flex-row flex-wrap  gap-4  mt-4 "},Je("div",{className:"hover:bg-indigo100 px-2 py-1 border-2 border-bordercolor w-32 h-9 rounded-md "},Je("button",{className:"text-sm  hover:font-bold font-normal"},"Company_name")),Je("div",{className:"hover:bg-indigo100 px-2 py-1 border-2 border-bordercolor w-32 h-9 rounded-md"},Je("button",{className:"text-sm  hover:font-bold font-normal"},"Company_name")),Je("div",{className:"hover:bg-indigo100 px-2 py-1 border-2 border-bordercolor w-32 h-9 rounded-md "},Je("button",{className:"text-sm  hover:font-bold font-normal"},"Company_name")),Je("div",{className:"hover:bg-indigo100 px-2 py-1 border-2 border-bordercolor w-32 h-9 rounded-md"},Je("button",{className:"text-sm  hover:font-bold font-normal"},"Business_name")),Je("div",{className:"hover:bg-indigo100 px-2 py-1 border-2 border-bordercolor w-32 h-9 rounded-md"},Je("button",{className:"text-sm  hover:font-bold font-normal"},"Website_URL"))),Je("div",null,Je("button",{className:"text-indigo600 text-sm font-medium mt-6 "},"Didn’t find the right merge tag?")),Je("div",{className:"border-dashed  px-2 py-1 border-2 border-bordercolor w-60 h-9 mt-4 rounded-md flex flex-row"},Je("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Je("g",{filter:"url(#filter0_d)"},Je("g",{"clip-path":"url(#clip0)"},Je("path",{d:"M2 12C2 5.92487 6.92487 1 13 1C19.0751 1 24 5.92487 24 12C24 18.0751 19.0751 23 13 23C6.92487 23 2 18.0751 2 12Z",fill:"#C7D2FE"}),Je("path",{d:"M13 6V12M13 12V18M13 12H19M13 12L7 12",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}))),Je("defs",null,Je("filter",{id:"filter0_d",x:"0",y:"0",width:"26",height:"26",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"},Je("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),Je("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),Je("feOffset",{dy:"1"}),Je("feGaussianBlur",{stdDeviation:"1"}),Je("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"}),Je("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),Je("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"})),Je("clipPath",{id:"clip0"},Je("path",{d:"M2 12C2 5.92487 6.92487 1 13 1C19.0751 1 24 5.92487 24 12C24 18.0751 19.0751 23 13 23C6.92487 23 2 18.0751 2 12Z",fill:"white"})))),Je("button",{className:"text-sm  font-normal ml-2"},"Create custom merge tag"))),$e=n.a.createElement;var et=()=>{const{0:e,1:t}=Object(a.useContext)(Ce.a);return $e("div",{className:"h-full flex flex-col w-full border-bordercolor border-r-2 "},"element"===e&&$e(Ye,null),"text"===e&&$e(_e,null),"images"===e&&$e(Ke,null),"background"===e&&$e(Me,null),"logo"===e&&$e(_e,null))},tt=n.a.createElement;var rt=()=>tt("div",{className:"w-full grid grid-cols-12 font-inter ",style:{height:"92vh"}},tt("div",{className:"col-span-2 w-full border-bordercolor border-r-2 "},tt(Ae,null)),tt("div",{className:"col-span-3 h-full w-full  "},tt(et,null)),tt("div",{className:"col-span-7 h-full "},tt(ye,null))),at=r(5),nt=n.a.createElement;var lt=({document_title:e})=>nt("div",{className:"bg-indigo600  flex h-full"},nt("div",{className:"flex flex-row items-center justify-between w-full px-8"},nt("div",{className:"flex flex-row items-center"},nt(at.NavLink,{to:"/"},nt("button",{className:"flex flex-row items-center"},nt("svg",{width:"9",height:"16",viewBox:"0 0 9 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},nt("path",{d:"M8 15L1 8L8 1",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),nt("h1",{className:"text-white pl-2"},"Back to Dashboard")))),nt("div",null,nt("h1",{className:"text-white"},e)),nt("button",null,nt("div",{className:"bg-white p-2 border-0 rounded-md"},nt("p",{className:"text-base text-gray94 leading-6 font-medium"},"Save & Share"))))),st=n.a.createElement;t.default=()=>st("div",{className:" "},st("div",{style:{height:"8vh"},className:""},st(lt,{document_title:"Untitled design - Employees"})),st("div",{className:"",style:{height:"92vh"}},st(rt,null)))},function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),l=n.a.createElement;const s=r(23);var o=()=>{const{0:e,1:t}=Object(a.useState)("");return l("div",{className:"h-full fixed"},l("div",{className:"flex justify-start ml-6 items-start mx-auto mt-6 align-middle mb-8"},l("div",{className:"flex justify-items-center items-center"},l("img",{src:s,className:"w-12  rounded-3xl flex justify-items-center items-center"})),l("div",{className:"ml-4 font-sans leading-tight"},l("h3",{className:"text-sm text-gray94 font-medium"},"Tom Cook"),l("button",{className:"text-xs font-normal text-grey"},"View Profile"))),l("div",{className:"flex flex-col justify-start text-left items-start ml-6 leading-10 text-lightGray w-full"},l("div",{className:"flex hover:bg-lightindigo w-full hover:rounded-lg border-0 rounded-md pl-2"},l("svg",{className:"mr-2 w-4",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M1 10L3 8M3 8L10 1L17 8M3 8V18C3 18.5523 3.44772 19 4 19H7M17 8L19 10M17 8V18C17 18.5523 16.5523 19 16 19H13M7 19C7.55228 19 8 18.5523 8 18V14C8 13.4477 8.44772 13 9 13H11C11.5523 13 12 13.4477 12 14V18C12 18.5523 12.4477 19 13 19M7 19H13",stroke:"#6B7280","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),l("button",{className:"text-lightGray font-medium"},"Home")),l("div",{className:"flex hover:bg-lightindigo w-full hover:rounded-lg border-0 rounded-md pl-2"},l("svg",{className:"mr-2 w-4",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M1 14.5L6.15901 9.34099C7.03769 8.46231 8.46231 8.46231 9.34099 9.34099L14.5 14.5M12.25 12.25L14.034 10.466C14.9127 9.58731 16.3373 9.58731 17.216 10.466L19 12.25M12.25 5.5H12.2613M3.25 19H16.75C17.9926 19 19 17.9926 19 16.75V3.25C19 2.00736 17.9926 1 16.75 1H3.25C2.00736 1 1 2.00736 1 3.25V16.75C1 17.9926 2.00736 19 3.25 19Z",stroke:"#9CA3AF","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),l("button",{className:"text-lightGray font-medium"},"Personlized Images ")),l("div",{className:"flex hover:bg-lightindigo w-full hover:rounded-md border-0 rounded-md pl-2"},l("svg",{className:"mr-2 w-4",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M1 16.5963V7.66667C1 6.99796 1.3342 6.3735 1.8906 6.00257L8.8906 1.3359C9.5624 0.888033 10.4376 0.888034 11.1094 1.3359L18.1094 6.00257C18.6658 6.3735 19 6.99796 19 7.66667V16.5963M1 16.5963C1 17.7009 1.89543 18.5963 3 18.5963H17C18.1046 18.5963 19 17.7009 19 16.5963M1 16.5963L7.75 12.0963M19 16.5963L12.25 12.0963M1 7.5963L7.75 12.0963M19 7.5963L12.25 12.0963M12.25 12.0963L11.1094 12.8567C10.4376 13.3046 9.5624 13.3046 8.8906 12.8567L7.75 12.0963",stroke:"#9CA3AF","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),l("button",{className:"text-lightGray font-medium"},"Email Campaigns")),l("div",{className:"flex hover:bg-lightindigo w-full hover:rounded-md border-0 rounded-md pl-2"},l("svg",{className:"mr-2 w-4",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M5 19C2.79086 19 1 17.2091 1 15V3C1 1.89543 1.89543 1 3 1H7C8.10457 1 9 1.89543 9 3V15C9 17.2091 7.20914 19 5 19ZM5 19H17C18.1046 19 19 18.1046 19 17V13C19 11.8954 18.1046 11 17 11H14.6569M9.00002 5.34312L10.6569 3.68629C11.4379 2.90524 12.7042 2.90524 13.4853 3.68629L16.3137 6.51472C17.0948 7.29577 17.0948 8.5621 16.3137 9.34315L7.82843 17.8284M5 15H5.01",stroke:"#9CA3AF","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),l("button",{className:"text-lightGray font-medium"},"Activities")),l("div",{className:"flex hover:bg-lightindigo w-full hover:rounded-md border-0 rounded-md pl-2"},l("svg",{className:"mr-2 w-4",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M10 2.35418C10.7329 1.52375 11.8053 1 13 1C15.2091 1 17 2.79086 17 5C17 7.20914 15.2091 9 13 9C11.8053 9 10.7329 8.47624 10 7.64582M13 19H1V18C1 14.6863 3.68629 12 7 12C10.3137 12 13 14.6863 13 18V19ZM13 19H19V18C19 14.6863 16.3137 12 13 12C11.9071 12 10.8825 12.2922 10 12.8027M11 5C11 7.20914 9.20914 9 7 9C4.79086 9 3 7.20914 3 5C3 2.79086 4.79086 1 7 1C9.20914 1 11 2.79086 11 5Z",stroke:"#9CA3AF","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),l("button",{className:"text-lightGray font-medium"},"Prospects")),l("div",{className:"flex hover:bg-lightindigo w-full hover:rounded-md border-0 rounded-lg pl-2"},l("svg",{className:"mr-2 w-4",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M8.32463 2.31731C8.75103 0.560897 11.249 0.560897 11.6754 2.31731C11.9508 3.45193 13.2507 3.99038 14.2478 3.38285C15.7913 2.44239 17.5576 4.2087 16.6172 5.75218C16.0096 6.74925 16.5481 8.04918 17.6827 8.32463C19.4391 8.75103 19.4391 11.249 17.6827 11.6754C16.5481 11.9508 16.0096 13.2507 16.6172 14.2478C17.5576 15.7913 15.7913 17.5576 14.2478 16.6172C13.2507 16.0096 11.9508 16.5481 11.6754 17.6827C11.249 19.4391 8.75103 19.4391 8.32463 17.6827C8.04918 16.5481 6.74926 16.0096 5.75219 16.6172C4.2087 17.5576 2.44239 15.7913 3.38285 14.2478C3.99038 13.2507 3.45193 11.9508 2.31731 11.6754C0.560897 11.249 0.560897 8.75103 2.31731 8.32463C3.45193 8.04918 3.99037 6.74926 3.38285 5.75218C2.44239 4.2087 4.2087 2.44239 5.75219 3.38285C6.74926 3.99037 8.04918 3.45193 8.32463 2.31731Z",stroke:"#9CA3AF","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),l("path",{d:"M13 10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10Z",stroke:"#9CA3AF","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),l("button",{className:"text-lightGray font-medium"},"Settings"))))},i=r(5),c=r(3),d=n.a.createElement;var m=({bio1:e,bio2:t,bio3:r,bio4:a})=>{const n=Object(c.a)(a);return d("div",null,d("div",{className:"flex flex-col w-full mx-auto justify-center mt-4"},d("div",{className:"flex flex-col border-dashed border-2 border-opacity-25 border-gray95 px-2 rounded-lg py-4 mb-6"},d("div",{className:"flex flex-row justify-center"},d("img",{src:n,className:"mr-2"}),d("h1",{className:"text-indigo text-base"},e)),d("div",{className:"flex justify-center mt-2"},d("p",{className:"text-gray95 flex justify-center leading-4 text-center"},t)),d(i.NavLink,{to:"/createcard"},d("div",{className:"bg-indigo flex flex-row border-0 rounded-lg justify-center p-2 mt-4"},d("svg",{className:"mt-1 mr-4",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M7 2V12M12 7L2 7",stroke:"#EEF2FF","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"})),d("p",{className:"text-white"},r))))))},u=r(1),f=n.a.createElement;var g=({date:e,creator:t,last_edited_by:r,image:a})=>{const n=Object(c.a)(u.e),l=Object(c.a)(u.b),s=Object(c.a)(u.d);return f("div",{className:"mt-4 overflow-y-auto overscroll-y-auto w-full flex self-center bg-white justify-center border-0 shadow-sm rounded-lg pb-10"},f("div",{className:" pt-4"},f("div",{className:"flex justify-center flex-col items-center"},f("div",{className:"flex flex-row"},f("div",{className:"w-full"},f("img",{className:"w-24 h-24 border-0 rounded-md ml-16",src:a})),f("button",{className:"top-0 pb-16 ml-8 text-indigo600"},"Preview")),f("p",{className:"text-base leading-6 font-medium text-gray900 pt-2"},"My brand sales campaign")),f("div",{className:"flex flex-row justify-center mt-4 "},f("div",{className:"flex flex-row"},f("button",{className:"flex flex-row border-2 px-4 py-1 rounded-md items-center text-gray94 border-bordercolor shadow-md "},f("img",{className:"pr-2",src:n}),"Edit")),f("div",{className:"flex flex-row px-2"},f("button",{className:"flex flex-row border-2 px-4 py-1 rounded-md items-center text-gray94 border-bordercolor shadow-md"},f("img",{className:"pr-2",src:l}),"Use as")),f("div",{className:"flex flex-row"},f("button",{className:"flex flex-row border-2 px-4 py-1 rounded-md items-center text-gray94 border-bordercolor shadow-md"},f("img",{className:"pr-2",src:s}),"Archive"))),f("div",{className:" flex justify-center border-t-2 border-gallery mt-4 mb-4"}),f("div",{className:"flex flex-col justify-evenly"},f("div",{className:"flex flex-row justify-evenly mb-2"},f("h1",{className:" text-gray95 font-medium"},"Date Created"),f("p",null,e)),f("div",{className:"flex flex-row justify-between px-16 mb-2"},f("h1",{className:"text-gray95 font-medium"},"Created by"),f("p",null,t)),f("div",{className:"flex flex-row justify-evenly mb-2"},f("h1",{className:"text-gray95 font-medium"},"Last Edited by"),f("p",null,r)))))},p=n.a.createElement;const h=r(24);var x=({impressions:e,link_clicks:t,conversionrate:r})=>{const a=Object(c.a)(u.k),n=Object(c.a)(u.c),l=Object(c.a)(u.g);return p("div",{className:" border-0 rounded-md bg-white  w-full px-4  py-6"},p("div",{className:"flex flex-row justify-between"},p("div",null,p("h1",{className:"text-xl text-black leading-7 font-medium"},"Stats")),p("div",{className:"flex flex-row"},p("div",{className:"flex flex-row px-2 border-2 border-bordercolor rounded-md  mr-2"},p("button",{className:"pr-2"},"Last week "),p("img",{className:"w-2 ",src:a})),p("div",{className:"flex flex-row px-2 border-2 border-bordercolor rounded-md"},p("button",{className:"pr-2"},"Sources "),p("img",{className:"w-2 ",src:a})))),p("div",{className:"flex flex-row mt-6"},p("div",{className:"flex flex-col border-r-2 border-bordercolor pr-4"},p("div",{className:"flex flex-row"},p("img",{className:"",src:n}),p("h1",{className:"ml-2 text-xs text-gray95 leading-4 font-medium"},"Impressions")),p("div",null,p("h1",{className:"text-sm text-lightGray leading-5 font-normal"},e))),p("div",{className:"flex flex-col  px-4"},p("div",{className:"flex flex-row"},p("img",{className:"",src:l}),p("h1",{className:"ml-2 text-xs text-gray95 leading-4 font-medium"},"Link Clicks")),p("div",null,p("h1",{className:"text-sm text-lightGray leading-5 font-normal"},t)))),p("div",{className:"mt-4 flex justify-end"},p("p",{className:"bg-indigo100 text-sm leading-5 font-normal border-0 rounded-xl text-lightGray px-4 "},r,p("span",null,"%"))),p("div",{className:"flex justify-end mb-4"},p("p",{className:"text-base text-gray95 leading-4 font-medium mt-1 "},"Conversion rate")),p("div",{className:"flex justify-center"},p("img",{src:h,className:"w-10/12"})))},w=n.a.createElement;const b=r(25);r(26);var v=({fb_impressions:e,fb_clicks:t,socialmedia1:r,insta_impressions:a,insta_clicks:n,socialmedia2:l})=>{Object(c.a)(u.k),Object(c.a)(u.c),Object(c.a)(u.g);return w("div",{className:" border-0 rounded-md bg-white  w-full   py-6"},w("div",null,w("h1",{className:"text-xl leading-7 font-medium px-6 mb-4"},"Sources")),w("div",{className:"bg-jacksonsGray text-gray95 text-xs w-full flex flex-row leading-4 font-medium h-10 justify-start px-6 items-center"},w("h1",{className:"w-32 "},"Name"),w("h1",{className:"w-20 "},"Clicks"),w("h1",null,"Impressions")),w("div",{className:" text-gray95 text-xs w-full flex flex-row leading-4 font-medium h-10 justify-start px-6 items-center mb-2 mt-2"},w("div",{className:"flex flex-row w-32 items-center"},w("img",{src:b,className:"w-7 "}),w("h1",{className:"pl-2 text-gray900"}," ",r)),w("div",{className:""},w("h1",{className:"w-20"},t)),w("h1",null,e)),w("div",{className:" text-gray95 text-xs w-full flex flex-row leading-4 font-medium h-10 justify-start px-6 items-center mb-2"},w("div",{className:"flex flex-row w-32 items-center"},w("img",{src:b,className:"w-7 "}),w("h1",{className:"pl-2 text-gray900"}," ",l)),w("div",{className:""},w("h1",{className:"w-20"},n)),w("h1",null,a)))},y=n.a.createElement;const C=r(13);var N=()=>y("div",{className:"pt-36 overflow-y-auto bg-rightbackgroundcolor h-full px-4"},y("div",null,y(m,{bio1:"Create a new email campaign",bio2:"Use our intuitive newsletter builder to create engaging emails to send to your contacts.",bio3:"Create New Email campaign",bio4:u.j}),y(m,{bio1:"Create a new personalized image",bio2:"Use our hyperpersonalize image editing tool to create better & engaging images",bio3:"Create New Personalize image",bio4:u.h})),y("div",null,y(g,{date:"20 June, 2011",creator:"John Doe",last_edited_by:"Harry Potter",image:C})),y("div",{className:"mt-6"},y(x,{impressions:344,link_clicks:203,conversionrate:3.4})),y("div",{className:"mt-6"},y(v,{fb_impressions:5467,fb_clicks:203,socialmedia1:"Facebook",insta_impressions:7890,insta_clicks:244,socialmedia2:"Instagram"}))),A=n.a.createElement;var j=()=>A("div",{className:""},A("div",{className:"inline-block  pl-10 h-28 w-full pt-6 items-center justify-center justify-items-center align-middle border-0 rounded-xl bg-white shadow-md"},A("div",{className:" flex flex-row"},A("button",{className:"text-gray95 mr-6"},"Dashboard"),A("svg",{className:"w-2 mr-6 mt-2 text-gray95",width:"9",height:"12",viewBox:"0 0 9 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},A("path",{d:"M0.999999 1L8 8L1 15",stroke:"#111827","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),A("button",{className:"text-gray95"},"Home")),A("div",null,A("h1",{className:"text-xl font-sans font-bold"},"Home")))),k=n.a.createElement;var E=({bio:e,bio1:t,bio2:r,bio3:a,bio4:n,bio5:l,image:s})=>k("div",{className:" border-2 border-bordercolor rounded-xl w-2/3  bg-white shadow-md  "},k("div",{className:"flex flex-row mt-4 justify-center items-center "},k("div",null,k("img",{className:" mt-6 ml-4",width:"80",height:"80",src:s})),k("div",{className:"ml-4"},k("div",{className:"flex justify-start  text-gray95 mt-6"},k("h1",null,e)),k("div",{className:"flex mt-1"},k("p",{className:"text-xl text-indigo font-bold"},t),k("p",{className:"text-indigo text-md mt-1 ml-2"},a)),k("div",{className:"flex justify-center mt-2 align-middle items-center mb-4"},k("svg",{className:"",width:"10",height:"12",viewBox:"0 0 10 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},k("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.293153 5.70679C0.105447 5.51926 0 5.26495 0 4.99979C0 4.73462 0.105447 4.48031 0.293153 4.29279L4.29816 0.292787C4.48592 0.105316 4.74055 0 5.00604 0C5.27154 0 5.52617 0.105316 5.71393 0.292787L9.71894 4.29279C9.90132 4.48139 10.0022 4.73399 9.99996 4.99619C9.99768 5.25838 9.89238 5.5092 9.70674 5.6946C9.5211 5.88001 9.26997 5.98518 9.00745 5.98746C8.74492 5.98974 8.49201 5.88894 8.30317 5.70679L6.0073 3.41379V10.9998C6.0073 11.265 5.90181 11.5194 5.71404 11.7069C5.52627 11.8944 5.27159 11.9998 5.00604 11.9998C4.7405 11.9998 4.48582 11.8944 4.29805 11.7069C4.11028 11.5194 4.00479 11.265 4.00479 10.9998V3.41379L1.70892 5.70679C1.52116 5.89426 1.26653 5.99957 1.00104 5.99957C0.735542 5.99957 0.480915 5.89426 0.293153 5.70679Z",fill:"#10B981"})),k("p",{className:"text-green ml-1"},r),k("p",{className:"ml-1 text-sm text-gray95 "},l)))),k("div",{className:"bg-jacksonsGray border-b-0 border-bordercolor rounded-b-xl py-2"},k("button",{className:"ml-6 text-sm text-indigo600 leading-5 font-medium"},"View all"))),O=n.a.createElement;var L=()=>O("div",{className:"w-full border-0 rounded-xl bg-white shadow-md mt-4 mb-4"},O("div",{className:" ml-10 justify-between flex flex-row"},O("h1",{className:"mt-10 text-2xl font-bold"},"Recent Activities"),O("button",{className:"mt-10 mr-4 border-2 border-alto rounded-md px-2 mb-6"},"View all")),O("div",{className:" "},O("div",{className:" flex justify-center mx-auto w-10/12 border-t-2 border-gallery"}),O("ul",{className:"divide-y divide-gray-200"},O("li",{className:"py-4"},O("div",{className:"flex space-x-2 ml-10"},O("img",{className:"h-6 w-6 rounded-full",src:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",alt:""}),O("div",{className:"flex-1 space-y-1 pr-4"},O("div",{className:"flex items-center justify-between"},O("h3",{className:"text-sm font-medium text-gray900"},"Lindsay Walton"),O("p",{className:"text-sm text-gray95"},"1h")),O("p",{className:"text-sm text-gray95"},"Deployed Workcation (2d89f0c8 in master) to production")))))),O("div",{className:" "},O("div",{className:" flex justify-center mx-auto w-10/12 border-t-2 border-gallery"}),O("ul",{className:"divide-y divide-gray-200"},O("li",{className:"py-4"},O("div",{className:"flex space-x-2 ml-10"},O("img",{className:"h-6 w-6 rounded-full",src:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",alt:""}),O("div",{className:"flex-1 space-y-1 pr-4"},O("div",{className:"flex items-center justify-between"},O("h3",{className:"text-sm font-medium text-gray900"},"Lindsay Walton"),O("p",{className:"text-sm text-gray95"},"1h")),O("p",{className:"text-sm text-gray95"},"Deployed Workcation (2d89f0c8 in master) to production")))))),O("div",{className:" "},O("div",{className:" flex justify-center mx-auto w-10/12 border-t-2 border-gallery"}),O("ul",{className:"divide-y divide-gray-200"},O("li",{className:"py-4"},O("div",{className:"flex space-x-2 ml-10"},O("img",{className:"h-6 w-6 rounded-full",src:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",alt:""}),O("div",{className:"flex-1 space-y-1 pr-4"},O("div",{className:"flex items-center justify-between"},O("h3",{className:"text-sm font-medium text-gray900"},"Lindsay Walton"),O("p",{className:"text-sm text-gray95"},"1h")),O("p",{className:"text-sm text-gray95"},"Deployed Workcation (2d89f0c8 in master) to production")))))),O("div",{className:" "},O("div",{className:" flex justify-center mx-auto w-10/12 border-t-2 border-gallery"}),O("ul",{className:"divide-y divide-gray-200"},O("li",{className:"py-4"},O("div",{className:"flex space-x-2 ml-10"},O("img",{className:"h-6 w-6 rounded-full",src:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",alt:""}),O("div",{className:"flex-1 space-y-1 pr-4"},O("div",{className:"flex items-center justify-between"},O("h3",{className:"text-sm font-medium text-gray900"},"Lindsay Walton"),O("p",{className:"text-sm text-gray95"},"1h")),O("p",{className:"text-sm text-gray95"},"Deployed Workcation (2d89f0c8 in master) to production")))))),O("div",{className:" "},O("div",{className:" flex justify-center mx-auto w-10/12 border-t-2 border-gallery"}),O("ul",{className:"divide-y divide-gray-200"},O("li",{className:"py-4"},O("div",{className:"flex space-x-2 ml-10"},O("img",{className:"h-6 w-6 rounded-full",src:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",alt:""}),O("div",{className:"flex-1 space-y-1 pr-4"},O("div",{className:"flex items-center justify-between"},O("h3",{className:"text-sm font-medium text-gray900"},"Lindsay Walton"),O("p",{className:"text-sm text-gray95"},"1h")),O("p",{className:"text-sm text-gray95"},"Deployed Workcation (2d89f0c8 in master) to production")))))),O("div",{className:" "},O("div",{className:" flex justify-center mx-auto w-10/12 border-t-2 border-gallery"}),O("ul",{className:"divide-y divide-gray-200"},O("li",{className:"py-4"},O("div",{className:"flex space-x-2 ml-10"},O("img",{className:"h-6 w-6 rounded-full",src:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",alt:""}),O("div",{className:"flex-1 space-y-1 pr-4"},O("div",{className:"flex items-center justify-between"},O("h3",{className:"text-sm font-medium text-gray900"},"Lindsay Walton"),O("p",{className:"text-sm text-gray95"},"1h")),O("p",{className:"text-sm text-gray95"},"Deployed Workcation (2d89f0c8 in master) to production")))))),O("div",{className:" "},O("div",{className:" flex justify-center mx-auto w-10/12 border-t-2 border-gallery"}),O("ul",{className:"divide-y divide-gray-200"},O("li",{className:"py-4"},O("div",{className:"flex space-x-2 ml-10"},O("img",{className:"h-6 w-6 rounded-full",src:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",alt:""}),O("div",{className:"flex-1 space-y-1 pr-4"},O("div",{className:"flex items-center justify-between"},O("h3",{className:"text-sm font-medium text-gray900"},"Lindsay Walton"),O("p",{className:"text-sm text-gray95"},"1h")),O("p",{className:"text-sm text-gray95"},"Deployed Workcation (2d89f0c8 in master) to production")))))),O("div",{className:" "},O("div",{className:" flex justify-center mx-auto w-10/12 border-t-2 border-gallery"}),O("ul",{className:"divide-y divide-gray-200"},O("li",{className:"py-4"},O("div",{className:"flex space-x-2 ml-10"},O("img",{className:"h-6 w-6 rounded-full",src:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",alt:""}),O("div",{className:"flex-1 space-y-1 pr-4"},O("div",{className:"flex items-center justify-between"},O("h3",{className:"text-sm font-medium text-gray900"},"Lindsay Walton"),O("p",{className:"text-sm text-gray95"},"1h")),O("p",{className:"text-sm text-gray95"},"Deployed Workcation (2d89f0c8 in master) to production"))))))),B=r(10),S=r(12),M=n.a.createElement;const I=[{id:1,name:"Images Created",stat:"120",icon:S.UsersIcon,change:"32",changeType:"increase",time:"in 2 days"},{id:2,name:"Impressions",stat:"1200",icon:S.MailOpenIcon,change:"122",changeType:"increase",time:"in last 24 hours"},{id:3,name:"Clicks/Conversions",stat:"71,897",icon:S.CursorClickIcon,change:"0.32%",changeType:"decrease",time:"going down"}];function H(...e){return e.filter(Boolean).join(" ")}function P(){return M("div",null,M("dl",{className:"mt-5  grid-cols-1 grid gap-2 justify-between sm:grid-cols-2 lg:grid-cols-3"},I.map(e=>M("div",{key:e.id,className:"relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"},M("dt",null,M("p",{className:"ml-14 text-sm font-medium text-gray95 truncate"},e.name)),M("dd",{className:"ml-14 pb-6 flex flex-col items-baseline sm:pb-7"},M("p",{className:"text-2xl font-semibold text-gray900"},e.stat),M("div",{className:"flex flex-row"},M("p",{className:H("increase"===e.changeType?"text-green500":"text-red600"," flex items-center align-middle text-sm font-semibold")},"increase"===e.changeType?M(B.ArrowSmUpIcon,{className:"self-left  items-center align-middle flex-shrink-0 h-5 w-5 text-green500","aria-hidden":"true"}):M(B.ArrowSmDownIcon,{className:"self-left flex-shrink-0 h-5 w-5 text-red600","aria-hidden":"true"}),M("span",{className:" sr-only"},"increase"===e.changeType?"Increased":"Decreased"," by"),e.change),M("p",{className:"text-sm font-semibold text-gray95 ml-1"},e.time)),M("div",{className:"absolute bottom-0 inset-x-0 bg-jacksonsGray px-4 py-4 sm:px-6"},M("div",{className:"text-sm"},M("a",{href:"#",className:"font-medium text-indigo600 hover:text-indigo-500"}," ","View all",M("span",{className:"sr-only"}," ",e.name," stats")))))))))}var F=n.a.createElement;var D=({title:e,sale:t,views:r,clicks:a,time:n,image:l})=>{const s=Object(c.a)(u.f),o=Object(c.a)(u.i),i=Object(c.a)(u.a);return F("div",{className:"w-11/12 border-0 rounded-md mb-8 shadow-md"},F("div",{className:"flex justify-center border-0 rounded-t-md bg-grayshade "},F("img",{className:"w-32 h-32",src:l})),F("div",{className:"flex flex-row justify-between space-x-14 text-sm leading-5 font-sans font-medium text-gray900 px-2 py-4"},F("div",{className:"flex flex-row"},F("h1",{className:"mr-1"},e),F("p",{className:"mr-1"},"sale"),F("p",null,t)),F("div",{className:"flex flex-row "},F("img",{src:s,className:"mr-2"}),F("p",{className:"mr-1"},r),F("img",{src:o,className:"mr-2"}),F("p",null,a))),F("div",{className:"flex flex-row justify-between items-center px-2 text-sm leading-5 font-sans h-10 font-medium bg-grayshade"},F("div",null,F("button",{className:"text-sm leading-5 font-sans pl-2 font-medium text-indigo600"},"View all")),F("div",{className:"flex flex-row bg-indigo100 px-2 rounded-lg"},F("img",{src:i,className:"mr-1"}),"  ",F("p",{className:"text-indigo600"}," ",n))))},V=n.a.createElement;const R=r(13);var T=()=>V("div",{className:" w-full border-0 rounded-xl bg-white shadow-md pb-6 mb-4 h-auto mt-6 "},V("div",{className:" ml-6 justify-between flex flex-row"},V("h1",{className:"mt-10 text-2xl font-bold"},"Your Images"),V("button",{className:"mt-10 mr-4 border-2 border-alto rounded-md px-4 py-2 mb-6 text-white bg-indigo600"},"Filters")),V("div",{className:" flex justify-center mx-auto w-10/12 border-t-2 border-gallery mb-4"}),V("div",{className:"flex flex-row px-4  mx-4"},V("div",{className:"mb-6 w-full "},V(D,{title:"ALP",sale:"5%",views:121,clicks:541,time:"0.32%",image:R})),V("div",{className:"mb-6 w-full"},V(D,{title:"ALP",sale:"5%",views:121,clicks:541,time:"0.32%",image:R})))),W=n.a.createElement;const G=r(27),Y=r(28);var X=()=>W("div",{className:"overflow-y-auto flex-grow px-10"},W("div",{className:"mt-10"},W(j,null)),W("div",{className:"mt-6 flex flex-row  justify-between mb-10 gap-2"},W(E,{bio:"Personlized Images",bio1:7540,bio2:122,bio3:"Impressions",bio4:"Personlized Images",image:G,bio5:"in last 24 hours "}),W(E,{bio:"Email campaigns",bio1:8775,bio2:233,bio3:"Clicks",bio4:"Personlized Images",image:Y,bio5:"in last 2 days"})),W("div",{className:""},W(L,null)),W("div",{className:""},W(m,{bio1:"Create a new email campaign",bio2:"Use our intuitive newsletter builder to create engaging emails to send to your contacts.",bio3:"Create New Email campaign",bio4:u.j})),W("div",{className:""},W(P,null)),W("div",{className:""},W(T,null))),z=n.a.createElement;t.default=()=>z("div",null,z("div",{className:"w-full mx-auto grid grid-cols-12 font-inter "},z("div",{className:"col-span-2"},z(o,null)),z("div",{className:"col-span-7 bg-jacksonsGray overflow-y-auto"},z(X,null)),z("div",{className:"col-span-3 overflow-hidden  overscroll-y-none"},z(N,null))),z(i.Outlet,null))}]);
>>>>>>> 9b7e435c8751ba2aa36b53031ee46b29c90a8052
//# sourceMappingURL=server.js.map