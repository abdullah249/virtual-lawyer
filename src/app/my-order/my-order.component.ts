import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../services/auth.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as jwt_decode from "jwt-decode";



@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {


  order;
	orders ;
	data:any;
	displayName;
	title;
	description;
	
	constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute, private http:HttpClient) {
		
	}
  ngOnInit() {
    this.data = this.authService.getUserData()

   
  let formdata = {
    'order': this.order
  }
  this.http.post("https://vlawyer-backend.herokuapp.com/read_orders/",{'order': this.order}).subscribe((data:any) => {
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



}
