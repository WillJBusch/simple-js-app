
(function() {
    var pokemonRepository = (function() {
        var repository = [ ];
        var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

        
        function add(pokemon) {
            repository.push(pokemon);
        }
  
        function getAll() {
            return repository;
        }
        
        function loadList() {
            return fetch(apiUrl).then(function (response) {
                return response.json();
            }).then(function (json) {
                json.results.forEach(function (item) {
                    var pokemon = {
                        name: item.name,
                        detailsUrl: item.url
                    };
                    add(pokemon);
                });                
            }).catch(function (e) {
                console.erroe(e);
            })
        }

        function loadDetails(item) {
            var url = item.detailsUrl;
            return fetch(url).then(function (response) {
                return response.json();
            }).then(function (details) {
                // now we add details to the item
                item.imageUrl = details.sprites.front_default;
                item.height = details.height;
                item.types = Object.keys(details.types);
            }).catch(function (e) {
                console.error(e);
            });
        }
        
        
        //returning functions inside pokemonRepository to be able reference outside of IIFE
        return {
  
            add: add,
            getAll: getAll,
            //search: search,
            loadList: loadList,
            loadDetails: loadDetails
    
        };
    })();

    pokemonRepository.loadList().then(function() {
        //no data is loaded ?????
        pokemonRepository.getAll().forEach(function(pokemon) {
            addListItem(pokemon);
        });
    });
    
    //declare function that creates buttons and li's
    function addListItem (pokemon) {
        var listItem = document.createElement('li'); //create li  
        var button = document.createElement('button'); //create button
        button.innerText = pokemon.name;
        button.classList.add('buttonToStyle');
  
        listItem.appendChild(button);
        $pokemonList.appendChild(listItem); // add li to ul
        //adding event listener
        button.addEventListener('click', function(event){
            showDetails(pokemon);
        }); 
  
    }
    
    function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function () {
          console.log(item);        
        });
    }
    // referencing HTML ul-tag pokemon-list
    var $pokemonList = document.querySelector('.pokemon-list');
    
    //declaring forEach function to print pokemon
    pokemonRepository.getAll().forEach(function(pokemonDetails) {
        addListItem(pokemonDetails)
    });

})();



