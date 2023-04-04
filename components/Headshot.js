import styles from "../styles/index.module.css";

const Headshot = ({title, url}) => {
    return (
        <div className={styles.headshot}>
        <img src="/photo.jpg" className={styles.headshotImg}></img>
        <p>I would love to chat if you are interested in AI or alignment work, or philosophy!</p>
        <ul>
            <li>Twitter: <a href="https://twitter.com/michael_yhuang">@michael_yhuang</a></li>
            <li>Discord: Michael-H#4622</li>
            <li>Email: michaelyhuang23 at gmail dot com</li>
        </ul>
        </div>
    )
}

export default Headshot