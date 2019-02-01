"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var app_module_1 = require("./app/app.module");
var app_events_1 = require("./app/globals/app-events");
app_events_1.setAppEvents();
console.log("main before bootstrap");
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
console.log("main after bootstrap");
