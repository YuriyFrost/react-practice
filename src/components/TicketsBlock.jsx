import React, { useState} from 'react'
import { useSelector } from 'react-redux'
import { Sorting } from './Sorting'
import { Ticket } from './Ticket'
import { useSortingTickets } from '../redux/hooks'
import { Loader } from './Loader'

export const TicketsBlock = () => {
    const [countAddTickets, setCountAddTickets] = useState(5)
    const isLoading = useSelector(state => state.app.loading)

    const addTickets = () => {
        setCountAddTickets(countAddTickets + 5)
    }
    const sortedTickets = useSortingTickets()
    const partOfTickets = sortedTickets.slice(0, countAddTickets)

    return (
        <div className='ticketsBlock'>
            <Sorting />
            <div className='tickets'>
            {isLoading ? <Loader /> : partOfTickets.map((ticket, i) => {
                    return <Ticket ticket={ticket} key={i}/>
                })
            }
            </div>
            <div className='addTickets' onClick={addTickets}>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!</div>
        </div>
    )
} 