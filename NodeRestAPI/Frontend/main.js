"use strict";
(self["webpackChunkFrontend"] = self["webpackChunkFrontend"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/full/full.component */ 6729);
/* harmony import */ var _services_route_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/route-guard.service */ 8757);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    {
        path: 'cafe',
        component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_1__.FullComponent,
        children: [
            {
                path: '',
                redirectTo: '/cafe/dashboard',
                pathMatch: 'full',
            },
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_material-component_material_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./material-component/material.module */ 8877)).then(m => m.MaterialComponentsModule),
                canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_2__.RouteGuardService],
                data: {
                    expectedRole: ['admin', 'user']
                }
            },
            {
                path: 'dashboard',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 4814)).then(m => m.DashboardModule),
                canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_2__.RouteGuardService],
                data: {
                    expectedRole: ['admin', 'user']
                }
            }
        ]
    },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-ui-loader */ 3085);



class AppComponent {
    constructor() {
        this.title = 'Frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet")(1, "ngx-ui-loader");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__.NgxUiLoaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/material-module */ 2020);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _our_services_our_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./our-services/our-services.component */ 5761);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout */ 1378);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/full/full.component */ 6729);
/* harmony import */ var _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/full/header/header.component */ 1183);
/* harmony import */ var _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/full/sidebar/sidebar.component */ 2991);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.component */ 570);
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-ui-loader */ 3085);
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ 1700);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _services_token_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/token-interceptor.interceptor */ 3697);
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./carousel/carousel.component */ 5405);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-owl-carousel-o */ 4978);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
























const ngxUiLoaderConfig = {
    text: 'Loading...',
    textColor: '#ffffff',
    textPosition: 'center-center',
    pbColor: 'red',
    bgsColor: 'red',
    fgsColor: 'red',
    fgsType: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_15__.SPINNER.ballSpinClockwise,
    fgsSize: 100,
    pbDirection: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_15__.PB_DIRECTION.leftToRight,
    pbThickness: 5,
};
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HTTP_INTERCEPTORS,
            useClass: _services_token_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_12__.TokenInterceptorInterceptor,
            multi: true,
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule,
            _shared_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__.FlexLayoutModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_22__.CarouselModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule,
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_15__.NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent,
        _our_services_our_services_component__WEBPACK_IMPORTED_MODULE_4__.OurServicesComponent,
        _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_6__.FullComponent,
        _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_7__.AppHeaderComponent,
        _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__.AppSidebarComponent,
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__.SignupComponent,
        _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_13__.CarouselComponent,
        _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_10__.ForgotPasswordComponent,
        _login_login_component__WEBPACK_IMPORTED_MODULE_11__.LoginComponent,
        _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_13__.CarouselComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__.FooterComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule,
        _shared_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__.FlexLayoutModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_22__.CarouselModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule, ngx_ui_loader__WEBPACK_IMPORTED_MODULE_15__.NgxUiLoaderModule] }); })();


/***/ }),

/***/ 5405:
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselComponent": () => (/* binding */ CarouselComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-owl-carousel-o */ 4978);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



function CarouselComponent_ng_container_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8)(4, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const slide_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + slide_r1.url + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r1.description);
} }
function CarouselComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ng_container_3_ng_template_1_Template, 8, 4, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class CarouselComponent {
    constructor() {
        this.customOptions = {
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: false,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            dots: true,
            navSpeed: 700,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            responsive: {
                0: {
                    items: 1
                }
            },
            nav: true
        };
        this.carouselImages = [
            {
                url: 'https://picsum.photos/1920/600?random=1',
                title: 'Welcome to Our Enterprises Dashboard',
                description: 'Manage and monitor your data efficiently'
            },
            {
                url: 'https://picsum.photos/1920/600?random=2',
                title: 'Real-time Analytics',
                description: 'Track your performance metrics instantly'
            },
            {
                url: 'https://picsum.photos/1920/600?random=3',
                title: 'Comprehensive Reports',
                description: 'Get detailed insights into your business'
            },
            {
                url: 'https://picsum.photos/1920/600?random=4',
                title: 'Generated Bills and Invoices',
                description: 'Get detailed insights into your business'
            }
        ];
    }
    ngOnInit() { }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(); };
CarouselComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], decls: 4, vars: 2, consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"], [1, "carousel-container"], [3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "slide-container"], [1, "slide-image"], [1, "overlay"], [1, "slide-content"], [1, "slide-title"], [1, "slide-description"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "owl-carousel-o", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CarouselComponent_ng_container_3_Template, 2, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.carouselImages);
    } }, directives: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__.CarouselComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__.CarouselSlideDirective], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  overflow: hidden;\n}\n\n.carousel-container[_ngcontent-%COMP%] {\n  width: 100vw;\n  position: relative;\n  left: 50%;\n  right: 50%;\n  margin-left: -50vw;\n  margin-right: -50vw;\n  margin-top: 60px;\n}\n\n.carousel-container[_ngcontent-%COMP%]   .slide-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 600px;\n}\n\n.carousel-container[_ngcontent-%COMP%]   .slide-container[_ngcontent-%COMP%]   .slide-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n}\n\n.carousel-container[_ngcontent-%COMP%]   .slide-container[_ngcontent-%COMP%]   .slide-image[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.4);\n}\n\n.carousel-container[_ngcontent-%COMP%]   .slide-container[_ngcontent-%COMP%]   .slide-image[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  color: white;\n  z-index: 2;\n  width: 80%;\n  max-width: 1200px;\n}\n\n.carousel-container[_ngcontent-%COMP%]   .slide-container[_ngcontent-%COMP%]   .slide-image[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   .slide-title[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\n}\n\n@media (max-width: 768px) {\n  .carousel-container[_ngcontent-%COMP%]   .slide-container[_ngcontent-%COMP%]   .slide-image[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   .slide-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n\n.carousel-container[_ngcontent-%COMP%]   .slide-container[_ngcontent-%COMP%]   .slide-image[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   .slide-description[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 2rem;\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);\n}\n\n@media (max-width: 768px) {\n  .carousel-container[_ngcontent-%COMP%]   .slide-container[_ngcontent-%COMP%]   .slide-image[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   .slide-description[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n}\n\n  .owl-theme .owl-nav {\n  margin-top: 0;\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  transform: translateY(-50%);\n}\n\n  .owl-theme .owl-nav [class*=owl-] {\n  position: absolute;\n  background: rgba(255, 255, 255, 0.7) !important;\n  color: #000;\n  font-size: 24px;\n  padding: 15px !important;\n  margin: 0;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n\n  .owl-theme .owl-nav [class*=owl-]:hover {\n  background: rgba(255, 255, 255, 0.9) !important;\n}\n\n  .owl-theme .owl-nav [class*=owl-].owl-prev {\n  left: 20px;\n}\n\n  .owl-theme .owl-nav [class*=owl-].owl-next {\n  right: 20px;\n}\n\n  .owl-theme .owl-dots {\n  position: absolute;\n  bottom: 20px;\n  width: 100%;\n}\n\n  .owl-theme .owl-dots .owl-dot span {\n  width: 12px;\n  height: 12px;\n  margin: 5px;\n  background: rgba(255, 255, 255, 0.5);\n  transition: all 0.3s ease;\n}\n\n  .owl-theme .owl-dots .owl-dot.active span,   .owl-theme .owl-dots .owl-dot:hover span {\n  background: white;\n}\n\n@media (max-width: 768px) {\n  .carousel-container[_ngcontent-%COMP%]   .slide-container[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n  .carousel-container[_ngcontent-%COMP%]   .slide-container[_ngcontent-%COMP%]   .slide-image[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .carousel-container[_ngcontent-%COMP%]   .slide-container[_ngcontent-%COMP%]   .slide-image[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   .slide-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .carousel-container[_ngcontent-%COMP%]   .slide-container[_ngcontent-%COMP%]   .slide-image[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   .slide-description[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n\n    .owl-theme .owl-nav [class*=owl-] {\n    width: 40px;\n    height: 40px;\n    font-size: 18px;\n  }\n}\n\n@keyframes slideInUp {\n  from {\n    transform: translate(-50%, 20px);\n    opacity: 0;\n  }\n  to {\n    transform: translate(-50%, -50%);\n    opacity: 1;\n  }\n}\n\n.slide-content[_ngcontent-%COMP%] {\n  animation: slideInUp 0.5s ease-out forwards;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vQW5ndWxhciUyMEpTJTIwUHJvamVjdC9FbnRlcnByaXNlcy1EYXNoYm9hcmQvc3JjL2FwcC9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRENJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNDTjs7QURDTTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0FDQ1I7O0FERU07RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDQVI7O0FERVE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtBQ0FWOztBREVVO0VBTkY7SUFPSSxlQUFBO0VDQ1Y7QUFDRjs7QURFUTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtBQ0FWOztBREVVO0VBTEY7SUFNSSxpQkFBQTtFQ0NWO0FBQ0Y7O0FEUUk7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FDTE47O0FET007RUFDRSxrQkFBQTtFQUNBLCtDQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQ0xSOztBRE9RO0VBQ0UsK0NBQUE7QUNMVjs7QURRUTtFQUNFLFVBQUE7QUNOVjs7QURTUTtFQUNFLFdBQUE7QUNQVjs7QURZSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNWTjs7QURhUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7QUNYVjs7QURnQlU7RUFDRSxpQkFBQTtBQ2RaOztBRHVCQTtFQUVJO0lBQ0UsYUFBQTtFQ3JCSjtFRHdCTTtJQUNFLFVBQUE7RUN0QlI7RUR3QlE7SUFDRSxlQUFBO0VDdEJWO0VEeUJRO0lBQ0UsZUFBQTtFQ3ZCVjs7RURpQ007SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUM5QlI7QUFDRjs7QURxQ0E7RUFDRTtJQUNFLGdDQUFBO0lBQ0EsVUFBQTtFQ25DRjtFRHFDQTtJQUNFLGdDQUFBO0lBQ0EsVUFBQTtFQ25DRjtBQUNGOztBRHNDQTtFQUNFLDJDQUFBO0FDcENGIiwiZmlsZSI6ImNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jYXJvdXNlbC1jb250YWluZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNTAlO1xuICByaWdodDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTUwdnc7XG4gIG1hcmdpbi1yaWdodDogLTUwdnc7XG4gIG1hcmdpbi10b3A6IDYwcHg7IC8vIEFkanVzdCB0aGlzIHZhbHVlIGJhc2VkIG9uIHlvdXIgbmF2YmFyIGhlaWdodFxuXG4gIC5zbGlkZS1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjAwcHg7IC8vIEFkanVzdCBoZWlnaHQgYXMgbmVlZGVkXG5cbiAgICAuc2xpZGUtaW1hZ2Uge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAub3ZlcmxheSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICB9XG5cbiAgICAgIC5zbGlkZS1jb250ZW50IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xuXG4gICAgICAgIC5zbGlkZS10aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAzLjVyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuc2xpZGUtZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbjo6bmctZGVlcCB7XG4gIC5vd2wtdGhlbWUge1xuICAgIC5vd2wtbmF2IHtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXG4gICAgICBbY2xhc3MqPSdvd2wtJ10ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICYub3dsLXByZXYge1xuICAgICAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLm93bC1uZXh0IHtcbiAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5vd2wtZG90cyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDIwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgLm93bC1kb3Qge1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAmLmFjdGl2ZSxcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBhZGp1c3RtZW50c1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJvdXNlbC1jb250YWluZXIge1xuICAgIC5zbGlkZS1jb250YWluZXIge1xuICAgICAgaGVpZ2h0OiA0MDBweDsgLy8gU21hbGxlciBoZWlnaHQgZm9yIG1vYmlsZVxuXG4gICAgICAuc2xpZGUtaW1hZ2Uge1xuICAgICAgICAuc2xpZGUtY29udGVudCB7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcblxuICAgICAgICAgIC5zbGlkZS10aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNsaWRlLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICA6Om5nLWRlZXAge1xuICAgIC5vd2wtdGhlbWUge1xuICAgICAgLm93bC1uYXYge1xuICAgICAgICBbY2xhc3MqPSdvd2wtJ10ge1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gT3B0aW9uYWw6IEFkZCBhbmltYXRpb24gZm9yIHNsaWRlIGNvbnRlbnRcbkBrZXlmcmFtZXMgc2xpZGVJblVwIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMjBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4uc2xpZGUtY29udGVudCB7XG4gIGFuaW1hdGlvbjogc2xpZGVJblVwIDAuNXMgZWFzZS1vdXQgZm9yd2FyZHM7XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNhcm91c2VsLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG4gIHJpZ2h0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtNTB2dztcbiAgbWFyZ2luLXJpZ2h0OiAtNTB2dztcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cbi5jYXJvdXNlbC1jb250YWluZXIgLnNsaWRlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwMHB4O1xufVxuLmNhcm91c2VsLWNvbnRhaW5lciAuc2xpZGUtY29udGFpbmVyIC5zbGlkZS1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNhcm91c2VsLWNvbnRhaW5lciAuc2xpZGUtY29udGFpbmVyIC5zbGlkZS1pbWFnZSAub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG4uY2Fyb3VzZWwtY29udGFpbmVyIC5zbGlkZS1jb250YWluZXIgLnNsaWRlLWltYWdlIC5zbGlkZS1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiA4MCU7XG4gIG1heC13aWR0aDogMTIwMHB4O1xufVxuLmNhcm91c2VsLWNvbnRhaW5lciAuc2xpZGUtY29udGFpbmVyIC5zbGlkZS1pbWFnZSAuc2xpZGUtY29udGVudCAuc2xpZGUtdGl0bGUge1xuICBmb250LXNpemU6IDMuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY2Fyb3VzZWwtY29udGFpbmVyIC5zbGlkZS1jb250YWluZXIgLnNsaWRlLWltYWdlIC5zbGlkZS1jb250ZW50IC5zbGlkZS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG59XG4uY2Fyb3VzZWwtY29udGFpbmVyIC5zbGlkZS1jb250YWluZXIgLnNsaWRlLWltYWdlIC5zbGlkZS1jb250ZW50IC5zbGlkZS1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJvdXNlbC1jb250YWluZXIgLnNsaWRlLWNvbnRhaW5lciAuc2xpZGUtaW1hZ2UgLnNsaWRlLWNvbnRlbnQgLnNsaWRlLWRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxufVxuXG46Om5nLWRlZXAgLm93bC10aGVtZSAub3dsLW5hdiB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG46Om5nLWRlZXAgLm93bC10aGVtZSAub3dsLW5hdiBbY2xhc3MqPW93bC1dIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG46Om5nLWRlZXAgLm93bC10aGVtZSAub3dsLW5hdiBbY2xhc3MqPW93bC1dOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm93bC10aGVtZSAub3dsLW5hdiBbY2xhc3MqPW93bC1dLm93bC1wcmV2IHtcbiAgbGVmdDogMjBweDtcbn1cbjo6bmctZGVlcCAub3dsLXRoZW1lIC5vd2wtbmF2IFtjbGFzcyo9b3dsLV0ub3dsLW5leHQge1xuICByaWdodDogMjBweDtcbn1cbjo6bmctZGVlcCAub3dsLXRoZW1lIC5vd2wtZG90cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbjo6bmctZGVlcCAub3dsLXRoZW1lIC5vd2wtZG90cyAub3dsLWRvdCBzcGFuIHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbjo6bmctZGVlcCAub3dsLXRoZW1lIC5vd2wtZG90cyAub3dsLWRvdC5hY3RpdmUgc3BhbiwgOjpuZy1kZWVwIC5vd2wtdGhlbWUgLm93bC1kb3RzIC5vd2wtZG90OmhvdmVyIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJvdXNlbC1jb250YWluZXIgLnNsaWRlLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgfVxuICAuY2Fyb3VzZWwtY29udGFpbmVyIC5zbGlkZS1jb250YWluZXIgLnNsaWRlLWltYWdlIC5zbGlkZS1jb250ZW50IHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG4gIC5jYXJvdXNlbC1jb250YWluZXIgLnNsaWRlLWNvbnRhaW5lciAuc2xpZGUtaW1hZ2UgLnNsaWRlLWNvbnRlbnQgLnNsaWRlLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbiAgLmNhcm91c2VsLWNvbnRhaW5lciAuc2xpZGUtY29udGFpbmVyIC5zbGlkZS1pbWFnZSAuc2xpZGUtY29udGVudCAuc2xpZGUtZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuXG4gIDo6bmctZGVlcCAub3dsLXRoZW1lIC5vd2wtbmF2IFtjbGFzcyo9b3dsLV0ge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGVJblVwIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMjBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLnNsaWRlLWNvbnRlbnQge1xuICBhbmltYXRpb246IHNsaWRlSW5VcCAwLjVzIGVhc2Utb3V0IGZvcndhcmRzO1xufSJdfQ== */"] });


/***/ }),

/***/ 970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 38, vars: 0, consts: [["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css", "rel", "stylesheet"], ["href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.css", "rel", "stylesheet"], [1, "footer-section", "py-4", "mt-5"], [1, "container"], [1, "row", "g-4", "align-items-center"], [1, "col-lg-4", "text-center", "text-lg-start"], ["src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbQcxyQLYSYacrnMY9QrAH2sICfiKqnUYYvg&s", "alt", "Company Logo", 1, "footer-logo", "mb-3"], [1, "text-muted", "mb-0"], [1, "col-lg-4", "text-center"], [1, "social-links"], ["href", "#", 1, "social-icon"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-twitter"], [1, "fab", "fa-linkedin-in"], [1, "fab", "fa-instagram"], [1, "col-lg-4", "text-center", "text-lg-end"], [1, "contact-info"], [1, "mb-1"], [1, "fas", "fa-envelope", "me-2"], [1, "fas", "fa-phone", "me-2"], [1, "mb-0", "text-muted", "small"], [1, "row", "mt-4"], [1, "col-12"], [1, "footer-divider"], [1, "text-center", "text-muted", "small", "mb-0"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0)(1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "footer", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Enterprises Management System ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Making business simpler ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15)(22, "div", 16)(23, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " contact@example.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " +91 9389879393 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Last updated: 2025-06-07 15:04:35 UTC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " By: Gps-Gaurav ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21)(34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "hr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " \u00A9 2025 Enterprises Management System. All rights reserved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } }, styles: [".footer-section[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-top: 1px solid #dee2e6;\n}\n.footer-section[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%] {\n  max-height: 50px;\n  width: auto;\n}\n.footer-section[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background-color: #007bff;\n  color: white;\n  margin: 0 8px;\n  text-decoration: none;\n  transition: transform 0.3s ease, background-color 0.3s ease;\n}\n.footer-section[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  background-color: #0056b3;\n}\n.footer-section[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.footer-section[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.footer-section[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #007bff;\n}\n.footer-section[_ngcontent-%COMP%]   .footer-divider[_ngcontent-%COMP%] {\n  border-color: #dee2e6;\n  margin: 1rem 0;\n}\n@media (max-width: 992px) {\n  .footer-section[_ngcontent-%COMP%]   .text-lg-start[_ngcontent-%COMP%], .footer-section[_ngcontent-%COMP%]   .text-lg-end[_ngcontent-%COMP%] {\n    text-align: center !important;\n  }\n  .footer-section[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%] {\n    margin: 1rem 0;\n  }\n  .footer-section[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL0FuZ3VsYXIlMjBKUyUyMFByb2plY3QvRW50ZXJwcmlzZXMtRGFzaGJvYXJkL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHlCQUFBO0VBQ0EsNkJBQUE7QUNBRjtBREVFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FDQUo7QURJSTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSwyREFBQTtBQ0ZOO0FESU07RUFDRSwyQkFBQTtFQUNBLHlCQUFBO0FDRlI7QURLTTtFQUNFLGVBQUE7QUNIUjtBRFNJO0VBQ0UsY0FBQTtBQ1BOO0FEU007RUFDRSxjQUFBO0FDUFI7QURZRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQ1ZKO0FEYUU7RUFDRTs7SUFFRSw2QkFBQTtFQ1hKO0VEY0U7SUFDRSxjQUFBO0VDWko7RURlRTtJQUNFLGdCQUFBO0VDYko7QUFDRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmb290ZXIuY29tcG9uZW50LnNjc3Ncbi5mb290ZXItc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xuXG4gIC5mb290ZXItbG9nbyB7XG4gICAgbWF4LWhlaWdodDogNTBweDtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuXG4gIC5zb2NpYWwtbGlua3Mge1xuICAgIC5zb2NpYWwtaWNvbiB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAzOHB4O1xuICAgICAgaGVpZ2h0OiAzOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIG1hcmdpbjogMCA4cHg7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcbiAgICAgIH1cblxuICAgICAgaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY29udGFjdC1pbmZvIHtcbiAgICBwIHtcbiAgICAgIGNvbG9yOiAjNmM3NTdkO1xuXG4gICAgICBpIHtcbiAgICAgICAgY29sb3I6ICMwMDdiZmY7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmZvb3Rlci1kaXZpZGVyIHtcbiAgICBib3JkZXItY29sb3I6ICNkZWUyZTY7XG4gICAgbWFyZ2luOiAxcmVtIDA7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAudGV4dC1sZy1zdGFydCxcbiAgICAudGV4dC1sZy1lbmQge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnNvY2lhbC1saW5rcyB7XG4gICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICB9XG5cbiAgICAuY29udGFjdC1pbmZvIHtcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgfVxuICB9XG59XG4iLCIuZm9vdGVyLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcbn1cbi5mb290ZXItc2VjdGlvbiAuZm9vdGVyLWxvZ28ge1xuICBtYXgtaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogYXV0bztcbn1cbi5mb290ZXItc2VjdGlvbiAuc29jaWFsLWxpbmtzIC5zb2NpYWwtaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDM4cHg7XG4gIGhlaWdodDogMzhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMCA4cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG59XG4uZm9vdGVyLXNlY3Rpb24gLnNvY2lhbC1saW5rcyAuc29jaWFsLWljb246aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XG59XG4uZm9vdGVyLXNlY3Rpb24gLnNvY2lhbC1saW5rcyAuc29jaWFsLWljb24gaSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5mb290ZXItc2VjdGlvbiAuY29udGFjdC1pbmZvIHAge1xuICBjb2xvcjogIzZjNzU3ZDtcbn1cbi5mb290ZXItc2VjdGlvbiAuY29udGFjdC1pbmZvIHAgaSB7XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuLmZvb3Rlci1zZWN0aW9uIC5mb290ZXItZGl2aWRlciB7XG4gIGJvcmRlci1jb2xvcjogI2RlZTJlNjtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmZvb3Rlci1zZWN0aW9uIC50ZXh0LWxnLXN0YXJ0LFxuLmZvb3Rlci1zZWN0aW9uIC50ZXh0LWxnLWVuZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZvb3Rlci1zZWN0aW9uIC5zb2NpYWwtbGlua3Mge1xuICAgIG1hcmdpbjogMXJlbSAwO1xuICB9XG4gIC5mb290ZXItc2VjdGlvbiAuY29udGFjdC1pbmZvIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICB9XG59Il19 */"] });


/***/ }),

/***/ 1700:
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordComponent": () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _shared_global_constrants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/global-constrants */ 3086);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ 3071);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/snackbar.service */ 5832);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-ui-loader */ 3085);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8281);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 7317);















function ForgotPasswordComponent_mat_error_11_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "This field is mandatory. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_mat_error_11_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "This field is invalid. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ForgotPasswordComponent_mat_error_11_span_1_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ForgotPasswordComponent_mat_error_11_span_2_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.forgotPasswordForm.controls.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.forgotPasswordForm.controls.email.errors.pattern);
} }
class ForgotPasswordComponent {
    constructor(formBuilder, router, userServices, snackbarservices, dialogRef, ngxService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userServices = userServices;
        this.snackbarservices = snackbarservices;
        this.dialogRef = dialogRef;
        this.ngxService = ngxService;
        this.forgotPasswordForm = _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup;
    }
    ngOnInit() {
        this.forgotPasswordForm = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(_shared_global_constrants__WEBPACK_IMPORTED_MODULE_0__.GlobalConstants.emailRegex)]]
        });
    }
    handleSubmit() {
        this.ngxService.start();
        var formData = this.forgotPasswordForm.value;
        var data = {
            email: formData.email
        };
        this.userServices.forgotPassword(data).subscribe((response) => {
            this.ngxService.stop();
            this.dialogRef.close();
            this.responseMessage = response === null || response === void 0 ? void 0 : response.message;
            this.snackbarservices.openSnackbar(this.responseMessage, "");
            this.router.navigate(['/']);
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = _shared_global_constrants__WEBPACK_IMPORTED_MODULE_0__.GlobalConstants.genericError;
            }
            this.responseMessage.openSnackbar(this.responseMessage, _shared_global_constrants__WEBPACK_IMPORTED_MODULE_0__.GlobalConstants.error);
        });
    }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__.NgxUiLoaderService)); };
ForgotPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 17, vars: 3, consts: [["color", "primary"], ["fxlayout", "row"], [1, "tille-center"], [1, "mat-typography"], [3, "formGroup"], ["fxFlex", "", "fxLayout", "column"], ["appearance", "fill", "fxFlex", ""], ["matInput", "", "formControlName", "email", "required", ""], [4, "ngIf"], ["align", "center"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled", "click"], ["mat-raised-button", "", "colour", "primary", "mat-dialog-close", ""]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "mat-toolbar-row", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-dialog-content", 3)(5, "form", 4)(6, "div", 5)(7, "mat-form-field", 6)(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ForgotPasswordComponent_mat_error_11_Template, 3, 2, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-dialog-actions", 9)(13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_button_click_13_listener() { return ctx.handleSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Forgot Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.forgotPasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.forgotPasswordForm.controls.email.touched && ctx.forgotPasswordForm.controls.email.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !(ctx.forgotPasswordForm.valid && ctx.forgotPasswordForm.dirty));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbar, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarRow, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose], styles: [".mat-toolbar[_ngcontent-%COMP%] {\n  margin: -24px;\n  width: auto;\n  margin-bottom: 10px;\n}\n\n.title-center[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  text-align: center;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL0FuZ3VsYXIlMjBKUyUyMFByb2plY3QvRW50ZXJwcmlzZXMtRGFzaGJvYXJkL3NyYy9hcHAvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGIiwiZmlsZSI6ImZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdG9vbGJhcntcbiAgbWFyZ2luOiAtMjRweDtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50aXRsZS1jZW50ZXJ7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cbi5tYXQtZm9ybS1maWVsZHtcbiAgcGFkZGluZzogNXB4O1xuXG59XG4iLCIubWF0LXRvb2xiYXIge1xuICBtYXJnaW46IC0yNHB4O1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRpdGxlLWNlbnRlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIHBhZGRpbmc6IDVweDtcbn0iXX0= */"] });


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../signup/signup.component */ 570);
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../forgot-password/forgot-password.component */ 1700);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.component */ 8458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ 3071);
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../carousel/carousel.component */ 5405);
/* harmony import */ var _our_services_our_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../our-services/our-services.component */ 5761);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/footer.component */ 970);












class HomeComponent {
    constructor(dialog, router, userServices) {
        this.dialog = dialog;
        this.router = router;
        this.userServices = userServices;
    }
    ngOnInit() {
        if (localStorage.getItem('token') != null) {
            this.userServices.checkToken().subscribe((response) => {
                this.router.navigate(['/cafe/dashboard']);
            }, (error) => {
                console.log(error);
            });
        }
    }
    signupAction() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogConfig();
        dialogConfig.width = "500px";
        this.dialog.open(_signup_signup_component__WEBPACK_IMPORTED_MODULE_0__.SignupComponent, dialogConfig);
    }
    ForgotPasswordAction() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogConfig();
        dialogConfig.width = "500px";
        this.dialog.open(_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordComponent, dialogConfig);
    }
    loginAction() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogConfig();
        dialogConfig.width = "500px";
        this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, dialogConfig);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 16, vars: 0, consts: [[1, "wrapper", "sticky", 2, "background-color", "rgb(9, 117, 185)"], [1, "navbar-fixed-top"], ["href", "#", 1, "logo"], [2, "color", "aliceblue"], [3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-carousel")(1, "app-our-services");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 0)(3, "nav", 1)(4, "a", 2)(5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "storefront");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " Enterprises Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "ul", 3)(9, "li")(10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_10_listener() { return ctx.loginAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, " Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "li")(13, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_13_listener() { return ctx.signupAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, " Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "app-footer");
    } }, directives: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__.CarouselComponent, _our_services_our_services_component__WEBPACK_IMPORTED_MODULE_5__.OurServicesComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n\n\nbody[_ngcontent-%COMP%] {\n  font-family: Arial;\n  margin: 0;\n}\n\n\n\n.header[_ngcontent-%COMP%] {\n  padding: 60px;\n  text-align: center;\n  background: #257587;\n  color: white;\n}\n\n\n\n.navbar[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #322d2d;\n}\n\n\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  padding: 14px 20px;\n  text-decoration: none;\n  text-align: center;\n}\n\n\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n  color: black;\n}\n\n\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n\n\n\n\n.side[_ngcontent-%COMP%] {\n  flex: 30%;\n  background-color: #f1f1f1;\n  padding: 20px;\n}\n\n\n\n.main[_ngcontent-%COMP%] {\n  flex: 70%;\n  background-color: white;\n  padding: 20px;\n}\n\n\n\n.fakeimg[_ngcontent-%COMP%] {\n  background-color: #aaa;\n  width: 100%;\n  padding: 20px;\n}\n\n\n\n.footer[_ngcontent-%COMP%] {\n  padding: 6px;\n  text-align: center;\n  color: white;\n  background: #283039;\n}\n\n\n\n@media screen and (max-width: 700px) {\n  .row[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n\n\n.column[_ngcontent-%COMP%] {\n  flex: 25%;\n  padding: 20px;\n}\n\n\n\n@media screen and (max-width: 992px) {\n  .column[_ngcontent-%COMP%] {\n    flex: 50%;\n  }\n}\n\nbody[_ngcontent-%COMP%] {\n  background-color: #384047;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  height: 65px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #0c3b81;\n}\n\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  width: 90%;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 1.5em;\n}\n\na.logo[_ngcontent-%COMP%] {\n  margin-right: auto;\n}\n\nul[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  margin: 0px;\n  padding: 0px;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #ffffff;\n  position: relative;\n  font-size: 1.25em;\n}\n\na[_ngcontent-%COMP%]::after {\n  content: \"\";\n  top: 80%;\n  border-bottom: 2px solid #F8E71C;\n  transition: all 0.35s;\n  position: absolute;\n}\n\na[_ngcontent-%COMP%]:hover::after {\n  transition: all 0.35s;\n}\n\na[_ngcontent-%COMP%]::after {\n  right: 50%;\n  left: 50%;\n}\n\na[_ngcontent-%COMP%]:hover::after {\n  right: 0;\n  left: 0;\n}\n\n@media (max-width: 1024px) {\n  .wrapper[_ngcontent-%COMP%] {\n    height: auto;\n  }\n\n  nav[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  a.logo[_ngcontent-%COMP%] {\n    margin-top: 1.5em;\n    margin-bottom: 1.5em;\n    margin-right: 0px;\n  }\n\n  ul[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 1em;\n    justify-content: space-between;\n  }\n\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-left: 0px;\n  }\n}\n\n@media (max-width: 768px) {\n  a.logo[_ngcontent-%COMP%] {\n    margin: 1.5em;\n  }\n\n  ul[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0.3em;\n    text-align: center;\n  }\n\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-left: 0px;\n  }\n}\n\n.sticky[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100% !important;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.bg-image[_ngcontent-%COMP%] {\n  \n  background-image: url('food1.jpg');\n  \n  filter: blur(3px);\n  -webkit-filter: blur(3px);\n  \n  height: 100%;\n  \n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n\n\n.bg-text[_ngcontent-%COMP%] {\n  background-color: black;\n  \n  background-color: rgba(0, 0, 0, 0.8);\n  \n  color: white;\n  font-weight: bold;\n  border: 3px solid #f1f1f1;\n  position: absolute;\n  top: 60%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 55%;\n  padding: 20px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9Bbmd1bGFyJTIwSlMlMjBQcm9qZWN0L0VudGVycHJpc2VzLURhc2hib2FyZC9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0FDQ0Y7O0FERUEsbUJBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUNDRjs7QURFQSxzQkFBQTs7QUFDQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBLGlDQUFBOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUEsbUNBQUE7O0FBQ0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUEsMEJBQUE7O0FBQ0E7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQSxxQkFBQTs7QUFDQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUEsNERBQUE7O0FBQ0Esd0JBQUE7O0FBQ0E7RUFDRSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUEsZ0JBQUE7O0FBQ0E7RUFDRSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUEsc0NBQUE7O0FBQ0E7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUEsV0FBQTs7QUFDQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBLCtJQUFBOztBQUNBO0VBQ0U7SUFDRSxzQkFBQTtFQ0NGO0FBQ0Y7O0FERUE7RUFDRSxzQkFBQTtBQ0FGOztBREdBLDRCQUFBOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUNBRjs7QURHQSw4QkFBQTs7QUFDQTtFQUNFLFNBQUE7RUFDQSxhQUFBO0FDQUY7O0FER0EsZ0ZBQUE7O0FBQ0E7RUFDRTtJQUNFLFNBQUE7RUNBRjtBQUNGOztBREdBO0VBQ0UseUJBQUE7QUNERjs7QURJQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0RGOztBRElBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsV0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURJQTtFQUNFLHFCQUFBO0FDREY7O0FESUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQ0RGOztBRElBO0VBQ0UsUUFBQTtFQUNBLE9BQUE7QUNERjs7QURJQTtFQUNFO0lBQ0UsWUFBQTtFQ0RGOztFRElBO0lBQ0Usc0JBQUE7SUFDQSxtQkFBQTtFQ0RGOztFRElBO0lBQ0UsaUJBQUE7SUFDQSxvQkFBQTtJQUNBLGlCQUFBO0VDREY7O0VESUE7SUFDRSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSw4QkFBQTtFQ0RGOztFRElBO0lBQ0UsZ0JBQUE7RUNERjtBQUNGOztBRElBO0VBQ0U7SUFDRSxhQUFBO0VDRkY7O0VES0E7SUFDRSxzQkFBQTtFQ0ZGOztFREtBO0lBQ0UsYUFBQTtJQUNBLGtCQUFBO0VDRkY7O0VES0E7SUFDRSxnQkFBQTtFQ0ZGO0FBQ0Y7O0FES0E7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxzQkFBQTtBQ0hGOztBRE1BO0VBQ0Usc0JBQUE7QUNIRjs7QURLQTtFQUNFLG1CQUFBO0VBQ0Esa0NBQUE7RUFFQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFFQSxnQkFBQTtFQUNBLFlBQUE7RUFFQSxzQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ0xGOztBRFFBLGtEQUFBOztBQUNBO0VBQ0UsdUJBQUE7RUFBOEIsbUJBQUE7RUFDOUIsb0NBQUE7RUFBb0MsZ0NBQUE7RUFDcEMsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFFQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDSkYiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBTdHlsZSB0aGUgYm9keSAqL1xuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBIZWFkZXIvbG9nbyBUaXRsZSAqL1xuLmhlYWRlciB7XG4gIHBhZGRpbmc6IDYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzI1NzU4NztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBTdHlsZSB0aGUgdG9wIG5hdmlnYXRpb24gYmFyICovXG4ubmF2YmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMmQyZDtcbn1cblxuLyogU3R5bGUgdGhlIG5hdmlnYXRpb24gYmFyIGxpbmtzICovXG4ubmF2YmFyIGEge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIENoYW5nZSBjb2xvciBvbiBob3ZlciAqL1xuLm5hdmJhciBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4vKiBDb2x1bW4gY29udGFpbmVyICovXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4vKiBDcmVhdGUgdHdvIHVuZXF1YWwgY29sdW1ucyB0aGF0IHNpdHMgbmV4dCB0byBlYWNoIG90aGVyICovXG4vKiBTaWRlYmFyL2xlZnQgY29sdW1uICovXG4uc2lkZSB7XG4gIGZsZXg6IDMwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLyogTWFpbiBjb2x1bW4gKi9cbi5tYWluIHtcbiAgZmxleDogNzAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLyogRmFrZSBpbWFnZSwganVzdCBmb3IgdGhpcyBleGFtcGxlICovXG4uZmFrZWltZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4vKiBGb290ZXIgKi9cbi5mb290ZXIge1xuICBwYWRkaW5nOiA2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMjgzMDM5O1xufVxuXG4vKiBSZXNwb25zaXZlIGxheW91dCAtIHdoZW4gdGhlIHNjcmVlbiBpcyBsZXNzIHRoYW4gNzAwcHggd2lkZSwgbWFrZSB0aGUgdHdvIGNvbHVtbnMgc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgaW5zdGVhZCBvZiBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5yb3csIC5uYXZiYXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIENvbnRhaW5lciBmb3IgZmxleGJveGVzICovXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4vKiBDcmVhdGUgZm91ciBlcXVhbCBjb2x1bW5zICovXG4uY29sdW1uIHtcbiAgZmxleDogMjUlO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4vKiBPbiBzY3JlZW5zIHRoYXQgYXJlIDk5MnB4IHdpZGUgb3IgbGVzcywgZ28gZnJvbSBmb3VyIGNvbHVtbnMgdG8gdHdvIGNvbHVtbnMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb2x1bW4ge1xuICAgIGZsZXg6IDUwJTtcbiAgfVxufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NDA0Nztcbn1cblxuLndyYXBwZXIge1xuICBoZWlnaHQ6IDY1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzNiODE7XG59XG5cbm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA5MCU7XG59XG5cbnVsIGxpIGEge1xuICBtYXJnaW4tbGVmdDogMS41ZW07XG59XG5cbmEubG9nbyB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxudWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDEuMjVlbTtcbn1cblxuYTo6YWZ0ZXIge1xuICBjb250ZW50OlwiXCI7XG4gIHRvcDogODAlO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0Y4RTcxQztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzVzO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmE6aG92ZXI6OmFmdGVyIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzVzO1xufVxuXG5hOjphZnRlciB7XG4gIHJpZ2h0OiA1MCU7XG4gIGxlZnQ6IDUwJTtcbn1cblxuYTpob3Zlcjo6YWZ0ZXIge1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAud3JhcHBlciB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgbmF2IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICBhLmxvZ28ge1xuICAgIG1hcmdpbi10b3A6IDEuNWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEuNWVtO1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICB9XG5cbiAgdWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICB1bCBsaSBhIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICBhLmxvZ28ge1xuICAgIG1hcmdpbjogMS41ZW07XG4gIH1cblxuICB1bCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIHVsIGxpIHtcbiAgICBtYXJnaW46IDAuM2VtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIHVsIGxpIGEge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIH1cbn1cblxuLnN0aWNreSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmJnLWltYWdlIHtcbiAgLyogVGhlIGltYWdlIHVzZWQgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9mb29kMS5qcGdcIik7XG5cbiAgLyogQWRkIHRoZSBibHVyIGVmZmVjdCAqL1xuICBmaWx0ZXI6IGJsdXIoM3B4KTtcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoM3B4KTtcblxuICAvKiBGdWxsIGhlaWdodCAqL1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLyogUG9zaXRpb24gdGV4dCBpbiB0aGUgbWlkZGxlIG9mIHRoZSBwYWdlL2ltYWdlICovXG4uYmctdGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsIDAuOCk7IC8qIEJsYWNrIHcvb3BhY2l0eS9zZWUtdGhyb3VnaCAqL1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAvLyB6LWluZGV4OiAyO1xuICB3aWR0aDogNTUlO1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogU3R5bGUgdGhlIGJvZHkgKi9cbmJvZHkge1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIG1hcmdpbjogMDtcbn1cblxuLyogSGVhZGVyL2xvZ28gVGl0bGUgKi9cbi5oZWFkZXIge1xuICBwYWRkaW5nOiA2MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMyNTc1ODc7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogU3R5bGUgdGhlIHRvcCBuYXZpZ2F0aW9uIGJhciAqL1xuLm5hdmJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjJkMmQ7XG59XG5cbi8qIFN0eWxlIHRoZSBuYXZpZ2F0aW9uIGJhciBsaW5rcyAqL1xuLm5hdmJhciBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBDaGFuZ2UgY29sb3Igb24gaG92ZXIgKi9cbi5uYXZiYXIgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLyogQ29sdW1uIGNvbnRhaW5lciAqL1xuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLyogQ3JlYXRlIHR3byB1bmVxdWFsIGNvbHVtbnMgdGhhdCBzaXRzIG5leHQgdG8gZWFjaCBvdGhlciAqL1xuLyogU2lkZWJhci9sZWZ0IGNvbHVtbiAqL1xuLnNpZGUge1xuICBmbGV4OiAzMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi8qIE1haW4gY29sdW1uICovXG4ubWFpbiB7XG4gIGZsZXg6IDcwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi8qIEZha2UgaW1hZ2UsIGp1c3QgZm9yIHRoaXMgZXhhbXBsZSAqL1xuLmZha2VpbWcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLyogRm9vdGVyICovXG4uZm9vdGVyIHtcbiAgcGFkZGluZzogNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzI4MzAzOTtcbn1cblxuLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSB3aGVuIHRoZSBzY3JlZW4gaXMgbGVzcyB0aGFuIDcwMHB4IHdpZGUsIG1ha2UgdGhlIHR3byBjb2x1bW5zIHN0YWNrIG9uIHRvcCBvZiBlYWNoIG90aGVyIGluc3RlYWQgb2YgbmV4dCB0byBlYWNoIG90aGVyICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAucm93LCAubmF2YmFyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogQ29udGFpbmVyIGZvciBmbGV4Ym94ZXMgKi9cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi8qIENyZWF0ZSBmb3VyIGVxdWFsIGNvbHVtbnMgKi9cbi5jb2x1bW4ge1xuICBmbGV4OiAyNSU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi8qIE9uIHNjcmVlbnMgdGhhdCBhcmUgOTkycHggd2lkZSBvciBsZXNzLCBnbyBmcm9tIGZvdXIgY29sdW1ucyB0byB0d28gY29sdW1ucyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNvbHVtbiB7XG4gICAgZmxleDogNTAlO1xuICB9XG59XG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NDA0Nztcbn1cblxuLndyYXBwZXIge1xuICBoZWlnaHQ6IDY1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMzYjgxO1xufVxuXG5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogOTAlO1xufVxuXG51bCBsaSBhIHtcbiAgbWFyZ2luLWxlZnQ6IDEuNWVtO1xufVxuXG5hLmxvZ28ge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbnVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxLjI1ZW07XG59XG5cbmE6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgdG9wOiA4MCU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRjhFNzFDO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuYTpob3Zlcjo6YWZ0ZXIge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXM7XG59XG5cbmE6OmFmdGVyIHtcbiAgcmlnaHQ6IDUwJTtcbiAgbGVmdDogNTAlO1xufVxuXG5hOmhvdmVyOjphZnRlciB7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC53cmFwcGVyIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICBuYXYge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIGEubG9nbyB7XG4gICAgbWFyZ2luLXRvcDogMS41ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIH1cblxuICB1bCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIHVsIGxpIGEge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICBhLmxvZ28ge1xuICAgIG1hcmdpbjogMS41ZW07XG4gIH1cblxuICB1bCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIHVsIGxpIHtcbiAgICBtYXJnaW46IDAuM2VtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIHVsIGxpIGEge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIH1cbn1cbi5zdGlja3kge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLm1hdC1pY29uIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmJnLWltYWdlIHtcbiAgLyogVGhlIGltYWdlIHVzZWQgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9mb29kMS5qcGdcIik7XG4gIC8qIEFkZCB0aGUgYmx1ciBlZmZlY3QgKi9cbiAgZmlsdGVyOiBibHVyKDNweCk7XG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDNweCk7XG4gIC8qIEZ1bGwgaGVpZ2h0ICovXG4gIGhlaWdodDogMTAwJTtcbiAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLyogUG9zaXRpb24gdGV4dCBpbiB0aGUgbWlkZGxlIG9mIHRoZSBwYWdlL2ltYWdlICovXG4uYmctdGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAvKiBGYWxsYmFjayBjb2xvciAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIC8qIEJsYWNrIHcvb3BhY2l0eS9zZWUtdGhyb3VnaCAqL1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogNTUlO1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"] });


/***/ }),

/***/ 6729:
/*!************************************************!*\
  !*** ./src/app/layouts/full/full.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullComponent": () => (/* binding */ FullComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ 9910);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ 1570);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8281);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 1183);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 2991);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);











/** @title Responsive sidenav */
class FullComponent {
    constructor(changeDetectorRef, media) {
        this.mobileQuery = media.matchMedia('(min-width: 768px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    ngAfterViewInit() { }
}
FullComponent.ɵfac = function FullComponent_Factory(t) { return new (t || FullComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__.MediaMatcher)); };
FullComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FullComponent, selectors: [["app-full-layout"]], decls: 21, vars: 5, consts: [[1, "main-container"], ["color", "primary", 1, "topbar", "telative"], [1, "navbar-header"], ["mat-icon-button", "", "value", "sidebarclosed", 2, "vertical-align", "bottom", 3, "click"], [2, "vertical-align", "middle"], ["fxShow", "false", "fxShow.gt-xs", ""], ["fxFlex", ""], [1, "example-sidenav-container"], ["id", "snav", "fixedTopGap", "0", 1, "dark-sidebar", "pl-xs", 3, "mode", "opened", "disableClose"], ["snav", ""], [1, "page-wrapper"], [1, "page-content"]], template: function FullComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "mat-toolbar", 1)(2, "div", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FullComponent_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](16); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "b")(7, "span", 4)(8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "storefront");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Enterprises Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "span", 6)(13, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-sidenav-container", 7)(15, "mat-sidenav", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-sidenav-content", 10)(19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("margin-top", ctx.mobileQuery.matches ? 0 : 0, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mode", ctx.mobileQuery.matches ? "side" : "over")("opened", ctx.mobileQuery.matches)("disableClose", ctx.mobileQuery.matches);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__.DefaultShowHideDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultFlexDirective, _header_header_component__WEBPACK_IMPORTED_MODULE_0__.AppHeaderComponent, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenav, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.AppSidebarComponent, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenavContent, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 1183:
/*!*********************************************************!*\
  !*** ./src/app/layouts/full/header/header.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppHeaderComponent": () => (/* binding */ AppHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var src_app_material_component_dialog_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/material-component/dialog/confirmation/confirmation.component */ 8526);
/* harmony import */ var src_app_material_component_dialog_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/material-component/dialog/change-password/change-password.component */ 1441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ 3071);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 5590);










class AppHeaderComponent {
    constructor(router, userServices, dialog) {
        this.router = router;
        this.dialog = dialog;
    }
    logout() {
        const DialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogConfig;
        DialogConfig.data = {
            message: 'logout'
        };
        const dialogRef = this.dialog.open(src_app_material_component_dialog_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmationComponent, DialogConfig);
        const sub = dialogRef.componentInstance.onEmitStatuschange.subscribe((user) => {
            dialogRef.close();
            localStorage.clear();
            this.router.navigate(['/']);
        });
    }
    changePassword() {
        const DialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogConfig();
        DialogConfig.width = "550px";
        this.dialog.open(src_app_material_component_dialog_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__.ChangePasswordComponent, DialogConfig);
    }
}
AppHeaderComponent.ɵfac = function AppHeaderComponent_Factory(t) { return new (t || AppHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog)); };
AppHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppHeaderComponent, selectors: [["app-header"]], decls: 16, vars: 1, consts: [[1, "row"], [1, "col"], ["mat-icon-button", "", 1, "m-r-5", 3, "matMenuTriggerFor"], [1, "mymegamenu"], ["profile", "matMenu"], ["mat-menu-item", "", 3, "click"]], template: function AppHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 2)(4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-menu", 3, 4)(8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppHeaderComponent_Template_button_click_8_listener() { return ctx.changePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Change Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppHeaderComponent_Template_button_click_12_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Sign Out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r0);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuItem], encapsulation: 2 });


/***/ }),

/***/ 2991:
/*!***********************************************************!*\
  !*** ./src/app/layouts/full/sidebar/sidebar.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSidebarComponent": () => (/* binding */ AppSidebarComponent)
/* harmony export */ });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ 4738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ 9910);
/* harmony import */ var src_app_shared_menu_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/menu-items */ 1534);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/accordion/accordion.directive */ 5903);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/accordion/accordionlink.directive */ 7725);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/accordion/accordionanchor.directive */ 8094);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8281);












const _c0 = function (a1) { return ["/cafe", a1]; };
function AppSidebarComponent_mat_list_item_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 4)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c0, menuitem_r1.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](menuitem_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](menuitem_r1.name);
} }
function AppSidebarComponent_mat_list_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-list-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AppSidebarComponent_mat_list_item_1_a_1_Template, 6, 5, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("group", menuitem_r1.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", menuitem_r1.role === "" || menuitem_r1.role === ctx_r0.tokenPayload.role);
} }
class AppSidebarComponent {
    constructor(changeDetectorRef, media, menuItem) {
        this.menuItem = menuItem;
        this.token = localStorage.getItem('token');
        this.tokenPayload = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__.jwtDecode)(this.token);
        this.mobileQuery = media.matchMedia('(min-width: 768px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
AppSidebarComponent.ɵfac = function AppSidebarComponent_Factory(t) { return new (t || AppSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__.MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_menu_items__WEBPACK_IMPORTED_MODULE_1__.MenuItems)); };
AppSidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppSidebarComponent, selectors: [["app-sidebar"]], decls: 2, vars: 1, consts: [["appAccordion", ""], ["appAccordionLink", "", "routerLinkActive", "selected", 3, "group", 4, "ngFor", "ngForOf"], ["appAccordionLink", "", "routerLinkActive", "selected", 3, "group"], ["appAccordionToggle", "", 3, "routerLink", 4, "ngIf"], ["appAccordionToggle", "", 3, "routerLink"], ["fxFlex", ""]], template: function AppSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-nav-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AppSidebarComponent_mat_list_item_1_Template, 2, 2, "mat-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.menuItem.getMenuitems());
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatNavList, _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_2__.AccordionDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatListItem, _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_3__.AccordionLinkDirective, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_4__.AccordionAnchorDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexDirective], encapsulation: 2 });


/***/ }),

/***/ 8458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _shared_global_constrants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/global-constrants */ 3086);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../signup/signup.component */ 570);
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../forgot-password/forgot-password.component */ 1700);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ 3071);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/snackbar.service */ 5832);
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-ui-loader */ 3085);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8281);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 7317);


















function LoginComponent_mat_error_11_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "This field is mandatory. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_11_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "This field is invalid. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, LoginComponent_mat_error_11_span_1_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, LoginComponent_mat_error_11_span_2_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.controls.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.controls.email.errors.pattern);
} }
function LoginComponent_mat_error_16_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "This field is mandatory. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_16_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "This field is invalid. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, LoginComponent_mat_error_16_span_1_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, LoginComponent_mat_error_16_span_2_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.loginForm.controls.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.loginForm.controls.password.errors.pattern);
} }
class LoginComponent {
    constructor(formBuilder, router, userServices, snackbarservices, dialogRef, ngxService, dialog) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userServices = userServices;
        this.snackbarservices = snackbarservices;
        this.dialogRef = dialogRef;
        this.ngxService = ngxService;
        this.dialog = dialog;
        this.loginForm = _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(_shared_global_constrants__WEBPACK_IMPORTED_MODULE_0__.GlobalConstants.emailRegex)]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
    }
    ForgotPasswordAction() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogConfig();
        dialogConfig.width = "500px";
        this.dialog.open(_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__.ForgotPasswordComponent, dialogConfig);
    }
    signupAction() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogConfig();
        dialogConfig.width = "500px";
        this.dialog.open(_signup_signup_component__WEBPACK_IMPORTED_MODULE_1__.SignupComponent, dialogConfig);
    }
    handleSubmit() {
        this.ngxService.start();
        var formData = this.loginForm.value;
        var data = {
            email: formData.email,
            password: formData.password
        };
        this.userServices.login(data).subscribe((Response) => {
            this.ngxService.stop();
            this.dialogRef.close();
            localStorage.setItem('token', Response.token);
            this.router.navigate(['/cafe/dashboard']);
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = _shared_global_constrants__WEBPACK_IMPORTED_MODULE_0__.GlobalConstants.genericError;
            }
            this.snackbarservices.openSnackbar(this.responseMessage, _shared_global_constrants__WEBPACK_IMPORTED_MODULE_0__.GlobalConstants.error);
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__.NgxUiLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 29, vars: 4, consts: [["color", "primary"], ["fxlayout", "row"], [1, "tille-center"], [1, "mat-typography"], [3, "formGroup"], ["fxFlex", "", "fxLayout", "column"], ["appearance", "fill", "fxFlex", ""], ["tabindex", "1", "matInput", "", "formControlName", "email", "required", ""], [4, "ngIf"], ["matInput", "", "tabindex", "2", "formControlName", "password", "required", ""], ["align", "center"], ["mat-raised-button", "", "color", "primary", "type", "submit", "tabindex", "3", 3, "disabled", "click"], ["mat-raised-button", "", "colour", "primary", "mat-dialog-close", "", "tabindex", "4"], ["onmouseover", "this.style.color='blue'", "onmouseout", "this.style.color='black'", 2, "cursor", "pointer", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "mat-toolbar-row", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-dialog-content", 3)(5, "form", 4)(6, "div", 5)(7, "mat-form-field", 6)(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, LoginComponent_mat_error_11_Template, 3, 2, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-form-field", 6)(13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, LoginComponent_mat_error_16_Template, 3, 2, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-dialog-actions", 10)(18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_18_listener() { return ctx.handleSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div")(23, "div")(24, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_24_listener() { return ctx.signupAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, " Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div")(27, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_27_listener() { return ctx.ForgotPasswordAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loginForm.controls.email.touched && ctx.loginForm.controls.email.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loginForm.controls.password.touched && ctx.loginForm.controls.password.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !(ctx.loginForm.valid && ctx.loginForm.dirty));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbar, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbarRow, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatError, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogClose], styles: [".mat-toolbar[_ngcontent-%COMP%] {\n  margin: -24px;\n  width: auto;\n  margin-bottom: 10px;\n}\n\n.title-center[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  text-align: center;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vQW5ndWxhciUyMEpTJTIwUHJvamVjdC9FbnRlcnByaXNlcy1EYXNoYm9hcmQvc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10b29sYmFye1xuICBtYXJnaW46IC0yNHB4O1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRpdGxlLWNlbnRlcntcbiAgZmxleDogMSAxIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuLm1hdC1mb3JtLWZpZWxke1xuICBwYWRkaW5nOiA1cHg7XG5cbn1cbiIsIi5tYXQtdG9vbGJhciB7XG4gIG1hcmdpbjogLTI0cHg7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4udGl0bGUtY2VudGVyIHtcbiAgZmxleDogMSAxIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgcGFkZGluZzogNXB4O1xufSJdfQ== */"] });


/***/ }),

/***/ 1441:
/*!****************************************************************************************!*\
  !*** ./src/app/material-component/dialog/change-password/change-password.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordComponent": () => (/* binding */ ChangePasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_shared_global_constrants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/global-constrants */ 3086);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ 3071);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-ui-loader */ 3085);
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/snackbar.service */ 5832);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8281);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 7317);















function ChangePasswordComponent_mat_error_12_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "This field is mandatory. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_mat_error_12_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "This field is invalid. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ChangePasswordComponent_mat_error_12_span_1_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ChangePasswordComponent_mat_error_12_span_2_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.changePasswordForm.controls.oldPassword.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.changePasswordForm.controls.oldPassword.errors.pattern);
} }
function ChangePasswordComponent_mat_error_17_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "This field is mandatory. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_mat_error_17_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "This field is invalid. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ChangePasswordComponent_mat_error_17_span_1_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ChangePasswordComponent_mat_error_17_span_2_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.changePasswordForm.controls.newPassword.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.changePasswordForm.controls.newPassword.errors.pattern);
} }
function ChangePasswordComponent_mat_error_22_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "This field is mandatory. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_mat_error_22_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "This field is invalid. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ChangePasswordComponent_mat_error_22_span_1_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ChangePasswordComponent_mat_error_22_span_2_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.changePasswordForm.controls.confirmPassword.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.changePasswordForm.controls.confirmPassword.errors.pattern);
} }
function ChangePasswordComponent_mat_hint_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-hint")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "new Password and Confirm Password Does not match. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
class ChangePasswordComponent {
    constructor(formBuilder, userServices, dialogRef, ngxServices, snackbarServices, router) {
        this.formBuilder = formBuilder;
        this.userServices = userServices;
        this.dialogRef = dialogRef;
        this.ngxServices = ngxServices;
        this.snackbarServices = snackbarServices;
        this.router = router;
        this.changePasswordForm = _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup;
    }
    ngOnInit() {
        this.changePasswordForm = this.formBuilder.group({
            oldPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            newPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            confirmPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        });
    }
    validateSubmit() {
        if (this.changePasswordForm.controls['newPassword'].value != this.changePasswordForm.controls['confirmPassword'].value) {
            return true;
        }
        else {
            return false;
        }
    }
    handleChangePasswordSubmit() {
        this.ngxServices.start();
        var formData = this.changePasswordForm.value;
        var data = {
            oldPassword: formData.oldPassword,
            newPassword: formData.newPassword,
            confirmPassword: formData.confirmPassword
        };
        this.userServices.changePassword(data).subscribe((response) => {
            this.ngxServices.stop();
            this.dialogRef.close();
            this.responseMessage = response === null || response === void 0 ? void 0 : response.message;
            this.snackbarServices.openSnackbar(this.responseMessage, "");
            this.router.navigate(['/']);
        }, (error) => {
            var _a, _b;
            this.ngxServices.stop();
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = src_app_shared_global_constrants__WEBPACK_IMPORTED_MODULE_0__.GlobalConstants.genericError;
            }
            this.snackbarServices.openSnackbar(this.responseMessage, src_app_shared_global_constrants__WEBPACK_IMPORTED_MODULE_0__.GlobalConstants.error);
        });
    }
}
ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__.NgxUiLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
ChangePasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ChangePasswordComponent, selectors: [["app-change-password"]], decls: 29, vars: 6, consts: [["color", "primary"], ["fxlayout", "row"], [1, "tille-center"], [1, "mat-typography"], [3, "formGroup"], ["fxFlex", "", "fxLayout", "column"], ["appearance", "fill", "fxFlex", ""], ["type", "password", "matInput", "", "formControlName", "oldPassword", "required", ""], [4, "ngIf"], ["type", "password", "matInput", "", "formControlName", "newPassword", "required", ""], ["type", "password", "matInput", "", "formControlName", "confirmPassword", "required", ""], ["align", "center"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled", "click"], ["mat-raised-button", "", "colour", "primary", "mat-dialog-close", ""]], template: function ChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "mat-toolbar-row", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Change Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-dialog-content", 3)(6, "form", 4)(7, "div", 5)(8, "mat-form-field", 6)(9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Old Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ChangePasswordComponent_mat_error_12_Template, 3, 2, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-form-field", 6)(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ChangePasswordComponent_mat_error_17_Template, 3, 2, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-form-field", 6)(19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, ChangePasswordComponent_mat_error_22_Template, 3, 2, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, ChangePasswordComponent_mat_hint_23_Template, 3, 0, "mat-hint", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-dialog-actions", 11)(25, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_25_listener() { return ctx.handleChangePasswordSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Change Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.changePasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.changePasswordForm.controls.oldPassword.touched && ctx.changePasswordForm.controls.oldPassword.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.changePasswordForm.controls.newPassword.touched && ctx.changePasswordForm.controls.newPassword.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.changePasswordForm.controls.confirmPassword.touched && ctx.changePasswordForm.controls.confirmPassword.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.validateSubmit() && !ctx.changePasswordForm.controls.confirmPassword.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !(ctx.changePasswordForm.valid && ctx.changePasswordForm.dirty));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbar, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarRow, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatHint, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose], styles: [".mat-toolbar[_ngcontent-%COMP%] {\n  margin: -24px;\n  width: auto;\n  margin-bottom: 10px;\n}\n\n.title-center[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  text-align: center;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\nmax-hint[_ngcontent-%COMP%] {\n  columns: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXIlMjBKUyUyMFByb2plY3QvRW50ZXJwcmlzZXMtRGFzaGJvYXJkL3NyYy9hcHAvbWF0ZXJpYWwtY29tcG9uZW50L2RpYWxvZy9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FER0E7RUFFRSxZQUFBO0FDREYiLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10b29sYmFye1xuICBtYXJnaW46IC0yNHB4O1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRpdGxlLWNlbnRlcntcbiAgZmxleDogMSAxIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuLm1hdC1mb3JtLWZpZWxke1xuICBwYWRkaW5nOiA1cHg7XG5cbn1cblxubWF4LWhpbnRcbntcbiAgY29sdW1uczogcmVkO1xufVxuIiwiLm1hdC10b29sYmFyIHtcbiAgbWFyZ2luOiAtMjRweDtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50aXRsZS1jZW50ZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbm1heC1oaW50IHtcbiAgY29sdW1uczogcmVkO1xufSJdfQ== */"] });


/***/ }),

/***/ 8526:
/*!**********************************************************************************!*\
  !*** ./src/app/material-component/dialog/confirmation/confirmation.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmationComponent": () => (/* binding */ ConfirmationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 7317);





class ConfirmationComponent {
    constructor(dialogData) {
        this.dialogData = dialogData;
        this.onEmitStatuschange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.details = {};
    }
    ngOnInit() {
        if (this.dialogData) {
            this.details = this.dialogData;
        }
    }
    handleChangeAction() {
        this.onEmitStatuschange.emit();
    }
}
ConfirmationComponent.ɵfac = function ConfirmationComponent_Factory(t) { return new (t || ConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
ConfirmationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmationComponent, selectors: [["app-confirmation"]], decls: 8, vars: 1, consts: [[1, "mat-typography"], ["align", "end"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "mat-dialog-close", ""]], template: function ConfirmationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 0)(1, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-actions", 1)(4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationComponent_Template_button_click_4_listener() { return ctx.handleChangeAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Are you sure want to ", ctx.details.message, "?");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose], styles: ["h5[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXIlMjBKUyUyMFByb2plY3QvRW50ZXJwcmlzZXMtRGFzaGJvYXJkL3NyYy9hcHAvbWF0ZXJpYWwtY29tcG9uZW50L2RpYWxvZy9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsZUFBQTtBQ0FGIiwiZmlsZSI6ImNvbmZpcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImg1XG57XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbiIsImg1IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ 5761:
/*!********************************************************!*\
  !*** ./src/app/our-services/our-services.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OurServicesComponent": () => (/* binding */ OurServicesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel-o */ 4978);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);




function OurServicesComponent_div_8_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const feature_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", feature_r5, " ");
} }
function OurServicesComponent_div_8_ng_container_14_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30)(1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 33)(4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const image_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const service_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", service_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r1.title);
} }
function OurServicesComponent_div_8_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OurServicesComponent_div_8_ng_container_14_ng_template_1_Template, 6, 3, "ng-template", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function OurServicesComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "div", 14)(3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OurServicesComponent_div_8_li_10_Template, 2, 1, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 14)(12, "div", 27)(13, "owl-carousel-o", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, OurServicesComponent_div_8_ng_container_14_Template, 2, 0, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const service_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("flex-row-reverse", i_r2 % 2 !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fas ", service_r1.icon, " service-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", service_r1.features);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.customOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", service_r1.images);
} }
class OurServicesComponent {
    constructor() {
        this.services = [
            {
                icon: 'fa-th-large',
                title: 'Category Management',
                description: 'Streamline your business with efficient category organization. Perfect for inventory and product classification.',
                features: [
                    'Hierarchical categorization',
                    'Category performance tracking',
                    'Easy category updates'
                ],
                images: [
                    'https://picsum.photos/1920/600?random=5',
                    'https://picsum.photos/1920/600?random=6',
                    'https://picsum.photos/1920/600?random=7',
                    'https://picsum.photos/1920/600?random=8'
                ]
            },
            {
                icon: 'fa-box',
                title: 'Product Management',
                description: 'Complete product lifecycle management with real-time tracking and analytics.',
                features: [
                    'Inventory tracking',
                    'Price management',
                    'Delete Products'
                ],
                images: [
                    'https://picsum.photos/1920/600?random=9',
                    'https://picsum.photos/id/161/800/400',
                    'https://picsum.photos/1920/600?random=10',
                    'https://picsum.photos/id/162/800/400'
                ]
            },
            {
                icon: 'fa-file-invoice',
                title: 'Billing System',
                description: 'Fast and efficient billing system with comprehensive reporting capabilities.',
                features: [
                    'Quick bill generation',
                    'Payment tracking',
                    'Financial reports'
                ],
                images: [
                    'https://picsum.photos/1920/600?random=11',
                    'https://picsum.photos/id/49/800/400',
                    'https://picsum.photos/1920/600?random=12',
                    'https://picsum.photos/id/50/800/400'
                ]
            }
        ];
        this.customOptions = {
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: false,
            dots: true,
            navSpeed: 700,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            responsive: {
                0: {
                    items: 1
                }
            },
            nav: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true
        };
    }
    ngOnInit() { }
}
OurServicesComponent.ɵfac = function OurServicesComponent_Factory(t) { return new (t || OurServicesComponent)(); };
OurServicesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OurServicesComponent, selectors: [["app-our-services"]], decls: 31, vars: 1, consts: [["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css", "rel", "stylesheet"], ["href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.css", "rel", "stylesheet"], ["id", "services", 1, "services-section", "py-5"], [1, "container"], [1, "text-center", "mb-5"], [1, "text-uppercase", "fw-bold"], [1, "divider"], ["class", "service-item bg-white p-4 mb-5", 4, "ngFor", "ngForOf"], ["id", "contact", 1, "contact-section", "py-5", "bg-light"], [1, "text-muted"], [1, "row", "justify-content-center"], [1, "col-md-8"], [1, "contact-form"], [1, "row", "g-3"], [1, "col-md-6"], ["type", "text", "placeholder", "Your Name *", "required", "", 1, "form-control"], ["type", "email", "placeholder", "Your Email *", "required", "", 1, "form-control"], [1, "col-md-12"], ["type", "tel", "placeholder", "Your Phone *", "required", "", 1, "form-control"], ["rows", "5", "placeholder", "Your Message *", "required", "", 1, "form-control"], [1, "col-12", "text-center"], ["type", "submit", 1, "btn", "btn-primary", "px-5"], [1, "service-item", "bg-white", "p-4", "mb-5"], [1, "row", "align-items-center"], [1, "service-content"], [1, "feature-list"], [4, "ngFor", "ngForOf"], [1, "service-carousel"], [3, "options"], ["carouselSlide", ""], [1, "carousel-slide"], [1, "image-container"], [1, "img-fluid", "rounded", "shadow", 3, "src", "alt"], [1, "overlay"]], template: function OurServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0)(1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2)(3, "div", 3)(4, "div", 4)(5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Enterprise Management Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OurServicesComponent_div_8_Template, 15, 10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 8)(10, "div", 3)(11, "div", 4)(12, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Get in touch with our team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10)(17, "div", 11)(18, "form", 12)(19, "div", 13)(20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20)(29, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Send Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.services);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselSlideDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm], styles: ["@charset \"UTF-8\";\n.services-section[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n}\n.services-section[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 3px;\n  background: #007bff;\n  margin: 1rem auto;\n}\n.service-item[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  transition: transform 0.3s ease;\n}\n.service-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n.service-item[_ngcontent-%COMP%]   .service-content[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.service-item[_ngcontent-%COMP%]   .service-content[_ngcontent-%COMP%]   .service-icon[_ngcontent-%COMP%] {\n  color: #007bff;\n  font-size: 2.5rem;\n  margin-bottom: 1.5rem;\n  display: inline-block;\n  transition: transform 0.3s ease;\n}\n.service-item[_ngcontent-%COMP%]   .service-content[_ngcontent-%COMP%]   .service-icon[_ngcontent-%COMP%]:hover {\n  transform: rotate(15deg);\n}\n.service-item[_ngcontent-%COMP%]   .service-content[_ngcontent-%COMP%]   .feature-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n}\n.service-item[_ngcontent-%COMP%]   .service-content[_ngcontent-%COMP%]   .feature-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-left: 1.5rem;\n  position: relative;\n  margin-bottom: 0.5rem;\n}\n.service-item[_ngcontent-%COMP%]   .service-content[_ngcontent-%COMP%]   .feature-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: \"\u2713\";\n  position: absolute;\n  left: 0;\n  color: #007bff;\n}\n.service-item[_ngcontent-%COMP%]   .service-carousel[_ngcontent-%COMP%]   .carousel-slide[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.service-item[_ngcontent-%COMP%]   .service-carousel[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  border-radius: 8px;\n}\n.service-item[_ngcontent-%COMP%]   .service-carousel[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 400px;\n  object-fit: cover;\n  transition: transform 0.5s ease;\n}\n.service-item[_ngcontent-%COMP%]   .service-carousel[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);\n  padding: 20px;\n  color: white;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.service-item[_ngcontent-%COMP%]   .service-carousel[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n}\n.service-item[_ngcontent-%COMP%]   .service-carousel[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.service-item[_ngcontent-%COMP%]   .service-carousel[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.service-item[_ngcontent-%COMP%]     .owl-nav {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  transform: translateY(-50%);\n  margin-top: 0;\n}\n.service-item[_ngcontent-%COMP%]     .owl-nav button {\n  position: absolute;\n  background: rgba(255, 255, 255, 0.8) !important;\n  height: 40px;\n  width: 40px;\n  border-radius: 50% !important;\n}\n.service-item[_ngcontent-%COMP%]     .owl-nav button.owl-prev {\n  left: 10px;\n}\n.service-item[_ngcontent-%COMP%]     .owl-nav button.owl-next {\n  right: 10px;\n}\n.service-item[_ngcontent-%COMP%]     .owl-nav button i {\n  font-size: 20px;\n  color: #007bff;\n}\n.service-item[_ngcontent-%COMP%]     .owl-nav button:hover {\n  background: white !important;\n}\n.service-item[_ngcontent-%COMP%]     .owl-nav button:hover i {\n  color: #0056b3;\n}\n.service-item[_ngcontent-%COMP%]     .owl-dots {\n  position: absolute;\n  bottom: 10px;\n  width: 100%;\n}\n.service-item[_ngcontent-%COMP%]     .owl-dots .owl-dot span {\n  background: rgba(255, 255, 255, 0.5);\n}\n.service-item[_ngcontent-%COMP%]     .owl-dots .owl-dot.active span {\n  background: #007bff;\n}\n@media (max-width: 768px) {\n  .service-item[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n  .service-item[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    flex-direction: column-reverse !important;\n  }\n  .service-item[_ngcontent-%COMP%]   .service-content[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 2rem 1rem;\n  }\n  .service-item[_ngcontent-%COMP%]   .service-content[_ngcontent-%COMP%]   .feature-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n}\n.services-section[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n}\n.services-section[_ngcontent-%COMP%]     .owl-nav {\n  display: none !important;\n}\n.services-section[_ngcontent-%COMP%]     .owl-dots {\n  position: absolute;\n  bottom: 15px;\n  width: 100%;\n  text-align: center;\n}\n.services-section[_ngcontent-%COMP%]     .owl-dots .owl-dot span {\n  width: 10px;\n  height: 10px;\n  margin: 5px;\n  background: rgba(255, 255, 255, 0.5);\n  display: block;\n  backface-visibility: visible;\n  transition: all 0.3s ease;\n  border-radius: 30px;\n}\n.services-section[_ngcontent-%COMP%]     .owl-dots .owl-dot.active span, .services-section[_ngcontent-%COMP%]     .owl-dots .owl-dot:hover span {\n  background: #007bff;\n  transform: scale(1.2);\n}\n.services-section[_ngcontent-%COMP%]     .owl-prev, .services-section[_ngcontent-%COMP%]     .owl-next {\n  display: none !important;\n}\n@media all and (max-width: 768px) {\n    .owl-nav {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL0FuZ3VsYXIlMjBKUyUyMFByb2plY3QvRW50ZXJwcmlzZXMtRGFzaGJvYXJkL3NyYy9hcHAvb3VyLXNlcnZpY2VzL291ci1zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyIsIm91ci1zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDRSx5QkFBQTtBRENGO0FDQ0U7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURDSjtBQ0dBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSwrQkFBQTtBREFGO0FDRUU7RUFDRSwyQkFBQTtBREFKO0FDR0U7RUFDRSxhQUFBO0FEREo7QUNHSTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtBREROO0FDR007RUFDRSx3QkFBQTtBRERSO0FDS0k7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QURITjtBQ0tNO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FESFI7QUNLUTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0FESFY7QUNVSTtFQUNFLGFBQUE7QURSTjtBQ1dJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FEVE47QUNXTTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBRFRSO0FDWU07RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG9FQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7QURWUjtBQ1lRO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0FEVlY7QUNlUTtFQUNFLHNCQUFBO0FEYlY7QUNnQlE7RUFDRSxVQUFBO0FEZFY7QUNzQkk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0FEcEJOO0FDc0JNO0VBQ0Usa0JBQUE7RUFDQSwrQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QURwQlI7QUNzQlE7RUFDRSxVQUFBO0FEcEJWO0FDdUJRO0VBQ0UsV0FBQTtBRHJCVjtBQ3dCUTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FEdEJWO0FDeUJRO0VBQ0UsNEJBQUE7QUR2QlY7QUN5QlU7RUFDRSxjQUFBO0FEdkJaO0FDNkJJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBRDNCTjtBQzhCUTtFQUNFLG9DQUFBO0FENUJWO0FDK0JRO0VBQ0UsbUJBQUE7QUQ3QlY7QUNxQ0E7RUFFSTtJQUNFLGFBQUE7RURuQ0o7RUNzQ0U7SUFDRSx5Q0FBQTtFRHBDSjtFQ3VDRTtJQUNFLGtCQUFBO0lBQ0Esa0JBQUE7RURyQ0o7RUN1Q0k7SUFDRSxnQkFBQTtFRHJDTjtBQUNGO0FDMENBO0VBQ0UseUJBQUE7QUR4Q0Y7QUM0Q0k7RUFDRSx3QkFBQTtBRDFDTjtBQzhDSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBRDVDTjtBQytDUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBRDdDVjtBQ2dEUTtFQUVFLG1CQUFBO0VBQ0EscUJBQUE7QUQvQ1Y7QUNxREk7O0VBRUUsd0JBQUE7QURuRE47QUMyREE7RUFDRTtJQUNFLHdCQUFBO0VEeERGO0FBQ0YiLCJmaWxlIjoib3VyLXNlcnZpY2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnNlcnZpY2VzLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xufVxuLnNlcnZpY2VzLXNlY3Rpb24gLmRpdmlkZXIge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQ6ICMwMDdiZmY7XG4gIG1hcmdpbjogMXJlbSBhdXRvO1xufVxuXG4uc2VydmljZS1pdGVtIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cbi5zZXJ2aWNlLWl0ZW06aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG59XG4uc2VydmljZS1pdGVtIC5zZXJ2aWNlLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxcmVtO1xufVxuLnNlcnZpY2UtaXRlbSAuc2VydmljZS1jb250ZW50IC5zZXJ2aWNlLWljb24ge1xuICBjb2xvcjogIzAwN2JmZjtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xufVxuLnNlcnZpY2UtaXRlbSAuc2VydmljZS1jb250ZW50IC5zZXJ2aWNlLWljb246aG92ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XG59XG4uc2VydmljZS1pdGVtIC5zZXJ2aWNlLWNvbnRlbnQgLmZlYXR1cmUtbGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbi5zZXJ2aWNlLWl0ZW0gLnNlcnZpY2UtY29udGVudCAuZmVhdHVyZS1saXN0IGxpIHtcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuLnNlcnZpY2UtaXRlbSAuc2VydmljZS1jb250ZW50IC5mZWF0dXJlLWxpc3QgbGk6YmVmb3JlIHtcbiAgY29udGVudDogXCLinJNcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBjb2xvcjogIzAwN2JmZjtcbn1cbi5zZXJ2aWNlLWl0ZW0gLnNlcnZpY2UtY2Fyb3VzZWwgLmNhcm91c2VsLXNsaWRlIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5zZXJ2aWNlLWl0ZW0gLnNlcnZpY2UtY2Fyb3VzZWwgLmltYWdlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLnNlcnZpY2UtaXRlbSAuc2VydmljZS1jYXJvdXNlbCAuaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwMHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcbn1cbi5zZXJ2aWNlLWl0ZW0gLnNlcnZpY2UtY2Fyb3VzZWwgLmltYWdlLWNvbnRhaW5lciAub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgwLCAwLCAwLCAwLjcpLCB0cmFuc3BhcmVudCk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG59XG4uc2VydmljZS1pdGVtIC5zZXJ2aWNlLWNhcm91c2VsIC5pbWFnZS1jb250YWluZXIgLm92ZXJsYXkgaDQge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuLnNlcnZpY2UtaXRlbSAuc2VydmljZS1jYXJvdXNlbCAuaW1hZ2UtY29udGFpbmVyOmhvdmVyIGltZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG4uc2VydmljZS1pdGVtIC5zZXJ2aWNlLWNhcm91c2VsIC5pbWFnZS1jb250YWluZXI6aG92ZXIgLm92ZXJsYXkge1xuICBvcGFjaXR5OiAxO1xufVxuLnNlcnZpY2UtaXRlbSA6Om5nLWRlZXAgLm93bC1uYXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLnNlcnZpY2UtaXRlbSA6Om5nLWRlZXAgLm93bC1uYXYgYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCkgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG59XG4uc2VydmljZS1pdGVtIDo6bmctZGVlcCAub3dsLW5hdiBidXR0b24ub3dsLXByZXYge1xuICBsZWZ0OiAxMHB4O1xufVxuLnNlcnZpY2UtaXRlbSA6Om5nLWRlZXAgLm93bC1uYXYgYnV0dG9uLm93bC1uZXh0IHtcbiAgcmlnaHQ6IDEwcHg7XG59XG4uc2VydmljZS1pdGVtIDo6bmctZGVlcCAub3dsLW5hdiBidXR0b24gaSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG4uc2VydmljZS1pdGVtIDo6bmctZGVlcCAub3dsLW5hdiBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLnNlcnZpY2UtaXRlbSA6Om5nLWRlZXAgLm93bC1uYXYgYnV0dG9uOmhvdmVyIGkge1xuICBjb2xvcjogIzAwNTZiMztcbn1cbi5zZXJ2aWNlLWl0ZW0gOjpuZy1kZWVwIC5vd2wtZG90cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5zZXJ2aWNlLWl0ZW0gOjpuZy1kZWVwIC5vd2wtZG90cyAub3dsLWRvdCBzcGFuIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuLnNlcnZpY2UtaXRlbSA6Om5nLWRlZXAgLm93bC1kb3RzIC5vd2wtZG90LmFjdGl2ZSBzcGFuIHtcbiAgYmFja2dyb3VuZDogIzAwN2JmZjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zZXJ2aWNlLWl0ZW0gLmltYWdlLWNvbnRhaW5lciBpbWcge1xuICAgIGhlaWdodDogMzAwcHg7XG4gIH1cbiAgLnNlcnZpY2UtaXRlbSAucm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2UgIWltcG9ydGFudDtcbiAgfVxuICAuc2VydmljZS1pdGVtIC5zZXJ2aWNlLWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAycmVtIDFyZW07XG4gIH1cbiAgLnNlcnZpY2UtaXRlbSAuc2VydmljZS1jb250ZW50IC5mZWF0dXJlLWxpc3QgbGkge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbn1cbi5zZXJ2aWNlcy1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbn1cbi5zZXJ2aWNlcy1zZWN0aW9uIDo6bmctZGVlcCAub3dsLW5hdiB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5zZXJ2aWNlcy1zZWN0aW9uIDo6bmctZGVlcCAub3dsLWRvdHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zZXJ2aWNlcy1zZWN0aW9uIDo6bmctZGVlcCAub3dsLWRvdHMgLm93bC1kb3Qgc3BhbiB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIG1hcmdpbjogNXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuLnNlcnZpY2VzLXNlY3Rpb24gOjpuZy1kZWVwIC5vd2wtZG90cyAub3dsLWRvdC5hY3RpdmUgc3BhbiwgLnNlcnZpY2VzLXNlY3Rpb24gOjpuZy1kZWVwIC5vd2wtZG90cyAub3dsLWRvdDpob3ZlciBzcGFuIHtcbiAgYmFja2dyb3VuZDogIzAwN2JmZjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuLnNlcnZpY2VzLXNlY3Rpb24gOjpuZy1kZWVwIC5vd2wtcHJldixcbi5zZXJ2aWNlcy1zZWN0aW9uIDo6bmctZGVlcCAub3dsLW5leHQge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIDo6bmctZGVlcCAub3dsLW5hdiB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59IiwiLy8gc2VydmljZXMuY29tcG9uZW50LnNjc3Ncbi5zZXJ2aWNlcy1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcblxuICAuZGl2aWRlciB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYmFja2dyb3VuZDogIzAwN2JmZjtcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcbiAgfVxufVxuXG4uc2VydmljZS1pdGVtIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gIH1cblxuICAuc2VydmljZS1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuXG4gICAgLnNlcnZpY2UtaWNvbiB7XG4gICAgICBjb2xvcjogIzAwN2JmZjtcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZmVhdHVyZS1saXN0IHtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG5cbiAgICAgIGxpIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuXG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiBcIuKck1wiO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIGNvbG9yOiAjMDA3YmZmO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnNlcnZpY2UtY2Fyb3VzZWwge1xuICAgIC5jYXJvdXNlbC1zbGlkZSB7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cblxuICAgIC5pbWFnZS1jb250YWluZXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlO1xuICAgICAgfVxuXG4gICAgICAub3ZlcmxheSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgwLDAsMCwwLjcpLCB0cmFuc3BhcmVudCk7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG5cbiAgICAgICAgaDQge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDdXN0b20gbmF2aWdhdGlvbiBzdHlsZXNcbiAgOjpuZy1kZWVwIHtcbiAgICAub3dsLW5hdiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgbWFyZ2luLXRvcDogMDtcblxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCkgIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgJi5vd2wtcHJldiB7XG4gICAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYub3dsLW5leHQge1xuICAgICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGNvbG9yOiAjMDA3YmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcblxuICAgICAgICAgIGkge1xuICAgICAgICAgICAgY29sb3I6ICMwMDU2YjM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm93bC1kb3RzIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAub3dsLWRvdCB7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYWN0aXZlIHNwYW4ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDdiZmY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBzdHlsZXNcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc2VydmljZS1pdGVtIHtcbiAgICAuaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIH1cblxuICAgIC5yb3cge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnNlcnZpY2UtY29udGVudCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAycmVtIDFyZW07XG5cbiAgICAgIC5mZWF0dXJlLWxpc3QgbGkge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLy8gc2VydmljZXMuY29tcG9uZW50LnNjc3Ncbi5zZXJ2aWNlcy1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcblxuICA6Om5nLWRlZXAge1xuICAgIC8vIFJlbW92ZSBvd2wtbmF2IGNvbXBsZXRlbHlcbiAgICAub3dsLW5hdiB7XG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLy8gQ3VzdG9taXplIGRvdHNcbiAgICAub3dsLWRvdHMge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAxNXB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIC5vd2wtZG90IHtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYWN0aXZlIHNwYW4sXG4gICAgICAgICY6aG92ZXIgc3BhbiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzAwN2JmZjtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYW55IHJlbWFpbmluZyBuYXZpZ2F0aW9uIHN0eWxlc1xuICAgIC5vd2wtcHJldixcbiAgICAub3dsLW5leHQge1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIC8vIFJlc3Qgb2YgeW91ciBleGlzdGluZyBzdHlsZXMuLi5cbn1cblxuLy8gRW5zdXJlIG5hdmlnYXRpb24gYnV0dG9ucyBhcmUgaGlkZGVuIGluIGFsbCBicmVha3BvaW50c1xuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgOjpuZy1kZWVwIC5vd2wtbmF2IHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiJdfQ== */", ".owl-nav[_ngcontent-%COMP%], .owl-prev[_ngcontent-%COMP%], .owl-next[_ngcontent-%COMP%] {\n    display: none !important;\n  }"] });


/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class AuthService {
    constructor(router) {
        this.router = router;
    }
    isAuthenticated() {
        const token = localStorage.getItem('token');
        if (!token) {
            this.router.navigate(['/']);
            return false;
        }
        else {
            return true;
        }
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8757:
/*!*************************************************!*\
  !*** ./src/app/services/route-guard.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouteGuardService": () => (/* binding */ RouteGuardService)
/* harmony export */ });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ 4738);
/* harmony import */ var _shared_global_constrants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/global-constrants */ 3086);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./snackbar.service */ 5832);






class RouteGuardService {
    constructor(auth, router, snackBarServices) {
        this.auth = auth;
        this.router = router;
        this.snackBarServices = snackBarServices;
    }
    canActivate(route) {
        let expectedRoleArray = route.data;
        expectedRoleArray = expectedRoleArray.expectedRole;
        const token = localStorage.getItem('token');
        var tokenPayload;
        try {
            tokenPayload = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__.jwtDecode)(token);
        }
        catch (err) {
            localStorage.clear();
            this.router.navigate(['/']);
        }
        let checkRole = false;
        for (let i = 0; i < expectedRoleArray.length; i++) {
            if (expectedRoleArray[i] == tokenPayload.role) {
                checkRole = true;
            }
        }
        if (tokenPayload.role == 'user' || tokenPayload.role == 'admin') {
            if (this.auth.isAuthenticated() && checkRole) {
                return true;
            }
            this.snackBarServices.openSnackbar(_shared_global_constrants__WEBPACK_IMPORTED_MODULE_1__.GlobalConstants.unauthroized, _shared_global_constrants__WEBPACK_IMPORTED_MODULE_1__.GlobalConstants.error);
            this.router.navigate(['/cafe/dashboard']);
            return false;
        }
        else {
            this.router.navigate(['/']);
            localStorage.clear();
            return false;
        }
    }
}
RouteGuardService.ɵfac = function RouteGuardService_Factory(t) { return new (t || RouteGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_snackbar_service__WEBPACK_IMPORTED_MODULE_3__.SnackbarService)); };
RouteGuardService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: RouteGuardService, factory: RouteGuardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5832:
/*!**********************************************!*\
  !*** ./src/app/services/snackbar.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnackbarService": () => (/* binding */ SnackbarService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);


class SnackbarService {
    constructor(snackbar) {
        this.snackbar = snackbar;
    }
    openSnackbar(message, action) {
        if (action === 'error') {
            this.snackbar.open(message, '', {
                horizontalPosition: 'center',
                verticalPosition: 'top',
                duration: 2000,
                panelClass: ['black-snackbar']
            });
        }
        else {
            this.snackbar.open(message, '', {
                horizontalPosition: 'center',
                verticalPosition: 'top',
                duration: 2000,
                panelClass: ['green-snackbar']
            });
        }
    }
}
SnackbarService.ɵfac = function SnackbarService_Factory(t) { return new (t || SnackbarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBar)); };
SnackbarService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SnackbarService, factory: SnackbarService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3697:
/*!***********************************************************!*\
  !*** ./src/app/services/token-interceptor.interceptor.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenInterceptorInterceptor": () => (/* binding */ TokenInterceptorInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);





class TokenInterceptorInterceptor {
    constructor(router) {
        this.router = router;
    }
    intercept(request, next) {
        const token = localStorage.getItem('token');
        if (token) {
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${token}` }
            });
        }
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)((err) => {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpErrorResponse) {
                console.log(err);
                if (err.status === 401 || err.status === 403) {
                    if (this.router.url === '/') {
                    }
                    else {
                        localStorage.clear();
                        this.router.navigate(['/']);
                    }
                }
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(err);
        }));
    }
}
TokenInterceptorInterceptor.ɵfac = function TokenInterceptorInterceptor_Factory(t) { return new (t || TokenInterceptorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
TokenInterceptorInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: TokenInterceptorInterceptor, factory: TokenInterceptorInterceptor.ɵfac });


/***/ }),

/***/ 3071:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class UserService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    signUp(data) {
        return this.httpClient.post(this.url + "/user/signup", data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json')
        });
    }
    forgotPassword(data) {
        return this.httpClient.post(this.url +
            "/user/forgotPassword/", data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json')
        });
    }
    changePassword(data) {
        return this.httpClient.post(this.url +
            "/user/changePassword/", data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json')
        });
    }
    login(data) {
        return this.httpClient.post(this.url +
            "/user/login/", data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json')
        });
    }
    checkToken() {
        return this.httpClient.get(this.url + "/user");
    }
    getUser() {
        return this.httpClient.get(this.url + "/user/get");
    }
    update(data) {
        return this.httpClient.patch(this.url +
            "/user/update", data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json')
        });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5903:
/*!*********************************************************!*\
  !*** ./src/app/shared/accordion/accordion.directive.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionDirective": () => (/* binding */ AccordionDirective)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class AccordionDirective {
    constructor(router) {
        this.router = router;
        this.navlinks = [];
        setTimeout(() => this.checkOpenLinks());
    }
    closeOtherLinks(selectedLink) {
        this.navlinks.forEach((link) => {
            if (link !== selectedLink) {
                link.selected = false;
            }
        });
    }
    addLink(link) {
        this.navlinks.push(link);
    }
    removeGroup(link) {
        const index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    }
    checkOpenLinks() {
        this.navlinks.forEach((link) => {
            if (link.group) {
                const routeUrl = this.router.url;
                const currentUrl = routeUrl.split('/');
                if (currentUrl.indexOf(link.group) > 0) {
                    link.selected = true;
                    this.closeOtherLinks(link);
                }
            }
        });
    }
    ngAfterContentChecked() {
        this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd))
            .subscribe(e => this.checkOpenLinks());
    }
}
AccordionDirective.ɵfac = function AccordionDirective_Factory(t) { return new (t || AccordionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
AccordionDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: AccordionDirective, selectors: [["", "appAccordion", ""]] });


/***/ }),

/***/ 8094:
/*!***************************************************************!*\
  !*** ./src/app/shared/accordion/accordionanchor.directive.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionAnchorDirective": () => (/* binding */ AccordionAnchorDirective)
/* harmony export */ });
/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordionlink.directive */ 7725);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class AccordionAnchorDirective {
    constructor(navlink) {
        this.navlink = navlink;
    }
    onClick(e) {
        this.navlink.toggle();
    }
}
AccordionAnchorDirective.ɵfac = function AccordionAnchorDirective_Factory(t) { return new (t || AccordionAnchorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_accordionlink_directive__WEBPACK_IMPORTED_MODULE_0__.AccordionLinkDirective)); };
AccordionAnchorDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AccordionAnchorDirective, selectors: [["", "appAccordionToggle", ""]], hostBindings: function AccordionAnchorDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccordionAnchorDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } } });


/***/ }),

/***/ 7725:
/*!*************************************************************!*\
  !*** ./src/app/shared/accordion/accordionlink.directive.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionLinkDirective": () => (/* binding */ AccordionLinkDirective)
/* harmony export */ });
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion.directive */ 5903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class AccordionLinkDirective {
    constructor(nav) {
        this._selected = false;
        this.nav = nav;
    }
    get selected() {
        return this._selected;
    }
    set selected(value) {
        this._selected = value;
        if (value) {
            this.nav.closeOtherLinks(this);
        }
    }
    ngOnInit() {
        this.nav.addLink(this);
    }
    ngOnDestroy() {
        this.nav.removeGroup(this);
    }
    toggle() {
        this.selected = !this.selected;
    }
}
AccordionLinkDirective.ɵfac = function AccordionLinkDirective_Factory(t) { return new (t || AccordionLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_accordion_directive__WEBPACK_IMPORTED_MODULE_0__.AccordionDirective)); };
AccordionLinkDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AccordionLinkDirective, selectors: [["", "appAccordionLink", ""]], hostVars: 2, hostBindings: function AccordionLinkDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("selected", ctx.selected);
    } }, inputs: { group: "group", selected: "selected" } });


/***/ }),

/***/ 8836:
/*!*******************************************!*\
  !*** ./src/app/shared/accordion/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionAnchorDirective": () => (/* reexport safe */ _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__.AccordionAnchorDirective),
/* harmony export */   "AccordionDirective": () => (/* reexport safe */ _accordion_directive__WEBPACK_IMPORTED_MODULE_2__.AccordionDirective),
/* harmony export */   "AccordionLinkDirective": () => (/* reexport safe */ _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__.AccordionLinkDirective)
/* harmony export */ });
/* harmony import */ var _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordionanchor.directive */ 8094);
/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionlink.directive */ 7725);
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.directive */ 5903);





/***/ }),

/***/ 3086:
/*!*********************************************!*\
  !*** ./src/app/shared/global-constrants.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalConstants": () => (/* binding */ GlobalConstants)
/* harmony export */ });
class GlobalConstants {
}
//message
GlobalConstants.genericError = "something went wrong , please try again later .";
GlobalConstants.unauthroized = "you are not authorized persion to access this page";
GlobalConstants.productExistError = "product already exists";
GlobalConstants.productAdded = "Product Added successfully";
//rejax
GlobalConstants.nameRegex = "[a-zA-Z0-9]*";
GlobalConstants.emailRegex = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";
GlobalConstants.contactNumberRegex = "[e0-9]{10,10}$";
//variable
GlobalConstants.error = "error";


/***/ }),

/***/ 2020:
/*!*******************************************!*\
  !*** ./src/app/shared/material-module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/autocomplete */ 3188);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button-toggle */ 1959);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ 6199);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ 1196);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ 3346);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-bar */ 833);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/radio */ 8390);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/slider */ 1859);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/sort */ 4316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/tabs */ 2379);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tooltip */ 89);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/stepper */ 7650);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/badge */ 178);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 3672);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/table */ 3865);
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/cdk/accordion */ 3134);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/a11y */ 4128);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/cdk/bidi */ 1588);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/overlay */ 4244);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/cdk/platform */ 4390);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/cdk/observers */ 5837);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/portal */ 4476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);










































/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */
class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__.MatAutocompleteModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__.MatBottomSheetModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChipsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__.MatBadgeModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__.MatSidenavModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__.MatSlideToggleModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__.MatSliderModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__.MatSortModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__.MatStepperModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatNativeDateModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__.CdkTableModule,
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_35__.A11yModule,
        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_36__.BidiModule,
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_37__.CdkAccordionModule,
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_38__.ObserversModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__.OverlayModule,
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_40__.PlatformModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__.PortalModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__.MatAutocompleteModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__.MatBottomSheetModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChipsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__.MatBadgeModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__.MatSidenavModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__.MatSlideToggleModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__.MatSliderModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__.MatSortModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__.MatStepperModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatNativeDateModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__.CdkTableModule,
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_35__.A11yModule,
        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_36__.BidiModule,
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_37__.CdkAccordionModule,
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_38__.ObserversModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__.OverlayModule,
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_40__.PlatformModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__.PortalModule] }); })();


/***/ }),

/***/ 1534:
/*!**************************************!*\
  !*** ./src/app/shared/menu-items.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuItems": () => (/* binding */ MenuItems)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

const MENUITEMS = [
    { state: 'dashboard', name: 'dashboard', icon: 'dashboard', role: '' },
    { state: 'Category', name: 'manage Category', icon: 'category', role: 'admin' },
    { state: 'Product', name: 'manage Product', icon: 'inventory_2', role: 'admin' },
    { state: 'order', name: 'manage Order', icon: 'list_alt', role: '' },
    { state: 'bill', name: 'View Bill', icon: 'import_contacts', role: '' },
    { state: 'user', name: 'View User', icon: 'people', role: 'admin' }
];
class MenuItems {
    getMenuitems() {
        return MENUITEMS;
    }
}
MenuItems.ɵfac = function MenuItems_Factory(t) { return new (t || MenuItems)(); };
MenuItems.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MenuItems, factory: MenuItems.ɵfac });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion */ 8836);
/* harmony import */ var _menu_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-items */ 1534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [_menu_items__WEBPACK_IMPORTED_MODULE_1__.MenuItems] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_accordion__WEBPACK_IMPORTED_MODULE_0__.AccordionAnchorDirective,
        _accordion__WEBPACK_IMPORTED_MODULE_0__.AccordionLinkDirective,
        _accordion__WEBPACK_IMPORTED_MODULE_0__.AccordionDirective], exports: [_accordion__WEBPACK_IMPORTED_MODULE_0__.AccordionAnchorDirective,
        _accordion__WEBPACK_IMPORTED_MODULE_0__.AccordionLinkDirective,
        _accordion__WEBPACK_IMPORTED_MODULE_0__.AccordionDirective] }); })();


/***/ }),

/***/ 570:
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupComponent": () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _shared_global_constrants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/global-constrants */ 3086);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/login.component */ 8458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ 3071);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/snackbar.service */ 5832);
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-ui-loader */ 3085);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8281);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 7317);

















function SignupComponent_mat_error_11_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "This field is mandatory. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_11_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "This field is invalid. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SignupComponent_mat_error_11_span_1_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SignupComponent_mat_error_11_span_2_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.signupForm.controls.name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.signupForm.controls.name.errors.pattern);
} }
function SignupComponent_mat_error_16_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "This field is mandatory. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_16_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "This field is invalid. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SignupComponent_mat_error_16_span_1_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SignupComponent_mat_error_16_span_2_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.signupForm.controls.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.signupForm.controls.email.errors.pattern);
} }
function SignupComponent_mat_error_21_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "This field is mandatory. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_21_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "This field is invalid. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SignupComponent_mat_error_21_span_1_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SignupComponent_mat_error_21_span_2_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.signupForm.controls.contactNumber.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.signupForm.controls.contactNumber.errors.pattern);
} }
function SignupComponent_mat_error_26_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "This field is mandatory. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_26_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "This field is invalid. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SignupComponent_mat_error_26_span_1_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SignupComponent_mat_error_26_span_2_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.signupForm.controls.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.signupForm.controls.password.errors.pattern);
} }
class SignupComponent {
    constructor(formBuilder, router, userServices, snackbarservices, dialogRef, ngxService, dialog) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userServices = userServices;
        this.snackbarservices = snackbarservices;
        this.dialogRef = dialogRef;
        this.ngxService = ngxService;
        this.dialog = dialog;
        this.signupForm = _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup;
    }
    ngOnInit() {
        this.signupForm = this.formBuilder.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(_shared_global_constrants__WEBPACK_IMPORTED_MODULE_0__.GlobalConstants.emailRegex)]],
            contactNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(_shared_global_constrants__WEBPACK_IMPORTED_MODULE_0__.GlobalConstants.contactNumberRegex)]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
    }
    loginAction() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogConfig();
        dialogConfig.width = "500px";
        this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent, dialogConfig);
    }
    handleSubmit() {
        this.ngxService.start();
        var formData = this.signupForm.value;
        var data = {
            name: formData.name,
            email: formData.email,
            contactNumber: formData.contactNumber,
            password: formData.password
        };
        this.userServices.signUp(data).subscribe((Response) => {
            this.ngxService.stop();
            this.dialogRef.close();
            this.responseMessage = Response === null || Response === void 0 ? void 0 : Response.message;
            this.snackbarservices.openSnackbar(this.responseMessage, "");
            this.router.navigate(['/']);
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = _shared_global_constrants__WEBPACK_IMPORTED_MODULE_0__.GlobalConstants.genericError;
            }
            this.snackbarservices.openSnackbar(this.responseMessage, _shared_global_constrants__WEBPACK_IMPORTED_MODULE_0__.GlobalConstants.error);
        });
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_8__.NgxUiLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog)); };
SignupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 37, vars: 6, consts: [["color", "primary"], ["fxlayout", "row"], [1, "tille-center"], [1, "mat-typography"], [3, "formGroup"], ["fxFlex", "", "fxLayout", "column"], ["appearance", "fill", "fxFlex", ""], ["matInput", "", "formControlName", "name", "required", ""], [4, "ngIf"], ["matInput", "", "formControlName", "email", "required", ""], ["matInput", "", "formControlName", "contactNumber", "required", ""], ["matInput", "", "formControlName", "password", "required", ""], ["align", "center"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled", "click"], ["mat-raised-button", "", "colour", "primary", "mat-dialog-close", ""], [2, "margin-top", "10px", "text-align", "center"], ["onmouseover", "this.style.color='blue'", "onmouseout", "this.style.color='black'", 2, "cursor", "pointer", 3, "click"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "mat-toolbar-row", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-dialog-content", 3)(5, "form", 4)(6, "div", 5)(7, "mat-form-field", 6)(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, SignupComponent_mat_error_11_Template, 3, 2, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-form-field", 6)(13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, SignupComponent_mat_error_16_Template, 3, 2, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-form-field", 6)(18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, SignupComponent_mat_error_21_Template, 3, 2, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-form-field", 6)(23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, SignupComponent_mat_error_26_Template, 3, 2, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-dialog-actions", 12)(28, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_28_listener() { return ctx.handleSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 15)(33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "If you are already Register ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SignupComponent_Template_a_click_35_listener() { return ctx.loginAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, " Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.signupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.signupForm.controls.name.touched && ctx.signupForm.controls.name.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.signupForm.controls.email.touched && ctx.signupForm.controls.email.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.signupForm.controls.contactNumber.touched && ctx.signupForm.controls.contactNumber.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.signupForm.controls.password.touched && ctx.signupForm.controls.password.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !(ctx.signupForm.valid && ctx.signupForm.dirty));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbar, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarRow, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose], styles: [".mat-toolbar[_ngcontent-%COMP%] {\n  margin: -24px;\n  width: auto;\n  margin-bottom: 10px;\n}\n\n.title-center[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  text-align: center;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL0FuZ3VsYXIlMjBKUyUyMFByb2plY3QvRW50ZXJwcmlzZXMtRGFzaGJvYXJkL3NyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGIiwiZmlsZSI6InNpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdG9vbGJhcntcbiAgbWFyZ2luOiAtMjRweDtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50aXRsZS1jZW50ZXJ7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cbi5tYXQtZm9ybS1maWVsZHtcbiAgcGFkZGluZzogNXB4O1xuXG59XG4iLCIubWF0LXRvb2xiYXIge1xuICBtYXJnaW46IC0yNHB4O1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRpdGxlLWNlbnRlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIHBhZGRpbmc6IDVweDtcbn0iXX0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: false,
    apiUrl: 'https://enterprises-dashboard-api.onrender.com' // Your development API URL
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map