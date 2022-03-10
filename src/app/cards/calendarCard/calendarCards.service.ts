import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CalendarCardModel } from "./calendarCard.model";

@Injectable({
    providedIn: 'root'
})
export class CalendarCardService {
    private baseUrl:string = 'https://webkins-app-mkc-default-rtdb.firebaseio.com/';
    private calendarCardsEndPoint:string = 'calendarCards.json';

    constructor(private http: HttpClient) {

    }

    public getCalendarCards() {
        return this.http.get<CalendarCardModel[]>(this.baseUrl + this.calendarCardsEndPoint);
    }
}