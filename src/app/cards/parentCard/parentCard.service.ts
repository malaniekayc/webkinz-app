import { Injectable } from "@angular/core";
import { ParentCardModel } from "./parentCard.model";
import { AngularFireDatabase } from "@angular/fire/compat/database";

@Injectable({
    providedIn: 'root'
})
export class ParentCardService {
    

    constructor(private db:AngularFireDatabase) {}

    public getParentCards() {
        return this.db.list<ParentCardModel>("parentCards").valueChanges();
    }
}