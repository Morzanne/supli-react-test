import React from 'react';
import { Row, Container, Col } from 'reactstrap';

import styles from './styles.module.scss';
import Banner from '../../components/home/Banner';
import { SummaryDashBoardContainer } from '../../components/home/SummaryBoard/SummaryDashboardContainer';
import UserProvider from '../../components/Providers/UserProvider';
import DashBoardState from '../../components/home/DashBoardStats';
import VisitorBoard from '../../components/home/visitorsBoard';

const HomePage = () => (
    <UserProvider>
        {({ user }) => (
            <Container className={styles.wrapper} fluid>
                <Row>
                    <Container fluid={"md"} className={styles.innerWrapper}>
                        <Container fluid={"md"}>
                            <Row>
                                <Row>
                                    <Col xs={12} md={8} className="mt-md-4 mb-4">
                                        <Col xs={12}>
                                            <Banner />
                                            <div>
                                                <SummaryDashBoardContainer user={user} />
                                            </div>
                                        </Col>
                                    </Col>
                                    <Col xs={12} md={4} className="h-auto mt-md-4 mb-4">
                                        <Col xs={12} className="h-100">
                                            <DashBoardState user={user} />
                                        </Col>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} md={8} className="mt-md-4 mb-4">
                                        NULL
                                </Col>
                                    <Col xs={12} md={4}>
                                        {user &&
                                            <Col xs={12}>
                                                <VisitorBoard user={user} />
                                            </Col>
                                        }
                                    </Col>
                                </Row>
                            </Row>
                        </Container>
                    </Container>
                </Row>
            </Container >
        )}
    </UserProvider>

)

export default HomePage;