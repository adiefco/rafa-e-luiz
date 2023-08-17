'use client'

import { useState } from 'react'
import Modal from '../Modal'
import './styles.scss'

const Card = ({ date, city, place, isExternal, buttonText, url }) => {

    const [showModal, setShowModal] = useState(false);


    return (
        <div className='carditem'>
            <div className='datesection'>
                <span>{date}</span>
            </div>
            <div className='locationsection'>
                <span className='city'>{city}</span>
                <span className='venue'>{place}</span>
            </div>
            <div className='buttonsection'>
                <button onClick={() => setShowModal(true)}>
                    {buttonText}</button>

            </div>
            {showModal && <Modal onClose={() => setShowModal(false)} city={city} ></Modal>}
        </div>
    )
}

Card.displayName = 'Card';

export default Card