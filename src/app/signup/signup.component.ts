import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupUsers: any[] = [];
  signupObj:any = {
    userName: '',
    email:'',
    password:''
  };
  loginObj: any = {
    userName: '',
    password: ''
  };
  
  constructor() { }

  ngOnInit(): void {
  }
  onSignUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
    this.signupObj = {
      userName: '',
      email:'',
      password:''
    };

    alert("thanks for the response");
  }
  onLogin(){


  }



}
