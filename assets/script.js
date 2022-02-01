var getWeatherData = function() {
     fetch("https://api.openweathermap.org/data/2.5/onecall?lat={36.1627}&lon={86.7816}&exclude={part}&appid={8f12a2214da3aa6c3994957516a13fdc}").then(function(response){
         response.json().then(function(data) {
            console.log(data);
         })
        
    })
    
}

getWeatherData();