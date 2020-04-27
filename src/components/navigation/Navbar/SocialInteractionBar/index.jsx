import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRss, faUserFriends, faSuitcase, faCommentAlt, faBell } from '@fortawesome/free-solid-svg-icons';
import Img from '../../../common/Img/index';
import linkedin from '../../../../images/linkedin.png';
import PT from 'prop-types';

import styles from './styles.module.scss';

const SocialInteractionBar = ({ messagesCount }) => (
    <>
        <ul className={styles.iconList}>
            <li>
                <a href="#">
                    <Img src={linkedin} alt="linkedin logo" className={styles.linkedin} />
                </a>
            </li>
            <li>
                <a href="#">
                    <div>
                        <FontAwesomeIcon icon={faRss} />
                    </div>
                    <span className={styles.iconTitle}> FEED</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <div>
                        <FontAwesomeIcon icon={faUserFriends} />
                    </div>
                    <span className={styles.iconTitle}> NETWORK</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <div>
                        <FontAwesomeIcon icon={faSuitcase} />
                    </div>
                    <span className={styles.iconTitle}> JOBS</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <div className={styles.messageIcon}>
                        <FontAwesomeIcon icon={faCommentAlt} />
                        <span className={styles.messageCount}>{messagesCount}</span>
                    </div>

                    <span className={styles.iconTitle}>CHAT</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <div>
                        <FontAwesomeIcon icon={faBell} />
                    </div>
                    <span className={styles.iconTitle}> NOTICES</span>
                </a>
            </li>
        </ul>
    </>
)

SocialInteractionBar.propTypes = {
    messagesCount: PT.number,
}

export default SocialInteractionBar;