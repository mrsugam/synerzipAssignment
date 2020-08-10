import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef, ViewRef, ComponentRef } from '@angular/core';
import { PostService } from './../../post.service';
import { Observable, Subscription } from 'rxjs';
import { Post } from '../../post';
import { map } from 'rxjs/operators';
import { MatTableDataSource, MatTable } from '@angular/material/table';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<Post>;

  public dataSource$: Observable<MatTableDataSource<Post>>;

  private subscriptions: Subscription = new Subscription();

  displayedColumns: string[] = ['userId', 'id', 'title', 'body', 'action'];

  constructor( private postService: PostService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.dataSource$ = this.postService.getPostList().pipe(
      map(data => {
        const dataSource: MatTableDataSource<Post> = new MatTableDataSource();
        dataSource.data = data;
        return dataSource;
      })
    );
  }

  removePost(id: number) {
    this.subscriptions.add(this.postService.deletePost(id).subscribe(data => {
      const dataSource = (this.table.dataSource as MatTableDataSource<Post>);
      const postList = dataSource.data;
      const index = postList.findIndex(pst => pst.id === id);
      postList.splice(index, 1);
      dataSource.data = postList;
    }));
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    const dataSource = (this.table.dataSource as MatTableDataSource<Post>);
    dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
