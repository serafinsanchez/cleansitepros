'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After"
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
    const percentage = (x / rect.width) * 100
    setSliderPosition(percentage)
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width))
    const percentage = (x / rect.width) * 100
    setSliderPosition(percentage)
  }

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('touchmove', handleTouchMove)
    document.addEventListener('touchend', handleMouseUp)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleMouseUp)
    }
  }, [isDragging])

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/3] overflow-hidden rounded-xl cursor-ew-resize"
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* Before Image */}
      <div className="absolute inset-0">
        <Image
          src={beforeImage}
          alt="Before"
          fill
          className="object-cover"
          priority
        />
        <span className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
          {beforeLabel}
        </span>
      </div>

      {/* After Image */}
      <div 
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={afterImage}
          alt="After"
          fill
          className="object-cover"
          priority
        />
        <span className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
          {afterLabel}
        </span>
      </div>

      {/* Slider */}
      <div 
        className="absolute inset-y-0"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute inset-y-0 -left-px w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)]" />
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>
    </div>
  )
} 