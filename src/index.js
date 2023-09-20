
const search = document.querySelector("#search")
search.addEventListener("keyup",(e)=>{
    if (e.key === "Enter" || e.keyCode ===13 ){
        weatherLoad(search.value)
    }
})
const weatherLoad = async function(text){
    const response = await fetch("https://api.weatherapi.com/v1/current.json?key=b3b8ceea10a544b5823153219231709&q="+text, {mode: 'cors'})
    const weather = await response.json() 
    updateInfo(weather)
    response.json().catch((err)=>{
        console.log(err)
    })    
}

const updateInfo = function(object){
    const city = document.querySelector(".city")
    const temperatureBox = document.querySelector(".temperature")
    const humidity = document.querySelector(".humidity")
    const chanceOfRain = document.querySelector(".COR")
    const windSpeed = document.querySelector(".windSpeed")
    const img = document.querySelector(".condition-icon")
    img.src = "https:"+object.current.condition.icon
    city.textContent = "City: "+object.location.name+", "+object.location.country
    temperatureBox.textContent = "Temperature: "+object.current.feelslike_c+"°C"
    humidity.textContent = "Humidity: "+object.current.humidity+"%"
    chanceOfRain.textContent = "Weather Conditions: "+object.current.condition.text
    windSpeed.textContent = "Wind Speed: "+object.current.gust_kph+" kph"
}

const preLoad = function(){
    updateInfo(weatherLoad("Slough"))
}

preLoad()