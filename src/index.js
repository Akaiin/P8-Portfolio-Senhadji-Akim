import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectContainer from './components/ProjectContainer'
import GlobalStyle from './utils/styles/GlobalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <GlobalStyle />
        <Header />
        <Hero />
        <About />
        <ProjectContainer />
        <Footer />
    </React.StrictMode>
)
