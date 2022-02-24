import { Component, Input } from "@angular/core";

@Component({
    selector: "wk-parentCard",
    templateUrl: "parentCard.component.html",
    styleUrls: ["parentCard.component.css"]
})

export class ParentCardComponent {
    @Input() image: string;
    @Input() title: string;
    @Input() desc: string;

    constructor() {
        this.image = " ";
        this.title = "NO TITLE";
        this.desc = " ";
    }

}