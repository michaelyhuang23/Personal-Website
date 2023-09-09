import styles from '../styles/Chatbox.module.css'

const Chatbox = ({query, setQuery, result, onSubmit, loading}) => {
    return (        
        <div className={styles.chatBox}>
            <h3>Or ask my AI assistant:</h3>
            <form className={styles.inputForm} onSubmit={onSubmit}>
                <input
                    type="text"
                    className={styles.inputText}
                    name="question"
                    placeholder={"Enter a specific question about Michael"}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                {loading ? (<div className={styles.ldsCircle}><div></div></div>) : (<button type="submit" className={styles.inputButton} />)}
            </form>
            <p className={result==="" ? styles.outputBoxEmpty : styles.outputBox}>: {result}</p>
        </div>
    )
}

export default Chatbox