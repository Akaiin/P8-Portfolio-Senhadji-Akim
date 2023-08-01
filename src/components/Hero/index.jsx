import styled from 'styled-components'

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

const HeroArrow = styled.a`
    font-size: 48px;
    margin-bottom: 150px;
`

function Hero() {
    return (
        <HeroContainer>
            <HeroText>
                <HeroTitle>Hi, I'm Akim Senhadji</HeroTitle>
                <p>Développeur d'application web</p>
            </HeroText>
            <HeroArrow href="#about">
                <i className="fa-solid fa-arrow-down"></i>
            </HeroArrow>
        </HeroContainer>
    )
}

export default Hero
