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
    // let url = "https://api.furrcrew.com/user/v1/user/3ddf367d-b88f-44fa-b5b2-97ba97924cff/blogs?deviceType=All"
    let url = this.configUrl + 'user/v1/user/3ddf367d-b88f-44fa-b5b2-97ba97924cff/blogs?deviceType=All';
    return this.http.get(url);
  }
  getAllEvents() {
    // let url = "https://api.furrcrew.com/events/v1/event?deviceType=All";
    let url = this.configUrl + 'events/v1/event?deviceType=All';
    return this.http.get(url);
  }
}
