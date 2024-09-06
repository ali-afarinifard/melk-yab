import React from 'react'

// ** React Icons
import { HiLocationMarker } from 'react-icons/hi'

const SearchBar = ({ filter, setFilter }) => {
    return (
        <div className='flexCenter search-bar'>
            <HiLocationMarker color='var(--blue)' size={25} />
            <input
                type="text"
                placeholder='عنوان، شهر، کشور...'
                value={filter} onChange={(e) => setFilter(e.target.value)}
                style={{ background: "#fff", color: "#252525" }}
            />
            <button className='button'>جستجو</button>
        </div>
    )
}

export default SearchBar