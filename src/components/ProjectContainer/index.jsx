import { forwardRef } from 'react'
import styled from 'styled-components'
import { projects } from '../../data/projects'
import Project from '../Project'
import SectionTitle from '../SectionTitle'

const ProjectSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    background: #f2f2f2;
    padding-bottom: 120px;
`

const ProjectsContainer = styled.div`
    @media screen and (max-width: 825px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
`

const ProjectContainer = forwardRef(function ProjectContainer({}, ref) {
    return (
        <ProjectSection ref={ref} id="project">
            <SectionTitle title={`Projets`} />
            <ProjectsContainer>
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        reverse={Number.isInteger(index / 2)}
                        title={project.title}
                        image={project.image}
                        tags={project.tags}
                        links={project.links}
                    >
                        {project.description}
                    </Project>
                ))}
            </ProjectsContainer>
        </ProjectSection>
    )
})
export default ProjectContainer
