'use client'

import { useState } from "react"

type Props = {
  open: boolean
  onClose: () => void
  onConfirm: (roomType: string) => void
}

const rooms = [
  {
    name: "Small Room",
    people: "2 people",
    image: "/next.svg"
  },
  {
    name: "Medium Room",
    people: "4 people",
    image: "/next.svg"
  },
  {
    name: "Large Room",
    people: "6 people",
    image: "/next.svg"
  }
]

export default function RoomDialog({ open, onClose, onConfirm }: Props) {

  const [selected, setSelected] = useState("")

  if (!open) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">

      <div className="bg-white p-6 rounded-xl w-full max-w-md">

        <h2 className="text-lg font-bold mb-4 text-center">
          Select Room Type
        </h2>

        <div className="grid grid-cols-2 gap-3">

          {rooms.map((room) => (

            <div
              key={room.name}
              onClick={() => setSelected(room.name)}
              className={`cursor-pointer border rounded-lg overflow-hidden
              ${selected === room.name ? "border-blue-500 ring-2 ring-blue-300" : ""}
              `}
            >

              <img
                src={room.image}
                className="w-full h-24 object-cover"
              />

              <div className="p-2 text-center">

                <p className="font-semibold">
                  {room.name}
                </p>

                <p className="text-sm text-gray-500">
                  {room.people}
                </p>

              </div>

            </div>

          ))}

        </div>

        <div className="flex gap-2 mt-4">

          <button
            onClick={onClose}
            className="flex-1 border p-2 rounded"
          >
            Cancel
          </button>

          <button
            onClick={() => onConfirm(selected)}
            disabled={!selected}
            className="flex-1 bg-blue-500 text-white p-2 rounded disabled:bg-gray-300"
          >
            Confirm
          </button>

        </div>

      </div>

    </div>
  )
}