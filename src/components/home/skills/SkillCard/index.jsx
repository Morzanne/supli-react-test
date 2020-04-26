import React from 'react'
import ImagesOverlay from '../ImagesOverlay';

import styles from './styles.module.scss';

const remainingEndoresments = recommandationCount => {
    return (recommandationCount - 4).toString();
}

const SkillCard = ({ skill }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.title}>
                    {skill.title}
                </div>
                <div className={styles.recommandationCount}>
                    {skill.recommandationCount}
                </div>
            </div>
            <div className={styles.endoresmentWrapper}>
                <ImagesOverlay />
                <span className={styles.remainingEndoresments}>+{remainingEndoresments(skill.recommandationCount)}</span>
            </div>
        </div>
    )
}


export default SkillCard