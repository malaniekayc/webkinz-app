import { Component } from "@angular/core";
import { mockParentCardList } from "../cards/parentCard/mockParentCardList";
import { ParentCardModel } from "../cards/parentCard/parentCard.model";

@Component({
    selector: 'wk-parents-layout',
    templateUrl: 'parents-layout.component.html',
    styleUrls: ['parents-layout.component.css']
})

export class ParentsLayoutComponent {
    parentCards: ParentCardModel [] = [];

    constructor() {
        for (var parentCard of mockParentCardList) {
            console.log(parentCard);
            this.parentCards.push(parentCard);
        }
    }

}