import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {ReportService} from '../../services/report.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  private postId: number;
  post: any = [];
  comment: string;
  comments = [];
  rating: any;

  constructor(private routeInfo: ActivatedRoute, private apiService: ApiService, private reportService: ReportService) {
  }

  ngOnInit() {
    this.comments = [
      {'id': 1, 'content': '真不错', 'rating': 4},
      {'id': 2, 'content': '很有帮助', 'rating': 4},
      {'id': 3, 'content': '这是假的', 'rating': 5}
    ];

    this.routeInfo.params.subscribe((params: Params) => this.postId = params['id']);
    // this.postId = this.routeInfo.snapshot.queryParams['id'];
    this.apiService.getPost(this.postId).subscribe((data) => this.post = data);
    console.log('param', this.routeInfo.snapshot.paramMap);
    this.reportService.step1();
  }

  submitComment(event: any) {
    this.comments.push({'id': 0, 'content': this.comment, 'rating': this.rating});
    console.log(this.comment);
  }

}
