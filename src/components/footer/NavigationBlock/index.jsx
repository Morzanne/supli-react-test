import React from 'react'

import { Card, CardHeader, CardBody } from '../../common/card/index';
import { Row, Col } from 'reactstrap';


import styles from './styles.module.scss';

const NavigationBlock = () => {
    return (
        <Card className={styles.card}>
            <CardHeader className={styles.cardHeader}>
                <Row className={styles.row}>
                    <div className={styles.title}>Navigation</div>
                </Row>
            </CardHeader>
            <CardBody className={styles.cardBody}>
                <Row>
                    <Col xs={12} sm={6} md={4}>
                        <ul className={styles.listWrapper}>
                            <li>
                                <a href="#!">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    Advertising
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    Small Business
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <ul className={styles.listWrapper}>
                            <li>
                                <a href="#!">
                                    Talent Solutions
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    Marketing Solutions
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    Sales Solutions
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    Safery Center
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <ul className={styles.listWrapper}>
                            <li>
                                <a href="#!">
                                    Community Guidelines
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    Privacy and Terms
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    Mobile App
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}
export default NavigationBlock