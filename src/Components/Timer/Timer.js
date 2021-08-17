import './Timer.css'
import Flipcard from './Flipcard/Flipcard'
import { useState, useEffect } from 'react'

export default function Timer() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [destinationTime, setDestinationTime] = useState(12096e5)

  function countDown() {
    const timeGap = destinationTime - 1000

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const displayedDays = Math.floor(timeGap / day)
    const displayedHours = Math.floor((timeGap % day) / hour)
    const displayedMinutes = Math.floor((timeGap % hour) / minute)
    const displayedSeconds = Math.floor((timeGap % minute) / second)

    setDays(displayedDays)
    setHours(displayedHours)
    setMinutes(displayedMinutes)
    setSeconds(displayedSeconds)
    setDestinationTime(timeGap)
  }

  useEffect(() => {
    setTimeout(() => {
      countDown()
    }, 1000)
  })

  return (
    <div className="timer__container">
      <Flipcard measure={'Days'} time={days} />
      <Flipcard measure={'Hours'} time={hours} />
      <Flipcard measure={'Minutes'} time={minutes} />
      <Flipcard measure={'Seconds'} time={seconds} />
    </div>
  )
}
