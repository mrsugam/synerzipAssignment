import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { ShellModule } from './shell/shell.module';
import { PostModule } from './post-manage/components/post.module';
import { PostListComponent } from './post-manage/components/post-list/post-list.component'
import { AddPostComponent } from './post-manage/components/add-post/add-post.component';
import { PostDetailsComponent } from './post-manage/components/post-details/post-details.component';
import { AuthComponent } from './auth/auth.component';
import { AuthModule } from './/auth/auth.module';
import { RegisterComponent } from './auth/register/register.component';


const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: ShellComponent, children: [
    {path: 'post-list', component: PostListComponent },
    {path: 'add-post', component: AddPostComponent },
    {path: 'post-list/:id', component: PostDetailsComponent},
    {path: 'update/:id', component: AddPostComponent  }
  ]}
];

@NgModule({
  imports: [ShellModule, AuthModule, PostModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
