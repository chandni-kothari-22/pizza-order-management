import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PizzaComponent } from './pizza/pizza.component';
import { OrderComponent } from './order/order.component';


const appRoutes: Routes = [
    { path: 'order', component: OrderComponent },
    { path: 'pizza', component: PizzaComponent },
    { path: '', redirectTo: '/pizza', pathMatch: 'full' },
    //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: true, // <-- debugging purposes only
            }
            )
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})
export class AppRoutingModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/