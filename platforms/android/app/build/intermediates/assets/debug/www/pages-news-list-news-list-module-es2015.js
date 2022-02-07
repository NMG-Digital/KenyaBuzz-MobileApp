(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-news-list-news-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/news-list/news-list.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/news-list/news-list.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button mode=\"md\" color=\"light\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{title}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"main_content_div\">\r\n    <div class=\"video_div\" *ngFor=\"let item of news\">\r\n      <ion-label class=\"time\">4 min</ion-label>\r\n      <video width=\"100%\" height=\"240\" controls poster=\"{{item.img}}\" >\r\n        <source src=\"assets/imgs/news/video.mp4\" type=\"video/mp4\">\r\n      </video>\r\n      <ion-label class=\"title_lbl\">{{item.name}}</ion-label>\r\n      <div class=\"flex_div\">\r\n        <div>\r\n          <img src=\"{{item.icn}}\" alt=\"\">\r\n        </div>\r\n        <div style=\"padding-left: 8px;\">\r\n          <ion-label class=\"top_lbl\">Star News</ion-label>\r\n          <ion-label class=\"light_lbl\">3h ago</ion-label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/news-list/news-list-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/news-list/news-list-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: NewsListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsListPageRoutingModule", function() { return NewsListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _news_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news-list.page */ "./src/app/pages/news-list/news-list.page.ts");




const routes = [
    {
        path: '',
        component: _news_list_page__WEBPACK_IMPORTED_MODULE_3__["NewsListPage"]
    }
];
let NewsListPageRoutingModule = class NewsListPageRoutingModule {
};
NewsListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewsListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/news-list/news-list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/news-list/news-list.module.ts ***!
  \*****************************************************/
/*! exports provided: NewsListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsListPageModule", function() { return NewsListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _news_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news-list-routing.module */ "./src/app/pages/news-list/news-list-routing.module.ts");
/* harmony import */ var _news_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news-list.page */ "./src/app/pages/news-list/news-list.page.ts");







let NewsListPageModule = class NewsListPageModule {
};
NewsListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _news_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewsListPageRoutingModule"]
        ],
        declarations: [_news_list_page__WEBPACK_IMPORTED_MODULE_6__["NewsListPage"]]
    })
], NewsListPageModule);



/***/ }),

/***/ "./src/app/pages/news-list/news-list.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/news-list/news-list.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n  padding: 10px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .title_lbl {\n  font-family: \"medium\";\n  margin-top: 5px;\n  margin-bottom: 10px;\n}\n.main_content_div .flex_div {\n  margin-top: 5px;\n  display: flex;\n  align-items: center;\n}\n.main_content_div .flex_div img {\n  width: 23px;\n}\n.main_content_div .flex_div .top_lbl {\n  font-size: 14px;\n  text-align: left;\n}\n.main_content_div .flex_div .light_lbl {\n  color: gray;\n  font-size: 14px;\n  text-align: left;\n}\n.main_content_div .video_div {\n  position: relative;\n  margin-bottom: 10px;\n}\n.main_content_div .video_div .time {\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  font-size: 12px;\n}\n.main_content_div .video_div .flex_div {\n  display: flex;\n  align-items: center;\n}\n.main_content_div .video_div .flex_div img {\n  width: 23px;\n}\n.main_content_div .video_div .flex_div .top_lbl {\n  font-size: 14px;\n}\n.main_content_div .video_div .flex_div .light_lbl {\n  color: gray;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmV3cy1saXN0L0M6XFxsYXJhZ29uXFx3d3dcXEtlbnlhQnV6ei1Nb2JpbGVBcHAvc3JjXFxhcHBcXHBhZ2VzXFxuZXdzLWxpc3RcXG5ld3MtbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL25ld3MtbGlzdC9uZXdzLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNDSjtBRENJO0VBQ0ksY0FBQTtBQ0NSO0FERUk7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0FSO0FER0k7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDRFI7QURFUTtFQUNJLFdBQUE7QUNBWjtBREVRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQVo7QURFUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNBWjtBRElJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0ZSO0FESVE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQ0ZaO0FES1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNIWjtBRElZO0VBQ0ksV0FBQTtBQ0ZoQjtBRElZO0VBQ0ksZUFBQTtBQ0ZoQjtBRElZO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNGaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uZXdzLWxpc3QvbmV3cy1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnRfZGl2e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlX2xibHtcclxuICAgICAgICBmb250LWZhbWlseTogJ21lZGl1bSc7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZsZXhfZGl2e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDogMjNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvcF9sYmx7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpZ2h0X2xibHtcclxuICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnZpZGVvX2RpdntcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICAgICAgLnRpbWV7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mbGV4X2RpdntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRvcF9sYmx7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpZ2h0X2xibHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1haW5fY29udGVudF9kaXYgLnRpdGxlX2xibCB7XG4gIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgaW1nIHtcbiAgd2lkdGg6IDIzcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLnRvcF9sYmwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLmxpZ2h0X2xibCB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudmlkZW9fZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnZpZGVvX2RpdiAudGltZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC52aWRlb19kaXYgLmZsZXhfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC52aWRlb19kaXYgLmZsZXhfZGl2IGltZyB7XG4gIHdpZHRoOiAyM3B4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnZpZGVvX2RpdiAuZmxleF9kaXYgLnRvcF9sYmwge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudmlkZW9fZGl2IC5mbGV4X2RpdiAubGlnaHRfbGJsIHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/news-list/news-list.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/news-list/news-list.page.ts ***!
  \***************************************************/
/*! exports provided: NewsListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsListPage", function() { return NewsListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/dummy.service */ "./src/app/services/dummy.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let NewsListPage = class NewsListPage {
    constructor(dummy, route) {
        this.dummy = dummy;
        this.route = route;
        this.news = this.dummy.news;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(data => {
            console.log(data);
            this.title = data.id;
        });
    }
};
NewsListPage.ctorParameters = () => [
    { type: src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__["DummyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
NewsListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./news-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/news-list/news-list.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./news-list.page.scss */ "./src/app/pages/news-list/news-list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__["DummyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], NewsListPage);



/***/ })

}]);
//# sourceMappingURL=pages-news-list-news-list-module-es2015.js.map