import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserRegisterModel} from "../../models/api/user-register.model";


const baseUrl = '/api/register/';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<UserRegisterModel[]> {
    return this.http.get<UserRegisterModel[]>(baseUrl);
  }

  get(id: any): Observable<UserRegisterModel> {
    return this.http.get(`${baseUrl}${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}${id}`);
  }
}
