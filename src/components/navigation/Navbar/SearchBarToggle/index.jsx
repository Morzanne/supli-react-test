import React from 'react';
import FontAwesome from 'react-fontawesome'
import { NavbarToggler } from 'reactstrap';

import styles from './styles.scss';

const SearchBarToggler = ({ toggle }) => {
    return (
        <NavbarToggler className={styles.button} onClick={toggle}>
            <FontAwesome name="search" />
            <p className={styles.text}>
                TROLLI
      </p>
        </NavbarToggler>
    );
};

export default SearchBarToggler;
