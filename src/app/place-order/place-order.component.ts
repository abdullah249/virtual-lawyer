import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import * as jwt_decode from "jwt-decode";
@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
  data:any;
	name;
	title;
	description;
  price;
  event;
	error:any = {invalid: false}
	constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute, private http:HttpClient) {
  }	
  ngOnInit() {
  	 this.data = this.authService.getUserData()
  }
 onSubmit(f: NgForm) {
  this.error.invalid = false;
  console.log(this.data);
  let formdata = {
    'name': this.data.username,
    'title': f.value.title,
    'description': f.value.description,
    'price': f.value.price,
  }

  this.http.post("http://localhost:8000/add_orders/",formdata).toPromise().then((res:any) => {
    console.log('Response',res);
    try{
      
      this.router.navigate(['/view-order']);
    }
    catch(Error){
      this.error = Error;
      this.error.invalid = true;
      console.log(Error);
    }

  },
  (err:any)=> {
    this.error = err;
    this.error.invalid = true;
    if(err.status == 501) {
      console.log("Cannot create order",err);
    }
    else {
      console.log(err)
    }
  }
  );
}




}
