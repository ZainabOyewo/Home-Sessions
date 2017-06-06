// testing code goes here

'use strict';

//const assert = require('chai').assert;
const expect = require('jasmine').expect;
//const should = require('chai').should;
const myApp = require('../app/library.js');

describe("Prime Functionality", function() {
  it("should return [2,3,5,7] as prime numbers below 10", function() {
   // assert.equal(myApp.computeAverage(1, 2, 3), 2);
    //expect(myApp.computeAverage(1,2,3)).to.equal(2);
    //myApp.computeAverage(1,2,3).should.equal(2);
    expect(myApp.getPrimes(10)).toBe([2,3,5,7]);

  })
  it("should return false as prime numbers below 1", function() {
    //assert.equal(myApp.computeAverage(3, 7, 5), 5);
    //expect(myApp.computeAverage(3,7,5)).to.equal(5);
     //myApp.computeAverage(3,7,5).should.equal(5);
     expect(myApp.getPrimes(1)).toBe(false);
  })
  it("should return false as prime numbers below 0", function() {
    //assert.equal(myApp.computeAverage(1, 1, 1), 1);
    //expect(myApp.computeAverage(1,1,1)).to.equal(1);
     //myApp.computeAverage(1,1,1).should.equal(1);
     expect(myApp.getPrimes(0)).toBe(false);
  })
  it("should return false as prime numbers below -10", function() {
    //assert.equal(myApp.computeFactorial(5), 120);
    //expect(myApp.computeFactorial(5)).to.equal(120);
     //myApp.computeFactorial(5).should.equal(120);
     expect(myApp.getPrimes(-10)).toBe(false);
  })
  it("should return false as prime numbers below ftf", function() {
    //assert.equal(myApp.computeFactorial(1), 1);
    //expect(myApp.computeFactorial(1)).to.equal(1);
    //myApp.computeFactorial(1).should.equal(1);
    expect(myApp.getPrimes('ftf')).toBe(false);
  })
  it("should return [2,3] as prime numbers below 3,56", function() {
    //assert.equal(myApp.computeFactorial(0), 1);
    //expect(myApp.computeFactorial(0)).to.equal(1);
    //myApp.computeFactorial(0).should.equal(1);
    expect(myApp.getPrimes(3.56)).toBe([2,3]);
  })
  it("should return [2,3,5,7] as prime numbers below 10.67", function() {
    //assert.equal(myApp.computeFactorial('53t'), false);
    //expect(myApp.computeFactorial('53t')).to.equal(false);
    //myApp.computeFactorial('53t').should.equal(false);
    expect(myApp.getPrimes(10.67)).toBe([2,3,5,7]);
  
   it("should return false as prime numbers below 10prime", function() {
    //assert.equal(myApp.computeFactorial('53t'), false);
    //expect(myApp.computeFactorial('53t')).to.equal(false);
    //myApp.computeFactorial('53t').should.equal(false);
    expect(myApp.getPrimes(10prime)).toBe(false);
  })
    it("should return false as prime numbers below ''", function() {
    //assert.equal(myApp.computeFactorial('53t'), false);
    //expect(myApp.computeFactorial('53t')).to.equal(false);
    //myApp.computeFactorial('53t').should.equal(false);
    expect(myApp.getPrimes(" ")).toBe(false);
  })
     it("should return false as prime numbers below 0.34", function() {
    //assert.equal(myApp.computeFactorial('53t'), false);
    //expect(myApp.computeFactorial('53t')).to.equal(false);
    //myApp.computeFactorial('53t').should.equal(false);
    expect(myApp.getPrimes(0.34)).toBe(false);
  })
})
