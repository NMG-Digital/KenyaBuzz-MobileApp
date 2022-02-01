(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mobile-login-mobile-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mobile-login/mobile-login.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mobile-login/mobile-login.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n      <ion-label class=\"simp_lbl\">Continue with mobile number</ion-label>\n\n      <div class=\"mobile_btn\">\n          <ion-label>+91 |</ion-label>\n          <ion-input type=\"text\" placeholder=\"Your mobile number\"></ion-input>\n      </div>\n\n      <ion-button expand=\"block\" (click)=\"goToHome()\">\n          CONTINUE\n          <ion-icon name=\"chevron-forward\"></ion-icon>\n      </ion-button>\n\n      <ion-label class=\"small_lbl\">\n          By clicking continue, you agree to our <span>Terms of Use</span> <br>and acknowledge that \n          you have read our <span>Privacy Policy</span>\n      </ion-label>\n\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/mobile-login/mobile-login-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/mobile-login/mobile-login-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: MobileLoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileLoginPageRoutingModule", function() { return MobileLoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _mobile_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile-login.page */ "./src/app/pages/mobile-login/mobile-login.page.ts");




const routes = [
    {
        path: '',
        component: _mobile_login_page__WEBPACK_IMPORTED_MODULE_3__["MobileLoginPage"]
    }
];
let MobileLoginPageRoutingModule = class MobileLoginPageRoutingModule {
};
MobileLoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MobileLoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/mobile-login/mobile-login.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/mobile-login/mobile-login.module.ts ***!
  \***********************************************************/
/*! exports provided: MobileLoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileLoginPageModule", function() { return MobileLoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _mobile_login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mobile-login-routing.module */ "./src/app/pages/mobile-login/mobile-login-routing.module.ts");
/* harmony import */ var _mobile_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mobile-login.page */ "./src/app/pages/mobile-login/mobile-login.page.ts");







let MobileLoginPageModule = class MobileLoginPageModule {
};
MobileLoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mobile_login_routing_module__WEBPACK_IMPORTED_MODULE_5__["MobileLoginPageRoutingModule"]
        ],
        declarations: [_mobile_login_page__WEBPACK_IMPORTED_MODULE_6__["MobileLoginPage"]]
    })
], MobileLoginPageModule);



/***/ }),

/***/ "./src/app/pages/mobile-login/mobile-login.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/mobile-login/mobile-login.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  padding: 20px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div ion-button {\n  --border-radius: 3px !important;\n  margin-top: 30px;\n  margin-bottom: 20px;\n  --background: #1f80e0;\n  display: flex;\n  align-items: center;\n}\n.main_content_div .mobile_btn {\n  border-bottom: 1px solid #1f80e0;\n  padding-bottom: 5px;\n  display: flex;\n  align-items: center;\n  margin-top: 30px;\n}\n.main_content_div .mobile_btn ion-label {\n  color: #707070;\n}\n.main_content_div .mobile_btn ion-input {\n  --padding-start: 8px;\n}\n.main_content_div .small_lbl {\n  font-size: 13px;\n  color: #707070;\n  text-align: center;\n  line-height: 24px;\n}\n.main_content_div .small_lbl span {\n  color: #1f80e0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EaWdpdGFsL0RvY3VtZW50cy9UZXN0Z3JvdW5kL0tCIE1vYmlsZSBBUFAvS0JfbW9iaWxlL3NyYy9hcHAvcGFnZXMvbW9iaWxlLWxvZ2luL21vYmlsZS1sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21vYmlsZS1sb2dpbi9tb2JpbGUtbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKO0FEQ0k7RUFDSSxjQUFBO0FDQ1I7QURFSTtFQUNJLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQVI7QURJSTtFQUNJLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0ZSO0FESVE7RUFDSSxjQUFBO0FDRlo7QURLUTtFQUNJLG9CQUFBO0FDSFo7QURPSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0xSO0FET1E7RUFDSSxjQUFBO0FDTFoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tb2JpbGUtbG9naW4vbW9iaWxlLWxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIC0tYmFja2dyb3VuZDogIzFmODBlMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICBcbiAgICAubW9iaWxlX2J0biB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMWY4MGUwO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogIzcwNzA3MDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zbWFsbF9sYmwge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6ICMxZjgwZTA7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLm1haW5fY29udGVudF9kaXYge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjMWY4MGUwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLm1vYmlsZV9idG4ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzFmODBlMDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5tb2JpbGVfYnRuIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjNzA3MDcwO1xufVxuLm1haW5fY29udGVudF9kaXYgLm1vYmlsZV9idG4gaW9uLWlucHV0IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc21hbGxfbGJsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzcwNzA3MDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zbWFsbF9sYmwgc3BhbiB7XG4gIGNvbG9yOiAjMWY4MGUwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/mobile-login/mobile-login.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/mobile-login/mobile-login.page.ts ***!
  \*********************************************************/
/*! exports provided: MobileLoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileLoginPage", function() { return MobileLoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let MobileLoginPage = class MobileLoginPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goToHome() {
        this.router.navigate(['/tabs/home']);
    }
};
MobileLoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
MobileLoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-mobile-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mobile-login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mobile-login/mobile-login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mobile-login.page.scss */ "./src/app/pages/mobile-login/mobile-login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], MobileLoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-mobile-login-mobile-login-module-es2015.js.map