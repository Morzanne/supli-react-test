import React from 'react'

import linkedin from '../../images/linkedin.png';
import { Container, Col, Row } from 'reactstrap';
import NavigationBlock from './NavigationBlock';
import Img from '../common/Img';

import styles from './styles.module.scss';


export const Footer = () => {
    return (
        <Container fluid>
            <Container>
                <Row>
                <Col xs={12} md={1} className={styles.linkeDinWrapper}>
                    <Img src={linkedin} alt="linkedin logo" className={styles.linkedin} />
                </Col>
                <Col xs={12} xl={6}>
                    <NavigationBlock />
                </Col>
                </Row>
            </Container>
        </Container >
    )
}

export default Footer;