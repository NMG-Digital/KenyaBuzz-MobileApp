function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-video-video-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/video/video.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/video/video.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesVideoVideoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button mode=\"md\" color=\"light\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>{{movie.movie_name}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"main_content_div\">\r\n\r\n        <div class=\"video_div\">\r\n            <video width=\"100%\" height=\"240\" controls poster=\"assets/imgs/news/news1.jpg\">\r\n                <source src=\"assets/imgs/news/video.mp4\" type=\"video/mp4\">\r\n            </video>\r\n        </div>\r\n\r\n        <div class=\"cont_div\">\r\n            <div class=\"flex_div\">\r\n              <div class=\"back_image bg_image\" [style.backgroundImage]=\"'url(assets/imgs/news/news1.jpg)'\"></div>\r\n              <div class=\"content_div\">\r\n                <ion-label class=\"title_lbl\">{{movie.movie_name}}</ion-label>\r\n                <ion-label class=\"light_lbl\">{{movie.genres}}</ion-label>\r\n                <ion-label class=\"light_lbl\">2010</ion-label>\r\n              </div>\r\n            </div>\r\n\r\n            <ion-label class=\"detail_lbl\">\r\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry.\r\n                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s\r\n            </ion-label>\r\n            <ion-label class=\"see_more\">See More</ion-label>\r\n\r\n            <ion-label class=\"gray_lbl\">Lorem Ipsum is simply dummy text of the printing and typesetting</ion-label>\r\n\r\n            <ion-grid fixed>\r\n              <ion-row>\r\n                <ion-col size=\"4\">\r\n                  <ion-button expand=\"block\" size=\"small\">\r\n                    <ion-icon slot=\"start\" name=\"arrow-down-sharp\"></ion-icon>\r\n                    Download\r\n                  </ion-button>\r\n                </ion-col>\r\n                <ion-col size=\"4\">\r\n                  <ion-button expand=\"block\" size=\"small\">\r\n                    <ion-icon slot=\"start\" name=\"add-sharp\"></ion-icon>\r\n                    Watchlist\r\n                  </ion-button>\r\n                </ion-col>\r\n                <ion-col size=\"4\">\r\n                  <ion-button expand=\"block\" size=\"small\">\r\n                    <ion-icon slot=\"start\" name=\"arrow-redo-sharp\"></ion-icon>\r\n                    Share\r\n                  </ion-button>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n\r\n            <ion-label class=\"head_lbl\">Trailers</ion-label>\r\n\r\n            <div class=\"flex_div2\">\r\n                <div class=\"back_image4 bg_image\" [style.backgroundImage]=\"'url(assets/imgs/news/news3.jpg)'\"></div>\r\n                <div class=\"play_div\">\r\n                    <ion-icon name=\"caret-forward-outline\" class=\"play\"></ion-icon>\r\n                    <ion-label class=\"name\">Watch Trailer</ion-label>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- <ion-label class=\"head_lbl\" (click)=\"goTovideoList('You may also like')\">You may also like \r\n                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n            </ion-label>\r\n            <ion-slides mode=\"ios\" [options]=\"slideOpts\">\r\n                <ion-slide *ngFor=\"let item of images\">\r\n                    <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\r\n                </ion-slide>\r\n            </ion-slides> -->\r\n        </div>\r\n    </div>\r\n\r\n<!-- Movie info -->\r\n    <div class=\"movie_info\">\r\n      <div class=\"movie_info__movie-hero bg_image\" [style.backgroundImage]=\"'url('+movie.movie_poster+')'\">\r\n        <ion-label class=\"movie_info__title\">{{movie.movie_name}}</ion-label>\r\n        <div class=\"movie_info__date_time\">\r\n          <ion-label class=\"movie_info__date\">Date Released:</ion-label>\r\n          <ion-label class=\"movie_info__time\">{{movie.api_data.release_date}}</ion-label>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"movie_info__about-movie\">\r\n        <div class=\"movie_info__ratings-run\">\r\n          <div class=\"ratings\">\r\n            <!-- ImDb -->\r\n            <div class=\"movie_info__movie-ratings\">\r\n              <img src=\"../../../assets/icon/imdb-badge.png\">\r\n              <ion-label class=\"\">{{movie.api_data.vote_average}}</ion-label>\r\n              <span class=\"material-icons-outlined\">\r\n                star\r\n              </span>\r\n            </div>\r\n            <!-- Rotten Tomato -->\r\n            <div class=\"movie_info__movie-ratings\">\r\n              <img src=\"../../../assets/icon/rotten-tomatoes.png\">\r\n              <ion-label class=\"\">{{movie.rotten_tomatoes}}</ion-label>\r\n            </div>\r\n          </div>\r\n          <div class=\"runtime\">\r\n            <span class=\"material-icons-outlined\">\r\n              schedule\r\n            </span>\r\n            <ion-label class=\"\">{{movie.api_data.runtime}} Mins</ion-label> \r\n          </div>\r\n        </div>\r\n        <div class=\"movie_info__genres\">\r\n          <ion-label class=\"\">{{movie.genres}}</ion-label> \r\n        </div>\r\n        <div class=\"movie_info__description\">\r\n          <ion-label class=\"movie_info__title\">Description</ion-label>\r\n          <ion-label class=\"movie_info__synopsis\">{{movie.synopsis}}</ion-label>\r\n        </div>\r\n        <div class=\"movie_info__CTAs\">\r\n          <button class=\"buy_ticket movies_btn\">Buy Ticket</button>\r\n          <span class=\"material-icons-outlined\">\r\n            share\r\n          </span>\r\n        </div>\r\n      </div>\r\n<!-- Cast section start -->\r\n      <div class=\"movie_info__cast\">\r\n        <ion-label class=\"movie_info__title\">Cast</ion-label>\r\n        <ion-slides mode=\"ios\" [options]=\"slideOpts\">\r\n          <ion-slide *ngFor=\"let cast of movie.cast_data.cast; index as i;\">\r\n              <div class=\"cast-content\">\r\n                <div class=\"cast-imgs\" >\r\n                  <img src=\"{{cast.profile_path}}\" alt=\"{{cast.name}}\"/>\r\n                </div>\r\n                <ion-label class=\"cast-name\">{{cast.name}}</ion-label>\r\n                <ion-label class=\"cast-xter\">{{cast.character}}</ion-label>\r\n              </div>\r\n          </ion-slide>\r\n        </ion-slides>\r\n      </div>\r\n    </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/video/video-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/video/video-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: VideoPageRoutingModule */

  /***/
  function srcAppPagesVideoVideoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoPageRoutingModule", function () {
      return VideoPageRoutingModule;
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


    var _video_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./video.page */
    "./src/app/pages/video/video.page.ts");

    var routes = [{
      path: '',
      component: _video_page__WEBPACK_IMPORTED_MODULE_3__["VideoPage"]
    }];

    var VideoPageRoutingModule = function VideoPageRoutingModule() {
      _classCallCheck(this, VideoPageRoutingModule);
    };

    VideoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VideoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/video/video.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/video/video.module.ts ***!
    \*********************************************/

  /*! exports provided: VideoPageModule */

  /***/
  function srcAppPagesVideoVideoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoPageModule", function () {
      return VideoPageModule;
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


    var _video_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./video-routing.module */
    "./src/app/pages/video/video-routing.module.ts");
    /* harmony import */


    var _video_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./video.page */
    "./src/app/pages/video/video.page.ts");

    var VideoPageModule = function VideoPageModule() {
      _classCallCheck(this, VideoPageModule);
    };

    VideoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _video_routing_module__WEBPACK_IMPORTED_MODULE_5__["VideoPageRoutingModule"]],
      declarations: [_video_page__WEBPACK_IMPORTED_MODULE_6__["VideoPage"]]
    })], VideoPageModule);
    /***/
  },

  /***/
  "./src/app/pages/video/video.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/video/video.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesVideoVideoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main_content_div {\n  width: 100%;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .video_div {\n  position: relative;\n  margin-bottom: 10px;\n}\n.main_content_div .cont_div {\n  padding: 10px;\n}\n.main_content_div .flex_div {\n  display: flex;\n}\n.main_content_div .flex_div .back_image {\n  height: 70px;\n  width: 60px;\n  border-radius: 5px;\n  min-width: 60px;\n}\n.main_content_div .flex_div .content_div {\n  padding-left: 10px;\n}\n.main_content_div .flex_div .content_div .title_lbl {\n  font-family: \"medium\";\n  margin-bottom: 5px;\n}\n.main_content_div .flex_div .content_div .light_lbl {\n  color: gray;\n  margin-bottom: 5px;\n}\n.main_content_div .detail_lbl {\n  margin-top: 10px;\n  font-size: 15px;\n}\n.main_content_div .see_more {\n  text-align: right;\n  font-size: 15px;\n  color: gray;\n}\n.main_content_div .gray_lbl {\n  color: gray;\n  font-size: 13px;\n}\n.main_content_div ion-button {\n  --background: #202020;\n  --border-radius: 3px;\n  height: 35px;\n  font-size: 12px;\n}\n.main_content_div .head_lbl {\n  font-family: \"medium\";\n  display: block;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  position: relative;\n}\n.main_content_div .head_lbl ion-icon {\n  position: absolute;\n  right: 0;\n  font-size: 20px;\n  color: #707070;\n}\n.main_content_div .flex_div2 {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  position: relative;\n}\n.main_content_div .flex_div2 .back_image4 {\n  height: 100px;\n  width: 165px;\n  border-radius: 5px;\n}\n.main_content_div .flex_div2 .name {\n  font-size: 12px;\n  margin-top: 5px;\n}\n.main_content_div .flex_div2 .bold_lbl {\n  font-family: \"medium\";\n  position: absolute;\n  top: 75%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-transform: uppercase;\n}\n.main_content_div .flex_div2 .play_div {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  bottom: 0;\n}\n.main_content_div .flex_div2 .play_div .play {\n  font-size: 20px;\n  margin-right: 10px;\n}\n.main_content_div .flex_div2 .play_div .name {\n  font-size: 14px;\n  margin-top: 0px;\n}\n.main_content_div ion-slide {\n  margin-right: 7px;\n}\n.main_content_div .back_image2 {\n  height: 140px;\n  width: 100%;\n  border-radius: 5px;\n}\n.movie_info {\n  width: 100%;\n}\n.movie_info__movie-hero {\n  padding: 50px 10px;\n  width: 100%;\n  height: 350px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n.movie_info__movie-hero::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.6) 100%, black 50%, rgba(0, 0, 0, 0.9) 0%);\n}\n.movie_info__title {\n  font-size: 20px;\n  font-weight: bold;\n  display: block;\n  position: relative;\n  z-index: 2;\n  margin-bottom: 20px;\n}\n.movie_info__date, .movie_info__time {\n  display: block;\n  font-weight: 300;\n  font-size: 12px;\n  position: relative;\n  z-index: 2;\n}\n.movie_info__about-movie {\n  width: 100%;\n  transform: translateY(-25px);\n  border-radius: 25px 25px 0 0;\n  background-color: var(--ion-color-step-100);\n  padding: 30px 10px;\n}\n.movie_info__about-movie .ratings-run {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.movie_info__ratings-run {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.movie_info__ratings-run .ratings {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 20px;\n}\n.movie_info__ratings-run .runtime {\n  background-color: var(--ion-color-step-100);\n  border-radius: 30px;\n  padding: 5px 10px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 5px;\n}\n.movie_info__ratings-run .runtime span.material-icons-outlined {\n  font-size: 14px;\n  color: var(--ion-color-step-450);\n}\n.movie_info__ratings-run .runtime ion-label {\n  font-size: 12px;\n  color: var(--ion-color-step-450);\n}\n.movie_info__movie-ratings {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n}\n.movie_info__movie-ratings ion-label {\n  font-size: 13px;\n  font-weight: bold;\n  vertical-align: bottom;\n  margin: 3px 0 0 5px;\n}\n.movie_info__movie-ratings span.material-icons-outlined {\n  font-size: 14px;\n}\n.movie_info__genres {\n  margin-top: 10px;\n  font-size: 13px;\n}\n.movie_info__description {\n  margin-top: 30px;\n}\n.movie_info__description ion-label.movie_info__title {\n  margin-bottom: 10px;\n  font-size: 15px;\n  font-weight: bold;\n}\n.movie_info__description ion-label.movie_info__synopsis {\n  font-size: 14px;\n  color: var(--ion-color-step-550);\n}\n.movie_info__CTAs {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  margin-top: 20px;\n  gap: 10px;\n}\n.movie_info__CTAs button {\n  transform: translateY(0);\n  margin-bottom: 0;\n}\n.movie_info__CTAs span.material-icons-outlined {\n  padding: 5px;\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;\n  color: var(--ion-color-step-550);\n  background-color: var(--ion-color-step-150);\n  border: 1px solid var(--ion-color-step-250);\n  width: 33px;\n  height: 33px;\n  border-radius: 50%;\n  font-size: 16px;\n  display: grid;\n  place-items: center;\n}\n.movie_info__cast {\n  padding: 0 10px 30px 10px;\n}\n.movie_info__cast ion-label.movie_info__title {\n  margin-bottom: 10px;\n  font-size: 15px;\n  font-weight: bold;\n}\n.movie_info__cast ion-slide {\n  margin-right: 7px;\n}\n.movie_info__cast .cast-content {\n  width: 100%;\n  max-width: 100%;\n}\n.movie_info__cast .cast-content ion-label {\n  display: block;\n}\n.movie_info__cast .cast-content .cast-name {\n  font-size: 13px;\n  font-weight: bold;\n  color: var(--ion-color-step-600);\n  margin: 10px 0 5px 0;\n}\n.movie_info__cast .cast-content .cast-xter {\n  font-size: 13px;\n  font-weight: 400;\n  color: var(--ion-color-step-500);\n}\n.movie_info__cast .cast-imgs {\n  height: 150px;\n  width: 100%;\n  border-radius: 20px;\n  overflow: hidden;\n}\n.movie_info__cast .cast-imgs img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlkZW8vQzpcXGxhcmFnb25cXHd3d1xcS2VueWFCdXp6LU1vYmlsZUFwcC9zcmNcXGFwcFxccGFnZXNcXHZpZGVvXFx2aWRlby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3ZpZGVvL3ZpZGVvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjtBRENFO0VBQ0UsY0FBQTtBQ0NKO0FERUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDQUo7QURHRTtFQUNFLGFBQUE7QUNESjtBRElFO0VBQ0UsYUFBQTtBQ0ZKO0FER0k7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0ROO0FER0k7RUFDRSxrQkFBQTtBQ0ROO0FER007RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FDRFI7QURHTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0RSO0FES0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNISjtBREtFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0hKO0FES0U7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ0hKO0FETUU7RUFDRSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNKSjtBRE9FO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDTEo7QURPSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDTE47QURTRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ1BKO0FEU0k7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDUE47QURVSTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDUk47QURXSTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7QUNUTjtB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c2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnRfZGl2IHtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLnZpZGVvX2RpdiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRfZGl2IHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuZmxleF9kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC5iYWNrX2ltYWdlIHtcclxuICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICB3aWR0aDogNjBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGVudF9kaXYge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcblxyXG4gICAgICAudGl0bGVfbGJsIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmxpZ2h0X2xibCB7XHJcbiAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5kZXRhaWxfbGJsIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gIC5zZWVfbW9yZSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gIH1cclxuICAuZ3JheV9sYmwge1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG5cclxuICBpb24tYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzIwMjAyMDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRfbGJsIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZmxleF9kaXYyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgLmJhY2tfaW1hZ2U0IHtcclxuICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgd2lkdGg6IDE2NXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hbWUge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuYm9sZF9sYmwge1xyXG4gICAgICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDc1JTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxuXHJcbiAgICAucGxheV9kaXYge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgLnBsYXkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLm5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1zbGlkZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICB9XHJcblxyXG4gIC5iYWNrX2ltYWdlMiB7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubW92aWVfaW5mbyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICZfX21vdmllLWhlcm8ge1xyXG4gICAgcGFkZGluZzogNTBweCAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICB0byB0b3AsXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjYpIDEwMCUsXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAxKSA1MCUsXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjkpIDAlXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX190aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5cclxuICAmX19kYXRlLFxyXG4gICZfX3RpbWUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcblxyXG4gICZfX2Fib3V0LW1vdmllIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNXB4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwIDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xMDApO1xyXG4gICAgcGFkZGluZzogMzBweCAxMHB4O1xyXG5cclxuICAgIC5yYXRpbmdzLXJ1biB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19yYXRpbmdzLXJ1biB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgLnJhdGluZ3Mge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGdhcDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAucnVudGltZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGdhcDogNXB4O1xyXG5cclxuICAgICAgc3Bhbi5tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC00NTApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNDUwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fbW92aWUtcmF0aW5ncyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgICAgbWFyZ2luOiAzcHggMCAwIDVweDtcclxuICAgIH1cclxuXHJcbiAgICBzcGFuLm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fZ2VucmVzIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG5cclxuICAmX19kZXNjcmlwdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG5cclxuICAgIGlvbi1sYWJlbC5tb3ZpZV9pbmZvX190aXRsZSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWxhYmVsLm1vdmllX2luZm9fX3N5bm9wc2lzIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTUwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX0NUQXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGdhcDogMTBweDtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3Bhbi5tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCB7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMjVweCA1MHB4IC0xMnB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTUwKTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwKTtcclxuICAgICAgd2lkdGg6IDMzcHg7XHJcbiAgICAgIGhlaWdodDogMzNweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19jYXN0IHtcclxuICAgIHBhZGRpbmc6IDAgMTBweCAzMHB4IDEwcHg7XHJcblxyXG4gICAgaW9uLWxhYmVsLm1vdmllX2luZm9fX3RpdGxlIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tc2xpZGUge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FzdC1jb250ZW50IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuXHJcbiAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXN0LW5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwKTtcclxuICAgICAgICBtYXJnaW46IDEwcHggMCA1cHggMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhc3QteHRlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTUwMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2FzdC1pbWdzIHtcclxuICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudmlkZW9fZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRfZGl2IHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLmJhY2tfaW1hZ2Uge1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1pbi13aWR0aDogNjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAuY29udGVudF9kaXYge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLmNvbnRlbnRfZGl2IC50aXRsZV9sYmwge1xuICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5jb250ZW50X2RpdiAubGlnaHRfbGJsIHtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXRhaWxfbGJsIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnNlZV9tb3JlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IGdyYXk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZ3JheV9sYmwge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzIwMjAyMDtcbiAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIGhlaWdodDogMzVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmhlYWRfbGJsIHtcbiAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuaGVhZF9sYmwgaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjNzA3MDcwO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2MiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYyIC5iYWNrX2ltYWdlNCB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxNjVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2MiAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2MiAuYm9sZF9sYmwge1xuICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDc1JTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdjIgLnBsYXlfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYyIC5wbGF5X2RpdiAucGxheSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2MiAucGxheV9kaXYgLm5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1zbGlkZSB7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmJhY2tfaW1hZ2UyIHtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm1vdmllX2luZm8ge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tb3ZpZV9pbmZvX19tb3ZpZS1oZXJvIHtcbiAgcGFkZGluZzogNTBweCAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLm1vdmllX2luZm9fX21vdmllLWhlcm86OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMCwgMCwgMCwgMC42KSAxMDAlLCBibGFjayA1MCUsIHJnYmEoMCwgMCwgMCwgMC45KSAwJSk7XG59XG4ubW92aWVfaW5mb19fdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm1vdmllX2luZm9fX2RhdGUsIC5tb3ZpZV9pbmZvX190aW1lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xufVxuLm1vdmllX2luZm9fX2Fib3V0LW1vdmllIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjVweCk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwIDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCk7XG4gIHBhZGRpbmc6IDMwcHggMTBweDtcbn1cbi5tb3ZpZV9pbmZvX19hYm91dC1tb3ZpZSAucmF0aW5ncy1ydW4ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm1vdmllX2luZm9fX3JhdGluZ3MtcnVuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm1vdmllX2luZm9fX3JhdGluZ3MtcnVuIC5yYXRpbmdzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBnYXA6IDIwcHg7XG59XG4ubW92aWVfaW5mb19fcmF0aW5ncy1ydW4gLnJ1bnRpbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xMDApO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBnYXA6IDVweDtcbn1cbi5tb3ZpZV9pbmZvX19yYXRpbmdzLXJ1biAucnVudGltZSBzcGFuLm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNDUwKTtcbn1cbi5tb3ZpZV9pbmZvX19yYXRpbmdzLXJ1biAucnVudGltZSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC00NTApO1xufVxuLm1vdmllX2luZm9fX21vdmllLXJhdGluZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4ubW92aWVfaW5mb19fbW92aWUtcmF0aW5ncyBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICBtYXJnaW46IDNweCAwIDAgNXB4O1xufVxuLm1vdmllX2luZm9fX21vdmllLXJhdGluZ3Mgc3Bhbi5tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tb3ZpZV9pbmZvX19nZW5yZXMge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ubW92aWVfaW5mb19fZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLm1vdmllX2luZm9fX2Rlc2NyaXB0aW9uIGlvbi1sYWJlbC5tb3ZpZV9pbmZvX190aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubW92aWVfaW5mb19fZGVzY3JpcHRpb24gaW9uLWxhYmVsLm1vdmllX2luZm9fX3N5bm9wc2lzIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTUwKTtcbn1cbi5tb3ZpZV9pbmZvX19DVEFzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBnYXA6IDEwcHg7XG59XG4ubW92aWVfaW5mb19fQ1RBcyBidXR0b24ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ubW92aWVfaW5mb19fQ1RBcyBzcGFuLm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHtcbiAgcGFkZGluZzogNXB4O1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAyNXB4IDUwcHggLTEycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC01NTApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTApO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0yNTApO1xuICB3aWR0aDogMzNweDtcbiAgaGVpZ2h0OiAzM3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbn1cbi5tb3ZpZV9pbmZvX19jYXN0IHtcbiAgcGFkZGluZzogMCAxMHB4IDMwcHggMTBweDtcbn1cbi5tb3ZpZV9pbmZvX19jYXN0IGlvbi1sYWJlbC5tb3ZpZV9pbmZvX190aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubW92aWVfaW5mb19fY2FzdCBpb24tc2xpZGUge1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbn1cbi5tb3ZpZV9pbmZvX19jYXN0IC5jYXN0LWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLm1vdmllX2luZm9fX2Nhc3QgLmNhc3QtY29udGVudCBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tb3ZpZV9pbmZvX19jYXN0IC5jYXN0LWNvbnRlbnQgLmNhc3QtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDApO1xuICBtYXJnaW46IDEwcHggMCA1cHggMDtcbn1cbi5tb3ZpZV9pbmZvX19jYXN0IC5jYXN0LWNvbnRlbnQgLmNhc3QteHRlciB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTUwMCk7XG59XG4ubW92aWVfaW5mb19fY2FzdCAuY2FzdC1pbWdzIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubW92aWVfaW5mb19fY2FzdCAuY2FzdC1pbWdzIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/video/video.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/video/video.page.ts ***!
    \*******************************************/

  /*! exports provided: VideoPage */

  /***/
  function srcAppPagesVideoVideoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoPage", function () {
      return VideoPage;
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

    var VideoPage = /*#__PURE__*/function () {
      function VideoPage(dummy, router) {
        _classCallCheck(this, VideoPage);

        this.dummy = dummy;
        this.router = router;
        this.slideOpts = {
          slidesPerView: 3
        };
        this.images = this.dummy.images; // if(this.router.getCurrentNavigation().extras.state && "data" in this.router.getCurrentNavigation().extras.state) {
        //   this.movie = this.router.getCurrentNavigation().extras.state.data;
        //   console.log(this.movie);
        // } else {
        //   this.router.navigate(['/home']);
        // }

        this.movie = this.router.getCurrentNavigation().extras.state.data;
        this.movie.cast_data.cast.forEach(function (cast) {
          cast.profile_path = "https://image.tmdb.org/t/p/w342" + cast.profile_path;
        });
        console.log(this.movie);
      }

      _createClass(VideoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
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
      }]);

      return VideoPage;
    }();

    VideoPage.ctorParameters = function () {
      return [{
        type: src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__["DummyService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    VideoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-video',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./video.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/video/video.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./video.page.scss */
      "./src/app/pages/video/video.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__["DummyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], VideoPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-video-video-module-es5.js.map