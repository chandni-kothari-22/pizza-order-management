import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { OrderComponent } from './order/order.component';
import { WebApiGetPromiseService } from './common/common.service';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
      AppComponent,
      PizzaComponent,
      OrderComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      CommonModule,
      HttpModule,
      AppRoutingModule
  ],   
  providers: [WebApiGetPromiseService],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(router: Router) {
        console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
}
