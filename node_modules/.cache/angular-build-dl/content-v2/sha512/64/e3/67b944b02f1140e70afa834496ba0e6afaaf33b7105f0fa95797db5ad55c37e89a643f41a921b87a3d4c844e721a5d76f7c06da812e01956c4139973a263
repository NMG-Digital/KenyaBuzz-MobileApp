(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs (ionTabsDidChange)=\"tabChange($event)\">\r\n\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"home\">\r\n      <!-- <ion-icon name=\"triangle\"></ion-icon> -->\r\n      <img src=\"assets/tabs/home.png\" *ngIf=\"val != 'home' \">\r\n      <img src=\"assets/tabs/home_active.png\" *ngIf=\"val == 'home' \">\r\n      <ion-label class=\"lbl\" [class.active]=\"val == 'home' \">Home</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tv\">\r\n      <!-- <ion-icon name=\"ellipse\"></ion-icon> -->\r\n      <img src=\"assets/tabs/tv.png\" *ngIf=\"val != 'tv' \">\r\n      <img src=\"assets/tabs/tv_active.png\" *ngIf=\"val == 'tv' \">\r\n      <ion-label class=\"lbl\" [class.active]=\"val == 'tv' \">TV</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"disney\">\r\n      <!-- <ion-icon name=\"square\"></ion-icon> -->\r\n      <img src=\"assets/tabs/disney-grey.png\" *ngIf=\"val != 'disney' \" style=\"width: 60px;\">\r\n      <img src=\"assets/tabs/disney-white.png\" *ngIf=\"val == 'disney' \" style=\"width: 60px;\">\r\n      <!-- <ion-label class=\"lbl\" [class.active]=\"val == 'movies' \">Movies</ion-label> -->\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"sports\">\r\n      <!-- <ion-icon name=\"square\"></ion-icon> -->\r\n      <img src=\"assets/tabs/bat.png\" *ngIf=\"val != 'sports' \">\r\n      <img src=\"assets/tabs/bat_active.png\" *ngIf=\"val == 'sports' \">\r\n      <ion-label class=\"lbl\" [class.active]=\"val == 'sports' \">sports</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"news\">\r\n      <!-- <ion-icon name=\"square\"></ion-icon> -->\r\n      <img src=\"assets/tabs/news.png\" *ngIf=\"val != 'news' \">\r\n      <img src=\"assets/tabs/news_active.png\" *ngIf=\"val == 'news' \">\r\n      <ion-label class=\"lbl\" [class.active]=\"val == 'news' \">News</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>\r\n");

/***/ }),

/***/ "./src/app/pages/tabs/tabs-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/tabs/tabs-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tabs/tabs.page.ts");




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~disney-disney-module~home-home-module~news-news-module~pages-category-category-module~pages-~8172a6cc"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ../home/home.module */ "./src/app/pages/home/home.module.ts")).then(m => m.HomePageModule)
                    }
                ]
            },
            {
                path: 'tv',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | tv-tv-module */[__webpack_require__.e("default~disney-disney-module~home-home-module~news-news-module~pages-category-category-module~pages-~8172a6cc"), __webpack_require__.e("tv-tv-module")]).then(__webpack_require__.bind(null, /*! ../tv/tv.module */ "./src/app/pages/tv/tv.module.ts")).then(m => m.TvPageModule)
                    }
                ]
            },
            {
                path: 'disney',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | disney-disney-module */[__webpack_require__.e("default~disney-disney-module~home-home-module~news-news-module~pages-category-category-module~pages-~8172a6cc"), __webpack_require__.e("disney-disney-module")]).then(__webpack_require__.bind(null, /*! ../disney/disney.module */ "./src/app/pages/disney/disney.module.ts")).then(m => m.DisneyPageModule)
                    }
                ]
            },
            {
                path: 'sports',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | sports-sports-module */[__webpack_require__.e("default~disney-disney-module~home-home-module~news-news-module~pages-category-category-module~pages-~8172a6cc"), __webpack_require__.e("sports-sports-module")]).then(__webpack_require__.bind(null, /*! ../sports/sports.module */ "./src/app/pages/sports/sports.module.ts")).then(m => m.SportsPageModule)
                    }
                ]
            },
            {
                path: 'news',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | news-news-module */[__webpack_require__.e("default~disney-disney-module~home-home-module~news-news-module~pages-category-category-module~pages-~8172a6cc"), __webpack_require__.e("news-news-module")]).then(__webpack_require__.bind(null, /*! ../news/news.module */ "./src/app/pages/news/news.module.ts")).then(m => m.NewsPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tabs/tabs.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/pages/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tabs/tabs.page.ts");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  width: 20px;\n}\n\n.lbl {\n  color: #707070;\n  font-size: 12px;\n}\n\n.active {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFicy9DOlxcbGFyYWdvblxcd3d3XFxLZW55YUJ1enotTW9iaWxlQXBwL3NyY1xcYXBwXFxwYWdlc1xcdGFic1xcdGFicy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RhYnMvdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ0VGOztBREFBO0VBQ0UsWUFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbn1cclxuLmxibCB7XHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5hY3RpdmUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iLCJpbWcge1xuICB3aWR0aDogMjBweDtcbn1cblxuLmxibCB7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5hY3RpdmUge1xuICBjb2xvcjogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.ts ***!
  \*****************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TabsPage = class TabsPage {
    constructor() { }
    tabChange(eve) {
        console.log(eve.tab);
        this.val = eve.tab;
    }
};
TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tabs.page.scss */ "./src/app/pages/tabs/tabs.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=pages-tabs-tabs-module-es2015.js.map