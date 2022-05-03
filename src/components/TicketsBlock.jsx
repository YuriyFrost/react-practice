import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Sorting } from './Sorting'
import { Ticket } from './Ticket'
import { useSortingTickets } from '../redux/hooks'
import { Loader } from './Loader'

export const TicketsBlock = () => {
  const [countAddTickets, setCountAddTickets] = useState(5)
  const { isLoading, isError } = useSelector((state) => state.app)

  const addTickets = () => {
    setCountAddTickets(countAddTickets + 5)
  }
  const sortedTickets = useSortingTickets()
  const partOfTickets = sortedTickets.slice(0, countAddTickets)
  const isAllTickets = partOfTickets.length === sortedTickets.length ? true : false
  return (
    <div className="ticketsBlock">
      <Sorting />
      {isError && <div>Сервер не отвечает</div>}
      {isLoading && <Loader />}
      {!isError && !isLoading && (
        <>
          <div className="tickets">
            {partOfTickets.map((ticket, i) => (
              <Ticket ticket={ticket} key={i} />
            ))}
          </div>
          {!isAllTickets && (
            <div className="addTickets" onClick={addTickets}>
              Показать еще 5 билетов!
            </div>
          )}
        </>
      )}
    </div>
  )
}
