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


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button mode=\"md\" color=\"light\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{title}}</ion-title>\r\n  </ion-toolbar>\r\n\r\n  <div class=\"segment_div\">\r\n    <ion-label [class.active]=\"segId == 1\" (click)=\"changeSegment(1)\">VIDEOS</ion-label>\r\n    <ion-label [class.active]=\"segId == 2\" (click)=\"changeSegment(2)\">TOURNAMENTS</ion-label>\r\n  </div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"main_content_div\">\r\n\r\n    <span *ngIf=\"segId == 1\">\r\n      <ion-slides mode=\"ios\">\r\n        <ion-slide>\r\n          <div class=\"back_image bg_image\" [style.backgroundImage]=\"'url(assets/imgs/img1.jpg)'\"></div>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <div class=\"back_image bg_image\" [style.backgroundImage]=\"'url(assets/imgs/img2.jpg)'\"></div>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <div class=\"back_image bg_image\" [style.backgroundImage]=\"'url(assets/imgs/img13.jpg)'\"></div>\r\n        </ion-slide>\r\n      </ion-slides>\r\n  \r\n      <ion-label class=\"head_lbl\" (click)=\"goToSportsVideo('IPL Superstar : MS Dhoni')\">IPL Superstar : MS Dhoni<ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\r\n      <ion-slides mode=\"ios\" [options]=\"slideOpts3\">\r\n        <ion-slide *ngFor=\"let item of sports\" (click)=\"goToVideo()\">\r\n          <div class=\"flex_div\">\r\n            <div class=\"back_image4 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\r\n            <ion-label class=\"live2\">9 min</ion-label>\r\n            <div class=\"play_div\">\r\n              <ion-icon name=\"caret-forward-outline\" class=\"play\"></ion-icon>\r\n              <ion-label class=\"name\">{{item.name}}</ion-label>\r\n            </div>\r\n          </div>\r\n        </ion-slide>\r\n      </ion-slides>\r\n  \r\n      <ion-label class=\"head_lbl\" (click)=\"goToSportsVideo('Best of CSK')\">Best of CSK<ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\r\n      <ion-slides mode=\"ios\" [options]=\"slideOpts3\">\r\n        <ion-slide *ngFor=\"let item of (sports | slice :2: 8)\" (click)=\"goToVideo()\">\r\n          <div class=\"flex_div\">\r\n            <div class=\"back_image4 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\r\n            <ion-label class=\"live2\">9 min</ion-label>\r\n            <div class=\"play_div\">\r\n              <ion-icon name=\"caret-forward-outline\" class=\"play\"></ion-icon>\r\n              <ion-label class=\"name\">{{item.name}}</ion-label>\r\n            </div>\r\n          </div>\r\n        </ion-slide>\r\n      </ion-slides>\r\n  \r\n      <ion-label class=\"head_lbl\" (click)=\"goToSportsVideo('Womens T20 World Cup')\">Women's T20 World Cup<ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-label>\r\n      <ion-slides mode=\"ios\" [options]=\"slideOpts3\">\r\n        <ion-slide *ngFor=\"let item of (sports | slice : 3)\" (click)=\"goToVideo()\">\r\n          <div class=\"flex_div\">\r\n            <div class=\"back_image4 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\r\n            <ion-label class=\"live2\">9 min</ion-label>\r\n            <div class=\"play_div\">\r\n              <ion-icon name=\"caret-forward-outline\" class=\"play\"></ion-icon>\r\n              <ion-label class=\"name\">{{item.name}}</ion-label>\r\n            </div>\r\n          </div>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </span>\r\n\r\n    <span *ngIf=\"segId == 2\">\r\n      <div style=\"padding-left: 6px;padding-right: 6px;\">\r\n        <ion-label class=\"top_lbl\">Upcoming</ion-label>\r\n\r\n        <div class=\"div_flex\" *ngFor=\"let item of (sports | slice : 0 : 2)\">\r\n          <div class=\"back_small bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\r\n          <div class=\"desc_div\">\r\n            <ion-label>{{item.name}}</ion-label>\r\n          </div>\r\n        </div>\r\n\r\n        <ion-label class=\"top_lbl\">Concluded</ion-label>\r\n\r\n        <div class=\"div_flex\" *ngFor=\"let item of (sports | slice : 0 : 4)\">\r\n          <div class=\"back_small bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\r\n          <div class=\"desc_div\">\r\n            <ion-label>{{item.name}}</ion-label>\r\n            <ion-label class=\"gray_lbl\">09 Mar - 15 May</ion-label>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </span>\r\n    \r\n\r\n  </div>\r\n</ion-content>\r\n";
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


    __webpack_exports__["default"] = ".segment_div {\n  display: flex;\n  margin-top: 10px;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.segment_div ion-label {\n  margin-right: 30px;\n  color: white;\n  padding-bottom: 10px;\n  font-family: \"medium\";\n  font-size: 12px;\n}\n.segment_div .active {\n  border-bottom: 2px solid white;\n}\n.main_content_div {\n  width: 100%;\n  padding: 10px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .back_image {\n  height: 200px;\n  width: 100%;\n  border-radius: 5px;\n}\n.main_content_div .head_lbl {\n  font-family: \"medium\";\n  display: block;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  position: relative;\n}\n.main_content_div .head_lbl ion-icon {\n  position: absolute;\n  right: 0;\n  font-size: 20px;\n  color: #707070;\n}\n.main_content_div ion-slide {\n  margin-right: 7px;\n}\n.main_content_div .back_image4 {\n  height: 100px;\n  width: 100%;\n  border-radius: 5px;\n}\n.main_content_div .flex_div {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n.main_content_div .flex_div .name {\n  font-size: 12px;\n  margin-top: 5px;\n}\n.main_content_div .flex_div .live {\n  position: absolute;\n  top: 0;\n  font-size: 12px;\n  font-family: \"medium\";\n  left: 8px;\n}\n.main_content_div .flex_div .live2 {\n  position: absolute;\n  top: 0;\n  font-size: 12px;\n  font-family: \"medium\";\n  right: 8px;\n}\n.main_content_div .flex_div .bold_lbl {\n  font-family: \"semi-bold\";\n  position: absolute;\n  top: 75%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-transform: uppercase;\n}\n.main_content_div .flex_div .play_div {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  bottom: 0;\n}\n.main_content_div .flex_div .play_div .play {\n  font-size: 20px;\n  margin-right: 10px;\n}\n.main_content_div .flex_div .play_div .name {\n  font-size: 14px;\n  margin-top: 0px;\n}\n.main_content_div .top_lbl {\n  font-family: \"medium\";\n  padding-top: 15px;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #707070;\n}\n.main_content_div .div_flex {\n  display: flex;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #707070;\n}\n.main_content_div .div_flex .back_small {\n  width: 90px;\n  height: 55px;\n  min-width: 90px;\n}\n.main_content_div .div_flex .desc_div {\n  padding-left: 15px;\n}\n.main_content_div .div_flex .gray_lbl {\n  font-size: 12px;\n  color: gray;\n  margin-top: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3BvcnRzLWRldGFpbC9DOlxcbGFyYWdvblxcd3d3XFxLZW55YUJ1enotTW9iaWxlQXBwL3NyY1xcYXBwXFxwYWdlc1xcc3BvcnRzLWRldGFpbFxcc3BvcnRzLWRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Nwb3J0cy1kZXRhaWwvc3BvcnRzLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURBSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDRVI7QURBSTtFQUNJLDhCQUFBO0FDRVI7QURDQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDRUo7QURBSTtFQUNJLGNBQUE7QUNFUjtBRENJO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NSO0FERUk7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBUjtBRENRO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDWjtBREVJO0VBQ0ksaUJBQUE7QUNBUjtBREdJO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0RSO0FESUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDRlI7QURJUTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FDRlo7QURLUTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7QUNIWjtBRE1RO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQ0paO0FET1E7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0FDTFo7QURRUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ05aO0FET1k7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNMaEI7QURPWTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FDTGhCO0FEVUk7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtBQ1JSO0FEV0k7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0FDVFI7QURVUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ1JaO0FEVVE7RUFDSSxrQkFBQTtBQ1JaO0FEV1E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNUWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nwb3J0cy1kZXRhaWwvc3BvcnRzLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VnbWVudF9kaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdtZWRpdW0nO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIC5hY3RpdmV7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgfVxyXG59XHJcbi5tYWluX2NvbnRlbnRfZGl2e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLmJhY2tfaW1hZ2V7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRfbGJse1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlvbi1zbGlkZXtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgIH1cclxuXHJcbiAgICAuYmFja19pbWFnZTR7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZsZXhfZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgLm5hbWV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxpdmV7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcclxuICAgICAgICAgICAgbGVmdDogOHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxpdmUye1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ21lZGl1bSc7XHJcbiAgICAgICAgICAgIHJpZ2h0OiA4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYm9sZF9sYmx7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDc1JTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBsYXlfZGl2e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgLnBsYXl7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hbWV7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRvcF9sYmx7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdtZWRpdW0nO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzA3MDcwO1xyXG4gICAgfVxyXG5cclxuICAgIC5kaXZfZmxleHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzA3MDcwO1xyXG4gICAgICAgIC5iYWNrX3NtYWxse1xyXG4gICAgICAgICAgICB3aWR0aDogOTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjU1cHg7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogOTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRlc2NfZGl2e1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZ3JheV9sYmx7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDdweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuc2VnbWVudF9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG4uc2VnbWVudF9kaXYgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnNlZ21lbnRfZGl2IC5hY3RpdmUge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5iYWNrX2ltYWdlIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5oZWFkX2xibCB7XG4gIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmhlYWRfbGJsIGlvbi1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzcwNzA3MDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1zbGlkZSB7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmJhY2tfaW1hZ2U0IHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5uYW1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLmxpdmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcbiAgbGVmdDogOHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5saXZlMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xuICByaWdodDogOHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5ib2xkX2xibCB7XG4gIGZvbnQtZmFtaWx5OiBcInNlbWktYm9sZFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNzUlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5wbGF5X2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5wbGF5X2RpdiAucGxheSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5wbGF5X2RpdiAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnRvcF9sYmwge1xuICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzcwNzA3MDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kaXZfZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3MDcwNzA7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGl2X2ZsZXggLmJhY2tfc21hbGwge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBtaW4td2lkdGg6IDkwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGl2X2ZsZXggLmRlc2NfZGl2IHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRpdl9mbGV4IC5ncmF5X2xibCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi10b3A6IDdweDtcbn0iXX0= */";
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