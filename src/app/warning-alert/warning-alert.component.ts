import { Component } from '@angular/core';

@Component({
    selector: 'app-warning-alert',
    template: `
       <p>This is a warning alert</p>
    `,
    styles: [`
        p {
            padding: 20px;
            margin: 20px;
            background-color: red;
            border: 1px solid red;
        }
    `]
})
export class WarningAlertComponent {

}