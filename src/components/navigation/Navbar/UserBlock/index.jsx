import React from 'react';
import { NavItem } from 'reactstrap';
import Img from '../../../common/Img';
import PT from 'prop-types';

import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { User } from '../../../../data/models/User/user';


const UserBlock = ({ user }) => {
    return <NavItem className="p-0 d-flex align-items-center">
        <div className={styles.button}>
            <Img className={styles.profilePic} src={"https://i2.cdn.turner.com/cnnnext/dam/assets/140926165711-john-sutter-profile-image-large-169.jpg"} alt="profile picture" />
            <div className={styles.commandBlock}>
                <div className="d-inline-block">
                    <span>{user.firstName} {user.lastName} {' '}
                    </span>

                    <span className={styles.message}>
                        <span className={styles.viewCount}>
                            {user.dailyViewsCount} views today
                        </span>
                        <span className={styles.statisticViewCount}>
                            {''}  + 32 {''}
                            <FontAwesomeIcon icon={faArrowUp} className={styles.arrow} />
                        </span>
                    </span>
                </div>
            </div>
        </div>
    </NavItem>
}

UserBlock.propTypes = {
    user: PT.instanceOf(User)
}


export default UserBlock;