import React, { useContext, useEffect, useState } from 'react'
import WeatherContext from '../context/WeatherContext';

export default function () {
  const [weatherData, setWeatherData] = useState([])
  const [formattedData, setFormattedData] = useState([])
  const {city,unit,coords} = useContext(WeatherContext)


  const formatDate = (dt_txt) => {
    const date = new Date(dt_txt);
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    return date.toLocaleDateString('en-US', options);
  };

  const formatWords = (text) => {
    return text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  }

  const filterByDay= (prev) => {
    const prevUnique = {}
    prev.forEach(x => {
      const fecha = x.dt_txt.split(' ')[0]
      if (!prevUnique[fecha]) {
        prevUnique[fecha] = x
      }
    })
    const filteredArray = Object.values(prevUnique)
    return filteredArray
  }

  const getData = async () => {
    let url
  
    if(coords && coords.lat && coords.lon){
      url = `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&units=${unit}&cnt=40&appid=3cea8a3c304e739625437f7f41dd26c5`
    } else if (city){
      url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&cnt=40&appid=3cea8a3c304e739625437f7f41dd26c5`
    }

    /* `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&cnt=6&appid=3cea8a3c304e739625437f7f41dd26c5` */

    if(url){
      const rs = await fetch(url)
      const data = await rs.json()
      setWeatherData(data.list)
      
      const sixDate = filterByDay(data.list)
      const dcity = data.city.name
      
      const format = sixDate.map((item, i) => {

        return {
          date:  i===1?'Tomorrow':formatDate(item.dt_txt),
          temp: parseInt(item.main.temp),
          temp_min: Math.round(item.main.temp_min),
          temp_max: Math.round(item.main.temp_max),
          icon: item?.weather[0]?.icon.slice(0, item?.weather[0]?.icon.length-1),
          w_speed: item.wind.speed,
          w_direction: item.wind.deg,
          humidity: item.main.humidity,
          visibility: (item.visibility/1000).toFixed(1),
          pressure: item.main.pressure,
          description: formatWords(item.weather[0].description),
          name_city: dcity,
  
        }
      })
      /* console.log(format) */
      setFormattedData(format)
    }

    
  }

  useEffect(() => {
    getData()


  }, [city, unit, coords.lat, coords.lon])


  return {weatherData, formattedData}

}
