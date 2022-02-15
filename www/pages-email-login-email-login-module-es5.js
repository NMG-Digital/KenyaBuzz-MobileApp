function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-email-login-email-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/email-login/email-login.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/email-login/email-login.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEmailLoginEmailLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n      <ion-label class=\"simp_lbl\">Have a Facebook / Email account?</ion-label>\n\n      <ion-input placeholder=\"Email Address\"></ion-input>\n      <ion-button expand=\"block\" (click)=\"goToHome()\">\n          CONTINUE\n          <ion-icon name=\"chevron-forward\"></ion-icon>\n      </ion-button>\n\n      <ion-label class=\"or_lbl\">or</ion-label>\n\n      <ion-button expand=\"block\" (click)=\"goToHome()\">\n          <ion-icon name=\"logo-facebook\"></ion-icon>\n          &nbsp;Logged in via Facebook earlier ?\n      </ion-button>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/email-login/email-login-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/email-login/email-login-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: EmailLoginPageRoutingModule */

  /***/
  function srcAppPagesEmailLoginEmailLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailLoginPageRoutingModule", function () {
      return EmailLoginPageRoutingModule;
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


    var _email_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./email-login.page */
    "./src/app/pages/email-login/email-login.page.ts");

    var routes = [{
      path: '',
      component: _email_login_page__WEBPACK_IMPORTED_MODULE_3__["EmailLoginPage"]
    }];

    var EmailLoginPageRoutingModule = function EmailLoginPageRoutingModule() {
      _classCallCheck(this, EmailLoginPageRoutingModule);
    };

    EmailLoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EmailLoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/email-login/email-login.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/email-login/email-login.module.ts ***!
    \*********************************************************/

  /*! exports provided: EmailLoginPageModule */

  /***/
  function srcAppPagesEmailLoginEmailLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailLoginPageModule", function () {
      return EmailLoginPageModule;
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


    var _email_login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./email-login-routing.module */
    "./src/app/pages/email-login/email-login-routing.module.ts");
    /* harmony import */


    var _email_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./email-login.page */
    "./src/app/pages/email-login/email-login.page.ts");

    var EmailLoginPageModule = function EmailLoginPageModule() {
      _classCallCheck(this, EmailLoginPageModule);
    };

    EmailLoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _email_login_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmailLoginPageRoutingModule"]],
      declarations: [_email_login_page__WEBPACK_IMPORTED_MODULE_6__["EmailLoginPage"]]
    })], EmailLoginPageModule);
    /***/
  },

  /***/
  "./src/app/pages/email-login/email-login.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/email-login/email-login.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEmailLoginEmailLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main_content_div {\n  padding: 20px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div ion-input {\n  border-bottom: 1px solid #1f80e0;\n  margin-top: 30px;\n}\n.main_content_div ion-button {\n  --border-radius: 3px !important;\n  margin-top: 30px;\n  margin-bottom: 20px;\n  --background: #1f80e0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 50px;\n}\n.main_content_div .or_lbl {\n  text-align: center;\n  font-family: \"medium\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EaWdpdGFsL0RvY3VtZW50cy9UZXN0Z3JvdW5kL0tCIE1vYmlsZSBBUFAvS0JfQXBwX1Jlcy9LZW55YUJ1enotTW9iaWxlQXBwL3NyYy9hcHAvcGFnZXMvZW1haWwtbG9naW4vZW1haWwtbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9lbWFpbC1sb2dpbi9lbWFpbC1sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7QURDSTtFQUNJLGNBQUE7QUNDUjtBREVJO0VBQ0ksZ0NBQUE7RUFDQSxnQkFBQTtBQ0FSO0FER0k7RUFDSSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0RSO0FESUk7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0FDRlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lbWFpbC1sb2dpbi9lbWFpbC1sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50X2RpdiB7XG4gICAgcGFkZGluZzogMjBweDtcblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIGlvbi1pbnB1dCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMWY4MGUwO1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIH1cblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAtLWJhY2tncm91bmQ6ICMxZjgwZTA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgfVxuXG4gICAgLm9yX2xibCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdtZWRpdW0nO1xuICAgIH1cbn0iLCIubWFpbl9jb250ZW50X2RpdiB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1pbnB1dCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMWY4MGUwO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIC0tYmFja2dyb3VuZDogIzFmODBlMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogNTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5vcl9sYmwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/email-login/email-login.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/email-login/email-login.page.ts ***!
    \*******************************************************/

  /*! exports provided: EmailLoginPage */

  /***/
  function srcAppPagesEmailLoginEmailLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailLoginPage", function () {
      return EmailLoginPage;
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

    var EmailLoginPage = /*#__PURE__*/function () {
      function EmailLoginPage(router) {
        _classCallCheck(this, EmailLoginPage);

        this.router = router;
      }

      _createClass(EmailLoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToHome",
        value: function goToHome() {
          this.router.navigate(['/tabs/home']);
        }
      }]);

      return EmailLoginPage;
    }();

    EmailLoginPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    EmailLoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-email-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./email-login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/email-login/email-login.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./email-login.page.scss */
      "./src/app/pages/email-login/email-login.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], EmailLoginPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-email-login-email-login-module-es5.js.map