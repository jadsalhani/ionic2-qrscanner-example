import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ScanPage } from "../scan/scan";

@Component({
  selector: 'page-event-list',
  templateUrl: 'event-list.html'
})
export class EventListPage {
  public events: Array<{ id: number, title: string }> = [];
  constructor(private _nav: NavController) { }

  ionViewDidLoad() {
    this.getEvents();
  }

  private getEvents() {
    for (var index = 0; index < 10; index++) {
      this.events.push({ id: index, title: "Test" + index });
    }
  }

  public scanForEvent(id: number, title: string) {
    this._nav.push(ScanPage, {
      eventId: id,
      eventTitle: title
    });
  }

}
