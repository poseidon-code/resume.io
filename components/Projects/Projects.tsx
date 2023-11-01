import { Fragment } from "react";

import styles from "./Projects.module.scss";

import DATA from "../../data.json";

interface Projects {
    name: string;
    technologies: string[];
    urls: {
        text: string;
        link: string;
    }[];
    description: string;
    points: string[];
}

const Projects = () => {
    return (
        <article className={styles.Projects}>
            <h2 className='title'>PROJECTS</h2>
            <ul>
                {DATA.projects.map((p: Projects, i: number) => (
                    <li key={`projects-${i}`}>
                        <h3>
                            {p.name} |
                            <span>
                                &nbsp;
                                {p.technologies.map((t: string, i: number) =>
                                    p.technologies.length - 1 != i ? (
                                        <Fragment key={`project-technologies-${i}`}>{t} &bull;&nbsp;</Fragment>
                                    ) : (
                                        t
                                    )
                                )}
                            </span>
                        </h3>

                        {p.urls.map((u, i: number) => (
                            <a key={`project-url-${i}`} href={u.link} target='_blank' rel='noopener noreferrer'>
                                <i className='fa-regular fa-link-horizontal'></i>
                                &nbsp;{u.text}
                            </a>
                        ))}

                        <p>{p.description}</p>

                        <ul>
                            {p.points.map((p: string, i: number) => (
                                <li key={`project-point-${i}`}>{p}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </article>
    );
};

export default Projects;
