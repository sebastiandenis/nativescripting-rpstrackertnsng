import { NgModule, Optional, SkipSelf, ErrorHandler } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthService, LoggerService } from "./services";
import {} from "./services/logger.service";
import { SERVICES } from "./services";
import { RpsErrorHandler } from "./helpers";
import { Store } from "./state/app-store";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
  providers: [
    {
      provide: ErrorHandler,
      useClass: RpsErrorHandler
    },
    ...SERVICES,
    Store
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        "CoreModule has already been loaded. Import CoreModule into the AppModule only."
      );
    }
  }
}
