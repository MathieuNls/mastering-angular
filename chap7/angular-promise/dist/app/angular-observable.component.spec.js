"use strict";
var testing_1 = require('@angular/core/testing');
var angular_observable_component_1 = require('../app/angular-observable.component');
testing_1.beforeEachProviders(function () { return [angular_observable_component_1.AngularObservableAppComponent]; });
testing_1.describe('App: AngularObservable', function () {
    testing_1.it('should create the app', testing_1.inject([angular_observable_component_1.AngularObservableAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'angular-observable works!\'', testing_1.inject([angular_observable_component_1.AngularObservableAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('angular-observable works!');
    }));
});
//# sourceMappingURL=../angular-observable.component.spec.js.map