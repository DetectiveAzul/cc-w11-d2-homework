const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
  }

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  const index = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(index, 1);
};

Park.prototype.findDinosaurBySpecies = function (species) {
  const finding = this.dinosaurs.filter(function (dinosaur) {
    return dinosaur.species.includes(species);
  });
  return finding;
};


Park.prototype.removeDinosaursBySpecies = function (species) {
  const dinosaurs = this.findDinosaurBySpecies(species);
  for (let dinosaur of dinosaurs) {
    this.removeDinosaur(dinosaur);
  }
};

Park.prototype.sortByVisits = function () {
  this.dinosaurs.sort( function(a,b) {
    return b.guestsAttractedPerDay - a.guestsAttractedPerDay;
  });
};

Park.prototype.getMostVisited = function () {
  this.sortByVisits();
  return this.dinosaurs[0];
}

module.exports = Park;
