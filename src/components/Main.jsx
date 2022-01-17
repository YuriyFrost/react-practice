import React, { useState, useEffect } from 'react'
import { TicketsBlock } from './TicketsBlock'
import { Checks } from './Checks'
import { getJSON } from '../utils'
import { MyContext } from '../context'

export const Main = () => {
    const [checkboxes, setCheckboxes] = useState([0, 1, 2, 3, 4, 5, 6])
    const [tickets, setTickets] = useState([])

    const onFilterChange = (checkboxes) => {
        setCheckboxes(checkboxes)
    }
    useEffect(() => {
        getJSON('https://front-test.beta.aviasales.ru/search')
            .then((data) => {
                const id = data.searchId
                return getJSON(`https://front-test.beta.aviasales.ru/tickets?searchId=${id}`)
            })
            .then((data) => {
                setTickets(data.tickets)
            })
    }, [])
    const value = {
        tickets: tickets,
        checkboxes: checkboxes,
        onFilterChange: onFilterChange
    }
    return (
        <MyContext.Provider value={value}>
            <div className='main'>
                <div className='filters'>
                    <Checks/>
                </div>
                <TicketsBlock/>
            </div>
        </MyContext.Provider>
    )
}