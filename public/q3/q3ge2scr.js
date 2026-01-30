function readLocalStorage(){
  let acctString = localStorage.getItem("accounts");
  if (!acctString) { 
    accountList = {};
   }

  else {
    accountList = JSON.parse(acctString);
  }

    return accountList; 
}

function writeLocalStorage(form){ 

  const data = new FormData(form); 

  const obj = Object.fromEntries(data.entries()); // get all the data from the form; converts to object data structure
  
  accountList[obj.uname] = {}; // initialize new entry for account; key is username
  for (let key in obj) { 
      if (key != "uname") { 
          accountList[obj.uname][key] = obj[key];
      }
  }
  
  console.log(accountList); 
  acctString = JSON.stringify(accountList);
  localStorage.setItem("accounts", acctString);

}

const form = document.getElementById("dForm");
form.addEventListener("submit", function(e) { 

  if (confirm("Are you sure with your submission")) {   
    writeLocalStorage(form);
  }

  // form.submit();
    
});

// event handler for the reset button instead of onreset on the button itself
form.addEventListener("reset", function(e) { 
  if (!confirm("Sure you want to clear your data?")) {
    e.preventDefault(); 
  }
});


function changeColor(ele) {
  console.log(ele);
  ele.style.backgroundColor = "#FFFCCC";
} 
function resetColor(ele) {
  console.log(ele);
  ele.style.backgroundColor = "#CCF8FF";
} 


