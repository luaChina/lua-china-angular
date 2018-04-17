import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotFoundComponent} from './errors/not-found/not-found.component';
import {IndexComponent} from './index/index.component';
// import {ChatComponent} from './chat/chat.component';
// import {LoginGuard} from './guard/login.guard';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: IndexComponent
  },
  {
    path: '',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'posts/:id',
    loadChildren: './posts/posts.module#PostsModule'
  },
  // {
  //   path: 'chat',
  //   component: ChatComponent,
  //   outlet: 'aux'
  // },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {

}
