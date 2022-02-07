(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news-news-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/news/news.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/news/news.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <div class=\"header_div\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button color=\"light\"></ion-menu-button>\r\n        </ion-buttons>\r\n        <img src=\"assets/imgs/logo4.svg\">\r\n        <ion-button class=\"search_btn\" slot=\"end\" fill=\"clear\" size=\"small\">\r\n            <ion-icon slot=\"icon-only\" name=\"search-outline\" color=\"light\"></ion-icon>\r\n        </ion-button>\r\n    </div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"main_content_div\">\r\n    <ion-label class=\"head_lbl\">Live News</ion-label>\r\n    <ion-slides mode=\"ios\" [options]=\"slideOpts\">\r\n      <ion-slide *ngFor=\"let item of reporter\">\r\n        <div style=\"width: 100%;\">\r\n        <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\r\n          <div class=\"flex_div\">\r\n            <div>\r\n              <img src=\"{{item.icn}}\" alt=\"\">\r\n            </div>\r\n            <div style=\"padding-left: 5px;\">\r\n              <ion-label class=\"top_lbl\">Star News</ion-label>\r\n              <ion-label class=\"light_lbl\">3h ago</ion-label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ion-slide>\r\n    </ion-slides>\r\n\r\n    <ion-label class=\"head_lbl\">Coronavirus Crisis <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\r\n\r\n    <div class=\"video_div\" *ngFor=\"let item of (news | slice :0: 3)\">\r\n      <ion-label class=\"time\">4 min</ion-label>\r\n      <video width=\"100%\" height=\"240\" controls poster=\"{{item.img}}\" >\r\n        <source src=\"assets/imgs/news/video.mp4\" type=\"video/mp4\">\r\n      </video>\r\n      <ion-label class=\"title_lbl\">{{item.name}}</ion-label>\r\n      <div class=\"flex_div\">\r\n        <div>\r\n          <img src=\"{{item.icn}}\" alt=\"\">\r\n        </div>\r\n        <div style=\"padding-left: 8px;\">\r\n          <ion-label class=\"top_lbl\">Star News</ion-label>\r\n          <ion-label class=\"light_lbl\">3h ago</ion-label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <ion-button (click)=\"goToNewsList('Coronavirus Crisis')\" expand=\"block\" fill=\"clear\">\r\n      See All Coronavirus Crisis\r\n      <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\r\n    </ion-button>\r\n\r\n    <ion-label class=\"head_lbl\">Entertainment <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\r\n\r\n    <div class=\"video_div\" *ngFor=\"let item of (news | slice :3: 6)\">\r\n      <ion-label class=\"time\">4 min</ion-label>\r\n      <video width=\"100%\" height=\"240\" controls poster=\"{{item.img}}\" >\r\n        <source src=\"assets/imgs/news/video.mp4\" type=\"video/mp4\">\r\n      </video>\r\n      <ion-label class=\"title_lbl\">{{item.name}}</ion-label>\r\n      <div class=\"flex_div\">\r\n        <div>\r\n          <img src=\"{{item.icn}}\" alt=\"\">\r\n        </div>\r\n        <div style=\"padding-left: 8px;\">\r\n          <ion-label class=\"top_lbl\">Star News</ion-label>\r\n          <ion-label class=\"light_lbl\">3h ago</ion-label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <ion-button (click)=\"goToNewsList('Entertainment')\" expand=\"block\" fill=\"clear\">\r\n      See All Entertainment\r\n      <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\r\n    </ion-button>\r\n\r\n    <ion-label class=\"head_lbl\">Trending News</ion-label>\r\n\r\n    <div class=\"video_div\" *ngFor=\"let item of (news | slice :0: 3)\">\r\n      <ion-label class=\"time\">4 min</ion-label>\r\n      <video width=\"100%\" height=\"240\" controls poster=\"{{item.img}}\" >\r\n        <source src=\"assets/imgs/news/video.mp4\" type=\"video/mp4\">\r\n      </video>\r\n      <ion-label class=\"title_lbl\">{{item.name}}</ion-label>\r\n      <div class=\"flex_div\">\r\n        <div>\r\n          <img src=\"{{item.icn}}\" alt=\"\">\r\n        </div>\r\n        <div style=\"padding-left: 8px;\">\r\n          <ion-label class=\"top_lbl\">Star News</ion-label>\r\n          <ion-label class=\"light_lbl\">3h ago</ion-label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <ion-button (click)=\"goToNewsList('Trending News')\" expand=\"block\" fill=\"clear\">\r\n      See All Trending News\r\n      <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\r\n    </ion-button>\r\n\r\n  </div>\r\n</ion-content>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n  padding: 10px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .head_lbl {\n  font-family: \"medium\";\n  display: block;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  position: relative;\n}\n.main_content_div .head_lbl ion-icon {\n  position: absolute;\n  right: 0;\n  font-size: 20px;\n}\n.main_content_div ion-slide {\n  margin-right: 7px;\n}\n.main_content_div .title_lbl {\n  font-family: \"medium\";\n  margin-top: 5px;\n  margin-bottom: 10px;\n}\n.main_content_div .back_image2 {\n  height: 140px;\n  width: 100%;\n  border-radius: 5px;\n}\n.main_content_div .flex_div {\n  margin-top: 5px;\n  display: flex;\n  align-items: center;\n}\n.main_content_div .flex_div img {\n  width: 23px;\n}\n.main_content_div .flex_div .top_lbl {\n  font-size: 14px;\n  text-align: left;\n}\n.main_content_div .flex_div .light_lbl {\n  color: gray;\n  font-size: 14px;\n  text-align: left;\n}\n.main_content_div .video_div {\n  position: relative;\n  margin-bottom: 10px;\n}\n.main_content_div .video_div .time {\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  font-size: 12px;\n}\n.main_content_div .video_div .flex_div {\n  display: flex;\n  align-items: center;\n}\n.main_content_div .video_div .flex_div img {\n  width: 23px;\n}\n.main_content_div .video_div .flex_div .top_lbl {\n  font-size: 14px;\n}\n.main_content_div .video_div .flex_div .light_lbl {\n  color: gray;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmV3cy9DOlxcbGFyYWdvblxcd3d3XFxLZW55YUJ1enotTW9iaWxlQXBwL3NyY1xcYXBwXFxwYWdlc1xcbmV3c1xcbmV3cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL25ld3MvbmV3cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0NKO0FEQ0k7RUFDSSxjQUFBO0FDQ1I7QURFSTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0FSO0FERVE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FDQVo7QURHSTtFQUNJLGlCQUFBO0FDRFI7QURJSTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDRlI7QURLSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNIUjtBRE1JO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0pSO0FES1E7RUFDSSxXQUFBO0FDSFo7QURLUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0haO0FES1E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSFo7QURPSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNMUjtBRE9RO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUNMWjtBRFFRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDTlo7QURPWTtFQUNJLFdBQUE7QUNMaEI7QURPWTtFQUNJLGVBQUE7QUNMaEI7QURPWTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDTGhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbmV3cy9uZXdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnRfZGl2e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRfbGJse1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlvbi1zbGlkZXtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgIH1cclxuXHJcbiAgICAudGl0bGVfbGJse1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYmFja19pbWFnZTJ7XHJcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZsZXhfZGl2e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDogMjNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvcF9sYmx7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpZ2h0X2xibHtcclxuICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnZpZGVvX2RpdntcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICAgICAgLnRpbWV7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mbGV4X2RpdntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRvcF9sYmx7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpZ2h0X2xibHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1haW5fY29udGVudF9kaXYgLmhlYWRfbGJsIHtcbiAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuaGVhZF9sYmwgaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tc2xpZGUge1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC50aXRsZV9sYmwge1xuICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmJhY2tfaW1hZ2UyIHtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiBpbWcge1xuICB3aWR0aDogMjNweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAudG9wX2xibCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAubGlnaHRfbGJsIHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC52aWRlb19kaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudmlkZW9fZGl2IC50aW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnZpZGVvX2RpdiAuZmxleF9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLnZpZGVvX2RpdiAuZmxleF9kaXYgaW1nIHtcbiAgd2lkdGg6IDIzcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudmlkZW9fZGl2IC5mbGV4X2RpdiAudG9wX2xibCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC52aWRlb19kaXYgLmZsZXhfZGl2IC5saWdodF9sYmwge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */");

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