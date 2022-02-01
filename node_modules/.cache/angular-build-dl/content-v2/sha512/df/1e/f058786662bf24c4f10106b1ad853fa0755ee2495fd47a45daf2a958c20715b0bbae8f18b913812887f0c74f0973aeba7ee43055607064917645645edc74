function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-premium-premium-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/premium/premium.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/premium/premium.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPremiumPremiumPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"md\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Premium</ion-title>\n        <ion-button class=\"search_btn\" slot=\"end\" fill=\"clear\" size=\"small\">\n            <ion-icon slot=\"icon-only\" name=\"search-outline\" color=\"light\"></ion-icon>\n        </ion-button>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n    <ion-slides mode=\"ios\">\n      <ion-slide *ngFor=\"let item of mainSlider; let i = index\">\n        <div class=\"back_image bg_image\" [style.backgroundImage]=\"'url('+item+')'\">\n            <ion-label>{{i+1}}/{{mainSlider?.length}}</ion-label>\n        </div>\n    </ion-slide>\n    </ion-slides>\n\n    <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Top picks for you')\">Top picks for you <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\n    <ion-slides mode=\"ios\" [options]=\"slideOpts\">\n      <ion-slide *ngFor=\"let item of images\" (click)=\"goToVideo()\">\n        <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\n      </ion-slide>\n    </ion-slides>\n\n    <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Popular Movies')\">Popular Movies <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\n    <ion-slides mode=\"ios\" [options]=\"slideOpts\">\n      <ion-slide *ngFor=\"let item of (images | slice : 4 : 10)\" (click)=\"goToVideo()\">\n        <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\n      </ion-slide>\n    </ion-slides>\n\n    <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Popular in Romance')\">Popular in Romance <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\n    <ion-slides mode=\"ios\" [options]=\"slideOpts\">\n      <ion-slide *ngFor=\"let item of (images | slice : 8 : 18)\" (click)=\"goToVideo()\">\n        <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\n      </ion-slide>\n    </ion-slides>\n\n    <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Popular in Action')\">Popular in Action <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\n    <ion-slides mode=\"ios\" [options]=\"slideOpts\">\n      <ion-slide *ngFor=\"let item of (images | slice : 7 : 18)\" (click)=\"goToVideo()\">\n        <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\n      </ion-slide>\n    </ion-slides>\n\n    <ion-label class=\"head_lbl\" (click)=\"goTovideoList('Popular in Comedy')\">Popular in Comedy <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\n    <ion-slides mode=\"ios\" [options]=\"slideOpts\">\n      <ion-slide *ngFor=\"let item of animals\" (click)=\"goToVideo()\">\n        <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\n      </ion-slide>\n    </ion-slides>\n\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/premium/premium-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/premium/premium-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: PremiumPageRoutingModule */

  /***/
  function srcAppPagesPremiumPremiumRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PremiumPageRoutingModule", function () {
      return PremiumPageRoutingModule;
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


    var _premium_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./premium.page */
    "./src/app/pages/premium/premium.page.ts");

    var routes = [{
      path: '',
      component: _premium_page__WEBPACK_IMPORTED_MODULE_3__["PremiumPage"]
    }];

    var PremiumPageRoutingModule = function PremiumPageRoutingModule() {
      _classCallCheck(this, PremiumPageRoutingModule);
    };

    PremiumPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PremiumPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/premium/premium.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/premium/premium.module.ts ***!
    \*************************************************/

  /*! exports provided: PremiumPageModule */

  /***/
  function srcAppPagesPremiumPremiumModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PremiumPageModule", function () {
      return PremiumPageModule;
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


    var _premium_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./premium-routing.module */
    "./src/app/pages/premium/premium-routing.module.ts");
    /* harmony import */


    var _premium_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./premium.page */
    "./src/app/pages/premium/premium.page.ts");

    var PremiumPageModule = function PremiumPageModule() {
      _classCallCheck(this, PremiumPageModule);
    };

    PremiumPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _premium_routing_module__WEBPACK_IMPORTED_MODULE_5__["PremiumPageRoutingModule"]],
      declarations: [_premium_page__WEBPACK_IMPORTED_MODULE_6__["PremiumPage"]]
    })], PremiumPageModule);
    /***/
  },

  /***/
  "./src/app/pages/premium/premium.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/premium/premium.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPremiumPremiumPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main_content_div {\n  width: 100%;\n  padding: 10px;\n}\n.main_content_div .back_image {\n  height: 200px;\n  width: 100%;\n  border-radius: 5px;\n  position: relative;\n  padding: 5px;\n}\n.main_content_div .back_image ion-label {\n  position: absolute;\n  right: 5px;\n  font-size: 14px;\n}\n.main_content_div .head_lbl {\n  font-family: \"medium\";\n  display: block;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  position: relative;\n}\n.main_content_div .head_lbl ion-icon {\n  position: absolute;\n  right: 0;\n  font-size: 20px;\n  color: #707070;\n}\n.main_content_div ion-slide {\n  margin-right: 7px;\n}\n.main_content_div .back_image2 {\n  height: 140px;\n  width: 100%;\n  border-radius: 5px;\n}\n.main_content_div .back_image4 {\n  height: 100px;\n  width: 100%;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EaWdpdGFsL0RvY3VtZW50cy9UZXN0Z3JvdW5kL0tCIE1vYmlsZSBBUFAvS0JfQXBwX1Jlcy9LZW55YUJ1enotTW9iaWxlQXBwL3NyYy9hcHAvcGFnZXMvcHJlbWl1bS9wcmVtaXVtLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJlbWl1bS9wcmVtaXVtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDQ0o7QURDSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDUjtBREFRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0VaO0FERUk7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBUjtBRENRO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDWjtBREVJO0VBQ0ksaUJBQUE7QUNBUjtBREdJO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0RSO0FESUk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcmVtaXVtL3ByZW1pdW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudF9kaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcblxuICAgIC5iYWNrX2ltYWdle1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaGVhZF9sYmx7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1zbGlkZXtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gICAgfVxuXG4gICAgLmJhY2tfaW1hZ2Uye1xuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cblxuICAgIC5iYWNrX2ltYWdlNHtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG59IiwiLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5iYWNrX2ltYWdlIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmFja19pbWFnZSBpb24tbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5oZWFkX2xibCB7XG4gIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmhlYWRfbGJsIGlvbi1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzcwNzA3MDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1zbGlkZSB7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmJhY2tfaW1hZ2UyIHtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5iYWNrX2ltYWdlNCB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/premium/premium.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/premium/premium.page.ts ***!
    \***********************************************/

  /*! exports provided: PremiumPage */

  /***/
  function srcAppPagesPremiumPremiumPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PremiumPage", function () {
      return PremiumPage;
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

    var PremiumPage = /*#__PURE__*/function () {
      function PremiumPage(dummy, router) {
        _classCallCheck(this, PremiumPage);

        this.dummy = dummy;
        this.router = router;
        this.mainSlider = ['assets/imgs/landscape_imgs/1.jpg', 'assets/imgs/landscape_imgs/2.jpg', 'assets/imgs/landscape_imgs/3.jpg', 'assets/imgs/landscape_imgs/4.jpg', 'assets/imgs/landscape_imgs/5.png'];
        this.slideOpts = {
          slidesPerView: 3
        };
        this.slideOpts3 = {
          slidesPerView: 2
        };
        this.images = this.dummy.images;
        this.sports = this.dummy.sports;
        this.animals = this.dummy.animal;
        this.genrens = this.dummy.genrens;
      }

      _createClass(PremiumPage, [{
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

      return PremiumPage;
    }();

    PremiumPage.ctorParameters = function () {
      return [{
        type: src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__["DummyService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    PremiumPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-premium',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./premium.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/premium/premium.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./premium.page.scss */
      "./src/app/pages/premium/premium.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__["DummyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], PremiumPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-premium-premium-module-es5.js.map