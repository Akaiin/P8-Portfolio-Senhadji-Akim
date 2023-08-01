import styled from 'styled-components'

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
`

const ContactContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 120px;
    margin-bottom: 73px;
`

const ContactBar = styled.div`
    border: solid 3px black;
    width: 375px;
    height: 1px;
`

const FooterTitle = styled.h2`
    font-size: 36px;
`

const FooterText = styled.p`
    text-align: center;
    width: 550px;
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
`

function Footer() {
    return (
        <FooterContainer id="contact">
            <ContactContainer>
                <ContactBar></ContactBar>
                <FooterTitle>Contact</FooterTitle>
                <ContactBar></ContactBar>
            </ContactContainer>
            <FooterText>
                I am currently seeking employment, and I would appreciate it if you could contact me with any
                available job opportunities.
            </FooterText>
            <FooterBtn>Write Message</FooterBtn>
            <FooterSocials>
                <SocialLink href="https://github.com/Akaiin">
                    <SocialIcon className="fa-brands fa-github"></SocialIcon>
                </SocialLink>
                <SocialLink>
                    <SocialIcon className="fa-brands fa-twitter"></SocialIcon>
                </SocialLink>
                <SocialLink>
                    <SocialIcon className="fa-brands fa-linkedin"></SocialIcon>
                </SocialLink>
            </FooterSocials>
            <p>Akim Senhadji - 2023</p>
        </FooterContainer>
    )
}

export default Footer
