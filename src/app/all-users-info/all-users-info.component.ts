import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-all-users-info',
  templateUrl: './all-users-info.component.html',
  styleUrls: ['./all-users-info.component.css'],
})
export class AllUsersInfoComponent implements OnInit, OnChanges {
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
  @Input() userOcassionDate: any;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.onChange(this.userOcassionDate.date);
  }

  myTimer(date: any) {
    console.log('OUTPUT ~ myTimer ~ date', date);
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

  onChange(data: any): void {
    // var highestTimeoutId = setTimeout(';');
    // for (var i = 0; i < highestTimeoutId; i++) {
    //   clearTimeout(i);
    // }
    let date: any;
    if (new Date(data).getMonth() > new Date().getMonth()) {
      const splittedData = data.split('-');
      splittedData[0] = new Date().getFullYear();
      date = splittedData.join('-');
    } else {
      const splittedData = data.split('-');
      splittedData[0] = new Date().getFullYear() + 1;
      date = splittedData.join('-');
    }
    setInterval(() => {
      this.myTimer(date);
    }, 1000);
  }

  dateDiff(startingDate: any, endingDate?: any) {
    var startDate = new Date(
      new Date(startingDate).toISOString().substring(0, 10)
    );
    if (!endingDate) {
      endingDate = new Date().toISOString().substring(0, 10); // need date in YYYY-MM-DD format
    }
    var endDate = new Date(endingDate);
    if (startDate > endDate) {
      var swap = startDate;
      startDate = endDate;
      endDate = swap;
    }
    var startYear = startDate.getFullYear();
    var february =
      (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0
        ? 29
        : 28;
    var daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    var yearDiff = endDate.getFullYear() - startYear;
    var monthDiff = endDate.getMonth() - startDate.getMonth();
    if (monthDiff < 0) {
      yearDiff--;
      monthDiff += 12;
    }
    var dayDiff = endDate.getDate() - startDate.getDate();
    if (dayDiff < 0) {
      if (monthDiff > 0) {
        monthDiff--;
      } else {
        yearDiff--;
        monthDiff = 11;
      }
      dayDiff += daysInMonth[startDate.getMonth()];
    }

    return yearDiff + ' Years ' + monthDiff + ' Months ' + dayDiff + ' Days';
  }
}
