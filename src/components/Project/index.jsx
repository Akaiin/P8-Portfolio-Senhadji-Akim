import styled from 'styled-components'

const ProjectContainer = styled.div`
    display: flex;
    margin-bottom: 70px;
    gap: 20px;
`

const ProjectImage = styled.img`
    border-radius: 0px 5px 5px 0px;
    width: 455px;
    height: 249px;
`

const ProjectTitle = styled.h3`
    font-size: 30px;
`

const ProjectText = styled.p`
    font-size: 16px;
    width: 455px;
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
    font-size: 14px;
`

const LinksContainer = styled.div`
    display: flex;
    gap: 5px;
`

const LowerContainer = styled.div`
    display: flex;
    flex-direction: column;
`

function Project({ image, title, children, tags, links }) {
    return (
        <ProjectContainer>
            <ProjectImage src={image} alt={title}></ProjectImage>
            <div>
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
                                <a href={link.url} target="_blank" key={link.url}>
                                    {link.icon}
                                </a>
                            ))}
                    </LinksContainer>
                </LowerContainer>
            </div>
        </ProjectContainer>
    )
}

export default Project
