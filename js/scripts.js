var repository2 = [
    {name: 'Raupy', height: 0.3, type: ['Käfer']},       
    {name: 'Hornliu', height: 0.3, type: ['Käfer, Gift']},
    {name: 'Taubsi', height: 0.3, type: ['Normal, Flug']}
];


(function() {
    var pokemonRepository = (function() {
        var repository = [
            {name: 'Bisasam', height: 0.7, type: ['Pflanze', 'Gift']},
            {name: 'Glumanda', height: 0.6, type: ['Feuer']},
            {name: 'Schiggy', height: 0.5, type: ['Wasser']},
            {name: 'Raupy', height: 0.3, type: ['Käfer']},       
            {name: 'Hornliu', height: 0.3, type: ['Käfer, Gift']},
            {name: 'Taubsi', height: 0.3, type: ['Normal, Flug']}
        ];
  
        function add(pokemon) {
            repository.push(pokemon);
        }
  
        function getAll() {
            return repository;
        }
        //returning functions inside pokemonRepository to be able reference outside of IIFE
        return {
  
            add: add,
            getAll: getAll,
  
            //addListItem : addListItem  
        };
    })();
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
    
    function showDetails(pokemon) {
      console.log(pokemon.name)
    }
    // referencing HTML ul-tag pokemon-list
    var $pokemonList = document.querySelector('.pokemon-list');
    //declaring function printPokemon
    
    //declaring forEach function to print pokemon
    pokemonRepository.getAll().forEach(function(pokemonDetails) {
        addListItem(pokemonDetails)
    });

})();



