import './Timer.css'
import Flipcard from './Flipcard/Flipcard'
import { useState, useEffect } from 'react'

export default function Timer() {
  const [days, setDays] = useState()
  const [hours, setHours] = useState()
  const [minutes, setMinutes] = useState()
  const [seconds, setSeconds] = useState()

  function countDown() {
    const destinationDate = new Date('October 24,2021 00:00:00').getTime()
    const now = new Date().getTime()
    const timeGap = destinationDate - now

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
  }

  useEffect(() => {
    setInterval(() => {
      countDown()
    }, 1000)
  }, [])

  return (
    <div className="timer__container">
      <Flipcard measure={'Days'} time={days} />
      <Flipcard measure={'Hours'} time={hours} />
      <Flipcard measure={'Minutes'} time={minutes} />
      <Flipcard measure={'Seconds'} time={seconds} />
    </div>
  )
}
