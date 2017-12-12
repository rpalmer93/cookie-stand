'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm',
'4pm', '5pm', '6pm', '7pm'];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var pike = {
    name: '1st and Pike',
    minCustPerHour: 23,
    maxCustPerHour: 65,
    avgCookiePerCust: 6.3,
    custsEachHour: [],
    cookiesEachHour: [],
    totalDailySales: 0,
    calcCustsEachHour: function() {

    };
    calcCookiesEachHour: function() {

    };
    render: function() {

    }
  //   avgCust: function(min, max) {
  //   return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  // }
}

var airport = {
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  avgCust: function(min, max) {
  return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  }
}

var center = {
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  avgCust: function(min, max) {
  return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  }
}

var capHill = {
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  avgCust: function(min, max) {
  return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  }
}

var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  avgCust: function(min, max) {
  return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  }
}
