import React from 'react';
import { NavItem } from 'reactstrap';
import PT from 'prop-types';
import cx from 'classnames';

import github from '../../../../images/github.png';
import styles from './styles.module.scss';
import Img from '../../../common/Img';

const extractYearOfEducationToString = (startYear, endYear) => {
    const start = startYear.getFullYear();
    const end = endYear.getFullYear();

    return start.toString().concat(" - ", end.toString())
}

const Education = ({ education }) => {
    return <NavItem className="p-0 d-flex align-items-center">
        <div className={styles.button}>
            <Img className={styles.schoolPic} src={github} alt="github pic" />
            <div className={styles.commandBlock}>
                <div className="d-inline-block">
                    <span>{education.location}
                    </span>

                    <span className={styles.message} >
                        {education.degreeName}
                    </span>
                    <span className={cx(styles.message, styles.praticalDate)}>
                        {extractYearOfEducationToString(education.startYear, education.endYear)}
                    </span>
                    <span className={styles.message}>
                        {education.summary}
                    </span>
                </div>
            </div>
        </div>
    </NavItem>
}

Education.propTypes = {
    education: PT.object
}


export default Education;