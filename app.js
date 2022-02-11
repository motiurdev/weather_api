const API_KEY = "9a4d88b3532541b4af3dd3c5e3c36b33"

const searchTemperature = () => {
    const city = document.getElementById("city-name").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    // get request data
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}


const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    console.log(temperature);
    setInnerText("city", temperature.name)
    setInnerText("country-name", temperature.sys.country)
    setInnerText("temperature", temperature.main.temp)
    setInnerText("condition", temperature.weather[0].main)
    setInnerText("coldest", temperature.main.temp_max)
    setInnerText("warmest", temperature.main.temp_min)
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const weatherIcon = document.getElementById("weather-icon")
    weatherIcon.setAttribute("src", url)
}