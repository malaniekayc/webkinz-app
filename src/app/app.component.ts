import { Component } from '@angular/core';
import { CalendarCardModel } from './cards/calendarCard/calendarCard.model';
// import { mock_calendarCard_list } from './cards/calendarCard/mock_calendarCard_list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webkinz-malanie-cline';
  calendarCards: CalendarCardModel [] = [];

  constructor() {
    
  }
}
