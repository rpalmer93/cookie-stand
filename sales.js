var pike = {
    minCust: 23,
    maxCust: 65,
    avgCookie: 6.3,
    avgCust: function(min, max) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  }
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
