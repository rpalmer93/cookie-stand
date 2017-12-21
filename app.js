'use strict';


var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm',
'4pm', '5pm', '6pm', '7pm'];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


var allStoresData = [ ['1st and Pike', 23, 65, 6.3],
                        ['Seatac Airport', 3, 24, 1.2],
                        ['Seattle Center', 11, 38, 3.7],
                        ['Capitol Hill', 20, 38, 2.3],
                        ['Alki Beach', 2, 16, 4.6] ];

var allStores = [];
var form = document.getElementById('store_form');
var storeTable = document.getElementById('store-sales');



function Store(name, minCustPerHour, maxCustPerHour, avgCookiePerCust) {
  this.name= name;
  this.minCustPerHour= minCustPerHour;
  this.maxCustPerHour= maxCustPerHour;
  this.avgCookiePerCust= avgCookiePerCust;
  this.custEachHour= [];
  this.cookiesEachHour= [];
  this.totalDailySales= 0;
  this.totalCust = 0;
  this.totalCookies = 0;
  this.fakeCust = function() {
   for (var i =0; i<hours.length; i++) {
     this.custEachHour[i] = random(this.minCustPerHour, this.maxCustPerHour);
     this.cookiesEachHour[i] = Math.ceil(this.custEachHour[i] * this.avgCookiePerCust);
     this.totalCust += this.custEachHour[i];
     this.totalCookies += this.cookiesEachHour[i];
   }
 }
 this.fakeCust();
}

for (var i = 0; i < allStoresData.length; i++) {
 allStores.push(new Store(allStoresData[i][0], allStoresData[i][1], allStoresData[i][2], allStoresData[i][3]));
}
  // this.calcCookiesEachHour= function() {
  // this.calcCustsEachHour();
  // for(var i = 0; i < hours.length; i++){
  // var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiePerCust);
  //     this.cookiesEachHour.push(oneHour);
  //     this.totalDailySales =+ oneHour;
  //     // console.log(this.totalDailySales, 'total');
  //   }
  // };

  Store.prototype.render = function() {
      var trEl = document.createElement('tr');
      var tdEl = document.createElement('td');
      var thEl = document.createElement('th');
      thEl.textContent = this.name;
      trEl.appendChild(thEl);

    for (var i = 0; i < this.cookiesEachHour.length; i++) {
      tdEl = document.createElement('td');
      tdEl.textContent = this.cookiesEachHour[i];
      trEl.appendChild(tdEl);
    };
    storeTable.appendChild(trEl);

};

  // new Store('1st and Pike', 23, 65, 6.3);
  // new Store('Sea-Tac Airport', 3, 24, 1.2);
  // new Store('Seattle Center', 11, 38, 3.7);
  // new Store('Capitol Hill', 20, 38, 2.3);
  // new Store('Alki', 2, 16, 4.6);

function unRender() {
  document.getElementById('store-sales').innerText = ' ';
}

function formData(event) {
  event.preventDefault();

  var name = event.target.store.value;
  var minCustPerHour = parseInt(event.target.minCustPerHour.value);
  var maxCustPerHour = parseInt(event.target.maxCustPerHour.value);
  var avgCookiePerCust = parseInt(event.target.avgCookiePerCust.value);

  allStores.push(new Store(name, minCustPerHour, maxCustPerHour, avgCookiePerCust));
  unRender();
  renderHeaderRow();
  renderFormRow();
  form.reset();
}

function renderFormRow() {
  for(var i = 0; i < allStores.length; i++){
    allStores[i].render();
  };
}

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
