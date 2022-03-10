import { Component } from "@angular/core";
import { CalendarCardModel } from "../cards/calendarCard/calendarCard.model";
import { CalendarCardService } from "../cards/calendarCard/calendarCards.service";

@Component ({
    selector: 'wk-home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})
export class HomeLayoutComponent {
    calendarCards: CalendarCardModel [] = [];

  constructor( 
    private calendarCardService: CalendarCardService,
  )
  {}

  ngOnInit(): void {
    this.calendarCardService.getCalendarCards().subscribe((data) => {
      console.log(data);
      for (var calendarCard of data) {
        this.calendarCards.push(calendarCard);
      }
    })
  }

}