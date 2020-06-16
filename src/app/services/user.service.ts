import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    let params = new HttpParams().append('page', '1');
    params = params.append('nombre', 'Jesus martinez');

    return this.http.get('https://reqres.in/api/user', { params }).pipe(map((request: any) => request.data));
  }
}
