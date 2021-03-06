import React from 'react';
import PT from 'prop-types';

import { Row, Col } from 'reactstrap';

import { Card, CardHeader, CardBody } from '../../common/card/index';

import styles from './styles.module.scss';
import Visitor from './Visitor';
import { User } from '../../../data/models/User/user';

export const VisitorBoard = ({ user }) => {

    return (
        <Card className={styles.card}>
            <CardHeader className={styles.cardHeader}>
                <div className={styles.row}>
                    <div className={styles.title}>VISITORS</div>
                    <a href="#!" className={styles.link}>
                        VIEW ALL
                </a>
                </div>
            </CardHeader>
            <CardBody className={styles.cardBody}>
                <Row className={styles.wrapper}>
                    {user.visitors && user.visitors.map((visitor, index) => (
                        <Col xs={6} md={12} key={index} className={styles.visitorWrapper}>
                            <Visitor visitor={visitor} />
                        </Col>
                    ))}
                </Row>

            </CardBody>

        </Card>
    )
}

VisitorBoard.propTypes = {
    visitors: PT.instanceOf(User)
}

export default VisitorBoard;