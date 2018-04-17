import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {PostsRoutingModule} from './posts-routing.module';
import {IndexComponent} from './index/index.component';
import {ShowComponent} from './show/show.component';
import {EditComponent} from './edit/edit.component';
import {StarsComponent} from '../stars/stars.component';

import {FilterPipe} from '../pipe/filter.pipe';
import {ProcessNullPipe} from '../pipe/process-null.pipe';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  imports: [
    // module
    CommonModule,
    PostsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    // component
    IndexComponent,
    ShowComponent,
    EditComponent,
    StarsComponent,
    // pip
    FilterPipe,
    ProcessNullPipe
  ]
})
export class PostsModule {
}
