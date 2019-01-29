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

    const fakeBacklogItems: PtItem[] = [
      {
        id: 1,
        title: "item 1",
        dateCreated: new Date(),
        dateModified: new Date()
      },
      {
        id: 2,
        title: "item 2",
        dateCreated: new Date(),
        dateModified: new Date()
      }
    ];

    this.store.set("backlogItems", fakeBacklogItems);
  }

  ngOnInit(): void {}

  showHideActionBar(): void {
    this.hidden = !this.hidden;
    this.page.actionBarHidden = this.hidden;
  }
}
