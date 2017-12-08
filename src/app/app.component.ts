import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="container">
    <h1>{{title}}</h1>
    <router-outlet></router-outlet></div>`
})
export class AppComponent {
    title = 'Welcome to Pizza\'s';
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/