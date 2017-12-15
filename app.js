'use strict';


var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm',
'4pm', '5pm', '6pm', '7pm'];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var allStores = [];
var form = document.getElementById('store-sales');
var storeTable = document.getElementById('store-sales');
// var data = [];


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
      var trEl = document.createElement('tr');
      var tdEl = document.createElement('td');
      var thEl = document.createElement('th');
      thEl.textContent = this.name;
      trEl.appendChild(thEl);

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

function formData(event) {
  event.preventDefault();

  var name = event.target.store.value;
  var minCust = event.target.minCust.value;
  var maxCust = event.target.maxCust.value;
  var avgCookie = event.target.avgCookie.value;

  allStores.push(new Store(name, minCustPerHour, maxCustPerHour, avgCookiePerCust));
  // createTable();
  form.reset();
  allStores[5].render();
}

// function createTable() {
//   var row;
//   for (var i = 0; i < allStores.length; i++) {
//     row = document.createElement('tr');
//     row.innerHTML =
//       '<td>' + data[i].store + '</td>' +
//        '<td>' + data[i].minCust + '</td>' +
//        '<td>' + data[i].maxCust + '</td>' +
//        '<td>' + data[i].avgCookie + '</td>'
//  }
//
//  table.appendChild(row);
// }

  function renderHeaderRow() {
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    var thEl = document.createElement('th');
    tdEl.textContent = ' ';
    trEl.appendChild(tdEl);
    for (var i = 0; i < hours.length; i++) {
      thEl = document.createElement('th');
      thEl.textContent = hours[i];
      trEl.appendChild(thEl);
    };
    storeTable.appendChild(trEl);
  }

  function renderStoreRows(){
    for(var i = 0; i < allStores.length; i++){
      allStores[i].render();
    };
  }

form.addEventListener('submit', formData);

renderHeaderRow();
renderStoreRows();
