import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './shared_module/about/about.component';
// import { HomepageComponent } from './Module/homepage/homepage.component';
import { ContactusComponent } from './shared_module/contactus/contactus.component';
import { CardComponent } from './angular-material/card/card.component';
import { PagenotfoundComponent } from './Module/pagenotfound/pagenotfound.component';

const routes: Routes = [
  // { path: 'home', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'home', component: CardComponent },
  { path: 'pagenotfound', component: PagenotfoundComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/pagenotfound', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
