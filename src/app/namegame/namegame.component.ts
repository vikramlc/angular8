import { Component } from '@angular/core';

@Component({
    selector: 'app-namegame',
    templateUrl: './namegame.component.html'
})
export class NamegameComponent {

    enteredName = '';
    reversedName = '';
    sentence = '';

    constructor() {

    }

    onEnter(event: Event) {
        this.enteredName = (<HTMLInputElement>event.target).value;
        // console.log(this.enteredName);
        this.reversedName = this.enteredName.split("").reverse().join("");
    }

    onPress() {
        this.sentence = "Reversed String is " + this.reversedName;
    }

}