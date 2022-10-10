// import {HttpClient} from '@angular/common/http'
import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
// export class SignupComponent implements OnInit {

//   signupForm!:FormGroup
//   constructor(private formBuilder:FormBuilder, private_http:HttpClient,private router:Router) { }

//   ngOnInit(): void {
//    this.signupForm=this.formBuilder.group({
//      name:[''],
//      mobile:[''],
//      email:[''],
//      password:[''],
//      confirmpassword:['']
//    })
//     }

//     signup(){
// this.http.post<any>("http://localhost:4200/signup",this.signupForm.value).subscribe(res=>{
//   alert("registration successful");
// })


// )
//     }
  
export class SignupComponent{

  submit(signup: any){
    console.log("Form submitted",signup)
  }
}