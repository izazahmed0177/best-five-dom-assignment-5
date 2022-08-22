// 
const players = [];
//
document.getElementById('btn-calculate').addEventListener('click',function(){
    // console.log('click')
    const playerCost=getInputFieldValueById('player-cost');
    // console.log(playerCost)
    const playerExpenses=playerCost*5;

    //

    setTextElementValueById('player-expenses',playerExpenses);

})
//

//-------

document.getElementById('btn-calculate-total').addEventListener('click',function(){

const mangerCost=getInputFieldValueById('manger-cost');
const coachCost=getInputFieldValueById('coach-cost');

const playerExpenses=getTextElementValueById('player-expenses')

console.log(mangerCost,coachCost,playerExpenses)

const calculateTotalAmount = playerExpenses + mangerCost + coachCost;

setTextElementValueById('calculate-total-amount',calculateTotalAmount);
})



//------------------------------------------------------
function displayPlayer() {

    const playerList1=document.getElementById('player-list');
        playerList1.textContent = '';
    
        for (let i = 0; i < players.length; i++) {
            const element = players[i];
            console.log(players[i]);
    
            const tr = document.createElement("tr");
    
            tr.innerHTML = ` 
            <th>${i+1}</th>
            <td>${players[i].playerName}</td>
             `;
            playerList1.appendChild(tr);    
        }
      
    
}




//----------------------------------

function addToPlayer(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;

    // console.log(playerName)

       const playerObj={
            playerName:playerName,
         };
    players.push(playerObj);

  
    // console.log(players);
    console.log(playerObj);

    
    let totalPlayersList=players.length;
    console.log(totalPlayersList);

    displayPlayer();

}


