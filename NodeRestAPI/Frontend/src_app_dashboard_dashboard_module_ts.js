"use strict";
(self["webpackChunkFrontend"] = self["webpackChunkFrontend"] || []).push([["src_app_dashboard_dashboard_module_ts"],{

/***/ 7528:
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _shared_global_constrants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/global-constrants */ 3086);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dashboard.service */ 9386);
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-ui-loader */ 3085);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/snackbar.service */ 5832);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);







class DashboardComponent {
    constructor(dashboardServices, ngxServices, snackbarServices) {
        this.dashboardServices = dashboardServices;
        this.ngxServices = ngxServices;
        this.snackbarServices = snackbarServices;
        this.ngxServices.start();
        this.dashboardData();
    }
    ngAfterViewInit() { }
    dashboardData() {
        this.dashboardServices.getDetails().subscribe((response) => {
            this.ngxServices.stop();
            this.data = response;
        }, (error) => {
            var _a, _b;
            this.ngxServices.stop();
            console.error(error);
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = _shared_global_constrants__WEBPACK_IMPORTED_MODULE_0__.GlobalConstants.genericError;
            }
            this.snackbarServices.openSnackbar(this.responseMessage, _shared_global_constrants__WEBPACK_IMPORTED_MODULE_0__.GlobalConstants.error);
        });
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__.DashboardService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__.NgxUiLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__.SnackbarService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 38, vars: 3, consts: [[1, "row"], [1, "column"], [1, "card"], [1, "container"], [1, "title"], ["routerLink", "/cafe/view-category", 1, "button"], ["routerLink", "/cafe/view-product", 1, "button"], ["routerLink", "/cafe/bill", 1, "button"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "body")(1, "mat-card")(2, "b")(3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Enterprises Dashboaard");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "hr")(6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 0)(8, "div", 1)(9, "div", 2)(10, "div", 3)(11, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Total Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p")(16, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "View Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 1)(19, "div", 2)(20, "div", 3)(21, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Total Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "p")(26, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "View Product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 1)(29, "div", 2)(30, "div", 3)(31, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Total Bill");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "p")(36, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "View Bill ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.bill);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink], styles: [".position-relative[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.add-contact[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 17px;\n  top: 57px;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  margin: 0;\n}\n\nhtml[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  box-sizing: inherit;\n}\n\n.column[_ngcontent-%COMP%] {\n  float: left;\n  width: 33.3%;\n  margin-bottom: 16px;\n  padding: 0 8px;\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  margin: 8px;\n}\n\n.about-section[_ngcontent-%COMP%] {\n  padding: 50px;\n  text-align: center;\n  background-color: #474e5d;\n  color: white;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\n\n.container[_ngcontent-%COMP%]::after, .row[_ngcontent-%COMP%]::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n.title[_ngcontent-%COMP%] {\n  color: black;\n  text-align: center !important;\n}\n\n.button[_ngcontent-%COMP%] {\n  border: none;\n  outline: 0;\n  display: inline-block;\n  padding: 8px;\n  color: white;\n  background-color: #226e8c;\n  text-align: center;\n  cursor: pointer;\n  width: 100%;\n  font-weight: bold;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  background-color: #555;\n}\n\n@media screen and (max-width: 650px) {\n  .column[_ngcontent-%COMP%] {\n    width: 100%;\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL0FuZ3VsYXIlMjBKUyUyMFByb2plY3QvRW50ZXJwcmlzZXMtRGFzaGJvYXJkL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtCQUFBO0FDQ0Q7O0FERUE7RUFDQyxrQkFBQTtFQUNHLFdBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUE7RUFDSSx5Q0FBQTtFQUNBLFNBQUE7QUNDSjs7QURFRTtFQUNFLHNCQUFBO0FDQ0o7O0FERUU7RUFDRSxtQkFBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFRTtFQUNFLDBDQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7RUFDQSw2QkFBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFRTtFQUNFLHNCQUFBO0FDQ0o7O0FERUU7RUFDRTtJQUNFLFdBQUE7SUFDQSxjQUFBO0VDQ0o7QUFDRiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zaXRpb24tcmVsYXRpdmUge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hZGQtY29udGFjdCB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTdweDtcbiAgICB0b3A6IDU3cHg7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIGh0bWwge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICAqLCAqOmJlZm9yZSwgKjphZnRlciB7XG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcbiAgfVxuXG4gIC5jb2x1bW4ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAzMy4zJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIHBhZGRpbmc6IDAgOHB4O1xuICB9XG5cbiAgLmNhcmQge1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBtYXJnaW46IDhweDtcbiAgfVxuXG4gIC5hYm91dC1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc0ZTVkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgfVxuXG4gIC5jb250YWluZXI6OmFmdGVyLCAucm93OjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBjbGVhcjogYm90aDtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyNmU4YztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLmJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XG4gICAgLmNvbHVtbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxuIiwiLnBvc2l0aW9uLXJlbGF0aXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYWRkLWNvbnRhY3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxN3B4O1xuICB0b3A6IDU3cHg7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwO1xufVxuXG5odG1sIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBpbmhlcml0O1xufVxuXG4uY29sdW1uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAzMy4zJTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgcGFkZGluZzogMCA4cHg7XG59XG5cbi5jYXJkIHtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBtYXJnaW46IDhweDtcbn1cblxuLmFib3V0LXNlY3Rpb24ge1xuICBwYWRkaW5nOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzRlNWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgMTZweDtcbn1cblxuLmNvbnRhaW5lcjo6YWZ0ZXIsIC5yb3c6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY2xlYXI6IGJvdGg7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4udGl0bGUge1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDhweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjI2ZThjO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgLmNvbHVtbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ 4814:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ 1378);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 7528);
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.routing */ 7976);
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/material-module */ 2020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);








class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _shared_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(_dashboard_routing__WEBPACK_IMPORTED_MODULE_1__.DashboardRoutes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _shared_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 7976:
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.routing.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutes": () => (/* binding */ DashboardRoutes)
/* harmony export */ });
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 7528);

const DashboardRoutes = [{
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
    }];


/***/ }),

/***/ 9386:
/*!***********************************************!*\
  !*** ./src/app/services/dashboard.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardService": () => (/* binding */ DashboardService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class DashboardService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    getDetails() {
        return this.httpClient.get(this.url + "/dashboard/details/");
    }
}
DashboardService.ɵfac = function DashboardService_Factory(t) { return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
DashboardService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DashboardService, factory: DashboardService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_dashboard_module_ts.js.map