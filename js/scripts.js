//Pokemon objects
var repository = [ 
    {name: 'Bisasam', height: 0.7, type: ['Pflanze', 'Gift']},
    {name: 'Glumanda', height: 0.6, type: ['Feuer']},
    {name: 'Schiggy', height: 0.5, type: ['Wasser']}
];
var repository2 = [
    {name: 'Raupy', height: 0.3, type: ['Käfer']},
    {name: 'Hornliu', height: 0.3, type: ['Käfer, Gift']},
    {name: 'Taubsi', height: 0.3, type: ['Normal, Flug']}
]
//declaring function of repository to print Pokemon
function printPokemonDetails(pokemonList) {
    //loop to print pokemon out    
    for (var i = 0; i < pokemonList.length; i++) { 
        if (pokemonList[i].height < 0.7){
            document.write(pokemonList[i].name +' '+ '(height:' + pokemonList[i].height +')' +' '+'type:'+' ' + pokemonList[i].type + '<br>');
        } else {
            document.write(pokemonList[i].name +' '+ '(height:' + pokemonList[i].height +') -Wow, that\'s big! '+'type:'+' ' + pokemonList[i].type + '<br>');
        }
    }
}
//calling printPokemonDetails function twice
printPokemonDetails(repository);
printPokemonDetails(repository2);
