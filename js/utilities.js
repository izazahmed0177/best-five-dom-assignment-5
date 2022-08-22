// input feild value 

//-------------------

function getInputFieldValueById(inputId) {
    const inputField=document.getElementById(inputId);
    const inputFieldValueString=inputField.value; 
    const inputFieldValue=parseFloat(inputFieldValueString); 

    // inputField.value='';
    return inputFieldValue;
}

//--------------


//------------------
// set value in text field
function setTextElementValueById(elementId,newValue) {
    const textElement=document.getElementById(elementId);
    textElement.innerText=newValue;
    
}


//-----------------