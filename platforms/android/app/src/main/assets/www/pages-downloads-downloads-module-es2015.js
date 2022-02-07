(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-downloads-downloads-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/downloads/downloads.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/downloads/downloads.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Downloads</ion-title>\r\n        <ion-button class=\"search_btn\" slot=\"end\" fill=\"clear\" size=\"small\">\r\n            <ion-icon name=\"pencil-sharp\" color=\"light\"></ion-icon>\r\n        </ion-button>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"main_content_div\">\r\n        <div class=\"flex_div\" *ngFor=\"let item of images\">\r\n            <div class=\"back_image bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\">\r\n                <ion-label class=\"live2\">9 min</ion-label>\r\n                <div class=\"play_div\">\r\n                  <ion-icon name=\"caret-forward-outline\" class=\"play\"></ion-icon>\r\n                  <ion-label class=\"name\">{{item.name}}</ion-label>\r\n                </div>\r\n            </div>\r\n            <ion-label class=\"name_lbl\">{{item.name}}</ion-label>\r\n            <ion-icon class=\"menu\" name=\"ellipsis-vertical\"></ion-icon>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/downloads/downloads-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/downloads/downloads-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DownloadsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsPageRoutingModule", function() { return DownloadsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _downloads_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./downloads.page */ "./src/app/pages/downloads/downloads.page.ts");




const routes = [
    {
        path: '',
        component: _downloads_page__WEBPACK_IMPORTED_MODULE_3__["DownloadsPage"]
    }
];
let DownloadsPageRoutingModule = class DownloadsPageRoutingModule {
};
DownloadsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DownloadsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/downloads/downloads.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/downloads/downloads.module.ts ***!
  \*****************************************************/
/*! exports provided: DownloadsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsPageModule", function() { return DownloadsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _downloads_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./downloads-routing.module */ "./src/app/pages/downloads/downloads-routing.module.ts");
/* harmony import */ var _downloads_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./downloads.page */ "./src/app/pages/downloads/downloads.page.ts");







let DownloadsPageModule = class DownloadsPageModule {
};
DownloadsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _downloads_routing_module__WEBPACK_IMPORTED_MODULE_5__["DownloadsPageRoutingModule"]
        ],
        declarations: [_downloads_page__WEBPACK_IMPORTED_MODULE_6__["DownloadsPage"]]
    })
], DownloadsPageModule);



/***/ }),

/***/ "./src/app/pages/downloads/downloads.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/downloads/downloads.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  padding: 16px;\n}\n.main_content_div .flex_div {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  margin-bottom: 16px;\n  position: relative;\n}\n.main_content_div .flex_div .back_image {\n  width: 120px;\n  height: 80px;\n  position: relative;\n  border-radius: 3px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 5px;\n}\n.main_content_div .flex_div .back_image .live2 {\n  font-size: 12px;\n  font-family: \"medium\";\n  text-align: right;\n}\n.main_content_div .flex_div .back_image .play_div {\n  display: flex;\n  align-items: center;\n  margin-left: -5px;\n}\n.main_content_div .flex_div .back_image .play_div .play {\n  font-size: 20px;\n  margin-right: 1px;\n}\n.main_content_div .flex_div .back_image .play_div .name {\n  font-size: 14px;\n  margin-top: 0px;\n  line-height: 15px;\n}\n.main_content_div .flex_div .name_lbl {\n  margin-left: 16px;\n  font-size: 15px;\n}\n.main_content_div .flex_div .menu {\n  color: white;\n  position: absolute;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZG93bmxvYWRzL0M6XFxsYXJhZ29uXFx3d3dcXEtlbnlhQnV6ei1Nb2JpbGVBcHAvc3JjXFxhcHBcXHBhZ2VzXFxkb3dubG9hZHNcXGRvd25sb2Fkcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Rvd25sb2Fkcy9kb3dubG9hZHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKO0FEQUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0VSO0FEQVE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUNFWjtBREFZO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNFaEI7QURBWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDRWhCO0FERGdCO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDR3BCO0FERGdCO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0dwQjtBRENRO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDQ1o7QURFUTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNBWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rvd25sb2Fkcy9kb3dubG9hZHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudF9kaXYge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIC5mbGV4X2RpdntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIC5iYWNrX2ltYWdlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuXHJcbiAgICAgICAgICAgIC5saXZlMntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wbGF5X2RpdntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XHJcbiAgICAgICAgICAgICAgICAucGxheXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubmFtZXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYW1lX2xibCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWVudSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIubWFpbl9jb250ZW50X2RpdiB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5iYWNrX2ltYWdlIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAuYmFja19pbWFnZSAubGl2ZTIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAuYmFja19pbWFnZSAucGxheV9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogLTVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAuYmFja19pbWFnZSAucGxheV9kaXYgLnBsYXkge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5iYWNrX2ltYWdlIC5wbGF5X2RpdiAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAubmFtZV9sYmwge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5tZW51IHtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/downloads/downloads.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/downloads/downloads.page.ts ***!
  \***************************************************/
/*! exports provided: DownloadsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsPage", function() { return DownloadsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/dummy.service */ "./src/app/services/dummy.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let DownloadsPage = class DownloadsPage {
    constructor(dummy) {
        this.dummy = dummy;
        this.images = this.dummy.landscape;
    }
    ngOnInit() {
    }
};
DownloadsPage.ctorParameters = () => [
    { type: src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_1__["DummyService"] }
];
DownloadsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-downloads',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./downloads.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/downloads/downloads.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./downloads.page.scss */ "./src/app/pages/downloads/downloads.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_1__["DummyService"]])
], DownloadsPage);



/***/ })

}]);
//# sourceMappingURL=pages-downloads-downloads-module-es2015.js.map