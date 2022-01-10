
const axios = require('axios')


const forecast = async (lat, lon) => {
        const api_key = process.env.DB_KEY
    const urlTemp = ` http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key} `
    try {
            const {data} = await axios(urlTemp);
            const tempCelcius = (data.main.temp-273.15)
            const sky = (data.weather[0].description)
            console.log(`Today, the temperature is ${tempCelcius.toFixed(1)} °C, and the weather type is ${sky}`)
                return tempCelcius  
    } catch (err) {
            console.log(err.message)
    }
}


module.exports = forecast;


