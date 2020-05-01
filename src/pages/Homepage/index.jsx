import React, { Fragment } from 'react';
import { Row, Container, Col } from 'reactstrap';

import styles from './styles.module.scss';
import Banner from '../../components/home/Banner';
import UserProvider from '../../components/Providers/UserProvider';
import DashBoardState from '../../components/home/DashBoardStats';
import VisitorBoard from '../../components/home/visitorsBoard';
import { CoursesDashboardContainer } from '../../components/home/CoursesDashboard/CoursesDashboardContainer';
import About from '../../components/home/About';
import Projects from '../../components/home/projects';
import SkillDashBoard from '../../components/home/skills/SkillDashboard/index'
import EducationList from '../../components/home/educationList/EducationList';
import ExperienceList from '../../components/home/experienceList';
import { NavbarContainer } from '../../components/navigation/Navbar/NavbarContainer';
import SummaryDashboard from '../../components/home/SummaryBoard';
import DashboardSelection from '../../components/navigation/DashboardSelection';

const HomePage = () => (
    <Fragment>
        <NavbarContainer />
        <UserProvider>
            {({ user, supliUser }) => (
                <Container className={styles.wrapper} fluid>
                    <Row>
                        <Container fluid={"md"} className={styles.innerWrapper}>
                            <Container fluid={"md"}>
                                <Row>
                                    <Row noGutters>
                                        <Col xs={12} md={8} className="mt-md-4">
                                            <Col xs={12}>
                                                <Banner />
                                                <div>
                                                    <SummaryDashboard user={user} supliUser={supliUser} />
                                                </div>
                                            </Col>
                                        </Col>
                                        <Col xs={12} md={4} className="h-auto mt-4">
                                            <Col xs={12} className="h-100">
                                                <DashBoardState user={user} />
                                            </Col>

                                        </Col>
                                    </Row>
                                    <Row noGutters>
                                        <Col xs={12} md={8} className="mt-md-4">
                                            <Col xs={12} className="d-none d-xl-block">
                                                <DashboardSelection />
                                            </Col>
                                            <Col xs={12} className="mb-4">
                                                <About user={user} />
                                            </Col>
                                            <Col xs={12} className="mt-md-4 mb-4">
                                                <Projects user={user} />
                                            </Col>
                                            <Col xs={12} className="mt-md-4 mb-4">
                                                <SkillDashBoard user={user} />
                                            </Col>
                                            <Col xs={12} className="mt-md-4 mb-4">
                                                <ExperienceList user={user} />
                                            </Col>
                                            <Col xs={12} className="mt-md-4 mb-4">
                                                <EducationList user={user} />
                                            </Col>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <Col xs={12} className="mt-md-4 mb-4" >
                                                <VisitorBoard user={user} />
                                            </Col>
                                            <Col xs={12} className="mt-md-4 mb-4">
                                                <CoursesDashboardContainer />
                                            </Col>
                                        </Col>
                                    </Row>
                                </Row>
                            </Container>
                        </Container>
                    </Row>
                </Container >
            )}
        </UserProvider>

    </Fragment>
)

export default HomePage;