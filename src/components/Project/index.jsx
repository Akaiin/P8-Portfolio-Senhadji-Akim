function Project({ image, title, children, tags, links }) {
    return (
        <div>
            <img src={image} alt={title}></img>
            <div>
                <h3>{title}</h3>
                <p>{children}</p>
            </div>
            <div></div>
            <div>
                <ul>{tags && tags.map((tag) => <li>{tag}</li>)}</ul>
            </div>
            <div>
                {links &&
                    links.map((link) => (
                        <a href={link.url} target="_blank">
                            {link.icon}
                        </a>
                    ))}
            </div>
        </div>
    )
}

export default Project
