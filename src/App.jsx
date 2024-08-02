import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodayArticle from './components/TodayArticle'
import { WeatherDashboard } from './components/WeatherDashboard'
import { SearchLocation } from './components/SearchLocation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' flex flex-col sm:flex-row sm:w-screen sm:max-w-full sm:h-screen'>
      <TodayArticle>
        
      </TodayArticle>
      <WeatherDashboard></WeatherDashboard>
      
    </div>
  )
}

export default App
