import { technologies } from '../../data/technologies'
import SectionTitle from '../SectionTitle'
import Technologie from '../Technologie'
import styled from 'styled-components'
import { forwardRef } from 'react'

const TechnologiesSection = styled.section`
    padding-bottom: 200px;
    height: 900px;
`

const TechnologiesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 150px);
    grid-gap: 50px;
    padding-left: 5%;
    padding-right: 5%;
    @media screen and (max-width: 930px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-gap: 100px;
    }
    @media screen and (max-width: 660px) {
        grid-gap: 50px;
    }
    @media screen and (max-width: 560px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(6, 1fr);
    }
`

const TechnologieContainer = forwardRef(function TechnologieContainer({}, ref) {
    return (
        <TechnologiesSection ref={ref} id="technologie">
            <SectionTitle title={`Technologies`} />
            <TechnologiesContainer>
                {technologies.map((technologie, index) => (
                    <Technologie
                        key={index}
                        title={technologie.title}
                        image={technologie.image}
                    ></Technologie>
                ))}
            </TechnologiesContainer>
        </TechnologiesSection>
    )
})
export default TechnologieContainer
