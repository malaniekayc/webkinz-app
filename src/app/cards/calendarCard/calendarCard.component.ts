import { Component, Input } from "@angular/core";

@Component({
    selector: "wk-calendarCard",
    templateUrl: "calendarCard.component.html",
    styleUrls: ["calendarCard.component.css"]
})

export class CalendarCardComponent {
    @Input() title: string;
    @Input() date: string;
    @Input() description: string;

    constructor() {
        this.title = "Missing Title";
        this.date = "Missing Date";
        this.description = "Missing Description";
    }
}