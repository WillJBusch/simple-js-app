(function() {
    var pokemonRepository = (function() {
        var repository = [ ];
        var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

        // add additional pokemon to object array repository
        function add(pokemon) {
            repository.push(pokemon);
        }
        //returning pokedex object array
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
                console.error(e);
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
                item.types = Object.values(details.types);  // key changed to values
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
        
        pokemonRepository.getAll().forEach(function(pokemon) {
            addListItem(pokemon);
        });
    });
    
    //declare function to create li and append button
    function addListItem (pokemon) {
        var listItem = document.createElement('li'); //create li  
        var button = document.querySelector('#pokemon-button');
        button.innerText = pokemon.name;  
        listItem.appendChild(button);
        $pokemonList.appendChild(listItem); // add li to ul
        //adding event listener
        button.addEventListener('click', function(event){
            showDetails(pokemon);
        }); 
  
    }
    
    /********************************
    * Display Pokemondetail in modal
    *********************************/
    
    function showDetails(item) {        
        // referencing HTML elements and modal classes
        var modal = document.querySelector('.modal-body');
        var name = document.querySelector('.modal-title');
        
        //creating variables and HTML-elements
        var img = document.createElement('img');
        var height = document.createElement('p');
        var types = document.createElement('p');
        var pokemonDiv = document.createElement('div');
               
        //appending img to pokeomDiv for styling in css
        pokemonDiv.appendChild(img);

        //adding classes to variables
        img.classList.add('pokemon-img');
        name.classList.add('pokemon-name');
        height.classList.add('pokemon-height');
        types.classList.add('pokemon-types'); 
        pokemonDiv.classList.add('pokemon-img-block'); 


        pokemonRepository.loadDetails(item).then(function () {
            img.setAttribute('src', item.imageUrl);
            name.innerText = item.name;
            height.innerText = 'Height - ' + item.height;
            
            span = types.innerHTML= item.types.map(item => {
                return item.type.name;
            })
        });
        
        // to avoid creating another modal everytime another button is clicked
        if(modal) $modalContainer.removeChild(modal);



        //appending elements        
        modal.appendChild(pokemonDiv);
        modal.appendChild(height);
        modal.appendChild(types);
    }
    var $pokemonList = document.querySelector('.pokemon-list');
    
}());




