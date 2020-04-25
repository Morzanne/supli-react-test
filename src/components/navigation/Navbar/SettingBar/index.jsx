import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.scss';

const SettingBar = () => (
    <div className={styles.wrapper}>
        <div>
            <div>
                <FontAwesomeIcon icon={faEllipsisH} />
            </div>
            <span className={styles.iconTitle}>
                <a href="#">
                    OTHER
                </a>
            </span>
        </div>
    </div>
)

export default SettingBar;