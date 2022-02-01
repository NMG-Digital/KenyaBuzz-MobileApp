function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-languages-languages-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/languages/languages.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/languages/languages.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLanguagesLanguagesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"md\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Languages</ion-title>\n        <ion-button class=\"search_btn\" slot=\"end\" fill=\"clear\" size=\"small\">\n            <ion-icon name=\"search\" color=\"light\"></ion-icon>\n        </ion-button>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_content_div\">\n        <ion-row>\n            <ion-col size=\"6\" *ngFor=\"let item of languages\">\n                <div class=\"back_image bg_image\" [style.backgroundImage]=\"'url('+ item.img +')'\">\n                    <ion-label>{{item.name}}</ion-label>\n                </div>    \n            </ion-col>\n        </ion-row>\n    </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/languages/languages-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/languages/languages-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: LanguagesPageRoutingModule */

  /***/
  function srcAppPagesLanguagesLanguagesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguagesPageRoutingModule", function () {
      return LanguagesPageRoutingModule;
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


    var _languages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./languages.page */
    "./src/app/pages/languages/languages.page.ts");

    var routes = [{
      path: '',
      component: _languages_page__WEBPACK_IMPORTED_MODULE_3__["LanguagesPage"]
    }];

    var LanguagesPageRoutingModule = function LanguagesPageRoutingModule() {
      _classCallCheck(this, LanguagesPageRoutingModule);
    };

    LanguagesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LanguagesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/languages/languages.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/languages/languages.module.ts ***!
    \*****************************************************/

  /*! exports provided: LanguagesPageModule */

  /***/
  function srcAppPagesLanguagesLanguagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguagesPageModule", function () {
      return LanguagesPageModule;
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


    var _languages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./languages-routing.module */
    "./src/app/pages/languages/languages-routing.module.ts");
    /* harmony import */


    var _languages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./languages.page */
    "./src/app/pages/languages/languages.page.ts");

    var LanguagesPageModule = function LanguagesPageModule() {
      _classCallCheck(this, LanguagesPageModule);
    };

    LanguagesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _languages_routing_module__WEBPACK_IMPORTED_MODULE_5__["LanguagesPageRoutingModule"]],
      declarations: [_languages_page__WEBPACK_IMPORTED_MODULE_6__["LanguagesPage"]]
    })], LanguagesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/languages/languages.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/languages/languages.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLanguagesLanguagesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main_content_div {\n  padding: 10px;\n}\n.main_content_div .back_image {\n  width: 100%;\n  height: 110px;\n  border-radius: 3px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  padding: 5px;\n}\n.main_content_div .back_image ion-label {\n  font-family: \"medium\";\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EaWdpdGFsL0RvY3VtZW50cy9UZXN0Z3JvdW5kL0tCIE1vYmlsZSBBUFAvS0JfbW9iaWxlL3NyYy9hcHAvcGFnZXMvbGFuZ3VhZ2VzL2xhbmd1YWdlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmd1YWdlcy9sYW5ndWFnZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKO0FEQ0k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDQ1I7QURBUTtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7QUNFWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmd1YWdlcy9sYW5ndWFnZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudF9kaXYge1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICAuYmFja19pbWFnZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDExMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLm1haW5fY29udGVudF9kaXYge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmJhY2tfaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmFja19pbWFnZSBpb24tbGFiZWwge1xuICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/languages/languages.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/languages/languages.page.ts ***!
    \***************************************************/

  /*! exports provided: LanguagesPage */

  /***/
  function srcAppPagesLanguagesLanguagesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguagesPage", function () {
      return LanguagesPage;
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

    var LanguagesPage = /*#__PURE__*/function () {
      function LanguagesPage(dummy) {
        _classCallCheck(this, LanguagesPage);

        this.dummy = dummy;
        this.languages = this.dummy.languages;
      }

      _createClass(LanguagesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LanguagesPage;
    }();

    LanguagesPage.ctorParameters = function () {
      return [{
        type: src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_1__["DummyService"]
      }];
    };

    LanguagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-languages',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./languages.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/languages/languages.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./languages.page.scss */
      "./src/app/pages/languages/languages.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_1__["DummyService"]])], LanguagesPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-languages-languages-module-es5.js.map