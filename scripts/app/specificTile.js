define(['app/tile'], function(tile) {

  var specificTile = function() {

    this.color = 0;

    this.setColor = function(colour) {
      this.color = colour;
    }

  };

  specificTile.prototype = new tile();

  return specificTile;

});
