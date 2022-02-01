function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-channels-channels-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/channels/channels.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/channels/channels.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesChannelsChannelsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"md\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Channels</ion-title>\n        <ion-button class=\"search_btn\" slot=\"end\" fill=\"clear\" size=\"small\">\n            <ion-icon name=\"search\" color=\"light\"></ion-icon>\n        </ion-button>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_content_div\">\n        <ion-row>\n            <ion-col size=\"6\" *ngFor=\"let item of images\">\n                <div class=\"back_image bg_image\" [style.backgroundImage]=\"'url('+ item +')'\"></div>    \n            </ion-col>\n        </ion-row>\n    </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/channels/channels-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/channels/channels-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ChannelsPageRoutingModule */

  /***/
  function srcAppPagesChannelsChannelsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChannelsPageRoutingModule", function () {
      return ChannelsPageRoutingModule;
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


    var _channels_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./channels.page */
    "./src/app/pages/channels/channels.page.ts");

    var routes = [{
      path: '',
      component: _channels_page__WEBPACK_IMPORTED_MODULE_3__["ChannelsPage"]
    }];

    var ChannelsPageRoutingModule = function ChannelsPageRoutingModule() {
      _classCallCheck(this, ChannelsPageRoutingModule);
    };

    ChannelsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChannelsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/channels/channels.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/channels/channels.module.ts ***!
    \***************************************************/

  /*! exports provided: ChannelsPageModule */

  /***/
  function srcAppPagesChannelsChannelsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChannelsPageModule", function () {
      return ChannelsPageModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _channels_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./channels-routing.module */
    "./src/app/pages/channels/channels-routing.module.ts");
    /* harmony import */


    var _channels_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./channels.page */
    "./src/app/pages/channels/channels.page.ts");

    var ChannelsPageModule = function ChannelsPageModule() {
      _classCallCheck(this, ChannelsPageModule);
    };

    ChannelsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _channels_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChannelsPageRoutingModule"]],
      declarations: [_channels_page__WEBPACK_IMPORTED_MODULE_6__["ChannelsPage"]]
    })], ChannelsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/channels/channels.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/channels/channels.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesChannelsChannelsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main_content_div {\n  padding: 10px;\n}\n.main_content_div .back_image {\n  width: 100%;\n  height: 110px;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EaWdpdGFsL0RvY3VtZW50cy9UZXN0Z3JvdW5kL0tCIE1vYmlsZSBBUFAvS0JfQXBwX1Jlcy9LZW55YUJ1enotTW9iaWxlQXBwL3NyYy9hcHAvcGFnZXMvY2hhbm5lbHMvY2hhbm5lbHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaGFubmVscy9jaGFubmVscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7QURDSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYW5uZWxzL2NoYW5uZWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgLmJhY2tfaW1hZ2Uge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIH1cbn0iLCIubWFpbl9jb250ZW50X2RpdiB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmFja19pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDExMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/channels/channels.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/channels/channels.page.ts ***!
    \*************************************************/

  /*! exports provided: ChannelsPage */

  /***/
  function srcAppPagesChannelsChannelsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChannelsPage", function () {
      return ChannelsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/dummy.service */
    "./src/app/services/dummy.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ChannelsPage = /*#__PURE__*/function () {
      function ChannelsPage(dummy) {
        _classCallCheck(this, ChannelsPage);

        this.dummy = dummy;
        this.images = this.dummy.channels;
      }

      _createClass(ChannelsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChannelsPage;
    }();

    ChannelsPage.ctorParameters = function () {
      return [{
        type: src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_1__["DummyService"]
      }];
    };

    ChannelsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-channels',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./channels.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/channels/channels.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./channels.page.scss */
      "./src/app/pages/channels/channels.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_1__["DummyService"]])], ChannelsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-channels-channels-module-es5.js.map