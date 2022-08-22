// 
document.getElementById('btn-calculate').addEventListener('click',function(){
    console.log('click')
    const playerCost=getInputFieldValueById('player-cost');
    console.log(playerCost)
})
//

//-------

document.getElementById('btn-calculate-total').addEventListener('click',function(){

const mangerCost=getInputFieldValueById('manger-cost');
const coachCost=getInputFieldValueById('coach-cost');

console.log(mangerCost,coachCost)

})