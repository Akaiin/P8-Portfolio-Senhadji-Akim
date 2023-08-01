import styled from 'styled-components'
import { projects } from '../../data/projects'
import Project from '../Project'

const ProjectSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f2f2f2;
    padding-bottom: 120px;
`

const ProjectTitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 120px;
    margin-bottom: 50px;
`

const ProjectBar = styled.div`
    border: solid 3px black;
    width: 375px;
    height: 1px;
`

const ProjectTitle = styled.h2`
    font-size: 36px;
`

function ProjectContainer() {
    return (
        <ProjectSection>
            <ProjectTitleContainer>
                <ProjectBar></ProjectBar>
                <ProjectTitle>Featured Project</ProjectTitle>
                <ProjectBar></ProjectBar>
            </ProjectTitleContainer>
            {projects.map((project, index) => (
                <Project
                    key={index}
                    title={project.title}
                    image={project.image}
                    tags={project.tags}
                    links={project.links}
                >
                    {project.description}
                </Project>
            ))}
        </ProjectSection>
    )
}

export default ProjectContainer
