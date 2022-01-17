import React from 'react'

export const TicketInfoRow = (props) => {
    return (
        <div className='ticketInfo__row'>
            <div className='ticketInfo__column'>
                <div className='flight__fromTo title'>{props.from} - {props.to}</div>
                <div className='flight__time ticket__value'>{props.startTime} - {props.endTime}</div>
            </div>
            <div className='ticketInfo__column'>
                <div className='inFlight title'>В ПУТИ</div>
                <div className='flight__fullTime ticket__value'>{props.duration}</div>
            </div>
            <div className='ticketInfo__column'>
                <div className='transfers__coll title'>ПЕРЕСАДКИ</div>
                <div className='transfers__city ticket__value'>{props.stops || 'БЕЗ ПЕРЕСАДОК'}</div>
            </div>
        </div>
    )
}