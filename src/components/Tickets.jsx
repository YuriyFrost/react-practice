import React from 'react'
import { Ticket } from './Ticket'

export const Tickets = ({partOfTickets}) => {
    return (
        <div className='tickets'>
            {partOfTickets.map((ticket, i) => {
                    return <Ticket ticket={ticket} key={i}/>
                })
            }
        </div>
    )
}