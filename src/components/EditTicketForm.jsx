'use client'
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const EditTicketForm = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title)
  const [newDescription, setNewDescription] = useState(description)
  const router = useRouter()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const res = await axios.put(`http://localhost:3000/api/tickets/${id}`, {
        newTitle,
        newDescription,
      })
      if (res.status === 200) {
        router.push('/')  
        router.refresh()
      } else throw new Error('Failed to update a Ticket')
    } catch (error) {
      console.error(error)
    }
  }

  const handleChangeTitle = (e) => setNewTitle(e.target.value)
  const handleChangeDescription = (e) => setNewDescription(e.target.value)

  return (
    <form onSubmit={handleSubmit} className="card-body rounded-2xl bg-base-300">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Title</span>
        </label>
        <input
          onChange={handleChangeTitle}
          value={newTitle}
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
          onChange={handleChangeDescription}
          value={newDescription}
          className="textarea textarea-bordered"
          placeholder="Type Your Text Here"
          required
        />
      </div>
      <div className="form-control mt-6">
        <button type="submit" className="btn btn-primary">
          Update Ticket
        </button>
      </div>
    </form>
  )
}

export default EditTicketForm
