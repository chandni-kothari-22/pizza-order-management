import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Pizza } from './pizza';
import { WebApiGetPromiseService } from '../common/common.service';

@Component({
    templateUrl: './pizza.component.html',
    styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
    pizzaList = [];

    constructor(private commonService: WebApiGetPromiseService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.getPizzas();
    }

    getPizzas(): any {
        this.commonService
            .getService('http://localhost:3000/pizza')
            .then((result) => { 
                this.pizzaList = result.pizzas;
            })
            .catch(error => console.log(error));
    }

    gotToCart() {
       this.router.navigateByUrl('/order');
    }
}

