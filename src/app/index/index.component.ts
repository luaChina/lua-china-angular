import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  formModel: FormGroup | any; // 取到 modal 中的form表单实例

  // modal中的内容
  public formData: any = {};

  constructor(private fb: FormBuilder, private apiService: ApiService) {
  }

  ngOnInit() {
    // this.formModel = this.fb.group({
    //   id: [],
    //   file: []
    // });
  }

  onSubmit() {
    this.apiService.uploadToCloud(this.formData, function () {
      console.log();
    });
  }

  // 文件选择后change函数
  onFileChange(event): void {
    console.log('--file change event--', event.target.files[0]);
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.formData['file'] = fileList[0];
    }
    console.log(this.formData);
  }
}
