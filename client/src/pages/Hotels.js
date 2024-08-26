import React from 'react'
import { useLocation } from 'react-router-dom'
import SeaechHeader from '../componenets/SeaechHeader'
function Hotels() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const place = searchParams.get('place')
  const checkin = searchParams.get('checkin')
  const checkout = searchParams.get('checkout')
  return (
    <div>
      <SeaechHeader place={place} checkin={checkin} checkout={checkout} />
    </div>
  )
}

export default Hotels