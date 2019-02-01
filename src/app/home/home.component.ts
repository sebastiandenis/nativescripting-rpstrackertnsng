import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { device } from "platform";
import { Store } from "../core/state/app-store";
import { PtItem } from "../core/models/domain";

@Component({
  selector: "ns-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public hidden = true;
  public items$ = this.store.select<PtItem[]>("backlogItems");

  constructor(private page: Page, private store: Store) {
    this.page.actionBarHidden = this.hidden;
    this.page.backgroundSpanUnderStatusBar = true;

  }

  ngOnInit(): void {}

  showHideActionBar(): void {
    this.hidden = !this.hidden;
    this.page.actionBarHidden = this.hidden;
  }
}
