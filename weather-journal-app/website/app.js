/* Global Variables */
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = 'df9ea554be29797fef31ca47e0cd7879';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
const zip =  document.getElementById('zip').value;
const favFact =  document.getElementById('feelings').value;

getWeather(baseURL,zip, apiKey)

.then(function(data){
console.log(data)
postData('/',data.temp)
updateUI()
})

}
const getWeather = async (baseURL, zip, apiKey)=>{

//  const res = await fetch(baseURL+zip+apiKey);
  const res = await fetch('/fakeWeatherData');

  try {

    const data = await res.json();
    console.log(data)
    return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}
