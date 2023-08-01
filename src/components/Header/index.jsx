import styled from 'styled-components'

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 25px;
    padding: 0 5%;
`
const HeaderNavLinks = styled.ul`
    display: flex;
    gap: 30px;
`
const HeaderNavLink = styled.a`
    cursor: pointer;
    text-decoration: none;
`

const HeaderNavBtns = styled.div`
    display: flex;
    gap: 30px;
`

const HeaderNavBtn = styled.button`
    background: none;
    padding: 8px 10px;
    border-radius: 5px;
    border: 1px solid var(--dark-grey, #c4c4c4);
    cursor: pointer;
`

function Header() {
    return (
        <HeaderContainer>
            <img src="" alt="logo" className="header__logo"></img>
            <nav className="header__nav">
                <HeaderNavLinks>
                    <li>
                        <HeaderNavLink href="#about">About</HeaderNavLink>
                    </li>
                    <li>
                        <HeaderNavLink href="#experience">Experience</HeaderNavLink>
                    </li>
                    <li>
                        <HeaderNavLink href="#project">Project</HeaderNavLink>
                    </li>
                    <li>
                        <HeaderNavLink href="#contact">Contact</HeaderNavLink>
                    </li>
                </HeaderNavLinks>
            </nav>
            <HeaderNavBtns>
                <HeaderNavBtn>Resume</HeaderNavBtn>
                <HeaderNavBtn>Hire Me</HeaderNavBtn>
            </HeaderNavBtns>
        </HeaderContainer>
    )
}

export default Header
