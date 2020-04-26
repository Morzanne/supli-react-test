import React from 'react';
import { Row, Container, Col } from 'reactstrap';

import styles from './styles.module.scss';
import Banner from '../../components/home/Banner';
import { SummaryDashBoardContainer } from '../../components/home/SummaryBoard/SummaryDashboardContainer';

const HomePage = () => (
    <Container className={styles.wrapper} fluid>
        <Row>
            <Container fluid={"md"} className={styles.innerWrapper}>
                <Row>
                    <Container fluid={"md"}>
                        <Col xs={12} md={8}>
                            <Banner />
                            <div>
                                <SummaryDashBoardContainer />
                            </div>
                        </Col>
                    </Container>

                </Row>

            </Container>
        </Row>
    </Container>
)

export default HomePage;