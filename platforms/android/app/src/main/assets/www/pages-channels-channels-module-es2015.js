(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-channels-channels-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/channels/channels.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/channels/channels.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Channels</ion-title>\r\n        <ion-button class=\"search_btn\" slot=\"end\" fill=\"clear\" size=\"small\">\r\n            <ion-icon name=\"search\" color=\"light\"></ion-icon>\r\n        </ion-button>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"main_content_div\">\r\n        <ion-row>\r\n            <ion-col size=\"6\" *ngFor=\"let item of images\">\r\n                <div class=\"back_image bg_image\" [style.backgroundImage]=\"'url('+ item +')'\"></div>    \r\n            </ion-col>\r\n        </ion-row>\r\n    </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/channels/channels-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/channels/channels-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ChannelsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelsPageRoutingModule", function() { return ChannelsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _channels_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./channels.page */ "./src/app/pages/channels/channels.page.ts");




const routes = [
    {
        path: '',
        component: _channels_page__WEBPACK_IMPORTED_MODULE_3__["ChannelsPage"]
    }
];
let ChannelsPageRoutingModule = class ChannelsPageRoutingModule {
};
ChannelsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChannelsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/channels/channels.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/channels/channels.module.ts ***!
  \***************************************************/
/*! exports provided: ChannelsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelsPageModule", function() { return ChannelsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _channels_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./channels-routing.module */ "./src/app/pages/channels/channels-routing.module.ts");
/* harmony import */ var _channels_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./channels.page */ "./src/app/pages/channels/channels.page.ts");







let ChannelsPageModule = class ChannelsPageModule {
};
ChannelsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _channels_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChannelsPageRoutingModule"]
        ],
        declarations: [_channels_page__WEBPACK_IMPORTED_MODULE_6__["ChannelsPage"]]
    })
], ChannelsPageModule);



/***/ }),

/***/ "./src/app/pages/channels/channels.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/channels/channels.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  padding: 10px;\n}\n.main_content_div .back_image {\n  width: 100%;\n  height: 110px;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhbm5lbHMvQzpcXGxhcmFnb25cXHd3d1xcS2VueWFCdXp6LU1vYmlsZUFwcC9zcmNcXGFwcFxccGFnZXNcXGNoYW5uZWxzXFxjaGFubmVscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NoYW5uZWxzL2NoYW5uZWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjtBRENJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hhbm5lbHMvY2hhbm5lbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudF9kaXYge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICAuYmFja19pbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB9XHJcbn0iLCIubWFpbl9jb250ZW50X2RpdiB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmFja19pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDExMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/channels/channels.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/channels/channels.page.ts ***!
  \*************************************************/
/*! exports provided: ChannelsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelsPage", function() { return ChannelsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/dummy.service */ "./src/app/services/dummy.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let ChannelsPage = class ChannelsPage {
    constructor(dummy) {
        this.dummy = dummy;
        this.images = this.dummy.channels;
    }
    ngOnInit() {
    }
};
ChannelsPage.ctorParameters = () => [
    { type: src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_1__["DummyService"] }
];
ChannelsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-channels',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./channels.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/channels/channels.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./channels.page.scss */ "./src/app/pages/channels/channels.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_1__["DummyService"]])
], ChannelsPage);



/***/ })

}]);
//# sourceMappingURL=pages-channels-channels-module-es2015.js.map