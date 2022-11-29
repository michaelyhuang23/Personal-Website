import styles from '../styles/Tooltip.module.css'

const Tooltip = ({children, text}) => {
    return (
        <span className={styles.tooltip}>{children}<span className={styles.tooltiptext}>{text}</span></span>
    )
}

export default Tooltip