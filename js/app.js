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