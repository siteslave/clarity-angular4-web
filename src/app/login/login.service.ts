import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor( @Inject('API_URL') private url: string, private http: Http) { }

  doLogin(username: string, password: string) {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.url}/login`, { username: username, password: password})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  testLogin(username: string, password: string) {
    return new Promise((resolve, reject) => {
      if (username === 'admin' && password === 'admin') {
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE0OTIxNTIxNTAsImV4cCI6MTUyMzY4ODE1MCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImZpcnN0bmFtZSI6IkpvaG5ueSIsImxhc3RuYW1lIjoiUm9ja2V0IiwiRW1haWwiOiJqcm9ja2V0QGV4YW1wbGUuY29tIiwiUm9sZSI6WyJNYW5hZ2VyIiwiUHJvamVjdCBBZG1pbmlzdHJhdG9yIl19.PHIh0fVzpbTqi8h74stfts_CqgEmku-j0NV5G1iS0BI'
        resolve(token);
      } else {
        reject('Invalid username/password');
      }
    });
  }
}
