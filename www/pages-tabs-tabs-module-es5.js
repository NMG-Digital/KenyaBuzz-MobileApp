function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-tabs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTabsTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs (ionTabsDidChange)=\"tabChange($event)\">\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"home\">\n      <!-- <ion-icon name=\"triangle\"></ion-icon> -->\n      <img src=\"assets/tabs/home.png\" *ngIf=\"val != 'home' \">\n      <img src=\"assets/tabs/home_active.png\" *ngIf=\"val == 'home' \">\n      <ion-label class=\"lbl\" [class.active]=\"val == 'home' \">Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tv\">\n      <!-- <ion-icon name=\"ellipse\"></ion-icon> -->\n      <img src=\"assets/tabs/tv.png\" *ngIf=\"val != 'tv' \">\n      <img src=\"assets/tabs/tv_active.png\" *ngIf=\"val == 'tv' \">\n      <ion-label class=\"lbl\" [class.active]=\"val == 'tv' \">TV</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"KB\">\n      <!-- <ion-icon name=\"square\"></ion-icon> -->\n      <img src=\"assets/tabs/kb-grey.png\" *ngIf=\"val != 'KB' \" style=\"width: 60px;\">\n      <img src=\"assets/tabs/kb-red.png\" *ngIf=\"val == 'KB' \" style=\"width: 60px;\">\n      <!-- <ion-label class=\"lbl\" [class.active]=\"val == 'movies' \">Movies</ion-label> -->\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"sports\">\n      <!-- <ion-icon name=\"square\"></ion-icon> -->\n      <img src=\"assets/tabs/bat.png\" *ngIf=\"val != 'sports' \">\n      <img src=\"assets/tabs/bat_active.png\" *ngIf=\"val == 'sports' \">\n      <ion-label class=\"lbl\" [class.active]=\"val == 'sports' \">sports</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"news\">\n      <!-- <ion-icon name=\"square\"></ion-icon> -->\n      <img src=\"assets/tabs/news.png\" *ngIf=\"val != 'news' \">\n      <img src=\"assets/tabs/news_active.png\" *ngIf=\"val == 'news' \">\n      <ion-label class=\"lbl\" [class.active]=\"val == 'news' \">News</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n";
    /***/
  },

  /***/
  "./src/app/pages/tabs/tabs-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/tabs/tabs-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: TabsPageRoutingModule */

  /***/
  function srcAppPagesTabsTabsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
      return TabsPageRoutingModule;
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


    var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/pages/tabs/tabs.page.ts");

    var routes = [{
      path: 'tabs',
      component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
      children: [{
        path: 'home',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | home-home-module */
            "home-home-module").then(__webpack_require__.bind(null,
            /*! ../home/home.module */
            "./src/app/pages/home/home.module.ts")).then(function (m) {
              return m.HomePageModule;
            });
          }
        }]
      }, {
        path: 'tv',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | tv-tv-module */
            "tv-tv-module").then(__webpack_require__.bind(null,
            /*! ../tv/tv.module */
            "./src/app/pages/tv/tv.module.ts")).then(function (m) {
              return m.TvPageModule;
            });
          }
        }]
      }, {
        path: 'KB',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | disney-disney-module */
            "disney-disney-module").then(__webpack_require__.bind(null,
            /*! ../disney/disney.module */
            "./src/app/pages/disney/disney.module.ts")).then(function (m) {
              return m.DisneyPageModule;
            });
          }
        }]
      }, {
        path: 'sports',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | sports-sports-module */
            "sports-sports-module").then(__webpack_require__.bind(null,
            /*! ../sports/sports.module */
            "./src/app/pages/sports/sports.module.ts")).then(function (m) {
              return m.SportsPageModule;
            });
          }
        }]
      }, {
        path: 'news',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | news-news-module */
            "news-news-module").then(__webpack_require__.bind(null,
            /*! ../news/news.module */
            "./src/app/pages/news/news.module.ts")).then(function (m) {
              return m.NewsPageModule;
            });
          }
        }]
      }, {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }]
    }, {
      path: '',
      redirectTo: '/tabs/home',
      pathMatch: 'full'
    }];

    var TabsPageRoutingModule = function TabsPageRoutingModule() {
      _classCallCheck(this, TabsPageRoutingModule);
    };

    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TabsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/tabs/tabs.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/tabs/tabs.module.ts ***!
    \*******************************************/

  /*! exports provided: TabsPageModule */

  /***/
  function srcAppPagesTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
      return TabsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tabs-routing.module */
    "./src/app/pages/tabs/tabs-routing.module.ts");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/pages/tabs/tabs.page.ts");

    var TabsPageModule = function TabsPageModule() {
      _classCallCheck(this, TabsPageModule);
    };

    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
      declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })], TabsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/tabs/tabs.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/tabs/tabs.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTabsTabsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img {\n  width: 20px;\n}\n\n.lbl {\n  color: #707070;\n  font-size: 12px;\n}\n\n.active {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EaWdpdGFsL0RvY3VtZW50cy9UZXN0Z3JvdW5kL0tCIE1vYmlsZSBBUFAvS0JfQXBwX1Jlcy9LZW55YUJ1enotTW9iaWxlQXBwL3NyYy9hcHAvcGFnZXMvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWJzL3RhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG59XG4ubGJsIHtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5hY3RpdmUge1xuICBjb2xvcjogd2hpdGU7XG59XG4iLCJpbWcge1xuICB3aWR0aDogMjBweDtcbn1cblxuLmxibCB7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5hY3RpdmUge1xuICBjb2xvcjogd2hpdGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/tabs/tabs.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/tabs/tabs.page.ts ***!
    \*****************************************/

  /*! exports provided: TabsPage */

  /***/
  function srcAppPagesTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
      return TabsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TabsPage = /*#__PURE__*/function () {
      function TabsPage() {
        _classCallCheck(this, TabsPage);
      }

      _createClass(TabsPage, [{
        key: "tabChange",
        value: function tabChange(eve) {
          console.log(eve.tab);
          this.val = eve.tab;
        }
      }]);

      return TabsPage;
    }();

    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tabs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tabs.page.scss */
      "./src/app/pages/tabs/tabs.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TabsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-tabs-tabs-module-es5.js.map
