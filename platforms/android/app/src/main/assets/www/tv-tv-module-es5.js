function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tv-tv-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tv/tv.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tv/tv.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTvTvPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <div class=\"header_div\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button color=\"light\"></ion-menu-button>\r\n        </ion-buttons>\r\n        <img src=\"assets/imgs/logo4.svg\">\r\n        <ion-button class=\"search_btn\" slot=\"end\" fill=\"clear\" size=\"small\">\r\n            <ion-icon slot=\"icon-only\" name=\"search-outline\" color=\"light\"></ion-icon>\r\n        </ion-button>\r\n    </div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"main_content_div\">\r\n        <ion-slides mode=\"ios\">\r\n            <ion-slide *ngFor=\"let item of mainSlider; let i = index\">\r\n                <div class=\"back_image bg_image\" [style.backgroundImage]=\"'url('+item+')'\">\r\n                    <ion-label>{{i+1}}/{{mainSlider?.length}}</ion-label>\r\n                </div>\r\n            </ion-slide>\r\n        </ion-slides>\r\n\r\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Top picks for you')\" >Top picks for you <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\r\n        <ion-slides mode=\"ios\" [options]=\"slideOpts\">\r\n            <ion-slide *ngFor=\"let item of images\" (click)=\"goToVideo()\">\r\n                <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\r\n            </ion-slide>\r\n        </ion-slides>\r\n\r\n\r\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Popular Shows')\">Popular Shows <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\r\n          <ion-slides mode=\"ios\" [options]=\"slideOpts\">\r\n              <ion-slide *ngFor=\"let item of (images | slice : 4 : 10)\" (click)=\"goToVideo()\">\r\n                  <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\r\n              </ion-slide>\r\n        </ion-slides>\r\n\r\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Popular Channels')\">Popular Channels <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\r\n        <ion-slides mode=\"ios\" [options]=\"slideOpts3\">\r\n            <ion-slide *ngFor=\"let item of channels\" (click)=\"goToVideo()\">\r\n                <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item+')'\"></div>\r\n            </ion-slide>\r\n        </ion-slides>\r\n\r\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Popular in Reality')\">Popular in Reality <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\r\n        <ion-slides mode=\"ios\" [options]=\"slideOpts\">\r\n            <ion-slide *ngFor=\"let item of (images | slice : 8 : 18)\" (click)=\"goToVideo()\">\r\n                <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\r\n            </ion-slide>\r\n        </ion-slides>\r\n\r\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Popular in Drama')\">Popular in Drama <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\r\n        <ion-slides mode=\"ios\" [options]=\"slideOpts\">\r\n            <ion-slide *ngFor=\"let item of (images | slice : 8 : 18)\" (click)=\"goToVideo()\">\r\n                <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\r\n            </ion-slide>\r\n        </ion-slides>\r\n\r\n        <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Popular in Crime')\">Popular in Crime <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\r\n        <ion-slides mode=\"ios\" [options]=\"slideOpts\">\r\n            <ion-slide *ngFor=\"let item of animals\" (click)=\"goToVideo()\">\r\n                <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\r\n            </ion-slide>\r\n        </ion-slides>\r\n    </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/tv/tv-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/tv/tv-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: TvPageRoutingModule */

  /***/
  function srcAppPagesTvTvRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TvPageRoutingModule", function () {
      return TvPageRoutingModule;
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


    var _tv_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tv.page */
    "./src/app/pages/tv/tv.page.ts");

    var routes = [{
      path: '',
      component: _tv_page__WEBPACK_IMPORTED_MODULE_3__["TvPage"]
    }];

    var TvPageRoutingModule = function TvPageRoutingModule() {
      _classCallCheck(this, TvPageRoutingModule);
    };

    TvPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TvPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/tv/tv.module.ts":
  /*!***************************************!*\
    !*** ./src/app/pages/tv/tv.module.ts ***!
    \***************************************/

  /*! exports provided: TvPageModule */

  /***/
  function srcAppPagesTvTvModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TvPageModule", function () {
      return TvPageModule;
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


    var _tv_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tv-routing.module */
    "./src/app/pages/tv/tv-routing.module.ts");
    /* harmony import */


    var _tv_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tv.page */
    "./src/app/pages/tv/tv.page.ts");

    var TvPageModule = function TvPageModule() {
      _classCallCheck(this, TvPageModule);
    };

    TvPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tv_routing_module__WEBPACK_IMPORTED_MODULE_5__["TvPageRoutingModule"]],
      declarations: [_tv_page__WEBPACK_IMPORTED_MODULE_6__["TvPage"]]
    })], TvPageModule);
    /***/
  },

  /***/
  "./src/app/pages/tv/tv.page.scss":
  /*!***************************************!*\
    !*** ./src/app/pages/tv/tv.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTvTvPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main_content_div {\n  width: 100%;\n  padding: 10px;\n}\n.main_content_div .back_image {\n  height: 200px;\n  width: 100%;\n  border-radius: 5px;\n  position: relative;\n  padding: 5px;\n}\n.main_content_div .back_image ion-label {\n  position: absolute;\n  right: 5px;\n  font-size: 14px;\n}\n.main_content_div .head_lbl {\n  font-family: \"medium\";\n  display: block;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  position: relative;\n}\n.main_content_div .head_lbl ion-icon {\n  position: absolute;\n  right: 0;\n  font-size: 20px;\n  color: #707070;\n}\n.main_content_div ion-slide {\n  margin-right: 7px;\n}\n.main_content_div .back_image2 {\n  height: 140px;\n  width: 100%;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHYvQzpcXGxhcmFnb25cXHd3d1xcS2VueWFCdXp6LU1vYmlsZUFwcC9zcmNcXGFwcFxccGFnZXNcXHR2XFx0di5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3R2L3R2LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDQ0o7QURDSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDUjtBREFRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0VaO0FERUk7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBUjtBREVRO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNBWjtBREdJO0VBQ0ksaUJBQUE7QUNEUjtBRElJO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0ZSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHYvdHYucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudF9kaXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgLmJhY2tfaW1hZ2V7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRfbGJse1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tc2xpZGV7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJhY2tfaW1hZ2Uye1xyXG4gICAgICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG59IiwiLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5iYWNrX2ltYWdlIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmFja19pbWFnZSBpb24tbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5oZWFkX2xibCB7XG4gIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmhlYWRfbGJsIGlvbi1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzcwNzA3MDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1zbGlkZSB7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmJhY2tfaW1hZ2UyIHtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/tv/tv.page.ts":
  /*!*************************************!*\
    !*** ./src/app/pages/tv/tv.page.ts ***!
    \*************************************/

  /*! exports provided: TvPage */

  /***/
  function srcAppPagesTvTvPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TvPage", function () {
      return TvPage;
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

    var TvPage = /*#__PURE__*/function () {
      function TvPage(dummy, router) {
        _classCallCheck(this, TvPage);

        this.dummy = dummy;
        this.router = router;
        this.mainSlider = ['assets/imgs/landscape_imgs/6.jpg', 'assets/imgs/landscape_imgs/7.jpg', 'assets/imgs/landscape_imgs/8.jpg', 'assets/imgs/landscape_imgs/9.jpg', 'assets/imgs/landscape_imgs/10.jpg'];
        this.slideOpts = {
          slidesPerView: 3
        };
        this.slideOpts3 = {
          slidesPerView: 1.7
        };
        this.images = this.dummy.images;
        this.sports = this.dummy.sports;
        this.animals = this.dummy.animal;
        this.genrens = this.dummy.genrens;
        this.channels = this.dummy.channels;
      }

      _createClass(TvPage, [{
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
      }, {
        key: "goToVideo",
        value: function goToVideo() {
          this.router.navigate(['/video']);
        }
      }]);

      return TvPage;
    }();

    TvPage.ctorParameters = function () {
      return [{
        type: src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__["DummyService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    TvPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tv',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tv.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tv/tv.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tv.page.scss */
      "./src/app/pages/tv/tv.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__["DummyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], TvPage);
    /***/
  }
}]);
//# sourceMappingURL=tv-tv-module-es5.js.map