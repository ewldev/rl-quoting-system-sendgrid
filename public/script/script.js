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
  resetTransactions();
  resetServiceValues();
  resetResultValue();
  result.style.display = 'inline';   
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
  resetResultValue();  
}

function showHide3(elem) {
  if(elem.selectedIndex != 0) {
    for(let i=2; i < divs.length; i++) {
        divs[i].style.display = 'none';          
    }    
    document.getElementById(elem.value).style.display = 'flex';
  }
  //remove previous transaction and serviceRate values when compilation transactions are changed, allowing new values to be pulled  
  resetServiceValues(); 
  resetResultValue();  
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
}

function resetResultValue() {
    result.value = '';    
}

function calculate() {      
    switch(service.value) {
      case 'incorporation & business accounts registration':
        document.getElementById('div2').style.display = 'block';     
        result.value = '$800 - business trade name add $100';
        result.style.display = 'none'; 
        break;
      case 'personal tax preparation':
        document.getElementById('div3').style.display = 'block'; 
        result.value = `<p>standard $150 <br>
        capital gain/loss add $100 <br>
        self-employed business add $250 <br>
        foreign property declaration add $150            
      </p>`
        result.style.display = 'none'; 
      default:
        break;  
    }
    switch(compilation.value) {
      case 'fifty-txn':
        result.value = '$1500-$1800';
        break;
      case 'onefifty-txn':
        result.value = '$1800-$2500';
        break;
      case 'onefiftyplus-txn':
        result.value  = '$2500-$3500'; 
        break;
      default:
         break;  
    }
    switch(reviewEgmt.value) {
      case '10':
        result.value = '$5500-$7500';
        break;
      default:
        break;  
    }
    switch(auditEgmt.value) {
      case '11':
        result.value = '$9000-$12000';
        break;
      default:
         break;  
    }
    switch(fiftyTxn.value) {      
      case 'consulting-business1':
        result.value  = '$1500';  
        break;
      case 'holdings-company1':
        result.value = '$1700'; 
        break;
      default:
        break;   
    }    
    switch(oneFiftyTxn.value) {
      case 'consulting-business2':
        result.value = '$1800';
        break;
      case 'holdings-company2':
        result.value = '$2000';
        break;
      case 'trading-retail2':
        result.value = '$2500';
        break;
      case 'mortgage-insurance-broker2':
        result.value = '$1800';
        break;
      case 'home-renovation-contractor2':
        result.value = '$2300';
        break;
      case 'medical-professional-corporation2':
        result.value = '$2500';
        break;
      default:
        break;  
    }  
    switch(oneFiftyPlusTxn.value) {
      case 'consulting-business3':
        result.value = '$2500';
        break;
      case 'holdings-company3':
        result.value = '$2700';
        break;
      case 'trading-retail3':
        result.value = '$3200'; 
        break;
      case 'manufacturing3':
        result.value = '$3500';
        break;
      case 'restaurant3':
        result.value = '$3500';
        break;  
      case 'mortgage-insurance-broker3':        
        result.value = '$2500';
        break;
      case 'home-renovation-contractor3':
        result.value = '$3000';
        break;
      case 'medical-professional-corporation3':
        result.value = '$3500';
        break;
      default:
        break;    
    }    
}  

// close button
window.onload = function(){
  document.getElementById('button-close1').onclick = function(){
      // this.parentNode.parentNode.parentNode
      // .removeChild(this.parentNode.parentNode);
      // return false;
    document.getElementById('container').style.display = 'none';  
  };
  document.getElementById('button-close2').onclick = function(){
    // this.parentNode.parentNode.parentNode
    // .removeChild(this.parentNode.parentNode);
    // return false;
    document.getElementById('container').style.display = 'none';  
  };
};


function processFormData(e) {
  // to prevent entered form info from refreshing
  e.preventDefault(); 

  calculate();

  // access sendgrid api
  fetch('https://quiet-badlands-16996.herokuapp.com/sendmail',{
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      service: service.value,
      category: category.value,
      compilationTxn: compilationTxn.value,
      fiftyService: fiftyService.value,
      oneFiftyService: oneFiftyService.value,
      oneFiftyPlusService: oneFiftyPlusService.value,
      result: result.value,
      email: email.value
     })  
  })      
  .then(response => response.json())    
  .catch(err => console.log(err))  
}

// Event Listener
form.addEventListener('submit', processFormData);     





