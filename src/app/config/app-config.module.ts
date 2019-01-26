import { NgModule, InjectionToken } from "@angular/core";
import { environment } from "../environment/environment";
import { AppConfig } from "../core/models/core/app-config.model";
import { LoggingLevelEnum } from "../core/models/enums";

// it doesn't work
// const appConfig: AppConfig = <AppConfig>require(environment.appConfigFile);


const appConfig: AppConfig = <AppConfig>(environment.appConfig);

export const APP_CONFIG = new InjectionToken<AppConfig>("app.config");

@NgModule({
  providers: [
    {
      provide: APP_CONFIG,
      useValue: appConfig
    }
  ]
})
export class AppConfigModule {}
