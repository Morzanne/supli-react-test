import React from 'react';
import cx from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faEdit, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.scss';

const Banner = () => {

    return (
        <div className={styles.wrapper}>
            <button className={cx('m-3', styles.uploadButton)}>
                <FontAwesomeIcon icon={faUpload} />
            </button>
            <div className="ml-auto m-3">
                <button className={styles.editButton}>
                    <FontAwesomeIcon icon={faEdit} />
                    <span className="ml-2">EDIT PROFILE</span>
                </button>
                <button className={styles.settingButton}>
                    <FontAwesomeIcon icon={faEllipsisV} />
                </button>
            </div>
        </div>
    )
}

export default Banner;