webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_browse_browse_component__ = __webpack_require__("../../../../../src/app/dashboard/browse/browse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_listings_listings_component__ = __webpack_require__("../../../../../src/app/dashboard/listings/listings.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */], pathMatch: "full" },
    { path: "dashboard", component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */],
        children: [
            { path: "browse", component: __WEBPACK_IMPORTED_MODULE_4__dashboard_browse_browse_component__["a" /* BrowseComponent */] },
            { path: "listings", component: __WEBPACK_IMPORTED_MODULE_5__dashboard_listings_listings_component__["a" /* ListingsComponent */] }
        ]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#container{\n    width: 900px;\n    margin: 0 auto;\n    font-family: \"Comic Sans MS\", cursive, sans-serif;\n}\n\n.header{\n    text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <div class=\"header\">\n    <h1>Bicycle MarketPlace</h1>\n  </div>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_browse_browse_component__ = __webpack_require__("../../../../../src/app/dashboard/browse/browse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_listings_listings_component__ = __webpack_require__("../../../../../src/app/dashboard/listings/listings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__userservice_service__ = __webpack_require__("../../../../../src/app/userservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__bikeservice_service__ = __webpack_require__("../../../../../src/app/bikeservice.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_8__dashboard_browse_browse_component__["a" /* BrowseComponent */],
            __WEBPACK_IMPORTED_MODULE_9__dashboard_listings_listings_component__["a" /* ListingsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__["a" /* CookieModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__userservice_service__["a" /* UserserviceService */], __WEBPACK_IMPORTED_MODULE_12__bikeservice_service__["a" /* BikeserviceService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/bike.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bike; });
var Bike = (function () {
    function Bike() {
        this.title = "Title";
        this.location = "WA";
        this.description = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo";
        this.price = 250;
    }
    return Bike;
}());

//# sourceMappingURL=bike.js.map

/***/ }),

/***/ "../../../../../src/app/bikeservice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BikeserviceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BikeserviceService = (function () {
    function BikeserviceService(_http) {
        this._http = _http;
    }
    BikeserviceService.prototype.getBikes = function () {
        return this._http.get('/api/bikes')
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    BikeserviceService.prototype.createBike = function (id, bike) {
        console.log('Received request to create bike in bike service', bike);
        return this._http.post("/api/bikes/" + id, bike)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    BikeserviceService.prototype.removeBike = function (bikeId) {
        return this._http.delete("/api/bikes/" + bikeId)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    BikeserviceService.prototype.updateBike = function (bike) {
        return this._http.put("/api/bikes/" + bike._id, bike)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    return BikeserviceService;
}());
BikeserviceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BikeserviceService);

var _a;
//# sourceMappingURL=bikeservice.service.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/browse/browse.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".section1, .section2{\n    display: inline-block;\n    vertical-align: top;\n}\n.section2{\n    margin-left: 100px;\n}\n.listing_item{\n    border: 0.2px solid black;\n    margin: 10px 0px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/browse/browse.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Listings</h2>\n\n<div *ngIf=\"bikeList.length > 0\">\n  <div class=\"listing_item\" *ngFor=\"let bike of bikeList\">\n    <div class=\"section1\">\n      <h2>{{bike.title}}</h2>\n      <p>{{bike.description}}</p>\n    </div>\n    <div class=\"section2\">\n      <h2>${{bike.price}}</h2>\n      <p>{{bike.location}}</p>\n      <h3>{{bike.user.email}}</h3>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/browse/browse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bikeservice_service__ = __webpack_require__("../../../../../src/app/bikeservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrowseComponent = (function () {
    function BrowseComponent(_bikeservice, _cookieservice) {
        this._bikeservice = _bikeservice;
        this._cookieservice = _cookieservice;
        this.bikeList = [];
        this.currUserId = "";
    }
    BrowseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currUserId = this._cookieservice.get("userID");
        console.log(this.currUserId);
        this._bikeservice.getBikes()
            .then(function (bikes) { return _this.bikeList = bikes; });
    };
    return BrowseComponent;
}());
BrowseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-browse',
        template: __webpack_require__("../../../../../src/app/dashboard/browse/browse.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/browse/browse.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__bikeservice_service__["a" /* BikeserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__bikeservice_service__["a" /* BikeserviceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_cookie__["b" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_cookie__["b" /* CookieService */]) === "function" && _b || Object])
], BrowseComponent);

var _a, _b;
//# sourceMappingURL=browse.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button{\n    width: 60px;\n    height: 30px;\n    border: none;\n    color: white;\n    background-color: blue;\n}\n\nbutton, a{\n    display: inline-block;\n}\nnav{\n    text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n    <a routerLink=\"browse\" >Browse</a>\n    <a routerLink=\"listings\" >Listings</a>\n    <button (click)=\"logout()\" >Logout</button>\n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userservice_service__ = __webpack_require__("../../../../../src/app/userservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(_userservice, _router, _cookieservice) {
        this._userservice = _userservice;
        this._router = _router;
        this._cookieservice = _cookieservice;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.currUserId = this._cookieservice.get('userID');
        console.log(this.currUserId, typeof (this.currUserId));
    };
    DashboardComponent.prototype.logout = function () {
        var _this = this;
        this._userservice.userIndex(this.currUserId)
            .then(function (user) { return _this.currUser = user; })
            .then(function () { return _this._userservice.userLogout(_this.currUser); })
            .then(function () { return _this._router.navigate([""]); });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__userservice_service__["a" /* UserserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__userservice_service__["a" /* UserserviceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__["b" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__["b" /* CookieService */]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/listings/listings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form_row label, input, textarea{\n    display: inline-block;\n    margin: 10px;\n}\n.form_row label{\n    width: 100px;\n}\nbutton{\n    display: block;\n    width: 60px;\n    height: 30px;\n    color: white;\n    border: none;\n    background-color: blue;\n    margin-left: 200px;\n    margin-bottom: 10px;\n}\n.section1, .section2{\n    display: inline-block;\n    vertical-align: top;\n}\n.section2{\n    margin-left: 100px;\n}\n.editlisting{\n    border: 0.2px solid black;\n    margin: 20px 0px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/listings/listings.component.html":
/***/ (function(module, exports) {

module.exports = "<fieldset>\n  <legend><h2>Create Listing</h2></legend>\n  <form (submit)=\"newBikeSubmit($event)\" #newBikeForm=\"ngForm\">\n    <div class=\"section1\">\n      <div class=\"form_row\">\n        <label>Title:</label>\n        <input type=\"text\" name=\"title\" [(ngModel)]=\"newBike.title\">\n     </div>\n      <div class=\"form_row\">\n        <label>Description:</label><br>\n        <textarea name=\"Description\" [(ngModel)]=\"newBike.description\" rows=\"5\" cols=\"55\"></textarea>\n     </div>\n    </div>\n    <div class=\"section2\">\n      <div class=\"form_row\">\n        <label>Price($):</label>\n        <input type=\"number\" name=\"price\" [(ngModel)]=\"newBike.price\">\n      </div>\n      <div class=\"form_row\">\n        <label>Location:</label>\n        <input type=\"text\" name=\"location\" [(ngModel)]=\"newBike.location\">\n      </div>\n      <button>Create!</button>\n    </div>\n  </form>\n</fieldset>\n\n\n<h2>Edit Your Listings</h2>\n<div *ngIf=\"userListings\">\n  <div *ngFor=\"let bike of userListings.bikes; let idx = index\" [attr.data-index]=\"idx\">\n    <form class=\"editlisting\" (submit)=\"updateListing(userListingBikes[idx])\">\n      <div class=\"section1\">\n        <div class=\"form_row\">\n          <label>Title:</label>\n          <input type=\"text\" name=\"title\" [(ngModel)]=\"userListingBikes[idx].title\">\n        </div>\n        <div class=\"form_row\">\n          <label>Description:</label><br>\n          <textarea name=\"Description\" [(ngModel)]=\"userListingBikes[idx].description\" rows=\"5\" cols=\"55\"></textarea>\n        </div>\n      </div>\n\n      <div class=\"section2\">\n        <div class=\"form_row\">\n          <label>Price($):</label>\n          <input type=\"number\" name=\"price\" [(ngModel)]=\"userListingBikes[idx].price\">\n        </div>\n        <div class=\"form_row\">\n          <label>Location:</label>\n          <input type=\"text\" name=\"location\" [(ngModel)]=\"userListingBikes[idx].location\">\n        </div>\n        <button type=\"submit\">Update!</button>\n        <button type=\"button\" (click)=\"deleteListing(userListingBikes[idx])\">Delete</button>\n      </div>\n\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/listings/listings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bike__ = __webpack_require__("../../../../../src/app/bike.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userservice_service__ = __webpack_require__("../../../../../src/app/userservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bikeservice_service__ = __webpack_require__("../../../../../src/app/bikeservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListingsComponent = (function () {
    function ListingsComponent(_userservice, _bikeservice, _cookieservice) {
        this._userservice = _userservice;
        this._bikeservice = _bikeservice;
        this._cookieservice = _cookieservice;
        this.newBike = new __WEBPACK_IMPORTED_MODULE_1__bike__["a" /* Bike */]();
        this.currUserId = "";
        this.userListingBikes = [];
    }
    ListingsComponent.prototype.ngOnInit = function () {
        this.currUserId = this._cookieservice.get("userID");
        this.getUserListings();
    };
    ListingsComponent.prototype.newBikeSubmit = function (event) {
        var _this = this;
        event.preventDefault();
        this._userservice.userIndex(this.currUserId)
            .then(function (user) { return _this.newBike.user = user; })
            .then(function () { return _this._bikeservice.createBike(_this.currUserId, _this.newBike); })
            .then(function (bike) { return console.log("Successfully created new bike", bike); })
            .then(function () { return _this.newBike = new __WEBPACK_IMPORTED_MODULE_1__bike__["a" /* Bike */](); })
            .catch(function (error) { return console.log(error); });
    };
    ListingsComponent.prototype.getUserListings = function () {
        var _this = this;
        this._userservice.getUserBikes(this.currUserId)
            .then(function (user) { return _this.userListings = user; })
            .then(function () { return _this.userListingBikes = _this.userListings.bikes; });
    };
    ListingsComponent.prototype.updateListing = function (bike) {
        var _this = this;
        console.log("Received request to update " + bike._id);
        this._bikeservice.updateBike(bike)
            .then(function (bike) { return console.log("Updated " + bike); })
            .then(function () { return _this.getUserListings(); });
    };
    ListingsComponent.prototype.deleteListing = function (bike) {
        var _this = this;
        console.log("Received request to delete " + bike._id);
        this._bikeservice.removeBike(bike._id)
            .then(function (bike) { return console.log("Removed " + bike); })
            .then(function () { return _this.getUserListings(); });
    };
    return ListingsComponent;
}());
ListingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-listings',
        template: __webpack_require__("../../../../../src/app/dashboard/listings/listings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/listings/listings.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__userservice_service__["a" /* UserserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__userservice_service__["a" /* UserserviceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__bikeservice_service__["a" /* BikeserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__bikeservice_service__["a" /* BikeserviceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_cookie__["b" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_cookie__["b" /* CookieService */]) === "function" && _c || Object])
], ListingsComponent);

var _a, _b, _c;
//# sourceMappingURL=listings.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form_row label, input{\n    display: inline-block;\n    margin: 15px;\n}\n.form_row label{\n    width: 150px;\n}\n.form_errors{\n    margin: 0px 15px;\n    font-size: 15px;\n    font-style: italic;\n    color: red;\n}\nbutton{\n    width: 60px;\n    height: 30px;\n    border: none;\n    color: white;\n    background-color: blue;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!--login form-->\n\n<fieldset>\n  <legend>Login</legend>\n  <form (submit)=\"login_form($event) || loginForm.reset()\" #loginForm=\"ngForm\">\n    <div class=\"form_row\">\n      <label>Email:</label>\n      <input type=\"text\" name=\"loginEmail\" [(ngModel)]=\"loginUser.email\" #loginEmail=\"ngModel\" required=\"true\">\n    </div>\n    \n    <div class=\"form_row\">\n      <label>Password:</label>\n      <input type=\"password\" name=\"loginPass\" [(ngModel)]=\"loginUser.password\" #loginPass=\"ngModel\" required=\"true\">\n    </div>\n    \n    <button [hidden]=\"loginForm.invalid\" >Login!</button>\n  </form>\n\n<!--login form errors-->\n\n  <div *ngIf=\"(loginEmail.touched || loginEmail.dirty) && loginEmail.errors\">\n    <p class=\"form_errors\" *ngIf=\"loginEmail.errors.required\">\n      Field cannot be empty!\n    </p>\n  </div>\n\n  <div *ngIf=\"(loginPass.touched || loginPass.dirty) && loginPass.errors\">\n    <p class=\"form_errors\" *ngIf=\"loginPass.errors.required\">\n      Field cannot be empty!\n    </p>\n  </div>\n\n  <div *ngIf=\"registrationErrors\">\n    <p class=\"form_errors\">\n      {{registrationErrors}}\n    </p>\n  </div>\n</fieldset>\n\n<!--registration form-->\n\n<fieldset>\n  <legend>Register</legend>\n  <form (submit)=\"register_form($event) || registerForm.reset()\" #registerForm=\"ngForm\">\n    <div class=\"form_row\">\n      <label>First Name:</label>\n      <input type=\"text\" name=\"registerfname\" [(ngModel)]=\"registerUser.fname\" #registerfname=\"ngModel\" required=\"true\" minlength=\"4\">\n    </div>\n\n    <div class=\"form_row\">\n      <label>Last Name:</label>\n      <input type=\"text\" name=\"registerlname\" [(ngModel)]=\"registerUser.lname\" #registerlname=\"ngModel\" required=\"true\" minlength=\"4\">\n    </div>\n\n    <div class=\"form_row\">\n      <label>Email:</label>\n      <input type=\"text\" name=\"registerEmail\" [(ngModel)]=\"registerUser.email\" #registerEmail=\"ngModel\" required=\"true\" minlength=\"4\" pattern='^[a-zA-Z0-9\\.\\+_-]+@[a-zA-Z0-9\\._-]+\\.[a-zA-Z]*$'>\n    </div>\n\n    <div class=\"form_row\">\n      <label>Password:</label>\n      <input type=\"password\" name=\"registerPass\" [(ngModel)]=\"registerUser.password\" #registerPass=\"ngModel\" required=\"true\" minlength=\"8\">\n    </div>\n\n    <div class=\"form_row\">\n      <label>Confirm Password:</label>\n      <input type=\"password\" name=\"registerConfPass\" [(ngModel)]=\"confpass\" #registerConfPass=\"ngModel\">\n    </div>\n    <button [hidden]=\"registerForm.invalid\" >Register!</button>\n  </form>\n    \n<!--registration form errors-->\n\n  <div *ngIf=\"(registerfname.touched || registerfname.dirty) && registerfname.errors\">\n    <p class=\"form_errors\" *ngIf=\"registerfname.errors.required\">\n      Field cannot be empty!\n    </p>\n    <p class=\"form_errors\" *ngIf=\"registerfname.errors.minlength\">\n      Minimum {{registerfname.errors.minlength.requiredLength}} characters required!\n    </p>\n  </div>\n\n  <div *ngIf=\"(registerlname.touched || registerlname.dirty) && registerlname.errors\">\n    <p class=\"form_errors\" *ngIf=\"registerlname.errors.required\">\n      Field cannot be empty!\n    </p>\n    <p class=\"form_errors\" *ngIf=\"registerlname.errors.minlength\">\n      Minimum {{registerlname.errors.minlength.requiredLength}} characters required!\n    </p>\n  </div>\n\n  <div *ngIf=\"(registerPass.touched || registerPass.dirty) && registerPass.errors\">\n    <p class=\"form_errors\" *ngIf=\"registerPass.errors.required\">\n      Field cannot be empty!\n    </p>\n    <p class=\"form_errors\" *ngIf=\"registerPass.errors.minlength\">\n      Minimum {{registerPass.errors.minlength.requiredLength}} characters required!\n    </p>\n  </div>\n\n  <div *ngIf=\"(registerConfPass.touched || registerConfPass.dirty)\">\n    <p class=\"form_errors\" *ngIf=\"(registerPass.value != registerConfPass.value)\">\n      Confirm password does not match Password!\n    </p>\n  </div>\n\n  <div *ngIf=\"(registerEmail.touched || registerEmail.dirty) && registerEmail.errors\">\n    <p class=\"form_errors\" *ngIf=\"registerEmail.errors.required\">\n      Field cannot be empty!\n    </p>\n    <p class=\"form_errors\" *ngIf=\"registerEmail.errors.minlength\">\n      Minimum {{registerEmail.errors.minlength.requiredLength}} characters required!\n    </p>\n    <p class=\"form_errors\" *ngIf=\"registerEmail.errors.pattern\">\n      Email is not valid!\n    </p>\n  </div>\n    \n</fieldset>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userservice_service__ = __webpack_require__("../../../../../src/app/userservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(_userservice, _router) {
        this._userservice = _userservice;
        this._router = _router;
        this.registerUser = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */]();
        this.loginUser = {
            email: "",
            password: ""
        };
        this.confpass = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.register_form = function (event) {
        var _this = this;
        event.preventDefault();
        console.log("Sending to service", this.registerUser);
        this._userservice.userRegister(this.registerUser)
            .then(function () { return _this._router.navigate(['dashboard']); })
            .catch(function (response) { return _this.handleErrors(response.json()); });
        this.registerUser = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */]();
    };
    LoginComponent.prototype.login_form = function (event) {
        var _this = this;
        console.log("Sending to service", this.loginUser);
        this._userservice.userLogin(this.loginUser)
            .then(function () { return _this._router.navigate(['dashboard']); })
            .catch(function (response) { return _this.handleErrors(response.json()); });
        this.loginUser = { email: "", password: "" };
    };
    LoginComponent.prototype.handleErrors = function (errors) {
        console.log(errors);
        this.registrationErrors = errors;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__userservice_service__["a" /* UserserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__userservice_service__["a" /* UserserviceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/userservice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserserviceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserserviceService = (function () {
    function UserserviceService(_http, cookieService) {
        this._http = _http;
        this.cookieService = cookieService;
    }
    UserserviceService.prototype.userLogin = function (user) {
        return this._http.post('/api/users/login', user)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    UserserviceService.prototype.userRegister = function (user) {
        return this._http.post('/api/users/register', user)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    UserserviceService.prototype.userLogout = function (user) {
        console.log("In user service to logout", user);
        return this._http.delete('/api/users/logout', user)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    UserserviceService.prototype.userIndex = function (userId) {
        return this._http.get("/api/users/index/" + userId)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    UserserviceService.prototype.getUserBikes = function (id) {
        return this._http.get("/api/users/userBikes/" + id)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    UserserviceService.prototype.userIsValid = function () {
        var expired = parseInt(this.cookieService.get('expiration'), 10);
        var userID = this.cookieService.get('userID');
        var session = this.cookieService.get('session');
        return Boolean(session && expired && userID && expired > Date.now());
    };
    return UserserviceService;
}());
UserserviceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_cookie__["b" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_cookie__["b" /* CookieService */]) === "function" && _b || Object])
], UserserviceService);

var _a, _b;
//# sourceMappingURL=userservice.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map