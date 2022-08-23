// 
const players = [];
//
document.getElementById('btn-calculate').addEventListener('click',function(){

    const playerCost=getInputFieldValueById('player-cost');
    let totalPlayersList=players.length;
    console.log(totalPlayersList);

    if (players.length <=5) {
        const playerExpenses=playerCost*totalPlayersList;


        if (playerExpenses<0 ) {
            alert('give me positive number')
        } else if (typeof(playerExpenses) !='number') {
            alert('give me  number')
        }
         else if (isNaN(playerExpenses)) {
            alert('give me not a nan number')
        }else{
    
            setTextElementValueById('player-expenses',playerExpenses);
        }
    } else {
        
    }
    // console.log('click')
   
    // console.log(playerCost)
    

    //

  

   

})
//

//-------

document.getElementById('btn-calculate-total').addEventListener('click',function(){

const mangerCost=getInputFieldValueById('manger-cost');
const coachCost=getInputFieldValueById('coach-cost');

const playerExpenses=getTextElementValueById('player-expenses')

if (((mangerCost) < 0) ||((coachCost)<0) ||((playerExpenses)<0) ) {
    alert('give me positive number')
} else if ((typeof(mangerCost) != 'number' ) || (typeof(coachCost) !="number") ||(typeof(playerExpenses) !='number')) {
    alert('give me  number')
}
 else if (isNaN(mangerCost) || isNaN(coachCost) || isNaN(playerExpenses)) {
    alert('give me not a nan number')

    
   
}
else{

    const calculateTotalAmount = playerExpenses + mangerCost + coachCost;

    setTextElementValueById('calculate-total-amount',calculateTotalAmount);
}

// console.log(mangerCost,coachCost,playerExpenses)

// const calculateTotalAmount = playerExpenses + mangerCost + coachCost;

// setTextElementValueById('calculate-total-amount',calculateTotalAmount);
})

//-------------------------------

//------------------------------------------------------
function displayPlayer() {

    const playerList1=document.getElementById('player-list');
        playerList1.textContent = '';
    
        for (let i = 0; i < players.length; i++) {
            const element = players[i];
            console.log(players[i]);
    
            const tr = document.createElement("tr");
    
            tr.innerHTML = ` 
            <th>${i+1}. </th>
            <td> ${players[i].playerName}</td>
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

    if (totalPlayersList<=5) {
        displayPlayer();
        element.disabled = true;
       
        element.setAttribute("style", "background-color: #cccccc;");
    
    } else {
        alert("only 5")
        
    }

   

}



