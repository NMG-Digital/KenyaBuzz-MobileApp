(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-video-video-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/video/video.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/video/video.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button mode=\"md\" color=\"light\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>{{movie.movie_name}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"main_content_div\">\r\n\r\n        <div class=\"video_div\">\r\n            <video width=\"100%\" height=\"240\" controls poster=\"assets/imgs/news/news1.jpg\">\r\n                <source src=\"assets/imgs/news/video.mp4\" type=\"video/mp4\">\r\n            </video>\r\n        </div>\r\n\r\n        <div class=\"cont_div\">\r\n            <div class=\"flex_div\">\r\n              <div class=\"back_image bg_image\" [style.backgroundImage]=\"'url(assets/imgs/news/news1.jpg)'\"></div>\r\n              <div class=\"content_div\">\r\n                <ion-label class=\"title_lbl\">{{movie.movie_name}}</ion-label>\r\n                <ion-label class=\"light_lbl\">{{movie.genres}}</ion-label>\r\n                <ion-label class=\"light_lbl\">2010</ion-label>\r\n              </div>\r\n            </div>\r\n\r\n            <ion-label class=\"detail_lbl\">\r\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry.\r\n                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s\r\n            </ion-label>\r\n            <ion-label class=\"see_more\">See More</ion-label>\r\n\r\n            <ion-label class=\"gray_lbl\">Lorem Ipsum is simply dummy text of the printing and typesetting</ion-label>\r\n\r\n            <ion-grid fixed>\r\n              <ion-row>\r\n                <ion-col size=\"4\">\r\n                  <ion-button expand=\"block\" size=\"small\">\r\n                    <ion-icon slot=\"start\" name=\"arrow-down-sharp\"></ion-icon>\r\n                    Download\r\n                  </ion-button>\r\n                </ion-col>\r\n                <ion-col size=\"4\">\r\n                  <ion-button expand=\"block\" size=\"small\">\r\n                    <ion-icon slot=\"start\" name=\"add-sharp\"></ion-icon>\r\n                    Watchlist\r\n                  </ion-button>\r\n                </ion-col>\r\n                <ion-col size=\"4\">\r\n                  <ion-button expand=\"block\" size=\"small\">\r\n                    <ion-icon slot=\"start\" name=\"arrow-redo-sharp\"></ion-icon>\r\n                    Share\r\n                  </ion-button>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n\r\n            <ion-label class=\"head_lbl\">Trailers</ion-label>\r\n\r\n            <div class=\"flex_div2\">\r\n                <div class=\"back_image4 bg_image\" [style.backgroundImage]=\"'url(assets/imgs/news/news3.jpg)'\"></div>\r\n                <div class=\"play_div\">\r\n                    <ion-icon name=\"caret-forward-outline\" class=\"play\"></ion-icon>\r\n                    <ion-label class=\"name\">Watch Trailer</ion-label>\r\n                </div>\r\n            </div>\r\n\r\n            <ion-label class=\"head_lbl\" (click)=\"goTovideoList('You may also like')\">You may also like \r\n                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n            </ion-label>\r\n            <ion-slides mode=\"ios\" [options]=\"slideOpts\">\r\n                <ion-slide *ngFor=\"let item of images\">\r\n                    <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\r\n                </ion-slide>\r\n            </ion-slides>\r\n        </div>\r\n    </div>\r\n\r\n    =================\r\n\r\n    <div class=\"movie_hero\">\r\n      \r\n    </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/video/video-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/video/video-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: VideoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPageRoutingModule", function() { return VideoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _video_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video.page */ "./src/app/pages/video/video.page.ts");




const routes = [
    {
        path: '',
        component: _video_page__WEBPACK_IMPORTED_MODULE_3__["VideoPage"]
    }
];
let VideoPageRoutingModule = class VideoPageRoutingModule {
};
VideoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VideoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/video/video.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/video/video.module.ts ***!
  \*********************************************/
/*! exports provided: VideoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPageModule", function() { return VideoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _video_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./video-routing.module */ "./src/app/pages/video/video-routing.module.ts");
/* harmony import */ var _video_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video.page */ "./src/app/pages/video/video.page.ts");







let VideoPageModule = class VideoPageModule {
};
VideoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _video_routing_module__WEBPACK_IMPORTED_MODULE_5__["VideoPageRoutingModule"],
        ],
        declarations: [_video_page__WEBPACK_IMPORTED_MODULE_6__["VideoPage"]]
    })
], VideoPageModule);



/***/ }),

/***/ "./src/app/pages/video/video.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/video/video.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .video_div {\n  position: relative;\n  margin-bottom: 10px;\n}\n.main_content_div .cont_div {\n  padding: 10px;\n}\n.main_content_div .flex_div {\n  display: flex;\n}\n.main_content_div .flex_div .back_image {\n  height: 70px;\n  width: 60px;\n  border-radius: 5px;\n  min-width: 60px;\n}\n.main_content_div .flex_div .content_div {\n  padding-left: 10px;\n}\n.main_content_div .flex_div .content_div .title_lbl {\n  font-family: \"medium\";\n  margin-bottom: 5px;\n}\n.main_content_div .flex_div .content_div .light_lbl {\n  color: gray;\n  margin-bottom: 5px;\n}\n.main_content_div .detail_lbl {\n  margin-top: 10px;\n  font-size: 15px;\n}\n.main_content_div .see_more {\n  text-align: right;\n  font-size: 15px;\n  color: gray;\n}\n.main_content_div .gray_lbl {\n  color: gray;\n  font-size: 13px;\n}\n.main_content_div ion-button {\n  --background: #202020;\n  --border-radius: 3px;\n  height: 35px;\n  font-size: 12px;\n}\n.main_content_div .head_lbl {\n  font-family: \"medium\";\n  display: block;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  position: relative;\n}\n.main_content_div .head_lbl ion-icon {\n  position: absolute;\n  right: 0;\n  font-size: 20px;\n  color: #707070;\n}\n.main_content_div .flex_div2 {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  position: relative;\n}\n.main_content_div .flex_div2 .back_image4 {\n  height: 100px;\n  width: 165px;\n  border-radius: 5px;\n}\n.main_content_div .flex_div2 .name {\n  font-size: 12px;\n  margin-top: 5px;\n}\n.main_content_div .flex_div2 .bold_lbl {\n  font-family: \"medium\";\n  position: absolute;\n  top: 75%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-transform: uppercase;\n}\n.main_content_div .flex_div2 .play_div {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  bottom: 0;\n}\n.main_content_div .flex_div2 .play_div .play {\n  font-size: 20px;\n  margin-right: 10px;\n}\n.main_content_div .flex_div2 .play_div .name {\n  font-size: 14px;\n  margin-top: 0px;\n}\n.main_content_div ion-slide {\n  margin-right: 7px;\n}\n.main_content_div .back_image2 {\n  height: 140px;\n  width: 100%;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlkZW8vQzpcXGxhcmFnb25cXHd3d1xcS2VueWFCdXp6LU1vYmlsZUFwcC9zcmNcXGFwcFxccGFnZXNcXHZpZGVvXFx2aWRlby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3ZpZGVvL3ZpZGVvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjtBRENJO0VBQ0ksY0FBQTtBQ0NSO0FERUk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDQVI7QURHSTtFQUNJLGFBQUE7QUNEUjtBRElJO0VBQ0ksYUFBQTtBQ0ZSO0FER1E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0RaO0FER1E7RUFDSSxrQkFBQTtBQ0RaO0FER1k7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0FDRGhCO0FER1k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNEaEI7QURLSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ0hSO0FES0k7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDSFI7QURLSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDSFI7QURNSTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0pSO0FET0k7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNMUjtBRE9RO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNMWjtBRFNJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDUFI7QURTUTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNQWjtBRFVRO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUNSWjtBRFdRO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtBQ1RaO0FEWVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNWWjtBRFdZO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDVGhCO0FEV1k7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQ1RoQjtBRGNJO0VBQ0ksaUJBQUE7QUNaUjtBRGVJO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ2JSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdmlkZW8vdmlkZW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudF9kaXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC52aWRlb19kaXZ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRfZGl2e1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZsZXhfZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLmJhY2tfaW1hZ2V7XHJcbiAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiA2MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGVudF9kaXZ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuXHJcbiAgICAgICAgICAgIC50aXRsZV9sYmx7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ21lZGl1bSc7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpZ2h0X2xibHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRldGFpbF9sYmx7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuc2VlX21vcmV7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgfVxyXG4gICAgLmdyYXlfbGJse1xyXG4gICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzIwMjAyMDtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5oZWFkX2xibHtcclxuICAgICAgICBmb250LWZhbWlseTogJ21lZGl1bSc7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBcclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZsZXhfZGl2MntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAuYmFja19pbWFnZTR7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNjVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5hbWV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJvbGRfbGJse1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ21lZGl1bSc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA3NSU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wbGF5X2RpdntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIC5wbGF5e1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uYW1le1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1zbGlkZXtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgIH1cclxuXHJcbiAgICAuYmFja19pbWFnZTJ7XHJcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcbn0iLCIubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudmlkZW9fZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRfZGl2IHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLmJhY2tfaW1hZ2Uge1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1pbi13aWR0aDogNjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAuY29udGVudF9kaXYge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLmNvbnRlbnRfZGl2IC50aXRsZV9sYmwge1xuICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5jb250ZW50X2RpdiAubGlnaHRfbGJsIHtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXRhaWxfbGJsIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnNlZV9tb3JlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IGdyYXk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZ3JheV9sYmwge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzIwMjAyMDtcbiAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIGhlaWdodDogMzVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmhlYWRfbGJsIHtcbiAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuaGVhZF9sYmwgaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjNzA3MDcwO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2MiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYyIC5iYWNrX2ltYWdlNCB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxNjVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2MiAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2MiAuYm9sZF9sYmwge1xuICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDc1JTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdjIgLnBsYXlfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYyIC5wbGF5X2RpdiAucGxheSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2MiAucGxheV9kaXYgLm5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1zbGlkZSB7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmJhY2tfaW1hZ2UyIHtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/video/video.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/video/video.page.ts ***!
  \*******************************************/
/*! exports provided: VideoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPage", function() { return VideoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/dummy.service */ "./src/app/services/dummy.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let VideoPage = class VideoPage {
    constructor(dummy, router) {
        this.dummy = dummy;
        this.router = router;
        this.slideOpts = {
            slidesPerView: 3,
        };
        this.images = this.dummy.images;
        // if(this.router.getCurrentNavigation().extras.state && "data" in this.router.getCurrentNavigation().extras.state) {
        //   this.movie = this.router.getCurrentNavigation().extras.state.data;
        //   console.log(this.movie);
        // } else {
        //   this.router.navigate(['/home']);
        // }
        this.movie = this.router.getCurrentNavigation().extras.state.data;
        console.log(this.movie);
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
};
VideoPage.ctorParameters = () => [
    { type: src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__["DummyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
VideoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-video',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./video.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/video/video.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./video.page.scss */ "./src/app/pages/video/video.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__["DummyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], VideoPage);



/***/ })

}]);
//# sourceMappingURL=pages-video-video-module-es2015.js.map