import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { Post } from './post.model';
import { throwError } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostsService {

  constructor(private http: HttpClient) {}

  createAndStorePost(titleReceived: string, contentReceived: string) {

    const postData: Post = {title: titleReceived, content: contentReceived};

    // Send Http request
    this.http
      .post<{name: string}>('https://ng-angular-course-47745.firebaseio.com/posts.json', postData)
      .subscribe((posts) => {
        console.log(posts);
      });
  }

  fetchPosts() {
    return this.http
      .get<{ [key: string]: Post}>('https://ng-angular-course-47745.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({'Custom-Header': 'Hello'}),
          params: new HttpParams().set('print', 'pretty'),
          responseType: 'json'
        }
      )
      .pipe(
        map (responseData => {
          const postsArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({...responseData[key], id: key});
            }
          }
          return postsArray;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }

  deletePosts() {
    return this.http.delete('https://ng-angular-course-47745.firebaseio.com/posts.json');
  }
}
