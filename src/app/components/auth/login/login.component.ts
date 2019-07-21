import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { ToastService } from '../../../services/toast.service';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(private _fb: FormBuilder, 
    private auth: AuthService,
    private router: Router, 
    private toast: ToastService,
    private dataService : DataService
    ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  submit() {
    this.auth.login(this.loginForm.value).subscribe(
      response => {
        // console.log(response)
        this.auth.setToken(response.access_token.token);
        this.router.navigate(['/home'])
        this.toast.show(response.message);
        this.dataService.handleLogin(true);
      },
      err => {
        //  console.log(err)
        this.toast.show(err.error.message);
      }
    )
  }
}
