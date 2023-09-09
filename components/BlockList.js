import styles from '../styles/project.module.css'

const BlockList = ({blocks}) => {
    return (
        <div className={styles.flexContainer}>
            {blocks}
        </div>        
    )
}

export default BlockList