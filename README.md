# Tiles

A boilerplate for HTML5 canvas applications, based on RequireJS.

Its goal is to become a standard boilerplate code to jumpstart your canvas application. It is based on [RequireJS](http://requirejs.org/) (a Javascript module loader), so it has a nice modular structure. This means that every script will be defined as a module and will return something (an object, a function or just a primitive value).

By the way, you can also return a bunch of variables that will be loaded in the current scope: it's entirely your choice.

A sample directory layout is the following:

```
index.html
scripts/
    app.js
    main.js
    require.js
    app/
        shape.js
        tile.js
        sprite.js
    lib/
        backbone.js
        jquery.js
        underscore.js
    helper/
        util.js
assets/
    css/
        style.css
    images/
        tiles/
            tile1.png
            tile2.png
        sprites/
            sprite1.gif
            sprite2.gif
```

By following the [convention over configuration](http://en.wikipedia.org/wiki/Convention_over_configuration) design paradigm, you don't need to configure RequireJS: it is already optimized for you. Just start coding!

--
This code is licensed under the [WTFPL license](http://www.wtfpl.net/).
