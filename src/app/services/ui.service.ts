import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddAutomovile: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleAddAutomovile(): void {
    this.showAddAutomovile = !this.showAddAutomovile;
    this.subject.next(this.showAddAutomovile);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
