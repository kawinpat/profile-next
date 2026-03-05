'use client'

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

const salesData = [
  { name: "Mon", sales: 400 },
  { name: "Tue", sales: 300 },
  { name: "Wed", sales: 500 },
  { name: "Thu", sales: 200 },
  { name: "Fri", sales: 600 },
]

const bookingData = [
  { name: "Jan", value: 40 },
  { name: "Feb", value: 30 },
  { name: "Mar", value: 20 },
  { name: "Apr", value: 50 },
]

const pieData = [
  { name: "Online", value: 400 },
  { name: "Walk-in", value: 300 },
]

const COLORS = ["#3B82F6", "#10B981"]

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">

      <h1 className="text-2xl font-bold">
        Dashboard
      </h1>

      {/* KPI cards */}
      <div className="grid grid-cols-2 gap-4">

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500 text-sm">
            Total Bookings
          </p>
          <p className="text-2xl font-bold">
            124
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500 text-sm">
            Revenue
          </p>
          <p className="text-2xl font-bold">
            $3,420
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500 text-sm">
            New Users
          </p>
          <p className="text-2xl font-bold">
            56
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500 text-sm">
            Conversion
          </p>
          <p className="text-2xl font-bold">
            12%
          </p>
        </div>

      </div>

      {/* recent bookings */}
      <div className="bg-white p-4 rounded-xl shadow">

        <h2 className="font-semibold mb-4">
          Recent Bookings
        </h2>

        <table className="w-full text-sm">

          <thead className="text-gray-500">
            <tr>
              <th className="text-left pb-2">Name</th>
              <th className="text-left pb-2">Date</th>
              <th className="text-left pb-2">Time</th>
            </tr>
          </thead>

          <tbody className="space-y-2">

            <tr className="border-t">
              <td className="py-2">John</td>
              <td>2026-03-05</td>
              <td>18:00</td>
            </tr>

            <tr className="border-t">
              <td className="py-2">Anna</td>
              <td>2026-03-06</td>
              <td>19:00</td>
            </tr>

            <tr className="border-t">
              <td className="py-2">Mike</td>
              <td>2026-03-07</td>
              <td>20:00</td>
            </tr>

          </tbody>

        </table>

      </div>



      {/* charts */}
      <div className="grid gap-6">

        {/* line chart */}
        <div className="bg-white p-4 rounded-xl shadow">

          <h2 className="font-semibold mb-4">
            Weekly Sales
          </h2>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#3B82F6"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

        </div>

        {/* bar chart */}
        <div className="bg-white p-4 rounded-xl shadow">

          <h2 className="font-semibold mb-4">
            Monthly Bookings
          </h2>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={bookingData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>

        {/* pie chart */}
        <div className="bg-white p-4 rounded-xl shadow">

          <h2 className="font-semibold mb-4">
            Booking Source
          </h2>

          <div className="h-64 flex justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  outerRadius={90}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

        </div>

      </div>

    </div>
  )
}