import React from 'react';
import { Navbar, Container, Row, Col } from 'reactstrap';
import styles from './styles.module.scss';
import Toggler from './Toggler';
import SearchBarToggler from './SearchBarToggle';
import linkedin from '../../../images/linkedin.png'
import Img from '../../common/Img';
import SocialInteractionBar from './SocialInteractionBar';

const NavigationBar = ({ toggle, isOpen, toggleSearchBar, messagesCount }) => (
    <Navbar
        light
        expand="lg"
        className={styles.navBar}
    >
        <div className={styles.togglerWrapper}>
            <div>
                <Toggler toggle={toggle} />
            </div>
            <div className={styles.searchBarToggler}>
                <SearchBarToggler toggle={toggleSearchBar} />
            </div>
        </div>
        <Container fluid>
            <Row className={styles.wrapper}>
                <Col xs={3} className={styles.linkeDinLogoWrapper}>
                    <div>
                        <a href="#">
                            <Img src={linkedin} alt="linkedin logo" className={styles.linkedin} />
                        </a>
                    </div>
                </Col>
                <Col xs={3}>
                    <SocialInteractionBar messagesCount={messagesCount} />
                </Col>
            </Row>
        </Container >
    </Navbar >
)

export default NavigationBar;