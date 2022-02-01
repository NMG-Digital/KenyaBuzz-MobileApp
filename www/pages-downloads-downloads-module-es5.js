function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-downloads-downloads-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/downloads/downloads.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/downloads/downloads.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDownloadsDownloadsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"md\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Downloads</ion-title>\n        <ion-button class=\"search_btn\" slot=\"end\" fill=\"clear\" size=\"small\">\n            <ion-icon name=\"pencil-sharp\" color=\"light\"></ion-icon>\n        </ion-button>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_content_div\">\n        <div class=\"flex_div\" *ngFor=\"let item of images\">\n            <div class=\"back_image bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\">\n                <ion-label class=\"live2\">9 min</ion-label>\n                <div class=\"play_div\">\n                  <ion-icon name=\"caret-forward-outline\" class=\"play\"></ion-icon>\n                  <ion-label class=\"name\">{{item.name}}</ion-label>\n                </div>\n            </div>\n            <ion-label class=\"name_lbl\">{{item.name}}</ion-label>\n            <ion-icon class=\"menu\" name=\"ellipsis-vertical\"></ion-icon>\n        </div>\n    </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/downloads/downloads-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/downloads/downloads-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: DownloadsPageRoutingModule */

  /***/
  function srcAppPagesDownloadsDownloadsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DownloadsPageRoutingModule", function () {
      return DownloadsPageRoutingModule;
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


    var _downloads_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./downloads.page */
    "./src/app/pages/downloads/downloads.page.ts");

    var routes = [{
      path: '',
      component: _downloads_page__WEBPACK_IMPORTED_MODULE_3__["DownloadsPage"]
    }];

    var DownloadsPageRoutingModule = function DownloadsPageRoutingModule() {
      _classCallCheck(this, DownloadsPageRoutingModule);
    };

    DownloadsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DownloadsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/downloads/downloads.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/downloads/downloads.module.ts ***!
    \*****************************************************/

  /*! exports provided: DownloadsPageModule */

  /***/
  function srcAppPagesDownloadsDownloadsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DownloadsPageModule", function () {
      return DownloadsPageModule;
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


    var _downloads_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./downloads-routing.module */
    "./src/app/pages/downloads/downloads-routing.module.ts");
    /* harmony import */


    var _downloads_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./downloads.page */
    "./src/app/pages/downloads/downloads.page.ts");

    var DownloadsPageModule = function DownloadsPageModule() {
      _classCallCheck(this, DownloadsPageModule);
    };

    DownloadsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _downloads_routing_module__WEBPACK_IMPORTED_MODULE_5__["DownloadsPageRoutingModule"]],
      declarations: [_downloads_page__WEBPACK_IMPORTED_MODULE_6__["DownloadsPage"]]
    })], DownloadsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/downloads/downloads.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/downloads/downloads.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDownloadsDownloadsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main_content_div {\n  padding: 16px;\n}\n.main_content_div .flex_div {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  margin-bottom: 16px;\n  position: relative;\n}\n.main_content_div .flex_div .back_image {\n  width: 120px;\n  height: 80px;\n  position: relative;\n  border-radius: 3px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 5px;\n}\n.main_content_div .flex_div .back_image .live2 {\n  font-size: 12px;\n  font-family: \"medium\";\n  text-align: right;\n}\n.main_content_div .flex_div .back_image .play_div {\n  display: flex;\n  align-items: center;\n  margin-left: -5px;\n}\n.main_content_div .flex_div .back_image .play_div .play {\n  font-size: 20px;\n  margin-right: 1px;\n}\n.main_content_div .flex_div .back_image .play_div .name {\n  font-size: 14px;\n  margin-top: 0px;\n  line-height: 15px;\n}\n.main_content_div .flex_div .name_lbl {\n  margin-left: 16px;\n  font-size: 15px;\n}\n.main_content_div .flex_div .menu {\n  color: white;\n  position: absolute;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EaWdpdGFsL0RvY3VtZW50cy9UZXN0Z3JvdW5kL0tCIE1vYmlsZSBBUFAvS0JfbW9iaWxlL3NyYy9hcHAvcGFnZXMvZG93bmxvYWRzL2Rvd25sb2Fkcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Rvd25sb2Fkcy9kb3dubG9hZHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKO0FEQUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0VSO0FEQVE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUNFWjtBREFZO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNFaEI7QURBWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDRWhCO0FERGdCO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDR3BCO0FERGdCO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0dwQjtBRENRO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDQ1o7QURFUTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNBWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rvd25sb2Fkcy9kb3dubG9hZHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudF9kaXYge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgLmZsZXhfZGl2e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIC5iYWNrX2ltYWdlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuXG4gICAgICAgICAgICAubGl2ZTJ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wbGF5X2RpdntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgICAgICAgICAgICAgLnBsYXl7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5uYW1le1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5uYW1lX2xibCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZW51IHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgfVxufSIsIi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLmJhY2tfaW1hZ2Uge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogODBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5iYWNrX2ltYWdlIC5saXZlMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5iYWNrX2ltYWdlIC5wbGF5X2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5iYWNrX2ltYWdlIC5wbGF5X2RpdiAucGxheSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLmJhY2tfaW1hZ2UgLnBsYXlfZGl2IC5uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5uYW1lX2xibCB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLm1lbnUge1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/downloads/downloads.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/downloads/downloads.page.ts ***!
    \***************************************************/

  /*! exports provided: DownloadsPage */

  /***/
  function srcAppPagesDownloadsDownloadsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DownloadsPage", function () {
      return DownloadsPage;
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

    var DownloadsPage = /*#__PURE__*/function () {
      function DownloadsPage(dummy) {
        _classCallCheck(this, DownloadsPage);

        this.dummy = dummy;
        this.images = this.dummy.landscape;
      }

      _createClass(DownloadsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DownloadsPage;
    }();

    DownloadsPage.ctorParameters = function () {
      return [{
        type: src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_1__["DummyService"]
      }];
    };

    DownloadsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-downloads',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./downloads.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/downloads/downloads.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./downloads.page.scss */
      "./src/app/pages/downloads/downloads.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_1__["DummyService"]])], DownloadsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-downloads-downloads-module-es5.js.map