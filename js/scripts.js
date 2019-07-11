var repository = [
    {name: 'Bisasam', height: 0.7, type: ['Pflanze', 'Gift']},
    {name: 'Glumanda', height: 0.6, type: ['Feuer']},
    {name: 'Schiggy', height: 0.5, type: ['Wasser']}
];
for (var i = 0; i < repository.length; i++) {
    if (repository[i].height < 0.7){
        document.write(repository[i].name +' '+ '(height:' + repository[i].height +')' +' '+'type:'+' ' + repository[i].type + '<br>');
    } else {
        document.write(repository[i].name +' '+ '(height:' + repository[i].height +') -Wow, that\'s big! '+'type:'+' ' + repository[i].type + '<br>');
    }
}
