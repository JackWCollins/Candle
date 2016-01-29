import {Page} from 'ionic-framework/ionic';


@Page({
  templateUrl: 'build/pages/calendar/calendar.html',
})
export class Calendar {
  years: Array = YEARS
  constructor() {

  }
}
var YEARS: Array<string> = ['2014', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
