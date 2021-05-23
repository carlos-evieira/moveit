import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {

    const { level } = useContext(ChallengesContext)

    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/60490237?s=460&u=eaaadcec4ef4d83f8cb5aa0b82d8e4f8d983e4d9&v=4" alt="Carlos Eduardo Vieira"/>
            <div>
                <strong>Carlos Eduardo Vieira</strong>
                    <p>
                        <img src="icons/level.svg" alt="level"/>
                        {level}
                    </p>
            </div>
        </div>
    )
}