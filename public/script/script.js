// const form = document.getElementById('form');
// const messageContainer = document.querySelector('.message-container');
// const message = document.getElementById('message');

// const { response } = require("express");

// let isValid = false;
const divs = document.getElementById('form').getElementsByTagName('div');
const service = document.getElementById('service');
const category = document.getElementById('category');
const compilation = document.getElementById('compilationTxn');
const reviewEgmt = document.getElementById('reviewTxn');
const auditEgmt = document.getElementById('auditTxn');
const fiftyTxn = document.getElementById('fiftyService');
const oneFiftyTxn = document.getElementById('oneFiftyService');  
const oneFiftyPlusTxn = document.getElementById('oneFiftyPlusService'); 
const result = document.getElementById('result');
let serviceRate = 0;

function showHide1(elem) {  
  //get the divs to show/hide  
  if (elem.selectedIndex != 0) {
      //  hide unrelated divs
       for(let i=0; i < divs.length; i++) {
          divs[i].style.display = 'none'; 
       }
  }                  
      //unhide the selected div
  if (elem.value == 1) {
      document.getElementById('div1').style.display = 'flex';
  }    
  setRequired(elem);  
  resetCategory();  
  resetTransactions()
  resetValues();
  result.style.display = 'inline'; 
  result.value = serviceRate;
}

function showHide2(elem) {
  if(elem.selectedIndex != 0) {
    for(let i=1; i < divs.length; i++) {
        divs[i].style.display = 'none';               
    }
    document.getElementById('div'+elem.value).style.display = 'flex';
  }    
  setRequired2(elem); 
  resetTransactions();
  resetValues();
  result.value = serviceRate; 
 }

 function setRequired (elem) {
  if (elem.value == '1' ) {
    category.required = true;
  } else {
    category.required = false;  
    compilation.required = false;
    reviewEgmt.required = false;
    auditEgmt.required = false;  
 }
  console.log('elem.value',elem.value);
 } 

function setRequired2 (elem) {
  if (elem.value == '4' ) {
    compilation.required = true;
    reviewEgmt.required = false;
    auditEgmt.required = false;
  } else if (elem.value == '5') {
    compilation.required = false;
    reviewEgmt.required = true;
    auditEgmt.required = false;
  } else if (elem.value == '6') {
    compilation.required = false;
    reviewEgmt.required = false;
    auditEgmt.required = true;
 }
  console.log('elem2.value',elem.value);
 }

function showHide3(elem) {
  if(elem.selectedIndex != 0) {
    for(let i=2; i < divs.length; i++) {
        divs[i].style.display = 'none';
        // console.log('divsi', divs[i]);         
    }    
    document.getElementById('div'+elem.value).style.display = 'flex';
  }
  resetValues(); //remove previous transaction and serviceRate values when compilation transactions are changed, allowing new values to be pulled  
  result.value = serviceRate;
}
  
function processFormData(e) {
    e.preventDefault();
    calculate(); 
    fetch('http://localhost:8080/sendmail',{
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        service: service.value,
        category: category.value,
        compilationTxn: compilationTxn.value,
        fiftyService: fiftyService.value,
        oneFiftyService: oneFiftyService.value,
        oneFiftyPlusService: oneFiftyPlusService.value,
        quote: result.value,
        email: email.value
       })  
    })      
    .then(response => response.json())    
    .catch(err => console.log(err))  
  }
 
function resetCategory() {
    category.value = '';
    // console.log('category value reset',category.value);
  }

  function resetTransactions() {
    compilation.value = '';
    reviewEgmt.value = '';
    auditEgmt.value = '';
  }

  function resetValues() {
    fiftyTxn.value = '';
    oneFiftyTxn.value = ''; 
    oneFiftyPlusTxn.value = '';  
    serviceRate = '';
  }

  function resetServiceRate () {
    console.log ('resetServiceRate start', serviceRate); 
    serviceRate = '';
    result.value = '';
    console.log ('resetServiceRate end', serviceRate); 
  }

  function calculate() {      
    switch(service.value) {
      case '2':
        document.getElementById('div2').style.display = 'block';     
        result.style.display = 'none'; 
        break;
      case '3':
        document.getElementById('div3').style.display = 'block'; 
        result.style.display = 'none'; 
      default:
        break;  
    }
    switch(compilation.value) {
      case '7':
        serviceRate = '$1500-$1800';
        result.value = serviceRate;
        break;
      case '8':
        serviceRate = '$1800-$2500';
        result.value = serviceRate;
        break;
      case '9':
        serviceRate = '$2500-$3500'; 
        result.value = serviceRate; 
        break;
      default:
         break;  
    }

    switch(reviewEgmt.value) {
      case '10':
        serviceRate = '$5500-$7500';
        result.value = serviceRate;
        break;
      default:
        break;  
    }

    switch(auditEgmt.value) {
      case '11':
        serviceRate = '$9000-$12000';
        result.value = serviceRate;
        break;
      default:
         break;  
    }

    switch(fiftyTxn.value) {      
      case 'consulting-business1':
        serviceRate = '$1500';
        
        result.value = serviceRate;  
        break;
      case 'holdings-company1':
        serviceRate = '$1700'; 
        result.value = serviceRate; 
        break;
      default:
        break;   
    }    
    switch(oneFiftyTxn.value) {
      case 'consulting-business2':
        serviceRate = '$1800';
        result.value = serviceRate; 
        break;
      case 'holdings-company2':
        serviceRate = '$2000';
        result.value = serviceRate; 
        break;
      case 'trading-retail2':
        serviceRate = '$2500';
        result.value = serviceRate;  
        break;
      case 'mortgage-insurance-broker2':
        serviceRate = '$1800';
        result.value = serviceRate; 
        break;
      case 'home-renovation-contractor2':
        serviceRate = '$2300';
        result.value = serviceRate; 
        break;
      case 'medical-professional-corporation2':
        serviceRate = '$2500';
        result.value = serviceRate;
        break;
      default:
        break;  
    }  
    switch(oneFiftyPlusTxn.value) {
      case 'consulting-business3':
        serviceRate = '$2500';
        result.value = serviceRate; 
        break;
      case 'holdings-company3':
        serviceRate = '$2700';
        result.value = serviceRate; 
        break;
      case 'trading-retail3':
        serviceRate = '$3200'; 
        result.value = serviceRate; 
        break;
      case 'manufacturing3':
        serviceRate = '$3500';
        result.value = serviceRate; 
        break;
      case 'restaurant3':
        serviceRate = '$3500';
        result.value = serviceRate; 
        break;  
      case 'mortgage-insurance-broker3':        
        serviceRate = '$2500';
        result.value = serviceRate; 
        break;
      case 'home-renovation-contractor3':
        serviceRate = '$3000';
        result.value = serviceRate; 
        break;
      case 'medical-professional-corporation3':
        serviceRate = '$3500';
        result.value = serviceRate;
        break;
      default:
        break;    
    }    
  }  

// close button
window.onload = function(){
  document.getElementById('button-close').onclick = function(){
      this.parentNode.parentNode
      .removeChild(this.parentNode);
      return false;
  };
};

// disabled following EventListeners to allow form to post to sendmail when submit
// added onclick="calculate(this)" to submit button instead

// Event Listener
form.addEventListener('submit', processFormData);     
// form.addEventListener('submit', calculate); 




