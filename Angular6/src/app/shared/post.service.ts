import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  selectedPost: Post;
  posts: Post[];

  constructor(private http: HttpClient) { }

  postPost(post: Post) {
    return this.http.post(environment.apiBaseUrl + '/posts', post);
  }

  getPostList() {
    return this.http.get(environment.apiBaseUrl + '/posts');
  }

  putPost(post: Post) {
    return this.http.put(environment.apiBaseUrl + '/posts/' + `${post._id}`, post);
  }

  deletePost(_id: string) {
    return this.http.delete(environment.apiBaseUrl + '/posts' + `/${_id}`);
  }

}
