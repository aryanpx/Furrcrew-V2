import { Routes } from '@angular/router';
import { BlogsComponent } from './components/blogs/blogs.component';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';

export const routes: Routes = [
  { path: '', title: 'Furrcrew-V2', component: BodyComponent },
  { path: 'Blogs', title: 'Blogs', component: BlogsComponent },
];
