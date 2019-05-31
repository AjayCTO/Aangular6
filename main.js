(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Shared/user.service.ts":
/*!****************************************!*\
  !*** ./src/app/Shared/user.service.ts ***!
  \****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.rooturl = "http://shivamface.shivamitconsultancy.com/";
    }
    UserService.prototype.registerUser = function (user) {
        debugger;
        var body = {
            UserName: "dashrath11",
            Password: "dashrath@12345",
            Email: "test1@test.com",
            FirstName: "dashrath1",
            LastName: "Kumawat2"
        };
        return this.http.post(this.rooturl + '/api/User/Register', body);
    };
    UserService.prototype.userAuthenitication = function (UserName, Password) {
        var data = "grant_type=password&username=" + UserName + "&password=" + Password;
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.rooturl + '/token', data, { headers: reqHeader });
    };
    UserService.prototype.getallProducts = function (Itemsperpage, Min, Max, categoriesobj, searchtext) {
        debugger;
        var _model = { displayLength: Itemsperpage, displayStart: 0, searchText: searchtext, filtertext: "", Categories: categoriesobj, lowprice: Min, highprice: Max, isFeatured: "0", ProductId: "" };
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ dataType: 'json', });
        return this.http.post(this.rooturl + 'api/Product/GetAllproduct', _model, { headers: reqHeader });
    };
    UserService.prototype.getallCategories = function () {
        debugger;
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ dataType: 'json', });
        return this.http.get(this.rooturl + 'api/Categories/GetCategories', { headers: reqHeader });
    };
    UserService.prototype.getmywishlist = function (_model) {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ dataType: 'json', });
        return this.http.post(this.rooturl + 'api/CustomerWishlist/PostWishList', _model, { headers: reqHeader });
    };
    UserService.prototype.loadmywishlist = function (name) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("UserName", name);
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ dataType: 'json', });
        return this.http.get(this.rooturl + 'api/CustomerWishlist/GetWishLists', { headers: reqHeader, params: params });
    };
    UserService.prototype.deletewishlist = function (id) {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ dataType: 'json', });
        return this.http.post(this.rooturl + 'api/WishlistDelete/DeleteWishList?id=' + id, { headers: reqHeader });
    };
    UserService.prototype.getsimilarproducts = function (productID) {
        debugger;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("productID", productID);
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ dataType: 'json', });
        return this.http.get(this.rooturl + 'api/Product/Similarproduct', { headers: reqHeader, params: params });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header> \n \n\n<div class=\"\">\n \n    <router-outlet></router-outlet>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(_router) {
        this._router = _router;
        this.title = 'angular5';
        this.router = _router.url;
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/sign-up/sign-up.component */ "./src/app/user/sign-up/sign-up.component.ts");
/* harmony import */ var _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/sign-in/sign-in.component */ "./src/app/user/sign-in/sign-in.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _productdetail_productdetail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./productdetail/productdetail.component */ "./src/app/productdetail/productdetail.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _shoppingcart_shoppingcart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shoppingcart/shoppingcart.component */ "./src/app/shoppingcart/shoppingcart.component.ts");
/* harmony import */ var ngx_image_zoom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-image-zoom */ "./node_modules/ngx-image-zoom/ngx-image-zoom.umd.js");
/* harmony import */ var ngx_image_zoom__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ngx_image_zoom__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/wishlist/wishlist.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"],
                _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__["SignInComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_11__["UserComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _productdetail_productdetail_component__WEBPACK_IMPORTED_MODULE_13__["ProductdetailComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
                _shoppingcart_shoppingcart_component__WEBPACK_IMPORTED_MODULE_16__["ShoppingcartComponent"],
                _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_18__["WishlistComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                ngx_image_zoom__WEBPACK_IMPORTED_MODULE_17__["NgxImageZoomModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_12__["appRoutes"], { enableTracing: true })
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_14__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_14__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-fixed\">\n\n    <ul  id=\"dropdown1\" class=\"dropdown-content\">\n        <li><a href=\"#!\">Profile</a></li>\n        <li><a href=\"#!\">Setting</a></li>\n        <li class=\"divider\"></li>\n        <li><a (click)=\"logout()\" href=\"#\">Logout</a></li>\n      </ul>\n  <nav>\n\n    <div class=\"container\">\n    <div class=\"nav-wrapper\">\n      <a href=\"#!\" class=\"brand-logo\"> \n        <!-- <img style=\"height:50px; background-color: #fff; border-radius: 100%; position: absolute; margin-top: 7px; margin-left: 10px;\" src=\"http://philosofy.shivamitconsultancy.com/static/media/logo-middle.34176521.png\" />  -->\n        \n        <span> Shivsaagar </span></a>\n      <a href=\"#\" data-target=\"mobile-demo\" class=\"sidenav-trigger\"><i class=\"material-icons\">menu</i></a>\n      <ul class=\"right hide-on-med-and-down\">\n          <li><a routerLink=\"/wishlist\" routerLinkActive=\"active\">Wish List</a></li>\n          <li><a routerLink=\"/shoppingcart\" routerLinkActive=\"active\">My Cart <span style=\"color: #fff; min-width: auto;\" class=\"pink darken-1 badge\">{{CartCounter}}</span></a></li>\n        <li><a routerLink=\"/home\" routerLinkActive=\"active\">Shop</a></li>\n        <li ><a  class=\"dropdown-trigger\" href=\"#!\" data-target=\"dropdown1\">User<i class=\"material-icons right\">arrow_drop_down</i></a></li>\n      </ul>\n    </div>\n  </div>\n  </nav>\n</div>\n\n\n<!-- <h2>Value from child {{goodbye}}</h2> -->\n\n<!-- <app-productdetail (event)=\"setDatafromchild($event)\"></app-productdetail> -->\n\n<!-- <app-productdetail (event)=\"getcounterfromchild($event)\"></app-productdetail> -->\n\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.CartCounter = 0;
    }
    HeaderComponent.prototype.checkuseravailability = function () {
        this.ngOnInit();
    };
    HeaderComponent.prototype.ngOnInit = function () {
        this.username = localStorage.getItem("loginuser");
        this.token = localStorage.getItem("token");
        this.cartdata = JSON.parse(localStorage.getItem("shoppingCarts"));
        if (this.CartCounter != null && this.CartCounter != undefined) {
            this.CartCounter = this.cartdata.length;
        }
        var elems = document.querySelectorAll('.dropdown-trigger');
        var instances = M.Dropdown.init(elems, {});
    };
    HeaderComponent.prototype.setDatafromchild = function (data) {
        this.goodbye = data;
    };
    HeaderComponent.prototype.getcounterfromchild = function (data) {
        debugger;
        this.CartCounter = data;
    };
    HeaderComponent.prototype.logout = function () {
        localStorage.setItem('loginuser', '');
        this.ngOnInit();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<style>\n.ribbon\n{\n  position: absolute;\n    z-index: 10;\n    \n    font-size: 27px;\n    background: #3f51b5;\n    color: #fff;\n    padding-left: 10px;\n    padding-right: 10px;\n    top: 8px;\n    right: 8px;\n    border-radius: 17px;\n}\n\n.mainloader\n{\n  position: fixed;\n    z-index: 10;\n    width: 100%;\n    text-align: center;\n    left:0;\n    top: 40%;\n\n}\n\n\n</style>\n\n<!-- <div class=\"navbar-fixed\">\n\n\n<nav>\n\n  <div class=\"container\">\n  <div class=\"nav-wrapper\">\n    <a href=\"#!\" class=\"brand-logo\"> Products</a>\n    <a (click)=\"showfilter()\" data-target=\"mobile-demo\" class=\"sidenav-trigger\"><i class=\"material-icons\">menu</i></a>\n\n    <a style=\"float: right\" routerLink=\"/login\" data-target=\"mobile-demo\" class=\"sidenav-trigger\"><i class=\"material-icons\">call_missed</i></a>\n   \n  </div>\n</div>\n</nav>\n</div> -->\n\n\n\n\n<div class=\"container\">\n\n<div class=\"row\">\n\n\n  \n<div class=\"col m3\">\n\n    <ul class=\"collection with-header\">\n        <li class=\"collection-header\"><h4>Categories</h4></li>\n  \n        <ul style=\"margin:0; border: none;\" class=\"collapsible\">\n            <li *ngFor=\"let item of categories\">\n              <div class=\"collapsible-header\"><i class=\"material-icons\">filter_drama</i>{{item.categoryName}}</div>\n              <div style=\"padding:20px;\" class=\"collapsible-body\">\n  \n  <ul>\n  <li *ngFor=\"let inneritem of item.categories1\"> \n    <label>\n        <input (change)=\"AddCatID(inneritem.id,inneritem.categoryName,$event)\" type=\"checkbox\" />\n        <span>{{inneritem.categoryName}} </span>\n      </label>\n  </li>\n  </ul>\n              </div>\n            </li>\n          </ul>\n      \n      </ul>\n  \n      \n    <ul class=\"collection with-header\">\n        <li class=\"collection-header\"><h4>By Price</h4></li>\n        <li class=\"collection-item\">\n            <div class=\"row\">\n                <div class=\"input-field col s6\">\n                  <input #Minval ngModel id=\"first_name\" type=\"number\" class=\"validate\">\n                  <label for=\"first_name\">Min</label>\n                </div>\n                <div class=\"input-field col s6\">\n                  <input #Maxval ngModel id=\"last_name\" type=\"number\" class=\"validate\">\n                  <label for=\"last_name\">Max</label>\n                </div>\n              </div>\n  \n              <a (click)=\"pricefilter(Minval.value,Maxval.value)\" style=\"width:100%; text-align:center;\" class=\"waves-effect waves-light btn-small\">Apply Price Filter</a>\n  \n        </li>\n      \n      </ul>\n  \n  \n  </div>\n  \n  \n \n  <div class=\"col m9\">\n\n      <ul class=\"collection with-header\">\n          <li class=\"collection-header\">\n            <div style=\"margin-bottom:0\" class=\"row\">\n            \n                <div class=\"col m6\">\n                  <h4>Products</h4>\n                </div>\n              <div class=\"col m6\">\n                  <div style=\"margin-bottom: 0; margin-top: 0\"class=\"input-field\">\n                      <input  (keyup.enter)=\"searckproducts(searchText.value)\" placeholder=\"Type and hit enter\" #searchText ngModel id=\"searchtext\" type=\"text\" >\n                      \n                    </div>\n              </div>\n            </div>\n          </li>\n         \n        </ul>\n\n        <div *ngIf=\"showloader==true\" class=\"mainloader\">\n        <div class=\"preloader-wrapper big active\">\n            <div class=\"spinner-layer spinner-blue-only\">\n              <div class=\"circle-clipper left\">\n                <div class=\"circle\"></div>\n              </div><div class=\"gap-patch\">\n                <div class=\"circle\"></div>\n              </div><div class=\"circle-clipper right\">\n                <div class=\"circle\"></div>\n              </div>\n            </div>\n          </div>\n        \n        </div>\n\n      <div class=\"row\">\n          <div *ngFor=\"let item of products\" class=\"col s12 m4\">\n            <div class=\"card\">\n               \n              <div style=\"text-align:center; height:250px;\" class=\"card-image waves-effect waves-block waves-light\">\n                  <div class=\"ribbon z-depth-3 ribbon-top-left\"><span>₹{{item[5]}}</span></div>\n              \n\n                <img style=\"padding:15px;max-height:245px; margin: 0 auto\" class=\"activator\" src=\"{{GetProductImage(item[13])}}\">\n              </div>\n              <div style=\"background: #f1f1f1\" class=\"card-content\">\n                <span class=\"card-title activator grey-text text-darken-4\">{{item[18]}}<i class=\"material-icons right\">more_vert</i></span>\n                <p><a style=\"cursor:pointer;\" (click)=\"SetProduct(item)\">View More</a></p>\n              </div>\n              <div class=\"card-reveal\">\n                <span class=\"card-title grey-text text-darken-4\">{{item[18]}}<i class=\"material-icons right\">close</i></span>\n                <p>{{item[10]}}</p>\n              </div>\n            </div>\n            \n          </div>\n\n\n          <div style=\"text-align: center;\" *ngIf=\"products.length == 0\" >\n\n            <h2><i style=\"font-size: 50px;\" class=\"material-icons\">mood_bad</i></h2>\n            <h4>No Product for your search</h4>\n            <p>Try checking spelling or filter with other options</p>\n          </div>\n          \n        </div>\n        \n        \n        \n        \n        <div *ngIf=\"LoadMore==true\" class=\"progress\">\n          <div class=\"indeterminate\"></div>\n        </div>\n        \n        <div  *ngIf=\"showloader==false && products.length > 0\" class=\"row\">\n          <div style=\"text-align:center\" class=\"col-md-12\" >\n            <a style=\"margin:0 auto;\" class=\"waves-effect waves-light btn blue darken-4\" (click)=\"LoadMoreProducts()\" ><i class=\"material-icons right\">format_list_bulleted</i>Load More</a>\n          </div>\n        </div>\n\n  </div>\n</div>\n\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Shared/user.service */ "./src/app/Shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.myusername = localStorage.getItem("loginuser");
        this.itemsPerPage = 21;
        this.Min = "";
        this.Max = "";
        this.categoriesarraySelect = [];
        this.categoriesobj = "";
        this.searchText = null;
        this.AllProductsColumns = [];
        this.thumb = "";
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getproduct(this.itemsPerPage, this.Min, this.Max, this.categoriesobj, this.searchText);
        this.GetCategories();
        this.showloader = true;
        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems, {});
    };
    HomeComponent.prototype.getproduct = function (itemsperpage, Min, Max, categoriesobj, searchtext) {
        var _this = this;
        this._IsLazyLoadingUnderProgress = 1;
        this.userService.getallProducts(itemsperpage, Min, Max, categoriesobj, searchtext).subscribe(function (data) {
            debugger;
            _this.products = data.aaData;
            _this._TotalRecordsCurrent = data.iTotalDisplayRecords;
            console.log(_this.products);
            _this._IsLazyLoadingUnderProgress = 0;
            _this.LoadMore = false;
            _this.showloader = false;
            var colStartn = 0;
            for (var i = 0; i < data.aoColumns.length; i++) {
                if (data.aoColumns[i] == 'CateogryID') {
                    if (colStartn == 0) {
                        colStartn = colStartn + 1;
                        continue;
                    }
                }
                else {
                    if (colStartn > 0) {
                        _this.AllProductsColumns.push({ ColName: data.aoColumns[i], colIndex: i });
                    }
                    else {
                        continue;
                    }
                }
            }
            console.log("Columns");
            console.log(_this.AllProductsColumns);
        }, function (err) {
            debugger;
            alert("Error123");
            _this._IsLazyLoadingUnderProgress = 0;
        });
    };
    HomeComponent.prototype.GetCategories = function () {
        var _this = this;
        this.userService.getallCategories().subscribe(function (data) {
            _this.categories = data;
            debugger;
        }, function (err) {
            debugger;
            alert("Error123");
        });
    };
    HomeComponent.prototype.GetProductImage = function (Path) {
        this.GlobalImage = "http://shivamonline.shivamitconsultancy.com";
        if (Path != "") {
            Path = Path.split(",")[0];
            return this.GlobalImage + "/ProductImages/Large/" + Path;
        }
        return "../img/no-image.png";
    };
    HomeComponent.prototype.LoadMoreProducts = function () {
        if (this._IsLazyLoadingUnderProgress === 0 && this._TotalRecordsCurrent != 0) {
            if (this.itemsPerPage < this._TotalRecordsCurrent) {
                this.LoadMore = true;
                this.showloader = false;
                this._IsLazyLoadingUnderProgress = 1;
                this.itemsPerPage = this.itemsPerPage + 20;
                this.getproduct(this.itemsPerPage, this.Min, this.Max, this.categoriesobj, this.searchText);
            }
        }
    };
    HomeComponent.prototype.pricefilter = function (Min, Max) {
        this.showloader = true;
        this.getproduct(this.itemsPerPage, Min, Max, this.categoriesobj, this.searchText);
    };
    HomeComponent.prototype.AddCatID = function (CategoryId, CategoryName, event) {
        this.showloader = true;
        if (event.target.checked) {
            this.categoriesarraySelect.push(CategoryId);
        }
        else {
            var index = this.categoriesarraySelect.indexOf(CategoryId);
            if (index > -1) {
                this.categoriesarraySelect.splice(index, 1);
            }
        }
        this.categoriesobj = this.categoriesarraySelect.join();
        this.getproduct(this.itemsPerPage, this.Min, this.Max, this.categoriesobj, this.searchText);
    };
    HomeComponent.prototype.SetProduct = function (data) {
        localStorage.setItem("ProductDetail", JSON.stringify(data));
        localStorage.setItem("ProductAttribute", JSON.stringify(this.AllProductsColumns));
        this.router.navigate(["" + "productdetail"]);
    };
    HomeComponent.prototype.searckproducts = function (searchtext) {
        this.showloader = true;
        this.getproduct(this.itemsPerPage, this.Min, this.Max, this.categoriesobj, searchtext);
    };
    HomeComponent.prototype.showfilter = function () {
        document.getElementById("filtersection").style.display = "block";
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/productdetail/productdetail.component.html":
/*!************************************************************!*\
  !*** ./src/app/productdetail/productdetail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<!-- <h1>value from header {{state}}</h1>\n\n<h2>{{goodbye}}</h2>\n\n<button (click)=\"sendtoparent()\">Send to Parent</button> -->\n\n  <div class=\"container\">\n\n    <div class=row>\n\n        \n    <div class=\"col m5\">\n      \n      <img style=\"width:100%\" src=\"{{GetProductImage(localProductDetail[13])}}\" alt=\"\">\n\n    \n\n      <div>\n          <span *ngFor=\"let item of allProductDetailNewWithAttr[0].ProductImages\">\n              <img style=\"height:75px; width:75px; margin-right: 12px;\" src=\"{{GetProductImage(item.imagepath)}}\" alt=\"\" />\n            </span>\n      </div>\n      <br />\n      <div>\n          <button (click)=\"AddToCartGlobal(allProductDetailNewWithAttr[0].ProductVersionId, allProductDetailNewWithAttr[0], 'products-slider-', 1)\" class=\"waves-effect waves-light btn-large\"><i class=\"material-icons left\">shopping_cart</i> Add To cart</button>\n          <button (click)=\"AddTowishlist(allProductDetailNewWithAttr[0].ProductVersionId, allProductDetailNewWithAttr[0])\" class=\"waves-effect waves-light btn-large purple darken-4\"><i class=\"material-icons left\">favorite_border</i> Save for later</button>\n      </div>\n \n\n    </div>\n    <div class=\"col m7\">\n      <h5 style=\"font-size: 20px;\">  {{allProductDetailNewWithAttr[0].ProductName}}</h5>\n      <p> <b> ₹ {{allProductDetailNewWithAttr[0].productprice}} </b></p>\n      <p> {{allProductDetailNewWithAttr[0].description}}</p>\n      <p><b>Other Info</b></p>\n      <table>\n        <tr  *ngFor=\"let item of allProductDetailNewWithAttr[0].ProductAttributes\">\n          <td *ngIf=\"item.attrvalue!='-' || item.attrvalue==''\">\n            {{item.attrName}}\n          </td>\n          <td *ngIf=\"item.attrvalue!='-' || item.attrvalue==''\">\n              {{item.attrvalue}}\n          </td>\n        </tr>  \n      </table>\n\n      <br />\n      <button (click)=\"AddToCartGlobal(allProductDetailNewWithAttr[0].ProductVersionId, allProductDetailNewWithAttr[0], 'products-slider-', 1)\" class=\"waves-effect waves-light btn-large\"><i class=\"material-icons left\">shopping_cart</i> Add To cart</button>\n      <button (click)=\"AddTowishlist(allProductDetailNewWithAttr[0].ProductVersionId, allProductDetailNewWithAttr[0])\" class=\"waves-effect waves-light btn-large purple darken-4\"><i class=\"material-icons left\">favorite_border</i> Save for later</button>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/productdetail/productdetail.component.scss":
/*!************************************************************!*\
  !*** ./src/app/productdetail/productdetail.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RkZXRhaWwvcHJvZHVjdGRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/productdetail/productdetail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/productdetail/productdetail.component.ts ***!
  \**********************************************************/
/*! exports provided: ProductdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdetailComponent", function() { return ProductdetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Shared/user.service */ "./src/app/Shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





var ProductdetailComponent = /** @class */ (function () {
    function ProductdetailComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.goodbye = "Goodbye friends";
        this.allProductDetailNewWithAttr = [];
        this.SelecteditemDetail = [];
        this.AllCartItems = [];
        this.CartProductsCounter = 0;
        this.shoppingCart = [];
    }
    ProductdetailComponent.prototype.ngOnInit = function () {
        this.localProductDetail = JSON.parse(localStorage.getItem("ProductDetail"));
        console.log(this.localProductDetail);
        this.shoppingCart = JSON.parse(localStorage.getItem("shoppingCarts"));
        this.Similarproduct();
    };
    ProductdetailComponent.prototype.sendtoparent = function () {
        this.event.emit(this.goodbye);
    };
    ProductdetailComponent.prototype.GetProductImage = function (Path) {
        this.GlobalImage = "http://shivamonline.shivamitconsultancy.com";
        if (Path != "") {
            Path = Path.split(",")[0];
            return this.GlobalImage + "/ProductImages/Large/" + Path;
        }
        return "../img/no-image.png";
    };
    ProductdetailComponent.prototype.isAttrExist = function (arry, stringtocheck) {
        var retunv = false;
        for (var i = 0; i < arry.length; i++) {
            if (arry[i].Value == stringtocheck) {
                retunv = true;
                break;
            }
        }
        return retunv;
    };
    ProductdetailComponent.prototype.Similarproduct = function () {
        var _this = this;
        var itemNew = JSON.parse(localStorage.getItem("ProductDetail"));
        var itemattribute = JSON.parse(localStorage.getItem("ProductAttribute"));
        this.userService.getsimilarproducts(itemNew[4]).subscribe(function (data) {
            debugger;
            _this.similarproduct = data.allAttributes;
            if (_this.similarproduct.length > 0) {
                _this.allProductDetailNewWithAttr.push({
                    ProductName: _this.similarproduct[0].productName,
                    ProductVersionId: _this.similarproduct[0].id,
                    SuppplierName: _this.similarproduct[0].supplierName,
                    description: _this.similarproduct[0].productDesc,
                    productprice: _this.similarproduct[0].productprice,
                    ProductAttributes: _this.similarproduct[0].productAttrubutes,
                    ProductImages: _this.similarproduct[0].productImage,
                });
            }
            console.log("this.allProductDetailNewWithAttr");
            console.log(_this.allProductDetailNewWithAttr);
        }, function (err) {
            debugger;
            alert("Error123");
        });
    };
    ProductdetailComponent.prototype.checkforProductDetail = function () {
        var isnot = true;
        for (var i = 0; i < this.SelecteditemDetail.length; i++) {
            if (this.SelecteditemDetail[i].AttrValue == '') {
                var itemNew = JSON.parse(localStorage.getItem("ProductDetail"));
                var itemattribute = JSON.parse(localStorage.getItem("ProductAttribute"));
                for (var k = 0; k < itemattribute.length; k++) {
                    if (itemattribute[k].ColName == this.SelecteditemDetail[i].AttrName) {
                        this.SelecteditemDetail[i].AttrValue = itemNew[itemattribute[k].colIndex].toUpperCase();
                    }
                }
            }
        }
        return isnot;
    };
    ProductdetailComponent.prototype.GetOtherDetails = function (item) {
        var allValues = item == undefined ? [] : item.split("#");
        for (var i = 0; i < this.SelecteditemDetail.length; i++) {
            if (allValues[0] == this.SelecteditemDetail[i].AttrName) {
                this.SelecteditemDetail[i].AttrValue = allValues[1];
            }
        }
        if (this.checkforProductDetail() == false) {
            alert("please select all attribute values");
        }
        else {
            for (var i = 0; i < this.similarproduct.length; i++) {
                var ProductCounter = 0;
                for (var k = 0; k < this.similarproduct[i].productAttrubutes.length; k++) {
                    for (var count = 0; count < this.SelecteditemDetail.length; count++) {
                        if (this.similarproduct[i].productAttrubutes[k].attrName == this.SelecteditemDetail[count].AttrName && this.similarproduct[i].productAttrubutes[k].attrvalue.toUpperCase() == this.SelecteditemDetail[count].AttrValue) {
                            ProductCounter = ProductCounter + 1;
                        }
                    }
                }
            }
        }
    };
    ProductdetailComponent.prototype.AddToCartGlobal = function (ProductID, product, ID, cartQuantity, cols) {
        debugger;
        this.shoppingCart = JSON.parse(localStorage.getItem("shoppingCarts"));
        if (this.shoppingCart != null) {
            for (i = 0; i < this.shoppingCart.length; i++) {
                if (this.shoppingCart[i].ProductName == product.ProductName) {
                    this.shoppingCart[i].Quantity = this.shoppingCart[i].Quantity + 1;
                    localStorage.setItem("shoppingCarts", JSON.stringify(this.shoppingCart));
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire(product.ProductName, 'Successfully Added', 'success');
                    return 0;
                }
            }
        }
        this.AllCartItems = localStorage.getItem("shoppingCarts") === null ? [] : JSON.parse(localStorage.getItem("shoppingCarts"));
        var item = this.AllCartItems.filter(function (item) {
            debugger;
            if (product.ProductAttributes == undefined) {
                if (item.ProductId === product[4]) {
                    item.Quantity = item.Quantity + 1;
                }
            }
            else {
                if (item.ProductId === product.ProductVersionId) {
                    item.Quantity = item.Quantity + 1;
                }
            }
            return product.ProductAttributes == undefined ? item.ProductId === product[4] : item.ProductId === product.ProductId;
        })[0];
        if (item == undefined) {
            this.CartProductsCounter++;
            var des = "";
            var k = 18;
            if (product.ProductAttributes == undefined) {
                for (var i = 0; i < 3; i++) {
                    if (product[k] == null || product[k] == "-") {
                        k = k + 1;
                    }
                    else {
                        des = des + "<strong>" + cols[i].ColName + "</strong> : " + "(" + product[k].toUpperCase() + ") ";
                        k = k + 1;
                    }
                }
                cartQuantity = cartQuantity == undefined || cartQuantity == null ? 1 : cartQuantity;
                this.AllCartItems.push({ ProductId: ProductID, Quantity: cartQuantity, Image: product.ProductImages, ProductName: product.ProductName, productDescription: product.description, productprice: product.productprice });
            }
            else {
                for (var i = 0; i < product.ProductAttributes.length; i++) {
                    if (product.ProductAttributes[i].attrvalue == null || product.ProductAttributes[i].attrvalue == "-") {
                        continue;
                    }
                    else {
                        des = des + "<strong>" + product.ProductAttributes[i].attrName + "</strong> : " + "(" + product.ProductAttributes[i].attrvalue + ") ";
                        k = k + 1;
                    }
                }
                cartQuantity = cartQuantity == undefined || cartQuantity == null ? 1 : cartQuantity;
                this.AllCartItems.push({ ProductId: ProductID, Quantity: cartQuantity, Image: product.ProductImages, ProductName: product.ProductName, productDescription: product.description, productprice: product.productprice });
            }
        }
        debugger;
        if (product[9] == undefined) {
            product[9] = product.ProductName;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire(product.ProductName, 'Successfully Added', 'success');
        localStorage.setItem("shoppingCarts", JSON.stringify(this.AllCartItems));
        var data = JSON.parse(localStorage.getItem("shoppingCarts"));
        console.log(data);
        this.event.emit(data.length);
    };
    ProductdetailComponent.prototype.AddTowishlist = function (Id, Product) {
        var wishListmodel = { ProductId: Id, Productattrid: Id, CustomerId: -1, UserID: localStorage.getItem("UserName") };
        this.userService.getmywishlist(wishListmodel).subscribe(function (data) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire(Product.ProductName, 'Added to wishlist', 'success');
            debugger;
        }, function (err) {
            debugger;
            alert("Error123");
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProductdetailComponent.prototype, "state", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ProductdetailComponent.prototype, "event", void 0);
    ProductdetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productdetail',
            template: __webpack_require__(/*! ./productdetail.component.html */ "./src/app/productdetail/productdetail.component.html"),
            styles: [__webpack_require__(/*! ./productdetail.component.scss */ "./src/app/productdetail/productdetail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProductdetailComponent);
    return ProductdetailComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/sign-up/sign-up.component */ "./src/app/user/sign-up/sign-up.component.ts");
/* harmony import */ var _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/sign-in/sign-in.component */ "./src/app/user/sign-in/sign-in.component.ts");
/* harmony import */ var _productdetail_productdetail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productdetail/productdetail.component */ "./src/app/productdetail/productdetail.component.ts");
/* harmony import */ var _shoppingcart_shoppingcart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shoppingcart/shoppingcart.component */ "./src/app/shoppingcart/shoppingcart.component.ts");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/wishlist/wishlist.component.ts");
 // Add this





var appRoutes = [
    {
        path: 'signup',
        component: _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_1__["SignUpComponent"]
    },
    {
        path: 'login',
        component: _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__["SignInComponent"]
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    },
    {
        path: 'productdetail',
        component: _productdetail_productdetail_component__WEBPACK_IMPORTED_MODULE_3__["ProductdetailComponent"]
    },
    {
        path: 'shoppingcart',
        component: _shoppingcart_shoppingcart_component__WEBPACK_IMPORTED_MODULE_4__["ShoppingcartComponent"]
    },
    {
        path: 'wishlist',
        component: _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_5__["WishlistComponent"]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];


/***/ }),

/***/ "./src/app/shoppingcart/shoppingcart.component.html":
/*!**********************************************************!*\
  !*** ./src/app/shoppingcart/shoppingcart.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n<h3>Shopping Cart</h3>\n\n<div class=\"shopping-cart\">\n\n  <div class=\"column-labels\">\n    <label class=\"product-image\"> <b> Image </b></label>\n    <label class=\"product-details\"><b>Product</b></label>\n    <label class=\"product-price\"><b>Price</b></label>\n    <label class=\"product-quantity\"><b>Quantity</b></label>\n    <label class=\"product-removal\"><b>Remove</b></label>\n    <label class=\"product-line-price\"><b>Total</b></label>\n  </div>\n\n  <div *ngFor=\"let item of shoppingCart\" class=\"product\">\n    <div *ngFor=\"let image of item.Image | slice:0:1; let i=index\" class=\"product-image\">\n      <img src=\"{{GetProductImage(image.imagepath)}}\">\n    </div>\n    <div class=\"product-details\">\n      <div class=\"product-title text\"> <b> {{item.ProductName}} </b> </div>\n      <p class=\"product-description dtext\">{{item.productDescription}}</p>\n    </div>\n    <div class=\"product-price\">{{item.productprice}}</div>\n    <div class=\"product-quantity\">\n      <input type=\"number\" [(ngModel)]=\"item.Quantity\" value=\"{{item.Quantity}}\" min=\"1\">\n    </div>\n    <div class=\"product-removal\">\n      <button (click)=\"RemoveCartGlobal(item)\" class=\"remove-product red darken-4\">\n        Remove\n      </button>\n    </div>\n    <div class=\"product-line-price\">{{item.productprice * item.Quantity}}  </div>\n  </div>\n\n\n\n  <div class=\"totals\">\n  \n    <div class=\"totals-item totals-item-total\">\n      <label> <b>Grand Total</b> </label>\n      <div class=\"totals-value\" id=\"cart-total\"> <b>{{ getTotal() }}</b> </div>\n    </div>\n  </div>\n      \n  <button (click)=\"checkout()\" style=\"float: right\" class=\"waves-effect waves-light btn-large purple darken-4\"><i class=\"material-icons left\">shopping_basket</i> Checkout</button>\n\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/shoppingcart/shoppingcart.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/shoppingcart/shoppingcart.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*\r\nI wanted to go with a mobile first approach, but it actually lead to more verbose CSS in this case, so I've gone web first. Can't always force things...\r\n\r\nSide note: I know that this style of nesting in SASS doesn't result in the most performance efficient CSS code... but on the OCD/organizational side, I like it. So for CodePen purposes, CSS selector performance be damned.\r\n*/\n/* Global settings */\n/* Global \"table\" column settings */\n.product-image {\n  float: left;\n  width: 20%; }\n.product-details {\n  float: left;\n  width: 37%; }\n.product-price {\n  float: left;\n  width: 12%; }\n.product-quantity {\n  float: left;\n  width: 10%; }\n.product-removal {\n  float: left;\n  width: 9%; }\n.product-line-price {\n  float: left;\n  width: 12%;\n  text-align: right; }\n/* This is used as the traditional .clearfix class */\n.group:before, .shopping-cart:before, .column-labels:before, .product:before, .totals-item:before,\n.group:after,\n.shopping-cart:after,\n.column-labels:after,\n.product:after,\n.totals-item:after {\n  content: '';\n  display: table; }\n.group:after,\n.shopping-cart:after,\n.column-labels:after,\n.product:after,\n.totals-item:after {\n  clear: both; }\n.group, .shopping-cart, .column-labels, .product, .totals-item {\n  zoom: 1; }\n/* Apply clearfix in a few places */\n/* Apply dollar signs */\n.product .product-price:before, .product .product-line-price:before, .totals-value:before {\n  content: '₹'; }\n/* Body/Header stuff */\nh1 {\n  font-weight: 100; }\nlabel {\n  color: #aaa;\n  font-size: 16px; }\n.shopping-cart {\n  margin-top: -45px; }\n/* Column headers */\n.column-labels label {\n  padding-bottom: 15px;\n  margin-bottom: 15px;\n  border-bottom: 1px solid #eee; }\n.column-labels .product-image, .column-labels .product-details, .column-labels .product-removal {\n  text-indent: -9999px; }\n/* Product entries */\n.product {\n  margin-bottom: 20px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #eee; }\n.product .product-image {\n    text-align: center; }\n.product .product-image img {\n      width: 100px; }\n.product .product-details .product-title {\n    margin-right: 20px; }\n.product .product-details .product-description {\n    margin: 5px 20px 5px 0;\n    line-height: 1.4em; }\n.product .product-quantity input {\n    width: 40px; }\n.product .remove-product {\n    border: 0;\n    padding: 4px 8px;\n    background-color: #c66;\n    color: #fff;\n    font-size: 12px;\n    border-radius: 3px; }\n.product .remove-product:hover {\n    background-color: #a44; }\n/* Totals section */\n.totals .totals-item {\n  float: right;\n  clear: both;\n  width: 100%;\n  margin-bottom: 10px; }\n.totals .totals-item label {\n    float: left;\n    clear: both;\n    width: 79%;\n    text-align: right; }\n.totals .totals-item .totals-value {\n    float: right;\n    width: 21%;\n    text-align: right; }\n.checkout {\n  float: right;\n  border: 0;\n  margin-top: 20px;\n  padding: 6px 25px;\n  background-color: #6b6;\n  color: #fff;\n  font-size: 25px;\n  border-radius: 3px; }\n.checkout:hover {\n  background-color: #494; }\n/* Make adjustments for tablet */\n@media screen and (max-width: 650px) {\n  .shopping-cart {\n    margin: 0;\n    padding-top: 20px;\n    border-top: 1px solid #eee; }\n  .column-labels {\n    display: none; }\n  .product-image {\n    float: right;\n    width: auto; }\n    .product-image img {\n      margin: 0 0 10px 10px; }\n  .product-details {\n    float: none;\n    margin-bottom: 10px;\n    width: auto; }\n  .product-price {\n    clear: both;\n    width: 70px; }\n  .product-quantity {\n    width: 100px; }\n    .product-quantity input {\n      margin-left: 20px; }\n  .product-quantity:before {\n    content: 'x'; }\n  .product-removal {\n    width: auto; }\n  .product-line-price {\n    float: right;\n    width: 70px; } }\n/* Make more adjustments for phone */\n@media screen and (max-width: 350px) {\n  .product-removal {\n    float: right; }\n  .product-line-price {\n    float: right;\n    clear: left;\n    width: auto;\n    margin-top: 10px; }\n  .product .product-line-price:before {\n    content: 'Item Total: ₹'; }\n  .totals .totals-item label {\n    width: 60%; }\n  .totals .totals-item .totals-value {\n    width: 40%; } }\n.text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  line-height: 18px;\n  max-height: 36px;\n  -webkit-line-clamp: 2; }\n.dtext {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  line-height: 18px;\n  max-height: 108px;\n  -webkit-line-clamp: 4; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmdjYXJ0L3Nob3BwaW5nY2FydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hvcHBpbmdjYXJ0L0Q6XFxBbmd1bGFycHJvamVjdHNcXGFuZ3VsYXI1L3NyY1xcYXBwXFxzaG9wcGluZ2NhcnRcXHNob3BwaW5nY2FydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNFaEI7Ozs7Q0RHQztBQ0dELG9CQUFBO0FBTUEsbUNBQUE7QUFDQTtFQUFpQixXQUFXO0VBQUUsVUFBVSxFQUFBO0FBQ3hDO0VBQW1CLFdBQVc7RUFBRSxVQUFVLEVBQUE7QUFDMUM7RUFBaUIsV0FBVztFQUFFLFVBQVUsRUFBQTtBQUN4QztFQUFvQixXQUFXO0VBQUUsVUFBVSxFQUFBO0FBQzNDO0VBQW1CLFdBQVc7RUFBRSxTQUFTLEVBQUE7QUFDekM7RUFBc0IsV0FBVztFQUFFLFVBQVU7RUFBRSxpQkFBaUIsRUFBQTtBQUdoRSxvREFBQTtBQUNBOzs7Ozs7RUFFSSxXQUFXO0VBQ1gsY0FBYyxFQUFBO0FBRmxCOzs7OztFQUtJLFdBQVcsRUFBQTtBQUVmO0VBQ0ksT0FBTyxFQUFBO0FBSVgsbUNBQUE7QUFNQSx1QkFBQTtBQUNBO0VBQ0UsWUFBUyxFQUFJO0FBSWYsc0JBQUE7QUFHQTtFQUNFLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsV0EvQ2dCO0VBZ0RoQixlQUFlLEVBQUE7QUFHakI7RUFDRSxpQkFBaUIsRUFBQTtBQUluQixtQkFBQTtBQUNBO0VBRUksb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQiw2QkE5RGUsRUFBQTtBQTBEbkI7RUFRSSxvQkFBb0IsRUFBQTtBQUt4QixvQkFBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQiw2QkEzRWlCLEVBQUE7QUF3RW5CO0lBTUksa0JBQWtCLEVBQUE7QUFOdEI7TUFRTSxZQUFZLEVBQUE7QUFSbEI7SUFjTSxrQkFBa0IsRUFBQTtBQWR4QjtJQWtCTSxzQkFBc0I7SUFDdEIsa0JBQWtCLEVBQUE7QUFuQnhCO0lBeUJNLFdBQVcsRUFBQTtBQXpCakI7SUErQkksU0FBUztJQUNULGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsV0FBVztJQUVYLGVBQWU7SUFDZixrQkFBa0IsRUFBQTtBQXJDdEI7SUF5Q0ksc0JBQXNCLEVBQUE7QUFLMUIsbUJBQUE7QUFDQTtFQUVJLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQixFQUFBO0FBTHZCO0lBUU0sV0FBVztJQUNYLFdBQVc7SUFDWCxVQUFVO0lBQ1YsaUJBQWlCLEVBQUE7QUFYdkI7SUFlTSxZQUFZO0lBQ1osVUFBVTtJQUNWLGlCQUFpQixFQUFBO0FBT3ZCO0VBQ0UsWUFBWTtFQUNaLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0Usc0JBQXNCLEVBQUE7QUFHeEIsZ0NBQUE7QUFDQTtFQTNHQTtJQThHSSxTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLDBCQXBLZSxFQUFBO0VBdUtqQjtJQUNFLGFBQWEsRUFBQTtFQWxLakI7SUFzS0ksWUFBWTtJQUNaLFdBQVcsRUFBQTtJQUZiO01BSUkscUJBQXFCLEVBQUE7RUF4SzNCO0lBNktJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsV0FBVyxFQUFBO0VBOUtmO0lBa0xJLFdBQVc7SUFDWCxXQUFXLEVBQUE7RUFsTGY7SUFzTEksWUFBWSxFQUFBO0lBRGQ7TUFHSSxpQkFBaUIsRUFBQTtFQUlyQjtJQUNFLFlBQVksRUFBQTtFQTVMaEI7SUFnTUksV0FBVyxFQUFBO0VBL0xmO0lBbU1JLFlBQVk7SUFDWixXQUFXLEVBQUEsRUFDWjtBQUtILG9DQUFBO0FBQ0E7RUE1TUE7SUErTUksWUFBWSxFQUFBO0VBOU1oQjtJQWtOSSxZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0IsRUFBQTtFQUdsQjtJQUNFLHdCQUFTLEVBQWdCO0VBN0c3QjtJQW1IUSxVQUFVLEVBQUE7RUFuSGxCO0lBdUhRLFVBQVUsRUFBQSxFQUNYO0FBSVA7RUFDSSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHFCQUFxQixFQUNPO0FBSWhDO0VBQ0ksZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixxQkFBcUIsRUFDTyIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nY2FydC9zaG9wcGluZ2NhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxyXG5JIHdhbnRlZCB0byBnbyB3aXRoIGEgbW9iaWxlIGZpcnN0IGFwcHJvYWNoLCBidXQgaXQgYWN0dWFsbHkgbGVhZCB0byBtb3JlIHZlcmJvc2UgQ1NTIGluIHRoaXMgY2FzZSwgc28gSSd2ZSBnb25lIHdlYiBmaXJzdC4gQ2FuJ3QgYWx3YXlzIGZvcmNlIHRoaW5ncy4uLlxyXG5cclxuU2lkZSBub3RlOiBJIGtub3cgdGhhdCB0aGlzIHN0eWxlIG9mIG5lc3RpbmcgaW4gU0FTUyBkb2Vzbid0IHJlc3VsdCBpbiB0aGUgbW9zdCBwZXJmb3JtYW5jZSBlZmZpY2llbnQgQ1NTIGNvZGUuLi4gYnV0IG9uIHRoZSBPQ0Qvb3JnYW5pemF0aW9uYWwgc2lkZSwgSSBsaWtlIGl0LiBTbyBmb3IgQ29kZVBlbiBwdXJwb3NlcywgQ1NTIHNlbGVjdG9yIHBlcmZvcm1hbmNlIGJlIGRhbW5lZC5cclxuKi9cbi8qIEdsb2JhbCBzZXR0aW5ncyAqL1xuLyogR2xvYmFsIFwidGFibGVcIiBjb2x1bW4gc2V0dGluZ3MgKi9cbi5wcm9kdWN0LWltYWdlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAyMCU7IH1cblxuLnByb2R1Y3QtZGV0YWlscyB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMzclOyB9XG5cbi5wcm9kdWN0LXByaWNlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMiU7IH1cblxuLnByb2R1Y3QtcXVhbnRpdHkge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwJTsgfVxuXG4ucHJvZHVjdC1yZW1vdmFsIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA5JTsgfVxuXG4ucHJvZHVjdC1saW5lLXByaWNlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMiU7XG4gIHRleHQtYWxpZ246IHJpZ2h0OyB9XG5cbi8qIFRoaXMgaXMgdXNlZCBhcyB0aGUgdHJhZGl0aW9uYWwgLmNsZWFyZml4IGNsYXNzICovXG4uZ3JvdXA6YmVmb3JlLCAuc2hvcHBpbmctY2FydDpiZWZvcmUsIC5jb2x1bW4tbGFiZWxzOmJlZm9yZSwgLnByb2R1Y3Q6YmVmb3JlLCAudG90YWxzLWl0ZW06YmVmb3JlLFxuLmdyb3VwOmFmdGVyLFxuLnNob3BwaW5nLWNhcnQ6YWZ0ZXIsXG4uY29sdW1uLWxhYmVsczphZnRlcixcbi5wcm9kdWN0OmFmdGVyLFxuLnRvdGFscy1pdGVtOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IHRhYmxlOyB9XG5cblxuLmdyb3VwOmFmdGVyLFxuLnNob3BwaW5nLWNhcnQ6YWZ0ZXIsXG4uY29sdW1uLWxhYmVsczphZnRlcixcbi5wcm9kdWN0OmFmdGVyLFxuLnRvdGFscy1pdGVtOmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7IH1cblxuLmdyb3VwLCAuc2hvcHBpbmctY2FydCwgLmNvbHVtbi1sYWJlbHMsIC5wcm9kdWN0LCAudG90YWxzLWl0ZW0ge1xuICB6b29tOiAxOyB9XG5cbi8qIEFwcGx5IGNsZWFyZml4IGluIGEgZmV3IHBsYWNlcyAqL1xuLyogQXBwbHkgZG9sbGFyIHNpZ25zICovXG4ucHJvZHVjdCAucHJvZHVjdC1wcmljZTpiZWZvcmUsIC5wcm9kdWN0IC5wcm9kdWN0LWxpbmUtcHJpY2U6YmVmb3JlLCAudG90YWxzLXZhbHVlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICfigrknOyB9XG5cbi8qIEJvZHkvSGVhZGVyIHN0dWZmICovXG5oMSB7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7IH1cblxubGFiZWwge1xuICBjb2xvcjogI2FhYTtcbiAgZm9udC1zaXplOiAxNnB4OyB9XG5cbi5zaG9wcGluZy1jYXJ0IHtcbiAgbWFyZ2luLXRvcDogLTQ1cHg7IH1cblxuLyogQ29sdW1uIGhlYWRlcnMgKi9cbi5jb2x1bW4tbGFiZWxzIGxhYmVsIHtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlOyB9XG5cbi5jb2x1bW4tbGFiZWxzIC5wcm9kdWN0LWltYWdlLCAuY29sdW1uLWxhYmVscyAucHJvZHVjdC1kZXRhaWxzLCAuY29sdW1uLWxhYmVscyAucHJvZHVjdC1yZW1vdmFsIHtcbiAgdGV4dC1pbmRlbnQ6IC05OTk5cHg7IH1cblxuLyogUHJvZHVjdCBlbnRyaWVzICovXG4ucHJvZHVjdCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTsgfVxuICAucHJvZHVjdCAucHJvZHVjdC1pbWFnZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICAgLnByb2R1Y3QgLnByb2R1Y3QtaW1hZ2UgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDBweDsgfVxuICAucHJvZHVjdCAucHJvZHVjdC1kZXRhaWxzIC5wcm9kdWN0LXRpdGxlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7IH1cbiAgLnByb2R1Y3QgLnByb2R1Y3QtZGV0YWlscyAucHJvZHVjdC1kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luOiA1cHggMjBweCA1cHggMDtcbiAgICBsaW5lLWhlaWdodDogMS40ZW07IH1cbiAgLnByb2R1Y3QgLnByb2R1Y3QtcXVhbnRpdHkgaW5wdXQge1xuICAgIHdpZHRoOiA0MHB4OyB9XG4gIC5wcm9kdWN0IC5yZW1vdmUtcHJvZHVjdCB7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M2NjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4OyB9XG4gIC5wcm9kdWN0IC5yZW1vdmUtcHJvZHVjdDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E0NDsgfVxuXG4vKiBUb3RhbHMgc2VjdGlvbiAqL1xuLnRvdGFscyAudG90YWxzLWl0ZW0ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGNsZWFyOiBib3RoO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxuICAudG90YWxzIC50b3RhbHMtaXRlbSBsYWJlbCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgd2lkdGg6IDc5JTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxuICAudG90YWxzIC50b3RhbHMtaXRlbSAudG90YWxzLXZhbHVlIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgd2lkdGg6IDIxJTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxuXG4uY2hlY2tvdXQge1xuICBmbG9hdDogcmlnaHQ7XG4gIGJvcmRlcjogMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogNnB4IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2YjY7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDsgfVxuXG4uY2hlY2tvdXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk0OyB9XG5cbi8qIE1ha2UgYWRqdXN0bWVudHMgZm9yIHRhYmxldCAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgLnNob3BwaW5nLWNhcnQge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTsgfVxuICAuY29sdW1uLWxhYmVscyB7XG4gICAgZGlzcGxheTogbm9uZTsgfVxuICAucHJvZHVjdC1pbWFnZSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHdpZHRoOiBhdXRvOyB9XG4gICAgLnByb2R1Y3QtaW1hZ2UgaW1nIHtcbiAgICAgIG1hcmdpbjogMCAwIDEwcHggMTBweDsgfVxuICAucHJvZHVjdC1kZXRhaWxzIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHdpZHRoOiBhdXRvOyB9XG4gIC5wcm9kdWN0LXByaWNlIHtcbiAgICBjbGVhcjogYm90aDtcbiAgICB3aWR0aDogNzBweDsgfVxuICAucHJvZHVjdC1xdWFudGl0eSB7XG4gICAgd2lkdGg6IDEwMHB4OyB9XG4gICAgLnByb2R1Y3QtcXVhbnRpdHkgaW5wdXQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7IH1cbiAgLnByb2R1Y3QtcXVhbnRpdHk6YmVmb3JlIHtcbiAgICBjb250ZW50OiAneCc7IH1cbiAgLnByb2R1Y3QtcmVtb3ZhbCB7XG4gICAgd2lkdGg6IGF1dG87IH1cbiAgLnByb2R1Y3QtbGluZS1wcmljZSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHdpZHRoOiA3MHB4OyB9IH1cblxuLyogTWFrZSBtb3JlIGFkanVzdG1lbnRzIGZvciBwaG9uZSAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzUwcHgpIHtcbiAgLnByb2R1Y3QtcmVtb3ZhbCB7XG4gICAgZmxvYXQ6IHJpZ2h0OyB9XG4gIC5wcm9kdWN0LWxpbmUtcHJpY2Uge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjbGVhcjogbGVmdDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxMHB4OyB9XG4gIC5wcm9kdWN0IC5wcm9kdWN0LWxpbmUtcHJpY2U6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnSXRlbSBUb3RhbDog4oK5JzsgfVxuICAudG90YWxzIC50b3RhbHMtaXRlbSBsYWJlbCB7XG4gICAgd2lkdGg6IDYwJTsgfVxuICAudG90YWxzIC50b3RhbHMtaXRlbSAudG90YWxzLXZhbHVlIHtcbiAgICB3aWR0aDogNDAlOyB9IH1cblxuLnRleHQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBtYXgtaGVpZ2h0OiAzNnB4O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7IH1cblxuLmR0ZXh0IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgbWF4LWhlaWdodDogMTA4cHg7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogNDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDsgfVxuIiwiXHJcblxyXG4vKlxyXG5JIHdhbnRlZCB0byBnbyB3aXRoIGEgbW9iaWxlIGZpcnN0IGFwcHJvYWNoLCBidXQgaXQgYWN0dWFsbHkgbGVhZCB0byBtb3JlIHZlcmJvc2UgQ1NTIGluIHRoaXMgY2FzZSwgc28gSSd2ZSBnb25lIHdlYiBmaXJzdC4gQ2FuJ3QgYWx3YXlzIGZvcmNlIHRoaW5ncy4uLlxyXG5cclxuU2lkZSBub3RlOiBJIGtub3cgdGhhdCB0aGlzIHN0eWxlIG9mIG5lc3RpbmcgaW4gU0FTUyBkb2Vzbid0IHJlc3VsdCBpbiB0aGUgbW9zdCBwZXJmb3JtYW5jZSBlZmZpY2llbnQgQ1NTIGNvZGUuLi4gYnV0IG9uIHRoZSBPQ0Qvb3JnYW5pemF0aW9uYWwgc2lkZSwgSSBsaWtlIGl0LiBTbyBmb3IgQ29kZVBlbiBwdXJwb3NlcywgQ1NTIHNlbGVjdG9yIHBlcmZvcm1hbmNlIGJlIGRhbW5lZC5cclxuKi9cclxuXHJcbi8qIEdsb2JhbCBzZXR0aW5ncyAqL1xyXG4kY29sb3ItYm9yZGVyOiAjZWVlO1xyXG4kY29sb3ItbGFiZWw6ICNhYWE7XHJcblxyXG5cclxuXHJcbi8qIEdsb2JhbCBcInRhYmxlXCIgY29sdW1uIHNldHRpbmdzICovXHJcbi5wcm9kdWN0LWltYWdlIHsgZmxvYXQ6IGxlZnQ7IHdpZHRoOiAyMCU7IH1cclxuLnByb2R1Y3QtZGV0YWlscyB7IGZsb2F0OiBsZWZ0OyB3aWR0aDogMzclOyB9XHJcbi5wcm9kdWN0LXByaWNlIHsgZmxvYXQ6IGxlZnQ7IHdpZHRoOiAxMiU7IH1cclxuLnByb2R1Y3QtcXVhbnRpdHkgeyBmbG9hdDogbGVmdDsgd2lkdGg6IDEwJTsgfVxyXG4ucHJvZHVjdC1yZW1vdmFsIHsgZmxvYXQ6IGxlZnQ7IHdpZHRoOiA5JTsgfVxyXG4ucHJvZHVjdC1saW5lLXByaWNlIHsgZmxvYXQ6IGxlZnQ7IHdpZHRoOiAxMiU7IHRleHQtYWxpZ246IHJpZ2h0OyB9XHJcblxyXG5cclxuLyogVGhpcyBpcyB1c2VkIGFzIHRoZSB0cmFkaXRpb25hbCAuY2xlYXJmaXggY2xhc3MgKi9cclxuLmdyb3VwOmJlZm9yZSxcclxuLmdyb3VwOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbn0gXHJcbi5ncm91cDphZnRlciB7XHJcbiAgICBjbGVhcjogYm90aDtcclxufVxyXG4uZ3JvdXAge1xyXG4gICAgem9vbTogMTtcclxufVxyXG5cclxuXHJcbi8qIEFwcGx5IGNsZWFyZml4IGluIGEgZmV3IHBsYWNlcyAqL1xyXG4uc2hvcHBpbmctY2FydCwgLmNvbHVtbi1sYWJlbHMsIC5wcm9kdWN0LCAudG90YWxzLWl0ZW0ge1xyXG4gIEBleHRlbmQgLmdyb3VwO1xyXG59XHJcblxyXG5cclxuLyogQXBwbHkgZG9sbGFyIHNpZ25zICovXHJcbi5wcm9kdWN0IC5wcm9kdWN0LXByaWNlOmJlZm9yZSwgLnByb2R1Y3QgLnByb2R1Y3QtbGluZS1wcmljZTpiZWZvcmUsIC50b3RhbHMtdmFsdWU6YmVmb3JlIHtcclxuICBjb250ZW50OiAn4oK5JztcclxufVxyXG5cclxuXHJcbi8qIEJvZHkvSGVhZGVyIHN0dWZmICovXHJcblxyXG5cclxuaDEge1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBjb2xvcjogJGNvbG9yLWxhYmVsO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnNob3BwaW5nLWNhcnQge1xyXG4gIG1hcmdpbi10b3A6IC00NXB4O1xyXG59XHJcblxyXG5cclxuLyogQ29sdW1uIGhlYWRlcnMgKi9cclxuLmNvbHVtbi1sYWJlbHMge1xyXG4gIGxhYmVsIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29sb3ItYm9yZGVyO1xyXG4gIH1cclxuICBcclxuICAucHJvZHVjdC1pbWFnZSwgLnByb2R1Y3QtZGV0YWlscywgLnByb2R1Y3QtcmVtb3ZhbCB7XHJcbiAgICB0ZXh0LWluZGVudDogLTk5OTlweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKiBQcm9kdWN0IGVudHJpZXMgKi9cclxuLnByb2R1Y3Qge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb2xvci1ib3JkZXI7XHJcbiAgXHJcbiAgLnByb2R1Y3QtaW1hZ2Uge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucHJvZHVjdC1kZXRhaWxzIHtcclxuICAgIC5wcm9kdWN0LXRpdGxlIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgIFxyXG4gICAgfVxyXG4gICAgLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xyXG4gICAgICBtYXJnaW46IDVweCAyMHB4IDVweCAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS40ZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9kdWN0LXF1YW50aXR5IHtcclxuICAgIGlucHV0IHtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucmVtb3ZlLXByb2R1Y3Qge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNjY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgXHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5yZW1vdmUtcHJvZHVjdDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTQ0O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qIFRvdGFscyBzZWN0aW9uICovXHJcbi50b3RhbHMge1xyXG4gIC50b3RhbHMtaXRlbSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIFxyXG4gICAgbGFiZWwge1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgIHdpZHRoOiA3OSU7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudG90YWxzLXZhbHVlIHtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICB3aWR0aDogMjElO1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiBcclxufVxyXG5cclxuLmNoZWNrb3V0IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgcGFkZGluZzogNnB4IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZiNjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4uY2hlY2tvdXQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTQ7XHJcbn1cclxuXHJcbi8qIE1ha2UgYWRqdXN0bWVudHMgZm9yIHRhYmxldCAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gIFxyXG4gIC5zaG9wcGluZy1jYXJ0IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRjb2xvci1ib3JkZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb2x1bW4tbGFiZWxzIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9kdWN0LWltYWdlIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaW1nIHtcclxuICAgICAgbWFyZ2luOiAwIDAgMTBweCAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucHJvZHVjdC1kZXRhaWxzIHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAucHJvZHVjdC1wcmljZSB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gIH1cclxuICBcclxuICAucHJvZHVjdC1xdWFudGl0eSB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucHJvZHVjdC1xdWFudGl0eTpiZWZvcmUge1xyXG4gICAgY29udGVudDogJ3gnO1xyXG4gIH1cclxuICBcclxuICAucHJvZHVjdC1yZW1vdmFsIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAucHJvZHVjdC1saW5lLXByaWNlIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuXHJcbi8qIE1ha2UgbW9yZSBhZGp1c3RtZW50cyBmb3IgcGhvbmUgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzUwcHgpIHtcclxuICBcclxuICAucHJvZHVjdC1yZW1vdmFsIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2R1Y3QtbGluZS1wcmljZSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjbGVhcjogbGVmdDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2R1Y3QgLnByb2R1Y3QtbGluZS1wcmljZTpiZWZvcmUge1xyXG4gICAgY29udGVudDogJ0l0ZW0gVG90YWw6IOKCuSc7XHJcbiAgfVxyXG4gIFxyXG4gIC50b3RhbHMge1xyXG4gICAgLnRvdGFscy1pdGVtIHtcclxuICAgICAgbGFiZWwge1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC50b3RhbHMtdmFsdWUge1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLnRleHQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIG1heC1oZWlnaHQ6IDM2cHg7XHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG59XHJcblxyXG5cclxuLmR0ZXh0IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDhweDtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogNDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shoppingcart/shoppingcart.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shoppingcart/shoppingcart.component.ts ***!
  \********************************************************/
/*! exports provided: ShoppingcartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingcartComponent", function() { return ShoppingcartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);



var ShoppingcartComponent = /** @class */ (function () {
    function ShoppingcartComponent() {
        this.shoppingCart = [];
        this.shoppingcartcopy = [];
    }
    ShoppingcartComponent.prototype.ngOnInit = function () {
        this.shoppingCart = JSON.parse(localStorage.getItem("shoppingCarts"));
        for (var i = 0; i < this.shoppingCart.length; i++) {
        }
        console.log(this.shoppingCart);
    };
    ShoppingcartComponent.prototype.GetProductImage = function (Path) {
        var img = "http://shivamonline.shivamitconsultancy.com";
        if (Path != "") {
            Path = Path.split(",")[0];
            return img + "/ProductImages/Large/" + Path;
        }
        return "../img/no-image.png";
    };
    ShoppingcartComponent.prototype.removeExistingItem = function (key) {
        if (localStorage.getItem(key) === null)
            return false;
        localStorage.removeItem(key);
        return true;
    };
    ShoppingcartComponent.prototype.RemoveCartGlobal = function (Product) {
        debugger;
        var _localCartItems = localStorage.getItem("shoppingCarts");
        if (_localCartItems != null && _localCartItems != undefined) {
            var allItems = JSON.parse(_localCartItems);
            var allNewItems = [];
            for (var i = 0; i < allItems.length; i++) {
                if (allItems[i].ProductId != Product.ProductId) {
                    allNewItems.push(allItems[i]);
                }
            }
            this.removeExistingItem('shoppingCarts');
            localStorage.setItem("shoppingCarts", JSON.stringify(allNewItems));
            this.ngOnInit();
        }
        else {
            alert("No Item remaining");
        }
    };
    ShoppingcartComponent.prototype.getTotal = function () {
        var total = 0;
        for (var i = 0; i < this.shoppingCart.length; i++) {
            var product = this.shoppingCart[i];
            total += (product.productprice * product.Quantity);
        }
        return total;
    };
    ShoppingcartComponent.prototype.checkout = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Coming Soon", '', 'warning');
    };
    ShoppingcartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shoppingcart',
            template: __webpack_require__(/*! ./shoppingcart.component.html */ "./src/app/shoppingcart/shoppingcart.component.html"),
            styles: [__webpack_require__(/*! ./shoppingcart.component.scss */ "./src/app/shoppingcart/shoppingcart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShoppingcartComponent);
    return ShoppingcartComponent;
}());



/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <div class=\"navbar-fixed\">\n\n\n<nav style=\"text-align: center;\">\n <a style=\"font-size: 22px;\" href=\"#!\" > SHIVAM - ANGULAR </a>\n</nav>\n</div> -->\n\n<div *ngIf=\"showloader==true\" class=\"mainloader\">\n  <div class=\"preloader-wrapper big active\">\n      <div class=\"spinner-layer spinner-blue-only\">\n        <div class=\"circle-clipper left\">\n          <div class=\"circle\"></div>\n        </div><div class=\"gap-patch\">\n          <div class=\"circle\"></div>\n        </div><div class=\"circle-clipper right\">\n          <div class=\"circle\"></div>\n        </div>\n      </div>\n    </div>\n  \n  </div>\n\n\n<div style=\"text-align: center;\">\n\n <img style=\"height: 75px; margin-top: 20px;\" src=\"http://philosofy.shivamitconsultancy.com/static/media/logo-middle.34176521.png\" alt=\"\">\n</div>\n<!-- \n<ul class=\"one\">\n  <li>color</li>\n</ul>\n\n<ul class=\"two\">\n  <li>color</li>\n</ul>\n\n<div class=\"one\">\n<ul class=\"two\">\n  <li >color</li>\n</ul>\n</div>\n\n<p class=\"dashrath\">\n  My Name\n</p> -->\n\n\n<div style=\"margin: 15px;\">\n     <ul class=\"collection with-header\">\n        <li class=\"collection-header\">\n          \n          <h4 (click) = \"scanvalue()\" >SignIn </h4>\n        \n        </li>\n       <div class=\"collection-item\">\n\n          <form #loginForm=\"ngForm\">\n              <div class=\"input-field\">\n                <input id=\"User_name\" type=\"text\" #UserName ngModel  class=\"validate\">\n                <label for=\"User_name\">User name</label>\n              </div>\n            \n              <div class=\"input-field\">\n                  <input id=\"pass_word\" type=\"password\" #Password ngModel  class=\"validate\">\n                  <label for=\"pass_word\">password</label>\n                </div>\n            \n                <button style=\"width:100%\" (click)=\"OnSubmit(UserName.value,Password.value)\" class=\"button btn-large\" type=\"submit\" >Login</button>\n            \n            </form>\n       </div>  \n\n\n       <li style=\"text-align: center\" class=\"collection-header\">\n          \n        <p>Shivam321 - Shivam321 </p>\n      \n      </li>\n\n      \n      </ul>\n    </div>\n\n  \n      \n\n\n"

/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainloader {\n  position: fixed;\n  z-index: 10;\n  width: 100%;\n  text-align: center;\n  left: 0;\n  top: 40%; }\n\n.one .two li {\n  color: red; }\n\n.dashrath {\n  font-size: 50px; }\n\n.navbar-fixed nav {\n  display: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWduLWluL0Q6XFxBbmd1bGFycHJvamVjdHNcXGFuZ3VsYXI1L3NyY1xcYXBwXFx1c2VyXFxzaWduLWluXFxzaWduLWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsZUFBZTtFQUNiLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRLEVBQUE7O0FBSVo7RUFHUSxVQUFVLEVBQUE7O0FBV2xCO0VBSkksZUFBZSxFQUFBOztBQVNuQjtFQUVFLHdCQUF3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdXNlci9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbmxvYWRlclxyXG57XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDQwJTtcclxuXHJcbn1cclxuXHJcbi5vbmUge1xyXG4gICAgLnR3byB7XHJcbiAgICAgIGxpIHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWl4aW4gZm9udDIxIHtcclxuICBcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxufVxyXG5cclxuXHJcbi5kYXNocmF0aFxyXG57XHJcbiAgICBAaW5jbHVkZSBmb250MjE7XHJcbn1cclxuXHJcbi5uYXZiYXItZml4ZWQgbmF2XHJcbntcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.ts ***!
  \***************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Shared/user.service */ "./src/app/Shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





var SignInComponent = /** @class */ (function () {
    function SignInComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.showloader = false;
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.prototype.OnSubmit = function (UserName, Password) {
        var _this = this;
        this.showloader = true;
        this.userService.userAuthenitication(UserName, Password).subscribe(function (data) {
            localStorage.setItem('UserName', data.userName);
            localStorage.setItem('loginuser', data.userName);
            localStorage.setItem('token', data.access_token);
            _this.showloader = false;
            _this.router.navigate(["" + "home"]);
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire(localStorage.getItem("loginuser"), 'You are successfully loged in!', 'success');
        }, function (err) {
            debugger;
            _this.showloader = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('OOops..', 'Invalid Credentials !!', 'error');
        });
    };
    SignInComponent.prototype.getproduct = function () {
    };
    SignInComponent.prototype.scanvalue = function () {
        alert("call");
        var scanner = cordova.plugins.barcodeScanner;
        scanner.scan(function (result) {
            alert(result.text);
        }, function (error) {
            console.log("Scanning failed: ", error);
        });
    };
    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/user/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.scss */ "./src/app/user/sign-in/sign-in.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  sign-up works!\n</p>\n\n<form #userRegistrationForm=\"ngForm\" (ngsubmit)=\"OnSubmit(userRegistrationForm)\">\n\n<div class=\"form-group\">\n  <label data-error=\"Required Field\">User Nmae</label>\n  <input name=\"UserName\" type=\"text\" class=\"form-control validate\"  required> \n</div>\n<div class=\"form-group\">\n    <label>Password</label>\n    <input name=\"Password\" type=\"password\" class=\"form-control\"  minlength=\"3\" required>\n  </div>\n\n  <div class=\"form-group\">\n      <label>Email</label>\n      <input name=\"Email\" type=\"text\" class=\"form-control\" >\n    </div>\n\n    <div class=\"form-group\">\n        <label>First Name</label>\n        <input name=\"FirstName\" type=\"text\" class=\"form-control\" >\n      </div>\n\n      <div class=\"form-group\">\n          <label>Last Name</label>\n          <input name=\"LastName\" type=\"text\" class=\"form-control\" >\n        </div>\n\n        <button  (click)=\"OnSubmit('test')\" class=\"btn-large\" type=\"button\">Save</button>\n\n</form>\n"

/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.ts ***!
  \***************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Shared/user.service */ "./src/app/Shared/user.service.ts");



var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(userService) {
        this.userService = userService;
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.OnSubmit = function (para) {
        alert("In");
        debugger;
        this.userService.registerUser(para)
            .subscribe(function (data) {
            alert("Success");
        });
    };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/user/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/user/sign-up/sign-up.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user works!\n</p>\n"

/***/ }),

/***/ "./src/app/user/user.component.scss":
/*!******************************************!*\
  !*** ./src/app/user/user.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/user/user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/wishlist/wishlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"container\">\n    <h4>My Saved Items</h4>\n\n    \n<div class=\"row\">\n    <div *ngFor=\"let item of wishlistitem\" class=\"col s12 m4\">\n      <div class=\"card\">\n        <div class=\"card-image\">\n            <img style=\"max-height:200px;\" src=\"{{GetProductImage(item.image)}}\">\n       \n          <a (click)=\"RemoveFromwishList(item.id)\" class=\"btn-floating halfway-fab waves-effect waves-light red\"><i class=\"material-icons\">delete</i></a>\n        </div>\n\n      \n        <div class=\"card-content\">\n            <span class=\"card-title text\">{{item.productName}}</span>\n          <p class=\"dtext\">\n            {{item.productDescription}}\n          </p>\n        </div>\n        <div class=\"pink darken-1 card-action\">\n          <a (click)=\"AddToCartGlobal(item.productattrId,item,1)\" style=\"color: #fff\"><i class=\"material-icons left\">shopping_cart</i> Add to Cart</a>\n        </div>\n      </div>\n    </div>\n\n  \n  \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.scss":
/*!**************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  line-height: 18px;\n  max-height: 36px;\n  -webkit-line-clamp: 2; }\n\n.dtext {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  line-height: 18px;\n  max-height: 54px;\n  -webkit-line-clamp: 2; }\n\n.card .card-image img {\n  display: block;\n  border-radius: 2px 2px 0 0;\n  position: relative;\n  left: auto;\n  right: auto;\n  top: auto;\n  bottom: auto;\n  max-width: 200px;\n  margin: 0 auto; }\n\n.card .card-image {\n  position: relative;\n  border-bottom: 1px solid #ececec; }\n\n.card-content {\n  min-height: 146px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lzaGxpc3QvRDpcXEFuZ3VsYXJwcm9qZWN0c1xcYW5ndWxhcjUvc3JjXFxhcHBcXHdpc2hsaXN0XFx3aXNobGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIscUJBQXFCLEVBQ087O0FBSWhDO0VBQ0ksZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixxQkFBcUIsRUFDTzs7QUFFaEM7RUFDSSxjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixVQUFTO0VBQ1QsV0FBVztFQUNYLFNBQVM7RUFDVCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxrQkFBa0I7RUFDbEIsZ0NBQWdDLEVBQUE7O0FBR3BDO0VBRUksaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC93aXNobGlzdC93aXNobGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNnB4O1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuXHJcbi5kdGV4dCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgbWF4LWhlaWdodDogNTRweDtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbn1cclxuLmNhcmQgLmNhcmQtaW1hZ2UgaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4IDJweCAwIDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OmF1dG87XHJcbiAgICByaWdodDogYXV0bztcclxuICAgIHRvcDogYXV0bztcclxuICAgIGJvdHRvbTogYXV0bztcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmNhcmQgLmNhcmQtaW1hZ2Uge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlY2VjZWM7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRlbnRcclxue1xyXG4gICAgbWluLWhlaWdodDogMTQ2cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.ts ***!
  \************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Shared/user.service */ "./src/app/Shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





var WishlistComponent = /** @class */ (function () {
    function WishlistComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.wishlistitem = [];
        this.username = localStorage.getItem("UserName");
        this.AllCartItems = [];
        this.CartProductsCounter = 0;
        this.shoppingCart = [];
        this.image = [];
    }
    WishlistComponent.prototype.ngOnInit = function () {
        this.mywishlist();
    };
    WishlistComponent.prototype.GetProductImage = function (Path) {
        var img = "http://shivamonline.shivamitconsultancy.com";
        if (Path != "") {
            Path = Path.split(",")[0];
            return img + "/ProductImages/Large/" + Path;
        }
        return "../img/no-image.png";
    };
    WishlistComponent.prototype.RemoveFromwishList = function (id) {
        var _this = this;
        if (confirm('Are you sure you want to delete Items?')) {
            this.userService.deletewishlist(id).subscribe(function (data) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("", 'Deleted', 'success');
                _this.ngOnInit();
                debugger;
            }, function (err) {
                debugger;
                alert("Error123");
            });
        }
    };
    WishlistComponent.prototype.mywishlist = function () {
        var _this = this;
        this.userService.loadmywishlist(this.username).subscribe(function (data) {
            _this.wishlistitem = data;
            console.log(_this.wishlistitem);
            debugger;
        }, function (err) {
            debugger;
            alert("Error123");
        });
    };
    WishlistComponent.prototype.AddToCartGlobal = function (ProductID, product, cartQuantity, cols) {
        debugger;
        this.image.push({ 'imagename': "", 'imagepath': product.image });
        this.shoppingCart = JSON.parse(localStorage.getItem("shoppingCarts"));
        if (this.shoppingCart != null) {
            for (i = 0; i < this.shoppingCart.length; i++) {
                if (this.shoppingCart[i].ProductName == product.productName) {
                    this.shoppingCart[i].Quantity = this.shoppingCart[i].Quantity + 1;
                    localStorage.setItem("shoppingCarts", JSON.stringify(this.shoppingCart));
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire(product.productName, 'Successfully Added', 'success');
                    return 0;
                }
            }
        }
        this.AllCartItems = localStorage.getItem("shoppingCarts") === null ? [] : JSON.parse(localStorage.getItem("shoppingCarts"));
        var item = this.AllCartItems.filter(function (item) {
            debugger;
            if (product.ProductAttributes == undefined) {
                if (item.ProductId === product[4]) {
                    item.Quantity = item.Quantity + 1;
                }
            }
            else {
                if (item.ProductId === product.ProductVersionId) {
                    item.Quantity = item.Quantity + 1;
                }
            }
            return product.ProductAttributes == undefined ? item.ProductId === product[4] : item.ProductId === product.ProductId;
        })[0];
        if (item == undefined) {
            this.CartProductsCounter++;
            var des = "";
            var k = 18;
            if (product.ProductAttributes == undefined) {
                for (var i = 0; i < 3; i++) {
                    if (product[k] == null || product[k] == "-") {
                        k = k + 1;
                    }
                    else {
                        des = des + "<strong>" + cols[i].ColName + "</strong> : " + "(" + product[k].toUpperCase() + ") ";
                        k = k + 1;
                    }
                }
                cartQuantity = cartQuantity == undefined || cartQuantity == null ? 1 : cartQuantity;
                this.AllCartItems.push({ ProductId: ProductID, Quantity: cartQuantity, Image: this.image, ProductName: product.productName, productDescription: product.productDescription, productprice: product.productPrice });
            }
            else {
                for (var i = 0; i < product.ProductAttributes.length; i++) {
                    if (product.ProductAttributes[i].attrvalue == null || product.ProductAttributes[i].attrvalue == "-") {
                        continue;
                    }
                    else {
                        des = des + "<strong>" + product.ProductAttributes[i].attrName + "</strong> : " + "(" + product.ProductAttributes[i].attrvalue + ") ";
                        k = k + 1;
                    }
                }
                cartQuantity = cartQuantity == undefined || cartQuantity == null ? 1 : cartQuantity;
                this.AllCartItems.push({ ProductId: ProductID, Quantity: cartQuantity, Image: this.image, ProductName: product.productName, productDescription: product.productDescription, productprice: product.productPrice });
            }
        }
        debugger;
        if (product[9] == undefined) {
            product[9] = product.ProductName;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire(product.productName, 'Successfully Added', 'success');
        localStorage.setItem("shoppingCarts", JSON.stringify(this.AllCartItems));
        var data = JSON.parse(localStorage.getItem("shoppingCarts"));
        console.log(data);
    };
    WishlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! ./wishlist.component.html */ "./src/app/wishlist/wishlist.component.html"),
            styles: [__webpack_require__(/*! ./wishlist.component.scss */ "./src/app/wishlist/wishlist.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], WishlistComponent);
    return WishlistComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angularprojects\angular5\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map