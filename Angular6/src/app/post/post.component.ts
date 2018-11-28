import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PostService } from '../shared/post.service';
import { Post } from '../shared/post.model';

declare var M: any;

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshPostList();
  }

  resetForm(form?: NgForm) {
    if (form)
    form.reset();
    this.postService.selectedPost = {
      _id: "",
      title: "",
      body: ""
    }
  }

  onSubmit(form : NgForm){
    if (form.value._id =="") {
    this.postService.postPost(form.value).subscribe((res) => {
      this.resetForm(form);
      this.refreshPostList();
      M.toast({ html: 'Saved successfully', classes: 'Rounded'});
    });
  }
    else {
      this.postService.putPost(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshPostList();
        M.toast({ html: 'Updated successfully', classes: 'Rounded'});
      });
    }
  }

  refreshPostList() {
    this.postService.getPostList().subscribe((res) => {
      this.postService.posts = res as Post[];
    });
  }

  onEdit(post : Post){
    this.postService.selectedPost = post;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure you want to delete this post?') == true) {
      this.postService.deletePost(_id).subscribe((res) => {
        this.refreshPostList();
        this.resetForm(form);
        M.toast({ html: 'Deleted Successfully', classes: 'rounded'});
      });
    }
  }
}
