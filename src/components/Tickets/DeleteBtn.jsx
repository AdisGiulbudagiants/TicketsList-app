'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'

export default function DeleteBtn({ id }) {
  const router = useRouter()

  async function deleteTicket() {
    const confirmation = confirm('Are you Sure?')
    if (confirmation) {
      const res = await axios.delete(`http://localhost:3000/api/tickets?id=${id}`)

      if (res.status === 200) {
        router.refresh()
      }
    }
  }

  return (
    <button onClick={deleteTicket} type="button" className="btn btn-primary">
      Delete
    </button>
  )
}
