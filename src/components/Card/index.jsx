'use client'

import { useState } from 'react'
import Modal from '../Modal'
import './styles.scss'

const Card = ({ date, city, place, isExternal, buttonText, url }) => {

    const [showModal, setShowModal] = useState(false);

    var classname

    if (buttonText === 'Ingressos') {
        classname = 'available'
    } else if (buttonText === 'Ver fotos') {
        classname = 'finished'
    } 


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
                {buttonText === 'avise-me' && <button onClick={() => setShowModal(true)}>
                    {buttonText}</button>}
                {buttonText === 'Ingressos' && <a className={classname}>{buttonText}</a>}

            </div>
            {showModal && <Modal onClose={() => setShowModal(false)} city={city} ></Modal>}
        </div>
    )
}

Card.displayName = 'Card';

export default Card