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


    __webpack_exports__["default"] = "<ion-header>\r\n    <div class=\"header_div\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button color=\"light\"></ion-menu-button>\r\n        </ion-buttons>\r\n        <img src=\"assets/imgs/KB-white-logo.svg\">\r\n        <ion-button class=\"search_btn\" slot=\"end\" fill=\"clear\" size=\"small\">\r\n            <ion-icon slot=\"icon-only\" name=\"search-outline\" color=\"light\"></ion-icon>\r\n        </ion-button>\r\n    </div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"main_content_div\">\r\n        <!-- Hero Slider Start -->\r\n        <ion-slides mode=\"ios\">\r\n            <ion-slide *ngFor=\"let item of mainSlider; let i = index\">\r\n              <div class=\"hero_slides\">\r\n                  <ion-label>{{i+1}}/{{mainSlider?.length}}</ion-label>\r\n                  <img src={{item}} class=\"main_content_div__hero_image\">\r\n                  <h3 class=\"main_content_div__movie_title\">Venom: Let There Be Carnage</h3>\r\n              </div>\r\n            </ion-slide>\r\n        </ion-slides>\r\n        <!-- Hero Slider End -->\r\n\r\n        <!-- Now Showing Start -->\r\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Top picks for you')\">Now Showing <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\r\n        <ion-slides mode=\"ios\" [options]=\"slideOpts\">\r\n            <ion-slide *ngFor=\"let featured of featuredMovies\" (click)=\"goToVideo(featured)\">\r\n                <div class=\"main_content_div__top-picks-slider\">\r\n                    <div class=\"main_content_div__top_picks\">\r\n                        <img src={{featured.movie_poster}}>\r\n                    </div>\r\n                    <button class=\"buy_ticket movies_btn\">Buy Ticket</button>\r\n                    <h5>{{featured.movie_name}}</h5>\r\n                    \r\n                </div>\r\n            </ion-slide>\r\n        </ion-slides>\r\n        <!-- Now Showing End -->\r\n\r\n        <!-- Movies By Category Start -->\r\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Top picks for you')\">Movies By Category <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\r\n        \r\n        <ion-slides mode=\"ios\" [options]=\"slideOpts2\">\r\n            <ion-slide *ngFor=\"let item of  (images | slice : 0: 12)\"(click)=\"goToVideo()\">\r\n                <div class=\"flex_div\">\r\n                    <div class=\"main_content_div__category_img\">\r\n                        <div class=\"cat_group bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\r\n                    </div>\r\n                    <ion-label class=\"name\">{{item.name}}</ion-label>\r\n                </div>\r\n            </ion-slide>\r\n        </ion-slides>\r\n        <!-- Movies By Category End -->\r\n\r\n        <!-- Hot Events Start -->\r\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Live News')\">Hot Events <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\r\n        \r\n        <ion-slides mode=\"ios\" [options]=\"slideOpts3\">\r\n            <ion-slide *ngFor=\"let item of (images | slice : 5: 14)\" (click)=\"goToVideo()\">\r\n                <div class=\"card-BG\">\r\n                    <div class=\"back_image4 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\">\r\n                    </div>\r\n                    <button class=\"buy_ticket events_btn-lg\">Buy Ticket</button>\r\n                    <div class=\"card-BG__info-wrapper\">\r\n                        <ion-label class=\"card-BG__event_date\">January 27, 2022</ion-label>\r\n                        <div class=\"card-BG__location-wrapper\">\r\n                            <div class=\"card-BG__line\"></div>\r\n                            <ion-label class=\"card-BG__location\">Kenya National Theater</ion-label>\r\n                        </div>\r\n                        <ion-label class=\"card-BG__event-title\">{{item.name}}</ion-label>\r\n                    </div>\r\n                </div>\r\n            </ion-slide>\r\n        </ion-slides>\r\n        <!-- Hot Events End -->\r\n    </div>\r\n</ion-content>";
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


    __webpack_exports__["default"] = ".main_content_div {\n  width: 100%;\n  padding: 10px;\n}\n.main_content_div__hero_image {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.main_content_div__movie_title {\n  color: white;\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 100%;\n  font-size: 14px;\n  font-weight: bold;\n}\n.main_content_div__top_picks {\n  border-radius: 10px;\n  height: 150px;\n  overflow: hidden;\n}\n.main_content_div__top-picks-slider {\n  height: auto;\n  width: 100%;\n}\n.main_content_div__top-picks-slider img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.main_content_div__top-picks-slider h5 {\n  color: white;\n  margin: 0;\n  font-size: 14px;\n  transform: translateY(-50%);\n  text-align: center;\n}\n.main_content_div .hero_slides {\n  height: 250px;\n  width: 100%;\n  border-radius: 15px;\n  overflow: hidden;\n  position: relative;\n}\n.main_content_div .hero_slides::before {\n  content: \"\";\n  width: 100%;\n  height: 20%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.main_content_div .hero_slides ion-label {\n  position: absolute;\n  right: 5px;\n  font-size: 14px;\n}\n.main_content_div__category_img {\n  display: grid;\n  place-items: center;\n  height: 80px;\n  width: 80px;\n  min-width: 80px;\n  border-radius: 50%;\n  border: 1px solid var(--ion-color-dark-tint);\n}\n.main_content_div__category_img .cat_group {\n  height: 50px;\n  width: 50px;\n  min-width: 50px;\n  border-radius: 50%;\n}\n.main_content_div .head_lbl {\n  font-family: \"medium\";\n  display: block;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  position: relative;\n}\n.main_content_div .head_lbl ion-icon {\n  position: absolute;\n  right: 0;\n  font-size: 20px;\n  color: #707070;\n}\n.main_content_div ion-slide {\n  margin-right: 7px;\n}\n.main_content_div .back_image2 {\n  height: 150px;\n  width: 100%;\n  border-radius: 5px;\n}\n.main_content_div .back_image3 {\n  height: 80px;\n  width: 80px;\n  min-width: 80px;\n  border: 3px solid var(--ion-color-primary);\n  border-radius: 50%;\n}\n.main_content_div .back_image4 {\n  height: 100px;\n  width: 100%;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.main_content_div .back_image4 .bold_lbl {\n  font-family: \"semi-bold\";\n  text-transform: uppercase;\n}\n.main_content_div .flex_div {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n  padding: 5px;\n}\n.main_content_div .flex_div .name {\n  font-size: 12px;\n  margin-top: 5px;\n}\n.main_content_div .flex_div .live {\n  font-size: 12px;\n  font-family: \"medium\";\n  text-align: left;\n}\n.main_content_div .flex_div .live2 {\n  font-size: 12px;\n  font-family: \"medium\";\n  text-align: right;\n}\n.main_content_div .flex_div .play_div {\n  display: flex;\n  align-items: center;\n}\n.main_content_div .flex_div .play_div .play {\n  font-size: 20px;\n  margin-right: 1px;\n}\n.main_content_div .flex_div .play_div .name {\n  font-size: 14px;\n  margin-top: 0px;\n}\n.card-BG {\n  padding: 5px;\n  width: 100%;\n  height: 210px;\n  background-color: var(--ion-color-events-contrast);\n  border-radius: 7px;\n}\n.card-BG__info-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding-left: 5px;\n  width: 100%;\n}\n.card-BG__event_date {\n  display: block;\n  font-size: 12px;\n  text-align: left;\n  transform: translateY(-50%);\n  color: var(--ion-color-step-450);\n}\n.card-BG__location-wrapper {\n  display: flex;\n  flex-direction: row;\n  gap: 5px;\n  align-items: center;\n  justify-content: flex-start;\n}\n.card-BG__line {\n  width: 10px;\n  height: 2px;\n  background-color: var(--ion-color-events);\n}\n.card-BG__location {\n  font-size: 12px;\n  font-weight: bold;\n  color: var(--ion-color-events);\n}\n.card-BG__event-title {\n  display: block;\n  font-size: 16px;\n  text-align: left;\n  color: var(--ion-color-step-900);\n}\n.buy_ticket {\n  padding: 10px 15px;\n  font-size: 12px;\n  font-weight: bold;\n  border-radius: 30px;\n  transform: translateY(-50%);\n  color: white;\n  margin-bottom: 7px;\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;\n}\n.movies_btn {\n  background-color: var(--ion-color-movies);\n}\n.events_btn {\n  background-color: var(--ion-color-events);\n}\n.events_btn-lg {\n  background-color: var(--ion-color-events);\n  padding: 10px 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcbGFyYWdvblxcd3d3XFxLZW55YUJ1enotTW9iaWxlQXBwL3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQ0NGO0FEQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNDSjtBREVFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNBSjtBREdFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNESjtBRElFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNGSjtBRElJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDRk47QURLSTtFQUNFLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNITjtBRE9FO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNMSjtBRE9JO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLG9DQUFBO0FDTE47QURRSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNOTjtBRFVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtBQ1JKO0FEVUk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFFQSxrQkFBQTtBQ1ROO0FEZUU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNiSjtBRGNJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNaTjtBRGVFO0VBQ0UsaUJBQUE7QUNiSjtBRGdCRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNkSjtBRGlCRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7QUNmSjtBRGtCRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ2hCSjtBRGtCSTtFQUNFLHdCQUFBO0VBQ0EseUJBQUE7QUNoQk47QURvQkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ2xCSjtBRG9CSTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDbEJOO0FEcUJJO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNuQk47QURzQkk7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ3BCTjtBRHVCSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ3JCTjtBRHNCTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ3BCUjtBRHNCTTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDcEJSO0FEMEJBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0RBQUE7RUFDQSxrQkFBQTtBQ3ZCRjtBRHlCRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDdkJKO0FEMEJFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7QUN4Qko7QUQyQkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQ3pCSjtBRDRCRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUNBQUE7QUMxQko7QUQ2QkU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQzNCSjtBRDhCRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQzVCSjtBRG1DQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1EQUFBO0FDaENGO0FEbUNBO0VBQ0UseUNBQUE7QUNoQ0Y7QURtQ0E7RUFDRSx5Q0FBQTtBQ2hDRjtBRG1DQTtFQUNFLHlDQUFBO0VBQ0Esa0JBQUE7QUNoQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudF9kaXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICZfX2hlcm9faW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcblxyXG4gICZfX21vdmllX3RpdGxlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAmX190b3BfcGlja3Mge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgJl9fdG9wLXBpY2tzLXNsaWRlciB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxuXHJcbiAgICBoNSB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhlcm9fc2xpZGVzIHtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDIwJTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgIH1cclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2NhdGVnb3J5X2ltZyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgbWluLXdpZHRoOiA4MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XHJcblxyXG4gICAgLmNhdF9ncm91cCB7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgIG1pbi13aWR0aDogNTBweDtcclxuICAgICAgLy8gYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAuaGVhZF9sYmwge1xyXG4gICAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgfVxyXG4gIH1cclxuICBpb24tc2xpZGUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgfVxyXG5cclxuICAuYmFja19pbWFnZTIge1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuXHJcbiAgLmJhY2tfaW1hZ2UzIHtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgbWluLXdpZHRoOiA4MHB4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmJhY2tfaW1hZ2U0IHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgLmJvbGRfbGJsIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwic2VtaS1ib2xkXCI7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZmxleF9kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuXHJcbiAgICAubmFtZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5saXZlIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICAubGl2ZTIge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAucGxheV9kaXYge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAucGxheSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1CRyB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWV2ZW50cy1jb250cmFzdCk7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG5cclxuICAmX19pbmZvLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJl9fZXZlbnRfZGF0ZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNDUwKTtcclxuICB9XHJcblxyXG4gICZfX2xvY2F0aW9uLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBnYXA6IDVweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG5cclxuICAmX19saW5lIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZXZlbnRzKTtcclxuICB9XHJcblxyXG4gICZfX2xvY2F0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ldmVudHMpO1xyXG4gIH1cclxuXHJcbiAgJl9fZXZlbnQtdGl0bGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTkwMCk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09XHJcbi8vIEJVVFRPTiBTVFlMRVMgU1RBUlRcclxuLy8gPT09PT09PT09PT09PT09PT09PVxyXG4uYnV5X3RpY2tldCB7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDI1cHggNTBweCAtMTJweDtcclxufVxyXG5cclxuLm1vdmllc19idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tb3ZpZXMpO1xyXG59XHJcblxyXG4uZXZlbnRzX2J0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWV2ZW50cyk7XHJcbn1cclxuXHJcbi5ldmVudHNfYnRuLWxnIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZXZlbnRzKTtcclxuICBwYWRkaW5nOiAxMHB4IDM1cHg7XHJcbn1cclxuLy8gPT09PT09PT09PT09PT09PT09PVxyXG4vLyBCVVRUT04gU1RZTEVTIEVORFxyXG4vLyA9PT09PT09PT09PT09PT09PT09XHJcbiIsIi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2Rpdl9faGVyb19pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLm1haW5fY29udGVudF9kaXZfX21vdmllX3RpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1haW5fY29udGVudF9kaXZfX3RvcF9waWNrcyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubWFpbl9jb250ZW50X2Rpdl9fdG9wLXBpY2tzLXNsaWRlciB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2Rpdl9fdG9wLXBpY2tzLXNsaWRlciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2X190b3AtcGlja3Mtc2xpZGVyIGg1IHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuaGVyb19zbGlkZXMge1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmhlcm9fc2xpZGVzOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuaGVyb19zbGlkZXMgaW9uLWxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWFpbl9jb250ZW50X2Rpdl9fY2F0ZWdvcnlfaW1nIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogODBweDtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xufVxuLm1haW5fY29udGVudF9kaXZfX2NhdGVnb3J5X2ltZyAuY2F0X2dyb3VwIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgbWluLXdpZHRoOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuaGVhZF9sYmwge1xuICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5oZWFkX2xibCBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM3MDcwNzA7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tc2xpZGUge1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5iYWNrX2ltYWdlMiB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmFja19pbWFnZTMge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmJhY2tfaW1hZ2U0IHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmFja19pbWFnZTQgLmJvbGRfbGJsIHtcbiAgZm9udC1mYW1pbHk6IFwic2VtaS1ib2xkXCI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5saXZlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAubGl2ZTIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAucGxheV9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5wbGF5X2RpdiAucGxheSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLnBsYXlfZGl2IC5uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi5jYXJkLUJHIHtcbiAgcGFkZGluZzogNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWV2ZW50cy1jb250cmFzdCk7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cbi5jYXJkLUJHX19pbmZvLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5jYXJkLUJHX19ldmVudF9kYXRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNDUwKTtcbn1cbi5jYXJkLUJHX19sb2NhdGlvbi13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZ2FwOiA1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5jYXJkLUJHX19saW5lIHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZXZlbnRzKTtcbn1cbi5jYXJkLUJHX19sb2NhdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZXZlbnRzKTtcbn1cbi5jYXJkLUJHX19ldmVudC10aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC05MDApO1xufVxuXG4uYnV5X3RpY2tldCB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMjVweCA1MHB4IC0xMnB4O1xufVxuXG4ubW92aWVzX2J0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tb3ZpZXMpO1xufVxuXG4uZXZlbnRzX2J0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1ldmVudHMpO1xufVxuXG4uZXZlbnRzX2J0bi1sZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1ldmVudHMpO1xuICBwYWRkaW5nOiAxMHB4IDM1cHg7XG59Il19 */";
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
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "goToVideo",
        value: function goToVideo(movie) {
          this.router.navigate(['/video'], {
            state: {
              data: movie
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
                          });

                          console.log('this.featuredMovies complete >', _this.featuredMovies);
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
                featured: 'locDat_KeNmgkbMvsFtrd'
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
        key: "checkStat",
        value: function checkStat() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var l_strg, feturedMvsStore, featuredMoviesData, comeSoonMvsStore, SoonMoviesData, showingMvsStore, showingMoviesData, allMvsStore, allMoviesData, ftrdEvntsStore, ftrdEvntsData, hmeEvntsStore, hmeEvntsData, allEvntsStore, allEvntsData, cinemasStore, cinemasData;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    // check if today's data exists in all sections
                    l_strg = this.apiService.getEndpoints(); // check featured movies

                    feturedMvsStore = localStorage.getItem(l_strg.local_storage.movies.featured);

                    if (!feturedMvsStore) {
                      _context4.next = 9;
                      break;
                    }

                    featuredMoviesData = JSON.parse(feturedMvsStore);

                    if (!(Object.keys(featuredMoviesData.featured_movies).length == 0 || featuredMoviesData.date != this.dateToday)) {
                      _context4.next = 7;
                      break;
                    }

                    _context4.next = 7;
                    return this.fetchFeaturedMovies();

                  case 7:
                    _context4.next = 11;
                    break;

                  case 9:
                    _context4.next = 11;
                    return this.fetchFeaturedMovies();

                  case 11:
                    // check coming soon movies
                    comeSoonMvsStore = localStorage.getItem(l_strg.local_storage.movies.coming_soon);

                    if (!comeSoonMvsStore) {
                      _context4.next = 19;
                      break;
                    }

                    SoonMoviesData = JSON.parse(comeSoonMvsStore);

                    if (!(Object.keys(SoonMoviesData.coming_soon_movies).length == 0 || SoonMoviesData.date != this.dateToday)) {
                      _context4.next = 17;
                      break;
                    }

                    _context4.next = 17;
                    return this.fetchComingSoonMovies();

                  case 17:
                    _context4.next = 21;
                    break;

                  case 19:
                    _context4.next = 21;
                    return this.fetchComingSoonMovies();

                  case 21:
                    // check now showing movies
                    showingMvsStore = localStorage.getItem(l_strg.local_storage.movies.now_showing);

                    if (!showingMvsStore) {
                      _context4.next = 29;
                      break;
                    }

                    showingMoviesData = JSON.parse(showingMvsStore);

                    if (!(Object.keys(showingMoviesData.now_showing_movies).length == 0 || showingMoviesData.date != this.dateToday)) {
                      _context4.next = 27;
                      break;
                    }

                    _context4.next = 27;
                    return this.fetchNowShowingMovies();

                  case 27:
                    _context4.next = 31;
                    break;

                  case 29:
                    _context4.next = 31;
                    return this.fetchNowShowingMovies();

                  case 31:
                    // check all movies
                    allMvsStore = localStorage.getItem(l_strg.local_storage.movies.all);

                    if (!allMvsStore) {
                      _context4.next = 39;
                      break;
                    }

                    allMoviesData = JSON.parse(allMvsStore);

                    if (!(Object.keys(allMoviesData.all_movies).length == 0 || allMoviesData.date != this.dateToday)) {
                      _context4.next = 37;
                      break;
                    }

                    _context4.next = 37;
                    return this.fetchallMovies();

                  case 37:
                    _context4.next = 41;
                    break;

                  case 39:
                    _context4.next = 41;
                    return this.fetchallMovies();

                  case 41:
                    // check featured events
                    ftrdEvntsStore = localStorage.getItem(l_strg.local_storage.events.featured);

                    if (!ftrdEvntsStore) {
                      _context4.next = 49;
                      break;
                    }

                    ftrdEvntsData = JSON.parse(ftrdEvntsStore);

                    if (!(Object.keys(ftrdEvntsData.featured_events).length == 0 || ftrdEvntsData.date != this.dateToday)) {
                      _context4.next = 47;
                      break;
                    }

                    _context4.next = 47;
                    return this.fetchFeaturedEvents();

                  case 47:
                    _context4.next = 51;
                    break;

                  case 49:
                    _context4.next = 51;
                    return this.fetchFeaturedEvents();

                  case 51:
                    // check home page events
                    hmeEvntsStore = localStorage.getItem(l_strg.local_storage.events.home);

                    if (!hmeEvntsStore) {
                      _context4.next = 59;
                      break;
                    }

                    hmeEvntsData = JSON.parse(hmeEvntsStore);

                    if (!(Object.keys(hmeEvntsData.home_events).length == 0 || hmeEvntsData.date != this.dateToday)) {
                      _context4.next = 57;
                      break;
                    }

                    _context4.next = 57;
                    return this.fetchHomeEvents();

                  case 57:
                    _context4.next = 61;
                    break;

                  case 59:
                    _context4.next = 61;
                    return this.fetchHomeEvents();

                  case 61:
                    // check all events
                    allEvntsStore = localStorage.getItem(l_strg.local_storage.events.all);

                    if (!allEvntsStore) {
                      _context4.next = 69;
                      break;
                    }

                    allEvntsData = JSON.parse(allEvntsStore);

                    if (!(Object.keys(allEvntsData.all_events).length == 0 || allEvntsData.date != this.dateToday)) {
                      _context4.next = 67;
                      break;
                    }

                    _context4.next = 67;
                    return this.fetchAllEvents();

                  case 67:
                    _context4.next = 71;
                    break;

                  case 69:
                    _context4.next = 71;
                    return this.fetchAllEvents();

                  case 71:
                    // check cinemas
                    cinemasStore = localStorage.getItem(l_strg.local_storage.cinemas);

                    if (!cinemasStore) {
                      _context4.next = 79;
                      break;
                    }

                    cinemasData = JSON.parse(cinemasStore);

                    if (!(Object.keys(cinemasData.cinemas).length == 0 || cinemasData.date != this.dateToday)) {
                      _context4.next = 77;
                      break;
                    }

                    _context4.next = 77;
                    return this.fetchCinemas();

                  case 77:
                    _context4.next = 81;
                    break;

                  case 79:
                    _context4.next = 81;
                    return this.fetchCinemas();

                  case 81:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "fetchallMovies",
        value: function fetchallMovies() {
          var _this2 = this;

          // fetch all movies, limit to 30 (old data doesn't help much)
          var endpoints = this.apiService.getEndpoints();
          this.apiService.get(endpoints.movies.all_movies).subscribe(function (response) {
            if ('data' in response) {
              // console.log('dataSvc - ALL MOVIES RESP >', response.data);
              var allMvs = Array.isArray(response.data) ? response.data : []; // default to an empty arr if anything else is returned

              var l_strg = _this2.apiService.getEndpoints();

              var allMovies = {
                date: _this2.dateToday,
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
          var _this3 = this;

          // fetch the coming soon movies
          var endpoints = this.apiService.getEndpoints();
          this.apiService.get(endpoints.movies.coming_soon).subscribe(function (response) {
            if ('data' in response) {
              // console.log('dataSvc - COMING SOON RESP >', response.data);
              var cSoon = Array.isArray(response.data) ? response.data : []; // default to an empty arr if anything else is returned

              var l_strg = _this3.apiService.getEndpoints();

              var comingSoonMovies = {
                date: _this3.dateToday,
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
          var _this4 = this;

          // fetch the now showing movies
          var endpoints = this.apiService.getEndpoints();
          this.apiService.get(endpoints.movies.now_showing).subscribe(function (response) {
            if ('data' in response) {
              // console.log('dataSvc - NOW SHOWING RESP >', response.data);
              var nShowing = Array.isArray(response.data) ? response.data : []; // default to an empty arr if anything else is returned

              var l_strg = _this4.apiService.getEndpoints();

              var nowShowingMovies = {
                date: _this4.dateToday,
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
          var _this5 = this;

          // fetch the featured movies
          var featuredMovies = {};
          var endpoints = this.apiService.getEndpoints();
          var featuredMoviesResp = this.apiService.get(endpoints.movies.featured_movies).subscribe(function (response) {
            if ('data' in response) {
              // console.log('dataSvc - FEATURED RESP >', response.data);
              var featured = Array.isArray(response.data) ? response.data : []; // default to an empty arr if anything else is returned

              var l_strg = _this5.apiService.getEndpoints();

              featuredMovies.date = _this5.dateToday;
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
        key: "fetchHomeEvents",
        value: function fetchHomeEvents() {
          var _this6 = this;

          // fetch events for the home slider
          var endpoints = this.apiService.getEndpoints();
          this.apiService.get(endpoints.events.home_events).subscribe(function (response) {
            if ('data' in response) {
              // console.log('dataSvc - HOME EVENTS RESP >', response.data);
              var hmEvents = Array.isArray(response.data) ? response.data : []; // default to an empty arr if anything else is returned

              var l_strg = _this6.apiService.getEndpoints();

              var homeEvents = {
                date: _this6.dateToday,
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
          var _this7 = this;

          // fetch the featured events
          var endpoints = this.apiService.getEndpoints();
          this.apiService.get(endpoints.events.featured_events).subscribe(function (response) {
            if (response) {
              if ('data' in response) {
                // console.log('dataSvc - FEATURED EVENTS RESP >', response.data);
                var featured = Array.isArray(response.data) ? response.data : []; // default to an empty arr if anything else is returned

                var l_strg = _this7.apiService.getEndpoints();

                var featuredeEvents = {
                  date: _this7.dateToday,
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
          var _this8 = this;

          // fetch the featured events
          var endpoints = this.apiService.getEndpoints();
          this.apiService.get(endpoints.events.all_events).subscribe(function (response) {
            if ('data' in response) {
              // console.log('dataSvc - ALL EVENTS RESP >', response.data);
              var allEvents = Array.isArray(response.data) ? response.data : []; // default to an empty arr if anything else is returned

              var l_strg = _this8.apiService.getEndpoints();

              var events = {
                date: _this8.dateToday,
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
          var _this9 = this;

          // fetch the cinemas
          var cinemas = {};
          var endpoints = this.apiService.getEndpoints();
          var cinemasResp = this.apiService.get(endpoints.cinemas.get_cinemas).subscribe(function (response) {
            if ('data' in response) {
              // console.log('dataSvc - CINEMAS RESP >', response.data);
              var theaters = Array.isArray(response.data) ? response.data : []; // default to an empty arr if anything else is returned

              var l_strg = _this9.apiService.getEndpoints();

              cinemas.date = _this9.dateToday;
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

      return DataService;
    }();

    DataService.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
      }];
    };

    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]])], DataService);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map