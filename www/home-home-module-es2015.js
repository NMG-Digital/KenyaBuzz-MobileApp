(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <div class=\"header_div\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button color=\"light\"></ion-menu-button>\r\n        </ion-buttons>\r\n        <img src=\"assets/imgs/KB-white-logo.svg\">\r\n        <ion-button class=\"search_btn\" slot=\"end\" fill=\"clear\" size=\"small\">\r\n            <ion-icon slot=\"icon-only\" name=\"search-outline\" color=\"light\"></ion-icon>\r\n        </ion-button>\r\n    </div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"main_content_div\">\r\n        <!-- Hero Slider Start -->\r\n        <ion-slides mode=\"ios\">\r\n            <ion-slide *ngFor=\"let item of mainSlider; let i = index\">\r\n              <div class=\"hero_slides\">\r\n                  <ion-label>{{i+1}}/{{mainSlider?.length}}</ion-label>\r\n                  <img src={{item}} class=\"main_content_div__hero_image\">\r\n                  <h3 class=\"main_content_div__movie_title\">Venom: Let There Be Carnage</h3>\r\n              </div>\r\n            </ion-slide>\r\n        </ion-slides>\r\n        <!-- Hero Slider End -->\r\n\r\n        <!-- Now Showing Movies Start -->\r\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Top picks for you')\">Now Showing <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\r\n        <ion-slides mode=\"ios\" [options]=\"slideOpts\">\r\n            <ion-slide *ngFor=\"let featured of featuredMovies\" (click)=\"goToMovie(featured)\">\r\n                <div class=\"main_content_div__top-picks-slider\">\r\n                    <div class=\"main_content_div__top_picks\">\r\n                        <img src={{featured.movie_poster}}>\r\n                    </div>\r\n                    <button class=\"buy_ticket movies_btn\">Buy Ticket</button>\r\n                    <h5>{{featured.movie_name}}</h5>\r\n                    \r\n                </div>\r\n            </ion-slide>\r\n        </ion-slides>\r\n        <!-- Now Showing Movies End -->\r\n\r\n        <!-- Movies By Category Start -->\r\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Top picks for you')\">Movies By Category <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\r\n        \r\n        <!-- <ion-slides mode=\"ios\" [options]=\"slideOpts2\">\r\n            <ion-slide *ngFor=\"let item of  (images | slice : 0: 12)\" (click)=\"goToVideo()\">\r\n                <div class=\"flex_div\">\r\n                    <div class=\"main_content_div__category_img\">\r\n                        <div class=\"cat_group bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\r\n                    </div>\r\n                    <ion-label class=\"name\">{{item.name}}</ion-label>\r\n                </div>\r\n            </ion-slide>\r\n        </ion-slides> -->\r\n        <ion-slides mode=\"ios\" [options]=\"slideOpts2\" style=\"background-color: #282828 !important;\">\r\n            <ion-slide *ngFor=\"let cat of movieCats; index as i;\" (click)=\"goToVideo()\">\r\n                <div class=\"flex_div\" *ngIf=\"i < 12\">\r\n                    <div class=\"main_content_div__category_img\">\r\n                        <div class=\"cat_group bg_image\">{{cat.total_movies}}</div>\r\n                    </div>\r\n                    <ion-label class=\"name\">{{cat.genre}}</ion-label>\r\n                </div>\r\n            </ion-slide>\r\n        </ion-slides>\r\n        <!-- Movies By Category End -->\r\n\r\n        <!-- Ticketed Events Start -->\r\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Live News')\">Hot Events <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\r\n        \r\n        <ion-slides mode=\"ios\" [options]=\"slideOpts3\">\r\n            <ion-slide *ngFor=\"let event of ticketedEvents; index as k;\" (click)=\"goToEvent(event)\">\r\n                <div class=\"card-BG\">\r\n                    <div class=\"back_image4 bg_image card-BG__img-wrapper\">\r\n                        <img class=\"card-BG__event-poster\" [src]=\"event.poster\" [alt]=\"event.name\">\r\n                    </div>\r\n                    <button class=\"buy_ticket events_btn-lg\">Buy Ticket</button>\r\n                    <div class=\"card-BG__info-wrapper\">\r\n                        <ion-label class=\"card-BG__event_date\">{{event.start_date}}</ion-label>\r\n                        <div class=\"card-BG__location-wrapper\">\r\n                            <div class=\"card-BG__line\"></div>\r\n                            <ion-label class=\"card-BG__location\">{{event.location_name}}</ion-label>\r\n                        </div>\r\n                        <ion-label class=\"card-BG__event-title\">{{event.name}}</ion-label>\r\n                    </div>\r\n                </div>\r\n            </ion-slide>\r\n        </ion-slides>\r\n        <!-- Ticketed Events End -->\r\n    </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n  padding: 10px;\n}\n.main_content_div__hero_image {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.main_content_div__movie_title {\n  color: white;\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 100%;\n  font-size: 14px;\n  font-weight: bold;\n}\n.main_content_div__top_picks {\n  border-radius: 10px;\n  height: 150px;\n  overflow: hidden;\n}\n.main_content_div__top-picks-slider {\n  height: auto;\n  width: 100%;\n}\n.main_content_div__top-picks-slider img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.main_content_div__top-picks-slider h5 {\n  color: white;\n  margin: 0;\n  font-size: 14px;\n  transform: translateY(-50%);\n  text-align: center;\n}\n.main_content_div .hero_slides {\n  height: 250px;\n  width: 100%;\n  border-radius: 15px;\n  overflow: hidden;\n  position: relative;\n}\n.main_content_div .hero_slides::before {\n  content: \"\";\n  width: 100%;\n  height: 20%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.main_content_div .hero_slides ion-label {\n  position: absolute;\n  right: 5px;\n  font-size: 14px;\n}\n.main_content_div__category_img {\n  display: grid;\n  place-items: center;\n  height: 80px;\n  width: 80px;\n  min-width: 80px;\n  border-radius: 50%;\n  border: 1px solid var(--ion-color-dark-tint);\n}\n.main_content_div__category_img .cat_group {\n  height: 50px;\n  width: 50px;\n  min-width: 50px;\n  border-radius: 50%;\n  align-self: end;\n}\n.main_content_div .head_lbl {\n  font-family: \"medium\";\n  display: block;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  position: relative;\n}\n.main_content_div .head_lbl ion-icon {\n  position: absolute;\n  right: 0;\n  font-size: 20px;\n  color: #707070;\n}\n.main_content_div ion-slide {\n  margin-right: 7px;\n}\n.main_content_div .back_image2 {\n  height: 150px;\n  width: 100%;\n  border-radius: 5px;\n}\n.main_content_div .back_image3 {\n  height: 80px;\n  width: 80px;\n  min-width: 80px;\n  border: 3px solid var(--ion-color-primary);\n  border-radius: 50%;\n}\n.main_content_div .back_image4 {\n  height: 100px;\n  width: 100%;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.main_content_div .back_image4 .bold_lbl {\n  font-family: \"semi-bold\";\n  text-transform: uppercase;\n}\n.main_content_div .flex_div {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n  padding: 5px;\n}\n.main_content_div .flex_div .name {\n  font-size: 12px;\n  margin-top: 5px;\n}\n.main_content_div .flex_div .live {\n  font-size: 12px;\n  font-family: \"medium\";\n  text-align: left;\n}\n.main_content_div .flex_div .live2 {\n  font-size: 12px;\n  font-family: \"medium\";\n  text-align: right;\n}\n.main_content_div .flex_div .play_div {\n  display: flex;\n  align-items: center;\n}\n.main_content_div .flex_div .play_div .play {\n  font-size: 20px;\n  margin-right: 1px;\n}\n.main_content_div .flex_div .play_div .name {\n  font-size: 14px;\n  margin-top: 0px;\n}\n.card-BG {\n  padding: 5px;\n  width: 100%;\n  height: 210px;\n  background-color: var(--ion-color-events-contrast);\n  border-radius: 7px;\n}\n.card-BG__info-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding-left: 5px;\n  width: 100%;\n}\n.card-BG__img-wrapper {\n  border-radius: 10px;\n  overflow: hidden;\n}\n.card-BG__event-poster {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.card-BG__event_date {\n  display: block;\n  font-size: 12px;\n  text-align: left;\n  transform: translateY(-50%);\n  color: var(--ion-color-step-450);\n}\n.card-BG__location-wrapper {\n  display: flex;\n  flex-direction: row;\n  gap: 5px;\n  align-items: center;\n  justify-content: flex-start;\n}\n.card-BG__line {\n  width: 10px;\n  height: 2px;\n  background-color: var(--ion-color-events);\n}\n.card-BG__location {\n  font-size: 12px;\n  font-weight: bold;\n  color: var(--ion-color-events);\n}\n.card-BG__event-title {\n  display: block;\n  font-size: 16px;\n  text-align: left;\n  color: var(--ion-color-step-900);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcbGFyYWdvblxcd3d3XFxLZW55YUJ1enotTW9iaWxlQXBwL3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQ0NGO0FEQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNDSjtBREVFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNBSjtBREdFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNESjtBRElFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNGSjtBRElJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDRk47QURLSTtFQUNFLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNITjtBRE9FO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNMSjtBRE9JO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLG9DQUFBO0FDTE47QURRSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNOTjtBRFVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtBQ1JKO0FEVUk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFFQSxrQkFBQTtFQUNBLGVBQUE7QUNUTjtBRGVFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDYko7QURjSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDWk47QURlRTtFQUNFLGlCQUFBO0FDYko7QURnQkU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDZEo7QURpQkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0FDZko7QURrQkU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNoQko7QURrQkk7RUFDRSx3QkFBQTtFQUNBLHlCQUFBO0FDaEJOO0FEb0JFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNsQko7QURvQkk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ2xCTjtBRHFCSTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDbkJOO0FEc0JJO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNwQk47QUR1Qkk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNyQk47QURzQk07RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNwQlI7QURzQk07RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ3BCUjtBRDBCQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtEQUFBO0VBQ0Esa0JBQUE7QUN2QkY7QUR5QkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ3ZCSjtBRDBCRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUN4Qko7QUQyQkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUN6Qko7QUQ0QkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtBQzFCSjtBRDZCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FDM0JKO0FEOEJFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSx5Q0FBQTtBQzVCSjtBRCtCRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FDN0JKO0FEZ0NFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FDOUJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnRfZGl2IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAmX19oZXJvX2ltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG5cclxuICAmX19tb3ZpZV90aXRsZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgJl9fdG9wX3BpY2tzIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gICZfX3RvcC1waWNrcy1zbGlkZXIge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaDUge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5oZXJvX3NsaWRlcyB7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAyMCU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogNXB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19jYXRlZ29yeV9pbWcge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIG1pbi13aWR0aDogODBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xyXG5cclxuICAgIC5jYXRfZ3JvdXAge1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICBtaW4td2lkdGg6IDUwcHg7XHJcbiAgICAgIC8vIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBhbGlnbi1zZWxmOiBlbmQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAuaGVhZF9sYmwge1xyXG4gICAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgfVxyXG4gIH1cclxuICBpb24tc2xpZGUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgfVxyXG5cclxuICAuYmFja19pbWFnZTIge1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuXHJcbiAgLmJhY2tfaW1hZ2UzIHtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgbWluLXdpZHRoOiA4MHB4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmJhY2tfaW1hZ2U0IHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgLmJvbGRfbGJsIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwic2VtaS1ib2xkXCI7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZmxleF9kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuXHJcbiAgICAubmFtZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5saXZlIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICAubGl2ZTIge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAucGxheV9kaXYge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAucGxheSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1CRyB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWV2ZW50cy1jb250cmFzdCk7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG5cclxuICAmX19pbmZvLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJl9faW1nLXdyYXBwZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAmX19ldmVudC1wb3N0ZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcblxyXG4gICZfX2V2ZW50X2RhdGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTQ1MCk7XHJcbiAgfVxyXG5cclxuICAmX19sb2NhdGlvbi13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZ2FwOiA1cHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgJl9fbGluZSB7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWV2ZW50cyk7XHJcbiAgfVxyXG5cclxuICAmX19sb2NhdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZXZlbnRzKTtcclxuICB9XHJcblxyXG4gICZfX2V2ZW50LXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC05MDApO1xyXG4gIH1cclxufVxyXG4iLCIubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXZfX2hlcm9faW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2X19tb3ZpZV90aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2X190b3BfcGlja3Mge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm1haW5fY29udGVudF9kaXZfX3RvcC1waWNrcy1zbGlkZXIge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haW5fY29udGVudF9kaXZfX3RvcC1waWNrcy1zbGlkZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4ubWFpbl9jb250ZW50X2Rpdl9fdG9wLXBpY2tzLXNsaWRlciBoNSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmhlcm9fc2xpZGVzIHtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5oZXJvX3NsaWRlczo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xufVxuLm1haW5fY29udGVudF9kaXYgLmhlcm9fc2xpZGVzIGlvbi1sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1haW5fY29udGVudF9kaXZfX2NhdGVnb3J5X2ltZyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIG1pbi13aWR0aDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2X19jYXRlZ29yeV9pbWcgLmNhdF9ncm91cCB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIG1pbi13aWR0aDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbGlnbi1zZWxmOiBlbmQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuaGVhZF9sYmwge1xuICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5oZWFkX2xibCBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM3MDcwNzA7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tc2xpZGUge1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5iYWNrX2ltYWdlMiB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmFja19pbWFnZTMge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmJhY2tfaW1hZ2U0IHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmFja19pbWFnZTQgLmJvbGRfbGJsIHtcbiAgZm9udC1mYW1pbHk6IFwic2VtaS1ib2xkXCI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5saXZlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAubGl2ZTIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAucGxheV9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5wbGF5X2RpdiAucGxheSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLnBsYXlfZGl2IC5uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi5jYXJkLUJHIHtcbiAgcGFkZGluZzogNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWV2ZW50cy1jb250cmFzdCk7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cbi5jYXJkLUJHX19pbmZvLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5jYXJkLUJHX19pbWctd3JhcHBlciB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY2FyZC1CR19fZXZlbnQtcG9zdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uY2FyZC1CR19fZXZlbnRfZGF0ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTQ1MCk7XG59XG4uY2FyZC1CR19fbG9jYXRpb24td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGdhcDogNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4uY2FyZC1CR19fbGluZSB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWV2ZW50cyk7XG59XG4uY2FyZC1CR19fbG9jYXRpb24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWV2ZW50cyk7XG59XG4uY2FyZC1CR19fZXZlbnQtdGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtOTAwKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/dummy.service */ "./src/app/services/dummy.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");






let HomePage = class HomePage {
    constructor(dataService, apiService, dummy, router) {
        this.dataService = dataService;
        this.apiService = apiService;
        this.dummy = dummy;
        this.router = router;
        this.dateToday = null;
        this.featuredMoviesLoading = true;
        this.movieCatsLoaded = false;
        this.movieCats = [];
        this.ticketedEventsLoaded = false;
        this.ticketedEvents = [];
        this.l_strg = null;
        this.slideOpts = {
            slidesPerView: 3,
        };
        this.slideOpts2 = {
            slidesPerView: 4,
        };
        this.slideOpts3 = {
            slidesPerView: 2,
        };
        this.mainSlider = [
            'assets/imgs/landscape_imgs/1.jpg',
            'assets/imgs/landscape_imgs/2.jpg',
            'assets/imgs/landscape_imgs/3.jpg',
            'assets/imgs/landscape_imgs/4.jpg',
            'assets/imgs/landscape_imgs/5.png',
        ];
        this.dateToday = this.dataService.dateToday;
        let l_strg = this.apiService.getEndpoints();
        this.l_strg = l_strg.local_storage;
        this.images = this.dummy.images;
        this.sports = this.dummy.sports;
        this.animals = this.dummy.animal;
        this.genrens = this.dummy.genrens;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.checkFeaturedMovies();
            yield this.checkMovieCategories();
            yield this.getTicketedEvents();
        });
    }
    goToMovie(movie) {
        this.router.navigate(['/view-movie/' + movie.urlify], { state: { data: movie } });
    }
    goToEvent(evnt) {
        this.router.navigate(['/view-event/' + evnt.slug], { state: { data: evnt } });
    }
    goTovideoList(val) {
        const navData = {
            queryParams: {
                id: val
            }
        };
        this.router.navigate(['/video-list'], navData);
    }
    goToCatList(val) {
        const navData = {
            queryParams: {
                id: val
            }
        };
        this.router.navigate(['/category-list'], navData);
    }
    goToCatogory(val) {
        const navData = {
            queryParams: {
                id: val
            }
        };
        this.router.navigate(['/category'], navData);
    }
    checkFeaturedMovies() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let featuredMoviesStore = localStorage.getItem(this.l_strg.movies.featured);
            // console.log('Featured movies in local ?',featuredMoviesStore);
            if (featuredMoviesStore) {
                let featuredMoviesData = JSON.parse(featuredMoviesStore);
                // console.log('Parsed Featured Movies >',featuredMoviesData);
                if (Object.keys(featuredMoviesData.featured_movies).length == 0 || featuredMoviesData.date != this.dateToday) {
                    yield this.getFeaturedMovies();
                }
                else {
                    this.featuredMovies = featuredMoviesData.featured_movies;
                    // console.log('this.featuredMovies before >',this.featuredMovies);
                    this.featuredMovies.forEach((movie) => {
                        let genres = [];
                        if (movie.api_data != null) {
                            // console.log('Raw Movie >',movie);
                            // console.log('Raw Genres >',movie.api_data.genres);
                            if (Array.isArray(movie.api_data.genres)) {
                                for (let i = 0; i < movie.api_data.genres.length; i++) {
                                    if (i < 4) {
                                        genres.push(movie.api_data.genres[i].name);
                                    }
                                }
                                movie.genres = genres.join(' | ');
                            }
                            else {
                                movie.genres = '-';
                            }
                            movie.movie_poster = (movie.api_data.poster_path != null ? 'https://image.tmdb.org/t/p/w342' + movie.api_data.poster_path : 'https://www.kenyabuzz.com/public' + movie.customposter);
                        }
                        else {
                            movie.movie_poster = 'https://www.kenyabuzz.com/public' + movie.customposter;
                        }
                    });
                    this.featuredMoviesLoading = false;
                    console.log('this.featuredMovies after >', this.featuredMovies);
                }
            }
            else {
                // console.log('No Featured Movies in local, calling function...');
                this.getFeaturedMovies();
            }
        });
    }
    getFeaturedMovies() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // fetch the movie details
            let endpoints = this.apiService.getEndpoints();
            yield this.apiService.get(endpoints.movies.featured_movies).subscribe(response => {
                if ('data' in response) {
                    // console.log('featured movies resp >',response);
                    if (Array.isArray(response.data)) { // featured movies from local storage
                        this.featuredMovies = response.data;
                        this.featuredMovies.forEach(movie => {
                            if (movie.api_data != null) {
                                if (Array.isArray(movie.api_data.genres)) {
                                    let genres = [];
                                    for (let i = 0; i < movie.api_data.genres.length; i++) {
                                        if (i < 4) {
                                            genres.push(movie.api_data.genres[i].name);
                                        }
                                    }
                                    movie.genres = genres.join(' | ');
                                }
                                else {
                                    movie.genres = '-';
                                }
                                movie.movie_poster = (movie.api_data.poster_path != null ? 'https://image.tmdb.org/t/p/w342' + movie.api_data.poster_path : 'https://image.tmdb.org/t/p/w342');
                            }
                            else {
                                movie.movie_poster = 'https://www.kenyabuzz.com/public' + movie.customposter;
                                movie.genres = (movie.genre ? movie.genre : '-');
                            }
                        });
                        // console.log('this.featuredMovies complete >',this.featuredMovies);
                    }
                }
                else {
                    console.log('Featured Movies Error Response >', response);
                }
            }, error => { console.log('Featured Movies Err >', error); });
        });
    }
    checkMovieCategories() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            /* check local storage first or default to api */
            let movieCatsStore = localStorage.getItem(this.l_strg.movies.movie_cats);
            if (movieCatsStore) {
                try {
                    let catsData = JSON.parse(movieCatsStore);
                    if (Object.keys(catsData.movie_categories).length == 0 || catsData.date != this.dateToday) {
                        /* call api */ yield this.getMovieCategories();
                    }
                    else {
                        this.movieCats = catsData.movie_categories;
                        this.movieCatsLoaded = true;
                    }
                }
                catch (e) {
                    console.log('Error Parsing JSON. Fetching afresh...', e);
                    yield this.getMovieCategories();
                }
            }
            else {
                /* default to api */ yield this.getMovieCategories();
            }
        });
    }
    getMovieCategories() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.dataService.returnMovieCategories().subscribe((resp) => {
                if (resp.response == "success") {
                    if ('data' in resp) {
                        this.movieCats = []; // clear it for fresh data
                        let movieCatsPayload = {
                            date: this.dateToday,
                            movie_categories: resp.data
                        };
                        this.movieCats = resp.data;
                        this.movieCatsLoaded = true;
                        /* save to local storage */
                        localStorage.setItem(this.l_strg.events.featured, JSON.stringify(movieCatsPayload));
                    }
                }
            });
        });
    }
    getTicketedEvents() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.dataService.returnTicketedEvents().subscribe((resp) => {
                if (resp.response == "success") {
                    if ('data' in resp) {
                        this.ticketedEvents = []; // clear it for fresh data
                        this.ticketedEvents = resp.data;
                        this.ticketedEvents.forEach((event) => {
                            event.poster = (event.poster ? 'https://www.kenyabuzz.com/public' + event.poster : null);
                            event.start_date = (event.start_date ? this.dataService.readableDate(event.start_date) : null);
                        });
                        this.ticketedEventsLoaded = true;
                    }
                }
            });
        });
    }
};
HomePage.ctorParameters = () => [
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_4__["DummyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
        src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
        src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_4__["DummyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map