'use client'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export default function CalendarPage() {

  const events = [
    { id: "1", title: "Task 1", date: "2026-03-05" },
    { id: "2", title: "Task 2", date: "2026-03-07" },
    { id: "3", title: "Task 3", date: "2026-03-10" },
  ]

  const handleEventDrop = (info: any) => {
    console.log("Moved event:", info.event.id)
    console.log("New date:", info.event.start)

    // ตรงนี้เอาไปยิง API update database ได้
  }

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">
        Calendar
      </h1>

      <div className="bg-white p-4 rounded-xl shadow">

        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          editable={true}
          events={events}
          eventDrop={handleEventDrop}
          height="auto"
        />

      </div>

    </div>
  )
}