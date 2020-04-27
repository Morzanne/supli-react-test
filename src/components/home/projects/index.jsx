import React from 'react'
import PT from 'prop-types';

import { Card, CardHeader, CardBody, CardFooter } from '../../common/card/index';
import { Row, Col } from 'reactstrap';

import { User } from '../../../data/models/User/user';

import styles from './styles.module.scss';
import Project from './Project';

const Projects = ({ user }) => {
    return (
        <Card className={styles.card}>
            <CardHeader className={styles.cardHeader}>
                <Row className={styles.row}>
                    <div className={styles.title}>
                        <span>
                            Projects
                        </span>
                        {'  '}
                        <span className={styles.projectCount}>3 of 12</span>
                    </div>
                </Row>
            </CardHeader>
            <CardBody className={styles.cardBody}>
                <Row>
                    {user.projects && user.projects.map((project, index) => (
                        <Col key={index} xs={12} sm={6} lg={4} className={styles.visitorWrapper}>
                            <Project projectUnit={project} />
                        </Col>
                    ))}
                </Row>
            </CardBody>
            <CardFooter className={styles.footer}>
                <a href="#"><span>SHOW ALL (12)</span></a>
            </CardFooter>
        </Card>
    )
}

Projects.propTypes = {
    user: PT.instanceOf(User)
}

export default Projects