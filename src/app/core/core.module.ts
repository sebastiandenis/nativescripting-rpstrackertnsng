import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthService, LoggerService } from "./services";
import {  } from "./services/logger.service";
import { SERVICES } from "./services";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
   providers: [...SERVICES]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error("CoreModule has already been loaded. Import CoreModule into the AppModule only.");
    }
  }
}
