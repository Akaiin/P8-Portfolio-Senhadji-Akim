import styled from 'styled-components'

const ProjectImage = styled.img`
    border-radius: 0px 5px 5px 0px;
    width: 455px;
    height: 249px;
`

function Project({ image, title, children, tags, links }) {
    return (
        <div>
            <ProjectImage src={image} alt={title}></ProjectImage>
            <div>
                <h3>{title}</h3>
                <p>{children}</p>
            </div>
            <div></div>
            <div>
                <ul>{tags && tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            </div>
            <div>
                {links &&
                    links.map((link) => (
                        <a href={link.url} target="_blank" key={link.url}>
                            {link.icon}
                        </a>
                    ))}
            </div>
        </div>
    )
}

export default Project
