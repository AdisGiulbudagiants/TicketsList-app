import axios from 'axios'
import EditTicketForm from '@/components/EditTicketForm'

async function getTicketById(id) {
  try {
    const res = await axios.get(`http://localhost:3000/api/tickets/${id}`)
    if (res.status !== 200) throw new Error('Failed to fetch ticket')
    return res.data
  } catch (error) {
    console.error(error)
  }
}

export default async function EditTicket({ params }) {
  const { id } = params
  const { ticket } = await getTicketById(id)
  const { title, description } = ticket
  return (
    <div className="p-2 h-full">
      <EditTicketForm id={id} title={title} description={description} />
    </div>
  )
}
