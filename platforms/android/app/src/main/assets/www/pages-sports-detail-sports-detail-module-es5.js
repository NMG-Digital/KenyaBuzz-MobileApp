function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sports-detail-sports-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sports-detail/sports-detail.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sports-detail/sports-detail.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSportsDetailSportsDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n\n  <div class=\"segment_div\">\n    <ion-label [class.active]=\"segId == 1\" (click)=\"changeSegment(1)\">VIDEOS</ion-label>\n    <ion-label [class.active]=\"segId == 2\" (click)=\"changeSegment(2)\">TOURNAMENTS</ion-label>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <span *ngIf=\"segId == 1\">\n      <ion-slides mode=\"ios\">\n        <ion-slide>\n          <div class=\"back_image bg_image\" [style.backgroundImage]=\"'url(assets/imgs/img1.jpg)'\"></div>\n        </ion-slide>\n        <ion-slide>\n          <div class=\"back_image bg_image\" [style.backgroundImage]=\"'url(assets/imgs/img2.jpg)'\"></div>\n        </ion-slide>\n        <ion-slide>\n          <div class=\"back_image bg_image\" [style.backgroundImage]=\"'url(assets/imgs/img13.jpg)'\"></div>\n        </ion-slide>\n      </ion-slides>\n  \n      <ion-label class=\"head_lbl\" (click)=\"goToSportsVideo('IPL Superstar : MS Dhoni')\">IPL Superstar : MS Dhoni<ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\n      <ion-slides mode=\"ios\" [options]=\"slideOpts3\">\n        <ion-slide *ngFor=\"let item of sports\" (click)=\"goToVideo()\">\n          <div class=\"flex_div\">\n            <div class=\"back_image4 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\n            <ion-label class=\"live2\">9 min</ion-label>\n            <div class=\"play_div\">\n              <ion-icon name=\"caret-forward-outline\" class=\"play\"></ion-icon>\n              <ion-label class=\"name\">{{item.name}}</ion-label>\n            </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n  \n      <ion-label class=\"head_lbl\" (click)=\"goToSportsVideo('Best of CSK')\">Best of CSK<ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\n      <ion-slides mode=\"ios\" [options]=\"slideOpts3\">\n        <ion-slide *ngFor=\"let item of (sports | slice :2: 8)\" (click)=\"goToVideo()\">\n          <div class=\"flex_div\">\n            <div class=\"back_image4 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\n            <ion-label class=\"live2\">9 min</ion-label>\n            <div class=\"play_div\">\n              <ion-icon name=\"caret-forward-outline\" class=\"play\"></ion-icon>\n              <ion-label class=\"name\">{{item.name}}</ion-label>\n            </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n  \n      <ion-label class=\"head_lbl\" (click)=\"goToSportsVideo('Womens T20 World Cup')\">Women's T20 World Cup<ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\n      <ion-slides mode=\"ios\" [options]=\"slideOpts3\">\n        <ion-slide *ngFor=\"let item of (sports | slice : 3)\" (click)=\"goToVideo()\">\n          <div class=\"flex_div\">\n            <div class=\"back_image4 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\n            <ion-label class=\"live2\">9 min</ion-label>\n            <div class=\"play_div\">\n              <ion-icon name=\"caret-forward-outline\" class=\"play\"></ion-icon>\n              <ion-label class=\"name\">{{item.name}}</ion-label>\n            </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </span>\n\n    <span *ngIf=\"segId == 2\">\n      <div style=\"padding-left: 6px;padding-right: 6px;\">\n        <ion-label class=\"top_lbl\">Upcoming</ion-label>\n\n        <div class=\"div_flex\" *ngFor=\"let item of (sports | slice : 0 : 2)\">\n          <div class=\"back_small bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\n          <div class=\"desc_div\">\n            <ion-label>{{item.name}}</ion-label>\n          </div>\n        </div>\n\n        <ion-label class=\"top_lbl\">Concluded</ion-label>\n\n        <div class=\"div_flex\" *ngFor=\"let item of (sports | slice : 0 : 4)\">\n          <div class=\"back_small bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\n          <div class=\"desc_div\">\n            <ion-label>{{item.name}}</ion-label>\n            <ion-label class=\"gray_lbl\">09 Mar - 15 May</ion-label>\n          </div>\n        </div>\n\n      </div>\n    </span>\n    \n\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/sports-detail/sports-detail-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/sports-detail/sports-detail-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: SportsDetailPageRoutingModule */

  /***/
  function srcAppPagesSportsDetailSportsDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SportsDetailPageRoutingModule", function () {
      return SportsDetailPageRoutingModule;
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


    var _sports_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sports-detail.page */
    "./src/app/pages/sports-detail/sports-detail.page.ts");

    var routes = [{
      path: '',
      component: _sports_detail_page__WEBPACK_IMPORTED_MODULE_3__["SportsDetailPage"]
    }];

    var SportsDetailPageRoutingModule = function SportsDetailPageRoutingModule() {
      _classCallCheck(this, SportsDetailPageRoutingModule);
    };

    SportsDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SportsDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/sports-detail/sports-detail.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/sports-detail/sports-detail.module.ts ***!
    \*************************************************************/

  /*! exports provided: SportsDetailPageModule */

  /***/
  function srcAppPagesSportsDetailSportsDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SportsDetailPageModule", function () {
      return SportsDetailPageModule;
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


    var _sports_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sports-detail-routing.module */
    "./src/app/pages/sports-detail/sports-detail-routing.module.ts");
    /* harmony import */


    var _sports_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sports-detail.page */
    "./src/app/pages/sports-detail/sports-detail.page.ts");

    var SportsDetailPageModule = function SportsDetailPageModule() {
      _classCallCheck(this, SportsDetailPageModule);
    };

    SportsDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sports_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["SportsDetailPageRoutingModule"]],
      declarations: [_sports_detail_page__WEBPACK_IMPORTED_MODULE_6__["SportsDetailPage"]]
    })], SportsDetailPageModule);
    /***/
  },

  /***/
  "./src/app/pages/sports-detail/sports-detail.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/sports-detail/sports-detail.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSportsDetailSportsDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".segment_div {\n  display: flex;\n  margin-top: 10px;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.segment_div ion-label {\n  margin-right: 30px;\n  color: white;\n  padding-bottom: 10px;\n  font-family: \"medium\";\n  font-size: 12px;\n}\n.segment_div .active {\n  border-bottom: 2px solid white;\n}\n.main_content_div {\n  width: 100%;\n  padding: 10px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .back_image {\n  height: 200px;\n  width: 100%;\n  border-radius: 5px;\n}\n.main_content_div .head_lbl {\n  font-family: \"medium\";\n  display: block;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  position: relative;\n}\n.main_content_div .head_lbl ion-icon {\n  position: absolute;\n  right: 0;\n  font-size: 20px;\n  color: #707070;\n}\n.main_content_div ion-slide {\n  margin-right: 7px;\n}\n.main_content_div .back_image4 {\n  height: 100px;\n  width: 100%;\n  border-radius: 5px;\n}\n.main_content_div .flex_div {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n.main_content_div .flex_div .name {\n  font-size: 12px;\n  margin-top: 5px;\n}\n.main_content_div .flex_div .live {\n  position: absolute;\n  top: 0;\n  font-size: 12px;\n  font-family: \"medium\";\n  left: 8px;\n}\n.main_content_div .flex_div .live2 {\n  position: absolute;\n  top: 0;\n  font-size: 12px;\n  font-family: \"medium\";\n  right: 8px;\n}\n.main_content_div .flex_div .bold_lbl {\n  font-family: \"semi-bold\";\n  position: absolute;\n  top: 75%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-transform: uppercase;\n}\n.main_content_div .flex_div .play_div {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  bottom: 0;\n}\n.main_content_div .flex_div .play_div .play {\n  font-size: 20px;\n  margin-right: 10px;\n}\n.main_content_div .flex_div .play_div .name {\n  font-size: 14px;\n  margin-top: 0px;\n}\n.main_content_div .top_lbl {\n  font-family: \"medium\";\n  padding-top: 15px;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #707070;\n}\n.main_content_div .div_flex {\n  display: flex;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #707070;\n}\n.main_content_div .div_flex .back_small {\n  width: 90px;\n  height: 55px;\n  min-width: 90px;\n}\n.main_content_div .div_flex .desc_div {\n  padding-left: 15px;\n}\n.main_content_div .div_flex .gray_lbl {\n  font-size: 12px;\n  color: gray;\n  margin-top: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EaWdpdGFsL0RvY3VtZW50cy9UZXN0Z3JvdW5kL0tCIE1vYmlsZSBBUFAvS0JfQXBwX1Jlcy9LZW55YUJ1enotTW9iaWxlQXBwL3NyYy9hcHAvcGFnZXMvc3BvcnRzLWRldGFpbC9zcG9ydHMtZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3BvcnRzLWRldGFpbC9zcG9ydHMtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNFUjtBREFJO0VBQ0ksOEJBQUE7QUNFUjtBRENBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNFSjtBREFJO0VBQ0ksY0FBQTtBQ0VSO0FEQ0k7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ1I7QURFSTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0FSO0FEQ1E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NaO0FERUk7RUFDSSxpQkFBQTtBQ0FSO0FER0k7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRFI7QURJSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNGUjtBRElRO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUNGWjtBREtRO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtBQ0haO0FETVE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FDSlo7QURPUTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7QUNMWjtBRFFRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDTlo7QURPWTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ0xoQjtBRE9ZO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUNMaEI7QURVSTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0FDUlI7QURXSTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7QUNUUjtBRFVRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDUlo7QURVUTtFQUNJLGtCQUFBO0FDUlo7QURXUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ1RaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3BvcnRzLWRldGFpbC9zcG9ydHMtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWdtZW50X2RpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ21lZGl1bSc7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgLmFjdGl2ZXtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICAgIH1cbn1cbi5tYWluX2NvbnRlbnRfZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAuYmFja19pbWFnZXtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG5cbiAgICAuaGVhZF9sYmx7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1zbGlkZXtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gICAgfVxuXG4gICAgLmJhY2tfaW1hZ2U0e1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cblxuICAgIC5mbGV4X2RpdntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgLm5hbWV7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAubGl2ZXtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcbiAgICAgICAgICAgIGxlZnQ6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5saXZlMntcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcbiAgICAgICAgICAgIHJpZ2h0OiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYm9sZF9sYmx7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDc1JTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBsYXlfZGl2e1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAucGxheXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hbWV7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50b3BfbGJse1xuICAgICAgICBmb250LWZhbWlseTogJ21lZGl1bSc7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3MDcwNzA7XG4gICAgfVxuXG4gICAgLmRpdl9mbGV4e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzA3MDcwO1xuICAgICAgICAuYmFja19zbWFsbHtcbiAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OjU1cHg7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDkwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRlc2NfZGl2e1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmdyYXlfbGJse1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLnNlZ21lbnRfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuLnNlZ21lbnRfZGl2IGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5zZWdtZW50X2RpdiAuYWN0aXZlIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xufVxuXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmFja19pbWFnZSB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuaGVhZF9sYmwge1xuICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5oZWFkX2xibCBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM3MDcwNzA7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tc2xpZGUge1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5iYWNrX2ltYWdlNCB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5saXZlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XG4gIGxlZnQ6IDhweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAubGl2ZTIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcbiAgcmlnaHQ6IDhweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAuYm9sZF9sYmwge1xuICBmb250LWZhbWlseTogXCJzZW1pLWJvbGRcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDc1JTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAucGxheV9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAucGxheV9kaXYgLnBsYXkge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAucGxheV9kaXYgLm5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC50b3BfbGJsIHtcbiAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3MDcwNzA7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGl2X2ZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzA3MDcwO1xufVxuLm1haW5fY29udGVudF9kaXYgLmRpdl9mbGV4IC5iYWNrX3NtYWxsIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogNTVweDtcbiAgbWluLXdpZHRoOiA5MHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRpdl9mbGV4IC5kZXNjX2RpdiB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kaXZfZmxleCAuZ3JheV9sYmwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tdG9wOiA3cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/sports-detail/sports-detail.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/sports-detail/sports-detail.page.ts ***!
    \***********************************************************/

  /*! exports provided: SportsDetailPage */

  /***/
  function srcAppPagesSportsDetailSportsDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SportsDetailPage", function () {
      return SportsDetailPage;
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


    var src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/dummy.service */
    "./src/app/services/dummy.service.ts");

    var SportsDetailPage = /*#__PURE__*/function () {
      function SportsDetailPage(dummy, route, router) {
        _classCallCheck(this, SportsDetailPage);

        this.dummy = dummy;
        this.route = route;
        this.router = router;
        this.segId = 1;
        this.slideOpts3 = {
          slidesPerView: 2
        };
        this.sports = this.dummy.sports;
      }

      _createClass(SportsDetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.queryParams.subscribe(function (data) {
            console.log(data);
            _this.title = data.id;
          });
        }
      }, {
        key: "goToVideo",
        value: function goToVideo() {
          this.router.navigate(['/video']);
        }
      }, {
        key: "changeSegment",
        value: function changeSegment(val) {
          this.segId = val;
        }
      }, {
        key: "goToSportsVideo",
        value: function goToSportsVideo(val) {
          var navData = {
            queryParams: {
              id: val
            }
          };
          this.router.navigate(['/sports-video'], navData);
        }
      }]);

      return SportsDetailPage;
    }();

    SportsDetailPage.ctorParameters = function () {
      return [{
        type: src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_3__["DummyService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    SportsDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sports-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sports-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sports-detail/sports-detail.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sports-detail.page.scss */
      "./src/app/pages/sports-detail/sports-detail.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_3__["DummyService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], SportsDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-sports-detail-sports-detail-module-es5.js.map