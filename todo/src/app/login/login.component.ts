import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Xolani';
  password = '';
  errorMessage = 'Invalid credintials';
  invalidLogin = false;

  constructor(private router: Router, 
    private hardCodedAuthenticationService: HardCodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){
    // console.log(this.username);
    // console.log(this.password);
    if(this.hardCodedAuthenticationService.authenticate(this.username,this.password)){
      this.router.navigate(['welcome', this.username])
      this.invalidLogin=false 
    }else{
      this.invalidLogin=true
    }
  }

}
