'use client'

import { useState } from 'react'
import Modal from '../Modal'
import './styles.css'

export default function ({ date, city, place, isExternal, buttonText, url }) {

    const [showModal, setShowModal] = useState(false);



    const handleButtonClick = () => {
        if (isExternal) {
            setOpen(true);
        }
    };

    return (
        <div className='carditem'>
            <div className='datesection'>
                <span>{date}</span>
            </div>
            <div className='locationsection'>
                <span style={{fontSize: '2.3vw'}}>{city}</span>
                <span>{place}</span>
            </div>
            <div className='buttonsection'>
                <button onClick={() => setShowModal(true)}>
                    {buttonText}</button>

            </div>
            {showModal && <Modal onClose={() => setShowModal(false)} city={city} ></Modal>}
        </div>
    )
}