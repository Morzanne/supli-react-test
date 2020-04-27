import React from 'react'
import PT from 'prop-types';

import { Card, CardHeader, CardBody, CardFooter } from '../../../common/card/index';
import { Row, Col } from 'reactstrap';

import { User } from '../../../../data/models/User/user';

import styles from './styles.module.scss';
import SkillCard from '../SkillCard';

const SkillDashboard = ({ user }) => {
    return (
        <Card className={styles.card}>
            <CardHeader className={styles.cardHeader}>
                <Row>
                    <div className={styles.title}>Skills / Endoresments</div>
                </Row>
            </CardHeader>
            <CardBody className={styles.cardBody}>
                <Row>
                    {user.skills && user.skills.map((skill, index) => (
                        <Col key={index} xs={6} xl={4}>
                            <SkillCard skill={skill} />
                        </Col>
                    ))}
                </Row>
            </CardBody>
            <CardFooter className={styles.footer}>
            <span><a href="#">SHOW ALL (17)</a></span>
            </CardFooter>
        </Card>
    )
}

SkillDashboard.propTypes = {
    user: PT.instanceOf(User)
}

export default SkillDashboard