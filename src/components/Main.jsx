import React, { useEffect } from 'react'
import { TicketsBlock } from './TicketsBlock'
import { Checks } from './Checks'
import { fetchTickets } from '../redux/actions'
import { useDispatch } from 'react-redux'

export const Main = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTickets())
    }, [dispatch])
    return (
        <div className='main'>
            <div className='filters'>
                <Checks/>
            </div>
            <TicketsBlock/>
        </div>
    )
}