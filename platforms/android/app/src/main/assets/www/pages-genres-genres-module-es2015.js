(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-genres-genres-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/genres/genres.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/genres/genres.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Genres</ion-title>\n        <ion-button class=\"search_btn\" slot=\"end\" fill=\"clear\" size=\"small\">\n            <ion-icon name=\"search\" color=\"light\"></ion-icon>\n        </ion-button>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_content_div\">\n        <ion-row>\n            <ion-col size=\"6\" *ngFor=\"let item of genres\">\n                <div class=\"back_image bg_image\" [style.backgroundImage]=\"'url('+ item.img +')'\">\n                    <ion-label>{{item.name}}</ion-label>\n                </div>    \n            </ion-col>\n        </ion-row>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/genres/genres-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/genres/genres-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: GenresPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenresPageRoutingModule", function() { return GenresPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _genres_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./genres.page */ "./src/app/pages/genres/genres.page.ts");




const routes = [
    {
        path: '',
        component: _genres_page__WEBPACK_IMPORTED_MODULE_3__["GenresPage"]
    }
];
let GenresPageRoutingModule = class GenresPageRoutingModule {
};
GenresPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GenresPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/genres/genres.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/genres/genres.module.ts ***!
  \***********************************************/
/*! exports provided: GenresPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenresPageModule", function() { return GenresPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _genres_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./genres-routing.module */ "./src/app/pages/genres/genres-routing.module.ts");
/* harmony import */ var _genres_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./genres.page */ "./src/app/pages/genres/genres.page.ts");







let GenresPageModule = class GenresPageModule {
};
GenresPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _genres_routing_module__WEBPACK_IMPORTED_MODULE_5__["GenresPageRoutingModule"]
        ],
        declarations: [_genres_page__WEBPACK_IMPORTED_MODULE_6__["GenresPage"]]
    })
], GenresPageModule);



/***/ }),

/***/ "./src/app/pages/genres/genres.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/genres/genres.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  padding: 10px;\n}\n.main_content_div .back_image {\n  width: 100%;\n  height: 110px;\n  border-radius: 3px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  padding: 5px;\n}\n.main_content_div .back_image ion-label {\n  font-family: \"medium\";\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EaWdpdGFsL0RvY3VtZW50cy9UZXN0Z3JvdW5kL0tCIE1vYmlsZSBBUFAvS0JfQXBwX1Jlcy9LZW55YUJ1enotTW9iaWxlQXBwL3NyYy9hcHAvcGFnZXMvZ2VucmVzL2dlbnJlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2dlbnJlcy9nZW5yZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKO0FEQ0k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDQ1I7QURBUTtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7QUNFWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dlbnJlcy9nZW5yZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudF9kaXYge1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICAuYmFja19pbWFnZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDExMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLm1haW5fY29udGVudF9kaXYge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmJhY2tfaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmFja19pbWFnZSBpb24tbGFiZWwge1xuICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/genres/genres.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/genres/genres.page.ts ***!
  \*********************************************/
/*! exports provided: GenresPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenresPage", function() { return GenresPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/dummy.service */ "./src/app/services/dummy.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let GenresPage = class GenresPage {
    constructor(dummy) {
        this.dummy = dummy;
        this.genres = this.dummy.genrens;
    }
    ngOnInit() {
    }
};
GenresPage.ctorParameters = () => [
    { type: src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_1__["DummyService"] }
];
GenresPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-genres',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./genres.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/genres/genres.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./genres.page.scss */ "./src/app/pages/genres/genres.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_dummy_service__WEBPACK_IMPORTED_MODULE_1__["DummyService"]])
], GenresPage);



/***/ })

}]);
//# sourceMappingURL=pages-genres-genres-module-es2015.js.map