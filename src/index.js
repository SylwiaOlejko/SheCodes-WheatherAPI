
function showTemperature(response){
console.log(response);


}


let apiKey = "4a4fe35e6c00e25f675f5b029f252096 ";

let apiUrl =
 "https;//api.openweathermap.org/data/2.5/weather?q=sidney&appid=4a4fe35e6c00e25f675f5b029f252096&units=metric/";
axios.get(apiUrl).then(showTemperature)