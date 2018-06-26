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

import { HttpService } from './services/utils/http.service';
import { LocalStorage } from './services/utils/local-storage.service';
import { SessionService } from './services/api/session.service';
import { UserService } from './services/api/user.service';
import { SharedModule } from './pages/shared/shared.module';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ToastyModule } from 'ng2-toasty';
import { MESSAGES } from './constants';
import { ToasterService, SwalService } from './services/utils';

const APP_PROVIDERS = [
  LocalStorage,
  HttpService,
  ToasterService,
  SwalService
]

const APP_CONSTANTS = [
  MESSAGES,
];

const ROUTE_GUARDS = [
  UserGuard
];

const APP_SERVICES = [
  UserService,
  SessionService
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    SlimLoadingBarModule.forRoot(),
    ToastyModule.forRoot(),
    SharedModule,
  ],
  providers: [
    ...APP_PROVIDERS,
    ...APP_SERVICES,
    ...ROUTE_GUARDS,
    ...APP_CONSTANTS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
