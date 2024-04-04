const TicketsList = () => {
  return (
    <div className="grid grid-cols-2 gap-2 mt-5">
      {/* Ticket 1 */}
      <div className="card bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Cookies!</h2>
          <p className="line-clamp-3">
            There is long long long long long long long long long long long long long long long long
            long long long long long long long long long long long long long long long long long
            long long long long long long long long long long long long long long long long long
            long long long long long text
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Accept</button>
            <button className="btn btn-ghost">Deny</button>
          </div>
        </div>
      </div>
      {/* Ticket 2 */}
      <div className="card bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Cookies!</h2>
          <p>We are using cookies for no reason!</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Change</button>
            <button className="btn btn-ghost">Delete</button>
          </div>
        </div>
      </div>
      {/* Ticket 3 */}
      <div className="card bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Cookies!</h2>
          <p>We are using cookies for no reason!!</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Accept</button>
            <button className="btn btn-ghost">Deny</button>
          </div>
        </div>
      </div>
      {/* Ticket 4 */}
      <div className="card bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Cookies!</h2>
          <p>We are using cookies for no reason.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Accept</button>
            <button className="btn btn-ghost">Deny</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketsList
