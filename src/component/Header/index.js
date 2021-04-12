import React from 'react'
import './style.scss'

const Header = (props) => {
    const { title } = props
    return (
        <header>
            <h1 className=''>{title}</h1>
        </header>
    )
}
export default Header