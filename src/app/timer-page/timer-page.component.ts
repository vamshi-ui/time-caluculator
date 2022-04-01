import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-timer-page',
  templateUrl: './timer-page.component.html',
  styleUrls: ['./timer-page.component.css'],
})
export class TimerPageComponent implements OnInit {
  @ViewChild('days') daysDiv!: ElementRef;
  @ViewChild('hours') hoursDiv!: ElementRef;
  @ViewChild('mins') minsDiv!: ElementRef;
  @ViewChild('seconds') secDiv!: ElementRef;
  isUserOcassion = false;
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
  userOcassionDate: any;
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((data) => {
      if (data) {
        const userData: any = localStorage.getItem('userData');
        const info = JSON.parse(userData);
        info.forEach((element: any) => {
          if (element.id === +data.id) {
            this.onChange(element.date);
            this.userOcassionDate = element;
          }
        });
      }
    });
  }

  ngOnInit(): void {}
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

  onChange(data: any): void {
    var highestTimeoutId = setTimeout(';');
    for (var i = 0; i < highestTimeoutId; i++) {
      clearTimeout(i);
    }
    let date: any;
    if (new Date(data).getMonth() > new Date().getMonth()) {
      const splittedData = data.split('-');
      splittedData[0] = new Date().getFullYear();
      date = splittedData.join('-');
    } else if (new Date(data).getMonth() == new Date().getMonth()) {
      if (new Date(data).getDate() == new Date().getDate()) {
        this.isUserOcassion = true;
      } else if (new Date(data).getDate() > new Date().getDate()) {
        const splittedData = data.split('-');
        splittedData[0] = new Date().getFullYear();
        date = splittedData.join('-');
      } else {
        const splittedData = data.split('-');
        splittedData[0] = new Date().getFullYear() + 1;
        date = splittedData.join('-');
      }
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

    return yearDiff + 'Years ' + monthDiff + 'Months ' + dayDiff + 'Days';
  }

  bgImage(): any {
    switch (this.userOcassionDate.ocassion) {
      case 'Birth Day': {
        return 'bd-opacity';
      }
      case 'Wedding Anniversary': {
        return 'wd-opacity';
      }
      case 'Work Anniversary': {
        return 'wk-opacity';
      }
      case 'New Year': {
        return 'nw-opacity';
      }
      case 'Holiday/Vacation': {
        return 'hd-opacity';
      }
      case 'Memorial Day': {
        return 'md-opacity';
      }
    }
  }
}
