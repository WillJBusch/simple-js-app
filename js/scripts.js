

/*(function () {
    //Pokemon array
    var repository = [ 
        {name: 'Bisasam', height: 0.7, type: ['Pflanze', 'Gift']},
        {name: 'Glumanda', height: 0.6, type: ['Feuer']},
        {name: 'Schiggy', height: 0.5, type: ['Wasser']}
    ];
})*/
    

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
            {name: 'Schiggy', height: 0.5, type: ['Wasser']}
        ];
        
        function add(pokemon) {
            repository.push(pokemon);
        }
        //declare function that creates buttons and li's 
        function addListItem (pokemon) {
            var listItem = document.createElement('li'); //create li                       
            var button = document.createElement('button');
            button.innerText = pokemon;
            button.classList.add('buttonToStyle');            
            listItem.appendChild(button);
            $pokemonList.appendChild(listItem);          // add li to ul                        
            button.addEventListener('click', function(event){                
                showDetails(repository);
                
            });
        }
        //adding event listener
        function showDetails(pokemon) {
            pokemon.forEach(function(pokemon) {
                console.log(pokemon.name)
            });
        }

        function getAll() {
            return repository;
        }
        //returning functions inside pokemonRepository to be able reference outside of IIFE
        return {                       
            add: add,
            getAll: getAll,  
            addListItem : addListItem          
        };
    })();    
    // referencing HTML ul-tag pokemon-list
    var $pokemonList = document.querySelector('.pokemon-list');
    //declaring function printPokemon
    function printPokemon (){
        //declaring function with forEach-loop to print Pokemondetails
        pokemonRepository.getAll().forEach(function(pokemonDetails){            
            
            pokemonRepository.addListItem(pokemonDetails.name);  

        });
    }    
    repository2.forEach(pokemonRepository.add) //referencing all repository2 items via forEach loop
    console.log(pokemonRepository.getAll()); // [ output Pokemon parameter in console ]
    printPokemon();//calling printPokemon function
})()



