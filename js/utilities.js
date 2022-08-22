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

// text field value

//--------------

function getTextElementValueById(elementId) {
    const textElement=document.getElementById(elementId);
    const textElementValueString=textElement.innerText;
    const textElementValue=parseFloat(textElementValueString);
    return textElementValue;
}


//------------------


//------------------
// set value in text field
function setTextElementValueById(elementId,newValue) {
    const textElement=document.getElementById(elementId);
    textElement.innerText=newValue;
    
}


//-----------------