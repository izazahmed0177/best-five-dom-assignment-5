//

const players = [];


function  displayProduct() {
    let totalPlayer = 0;


    const playerList=document.getElementById('player-list')
    playerList.textContent='';

    for (let i = 0; i < players.length; i++) {
        const element = players[i];
        console.log(element);
        
        
    }
  
    
}

//---------------

function addToPlayer(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;

    console.log(playerName)

    players.push(playerName);

  
    console.log(players);

    
    let totalPlayersList=players.length;
    console.log(totalPlayersList);

    displayPlayer();
}