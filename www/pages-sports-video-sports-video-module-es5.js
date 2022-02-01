function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sports-video-sports-video-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sports-video/sports-video.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sports-video/sports-video.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSportsVideoSportsVideoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n    <ion-grid fixed *ngFor=\"let iten of [1,2]\">\n      <ion-row>\n        <ion-col size=\"6\" *ngFor=\"let item of sports\">\n          <div class=\"flex_div\">\n            <div class=\"back_image4 bg_image\" [style.backgroundImage]=\"'url('+item.img+')'\"></div>\n            <ion-label class=\"live2\">9 min</ion-label>\n            <div class=\"play_div\">\n              <ion-icon name=\"caret-forward-outline\" class=\"play\"></ion-icon>\n              <ion-label class=\"name\">{{item.name}}</ion-label>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/sports-video/sports-video-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/sports-video/sports-video-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: SportsVideoPageRoutingModule */

  /***/
  function srcAppPagesSportsVideoSportsVideoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SportsVideoPageRoutingModule", function () {
      return SportsVideoPageRoutingModule;
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


    var _sports_video_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sports-video.page */
    "./src/app/pages/sports-video/sports-video.page.ts");

    var routes = [{
      path: '',
      component: _sports_video_page__WEBPACK_IMPORTED_MODULE_3__["SportsVideoPage"]
    }];

    var SportsVideoPageRoutingModule = function SportsVideoPageRoutingModule() {
      _classCallCheck(this, SportsVideoPageRoutingModule);
    };

    SportsVideoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SportsVideoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/sports-video/sports-video.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/sports-video/sports-video.module.ts ***!
    \***********************************************************/

  /*! exports provided: SportsVideoPageModule */

  /***/
  function srcAppPagesSportsVideoSportsVideoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SportsVideoPageModule", function () {
      return SportsVideoPageModule;
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


    var _sports_video_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sports-video-routing.module */
    "./src/app/pages/sports-video/sports-video-routing.module.ts");
    /* harmony import */


    var _sports_video_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sports-video.page */
    "./src/app/pages/sports-video/sports-video.page.ts");

    var SportsVideoPageModule = function SportsVideoPageModule() {
      _classCallCheck(this, SportsVideoPageModule);
    };

    SportsVideoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sports_video_routing_module__WEBPACK_IMPORTED_MODULE_5__["SportsVideoPageRoutingModule"]],
      declarations: [_sports_video_page__WEBPACK_IMPORTED_MODULE_6__["SportsVideoPage"]]
    })], SportsVideoPageModule);
    /***/
  },

  /***/
  "./src/app/pages/sports-video/sports-video.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/sports-video/sports-video.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSportsVideoSportsVideoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-title {\n  padding: 0;\n}\n\n.main_content_div {\n  width: 100%;\n}\n\n.main_content_div .back_image4 {\n  height: 100px;\n  width: 100%;\n  border-radius: 5px;\n}\n\n.main_content_div .flex_div {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  position: relative;\n}\n\n.main_content_div .flex_div .name {\n  font-size: 12px;\n  margin-top: 5px;\n}\n\n.main_content_div .flex_div .live {\n  position: absolute;\n  top: 0;\n  font-size: 12px;\n  font-family: \"medium\";\n  left: 8px;\n}\n\n.main_content_div .flex_div .live2 {\n  position: absolute;\n  top: 0;\n  font-size: 12px;\n  font-family: \"medium\";\n  right: 8px;\n}\n\n.main_content_div .flex_div .bold_lbl {\n  font-family: \"semi-bold\";\n  position: absolute;\n  top: 75%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-transform: uppercase;\n}\n\n.main_content_div .flex_div .play_div {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  bottom: 0;\n}\n\n.main_content_div .flex_div .play_div .play {\n  font-size: 20px;\n  margin-right: 10px;\n}\n\n.main_content_div .flex_div .play_div .name {\n  font-size: 14px;\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EaWdpdGFsL0RvY3VtZW50cy9UZXN0Z3JvdW5kL0tCIE1vYmlsZSBBUFAvS0JfbW9iaWxlL3NyYy9hcHAvcGFnZXMvc3BvcnRzLXZpZGVvL3Nwb3J0cy12aWRlby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Nwb3J0cy12aWRlby9zcG9ydHMtdmlkZW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtBQ0VKOztBREFJO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0VSOztBRENJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ1I7O0FEQ1E7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQ0NaOztBREVRO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtBQ0FaOztBREdRO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQ0RaOztBRElRO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtBQ0ZaOztBREtRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDSFo7O0FESVk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNGaEI7O0FESVk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQ0ZoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nwb3J0cy12aWRlby9zcG9ydHMtdmlkZW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xuICAgIHBhZGRpbmc6IDA7XG59XG4ubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5iYWNrX2ltYWdlNHtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG5cbiAgICAuZmxleF9kaXZ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgLm5hbWV7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAubGl2ZXtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcbiAgICAgICAgICAgIGxlZnQ6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5saXZlMntcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcbiAgICAgICAgICAgIHJpZ2h0OiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYm9sZF9sYmx7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDc1JTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBsYXlfZGl2e1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAucGxheXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hbWV7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJpb24tdGl0bGUge1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmJhY2tfaW1hZ2U0IHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLm5hbWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAubGl2ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xuICBsZWZ0OiA4cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLmxpdmUyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XG4gIHJpZ2h0OiA4cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLmJvbGRfbGJsIHtcbiAgZm9udC1mYW1pbHk6IFwic2VtaS1ib2xkXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3NSU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLnBsYXlfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLnBsYXlfZGl2IC5wbGF5IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLnBsYXlfZGl2IC5uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/sports-video/sports-video.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/sports-video/sports-video.page.ts ***!
    \*********************************************************/

  /*! exports provided: SportsVideoPage */

  /***/
  function srcAppPagesSportsVideoSportsVideoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SportsVideoPage", function () {
      return SportsVideoPage;
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

    var SportsVideoPage = /*#__PURE__*/function () {
      function SportsVideoPage(dummy, route, router) {
        _classCallCheck(this, SportsVideoPage);

        this.dummy = dummy;
        this.route = route;
        this.router = router;
        this.sports = this.dummy.sports;
      }

      _createClass(SportsVideoPage, [{
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
      }]);

      return SportsVideoPage;
    }();

    SportsVideoPage.ctorParameters = function () {
      return [{
        type: src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__["DummyService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    SportsVideoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sports-video',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sports-video.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sports-video/sports-video.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sports-video.page.scss */
      "./src/app/pages/sports-video/sports-video.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_2__["DummyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], SportsVideoPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-sports-video-sports-video-module-es5.js.map