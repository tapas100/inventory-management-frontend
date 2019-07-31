import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { ToastService } from '../../../services/toast.service';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signUp:FormGroup;
  constructor(private _fb:FormBuilder,
    private auth:AuthService,
    private router:Router,
    private toast:ToastService,
    private dataService : DataService
    ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
     this.signUp = this._fb.group({
        username:['',Validators.required],
        email:['',Validators.required], 
        password:['',Validators.required]
     })
  }

  submit(){
     this.auth.register(this.signUp.value).subscribe(res=>{
          this.auth.setToken(res.access_token.token)
          this.router.navigate(['/home'])
          this.toast.show(res.message)
          this.dataService.handleLogin(true)
     },
      err=>{
          this.toast.show(err.error.message)
      }
     )
  }
}
