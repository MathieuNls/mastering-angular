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
var http_1 = require('@angular/http');
var movie_1 = require('../models/movie');
require('rxjs/Rx');
var IMDBAPIService = (function () {
    function IMDBAPIService(http) {
        this.http = http;
        this.moviesUrl = "app/marvel-cinematic-universe.json";
    }
    /**
     * Return an Observable to a Movie matching id
     * @param  {number}            id
     * @return {Observable<Movie>}
     */
    IMDBAPIService.prototype.fecthOneById = function (id) {
        console.log('fecthOneById', id);
        return this.http.get(this.moviesUrl)
            .flatMap(function (res) { return res.json().movies; })
            .filter(function (movie) {
            console.log("filter", movie);
            return (movie.movie_id === id);
        })
            .map(function (movie) {
            console.log("map", movie);
            return new movie_1.Movie(movie.movie_id, movie.title, movie.phase, movie.category_name, movie.release_year, movie.running_time, movie.rating_name, movie.disc_format_name, movie.number_discs, movie.viewing_format_name, movie.aspect_ratio_name, movie.status, movie.release_date, movie.budget, movie.gross, movie.time_stamp);
        });
    };
    IMDBAPIService.prototype.fetchByField = function (field, value) {
        console.log('fetchByField', field, value);
        return this.http.get(this.moviesUrl)
            .flatMap(function (res) { return res.json().movies; })
            .filter(function (movie) {
            console.log("filter", movie);
            var now = new Date().getTime();
            while (new Date().getTime() < now + 2000) { }
            return (movie[movie_1.MovieFields[field]] === value);
        })
            .map(function (movie) {
            console.log("map", movie);
            return new movie_1.Movie(movie.movie_id, movie.title, movie.phase, movie.category_name, movie.release_year, movie.running_time, movie.rating_name, movie.disc_format_name, movie.number_discs, movie.viewing_format_name, movie.aspect_ratio_name, movie.status, movie.release_date, movie.budget, movie.gross, movie.time_stamp);
        });
    };
    IMDBAPIService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], IMDBAPIService);
    return IMDBAPIService;
}());
exports.IMDBAPIService = IMDBAPIService;
//# sourceMappingURL=../../imdbapi.service.js.map