import React from 'react'

const Footer = (props) => {
    const { totalCount } = props
    return (
        <footer className='mt-4 text-center'>
            {
               totalCount > 0 ?
               <span>{totalCount} {totalCount > 1 ? 'Items' : 'Item'}</span>
               : ''
            }
            
        </footer>
    )
}
export default Footer