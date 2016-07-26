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
        /**
         * Private member storing pending promises
         */
        this.promises = [];
    }
    /**
     * Return a Promise to a Movie matching id
     * @param  {number}            id
     * @return {Promise<Movie>}
     */
    IMDBAPIService.prototype.fecthOneById = function (id) {
        console.log('fecthOneById', id);
        return this.http.get(this.moviesUrl)
            .flatMap(function (res) { return res.json().movies; })
            .filter(function (movie) {
            console.log("filter", movie);
            return (movie.movie_id === id);
        })
            .toPromise()
            .then(function (movie) {
            console.log("map", movie);
            return new movie_1.Movie(movie.movie_id, movie.title, movie.phase, movie.category_name, movie.release_year, movie.running_time, movie.rating_name, movie.disc_format_name, movie.number_discs, movie.viewing_format_name, movie.aspect_ratio_name, movie.status, movie.release_date, movie.budget, movie.gross, movie.time_stamp);
        });
    };
    /**
     * Register one promess for field/value. Returns this
     * for chaining i.e.
     *
     *  byField(Y, X)
     * .or(...)
     * .fetch()
     *
     * @param  {MovieFields}    field
     * @param  {any}            value
     * @return {IMDBAPIService}
     */
    IMDBAPIService.prototype.byField = function (field, value) {
        this.promises.push(this.fetchByField(field, value));
        return this;
    };
    /**
     * Convenient method to make the calls more readable, i.e.
     *
     *  byField(Y, X)
     * .or(...)
     * .fetch()
     *
     * instead of
     *
     *  byField(Y, X)
     * .byField(...)
     * .fetch()
     *
     * @param  {MovieFields}    field
     * @param  {any}            value
     * @return {IMDBAPIService}
     */
    IMDBAPIService.prototype.or = function (field, value) {
        return this.byField(field, value);
    };
    /**
     * Join all the promises and return the aggregated result.
     *
     * @return {Promise<Movie[]>}
     */
    IMDBAPIService.prototype.fetch = function () {
        return Promise.all(this.promises).then(function (results) {
            //result is am array of movie arrays. One array per 
            //promise. We need to flatten it.
            return [].concat.apply([], results);
        });
    };
    IMDBAPIService.prototype.fetchByField = function (field, value) {
        console.log('fetchByField', field, value);
        return this.http.get(this.moviesUrl)
            .map(function (res) { return res.json().movies.filter(function (movie) {
            return (movie[movie_1.MovieFields[field]] === value);
        }); })
            .toPromise()
            .then(function (jsonMovies) {
            console.log("map", jsonMovies);
            var movies = [];
            for (var i = 0; i < jsonMovies.length; i++) {
                movies.push(new movie_1.Movie(jsonMovies[i].movie_id, jsonMovies[i].title, jsonMovies[i].phase, jsonMovies[i].category_name, jsonMovies[i].release_year, jsonMovies[i].running_time, jsonMovies[i].rating_name, jsonMovies[i].disc_format_name, jsonMovies[i].number_discs, jsonMovies[i].viewing_format_name, jsonMovies[i].aspect_ratio_name, jsonMovies[i].status, jsonMovies[i].release_date, jsonMovies[i].budget, jsonMovies[i].gross, jsonMovies[i].time_stamp));
            }
            return movies;
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