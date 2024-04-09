import Link from 'next/link'
import axios from 'axios'
import DeleteBtn from './DeleteBtn'
import { timeFixer } from '@/utils/timeFixer'

async function getAllTickets() {
  try {
    const res = await axios.get('http://localhost:3000/api/tickets')
    if (res.status !== 200) throw new Error('Failed to fetch')
    return res.data.tickets
  } catch (error) {
    console.error(error)
  }
}

export default async function Ticket() {
  const tickets = await getAllTickets()
  return (
    <>
      {tickets.map((el, index) => (
        <div key={index} className="card bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">{el.title}</h2>
            <p className="line-clamp-3">{el.description}</p>
            <div className="card-actions justify-end">
              <DeleteBtn id={el._id} />
              <Link href={`/editTicket/${el._id}`} className="btn btn-ghost">
                Edit
              </Link>
            </div>
            <div className="grid grid-cols-2 w-[100%] gap-2 mt-3">
              <div className="flex flex-col">
                <p>Created At:</p>
                <span className="badge mx-auto">{timeFixer(el.createdAt)}</span>
              </div>
              <div className="flex flex-col">
                <p>Updated At:</p>
                <span className="badge mx-auto">{timeFixer(el.updatedAt)}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
