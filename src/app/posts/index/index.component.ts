import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  observer: Observable<any>;
  posts: Array<any> = [];
  titleFilter: FormControl = new FormControl();
  keyword: string;

  constructor(private routeInfo: ActivatedRoute, private httpClient: HttpClient) {
    this.observer = this.httpClient.get('/api/posts').map((response) => response);

    this.titleFilter.valueChanges
      .debounceTime(500)
      .subscribe(
        value => this.keyword = value
      );
  }

  ngOnInit() {
    this.observer.subscribe(
      (data) => this.posts = data
    );
    console.log(this.routeInfo.snapshot.paramMap);
    console.log('paramA', this.routeInfo.snapshot.paramMap.get('id'));
    console.log('paramB', this.routeInfo.snapshot.parent.paramMap.get('id'));
    this.routeInfo.params.subscribe((params: Params) => {
      console.log('paramC', params);
    });
  }

}

export class PostIndex {
  constructor(public id: number, public name: string) {

  }
}
