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


    __webpack_exports__["default"] = "<ion-app>\r\n    <ion-menu type=\"push\" contentId=\"main\" >\r\n        <ion-header>\r\n            \r\n        </ion-header>\r\n\r\n        <ion-content>\r\n            <ion-menu-toggle auto-hide=\"false\">\r\n                <div class=\"menu_flex_div\" (click)=\"goToLogin()\">\r\n                    <div>\r\n                        <ion-icon name=\"person-circle-sharp\"></ion-icon>\r\n                    </div>\r\n                    <div style=\"padding-left: 10px;\">\r\n                        <ion-label class=\"bold_lbl\">Log in to KenyaBuzz</ion-label>\r\n                        <ion-label class=\"light_lbl\">For a bettre experience</ion-label>\r\n                    </div>\r\n                </div>\r\n            </ion-menu-toggle>\r\n        \r\n            <ion-list style=\"background: transparent;\">\r\n\r\n                <ion-menu-toggle auto-hide=\"false\">\r\n                    <div class=\"menu_flex\" (click)=\"goToDownloads()\">\r\n                        <img class=\"menu_icn\" src=\"assets/menu/inbox.png\" alt=\"\">\r\n                        <div>\r\n                            <ion-label class=\"bold_lbl\">Downloads</ion-label>\r\n                            <ion-label class=\"small_lbl\">Watch videos offline</ion-label>\r\n                        </div>\r\n                    </div>\r\n                </ion-menu-toggle>\r\n                \r\n\r\n                <ion-menu-toggle auto-hide=\"false\">\r\n                    <div class=\"menu_flex\" (click)=\"goToWatchlist()\">\r\n                        <img class=\"menu_icn\" src=\"assets/menu/list.png\" alt=\"\">\r\n                        <div>\r\n                            <ion-label class=\"bold_lbl\">Watchlist</ion-label>\r\n                            <ion-label class=\"small_lbl\">Save to Watch later</ion-label>\r\n                        </div>\r\n                    </div>\r\n                </ion-menu-toggle>\r\n\r\n                <!-- <ion-menu-toggle auto-hide=\"false\">\r\n                    <div class=\"menu_flex\">\r\n                        <img class=\"menu_icn\" src=\"assets/menu/prize.png\" alt=\"\">\r\n                        <div>\r\n                            <ion-label class=\"bold_lbl\">Prizes</ion-label>\r\n                            <ion-label class=\"small_lbl\">Prizes you have won</ion-label>\r\n                        </div>\r\n                    </div>\r\n                </ion-menu-toggle> -->\r\n\r\n                <ion-menu-toggle auto-hide=\"false\">\r\n                    <div class=\"menu_flex\" (click)=\"goToMovies()\">\r\n                        <img class=\"menu_icn\" src=\"assets/menu/clap.png\" alt=\"\">\r\n                        <div>\r\n                            <ion-label class=\"bold_lbl\">Movies</ion-label>\r\n                        </div>\r\n                    </div>\r\n                </ion-menu-toggle>\r\n\r\n                <ion-menu-toggle auto-hide=\"false\">\r\n                    <div class=\"menu_flex\" (click)=\"goToPremium()\">\r\n                        <img class=\"menu_icn\" src=\"assets/menu/crown.png\" alt=\"\">\r\n                        <div>\r\n                            <ion-label class=\"bold_lbl\">Premium</ion-label>\r\n                        </div>\r\n                    </div>\r\n                </ion-menu-toggle>\r\n\r\n                <ion-menu-toggle auto-hide=\"false\">\r\n                    <div class=\"menu_flex\">\r\n                        <img class=\"menu_icn\" src=\"assets/menu/flash.png\" alt=\"\">\r\n                        <div>\r\n                            <ion-label class=\"bold_lbl\">Trending</ion-label>\r\n                        </div>\r\n                    </div>\r\n                </ion-menu-toggle>\r\n\r\n                <ion-menu-toggle auto-hide=\"false\">\r\n                    <div class=\"menu_flex\" (click)=\"goToChannels()\">\r\n                        <img class=\"menu_icn\" src=\"assets/menu/folder.png\" alt=\"\">\r\n                        <div>\r\n                            <ion-label class=\"bold_lbl\">Channels</ion-label>\r\n                        </div>\r\n                    </div>\r\n                </ion-menu-toggle>\r\n\r\n                <ion-menu-toggle auto-hide=\"false\">\r\n                    <div class=\"menu_flex\" (click)=\"goToLanguages()\">\r\n                        <img class=\"menu_icn\" src=\"assets/menu/language.png\" alt=\"\">\r\n                        <div>\r\n                            <ion-label class=\"bold_lbl\">Languages</ion-label>\r\n                        </div>\r\n                    </div>\r\n                </ion-menu-toggle>\r\n\r\n                <ion-menu-toggle auto-hide=\"false\">\r\n                    <div class=\"menu_flex\" (click)=\"goToGenres()\">\r\n                        <img class=\"menu_icn\" src=\"assets/menu/mask.png\" alt=\"\">\r\n                        <div>\r\n                            <ion-label class=\"bold_lbl\">Genres</ion-label>\r\n                        </div>\r\n                    </div>\r\n                </ion-menu-toggle>\r\n\r\n                <ion-menu-toggle auto-hide=\"false\">\r\n                    <div class=\"menu_flex\">\r\n                        <img class=\"menu_icn\" src=\"assets/menu/question.png\" alt=\"\">\r\n                        <div>\r\n                            <ion-label class=\"bold_lbl\">Help</ion-label>\r\n                        </div>\r\n                    </div>\r\n                </ion-menu-toggle>\r\n\r\n            </ion-list>\r\n\r\n        </ion-content>\r\n\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"main\"></ion-router-outlet>\r\n</ion-app>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/view-event/view-event.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/view-event/view-event.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesViewEventViewEventPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button mode=\"md\" color=\"light\"></ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ng-container *ngIf=\"eventLoaded\">\r\n          <ion-title>{{theEvent.name}}</ion-title>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!eventLoaded\">\r\n          <ion-title>Loading...</ion-title>\r\n        </ng-container>\r\n        \r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ng-container *ngIf=\"eventLoaded\">\r\n    <!-- Movie info -->\r\n    <div class=\"movie_info\">\r\n      <div class=\"movie_info__movie-hero bg_image\" [style.backgroundImage]=\"'url('+theEvent.poster+')'\">\r\n        <ion-label class=\"movie_info__title\">{{theEvent.name}}</ion-label>\r\n        <div class=\"movie_info__date_time\">\r\n          <ion-label class=\"movie_info__date\">Date: {{theEvent.start_date}}</ion-label>\r\n          <ion-label class=\"movie_info__time\">{{theEvent.location_name}}</ion-label>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"movie_info__about-movie\">\r\n        <div class=\"movie_info__ratings-run\">\r\n          <div class=\"ratings\">\r\n            <!-- ImDb -->\r\n            <div class=\"movie_info__movie-ratings\">\r\n              <img src=\"../../../assets/icon/imdb-badge.png\">\r\n              <ion-label class=\"\">{{'xxxx'}}</ion-label>\r\n              <span class=\"material-icons-outlined\">\r\n                star\r\n              </span>\r\n            </div>\r\n            <!-- Rotten Tomato -->\r\n            <div class=\"movie_info__movie-ratings\">\r\n              <img src=\"../../../assets/icon/rotten-tomatoes.png\">\r\n              <ion-label class=\"\">{{'xxxx'}}</ion-label>\r\n            </div>\r\n          </div>\r\n          <div class=\"runtime\">\r\n            <span class=\"material-icons-outlined\">\r\n              schedule\r\n            </span>\r\n            <ion-label class=\"\">{{'xxxx'}}</ion-label> \r\n          </div>\r\n        </div>\r\n        <div class=\"movie_info__genres\">\r\n          <ion-label class=\"\">{{'xxxx'}}</ion-label> \r\n        </div>\r\n        <div class=\"movie_info__description\">\r\n          <ion-label class=\"movie_info__title\">Description</ion-label>\r\n          <ion-label class=\"movie_info__synopsis\" [innerHtml]=\"theEvent.description\"></ion-label>\r\n        </div>\r\n        <div class=\"movie_info__CTAs\">\r\n          <button class=\"buy_ticket movies_btn\">Buy Ticket</button>\r\n          <span class=\"material-icons-outlined\">\r\n            share\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <!-- Cast section start -->\r\n      <div class=\"movie_info__cast\">\r\n        <ion-label class=\"movie_info__title\">Cast</ion-label>\r\n        <ion-slides mode=\"ios\" [options]=\"slideOpts\">\r\n          <ion-slide>\r\n              <div class=\"cast-content\">\r\n                <div class=\"cast-imgs\" >\r\n                  <img src=\"\" alt=\"\"/>\r\n                </div>\r\n                <ion-label class=\"cast-name\">{{'xxxx'}}</ion-label>\r\n                <ion-label class=\"cast-xter\">{{'xxxx'}}</ion-label>\r\n              </div>\r\n          </ion-slide>\r\n        </ion-slides>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/view-movie/view-movie.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/view-movie/view-movie.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesViewMovieViewMoviePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button mode=\"md\" color=\"light\"></ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ng-container *ngIf=\"movieLoaded\">\r\n          <ion-title>{{movie.movie_name}}</ion-title>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!movieLoaded\">\r\n          <ion-title>Loading...</ion-title>\r\n        </ng-container>\r\n        \r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ng-container *ngIf=\"movieLoaded\">\r\n    <!-- Movie info -->\r\n    <div class=\"movie_info\">\r\n      <div class=\"movie_info__movie-hero bg_image\" [style.backgroundImage]=\"'url('+movie.movie_poster+')'\">\r\n        <ion-label class=\"movie_info__title\">{{movie.movie_name}}</ion-label>\r\n        <div class=\"movie_info__date_time\">\r\n          <ion-label class=\"movie_info__date\">Date Released:</ion-label>\r\n          <ion-label class=\"movie_info__time\">{{movie.api_data.release_date}}</ion-label>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"movie_info__about-movie\">\r\n        <div class=\"movie_info__ratings-run\">\r\n          <div class=\"ratings\">\r\n            <!-- ImDb -->\r\n            <div class=\"movie_info__movie-ratings\">\r\n              <img src=\"../../../assets/icon/imdb-badge.png\">\r\n              <ion-label class=\"\">{{movie.api_data.vote_average}}</ion-label>\r\n              <span class=\"material-icons-outlined\">\r\n                star\r\n              </span>\r\n            </div>\r\n            <!-- Rotten Tomato -->\r\n            <div class=\"movie_info__movie-ratings\">\r\n              <img src=\"../../../assets/icon/rotten-tomatoes.png\">\r\n              <ion-label class=\"\">{{movie.rotten_tomatoes}}</ion-label>\r\n            </div>\r\n          </div>\r\n          <div class=\"runtime\">\r\n            <span class=\"material-icons-outlined\">\r\n              schedule\r\n            </span>\r\n            <ion-label class=\"\">{{movie.api_data.runtime}} Mins</ion-label> \r\n          </div>\r\n        </div>\r\n        <div class=\"movie_info__genres\">\r\n          <ion-label class=\"\">{{movie.genres}}</ion-label> \r\n        </div>\r\n        <div class=\"movie_info__description\">\r\n          <ion-label class=\"movie_info__title\">Description</ion-label>\r\n          <ion-label class=\"movie_info__synopsis\">{{movie.synopsis}}</ion-label>\r\n        </div>\r\n        <div class=\"movie_info__CTAs\">\r\n          <button class=\"buy_ticket movies_btn\">Buy Ticket</button>\r\n          <span class=\"material-icons-outlined\">\r\n            share\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <!-- Cast section start -->\r\n      <div class=\"movie_info__cast\">\r\n        <ion-label class=\"movie_info__title\">Cast</ion-label>\r\n        <ion-slides mode=\"ios\" [options]=\"slideOpts\">\r\n          <ion-slide *ngFor=\"let cast of movie.cast_data.cast; index as i;\">\r\n              <div class=\"cast-content\">\r\n                <div class=\"cast-imgs\" >\r\n                  <img src=\"{{cast.profile_path}}\" alt=\"{{cast.name}}\"/>\r\n                </div>\r\n                <ion-label class=\"cast-name\">{{cast.name}}</ion-label>\r\n                <ion-label class=\"cast-xter\">{{cast.character}}</ion-label>\r\n              </div>\r\n          </ion-slide>\r\n        </ion-slides>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n\r\n</ion-content>";
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
    /* harmony import */


    var _pages_view_movie_view_movie_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/view-movie/view-movie.page */
    "./src/app/pages/view-movie/view-movie.page.ts");
    /* harmony import */


    var _pages_view_event_view_event_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/view-event/view-event.page */
    "./src/app/pages/view-event/view-event.page.ts");

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
        return __webpack_require__.e(
        /*! import() | pages-home-home-module */
        "home-home-module").then(__webpack_require__.bind(null,
        /*! ./pages/home/home.module */
        "./src/app/pages/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'view-movie',
      children: [{
        path: ':slug',
        component: _pages_view_movie_view_movie_page__WEBPACK_IMPORTED_MODULE_3__["ViewMoviePage"]
      }, {
        path: ':slug/buy',
        component: _pages_view_movie_view_movie_page__WEBPACK_IMPORTED_MODULE_3__["ViewMoviePage"]
      }]
    }, {
      path: 'view-event',
      children: [{
        path: ':slug',
        component: _pages_view_event_view_event_page__WEBPACK_IMPORTED_MODULE_4__["ViewEventPage"]
      }, {
        path: ':slug/ticket',
        component: _pages_view_event_view_event_page__WEBPACK_IMPORTED_MODULE_4__["ViewEventPage"]
      }]
    }, {
      path: 'tv',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-tv-tv-module */
        "tv-tv-module").then(__webpack_require__.bind(null,
        /*! ./pages/tv/tv.module */
        "./src/app/pages/tv/tv.module.ts")).then(function (m) {
          return m.TvPageModule;
        });
      }
    }, {
      path: 'movies',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-movies-movies-module */
        "pages-movies-movies-module").then(__webpack_require__.bind(null,
        /*! ./pages/movies/movies.module */
        "./src/app/pages/movies/movies.module.ts")).then(function (m) {
          return m.MoviesPageModule;
        });
      }
    }, {
      path: 'sports',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-sports-sports-module */
        "sports-sports-module").then(__webpack_require__.bind(null,
        /*! ./pages/sports/sports.module */
        "./src/app/pages/sports/sports.module.ts")).then(function (m) {
          return m.SportsPageModule;
        });
      }
    }, {
      path: 'news',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-news-news-module */
        "news-news-module").then(__webpack_require__.bind(null,
        /*! ./pages/news/news.module */
        "./src/app/pages/news/news.module.ts")).then(function (m) {
          return m.NewsPageModule;
        });
      }
    }, {
      path: 'video',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-video-video-module */
        "pages-video-video-module").then(__webpack_require__.bind(null,
        /*! ./pages/video/video.module */
        "./src/app/pages/video/video.module.ts")).then(function (m) {
          return m.VideoPageModule;
        });
      }
    }, {
      path: 'video-list',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-video-list-video-list-module */
        "pages-video-list-video-list-module").then(__webpack_require__.bind(null,
        /*! ./pages/video-list/video-list.module */
        "./src/app/pages/video-list/video-list.module.ts")).then(function (m) {
          return m.VideoListPageModule;
        });
      }
    }, {
      path: 'category-list',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-category-list-category-list-module */
        "pages-category-list-category-list-module").then(__webpack_require__.bind(null,
        /*! ./pages/category-list/category-list.module */
        "./src/app/pages/category-list/category-list.module.ts")).then(function (m) {
          return m.CategoryListPageModule;
        });
      }
    }, {
      path: 'category',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-category-category-module */
        "pages-category-category-module").then(__webpack_require__.bind(null,
        /*! ./pages/category/category.module */
        "./src/app/pages/category/category.module.ts")).then(function (m) {
          return m.CategoryPageModule;
        });
      }
    }, {
      path: 'news-list',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-news-list-news-list-module */
        "pages-news-list-news-list-module").then(__webpack_require__.bind(null,
        /*! ./pages/news-list/news-list.module */
        "./src/app/pages/news-list/news-list.module.ts")).then(function (m) {
          return m.NewsListPageModule;
        });
      }
    }, {
      path: 'sports-detail',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-sports-detail-sports-detail-module */
        "pages-sports-detail-sports-detail-module").then(__webpack_require__.bind(null,
        /*! ./pages/sports-detail/sports-detail.module */
        "./src/app/pages/sports-detail/sports-detail.module.ts")).then(function (m) {
          return m.SportsDetailPageModule;
        });
      }
    }, {
      path: 'sports-video',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-sports-video-sports-video-module */
        "pages-sports-video-sports-video-module").then(__webpack_require__.bind(null,
        /*! ./pages/sports-video/sports-video.module */
        "./src/app/pages/sports-video/sports-video.module.ts")).then(function (m) {
          return m.SportsVideoPageModule;
        });
      }
    }, {
      path: 'video-player',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-video-player-video-player-module */
        "pages-video-player-video-player-module").then(__webpack_require__.bind(null,
        /*! ./pages/video-player/video-player.module */
        "./src/app/pages/video-player/video-player.module.ts")).then(function (m) {
          return m.VideoPlayerPageModule;
        });
      }
    }, {
      path: 'downloads',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-downloads-downloads-module */
        "pages-downloads-downloads-module").then(__webpack_require__.bind(null,
        /*! ./pages/downloads/downloads.module */
        "./src/app/pages/downloads/downloads.module.ts")).then(function (m) {
          return m.DownloadsPageModule;
        });
      }
    }, {
      path: 'watchlist',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-watchlist-watchlist-module */
        "pages-watchlist-watchlist-module").then(__webpack_require__.bind(null,
        /*! ./pages/watchlist/watchlist.module */
        "./src/app/pages/watchlist/watchlist.module.ts")).then(function (m) {
          return m.WatchlistPageModule;
        });
      }
    }, {
      path: 'disney',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-disney-disney-module */
        "disney-disney-module").then(__webpack_require__.bind(null,
        /*! ./pages/disney/disney.module */
        "./src/app/pages/disney/disney.module.ts")).then(function (m) {
          return m.DisneyPageModule;
        });
      }
    }, {
      path: 'premium',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-premium-premium-module */
        "pages-premium-premium-module").then(__webpack_require__.bind(null,
        /*! ./pages/premium/premium.module */
        "./src/app/pages/premium/premium.module.ts")).then(function (m) {
          return m.PremiumPageModule;
        });
      }
    }, {
      path: 'channels',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-channels-channels-module */
        "pages-channels-channels-module").then(__webpack_require__.bind(null,
        /*! ./pages/channels/channels.module */
        "./src/app/pages/channels/channels.module.ts")).then(function (m) {
          return m.ChannelsPageModule;
        });
      }
    }, {
      path: 'languages',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-languages-languages-module */
        "pages-languages-languages-module").then(__webpack_require__.bind(null,
        /*! ./pages/languages/languages.module */
        "./src/app/pages/languages/languages.module.ts")).then(function (m) {
          return m.LanguagesPageModule;
        });
      }
    }, {
      path: 'genres',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-genres-genres-module */
        "pages-genres-genres-module").then(__webpack_require__.bind(null,
        /*! ./pages/genres/genres.module */
        "./src/app/pages/genres/genres.module.ts")).then(function (m) {
          return m.GenresPageModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-login-login-module */
        "pages-login-login-module").then(__webpack_require__.bind(null,
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


    __webpack_exports__["default"] = ".menu_flex_div {\n  display: flex;\n  align-items: center;\n  padding: 15px 20px;\n}\n.menu_flex_div ion-label {\n  display: block;\n}\n.menu_flex_div ion-icon {\n  color: #707070;\n  font-size: 45px;\n}\n.menu_flex_div .bold_lbl {\n  font-family: \"medium\";\n}\n.menu_flex_div .light_lbl {\n  color: #707070;\n  font-size: 13px;\n}\n.menu_flex {\n  padding: 12px 20px;\n  display: flex;\n  align-items: center;\n}\n.menu_flex .menu_icn {\n  width: 16px;\n  min-width: 16px;\n}\n.menu_flex div {\n  margin-left: 16px;\n}\n.menu_flex div .bold_lbl {\n  font-size: 16px;\n  display: block;\n}\n.menu_flex div .small_lbl {\n  font-size: 14px;\n  color: #707070;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXGxhcmFnb25cXHd3d1xcS2VueWFCdXp6LU1vYmlsZUFwcC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQUU7RUFDRSxjQUFBO0FDRUo7QURBRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDRUo7QURBRTtFQUNFLHFCQUFBO0FDRUo7QURBRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDRUo7QURDQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDRUY7QURERTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FDR0o7QURERTtFQUNFLGlCQUFBO0FDR0o7QURGSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDSU47QURGSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0lOIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnVfZmxleF9kaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICB9XHJcbiAgLmJvbGRfbGJsIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xyXG4gIH1cclxuICAubGlnaHRfbGJsIHtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxufVxyXG4ubWVudV9mbGV4IHtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC5tZW51X2ljbiB7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIG1pbi13aWR0aDogMTZweDtcclxuICB9XHJcbiAgZGl2IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgLmJvbGRfbGJsIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5zbWFsbF9sYmwge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgLy8gbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIubWVudV9mbGV4X2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbn1cbi5tZW51X2ZsZXhfZGl2IGlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1lbnVfZmxleF9kaXYgaW9uLWljb24ge1xuICBjb2xvcjogIzcwNzA3MDtcbiAgZm9udC1zaXplOiA0NXB4O1xufVxuLm1lbnVfZmxleF9kaXYgLmJvbGRfbGJsIHtcbiAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XG59XG4ubWVudV9mbGV4X2RpdiAubGlnaHRfbGJsIHtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLm1lbnVfZmxleCB7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tZW51X2ZsZXggLm1lbnVfaWNuIHtcbiAgd2lkdGg6IDE2cHg7XG4gIG1pbi13aWR0aDogMTZweDtcbn1cbi5tZW51X2ZsZXggZGl2IHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG4ubWVudV9mbGV4IGRpdiAuYm9sZF9sYmwge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1lbnVfZmxleCBkaXYgLnNtYWxsX2xibCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */";
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
    /* harmony import */


    var _pages_view_movie_view_movie_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/view-movie/view-movie.page */
    "./src/app/pages/view-movie/view-movie.page.ts");
    /* harmony import */


    var _pages_view_event_view_event_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/view-event/view-event.page */
    "./src/app/pages/view-event/view-event.page.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _pages_view_movie_view_movie_page__WEBPACK_IMPORTED_MODULE_11__["ViewMoviePage"], _pages_view_event_view_event_page__WEBPACK_IMPORTED_MODULE_12__["ViewEventPage"]],
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
  "./src/app/pages/view-event/view-event.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/view-event/view-event.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesViewEventViewEventPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main_content_div {\n  width: 100%;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .video_div {\n  position: relative;\n  margin-bottom: 10px;\n}\n.main_content_div .cont_div {\n  padding: 10px;\n}\n.main_content_div .flex_div {\n  display: flex;\n}\n.main_content_div .flex_div .back_image {\n  height: 70px;\n  width: 60px;\n  border-radius: 5px;\n  min-width: 60px;\n}\n.main_content_div .flex_div .content_div {\n  padding-left: 10px;\n}\n.main_content_div .flex_div .content_div .title_lbl {\n  font-family: \"medium\";\n  margin-bottom: 5px;\n}\n.main_content_div .flex_div .content_div .light_lbl {\n  color: gray;\n  margin-bottom: 5px;\n}\n.main_content_div .detail_lbl {\n  margin-top: 10px;\n  font-size: 15px;\n}\n.main_content_div .see_more {\n  text-align: right;\n  font-size: 15px;\n  color: gray;\n}\n.main_content_div .gray_lbl {\n  color: gray;\n  font-size: 13px;\n}\n.main_content_div ion-button {\n  --background: #202020;\n  --border-radius: 3px;\n  height: 35px;\n  font-size: 12px;\n}\n.main_content_div .head_lbl {\n  font-family: \"medium\";\n  display: block;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  position: relative;\n}\n.main_content_div .head_lbl ion-icon {\n  position: absolute;\n  right: 0;\n  font-size: 20px;\n  color: #707070;\n}\n.main_content_div .flex_div2 {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  position: relative;\n}\n.main_content_div .flex_div2 .back_image4 {\n  height: 100px;\n  width: 165px;\n  border-radius: 5px;\n}\n.main_content_div .flex_div2 .name {\n  font-size: 12px;\n  margin-top: 5px;\n}\n.main_content_div .flex_div2 .bold_lbl {\n  font-family: \"medium\";\n  position: absolute;\n  top: 75%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-transform: uppercase;\n}\n.main_content_div .flex_div2 .play_div {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  bottom: 0;\n}\n.main_content_div .flex_div2 .play_div .play {\n  font-size: 20px;\n  margin-right: 10px;\n}\n.main_content_div .flex_div2 .play_div .name {\n  font-size: 14px;\n  margin-top: 0px;\n}\n.main_content_div ion-slide {\n  margin-right: 7px;\n}\n.main_content_div .back_image2 {\n  height: 140px;\n  width: 100%;\n  border-radius: 5px;\n}\n.movie_info {\n  width: 100%;\n}\n.movie_info__movie-hero {\n  padding: 50px 10px;\n  width: 100%;\n  height: 350px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n.movie_info__movie-hero::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.6) 100%, black 50%, rgba(0, 0, 0, 0.9) 0%);\n}\n.movie_info__title {\n  font-size: 20px;\n  font-weight: bold;\n  display: block;\n  position: relative;\n  z-index: 2;\n  margin-bottom: 20px;\n}\n.movie_info__date, .movie_info__time {\n  display: block;\n  font-weight: 300;\n  font-size: 12px;\n  position: relative;\n  z-index: 2;\n}\n.movie_info__about-movie {\n  width: 100%;\n  transform: translateY(-25px);\n  border-radius: 25px 25px 0 0;\n  background-color: var(--ion-color-step-100);\n  padding: 30px 10px;\n}\n.movie_info__about-movie .ratings-run {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.movie_info__ratings-run {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.movie_info__ratings-run .ratings {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 20px;\n}\n.movie_info__ratings-run .runtime {\n  background-color: var(--ion-color-step-100);\n  border-radius: 30px;\n  padding: 5px 10px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 5px;\n}\n.movie_info__ratings-run .runtime span.material-icons-outlined {\n  font-size: 14px;\n  color: var(--ion-color-step-450);\n}\n.movie_info__ratings-run .runtime ion-label {\n  font-size: 12px;\n  color: var(--ion-color-step-450);\n}\n.movie_info__movie-ratings {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n}\n.movie_info__movie-ratings ion-label {\n  font-size: 13px;\n  font-weight: bold;\n  vertical-align: bottom;\n  margin: 3px 0 0 5px;\n}\n.movie_info__movie-ratings span.material-icons-outlined {\n  font-size: 14px;\n}\n.movie_info__genres {\n  margin-top: 10px;\n  font-size: 13px;\n}\n.movie_info__description {\n  margin-top: 30px;\n}\n.movie_info__description ion-label.movie_info__title {\n  margin-bottom: 10px;\n  font-size: 15px;\n  font-weight: bold;\n}\n.movie_info__description ion-label.movie_info__synopsis {\n  font-size: 14px;\n  color: var(--ion-color-step-550);\n}\n.movie_info__CTAs {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  margin-top: 20px;\n  gap: 10px;\n}\n.movie_info__CTAs button {\n  transform: translateY(0);\n  margin-bottom: 0;\n}\n.movie_info__CTAs span.material-icons-outlined {\n  padding: 5px;\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;\n  color: var(--ion-color-step-550);\n  background-color: var(--ion-color-step-150);\n  border: 1px solid var(--ion-color-step-250);\n  width: 33px;\n  height: 33px;\n  border-radius: 50%;\n  font-size: 16px;\n  display: grid;\n  place-items: center;\n}\n.movie_info__cast {\n  padding: 0 10px 30px 10px;\n}\n.movie_info__cast ion-label.movie_info__title {\n  margin-bottom: 10px;\n  font-size: 15px;\n  font-weight: bold;\n}\n.movie_info__cast ion-slide {\n  margin-right: 7px;\n}\n.movie_info__cast .cast-content {\n  width: 100%;\n  max-width: 100%;\n}\n.movie_info__cast .cast-content ion-label {\n  display: block;\n}\n.movie_info__cast .cast-content .cast-name {\n  font-size: 13px;\n  font-weight: bold;\n  color: var(--ion-color-step-600);\n  margin: 10px 0 5px 0;\n}\n.movie_info__cast .cast-content .cast-xter {\n  font-size: 13px;\n  font-weight: 400;\n  color: var(--ion-color-step-500);\n}\n.movie_info__cast .cast-imgs {\n  height: 150px;\n  width: 100%;\n  border-radius: 20px;\n  overflow: hidden;\n}\n.movie_info__cast .cast-imgs img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlldy1ldmVudC9DOlxcbGFyYWdvblxcd3d3XFxLZW55YUJ1enotTW9iaWxlQXBwL3NyY1xcYXBwXFxwYWdlc1xcdmlldy1ldmVudFxcdmlldy1ldmVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3ZpZXctZXZlbnQvdmlldy1ldmVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7QURDRTtFQUNFLGNBQUE7QUNDSjtBREVFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ0FKO0FER0U7RUFDRSxhQUFBO0FDREo7QURJRTtFQUNFLGFBQUE7QUNGSjtBREdJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNETjtBREdJO0VBQ0Usa0JBQUE7QUNETjtBREdNO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQ0RSO0FER007RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNEUjtBREtFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDSEo7QURLRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNISjtBREtFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNISjtBRE1FO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDSko7QURPRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0xKO0FET0k7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0xOO0FEU0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNQSjtBRFNJO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1BOO0FEVUk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ1JOO0FEV0k7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0FDVE47QURZSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ1ZOO0FEV007RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNUUjtBRFdNO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNUUjtBRGNFO0VBQ0UsaUJBQUE7QUNaSjtBRGVFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ2JKO0FEaUJBO0VBQ0UsV0FBQTtBQ2RGO0FEZ0JFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUNkSjtBRGdCSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4RkFBQTtBQ2ROO0FEdUJFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDckJKO0FEd0JFO0VBRUUsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ3ZCSjtBRDBCRTtFQUNFLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtBQ3hCSjtBRDBCSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ3hCTjtBRDRCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUMxQko7QUQ0Qkk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsU0FBQTtBQzFCTjtBRDZCSTtFQUNFLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxRQUFBO0FDM0JOO0FENkJNO0VBQ0UsZUFBQTtFQUNBLGdDQUFBO0FDM0JSO0FEOEJNO0VBQ0UsZUFBQTtFQUNBLGdDQUFBO0FDNUJSO0FEaUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQy9CSjtBRGlDSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUMvQk47QURrQ0k7RUFDRSxlQUFBO0FDaENOO0FEb0NFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDbENKO0FEcUNFO0VBQ0UsZ0JBQUE7QUNuQ0o7QURxQ0k7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ25DTjtBRHNDSTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtBQ3BDTjtBRHdDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUN0Q0o7QUR3Q0k7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0FDdENOO0FEeUNJO0VBQ0UsWUFBQTtFQUNBLG1EQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUN2Q047QUQyQ0U7RUFDRSx5QkFBQTtBQ3pDSjtBRDJDSTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDekNOO0FENENJO0VBQ0UsaUJBQUE7QUMxQ047QUQ2Q0k7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQzNDTjtBRDZDTTtFQUNFLGNBQUE7QUMzQ1I7QUQ4Q007RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0FDNUNSO0FEK0NNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUM3Q1I7QURpREk7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUMvQ047QURpRE07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUMvQ1IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy92aWV3LWV2ZW50L3ZpZXctZXZlbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudF9kaXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBpb24tbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAudmlkZW9fZGl2IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuY29udF9kaXYge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcblxyXG4gIC5mbGV4X2RpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLmJhY2tfaW1hZ2Uge1xyXG4gICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIG1pbi13aWR0aDogNjBweDtcclxuICAgIH1cclxuICAgIC5jb250ZW50X2RpdiB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuXHJcbiAgICAgIC50aXRsZV9sYmwge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgfVxyXG4gICAgICAubGlnaHRfbGJsIHtcclxuICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmRldGFpbF9sYmwge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgLnNlZV9tb3JlIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgfVxyXG4gIC5ncmF5X2xibCB7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcblxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjAyMDIwO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZF9sYmwge1xyXG4gICAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mbGV4X2RpdjIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAuYmFja19pbWFnZTQge1xyXG4gICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICB3aWR0aDogMTY1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAubmFtZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ib2xkX2xibCB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNzUlO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG5cclxuICAgIC5wbGF5X2RpdiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAucGxheSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgfVxyXG4gICAgICAubmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLXNsaWRlIHtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gIH1cclxuXHJcbiAgLmJhY2tfaW1hZ2UyIHtcclxuICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbn1cclxuXHJcbi5tb3ZpZV9pbmZvIHtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJl9fbW92aWUtaGVybyB7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgIHRvIHRvcCxcclxuICAgICAgICByZ2JhKDAsIDAsIDAsIDAuNikgMTAwJSxcclxuICAgICAgICByZ2JhKDAsIDAsIDAsIDEpIDUwJSxcclxuICAgICAgICByZ2JhKDAsIDAsIDAsIDAuOSkgMCVcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3RpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcblxyXG4gICZfX2RhdGUsXHJcbiAgJl9fdGltZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuXHJcbiAgJl9fYWJvdXQtbW92aWUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1cHgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDAgMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCk7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDEwcHg7XHJcblxyXG4gICAgLnJhdGluZ3MtcnVuIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3JhdGluZ3MtcnVuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAucmF0aW5ncyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgZ2FwOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ydW50aW1lIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgZ2FwOiA1cHg7XHJcblxyXG4gICAgICBzcGFuLm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTQ1MCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC00NTApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19tb3ZpZS1yYXRpbmdzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgICBtYXJnaW46IDNweCAwIDAgNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ubWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19nZW5yZXMge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcblxyXG4gICZfX2Rlc2NyaXB0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcblxyXG4gICAgaW9uLWxhYmVsLm1vdmllX2luZm9fX3RpdGxlIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tbGFiZWwubW92aWVfaW5mb19fc3lub3BzaXMge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC01NTApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fQ1RBcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZ2FwOiAxMHB4O1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICBzcGFuLm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAyNXB4IDUwcHggLTEycHg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC01NTApO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTApO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0yNTApO1xyXG4gICAgICB3aWR0aDogMzNweDtcclxuICAgICAgaGVpZ2h0OiAzM3B4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2Nhc3Qge1xyXG4gICAgcGFkZGluZzogMCAxMHB4IDMwcHggMTBweDtcclxuXHJcbiAgICBpb24tbGFiZWwubW92aWVfaW5mb19fdGl0bGUge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1zbGlkZSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXN0LWNvbnRlbnQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhc3QtbmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDApO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwIDVweCAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FzdC14dGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXN0LWltZ3Mge1xyXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC52aWRlb19kaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udF9kaXYge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAuYmFja19pbWFnZSB7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWluLXdpZHRoOiA2MHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5jb250ZW50X2RpdiB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAuY29udGVudF9kaXYgLnRpdGxlX2xibCB7XG4gIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLmNvbnRlbnRfZGl2IC5saWdodF9sYmwge1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRldGFpbF9sYmwge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc2VlX21vcmUge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogZ3JheTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ncmF5X2xibCB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMjAyMDIwO1xuICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuaGVhZF9sYmwge1xuICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5oZWFkX2xibCBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM3MDcwNzA7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdjIgLmJhY2tfaW1hZ2U0IHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDE2NXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYyIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYyIC5ib2xkX2xibCB7XG4gIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNzUlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2MiAucGxheV9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdjIgLnBsYXlfZGl2IC5wbGF5IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYyIC5wbGF5X2RpdiAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLXNsaWRlIHtcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmFja19pbWFnZTIge1xuICBoZWlnaHQ6IDE0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubW92aWVfaW5mbyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1vdmllX2luZm9fX21vdmllLWhlcm8ge1xuICBwYWRkaW5nOiA1MHB4IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4ubW92aWVfaW5mb19fbW92aWUtaGVybzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgwLCAwLCAwLCAwLjYpIDEwMCUsIGJsYWNrIDUwJSwgcmdiYSgwLCAwLCAwLCAwLjkpIDAlKTtcbn1cbi5tb3ZpZV9pbmZvX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubW92aWVfaW5mb19fZGF0ZSwgLm1vdmllX2luZm9fX3RpbWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59XG4ubW92aWVfaW5mb19fYWJvdXQtbW92aWUge1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNXB4KTtcbiAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDAgMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwKTtcbiAgcGFkZGluZzogMzBweCAxMHB4O1xufVxuLm1vdmllX2luZm9fX2Fib3V0LW1vdmllIC5yYXRpbmdzLXJ1biB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubW92aWVfaW5mb19fcmF0aW5ncy1ydW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubW92aWVfaW5mb19fcmF0aW5ncy1ydW4gLnJhdGluZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMjBweDtcbn1cbi5tb3ZpZV9pbmZvX19yYXRpbmdzLXJ1biAucnVudGltZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCk7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGdhcDogNXB4O1xufVxuLm1vdmllX2luZm9fX3JhdGluZ3MtcnVuIC5ydW50aW1lIHNwYW4ubWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC00NTApO1xufVxuLm1vdmllX2luZm9fX3JhdGluZ3MtcnVuIC5ydW50aW1lIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTQ1MCk7XG59XG4ubW92aWVfaW5mb19fbW92aWUtcmF0aW5ncyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5tb3ZpZV9pbmZvX19tb3ZpZS1yYXRpbmdzIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIG1hcmdpbjogM3B4IDAgMCA1cHg7XG59XG4ubW92aWVfaW5mb19fbW92aWUtcmF0aW5ncyBzcGFuLm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1vdmllX2luZm9fX2dlbnJlcyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5tb3ZpZV9pbmZvX19kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4ubW92aWVfaW5mb19fZGVzY3JpcHRpb24gaW9uLWxhYmVsLm1vdmllX2luZm9fX3RpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tb3ZpZV9pbmZvX19kZXNjcmlwdGlvbiBpb24tbGFiZWwubW92aWVfaW5mb19fc3lub3BzaXMge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC01NTApO1xufVxuLm1vdmllX2luZm9fX0NUQXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGdhcDogMTBweDtcbn1cbi5tb3ZpZV9pbmZvX19DVEFzIGJ1dHRvbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5tb3ZpZV9pbmZvX19DVEFzIHNwYW4ubWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDI1cHggNTBweCAtMTJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTU1MCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCk7XG4gIHdpZHRoOiAzM3B4O1xuICBoZWlnaHQ6IDMzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xufVxuLm1vdmllX2luZm9fX2Nhc3Qge1xuICBwYWRkaW5nOiAwIDEwcHggMzBweCAxMHB4O1xufVxuLm1vdmllX2luZm9fX2Nhc3QgaW9uLWxhYmVsLm1vdmllX2luZm9fX3RpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tb3ZpZV9pbmZvX19jYXN0IGlvbi1zbGlkZSB7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xufVxuLm1vdmllX2luZm9fX2Nhc3QgLmNhc3QtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4ubW92aWVfaW5mb19fY2FzdCAuY2FzdC1jb250ZW50IGlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1vdmllX2luZm9fX2Nhc3QgLmNhc3QtY29udGVudCAuY2FzdC1uYW1lIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCk7XG4gIG1hcmdpbjogMTBweCAwIDVweCAwO1xufVxuLm1vdmllX2luZm9fX2Nhc3QgLmNhc3QtY29udGVudCAuY2FzdC14dGVyIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTAwKTtcbn1cbi5tb3ZpZV9pbmZvX19jYXN0IC5jYXN0LWltZ3Mge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tb3ZpZV9pbmZvX19jYXN0IC5jYXN0LWltZ3MgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/view-event/view-event.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/view-event/view-event.page.ts ***!
    \*****************************************************/

  /*! exports provided: ViewEventPage */

  /***/
  function srcAppPagesViewEventViewEventPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewEventPage", function () {
      return ViewEventPage;
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


    var src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/dummy.service */
    "./src/app/services/dummy.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");

    var ViewEventPage = /*#__PURE__*/function () {
      function ViewEventPage(dummy, router, dataService) {
        _classCallCheck(this, ViewEventPage);

        this.dummy = dummy;
        this.router = router;
        this.dataService = dataService;
        this.eventLoaded = false;
        this.slideOpts = {
          slidesPerView: 3
        };

        if (this.router.getCurrentNavigation().extras.state && "data" in this.router.getCurrentNavigation().extras.state) {
          this.theEvent = this.router.getCurrentNavigation().extras.state.data; // this.theEvent.poster = (this.theEvent.poster ? 'https://www.kenyabuzz.com/public'+this.theEvent.poster : null);
          // this.theEvent.start_date = (this.theEvent.start_date ? this.dataService.readableDate(this.theEvent.start_date) : null);

          console.log('The Event >', this.theEvent);
          this.eventLoaded = true;
        } else {
          this.eventLoaded = false; // navigate back home if there's nothing to display

          this.router.navigate(['/home']);
        }
      }

      _createClass(ViewEventPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goTovideoList",
        value: function goTovideoList(val) {
          var navData = {
            queryParams: {
              id: val
            }
          };
          this.router.navigate(['/video-list'], navData);
        }
      }]);

      return ViewEventPage;
    }();

    ViewEventPage.ctorParameters = function () {
      return [{
        type: src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__["DummyService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
      }];
    };

    ViewEventPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-event',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-event.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/view-event/view-event.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-event.page.scss */
      "./src/app/pages/view-event/view-event.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__["DummyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])], ViewEventPage);
    /***/
  },

  /***/
  "./src/app/pages/view-movie/view-movie.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/view-movie/view-movie.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesViewMovieViewMoviePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main_content_div {\n  width: 100%;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .video_div {\n  position: relative;\n  margin-bottom: 10px;\n}\n.main_content_div .cont_div {\n  padding: 10px;\n}\n.main_content_div .flex_div {\n  display: flex;\n}\n.main_content_div .flex_div .back_image {\n  height: 70px;\n  width: 60px;\n  border-radius: 5px;\n  min-width: 60px;\n}\n.main_content_div .flex_div .content_div {\n  padding-left: 10px;\n}\n.main_content_div .flex_div .content_div .title_lbl {\n  font-family: \"medium\";\n  margin-bottom: 5px;\n}\n.main_content_div .flex_div .content_div .light_lbl {\n  color: gray;\n  margin-bottom: 5px;\n}\n.main_content_div .detail_lbl {\n  margin-top: 10px;\n  font-size: 15px;\n}\n.main_content_div .see_more {\n  text-align: right;\n  font-size: 15px;\n  color: gray;\n}\n.main_content_div .gray_lbl {\n  color: gray;\n  font-size: 13px;\n}\n.main_content_div ion-button {\n  --background: #202020;\n  --border-radius: 3px;\n  height: 35px;\n  font-size: 12px;\n}\n.main_content_div .head_lbl {\n  font-family: \"medium\";\n  display: block;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  position: relative;\n}\n.main_content_div .head_lbl ion-icon {\n  position: absolute;\n  right: 0;\n  font-size: 20px;\n  color: #707070;\n}\n.main_content_div .flex_div2 {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  position: relative;\n}\n.main_content_div .flex_div2 .back_image4 {\n  height: 100px;\n  width: 165px;\n  border-radius: 5px;\n}\n.main_content_div .flex_div2 .name {\n  font-size: 12px;\n  margin-top: 5px;\n}\n.main_content_div .flex_div2 .bold_lbl {\n  font-family: \"medium\";\n  position: absolute;\n  top: 75%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-transform: uppercase;\n}\n.main_content_div .flex_div2 .play_div {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  bottom: 0;\n}\n.main_content_div .flex_div2 .play_div .play {\n  font-size: 20px;\n  margin-right: 10px;\n}\n.main_content_div .flex_div2 .play_div .name {\n  font-size: 14px;\n  margin-top: 0px;\n}\n.main_content_div ion-slide {\n  margin-right: 7px;\n}\n.main_content_div .back_image2 {\n  height: 140px;\n  width: 100%;\n  border-radius: 5px;\n}\n.movie_info {\n  width: 100%;\n}\n.movie_info__movie-hero {\n  padding: 50px 10px;\n  width: 100%;\n  height: 350px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n.movie_info__movie-hero::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.6) 100%, black 50%, rgba(0, 0, 0, 0.9) 0%);\n}\n.movie_info__title {\n  font-size: 20px;\n  font-weight: bold;\n  display: block;\n  position: relative;\n  z-index: 2;\n  margin-bottom: 20px;\n}\n.movie_info__date, .movie_info__time {\n  display: block;\n  font-weight: 300;\n  font-size: 12px;\n  position: relative;\n  z-index: 2;\n}\n.movie_info__about-movie {\n  width: 100%;\n  transform: translateY(-25px);\n  border-radius: 25px 25px 0 0;\n  background-color: var(--ion-color-step-100);\n  padding: 30px 10px;\n}\n.movie_info__about-movie .ratings-run {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.movie_info__ratings-run {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.movie_info__ratings-run .ratings {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 20px;\n}\n.movie_info__ratings-run .runtime {\n  background-color: var(--ion-color-step-100);\n  border-radius: 30px;\n  padding: 5px 10px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 5px;\n}\n.movie_info__ratings-run .runtime span.material-icons-outlined {\n  font-size: 14px;\n  color: var(--ion-color-step-450);\n}\n.movie_info__ratings-run .runtime ion-label {\n  font-size: 12px;\n  color: var(--ion-color-step-450);\n}\n.movie_info__movie-ratings {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n}\n.movie_info__movie-ratings ion-label {\n  font-size: 13px;\n  font-weight: bold;\n  vertical-align: bottom;\n  margin: 3px 0 0 5px;\n}\n.movie_info__movie-ratings span.material-icons-outlined {\n  font-size: 14px;\n}\n.movie_info__genres {\n  margin-top: 10px;\n  font-size: 13px;\n}\n.movie_info__description {\n  margin-top: 30px;\n}\n.movie_info__description ion-label.movie_info__title {\n  margin-bottom: 10px;\n  font-size: 15px;\n  font-weight: bold;\n}\n.movie_info__description ion-label.movie_info__synopsis {\n  font-size: 14px;\n  color: var(--ion-color-step-550);\n}\n.movie_info__CTAs {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  margin-top: 20px;\n  gap: 10px;\n}\n.movie_info__CTAs button {\n  transform: translateY(0);\n  margin-bottom: 0;\n}\n.movie_info__CTAs span.material-icons-outlined {\n  padding: 5px;\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;\n  color: var(--ion-color-step-550);\n  background-color: var(--ion-color-step-150);\n  border: 1px solid var(--ion-color-step-250);\n  width: 33px;\n  height: 33px;\n  border-radius: 50%;\n  font-size: 16px;\n  display: grid;\n  place-items: center;\n}\n.movie_info__cast {\n  padding: 0 10px 30px 10px;\n}\n.movie_info__cast ion-label.movie_info__title {\n  margin-bottom: 10px;\n  font-size: 15px;\n  font-weight: bold;\n}\n.movie_info__cast ion-slide {\n  margin-right: 7px;\n}\n.movie_info__cast .cast-content {\n  width: 100%;\n  max-width: 100%;\n}\n.movie_info__cast .cast-content ion-label {\n  display: block;\n}\n.movie_info__cast .cast-content .cast-name {\n  font-size: 13px;\n  font-weight: bold;\n  color: var(--ion-color-step-600);\n  margin: 10px 0 5px 0;\n}\n.movie_info__cast .cast-content .cast-xter {\n  font-size: 13px;\n  font-weight: 400;\n  color: var(--ion-color-step-500);\n}\n.movie_info__cast .cast-imgs {\n  height: 150px;\n  width: 100%;\n  border-radius: 20px;\n  overflow: hidden;\n}\n.movie_info__cast .cast-imgs img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlldy1tb3ZpZS9DOlxcbGFyYWdvblxcd3d3XFxLZW55YUJ1enotTW9iaWxlQXBwL3NyY1xcYXBwXFxwYWdlc1xcdmlldy1tb3ZpZVxcdmlldy1tb3ZpZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3ZpZXctbW92aWUvdmlldy1tb3ZpZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7QURDRTtFQUNFLGNBQUE7QUNDSjtBREVFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ0FKO0FER0U7RUFDRSxhQUFBO0FDREo7QURJRTtFQUNFLGFBQUE7QUNGSjtBREdJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNETjtBREdJO0VBQ0Usa0JBQUE7QUNETjtBREdNO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQ0RSO0FER007RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNEUjtBREtFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDSEo7QURLRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNISjtBREtFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNISjtBRE1FO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDSko7QURPRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0xKO0FET0k7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0xOO0FEU0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNQSjtBRFNJO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1BOO0FEVUk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ1JOO0FEV0k7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0FDVE47QURZSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ1ZOO0FEV007RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNUUjtBRFdNO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNUUjtBRGNFO0VBQ0UsaUJBQUE7QUNaSjtBRGVFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ2JKO0FEaUJBO0VBQ0UsV0FBQTtBQ2RGO0FEZ0JFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUNkSjtBRGdCSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4RkFBQTtBQ2ROO0FEdUJFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDckJKO0FEd0JFO0VBRUUsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ3ZCSjtBRDBCRTtFQUNFLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtBQ3hCSjtBRDBCSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ3hCTjtBRDRCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUMxQko7QUQ0Qkk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsU0FBQTtBQzFCTjtBRDZCSTtFQUNFLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxRQUFBO0FDM0JOO0FENkJNO0VBQ0UsZUFBQTtFQUNBLGdDQUFBO0FDM0JSO0FEOEJNO0VBQ0UsZUFBQTtFQUNBLGdDQUFBO0FDNUJSO0FEaUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQy9CSjtBRGlDSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUMvQk47QURrQ0k7RUFDRSxlQUFBO0FDaENOO0FEb0NFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDbENKO0FEcUNFO0VBQ0UsZ0JBQUE7QUNuQ0o7QURxQ0k7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ25DTjtBRHNDSTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtBQ3BDTjtBRHdDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUN0Q0o7QUR3Q0k7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0FDdENOO0FEeUNJO0VBQ0UsWUFBQTtFQUNBLG1EQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUN2Q047QUQyQ0U7RUFDRSx5QkFBQTtBQ3pDSjtBRDJDSTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDekNOO0FENENJO0VBQ0UsaUJBQUE7QUMxQ047QUQ2Q0k7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQzNDTjtBRDZDTTtFQUNFLGNBQUE7QUMzQ1I7QUQ4Q007RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0FDNUNSO0FEK0NNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUM3Q1I7QURpREk7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUMvQ047QURpRE07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUMvQ1IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy92aWV3LW1vdmllL3ZpZXctbW92aWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudF9kaXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBpb24tbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAudmlkZW9fZGl2IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuY29udF9kaXYge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcblxyXG4gIC5mbGV4X2RpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLmJhY2tfaW1hZ2Uge1xyXG4gICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIG1pbi13aWR0aDogNjBweDtcclxuICAgIH1cclxuICAgIC5jb250ZW50X2RpdiB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuXHJcbiAgICAgIC50aXRsZV9sYmwge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgfVxyXG4gICAgICAubGlnaHRfbGJsIHtcclxuICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmRldGFpbF9sYmwge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgLnNlZV9tb3JlIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgfVxyXG4gIC5ncmF5X2xibCB7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcblxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjAyMDIwO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZF9sYmwge1xyXG4gICAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mbGV4X2RpdjIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAuYmFja19pbWFnZTQge1xyXG4gICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICB3aWR0aDogMTY1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAubmFtZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ib2xkX2xibCB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNzUlO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG5cclxuICAgIC5wbGF5X2RpdiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAucGxheSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgfVxyXG4gICAgICAubmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLXNsaWRlIHtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gIH1cclxuXHJcbiAgLmJhY2tfaW1hZ2UyIHtcclxuICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbn1cclxuXHJcbi5tb3ZpZV9pbmZvIHtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJl9fbW92aWUtaGVybyB7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgIHRvIHRvcCxcclxuICAgICAgICByZ2JhKDAsIDAsIDAsIDAuNikgMTAwJSxcclxuICAgICAgICByZ2JhKDAsIDAsIDAsIDEpIDUwJSxcclxuICAgICAgICByZ2JhKDAsIDAsIDAsIDAuOSkgMCVcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3RpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcblxyXG4gICZfX2RhdGUsXHJcbiAgJl9fdGltZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuXHJcbiAgJl9fYWJvdXQtbW92aWUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1cHgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDAgMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCk7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDEwcHg7XHJcblxyXG4gICAgLnJhdGluZ3MtcnVuIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3JhdGluZ3MtcnVuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAucmF0aW5ncyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgZ2FwOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ydW50aW1lIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgZ2FwOiA1cHg7XHJcblxyXG4gICAgICBzcGFuLm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTQ1MCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC00NTApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19tb3ZpZS1yYXRpbmdzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgICBtYXJnaW46IDNweCAwIDAgNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ubWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19nZW5yZXMge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcblxyXG4gICZfX2Rlc2NyaXB0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcblxyXG4gICAgaW9uLWxhYmVsLm1vdmllX2luZm9fX3RpdGxlIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tbGFiZWwubW92aWVfaW5mb19fc3lub3BzaXMge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC01NTApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fQ1RBcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZ2FwOiAxMHB4O1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICBzcGFuLm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAyNXB4IDUwcHggLTEycHg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC01NTApO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTApO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0yNTApO1xyXG4gICAgICB3aWR0aDogMzNweDtcclxuICAgICAgaGVpZ2h0OiAzM3B4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2Nhc3Qge1xyXG4gICAgcGFkZGluZzogMCAxMHB4IDMwcHggMTBweDtcclxuXHJcbiAgICBpb24tbGFiZWwubW92aWVfaW5mb19fdGl0bGUge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1zbGlkZSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXN0LWNvbnRlbnQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhc3QtbmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDApO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwIDVweCAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FzdC14dGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXN0LWltZ3Mge1xyXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC52aWRlb19kaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udF9kaXYge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAuYmFja19pbWFnZSB7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWluLXdpZHRoOiA2MHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5jb250ZW50X2RpdiB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAuY29udGVudF9kaXYgLnRpdGxlX2xibCB7XG4gIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLmNvbnRlbnRfZGl2IC5saWdodF9sYmwge1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRldGFpbF9sYmwge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc2VlX21vcmUge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogZ3JheTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ncmF5X2xibCB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMjAyMDIwO1xuICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuaGVhZF9sYmwge1xuICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5oZWFkX2xibCBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM3MDcwNzA7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdjIgLmJhY2tfaW1hZ2U0IHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDE2NXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYyIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYyIC5ib2xkX2xibCB7XG4gIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNzUlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2MiAucGxheV9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdjIgLnBsYXlfZGl2IC5wbGF5IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYyIC5wbGF5X2RpdiAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLXNsaWRlIHtcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmFja19pbWFnZTIge1xuICBoZWlnaHQ6IDE0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubW92aWVfaW5mbyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1vdmllX2luZm9fX21vdmllLWhlcm8ge1xuICBwYWRkaW5nOiA1MHB4IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4ubW92aWVfaW5mb19fbW92aWUtaGVybzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgwLCAwLCAwLCAwLjYpIDEwMCUsIGJsYWNrIDUwJSwgcmdiYSgwLCAwLCAwLCAwLjkpIDAlKTtcbn1cbi5tb3ZpZV9pbmZvX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubW92aWVfaW5mb19fZGF0ZSwgLm1vdmllX2luZm9fX3RpbWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59XG4ubW92aWVfaW5mb19fYWJvdXQtbW92aWUge1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNXB4KTtcbiAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDAgMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwKTtcbiAgcGFkZGluZzogMzBweCAxMHB4O1xufVxuLm1vdmllX2luZm9fX2Fib3V0LW1vdmllIC5yYXRpbmdzLXJ1biB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubW92aWVfaW5mb19fcmF0aW5ncy1ydW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubW92aWVfaW5mb19fcmF0aW5ncy1ydW4gLnJhdGluZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMjBweDtcbn1cbi5tb3ZpZV9pbmZvX19yYXRpbmdzLXJ1biAucnVudGltZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCk7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGdhcDogNXB4O1xufVxuLm1vdmllX2luZm9fX3JhdGluZ3MtcnVuIC5ydW50aW1lIHNwYW4ubWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC00NTApO1xufVxuLm1vdmllX2luZm9fX3JhdGluZ3MtcnVuIC5ydW50aW1lIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTQ1MCk7XG59XG4ubW92aWVfaW5mb19fbW92aWUtcmF0aW5ncyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5tb3ZpZV9pbmZvX19tb3ZpZS1yYXRpbmdzIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIG1hcmdpbjogM3B4IDAgMCA1cHg7XG59XG4ubW92aWVfaW5mb19fbW92aWUtcmF0aW5ncyBzcGFuLm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1vdmllX2luZm9fX2dlbnJlcyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5tb3ZpZV9pbmZvX19kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4ubW92aWVfaW5mb19fZGVzY3JpcHRpb24gaW9uLWxhYmVsLm1vdmllX2luZm9fX3RpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tb3ZpZV9pbmZvX19kZXNjcmlwdGlvbiBpb24tbGFiZWwubW92aWVfaW5mb19fc3lub3BzaXMge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC01NTApO1xufVxuLm1vdmllX2luZm9fX0NUQXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGdhcDogMTBweDtcbn1cbi5tb3ZpZV9pbmZvX19DVEFzIGJ1dHRvbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5tb3ZpZV9pbmZvX19DVEFzIHNwYW4ubWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDI1cHggNTBweCAtMTJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTU1MCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCk7XG4gIHdpZHRoOiAzM3B4O1xuICBoZWlnaHQ6IDMzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xufVxuLm1vdmllX2luZm9fX2Nhc3Qge1xuICBwYWRkaW5nOiAwIDEwcHggMzBweCAxMHB4O1xufVxuLm1vdmllX2luZm9fX2Nhc3QgaW9uLWxhYmVsLm1vdmllX2luZm9fX3RpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tb3ZpZV9pbmZvX19jYXN0IGlvbi1zbGlkZSB7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xufVxuLm1vdmllX2luZm9fX2Nhc3QgLmNhc3QtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4ubW92aWVfaW5mb19fY2FzdCAuY2FzdC1jb250ZW50IGlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1vdmllX2luZm9fX2Nhc3QgLmNhc3QtY29udGVudCAuY2FzdC1uYW1lIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCk7XG4gIG1hcmdpbjogMTBweCAwIDVweCAwO1xufVxuLm1vdmllX2luZm9fX2Nhc3QgLmNhc3QtY29udGVudCAuY2FzdC14dGVyIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTAwKTtcbn1cbi5tb3ZpZV9pbmZvX19jYXN0IC5jYXN0LWltZ3Mge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tb3ZpZV9pbmZvX19jYXN0IC5jYXN0LWltZ3MgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/view-movie/view-movie.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/view-movie/view-movie.page.ts ***!
    \*****************************************************/

  /*! exports provided: ViewMoviePage */

  /***/
  function srcAppPagesViewMovieViewMoviePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewMoviePage", function () {
      return ViewMoviePage;
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


    var src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/dummy.service */
    "./src/app/services/dummy.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ViewMoviePage = /*#__PURE__*/function () {
      function ViewMoviePage(dummy, router) {
        _classCallCheck(this, ViewMoviePage);

        this.dummy = dummy;
        this.router = router;
        this.movieLoaded = false;
        this.slideOpts = {
          slidesPerView: 3
        };

        if (this.router.getCurrentNavigation().extras.state && "data" in this.router.getCurrentNavigation().extras.state) {
          this.movie = this.router.getCurrentNavigation().extras.state.data;
          this.movie.cast_data.cast.forEach(function (cast) {
            cast.profile_path = "https://image.tmdb.org/t/p/w342" + cast.profile_path;
          });
          this.movieLoaded = true;
        } else {
          this.movieLoaded = false; // navigate back home if there's nothing to dispaly

          this.router.navigate(['/home']);
        }
      }

      _createClass(ViewMoviePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goTovideoList",
        value: function goTovideoList(val) {
          var navData = {
            queryParams: {
              id: val
            }
          };
          this.router.navigate(['/video-list'], navData);
        }
      }]);

      return ViewMoviePage;
    }();

    ViewMoviePage.ctorParameters = function () {
      return [{
        type: src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__["DummyService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ViewMoviePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-movie',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-movie.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/view-movie/view-movie.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-movie.page.scss */
      "./src/app/pages/view-movie/view-movie.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__["DummyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], ViewMoviePage);
    /***/
  },

  /***/
  "./src/app/services/api.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/api.service.ts ***!
    \*****************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ApiService = /*#__PURE__*/function () {
      function ApiService(httpClient) {
        _classCallCheck(this, ApiService);

        this.httpClient = httpClient;
        this.baseApiPath = 'https://api.kenyabuzz.com'; //
      }

      _createClass(ApiService, [{
        key: "get",
        value: function get(param) {
          return this.httpClient.get("".concat(this.baseApiPath, "/").concat(param));
        }
      }, {
        key: "get2",
        value: function get2(param) {
          return this.httpClient.get("".concat(this.baseApiPath, "/").concat(param));
        }
      }, {
        key: "externalGet",
        value: function externalGet(param) {
          return this.httpClient.get("".concat(param));
        }
      }, {
        key: "create",
        value: function create(data) {
          return this.httpClient.post("".concat(this.baseApiPath), data);
        }
      }, {
        key: "getEndpoints",
        value: function getEndpoints() {
          // let basePath = 'https://api.kenyabuzz.com/';
          return {
            home_slider: 'getHomeSlider',
            movies: {
              movie_categories: 'getMovieCats',
              coming_soon: 'mvsComingSoon',
              now_showing: 'mvsNowShowing',
              all_movies: 'mvsAll',
              bollywood: 'mvsBollywood',
              featured_movies: 'mvsFeatured',
              movie_details: 'mvDetails/',
              movie_details_by_slug: 'mvDetailsBySlg/',
              movie_shows_with_tickets: 'mvShowTimesWithTicketTypes'
            },
            cinemas: {
              get_cinemas: 'getCinemas',
              cinema_movies: 'getCinemasMvs/',
              movie_show_times: 'mvCinemaShowTimes/',
              get_vista_seats: 'getVistaSeats/'
            },
            events: {
              ticketed_events: 'evntsTicketed',
              all_events: 'evntsAll',
              featured_events: 'evntsFeatured',
              home_events: 'homeEvents',
              event_details: 'evntDetailsBi/',
              event_details_by_slug: 'evntDetailsBs/',
              event_seating_plan: 'evntDetailsAndSeatsBs/'
            },
            gallery: {
              main_gallery: 'getGallery/',
              view_album: 'getAlbum/'
            },
            kids: {
              get_kids: 'getKidsArticles',
              kids_article: 'kidsArticle/'
            },
            lifestyle: {
              all_articles: 'getLifestyleArticles',
              read_article: 'getArticle/',
              snippets: 'lifestyleSnippets',
              get_directory: 'getDirectoryLocation/'
            },
            search: 'srch/',
            local_storage: {
              movies: {
                all: 'locDat_KeNmgkbMvsAll',
                now_showing: 'locDat_KeNmgkbMvsNowShowing',
                coming_soon: 'locDat_KeNmgkbMvsSoon',
                featured: 'locDat_KeNmgkbMvsFtrd',
                movie_cats: 'locDat_KeNmgMvCts'
              },
              events: {
                featured: 'locDat_KeNmgkbEvntsFtrd',
                all: 'locDat_KeNmgkbEvntsAll',
                home: 'locDat_KeNmgkbEvntsHme',
                buy_ticket: 'locDat_KeNmgkbEvntsBuy'
              },
              lifestyle: 'locDat_KeNmgKbLA',
              kids: 'locDat_KeNmgKbLKA',
              gallery: 'locDat_KeNmgKbGlry',
              cinemas: 'locDat_KeNmgKbCins',
              schedule: 'locDat_KeNmgkbSched',
              carousel: 'locDat_KeNmgkbHmeCrsel',
              newsletter: 'locDat_KeNmgkbNwsltr'
            }
          };
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ApiService);
    /***/
  },

  /***/
  "./src/app/services/data.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/data.service.ts ***!
    \******************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppServicesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/services/api.service.ts");

    var DataService = /*#__PURE__*/function () {
      function DataService(apiService, datePipe) {
        _classCallCheck(this, DataService);

        this.apiService = apiService;
        this.datePipe = datePipe;
        this.dateNow = new Date();
        this.dateToday = null;
        this.dateToday = this.datePipe.transform(this.dateNow, 'yyyy-MM-dd');
      }

      _createClass(DataService, [{
        key: "rot13",
        value: function rot13(str) {
          var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
          var output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
          var encoded = '';

          for (var i = 0; i < str.length; i++) {
            var index = input.indexOf(str[i]);
            encoded += output[index];
          }

          return encoded;
        }
      }, {
        key: "ROTn",
        value: function ROTn(text, map) {
          // Generic ROT-n algorithm for keycodes in MAP.
          var R = new String();
          var i,
              j,
              c,
              len = map.length;

          for (i = 0; i < text.length; i++) {
            c = text.charAt(i);
            j = map.indexOf(c);

            if (j >= 0) {
              c = map.charAt((j + len / 2) % len);
            }

            R = R + c;
          }

          return R;
        }
      }, {
        key: "rot47",
        value: function rot47(text) {
          // Hides all ASCII-characters from 33 ("!") to 126 ("~").  Hence can be used
          // to obfuscate virtually any text, including URLs and emails.
          var R = new String();
          R = this.ROTn(text, "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~");
          return R;
        }
      }, {
        key: "readableDate",
        value: function readableDate(date) {
          if (date) {
            var datesTimeArr = date.split(' ');
            var datesArr = datesTimeArr[0].split('-');
            var year = datesArr[0];
            var month = parseInt(datesArr[1]);
            var day = parseInt(datesArr[2]);
            var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var theDay = day > 3 ? day + 'th' : day == 1 ? day + 'st' : day == 2 ? day + 'nd' : day + 'rd';
            var theDate = theDay + ' ' + months[month - 1];
            var fullDate = theDate + ', ' + year;

            if (datesTimeArr.length > 1) {
              var timeArr = datesTimeArr[1].split(':');
              var hour = parseInt(timeArr[0]);
              var postfix = hour > 12 ? 'PM' : 'AM';
              hour = hour > 12 ? hour - 12 : hour;
              var minutes = timeArr[1];
              fullDate = fullDate + ' at ' + hour + ':' + minutes + postfix;
            }

            return fullDate;
          } else {
            return date;
          }
        }
      }, {
        key: "readableTime",
        value: function readableTime(time) {
          if (time) {
            var timeArr = time.split(':');
            var hour = parseInt(timeArr[0]);
            var postfix = hour > 12 ? 'PM' : 'AM';
            hour = hour > 12 ? hour - 12 : hour;
            var minutes = timeArr[1];
            var fullTime = hour + ':' + minutes + postfix;
            return fullTime;
          } else {
            return time;
          }
        }
      }, {
        key: "checkStat",
        value: function checkStat() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var l_strg, feturedMvsStore, featuredMoviesData, comeSoonMvsStore, SoonMoviesData, showingMvsStore, showingMoviesData, allMvsStore, allMoviesData, ftrdEvntsStore, ftrdEvntsData, hmeEvntsStore, hmeEvntsData, allEvntsStore, allEvntsData, cinemasStore, cinemasData;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // check if today's data exists in all sections
                    l_strg = this.apiService.getEndpoints(); // check featured movies

                    feturedMvsStore = localStorage.getItem(l_strg.local_storage.movies.featured);

                    if (!feturedMvsStore) {
                      _context.next = 9;
                      break;
                    }

                    featuredMoviesData = JSON.parse(feturedMvsStore);

                    if (!(Object.keys(featuredMoviesData.featured_movies).length == 0 || featuredMoviesData.date != this.dateToday)) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 7;
                    return this.fetchFeaturedMovies();

                  case 7:
                    _context.next = 11;
                    break;

                  case 9:
                    _context.next = 11;
                    return this.fetchFeaturedMovies();

                  case 11:
                    // check coming soon movies
                    comeSoonMvsStore = localStorage.getItem(l_strg.local_storage.movies.coming_soon);

                    if (!comeSoonMvsStore) {
                      _context.next = 19;
                      break;
                    }

                    SoonMoviesData = JSON.parse(comeSoonMvsStore);

                    if (!(Object.keys(SoonMoviesData.coming_soon_movies).length == 0 || SoonMoviesData.date != this.dateToday)) {
                      _context.next = 17;
                      break;
                    }

                    _context.next = 17;
                    return this.fetchComingSoonMovies();

                  case 17:
                    _context.next = 21;
                    break;

                  case 19:
                    _context.next = 21;
                    return this.fetchComingSoonMovies();

                  case 21:
                    // check now showing movies
                    showingMvsStore = localStorage.getItem(l_strg.local_storage.movies.now_showing);

                    if (!showingMvsStore) {
                      _context.next = 29;
                      break;
                    }

                    showingMoviesData = JSON.parse(showingMvsStore);

                    if (!(Object.keys(showingMoviesData.now_showing_movies).length == 0 || showingMoviesData.date != this.dateToday)) {
                      _context.next = 27;
                      break;
                    }

                    _context.next = 27;
                    return this.fetchNowShowingMovies();

                  case 27:
                    _context.next = 31;
                    break;

                  case 29:
                    _context.next = 31;
                    return this.fetchNowShowingMovies();

                  case 31:
                    // check all movies
                    allMvsStore = localStorage.getItem(l_strg.local_storage.movies.all);

                    if (!allMvsStore) {
                      _context.next = 39;
                      break;
                    }

                    allMoviesData = JSON.parse(allMvsStore);

                    if (!(Object.keys(allMoviesData.all_movies).length == 0 || allMoviesData.date != this.dateToday)) {
                      _context.next = 37;
                      break;
                    }

                    _context.next = 37;
                    return this.fetchallMovies();

                  case 37:
                    _context.next = 41;
                    break;

                  case 39:
                    _context.next = 41;
                    return this.fetchallMovies();

                  case 41:
                    // check featured events
                    ftrdEvntsStore = localStorage.getItem(l_strg.local_storage.events.featured);

                    if (!ftrdEvntsStore) {
                      _context.next = 49;
                      break;
                    }

                    ftrdEvntsData = JSON.parse(ftrdEvntsStore);

                    if (!(Object.keys(ftrdEvntsData.featured_events).length == 0 || ftrdEvntsData.date != this.dateToday)) {
                      _context.next = 47;
                      break;
                    }

                    _context.next = 47;
                    return this.fetchFeaturedEvents();

                  case 47:
                    _context.next = 51;
                    break;

                  case 49:
                    _context.next = 51;
                    return this.fetchFeaturedEvents();

                  case 51:
                    // check home page events
                    hmeEvntsStore = localStorage.getItem(l_strg.local_storage.events.home);

                    if (!hmeEvntsStore) {
                      _context.next = 59;
                      break;
                    }

                    hmeEvntsData = JSON.parse(hmeEvntsStore);

                    if (!(Object.keys(hmeEvntsData.home_events).length == 0 || hmeEvntsData.date != this.dateToday)) {
                      _context.next = 57;
                      break;
                    }

                    _context.next = 57;
                    return this.fetchHomeEvents();

                  case 57:
                    _context.next = 61;
                    break;

                  case 59:
                    _context.next = 61;
                    return this.fetchHomeEvents();

                  case 61:
                    // check all events
                    allEvntsStore = localStorage.getItem(l_strg.local_storage.events.all);

                    if (!allEvntsStore) {
                      _context.next = 69;
                      break;
                    }

                    allEvntsData = JSON.parse(allEvntsStore);

                    if (!(Object.keys(allEvntsData.all_events).length == 0 || allEvntsData.date != this.dateToday)) {
                      _context.next = 67;
                      break;
                    }

                    _context.next = 67;
                    return this.fetchAllEvents();

                  case 67:
                    _context.next = 71;
                    break;

                  case 69:
                    _context.next = 71;
                    return this.fetchAllEvents();

                  case 71:
                    // check cinemas
                    cinemasStore = localStorage.getItem(l_strg.local_storage.cinemas);

                    if (!cinemasStore) {
                      _context.next = 79;
                      break;
                    }

                    cinemasData = JSON.parse(cinemasStore);

                    if (!(Object.keys(cinemasData.cinemas).length == 0 || cinemasData.date != this.dateToday)) {
                      _context.next = 77;
                      break;
                    }

                    _context.next = 77;
                    return this.fetchCinemas();

                  case 77:
                    _context.next = 81;
                    break;

                  case 79:
                    _context.next = 81;
                    return this.fetchCinemas();

                  case 81:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "returnMovieCategories",
        value: function returnMovieCategories() {
          // return movie categories
          var endpoint = this.apiService.getEndpoints().movies.movie_categories;
          return this.apiService.get(endpoint);
        }
      }, {
        key: "fetchallMovies",
        value: function fetchallMovies() {
          var _this2 = this;

          // fetch all movies, limit to 30 (old data doesn't help much)
          var endpoints = this.apiService.getEndpoints();
          this.apiService.get(endpoints.movies.all_movies).subscribe(function (response) {
            if ('data' in response) {
              // console.log('dataSvc - ALL MOVIES RESP >', response.data);
              var allMvs = Array.isArray(response.data) ? response.data : []; // default to an empty arr if anything else is returned

              var l_strg = _this2.apiService.getEndpoints();

              var allMovies = {
                date: _this2.dateToday,
                all_movies: allMvs
              };
              localStorage.setItem(l_strg.local_storage.movies.all, JSON.stringify(allMovies));
            }
          }, function (error) {
            console.log('All Movies Err >', error);
          });
        }
      }, {
        key: "fetchComingSoonMovies",
        value: function fetchComingSoonMovies() {
          var _this3 = this;

          // fetch the coming soon movies
          var endpoints = this.apiService.getEndpoints();
          this.apiService.get(endpoints.movies.coming_soon).subscribe(function (response) {
            if ('data' in response) {
              // console.log('dataSvc - COMING SOON RESP >', response.data);
              var cSoon = Array.isArray(response.data) ? response.data : []; // default to an empty arr if anything else is returned

              var l_strg = _this3.apiService.getEndpoints();

              var comingSoonMovies = {
                date: _this3.dateToday,
                coming_soon_movies: cSoon
              };
              localStorage.setItem(l_strg.local_storage.movies.coming_soon, JSON.stringify(comingSoonMovies));
            }
          }, function (error) {
            console.log('Coming Soon Err >', error);
          });
        }
      }, {
        key: "returnComingSoonMovies",
        value: function returnComingSoonMovies() {
          // return coming soon movies
          var endpoint = this.apiService.getEndpoints();
          return this.apiService.get(endpoint.movies.coming_soon);
        }
      }, {
        key: "fetchNowShowingMovies",
        value: function fetchNowShowingMovies() {
          var _this4 = this;

          // fetch the now showing movies
          var endpoints = this.apiService.getEndpoints();
          this.apiService.get(endpoints.movies.now_showing).subscribe(function (response) {
            if ('data' in response) {
              // console.log('dataSvc - NOW SHOWING RESP >', response.data);
              var nShowing = Array.isArray(response.data) ? response.data : []; // default to an empty arr if anything else is returned

              var l_strg = _this4.apiService.getEndpoints();

              var nowShowingMovies = {
                date: _this4.dateToday,
                now_showing_movies: nShowing
              };
              localStorage.setItem(l_strg.local_storage.movies.now_showing, JSON.stringify(nowShowingMovies));
            }
          }, function (error) {
            console.log('Now Showing Err >', error);
          });
        }
      }, {
        key: "returnNowShowingMovies",
        value: function returnNowShowingMovies() {
          // return now showing movies
          var endpoint = this.apiService.getEndpoints();
          return this.apiService.get(endpoint.movies.now_showing);
        }
      }, {
        key: "fetchFeaturedMovies",
        value: function fetchFeaturedMovies() {
          var _this5 = this;

          // fetch the featured movies
          var featuredMovies = {};
          var endpoints = this.apiService.getEndpoints();
          var featuredMoviesResp = this.apiService.get(endpoints.movies.featured_movies).subscribe(function (response) {
            if ('data' in response) {
              // console.log('dataSvc - FEATURED RESP >', response.data);
              var featured = Array.isArray(response.data) ? response.data : []; // default to an empty arr if anything else is returned

              var l_strg = _this5.apiService.getEndpoints();

              featuredMovies.date = _this5.dateToday;
              featuredMovies.featured_movies = featured;
              localStorage.setItem(l_strg.local_storage.movies.featured, JSON.stringify(featuredMovies));
              return featuredMovies;
            }
          }, function (error) {
            console.log('Featured Movies Err >', error);
            return featuredMovies;
          });
          return Promise.resolve(featuredMoviesResp);
        }
      }, {
        key: "returnTicketedEvents",
        value: function returnTicketedEvents() {
          // return movie categories
          var endpoint = this.apiService.getEndpoints().events.ticketed_events;
          return this.apiService.get(endpoint);
        }
      }, {
        key: "fetchHomeEvents",
        value: function fetchHomeEvents() {
          var _this6 = this;

          // fetch events for the home slider
          var endpoints = this.apiService.getEndpoints();
          this.apiService.get(endpoints.events.home_events).subscribe(function (response) {
            if ('data' in response) {
              // console.log('dataSvc - HOME EVENTS RESP >', response.data);
              var hmEvents = Array.isArray(response.data) ? response.data : []; // default to an empty arr if anything else is returned

              var l_strg = _this6.apiService.getEndpoints();

              var homeEvents = {
                date: _this6.dateToday,
                home_events: hmEvents
              };
              localStorage.setItem(l_strg.local_storage.events.home, JSON.stringify(homeEvents));
            }
          }, function (error) {
            console.log('Home Events Err >', error);
          });
        }
      }, {
        key: "fetchFeaturedEvents",
        value: function fetchFeaturedEvents() {
          var _this7 = this;

          // fetch the featured events
          var endpoints = this.apiService.getEndpoints();
          this.apiService.get(endpoints.events.featured_events).subscribe(function (response) {
            if (response) {
              if ('data' in response) {
                // console.log('dataSvc - FEATURED EVENTS RESP >', response.data);
                var featured = Array.isArray(response.data) ? response.data : []; // default to an empty arr if anything else is returned

                var l_strg = _this7.apiService.getEndpoints();

                var featuredeEvents = {
                  date: _this7.dateToday,
                  featured_events: featured
                };
                localStorage.setItem(l_strg.local_storage.events.featured, JSON.stringify(featuredeEvents));
              }
            }
          }, function (error) {
            console.log('Featured Events Err >', error);
          });
        }
      }, {
        key: "returnFeaturedEvents",
        value: function returnFeaturedEvents() {
          // return featured events
          var endpoint = this.apiService.getEndpoints();
          return this.apiService.get(endpoint.events.featured_events);
        }
      }, {
        key: "fetchAllEvents",
        value: function fetchAllEvents() {
          var _this8 = this;

          // fetch the featured events
          var endpoints = this.apiService.getEndpoints();
          this.apiService.get(endpoints.events.all_events).subscribe(function (response) {
            if ('data' in response) {
              // console.log('dataSvc - ALL EVENTS RESP >', response.data);
              var allEvents = Array.isArray(response.data) ? response.data : []; // default to an empty arr if anything else is returned

              var l_strg = _this8.apiService.getEndpoints();

              var events = {
                date: _this8.dateToday,
                all_events: allEvents
              };
              localStorage.setItem(l_strg.local_storage.events.all, JSON.stringify(events));
            }
          }, function (error) {
            console.log('All Events Err >', error);
          });
        }
      }, {
        key: "returnAllEvents",
        value: function returnAllEvents() {
          // return featured events
          var endpoint = this.apiService.getEndpoints();
          return this.apiService.get(endpoint.events.all_events);
        }
      }, {
        key: "fetchCinemas",
        value: function fetchCinemas() {
          var _this9 = this;

          // fetch the cinemas
          var cinemas = {};
          var endpoints = this.apiService.getEndpoints();
          var cinemasResp = this.apiService.get(endpoints.cinemas.get_cinemas).subscribe(function (response) {
            if ('data' in response) {
              // console.log('dataSvc - CINEMAS RESP >', response.data);
              var theaters = Array.isArray(response.data) ? response.data : []; // default to an empty arr if anything else is returned

              var l_strg = _this9.apiService.getEndpoints();

              cinemas.date = _this9.dateToday;
              cinemas.cinemas = theaters;
              localStorage.setItem(l_strg.local_storage.cinemas, JSON.stringify(cinemas));
              return cinemas;
            }
          }, function (error) {
            console.log('Featured Movies Err >', error);
            return cinemas;
          });
          return Promise.resolve(cinemasResp);
        }
      }, {
        key: "returnCinemas",
        value: function returnCinemas() {
          // return cinemas
          var endpoint = this.apiService.getEndpoints().cinemas.get_cinemas;
          return this.apiService.get(endpoint);
        }
      }, {
        key: "getArticle",
        value: function getArticle(slug) {
          // return gallery album
          return this.apiService.get(this.apiService.getEndpoints().lifestyle.read_article + slug);
        }
      }, {
        key: "searchKB",
        value: function searchKB(phrase) {
          /*
          clearTimeout(this.searchTimeout);
          this.searchTimeout = setTimeout(() => {
            let endpoints: any = this.apiService.getEndpoints();
            this.apiService.get(endpoints.search + phrase).subscribe(
              response => {
                if ('data' in response) {
                  // console.log(response);
                  // show a dialog with the results
                  const dialogConfig = new MatDialogConfig();
                  this.dialog.open(SearchComponent, dialogConfig);
                        var x = Array.from(document.getElementsByClassName("cdk-overlay-container") as HTMLCollectionOf<HTMLElement>);
                  x[0].style.marginTop = "3%";
                        this.searchSource.next(response);
                }
              },
              error => { console.log('Coming Soon Err >', error); }
            );
            
          }, 900);
          */
        }
      }, {
        key: "movieTicketJourneyModal",
        value: function movieTicketJourneyModal(cinema, show, day, movie) {
          /*
          // show a dialog with the results
          let dialogConfig = new MatDialogConfig();
          dialogConfig.disableClose = true;
                let payload: any = {cinema:cinema,show:show,day:day,movie:movie};
          dialogConfig.data = payload;
          
          this.dialog.open(BuyComponent, dialogConfig);
                var x = Array.from(document.getElementsByClassName("cdk-overlay-container") as HTMLCollectionOf<HTMLElement>);
          x[0].style.marginTop = "3%";
          
          this.searchSource.next(payload);
          */
        }
      }]);

      return DataService;
    }();

    DataService.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
      }];
    };

    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]])], DataService);
    /***/
  },

  /***/
  "./src/app/services/dummy.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/dummy.service.ts ***!
    \*******************************************/

  /*! exports provided: DummyService */

  /***/
  function srcAppServicesDummyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DummyService", function () {
      return DummyService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DummyService = function DummyService() {
      _classCallCheck(this, DummyService);

      this.images = [{
        name: 'The Hill',
        img: 'assets/imgs/movies/1.jpg'
      }, {
        name: 'PK',
        img: 'assets/imgs/movies/2.jpg'
      }, {
        name: 'Aladdin',
        img: 'assets/imgs/movies/3.jpg'
      }, {
        name: 'Mohanjo Daro',
        img: 'assets/imgs/movies/4.jpg'
      }, {
        name: 'Bahubali 2',
        img: 'assets/imgs/movies/5.jpg'
      }, {
        name: 'Avengers Endgame',
        img: 'assets/imgs/movies/6.jpg'
      }, {
        name: 'Jazbaa',
        img: 'assets/imgs/movies/7.jpg'
      }, {
        name: 'Ultra',
        img: 'assets/imgs/movies/8.jpg'
      }, {
        name: 'Beauty and the Beast',
        img: 'assets/imgs/movies/9.jpg'
      }, {
        name: 'Freedom',
        img: 'assets/imgs/movies/10.jpg'
      }, {
        name: 'Black Panthor',
        img: 'assets/imgs/movies/11.jpg'
      }, {
        name: '1917 Time is the enemy',
        img: 'assets/imgs/movies/12.jpg'
      }, {
        name: 'Joker',
        img: 'assets/imgs/movies/13.jpg'
      }, {
        name: 'Satyamev Jayate',
        img: 'assets/imgs/movies/14.jpg'
      }, {
        name: 'Raees',
        img: 'assets/imgs/movies/15.jpg'
      }, {
        name: 'Project Power',
        img: 'assets/imgs/movies/16.jpg'
      }, {
        name: 'A star is born',
        img: 'assets/imgs/movies/17.jpg'
      }, {
        name: 'Kaabil',
        img: 'assets/imgs/movies/18.jpg'
      }, {
        name: 'After what happens when people die',
        img: 'assets/imgs/movies/19.jpg'
      }, {
        name: 'The Nightingale',
        img: 'assets/imgs/movies/20.jpeg'
      }, {
        name: 'Mismatched',
        img: 'assets/imgs/movies/21.jpg'
      }, {
        name: 'Ludo',
        img: 'assets/imgs/movies/22.jpg'
      }, {
        name: 'Article 15',
        img: 'assets/imgs/movies/23.jpg'
      }, {
        name: 'Bang Bang',
        img: 'assets/imgs/24.jpg'
      }];
      this.landscape = [{
        img: 'assets/imgs/landscape_imgs/1.jpg',
        name: 'Ender\'s Game'
      }, {
        img: 'assets/imgs/landscape_imgs/2.jpg',
        name: 'X-MEN Apocalypse'
      }, {
        img: 'assets/imgs/landscape_imgs/3.jpg',
        name: 'The Lord of the Rings'
      }, {
        img: 'assets/imgs/landscape_imgs/4.jpg',
        name: 'Let me in'
      }, {
        img: 'assets/imgs/landscape_imgs/5.png',
        name: 'Galactic Graveyard'
      }, {
        img: 'assets/imgs/landscape_imgs/6.jpg',
        name: 'The Reverend'
      }, {
        img: 'assets/imgs/landscape_imgs/7.jpg',
        name: 'Aladdin'
      }, {
        img: 'assets/imgs/landscape_imgs/8.jpg',
        name: 'Highway'
      }, {
        img: 'assets/imgs/landscape_imgs/9.jpg',
        name: 'Captain America'
      }, {
        img: 'assets/imgs/landscape_imgs/10.jpg',
        name: 'A start is born'
      }, {
        img: 'assets/imgs/landscape_imgs/11.jpg',
        name: 'Thor'
      }, {
        img: 'assets/imgs/landscape_imgs/12.jpg',
        name: 'Rise'
      }, {
        img: 'assets/imgs/landscape_imgs/13.jpg',
        name: 'Land of Mine'
      }, {
        img: 'assets/imgs/landscape_imgs/14.jpg',
        name: 'Inception'
      }, {
        img: 'assets/imgs/landscape_imgs/15.jpg',
        name: 'Interstellar'
      }, {
        img: 'assets/imgs/landscape_imgs/16.jpg',
        name: 'Tom Cruise Oblivion'
      }, {
        img: 'assets/imgs/landscape_imgs/17.jpg',
        name: 'Spider Man'
      }];
      this.sports = [{
        name: 'Image 1',
        s_name: 'Cricket',
        img: 'assets/imgs/sports/sports1.jpg'
      }, {
        name: 'Image 2',
        s_name: 'Badminton',
        img: 'assets/imgs/sports/sports2.jpg'
      }, {
        name: 'Image 3',
        s_name: 'Hockey',
        img: 'assets/imgs/sports/sports3.jpg'
      }, {
        s_name: 'Wrestling',
        name: 'Image 4',
        img: 'assets/imgs/sports/sports4.jpg'
      }, {
        s_name: 'cricket',
        name: 'Image 5',
        img: 'assets/imgs/sports/sports5.jpg'
      }, {
        s_name: 'Kabaddi',
        name: 'Image 6',
        img: 'assets/imgs/sports/sports6.jpg'
      }, {
        s_name: 'Water Sport',
        name: 'Image 7',
        img: 'assets/imgs/sports/sports7.jpg'
      }, {
        s_name: 'Atheletics',
        name: 'Image 8',
        img: 'assets/imgs/sports/sports8.jpg'
      }];
      this.genrens = [{
        name: 'Family',
        img: 'assets/imgs/genrens/g1.jpg'
      }, {
        name: 'Documentry',
        img: 'assets/imgs/genrens/g2.jpg'
      }, {
        name: 'Travel',
        img: 'assets/imgs/genrens/g3.jpg'
      }, {
        name: 'Horror',
        img: 'assets/imgs/genrens/g4.jpg'
      }, {
        name: 'science',
        img: 'assets/imgs/genrens/g5.jpg'
      }, {
        name: 'Kids',
        img: 'assets/imgs/genrens/g6.jpg'
      }, {
        name: 'WildLife',
        img: 'assets/imgs/genrens/g7.jpg'
      }, {
        name: 'Sports',
        img: 'assets/imgs/genrens/g8.jpg'
      }];
      this.animal = [{
        name: 'Image 1',
        img: 'assets/imgs/animal/animal1.jpg'
      }, {
        name: 'Image 2',
        img: 'assets/imgs/animal/animal2.jpg'
      }, {
        name: 'Image 3',
        img: 'assets/imgs/animal/animal3.jpg'
      }, {
        name: 'Image 4',
        img: 'assets/imgs/animal/animal4.jpg'
      }, {
        name: 'Image 5',
        img: 'assets/imgs/animal/animal5.jpg'
      }, {
        name: 'Image 6',
        img: 'assets/imgs/animal/animal6.jpg'
      }, {
        name: 'Image 7',
        img: 'assets/imgs/animal/animal7.jpg'
      }, {
        name: 'Image 8',
        img: 'assets/imgs/animal/animal8.jpg'
      }, {
        name: 'Image 9',
        img: 'assets/imgs/animal/animal2.jpg'
      }];
      this.news = [{
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        img: 'assets/imgs/news/news1.jpg',
        icn: 'assets/imgs/news/news_icn1.png'
      }, {
        name: 'It is a long established fact that a reader will be distracted by the readable',
        img: 'assets/imgs/news/news2.jpg',
        icn: 'assets/imgs/news/news_icn2.png'
      }, {
        name: 'There are many variations of passages of Lorem Ipsum available',
        img: 'assets/imgs/news/news3.jpg',
        icn: 'assets/imgs/news/news_icn3.png'
      }, {
        name: 'Contrary to popular belief, Lorem Ipsum is not simply random text',
        img: 'assets/imgs/news/news4.jpg',
        icn: 'assets/imgs/news/news_icn4.png'
      }, {
        name: 'The standard chunk of Lorem Ipsum used since the 1500s',
        img: 'assets/imgs/news/news5.jpg',
        icn: 'assets/imgs/news/news_icn2.png'
      }, {
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        img: 'assets/imgs/news/news6.jpg',
        icn: 'assets/imgs/news/news_icn1.png'
      }];
      this.reporter = [{
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        img: 'assets/imgs/news/reporter1.jpg',
        icn: 'assets/imgs/news/news_icn1.png'
      }, {
        name: 'It is a long established fact that a reader will be distracted by the readable',
        img: 'assets/imgs/news/reporter2.jpg',
        icn: 'assets/imgs/news/news_icn2.png'
      }, {
        name: 'There are many variations of passages of Lorem Ipsum available',
        img: 'assets/imgs/news/reporter3.jpg',
        icn: 'assets/imgs/news/news_icn3.png'
      }, {
        name: 'Contrary to popular belief, Lorem Ipsum is not simply random text',
        img: 'assets/imgs/news/reporter4.jpg',
        icn: 'assets/imgs/news/news_icn4.png'
      }, {
        name: 'The standard chunk of Lorem Ipsum used since the 1500s',
        img: 'assets/imgs/news/reporter5.jpg',
        icn: 'assets/imgs/news/news_icn2.png'
      }, {
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        img: 'assets/imgs/news/reporter6.jpg',
        icn: 'assets/imgs/news/news_icn1.png'
      }, {
        name: 'The standard chunk of Lorem Ipsum used since the 1500s',
        img: 'assets/imgs/news/reporter7.jpg',
        icn: 'assets/imgs/news/news_icn2.png'
      }];
      this.channels = ['assets/imgs/channels/c1.jpg', 'assets/imgs/channels/c2.jpg', 'assets/imgs/channels/c3.jpg', 'assets/imgs/channels/c4.jpg', 'assets/imgs/channels/c5.jpg', 'assets/imgs/channels/c6.jpg', 'assets/imgs/channels/c7.jpg', 'assets/imgs/channels/c8.jpg', 'assets/imgs/channels/c1.jpg', 'assets/imgs/channels/c2.jpg', 'assets/imgs/channels/c3.jpg', 'assets/imgs/channels/c4.jpg', 'assets/imgs/channels/c5.jpg', 'assets/imgs/channels/c6.jpg', 'assets/imgs/channels/c7.jpg', 'assets/imgs/channels/c8.jpg'];
      this.languages = [{
        name: 'Hindi',
        img: 'assets/imgs/img1.jpg'
      }, {
        name: 'Bengali',
        img: 'assets/imgs/img2.jpg'
      }, {
        name: 'Telugu',
        img: 'assets/imgs/img3.jpg'
      }, {
        name: 'Malayalam',
        img: 'assets/imgs/img4.jpg'
      }, {
        name: 'Tamil',
        img: 'assets/imgs/img5.jpg'
      }, {
        name: 'Marathi',
        img: 'assets/imgs/img6.jpg'
      }, {
        name: 'English',
        img: 'assets/imgs/img7.jpg'
      }, {
        name: 'Kannada',
        img: 'assets/imgs/img8.jpg'
      }];
    };

    DummyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], DummyService);
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