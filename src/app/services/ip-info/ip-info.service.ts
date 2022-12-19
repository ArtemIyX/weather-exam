import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IpInfo } from 'src/app/responses/ipInfo';

@Injectable({
  providedIn: 'root'
})
export class IpInfoService {

  private apiUrl: string = 'http://ip-api.com/json/';
  constructor(private http: HttpClient) { }

  getIpInfo() : Observable<IpInfo>{
    return this.http.get<IpInfo>(this.apiUrl);
  }
}
