(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["disney-disney-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/disney/disney.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/disney/disney.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <div class=\"header_div\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button color=\"light\"></ion-menu-button>\r\n        </ion-buttons>\r\n        <img src=\"assets/imgs/logo4.svg\">\r\n        <ion-button class=\"search_btn\" slot=\"end\" fill=\"clear\" size=\"small\">\r\n            <ion-icon slot=\"icon-only\" name=\"search-outline\" color=\"light\"></ion-icon>\r\n        </ion-button>\r\n    </div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"main_content_div\">\r\n        <ion-slides mode=\"ios\">\r\n            <ion-slide *ngFor=\"let item of mainSlider; let i = index\">\r\n                <div class=\"back_image bg_image\" [style.backgroundImage]=\"'url('+item+')'\">\r\n                    <ion-label>{{i+1}}/{{mainSlider?.length}}</ion-label>\r\n                </div>\r\n            </ion-slide>\r\n        </ion-slides>\r\n\r\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Top picks for you')\">Top picks for you <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\r\n        <ion-slides mode=\"ios\" [options]=\"slideOpts\">\r\n            <ion-slide *ngFor=\"let item of images\" (click)=\"goToVideo()\">\r\n                <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\r\n            </ion-slide>\r\n        </ion-slides>\r\n\r\n          <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Popular Movies')\">Popular Movies <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\r\n          <ion-slides mode=\"ios\" [options]=\"slideOpts\">\r\n              <ion-slide *ngFor=\"let item of (images | slice : 4 : 10)\" (click)=\"goToVideo()\">\r\n                  <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\r\n              </ion-slide>\r\n          </ion-slides>\r\n\r\n          <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Popular in Romance')\">Popular in Romance <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\r\n          <ion-slides mode=\"ios\" [options]=\"slideOpts\">\r\n              <ion-slide *ngFor=\"let item of (images | slice : 8 : 18)\" (click)=\"goToVideo()\">\r\n                  <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\r\n              </ion-slide>\r\n          </ion-slides>\r\n\r\n          <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Popular in Action')\">Popular in Action <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\r\n          <ion-slides mode=\"ios\" [options]=\"slideOpts\">\r\n              <ion-slide *ngFor=\"let item of (images | slice : 7 : 18)\" (click)=\"goToVideo()\">\r\n                  <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\r\n              </ion-slide>\r\n          </ion-slides>\r\n\r\n          <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Popular in Comedy')\">Popular in Comedy <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\r\n          <ion-slides mode=\"ios\" [options]=\"slideOpts\">\r\n              <ion-slide *ngFor=\"let item of animals\" (click)=\"goToVideo()\">\r\n                  <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\r\n              </ion-slide>\r\n          </ion-slides>\r\n    </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/disney/disney-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/disney/disney-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DisneyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisneyPageRoutingModule", function() { return DisneyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _disney_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./disney.page */ "./src/app/pages/disney/disney.page.ts");




const routes = [
    {
        path: '',
        component: _disney_page__WEBPACK_IMPORTED_MODULE_3__["DisneyPage"]
    }
];
let DisneyPageRoutingModule = class DisneyPageRoutingModule {
};
DisneyPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DisneyPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/disney/disney.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/disney/disney.module.ts ***!
  \***********************************************/
/*! exports provided: DisneyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisneyPageModule", function() { return DisneyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _disney_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./disney-routing.module */ "./src/app/pages/disney/disney-routing.module.ts");
/* harmony import */ var _disney_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./disney.page */ "./src/app/pages/disney/disney.page.ts");







let DisneyPageModule = class DisneyPageModule {
};
DisneyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _disney_routing_module__WEBPACK_IMPORTED_MODULE_5__["DisneyPageRoutingModule"]
        ],
        declarations: [_disney_page__WEBPACK_IMPORTED_MODULE_6__["DisneyPage"]]
    })
], DisneyPageModule);



/***/ }),

/***/ "./src/app/pages/disney/disney.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/disney/disney.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n  padding: 10px;\n}\n.main_content_div .back_image {\n  height: 200px;\n  width: 100%;\n  border-radius: 5px;\n  position: relative;\n  padding: 5px;\n}\n.main_content_div .back_image ion-label {\n  position: absolute;\n  right: 5px;\n  font-size: 14px;\n}\n.main_content_div .head_lbl {\n  font-family: \"medium\";\n  display: block;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  position: relative;\n}\n.main_content_div .head_lbl ion-icon {\n  position: absolute;\n  right: 0;\n  font-size: 20px;\n  color: #707070;\n}\n.main_content_div ion-slide {\n  margin-right: 7px;\n}\n.main_content_div .back_image2 {\n  height: 140px;\n  width: 100%;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGlzbmV5L0M6XFxsYXJhZ29uXFx3d3dcXEtlbnlhQnV6ei1Nb2JpbGVBcHAvc3JjXFxhcHBcXHBhZ2VzXFxkaXNuZXlcXGRpc25leS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Rpc25leS9kaXNuZXkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNDSjtBRENJO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0NSO0FEQVE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDRVo7QURFSTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0FSO0FEQ1E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NaO0FERUk7RUFDSSxpQkFBQTtBQ0FSO0FER0k7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kaXNuZXkvZGlzbmV5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnRfZGl2e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgIC5iYWNrX2ltYWdle1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5oZWFkX2xibHtcclxuICAgICAgICBmb250LWZhbWlseTogJ21lZGl1bSc7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tc2xpZGV7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJhY2tfaW1hZ2Uye1xyXG4gICAgICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG59IiwiLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5iYWNrX2ltYWdlIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmFja19pbWFnZSBpb24tbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5oZWFkX2xibCB7XG4gIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmhlYWRfbGJsIGlvbi1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzcwNzA3MDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1zbGlkZSB7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmJhY2tfaW1hZ2UyIHtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/disney/disney.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/disney/disney.page.ts ***!
  \*********************************************/
/*! exports provided: DisneyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisneyPage", function() { return DisneyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/dummy.service */ "./src/app/services/dummy.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let DisneyPage = class DisneyPage {
    constructor(dummy, router) {
        this.dummy = dummy;
        this.router = router;
        this.mainSlider = [
            'assets/imgs/landscape_imgs/1.jpg',
            'assets/imgs/landscape_imgs/2.jpg',
            'assets/imgs/landscape_imgs/3.jpg',
            'assets/imgs/landscape_imgs/4.jpg',
            'assets/imgs/landscape_imgs/5.png',
        ];
        this.slideOpts = {
            slidesPerView: 3,
        };
        this.slideOpts3 = {
            slidesPerView: 2,
        };
        this.images = this.dummy.images;
        this.sports = this.dummy.sports;
        this.animals = this.dummy.animal;
        this.genrens = this.dummy.genrens;
    }
    ngOnInit() {
    }
    goTovideoList(val) {
        const navData = {
            queryParams: {
                id: val
            }
        };
        this.router.navigate(['/video-list'], navData);
    }
    goToVideo() {
        this.router.navigate(['/video']);
    }
};
DisneyPage.ctorParameters = () => [
    { type: src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__["DummyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
DisneyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-disney',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./disney.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/disney/disney.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./disney.page.scss */ "./src/app/pages/disney/disney.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__["DummyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], DisneyPage);



/***/ })

}]);
//# sourceMappingURL=disney-disney-module-es2015.js.map