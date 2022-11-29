import styles from '../styles/project.module.css'

const Block = ({title, description, link}) => {
    return (
        <div className={styles.flexElement}>
            <h5 className={styles.title}>{link===undefined ? title : (<a href={link} className={styles.link}>{title}</a>)}</h5>
            <p className={styles.description}>{description}</p>
        </div>        
    )
}

export default Block
