import React from 'react'

export const TicketInfoRow = ({ from, to, startTime, endTime, duration, stops }) => {
  return (
    <div className="ticketInfo__row">
      <div className="ticketInfo__column">
        <div className="flight__fromTo title">
          {from} - {to}
        </div>
        <div className="flight__time ticket__value">
          {startTime} - {endTime}
        </div>
      </div>
      <div className="ticketInfo__column">
        <div className="inFlight title">В ПУТИ</div>
        <div className="flight__fullTime ticket__value">{duration}</div>
      </div>
      <div className="ticketInfo__column">
        <div className="transfers__coll title">ПЕРЕСАДКИ</div>
        <div className="transfers__city ticket__value">{stops || 'БЕЗ ПЕРЕСАДОК'}</div>
      </div>
    </div>
  )
}
