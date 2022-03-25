import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth-component/authComponent';
import { ContactsComponent } from './contacts/contacts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ServicesComponent } from './dentalServices/services.component';
import { TeamComponent } from './team/team.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { AuthResolverService } from './auth-component/authResolverService';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "news", component: NewsComponent },
  { path: "testimonials", component: TestimonialsComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "team", component: TeamComponent },
  { path: "contacts", component: ContactsComponent },
  { path: "services", component: ServicesComponent },
  { path: "register", component: AuthComponent },
  { path: "login", component: AuthComponent, resolve: { user: AuthResolverService } },
  { path: "logout", component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
