import Block from '../components/Block';
import BlockList from '../components/BlockList'
import styles from '../styles/project.module.css'

export default function project() {
    const items = [
        {
            title: "Effective Automated Stellar Substructure Detection using the Supervised Neural Clustering Algorithm",
            description: "Mentored by Prof. Lina Necib, Xiaowei Ou, and Tri Nguyen at the MIT Kavli Institute for Astrophysics and Space Research, I developed a novel Graph Neural Network based supervised clustering algorithm for identifying stellar substructure in the galactic halo. I worked on this project as part of the Research Science Institute (RSI) program.",
            link: "/RSI_2022_Paper.pdf",
        },
        {
            title: "Theoretically Efficient Parallel Density-Peaks Clustering",
            description: "Mentored by Shangdi Yu and Prof. Julian Shun at MIT CSAIL, I developed fast parallel algorithms for Density-Peaks Clustering and proved complexity results for my algorithms. I worked on this project under the MIT PRIMES program. Accepted to Joint Math Meetings'23.",
            link: "/PRIMES_2022_Paper.pdf",
        },
        {
            title: "Efficient Algorithms for Parallel Bi-core Decomposition",
            description: "Mentored by Jessica Shi and Prof. Julian Shun at MIT CSAIL, my partner and I developed a theoretically efficient parallel algorithm for bi-core decomposition and showed the P-completeness of the bi-core decomposition problem. I worked on this project under the MIT PRIMES program. Presented at Joint Math Meetings'22. Accepted to Symposium on Algorithmic Principles of Computer Systems'23.",
            link: "https://math.mit.edu/research/highschool/primes/materials/2021/Huang-Wang.pdf",
        },
        {
            title: "Few-shot object detection using cross-image attention",
            description: "Mentored by Prof. Nicholas Zufelt, I studied the literature of few-shot object detection and proposed an attention-based model for solving the few-shot detection task. I implemented the model in PyTorch using Detectron2 and performed experimentations on the COCO dataset. The project has been aborted since it was found that the proposed optimizations were not effective and more complex models that achieve new state-of-the-art results have since been proposed.",
        },
        {
            title: "Window Cleaning Drone",
            description: "Sponsored by the Abbot Academy Fund, I co-founded and led a small team to develop a drone system for cleaning windows by pressure spraying them. We built a flyable drone prototype. We also introduced a window detection method that utilizes the polarization property of windows. Research into the window detection method has been stalled due to the lack of data of windows with light polarization effects.",
            link: "https://www.youtube.com/channel/UCLi6intVTbcPPvfVxjtU4pg",
        },
        {
            title: "The Andover Computing Open",
            description: "Sponsored by the Abbot Academy Fund, I co-founded The Andover Computing Open (TACO). TACO organizes an annual Competitive Programming contest + workshop event for middle school and high school students.",
            link: "https://discord.gg/s5Wp2QaSCJ",
        },
        {
            title: "Sign Language Translator",
            description: "I am part of a four-person team developing the first machine learning model in the market to translate American Sign Language to English. The project has been stalled due to technical difficulties such as the lack of high quality training data.",
            link: "https://www.youtube.com/watch?v=VTq0qDmYpHw",
        },
        {
            title: "Song Recognizer",
            description: "I am part of a four-person team (the same one) that made an open source song recognizer. Our song recognizer functions similar to the popular app Shazam.",
            link: "https://github.com/michaelyhuang23/SongRecognition",
        },
        {
            title: "Faster RCNN Mask Detector",
            description: "I implemented a Faster RCNN machine learning model to detect if a person is properly wearing a mask. The project has been aborted because my ML skills were simply insufficient to handle a project of such scale at the time this project began.",
        },
        {
            title: "Hunger Games",
            description: "I made a 1st person PC-based shooting game that is partly based off of the book Hunger Games. Download the game.",
            link: "https://youtu.be/1YI9rlTFN74",
        },
        {
            title: "Elastic Space",
            description: "I made a 2D mobile game of flying a spaceship in space.",
            link: "https://michaelyhuang23.github.io/ElasticSpace-web",
        }
    ];

    const blocks = items.map((item, idx) => {
        return <Block key={idx} title={item.title} description={item.description} link={item.link}/>
    });

    return (
    <div className={styles.projectContainer}>
        <h1 className={styles.mainTitle}>Major Projects</h1>
        <BlockList blocks={blocks}/>
        <div className={styles.extra}>
        <h3 className={styles.title}>Webapps for you to poke around</h3>
        <ul>
        <li ><a className={styles.link} href="https://michaelyhuang23.github.io/ElasticSpace-web">Elastic Space Game</a></li>
        <li ><a className={styles.link} href="https://michaelyhuang23.github.io/Extinctathon-web">Extinctathon Game</a> -- It's a video game described inside the popular speculative sci-fi <i >Oryx and Crake</i></li>
        <li ><a className={styles.link} href="https://michaelyhuang23.github.io/The-Great-Gatsby">The Great Gatsby Fanfic</a></li>
        <li ><a className={styles.link} href="https://michaelyhuang23.github.io/Sound-Vis">Sound Visualization</a></li>
        <li ><a className={styles.link} href="https://michaelyhuang23.github.io/doodle-2-fourier">Convert hand-drawn doodle to functional form through Fourier Transform</a></li>
        </ul>
        </div>
        <a href="/resume.pdf" className={styles.resume}><h1 >Résumé</h1></a>
    </div>
    )
}