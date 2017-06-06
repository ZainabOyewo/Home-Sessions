// testing code goes here

'use strict';

const expect = require('jasmine').expect;
const myApp = require('../app/library.js');

describe("Prime Functionality", function() {
  it("should return [2,3,5,7] as prime numbers below 10", function() {
    expect(myApp.getPrimes(10)).toEqual([2,3,5,7]);
  })
  it("should return false as prime numbers below 1", function() {
    expect(myApp.getPrimes(1)).toEqual(false);
  })
  it("should return false as prime numbers below 0", function() {
    expect(myApp.getPrimes(0)).toEqual(false);
  })
  it("should return false as prime numbers below -10", function() {
    expect(myApp.getPrimes(-10)).toEqual(false);
  })
  it("should return false as prime numbers below ftf", function() {
    expect(myApp.getPrimes('ftf')).toEqual(false);
  })
  it("should return [2,3] as prime numbers below 3,56", function() {
    expect(myApp.getPrimes(3.56)).toEqual([2,3]);
  })
  it("should return [2,3,5,7] as prime numbers below 10.67", function() {
    expect(myApp.getPrimes(10.67)).toEqual([2,3,5,7]);
  })
   it("should return false as prime numbers below 10prime", function() {
    expect(myApp.getPrimes('10prime')).toEqual(false);
  })
    it("should return false as prime numbers below ''", function() {
    expect(myApp.getPrimes(" ")).toEqual(false);
  })
     it("should return false as prime numbers below 0.34", function() {
    expect(myApp.getPrimes(0.34)).toEqual(false);
  })
})
