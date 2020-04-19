import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

	data;
	username;
	arr = [];
  constructor(private http:HttpClient, private router: Router, private authService: AuthService, private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
	this.activatedRoute.queryParams.subscribe((params: Params) => {
			this.username = params.name;
		});
	this.data = this.authService.getUserData()


			let formdata = {
				'username': this.username
			}

			this.http.post("https://vlawyer-backend.herokuapp.com/review/",{'username': this.username}).toPromise().then((res:any) => {
				console.log('Response',res);
				for (var i = 0; i < res.length; ++i) {
					res[i].clientimage = "https://vlawyer-backend.herokuapp.com/media/" + res[i].clientimage;

				}
				this.arr = res;
			},
			(err:any)=> {
				if(err.status == 400) {
					console.log("Credientials are not valid",err);
				}
			}
			);
	}

}
