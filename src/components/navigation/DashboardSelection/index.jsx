import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col } from 'reactstrap';
import cx from 'classnames';

import DashboardNavTab from './DashboardNavTab/index';


import styles from './styles.module.scss';

const DashboardSelection = () => {

    const [tabType, setType] = useState("profile");


    const changeTabActive = useCallback((tabType) => {
        setType(tabType)
    }, [])

    useEffect(() => {
        changeTabActive(tabType)
    }, [changeTabActive, tabType])


    return (
        <div className={cx(styles.wrapper, "mb-4")}>
            <Container className={styles.container}>
                <Row className={styles.dashboardNavTabRow}>
                    <Col sm={4} className={styles.dashboardNavTabWrapper}>
                        <DashboardNavTab
                            type="profile"
                            active={tabType === "profile"}
                            title="PROFILE"
                            setActive={changeTabActive.bind(this)}
                        />
                    </Col>
                    <Col sm={4} className={styles.dashboardNavTabWrapper}>
                        <DashboardNavTab
                            type="activity"
                            active={tabType === "activity"}
                            title="ACTIVITY AND INTERESTS"
                            setActive={changeTabActive.bind(this)}
                        />
                    </Col>
                    <Col sm={4} className={styles.dashboardNavTabWrapper}>
                        <DashboardNavTab
                            type="articles"
                            active={tabType === "articles"}
                            title="ARTICLES (3)"
                            setActive={changeTabActive.bind(this)}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );

}

export default DashboardSelection;
