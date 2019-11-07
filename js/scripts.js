
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
    
    /********************************
    * Display Pokemondetail in modal
    *********************************/
    
    function showDetails(item) {        
        var $modalContainer = document.querySelector('#modal-container');
        var modal = document.createElement('div');
        var image = document.createElement('img');
        var name = document.createElement('h1');
        var height = document.createElement('p');
        var types = document.createElement('p');
        var closeButtonElement = document.createElement('button'); 
        var exists = document.querySelector('.modal');
               
        //adding classes to variables
        modal.classList.add('modal');
        image.classList.add('pokemon-img');
        name.classList.add('pokemon-name');
        height.classList.add('pokemon-height');
        types.classList.add('pokemon-types');
        closeButtonElement.classList.add('modal-close');        
                
        // close modal button        
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);                        

        
        
        pokemonRepository.loadDetails(item).then(function () {                        
            image.setAttribute('src', item.imageUrl);
            name.innerText = item.name;
            height.innerText = 'Height - ' + item.height;
        });
        
        // to avoid creating another modal everytime another button is clicked
        if(exists) $modalContainer.removeChild(exists);
        
        


        //appending elements        
        modal.appendChild(image);
        modal.appendChild(name);
        modal.appendChild(height);
        modal.appendChild(types);
        modal.appendChild(closeButtonElement);

        $modalContainer.appendChild(modal);       
        
        //adding is-visible class to make modal visible
        $modalContainer.classList.add('is-visible');
                      
    }
    
    
    
    //defining $modalContainer as modal-container again
    var $modalContainer = document.querySelector('#modal-container');
    
   
   
    // close modal esc
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')) {
            hideModal();
        }
    });
    
    
    
    // close modal by clicking outside of it    
    $modalContainer.addEventListener('click', (e) => {
        var target = e.target;
        if (target === $modalContainer) {
            hideModal();
        }
    });
    
    
    
    // declaring hideModal function to remove Modal
    function hideModal() {
        var $modalContainer = document.querySelector('#modal-container');
        $modalContainer.classList.remove('is-visible');
    }  
    // referencing HTML ul-tag pokemon-list
    var $pokemonList = document.querySelector('.pokemon-list');
    
    //declaring forEach function to print pokemon
    pokemonRepository.getAll().forEach(function(pokemonDetails) {
        addListItem(pokemonDetails)
    });

})();




