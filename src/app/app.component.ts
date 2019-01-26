import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MessageObject } from "./core/types/message-object.model";
import { TranslateService } from "@ngx-translate/core";
import { device } from "platform";
 import { LoggerService } from "./core/services/logger.service";

@Component({
  selector: "ns-root",
  moduleId: module.id,
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  public myAppText = "Hello";
  public myStr = "nothing";

  constructor(
    private translateService: TranslateService,
    private http: HttpClient,
    private loggerService: LoggerService
  ) {
    console.log("App Component constructor");
    this.translateService.setDefaultLang("en");
    this.translateService.use(device.language);

    // console.logColor("RPS message log");
    // console.warnColor("RPS message warning");
    // console.errorColor("RPS message error");

    this.loggerService.log("RPS message log");
    this.loggerService.warn("RPS message warning");
    this.loggerService.error("RPS message error");
  }

  ngOnInit() {
    this.fetchApi();
  }

  fetchApi() {
    this.http
      .get<MessageObject>("http://192.168.8.102:3000/api")
      .subscribe((str: MessageObject) => {
        console.log("RESPONSE RECEIVED");
        this.myStr = str.message;
      });
  }
}
