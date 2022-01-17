import React from 'react'

export const Sorting = (props) => {
    return (
        <div className='sorting'>
            <div className='sort sort_active' onClick = {(e) => {props.changeSorting(e); props.priceSort()}}>
                САМЫЙ ДЕШЕВЫЙ
            </div>
            <div className='sort' onClick = {(e) => {props.changeSorting(e); props.durationSort()}}>
                САМЫЙ БЫСТРЫЙ
            </div>
        </div>
    )
}