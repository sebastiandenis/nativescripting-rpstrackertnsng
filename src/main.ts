// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app/app.module";
import { AppOptions } from "nativescript-angular/platform-common";
import { setAppEvents } from "./app/globals/app-events";

setAppEvents();
console.log("main before bootstrap");
platformNativeScriptDynamic().bootstrapModule(AppModule);
console.log("main after bootstrap");
