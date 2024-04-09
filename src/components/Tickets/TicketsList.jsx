import Ticket from './Ticket.jsx'
import { Suspense } from 'react'

const TicketsList = () => {
  return (
    <Suspense
      fallback={<span className="loading loading-dots loading-lg absolute left-[50%] top-[50%]" />}
    >
      <div className="grid grid-cols-2 gap-2 p-2">
        <Ticket />
      </div>
    </Suspense>
  )
}

export default TicketsList
