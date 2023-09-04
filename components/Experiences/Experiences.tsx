import styles from "./Experiences.module.scss";

import DATA from "../../data.json";

interface Stack {
    type: string;
    technologies: string[];
    points: string[];
}

interface Experience {
    name: string;
    type: string;
    period: string;
    organisation: string;
    url: {
        text: string;
        link: string;
    };
    description: string;
    stack?: Stack[];
    points?: string[];
}

type Required<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
    {
        [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
    }[Keys];

const Experiences = (): JSX.Element => {
    return (
        <article className={styles.Experiences}>
            <h2 className='title'>EXPERIENCE</h2>
            <ul>
                {DATA.experiences.map((e: Required<Experience, "stack" | "points">, i: number) => {
                    return (
                        <li key={`experiences-${i}`}>
                            <h3>
                                {e.name} <em>({e.type})</em> | <span>{e.period}</span>
                            </h3>
                            <h4>{e.organisation}</h4>
                            <a href={e.url.link} target='_blank' rel='noopener noreferrer'>
                                <i className='fa-regular fa-link-horizontal'></i> {e.url.text}
                            </a>
                            <p>{e.description}</p>

                            {e.stack != undefined &&
                                e.points == undefined &&
                                e.stack.map((s: Stack, i: number) => (
                                    <div key={`experience-stack-${i}`}>
                                        <span>
                                            {s.type} |
                                            <em>
                                                &nbsp;
                                                {s.technologies.map((t: string, i: number) =>
                                                    s.technologies.length - 1 != i ? <>{t} &bull; </> : t
                                                )}
                                            </em>
                                        </span>
                                        <ul>
                                            {s.points.map((p: string, i: number) => (
                                                <li key={`experience-stack-points-${i}`}>{p}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}

                            {e.points != undefined && e.stack == undefined && (
                                <ul>
                                    {e.points.map((p: string, i: number) => (
                                        <li key={`experience-points-${i}`}>{p}</li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </article>
    );
};

export default Experiences;
