import React from 'react'
import PT from 'prop-types';

import { Card, CardHeader, CardBody, CardFooter } from '../../common/card/index';
import { Row, Col } from 'reactstrap';

import { User } from '../../../data/models/User/user';

import styles from './styles.module.scss';

const About = ({ user }) => {
    return (
        <Card className={styles.card}>
            <CardHeader className={styles.cardHeader}>
                <Row className={styles.row}>
                    <div className={styles.title}>About</div>
                </Row>
            </CardHeader>
            <CardBody className={styles.cardBody}>
                <Row>
                    <Col xs={12} className={styles.resumeText}>
                        {user.experienceResume}
                    </Col>
                </Row>
            </CardBody>
            <CardFooter className={styles.footer}>
                <span><a href="#">SEE MORE</a></span>
            </CardFooter>
        </Card>
    )
}

About.propTypes = {
    user: PT.instanceOf(User)
}

export default About