import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import * as _ from 'lodash';

import * as qiniu from 'qiniu';

@Injectable()
export class ApiService {

  progress: any;
  percentDone: any;
  loading: Boolean = false;
  observer: Observable<any>;

  constructor(private httpClient: HttpClient) {
  }

  get(url) {
    return this.httpClient.get(url, {withCredentials: true});
  }

  post(url, data, options = {withCredentials: true}) {
    return this.httpClient.post(url, data, options);
  }

  upload(data: Object): Observable<any> {
    const formData = new FormData();
    _.each(data, (v, k) => formData.append(`${k}`, v));
    const headers = new HttpHeaders();
    // No need to include Content-Type in Angular 4
    // headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json, */*');
    const options = {
      headers: headers,
      withCredentials: true,
    };
    return this.post('http://api.hippo-studio.local/upload/image', formData, options);
  }

  uploadToCloud(data, callback, platform = 'qiniu') {
    return this.uploadToQiNiu(data, callback);
  }

  // 构建上传策略函数
  // uptoken(bucket, key) {
  //   // const putPolicy = new qiniu.rs.PutPolicy(bucket + ':' + key);
  //   const putPolicy = new qiniu.rs.PutPolicy(bucket);
  //   return putPolicy.token();
  // }
  //
  uploadToQiNiu(data, callback) {
    //   qiniu.conf.ACCESS_KEY = 'ptBnk7RyE6WE0m80zfYMnKNmArr6lrC0ooOzgqcz';
    //   qiniu.conf.SECRET_KEY = 'BsYL0TpJ3CUglNVE93IMBYpF0o-9M43LA9v0cMVA';
    //   const bucket = 'hippo';
    //   const token = this.uptoken(bucket, data.file.name);
    //
    //   const formData = new FormData();
    //   formData.append('file', data.file);
    //   formData.append('key', data.file.name);
    //   formData.append('token', token);
    //
    //   const headers = new HttpHeaders();
    //   // No need to include Content-Type in Angular 4
    //   // headers.append('Content-Type', 'multipart/form-data');
    //   headers.append('Accept', 'application/json, */*');
    //   const options = {
    //     headers: headers,
    //     withCredentials: true,
    //   };
    //
    //   this.post('url', formData)
    //     .subscribe((response) => console.log(response));

  }


  getPost(postId) {
    return this.observer = this.httpClient.get('/api/posts/' + postId);
  }
}
