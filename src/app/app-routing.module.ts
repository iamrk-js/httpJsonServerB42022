import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { EditPostsComponent } from './components/edit-posts/edit-posts.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'dashbord', pathMatch : 'full'
  },
  {
    path: 'dashbord', component: AllPostsComponent
  },
  {
    path: 'update/:id', component: EditPostsComponent
  },
  {
    path: 'createpost', component: CreatePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
