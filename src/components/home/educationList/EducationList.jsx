import React from 'react'
import PT from 'prop-types';

import { Card, CardHeader, CardBody } from '../../common/card/index';
import { Row, Col } from 'reactstrap';

import { User } from '../../../data/models/User/user';

import styles from './styles.module.scss';
import Education from './Education';

const EducationList = ({ user }) => {
    return (
        <Card className={styles.card}>
            <CardHeader className={styles.cardHeader}>
                <Row className={styles.row}>
                    <div className={styles.title}>Education</div>
                </Row>
            </CardHeader>
            <CardBody className={styles.cardBody}>
                <Row>
                    <div className={styles.resumeText}>
                        {user.educations && user.educations.map((education, index) => (
                            <Col key={index} xs={12}>
                                <Education education={education} />
                            </Col>
                        ))}
                    </div>
                </Row>
            </CardBody>
        </Card>
    )
}

EducationList.propTypes = {
    user: PT.instanceOf(User)
}

export default EducationList