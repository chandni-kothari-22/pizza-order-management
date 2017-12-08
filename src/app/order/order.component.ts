import { Component, OnInit } from '@angular/core';
import { Order } from './order';
import { WebApiGetPromiseService } from '../common/common.service';

@Component({
    selector: 'app-module',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
    orderList = [];

    constructor(private commonService: WebApiGetPromiseService) { }

    ngOnInit() {
        this.getOrders();
    }

    getOrders(): any {
        this.commonService
            .getService('http://localhost:3000/order')
            .then((result) => { 
                this.orderList = result.orders;
            })
            .catch(error => console.log(error));
    }
}

