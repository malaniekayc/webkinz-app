import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "wk-calendarCard",
    templateUrl: "calendarCard.component.html",
    styleUrls: ["calendarCard.component.css"]
})

export class CalendarCardComponent implements OnInit {
    @Input() title: string;
    @Input() date: string;
    @Input() description: string;

    constructor() {
        this.title = "Missing Title";
        this.date = "Missing Date";
        this.description = "Missing Description";
    }
    ngOnInit(): void {
        
    }
}