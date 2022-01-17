import React from 'react'

export const Price = (props) => {
    const price = props.price
    return (
        <div className='price'>
            {price}
        </div>
    )
}