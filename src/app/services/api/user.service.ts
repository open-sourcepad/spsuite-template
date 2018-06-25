import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';

import { Observable, Subject } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { LocalStorage } from '../utils/local-storage.service';

const ENDPOINT = `${environment.API_URL}/student`;

@Injectable()
export class UserService {

  constructor(
    public storage: LocalStorage,
    public router: Router,
    private http: Http) {

  }

  login(payload: any): any {
    return this
            .http
            .post(`${ENDPOINT}/login`, { user: payload });
  }

  register(payload: any): any {
    return this
            .http
            .post(`${ENDPOINT}/register`, { user: payload });
  }
}
