
const API_URL = "https://restcountries.com/v3.1/all"


function reqListener() {
    const contriesDate = JSON.parse (this.responseText);
    for(let ind = 0;ind <contriesDate.length; ind++){
        console.log(contriesDate[ind].flags)
        
    }
  
}
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", API_URL);
  req.send();
  