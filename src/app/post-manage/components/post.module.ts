import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { AddPostComponent } from './add-post/add-post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { SharedModule } from './../../shared/shared.module';



@NgModule({
  declarations: [
    PostListComponent,
    AddPostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule, SharedModule, RouterModule
  ],
  exports: [
    PostListComponent,
    AddPostComponent,
    PostDetailsComponent
  ]
})
export class PostModule {}
