import React from 'react';
import FontAwesome from 'react-fontawesome';
import { NavbarToggler } from 'reactstrap';

import styles from './styles.scss';

const Toggler = ({ toggle }) => {
    return (
        <NavbarToggler className={styles.button} onClick={toggle}>
            <FontAwesome name="bars" color="black" />
            <p className={styles.text}>
                Menu
            </p>
        </NavbarToggler>
    );
};

export default Toggler;
