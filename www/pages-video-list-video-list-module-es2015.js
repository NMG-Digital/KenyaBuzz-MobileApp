(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-video-list-video-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/video-list/video-list.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/video-list/video-list.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"4\" *ngFor=\"let item of images\">\n          <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/video-list/video-list-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/video-list/video-list-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: VideoListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoListPageRoutingModule", function() { return VideoListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _video_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video-list.page */ "./src/app/pages/video-list/video-list.page.ts");




const routes = [
    {
        path: '',
        component: _video_list_page__WEBPACK_IMPORTED_MODULE_3__["VideoListPage"]
    }
];
let VideoListPageRoutingModule = class VideoListPageRoutingModule {
};
VideoListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VideoListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/video-list/video-list.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/video-list/video-list.module.ts ***!
  \*******************************************************/
/*! exports provided: VideoListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoListPageModule", function() { return VideoListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _video_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./video-list-routing.module */ "./src/app/pages/video-list/video-list-routing.module.ts");
/* harmony import */ var _video_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video-list.page */ "./src/app/pages/video-list/video-list.page.ts");







let VideoListPageModule = class VideoListPageModule {
};
VideoListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _video_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["VideoListPageRoutingModule"]
        ],
        declarations: [_video_list_page__WEBPACK_IMPORTED_MODULE_6__["VideoListPage"]]
    })
], VideoListPageModule);



/***/ }),

/***/ "./src/app/pages/video-list/video-list.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/video-list/video-list.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n}\n.main_content_div .back_image2 {\n  height: 140px;\n  width: 100%;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EaWdpdGFsL0RvY3VtZW50cy9UZXN0Z3JvdW5kL0tCIE1vYmlsZSBBUFAvS0JfQXBwX1Jlcy9LZW55YUJ1enotTW9iaWxlQXBwL3NyYy9hcHAvcGFnZXMvdmlkZW8tbGlzdC92aWRlby1saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdmlkZW8tbGlzdC92aWRlby1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjtBRENJO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdmlkZW8tbGlzdC92aWRlby1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnRfZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmJhY2tfaW1hZ2Uye1xuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbn0iLCIubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmJhY2tfaW1hZ2UyIHtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/video-list/video-list.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/video-list/video-list.page.ts ***!
  \*****************************************************/
/*! exports provided: VideoListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoListPage", function() { return VideoListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/dummy.service */ "./src/app/services/dummy.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let VideoListPage = class VideoListPage {
    constructor(dummy, route) {
        this.dummy = dummy;
        this.route = route;
        this.images = this.dummy.images;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(data => {
            console.log(data);
            this.title = data.id;
        });
    }
};
VideoListPage.ctorParameters = () => [
    { type: src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__["DummyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
VideoListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-video-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./video-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/video-list/video-list.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./video-list.page.scss */ "./src/app/pages/video-list/video-list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__["DummyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], VideoListPage);



/***/ })

}]);
//# sourceMappingURL=pages-video-list-video-list-module-es2015.js.map