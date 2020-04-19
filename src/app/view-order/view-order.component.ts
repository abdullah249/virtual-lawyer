import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../services/auth.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {

  order;
	orders ;
	data:any;
	displayName;
	title;
  description;
  
	
	constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute, private http:HttpClient) {
		
	}
  ngOnInit() {
   // this.data = this.authService.getUserData()

   
  let formdata = {
    'order': this.order
  }
  this.http.post("http://localhost:8000/read_orders/",{'order': this.order}).subscribe((data:any) => {
        this.order=data;
        this.orders=data;
    },
    (err:any) => {
			console.log(err)
		});
  }
  
  MyOrder(order)
  {
	  this.router.navigate(["/my-order"])
  }

  PlaceOrder(order){
		this.router.navigate(["/place-order"])
  }
  MyOrders(order)
  {
   // this.router.navigate(["/my-orders"])
  }
  chat()
  {
	  this.router.navigate(["/chat"])
  }

}
