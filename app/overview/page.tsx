'use client'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from "recharts"

const bookingPerDay = [
  { day: "Mon", bookings: 12 },
  { day: "Tue", bookings: 18 },
  { day: "Wed", bookings: 10 },
  { day: "Thu", bookings: 22 },
  { day: "Fri", bookings: 30 },
  { day: "Sat", bookings: 40 },
  { day: "Sun", bookings: 25 },
]

const timeSlots = [
  { time: "10:00", bookings: 5 },
  { time: "12:00", bookings: 15 },
  { time: "14:00", bookings: 20 },
  { time: "16:00", bookings: 10 },
  { time: "18:00", bookings: 8 },
]

const bookingTypes = [
  { name: "Walk-in", value: 40 },
  { name: "Online", value: 60 },
]

const COLORS = ["#3b82f6", "#10b981"]

export default function OverviewPage() {
  return (
    <div className="p-6 space-y-6">

      <h1 className="text-2xl font-bold">Overview</h1>

      {/* STAT CARDS */}
      <div className="grid grid-cols-2 gap-4">

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Total Bookings</p>
          <p className="text-2xl font-bold">235</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Today</p>
          <p className="text-2xl font-bold">18</p>
        </div>

      </div>

      {/* LINE CHART */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="font-semibold mb-4">Bookings per Day</h2>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={bookingPerDay}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="bookings" stroke="#3b82f6" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>

      </div>

      {/* BAR CHART */}
      <div className="bg-white p-4 rounded-xl shadow">

        <h2 className="font-semibold mb-4">Bookings by Time</h2>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={timeSlots}>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="bookings" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>

      </div>

      {/* PIE CHART */}
      <div className="bg-white p-4 rounded-xl shadow">

        <h2 className="font-semibold mb-4">Booking Type</h2>

        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={bookingTypes}
              dataKey="value"
              nameKey="name"
              outerRadius={90}
              label
            >
              {bookingTypes.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

      </div>

    </div>
  )
}