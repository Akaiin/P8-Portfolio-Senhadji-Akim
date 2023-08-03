import emailjs from '@emailjs/browser'
import styled from 'styled-components'
import React, { useRef, useState } from 'react'

const ModalContainer = styled.div`
    ${(props) => (props.$open ? 'display: flex' : 'display: none')};
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
`

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 630px;
    height: 731px;
    background: white;
    border-radius: 10px;
    @media screen and (max-width: 665px) {
        width: 90%;
    }
`

const CloseBtn = styled.button`
    align-self: flex-end;
    width: 30px;
    height: 30px;
    margin-bottom: 30px;
    border: none;
    background: none;
    cursor: pointer;
`

const ModalContact = styled.h2`
    align-self: center;
    margin-bottom: 30px;
`

const ModalForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
`

const InputTextForm = styled.input`
    outline: none;
    border: solid 1px;
    width: 70%;
    height: 56px;
    border-radius: 8px;
    padding-left: 20px;
`
const InputEmailForm = styled.input`
    outline: none;
    border: solid 1px;
    width: 70%;
    height: 56px;
    border-radius: 8px;
    padding-left: 20px;
`

const TextAreaForm = styled.textarea`
    outline: none;
    width: 70%;
    height: 200px;
    border-radius: 8px;
    padding: 20px;
`

const SubmitBtn = styled.input`
    width: 200px;
    height: 50px;
    cursor: pointer;
`

const ConfirmationContainer = styled.div`
    align-self: center;
    margin-top: 10px;
    color: green;
`

function Modal({ isOpen, setIsOpen }) {
    const formRef = useRef()
    const [confirmationMessage, setConfirmationMessage] = useState(null)

    const onSubmit = (e) => {
        e.preventDefault()
        emailjs
            .sendForm('service_88vjty5', 'template_rgr3ryo', formRef.current, 'a2Lh0zv6soTApMhv_')
            .then((result) => {
                console.log(result.text)
                setConfirmationMessage('Message envoyé avec succès!')
            })
            .catch((error) => {
                console.log(error.text)
                setConfirmationMessage('Une erreur est survenue')
            })
    }

    return (
        <ModalContainer $open={isOpen}>
            <ModalContent>
                <CloseBtn onClick={() => setIsOpen(false)}>
                    <i className="fa-solid fa-xmark"></i>
                </CloseBtn>
                <ModalContact>Contactez moi !</ModalContact>
                <ModalForm ref={formRef} onSubmit={onSubmit}>
                    <InputTextForm type="text" placeholder="Votre nom" name="user_name" />
                    <InputEmailForm type="email" placeholder="Votre email" name="user_email" required />
                    <TextAreaForm required name="message" />
                    <SubmitBtn type="submit" />
                </ModalForm>
                <ConfirmationContainer>
                    {confirmationMessage && <p>{confirmationMessage}</p>}{' '}
                </ConfirmationContainer>
            </ModalContent>
        </ModalContainer>
    )
}

export default Modal
