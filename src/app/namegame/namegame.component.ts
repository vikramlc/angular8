import { Component } from '@angular/core';

@Component({
    selector: 'app-namegame',
    templateUrl: './namegame.component.html'
})
export class NamegameComponent {

    enteredName = '';
    reversedName = '';

    constructor() {

    }

    onEnter(event: Event) {
        this.enteredName = (<HTMLInputElement>event.target).value;
        this.reversedName = this.enteredName.split("").reverse().join("");
    }

}