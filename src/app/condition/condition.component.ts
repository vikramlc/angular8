import { Component } from '@angular/core';

@Component({
    selector: 'app-condition',
    templateUrl: './condition.component.html'
})
export class ConditionComponent {
    consumerName: boolean = false;
    enteredName = '';
    sentence = 'No name entered!';
    buttonPressed = false;

    onInputEnter(event: Event) {
        
        this.enteredName = (<HTMLInputElement>event.target).value;
    }

    onNameClick(event: Event) {
        this.buttonPressed = true;
    }

}