import React from "react";
import ReactDOM from "react-dom";
import Image from "next/image";

import './styles.css'

const Modal = ({ onClose, city }) => {
    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = (
        <div className="modal-overlay">
            <div className="modal">
            <form action="https://formsquash.io/f/f2kVQ6C4TGoxmAEsgj7i" method="POST">
                    <span className="title">Ingressos não disponíveis</span>
                    <h2>Seja avisado quando a venda começar!</h2>
                    <span className="inputtitle">Nome</span>
                    <input type='text' name='Nome completo' placeholder='Digite seu nome completo' />
                    <span className="inputtitle">Email</span>
                    <input type='email' name='Email' placeholder='Digite seu e-mail de contato' />
                    <input type='hidden' name='Cidade' value={`${city}`} />
                    <input type="hidden" name="_gotcha"/>
                    <div className="buttonswrapper">
                        <button onClick={handleCloseClick} className="cancelbutton">Cancelar</button>
                        <button type='submit'>Enviar</button>
                    </div>
                </form>
                <div className="imagemodal">
                    <Image src='/modal.jpg' alt={'modal image'} width={333} height={482} />
                </div>
            </div>
        </div>
    );

    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")
    );
};

Modal.displayName = 'Modal';

export default Modal