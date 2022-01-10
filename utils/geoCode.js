const axios = require('axios')
const foreCast = require('./forecast.js')



const geoCode = async (cityName) => {
    const api_key = process.env.DB_KEY
    const urlLoc = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${api_key}`; 

    try {
        const {data} = await axios(urlLoc);
        const lat = data[0].lat
        const lon = data[0].lon
       // console.log(lat, lon)
        return foreCast(lat, lon)
    } catch (err) {
        console.log(err.message)
    }
   
}

module.exports = geoCode;













