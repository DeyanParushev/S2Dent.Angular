import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NewsComponent } from './news/news.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { SocialLoginModule, GoogleLoginProvider, SocialAuthServiceConfig } from 'angularx-social-login';
import { environment } from 'src/environments/environment';
import { AuthComponent } from './auth-component/authComponent';
import { AppStore } from './app-store';
import { AuthService } from './utils/authService';
import { TreatementsComponent } from './treatements/treatements.component';

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
    AppStore,
    AuthService,
    
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
