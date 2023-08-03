import { forwardRef } from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 25px;
    padding: 0 5%;
`
const HeaderLogo = styled.img`
    width: 60px;
    padding-bottom: 20px;
    @media screen and (max-width: 525px) {
        display: none;
    }
`

const HeaderNavLinks = styled.ul`
    display: flex;
    gap: 30px;
    @media screen and (max-width: 600px) {
        gap: 20px;
    }
    @media screen and (max-width: 410px) {
        gap: 10px;
    }
    @media screen and (max-width: 425px) {
        gap: 8px;
    }
`
const HeaderNavLink = styled.a`
    color: black;
    cursor: pointer;
    text-decoration: none;
    @media screen and (max-width: 720px) {
        font-size: 12px;
    }
    @media screen and (max-width: 600px) {
        font-size: 10px;
    }
`

const HeaderNavBtns = styled.div`
    display: flex;
    gap: 30px;
    @media screen and (max-width: 720px) {
        gap: 20px;
    }
    @media screen and (max-width: 525px) {
        gap: 10px;
    }
    @media screen and (max-width: 425px) {
        gap: 5px;
    }
`

const HeaderNavBtn = styled.button`
    background: none;
    padding: 8px 10px;
    border-radius: 5px;
    border: 1px solid var(--dark-grey, #c4c4c4);
    cursor: pointer;
    @media screen and (max-width: 720px) {
        font-size: 12px;
        padding: 6px 8px;
    }
    @media screen and (max-width: 470px) {
        font-size: 10px;
        padding: 4px 6px;
    }
`

const Header = forwardRef(function Header(
    { aboutRef, technologieRef, projectRef, contactRef, scrollToRef },
    ref
) {
    return (
        <HeaderContainer ref={ref}>
            <HeaderLogo
                src="https://d1yjjnpx0p53s8.cloudfront.net/akimltd_logo-web.jpg"
                alt="logo"
                className="header__logo"
            ></HeaderLogo>
            <nav className="header__nav">
                <HeaderNavLinks>
                    <li>
                        <HeaderNavLink
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToRef(aboutRef)
                            }}
                            href="#about"
                        >
                            À propos
                        </HeaderNavLink>
                    </li>
                    <li>
                        <HeaderNavLink
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToRef(technologieRef)
                            }}
                            href="#technologie"
                        >
                            Technologies
                        </HeaderNavLink>
                    </li>
                    <li>
                        <HeaderNavLink
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToRef(projectRef)
                            }}
                            href="#project"
                        >
                            Projets
                        </HeaderNavLink>
                    </li>
                    <li>
                        <HeaderNavLink
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToRef(contactRef)
                            }}
                            href="#contact"
                        >
                            Contact
                        </HeaderNavLink>
                    </li>
                </HeaderNavLinks>
            </nav>
            <HeaderNavBtns>
                <HeaderNavBtn>Resume</HeaderNavBtn>
                <HeaderNavBtn
                    onClick={(e) => {
                        e.preventDefault()
                        scrollToRef(contactRef)
                    }}
                    href="#contact"
                >
                    Hire Me
                </HeaderNavBtn>
            </HeaderNavBtns>
        </HeaderContainer>
    )
})
export default Header
