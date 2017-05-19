"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var _1 = require('./app/');
var imdbapi_service_1 = require('./app/services/imdbapi.service');
var http_1 = require('@angular/http');
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(_1.AngularObservableAppComponent, [imdbapi_service_1.IMDBAPIService, http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map