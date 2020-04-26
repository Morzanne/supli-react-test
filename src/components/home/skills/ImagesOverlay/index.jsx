import React from 'react'

import styles from './styles.module.scss';
import Img from '../../../common/Img';

const counts = [0, 1, 2, 3]

export const ImagesOverlay = () => {
    return (
        <div>
            {counts.map((count, key) => (
                <Img key={key} className={styles.profilePic} src={"https://i2.cdn.turner.com/cnnnext/dam/assets/140926165711-john-sutter-profile-image-large-169.jpg"} alt="profile picture" />
            )
            )}
        </div>
    )
}

export default ImagesOverlay