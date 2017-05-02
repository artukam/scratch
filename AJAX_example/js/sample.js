$(function(){
	var pokemon = [];
	var $pokemon = $("#pokemon");
	
  $.get('http://pokeapi.co/api/v2/pokemon')
  .then(function(res) {
    pokemon = pokemon.concat(res.results);
    return $.get(res.next);
  })
  .then(function(res) {
    pokemon = pokemon.concat(res.results);
    return $.get(res.next);
  })
  .then(function(res) {
    pokemon = pokemon.concat(res.results);
    return $.get(res.next);
  })
  .then(function(res) {
    pokemon = pokemon.concat(res.results);
    return $.get(res.next);
  })
  .then(function(res) {
    pokemon = pokemon.concat(res.results);
    var randomIndex = Math.floor(Math.random() * pokemon.length);
    var randomPokemon = pokemon[randomIndex];
    return $.get(randomPokemon.url);
  })
  .then(function(res) {
    var $h2 = $("<h2>", {
      text: res.name
    });
    var $img = $("<img>", {
      src: res.sprites.front_default,
    });
    var $ul = $("<ul>", {text: "Types:"});
    res.types.forEach(function(currentType) {
      $ul.append($("<li>", {text: currentType.type.name}));
    });
    $pokemon.append($h2, $img, $ul);
  });

/*  $.get('http://pokeapi.co/api/v2/pokemon', function(res) {
    pokemon = pokemon.concat(res.results);
    $.get(res.next, function(res) {
      pokemon = pokemon.concat(res.results);
      $.get(res.next, function(res) {
        pokemon = pokemon.concat(res.results);
        $.get(res.next, function(res) {
          pokemon = pokemon.concat(res.results);
          $.get(res.next, function(res) {
            pokemon = pokemon.concat(res.results);
            var randomIndex = Math.floor(Math.random() * pokemon.length);
            var randomPokemon = pokemon[randomIndex];
            $.get(randomPokemon.url, function(res) {
              var $h2 = $("<h2>", {
                text: res.name
              });
              var $img = $("<img>", {
                src: res.sprites.front_default,
              });
              var $ul = $("<ul>", {text: "Types:"});
              res.types.forEach(function(currentType) {
                $ul.append($("<li>", {text: currentType.type.name}));
              });
              $pokemon.append($h2, $img, $ul);
            })
          })
        })
      })
    })
  });*/

});