import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post.service';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  postId;

  formGroup: FormGroup;
  userId: AbstractControl;
  id: AbstractControl;
  title: AbstractControl;
  body: AbstractControl;

  constructor( private postService: PostService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router ) {
    this.initForm();
   }

  ngOnInit(): void {
    this.postId = this.route.snapshot.params['id'];
    if (this.postId) {
      this.postService.getPostById(this.postId).subscribe( pst => {
        this.formGroup.patchValue(pst);
      });
    }
  }

  submitForm() {
    if (this.formGroup.valid) {
      if (this.postId) {
        this.postService.updatePost(this.formGroup.value).subscribe(res => {
          this.router.navigate(['/post-list']);
        });
      } else {
        this.postService.addPost(this.formGroup.value).subscribe(res => {
          this.router.navigate(['/post-list']);
        });
      }
    } else {
      alert('Invaild form');
    }
  }

  submitHandler(){
    console.log(this.formGroup.value);
  }

  private initForm() {
    this.formGroup = this.fb.group({
      'userId': ['', Validators.required],
      'id': ['', Validators.required],
      'title': ['', Validators.required],
      'body': ['', Validators.required]
    });

    this.userId = this.formGroup.get('userId');
    this.id = this.formGroup.get('id');
    this.title = this.formGroup.get('title');
    this.body = this.formGroup.get('body');
  }

}
