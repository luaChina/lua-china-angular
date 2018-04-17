import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {ShowComponent} from './show/show.component';
import {EditComponent} from './edit/edit.component';

const routes: Routes = [
  {
    path: 'step1',
    component: IndexComponent,
  },
  // {
  //   path: ':id',
  //   component: ShowComponent,
  // },
  // {
  //   path: ':id/edit',
  //   component: EditComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
