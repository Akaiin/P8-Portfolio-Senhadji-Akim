import { forwardRef } from 'react'
import styled from 'styled-components'
import image from '../../images/working.webp'
import SectionTitle from '../SectionTitle'

const AboutContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 200px;
    padding-left: 5%;
    height: 950px;
    background: #f2f2f2;
`

const AboutContent = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap-reverse;
    gap: 79px;
`

const AboutTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media screen and (max-width: 550px) {
        align-items: center;
    }
`

const AboutText = styled.p`
    width: 500px;
    @media screen and (max-width: 550px) {
        width: 90%;
        font-size: 14px;
    }
`

const About = forwardRef(function About({}, ref) {
    return (
        <AboutContainer ref={ref} id="about">
            <SectionTitle title={`À Propos`} />
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
})
export default About
