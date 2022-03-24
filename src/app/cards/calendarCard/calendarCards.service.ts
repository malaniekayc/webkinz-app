import { Injectable } from "@angular/core";
import { CalendarCardModel } from "./calendarCard.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
    providedIn: 'root'
})
export class CalendarCardService {

    constructor(private db:AngularFireDatabase) {
    }

    public getCalendarCards() {
        return this.db.list<CalendarCardModel>("calendarCards").valueChanges();
    }
}