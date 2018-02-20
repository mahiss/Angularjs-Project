import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
    selector: 'app-formvalidation',
    templateUrl: './formvalidation.component.html',
    styleUrls: ['./formvalidation.component.css']
})
export class FormvalidationComponent implements OnInit {

    log(x) { console.log(x); }

    constructor() {
    }

    myform:FormGroup;

    langs:string[] = [
        'English',
        'Malayalam',
        'Hindi'
    ];

    ngOnInit() {
        this.myform = new FormGroup({
            name: new FormGroup({
                firstName: new FormControl(),
                lastName: new FormControl(),
            }),
            email: new FormControl(),
            password: new FormControl(),
            language: new FormControl()
        });
    }
}
