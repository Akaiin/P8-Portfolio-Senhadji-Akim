import styled from 'styled-components'
import image from '../../images/working.webp'

const AboutContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 200px;
    height: 685px;
    background: var(--light-grey, #f2f2f2);
`

const AboutTitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`

const AboutBar = styled.div`
    border: solid 3px black;
    width: 375px;
    height: 1px;
`

const AboutTitle = styled.h2`
    font-size: 36px;
`

const AboutContent = styled.div`
    display: flex;
    justify-content: center;
    gap: 79px;
`

const AboutTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const AboutText = styled.p`
    width: 500px;
`

function About() {
    return (
        <AboutContainer id="about">
            <AboutTitleContainer>
                <AboutBar></AboutBar>
                <AboutTitle>About</AboutTitle>
                <AboutBar></AboutBar>
            </AboutTitleContainer>
            <AboutContent>
                <AboutTextContainer>
                    <AboutText>
                        Je suis passionné par le développement web et la création d'expériences interactives.
                        Mon parcours m'a permis d'acquérir un large éventail de compétences techniques,
                        notamment en HTML, CSS, JavaScript, React, Node.js, Sass et MongoDB.
                    </AboutText>
                    <AboutText>
                        En complément, mes connaissances en Node.js me permettent de mettre en place des
                        applications web côté serveur, en utilisant JavaScript pour le développement complet
                        de l'application, de la base de données à la gestion des requêtes.
                    </AboutText>
                    <AboutText>
                        Si vous cherchez un développeur web passionné, curieux et déterminé, n'hésitez pas à
                        me contacter. Je serais ravi de collaborer avec vous pour donner vie à vos projets et
                        réaliser des expériences web exceptionnelles.
                    </AboutText>
                </AboutTextContainer>
                <img src={image} alt=""></img>
            </AboutContent>
        </AboutContainer>
    )
}

export default About
