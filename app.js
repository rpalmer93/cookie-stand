'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm',
'4pm', '5pm', '6pm', '7pm'];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var allStores = [];
var storeTable = document.getElementById('store-sales');

function Store(name, minCustPerHour, maxCustPerHour, avgCookiePerCust) {
  this.name= name;
  this.minCustPerHour= minCustPerHour;
  this.maxCustPerHour= maxCustPerHour;
  this.avgCookiePerCust= avgCookiePerCust;
  this.custsEachHour= [];
  this.cookiesEachHour= [];
  this.totalDailySales= 0;
  this.calcCustsEachHour= function() {
    for(var i = 0; i < hours.length; i++){
      this.custsEachHour.push(random(this.minCustPerHour,
        this.maxCustPerHour));
    }
  };
  this.calcCookiesEachHour= function() {
  this.calcCustsEachHour();
  for(var i = 0; i < hours.length; i++){
  var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiePerCust);
      this.cookiesEachHour.push(oneHour);
      this.totalDailySales =+ oneHour;
      // console.log(this.totalDailySales, 'total');
    }
  };
  this.render = function() {
      // create tr
      var trEl = document.createElement('tr');
      // create td
      var tdEl = document.createElement('td');
      // give td content (Name for an individual cat)
      tdEl.textContent = this.name;
      // append the td
      trEl.appendChild(tdEl);

      for (var i = 0; i < this.cookiesEachHour.length; i++) {

      tdEl = document.createElement('td');
      tdEl.textContent = this.cookiesEachHour[i];
      trEl.appendChild(tdEl);

      }
      storeTable.appendChild(trEl);
      
};
  this.calcCookiesEachHour();
  allStores.push(this);
}
  new Store('1st and Pike', 23, 65, 6.3);
  new Store('Sea-Tac Airport', 3, 24, 1.2);
  new Store('Seattle Center', 11, 38, 3.7);
  new Store('Capitol Hill', 20, 38, 2.3);
  new Store('Alki', 2, 16, 4.6);


  function renderStoreRows(){
    for(var i = 0; i < allStores.length; i++){
      allStores[i].render();
    };
  }

  renderStoreRows();
