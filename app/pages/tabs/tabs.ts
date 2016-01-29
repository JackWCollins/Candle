import {Page} from 'ionic-framework/ionic';
import {Calendar} from '../calendar/calendar';
import {Reminder} from '../reminder/reminder';
import {Add} from '../add/add';

// https://angular.io/docs/ts/latest/api/core/Type-interface.html
import {Type} from 'angular2/core';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  calendarRoot: Type = Calendar;
  reminderRoot: Type = Reminder;
  addRoot: Type = Add;

  constructor() {

  }
}
