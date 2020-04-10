import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { Router } from '@angular/router'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as jwt_decode from "jwt-decode";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-video-call',
  templateUrl:'./video-call.component.html',
  styleUrls: ['./video-call.component.css']
})
export class VideoCallComponent implements OnInit {
  // public url="https://morning-escarpment-67980.herokuapp.com/";
 // @ViewChild("webview") webview: WebView;

 constructor(private authService: AuthService, private router: Router, private http:HttpClient) {	}
   ngOnInit() {
      
  }

}
