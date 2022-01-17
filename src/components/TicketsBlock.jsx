import React from 'react'
import {Sorting} from './Sorting'
import {Tickets} from './Tickets'
import {AddTickets} from './AddTickets'
import {MyContext} from '../context'

export class TicketsBlock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sorting: 'sortPrice',
            collAddTickets: 5
        }
    }

    sortPrice = (arr) => {
        return arr.sort((a, b) => {
            return a.price - b.price
        })
    }
    sortDuration = (arr) => {
        return arr.sort((a, b) => {
            const durationForward = a.segments[0].duration + a.segments[1].duration
            const durationBack = b.segments[0].duration + b.segments[1].duration
            return durationForward - durationBack
        })
    }

    priceSort = () => {
        this.setState({sorting: 'sortPrice'})
    }
    durationSort = () => {
        this.setState({sorting: 'sortDuration'})
    }
    changeSorting = (e) => {
        if(!e.target.classList.contains('sort_active')) {
            (e.target.previousSibling || e.target.nextSibling).classList.remove('sort_active')
            e.target.classList.add('sort_active')
        }
    }
    addTickets = () => {
        this.setState({collAddTickets: (this.state.collAddTickets + 5)})
    }
    checkFilter = (checks, arr) => {
        const newArr = []
        if (checks.length === 0) {
            return newArr
        }
        for (const check of checks) {
            for (const elem of arr) {
                if (check === (elem.segments[0].stops.length + elem.segments[1].stops.length)) {
                    newArr.push(elem)
                }
            }
        }
        return newArr
    }
    static contextType = MyContext
    render() {
        const {tickets, checkboxes} = this.context
        const checkFilter = this.checkFilter
        const collAddTickets = this.state.collAddTickets
        const sorting = (this.state.sorting === 'sortPrice') ? this.sortPrice : this.sortDuration
        const sortTickets = checkFilter(checkboxes, sorting(tickets))
        const partOfTickets = sortTickets.slice(0, collAddTickets)
        return (
            <div className='ticketsBlock'>
                <Sorting priceSort={this.priceSort} durationSort={this.durationSort} changeSorting={this.changeSorting}/>
                <Tickets partOfTickets={partOfTickets}/>
                <AddTickets add={this.addTickets}/>
            </div>
        )
    }
} 