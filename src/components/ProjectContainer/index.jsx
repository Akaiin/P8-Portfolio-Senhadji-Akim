import styled from 'styled-components'
import Project from '../Project'

const ProjectTitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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
        <section>
            <ProjectTitleContainer>
                <ProjectBar></ProjectBar>
                <ProjectTitle>Featured Project</ProjectTitle>
                <ProjectBar></ProjectBar>
                <Project
                    title={'Projet-Estate'}
                    links={[
                        {
                            url: 'https://github.com/Akaiin/Projet-estate',
                            icon: <i class="fa-brands fa-github"></i>,
                        },
                        {
                            url: 'https://akaiin.github.io/Projet-estate/',
                            icon: <i class="fa-solid fa-up-right-from-square"></i>,
                        },
                    ]}
                >
                    Ici est mon projet estate que j'ai crée lors de mon apprentissage du code du maitre pampy
                    qui ma appris le code
                </Project>
            </ProjectTitleContainer>
        </section>
    )
}

export default ProjectContainer
