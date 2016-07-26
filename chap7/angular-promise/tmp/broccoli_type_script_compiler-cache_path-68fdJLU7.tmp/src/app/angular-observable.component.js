"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var imdbapi_service_1 = require('./services/imdbapi.service');
var movie_1 = require('./models/movie');
var AngularObservableAppComponent = (function () {
    function AngularObservableAppComponent(IMDBAPI) {
        var _this = this;
        this.IMDBAPI = IMDBAPI;
        this.title = 'angular-observable works!';
        this.movies = [];
        this.error = false;
        this.finished = false;
        var imdbSubscription = this.IMDBAPI.fetchByField(movie_1.MovieFields.release_year, 2015).subscribe(function (value) {
            _this.movies.push(value);
            console.log("Component", value);
            if (_this.movies.length > 2) {
                imdbSubscription.unsubscribe();
            }
        }, function (error) { return _this.error = true; }, function () { return _this.finished = true; });
    }
    AngularObservableAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'angular-observable-app',
            templateUrl: 'angular-observable.component.html',
            providers: [imdbapi_service_1.IMDBAPIService],
            styleUrls: ['angular-observable.component.css']
        }), 
        __metadata('design:paramtypes', [imdbapi_service_1.IMDBAPIService])
    ], AngularObservableAppComponent);
    return AngularObservableAppComponent;
}());
exports.AngularObservableAppComponent = AngularObservableAppComponent;
//# sourceMappingURL=../angular-observable.component.js.map