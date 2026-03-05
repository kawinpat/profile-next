'use client'

import { useState } from "react"
import RoomDialog from "../components/RoomDialog"

export default function BookingPage() {

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [openDialog, setOpenDialog] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setOpenDialog(true)
  }

  const confirmBooking = (roomType: string) => {

    const bookingData = {
      name,
      date,
      time,
      roomType
    }

    console.log("booking", bookingData)

    alert("Booking success!")

    setOpenDialog(false)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >

        <h1 className="text-2xl font-bold mb-6 text-center">
          Booking
        </h1>

        <div className="mb-4">
          <label className="block mb-1">Name</label>
          <input
            className="w-full border p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Phone</label>
          <input
            className="w-full border p-2 rounded"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Date</label>
          <input
            type="date"
            className="w-full border p-2 rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Time</label>
          <input
            type="time"
            className="w-full border p-2 rounded"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Book Now
        </button>

      </form>

      <RoomDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onConfirm={confirmBooking}
      />

    </div>
  )
}