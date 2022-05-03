import React from 'react'
import { Price } from './Price'
import { LogoCompany } from './LogoCompany'
import { TicketInfoRow } from './TicketInfoRow'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
dayjs.extend(duration)

export const Ticket = (props) => {
  const dataTicket = props.ticket
  const forward = dataTicket.segments[0]
  const back = dataTicket.segments[1]
  return (
    <div className="ticket">
      <div className="ticket__header">
        <Price price={dataTicket.price + ' Р'} />
        <LogoCompany />
      </div>
      <div className="ticketInfo">
        <TicketInfoRow
          from={forward.origin}
          to={forward.destination}
          stops={forward.stops.join(', ')}
          startTime={dayjs(forward.date).format('HH:mm')}
          endTime={dayjs(forward.date)
            .add(
              dayjs.duration({
                hours: Math.floor(forward.duration / 60),
                minutes: forward.duration % 60,
              })
            )
            .format('HH:mm')}
          duration={dayjs
            .duration({ hours: Math.floor(forward.duration / 60), minutes: forward.duration % 60 })
            .format('HHч mmм')}
        />
        <TicketInfoRow
          from={back.origin}
          to={back.destination}
          stops={back.stops.join(', ')}
          startTime={dayjs(back.date).format('HH:mm')}
          endTime={dayjs(back.date)
            .add(
              dayjs.duration({ hours: Math.floor(back.duration / 60), minutes: back.duration % 60 })
            )
            .format('HH:mm')}
          duration={dayjs
            .duration({ hours: Math.floor(back.duration / 60), minutes: back.duration % 60 })
            .format('HHч mmм')}
        />
      </div>
    </div>
  )
}
