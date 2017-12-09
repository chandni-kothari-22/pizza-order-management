import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="container"><div class="col-lg-6">
    <h1>{{title}}</h1>
    <router-outlet></router-outlet></div></div>`,
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Welcome to Pizza\'s';
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/