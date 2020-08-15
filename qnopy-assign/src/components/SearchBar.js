import React from 'react'
import { connect } from 'react-redux'
import { setShowSearchModal } from '../actions/imageAction';

const SearchBar = ( { setShowSearchModal }) => {
    const onClick = () => {
        setShowSearchModal(true)
    }
    return (
        <div>
        <div className='d-flex justify-content-around'>
            <div class="form-inline  ">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn my-2 my-sm-0" onClick={onClick} >Search</button>
            </div>
        </div>
        </div>
    )
}

export default connect(null, { setShowSearchModal}) (SearchBar)
