'use client'

import { useState } from "react"
import Link from "next/link"

export default function Sidebar() {

  const [open, setOpen] = useState(false)

  return (
    <>
      {/* top bar */}
      <div className="flex items-center justify-between p-4 bg-white shadow text-black">

        <button
          onClick={() => setOpen(true)}
          className="text-xl"
        >
          ☰
        </button>

        <h1 className="font-bold">
          Next.js demo app
        </h1>

        <div />
      </div>

      {/* overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow transform z-50 transition-transform
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >

        <div className="p-4 font-bold border-b text-black">
          Menu
        </div>

        <nav className="flex flex-col">

          <Link
            href="/calendar"
            className="p-4 hover:bg-gray-100 text-black"
            onClick={() => setOpen(false)}
          >
            Calendar
          </Link>

          <Link
            href="/booking"
            className="p-4 hover:bg-gray-100 text-black"
            onClick={() => setOpen(false)}
          >
            Booking
          </Link>

          <Link
            href="/overview"
            className="p-4 hover:bg-gray-100 text-black"
            onClick={() => setOpen(false)}
          >
            Overview
          </Link>

          <Link
            href="/dashboard"
            className="p-4 hover:bg-gray-100 text-black"
            onClick={() => setOpen(false)}
          >
            Dashboard
          </Link>

          <Link
            href="/profile"
            className="p-4 hover:bg-gray-100 text-black"
            onClick={() => setOpen(false)}
          >
            My Profile
          </Link>

        </nav>

      </div>
    </>
  )
}