import { Component } from "@angular/core";
import { CalendarCardModel } from "../cards/calendarCard/calendarCard.model";
import { mock_calendarCard_list } from '../cards/calendarCard/mock_calendarCard_list';

@Component ({
    selector: 'wk-home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})
export class HomeLayoutComponent {
    calendarCards: CalendarCardModel [] = [];

  constructor() {
    for (var calendarCard of mock_calendarCard_list) {
      console.log(calendarCard);
      this.calendarCards.push(calendarCard);
    }
  }

}