(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tv-tv-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tv/tv.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tv/tv.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <div class=\"header_div\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button color=\"light\"></ion-menu-button>\n        </ion-buttons>\n        <img src=\"assets/imgs/logo4.svg\">\n        <ion-button class=\"search_btn\" slot=\"end\" fill=\"clear\" size=\"small\">\n            <ion-icon slot=\"icon-only\" name=\"search-outline\" color=\"light\"></ion-icon>\n        </ion-button>\n    </div>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_content_div\">\n        <ion-slides mode=\"ios\">\n            <ion-slide *ngFor=\"let item of mainSlider; let i = index\">\n                <div class=\"back_image bg_image\" [style.backgroundImage]=\"'url('+item+')'\">\n                    <ion-label>{{i+1}}/{{mainSlider?.length}}</ion-label>\n                </div>\n            </ion-slide>\n        </ion-slides>\n\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Top picks for you')\" >Top picks for you <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\n        <ion-slides mode=\"ios\" [options]=\"slideOpts\">\n            <ion-slide *ngFor=\"let item of images\" (click)=\"goToVideo()\">\n                <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\n            </ion-slide>\n        </ion-slides>\n\n\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Popular Shows')\">Popular Shows <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\n          <ion-slides mode=\"ios\" [options]=\"slideOpts\">\n              <ion-slide *ngFor=\"let item of (images | slice : 4 : 10)\" (click)=\"goToVideo()\">\n                  <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\n              </ion-slide>\n        </ion-slides>\n\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Popular Channels')\">Popular Channels <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\n        <ion-slides mode=\"ios\" [options]=\"slideOpts3\">\n            <ion-slide *ngFor=\"let item of channels\" (click)=\"goToVideo()\">\n                <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item+')'\"></div>\n            </ion-slide>\n        </ion-slides>\n\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Popular in Reality')\">Popular in Reality <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\n        <ion-slides mode=\"ios\" [options]=\"slideOpts\">\n            <ion-slide *ngFor=\"let item of (images | slice : 8 : 18)\" (click)=\"goToVideo()\">\n                <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\n            </ion-slide>\n        </ion-slides>\n\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Popular in Drama')\">Popular in Drama <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\n        <ion-slides mode=\"ios\" [options]=\"slideOpts\">\n            <ion-slide *ngFor=\"let item of (images | slice : 8 : 18)\" (click)=\"goToVideo()\">\n                <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\n            </ion-slide>\n        </ion-slides>\n\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Popular in Crime')\">Popular in Crime <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\n        <ion-slides mode=\"ios\" [options]=\"slideOpts\">\n            <ion-slide *ngFor=\"let item of animals\" (click)=\"goToVideo()\">\n                <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\n            </ion-slide>\n        </ion-slides>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/tv/tv-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/tv/tv-routing.module.ts ***!
  \***********************************************/
/*! exports provided: TvPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvPageRoutingModule", function() { return TvPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tv_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tv.page */ "./src/app/pages/tv/tv.page.ts");




const routes = [
    {
        path: '',
        component: _tv_page__WEBPACK_IMPORTED_MODULE_3__["TvPage"]
    }
];
let TvPageRoutingModule = class TvPageRoutingModule {
};
TvPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TvPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tv/tv.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/tv/tv.module.ts ***!
  \***************************************/
/*! exports provided: TvPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvPageModule", function() { return TvPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _tv_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tv-routing.module */ "./src/app/pages/tv/tv-routing.module.ts");
/* harmony import */ var _tv_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tv.page */ "./src/app/pages/tv/tv.page.ts");







let TvPageModule = class TvPageModule {
};
TvPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tv_routing_module__WEBPACK_IMPORTED_MODULE_5__["TvPageRoutingModule"]
        ],
        declarations: [_tv_page__WEBPACK_IMPORTED_MODULE_6__["TvPage"]]
    })
], TvPageModule);



/***/ }),

/***/ "./src/app/pages/tv/tv.page.scss":
/*!***************************************!*\
  !*** ./src/app/pages/tv/tv.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n  padding: 10px;\n}\n.main_content_div .back_image {\n  height: 200px;\n  width: 100%;\n  border-radius: 5px;\n  position: relative;\n  padding: 5px;\n}\n.main_content_div .back_image ion-label {\n  position: absolute;\n  right: 5px;\n  font-size: 14px;\n}\n.main_content_div .head_lbl {\n  font-family: \"medium\";\n  display: block;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  position: relative;\n}\n.main_content_div .head_lbl ion-icon {\n  position: absolute;\n  right: 0;\n  font-size: 20px;\n  color: #707070;\n}\n.main_content_div ion-slide {\n  margin-right: 7px;\n}\n.main_content_div .back_image2 {\n  height: 140px;\n  width: 100%;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EaWdpdGFsL0RvY3VtZW50cy9UZXN0Z3JvdW5kL0tCIE1vYmlsZSBBUFAvS0JfQXBwX1Jlcy9LZW55YUJ1enotTW9iaWxlQXBwL3NyYy9hcHAvcGFnZXMvdHYvdHYucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90di90di5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0NKO0FEQ0k7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ1I7QURBUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNFWjtBREVJO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQVI7QURFUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQVo7QURHSTtFQUNJLGlCQUFBO0FDRFI7QURJSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNGUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R2L3R2LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnRfZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICAuYmFja19pbWFnZXtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmhlYWRfbGJse1xuICAgICAgICBmb250LWZhbWlseTogJ21lZGl1bSc7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1zbGlkZXtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gICAgfVxuXG4gICAgLmJhY2tfaW1hZ2Uye1xuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbn0iLCIubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmJhY2tfaW1hZ2Uge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5iYWNrX2ltYWdlIGlvbi1sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmhlYWRfbGJsIHtcbiAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuaGVhZF9sYmwgaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjNzA3MDcwO1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLXNsaWRlIHtcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmFja19pbWFnZTIge1xuICBoZWlnaHQ6IDE0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/tv/tv.page.ts":
/*!*************************************!*\
  !*** ./src/app/pages/tv/tv.page.ts ***!
  \*************************************/
/*! exports provided: TvPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvPage", function() { return TvPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/dummy.service */ "./src/app/services/dummy.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let TvPage = class TvPage {
    constructor(dummy, router) {
        this.dummy = dummy;
        this.router = router;
        this.mainSlider = [
            'assets/imgs/landscape_imgs/6.jpg',
            'assets/imgs/landscape_imgs/7.jpg',
            'assets/imgs/landscape_imgs/8.jpg',
            'assets/imgs/landscape_imgs/9.jpg',
            'assets/imgs/landscape_imgs/10.jpg',
        ];
        this.slideOpts = {
            slidesPerView: 3,
        };
        this.slideOpts3 = {
            slidesPerView: 1.7,
        };
        this.images = this.dummy.images;
        this.sports = this.dummy.sports;
        this.animals = this.dummy.animal;
        this.genrens = this.dummy.genrens;
        this.channels = this.dummy.channels;
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
TvPage.ctorParameters = () => [
    { type: src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__["DummyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
TvPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tv',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tv.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tv/tv.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tv.page.scss */ "./src/app/pages/tv/tv.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__["DummyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], TvPage);



/***/ })

}]);
//# sourceMappingURL=tv-tv-module-es2015.js.map