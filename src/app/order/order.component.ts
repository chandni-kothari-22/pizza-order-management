import { Component, OnInit } from '@angular/core';
import { Order } from './order';
import { WebApiGetPromiseService } from '../common/common.service';
import { NotificationsService } from 'angular2-notifications';
import { PizzaOrderService } from '../service/pizza.service.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Pizza } from '../pizza/pizza';

@Component({
    selector: 'app-module',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
    orderList = [];
    showConfirmButton: boolean = false;

    constructor(private commonService: WebApiGetPromiseService,
        private _notificationsService: NotificationsService,
        private pizzaOrderService: PizzaOrderService,
        private router: Router) { }

    ngOnInit() {
        this.getOrders();
    }

    getOrders(): any {
        this.commonService
            .getService('http://localhost:3000/order')
            .then((result) => {
                this.orderList = result;
            })
            .catch(error => console.log(error));
    }

    removeFromCart(id): any {
        this.pizzaOrderService
            .deletePizzaFromCartService(id)
            .then((result) => {
                this.getOrders();
                this._notificationsService.success(
                    'Pizza removed from cart.',
                    '',
                    {
                        timeOut: 2000,
                        maxLength: 10
                    }
                )
            })
            .catch(error => console.log(error));
    }

    gotToPizzas() {
        this.router.navigateByUrl('/pizza');
    }

    getSum(data: Array<Order>) {
        let sum = 0;
        data.forEach((value, index) => {
            sum += sum + parseInt(value.price);
        });
        this.showConfirmButton = sum > 0;
        return sum;
    }

    confirmOrder() {
        this._notificationsService.success(
            'Your order will be delivered in 30 minutes.',
            '',
            {
                timeOut: 2000,
                maxLength: 10
            }
        )
    }
}

