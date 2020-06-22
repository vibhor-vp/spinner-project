import { Component } from "@angular/core";

@Component({
    selector: 'home',
    templateUrl: 'home.component.html'
})

export class HomeComponent {
    luckyNumber: number;

    constructor() { }

    checkSpinnerNumber(spinnerVal): void {
        if (spinnerVal === this.luckyNumber) {
            alert('Congrats, You are a winner');
        }
        else {
            alert('Sorry, You Lost');
        }
    }
}