import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  configUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {}
  getAllBlogs() {
    // let url = "https://api.furrcrew.com/user/v1/user/3ddf367d-b88f-44fa-b5b2-97ba97924cff/blogs?deviceType=WEB"
    let url = this.configUrl + 'user/v1/user/3ddf367d-b88f-44fa-b5b2-97ba97924cff/blogs?deviceType=WEB';
    return this.http.get(url);
  }
  getPastEvents() {
    // let url = "https://api.furrcrew.com/events/v1/event?deviceType=WEB";
    let url = this.configUrl + 'events/v1/event?deviceType=WEB';
    return this.http.get(url);
  }
  getActiveEvents() {
    let url = this.configUrl + 'events/v1/event/?status=Active&deviceType=WEB';
    // let url = this.configUrl + 'events/v1/event/?status=active?deviceType=WEB';
    return this.http.get(url);
  }
}
