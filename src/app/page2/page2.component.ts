import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-page2',
    templateUrl: './page2.component.html',
    styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
    items = ["Angular 4", "React", "Underscore"];
    newItem = "";
    pushItem = function () {
        if (this.newItem != "") {
            this.items.push(this.newItem);
            this.newItem = "";
        }
    }
    removeItem = function (index) {
        this.items.splice(index, 1);
    }

    constructor() {
    }

    ngOnInit() {
    }
}
