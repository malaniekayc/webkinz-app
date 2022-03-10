import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ParentCardModel } from "./parentCard.model";

@Injectable({
    providedIn: 'root'
})
export class ParentCardService {
    private baseURL: string = 'https://webkins-app-mkc-default-rtdb.firebaseio.com/';
    private parentCardsEndPoint: string = 'parentCards.json';

    constructor(private http: HttpClient) {}

    public getParentCards() {
        return this.http.get<ParentCardModel[]>(this.baseURL + this.parentCardsEndPoint);
    }
}