import styles from "../styles/index.module.css";

const Headshot = ({title, url}) => {
    return (
        <img src="/photo.jpg" className={styles.headshot}></img>
    )
}

export default Headshot