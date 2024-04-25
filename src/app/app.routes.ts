import { Routes } from '@angular/router';
import { BlogsComponent } from './components/blogs/blogs.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'Home', title: 'Furrcrew-V2', component: AppComponent },
  { path: 'Blogs', title: 'Blogs', component: BlogsComponent },
];
