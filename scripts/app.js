define(['jquery', 'foo'], function($, foo) {

  console.log("app module and its dependencies are loaded");

  console.log("Even jquery is loaded! " + $);

  console.debug(foo);

});
