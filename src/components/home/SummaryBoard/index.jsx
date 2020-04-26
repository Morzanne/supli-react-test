import React from 'react';
import { Row, Col } from 'reactstrap';
import PT from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faHashtag } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.scss';
import Img from '../../common/Img';
import { User } from '../../../data/models/User/user';

const SummaryDashboard = ({ user }) => {
    return <Row noGutters className={styles.row}>
        <Img className={styles.profilePic} src={"https://i2.cdn.turner.com/cnnnext/dam/assets/140926165711-john-sutter-profile-image-large-169.jpg"} alt="profile picture" />
        <Col xl={{ size: 9, offset: 3 }} lg={{size: 10, offset: 0}} className={styles.wrapper}>
            <Row>
                <Col>
                    <span className={styles.identity}>
                        {user.firstName} {user.lastName}
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faHashtag} color="orange" />
                    </span>
                </Col>
                <Col className={styles.locationWrapper}>
                    <span>
                        <FontAwesomeIcon icon={faLocationArrow} color="violet" />
                    </span>
                    <span className={styles.location}>
                        {user.location}
                    </span>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className={styles.profileResume}>
                    {user.profileResume}
                </Col>
            </Row>
            <Row className={styles.buttonWrapper}>
                <div>
                    <button className={styles.infoButton}>CONTACT INFOS</button>
                </div>
                <div>
                    <button className={styles.connectionCount}>{user.connectionCount} CONNECTIONS</button>
                </div>
            </Row>
        </Col>
    </Row>
}

SummaryDashboard.propTypes = {
    user: PT.instanceOf(User)
}


export default SummaryDashboard;