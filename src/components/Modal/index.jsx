import emailjs from '@emailjs/browser'
import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

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
    width: 630px;
    height: 731px;
    background: white;
`

function Modal({ isOpen, setIsOpen }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const formRef = useRef()
    const onSubmit = (e) => {
        emailjs
            .sendForm('service_88vjty5', 'template_rgr3ryo', formRef.current, 'a2Lh0zv6soTApMhv_')
            .then((result) => {
                console.log(result.text)
            })
            .catch((error) => console.log(error.text))
    }
    return (
        <ModalContainer $open={isOpen}>
            <ModalContent>
                <button onClick={() => setIsOpen(false)}>X</button>
                <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Nom" {...register} name="user_name" />
                    <input
                        type="email"
                        placeholder="Mail"
                        {...register('mail', { required: true })}
                        name="user_email"
                    />
                    <textarea {...register('message', { required: true })} name="message" />
                    <input type="submit" />
                </form>
            </ModalContent>
        </ModalContainer>
    )
}

export default Modal
