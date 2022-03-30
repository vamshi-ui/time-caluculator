import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('days') daysDiv!: ElementRef;
  @ViewChild('hours') hoursDiv!: ElementRef;
  @ViewChild('mins') minsDiv!: ElementRef;
  @ViewChild('seconds') secDiv!: ElementRef;

  title = 'timecalculator';
  currentDate: any;
  targetDate: any;
  cDateMillisecs: any;
  tDateMillisecs: any;
  difference: any;
  seconds: any;
  minutes: any;
  hours: any;
  days: any;
  userEnteredDate: any;
  year: number = 2022;
  month: number = 11;
  months = [
    'Jan',
    'Feb',
    'Mar',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  day: number = 31;

  myTimer(date: any) {
    this.currentDate = new Date();
    this.targetDate = new Date(date);
    this.cDateMillisecs = this.currentDate.getTime();
    this.tDateMillisecs = this.targetDate.getTime();
    this.difference = this.tDateMillisecs - this.cDateMillisecs;
    this.seconds = Math.floor(this.difference / 1000);
    this.minutes = Math.floor(this.seconds / 60);
    this.hours = Math.floor(this.minutes / 60);
    this.days = Math.floor(this.hours / 24);

    this.hours %= 24;
    this.minutes %= 60;
    this.seconds %= 60;
    this.hours = this.hours < 10 ? '0' + this.hours : this.hours;
    this.minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
    this.seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;
    this.daysDiv.nativeElement.innerHTML = this.days;
    this.hoursDiv.nativeElement.innerHTML = this.hours;
    this.minsDiv.nativeElement.innerHTML = this.minutes;
    this.secDiv.nativeElement.innerHTML = this.seconds;
  }

  onChange(event: any): void {
    var highestTimeoutId = setTimeout(';');
    for (var i = 0; i < highestTimeoutId; i++) {
      clearTimeout(i);
    }
    let data = event.target.value;
    let str =
      data.split('-')[1] + '-' + data.split('-')[2] + '-' + data.split('-')[0];
    setInterval(() => {
      this.myTimer(str);
      console.log(str);
    }, 1000);
  }
}
