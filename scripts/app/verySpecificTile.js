define([
  'app/tile',
  'app/specificTile'
  ], function(tile, specificTile) {

  var verySpecificTile = function() {

    this.anotherFreakingVariable = 'aFreakingDefaultValue';

    this.updateTheAnotherFreakingVariable = function(newValue) {
      this.anotherFreakingVariable = newValue;
    }
  };

  //verySpecificTile.prototype = new tile();
  verySpecificTile.prototype = new specificTile();

  return verySpecificTile;

});
