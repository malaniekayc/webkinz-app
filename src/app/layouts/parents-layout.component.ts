import { Component } from "@angular/core";
import { mockParentCardList } from "../cards/parentCard/mockParentCardList";
import { ParentCardModel } from "../cards/parentCard/parentCard.model";
import { ParentCardService } from "../cards/parentCard/parentCard.service";

@Component({
    selector: 'wk-parents-layout',
    templateUrl: 'parents-layout.component.html',
    styleUrls: ['parents-layout.component.css']
})

export class ParentsLayoutComponent {
    parentCards: ParentCardModel [] = [];

    constructor(
        private parentCardService: ParentCardService
    ){}
    
    ngOnInit(): void {
        this.parentCardService.getParentCards().subscribe((data) => {
            for (var parentCard of data) {
                this.parentCards.push(parentCard);
            }
        })
    }
}