function readLocalStorage(){
  let moviesString = localStorage.getItem("movies");
  if (!moviesString) { 
    movieList = {};
   }

  else {
    movieList = JSON.parse(moviesString);
  }

    return movieList; 
}

// Call readLocalStorage on page load
readLocalStorage();

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