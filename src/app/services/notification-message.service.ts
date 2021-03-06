import { Injectable } from '@angular/core';
import { Notification } from '../models/notification';
import { Subject } from 'rxjs';
import { generateId } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class NotificationMessageService {
  public notifications: Notification[] = [];
  onChange$ = new Subject();

  constructor() {}

  add(notification: Notification) {
    this.notifications = [notification, ...this.notifications];
    this.onChange$.next(this.notifications);
  }

  remove(id: number | string | undefined) {
    if (id) {
      this.notifications = this.notifications.filter((x) => x._id !== id);
      this.onChange$.next(this.notifications);
    }
  }

  alert(notification: Notification) {
    if (!notification._id) notification._id = generateId();
    this.add(notification);
    // eslint-disable-next-line no-undef
    setTimeout(() => {
      this.remove(notification._id);
    }, 3000);
  }
}
