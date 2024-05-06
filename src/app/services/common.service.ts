import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private sidebarOpen = new BehaviorSubject<boolean>(false);
  _sidebarOpen: Observable<boolean> = this.sidebarOpen.asObservable();
  setSidebar(val: any): void {
    this.sidebarOpen.next(val);
  }
  getSidebar(): any {
    return this._sidebarOpen;
  }
}
