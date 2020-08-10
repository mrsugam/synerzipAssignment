import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor( private fb: FormBuilder, private route: ActivatedRoute, private router: Router ) {
    this.initForm();
  }

  formGroup: FormGroup;
  name: AbstractControl;
  email: AbstractControl;
  password: AbstractControl;
  cnf_password: AbstractControl;
  term: AbstractControl;

  onSubmit(form: NgForm){
    console.log(form.value);
    form.reset();
  }

  ngOnInit(): void {
  }



  private initForm() {
    this.formGroup = this.fb.group({
      'name': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      'cnf_password': ['', Validators.required],
      'term': ['', Validators.required],
    });

    this.name = this.formGroup.get('name');
    this.email = this.formGroup.get('email');
    this.password = this.formGroup.get('password');
    this.cnf_password = this.formGroup.get('cnf_passwod');
    this.term = this.formGroup.get('term');
  }

}
