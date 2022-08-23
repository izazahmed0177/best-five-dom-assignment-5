// 
// player add array
const players = [];
//calculate player value 
document.getElementById('btn-calculate').addEventListener('click',function(){

    const playerCost=getInputFieldValueById('player-cost');
    let totalPlayersList1=players.length;
    

    if (players.length <=5) {
        // let totalPlayersList=players.length;
    
        const playerExpenses=playerCost*totalPlayersList1;
      

        if (playerExpenses<0 ) {
            alert('Please Give me a Valid Positive Input !!')
        } else if (typeof(playerExpenses) !='number') {
            alert('Please Give me a Valid Input !!')
        }
         else if (isNaN(playerExpenses)) {
            alert('Please Give me a Valid Input !!')
        }else{

            
    
            setTextElementValueById('player-expenses',playerExpenses);
        }


    } else {


        const playerExpenses=playerCost*5;
        

        if (playerExpenses<0 ) {
            alert('Please Give me a Valid Positive Input !!')
        } else if (typeof(playerExpenses) !='number') {
            alert('Please Give me a Valid Input !!')
        }
         else if (isNaN(playerExpenses)) {
            alert('Please Give me a Valid Input !!')
        }else{

            
    
            setTextElementValueById('player-expenses',playerExpenses);
        }


        
    }
    // console.log('click')
   
    // console.log(playerCost)
})
//-------
// calculate total player & manager & coach
document.getElementById('btn-calculate-total').addEventListener('click',function(){

const mangerCost=getInputFieldValueById('manger-cost');
const coachCost=getInputFieldValueById('coach-cost');

const playerExpenses=getTextElementValueById('player-expenses')

if (((mangerCost) < 0) ||((coachCost)<0) ||((playerExpenses)<0) ) {
    alert('Please Give me a Valid Positive Input !!')
} else if ((typeof(mangerCost) != 'number' ) || (typeof(coachCost) !="number") ||(typeof(playerExpenses) !='number')) {
    alert('Please Give me a Valid Input !!')
}
 else if (isNaN(mangerCost) || isNaN(coachCost) || isNaN(playerExpenses)) {
    alert('Please Give me a Valid Input !!')  
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
// display select player
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
// add player button and chach player
function addToPlayer(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;
    // console.log(playerName)
       const playerObj={
            playerName:playerName,
         };
    players.push(playerObj);
    // console.log(players);
    // console.log(playerObj);
    let totalPlayersList=players.length;

    // console.log(totalPlayersList);

    if (totalPlayersList<=5) {
        displayPlayer();
        element.disabled = true; 
        element.setAttribute("style", "background-color: #cccccc;");
    
    } else {
        alert("You Can Select Only Five Players !!")
        
    }
}



