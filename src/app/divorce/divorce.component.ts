import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../services/auth.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as jwt_decode from "jwt-decode";
@Component({
  selector: 'app-divorce',
  templateUrl: './divorce.component.html',
  styleUrls: ['./divorce.component.css']
})
export class DivorceComponent implements OnInit {
constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute, private http:HttpClient) {
		
	}
  ngOnInit() {
    //this.data = this.authService.getUserData();


  }

}
