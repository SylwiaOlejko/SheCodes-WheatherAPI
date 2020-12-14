
function showTemperature(response){
  let temperature =Math.round(response.data.main.temp);
let city = response.data.name
let message = 'It is &{temperature} degrees ${city}';
let h1 = document.querySelector('h1');
h1.innerHtml = message;



}


let apiKey = "4a4fe35e6c00e25f675f5b029f252096 ";
let units = "metric";
let city= "sydney";
let apiUrl =
 'https;//api.openweathermap.org/data/2.5/weather?q=&{sydney}&appid=&{apiKey}7units=&{units}';

 axios.get(apiUrl).then(showTemperature)