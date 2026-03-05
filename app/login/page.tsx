'use client'

import { useState } from "react"

export default function LoginPage() {

  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    const data = {
      phone,
      password
    }

    console.log("login", data)

    alert("Login success")
  }

  const handleLineLogin = () => {
    window.location.href = "/api/auth/line"
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-6">

      <div className="w-full max-w-sm">

        <h1 className="text-2xl font-bold text-center mb-6">
          Login
        </h1>

        <form
          onSubmit={handleLogin}
          className="bg-white p-6 rounded-xl shadow-md"
        >

          <div className="mb-4">
            <label className="block mb-1">Phone</label>
            <input
              type="tel"
              placeholder="0812345678"
              className="w-full border p-2 rounded"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1">Password</label>
            <input
              type="password"
              className="w-full border p-2 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Login
          </button>

          <div className="text-center my-4 text-gray-500">
            OR
          </div>

          <button
            type="button"
            onClick={handleLineLogin}
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Login with LINE
          </button>

        </form>

      </div>

    </div>
  )
}