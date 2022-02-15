function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <div class=\"header_div\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button color=\"light\"></ion-menu-button>\n        </ion-buttons>\n        <img src=\"assets/imgs/KB-white-logo.svg\">\n        <ion-button class=\"search_btn\" slot=\"end\" fill=\"clear\" size=\"small\">\n            <ion-icon slot=\"icon-only\" name=\"search-outline\" color=\"light\"></ion-icon>\n        </ion-button>\n    </div>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_content_div\">\n        <!-- Hero Slider Start -->\n        <ion-slides mode=\"ios\">\n            <ion-slide *ngFor=\"let item of mainSlider; let i = index\">\n              <div class=\"hero_slides\">\n                  <ion-label>{{i+1}}/{{mainSlider?.length}}</ion-label>\n                  <img src={{item}} class=\"main_content_div__hero_image\">\n                  <h3 class=\"main_content_div__movie_title\">Venom: Let There Be Carnage</h3>\n              </div>\n            </ion-slide>\n        </ion-slides>\n        <!-- Hero Slider End -->\n\n        <!-- Now Showing Movies Start -->\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Top picks for you')\">Now Showing <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\n        <ion-slides mode=\"ios\" [options]=\"slideOpts\">\n            <ion-slide *ngFor=\"let featured of featuredMovies\" (click)=\"goToVideo(featured)\">\n                <div class=\"main_content_div__top-picks-slider\">\n                    <div class=\"main_content_div__top_picks\">\n                        <img src={{featured.movie_poster}}>\n                    </div>\n                    <button class=\"buy_ticket movies_btn\">Buy Ticket</button>\n                    <h5>{{featured.movie_name}}</h5>\n                    \n                </div>\n            </ion-slide>\n        </ion-slides>\n        <!-- Now Showing Movies End -->\n\n        <!-- Movies By Category Start -->\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Top picks for you')\">Movies By Category <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\n        \n        <!-- <ion-slides mode=\"ios\" [options]=\"slideOpts2\">\n            <ion-slide *ngFor=\"let item of  (images | slice : 0: 12)\" (click)=\"goToVideo()\">\n                <div class=\"flex_div\">\n                    <div class=\"main_content_div__category_img\">\n                        <div class=\"cat_group bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\n                    </div>\n                    <ion-label class=\"name\">{{item.name}}</ion-label>\n                </div>\n            </ion-slide>\n        </ion-slides> -->\n        <ion-slides mode=\"ios\" [options]=\"slideOpts2\" style=\"background-color: #282828 !important;\">\n            <ion-slide *ngFor=\"let cat of movieCats; index as i;\" (click)=\"goToVideo()\">\n                <div class=\"flex_div\" *ngIf=\"i < 12\">\n                    <div class=\"main_content_div__category_img\">\n                        <div class=\"cat_group bg_image\">{{cat.total_movies}}</div>\n                    </div>\n                    <ion-label class=\"name\">{{cat.genre}}</ion-label>\n                </div>\n            </ion-slide>\n        </ion-slides>\n        <!-- Movies By Category End -->\n\n        <!-- Ticketed Events Start -->\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Live News')\">Hot Events <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\n        \n        <ion-slides mode=\"ios\" [options]=\"slideOpts3\">\n            <ion-slide *ngFor=\"let event of ticketedEvents; index as k;\" (click)=\"goToVideo()\">\n                <div class=\"card-BG\">\n                    <div class=\"back_image4 bg_image card-BG__img-wrapper\">\n                        <img class=\"card-BG__event-poster\" [src]=\"event.poster\" [alt]=\"event.name\">\n                    </div>\n                    <button class=\"buy_ticket events_btn-lg\">Buy Ticket</button>\n                    <div class=\"card-BG__info-wrapper\">\n                        <ion-label class=\"card-BG__event_date\">{{event.start_date}}</ion-label>\n                        <div class=\"card-BG__location-wrapper\">\n                            <div class=\"card-BG__line\"></div>\n                            <ion-label class=\"card-BG__location\">{{event.location_name}}</ion-label>\n                        </div>\n                        <ion-label class=\"card-BG__event-title\">{{event.name}}</ion-label>\n                    </div>\n                </div>\n            </ion-slide>\n        </ion-slides>\n        <!-- Ticketed Events End -->\n    </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/home/home-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/home/home-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppPagesHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/pages/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/home/home.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.module.ts ***!
    \*******************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppPagesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/pages/home/home-routing.module.ts");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/pages/home/home.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/pages/home/home.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main_content_div {\n  width: 100%;\n  padding: 10px;\n}\n.main_content_div__hero_image {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.main_content_div__movie_title {\n  color: white;\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 100%;\n  font-size: 14px;\n  font-weight: bold;\n}\n.main_content_div__top_picks {\n  border-radius: 10px;\n  height: 150px;\n  overflow: hidden;\n}\n.main_content_div__top-picks-slider {\n  height: auto;\n  width: 100%;\n}\n.main_content_div__top-picks-slider img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.main_content_div__top-picks-slider h5 {\n  color: white;\n  margin: 0;\n  font-size: 14px;\n  transform: translateY(-50%);\n  text-align: center;\n}\n.main_content_div .hero_slides {\n  height: 250px;\n  width: 100%;\n  border-radius: 15px;\n  overflow: hidden;\n  position: relative;\n}\n.main_content_div .hero_slides::before {\n  content: \"\";\n  width: 100%;\n  height: 20%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.main_content_div .hero_slides ion-label {\n  position: absolute;\n  right: 5px;\n  font-size: 14px;\n}\n.main_content_div__category_img {\n  display: grid;\n  place-items: center;\n  height: 80px;\n  width: 80px;\n  min-width: 80px;\n  border-radius: 50%;\n  border: 1px solid var(--ion-color-dark-tint);\n}\n.main_content_div__category_img .cat_group {\n  height: 50px;\n  width: 50px;\n  min-width: 50px;\n  border-radius: 50%;\n  align-self: end;\n}\n.main_content_div .head_lbl {\n  font-family: \"medium\";\n  display: block;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  position: relative;\n}\n.main_content_div .head_lbl ion-icon {\n  position: absolute;\n  right: 0;\n  font-size: 20px;\n  color: #707070;\n}\n.main_content_div ion-slide {\n  margin-right: 7px;\n}\n.main_content_div .back_image2 {\n  height: 150px;\n  width: 100%;\n  border-radius: 5px;\n}\n.main_content_div .back_image3 {\n  height: 80px;\n  width: 80px;\n  min-width: 80px;\n  border: 3px solid var(--ion-color-primary);\n  border-radius: 50%;\n}\n.main_content_div .back_image4 {\n  height: 100px;\n  width: 100%;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.main_content_div .back_image4 .bold_lbl {\n  font-family: \"semi-bold\";\n  text-transform: uppercase;\n}\n.main_content_div .flex_div {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n  padding: 5px;\n}\n.main_content_div .flex_div .name {\n  font-size: 12px;\n  margin-top: 5px;\n}\n.main_content_div .flex_div .live {\n  font-size: 12px;\n  font-family: \"medium\";\n  text-align: left;\n}\n.main_content_div .flex_div .live2 {\n  font-size: 12px;\n  font-family: \"medium\";\n  text-align: right;\n}\n.main_content_div .flex_div .play_div {\n  display: flex;\n  align-items: center;\n}\n.main_content_div .flex_div .play_div .play {\n  font-size: 20px;\n  margin-right: 1px;\n}\n.main_content_div .flex_div .play_div .name {\n  font-size: 14px;\n  margin-top: 0px;\n}\n.card-BG {\n  padding: 5px;\n  width: 100%;\n  height: 210px;\n  background-color: var(--ion-color-events-contrast);\n  border-radius: 7px;\n}\n.card-BG__info-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding-left: 5px;\n  width: 100%;\n}\n.card-BG__img-wrapper {\n  border-radius: 10px;\n  overflow: hidden;\n}\n.card-BG__event-poster {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.card-BG__event_date {\n  display: block;\n  font-size: 12px;\n  text-align: left;\n  transform: translateY(-50%);\n  color: var(--ion-color-step-450);\n}\n.card-BG__location-wrapper {\n  display: flex;\n  flex-direction: row;\n  gap: 5px;\n  align-items: center;\n  justify-content: flex-start;\n}\n.card-BG__line {\n  width: 10px;\n  height: 2px;\n  background-color: var(--ion-color-events);\n}\n.card-BG__location {\n  font-size: 12px;\n  font-weight: bold;\n  color: var(--ion-color-events);\n}\n.card-BG__event-title {\n  display: block;\n  font-size: 16px;\n  text-align: left;\n  color: var(--ion-color-step-900);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EaWdpdGFsL0RvY3VtZW50cy9UZXN0Z3JvdW5kL0tCIE1vYmlsZSBBUFAvS0JfQXBwX1Jlcy9LZW55YUJ1enotTW9iaWxlQXBwL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDQ0Y7QURDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0NKO0FERUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0FKO0FER0U7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0RKO0FESUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0ZKO0FESUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNGTjtBREtJO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQ0hOO0FET0U7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0xKO0FET0k7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0Esb0NBQUE7QUNMTjtBRFFJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ05OO0FEVUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDUko7QURVSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUVBLGtCQUFBO0VBQ0EsZUFBQTtBQ1ROO0FEZUU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNiSjtBRGNJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNaTjtBRGVFO0VBQ0UsaUJBQUE7QUNiSjtBRGdCRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNkSjtBRGlCRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7QUNmSjtBRGtCRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ2hCSjtBRGtCSTtFQUNFLHdCQUFBO0VBQ0EseUJBQUE7QUNoQk47QURvQkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ2xCSjtBRG9CSTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDbEJOO0FEcUJJO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNuQk47QURzQkk7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ3BCTjtBRHVCSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ3JCTjtBRHNCTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ3BCUjtBRHNCTTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDcEJSO0FEMEJBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0RBQUE7RUFDQSxrQkFBQTtBQ3ZCRjtBRHlCRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDdkJKO0FEMEJFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQ3hCSjtBRDJCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ3pCSjtBRDRCRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdDQUFBO0FDMUJKO0FENkJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUMzQko7QUQ4QkU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlDQUFBO0FDNUJKO0FEK0JFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUM3Qko7QURnQ0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUM5QkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcblxuICAmX19oZXJvX2ltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cblxuICAmX19tb3ZpZV90aXRsZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAmX190b3BfcGlja3Mge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgJl9fdG9wLXBpY2tzLXNsaWRlciB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxuXG4gICAgaDUge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIC5oZXJvX3NsaWRlcyB7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMjAlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICB9XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cblxuICAmX19jYXRlZ29yeV9pbWcge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgbWluLXdpZHRoOiA4MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcblxuICAgIC5jYXRfZ3JvdXAge1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBtaW4td2lkdGg6IDUwcHg7XG4gICAgICAvLyBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBhbGlnbi1zZWxmOiBlbmQ7XG4gICAgfVxuICB9XG5cbiAgLy8gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAuaGVhZF9sYmwge1xuICAgIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaW9uLWljb24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBjb2xvcjogIzcwNzA3MDtcbiAgICB9XG4gIH1cbiAgaW9uLXNsaWRlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgfVxuXG4gIC5iYWNrX2ltYWdlMiB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cblxuICAuYmFja19pbWFnZTMge1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogODBweDtcbiAgICBtaW4td2lkdGg6IDgwcHg7XG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG4gIC5iYWNrX2ltYWdlNCB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgLmJvbGRfbGJsIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcInNlbWktYm9sZFwiO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG4gIH1cblxuICAuZmxleF9kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweDtcblxuICAgIC5uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB9XG5cbiAgICAubGl2ZSB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuXG4gICAgLmxpdmUyIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuXG4gICAgLnBsYXlfZGl2IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLnBsYXkge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMXB4O1xuICAgICAgfVxuICAgICAgLm5hbWUge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmNhcmQtQkcge1xuICBwYWRkaW5nOiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZXZlbnRzLWNvbnRyYXN0KTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuXG4gICZfX2luZm8td3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICZfX2ltZy13cmFwcGVyIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAmX19ldmVudC1wb3N0ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuXG4gICZfX2V2ZW50X2RhdGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNDUwKTtcbiAgfVxuXG4gICZfX2xvY2F0aW9uLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBnYXA6IDVweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuXG4gICZfX2xpbmUge1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1ldmVudHMpO1xuICB9XG5cbiAgJl9fbG9jYXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWV2ZW50cyk7XG4gIH1cblxuICAmX19ldmVudC10aXRsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTkwMCk7XG4gIH1cbn1cbiIsIi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2Rpdl9faGVyb19pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLm1haW5fY29udGVudF9kaXZfX21vdmllX3RpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1haW5fY29udGVudF9kaXZfX3RvcF9waWNrcyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubWFpbl9jb250ZW50X2Rpdl9fdG9wLXBpY2tzLXNsaWRlciB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2Rpdl9fdG9wLXBpY2tzLXNsaWRlciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2X190b3AtcGlja3Mtc2xpZGVyIGg1IHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuaGVyb19zbGlkZXMge1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmhlcm9fc2xpZGVzOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuaGVyb19zbGlkZXMgaW9uLWxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWFpbl9jb250ZW50X2Rpdl9fY2F0ZWdvcnlfaW1nIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogODBweDtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xufVxuLm1haW5fY29udGVudF9kaXZfX2NhdGVnb3J5X2ltZyAuY2F0X2dyb3VwIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgbWluLXdpZHRoOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFsaWduLXNlbGY6IGVuZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5oZWFkX2xibCB7XG4gIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmhlYWRfbGJsIGlvbi1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzcwNzA3MDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1zbGlkZSB7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmJhY2tfaW1hZ2UyIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5iYWNrX2ltYWdlMyB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIG1pbi13aWR0aDogODBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmFja19pbWFnZTQge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5iYWNrX2ltYWdlNCAuYm9sZF9sYmwge1xuICBmb250LWZhbWlseTogXCJzZW1pLWJvbGRcIjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5uYW1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLmxpdmUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5saXZlMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5wbGF5X2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLnBsYXlfZGl2IC5wbGF5IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDFweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAucGxheV9kaXYgLm5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLmNhcmQtQkcge1xuICBwYWRkaW5nOiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZXZlbnRzLWNvbnRyYXN0KTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuLmNhcmQtQkdfX2luZm8td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNhcmQtQkdfX2ltZy13cmFwcGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jYXJkLUJHX19ldmVudC1wb3N0ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5jYXJkLUJHX19ldmVudF9kYXRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNDUwKTtcbn1cbi5jYXJkLUJHX19sb2NhdGlvbi13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZ2FwOiA1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5jYXJkLUJHX19saW5lIHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZXZlbnRzKTtcbn1cbi5jYXJkLUJHX19sb2NhdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZXZlbnRzKTtcbn1cbi5jYXJkLUJHX19ldmVudC10aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC05MDApO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/home/home.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/home/home.page.ts ***!
    \*****************************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppPagesHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/dummy.service */
    "./src/app/services/dummy.service.ts");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");

    var HomePage = /*#__PURE__*/function () {
      function HomePage(dataService, apiService, dummy, router) {
        _classCallCheck(this, HomePage);

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
          slidesPerView: 3
        };
        this.slideOpts2 = {
          slidesPerView: 4
        };
        this.slideOpts3 = {
          slidesPerView: 2
        };
        this.mainSlider = ['assets/imgs/landscape_imgs/1.jpg', 'assets/imgs/landscape_imgs/2.jpg', 'assets/imgs/landscape_imgs/3.jpg', 'assets/imgs/landscape_imgs/4.jpg', 'assets/imgs/landscape_imgs/5.png'];
        this.dateToday = this.dataService.dateToday;
        var l_strg = this.apiService.getEndpoints();
        this.l_strg = l_strg.local_storage;
        this.images = this.dummy.images;
        this.sports = this.dummy.sports;
        this.animals = this.dummy.animal;
        this.genrens = this.dummy.genrens;
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.checkFeaturedMovies();

                  case 2:
                    _context.next = 4;
                    return this.checkMovieCategories();

                  case 4:
                    _context.next = 6;
                    return this.getTicketedEvents();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "goToMovie",
        value: function goToMovie(movie) {
          this.router.navigate(['/view-movie/' + movie.urlify], {
            state: {
              data: movie
            }
          });
        }
      }, {
        key: "goToEvent",
        value: function goToEvent(evnt) {
          this.router.navigate(['/view-event/' + evnt.slug], {
            state: {
              data: evnt
            }
          });
        }
      }, {
        key: "goTovideoList",
        value: function goTovideoList(val) {
          var navData = {
            queryParams: {
              id: val
            }
          };
          this.router.navigate(['/video-list'], navData);
        }
      }, {
        key: "goToCatList",
        value: function goToCatList(val) {
          var navData = {
            queryParams: {
              id: val
            }
          };
          this.router.navigate(['/category-list'], navData);
        }
      }, {
        key: "goToCatogory",
        value: function goToCatogory(val) {
          var navData = {
            queryParams: {
              id: val
            }
          };
          this.router.navigate(['/category'], navData);
        }
      }, {
        key: "checkFeaturedMovies",
        value: function checkFeaturedMovies() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var featuredMoviesStore, featuredMoviesData;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    featuredMoviesStore = localStorage.getItem(this.l_strg.movies.featured); // console.log('Featured movies in local ?',featuredMoviesStore);

                    if (!featuredMoviesStore) {
                      _context2.next = 14;
                      break;
                    }

                    featuredMoviesData = JSON.parse(featuredMoviesStore); // console.log('Parsed Featured Movies >',featuredMoviesData);

                    if (!(Object.keys(featuredMoviesData.featured_movies).length == 0 || featuredMoviesData.date != this.dateToday)) {
                      _context2.next = 8;
                      break;
                    }

                    _context2.next = 6;
                    return this.getFeaturedMovies();

                  case 6:
                    _context2.next = 12;
                    break;

                  case 8:
                    this.featuredMovies = featuredMoviesData.featured_movies; // console.log('this.featuredMovies before >',this.featuredMovies);

                    this.featuredMovies.forEach(function (movie) {
                      var genres = [];

                      if (movie.api_data != null) {
                        // console.log('Raw Movie >',movie);
                        // console.log('Raw Genres >',movie.api_data.genres);
                        if (Array.isArray(movie.api_data.genres)) {
                          for (var i = 0; i < movie.api_data.genres.length; i++) {
                            if (i < 4) {
                              genres.push(movie.api_data.genres[i].name);
                            }
                          }

                          movie.genres = genres.join(' | ');
                        } else {
                          movie.genres = '-';
                        }

                        movie.movie_poster = movie.api_data.poster_path != null ? 'https://image.tmdb.org/t/p/w342' + movie.api_data.poster_path : 'https://www.kenyabuzz.com/public' + movie.customposter;
                      } else {
                        movie.movie_poster = 'https://www.kenyabuzz.com/public' + movie.customposter;
                      }
                    });
                    this.featuredMoviesLoading = false;
                    console.log('this.featuredMovies after >', this.featuredMovies);

                  case 12:
                    _context2.next = 15;
                    break;

                  case 14:
                    // console.log('No Featured Movies in local, calling function...');
                    this.getFeaturedMovies();

                  case 15:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "getFeaturedMovies",
        value: function getFeaturedMovies() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this = this;

            var endpoints;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    // fetch the movie details
                    endpoints = this.apiService.getEndpoints();
                    _context3.next = 3;
                    return this.apiService.get(endpoints.movies.featured_movies).subscribe(function (response) {
                      if ('data' in response) {
                        // console.log('featured movies resp >',response);
                        if (Array.isArray(response.data)) {
                          // featured movies from local storage
                          _this.featuredMovies = response.data;

                          _this.featuredMovies.forEach(function (movie) {
                            if (movie.api_data != null) {
                              if (Array.isArray(movie.api_data.genres)) {
                                var genres = [];

                                for (var i = 0; i < movie.api_data.genres.length; i++) {
                                  if (i < 4) {
                                    genres.push(movie.api_data.genres[i].name);
                                  }
                                }

                                movie.genres = genres.join(' | ');
                              } else {
                                movie.genres = '-';
                              }

                              movie.movie_poster = movie.api_data.poster_path != null ? 'https://image.tmdb.org/t/p/w342' + movie.api_data.poster_path : 'https://image.tmdb.org/t/p/w342';
                            } else {
                              movie.movie_poster = 'https://www.kenyabuzz.com/public' + movie.customposter;
                              movie.genres = movie.genre ? movie.genre : '-';
                            }
                          }); // console.log('this.featuredMovies complete >',this.featuredMovies);

                        }
                      } else {
                        console.log('Featured Movies Error Response >', response);
                      }
                    }, function (error) {
                      console.log('Featured Movies Err >', error);
                    });

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "checkMovieCategories",
        value: function checkMovieCategories() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var movieCatsStore, catsData;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    /* check local storage first or default to api */
                    movieCatsStore = localStorage.getItem(this.l_strg.movies.movie_cats);

                    if (!movieCatsStore) {
                      _context4.next = 20;
                      break;
                    }

                    _context4.prev = 2;
                    catsData = JSON.parse(movieCatsStore);

                    if (!(Object.keys(catsData.movie_categories).length == 0 || catsData.date != this.dateToday)) {
                      _context4.next = 9;
                      break;
                    }

                    _context4.next = 7;
                    return this.getMovieCategories();

                  case 7:
                    _context4.next = 11;
                    break;

                  case 9:
                    this.movieCats = catsData.movie_categories;
                    this.movieCatsLoaded = true;

                  case 11:
                    _context4.next = 18;
                    break;

                  case 13:
                    _context4.prev = 13;
                    _context4.t0 = _context4["catch"](2);
                    console.log('Error Parsing JSON. Fetching afresh...', _context4.t0);
                    _context4.next = 18;
                    return this.getMovieCategories();

                  case 18:
                    _context4.next = 22;
                    break;

                  case 20:
                    _context4.next = 22;
                    return this.getMovieCategories();

                  case 22:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this, [[2, 13]]);
          }));
        }
      }, {
        key: "getMovieCategories",
        value: function getMovieCategories() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.dataService.returnMovieCategories().subscribe(function (resp) {
                      if (resp.response == "success") {
                        if ('data' in resp) {
                          _this2.movieCats = []; // clear it for fresh data

                          var movieCatsPayload = {
                            date: _this2.dateToday,
                            movie_categories: resp.data
                          };
                          _this2.movieCats = resp.data;
                          _this2.movieCatsLoaded = true;
                          /* save to local storage */

                          localStorage.setItem(_this2.l_strg.events.featured, JSON.stringify(movieCatsPayload));
                        }
                      }
                    });

                  case 2:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "getTicketedEvents",
        value: function getTicketedEvents() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.dataService.returnTicketedEvents().subscribe(function (resp) {
                      if (resp.response == "success") {
                        if ('data' in resp) {
                          _this3.ticketedEvents = []; // clear it for fresh data

                          _this3.ticketedEvents = resp.data;

                          _this3.ticketedEvents.forEach(function (event) {
                            event.poster = event.poster ? 'https://www.kenyabuzz.com/public' + event.poster : null;
                            event.start_date = event.start_date ? _this3.dataService.readableDate(event.start_date) : null;
                          });

                          _this3.ticketedEventsLoaded = true;
                        }
                      }
                    });

                  case 2:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
      }, {
        type: src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_4__["DummyService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/pages/home/home.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_4__["DummyService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], HomePage);
    /***/
  },

  /***/
  "./src/app/services/api.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/api.service.ts ***!
    \*****************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ApiService = /*#__PURE__*/function () {
      function ApiService(httpClient) {
        _classCallCheck(this, ApiService);

        this.httpClient = httpClient;
        this.baseApiPath = 'https://api.kenyabuzz.com'; //
      }

      _createClass(ApiService, [{
        key: "get",
        value: function get(param) {
          return this.httpClient.get("".concat(this.baseApiPath, "/").concat(param));
        }
      }, {
        key: "get2",
        value: function get2(param) {
          return this.httpClient.get("".concat(this.baseApiPath, "/").concat(param));
        }
      }, {
        key: "externalGet",
        value: function externalGet(param) {
          return this.httpClient.get("".concat(param));
        }
      }, {
        key: "create",
        value: function create(data) {
          return this.httpClient.post("".concat(this.baseApiPath), data);
        }
      }, {
        key: "getEndpoints",
        value: function getEndpoints() {
          // let basePath = 'https://api.kenyabuzz.com/';
          return {
            home_slider: 'getHomeSlider',
            movies: {
              movie_categories: 'getMovieCats',
              coming_soon: 'mvsComingSoon',
              now_showing: 'mvsNowShowing',
              all_movies: 'mvsAll',
              bollywood: 'mvsBollywood',
              featured_movies: 'mvsFeatured',
              movie_details: 'mvDetails/',
              movie_details_by_slug: 'mvDetailsBySlg/',
              movie_shows_with_tickets: 'mvShowTimesWithTicketTypes'
            },
            cinemas: {
              get_cinemas: 'getCinemas',
              cinema_movies: 'getCinemasMvs/',
              movie_show_times: 'mvCinemaShowTimes/',
              get_vista_seats: 'getVistaSeats/'
            },
            events: {
              ticketed_events: 'evntsTicketed',
              all_events: 'evntsAll',
              featured_events: 'evntsFeatured',
              home_events: 'homeEvents',
              event_details: 'evntDetailsBi/',
              event_details_by_slug: 'evntDetailsBs/',
              event_seating_plan: 'evntDetailsAndSeatsBs/'
            },
            gallery: {
              main_gallery: 'getGallery/',
              view_album: 'getAlbum/'
            },
            kids: {
              get_kids: 'getKidsArticles',
              kids_article: 'kidsArticle/'
            },
            lifestyle: {
              all_articles: 'getLifestyleArticles',
              read_article: 'getArticle/',
              snippets: 'lifestyleSnippets',
              get_directory: 'getDirectoryLocation/'
            },
            search: 'srch/',
            local_storage: {
              movies: {
                all: 'locDat_KeNmgkbMvsAll',
                now_showing: 'locDat_KeNmgkbMvsNowShowing',
                coming_soon: 'locDat_KeNmgkbMvsSoon',
                featured: 'locDat_KeNmgkbMvsFtrd',
                movie_cats: 'locDat_KeNmgMvCts'
              },
              events: {
                featured: 'locDat_KeNmgkbEvntsFtrd',
                all: 'locDat_KeNmgkbEvntsAll',
                home: 'locDat_KeNmgkbEvntsHme',
                buy_ticket: 'locDat_KeNmgkbEvntsBuy'
              },
              lifestyle: 'locDat_KeNmgKbLA',
              kids: 'locDat_KeNmgKbLKA',
              gallery: 'locDat_KeNmgKbGlry',
              cinemas: 'locDat_KeNmgKbCins',
              schedule: 'locDat_KeNmgkbSched',
              carousel: 'locDat_KeNmgkbHmeCrsel',
              newsletter: 'locDat_KeNmgkbNwsltr'
            }
          };
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ApiService);
    /***/
  },

  /***/
  "./src/app/services/data.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/data.service.ts ***!
    \******************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppServicesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/services/api.service.ts");

    var DataService = /*#__PURE__*/function () {
      function DataService(apiService, datePipe) {
        _classCallCheck(this, DataService);

        this.apiService = apiService;
        this.datePipe = datePipe;
        this.dateNow = new Date();
        this.dateToday = null;
        this.dateToday = this.datePipe.transform(this.dateNow, 'yyyy-MM-dd');
      }

      _createClass(DataService, [{
        key: "rot13",
        value: function rot13(str) {
          var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
          var output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
          var encoded = '';

          for (var i = 0; i < str.length; i++) {
            var index = input.indexOf(str[i]);
            encoded += output[index];
          }

          return encoded;
        }
      }, {
        key: "ROTn",
        value: function ROTn(text, map) {
          // Generic ROT-n algorithm for keycodes in MAP.
          var R = new String();
          var i,
              j,
              c,
              len = map.length;

          for (i = 0; i < text.length; i++) {
            c = text.charAt(i);
            j = map.indexOf(c);

            if (j >= 0) {
              c = map.charAt((j + len / 2) % len);
            }

            R = R + c;
          }

          return R;
        }
      }, {
        key: "rot47",
        value: function rot47(text) {
          // Hides all ASCII-characters from 33 ("!") to 126 ("~").  Hence can be used
          // to obfuscate virtually any text, including URLs and emails.
          var R = new String();
          R = this.ROTn(text, "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~");
          return R;
        }
      }, {
        key: "readableDate",
        value: function readableDate(date) {
          if (date) {
            var datesTimeArr = date.split(' ');
            var datesArr = datesTimeArr[0].split('-');
            var year = datesArr[0];
            var month = parseInt(datesArr[1]);
            var day = parseInt(datesArr[2]);
            var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var theDay = day > 3 ? day + 'th' : day == 1 ? day + 'st' : day == 2 ? day + 'nd' : day + 'rd';
            var theDate = theDay + ' ' + months[month - 1];
            var fullDate = theDate + ', ' + year;

            if (datesTimeArr.length > 1) {
              var timeArr = datesTimeArr[1].split(':');
              var hour = parseInt(timeArr[0]);
              var postfix = hour > 12 ? 'PM' : 'AM';
              hour = hour > 12 ? hour - 12 : hour;
              var minutes = timeArr[1];
              fullDate = fullDate + ' at ' + hour + ':' + minutes + postfix;
            }

            return fullDate;
          } else {
            return date;
          }
        }
      }, {
        key: "readableTime",
        value: function readableTime(time) {
          if (time) {
            var timeArr = time.split(':');
            var hour = parseInt(timeArr[0]);
            var postfix = hour > 12 ? 'PM' : 'AM';
            hour = hour > 12 ? hour - 12 : hour;
            var minutes = timeArr[1];
            var fullTime = hour + ':' + minutes + postfix;
            return fullTime;
          } else {
            return time;
          }
        }
      }, {
        key: "checkStat",
        value: function checkStat() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var l_strg, feturedMvsStore, featuredMoviesData, comeSoonMvsStore, SoonMoviesData, showingMvsStore, showingMoviesData, allMvsStore, allMoviesData, ftrdEvntsStore, ftrdEvntsData, hmeEvntsStore, hmeEvntsData, allEvntsStore, allEvntsData, cinemasStore, cinemasData;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    /* check local storage first or default to api */
                    movieCatsStore = localStorage.getItem(this.l_strg.movies.movie_cats);

                    if (!feturedMvsStore) {
                      _context7.next = 9;
                      break;
                    }

                    _context4.prev = 2;
                    catsData = JSON.parse(movieCatsStore);

                    if (!(Object.keys(featuredMoviesData.featured_movies).length == 0 || featuredMoviesData.date != this.dateToday)) {
                      _context7.next = 7;
                      break;
                    }

                    _context7.next = 7;
                    return this.fetchFeaturedMovies();

                  case 7:
                    _context7.next = 11;
                    break;

                  case 9:
                    _context7.next = 11;
                    return this.fetchFeaturedMovies();

                  case 11:
                    // check coming soon movies
                    comeSoonMvsStore = localStorage.getItem(l_strg.local_storage.movies.coming_soon);

                    if (!comeSoonMvsStore) {
                      _context7.next = 19;
                      break;
                    }

                    SoonMoviesData = JSON.parse(comeSoonMvsStore);

                    if (!(Object.keys(SoonMoviesData.coming_soon_movies).length == 0 || SoonMoviesData.date != this.dateToday)) {
                      _context7.next = 17;
                      break;
                    }

                    _context7.next = 17;
                    return this.fetchComingSoonMovies();

                  case 17:
                    _context7.next = 21;
                    break;

                  case 19:
                    _context7.next = 21;
                    return this.fetchComingSoonMovies();

                  case 21:
                    // check now showing movies
                    showingMvsStore = localStorage.getItem(l_strg.local_storage.movies.now_showing);

                    if (!showingMvsStore) {
                      _context7.next = 29;
                      break;
                    }

                    showingMoviesData = JSON.parse(showingMvsStore);

                    if (!(Object.keys(showingMoviesData.now_showing_movies).length == 0 || showingMoviesData.date != this.dateToday)) {
                      _context7.next = 27;
                      break;
                    }

                    _context7.next = 27;
                    return this.fetchNowShowingMovies();

                  case 27:
                    _context7.next = 31;
                    break;

                  case 29:
                    _context7.next = 31;
                    return this.fetchNowShowingMovies();

                  case 31:
                    // check all movies
                    allMvsStore = localStorage.getItem(l_strg.local_storage.movies.all);

                    if (!allMvsStore) {
                      _context7.next = 39;
                      break;
                    }

                    allMoviesData = JSON.parse(allMvsStore);

                    if (!(Object.keys(allMoviesData.all_movies).length == 0 || allMoviesData.date != this.dateToday)) {
                      _context7.next = 37;
                      break;
                    }

                    _context7.next = 37;
                    return this.fetchallMovies();

                  case 37:
                    _context7.next = 41;
                    break;

                  case 39:
                    _context7.next = 41;
                    return this.fetchallMovies();

                  case 41:
                    // check featured events
                    ftrdEvntsStore = localStorage.getItem(l_strg.local_storage.events.featured);

                    if (!ftrdEvntsStore) {
                      _context7.next = 49;
                      break;
                    }

                    ftrdEvntsData = JSON.parse(ftrdEvntsStore);

                    if (!(Object.keys(ftrdEvntsData.featured_events).length == 0 || ftrdEvntsData.date != this.dateToday)) {
                      _context7.next = 47;
                      break;
                    }

                    _context7.next = 47;
                    return this.fetchFeaturedEvents();

                  case 47:
                    _context7.next = 51;
                    break;

                  case 49:
                    _context7.next = 51;
                    return this.fetchFeaturedEvents();

                  case 51:
                    // check home page events
                    hmeEvntsStore = localStorage.getItem(l_strg.local_storage.events.home);

                    if (!hmeEvntsStore) {
                      _context7.next = 59;
                      break;
                    }

                    hmeEvntsData = JSON.parse(hmeEvntsStore);

                    if (!(Object.keys(hmeEvntsData.home_events).length == 0 || hmeEvntsData.date != this.dateToday)) {
                      _context7.next = 57;
                      break;
                    }

                    _context7.next = 57;
                    return this.fetchHomeEvents();

                  case 57:
                    _context7.next = 61;
                    break;

                  case 59:
                    _context7.next = 61;
                    return this.fetchHomeEvents();

                  case 61:
                    // check all events
                    allEvntsStore = localStorage.getItem(l_strg.local_storage.events.all);

                    if (!allEvntsStore) {
                      _context7.next = 69;
                      break;
                    }

                    allEvntsData = JSON.parse(allEvntsStore);

                    if (!(Object.keys(allEvntsData.all_events).length == 0 || allEvntsData.date != this.dateToday)) {
                      _context7.next = 67;
                      break;
                    }

                    _context7.next = 67;
                    return this.fetchAllEvents();

                  case 67:
                    _context7.next = 71;
                    break;

                  case 69:
                    _context7.next = 71;
                    return this.fetchAllEvents();

                  case 71:
                    // check cinemas
                    cinemasStore = localStorage.getItem(l_strg.local_storage.cinemas);

                    if (!cinemasStore) {
                      _context7.next = 79;
                      break;
                    }

                    cinemasData = JSON.parse(cinemasStore);

                    if (!(Object.keys(cinemasData.cinemas).length == 0 || cinemasData.date != this.dateToday)) {
                      _context7.next = 77;
                      break;
                    }

                    _context7.next = 77;
                    return this.fetchCinemas();

                  case 77:
                    _context7.next = 81;
                    break;

                  case 79:
                    _context7.next = 81;
                    return this.fetchCinemas();

                  case 81:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "returnMovieCategories",
        value: function returnMovieCategories() {
          // return movie categories
          var endpoint = this.apiService.getEndpoints().movies.movie_categories;
          return this.apiService.get(endpoint);
        }
      }, {
        key: "fetchallMovies",
        value: function fetchallMovies() {
          var _this4 = this;

          // fetch all movies, limit to 30 (old data doesn't help much)
          var endpoints = this.apiService.getEndpoints();
          this.apiService.get(endpoints.movies.all_movies).subscribe(function (response) {
            if ('data' in response) {
              // console.log('dataSvc - ALL MOVIES RESP >', response.data);
              var allMvs = Array.isArray(response.data) ? response.data : []; // default to an empty arr if anything else is returned

              var l_strg = _this4.apiService.getEndpoints();

              var allMovies = {
                date: _this4.dateToday,
                all_movies: allMvs
              };
              localStorage.setItem(l_strg.local_storage.movies.all, JSON.stringify(allMovies));
            }
          }, function (error) {
            console.log('All Movies Err >', error);
          });
        }
      }, {
        key: "fetchComingSoonMovies",
        value: function fetchComingSoonMovies() {
          var _this5 = this;

          // fetch the coming soon movies
          var endpoints = this.apiService.getEndpoints();
          this.apiService.get(endpoints.movies.coming_soon).subscribe(function (response) {
            if ('data' in response) {
              // console.log('dataSvc - COMING SOON RESP >', response.data);
              var cSoon = Array.isArray(response.data) ? response.data : []; // default to an empty arr if anything else is returned

              var l_strg = _this5.apiService.getEndpoints();

              var comingSoonMovies = {
                date: _this5.dateToday,
                coming_soon_movies: cSoon
              };
              localStorage.setItem(l_strg.local_storage.movies.coming_soon, JSON.stringify(comingSoonMovies));
            }
          }, function (error) {
            console.log('Coming Soon Err >', error);
          });
        }
      }, {
        key: "returnComingSoonMovies",
        value: function returnComingSoonMovies() {
          // return coming soon movies
          var endpoint = this.apiService.getEndpoints();
          return this.apiService.get(endpoint.movies.coming_soon);
        }
      }, {
        key: "fetchNowShowingMovies",
        value: function fetchNowShowingMovies() {
          var _this6 = this;

          // fetch the now showing movies
          var endpoints = this.apiService.getEndpoints();
          this.apiService.get(endpoints.movies.now_showing).subscribe(function (response) {
            if ('data' in response) {
              // console.log('dataSvc - NOW SHOWING RESP >', response.data);
              var nShowing = Array.isArray(response.data) ? response.data : []; // default to an empty arr if anything else is returned

              var l_strg = _this6.apiService.getEndpoints();

              var nowShowingMovies = {
                date: _this6.dateToday,
                now_showing_movies: nShowing
              };
              localStorage.setItem(l_strg.local_storage.movies.now_showing, JSON.stringify(nowShowingMovies));
            }
          }, function (error) {
            console.log('Now Showing Err >', error);
          });
        }
      }, {
        key: "returnNowShowingMovies",
        value: function returnNowShowingMovies() {
          // return now showing movies
          var endpoint = this.apiService.getEndpoints();
          return this.apiService.get(endpoint.movies.now_showing);
        }
      }, {
        key: "fetchFeaturedMovies",
        value: function fetchFeaturedMovies() {
          var _this7 = this;

          // fetch the featured movies
          var featuredMovies = {};
          var endpoints = this.apiService.getEndpoints();
          var featuredMoviesResp = this.apiService.get(endpoints.movies.featured_movies).subscribe(function (response) {
            if ('data' in response) {
              // console.log('dataSvc - FEATURED RESP >', response.data);
              var featured = Array.isArray(response.data) ? response.data : []; // default to an empty arr if anything else is returned

              var l_strg = _this7.apiService.getEndpoints();

              featuredMovies.date = _this7.dateToday;
              featuredMovies.featured_movies = featured;
              localStorage.setItem(l_strg.local_storage.movies.featured, JSON.stringify(featuredMovies));
              return featuredMovies;
            }
          }, function (error) {
            console.log('Featured Movies Err >', error);
            return featuredMovies;
          });
          return Promise.resolve(featuredMoviesResp);
        }
      }, {
        key: "returnTicketedEvents",
        value: function returnTicketedEvents() {
          // return movie categories
          var endpoint = this.apiService.getEndpoints().events.ticketed_events;
          return this.apiService.get(endpoint);
        }
      }, {
        key: "fetchHomeEvents",
        value: function fetchHomeEvents() {
          var _this8 = this;

          // fetch events for the home slider
          var endpoints = this.apiService.getEndpoints();
          this.apiService.get(endpoints.events.home_events).subscribe(function (response) {
            if ('data' in response) {
              // console.log('dataSvc - HOME EVENTS RESP >', response.data);
              var hmEvents = Array.isArray(response.data) ? response.data : []; // default to an empty arr if anything else is returned

              var l_strg = _this8.apiService.getEndpoints();

              var homeEvents = {
                date: _this8.dateToday,
                home_events: hmEvents
              };
              localStorage.setItem(l_strg.local_storage.events.home, JSON.stringify(homeEvents));
            }
          }, function (error) {
            console.log('Home Events Err >', error);
          });
        }
      }, {
        key: "fetchFeaturedEvents",
        value: function fetchFeaturedEvents() {
          var _this9 = this;

          // fetch the featured events
          var endpoints = this.apiService.getEndpoints();
          this.apiService.get(endpoints.events.featured_events).subscribe(function (response) {
            if (response) {
              if ('data' in response) {
                // console.log('dataSvc - FEATURED EVENTS RESP >', response.data);
                var featured = Array.isArray(response.data) ? response.data : []; // default to an empty arr if anything else is returned

                var l_strg = _this9.apiService.getEndpoints();

                var featuredeEvents = {
                  date: _this9.dateToday,
                  featured_events: featured
                };
                localStorage.setItem(l_strg.local_storage.events.featured, JSON.stringify(featuredeEvents));
              }
            }
          }, function (error) {
            console.log('Featured Events Err >', error);
          });
        }
      }, {
        key: "returnFeaturedEvents",
        value: function returnFeaturedEvents() {
          // return featured events
          var endpoint = this.apiService.getEndpoints();
          return this.apiService.get(endpoint.events.featured_events);
        }
      }, {
        key: "fetchAllEvents",
        value: function fetchAllEvents() {
          var _this10 = this;

          // fetch the featured events
          var endpoints = this.apiService.getEndpoints();
          this.apiService.get(endpoints.events.all_events).subscribe(function (response) {
            if ('data' in response) {
              // console.log('dataSvc - ALL EVENTS RESP >', response.data);
              var allEvents = Array.isArray(response.data) ? response.data : []; // default to an empty arr if anything else is returned

              var l_strg = _this10.apiService.getEndpoints();

              var events = {
                date: _this10.dateToday,
                all_events: allEvents
              };
              localStorage.setItem(l_strg.local_storage.events.all, JSON.stringify(events));
            }
          }, function (error) {
            console.log('All Events Err >', error);
          });
        }
      }, {
        key: "returnAllEvents",
        value: function returnAllEvents() {
          // return featured events
          var endpoint = this.apiService.getEndpoints();
          return this.apiService.get(endpoint.events.all_events);
        }
      }, {
        key: "fetchCinemas",
        value: function fetchCinemas() {
          var _this11 = this;

          // fetch the cinemas
          var cinemas = {};
          var endpoints = this.apiService.getEndpoints();
          var cinemasResp = this.apiService.get(endpoints.cinemas.get_cinemas).subscribe(function (response) {
            if ('data' in response) {
              // console.log('dataSvc - CINEMAS RESP >', response.data);
              var theaters = Array.isArray(response.data) ? response.data : []; // default to an empty arr if anything else is returned

              var l_strg = _this11.apiService.getEndpoints();

              cinemas.date = _this11.dateToday;
              cinemas.cinemas = theaters;
              localStorage.setItem(l_strg.local_storage.cinemas, JSON.stringify(cinemas));
              return cinemas;
            }
          }, function (error) {
            console.log('Featured Movies Err >', error);
            return cinemas;
          });
          return Promise.resolve(cinemasResp);
        }
      }, {
        key: "returnCinemas",
        value: function returnCinemas() {
          // return cinemas
          var endpoint = this.apiService.getEndpoints().cinemas.get_cinemas;
          return this.apiService.get(endpoint);
        }
      }, {
        key: "getArticle",
        value: function getArticle(slug) {
          // return gallery album
          return this.apiService.get(this.apiService.getEndpoints().lifestyle.read_article + slug);
        }
      }, {
        key: "searchKB",
        value: function searchKB(phrase) {
          /*
          clearTimeout(this.searchTimeout);
          this.searchTimeout = setTimeout(() => {
            let endpoints: any = this.apiService.getEndpoints();
            this.apiService.get(endpoints.search + phrase).subscribe(
              response => {
                if ('data' in response) {
                  // console.log(response);
                  // show a dialog with the results
                  const dialogConfig = new MatDialogConfig();
                  this.dialog.open(SearchComponent, dialogConfig);
                       var x = Array.from(document.getElementsByClassName("cdk-overlay-container") as HTMLCollectionOf<HTMLElement>);
                  x[0].style.marginTop = "3%";
                       this.searchSource.next(response);
                }
              },
              error => { console.log('Coming Soon Err >', error); }
            );

          }, 900);
          */
        }
      }, {
        key: "movieTicketJourneyModal",
        value: function movieTicketJourneyModal(cinema, show, day, movie) {
          /*
          // show a dialog with the results
          let dialogConfig = new MatDialogConfig();
          dialogConfig.disableClose = true;
               let payload: any = {cinema:cinema,show:show,day:day,movie:movie};
          dialogConfig.data = payload;

          this.dialog.open(BuyComponent, dialogConfig);
               var x = Array.from(document.getElementsByClassName("cdk-overlay-container") as HTMLCollectionOf<HTMLElement>);
          x[0].style.marginTop = "3%";

          this.searchSource.next(payload);
          */
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
      }, {
        type: src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_4__["DummyService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/pages/home/home.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_4__["DummyService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map
