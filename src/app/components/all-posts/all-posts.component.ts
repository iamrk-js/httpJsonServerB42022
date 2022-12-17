import { Component, OnInit } from '@angular/core';
import { Ipost } from 'src/app/shared/model/post';
import { PostsService } from 'src/app/shared/serives/posts.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {
  postsArray: Ipost[] = []
  errorMsg = '';
  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.getAllPosts()
  }

  getAllPosts() {
    this.postService.fetchAllPosts()
      .subscribe((res) => {
        console.log(res)
        this.postsArray = res;
      }, 
      (err) => {
        console.log('Something went Wrong');
        this.errorMsg = 'Something went Wrong'
      }  
      )
  }
  onPostDelete(id: number): any {
    let confirmDelete = confirm("Are you sure ?? want to delete post.")
    if (confirmDelete) {
      this.postService.deletePost(id)
        .subscribe(res => {
          console.log(res);
          this.postsArray = this.postsArray.filter(post => post.id !== id)
        })
    } else {
      return true;
    }
  }
}
