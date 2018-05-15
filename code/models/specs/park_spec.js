const assert = require('assert');
const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');

describe('Park', function() {
  let park;
  beforeEach(function () {
    park = new Park('Jurassic Park', 20);
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
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur3 = new Dinosaur('branquio', 'carnivore', 50);
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.findDinosaurBySpecies('t-rex').length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to remove all dinosaurs of a particular species', function () {
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur3 = new Dinosaur('branquio', 'carnivore', 50);
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.removeDinosaursBySpecies('t-rex');
    const actual = park.findDinosaurBySpecies('t-rex').length;
    assert.strictEqual(actual, 0);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('t-rex', 'carnivore', 80);
    dinosaur3 = new Dinosaur('branquio', 'carnivore', 20);
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.getMostVisited().guestsAttractedPerDay;
    assert.strictEqual(actual, 80);
  });

});
