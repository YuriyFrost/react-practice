import { useSelector } from 'react-redux'

const sortMethods = {
  sortingPrice: (arr) => {
    return arr.sort((a, b) => {
      return a.price - b.price
    })
  },
  sortingDuration: (arr) => {
    return arr.sort((a, b) => {
      const durationForward = a.segments[0].duration + a.segments[1].duration
      const durationBack = b.segments[0].duration + b.segments[1].duration
      return durationForward - durationBack
    })
  },
}

export const useSortingTickets = () => {
  const { sorting, tickets, checkboxes } = useSelector((state) => state.tickets)
  const filterTickets = (checks, arr) => {
    const newArr = []
    if (checks.length === 0) {
      return newArr
    }
    for (const check of checks) {
      for (const elem of arr) {
        if (check === elem.segments[0].stops.length + elem.segments[1].stops.length) {
          newArr.push(elem)
        }
      }
    }
    return newArr
  }
  const filteredTickets = filterTickets(checkboxes, tickets)
  const sortedTickets = sortMethods[sorting](filteredTickets)
  return sortedTickets
}
