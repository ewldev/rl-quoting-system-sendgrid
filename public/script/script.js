// const messageContainer = document.querySelector('.message-container');
// const message = document.getElementById('message');
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
  if (elem.value == 'financial statements & tax returns preparation') {
      document.getElementById('div1').style.display = 'flex';
  }    
  setRequired(elem);  
  resetCategory();  
  resetTransactions()
  resetServiceValues();
  result.style.display = 'inline'; 
  result.value = serviceRate;
}

function showHide2(elem) {
  if(elem.selectedIndex != 0) {
    for(let i=1; i < divs.length; i++) {
        divs[i].style.display = 'none';               
    }
    document.getElementById(elem.value).style.display = 'flex';
  }    
  setRequired2(elem); 
  resetTransactions();
  resetServiceValues();
  result.value = serviceRate; 
}

function showHide3(elem) {
  if(elem.selectedIndex != 0) {
    for(let i=2; i < divs.length; i++) {
        divs[i].style.display = 'none';
        // console.log('divsi', divs[i]);         
    }    
    document.getElementById(elem.value).style.display = 'flex';
  }
  resetServiceValues(); //remove previous transaction and serviceRate values when compilation transactions are changed, allowing new values to be pulled  
  result.value = serviceRate;
} 

function setRequired (elem) {
  if (elem.value == 'financial statements & tax returns preparation' ) {
    category.required = true;
  } else {
    category.required = false;  
    compilation.required = false;
    reviewEgmt.required = false;
    auditEgmt.required = false;  
  }
} 

function setRequired2 (elem) {
  if (elem.value == 'compilation' ) {
    compilation.required = true;
    reviewEgmt.required = false;
    auditEgmt.required = false;
  } else if (elem.value == 'review-engagement') {
    compilation.required = false;
    reviewEgmt.required = true;
    auditEgmt.required = false;
  } else if (elem.value == 'audit-engagement') {
    compilation.required = false;
    reviewEgmt.required = false;
    auditEgmt.required = true;
  }  
}
 
function resetCategory() {
    category.value = '';
}

function resetTransactions() {
    compilation.value = '';
    reviewEgmt.value = '';
    auditEgmt.value = '';
}

function resetServiceValues() {
    fiftyTxn.value = '';
    oneFiftyTxn.value = ''; 
    oneFiftyPlusTxn.value = '';  
    serviceRate = '';
}

function resetServiceRate () {
    serviceRate = '';
    result.value = '';    
}

function calculate() {      
    switch(service.value) {
      case 'incorporation & business accounts registration':
        document.getElementById('div2').style.display = 'block';     
        result.style.display = 'none'; 
        break;
      case 'personal tax preparation':
        document.getElementById('div3').style.display = 'block'; 
        result.style.display = 'none'; 
      default:
        break;  
    }
    switch(compilation.value) {
      case 'fifty-txn':
        serviceRate = '$1500-$1800';
        result.value = serviceRate;
        break;
      case 'onefifty-txn':
        serviceRate = '$1800-$2500';
        result.value = serviceRate;
        break;
      case 'onefiftyplus-txn':
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

function processFormData(e) {
  // to prevent entered form info from refreshing
  e.preventDefault(); 

  calculate();

  // access sendgrid api
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

// Event Listener
form.addEventListener('submit', processFormData);     





