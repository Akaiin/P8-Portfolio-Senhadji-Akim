import { forwardRef, useState } from 'react'
import styled from 'styled-components'
import Modal from '../Modal'
import SectionTitle from '../SectionTitle'

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    padding-bottom: 50px;
`

const FooterText = styled.p`
    text-align: center;
    width: 550px;
    @media screen and (max-width: 575px) {
        padding-left: 5%;
        padding-right: 5%;
        width: auto;
    }
`

const FooterBtn = styled.button`
    background: none;
    margin-top: 50px;
    margin-bottom: 120px;
    padding: 8px 10px;
    border-radius: 5px;
    border: 1px solid var(--dark-grey, #c4c4c4);
    cursor: pointer;
`

const FooterSocials = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
`

const SocialLink = styled.a`
    cursor: pointer;
`

const SocialIcon = styled.i`
    font-size: 20px;
    color: black;
`

const Footer = forwardRef(function Footer({}, ref) {
    const [modal, setModal] = useState(false)

    return (
        <FooterContainer ref={ref} id="contact">
            <SectionTitle title={`Contact`} />
            <FooterText>
                Je suis actuellement à la recherche d'un emploi, et je vous serais reconnaissant si vous
                pouviez me contacter avec toutes les opportunités d'emploi disponibles.
            </FooterText>
            <FooterBtn onClick={() => setModal(true)}>Me contacter</FooterBtn>
            <Modal isOpen={modal} setIsOpen={setModal} />
            <FooterSocials>
                <SocialLink href="https://github.com/Akaiin" target="_blank">
                    <SocialIcon className="fa-brands fa-github"></SocialIcon>
                </SocialLink>
                <SocialLink target="_blank">
                    <SocialIcon className="fa-brands fa-twitter"></SocialIcon>
                </SocialLink>
                <SocialLink target="_blank">
                    <SocialIcon className="fa-brands fa-linkedin"></SocialIcon>
                </SocialLink>
            </FooterSocials>
            <p>Akim Senhadji - 2023</p>
        </FooterContainer>
    )
})
export default Footer
