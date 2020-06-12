import React from 'react'
import {withRouter, Link} from 'react-router-dom'

function Header(props){
    return(
        <div className='nav-bar'>
            <div onClick={() => props.history.push('/')} className='logo'>
                HowMeme
            </div>
            <div className='nav-bar-links'>
                <Link to='/product'>Product</Link>
                <Link to='/wall-of-memes'>Wall of Memes</Link>
                <Link to='/favorites'>Favorites</Link>
                <Link to='/contact-us'>Contact Us</Link>
            </div>
        </div>
    )
}

export default withRouter(Header)