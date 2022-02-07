(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sports-sports-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sports/sports.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sports/sports.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <div class=\"header_div\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button color=\"light\"></ion-menu-button>\r\n        </ion-buttons>\r\n        <img src=\"assets/imgs/logo4.svg\">\r\n        <ion-button class=\"search_btn\" slot=\"end\" fill=\"clear\" size=\"small\">\r\n            <ion-icon slot=\"icon-only\" name=\"search-outline\" color=\"light\"></ion-icon>\r\n        </ion-button>\r\n    </div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"main_content_div\">\r\n        <ion-slides mode=\"ios\">\r\n            <ion-slide *ngFor=\"let item of mainSlider; let i = index\">\r\n                <div class=\"back_image bg_image\" [style.backgroundImage]=\"'url('+item+')'\">\r\n                    <ion-label>{{i+1}}/{{mainSlider?.length}}</ion-label>\r\n                </div>\r\n            </ion-slide>\r\n        </ion-slides>\r\n\r\n        <ion-label class=\"head_lbl\" (click)=\"goToCatogory('Popular Sports')\">Popular Sports <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\r\n        <ion-slides mode=\"ios\" [options]=\"slideOpts3\">\r\n            <ion-slide *ngFor=\"let item of sports\" (click)=\"goToSportsDetail(item.s_name)\">\r\n                <div class=\"back_image1 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\">\r\n                    <ion-label class=\"bold_lbl\">{{item.s_name}}</ion-label>\r\n                </div>\r\n            </ion-slide>\r\n        </ion-slides>\r\n\r\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Best of India')\">Best of India <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\r\n        <ion-slides mode=\"ios\" [options]=\"slideOpts3\">\r\n            <ion-slide *ngFor=\"let item of (sports | slice : 0: 5)\" (click)=\"goToVideo()\">\r\n                <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\">\r\n                    <ion-label class=\"live\">9 min</ion-label>\r\n                    <div class=\"play_div\">\r\n                        <ion-icon name=\"caret-forward-outline\" class=\"play\"></ion-icon>\r\n                        <ion-label class=\"name\">{{item.name}}</ion-label>\r\n                    </div>\r\n                </div>\r\n            </ion-slide>\r\n        </ion-slides>\r\n\r\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('IPL Superstar : MS Dhoni')\">IPL Superstar : MS Dhoni <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\r\n        <ion-slides mode=\"ios\" [options]=\"slideOpts3\">\r\n            <ion-slide *ngFor=\"let item of (sports | slice : 4: 8)\" (click)=\"goToVideo()\">\r\n                <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\">\r\n                    <ion-label class=\"live\">9 min</ion-label>\r\n                    <div class=\"play_div\">\r\n                        <ion-icon name=\"caret-forward-outline\" class=\"play\"></ion-icon>\r\n                        <ion-label class=\"name\">{{item.name}}</ion-label>\r\n                    </div>\r\n                </div>\r\n            </ion-slide>\r\n        </ion-slides>\r\n\r\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Best of CSK')\">Best of CSK <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\r\n        <ion-slides mode=\"ios\" [options]=\"slideOpts3\">\r\n            <ion-slide *ngFor=\"let item of (sports | slice : 0: 5)\" (click)=\"goToVideo()\">\r\n                <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\">\r\n                    <ion-label class=\"live\">9 min</ion-label>\r\n                    <div class=\"play_div\">\r\n                        <ion-icon name=\"caret-forward-outline\" class=\"play\"></ion-icon>\r\n                        <ion-label class=\"name\">{{item.name}}</ion-label>\r\n                    </div>\r\n                </div>\r\n            </ion-slide>\r\n        </ion-slides>\r\n\r\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Best of MI')\">Best of MI <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\r\n        <ion-slides mode=\"ios\" [options]=\"slideOpts3\">\r\n            <ion-slide *ngFor=\"let item of (sports | slice : 4: 8)\" (click)=\"goToVideo()\">\r\n                <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\">\r\n                    <ion-label class=\"live\">9 min</ion-label>\r\n                    <div class=\"play_div\">\r\n                        <ion-icon name=\"caret-forward-outline\" class=\"play\"></ion-icon>\r\n                        <ion-label class=\"name\">{{item.name}}</ion-label>\r\n                    </div>\r\n                </div>\r\n            </ion-slide>\r\n        </ion-slides>\r\n\r\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Best of Badminton')\">Best of Badminton <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\r\n        <ion-slides mode=\"ios\" [options]=\"slideOpts3\">\r\n            <ion-slide *ngFor=\"let item of (sports | slice : 3: 7)\" (click)=\"goToVideo()\">\r\n                <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\">\r\n                    <ion-label class=\"live\">9 min</ion-label>\r\n                    <div class=\"play_div\">\r\n                        <ion-icon name=\"caret-forward-outline\" class=\"play\"></ion-icon>\r\n                        <ion-label class=\"name\">{{item.name}}</ion-label>\r\n                    </div>\r\n                </div>\r\n            </ion-slide>\r\n        </ion-slides>\r\n\r\n    </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/sports/sports-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/sports/sports-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SportsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportsPageRoutingModule", function() { return SportsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sports_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sports.page */ "./src/app/pages/sports/sports.page.ts");




const routes = [
    {
        path: '',
        component: _sports_page__WEBPACK_IMPORTED_MODULE_3__["SportsPage"]
    }
];
let SportsPageRoutingModule = class SportsPageRoutingModule {
};
SportsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SportsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/sports/sports.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/sports/sports.module.ts ***!
  \***********************************************/
/*! exports provided: SportsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportsPageModule", function() { return SportsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _sports_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sports-routing.module */ "./src/app/pages/sports/sports-routing.module.ts");
/* harmony import */ var _sports_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sports.page */ "./src/app/pages/sports/sports.page.ts");







let SportsPageModule = class SportsPageModule {
};
SportsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sports_routing_module__WEBPACK_IMPORTED_MODULE_5__["SportsPageRoutingModule"]
        ],
        declarations: [_sports_page__WEBPACK_IMPORTED_MODULE_6__["SportsPage"]]
    })
], SportsPageModule);



/***/ }),

/***/ "./src/app/pages/sports/sports.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/sports/sports.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n  padding: 10px;\n}\n.main_content_div .back_image {\n  height: 200px;\n  width: 100%;\n  border-radius: 5px;\n  position: relative;\n  padding: 5px;\n}\n.main_content_div .back_image ion-label {\n  position: absolute;\n  right: 5px;\n  font-size: 14px;\n}\n.main_content_div .head_lbl {\n  font-family: \"medium\";\n  display: block;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  position: relative;\n}\n.main_content_div .head_lbl ion-icon {\n  position: absolute;\n  right: 0;\n  font-size: 20px;\n  color: #707070;\n}\n.main_content_div ion-slide {\n  margin-right: 7px;\n}\n.main_content_div .back_image1 {\n  height: 100px;\n  width: 100%;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.main_content_div .back_image1 .bold_lbl {\n  font-family: \"semi-bold\";\n  text-transform: uppercase;\n}\n.main_content_div .back_image2 {\n  height: 100px;\n  width: 100%;\n  border-radius: 5px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 5px;\n}\n.main_content_div .back_image2 .live {\n  text-align: right;\n  font-size: 12px;\n  font-family: \"medium\";\n}\n.main_content_div .back_image2 .play_div {\n  display: flex;\n  align-items: center;\n}\n.main_content_div .back_image2 .play_div .play {\n  font-size: 20px;\n  margin-right: 10px;\n}\n.main_content_div .back_image2 .play_div .name {\n  font-size: 14px;\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3BvcnRzL0M6XFxsYXJhZ29uXFx3d3dcXEtlbnlhQnV6ei1Nb2JpbGVBcHAvc3JjXFxhcHBcXHBhZ2VzXFxzcG9ydHNcXHNwb3J0cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Nwb3J0cy9zcG9ydHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNDSjtBRENJO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0NSO0FEQVE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDRVo7QURFSTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0FSO0FEQ1E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NaO0FERUk7RUFDSSxpQkFBQTtBQ0FSO0FER0k7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNEUjtBREdRO0VBQ0ksd0JBQUE7RUFDQSx5QkFBQTtBQ0RaO0FES0k7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUNIUjtBREtRO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNIWjtBREtRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDSFo7QURJWTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ0ZoQjtBRElZO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUNGaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zcG9ydHMvc3BvcnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnRfZGl2e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgIC5iYWNrX2ltYWdle1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5oZWFkX2xibHtcclxuICAgICAgICBmb250LWZhbWlseTogJ21lZGl1bSc7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tc2xpZGV7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJhY2tfaW1hZ2Uxe1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLmJvbGRfbGJsIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYmFja19pbWFnZTIge1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuXHJcbiAgICAgICAgLmxpdmV7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBsYXlfZGl2e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAucGxheXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmFtZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmFja19pbWFnZSB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmJhY2tfaW1hZ2UgaW9uLWxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuaGVhZF9sYmwge1xuICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5oZWFkX2xibCBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM3MDcwNzA7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tc2xpZGUge1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5iYWNrX2ltYWdlMSB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmJhY2tfaW1hZ2UxIC5ib2xkX2xibCB7XG4gIGZvbnQtZmFtaWx5OiBcInNlbWktYm9sZFwiO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmJhY2tfaW1hZ2UyIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5iYWNrX2ltYWdlMiAubGl2ZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xufVxuLm1haW5fY29udGVudF9kaXYgLmJhY2tfaW1hZ2UyIC5wbGF5X2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmFja19pbWFnZTIgLnBsYXlfZGl2IC5wbGF5IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmFja19pbWFnZTIgLnBsYXlfZGl2IC5uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/sports/sports.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/sports/sports.page.ts ***!
  \*********************************************/
/*! exports provided: SportsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportsPage", function() { return SportsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/dummy.service */ "./src/app/services/dummy.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SportsPage = class SportsPage {
    constructor(dummy, router) {
        this.dummy = dummy;
        this.router = router;
        this.mainSlider = [
            'assets/imgs/sports/sports1.jpg',
            'assets/imgs/sports/sports3.jpg',
            'assets/imgs/sports/sports4.jpg',
            'assets/imgs/sports/sports5.jpg',
            'assets/imgs/sports/sports7.jpg',
        ];
        this.slideOpts = {
            slidesPerView: 3,
        };
        this.slideOpts3 = {
            slidesPerView: 2,
        };
        this.sports = this.dummy.sports;
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
    goToCatogory(val) {
        const navData = {
            queryParams: {
                id: val
            }
        };
        this.router.navigate(['/category'], navData);
    }
    goToSportsDetail(val) {
        const navData = {
            queryParams: {
                id: val
            }
        };
        this.router.navigate(['/sports-detail'], navData);
    }
    goToVideo() {
        this.router.navigate(['/video']);
    }
};
SportsPage.ctorParameters = () => [
    { type: src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__["DummyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SportsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sports',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sports.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sports/sports.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sports.page.scss */ "./src/app/pages/sports/sports.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__["DummyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], SportsPage);



/***/ })

}]);
//# sourceMappingURL=sports-sports-module-es2015.js.map