import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post';

const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor( private http: HttpClient ) { }

  getPostList(): Observable<Post[]> {
    return this.http.get<Post[]>(baseUrl);
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${baseUrl}/${id}`);
  }

  addPost(post: Post): Observable<any> {
    return this.http.post<Post>(baseUrl, post);
  }

  updatePost(post: Post): Observable<any> {
    return this.http.put<Post>(`${baseUrl}/${post.id}`, post);
  }

  deletePost(id: number): Observable<Post> {
    return this.http.delete<Post>(`${baseUrl}/${id}`);
  }
}
