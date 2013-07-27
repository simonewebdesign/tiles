define([
  'jquery', 
  'foo', 
  'app/tile', 
  'app/specificTile', 
  'app/verySpecificTile'
  ], function($, foo, tile, specificTile, verySpecificTile) {

  //console.log("app module and its dependencies are loaded");

  //console.log("Even jquery is loaded! " + $);

  //console.debug(foo);

  //console.debug(tile);

  var aTile = new tile();
  //console.log(aTile);

  aTile.setBackground("nuovo background");

  //console.log(aTile);

  var aSpecificTile = new specificTile();

  aSpecificTile.setColor = 3;
  //console.log(aSpecificTile);
  aSpecificTile.setBackground('red');
  //console.log(aSpecificTile);
  //console.log(aSpecificTile.background);

  var aVerySpecificTile = new verySpecificTile();

  aVerySpecificTile.setColor("whiteCollar");

  console.log(aVerySpecificTile);

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
