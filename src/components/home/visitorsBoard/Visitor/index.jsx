import React from 'react';
import { NavItem } from 'reactstrap';
import PT from 'prop-types';

import styles from './styles.module.scss';
import Img from '../../../common/Img';

const Visitor = ({ visitor }) => {
    return <NavItem className="p-0 d-flex align-items-center">
        <div className={styles.button}>
            <Img className={styles.profilePic} src={"https://i2.cdn.turner.com/cnnnext/dam/assets/140926165711-john-sutter-profile-image-large-169.jpg"} alt="profile picture" />
            <div className={styles.commandBlock}>
                <div className="d-inline-block">
                    <span>{visitor.firstName} {visitor.lastName} {' '}
                    </span>

                    <span className={styles.message}>
                        {visitor.profileResume}
                    </span>
                </div>
            </div>
        </div>
    </NavItem>
}

Visitor.propTypes = {
    user: PT.object
}


export default Visitor;