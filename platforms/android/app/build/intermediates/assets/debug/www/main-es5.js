function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\r\n    <ion-menu type=\"push\" contentId=\"main\" >\r\n        <ion-header>\r\n            \r\n        </ion-header>\r\n\r\n        <ion-content>\r\n            <ion-menu-toggle auto-hide=\"false\">\r\n                <div class=\"menu_flex_div\" (click)=\"goToLogin()\">\r\n                    <div>\r\n                        <ion-icon name=\"person-circle-sharp\"></ion-icon>\r\n                    </div>\r\n                    <div style=\"padding-left: 10px;\">\r\n                        <ion-label class=\"bold_lbl\">Log in to Hotstar</ion-label>\r\n                        <ion-label class=\"light_lbl\">For a bettre experience</ion-label>\r\n                    </div>\r\n                </div>\r\n            </ion-menu-toggle>\r\n        \r\n            <ion-list style=\"background: transparent;\">\r\n\r\n                <ion-menu-toggle auto-hide=\"false\">\r\n                    <div class=\"menu_flex\" (click)=\"goToDownloads()\">\r\n                        <img class=\"menu_icn\" src=\"assets/menu/inbox.png\" alt=\"\">\r\n                        <div>\r\n                            <ion-label class=\"bold_lbl\">Downloads</ion-label>\r\n                            <ion-label class=\"small_lbl\">Watch videos offline</ion-label>\r\n                        </div>\r\n                    </div>\r\n                </ion-menu-toggle>\r\n                \r\n\r\n                <ion-menu-toggle auto-hide=\"false\">\r\n                    <div class=\"menu_flex\" (click)=\"goToWatchlist()\">\r\n                        <img class=\"menu_icn\" src=\"assets/menu/list.png\" alt=\"\">\r\n                        <div>\r\n                            <ion-label class=\"bold_lbl\">Watchlist</ion-label>\r\n                            <ion-label class=\"small_lbl\">Save to Watch letter</ion-label>\r\n                        </div>\r\n                    </div>\r\n                </ion-menu-toggle>\r\n\r\n                <!-- <ion-menu-toggle auto-hide=\"false\">\r\n                    <div class=\"menu_flex\">\r\n                        <img class=\"menu_icn\" src=\"assets/menu/prize.png\" alt=\"\">\r\n                        <div>\r\n                            <ion-label class=\"bold_lbl\">Prizes</ion-label>\r\n                            <ion-label class=\"small_lbl\">Prizes you have won</ion-label>\r\n                        </div>\r\n                    </div>\r\n                </ion-menu-toggle> -->\r\n\r\n                <ion-menu-toggle auto-hide=\"false\">\r\n                    <div class=\"menu_flex\" (click)=\"goToMovies()\">\r\n                        <img class=\"menu_icn\" src=\"assets/menu/clap.png\" alt=\"\">\r\n                        <div>\r\n                            <ion-label class=\"bold_lbl\">Movies</ion-label>\r\n                        </div>\r\n                    </div>\r\n                </ion-menu-toggle>\r\n\r\n                <ion-menu-toggle auto-hide=\"false\">\r\n                    <div class=\"menu_flex\" (click)=\"goToPremium()\">\r\n                        <img class=\"menu_icn\" src=\"assets/menu/crown.png\" alt=\"\">\r\n                        <div>\r\n                            <ion-label class=\"bold_lbl\">Premium</ion-label>\r\n                        </div>\r\n                    </div>\r\n                </ion-menu-toggle>\r\n\r\n                <ion-menu-toggle auto-hide=\"false\">\r\n                    <div class=\"menu_flex\">\r\n                        <img class=\"menu_icn\" src=\"assets/menu/flash.png\" alt=\"\">\r\n                        <div>\r\n                            <ion-label class=\"bold_lbl\">Trending</ion-label>\r\n                        </div>\r\n                    </div>\r\n                </ion-menu-toggle>\r\n\r\n                <ion-menu-toggle auto-hide=\"false\">\r\n                    <div class=\"menu_flex\" (click)=\"goToChannels()\">\r\n                        <img class=\"menu_icn\" src=\"assets/menu/folder.png\" alt=\"\">\r\n                        <div>\r\n                            <ion-label class=\"bold_lbl\">Channels</ion-label>\r\n                        </div>\r\n                    </div>\r\n                </ion-menu-toggle>\r\n\r\n                <ion-menu-toggle auto-hide=\"false\">\r\n                    <div class=\"menu_flex\" (click)=\"goToLanguages()\">\r\n                        <img class=\"menu_icn\" src=\"assets/menu/language.png\" alt=\"\">\r\n                        <div>\r\n                            <ion-label class=\"bold_lbl\">Languages</ion-label>\r\n                        </div>\r\n                    </div>\r\n                </ion-menu-toggle>\r\n\r\n                <ion-menu-toggle auto-hide=\"false\">\r\n                    <div class=\"menu_flex\" (click)=\"goToGenres()\">\r\n                        <img class=\"menu_icn\" src=\"assets/menu/mask.png\" alt=\"\">\r\n                        <div>\r\n                            <ion-label class=\"bold_lbl\">Genres</ion-label>\r\n                        </div>\r\n                    </div>\r\n                </ion-menu-toggle>\r\n\r\n                <ion-menu-toggle auto-hide=\"false\">\r\n                    <div class=\"menu_flex\">\r\n                        <img class=\"menu_icn\" src=\"assets/menu/question.png\" alt=\"\">\r\n                        <div>\r\n                            <ion-label class=\"bold_lbl\">Help</ion-label>\r\n                        </div>\r\n                    </div>\r\n                </ion-menu-toggle>\r\n\r\n            </ion-list>\r\n\r\n        </ion-content>\r\n\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"main\"></ion-router-outlet>\r\n</ion-app>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
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
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
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

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
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

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-tabs-tabs-module */
        "pages-tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./pages/tabs/tabs.module */
        "./src/app/pages/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      }
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-home-home-module */
        [__webpack_require__.e("default~disney-disney-module~home-home-module~news-news-module~pages-category-category-module~pages-~8172a6cc"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/home/home.module */
        "./src/app/pages/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'tv',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-tv-tv-module */
        [__webpack_require__.e("default~disney-disney-module~home-home-module~news-news-module~pages-category-category-module~pages-~8172a6cc"), __webpack_require__.e("tv-tv-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/tv/tv.module */
        "./src/app/pages/tv/tv.module.ts")).then(function (m) {
          return m.TvPageModule;
        });
      }
    }, {
      path: 'movies',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-movies-movies-module */
        [__webpack_require__.e("default~disney-disney-module~home-home-module~news-news-module~pages-category-category-module~pages-~8172a6cc"), __webpack_require__.e("pages-movies-movies-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/movies/movies.module */
        "./src/app/pages/movies/movies.module.ts")).then(function (m) {
          return m.MoviesPageModule;
        });
      }
    }, {
      path: 'sports',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-sports-sports-module */
        [__webpack_require__.e("default~disney-disney-module~home-home-module~news-news-module~pages-category-category-module~pages-~8172a6cc"), __webpack_require__.e("sports-sports-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/sports/sports.module */
        "./src/app/pages/sports/sports.module.ts")).then(function (m) {
          return m.SportsPageModule;
        });
      }
    }, {
      path: 'news',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-news-news-module */
        [__webpack_require__.e("default~disney-disney-module~home-home-module~news-news-module~pages-category-category-module~pages-~8172a6cc"), __webpack_require__.e("news-news-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/news/news.module */
        "./src/app/pages/news/news.module.ts")).then(function (m) {
          return m.NewsPageModule;
        });
      }
    }, {
      path: 'video',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-video-video-module */
        [__webpack_require__.e("default~disney-disney-module~home-home-module~news-news-module~pages-category-category-module~pages-~8172a6cc"), __webpack_require__.e("pages-video-video-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/video/video.module */
        "./src/app/pages/video/video.module.ts")).then(function (m) {
          return m.VideoPageModule;
        });
      }
    }, {
      path: 'video-list',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-video-list-video-list-module */
        [__webpack_require__.e("default~disney-disney-module~home-home-module~news-news-module~pages-category-category-module~pages-~8172a6cc"), __webpack_require__.e("pages-video-list-video-list-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/video-list/video-list.module */
        "./src/app/pages/video-list/video-list.module.ts")).then(function (m) {
          return m.VideoListPageModule;
        });
      }
    }, {
      path: 'category-list',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-category-list-category-list-module */
        [__webpack_require__.e("default~disney-disney-module~home-home-module~news-news-module~pages-category-category-module~pages-~8172a6cc"), __webpack_require__.e("pages-category-list-category-list-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/category-list/category-list.module */
        "./src/app/pages/category-list/category-list.module.ts")).then(function (m) {
          return m.CategoryListPageModule;
        });
      }
    }, {
      path: 'category',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-category-category-module */
        [__webpack_require__.e("default~disney-disney-module~home-home-module~news-news-module~pages-category-category-module~pages-~8172a6cc"), __webpack_require__.e("pages-category-category-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/category/category.module */
        "./src/app/pages/category/category.module.ts")).then(function (m) {
          return m.CategoryPageModule;
        });
      }
    }, {
      path: 'news-list',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-news-list-news-list-module */
        [__webpack_require__.e("default~disney-disney-module~home-home-module~news-news-module~pages-category-category-module~pages-~8172a6cc"), __webpack_require__.e("pages-news-list-news-list-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/news-list/news-list.module */
        "./src/app/pages/news-list/news-list.module.ts")).then(function (m) {
          return m.NewsListPageModule;
        });
      }
    }, {
      path: 'sports-detail',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-sports-detail-sports-detail-module */
        [__webpack_require__.e("default~disney-disney-module~home-home-module~news-news-module~pages-category-category-module~pages-~8172a6cc"), __webpack_require__.e("pages-sports-detail-sports-detail-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/sports-detail/sports-detail.module */
        "./src/app/pages/sports-detail/sports-detail.module.ts")).then(function (m) {
          return m.SportsDetailPageModule;
        });
      }
    }, {
      path: 'sports-video',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-sports-video-sports-video-module */
        [__webpack_require__.e("default~disney-disney-module~home-home-module~news-news-module~pages-category-category-module~pages-~8172a6cc"), __webpack_require__.e("pages-sports-video-sports-video-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/sports-video/sports-video.module */
        "./src/app/pages/sports-video/sports-video.module.ts")).then(function (m) {
          return m.SportsVideoPageModule;
        });
      }
    }, {
      path: 'video-player',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-video-player-video-player-module */
        [__webpack_require__.e("default~disney-disney-module~home-home-module~news-news-module~pages-category-category-module~pages-~8172a6cc"), __webpack_require__.e("pages-video-player-video-player-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/video-player/video-player.module */
        "./src/app/pages/video-player/video-player.module.ts")).then(function (m) {
          return m.VideoPlayerPageModule;
        });
      }
    }, {
      path: 'downloads',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-downloads-downloads-module */
        [__webpack_require__.e("default~disney-disney-module~home-home-module~news-news-module~pages-category-category-module~pages-~8172a6cc"), __webpack_require__.e("pages-downloads-downloads-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/downloads/downloads.module */
        "./src/app/pages/downloads/downloads.module.ts")).then(function (m) {
          return m.DownloadsPageModule;
        });
      }
    }, {
      path: 'watchlist',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-watchlist-watchlist-module */
        [__webpack_require__.e("default~disney-disney-module~home-home-module~news-news-module~pages-category-category-module~pages-~8172a6cc"), __webpack_require__.e("pages-watchlist-watchlist-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/watchlist/watchlist.module */
        "./src/app/pages/watchlist/watchlist.module.ts")).then(function (m) {
          return m.WatchlistPageModule;
        });
      }
    }, {
      path: 'disney',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-disney-disney-module */
        [__webpack_require__.e("default~disney-disney-module~home-home-module~news-news-module~pages-category-category-module~pages-~8172a6cc"), __webpack_require__.e("disney-disney-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/disney/disney.module */
        "./src/app/pages/disney/disney.module.ts")).then(function (m) {
          return m.DisneyPageModule;
        });
      }
    }, {
      path: 'premium',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-premium-premium-module */
        [__webpack_require__.e("default~disney-disney-module~home-home-module~news-news-module~pages-category-category-module~pages-~8172a6cc"), __webpack_require__.e("pages-premium-premium-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/premium/premium.module */
        "./src/app/pages/premium/premium.module.ts")).then(function (m) {
          return m.PremiumPageModule;
        });
      }
    }, {
      path: 'channels',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-channels-channels-module */
        [__webpack_require__.e("default~disney-disney-module~home-home-module~news-news-module~pages-category-category-module~pages-~8172a6cc"), __webpack_require__.e("pages-channels-channels-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/channels/channels.module */
        "./src/app/pages/channels/channels.module.ts")).then(function (m) {
          return m.ChannelsPageModule;
        });
      }
    }, {
      path: 'languages',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-languages-languages-module */
        [__webpack_require__.e("default~disney-disney-module~home-home-module~news-news-module~pages-category-category-module~pages-~8172a6cc"), __webpack_require__.e("pages-languages-languages-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/languages/languages.module */
        "./src/app/pages/languages/languages.module.ts")).then(function (m) {
          return m.LanguagesPageModule;
        });
      }
    }, {
      path: 'genres',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-genres-genres-module */
        [__webpack_require__.e("default~disney-disney-module~home-home-module~news-news-module~pages-category-category-module~pages-~8172a6cc"), __webpack_require__.e("pages-genres-genres-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/genres/genres.module */
        "./src/app/pages/genres/genres.module.ts")).then(function (m) {
          return m.GenresPageModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-login-login-module */
        [__webpack_require__.e("default~disney-disney-module~home-home-module~news-news-module~pages-category-category-module~pages-~8172a6cc"), __webpack_require__.e("pages-login-login-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/login/login.module */
        "./src/app/pages/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'email-login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-email-login-email-login-module */
        "pages-email-login-email-login-module").then(__webpack_require__.bind(null,
        /*! ./pages/email-login/email-login.module */
        "./src/app/pages/email-login/email-login.module.ts")).then(function (m) {
          return m.EmailLoginPageModule;
        });
      }
    }, {
      path: 'mobile-login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-mobile-login-mobile-login-module */
        "pages-mobile-login-mobile-login-module").then(__webpack_require__.bind(null,
        /*! ./pages/mobile-login/mobile-login.module */
        "./src/app/pages/mobile-login/mobile-login.module.ts")).then(function (m) {
          return m.MobileLoginPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".menu_flex_div {\n  display: flex;\n  align-items: center;\n  padding: 15px 20px;\n}\n.menu_flex_div ion-label {\n  display: block;\n}\n.menu_flex_div ion-icon {\n  color: #707070;\n  font-size: 45px;\n}\n.menu_flex_div .bold_lbl {\n  font-family: \"medium\";\n}\n.menu_flex_div .light_lbl {\n  color: #707070;\n  font-size: 13px;\n}\n.menu_flex {\n  padding: 12px 20px;\n  display: flex;\n  align-items: center;\n}\n.menu_flex .menu_icn {\n  width: 16px;\n  min-width: 16px;\n}\n.menu_flex div {\n  margin-left: 16px;\n}\n.menu_flex div .bold_lbl {\n  font-size: 16px;\n  display: block;\n}\n.menu_flex div .small_lbl {\n  font-size: 14px;\n  color: #707070;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXGxhcmFnb25cXHd3d1xcS2VueWFCdXp6LU1vYmlsZUFwcC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQUk7RUFDSSxjQUFBO0FDRVI7QURBSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDRVI7QURBSTtFQUNJLHFCQUFBO0FDRVI7QURBSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDRVI7QURDQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDRUo7QURESTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDR1I7QURESTtFQUNJLGlCQUFBO0FDR1I7QURGUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDSVo7QURGUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0laIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnVfZmxleF9kaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICBpb24taWNvbntcclxuICAgICAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgICAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICB9XHJcbiAgICAuYm9sZF9sYmx7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdtZWRpdW0nO1xyXG4gICAgfVxyXG4gICAgLmxpZ2h0X2xibHtcclxuICAgICAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcbn1cclxuLm1lbnVfZmxleHtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLm1lbnVfaWNue1xyXG4gICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogMTZweDtcclxuICAgIH1cclxuICAgIGRpdiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgLmJvbGRfbGJsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNtYWxsX2xibCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAvLyBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLm1lbnVfZmxleF9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG59XG4ubWVudV9mbGV4X2RpdiBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tZW51X2ZsZXhfZGl2IGlvbi1pY29uIHtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIGZvbnQtc2l6ZTogNDVweDtcbn1cbi5tZW51X2ZsZXhfZGl2IC5ib2xkX2xibCB7XG4gIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xufVxuLm1lbnVfZmxleF9kaXYgLmxpZ2h0X2xibCB7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5tZW51X2ZsZXgge1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWVudV9mbGV4IC5tZW51X2ljbiB7XG4gIHdpZHRoOiAxNnB4O1xuICBtaW4td2lkdGg6IDE2cHg7XG59XG4ubWVudV9mbGV4IGRpdiB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuLm1lbnVfZmxleCBkaXYgLmJvbGRfbGJsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tZW51X2ZsZXggZGl2IC5zbWFsbF9sYmwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, router) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.router = router;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleLightContent();

            _this.splashScreen.hide();
          });
        }
      }, {
        key: "goToDownloads",
        value: function goToDownloads() {
          this.router.navigate(['/downloads']);
        }
      }, {
        key: "goToWatchlist",
        value: function goToWatchlist() {
          this.router.navigate(['/watchlist']);
        }
      }, {
        key: "goToPremium",
        value: function goToPremium() {
          this.router.navigate(['/premium']);
        }
      }, {
        key: "goToChannels",
        value: function goToChannels() {
          this.router.navigate(['/channels']);
        }
      }, {
        key: "goToLanguages",
        value: function goToLanguages() {
          this.router.navigate(['/languages']);
        }
      }, {
        key: "goToGenres",
        value: function goToGenres() {
          this.router.navigate(['/genres']);
        }
      }, {
        key: "goToLogin",
        value: function goToLogin() {
          this.router.navigate(['/login']);
        }
      }, {
        key: "goToMovies",
        value: function goToMovies() {
          this.router.navigate(['/movies']);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicRouteStrategy"]
      }, _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\laragon\www\KenyaBuzz-MobileApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map