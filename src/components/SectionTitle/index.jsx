import styled from 'styled-components'

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 50px;
    width: 100%;
`

const Bar = styled.div`
    border: solid 3px black;
    width: 30%;
    height: 1px;
    @media screen and (max-width: 600px) {
        border: solid 2px black;
    }
    @media screen and (max-width: 450px) {
        border: solid 1px black;
    }
`

const Title = styled.h2`
    font-size: 36px;
    @media screen and (max-width: 600px) {
        font-size: 28px;
    }
    @media screen and (max-width: 450px) {
        font-size: 22px;
    }
`

function SectionTitle({ title }) {
    return (
        <TitleContainer>
            <Bar></Bar>
            <Title>{title}</Title>
            <Bar></Bar>
        </TitleContainer>
    )
}

export default SectionTitle
