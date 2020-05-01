import React from 'react';
import { Navbar, Container, Col } from 'reactstrap';
import styles from './styles.module.scss';
import linkedin from '../../../images/linkedin.png'
import Img from '../../common/Img';
import SocialInteractionBar from './SocialInteractionBar';
import SearchFormContainer from './Searchbar/SearchForm/SearchFormContainer';
import { UserBlockContainer } from './UserBlock/UserBlockContainer';
import SettingBar from './SettingBar';
import InnerSearchBar from './InnerSearchBar';

import PT from 'prop-types';

const NavigationBar = ({ messagesCount }) => (
    <Navbar
        light
        expand="lg"
        className={styles.navBar}
    >
        <Container fluid>
            <Col xs={2} md={1} xl={2} className={styles.linkeDinLogoWrapper}>
                <div>
                    <a href="#!">
                        <Img src={linkedin} alt="linkedin logo" className={styles.linkedin} />
                    </a>
                </div>
            </Col>
            <Col xs={10} md={4} xl={3}>
                <SocialInteractionBar messagesCount={messagesCount} />
            </Col>
            <Col xs={12} md={2} className={styles.searchFormWrapper}>
                <SearchFormContainer />
            </Col>
            <Col md={4} xl={3} xxl={2} className={styles.userBlockWrapper}>
                <UserBlockContainer />
            </Col>
            <Col md={1} xl={2} className={styles.settingBarWrapper}>
                <SettingBar />
            </Col>
            <div className={styles.responsiveSearchBar}>
                <InnerSearchBar />
            </div>


        </Container >
    </Navbar >
)

NavigationBar.propTypes = {
    messagesCount: PT.number
}

export default NavigationBar;