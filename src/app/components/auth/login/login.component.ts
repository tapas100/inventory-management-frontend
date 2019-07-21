import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  constructor(private _fb:FormBuilder,private auth:AuthService,private router:Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
     this.loginForm = this._fb.group({
        username:['',Validators.required],
        password:['',Validators.required]
     })
  }

  submit(){
     this.auth.login(this.loginForm.value).subscribe(
       response=>{
          console.log(response)
          this.auth.setToken(response.access_token.token);
          this.router.navigate(['/home'])
       }
     )
  }
}
