import styled from 'styled-components'

const TechnologieContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const TechnologieImage = styled.img`
    width: 50px;
    height: 50px;
    @media screen and (max-width: 1220px) {
        width: 40px;
        height: 40px;
    }

    @media screen and (max-width: 1050px) {
        width: 30px;
        height: 30px;
    }
    @media screen and (max-width: 560px) {
        width: 30px;
        height: 30px;
    }
`

const TechnologieName = styled.p`
    font-size: 40px;
    @media screen and (max-width: 1220px) {
        font-size: 32px;
    }

    @media screen and (max-width: 1050px) {
        font-size: 30px;
    }
    @media screen and (max-width: 500px) {
        font-size: 20px;
    }
`

function Technologie({ image, title }) {
    return (
        <TechnologieContainer>
            <TechnologieImage src={image}></TechnologieImage>
            <TechnologieName>{title}</TechnologieName>
        </TechnologieContainer>
    )
}

export default Technologie
