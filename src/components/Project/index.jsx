import styled from 'styled-components'

const ProjectContainer = styled.div`
    display: flex;
    ${(props) => (props.$reverse ? 'flex-direction: row' : 'flex-direction: row-reverse')};
    margin-bottom: 70px;
    gap: 20px;
    padding-left: 5%;
    padding-right: 5%;
    @media screen and (max-width: 825px) {
        flex-direction: column;
        width: 100%;
    }
`

const ProjectImage = styled.img`
    ${(props) => (props.$reverse ? 'border-radius: 5px 0px 0px 5px' : 'border-radius: 0px 5px 5px 0px')};
    flex: 1;
    min-width: 300px;
    height: 249px;
    object-fit: cover;
`

const ProjectRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
`

const ProjectTitle = styled.h3`
    padding-top: 20px;
    font-size: 30px;
    @media screen and (max-width: 850px) {
        font-size: 24px;
    }
`

const ProjectText = styled.p`
    font-size: 16px;
    max-width: 455px;
    @media screen and (max-width: 900px) {
        font-size: 14px;
    }
    @media screen and (max-width: 825px) {
        max-width: none;
    }
`

const Bar = styled.div`
    border: solid 1px black;
    margin-top: 5px;
    margin-bottom: 5px;
`

const TagsContainer = styled.ul`
    display: flex;
    gap: 10px;
    margin-bottom: 5px;
`

const Tags = styled.li`
    font-size: 16px;
    font-weight: 700;
`

const LinksContainer = styled.div`
    display: flex;
    gap: 5px;
`

const Link = styled.a`
    color: black;
`

const LowerContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
`

function Project({ image, title, children, tags, links, reverse }) {
    return (
        <ProjectContainer $reverse={reverse}>
            <ProjectImage src={image} alt={title} $reverse={reverse}></ProjectImage>
            <ProjectRightContainer>
                <div>
                    <ProjectTitle>{title}</ProjectTitle>
                    <ProjectText>{children}</ProjectText>
                </div>
                <LowerContainer>
                    <Bar></Bar>
                    <div>
                        <TagsContainer>
                            {tags && tags.map((tag) => <Tags key={tag}>{tag}</Tags>)}
                        </TagsContainer>
                    </div>
                    <LinksContainer>
                        {links &&
                            links.map((link) => (
                                <Link href={link.url} target="_blank" key={link.url}>
                                    {link.icon}
                                </Link>
                            ))}
                    </LinksContainer>
                </LowerContainer>
            </ProjectRightContainer>
        </ProjectContainer>
    )
}

export default Project
