"use strict";
var Movie = (function () {
    function Movie(_movie_id, _title, _phase, _category_name, _release_year, _running_time, _rating_name, _disc_format_name, _number_discs, _viewing_format_name, _aspect_ratio_name, _status, _release_date, _budget, _gross, _time_stamp) {
        var _this = this;
        this._movie_id = _movie_id;
        this._title = _title;
        this._phase = _phase;
        this._category_name = _category_name;
        this._release_year = _release_year;
        this._running_time = _running_time;
        this._rating_name = _rating_name;
        this._disc_format_name = _disc_format_name;
        this._number_discs = _number_discs;
        this._viewing_format_name = _viewing_format_name;
        this._aspect_ratio_name = _aspect_ratio_name;
        this._status = _status;
        this._release_date = _release_date;
        this._budget = _budget;
        this._gross = _gross;
        this._time_stamp = _time_stamp;
        this.toString = function () {
            return "Movie (movie_id: " + _this._movie_id + ",\n        title: " + _this._title + ",\n        phase: " + _this._phase + ",\n        category_name: " + _this._category_name + ",\n        release_year: " + _this._release_year + ",\n        running_time: " + _this._running_time + ",\n        rating_name: " + _this._rating_name + ",\n        disc_format_name: " + _this._disc_format_name + ",\n        number_discs: " + _this._number_discs + ",\n        viewing_format_name: " + _this._viewing_format_name + ",\n        aspect_ratio_name: " + _this._aspect_ratio_name + ",\n        status: " + _this._status + ",\n        release_date: " + _this._release_date + ",\n        budget: " + _this._budget + ",\n        gross: " + _this._gross + ",\n        time_stamp: " + _this._time_stamp + ")";
        };
    }
    Object.defineProperty(Movie.prototype, "movie_id", {
        get: function () {
            return this._movie_id;
        },
        set: function (movie_id) {
            this._movie_id = movie_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Movie.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (title) {
            this._title = title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Movie.prototype, "phase", {
        get: function () {
            return this._phase;
        },
        set: function (phase) {
            this._phase = phase;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Movie.prototype, "category_name", {
        get: function () {
            return this._category_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Movie.prototype, "release_year", {
        get: function () {
            return this._release_year;
        },
        set: function (release_year) {
            this._release_year = release_year;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Movie.prototype, "running_time", {
        get: function () {
            return this._running_time;
        },
        set: function (running_time) {
            this._running_time = running_time;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Movie.prototype, "rating_name", {
        get: function () {
            return this._rating_name;
        },
        set: function (rating_name) {
            this._rating_name = rating_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Movie.prototype, "disc_format_name", {
        get: function () {
            return this._disc_format_name;
        },
        set: function (disc_format_name) {
            this._disc_format_name = disc_format_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Movie.prototype, "number_discs", {
        get: function () {
            return this._number_discs;
        },
        set: function (number_discs) {
            this._number_discs = number_discs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Movie.prototype, "viewing_format_name", {
        get: function () {
            return this._viewing_format_name;
        },
        set: function (viewing_format_name) {
            this._viewing_format_name = viewing_format_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Movie.prototype, "aspect_ratio_name", {
        get: function () {
            return this._aspect_ratio_name;
        },
        set: function (aspect_ratio_name) {
            this._aspect_ratio_name = aspect_ratio_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Movie.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (status) {
            this._status = status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Movie.prototype, "release_date", {
        get: function () {
            return this._release_date;
        },
        set: function (release_date) {
            this._release_date = release_date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Movie.prototype, "budget", {
        get: function () {
            return this._budget;
        },
        set: function (budget) {
            this._budget = budget;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Movie.prototype, "gross", {
        get: function () {
            return this._gross;
        },
        set: function (gross) {
            this._gross = gross;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Movie.prototype, "time_stamp", {
        get: function () {
            return this._time_stamp;
        },
        set: function (time_stamp) {
            this._time_stamp = time_stamp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Movie.prototype, "category_nam", {
        set: function (category_name) {
            this._category_name = category_name;
        },
        enumerable: true,
        configurable: true
    });
    return Movie;
}());
exports.Movie = Movie;
(function (MovieFields) {
    MovieFields[MovieFields["movie_id"] = 0] = "movie_id";
    MovieFields[MovieFields["title"] = 1] = "title";
    MovieFields[MovieFields["phase"] = 2] = "phase";
    MovieFields[MovieFields["category_name"] = 3] = "category_name";
    MovieFields[MovieFields["release_year"] = 4] = "release_year";
    MovieFields[MovieFields["running_time"] = 5] = "running_time";
    MovieFields[MovieFields["rating_name"] = 6] = "rating_name";
    MovieFields[MovieFields["disc_format_name"] = 7] = "disc_format_name";
    MovieFields[MovieFields["number_discs"] = 8] = "number_discs";
    MovieFields[MovieFields["viewing_format_name"] = 9] = "viewing_format_name";
    MovieFields[MovieFields["aspect_ratio_name"] = 10] = "aspect_ratio_name";
    MovieFields[MovieFields["status"] = 11] = "status";
    MovieFields[MovieFields["release_date"] = 12] = "release_date";
    MovieFields[MovieFields["budget"] = 13] = "budget";
    MovieFields[MovieFields["gross"] = 14] = "gross";
    MovieFields[MovieFields["time_stamp"] = 15] = "time_stamp";
})(exports.MovieFields || (exports.MovieFields = {}));
var MovieFields = exports.MovieFields;
//# sourceMappingURL=../../movie.js.map