import React from 'react'
import PT from 'prop-types';

import { Card, CardHeader, CardBody } from '../../common/card/index';
import { Row, Col } from 'reactstrap';

import { User } from '../../../data/models/User/user';
import { Experience } from './Experience'

import styles from './styles.module.scss';

const ExperienceList = ({ user }) => {
    return (
        <Card className={styles.card}>
            <CardHeader className={styles.cardHeader}>
                <Row className={styles.row}>
                    <div className={styles.title}>Experience</div>
                </Row>
            </CardHeader>
            <CardBody className={styles.cardBody}>
                <Row>
                    <div className={styles.resumeText}>
                        {user.experiences && user.experiences.map((experience, index) => (
                            <Col key={index} xs={12} className={styles.experienceWrapper}>
                                <Experience experience={experience} />
                            </Col>
                        ))}
                    </div>
                </Row>
            </CardBody>
        </Card>
    )
}

ExperienceList.propTypes = {
    user: PT.instanceOf(User)
}

export default ExperienceList