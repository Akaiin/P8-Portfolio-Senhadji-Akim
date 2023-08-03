import styled, { keyframes } from 'styled-components'

const HeroContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 250px;
    margin-bottom: 150px;
    text-align: center;
    gap: 100px;
`

const HeroTitle = styled.h1`
    font-size: 72px;
    font-weight: 400;
`

const HeroText = styled.div`
    margin-bottom: 75px;
`

const movingarrow = keyframes`
    from {
        transform: translateY(0px)
    }
    to {
        transform: translateY(50px);
    }
`

const HeroArrow = styled.a`
    font-size: 48px;
    margin-bottom: 150px;
    color: black;
    animation: ${movingarrow} infinite 1s alternate;
`

function Hero({ scrollToRef, aboutRef }) {
    return (
        <HeroContainer>
            <HeroText>
                <HeroTitle>Akim Senhadji</HeroTitle>
                <p>Développeur d'application web</p>
            </HeroText>
            <HeroArrow
                onClick={(e) => {
                    e.preventDefault()
                    scrollToRef(aboutRef)
                }}
                href="#about"
            >
                <i className="fa-solid fa-arrow-down"></i>
            </HeroArrow>
        </HeroContainer>
    )
}

export default Hero
