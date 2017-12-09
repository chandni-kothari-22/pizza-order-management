import { Component, OnInit , Pipe, PipeTransform} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Pizza } from './pizza';
import { WebApiGetPromiseService } from '../common/common.service';
import { PizzaOrderService } from '../service/pizza.service.component';
import { NotificationsService } from 'angular2-notifications';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  public transform(values: any[], filter: string): any[] {
    if (!values || !values.length) return [];
    if (!filter) return values;
    
    return values.filter(v => v.indexOf(filter) >= 0);
  }
}

@Component({
    templateUrl: './pizza.component.html',
    styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
    pizzaList = [];

    constructor(private commonService: WebApiGetPromiseService, private router: Router, 
        private route: ActivatedRoute, private pizzaService: PizzaOrderService, 
        private _notificationsService: NotificationsService) { }

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

    addToCart(data: Pizza) {
        this.pizzaService.addPizzaToCartService(data)
        .then(() => {
            this._notificationsService.success(
                'Pizza added to cart.',
                '',
                {
                    timeOut: 5000,
                    showProgressBar: true,
                    pauseOnHover: false,
                    maxLength: 10
                }
            )
        });
    }
}