import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Pizza } from '../pizza/pizza';

@Injectable()
export class PizzaOrderService {
    headers: Headers;
    options: RequestOptions;

    constructor(private http: Http) {
        this.headers = new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });
        this.options = new RequestOptions({ headers: this.headers });
    }

    addPizzaToCartService(pizza: Pizza): Promise<any> {
        let orderUrl = "http://localhost:3000/order?_sort=id&_order=desc";
        return this.http
            .get(orderUrl, this.options)
            .toPromise()
            .then((result: any) => {
                pizza.id = JSON.parse(result._body)[0] === undefined ? 0 : (JSON.parse(result._body)[0].id + 1);
                let url = "http://localhost:3000/order";
                return this.http
                    .post(url, pizza, this.options)
                    .toPromise()
                    .then((result) => {
                        console.log("pizza added.");
                        return true;
                    })
                    .catch(this.handleError);
            })
            .catch(this.handleError); 
    }

    deletePizzaFromCartService(id: number): Promise<any> {
        let orderUrl = 'http://localhost:3000/order/' + id;
        return this.http
            .delete(orderUrl, this.options)
            .toPromise()
            .then((result: any) => {
                return true;
            })
            .catch(this.handleError); 
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}