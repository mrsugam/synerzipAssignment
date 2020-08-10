import { Component } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor( private fb: FormBuilder, private route: ActivatedRoute, private router: Router ) {
    this.initForm();
   }

   isLoginMode = true;


  formGroup: FormGroup;
  username: AbstractControl;
  password: AbstractControl;


  onSubmit(form: NgForm){
    console.log(form.value);
    form.reset();
  }

  private initForm() {
    this.formGroup = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });

    this.username = this.formGroup.get('username');
    this.password = this.formGroup.get('password');
  }
}
