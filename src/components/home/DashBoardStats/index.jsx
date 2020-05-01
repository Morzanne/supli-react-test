import React from 'react';
import { Row, Col } from 'reactstrap';
import PT from 'prop-types';

import { Card, CardHeader, CardBody } from '../../common/card/index'
import { User } from '../../../data/models/User/user';

import styles from './styles.module.scss';

export const DashBoardState = ({ user }) => {
    return (
        <Card className={styles.card}>
            <CardHeader className={styles.cardHeader}>

                <div className={styles.row}>
                    <div className={styles.title}>YOUR DASHBOARD</div>
                    <a href="#!" className={styles.link}>
                        GO TO STATS
                    </a>
                </div>
            </CardHeader>
            <CardBody className={styles.cardBody}>
                <Row>
                    <Col xs={4} md={12} className={styles.statWrapper}>
                        <span>
                            {user.dailyViewsCount}
                        </span>
                        <span className={styles.stat}>views today</span>
                    </Col>
                    <Col xs={4} md={12} className={styles.statWrapper}>
                        <span>
                            {user.postsViewCount}
                        </span>
                        <span className={styles.stat}>posts views</span>
                    </Col>
                    <Col xs={4} md={12} className={styles.statWrapper}>
                        <span>
                            {user.searchAppearanceCount}
                        </span>
                        <span className={styles.stat}>search appereances</span>

                    </Col>
                </Row>

            </CardBody>

        </Card>
    )
}

DashBoardState.propTypes = {
    user: PT.instanceOf(User)
}

export default DashBoardState;