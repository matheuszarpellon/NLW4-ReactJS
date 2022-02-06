import styles from './styles.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/matheuszarpellon.png" alt="Matheus Zarpellon" />
            <div>
                <strong>Matheus Zarpellon</strong>
                <p> 
                    <img src="icons/level.svg" alt="level" />
                    Level 1 
                </p>
            </div>
        </div>
    )
}