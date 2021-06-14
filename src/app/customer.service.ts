import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {OAuthService} from "angular-oauth2-oidc";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'http://localhost:8081/api/v1/customers';

  constructor(private http: HttpClient, private oauthService: OAuthService) { }

  getCustomer(id: string): Observable<any> {

    return this.http.get(`${this.baseUrl}/${id}`);

  }

  createCustomer(customer: Object): Observable<Object> {

    return this.http.post(`${this.baseUrl}`, customer);
  }

  updateCustomer(id: string, value: any): Observable<Object> {

    return this.http.put(`${this.baseUrl}/${id}`, value);

  }

  deleteCustomer(id: string): Observable<any> {

    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCustomersList(): Observable<any> {


    return this.http.get(`${this.baseUrl}`);

  }

 
}