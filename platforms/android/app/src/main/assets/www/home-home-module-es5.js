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


    __webpack_exports__["default"] = "<ion-header>\n    <div class=\"header_div\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button color=\"light\"></ion-menu-button>\n        </ion-buttons>\n        <img src=\"assets/imgs/KB-white-logo.svg\">\n        <ion-button class=\"search_btn\" slot=\"end\" fill=\"clear\" size=\"small\">\n            <ion-icon slot=\"icon-only\" name=\"search-outline\" color=\"light\"></ion-icon>\n        </ion-button>\n    </div>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_content_div\">\n        <!-- Hero Slider Start -->\n        <ion-slides mode=\"ios\">\n            <ion-slide *ngFor=\"let item of mainSlider; let i = index\">\n              <div class=\"hero_slides\">\n                  <ion-label>{{i+1}}/{{mainSlider?.length}}</ion-label>\n                  <img src={{item}} class=\"main_content_div__hero_image\">\n                  <h3 class=\"main_content_div__movie_title\">Venom: Let There Be Carnage</h3>\n              </div>\n            </ion-slide>\n        </ion-slides>\n        <!-- Hero Slider End -->\n\n        <!-- Now Showing Start -->\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Top picks for you')\">Now Showing <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\n        <ion-slides mode=\"ios\" [options]=\"slideOpts\">\n            <ion-slide *ngFor=\"let item of images\" (click)=\"goToVideo()\">\n                <div class=\"main_content_div__top-picks-slider\">\n                    <div class=\"main_content_div__top_picks\">\n                        <img src={{item.img}}>\n                    </div>\n                    <button class=\"buy_ticket movies_btn\">Buy Ticket</button>\n                    <h5>{{item.name}}</h5>\n                    \n                </div>\n            </ion-slide>\n        </ion-slides>\n        <!-- Now Showing End -->\n\n        <!-- Movies By Category Start -->\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Top picks for you')\">Movies By Category <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\n        \n        <ion-slides mode=\"ios\" [options]=\"slideOpts2\">\n            <ion-slide *ngFor=\"let item of  (images | slice : 0: 12)\"(click)=\"goToVideo()\">\n                <div class=\"flex_div\">\n                    <div class=\"main_content_div__category_img\">\n                        <div class=\"cat_group bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\n                    </div>\n                    <ion-label class=\"name\">{{item.name}}</ion-label>\n                </div>\n            </ion-slide>\n        </ion-slides>\n        <!-- Movies By Category End -->\n\n        <!-- Hot Events Start -->\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Live News')\">Hot Events <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\n        \n        <ion-slides mode=\"ios\" [options]=\"slideOpts3\">\n            <ion-slide *ngFor=\"let item of (images | slice : 5: 14)\" (click)=\"goToVideo()\">\n                <div class=\"card-BG\">\n                    <div class=\"back_image4 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\">\n                    </div>\n                    <button class=\"buy_ticket events_btn-lg\">Buy Ticket</button>\n                    <div class=\"card-BG__info-wrapper\">\n                        <ion-label class=\"card-BG__event_date\">January 27, 2022</ion-label>\n                        <div class=\"card-BG__location-wrapper\">\n                            <div class=\"card-BG__line\"></div>\n                            <ion-label class=\"card-BG__location\">Kenya National Theater</ion-label>\n                        </div>\n                        <ion-label class=\"card-BG__event-title\">{{item.name}}</ion-label>\n                    </div>\n                </div>\n            </ion-slide>\n        </ion-slides>\n        <!-- Hot Events End -->\n    </div>\n</ion-content>\n\n<!-- <ion-content>\n    <div class=\"main_content_div\">\n\n        <ion-slides mode=\"ios\">\n            <ion-slide *ngFor=\"let item of mainSlider; let i = index\">\n              <div class=\"back_image bg_image\" [style.backgroundImage]=\"'url('+item+')'\">\n                  <ion-label>{{i+1}}/{{mainSlider?.length}}</ion-label>\n              </div>\n            </ion-slide>\n        </ion-slides>\n\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Top picks for you')\">Top picks for you <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\n        <ion-slides mode=\"ios\" [options]=\"slideOpts\">\n            <ion-slide *ngFor=\"let item of images\" (click)=\"goToVideo()\">\n                <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\n            </ion-slide>\n        </ion-slides>\n\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Best of VIP Previews')\">Best of VIP Previews <ion-icon name=\"chevron-forward-outline\"></ion-icon> </ion-label>\n        <ion-slides mode=\"ios\" [options]=\"slideOpts2\">\n            <ion-slide *ngFor=\"let item of  (images | slice : 0: 12)\" (click)=\"goToVideo()\">\n                <div class=\"flex_div\">\n                    <div class=\"back_image3 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\n                    <ion-label class=\"name\">{{item.name}}</ion-label>\n                </div>\n            </ion-slide>\n        </ion-slides>\n\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Live News')\">Live News <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\n        <ion-slides mode=\"ios\" [options]=\"slideOpts3\">\n            <ion-slide *ngFor=\"let item of (images | slice : 5: 14)\" (click)=\"goToVideo()\">\n                <div class=\"back_image4 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\">\n                    <div class=\"flex_div\">\n                        <ion-label class=\"live\">LIVE</ion-label>\n                        <div class=\"play_div\">\n                            <ion-icon name=\"caret-forward-outline\" class=\"play\"></ion-icon>\n                            <ion-label class=\"name\">{{item.name}}</ion-label>\n                        </div>\n                    </div>\n                </div>\n            </ion-slide>\n        </ion-slides>\n\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Coronavirus Crisis')\">Coronavirus Crisis <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\n        <ion-slides mode=\"ios\" [options]=\"slideOpts3\">\n            <ion-slide *ngFor=\"let item of (images | slice : 0: 10)\" (click)=\"goToVideo()\">\n                <div class=\"back_image4 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\">\n                    <div class=\"flex_div\">\n                        <ion-label class=\"live2\">9 min</ion-label>\n                        <div class=\"play_div\">\n                            <ion-icon name=\"caret-forward-outline\" class=\"play\"></ion-icon>\n                            <ion-label class=\"name\">{{item.name}}</ion-label>\n                        </div>\n                    </div>   \n                </div>\n            </ion-slide>\n        </ion-slides>\n\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Popular Movies')\">Popular Movies <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\n        <ion-slides mode=\"ios\" [options]=\"slideOpts\">\n            <ion-slide *ngFor=\"let item of (images | slice : 4 : 10)\" (click)=\"goToVideo()\">\n                <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\n            </ion-slide>\n        </ion-slides>\n\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Popular shows')\">Popular shows <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\n        <ion-slides mode=\"ios\" [options]=\"slideOpts\">\n            <ion-slide *ngFor=\"let item of (images | slice : 8 : 18)\" (click)=\"goToVideo()\">\n                <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\n            </ion-slide>\n        </ion-slides>\n\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Best in Sports')\">Best in Sports <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\n        <ion-slides mode=\"ios\" [options]=\"slideOpts3\">\n            <ion-slide *ngFor=\"let item of sports\" (click)=\"goToVideo()\">\n                <div class=\"back_image4 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\">\n                    <div class=\"flex_div\">\n                        <ion-label class=\"live2\">9 min</ion-label>\n                        <div class=\"play_div\">\n                          <ion-icon name=\"caret-forward-outline\" class=\"play\"></ion-icon>\n                          <ion-label class=\"name\">{{item.name}}</ion-label>\n                        </div>\n                    </div>\n                </div>\n            </ion-slide>\n        </ion-slides>\n\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Popular in Reality')\">Popular Mpvies <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\n        <ion-slides mode=\"ios\" [options]=\"slideOpts\">\n            <ion-slide *ngFor=\"let item of (images | slice : 8 : 18)\" (click)=\"goToVideo()\">\n                <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\n            </ion-slide>\n        </ion-slides>\n\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Popular in Wildlife')\">Popular in Wildlife <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\n        <ion-slides mode=\"ios\" [options]=\"slideOpts\">\n            <ion-slide *ngFor=\"let item of animals\" (click)=\"goToVideo()\">\n                <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\n            </ion-slide>\n        </ion-slides>\n\n        <ion-label class=\"head_lbl\" (click)=\"goToCatogory('Best in Genres')\">Best in Genres <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\n        <ion-slides mode=\"ios\" [options]=\"slideOpts3\">\n            <ion-slide *ngFor=\"let item of genrens\" (click)=\"goToCatList(item.name)\">\n                <div class=\"back_image4 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\">\n                  <ion-label class=\"bold_lbl\">{{item.name}}</ion-label>\n                </div>\n          </ion-slide>\n        </ion-slides>\n\n    </div>\n</ion-content> -->\n";
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


    __webpack_exports__["default"] = ".main_content_div {\n  width: 100%;\n  padding: 10px;\n}\n.main_content_div__hero_image {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.main_content_div__movie_title {\n  color: white;\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 100%;\n  font-size: 14px;\n  font-weight: bold;\n}\n.main_content_div__top_picks {\n  border-radius: 10px;\n  height: 150px;\n  overflow: hidden;\n}\n.main_content_div__top-picks-slider {\n  height: auto;\n  width: 100%;\n}\n.main_content_div__top-picks-slider img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.main_content_div__top-picks-slider h5 {\n  color: white;\n  margin: 0;\n  font-size: 14px;\n  transform: translateY(-50%);\n  text-align: center;\n}\n.main_content_div .hero_slides {\n  height: 250px;\n  width: 100%;\n  border-radius: 15px;\n  overflow: hidden;\n  position: relative;\n}\n.main_content_div .hero_slides::before {\n  content: \"\";\n  width: 100%;\n  height: 20%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.main_content_div .hero_slides ion-label {\n  position: absolute;\n  right: 5px;\n  font-size: 14px;\n}\n.main_content_div__category_img {\n  display: grid;\n  place-items: center;\n  height: 80px;\n  width: 80px;\n  min-width: 80px;\n  border-radius: 50%;\n  border: 1px solid var(--ion-color-dark-tint);\n}\n.main_content_div__category_img .cat_group {\n  height: 50px;\n  width: 50px;\n  min-width: 50px;\n  border-radius: 50%;\n}\n.main_content_div .head_lbl {\n  font-family: \"medium\";\n  display: block;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  position: relative;\n}\n.main_content_div .head_lbl ion-icon {\n  position: absolute;\n  right: 0;\n  font-size: 20px;\n  color: #707070;\n}\n.main_content_div ion-slide {\n  margin-right: 7px;\n}\n.main_content_div .back_image2 {\n  height: 150px;\n  width: 100%;\n  border-radius: 5px;\n}\n.main_content_div .back_image3 {\n  height: 80px;\n  width: 80px;\n  min-width: 80px;\n  border: 3px solid var(--ion-color-primary);\n  border-radius: 50%;\n}\n.main_content_div .back_image4 {\n  height: 100px;\n  width: 100%;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.main_content_div .back_image4 .bold_lbl {\n  font-family: \"semi-bold\";\n  text-transform: uppercase;\n}\n.main_content_div .flex_div {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n  padding: 5px;\n}\n.main_content_div .flex_div .name {\n  font-size: 12px;\n  margin-top: 5px;\n}\n.main_content_div .flex_div .live {\n  font-size: 12px;\n  font-family: \"medium\";\n  text-align: left;\n}\n.main_content_div .flex_div .live2 {\n  font-size: 12px;\n  font-family: \"medium\";\n  text-align: right;\n}\n.main_content_div .flex_div .play_div {\n  display: flex;\n  align-items: center;\n}\n.main_content_div .flex_div .play_div .play {\n  font-size: 20px;\n  margin-right: 1px;\n}\n.main_content_div .flex_div .play_div .name {\n  font-size: 14px;\n  margin-top: 0px;\n}\n.card-BG {\n  padding: 5px;\n  width: 100%;\n  height: 210px;\n  background-color: var(--ion-color-events-contrast);\n  border-radius: 7px;\n}\n.card-BG__info-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding-left: 5px;\n  width: 100%;\n}\n.card-BG__event_date {\n  display: block;\n  font-size: 12px;\n  text-align: left;\n  transform: translateY(-50%);\n  color: var(--ion-color-step-450);\n}\n.card-BG__location-wrapper {\n  display: flex;\n  flex-direction: row;\n  gap: 5px;\n  align-items: center;\n  justify-content: flex-start;\n}\n.card-BG__line {\n  width: 10px;\n  height: 2px;\n  background-color: var(--ion-color-events);\n}\n.card-BG__location {\n  font-size: 12px;\n  font-weight: bold;\n  color: var(--ion-color-events);\n}\n.card-BG__event-title {\n  display: block;\n  font-size: 16px;\n  text-align: left;\n  color: var(--ion-color-step-900);\n}\n.buy_ticket {\n  padding: 10px 15px;\n  font-size: 12px;\n  font-weight: bold;\n  border-radius: 30px;\n  transform: translateY(-50%);\n  color: white;\n  margin-bottom: 7px;\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;\n}\n.movies_btn {\n  background-color: var(--ion-color-movies);\n}\n.events_btn {\n  background-color: var(--ion-color-events);\n}\n.events_btn-lg {\n  background-color: var(--ion-color-events);\n  padding: 10px 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EaWdpdGFsL0RvY3VtZW50cy9UZXN0Z3JvdW5kL0tCIE1vYmlsZSBBUFAvS0JfQXBwX1Jlcy9LZW55YUJ1enotTW9iaWxlQXBwL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDQ0Y7QURDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0NKO0FERUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0FKO0FER0U7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0RKO0FESUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0ZKO0FESUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNGTjtBREtJO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQ0hOO0FET0U7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0xKO0FET0k7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0Esb0NBQUE7QUNMTjtBRFFJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ05OO0FEVUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDUko7QURVSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUVBLGtCQUFBO0FDVE47QURlRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ2JKO0FEY0k7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ1pOO0FEZUU7RUFDRSxpQkFBQTtBQ2JKO0FEZ0JFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ2RKO0FEaUJFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtBQ2ZKO0FEa0JFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDaEJKO0FEa0JJO0VBQ0Usd0JBQUE7RUFDQSx5QkFBQTtBQ2hCTjtBRG9CRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDbEJKO0FEb0JJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNsQk47QURxQkk7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ25CTjtBRHNCSTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDcEJOO0FEdUJJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDckJOO0FEc0JNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDcEJSO0FEc0JNO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNwQlI7QUQwQkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrREFBQTtFQUNBLGtCQUFBO0FDdkJGO0FEeUJFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUN2Qko7QUQwQkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtBQ3hCSjtBRDJCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FDekJKO0FENEJFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSx5Q0FBQTtBQzFCSjtBRDZCRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FDM0JKO0FEOEJFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FDNUJKO0FEbUNBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbURBQUE7QUNoQ0Y7QURtQ0E7RUFDRSx5Q0FBQTtBQ2hDRjtBRG1DQTtFQUNFLHlDQUFBO0FDaENGO0FEbUNBO0VBQ0UseUNBQUE7RUFDQSxrQkFBQTtBQ2hDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuXG4gICZfX2hlcm9faW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuXG4gICZfX21vdmllX3RpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gICZfX3RvcF9waWNrcyB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAmX190b3AtcGlja3Mtc2xpZGVyIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB9XG5cbiAgICBoNSB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgLmhlcm9fc2xpZGVzIHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAyMCU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIH1cblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogNXB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgfVxuXG4gICZfX2NhdGVnb3J5X2ltZyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogODBweDtcbiAgICBtaW4td2lkdGg6IDgwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuXG4gICAgLmNhdF9ncm91cCB7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICAgIG1pbi13aWR0aDogNTBweDtcbiAgICAgIC8vIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gIH1cblxuICAvLyAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIC5oZWFkX2xibCB7XG4gICAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBpb24taWNvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMDtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgIH1cbiAgfVxuICBpb24tc2xpZGUge1xuICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICB9XG5cbiAgLmJhY2tfaW1hZ2UyIHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxuXG4gIC5iYWNrX2ltYWdlMyB7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIG1pbi13aWR0aDogODBweDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG5cbiAgLmJhY2tfaW1hZ2U0IHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAuYm9sZF9sYmwge1xuICAgICAgZm9udC1mYW1pbHk6IFwic2VtaS1ib2xkXCI7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cbiAgfVxuXG4gIC5mbGV4X2RpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogNXB4O1xuXG4gICAgLm5hbWUge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIH1cblxuICAgIC5saXZlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG5cbiAgICAubGl2ZTIge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG5cbiAgICAucGxheV9kaXYge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAucGxheSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcHg7XG4gICAgICB9XG4gICAgICAubmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uY2FyZC1CRyB7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1ldmVudHMtY29udHJhc3QpO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG5cbiAgJl9faW5mby13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgJl9fZXZlbnRfZGF0ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC00NTApO1xuICB9XG5cbiAgJl9fbG9jYXRpb24td3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGdhcDogNXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgJl9fbGluZSB7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWV2ZW50cyk7XG4gIH1cblxuICAmX19sb2NhdGlvbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZXZlbnRzKTtcbiAgfVxuXG4gICZfX2V2ZW50LXRpdGxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtOTAwKTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09XG4vLyBCVVRUT04gU1RZTEVTIFNUQVJUXG4vLyA9PT09PT09PT09PT09PT09PT09XG4uYnV5X3RpY2tldCB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMjVweCA1MHB4IC0xMnB4O1xufVxuXG4ubW92aWVzX2J0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tb3ZpZXMpO1xufVxuXG4uZXZlbnRzX2J0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1ldmVudHMpO1xufVxuXG4uZXZlbnRzX2J0bi1sZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1ldmVudHMpO1xuICBwYWRkaW5nOiAxMHB4IDM1cHg7XG59XG4vLyA9PT09PT09PT09PT09PT09PT09XG4vLyBCVVRUT04gU1RZTEVTIEVORFxuLy8gPT09PT09PT09PT09PT09PT09PVxuIiwiLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2X19oZXJvX2ltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4ubWFpbl9jb250ZW50X2Rpdl9fbW92aWVfdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbl9jb250ZW50X2Rpdl9fdG9wX3BpY2tzIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2X190b3AtcGlja3Mtc2xpZGVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2X190b3AtcGlja3Mtc2xpZGVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLm1haW5fY29udGVudF9kaXZfX3RvcC1waWNrcy1zbGlkZXIgaDUge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5oZXJvX3NsaWRlcyB7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuaGVyb19zbGlkZXM6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5oZXJvX3NsaWRlcyBpb24tbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2X19jYXRlZ29yeV9pbWcge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG59XG4ubWFpbl9jb250ZW50X2Rpdl9fY2F0ZWdvcnlfaW1nIC5jYXRfZ3JvdXAge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5oZWFkX2xibCB7XG4gIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmhlYWRfbGJsIGlvbi1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzcwNzA3MDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1zbGlkZSB7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmJhY2tfaW1hZ2UyIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5iYWNrX2ltYWdlMyB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIG1pbi13aWR0aDogODBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmFja19pbWFnZTQge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5iYWNrX2ltYWdlNCAuYm9sZF9sYmwge1xuICBmb250LWZhbWlseTogXCJzZW1pLWJvbGRcIjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5uYW1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLmxpdmUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5saXZlMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5wbGF5X2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLnBsYXlfZGl2IC5wbGF5IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDFweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAucGxheV9kaXYgLm5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLmNhcmQtQkcge1xuICBwYWRkaW5nOiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZXZlbnRzLWNvbnRyYXN0KTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuLmNhcmQtQkdfX2luZm8td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNhcmQtQkdfX2V2ZW50X2RhdGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC00NTApO1xufVxuLmNhcmQtQkdfX2xvY2F0aW9uLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBnYXA6IDVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLmNhcmQtQkdfX2xpbmUge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1ldmVudHMpO1xufVxuLmNhcmQtQkdfX2xvY2F0aW9uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ldmVudHMpO1xufVxuLmNhcmQtQkdfX2V2ZW50LXRpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTkwMCk7XG59XG5cbi5idXlfdGlja2V0IHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAyNXB4IDUwcHggLTEycHg7XG59XG5cbi5tb3ZpZXNfYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1vdmllcyk7XG59XG5cbi5ldmVudHNfYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWV2ZW50cyk7XG59XG5cbi5ldmVudHNfYnRuLWxnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWV2ZW50cyk7XG4gIHBhZGRpbmc6IDEwcHggMzVweDtcbn0iXX0= */";
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


    var src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/dummy.service */
    "./src/app/services/dummy.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HomePage = /*#__PURE__*/function () {
      function HomePage(dummy, router) {
        _classCallCheck(this, HomePage);

        this.dummy = dummy;
        this.router = router;
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
        this.images = this.dummy.images;
        this.sports = this.dummy.sports;
        this.animals = this.dummy.animal;
        this.genrens = this.dummy.genrens;
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToVideo",
        value: function goToVideo() {
          this.router.navigate(['/video']);
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
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__["DummyService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__["DummyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map