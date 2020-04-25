import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRss, faUserFriends, faSuitcase, faCommentAlt, faBell } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.scss';

const SocialInteractionBar = ({ messagesCount }) => (
    <>
        <ul className={styles.iconList}>
            <li>
                <div>
                    <FontAwesomeIcon icon={faRss} />
                </div>
                <span className={styles.iconTitle}> FEED</span>
            </li>
            <li>
                <div>
                    <FontAwesomeIcon icon={faUserFriends} />
                </div>
                <span className={styles.iconTitle}> NETWORK</span>
            </li>
            <li>
                <div>
                    <FontAwesomeIcon icon={faSuitcase} />
                </div>
                <span className={styles.iconTitle}> JOBS</span>
            </li>
            <li>
                <div>
                    <FontAwesomeIcon icon={faCommentAlt} />
                    <span className={styles.messageCount}>{messagesCount}</span>
                </div>

                <span className={styles.iconTitle}>CHAT</span>
            </li>
            <li>
                <div>
                    <FontAwesomeIcon icon={faBell} />
                </div>
                <span className={styles.iconTitle}> NOTICES</span>
            </li>
        </ul>
    </>
)

export default SocialInteractionBar;