import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LocalStorage } from '../utils/local-storage.service';

const ENDPOINT = `${environment.API_URL}/api/sessions`;

@Injectable()
export class SessionService {
 
  constructor(
    public storage: LocalStorage,
    public router: Router,
    private http: Http) {

  }

  setSession(payload: any): void {
    this.storage.set('accessToken', payload.access_token);
    this.storage.set('userId', payload.id);
    this.storage.setObject('currentUser', payload);
  }

  isValid(): boolean {
    return !!this.storage.getObject('currentUser');
  }

  setCurrentUser(user: any): void {
    this.storage.setObject('currentUser', user);
  }

  signout(): void {
    this.clearSession();
    this.http.delete(ENDPOINT);
  }
  
  getCurrentUser(): any {
    return this.storage.getObject('currentUser');
  }

  clearSession(): void {
    this.storage.clear();
  }

  userSignedIn(): boolean {
    return !!this.storage.get('accessToken');
  }

}