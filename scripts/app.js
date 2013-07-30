define([
  'jquery', 
  'foo', 
  'app/tile', 
  'app/specificTile',
  'app/verySpecificTile'
], function($, foo, tile, specificTile, verySpecificTile) {

  var aTile = new tile();
  aTile.setBackground('blue');

  var aSpecificTile = new specificTile();
  aSpecificTile.setColor = 3;
  aSpecificTile.setBackground('red');

  var aVerySpecificTile = new verySpecificTile();
  aVerySpecificTile.setColor('white');


  // Testing inheritance...

  console.log(aTile instanceof specificTile);
  console.log("Expected: false");

  console.log(aSpecificTile instanceof specificTile);
  console.log("Expected: true");

  console.log(aSpecificTile instanceof tile);
  console.log("Expected: true");  

  console.log(aTile instanceof verySpecificTile);
  console.log("Expected: false");

  console.log(aVerySpecificTile instanceof verySpecificTile);
  console.log("Expected: true");

  console.log(aVerySpecificTile instanceof specificTile);
  console.log("Expected: true");

  console.log(aVerySpecificTile instanceof tile);
  console.log("Expected: true");

});
