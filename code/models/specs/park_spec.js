const assert = require('assert');
const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaur;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function () {
    park = new Park('Jurassic Park', 20);
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('t-rex', 'carnivore', 80);
    dinosaur3 = new Dinosaur('branquio', 'hervibore', 20);

  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 20);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 0);
  });

  it('should be able to add a dinosaur to its collection', function () {
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    park.addDinosaur(dinosaur);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    park.addDinosaur(dinosaur);
    park.removeDinosaur(dinosaur);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 0);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.findDinosaurBySpecies('t-rex').length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to remove all dinosaurs of a particular species', function () {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.removeDinosaursBySpecies('t-rex');
    const actual = park.findDinosaurBySpecies('t-rex').length;
    assert.strictEqual(actual, 0);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.getMostVisited().guestsAttractedPerDay;
    assert.strictEqual(actual, 80);
  });

  it('should be able to get total number of visitors per day', function() {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    const actual = park.getNumberOfVisitPerDay();
    assert.strictEqual(actual, 130);
  });

  it('should be able to get total number of visitors per year', function() {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    const actual = park.getNumberOfVisitPerYear();
    assert.strictEqual(actual, 47450);
  });

  it('should be able to get total revenue for a year', function() {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    const actual = park.getRevenuePerYear();
    assert.strictEqual(actual, 949000);

  });

  it('should be able to provide a list of dinosaurs in the park of each diet type', function() {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.numberOfDinosaursByDiet().hervibore;
    assert.strictEqual(actual, 1);
  });

});
