import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from '../../post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  post: Post;
  subscription: Subscription;

  constructor( private postService: PostService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const postId = this.route.snapshot.params['id'];
    this.subscription = this.postService.getPostById(postId).subscribe(data => this.post = data);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
