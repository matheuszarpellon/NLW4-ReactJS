import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext'
import styles from './styles.module.css'

export function Profile() {
    const {level} = useContext(ChallengesContext)
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/matheuszarpellon.png" alt="Matheus Zarpellon" />
            <div>
                <strong>Matheus Zarpellon</strong>
                <p> 
                    <img src="icons/level.svg" alt="level" />
                    Level {level} 
                </p>
            </div>
        </div>
    )
}