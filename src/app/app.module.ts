import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { UserGuard } from './services/route-guards/user.guard';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

// import { NavbarComponent } from './pages/shared/navbar/navbar.component';

import { HttpService } from './services/utils/http.service';
import { LocalStorage } from './services/utils/local-storage.service';
import { SessionService } from './services/api/session.service';
import { UserService } from './services/api/user.service';
import { SharedModule } from './pages/shared/shared.module';
// import { UiElementsComponent } from './pages/ui-elements';


@NgModule({
  declarations: [
    AppComponent,
    // NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    // UiElementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    SharedModule,
  ],
  providers: [
    HttpService,
    LocalStorage,
    SessionService,
    UserService,

    UserGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
