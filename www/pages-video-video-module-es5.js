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


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button mode=\"md\" color=\"light\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{movie.movie_name}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_content_div\">\n\n        <div class=\"video_div\">\n            <video width=\"100%\" height=\"240\" controls poster=\"assets/imgs/news/news1.jpg\">\n                <source src=\"assets/imgs/news/video.mp4\" type=\"video/mp4\">\n            </video>\n        </div>\n\n        <div class=\"cont_div\">\n            <div class=\"flex_div\">\n              <div class=\"back_image bg_image\" [style.backgroundImage]=\"'url(assets/imgs/news/news1.jpg)'\"></div>\n              <div class=\"content_div\">\n                <ion-label class=\"title_lbl\">{{movie.movie_name}}</ion-label>\n                <ion-label class=\"light_lbl\">{{movie.genres}}</ion-label>\n                <ion-label class=\"light_lbl\">2010</ion-label>\n              </div>\n            </div>\n\n            <ion-label class=\"detail_lbl\">\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s\n            </ion-label>\n            <ion-label class=\"see_more\">See More</ion-label>\n\n            <ion-label class=\"gray_lbl\">Lorem Ipsum is simply dummy text of the printing and typesetting</ion-label>\n\n            <ion-grid fixed>\n              <ion-row>\n                <ion-col size=\"4\">\n                  <ion-button expand=\"block\" size=\"small\">\n                    <ion-icon slot=\"start\" name=\"arrow-down-sharp\"></ion-icon>\n                    Download\n                  </ion-button>\n                </ion-col>\n                <ion-col size=\"4\">\n                  <ion-button expand=\"block\" size=\"small\">\n                    <ion-icon slot=\"start\" name=\"add-sharp\"></ion-icon>\n                    Watchlist\n                  </ion-button>\n                </ion-col>\n                <ion-col size=\"4\">\n                  <ion-button expand=\"block\" size=\"small\">\n                    <ion-icon slot=\"start\" name=\"arrow-redo-sharp\"></ion-icon>\n                    Share\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n\n            <ion-label class=\"head_lbl\">Trailers</ion-label>\n\n            <div class=\"flex_div2\">\n                <div class=\"back_image4 bg_image\" [style.backgroundImage]=\"'url(assets/imgs/news/news3.jpg)'\"></div>\n                <div class=\"play_div\">\n                    <ion-icon name=\"caret-forward-outline\" class=\"play\"></ion-icon>\n                    <ion-label class=\"name\">Watch Trailer</ion-label>\n                </div>\n            </div>\n\n            <!-- <ion-label class=\"head_lbl\" (click)=\"goTovideoList('You may also like')\">You may also like \n                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n            </ion-label>\n            <ion-slides mode=\"ios\" [options]=\"slideOpts\">\n                <ion-slide *ngFor=\"let item of images\">\n                    <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\n                </ion-slide>\n            </ion-slides> -->\n        </div>\n    </div>\n\n<!-- Movie info -->\n    <div class=\"movie_info\">\n      <div class=\"movie_info__movie-hero bg_image\" [style.backgroundImage]=\"'url('+movie.movie_poster+')'\">\n        <ion-label class=\"movie_info__title\">{{movie.movie_name}}</ion-label>\n        <div class=\"movie_info__date_time\">\n          <ion-label class=\"movie_info__date\">Date Released:</ion-label>\n          <ion-label class=\"movie_info__time\">{{movie.api_data.release_date}}</ion-label>\n        </div>\n      </div>\n\n      <div class=\"movie_info__about-movie\">\n        <div class=\"movie_info__ratings-run\">\n          <div class=\"ratings\">\n            <!-- ImDb -->\n            <div class=\"movie_info__movie-ratings\">\n              <img src=\"../../../assets/icon/imdb-badge.png\">\n              <ion-label class=\"\">{{movie.api_data.vote_average}}</ion-label>\n              <span class=\"material-icons-outlined\">\n                star\n              </span>\n            </div>\n            <!-- Rotten Tomato -->\n            <div class=\"movie_info__movie-ratings\">\n              <img src=\"../../../assets/icon/rotten-tomatoes.png\">\n              <ion-label class=\"\">{{movie.rotten_tomatoes}}</ion-label>\n            </div>\n          </div>\n          <div class=\"runtime\">\n            <span class=\"material-icons-outlined\">\n              schedule\n            </span>\n            <ion-label class=\"\">{{movie.api_data.runtime}} Mins</ion-label> \n          </div>\n        </div>\n        <div class=\"movie_info__genres\">\n          <ion-label class=\"\">{{movie.genres}}</ion-label> \n        </div>\n        <div class=\"movie_info__description\">\n          <ion-label class=\"movie_info__title\">Description</ion-label>\n          <ion-label class=\"movie_info__synopsis\">{{movie.synopsis}}</ion-label>\n        </div>\n        <div class=\"movie_info__CTAs\">\n          <button class=\"buy_ticket movies_btn\">Buy Ticket</button>\n          <span class=\"material-icons-outlined\">\n            share\n          </span>\n        </div>\n      </div>\n<!-- Cast section start -->\n      <div class=\"movie_info__cast\">\n        <ion-label class=\"movie_info__title\">Cast</ion-label>\n        <ion-slides mode=\"ios\" [options]=\"slideOpts\">\n          <ion-slide *ngFor=\"let cast of movie.cast_data.cast; index as i;\">\n              <div class=\"cast-content\">\n                <div class=\"cast-imgs\" >\n                  <img src=\"{{cast.profile_path}}\" alt=\"{{cast.name}}\"/>\n                </div>\n                <ion-label class=\"cast-name\">{{cast.name}}</ion-label>\n                <ion-label class=\"cast-xter\">{{cast.character}}</ion-label>\n              </div>\n          </ion-slide>\n        </ion-slides>\n      </div>\n    </div>\n</ion-content>";
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


    __webpack_exports__["default"] = ".main_content_div {\n  width: 100%;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .video_div {\n  position: relative;\n  margin-bottom: 10px;\n}\n.main_content_div .cont_div {\n  padding: 10px;\n}\n.main_content_div .flex_div {\n  display: flex;\n}\n.main_content_div .flex_div .back_image {\n  height: 70px;\n  width: 60px;\n  border-radius: 5px;\n  min-width: 60px;\n}\n.main_content_div .flex_div .content_div {\n  padding-left: 10px;\n}\n.main_content_div .flex_div .content_div .title_lbl {\n  font-family: \"medium\";\n  margin-bottom: 5px;\n}\n.main_content_div .flex_div .content_div .light_lbl {\n  color: gray;\n  margin-bottom: 5px;\n}\n.main_content_div .detail_lbl {\n  margin-top: 10px;\n  font-size: 15px;\n}\n.main_content_div .see_more {\n  text-align: right;\n  font-size: 15px;\n  color: gray;\n}\n.main_content_div .gray_lbl {\n  color: gray;\n  font-size: 13px;\n}\n.main_content_div ion-button {\n  --background: #202020;\n  --border-radius: 3px;\n  height: 35px;\n  font-size: 12px;\n}\n.main_content_div .head_lbl {\n  font-family: \"medium\";\n  display: block;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  position: relative;\n}\n.main_content_div .head_lbl ion-icon {\n  position: absolute;\n  right: 0;\n  font-size: 20px;\n  color: #707070;\n}\n.main_content_div .flex_div2 {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  position: relative;\n}\n.main_content_div .flex_div2 .back_image4 {\n  height: 100px;\n  width: 165px;\n  border-radius: 5px;\n}\n.main_content_div .flex_div2 .name {\n  font-size: 12px;\n  margin-top: 5px;\n}\n.main_content_div .flex_div2 .bold_lbl {\n  font-family: \"medium\";\n  position: absolute;\n  top: 75%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-transform: uppercase;\n}\n.main_content_div .flex_div2 .play_div {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  bottom: 0;\n}\n.main_content_div .flex_div2 .play_div .play {\n  font-size: 20px;\n  margin-right: 10px;\n}\n.main_content_div .flex_div2 .play_div .name {\n  font-size: 14px;\n  margin-top: 0px;\n}\n.main_content_div ion-slide {\n  margin-right: 7px;\n}\n.main_content_div .back_image2 {\n  height: 140px;\n  width: 100%;\n  border-radius: 5px;\n}\n.movie_info {\n  width: 100%;\n}\n.movie_info__movie-hero {\n  padding: 50px 10px;\n  width: 100%;\n  height: 350px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n.movie_info__movie-hero::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.6) 100%, black 50%, rgba(0, 0, 0, 0.9) 0%);\n}\n.movie_info__title {\n  font-size: 20px;\n  font-weight: bold;\n  display: block;\n  position: relative;\n  z-index: 2;\n  margin-bottom: 20px;\n}\n.movie_info__date, .movie_info__time {\n  display: block;\n  font-weight: 300;\n  font-size: 12px;\n  position: relative;\n  z-index: 2;\n}\n.movie_info__about-movie {\n  width: 100%;\n  transform: translateY(-25px);\n  border-radius: 25px 25px 0 0;\n  background-color: var(--ion-color-step-100);\n  padding: 30px 10px;\n}\n.movie_info__about-movie .ratings-run {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.movie_info__ratings-run {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.movie_info__ratings-run .ratings {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 20px;\n}\n.movie_info__ratings-run .runtime {\n  background-color: var(--ion-color-step-100);\n  border-radius: 30px;\n  padding: 5px 10px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 5px;\n}\n.movie_info__ratings-run .runtime span.material-icons-outlined {\n  font-size: 14px;\n  color: var(--ion-color-step-450);\n}\n.movie_info__ratings-run .runtime ion-label {\n  font-size: 12px;\n  color: var(--ion-color-step-450);\n}\n.movie_info__movie-ratings {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n}\n.movie_info__movie-ratings ion-label {\n  font-size: 13px;\n  font-weight: bold;\n  vertical-align: bottom;\n  margin: 3px 0 0 5px;\n}\n.movie_info__movie-ratings span.material-icons-outlined {\n  font-size: 14px;\n}\n.movie_info__genres {\n  margin-top: 10px;\n  font-size: 13px;\n}\n.movie_info__description {\n  margin-top: 30px;\n}\n.movie_info__description ion-label.movie_info__title {\n  margin-bottom: 10px;\n  font-size: 15px;\n  font-weight: bold;\n}\n.movie_info__description ion-label.movie_info__synopsis {\n  font-size: 14px;\n  color: var(--ion-color-step-550);\n}\n.movie_info__CTAs {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  margin-top: 20px;\n  gap: 10px;\n}\n.movie_info__CTAs button {\n  transform: translateY(0);\n  margin-bottom: 0;\n}\n.movie_info__CTAs span.material-icons-outlined {\n  padding: 5px;\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;\n  color: var(--ion-color-step-550);\n  background-color: var(--ion-color-step-150);\n  border: 1px solid var(--ion-color-step-250);\n  width: 33px;\n  height: 33px;\n  border-radius: 50%;\n  font-size: 16px;\n  display: grid;\n  place-items: center;\n}\n.movie_info__cast {\n  padding: 0 10px 30px 10px;\n}\n.movie_info__cast ion-label.movie_info__title {\n  margin-bottom: 10px;\n  font-size: 15px;\n  font-weight: bold;\n}\n.movie_info__cast ion-slide {\n  margin-right: 7px;\n}\n.movie_info__cast .cast-content {\n  width: 100%;\n  max-width: 100%;\n}\n.movie_info__cast .cast-content ion-label {\n  display: block;\n}\n.movie_info__cast .cast-content .cast-name {\n  font-size: 13px;\n  font-weight: bold;\n  color: var(--ion-color-step-600);\n  margin: 10px 0 5px 0;\n}\n.movie_info__cast .cast-content .cast-xter {\n  font-size: 13px;\n  font-weight: 400;\n  color: var(--ion-color-step-500);\n}\n.movie_info__cast .cast-imgs {\n  height: 150px;\n  width: 100%;\n  border-radius: 20px;\n  overflow: hidden;\n}\n.movie_info__cast .cast-imgs img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EaWdpdGFsL0RvY3VtZW50cy9UZXN0Z3JvdW5kL0tCIE1vYmlsZSBBUFAvS0JfQXBwX1Jlcy9LZW55YUJ1enotTW9iaWxlQXBwL3NyYy9hcHAvcGFnZXMvdmlkZW8vdmlkZW8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy92aWRlby92aWRlby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7QURDRTtFQUNFLGNBQUE7QUNDSjtBREVFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ0FKO0FER0U7RUFDRSxhQUFBO0FDREo7QURJRTtFQUNFLGFBQUE7QUNGSjtBREdJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNETjtBREdJO0VBQ0Usa0JBQUE7QUNETjtBREdNO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQ0RSO0FER007RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNEUjtBREtFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDSEo7QURLRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNISjtBREtFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNISjtBRE1FO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDSko7QURPRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0xKO0FET0k7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0xOO0FEU0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNQSjtBRFNJO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1BOO0FEVUk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ1JOO0FEV0k7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FB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cy92aWRlby92aWRlby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGlvbi1sYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAudmlkZW9fZGl2IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gIC5jb250X2RpdiB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIC5mbGV4X2RpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAuYmFja19pbWFnZSB7XG4gICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIG1pbi13aWR0aDogNjBweDtcbiAgICB9XG4gICAgLmNvbnRlbnRfZGl2IHtcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcblxuICAgICAgLnRpdGxlX2xibCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICB9XG4gICAgICAubGlnaHRfbGJsIHtcbiAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmRldGFpbF9sYmwge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIC5zZWVfbW9yZSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiBncmF5O1xuICB9XG4gIC5ncmF5X2xibCB7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMjAyMDIwO1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAuaGVhZF9sYmwge1xuICAgIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMDtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgIH1cbiAgfVxuXG4gIC5mbGV4X2RpdjIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAuYmFja19pbWFnZTQge1xuICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgIHdpZHRoOiAxNjVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG5cbiAgICAubmFtZSB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgfVxuXG4gICAgLmJvbGRfbGJsIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA3NSU7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuXG4gICAgLnBsYXlfZGl2IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgLnBsYXkge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIH1cbiAgICAgIC5uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW9uLXNsaWRlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgfVxuXG4gIC5iYWNrX2ltYWdlMiB7XG4gICAgaGVpZ2h0OiAxNDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbn1cblxuLm1vdmllX2luZm8ge1xuICB3aWR0aDogMTAwJTtcblxuICAmX19tb3ZpZS1oZXJvIHtcbiAgICBwYWRkaW5nOiA1MHB4IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICB0byB0b3AsXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMC42KSAxMDAlLFxuICAgICAgICByZ2JhKDAsIDAsIDAsIDEpIDUwJSxcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjkpIDAlXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gICZfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gICZfX2RhdGUsXG4gICZfX3RpbWUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuICB9XG5cbiAgJl9fYWJvdXQtbW92aWUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjVweCk7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDAgMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xMDApO1xuICAgIHBhZGRpbmc6IDMwcHggMTBweDtcblxuICAgIC5yYXRpbmdzLXJ1biB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cbiAgfVxuXG4gICZfX3JhdGluZ3MtcnVuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAucmF0aW5ncyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICBnYXA6IDIwcHg7XG4gICAgfVxuXG4gICAgLnJ1bnRpbWUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIGdhcDogNXB4O1xuXG4gICAgICBzcGFuLm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNDUwKTtcbiAgICAgIH1cblxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNDUwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmX19tb3ZpZS1yYXRpbmdzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgbWFyZ2luOiAzcHggMCAwIDVweDtcbiAgICB9XG5cbiAgICBzcGFuLm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cblxuICAmX19nZW5yZXMge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG5cbiAgJl9fZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG5cbiAgICBpb24tbGFiZWwubW92aWVfaW5mb19fdGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIGlvbi1sYWJlbC5tb3ZpZV9pbmZvX19zeW5vcHNpcyB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTUwKTtcbiAgICB9XG4gIH1cblxuICAmX19DVEFzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBnYXA6IDEwcHg7XG5cbiAgICBidXR0b24ge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICBzcGFuLm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDI1cHggNTBweCAtMTJweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC01NTApO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCk7XG4gICAgICB3aWR0aDogMzNweDtcbiAgICAgIGhlaWdodDogMzNweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gICZfX2Nhc3Qge1xuICAgIHBhZGRpbmc6IDAgMTBweCAzMHB4IDEwcHg7XG5cbiAgICBpb24tbGFiZWwubW92aWVfaW5mb19fdGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIGlvbi1zbGlkZSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgICB9XG5cbiAgICAuY2FzdC1jb250ZW50IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgLmNhc3QtbmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDApO1xuICAgICAgICBtYXJnaW46IDEwcHggMCA1cHggMDtcbiAgICAgIH1cblxuICAgICAgLmNhc3QteHRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTUwMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNhc3QtaW1ncyB7XG4gICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudmlkZW9fZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRfZGl2IHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLmJhY2tfaW1hZ2Uge1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1pbi13aWR0aDogNjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAuY29udGVudF9kaXYge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLmNvbnRlbnRfZGl2IC50aXRsZV9sYmwge1xuICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5jb250ZW50X2RpdiAubGlnaHRfbGJsIHtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXRhaWxfbGJsIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnNlZV9tb3JlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IGdyYXk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZ3JheV9sYmwge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzIwMjAyMDtcbiAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIGhlaWdodDogMzVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmhlYWRfbGJsIHtcbiAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuaGVhZF9sYmwgaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjNzA3MDcwO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2MiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYyIC5iYWNrX2ltYWdlNCB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxNjVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2MiAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2MiAuYm9sZF9sYmwge1xuICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDc1JTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdjIgLnBsYXlfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYyIC5wbGF5X2RpdiAucGxheSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2MiAucGxheV9kaXYgLm5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1zbGlkZSB7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmJhY2tfaW1hZ2UyIHtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm1vdmllX2luZm8ge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tb3ZpZV9pbmZvX19tb3ZpZS1oZXJvIHtcbiAgcGFkZGluZzogNTBweCAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLm1vdmllX2luZm9fX21vdmllLWhlcm86OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMCwgMCwgMCwgMC42KSAxMDAlLCBibGFjayA1MCUsIHJnYmEoMCwgMCwgMCwgMC45KSAwJSk7XG59XG4ubW92aWVfaW5mb19fdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm1vdmllX2luZm9fX2RhdGUsIC5tb3ZpZV9pbmZvX190aW1lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xufVxuLm1vdmllX2luZm9fX2Fib3V0LW1vdmllIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjVweCk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwIDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCk7XG4gIHBhZGRpbmc6IDMwcHggMTBweDtcbn1cbi5tb3ZpZV9pbmZvX19hYm91dC1tb3ZpZSAucmF0aW5ncy1ydW4ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm1vdmllX2luZm9fX3JhdGluZ3MtcnVuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm1vdmllX2luZm9fX3JhdGluZ3MtcnVuIC5yYXRpbmdzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBnYXA6IDIwcHg7XG59XG4ubW92aWVfaW5mb19fcmF0aW5ncy1ydW4gLnJ1bnRpbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xMDApO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBnYXA6IDVweDtcbn1cbi5tb3ZpZV9pbmZvX19yYXRpbmdzLXJ1biAucnVudGltZSBzcGFuLm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNDUwKTtcbn1cbi5tb3ZpZV9pbmZvX19yYXRpbmdzLXJ1biAucnVudGltZSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC00NTApO1xufVxuLm1vdmllX2luZm9fX21vdmllLXJhdGluZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4ubW92aWVfaW5mb19fbW92aWUtcmF0aW5ncyBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICBtYXJnaW46IDNweCAwIDAgNXB4O1xufVxuLm1vdmllX2luZm9fX21vdmllLXJhdGluZ3Mgc3Bhbi5tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tb3ZpZV9pbmZvX19nZW5yZXMge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ubW92aWVfaW5mb19fZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLm1vdmllX2luZm9fX2Rlc2NyaXB0aW9uIGlvbi1sYWJlbC5tb3ZpZV9pbmZvX190aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubW92aWVfaW5mb19fZGVzY3JpcHRpb24gaW9uLWxhYmVsLm1vdmllX2luZm9fX3N5bm9wc2lzIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTUwKTtcbn1cbi5tb3ZpZV9pbmZvX19DVEFzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBnYXA6IDEwcHg7XG59XG4ubW92aWVfaW5mb19fQ1RBcyBidXR0b24ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ubW92aWVfaW5mb19fQ1RBcyBzcGFuLm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHtcbiAgcGFkZGluZzogNXB4O1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAyNXB4IDUwcHggLTEycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC01NTApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTApO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0yNTApO1xuICB3aWR0aDogMzNweDtcbiAgaGVpZ2h0OiAzM3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbn1cbi5tb3ZpZV9pbmZvX19jYXN0IHtcbiAgcGFkZGluZzogMCAxMHB4IDMwcHggMTBweDtcbn1cbi5tb3ZpZV9pbmZvX19jYXN0IGlvbi1sYWJlbC5tb3ZpZV9pbmZvX190aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubW92aWVfaW5mb19fY2FzdCBpb24tc2xpZGUge1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbn1cbi5tb3ZpZV9pbmZvX19jYXN0IC5jYXN0LWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLm1vdmllX2luZm9fX2Nhc3QgLmNhc3QtY29udGVudCBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tb3ZpZV9pbmZvX19jYXN0IC5jYXN0LWNvbnRlbnQgLmNhc3QtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDApO1xuICBtYXJnaW46IDEwcHggMCA1cHggMDtcbn1cbi5tb3ZpZV9pbmZvX19jYXN0IC5jYXN0LWNvbnRlbnQgLmNhc3QteHRlciB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTUwMCk7XG59XG4ubW92aWVfaW5mb19fY2FzdCAuY2FzdC1pbWdzIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubW92aWVfaW5mb19fY2FzdCAuY2FzdC1pbWdzIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufSJdfQ== */";
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