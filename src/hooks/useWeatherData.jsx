import React, { useEffect, useState } from 'react'

export default function (city, unit) {
  const [weatherData, setWeatherData] = useState([])
  const [formattedData, setFormattedData] = useState([])


  const formatDate = (dt_txt) => {
    const date = new Date(dt_txt);
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    return date.toLocaleDateString('en-US', options);
  };

  const formatWords = (text) => {
    return text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  }

  const getData = async (city, unit) => {
    const rs = await fetch(`
    https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&cnt=6&appid=3cea8a3c304e739625437f7f41dd26c5`)
    const data = await rs.json()
    setWeatherData(data.list)
  
    const format = data.list.map(item => {
      return {
        date: formatDate(item.dt_txt),
        temp: parseInt(item.main.temp),
        temp_min: Math.round(item.main.temp_min),
        temp_max: Math.round(item.main.temp_max),
        icon: item.weather[0].icon,
        w_speed: item.wind.speed,
        w_direction: item.wind.deg,
        humidity: item.main.humidity,
        visibility: (item.visibility/1000).toFixed(1),
        pressure: item.main.pressure,
        description: formatWords(item.weather[0].description),

      }
    })
    /* console.log(format) */
    setFormattedData(format)
  }

  useEffect(() => {
    getData(city, unit)


  }, [city, unit])


  return {weatherData, formattedData}

}
