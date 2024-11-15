'use client'

import { useEffect, useState } from 'react'

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Set launch date to March 1st, 2024
    const launchDate = new Date('2024-03-01T00:00:00').getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = launchDate - now

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex gap-4 justify-center">
      <div className="text-center">
        <div className="text-3xl font-bold">{timeLeft.days}</div>
        <div className="text-sm text-gray-600 dark:text-gray-400">Days</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold">{timeLeft.hours}</div>
        <div className="text-sm text-gray-600 dark:text-gray-400">Hours</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold">{timeLeft.minutes}</div>
        <div className="text-sm text-gray-600 dark:text-gray-400">Minutes</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold">{timeLeft.seconds}</div>
        <div className="text-sm text-gray-600 dark:text-gray-400">Seconds</div>
      </div>
    </div>
  )
} 