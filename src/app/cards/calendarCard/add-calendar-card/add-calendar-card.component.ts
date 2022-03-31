import { Component, OnInit } from '@angular/core';
import { CalendarCardModel } from '../calendarCard.model';
import { CalendarCardService } from '../calendarCards.service';

@Component({
  selector: 'wk-add-calendar-card',
  templateUrl: './add-calendar-card.component.html',
  styleUrls: ['./add-calendar-card.component.css']
})
export class AddCalendarCardComponent implements OnInit {

  constructor(private ps:CalendarCardService) { }

  ngOnInit(): void {
  }

  addEvent(event: CalendarCardModel){
    this.ps.addEvent(event)
  }

}
