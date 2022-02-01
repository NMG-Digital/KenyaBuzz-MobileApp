(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news-news-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/news/news.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/news/news.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <div class=\"header_div\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button color=\"light\"></ion-menu-button>\n        </ion-buttons>\n        <img src=\"assets/imgs/logo4.svg\">\n        <ion-button class=\"search_btn\" slot=\"end\" fill=\"clear\" size=\"small\">\n            <ion-icon slot=\"icon-only\" name=\"search-outline\" color=\"light\"></ion-icon>\n        </ion-button>\n    </div>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n    <ion-label class=\"head_lbl\">Live News</ion-label>\n    <ion-slides mode=\"ios\" [options]=\"slideOpts\">\n      <ion-slide *ngFor=\"let item of reporter\">\n        <div style=\"width: 100%;\">\n        <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\n          <div class=\"flex_div\">\n            <div>\n              <img src=\"{{item.icn}}\" alt=\"\">\n            </div>\n            <div style=\"padding-left: 5px;\">\n              <ion-label class=\"top_lbl\">Star News</ion-label>\n              <ion-label class=\"light_lbl\">3h ago</ion-label>\n            </div>\n          </div>\n        </div>\n      </ion-slide>\n    </ion-slides>\n\n    <ion-label class=\"head_lbl\">Coronavirus Crisis <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\n\n    <div class=\"video_div\" *ngFor=\"let item of (news | slice :0: 3)\">\n      <ion-label class=\"time\">4 min</ion-label>\n      <video width=\"100%\" height=\"240\" controls poster=\"{{item.img}}\" >\n        <source src=\"assets/imgs/news/video.mp4\" type=\"video/mp4\">\n      </video>\n      <ion-label class=\"title_lbl\">{{item.name}}</ion-label>\n      <div class=\"flex_div\">\n        <div>\n          <img src=\"{{item.icn}}\" alt=\"\">\n        </div>\n        <div style=\"padding-left: 8px;\">\n          <ion-label class=\"top_lbl\">Star News</ion-label>\n          <ion-label class=\"light_lbl\">3h ago</ion-label>\n        </div>\n      </div>\n    </div>\n\n    <ion-button (click)=\"goToNewsList('Coronavirus Crisis')\" expand=\"block\" fill=\"clear\">\n      See All Coronavirus Crisis\n      <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n    </ion-button>\n\n    <ion-label class=\"head_lbl\">Entertainment <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\n\n    <div class=\"video_div\" *ngFor=\"let item of (news | slice :3: 6)\">\n      <ion-label class=\"time\">4 min</ion-label>\n      <video width=\"100%\" height=\"240\" controls poster=\"{{item.img}}\" >\n        <source src=\"assets/imgs/news/video.mp4\" type=\"video/mp4\">\n      </video>\n      <ion-label class=\"title_lbl\">{{item.name}}</ion-label>\n      <div class=\"flex_div\">\n        <div>\n          <img src=\"{{item.icn}}\" alt=\"\">\n        </div>\n        <div style=\"padding-left: 8px;\">\n          <ion-label class=\"top_lbl\">Star News</ion-label>\n          <ion-label class=\"light_lbl\">3h ago</ion-label>\n        </div>\n      </div>\n    </div>\n\n    <ion-button (click)=\"goToNewsList('Entertainment')\" expand=\"block\" fill=\"clear\">\n      See All Entertainment\n      <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n    </ion-button>\n\n    <ion-label class=\"head_lbl\">Trending News</ion-label>\n\n    <div class=\"video_div\" *ngFor=\"let item of (news | slice :0: 3)\">\n      <ion-label class=\"time\">4 min</ion-label>\n      <video width=\"100%\" height=\"240\" controls poster=\"{{item.img}}\" >\n        <source src=\"assets/imgs/news/video.mp4\" type=\"video/mp4\">\n      </video>\n      <ion-label class=\"title_lbl\">{{item.name}}</ion-label>\n      <div class=\"flex_div\">\n        <div>\n          <img src=\"{{item.icn}}\" alt=\"\">\n        </div>\n        <div style=\"padding-left: 8px;\">\n          <ion-label class=\"top_lbl\">Star News</ion-label>\n          <ion-label class=\"light_lbl\">3h ago</ion-label>\n        </div>\n      </div>\n    </div>\n\n    <ion-button (click)=\"goToNewsList('Trending News')\" expand=\"block\" fill=\"clear\">\n      See All Trending News\n      <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n    </ion-button>\n\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/news/news-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/news/news-routing.module.ts ***!
  \***************************************************/
/*! exports provided: NewsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageRoutingModule", function() { return NewsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _news_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news.page */ "./src/app/pages/news/news.page.ts");




const routes = [
    {
        path: '',
        component: _news_page__WEBPACK_IMPORTED_MODULE_3__["NewsPage"]
    }
];
let NewsPageRoutingModule = class NewsPageRoutingModule {
};
NewsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/news/news.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/news/news.module.ts ***!
  \*******************************************/
/*! exports provided: NewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageModule", function() { return NewsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _news_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news-routing.module */ "./src/app/pages/news/news-routing.module.ts");
/* harmony import */ var _news_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news.page */ "./src/app/pages/news/news.page.ts");







let NewsPageModule = class NewsPageModule {
};
NewsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _news_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewsPageRoutingModule"]
        ],
        declarations: [_news_page__WEBPACK_IMPORTED_MODULE_6__["NewsPage"]]
    })
], NewsPageModule);



/***/ }),

/***/ "./src/app/pages/news/news.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/news/news.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n  padding: 10px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .head_lbl {\n  font-family: \"medium\";\n  display: block;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  position: relative;\n}\n.main_content_div .head_lbl ion-icon {\n  position: absolute;\n  right: 0;\n  font-size: 20px;\n}\n.main_content_div ion-slide {\n  margin-right: 7px;\n}\n.main_content_div .title_lbl {\n  font-family: \"medium\";\n  margin-top: 5px;\n  margin-bottom: 10px;\n}\n.main_content_div .back_image2 {\n  height: 140px;\n  width: 100%;\n  border-radius: 5px;\n}\n.main_content_div .flex_div {\n  margin-top: 5px;\n  display: flex;\n  align-items: center;\n}\n.main_content_div .flex_div img {\n  width: 23px;\n}\n.main_content_div .flex_div .top_lbl {\n  font-size: 14px;\n  text-align: left;\n}\n.main_content_div .flex_div .light_lbl {\n  color: gray;\n  font-size: 14px;\n  text-align: left;\n}\n.main_content_div .video_div {\n  position: relative;\n  margin-bottom: 10px;\n}\n.main_content_div .video_div .time {\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  font-size: 12px;\n}\n.main_content_div .video_div .flex_div {\n  display: flex;\n  align-items: center;\n}\n.main_content_div .video_div .flex_div img {\n  width: 23px;\n}\n.main_content_div .video_div .flex_div .top_lbl {\n  font-size: 14px;\n}\n.main_content_div .video_div .flex_div .light_lbl {\n  color: gray;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EaWdpdGFsL0RvY3VtZW50cy9UZXN0Z3JvdW5kL0tCIE1vYmlsZSBBUFAvS0JfbW9iaWxlL3NyYy9hcHAvcGFnZXMvbmV3cy9uZXdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbmV3cy9uZXdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDQ0o7QURDSTtFQUNJLGNBQUE7QUNDUjtBREVJO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQVI7QURFUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUNBWjtBREdJO0VBQ0ksaUJBQUE7QUNEUjtBRElJO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNGUjtBREtJO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0hSO0FETUk7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDSlI7QURLUTtFQUNJLFdBQUE7QUNIWjtBREtRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDSFo7QURLUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNIWjtBRE9JO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0xSO0FET1E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQ0xaO0FEUVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNOWjtBRE9ZO0VBQ0ksV0FBQTtBQ0xoQjtBRE9ZO0VBQ0ksZUFBQTtBQ0xoQjtBRE9ZO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNMaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uZXdzL25ld3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudF9kaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5oZWFkX2xibHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdtZWRpdW0nO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLXNsaWRle1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgICB9XG5cbiAgICAudGl0bGVfbGJse1xuICAgICAgICBmb250LWZhbWlseTogJ21lZGl1bSc7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICAuYmFja19pbWFnZTJ7XG4gICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuXG4gICAgLmZsZXhfZGl2e1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiAyM3B4O1xuICAgICAgICB9XG4gICAgICAgIC50b3BfbGJse1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuICAgICAgICAubGlnaHRfbGJse1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnZpZGVvX2RpdntcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgICAgIC50aW1le1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZsZXhfZGl2e1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudG9wX2xibHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGlnaHRfbGJse1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuaGVhZF9sYmwge1xuICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5oZWFkX2xibCBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1zbGlkZSB7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnRpdGxlX2xibCB7XG4gIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmFja19pbWFnZTIge1xuICBoZWlnaHQ6IDE0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IGltZyB7XG4gIHdpZHRoOiAyM3B4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC50b3BfbGJsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5saWdodF9sYmwge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm1haW5fY29udGVudF9kaXYgLnZpZGVvX2RpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC52aWRlb19kaXYgLnRpbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogNXB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudmlkZW9fZGl2IC5mbGV4X2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudmlkZW9fZGl2IC5mbGV4X2RpdiBpbWcge1xuICB3aWR0aDogMjNweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC52aWRlb19kaXYgLmZsZXhfZGl2IC50b3BfbGJsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnZpZGVvX2RpdiAuZmxleF9kaXYgLmxpZ2h0X2xibCB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/news/news.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/news/news.page.ts ***!
  \*****************************************/
/*! exports provided: NewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPage", function() { return NewsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/dummy.service */ "./src/app/services/dummy.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let NewsPage = class NewsPage {
    constructor(dummy, router) {
        this.dummy = dummy;
        this.router = router;
        this.slideOpts = {
            slidesPerView: 3,
        };
        this.images = this.dummy.images;
        this.news = this.dummy.news;
        this.reporter = this.dummy.reporter;
    }
    ngOnInit() {
    }
    goToNewsList(val) {
        const navData = {
            queryParams: {
                id: val
            }
        };
        this.router.navigate(['/news-list'], navData);
    }
};
NewsPage.ctorParameters = () => [
    { type: src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__["DummyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NewsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./news.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/news/news.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./news.page.scss */ "./src/app/pages/news/news.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__["DummyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], NewsPage);



/***/ })

}]);
//# sourceMappingURL=news-news-module-es2015.js.map