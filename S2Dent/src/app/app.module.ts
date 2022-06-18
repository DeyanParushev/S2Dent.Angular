import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { ServicesComponent } from './dentalServices/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NewsComponent } from './news/news.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { SocialLoginModule, GoogleLoginProvider, SocialAuthServiceConfig } from 'angularx-social-login';
import { environment } from '../environments/environment';
import { AuthComponent } from './auth-component/authComponent';
import { AuthService } from './services/authService';
import { MobxAngularModule } from "mobx-angular";
import { AppStore } from './store/appStore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthResolverService } from './auth-component/authResolverService';
import { TreatementsComponent } from './treatements/treatements.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinner} from '@angular/material/progress-spinner/progress-spinner';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner/progress-spinner-module';

const clientId = environment.clientId;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    HomeComponent,
    TeamComponent,
    ServicesComponent,
    TestimonialsComponent,
    GalleryComponent,
    ContactsComponent,
    NewsComponent,
    FooterComponent,
    AuthComponent,
    TreatementsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SocialLoginModule,
    MobxAngularModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(clientId),
          },
        ],
      } as SocialAuthServiceConfig,
    },
    AuthService,
    AppStore,
    AuthResolverService,
    MatProgressBarModule,
    MatProgressSpinner,
    MatProgressSpinnerModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
