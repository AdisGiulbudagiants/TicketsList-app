'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

export default function AddTicket() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const router = useRouter()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:3000/api/tickets', {
        title: title,
        description: description,
      })
      if (res.status === 201) {
        router.push('/')
        router.refresh()
      } else throw new Error('Failed to create a Ticket')
    } catch (error) {
      console.error(error)
    }
  }

  const handleTitleChange = (e) => setTitle(e.target.value)
  const handleDescriptionChange = (e) => setDescription(e.target.value)

  return (
    <div className="p-2 h-full">
      <form onSubmit={handleSubmit} className="card-body rounded-2xl bg-base-300">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            onChange={(e) => handleTitleChange(e)}
            value={title}
            type="text"
            placeholder="Ticket Title"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            onChange={(e) => handleDescriptionChange(e)}
            value={description}
            className="textarea textarea-bordered"
            placeholder="Type Your Text Here"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Add Ticket
          </button>
        </div>
      </form>
    </div>
  )
}
