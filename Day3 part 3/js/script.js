const API_URL ="https://restcountries.com/v3.1/all"

function reqListener() {
  const contriesData = JSON.parse (this.responseText)
  for(let ind = 0; ind < contriesData.length; ind++){
    console.log(contriesData[ind].name.common,
    contriesData[ind].region,
  contriesData[ind].subregion,
contriesData[ind].population)
  }

}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", API_URL);
req.send();
