

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

        function getAll() {
            return repository;
        }

        return {
            add: add,
            getAll: getAll            
        };
    })();    
    
    //declaring function printPokemon
    function printPokemon (){
        //declaring function with forEach-loop to print Pokemondetails
        pokemonRepository.getAll().forEach(function(pokemonDetails){
            if (pokemonDetails.height < 0.7){
                document.write(pokemonDetails.name +' '+ '(height:' + pokemonDetails.height +')' +' '+'type:'+' ' + pokemonDetails.type + '<br>');
            } else {
                document.write(pokemonDetails.name +' '+ '(height:' + pokemonDetails.height +') -Wow, that\'s big! '+'type:'+' ' + pokemonDetails.type + '<br>');
            }    
        });
    }
    
    repository2.forEach(pokemonRepository.add) //referencing all repository2 items via forEach loop
    //pokemonRepository.add(...repository2); // parameter for function that pushes value into array
    console.log(pokemonRepository.getAll()); // [ output Pokemon parameter ]
    printPokemon();//calling printPokemon function
})()



