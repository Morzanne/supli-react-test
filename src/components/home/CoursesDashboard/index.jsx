import React from 'react';
import { Row, Col } from 'reactstrap';

import { Card, CardHeader, CardBody, CardFooter } from '../../common/card/index';


import styles from './styles.module.scss';
import VideoPlayer from '../../common/Video';

export const CoursesDashboard = ({ courses }) => {
    return (
        <Card className={styles.card}>
            <CardHeader className={styles.cardHeader}>
                <div className={styles.row}>
                    <div className={styles.title}>YOU MAY LIKE THESE COURSES</div>
                </div>
            </CardHeader>
            <CardBody className={styles.cardBody}>
                <Row>
                    {courses && courses.map((course, index) => (
                        <Col key={index} xs={12} md={12} className={styles.courseWrapper}>
                            <div className={styles.commandBlock}>
                                <VideoPlayer url={course.video} config={{ youtube: { playerVars: { controls: 0 } } }}
                                    height="80px" width="100px" className={styles.video} />
                                <div className="d-inline-block">
                                    <span>{course.title} {' '}
                                    </span>
                                    <span className={styles.message}>
                                        {course.viewerCount} viewers
                                    </span>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </CardBody>
            <CardFooter className={styles.footer}>
            <a href="#"><span>SEE ALL RECOMMENDATIONS</span></a>
            </CardFooter>
        </Card>
    )
}

export default CoursesDashboard;