import { useRef } from 'react'
import About from '../../components/About'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import ProjectContainer from '../../components/ProjectContainer'
import styled from 'styled-components'
import TechnologieContainer from '../../components/TechnologieContainer'

const TopArrow = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    border: none;
    font-size: 48px;
    color: black;
    background: none;
    cursor: pointer;
`

function Home() {
    const aboutRef = useRef(null)
    const technologieRef = useRef(null)
    const projectRef = useRef(null)
    const contactRef = useRef(null)
    const headerRef = useRef(null)
    const scrollToRef = (ref) => {
        if (ref && ref.current) {
            window.scrollTo({
                top: ref.current.offsetTop,
                behavior: 'smooth',
            })
        }
    }
    return (
        <>
            <Header
                scrollToRef={scrollToRef}
                aboutRef={aboutRef}
                technologieRef={technologieRef}
                projectRef={projectRef}
                contactRef={contactRef}
                ref={headerRef}
            />
            <Hero scrollToRef={scrollToRef} aboutRef={aboutRef} />
            <About ref={aboutRef} />
            <TechnologieContainer ref={technologieRef} />
            <ProjectContainer ref={projectRef} />
            <TopArrow
                onClick={() => {
                    scrollToRef(headerRef)
                }}
            >
                <i className="fa-solid fa-arrow-up"></i>
            </TopArrow>
            <Footer ref={contactRef} />
        </>
    )
}

export default Home
