import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ipost } from '../model/post';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  baseUrl = environment.postUrl;
  constructor(private http: HttpClient) {


  }

  fetchAllPosts(): Observable<Ipost[]> {
    let httpHeaders = new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': 'Bearer Token qwerty'
    })
    let searchparams = new HttpParams();
    searchparams.append("pageNo", 10)
    return this.http.get<Ipost[]>(this.baseUrl, {
      headers: httpHeaders,
      params : searchparams
    })
  }
  deletePost(id: number) {
    let deleteUrl = `${this.baseUrl}/${id}`
    return this.http.delete(deleteUrl)
  }
}
