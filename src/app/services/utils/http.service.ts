import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { LocalStorage } from './local-storage.service';

@Injectable()
export class HttpService {

  constructor(
      private storage: LocalStorage,
      private http: Http,
    ) {}

  public createAuthorizationHeader(headers: Headers, skipAuth? :boolean): void {
    headers.append('Content-Type', 'application/json');

    if(!skipAuth) {
      headers.append('Authorization', this.storage.get('accessToken'));
      headers.append('UserId', this.storage.get('userId'));
      headers.append('AccessToken', this.storage.get('accessToken'));
    }
  }
}
