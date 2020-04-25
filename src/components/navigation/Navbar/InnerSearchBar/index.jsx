import React from 'react';
import { Row, Col, Container } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.scss';
import Img from '../../../common/Img';
import SearchFormContainer from '../Searchbar/SearchForm/SearchFormContainer';

const InnerSearchBar = () => (
    <Row className={styles.wrapper}>
        <Col xs={2}>
            <Img className={styles.profilePic} src={"https://i2.cdn.turner.com/cnnnext/dam/assets/140926165711-john-sutter-profile-image-large-169.jpg"} alt="profile picture" />
        </Col>
        <Col xs={8}>
            <SearchFormContainer />
        </Col>
        <Col xs={2}>
            <a href="#">
                <FontAwesomeIcon icon={faCog} />
            </a>
        </Col>
    </Row>
)

export default InnerSearchBar;