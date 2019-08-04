import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomepageComponent } from './page-homepage/page-homepage.component';
import { PageAboutComponent } from './page-about/page-about.component';

const routes: Routes = [
	{ path: '', component: PageHomepageComponent },
	{ path: 'about', component: PageAboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
