import styles from '../styles/index.module.css'
import Tooltip from './Tooltip'


const Blurb = ({}) => {
    return (
        <>
        <div className={styles.blurb}>
            <h1>Hi!</h1>
            <p>
                I am <Tooltip text="Yihao Huang, 黄翊皓">Michael</Tooltip>! So what does that mean exactly? I don't know either and I'm still finding out. For now, I'm a high school student interested in <i>CS</i>, <i>physics</i>, <i>writing</i>, and more recently, <i>math</i>. I'm learning to do research. My past works have focused on <Tooltip text={"I did two years of research in parallel algorithms under the PRIMES program. In 2021, my partner and I developed a parallel algorithm for bi-core decomposition. In 2022, I developed a parallel clustering algorithm for Density-Peaks Clustering"}>algorithm designs</Tooltip> and <Tooltip text={"In 2021 Summer, I worked at Prof. Scheutz's Human Robot Interaction lab at Tuft University to integrate an object detector AI model into the robotics system. In 2022 Summer, under the Research Science Institute (RSI) program, I worked at Prof. Necib's astrophysics lab at MIT Kavli Institute to develop novel graph neural network based clustering algorithms for stellar substructure identification."}>applicative machine learning</Tooltip> in physics and robotics, but I'm hoping to get into machine learning research with a more mathematical taste in the future. I also enjoy writing about <Tooltip text={(<a href="https://intuitivephysics.me" className={styles.link}>Intuitive Physics</a>)}>physics</Tooltip> and <Tooltip text={(<a href="https://daylightreveries.substack.com" className={styles.link}>Daylight Reveries</a>)}>(political) philosophy</Tooltip> as a way to discharge my thoughts. 
            </p>
            <p>
                Just as <Tooltip text={(<img src="/venus.jpg"/>)}>Venus de Milo</Tooltip> would be incomplete without two slightly incongruous arms, a personal blurb would be deficient without an origin story. Way before doing research, I <Tooltip text="I did WRO, FLL, FTC, and VEX robotics (no I won't explain the acronyms). I led a robotics team in middle school and again now in high school.">fiddled with robotics</Tooltip>. When I was bored to hell in my room with nothing but a computer during the pandemic, I started doing <Tooltip text="I did USA Computing Olympiad and also some other smaller contests. I attended USACO camp in 2022 Summer. I also co-founded The Andover Computing Open, a student-run competitive programming contest.">competitive programming</Tooltip> (and also began physics blogging). It was through competitive programming that I was introduced to doing research in parallel algorithm designs. Then, I started doing more research, particularly in AI. <Tooltip text={"Some say humans have \"free will\". Others, myself included, are skeptical. We live in a deterministic universe with the only indeterminism introduced by quantum uncertainty. In a way, we are drifting in a windless ocean, subject to only the random flutterings of waves–––the will of the universe. Each decision we make is not so much an exercise of our free will, but a valuable experience to understand ourselves–––our most intimate ideas and dreams."}>By some will of the universe</Tooltip>, I came to the realization one day that we live in a very screwed up time with a lot of <Tooltip text="misaligned/unaligned artificial general intelligence, nuclear annihilation, climate change, e.t.c.">existential threats</Tooltip>. And that was when I began to find interest in (political) philosophy and writing. 
            </p>
        </div>
        <div style={{clear:'left'}}></div>
        </>
    )
}

export default Blurb