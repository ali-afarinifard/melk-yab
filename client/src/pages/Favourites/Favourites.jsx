import React, { useContext, useState } from 'react'

// ** Styles
import "../Properties/Properties.scss"

// ** Hooks
import useProperties from '../../hooks/useProperties'

// ** Spinners
import { PuffLoader } from 'react-spinners'

// ** Components
import SearchBar from '../../components/SearchBar/SearchBar'
import PropertyCard from '../../components/PropertyCard/PropertyCard'

// ** Context
import UserDetailContext from '../../context/UserDetailContext'

// ** styled-components
import styled from 'styled-components'

const SetMarginBottom = styled.div`
    margin-bottom: 10rem;
`;

const Favourites = () => {
    const { data, isError, isLoading } = useProperties();

    // Search Bar State
    const [filter, setFilter] = useState("")


    const {
        userDetails: { favourites },
    } = useContext(UserDetailContext);


    // isError....
    if (isError) {
        return (
            <div className='wrapper'>
                <span>Error while fetching data</span>
            </div>
        )
    }

    // isLoading....
    if (isLoading) {
        return (
            <div className='wrapper flexCenter' style={{ height: "60vh" }}>
                <PuffLoader
                    height="80"
                    width="80"
                    radius={1}
                    color="#4066ff"
                    aria-label="puff-loading"
                />
            </div>
        )
    }

    return (
        <div className='wrapper'>
            <div className="flexColCenter paddings innerWidth properties-container">

                <SearchBar filter={filter} setFilter={setFilter} />

                <div className="paddings flexCenter properties">
                    {
                        data
                            .filter((property) =>
                                favourites?.includes(property.id)
                            )

                            .filter((property) =>

                                property.title.toLowerCase().includes(filter.toLowerCase()) ||
                                property.city.toLowerCase().includes(filter.toLowerCase()) ||
                                property.country.toLowerCase().includes(filter.toLowerCase())

                            )
                            .map((card, i) => (<PropertyCard card={card} key={i} />))
                    }
                    <SetMarginBottom />
                </div>

            </div>
        </div>
    )
}

export default Favourites