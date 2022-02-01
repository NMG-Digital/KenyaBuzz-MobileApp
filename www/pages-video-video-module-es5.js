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


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button mode=\"md\" color=\"light\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Video</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_content_div\">\n\n        <div class=\"video_div\">\n            <video width=\"100%\" height=\"240\" controls poster=\"assets/imgs/news/news1.jpg\">\n                <source src=\"assets/imgs/news/video.mp4\" type=\"video/mp4\">\n            </video>\n        </div>\n\n        <div class=\"cont_div\">\n            <div class=\"flex_div\">\n              <div class=\"back_image bg_image\" [style.backgroundImage]=\"'url(assets/imgs/news/news1.jpg)'\"></div>\n              <div class=\"content_div\">\n                <ion-label class=\"title_lbl\">Test Video</ion-label>\n                <ion-label class=\"light_lbl\">English • Comedy</ion-label>\n                <ion-label class=\"light_lbl\">2010</ion-label>\n              </div>\n            </div>\n\n            <ion-label class=\"detail_lbl\">\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s\n            </ion-label>\n            <ion-label class=\"see_more\">See More</ion-label>\n\n            <ion-label class=\"gray_lbl\">Lorem Ipsum is simply dummy text of the printing and typesetting</ion-label>\n\n            <ion-grid fixed>\n              <ion-row>\n                <ion-col size=\"4\">\n                  <ion-button expand=\"block\" size=\"small\">\n                    <ion-icon slot=\"start\" name=\"arrow-down-sharp\"></ion-icon>\n                    Download\n                  </ion-button>\n                </ion-col>\n                <ion-col size=\"4\">\n                  <ion-button expand=\"block\" size=\"small\">\n                    <ion-icon slot=\"start\" name=\"add-sharp\"></ion-icon>\n                    Watchlist\n                  </ion-button>\n                </ion-col>\n                <ion-col size=\"4\">\n                  <ion-button expand=\"block\" size=\"small\">\n                    <ion-icon slot=\"start\" name=\"arrow-redo-sharp\"></ion-icon>\n                    Share\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n\n            <ion-label class=\"head_lbl\">Trailers</ion-label>\n\n            <div class=\"flex_div2\">\n                <div class=\"back_image4 bg_image\" [style.backgroundImage]=\"'url(assets/imgs/news/news3.jpg)'\"></div>\n                <div class=\"play_div\">\n                    <ion-icon name=\"caret-forward-outline\" class=\"play\"></ion-icon>\n                    <ion-label class=\"name\">Watch Trailer</ion-label>\n                </div>\n            </div>\n\n            <ion-label class=\"head_lbl\" (click)=\"goTovideoList('You may also like')\">You may also like \n                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n            </ion-label>\n            <ion-slides mode=\"ios\" [options]=\"slideOpts\">\n                <ion-slide *ngFor=\"let item of images\">\n                    <div class=\"back_image2 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\n                </ion-slide>\n            </ion-slides>\n        </div>\n    </div>\n</ion-content>";
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


    __webpack_exports__["default"] = ".main_content_div {\n  width: 100%;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .video_div {\n  position: relative;\n  margin-bottom: 10px;\n}\n.main_content_div .cont_div {\n  padding: 10px;\n}\n.main_content_div .flex_div {\n  display: flex;\n}\n.main_content_div .flex_div .back_image {\n  height: 70px;\n  width: 60px;\n  border-radius: 5px;\n  min-width: 60px;\n}\n.main_content_div .flex_div .content_div {\n  padding-left: 10px;\n}\n.main_content_div .flex_div .content_div .title_lbl {\n  font-family: \"medium\";\n  margin-bottom: 5px;\n}\n.main_content_div .flex_div .content_div .light_lbl {\n  color: gray;\n  margin-bottom: 5px;\n}\n.main_content_div .detail_lbl {\n  margin-top: 10px;\n  font-size: 15px;\n}\n.main_content_div .see_more {\n  text-align: right;\n  font-size: 15px;\n  color: gray;\n}\n.main_content_div .gray_lbl {\n  color: gray;\n  font-size: 13px;\n}\n.main_content_div ion-button {\n  --background: #202020;\n  --border-radius: 3px;\n  height: 35px;\n  font-size: 12px;\n}\n.main_content_div .head_lbl {\n  font-family: \"medium\";\n  display: block;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  position: relative;\n}\n.main_content_div .head_lbl ion-icon {\n  position: absolute;\n  right: 0;\n  font-size: 20px;\n  color: #707070;\n}\n.main_content_div .flex_div2 {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  position: relative;\n}\n.main_content_div .flex_div2 .back_image4 {\n  height: 100px;\n  width: 165px;\n  border-radius: 5px;\n}\n.main_content_div .flex_div2 .name {\n  font-size: 12px;\n  margin-top: 5px;\n}\n.main_content_div .flex_div2 .bold_lbl {\n  font-family: \"medium\";\n  position: absolute;\n  top: 75%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-transform: uppercase;\n}\n.main_content_div .flex_div2 .play_div {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  bottom: 0;\n}\n.main_content_div .flex_div2 .play_div .play {\n  font-size: 20px;\n  margin-right: 10px;\n}\n.main_content_div .flex_div2 .play_div .name {\n  font-size: 14px;\n  margin-top: 0px;\n}\n.main_content_div ion-slide {\n  margin-right: 7px;\n}\n.main_content_div .back_image2 {\n  height: 140px;\n  width: 100%;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EaWdpdGFsL0RvY3VtZW50cy9UZXN0Z3JvdW5kL0tCIE1vYmlsZSBBUFAvS0JfQXBwX1Jlcy9LZW55YUJ1enotTW9iaWxlQXBwL3NyYy9hcHAvcGFnZXMvdmlkZW8vdmlkZW8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy92aWRlby92aWRlby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7QURDSTtFQUNJLGNBQUE7QUNDUjtBREVJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0FSO0FER0k7RUFDSSxhQUFBO0FDRFI7QURJSTtFQUNJLGFBQUE7QUNGUjtBREdRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNEWjtBREdRO0VBQ0ksa0JBQUE7QUNEWjtBREdZO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtBQ0RoQjtBREdZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDRGhCO0FES0k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUNIUjtBREtJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0hSO0FES0k7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0hSO0FETUk7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNKUjtBRE9JO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDTFI7QURPUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDTFo7QURTSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ1BSO0FEU1E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDUFo7QURVUTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FDUlo7QURXUTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7QUNUWjtBRFlRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDVlo7QURXWTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ1RoQjtBRFdZO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUNUaEI7QURjSTtFQUNJLGlCQUFBO0FDWlI7QURlSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNiUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZGVvL3ZpZGVvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnRfZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLnZpZGVvX2RpdntcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIC5jb250X2RpdntcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG5cbiAgICAuZmxleF9kaXZ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC5iYWNrX2ltYWdle1xuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDYwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnRfZGl2e1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuXG4gICAgICAgICAgICAudGl0bGVfbGJse1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGlnaHRfbGJse1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuZGV0YWlsX2xibHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cbiAgICAuc2VlX21vcmV7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgIH1cbiAgICAuZ3JheV9sYmx7XG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuXG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMjAyMDIwO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuXG4gICAgLmhlYWRfbGJse1xuICAgICAgICBmb250LWZhbWlseTogJ21lZGl1bSc7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIFxuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6ICM3MDcwNzA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZmxleF9kaXYye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIC5iYWNrX2ltYWdlNHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTY1cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAubmFtZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ib2xkX2xibHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNzUlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAucGxheV9kaXZ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIC5wbGF5e1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmFtZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW9uLXNsaWRle1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgICB9XG5cbiAgICAuYmFja19pbWFnZTJ7XG4gICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxufSIsIi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC52aWRlb19kaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udF9kaXYge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAuYmFja19pbWFnZSB7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWluLXdpZHRoOiA2MHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5jb250ZW50X2RpdiB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAuY29udGVudF9kaXYgLnRpdGxlX2xibCB7XG4gIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLmNvbnRlbnRfZGl2IC5saWdodF9sYmwge1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRldGFpbF9sYmwge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc2VlX21vcmUge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogZ3JheTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ncmF5X2xibCB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMjAyMDIwO1xuICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuaGVhZF9sYmwge1xuICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5oZWFkX2xibCBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM3MDcwNzA7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdjIgLmJhY2tfaW1hZ2U0IHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDE2NXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYyIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYyIC5ib2xkX2xibCB7XG4gIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNzUlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2MiAucGxheV9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdjIgLnBsYXlfZGl2IC5wbGF5IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYyIC5wbGF5X2RpdiAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLXNsaWRlIHtcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmFja19pbWFnZTIge1xuICBoZWlnaHQ6IDE0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufSJdfQ== */";
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
        this.images = this.dummy.images;
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