import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { device } from "platform";

@Component({
  selector: "ns-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public hidden = true;
  public myAppText = "Hello";
  constructor(private page: Page) {
    this.page.actionBarHidden = this.hidden;
    this.page.backgroundSpanUnderStatusBar = true;
    this.myAppText = device.language;
  }

  ngOnInit(): void {}

  showHideActionBar(): void {
    this.hidden = !this.hidden;
    this.page.actionBarHidden = this.hidden;
  }
}
