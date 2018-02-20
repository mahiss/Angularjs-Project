import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {ModalModule} from 'ngx-bootstrap/modal';

import {AppComponent} from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';
import { FormnotfoundComponent } from './formnotfound/formnotfound.component';

// import {DataService} from './data.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        Page1Component,
        Page2Component,
        HomepageComponent,
        FormvalidationComponent,
        FormnotfoundComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: '',
                component: HomepageComponent
            },
            {
                path: 'home',
                component: HomepageComponent
            },
            {
                path: 'page1',
                component: Page1Component
            },
            {
                path: 'page2',
                component: Page2Component
            },
            {
                path: 'validation',
                component: FormvalidationComponent
            },
            {
                path: '**',
                component: FormnotfoundComponent
            }
        ]),
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        ModalModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
